// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the owner of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#admin_owner_id Resource#admin_owner_id}
  */
  readonly adminOwnerId?: string;
  /**
  * The ID of the app for the resource. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#app_id Resource#app_id}
  */
  readonly appId: string;
  /**
  * Custom request notification sent upon request approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#custom_request_notification Resource#custom_request_notification}
  */
  readonly customRequestNotification?: string;
  /**
  * A description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#description Resource#description}
  */
  readonly description?: string;
  /**
  * The duration for which access can be extended (in minutes). Deprecated, set the extension duration in the request_configuration you want it to apply to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#extensions_duration_in_minutes Resource#extensions_duration_in_minutes}
  */
  readonly extensionsDurationInMinutes?: number;
  /**
  * The name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#name Resource#name}
  */
  readonly name: string;
  /**
  * Information that defines the remote resource. This replaces the deprecated remote_id and metadata fields. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#remote_info Resource#remote_info}
  */
  readonly remoteInfo?: ResourceRemoteInfo;
  /**
  * A list of configurations for requests to this resource. If not provided, the default request configuration will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#request_configurations Resource#request_configurations}
  */
  readonly requestConfigurations: ResourceRequestConfigurations[] | cdktf.IResolvable;
  /**
  * A bool representing whether or not to require MFA for reviewers to approve requests for this resource. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#require_mfa_to_approve Resource#require_mfa_to_approve}
  */
  readonly requireMfaToApprove?: boolean | cdktf.IResolvable;
  /**
  * A bool representing whether or not to require MFA to connect to this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#require_mfa_to_connect Resource#require_mfa_to_connect}
  */
  readonly requireMfaToConnect?: boolean | cdktf.IResolvable;
  /**
  * The type of the resource. must be one of ["AWS_IAM_ROLE", "AWS_EC2_INSTANCE", "AWS_EKS_CLUSTER", "AWS_RDS_POSTGRES_CLUSTER", "AWS_RDS_POSTGRES_INSTANCE", "AWS_RDS_MYSQL_CLUSTER", "AWS_RDS_MYSQL_INSTANCE", "AWS_ACCOUNT", "AWS_SSO_PERMISSION_SET", "AWS_ORGANIZATIONAL_UNIT", "AZURE_MANAGEMENT_GROUP", "AZURE_RESOURCE_GROUP", "AZURE_SUBSCRIPTION", "AZURE_VIRTUAL_MACHINE", "AZURE_STORAGE_ACCOUNT", "AZURE_STORAGE_CONTAINER", "AZURE_SQL_SERVER", "AZURE_SQL_MANAGED_INSTANCE", "AZURE_SQL_DATABASE", "AZURE_SQL_MANAGED_DATABASE", "AZURE_USER_ASSIGNED_MANAGED_Identity", "AZURE_ENTRA_ID_ROLE", "AZURE_ENTERPRISE_APP", "CUSTOM", "CUSTOM_CONNECTOR", "DATABRICKS_ACCOUNT_SERVICE_PRINCIPAL", "GCP_ORGANIZATION", "GCP_BUCKET", "GCP_COMPUTE_INSTANCE", "GCP_FOLDER", "GCP_GKE_CLUSTER", "GCP_PROJECT", "GCP_CLOUD_SQL_POSTGRES_INSTANCE", "GCP_CLOUD_SQL_MYSQL_INSTANCE", "GCP_BIG_QUERY_DATASET", "GCP_BIG_QUERY_TABLE", "GCP_SERVICE_ACCOUNT", "GIT_HUB_REPO", "GIT_HUB_ORG_ROLE", "GIT_LAB_PROJECT", "GOOGLE_WORKSPACE_ROLE", "MONGO_INSTANCE", "MONGO_ATLAS_INSTANCE", "OKTA_APP", "OKTA_ROLE", "OPAL_ROLE", "OPAL_SCOPED_ROLE", "PAGERDUTY_ROLE", "TAILSCALE_SSH", "SALESFORCE_PERMISSION_SET", "SALESFORCE_PROFILE", "SALESFORCE_ROLE", "SNOWFLAKE_DATABASE", "SNOWFLAKE_SCHEMA", "SNOWFLAKE_TABLE", "WORKDAY_ROLE", "MYSQL_INSTANCE", "MARIADB_INSTANCE", "POSTGRES_INSTANCE", "TELEPORT_ROLE", "ILEVEL_ADVANCED_ROLE", "DATASTAX_ASTRA_ROLE", "COUPA_ROLE", "CURSOR_ORGANIZATION", "OPENAI_PLATFORM_PROJECT", "OPENAI_PLATFORM_SERVICE_ACCOUNT", "ANTHROPIC_WORKSPACE", "GIT_HUB_ORG", "ORACLE_FUSION_ROLE", "DEVIN_ORGANIZATION", "DEVIN_ROLE", "VAULT_SECRET", "VAULT_POLICY", "VAULT_OIDC_ROLE"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_type Resource#resource_type}
  */
  readonly resourceType: string;
  /**
  * Indicates the level of potential impact misuse or unauthorized access may incur. must be one of ["UNKNOWN", "CRITICAL", "HIGH", "MEDIUM", "LOW", "NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#risk_sensitivity_override Resource#risk_sensitivity_override}
  */
  readonly riskSensitivityOverride?: string;
  /**
  * Configuration for ticket propagation, when enabled, a ticket will be created for access changes related to the users in this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#ticket_propagation Resource#ticket_propagation}
  */
  readonly ticketPropagation?: ResourceTicketPropagation;
  /**
  * The visibility level of the entity. must be one of ["GLOBAL", "LIMITED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#visibility Resource#visibility}
  */
  readonly visibility: string;
  /**
  * Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#visibility_group_ids Resource#visibility_group_ids}
  */
  readonly visibilityGroupIds?: string[];
}
export interface ResourceLastSuccessfulSync {
}

export function resourceLastSuccessfulSyncToTerraform(struct?: ResourceLastSuccessfulSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function resourceLastSuccessfulSyncToHclTerraform(struct?: ResourceLastSuccessfulSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ResourceLastSuccessfulSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceLastSuccessfulSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceLastSuccessfulSync | undefined) {
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
export interface ResourceRemoteInfoAnthropicWorkspace {
  /**
  * The id of the workspace. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#workspace_id Resource#workspace_id}
  */
  readonly workspaceId?: string;
}

export function resourceRemoteInfoAnthropicWorkspaceToTerraform(struct?: ResourceRemoteInfoAnthropicWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function resourceRemoteInfoAnthropicWorkspaceToHclTerraform(struct?: ResourceRemoteInfoAnthropicWorkspace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAnthropicWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAnthropicWorkspace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAnthropicWorkspace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workspaceId = value.workspaceId;
    }
  }

  // workspace_id - computed: true, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}
export interface ResourceRemoteInfoAwsAccount {
  /**
  * The id of the AWS account. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#account_id Resource#account_id}
  */
  readonly accountId?: string;
  /**
  * The id of the AWS organizational unit. Required only if customer has OUs enabled. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#organizational_unit_id Resource#organizational_unit_id}
  */
  readonly organizationalUnitId?: string;
}

export function resourceRemoteInfoAwsAccountToTerraform(struct?: ResourceRemoteInfoAwsAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    organizational_unit_id: cdktf.stringToTerraform(struct!.organizationalUnitId),
  }
}


export function resourceRemoteInfoAwsAccountToHclTerraform(struct?: ResourceRemoteInfoAwsAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizational_unit_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAwsAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAwsAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._organizationalUnitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitId = this._organizationalUnitId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAwsAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._organizationalUnitId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._organizationalUnitId = value.organizationalUnitId;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // organizational_unit_id - computed: true, optional: true, required: false
  private _organizationalUnitId?: string; 
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }
  public set organizationalUnitId(value: string) {
    this._organizationalUnitId = value;
  }
  public resetOrganizationalUnitId() {
    this._organizationalUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdInput() {
    return this._organizationalUnitId;
  }
}
export interface ResourceRemoteInfoAwsEc2Instance {
  /**
  * The id of the AWS account. Required for AWS Organizations. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#account_id Resource#account_id}
  */
  readonly accountId?: string;
  /**
  * The instanceId of the EC2 instance. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#instance_id Resource#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The region of the EC2 instance. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#region Resource#region}
  */
  readonly region?: string;
}

export function resourceRemoteInfoAwsEc2InstanceToTerraform(struct?: ResourceRemoteInfoAwsEc2Instance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function resourceRemoteInfoAwsEc2InstanceToHclTerraform(struct?: ResourceRemoteInfoAwsEc2Instance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAwsEc2InstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAwsEc2Instance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAwsEc2Instance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._instanceId = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._instanceId = value.instanceId;
      this._region = value.region;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}
export interface ResourceRemoteInfoAwsEksCluster {
  /**
  * The id of the AWS account. Required for AWS Organizations. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#account_id Resource#account_id}
  */
  readonly accountId?: string;
  /**
  * The ARN of the EKS cluster. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#arn Resource#arn}
  */
  readonly arn?: string;
}

export function resourceRemoteInfoAwsEksClusterToTerraform(struct?: ResourceRemoteInfoAwsEksCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}


export function resourceRemoteInfoAwsEksClusterToHclTerraform(struct?: ResourceRemoteInfoAwsEksCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAwsEksClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAwsEksCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAwsEksCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._arn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._arn = value.arn;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface ResourceRemoteInfoAwsIamRole {
  /**
  * The id of the AWS account. Required for AWS Organizations. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#account_id Resource#account_id}
  */
  readonly accountId?: string;
  /**
  * The ARN of the IAM role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#arn Resource#arn}
  */
  readonly arn?: string;
}

export function resourceRemoteInfoAwsIamRoleToTerraform(struct?: ResourceRemoteInfoAwsIamRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}


export function resourceRemoteInfoAwsIamRoleToHclTerraform(struct?: ResourceRemoteInfoAwsIamRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAwsIamRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAwsIamRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAwsIamRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._arn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._arn = value.arn;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface ResourceRemoteInfoAwsOrganizationalUnit {
  /**
  * The id of the AWS organizational unit that is being created. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#organizational_unit_id Resource#organizational_unit_id}
  */
  readonly organizationalUnitId?: string;
  /**
  * The id of the parent organizational unit. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#parent_id Resource#parent_id}
  */
  readonly parentId?: string;
}

export function resourceRemoteInfoAwsOrganizationalUnitToTerraform(struct?: ResourceRemoteInfoAwsOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organizational_unit_id: cdktf.stringToTerraform(struct!.organizationalUnitId),
    parent_id: cdktf.stringToTerraform(struct!.parentId),
  }
}


export function resourceRemoteInfoAwsOrganizationalUnitToHclTerraform(struct?: ResourceRemoteInfoAwsOrganizationalUnit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    organizational_unit_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationalUnitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_id: {
      value: cdktf.stringToHclTerraform(struct!.parentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAwsOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAwsOrganizationalUnit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationalUnitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnitId = this._organizationalUnitId;
    }
    if (this._parentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentId = this._parentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAwsOrganizationalUnit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._organizationalUnitId = undefined;
      this._parentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._organizationalUnitId = value.organizationalUnitId;
      this._parentId = value.parentId;
    }
  }

  // organizational_unit_id - computed: true, optional: true, required: false
  private _organizationalUnitId?: string; 
  public get organizationalUnitId() {
    return this.getStringAttribute('organizational_unit_id');
  }
  public set organizationalUnitId(value: string) {
    this._organizationalUnitId = value;
  }
  public resetOrganizationalUnitId() {
    this._organizationalUnitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdInput() {
    return this._organizationalUnitId;
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }
}
export interface ResourceRemoteInfoAwsPermissionSet {
  /**
  * The ID of an AWS account to which this permission set is provisioned. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#account_id Resource#account_id}
  */
  readonly accountId?: string;
  /**
  * The ARN of the permission set. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#arn Resource#arn}
  */
  readonly arn?: string;
}

export function resourceRemoteInfoAwsPermissionSetToTerraform(struct?: ResourceRemoteInfoAwsPermissionSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}


export function resourceRemoteInfoAwsPermissionSetToHclTerraform(struct?: ResourceRemoteInfoAwsPermissionSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAwsPermissionSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAwsPermissionSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAwsPermissionSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._arn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._arn = value.arn;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface ResourceRemoteInfoAwsRdsCluster {
  /**
  * The id of the AWS account. Required for AWS Organizations. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#account_id Resource#account_id}
  */
  readonly accountId?: string;
  /**
  * The clusterId of the RDS cluster. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#cluster_id Resource#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The name of the database in the RDS cluster. This can be the value of the tag `opal:database-name` or the database name. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#database_name Resource#database_name}
  */
  readonly databaseName?: string;
  /**
  * The database engine for the RDS instance. Not Null; must be one of ["MYSQL", "POSTGRESQL"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#engine Resource#engine}
  */
  readonly engine?: string;
  /**
  * The region of the RDS cluster. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#region Resource#region}
  */
  readonly region?: string;
  /**
  * The resourceId of the RDS cluster. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAwsRdsClusterToTerraform(struct?: ResourceRemoteInfoAwsRdsCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    engine: cdktf.stringToTerraform(struct!.engine),
    region: cdktf.stringToTerraform(struct!.region),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAwsRdsClusterToHclTerraform(struct?: ResourceRemoteInfoAwsRdsCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAwsRdsClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAwsRdsCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAwsRdsCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._clusterId = undefined;
      this._databaseName = undefined;
      this._engine = undefined;
      this._region = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._clusterId = value.clusterId;
      this._databaseName = value.databaseName;
      this._engine = value.engine;
      this._region = value.region;
      this._resourceId = value.resourceId;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAwsRdsInstance {
  /**
  * The id of the AWS account. Required for AWS Organizations. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#account_id Resource#account_id}
  */
  readonly accountId?: string;
  /**
  * The instanceId of the RDS instance. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#instance_id Resource#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The region of the RDS instance. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#region Resource#region}
  */
  readonly region?: string;
  /**
  * The resourceId of the RDS instance. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAwsRdsInstanceToTerraform(struct?: ResourceRemoteInfoAwsRdsInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    region: cdktf.stringToTerraform(struct!.region),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAwsRdsInstanceToHclTerraform(struct?: ResourceRemoteInfoAwsRdsInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAwsRdsInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAwsRdsInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAwsRdsInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._instanceId = undefined;
      this._region = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._instanceId = value.instanceId;
      this._region = value.region;
      this._resourceId = value.resourceId;
    }
  }

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureEnterpriseApp {
  /**
  * The remote application identifier (service principal or application object ID). Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureEnterpriseAppToTerraform(struct?: ResourceRemoteInfoAzureEnterpriseApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureEnterpriseAppToHclTerraform(struct?: ResourceRemoteInfoAzureEnterpriseApp | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureEnterpriseAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureEnterpriseApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureEnterpriseApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureEntraIdRole {
  /**
  * The remote role identifier from Entra (object ID). Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureEntraIdRoleToTerraform(struct?: ResourceRemoteInfoAzureEntraIdRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureEntraIdRoleToHclTerraform(struct?: ResourceRemoteInfoAzureEntraIdRole | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureEntraIdRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureEntraIdRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureEntraIdRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureManagementGroup {
  /**
  * The ARM resource ID of the management group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureManagementGroupToTerraform(struct?: ResourceRemoteInfoAzureManagementGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureManagementGroupToHclTerraform(struct?: ResourceRemoteInfoAzureManagementGroup | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureManagementGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureManagementGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureManagementGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureResourceGroup {
  /**
  * The ARM resource ID of the resource group. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureResourceGroupToTerraform(struct?: ResourceRemoteInfoAzureResourceGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureResourceGroupToHclTerraform(struct?: ResourceRemoteInfoAzureResourceGroup | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureResourceGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureResourceGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureResourceGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureSqlDatabase {
  /**
  * The ARM resource ID of the SQL database. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureSqlDatabaseToTerraform(struct?: ResourceRemoteInfoAzureSqlDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureSqlDatabaseToHclTerraform(struct?: ResourceRemoteInfoAzureSqlDatabase | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureSqlDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureSqlDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureSqlDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureSqlManagedDatabase {
  /**
  * The ARM resource ID of the SQL managed database. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureSqlManagedDatabaseToTerraform(struct?: ResourceRemoteInfoAzureSqlManagedDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureSqlManagedDatabaseToHclTerraform(struct?: ResourceRemoteInfoAzureSqlManagedDatabase | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureSqlManagedDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureSqlManagedDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureSqlManagedDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureSqlManagedInstance {
  /**
  * The ARM resource ID of the SQL managed instance. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureSqlManagedInstanceToTerraform(struct?: ResourceRemoteInfoAzureSqlManagedInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureSqlManagedInstanceToHclTerraform(struct?: ResourceRemoteInfoAzureSqlManagedInstance | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureSqlManagedInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureSqlManagedInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureSqlManagedInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureSqlServer {
  /**
  * The ARM resource ID of the SQL server. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureSqlServerToTerraform(struct?: ResourceRemoteInfoAzureSqlServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureSqlServerToHclTerraform(struct?: ResourceRemoteInfoAzureSqlServer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureSqlServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureSqlServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureSqlServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureStorageAccount {
  /**
  * The ARM resource ID of the storage account. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureStorageAccountToTerraform(struct?: ResourceRemoteInfoAzureStorageAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureStorageAccountToHclTerraform(struct?: ResourceRemoteInfoAzureStorageAccount | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureStorageAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureStorageAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureStorageAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureStorageContainer {
  /**
  * The ARM resource ID of the storage container. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureStorageContainerToTerraform(struct?: ResourceRemoteInfoAzureStorageContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureStorageContainerToHclTerraform(struct?: ResourceRemoteInfoAzureStorageContainer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureStorageContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureStorageContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureStorageContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureSubscription {
  /**
  * The ARM resource ID of the subscription. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureSubscriptionToTerraform(struct?: ResourceRemoteInfoAzureSubscription | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureSubscriptionToHclTerraform(struct?: ResourceRemoteInfoAzureSubscription | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureSubscriptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureSubscription | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureSubscription | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureUserAssignedManagedIdentity {
  /**
  * The ARM resource ID of the user assigned managed identity. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureUserAssignedManagedIdentityToTerraform(struct?: ResourceRemoteInfoAzureUserAssignedManagedIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureUserAssignedManagedIdentityToHclTerraform(struct?: ResourceRemoteInfoAzureUserAssignedManagedIdentity | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureUserAssignedManagedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureUserAssignedManagedIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureUserAssignedManagedIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoAzureVirtualMachine {
  /**
  * The ARM resource ID of the virtual machine. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoAzureVirtualMachineToTerraform(struct?: ResourceRemoteInfoAzureVirtualMachine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoAzureVirtualMachineToHclTerraform(struct?: ResourceRemoteInfoAzureVirtualMachine | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoAzureVirtualMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoAzureVirtualMachine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoAzureVirtualMachine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
    }
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoCoupaRole {
  /**
  * The id of the role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_id Resource#role_id}
  */
  readonly roleId?: string;
}

export function resourceRemoteInfoCoupaRoleToTerraform(struct?: ResourceRemoteInfoCoupaRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function resourceRemoteInfoCoupaRoleToHclTerraform(struct?: ResourceRemoteInfoCoupaRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoCoupaRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoCoupaRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoCoupaRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
    }
  }

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}
export interface ResourceRemoteInfoCursorOrganization {
  /**
  * The id of the organization. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#org_id Resource#org_id}
  */
  readonly orgId?: string;
}

export function resourceRemoteInfoCursorOrganizationToTerraform(struct?: ResourceRemoteInfoCursorOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    org_id: cdktf.stringToTerraform(struct!.orgId),
  }
}


export function resourceRemoteInfoCursorOrganizationToHclTerraform(struct?: ResourceRemoteInfoCursorOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoCursorOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoCursorOrganization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoCursorOrganization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orgId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orgId = value.orgId;
    }
  }

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }
}
export interface ResourceRemoteInfoCustomConnector {
  /**
  * A bool representing whether or not the resource can have usage data. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#can_have_usage_events Resource#can_have_usage_events}
  */
  readonly canHaveUsageEvents?: boolean | cdktf.IResolvable;
  /**
  * The id of the resource in the end system. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#remote_resource_id Resource#remote_resource_id}
  */
  readonly remoteResourceId?: string;
}

export function resourceRemoteInfoCustomConnectorToTerraform(struct?: ResourceRemoteInfoCustomConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_have_usage_events: cdktf.booleanToTerraform(struct!.canHaveUsageEvents),
    remote_resource_id: cdktf.stringToTerraform(struct!.remoteResourceId),
  }
}


export function resourceRemoteInfoCustomConnectorToHclTerraform(struct?: ResourceRemoteInfoCustomConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_have_usage_events: {
      value: cdktf.booleanToHclTerraform(struct!.canHaveUsageEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remote_resource_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteResourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoCustomConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoCustomConnector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canHaveUsageEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.canHaveUsageEvents = this._canHaveUsageEvents;
    }
    if (this._remoteResourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteResourceId = this._remoteResourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoCustomConnector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canHaveUsageEvents = undefined;
      this._remoteResourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canHaveUsageEvents = value.canHaveUsageEvents;
      this._remoteResourceId = value.remoteResourceId;
    }
  }

  // can_have_usage_events - computed: true, optional: true, required: false
  private _canHaveUsageEvents?: boolean | cdktf.IResolvable; 
  public get canHaveUsageEvents() {
    return this.getBooleanAttribute('can_have_usage_events');
  }
  public set canHaveUsageEvents(value: boolean | cdktf.IResolvable) {
    this._canHaveUsageEvents = value;
  }
  public resetCanHaveUsageEvents() {
    this._canHaveUsageEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canHaveUsageEventsInput() {
    return this._canHaveUsageEvents;
  }

  // remote_resource_id - computed: true, optional: true, required: false
  private _remoteResourceId?: string; 
  public get remoteResourceId() {
    return this.getStringAttribute('remote_resource_id');
  }
  public set remoteResourceId(value: string) {
    this._remoteResourceId = value;
  }
  public resetRemoteResourceId() {
    this._remoteResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteResourceIdInput() {
    return this._remoteResourceId;
  }
}
export interface ResourceRemoteInfoDatabricksAccountServicePrincipal {
  /**
  * The application ID of the service principal. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#application_id Resource#application_id}
  */
  readonly applicationId?: string;
  /**
  * The resource ID of the service principal. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#resource_id Resource#resource_id}
  */
  readonly resourceId?: string;
}

export function resourceRemoteInfoDatabricksAccountServicePrincipalToTerraform(struct?: ResourceRemoteInfoDatabricksAccountServicePrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
  }
}


export function resourceRemoteInfoDatabricksAccountServicePrincipalToHclTerraform(struct?: ResourceRemoteInfoDatabricksAccountServicePrincipal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoDatabricksAccountServicePrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoDatabricksAccountServicePrincipal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoDatabricksAccountServicePrincipal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._resourceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._resourceId = value.resourceId;
    }
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // resource_id - computed: true, optional: true, required: false
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
}
export interface ResourceRemoteInfoDatastaxAstraRole {
  /**
  * The id of the role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_id Resource#role_id}
  */
  readonly roleId?: string;
}

export function resourceRemoteInfoDatastaxAstraRoleToTerraform(struct?: ResourceRemoteInfoDatastaxAstraRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function resourceRemoteInfoDatastaxAstraRoleToHclTerraform(struct?: ResourceRemoteInfoDatastaxAstraRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoDatastaxAstraRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoDatastaxAstraRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoDatastaxAstraRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
    }
  }

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}
export interface ResourceRemoteInfoDevinOrganization {
  /**
  * The id of the organization. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#org_id Resource#org_id}
  */
  readonly orgId?: string;
}

export function resourceRemoteInfoDevinOrganizationToTerraform(struct?: ResourceRemoteInfoDevinOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    org_id: cdktf.stringToTerraform(struct!.orgId),
  }
}


export function resourceRemoteInfoDevinOrganizationToHclTerraform(struct?: ResourceRemoteInfoDevinOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    org_id: {
      value: cdktf.stringToHclTerraform(struct!.orgId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoDevinOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoDevinOrganization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orgId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgId = this._orgId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoDevinOrganization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orgId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orgId = value.orgId;
    }
  }

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }
}
export interface ResourceRemoteInfoDevinRole {
  /**
  * The id of the role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_id Resource#role_id}
  */
  readonly roleId?: string;
}

export function resourceRemoteInfoDevinRoleToTerraform(struct?: ResourceRemoteInfoDevinRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function resourceRemoteInfoDevinRoleToHclTerraform(struct?: ResourceRemoteInfoDevinRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoDevinRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoDevinRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoDevinRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
    }
  }

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}
export interface ResourceRemoteInfoGcpBigQueryDataset {
  /**
  * The id of the dataset. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#dataset_id Resource#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The id of the project the dataset is in. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#project_id Resource#project_id}
  */
  readonly projectId?: string;
}

export function resourceRemoteInfoGcpBigQueryDatasetToTerraform(struct?: ResourceRemoteInfoGcpBigQueryDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function resourceRemoteInfoGcpBigQueryDatasetToHclTerraform(struct?: ResourceRemoteInfoGcpBigQueryDataset | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGcpBigQueryDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGcpBigQueryDataset | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGcpBigQueryDataset | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
    }
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface ResourceRemoteInfoGcpBigQueryTable {
  /**
  * The id of the dataset the table is in. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#dataset_id Resource#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * The id of the project the table is in. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#project_id Resource#project_id}
  */
  readonly projectId?: string;
  /**
  * The id of the table. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#table_id Resource#table_id}
  */
  readonly tableId?: string;
}

export function resourceRemoteInfoGcpBigQueryTableToTerraform(struct?: ResourceRemoteInfoGcpBigQueryTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function resourceRemoteInfoGcpBigQueryTableToHclTerraform(struct?: ResourceRemoteInfoGcpBigQueryTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGcpBigQueryTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGcpBigQueryTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGcpBigQueryTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: true, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: true, optional: true, required: false
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  public resetTableId() {
    this._tableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface ResourceRemoteInfoGcpBucket {
  /**
  * The id of the bucket. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#bucket_id Resource#bucket_id}
  */
  readonly bucketId?: string;
}

export function resourceRemoteInfoGcpBucketToTerraform(struct?: ResourceRemoteInfoGcpBucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_id: cdktf.stringToTerraform(struct!.bucketId),
  }
}


export function resourceRemoteInfoGcpBucketToHclTerraform(struct?: ResourceRemoteInfoGcpBucket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_id: {
      value: cdktf.stringToHclTerraform(struct!.bucketId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGcpBucketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGcpBucket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketId = this._bucketId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGcpBucket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketId = value.bucketId;
    }
  }

  // bucket_id - computed: true, optional: true, required: false
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  public resetBucketId() {
    this._bucketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }
}
export interface ResourceRemoteInfoGcpComputeInstance {
  /**
  * The id of the instance. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#instance_id Resource#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The id of the project the instance is in. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#project_id Resource#project_id}
  */
  readonly projectId?: string;
  /**
  * The zone the instance is in. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#zone Resource#zone}
  */
  readonly zone?: string;
}

export function resourceRemoteInfoGcpComputeInstanceToTerraform(struct?: ResourceRemoteInfoGcpComputeInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function resourceRemoteInfoGcpComputeInstanceToHclTerraform(struct?: ResourceRemoteInfoGcpComputeInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGcpComputeInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGcpComputeInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGcpComputeInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._projectId = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._projectId = value.projectId;
      this._zone = value.zone;
    }
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface ResourceRemoteInfoGcpFolder {
  /**
  * The id of the folder. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#folder_id Resource#folder_id}
  */
  readonly folderId?: string;
}

export function resourceRemoteInfoGcpFolderToTerraform(struct?: ResourceRemoteInfoGcpFolder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    folder_id: cdktf.stringToTerraform(struct!.folderId),
  }
}


export function resourceRemoteInfoGcpFolderToHclTerraform(struct?: ResourceRemoteInfoGcpFolder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    folder_id: {
      value: cdktf.stringToHclTerraform(struct!.folderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGcpFolderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGcpFolder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._folderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.folderId = this._folderId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGcpFolder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._folderId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._folderId = value.folderId;
    }
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }
}
export interface ResourceRemoteInfoGcpGkeCluster {
  /**
  * The name of the GKE cluster. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#cluster_name Resource#cluster_name}
  */
  readonly clusterName?: string;
}

export function resourceRemoteInfoGcpGkeClusterToTerraform(struct?: ResourceRemoteInfoGcpGkeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
  }
}


export function resourceRemoteInfoGcpGkeClusterToHclTerraform(struct?: ResourceRemoteInfoGcpGkeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGcpGkeClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGcpGkeCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGcpGkeCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterName = value.clusterName;
    }
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }
}
export interface ResourceRemoteInfoGcpOrganization {
  /**
  * The id of the organization. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#organization_id Resource#organization_id}
  */
  readonly organizationId?: string;
}

export function resourceRemoteInfoGcpOrganizationToTerraform(struct?: ResourceRemoteInfoGcpOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    organization_id: cdktf.stringToTerraform(struct!.organizationId),
  }
}


export function resourceRemoteInfoGcpOrganizationToHclTerraform(struct?: ResourceRemoteInfoGcpOrganization | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    organization_id: {
      value: cdktf.stringToHclTerraform(struct!.organizationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGcpOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGcpOrganization | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._organizationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationId = this._organizationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGcpOrganization | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._organizationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._organizationId = value.organizationId;
    }
  }

  // organization_id - computed: true, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }
}
export interface ResourceRemoteInfoGcpProject {
  /**
  * The id of the project. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#project_id Resource#project_id}
  */
  readonly projectId?: string;
}

export function resourceRemoteInfoGcpProjectToTerraform(struct?: ResourceRemoteInfoGcpProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function resourceRemoteInfoGcpProjectToHclTerraform(struct?: ResourceRemoteInfoGcpProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGcpProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGcpProject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGcpProject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface ResourceRemoteInfoGcpServiceAccount {
  /**
  * The email of the service account. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#email Resource#email}
  */
  readonly email?: string;
  /**
  * The id of the project the service account is in. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#project_id Resource#project_id}
  */
  readonly projectId?: string;
  /**
  * The id of the service account. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#service_account_id Resource#service_account_id}
  */
  readonly serviceAccountId?: string;
}

export function resourceRemoteInfoGcpServiceAccountToTerraform(struct?: ResourceRemoteInfoGcpServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function resourceRemoteInfoGcpServiceAccountToHclTerraform(struct?: ResourceRemoteInfoGcpServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGcpServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGcpServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGcpServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._projectId = undefined;
      this._serviceAccountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._projectId = value.projectId;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}
export interface ResourceRemoteInfoGcpSqlInstance {
  /**
  * The id of the SQL instance. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#instance_id Resource#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The id of the project the instance is in. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#project_id Resource#project_id}
  */
  readonly projectId?: string;
}

export function resourceRemoteInfoGcpSqlInstanceToTerraform(struct?: ResourceRemoteInfoGcpSqlInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function resourceRemoteInfoGcpSqlInstanceToHclTerraform(struct?: ResourceRemoteInfoGcpSqlInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGcpSqlInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGcpSqlInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGcpSqlInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._projectId = value.projectId;
    }
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface ResourceRemoteInfoGithubOrg {
  /**
  * The name of the organization. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#org_name Resource#org_name}
  */
  readonly orgName?: string;
}

export function resourceRemoteInfoGithubOrgToTerraform(struct?: ResourceRemoteInfoGithubOrg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    org_name: cdktf.stringToTerraform(struct!.orgName),
  }
}


export function resourceRemoteInfoGithubOrgToHclTerraform(struct?: ResourceRemoteInfoGithubOrg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    org_name: {
      value: cdktf.stringToHclTerraform(struct!.orgName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGithubOrgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGithubOrg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgName = this._orgName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGithubOrg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orgName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orgName = value.orgName;
    }
  }

  // org_name - computed: true, optional: true, required: false
  private _orgName?: string; 
  public get orgName() {
    return this.getStringAttribute('org_name');
  }
  public set orgName(value: string) {
    this._orgName = value;
  }
  public resetOrgName() {
    this._orgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
  }
}
export interface ResourceRemoteInfoGithubOrgRole {
  /**
  * The id of the role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_id Resource#role_id}
  */
  readonly roleId?: string;
}

export function resourceRemoteInfoGithubOrgRoleToTerraform(struct?: ResourceRemoteInfoGithubOrgRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function resourceRemoteInfoGithubOrgRoleToHclTerraform(struct?: ResourceRemoteInfoGithubOrgRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGithubOrgRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGithubOrgRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGithubOrgRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
    }
  }

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}
export interface ResourceRemoteInfoGithubRepo {
  /**
  * The name of the repository. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#repo_name Resource#repo_name}
  */
  readonly repoName?: string;
}

export function resourceRemoteInfoGithubRepoToTerraform(struct?: ResourceRemoteInfoGithubRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repo_name: cdktf.stringToTerraform(struct!.repoName),
  }
}


export function resourceRemoteInfoGithubRepoToHclTerraform(struct?: ResourceRemoteInfoGithubRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repo_name: {
      value: cdktf.stringToHclTerraform(struct!.repoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGithubRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGithubRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGithubRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repoName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repoName = value.repoName;
    }
  }

  // repo_name - computed: true, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }
}
export interface ResourceRemoteInfoGitlabProject {
  /**
  * The id of the project. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#project_id Resource#project_id}
  */
  readonly projectId?: string;
}

export function resourceRemoteInfoGitlabProjectToTerraform(struct?: ResourceRemoteInfoGitlabProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function resourceRemoteInfoGitlabProjectToHclTerraform(struct?: ResourceRemoteInfoGitlabProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGitlabProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGitlabProject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGitlabProject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface ResourceRemoteInfoGoogleWorkspaceRole {
  /**
  * The id of the role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_id Resource#role_id}
  */
  readonly roleId?: string;
}

export function resourceRemoteInfoGoogleWorkspaceRoleToTerraform(struct?: ResourceRemoteInfoGoogleWorkspaceRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function resourceRemoteInfoGoogleWorkspaceRoleToHclTerraform(struct?: ResourceRemoteInfoGoogleWorkspaceRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoGoogleWorkspaceRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoGoogleWorkspaceRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoGoogleWorkspaceRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
    }
  }

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}
export interface ResourceRemoteInfoIlevelAdvancedRole {
  /**
  * The name of the role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_name Resource#role_name}
  */
  readonly roleName?: string;
}

export function resourceRemoteInfoIlevelAdvancedRoleToTerraform(struct?: ResourceRemoteInfoIlevelAdvancedRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function resourceRemoteInfoIlevelAdvancedRoleToHclTerraform(struct?: ResourceRemoteInfoIlevelAdvancedRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoIlevelAdvancedRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoIlevelAdvancedRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoIlevelAdvancedRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleName = value.roleName;
    }
  }

  // role_name - computed: true, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}
export interface ResourceRemoteInfoOktaApp {
  /**
  * The id of the app. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#app_id Resource#app_id}
  */
  readonly appId?: string;
}

export function resourceRemoteInfoOktaAppToTerraform(struct?: ResourceRemoteInfoOktaApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
  }
}


export function resourceRemoteInfoOktaAppToHclTerraform(struct?: ResourceRemoteInfoOktaApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoOktaAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoOktaApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoOktaApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
    }
  }

  // app_id - computed: true, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }
}
export interface ResourceRemoteInfoOktaCustomRole {
  /**
  * The id of the custom role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_id Resource#role_id}
  */
  readonly roleId?: string;
}

export function resourceRemoteInfoOktaCustomRoleToTerraform(struct?: ResourceRemoteInfoOktaCustomRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function resourceRemoteInfoOktaCustomRoleToHclTerraform(struct?: ResourceRemoteInfoOktaCustomRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoOktaCustomRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoOktaCustomRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoOktaCustomRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
    }
  }

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}
export interface ResourceRemoteInfoOktaStandardRole {
  /**
  * The type of the standard role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_type Resource#role_type}
  */
  readonly roleType?: string;
}

export function resourceRemoteInfoOktaStandardRoleToTerraform(struct?: ResourceRemoteInfoOktaStandardRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_type: cdktf.stringToTerraform(struct!.roleType),
  }
}


export function resourceRemoteInfoOktaStandardRoleToHclTerraform(struct?: ResourceRemoteInfoOktaStandardRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_type: {
      value: cdktf.stringToHclTerraform(struct!.roleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoOktaStandardRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoOktaStandardRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleType = this._roleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoOktaStandardRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleType = value.roleType;
    }
  }

  // role_type - computed: true, optional: true, required: false
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  public resetRoleType() {
    this._roleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }
}
export interface ResourceRemoteInfoOpenaiPlatformProject {
  /**
  * The id of the project. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#project_id Resource#project_id}
  */
  readonly projectId?: string;
}

export function resourceRemoteInfoOpenaiPlatformProjectToTerraform(struct?: ResourceRemoteInfoOpenaiPlatformProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function resourceRemoteInfoOpenaiPlatformProjectToHclTerraform(struct?: ResourceRemoteInfoOpenaiPlatformProject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoOpenaiPlatformProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoOpenaiPlatformProject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoOpenaiPlatformProject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
    }
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface ResourceRemoteInfoOpenaiPlatformServiceAccount {
  /**
  * The id of the project for the service account. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#project_id Resource#project_id}
  */
  readonly projectId?: string;
  /**
  * The id of the service account. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#service_account_id Resource#service_account_id}
  */
  readonly serviceAccountId?: string;
}

export function resourceRemoteInfoOpenaiPlatformServiceAccountToTerraform(struct?: ResourceRemoteInfoOpenaiPlatformServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function resourceRemoteInfoOpenaiPlatformServiceAccountToHclTerraform(struct?: ResourceRemoteInfoOpenaiPlatformServiceAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoOpenaiPlatformServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoOpenaiPlatformServiceAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoOpenaiPlatformServiceAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._serviceAccountId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}
export interface ResourceRemoteInfoOracleFusionRole {
  /**
  * The id of the role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_id Resource#role_id}
  */
  readonly roleId?: string;
}

export function resourceRemoteInfoOracleFusionRoleToTerraform(struct?: ResourceRemoteInfoOracleFusionRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function resourceRemoteInfoOracleFusionRoleToHclTerraform(struct?: ResourceRemoteInfoOracleFusionRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoOracleFusionRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoOracleFusionRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoOracleFusionRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
    }
  }

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}
export interface ResourceRemoteInfoPagerdutyRole {
  /**
  * The name of the role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_name Resource#role_name}
  */
  readonly roleName?: string;
}

export function resourceRemoteInfoPagerdutyRoleToTerraform(struct?: ResourceRemoteInfoPagerdutyRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function resourceRemoteInfoPagerdutyRoleToHclTerraform(struct?: ResourceRemoteInfoPagerdutyRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoPagerdutyRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoPagerdutyRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoPagerdutyRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleName = value.roleName;
    }
  }

  // role_name - computed: true, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}
export interface ResourceRemoteInfoSalesforcePermissionSet {
  /**
  * The id of the permission set. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#permission_set_id Resource#permission_set_id}
  */
  readonly permissionSetId?: string;
}

export function resourceRemoteInfoSalesforcePermissionSetToTerraform(struct?: ResourceRemoteInfoSalesforcePermissionSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_set_id: cdktf.stringToTerraform(struct!.permissionSetId),
  }
}


export function resourceRemoteInfoSalesforcePermissionSetToHclTerraform(struct?: ResourceRemoteInfoSalesforcePermissionSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_set_id: {
      value: cdktf.stringToHclTerraform(struct!.permissionSetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoSalesforcePermissionSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoSalesforcePermissionSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionSetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionSetId = this._permissionSetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoSalesforcePermissionSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissionSetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissionSetId = value.permissionSetId;
    }
  }

  // permission_set_id - computed: true, optional: true, required: false
  private _permissionSetId?: string; 
  public get permissionSetId() {
    return this.getStringAttribute('permission_set_id');
  }
  public set permissionSetId(value: string) {
    this._permissionSetId = value;
  }
  public resetPermissionSetId() {
    this._permissionSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetIdInput() {
    return this._permissionSetId;
  }
}
export interface ResourceRemoteInfoSalesforceProfile {
  /**
  * The id of the permission set. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#profile_id Resource#profile_id}
  */
  readonly profileId?: string;
  /**
  * The id of the user license. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#user_license_id Resource#user_license_id}
  */
  readonly userLicenseId?: string;
}

export function resourceRemoteInfoSalesforceProfileToTerraform(struct?: ResourceRemoteInfoSalesforceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_id: cdktf.stringToTerraform(struct!.profileId),
    user_license_id: cdktf.stringToTerraform(struct!.userLicenseId),
  }
}


export function resourceRemoteInfoSalesforceProfileToHclTerraform(struct?: ResourceRemoteInfoSalesforceProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_license_id: {
      value: cdktf.stringToHclTerraform(struct!.userLicenseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoSalesforceProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoSalesforceProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._userLicenseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLicenseId = this._userLicenseId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoSalesforceProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileId = undefined;
      this._userLicenseId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileId = value.profileId;
      this._userLicenseId = value.userLicenseId;
    }
  }

  // profile_id - computed: true, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // user_license_id - computed: true, optional: true, required: false
  private _userLicenseId?: string; 
  public get userLicenseId() {
    return this.getStringAttribute('user_license_id');
  }
  public set userLicenseId(value: string) {
    this._userLicenseId = value;
  }
  public resetUserLicenseId() {
    this._userLicenseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLicenseIdInput() {
    return this._userLicenseId;
  }
}
export interface ResourceRemoteInfoSalesforceRole {
  /**
  * The id of the role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_id Resource#role_id}
  */
  readonly roleId?: string;
}

export function resourceRemoteInfoSalesforceRoleToTerraform(struct?: ResourceRemoteInfoSalesforceRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function resourceRemoteInfoSalesforceRoleToHclTerraform(struct?: ResourceRemoteInfoSalesforceRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoSalesforceRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoSalesforceRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoSalesforceRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
    }
  }

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}
export interface ResourceRemoteInfoSnowflakeDatabase {
  /**
  * The name of the database. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#database_name Resource#database_name}
  */
  readonly databaseName?: string;
}

export function resourceRemoteInfoSnowflakeDatabaseToTerraform(struct?: ResourceRemoteInfoSnowflakeDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
  }
}


export function resourceRemoteInfoSnowflakeDatabaseToHclTerraform(struct?: ResourceRemoteInfoSnowflakeDatabase | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoSnowflakeDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoSnowflakeDatabase | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoSnowflakeDatabase | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
    }
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }
}
export interface ResourceRemoteInfoSnowflakeSchema {
  /**
  * The name of the database the schema is in. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#database_name Resource#database_name}
  */
  readonly databaseName?: string;
  /**
  * The name of the schema. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#schema_name Resource#schema_name}
  */
  readonly schemaName?: string;
}

export function resourceRemoteInfoSnowflakeSchemaToTerraform(struct?: ResourceRemoteInfoSnowflakeSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
  }
}


export function resourceRemoteInfoSnowflakeSchemaToHclTerraform(struct?: ResourceRemoteInfoSnowflakeSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoSnowflakeSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoSnowflakeSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoSnowflakeSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._schemaName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._schemaName = value.schemaName;
    }
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // schema_name - computed: true, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }
}
export interface ResourceRemoteInfoSnowflakeTable {
  /**
  * The name of the database the table is in. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#database_name Resource#database_name}
  */
  readonly databaseName?: string;
  /**
  * The name of the schema the table is in. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#schema_name Resource#schema_name}
  */
  readonly schemaName?: string;
  /**
  * The name of the table. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#table_name Resource#table_name}
  */
  readonly tableName?: string;
}

export function resourceRemoteInfoSnowflakeTableToTerraform(struct?: ResourceRemoteInfoSnowflakeTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    schema_name: cdktf.stringToTerraform(struct!.schemaName),
    table_name: cdktf.stringToTerraform(struct!.tableName),
  }
}


export function resourceRemoteInfoSnowflakeTableToHclTerraform(struct?: ResourceRemoteInfoSnowflakeTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_name: {
      value: cdktf.stringToHclTerraform(struct!.schemaName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_name: {
      value: cdktf.stringToHclTerraform(struct!.tableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoSnowflakeTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoSnowflakeTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._schemaName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaName = this._schemaName;
    }
    if (this._tableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableName = this._tableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoSnowflakeTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseName = undefined;
      this._schemaName = undefined;
      this._tableName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseName = value.databaseName;
      this._schemaName = value.schemaName;
      this._tableName = value.tableName;
    }
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // schema_name - computed: true, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // table_name - computed: true, optional: true, required: false
  private _tableName?: string; 
  public get tableName() {
    return this.getStringAttribute('table_name');
  }
  public set tableName(value: string) {
    this._tableName = value;
  }
  public resetTableName() {
    this._tableName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNameInput() {
    return this._tableName;
  }
}
export interface ResourceRemoteInfoTailscaleSsh {
  /**
  * The name of the tag. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#tag_name Resource#tag_name}
  */
  readonly tagName?: string;
}

export function resourceRemoteInfoTailscaleSshToTerraform(struct?: ResourceRemoteInfoTailscaleSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function resourceRemoteInfoTailscaleSshToHclTerraform(struct?: ResourceRemoteInfoTailscaleSsh | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoTailscaleSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoTailscaleSsh | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoTailscaleSsh | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagName = value.tagName;
    }
  }

  // tag_name - computed: true, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}
export interface ResourceRemoteInfoTeleportRole {
  /**
  * The name role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_name Resource#role_name}
  */
  readonly roleName?: string;
}

export function resourceRemoteInfoTeleportRoleToTerraform(struct?: ResourceRemoteInfoTeleportRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_name: cdktf.stringToTerraform(struct!.roleName),
  }
}


export function resourceRemoteInfoTeleportRoleToHclTerraform(struct?: ResourceRemoteInfoTeleportRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_name: {
      value: cdktf.stringToHclTerraform(struct!.roleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoTeleportRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoTeleportRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleName = this._roleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoTeleportRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleName = value.roleName;
    }
  }

  // role_name - computed: true, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }
}
export interface ResourceRemoteInfoWorkdayRole {
  /**
  * The id of the role. Not Null; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_id Resource#role_id}
  */
  readonly roleId?: string;
}

export function resourceRemoteInfoWorkdayRoleToTerraform(struct?: ResourceRemoteInfoWorkdayRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function resourceRemoteInfoWorkdayRoleToHclTerraform(struct?: ResourceRemoteInfoWorkdayRole | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoWorkdayRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfoWorkdayRole | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfoWorkdayRole | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleId = value.roleId;
    }
  }

  // role_id - computed: true, optional: true, required: false
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  public resetRoleId() {
    this._roleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}
export interface ResourceRemoteInfo {
  /**
  * Remote info for Anthropic workspace. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#anthropic_workspace Resource#anthropic_workspace}
  */
  readonly anthropicWorkspace?: ResourceRemoteInfoAnthropicWorkspace;
  /**
  * Remote info for AWS account. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#aws_account Resource#aws_account}
  */
  readonly awsAccount?: ResourceRemoteInfoAwsAccount;
  /**
  * Remote info for AWS EC2 instance. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#aws_ec2_instance Resource#aws_ec2_instance}
  */
  readonly awsEc2Instance?: ResourceRemoteInfoAwsEc2Instance;
  /**
  * Remote info for AWS EKS cluster. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#aws_eks_cluster Resource#aws_eks_cluster}
  */
  readonly awsEksCluster?: ResourceRemoteInfoAwsEksCluster;
  /**
  * Remote info for AWS IAM role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#aws_iam_role Resource#aws_iam_role}
  */
  readonly awsIamRole?: ResourceRemoteInfoAwsIamRole;
  /**
  * Remote info for AWS organizational unit. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#aws_organizational_unit Resource#aws_organizational_unit}
  */
  readonly awsOrganizationalUnit?: ResourceRemoteInfoAwsOrganizationalUnit;
  /**
  * Remote info for AWS Identity Center permission set. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#aws_permission_set Resource#aws_permission_set}
  */
  readonly awsPermissionSet?: ResourceRemoteInfoAwsPermissionSet;
  /**
  * Remote info for AWS RDS cluster. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#aws_rds_cluster Resource#aws_rds_cluster}
  */
  readonly awsRdsCluster?: ResourceRemoteInfoAwsRdsCluster;
  /**
  * Remote info for AWS RDS instance. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#aws_rds_instance Resource#aws_rds_instance}
  */
  readonly awsRdsInstance?: ResourceRemoteInfoAwsRdsInstance;
  /**
  * Remote info for Azure Enterprise App. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_enterprise_app Resource#azure_enterprise_app}
  */
  readonly azureEnterpriseApp?: ResourceRemoteInfoAzureEnterpriseApp;
  /**
  * Remote info for Azure Entra ID role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_entra_id_role Resource#azure_entra_id_role}
  */
  readonly azureEntraIdRole?: ResourceRemoteInfoAzureEntraIdRole;
  /**
  * Remote info for Azure management group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_management_group Resource#azure_management_group}
  */
  readonly azureManagementGroup?: ResourceRemoteInfoAzureManagementGroup;
  /**
  * Remote info for Azure resource group. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_resource_group Resource#azure_resource_group}
  */
  readonly azureResourceGroup?: ResourceRemoteInfoAzureResourceGroup;
  /**
  * Remote info for Azure SQL database. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_sql_database Resource#azure_sql_database}
  */
  readonly azureSqlDatabase?: ResourceRemoteInfoAzureSqlDatabase;
  /**
  * Remote info for Azure SQL managed database. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_sql_managed_database Resource#azure_sql_managed_database}
  */
  readonly azureSqlManagedDatabase?: ResourceRemoteInfoAzureSqlManagedDatabase;
  /**
  * Remote info for Azure SQL managed instance. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_sql_managed_instance Resource#azure_sql_managed_instance}
  */
  readonly azureSqlManagedInstance?: ResourceRemoteInfoAzureSqlManagedInstance;
  /**
  * Remote info for Azure SQL server. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_sql_server Resource#azure_sql_server}
  */
  readonly azureSqlServer?: ResourceRemoteInfoAzureSqlServer;
  /**
  * Remote info for Azure storage account. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_storage_account Resource#azure_storage_account}
  */
  readonly azureStorageAccount?: ResourceRemoteInfoAzureStorageAccount;
  /**
  * Remote info for Azure storage container. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_storage_container Resource#azure_storage_container}
  */
  readonly azureStorageContainer?: ResourceRemoteInfoAzureStorageContainer;
  /**
  * Remote info for Azure subscription. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_subscription Resource#azure_subscription}
  */
  readonly azureSubscription?: ResourceRemoteInfoAzureSubscription;
  /**
  * Remote info for Azure user assigned managed identity. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_user_assigned_managed_identity Resource#azure_user_assigned_managed_identity}
  */
  readonly azureUserAssignedManagedIdentity?: ResourceRemoteInfoAzureUserAssignedManagedIdentity;
  /**
  * Remote info for Azure virtual machine. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#azure_virtual_machine Resource#azure_virtual_machine}
  */
  readonly azureVirtualMachine?: ResourceRemoteInfoAzureVirtualMachine;
  /**
  * Remote info for Coupa role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#coupa_role Resource#coupa_role}
  */
  readonly coupaRole?: ResourceRemoteInfoCoupaRole;
  /**
  * Remote info for a Cursor organization. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#cursor_organization Resource#cursor_organization}
  */
  readonly cursorOrganization?: ResourceRemoteInfoCursorOrganization;
  /**
  * Remote info for a custom connector resource. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#custom_connector Resource#custom_connector}
  */
  readonly customConnector?: ResourceRemoteInfoCustomConnector;
  /**
  * Remote info for Databricks account service principal. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#databricks_account_service_principal Resource#databricks_account_service_principal}
  */
  readonly databricksAccountServicePrincipal?: ResourceRemoteInfoDatabricksAccountServicePrincipal;
  /**
  * Remote info for an Astra role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#datastax_astra_role Resource#datastax_astra_role}
  */
  readonly datastaxAstraRole?: ResourceRemoteInfoDatastaxAstraRole;
  /**
  * Remote info for Devin organization. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#devin_organization Resource#devin_organization}
  */
  readonly devinOrganization?: ResourceRemoteInfoDevinOrganization;
  /**
  * Remote info for Devin role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#devin_role Resource#devin_role}
  */
  readonly devinRole?: ResourceRemoteInfoDevinRole;
  /**
  * Remote info for GCP BigQuery Dataset. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#gcp_big_query_dataset Resource#gcp_big_query_dataset}
  */
  readonly gcpBigQueryDataset?: ResourceRemoteInfoGcpBigQueryDataset;
  /**
  * Remote info for GCP BigQuery Table. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#gcp_big_query_table Resource#gcp_big_query_table}
  */
  readonly gcpBigQueryTable?: ResourceRemoteInfoGcpBigQueryTable;
  /**
  * Remote info for GCP bucket. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#gcp_bucket Resource#gcp_bucket}
  */
  readonly gcpBucket?: ResourceRemoteInfoGcpBucket;
  /**
  * Remote info for GCP compute instance. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#gcp_compute_instance Resource#gcp_compute_instance}
  */
  readonly gcpComputeInstance?: ResourceRemoteInfoGcpComputeInstance;
  /**
  * Remote info for GCP folder. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#gcp_folder Resource#gcp_folder}
  */
  readonly gcpFolder?: ResourceRemoteInfoGcpFolder;
  /**
  * Remote info for GCP GKE cluster. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#gcp_gke_cluster Resource#gcp_gke_cluster}
  */
  readonly gcpGkeCluster?: ResourceRemoteInfoGcpGkeCluster;
  /**
  * Remote info for GCP organization. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#gcp_organization Resource#gcp_organization}
  */
  readonly gcpOrganization?: ResourceRemoteInfoGcpOrganization;
  /**
  * Remote info for GCP project. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#gcp_project Resource#gcp_project}
  */
  readonly gcpProject?: ResourceRemoteInfoGcpProject;
  /**
  * Remote info for a GCP service account. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#gcp_service_account Resource#gcp_service_account}
  */
  readonly gcpServiceAccount?: ResourceRemoteInfoGcpServiceAccount;
  /**
  * Remote info for GCP SQL instance. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#gcp_sql_instance Resource#gcp_sql_instance}
  */
  readonly gcpSqlInstance?: ResourceRemoteInfoGcpSqlInstance;
  /**
  * Remote info for GitHub organization. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#github_org Resource#github_org}
  */
  readonly githubOrg?: ResourceRemoteInfoGithubOrg;
  /**
  * Remote info for GitHub organization role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#github_org_role Resource#github_org_role}
  */
  readonly githubOrgRole?: ResourceRemoteInfoGithubOrgRole;
  /**
  * Remote info for GitHub repository. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#github_repo Resource#github_repo}
  */
  readonly githubRepo?: ResourceRemoteInfoGithubRepo;
  /**
  * Remote info for Gitlab project. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#gitlab_project Resource#gitlab_project}
  */
  readonly gitlabProject?: ResourceRemoteInfoGitlabProject;
  /**
  * Remote info for GCP workspace role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#google_workspace_role Resource#google_workspace_role}
  */
  readonly googleWorkspaceRole?: ResourceRemoteInfoGoogleWorkspaceRole;
  /**
  * Remote info for iLevel Advanced role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#ilevel_advanced_role Resource#ilevel_advanced_role}
  */
  readonly ilevelAdvancedRole?: ResourceRemoteInfoIlevelAdvancedRole;
  /**
  * Remote info for Okta directory app. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#okta_app Resource#okta_app}
  */
  readonly oktaApp?: ResourceRemoteInfoOktaApp;
  /**
  * Remote info for Okta directory custom role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#okta_custom_role Resource#okta_custom_role}
  */
  readonly oktaCustomRole?: ResourceRemoteInfoOktaCustomRole;
  /**
  * Remote info for Okta directory standard role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#okta_standard_role Resource#okta_standard_role}
  */
  readonly oktaStandardRole?: ResourceRemoteInfoOktaStandardRole;
  /**
  * Remote info for OpenAI Platform project. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#openai_platform_project Resource#openai_platform_project}
  */
  readonly openaiPlatformProject?: ResourceRemoteInfoOpenaiPlatformProject;
  /**
  * Remote info for OpenAI Platform service account. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#openai_platform_service_account Resource#openai_platform_service_account}
  */
  readonly openaiPlatformServiceAccount?: ResourceRemoteInfoOpenaiPlatformServiceAccount;
  /**
  * Remote info for Oracle Fusion role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#oracle_fusion_role Resource#oracle_fusion_role}
  */
  readonly oracleFusionRole?: ResourceRemoteInfoOracleFusionRole;
  /**
  * Remote info for Pagerduty role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#pagerduty_role Resource#pagerduty_role}
  */
  readonly pagerdutyRole?: ResourceRemoteInfoPagerdutyRole;
  /**
  * Remote info for Salesforce permission set. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#salesforce_permission_set Resource#salesforce_permission_set}
  */
  readonly salesforcePermissionSet?: ResourceRemoteInfoSalesforcePermissionSet;
  /**
  * Remote info for Salesforce profile. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#salesforce_profile Resource#salesforce_profile}
  */
  readonly salesforceProfile?: ResourceRemoteInfoSalesforceProfile;
  /**
  * Remote info for Salesforce role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#salesforce_role Resource#salesforce_role}
  */
  readonly salesforceRole?: ResourceRemoteInfoSalesforceRole;
  /**
  * Remote info for Snowflake database. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#snowflake_database Resource#snowflake_database}
  */
  readonly snowflakeDatabase?: ResourceRemoteInfoSnowflakeDatabase;
  /**
  * Remote info for Snowflake schema. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#snowflake_schema Resource#snowflake_schema}
  */
  readonly snowflakeSchema?: ResourceRemoteInfoSnowflakeSchema;
  /**
  * Remote info for Snowflake table. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#snowflake_table Resource#snowflake_table}
  */
  readonly snowflakeTable?: ResourceRemoteInfoSnowflakeTable;
  /**
  * Remote info for Tailscale SSH tag. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#tailscale_ssh Resource#tailscale_ssh}
  */
  readonly tailscaleSsh?: ResourceRemoteInfoTailscaleSsh;
  /**
  * Remote info for Teleport role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#teleport_role Resource#teleport_role}
  */
  readonly teleportRole?: ResourceRemoteInfoTeleportRole;
  /**
  * Remote info for Workday role. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#workday_role Resource#workday_role}
  */
  readonly workdayRole?: ResourceRemoteInfoWorkdayRole;
}

export function resourceRemoteInfoToTerraform(struct?: ResourceRemoteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anthropic_workspace: resourceRemoteInfoAnthropicWorkspaceToTerraform(struct!.anthropicWorkspace),
    aws_account: resourceRemoteInfoAwsAccountToTerraform(struct!.awsAccount),
    aws_ec2_instance: resourceRemoteInfoAwsEc2InstanceToTerraform(struct!.awsEc2Instance),
    aws_eks_cluster: resourceRemoteInfoAwsEksClusterToTerraform(struct!.awsEksCluster),
    aws_iam_role: resourceRemoteInfoAwsIamRoleToTerraform(struct!.awsIamRole),
    aws_organizational_unit: resourceRemoteInfoAwsOrganizationalUnitToTerraform(struct!.awsOrganizationalUnit),
    aws_permission_set: resourceRemoteInfoAwsPermissionSetToTerraform(struct!.awsPermissionSet),
    aws_rds_cluster: resourceRemoteInfoAwsRdsClusterToTerraform(struct!.awsRdsCluster),
    aws_rds_instance: resourceRemoteInfoAwsRdsInstanceToTerraform(struct!.awsRdsInstance),
    azure_enterprise_app: resourceRemoteInfoAzureEnterpriseAppToTerraform(struct!.azureEnterpriseApp),
    azure_entra_id_role: resourceRemoteInfoAzureEntraIdRoleToTerraform(struct!.azureEntraIdRole),
    azure_management_group: resourceRemoteInfoAzureManagementGroupToTerraform(struct!.azureManagementGroup),
    azure_resource_group: resourceRemoteInfoAzureResourceGroupToTerraform(struct!.azureResourceGroup),
    azure_sql_database: resourceRemoteInfoAzureSqlDatabaseToTerraform(struct!.azureSqlDatabase),
    azure_sql_managed_database: resourceRemoteInfoAzureSqlManagedDatabaseToTerraform(struct!.azureSqlManagedDatabase),
    azure_sql_managed_instance: resourceRemoteInfoAzureSqlManagedInstanceToTerraform(struct!.azureSqlManagedInstance),
    azure_sql_server: resourceRemoteInfoAzureSqlServerToTerraform(struct!.azureSqlServer),
    azure_storage_account: resourceRemoteInfoAzureStorageAccountToTerraform(struct!.azureStorageAccount),
    azure_storage_container: resourceRemoteInfoAzureStorageContainerToTerraform(struct!.azureStorageContainer),
    azure_subscription: resourceRemoteInfoAzureSubscriptionToTerraform(struct!.azureSubscription),
    azure_user_assigned_managed_identity: resourceRemoteInfoAzureUserAssignedManagedIdentityToTerraform(struct!.azureUserAssignedManagedIdentity),
    azure_virtual_machine: resourceRemoteInfoAzureVirtualMachineToTerraform(struct!.azureVirtualMachine),
    coupa_role: resourceRemoteInfoCoupaRoleToTerraform(struct!.coupaRole),
    cursor_organization: resourceRemoteInfoCursorOrganizationToTerraform(struct!.cursorOrganization),
    custom_connector: resourceRemoteInfoCustomConnectorToTerraform(struct!.customConnector),
    databricks_account_service_principal: resourceRemoteInfoDatabricksAccountServicePrincipalToTerraform(struct!.databricksAccountServicePrincipal),
    datastax_astra_role: resourceRemoteInfoDatastaxAstraRoleToTerraform(struct!.datastaxAstraRole),
    devin_organization: resourceRemoteInfoDevinOrganizationToTerraform(struct!.devinOrganization),
    devin_role: resourceRemoteInfoDevinRoleToTerraform(struct!.devinRole),
    gcp_big_query_dataset: resourceRemoteInfoGcpBigQueryDatasetToTerraform(struct!.gcpBigQueryDataset),
    gcp_big_query_table: resourceRemoteInfoGcpBigQueryTableToTerraform(struct!.gcpBigQueryTable),
    gcp_bucket: resourceRemoteInfoGcpBucketToTerraform(struct!.gcpBucket),
    gcp_compute_instance: resourceRemoteInfoGcpComputeInstanceToTerraform(struct!.gcpComputeInstance),
    gcp_folder: resourceRemoteInfoGcpFolderToTerraform(struct!.gcpFolder),
    gcp_gke_cluster: resourceRemoteInfoGcpGkeClusterToTerraform(struct!.gcpGkeCluster),
    gcp_organization: resourceRemoteInfoGcpOrganizationToTerraform(struct!.gcpOrganization),
    gcp_project: resourceRemoteInfoGcpProjectToTerraform(struct!.gcpProject),
    gcp_service_account: resourceRemoteInfoGcpServiceAccountToTerraform(struct!.gcpServiceAccount),
    gcp_sql_instance: resourceRemoteInfoGcpSqlInstanceToTerraform(struct!.gcpSqlInstance),
    github_org: resourceRemoteInfoGithubOrgToTerraform(struct!.githubOrg),
    github_org_role: resourceRemoteInfoGithubOrgRoleToTerraform(struct!.githubOrgRole),
    github_repo: resourceRemoteInfoGithubRepoToTerraform(struct!.githubRepo),
    gitlab_project: resourceRemoteInfoGitlabProjectToTerraform(struct!.gitlabProject),
    google_workspace_role: resourceRemoteInfoGoogleWorkspaceRoleToTerraform(struct!.googleWorkspaceRole),
    ilevel_advanced_role: resourceRemoteInfoIlevelAdvancedRoleToTerraform(struct!.ilevelAdvancedRole),
    okta_app: resourceRemoteInfoOktaAppToTerraform(struct!.oktaApp),
    okta_custom_role: resourceRemoteInfoOktaCustomRoleToTerraform(struct!.oktaCustomRole),
    okta_standard_role: resourceRemoteInfoOktaStandardRoleToTerraform(struct!.oktaStandardRole),
    openai_platform_project: resourceRemoteInfoOpenaiPlatformProjectToTerraform(struct!.openaiPlatformProject),
    openai_platform_service_account: resourceRemoteInfoOpenaiPlatformServiceAccountToTerraform(struct!.openaiPlatformServiceAccount),
    oracle_fusion_role: resourceRemoteInfoOracleFusionRoleToTerraform(struct!.oracleFusionRole),
    pagerduty_role: resourceRemoteInfoPagerdutyRoleToTerraform(struct!.pagerdutyRole),
    salesforce_permission_set: resourceRemoteInfoSalesforcePermissionSetToTerraform(struct!.salesforcePermissionSet),
    salesforce_profile: resourceRemoteInfoSalesforceProfileToTerraform(struct!.salesforceProfile),
    salesforce_role: resourceRemoteInfoSalesforceRoleToTerraform(struct!.salesforceRole),
    snowflake_database: resourceRemoteInfoSnowflakeDatabaseToTerraform(struct!.snowflakeDatabase),
    snowflake_schema: resourceRemoteInfoSnowflakeSchemaToTerraform(struct!.snowflakeSchema),
    snowflake_table: resourceRemoteInfoSnowflakeTableToTerraform(struct!.snowflakeTable),
    tailscale_ssh: resourceRemoteInfoTailscaleSshToTerraform(struct!.tailscaleSsh),
    teleport_role: resourceRemoteInfoTeleportRoleToTerraform(struct!.teleportRole),
    workday_role: resourceRemoteInfoWorkdayRoleToTerraform(struct!.workdayRole),
  }
}


export function resourceRemoteInfoToHclTerraform(struct?: ResourceRemoteInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anthropic_workspace: {
      value: resourceRemoteInfoAnthropicWorkspaceToHclTerraform(struct!.anthropicWorkspace),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAnthropicWorkspace",
    },
    aws_account: {
      value: resourceRemoteInfoAwsAccountToHclTerraform(struct!.awsAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAwsAccount",
    },
    aws_ec2_instance: {
      value: resourceRemoteInfoAwsEc2InstanceToHclTerraform(struct!.awsEc2Instance),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAwsEc2Instance",
    },
    aws_eks_cluster: {
      value: resourceRemoteInfoAwsEksClusterToHclTerraform(struct!.awsEksCluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAwsEksCluster",
    },
    aws_iam_role: {
      value: resourceRemoteInfoAwsIamRoleToHclTerraform(struct!.awsIamRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAwsIamRole",
    },
    aws_organizational_unit: {
      value: resourceRemoteInfoAwsOrganizationalUnitToHclTerraform(struct!.awsOrganizationalUnit),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAwsOrganizationalUnit",
    },
    aws_permission_set: {
      value: resourceRemoteInfoAwsPermissionSetToHclTerraform(struct!.awsPermissionSet),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAwsPermissionSet",
    },
    aws_rds_cluster: {
      value: resourceRemoteInfoAwsRdsClusterToHclTerraform(struct!.awsRdsCluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAwsRdsCluster",
    },
    aws_rds_instance: {
      value: resourceRemoteInfoAwsRdsInstanceToHclTerraform(struct!.awsRdsInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAwsRdsInstance",
    },
    azure_enterprise_app: {
      value: resourceRemoteInfoAzureEnterpriseAppToHclTerraform(struct!.azureEnterpriseApp),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureEnterpriseApp",
    },
    azure_entra_id_role: {
      value: resourceRemoteInfoAzureEntraIdRoleToHclTerraform(struct!.azureEntraIdRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureEntraIdRole",
    },
    azure_management_group: {
      value: resourceRemoteInfoAzureManagementGroupToHclTerraform(struct!.azureManagementGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureManagementGroup",
    },
    azure_resource_group: {
      value: resourceRemoteInfoAzureResourceGroupToHclTerraform(struct!.azureResourceGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureResourceGroup",
    },
    azure_sql_database: {
      value: resourceRemoteInfoAzureSqlDatabaseToHclTerraform(struct!.azureSqlDatabase),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureSqlDatabase",
    },
    azure_sql_managed_database: {
      value: resourceRemoteInfoAzureSqlManagedDatabaseToHclTerraform(struct!.azureSqlManagedDatabase),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureSqlManagedDatabase",
    },
    azure_sql_managed_instance: {
      value: resourceRemoteInfoAzureSqlManagedInstanceToHclTerraform(struct!.azureSqlManagedInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureSqlManagedInstance",
    },
    azure_sql_server: {
      value: resourceRemoteInfoAzureSqlServerToHclTerraform(struct!.azureSqlServer),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureSqlServer",
    },
    azure_storage_account: {
      value: resourceRemoteInfoAzureStorageAccountToHclTerraform(struct!.azureStorageAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureStorageAccount",
    },
    azure_storage_container: {
      value: resourceRemoteInfoAzureStorageContainerToHclTerraform(struct!.azureStorageContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureStorageContainer",
    },
    azure_subscription: {
      value: resourceRemoteInfoAzureSubscriptionToHclTerraform(struct!.azureSubscription),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureSubscription",
    },
    azure_user_assigned_managed_identity: {
      value: resourceRemoteInfoAzureUserAssignedManagedIdentityToHclTerraform(struct!.azureUserAssignedManagedIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureUserAssignedManagedIdentity",
    },
    azure_virtual_machine: {
      value: resourceRemoteInfoAzureVirtualMachineToHclTerraform(struct!.azureVirtualMachine),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoAzureVirtualMachine",
    },
    coupa_role: {
      value: resourceRemoteInfoCoupaRoleToHclTerraform(struct!.coupaRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoCoupaRole",
    },
    cursor_organization: {
      value: resourceRemoteInfoCursorOrganizationToHclTerraform(struct!.cursorOrganization),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoCursorOrganization",
    },
    custom_connector: {
      value: resourceRemoteInfoCustomConnectorToHclTerraform(struct!.customConnector),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoCustomConnector",
    },
    databricks_account_service_principal: {
      value: resourceRemoteInfoDatabricksAccountServicePrincipalToHclTerraform(struct!.databricksAccountServicePrincipal),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoDatabricksAccountServicePrincipal",
    },
    datastax_astra_role: {
      value: resourceRemoteInfoDatastaxAstraRoleToHclTerraform(struct!.datastaxAstraRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoDatastaxAstraRole",
    },
    devin_organization: {
      value: resourceRemoteInfoDevinOrganizationToHclTerraform(struct!.devinOrganization),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoDevinOrganization",
    },
    devin_role: {
      value: resourceRemoteInfoDevinRoleToHclTerraform(struct!.devinRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoDevinRole",
    },
    gcp_big_query_dataset: {
      value: resourceRemoteInfoGcpBigQueryDatasetToHclTerraform(struct!.gcpBigQueryDataset),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGcpBigQueryDataset",
    },
    gcp_big_query_table: {
      value: resourceRemoteInfoGcpBigQueryTableToHclTerraform(struct!.gcpBigQueryTable),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGcpBigQueryTable",
    },
    gcp_bucket: {
      value: resourceRemoteInfoGcpBucketToHclTerraform(struct!.gcpBucket),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGcpBucket",
    },
    gcp_compute_instance: {
      value: resourceRemoteInfoGcpComputeInstanceToHclTerraform(struct!.gcpComputeInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGcpComputeInstance",
    },
    gcp_folder: {
      value: resourceRemoteInfoGcpFolderToHclTerraform(struct!.gcpFolder),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGcpFolder",
    },
    gcp_gke_cluster: {
      value: resourceRemoteInfoGcpGkeClusterToHclTerraform(struct!.gcpGkeCluster),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGcpGkeCluster",
    },
    gcp_organization: {
      value: resourceRemoteInfoGcpOrganizationToHclTerraform(struct!.gcpOrganization),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGcpOrganization",
    },
    gcp_project: {
      value: resourceRemoteInfoGcpProjectToHclTerraform(struct!.gcpProject),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGcpProject",
    },
    gcp_service_account: {
      value: resourceRemoteInfoGcpServiceAccountToHclTerraform(struct!.gcpServiceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGcpServiceAccount",
    },
    gcp_sql_instance: {
      value: resourceRemoteInfoGcpSqlInstanceToHclTerraform(struct!.gcpSqlInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGcpSqlInstance",
    },
    github_org: {
      value: resourceRemoteInfoGithubOrgToHclTerraform(struct!.githubOrg),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGithubOrg",
    },
    github_org_role: {
      value: resourceRemoteInfoGithubOrgRoleToHclTerraform(struct!.githubOrgRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGithubOrgRole",
    },
    github_repo: {
      value: resourceRemoteInfoGithubRepoToHclTerraform(struct!.githubRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGithubRepo",
    },
    gitlab_project: {
      value: resourceRemoteInfoGitlabProjectToHclTerraform(struct!.gitlabProject),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGitlabProject",
    },
    google_workspace_role: {
      value: resourceRemoteInfoGoogleWorkspaceRoleToHclTerraform(struct!.googleWorkspaceRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoGoogleWorkspaceRole",
    },
    ilevel_advanced_role: {
      value: resourceRemoteInfoIlevelAdvancedRoleToHclTerraform(struct!.ilevelAdvancedRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoIlevelAdvancedRole",
    },
    okta_app: {
      value: resourceRemoteInfoOktaAppToHclTerraform(struct!.oktaApp),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoOktaApp",
    },
    okta_custom_role: {
      value: resourceRemoteInfoOktaCustomRoleToHclTerraform(struct!.oktaCustomRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoOktaCustomRole",
    },
    okta_standard_role: {
      value: resourceRemoteInfoOktaStandardRoleToHclTerraform(struct!.oktaStandardRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoOktaStandardRole",
    },
    openai_platform_project: {
      value: resourceRemoteInfoOpenaiPlatformProjectToHclTerraform(struct!.openaiPlatformProject),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoOpenaiPlatformProject",
    },
    openai_platform_service_account: {
      value: resourceRemoteInfoOpenaiPlatformServiceAccountToHclTerraform(struct!.openaiPlatformServiceAccount),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoOpenaiPlatformServiceAccount",
    },
    oracle_fusion_role: {
      value: resourceRemoteInfoOracleFusionRoleToHclTerraform(struct!.oracleFusionRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoOracleFusionRole",
    },
    pagerduty_role: {
      value: resourceRemoteInfoPagerdutyRoleToHclTerraform(struct!.pagerdutyRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoPagerdutyRole",
    },
    salesforce_permission_set: {
      value: resourceRemoteInfoSalesforcePermissionSetToHclTerraform(struct!.salesforcePermissionSet),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoSalesforcePermissionSet",
    },
    salesforce_profile: {
      value: resourceRemoteInfoSalesforceProfileToHclTerraform(struct!.salesforceProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoSalesforceProfile",
    },
    salesforce_role: {
      value: resourceRemoteInfoSalesforceRoleToHclTerraform(struct!.salesforceRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoSalesforceRole",
    },
    snowflake_database: {
      value: resourceRemoteInfoSnowflakeDatabaseToHclTerraform(struct!.snowflakeDatabase),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoSnowflakeDatabase",
    },
    snowflake_schema: {
      value: resourceRemoteInfoSnowflakeSchemaToHclTerraform(struct!.snowflakeSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoSnowflakeSchema",
    },
    snowflake_table: {
      value: resourceRemoteInfoSnowflakeTableToHclTerraform(struct!.snowflakeTable),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoSnowflakeTable",
    },
    tailscale_ssh: {
      value: resourceRemoteInfoTailscaleSshToHclTerraform(struct!.tailscaleSsh),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoTailscaleSsh",
    },
    teleport_role: {
      value: resourceRemoteInfoTeleportRoleToHclTerraform(struct!.teleportRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoTeleportRole",
    },
    workday_role: {
      value: resourceRemoteInfoWorkdayRoleToHclTerraform(struct!.workdayRole),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRemoteInfoWorkdayRole",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRemoteInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRemoteInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anthropicWorkspace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthropicWorkspace = this._anthropicWorkspace?.internalValue;
    }
    if (this._awsAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccount = this._awsAccount?.internalValue;
    }
    if (this._awsEc2Instance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEc2Instance = this._awsEc2Instance?.internalValue;
    }
    if (this._awsEksCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEksCluster = this._awsEksCluster?.internalValue;
    }
    if (this._awsIamRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsIamRole = this._awsIamRole?.internalValue;
    }
    if (this._awsOrganizationalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsOrganizationalUnit = this._awsOrganizationalUnit?.internalValue;
    }
    if (this._awsPermissionSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPermissionSet = this._awsPermissionSet?.internalValue;
    }
    if (this._awsRdsCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRdsCluster = this._awsRdsCluster?.internalValue;
    }
    if (this._awsRdsInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRdsInstance = this._awsRdsInstance?.internalValue;
    }
    if (this._azureEnterpriseApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEnterpriseApp = this._azureEnterpriseApp?.internalValue;
    }
    if (this._azureEntraIdRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEntraIdRole = this._azureEntraIdRole?.internalValue;
    }
    if (this._azureManagementGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureManagementGroup = this._azureManagementGroup?.internalValue;
    }
    if (this._azureResourceGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureResourceGroup = this._azureResourceGroup?.internalValue;
    }
    if (this._azureSqlDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSqlDatabase = this._azureSqlDatabase?.internalValue;
    }
    if (this._azureSqlManagedDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSqlManagedDatabase = this._azureSqlManagedDatabase?.internalValue;
    }
    if (this._azureSqlManagedInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSqlManagedInstance = this._azureSqlManagedInstance?.internalValue;
    }
    if (this._azureSqlServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSqlServer = this._azureSqlServer?.internalValue;
    }
    if (this._azureStorageAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageAccount = this._azureStorageAccount?.internalValue;
    }
    if (this._azureStorageContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureStorageContainer = this._azureStorageContainer?.internalValue;
    }
    if (this._azureSubscription?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSubscription = this._azureSubscription?.internalValue;
    }
    if (this._azureUserAssignedManagedIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureUserAssignedManagedIdentity = this._azureUserAssignedManagedIdentity?.internalValue;
    }
    if (this._azureVirtualMachine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureVirtualMachine = this._azureVirtualMachine?.internalValue;
    }
    if (this._coupaRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coupaRole = this._coupaRole?.internalValue;
    }
    if (this._cursorOrganization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursorOrganization = this._cursorOrganization?.internalValue;
    }
    if (this._customConnector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConnector = this._customConnector?.internalValue;
    }
    if (this._databricksAccountServicePrincipal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databricksAccountServicePrincipal = this._databricksAccountServicePrincipal?.internalValue;
    }
    if (this._datastaxAstraRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastaxAstraRole = this._datastaxAstraRole?.internalValue;
    }
    if (this._devinOrganization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devinOrganization = this._devinOrganization?.internalValue;
    }
    if (this._devinRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devinRole = this._devinRole?.internalValue;
    }
    if (this._gcpBigQueryDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpBigQueryDataset = this._gcpBigQueryDataset?.internalValue;
    }
    if (this._gcpBigQueryTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpBigQueryTable = this._gcpBigQueryTable?.internalValue;
    }
    if (this._gcpBucket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpBucket = this._gcpBucket?.internalValue;
    }
    if (this._gcpComputeInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpComputeInstance = this._gcpComputeInstance?.internalValue;
    }
    if (this._gcpFolder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpFolder = this._gcpFolder?.internalValue;
    }
    if (this._gcpGkeCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpGkeCluster = this._gcpGkeCluster?.internalValue;
    }
    if (this._gcpOrganization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpOrganization = this._gcpOrganization?.internalValue;
    }
    if (this._gcpProject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpProject = this._gcpProject?.internalValue;
    }
    if (this._gcpServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccount = this._gcpServiceAccount?.internalValue;
    }
    if (this._gcpSqlInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSqlInstance = this._gcpSqlInstance?.internalValue;
    }
    if (this._githubOrg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOrg = this._githubOrg?.internalValue;
    }
    if (this._githubOrgRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubOrgRole = this._githubOrgRole?.internalValue;
    }
    if (this._githubRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubRepo = this._githubRepo?.internalValue;
    }
    if (this._gitlabProject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlabProject = this._gitlabProject?.internalValue;
    }
    if (this._googleWorkspaceRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleWorkspaceRole = this._googleWorkspaceRole?.internalValue;
    }
    if (this._ilevelAdvancedRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ilevelAdvancedRole = this._ilevelAdvancedRole?.internalValue;
    }
    if (this._oktaApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaApp = this._oktaApp?.internalValue;
    }
    if (this._oktaCustomRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaCustomRole = this._oktaCustomRole?.internalValue;
    }
    if (this._oktaStandardRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oktaStandardRole = this._oktaStandardRole?.internalValue;
    }
    if (this._openaiPlatformProject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiPlatformProject = this._openaiPlatformProject?.internalValue;
    }
    if (this._openaiPlatformServiceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openaiPlatformServiceAccount = this._openaiPlatformServiceAccount?.internalValue;
    }
    if (this._oracleFusionRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleFusionRole = this._oracleFusionRole?.internalValue;
    }
    if (this._pagerdutyRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pagerdutyRole = this._pagerdutyRole?.internalValue;
    }
    if (this._salesforcePermissionSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforcePermissionSet = this._salesforcePermissionSet?.internalValue;
    }
    if (this._salesforceProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceProfile = this._salesforceProfile?.internalValue;
    }
    if (this._salesforceRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceRole = this._salesforceRole?.internalValue;
    }
    if (this._snowflakeDatabase?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeDatabase = this._snowflakeDatabase?.internalValue;
    }
    if (this._snowflakeSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeSchema = this._snowflakeSchema?.internalValue;
    }
    if (this._snowflakeTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeTable = this._snowflakeTable?.internalValue;
    }
    if (this._tailscaleSsh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tailscaleSsh = this._tailscaleSsh?.internalValue;
    }
    if (this._teleportRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.teleportRole = this._teleportRole?.internalValue;
    }
    if (this._workdayRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workdayRole = this._workdayRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRemoteInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anthropicWorkspace.internalValue = undefined;
      this._awsAccount.internalValue = undefined;
      this._awsEc2Instance.internalValue = undefined;
      this._awsEksCluster.internalValue = undefined;
      this._awsIamRole.internalValue = undefined;
      this._awsOrganizationalUnit.internalValue = undefined;
      this._awsPermissionSet.internalValue = undefined;
      this._awsRdsCluster.internalValue = undefined;
      this._awsRdsInstance.internalValue = undefined;
      this._azureEnterpriseApp.internalValue = undefined;
      this._azureEntraIdRole.internalValue = undefined;
      this._azureManagementGroup.internalValue = undefined;
      this._azureResourceGroup.internalValue = undefined;
      this._azureSqlDatabase.internalValue = undefined;
      this._azureSqlManagedDatabase.internalValue = undefined;
      this._azureSqlManagedInstance.internalValue = undefined;
      this._azureSqlServer.internalValue = undefined;
      this._azureStorageAccount.internalValue = undefined;
      this._azureStorageContainer.internalValue = undefined;
      this._azureSubscription.internalValue = undefined;
      this._azureUserAssignedManagedIdentity.internalValue = undefined;
      this._azureVirtualMachine.internalValue = undefined;
      this._coupaRole.internalValue = undefined;
      this._cursorOrganization.internalValue = undefined;
      this._customConnector.internalValue = undefined;
      this._databricksAccountServicePrincipal.internalValue = undefined;
      this._datastaxAstraRole.internalValue = undefined;
      this._devinOrganization.internalValue = undefined;
      this._devinRole.internalValue = undefined;
      this._gcpBigQueryDataset.internalValue = undefined;
      this._gcpBigQueryTable.internalValue = undefined;
      this._gcpBucket.internalValue = undefined;
      this._gcpComputeInstance.internalValue = undefined;
      this._gcpFolder.internalValue = undefined;
      this._gcpGkeCluster.internalValue = undefined;
      this._gcpOrganization.internalValue = undefined;
      this._gcpProject.internalValue = undefined;
      this._gcpServiceAccount.internalValue = undefined;
      this._gcpSqlInstance.internalValue = undefined;
      this._githubOrg.internalValue = undefined;
      this._githubOrgRole.internalValue = undefined;
      this._githubRepo.internalValue = undefined;
      this._gitlabProject.internalValue = undefined;
      this._googleWorkspaceRole.internalValue = undefined;
      this._ilevelAdvancedRole.internalValue = undefined;
      this._oktaApp.internalValue = undefined;
      this._oktaCustomRole.internalValue = undefined;
      this._oktaStandardRole.internalValue = undefined;
      this._openaiPlatformProject.internalValue = undefined;
      this._openaiPlatformServiceAccount.internalValue = undefined;
      this._oracleFusionRole.internalValue = undefined;
      this._pagerdutyRole.internalValue = undefined;
      this._salesforcePermissionSet.internalValue = undefined;
      this._salesforceProfile.internalValue = undefined;
      this._salesforceRole.internalValue = undefined;
      this._snowflakeDatabase.internalValue = undefined;
      this._snowflakeSchema.internalValue = undefined;
      this._snowflakeTable.internalValue = undefined;
      this._tailscaleSsh.internalValue = undefined;
      this._teleportRole.internalValue = undefined;
      this._workdayRole.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anthropicWorkspace.internalValue = value.anthropicWorkspace;
      this._awsAccount.internalValue = value.awsAccount;
      this._awsEc2Instance.internalValue = value.awsEc2Instance;
      this._awsEksCluster.internalValue = value.awsEksCluster;
      this._awsIamRole.internalValue = value.awsIamRole;
      this._awsOrganizationalUnit.internalValue = value.awsOrganizationalUnit;
      this._awsPermissionSet.internalValue = value.awsPermissionSet;
      this._awsRdsCluster.internalValue = value.awsRdsCluster;
      this._awsRdsInstance.internalValue = value.awsRdsInstance;
      this._azureEnterpriseApp.internalValue = value.azureEnterpriseApp;
      this._azureEntraIdRole.internalValue = value.azureEntraIdRole;
      this._azureManagementGroup.internalValue = value.azureManagementGroup;
      this._azureResourceGroup.internalValue = value.azureResourceGroup;
      this._azureSqlDatabase.internalValue = value.azureSqlDatabase;
      this._azureSqlManagedDatabase.internalValue = value.azureSqlManagedDatabase;
      this._azureSqlManagedInstance.internalValue = value.azureSqlManagedInstance;
      this._azureSqlServer.internalValue = value.azureSqlServer;
      this._azureStorageAccount.internalValue = value.azureStorageAccount;
      this._azureStorageContainer.internalValue = value.azureStorageContainer;
      this._azureSubscription.internalValue = value.azureSubscription;
      this._azureUserAssignedManagedIdentity.internalValue = value.azureUserAssignedManagedIdentity;
      this._azureVirtualMachine.internalValue = value.azureVirtualMachine;
      this._coupaRole.internalValue = value.coupaRole;
      this._cursorOrganization.internalValue = value.cursorOrganization;
      this._customConnector.internalValue = value.customConnector;
      this._databricksAccountServicePrincipal.internalValue = value.databricksAccountServicePrincipal;
      this._datastaxAstraRole.internalValue = value.datastaxAstraRole;
      this._devinOrganization.internalValue = value.devinOrganization;
      this._devinRole.internalValue = value.devinRole;
      this._gcpBigQueryDataset.internalValue = value.gcpBigQueryDataset;
      this._gcpBigQueryTable.internalValue = value.gcpBigQueryTable;
      this._gcpBucket.internalValue = value.gcpBucket;
      this._gcpComputeInstance.internalValue = value.gcpComputeInstance;
      this._gcpFolder.internalValue = value.gcpFolder;
      this._gcpGkeCluster.internalValue = value.gcpGkeCluster;
      this._gcpOrganization.internalValue = value.gcpOrganization;
      this._gcpProject.internalValue = value.gcpProject;
      this._gcpServiceAccount.internalValue = value.gcpServiceAccount;
      this._gcpSqlInstance.internalValue = value.gcpSqlInstance;
      this._githubOrg.internalValue = value.githubOrg;
      this._githubOrgRole.internalValue = value.githubOrgRole;
      this._githubRepo.internalValue = value.githubRepo;
      this._gitlabProject.internalValue = value.gitlabProject;
      this._googleWorkspaceRole.internalValue = value.googleWorkspaceRole;
      this._ilevelAdvancedRole.internalValue = value.ilevelAdvancedRole;
      this._oktaApp.internalValue = value.oktaApp;
      this._oktaCustomRole.internalValue = value.oktaCustomRole;
      this._oktaStandardRole.internalValue = value.oktaStandardRole;
      this._openaiPlatformProject.internalValue = value.openaiPlatformProject;
      this._openaiPlatformServiceAccount.internalValue = value.openaiPlatformServiceAccount;
      this._oracleFusionRole.internalValue = value.oracleFusionRole;
      this._pagerdutyRole.internalValue = value.pagerdutyRole;
      this._salesforcePermissionSet.internalValue = value.salesforcePermissionSet;
      this._salesforceProfile.internalValue = value.salesforceProfile;
      this._salesforceRole.internalValue = value.salesforceRole;
      this._snowflakeDatabase.internalValue = value.snowflakeDatabase;
      this._snowflakeSchema.internalValue = value.snowflakeSchema;
      this._snowflakeTable.internalValue = value.snowflakeTable;
      this._tailscaleSsh.internalValue = value.tailscaleSsh;
      this._teleportRole.internalValue = value.teleportRole;
      this._workdayRole.internalValue = value.workdayRole;
    }
  }

  // anthropic_workspace - computed: true, optional: true, required: false
  private _anthropicWorkspace = new ResourceRemoteInfoAnthropicWorkspaceOutputReference(this, "anthropic_workspace");
  public get anthropicWorkspace() {
    return this._anthropicWorkspace;
  }
  public putAnthropicWorkspace(value: ResourceRemoteInfoAnthropicWorkspace) {
    this._anthropicWorkspace.internalValue = value;
  }
  public resetAnthropicWorkspace() {
    this._anthropicWorkspace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthropicWorkspaceInput() {
    return this._anthropicWorkspace.internalValue;
  }

  // aws_account - computed: true, optional: true, required: false
  private _awsAccount = new ResourceRemoteInfoAwsAccountOutputReference(this, "aws_account");
  public get awsAccount() {
    return this._awsAccount;
  }
  public putAwsAccount(value: ResourceRemoteInfoAwsAccount) {
    this._awsAccount.internalValue = value;
  }
  public resetAwsAccount() {
    this._awsAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountInput() {
    return this._awsAccount.internalValue;
  }

  // aws_ec2_instance - computed: true, optional: true, required: false
  private _awsEc2Instance = new ResourceRemoteInfoAwsEc2InstanceOutputReference(this, "aws_ec2_instance");
  public get awsEc2Instance() {
    return this._awsEc2Instance;
  }
  public putAwsEc2Instance(value: ResourceRemoteInfoAwsEc2Instance) {
    this._awsEc2Instance.internalValue = value;
  }
  public resetAwsEc2Instance() {
    this._awsEc2Instance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEc2InstanceInput() {
    return this._awsEc2Instance.internalValue;
  }

  // aws_eks_cluster - computed: true, optional: true, required: false
  private _awsEksCluster = new ResourceRemoteInfoAwsEksClusterOutputReference(this, "aws_eks_cluster");
  public get awsEksCluster() {
    return this._awsEksCluster;
  }
  public putAwsEksCluster(value: ResourceRemoteInfoAwsEksCluster) {
    this._awsEksCluster.internalValue = value;
  }
  public resetAwsEksCluster() {
    this._awsEksCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEksClusterInput() {
    return this._awsEksCluster.internalValue;
  }

  // aws_iam_role - computed: true, optional: true, required: false
  private _awsIamRole = new ResourceRemoteInfoAwsIamRoleOutputReference(this, "aws_iam_role");
  public get awsIamRole() {
    return this._awsIamRole;
  }
  public putAwsIamRole(value: ResourceRemoteInfoAwsIamRole) {
    this._awsIamRole.internalValue = value;
  }
  public resetAwsIamRole() {
    this._awsIamRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamRoleInput() {
    return this._awsIamRole.internalValue;
  }

  // aws_organizational_unit - computed: true, optional: true, required: false
  private _awsOrganizationalUnit = new ResourceRemoteInfoAwsOrganizationalUnitOutputReference(this, "aws_organizational_unit");
  public get awsOrganizationalUnit() {
    return this._awsOrganizationalUnit;
  }
  public putAwsOrganizationalUnit(value: ResourceRemoteInfoAwsOrganizationalUnit) {
    this._awsOrganizationalUnit.internalValue = value;
  }
  public resetAwsOrganizationalUnit() {
    this._awsOrganizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOrganizationalUnitInput() {
    return this._awsOrganizationalUnit.internalValue;
  }

  // aws_permission_set - computed: true, optional: true, required: false
  private _awsPermissionSet = new ResourceRemoteInfoAwsPermissionSetOutputReference(this, "aws_permission_set");
  public get awsPermissionSet() {
    return this._awsPermissionSet;
  }
  public putAwsPermissionSet(value: ResourceRemoteInfoAwsPermissionSet) {
    this._awsPermissionSet.internalValue = value;
  }
  public resetAwsPermissionSet() {
    this._awsPermissionSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPermissionSetInput() {
    return this._awsPermissionSet.internalValue;
  }

  // aws_rds_cluster - computed: true, optional: true, required: false
  private _awsRdsCluster = new ResourceRemoteInfoAwsRdsClusterOutputReference(this, "aws_rds_cluster");
  public get awsRdsCluster() {
    return this._awsRdsCluster;
  }
  public putAwsRdsCluster(value: ResourceRemoteInfoAwsRdsCluster) {
    this._awsRdsCluster.internalValue = value;
  }
  public resetAwsRdsCluster() {
    this._awsRdsCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRdsClusterInput() {
    return this._awsRdsCluster.internalValue;
  }

  // aws_rds_instance - computed: true, optional: true, required: false
  private _awsRdsInstance = new ResourceRemoteInfoAwsRdsInstanceOutputReference(this, "aws_rds_instance");
  public get awsRdsInstance() {
    return this._awsRdsInstance;
  }
  public putAwsRdsInstance(value: ResourceRemoteInfoAwsRdsInstance) {
    this._awsRdsInstance.internalValue = value;
  }
  public resetAwsRdsInstance() {
    this._awsRdsInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRdsInstanceInput() {
    return this._awsRdsInstance.internalValue;
  }

  // azure_enterprise_app - computed: true, optional: true, required: false
  private _azureEnterpriseApp = new ResourceRemoteInfoAzureEnterpriseAppOutputReference(this, "azure_enterprise_app");
  public get azureEnterpriseApp() {
    return this._azureEnterpriseApp;
  }
  public putAzureEnterpriseApp(value: ResourceRemoteInfoAzureEnterpriseApp) {
    this._azureEnterpriseApp.internalValue = value;
  }
  public resetAzureEnterpriseApp() {
    this._azureEnterpriseApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEnterpriseAppInput() {
    return this._azureEnterpriseApp.internalValue;
  }

  // azure_entra_id_role - computed: true, optional: true, required: false
  private _azureEntraIdRole = new ResourceRemoteInfoAzureEntraIdRoleOutputReference(this, "azure_entra_id_role");
  public get azureEntraIdRole() {
    return this._azureEntraIdRole;
  }
  public putAzureEntraIdRole(value: ResourceRemoteInfoAzureEntraIdRole) {
    this._azureEntraIdRole.internalValue = value;
  }
  public resetAzureEntraIdRole() {
    this._azureEntraIdRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEntraIdRoleInput() {
    return this._azureEntraIdRole.internalValue;
  }

  // azure_management_group - computed: true, optional: true, required: false
  private _azureManagementGroup = new ResourceRemoteInfoAzureManagementGroupOutputReference(this, "azure_management_group");
  public get azureManagementGroup() {
    return this._azureManagementGroup;
  }
  public putAzureManagementGroup(value: ResourceRemoteInfoAzureManagementGroup) {
    this._azureManagementGroup.internalValue = value;
  }
  public resetAzureManagementGroup() {
    this._azureManagementGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureManagementGroupInput() {
    return this._azureManagementGroup.internalValue;
  }

  // azure_resource_group - computed: true, optional: true, required: false
  private _azureResourceGroup = new ResourceRemoteInfoAzureResourceGroupOutputReference(this, "azure_resource_group");
  public get azureResourceGroup() {
    return this._azureResourceGroup;
  }
  public putAzureResourceGroup(value: ResourceRemoteInfoAzureResourceGroup) {
    this._azureResourceGroup.internalValue = value;
  }
  public resetAzureResourceGroup() {
    this._azureResourceGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureResourceGroupInput() {
    return this._azureResourceGroup.internalValue;
  }

  // azure_sql_database - computed: true, optional: true, required: false
  private _azureSqlDatabase = new ResourceRemoteInfoAzureSqlDatabaseOutputReference(this, "azure_sql_database");
  public get azureSqlDatabase() {
    return this._azureSqlDatabase;
  }
  public putAzureSqlDatabase(value: ResourceRemoteInfoAzureSqlDatabase) {
    this._azureSqlDatabase.internalValue = value;
  }
  public resetAzureSqlDatabase() {
    this._azureSqlDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSqlDatabaseInput() {
    return this._azureSqlDatabase.internalValue;
  }

  // azure_sql_managed_database - computed: true, optional: true, required: false
  private _azureSqlManagedDatabase = new ResourceRemoteInfoAzureSqlManagedDatabaseOutputReference(this, "azure_sql_managed_database");
  public get azureSqlManagedDatabase() {
    return this._azureSqlManagedDatabase;
  }
  public putAzureSqlManagedDatabase(value: ResourceRemoteInfoAzureSqlManagedDatabase) {
    this._azureSqlManagedDatabase.internalValue = value;
  }
  public resetAzureSqlManagedDatabase() {
    this._azureSqlManagedDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSqlManagedDatabaseInput() {
    return this._azureSqlManagedDatabase.internalValue;
  }

  // azure_sql_managed_instance - computed: true, optional: true, required: false
  private _azureSqlManagedInstance = new ResourceRemoteInfoAzureSqlManagedInstanceOutputReference(this, "azure_sql_managed_instance");
  public get azureSqlManagedInstance() {
    return this._azureSqlManagedInstance;
  }
  public putAzureSqlManagedInstance(value: ResourceRemoteInfoAzureSqlManagedInstance) {
    this._azureSqlManagedInstance.internalValue = value;
  }
  public resetAzureSqlManagedInstance() {
    this._azureSqlManagedInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSqlManagedInstanceInput() {
    return this._azureSqlManagedInstance.internalValue;
  }

  // azure_sql_server - computed: true, optional: true, required: false
  private _azureSqlServer = new ResourceRemoteInfoAzureSqlServerOutputReference(this, "azure_sql_server");
  public get azureSqlServer() {
    return this._azureSqlServer;
  }
  public putAzureSqlServer(value: ResourceRemoteInfoAzureSqlServer) {
    this._azureSqlServer.internalValue = value;
  }
  public resetAzureSqlServer() {
    this._azureSqlServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSqlServerInput() {
    return this._azureSqlServer.internalValue;
  }

  // azure_storage_account - computed: true, optional: true, required: false
  private _azureStorageAccount = new ResourceRemoteInfoAzureStorageAccountOutputReference(this, "azure_storage_account");
  public get azureStorageAccount() {
    return this._azureStorageAccount;
  }
  public putAzureStorageAccount(value: ResourceRemoteInfoAzureStorageAccount) {
    this._azureStorageAccount.internalValue = value;
  }
  public resetAzureStorageAccount() {
    this._azureStorageAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageAccountInput() {
    return this._azureStorageAccount.internalValue;
  }

  // azure_storage_container - computed: true, optional: true, required: false
  private _azureStorageContainer = new ResourceRemoteInfoAzureStorageContainerOutputReference(this, "azure_storage_container");
  public get azureStorageContainer() {
    return this._azureStorageContainer;
  }
  public putAzureStorageContainer(value: ResourceRemoteInfoAzureStorageContainer) {
    this._azureStorageContainer.internalValue = value;
  }
  public resetAzureStorageContainer() {
    this._azureStorageContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageContainerInput() {
    return this._azureStorageContainer.internalValue;
  }

  // azure_subscription - computed: true, optional: true, required: false
  private _azureSubscription = new ResourceRemoteInfoAzureSubscriptionOutputReference(this, "azure_subscription");
  public get azureSubscription() {
    return this._azureSubscription;
  }
  public putAzureSubscription(value: ResourceRemoteInfoAzureSubscription) {
    this._azureSubscription.internalValue = value;
  }
  public resetAzureSubscription() {
    this._azureSubscription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionInput() {
    return this._azureSubscription.internalValue;
  }

  // azure_user_assigned_managed_identity - computed: true, optional: true, required: false
  private _azureUserAssignedManagedIdentity = new ResourceRemoteInfoAzureUserAssignedManagedIdentityOutputReference(this, "azure_user_assigned_managed_identity");
  public get azureUserAssignedManagedIdentity() {
    return this._azureUserAssignedManagedIdentity;
  }
  public putAzureUserAssignedManagedIdentity(value: ResourceRemoteInfoAzureUserAssignedManagedIdentity) {
    this._azureUserAssignedManagedIdentity.internalValue = value;
  }
  public resetAzureUserAssignedManagedIdentity() {
    this._azureUserAssignedManagedIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUserAssignedManagedIdentityInput() {
    return this._azureUserAssignedManagedIdentity.internalValue;
  }

  // azure_virtual_machine - computed: true, optional: true, required: false
  private _azureVirtualMachine = new ResourceRemoteInfoAzureVirtualMachineOutputReference(this, "azure_virtual_machine");
  public get azureVirtualMachine() {
    return this._azureVirtualMachine;
  }
  public putAzureVirtualMachine(value: ResourceRemoteInfoAzureVirtualMachine) {
    this._azureVirtualMachine.internalValue = value;
  }
  public resetAzureVirtualMachine() {
    this._azureVirtualMachine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureVirtualMachineInput() {
    return this._azureVirtualMachine.internalValue;
  }

  // coupa_role - computed: true, optional: true, required: false
  private _coupaRole = new ResourceRemoteInfoCoupaRoleOutputReference(this, "coupa_role");
  public get coupaRole() {
    return this._coupaRole;
  }
  public putCoupaRole(value: ResourceRemoteInfoCoupaRole) {
    this._coupaRole.internalValue = value;
  }
  public resetCoupaRole() {
    this._coupaRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coupaRoleInput() {
    return this._coupaRole.internalValue;
  }

  // cursor_organization - computed: true, optional: true, required: false
  private _cursorOrganization = new ResourceRemoteInfoCursorOrganizationOutputReference(this, "cursor_organization");
  public get cursorOrganization() {
    return this._cursorOrganization;
  }
  public putCursorOrganization(value: ResourceRemoteInfoCursorOrganization) {
    this._cursorOrganization.internalValue = value;
  }
  public resetCursorOrganization() {
    this._cursorOrganization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorOrganizationInput() {
    return this._cursorOrganization.internalValue;
  }

  // custom_connector - computed: true, optional: true, required: false
  private _customConnector = new ResourceRemoteInfoCustomConnectorOutputReference(this, "custom_connector");
  public get customConnector() {
    return this._customConnector;
  }
  public putCustomConnector(value: ResourceRemoteInfoCustomConnector) {
    this._customConnector.internalValue = value;
  }
  public resetCustomConnector() {
    this._customConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConnectorInput() {
    return this._customConnector.internalValue;
  }

  // databricks_account_service_principal - computed: true, optional: true, required: false
  private _databricksAccountServicePrincipal = new ResourceRemoteInfoDatabricksAccountServicePrincipalOutputReference(this, "databricks_account_service_principal");
  public get databricksAccountServicePrincipal() {
    return this._databricksAccountServicePrincipal;
  }
  public putDatabricksAccountServicePrincipal(value: ResourceRemoteInfoDatabricksAccountServicePrincipal) {
    this._databricksAccountServicePrincipal.internalValue = value;
  }
  public resetDatabricksAccountServicePrincipal() {
    this._databricksAccountServicePrincipal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databricksAccountServicePrincipalInput() {
    return this._databricksAccountServicePrincipal.internalValue;
  }

  // datastax_astra_role - computed: true, optional: true, required: false
  private _datastaxAstraRole = new ResourceRemoteInfoDatastaxAstraRoleOutputReference(this, "datastax_astra_role");
  public get datastaxAstraRole() {
    return this._datastaxAstraRole;
  }
  public putDatastaxAstraRole(value: ResourceRemoteInfoDatastaxAstraRole) {
    this._datastaxAstraRole.internalValue = value;
  }
  public resetDatastaxAstraRole() {
    this._datastaxAstraRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastaxAstraRoleInput() {
    return this._datastaxAstraRole.internalValue;
  }

  // devin_organization - computed: true, optional: true, required: false
  private _devinOrganization = new ResourceRemoteInfoDevinOrganizationOutputReference(this, "devin_organization");
  public get devinOrganization() {
    return this._devinOrganization;
  }
  public putDevinOrganization(value: ResourceRemoteInfoDevinOrganization) {
    this._devinOrganization.internalValue = value;
  }
  public resetDevinOrganization() {
    this._devinOrganization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devinOrganizationInput() {
    return this._devinOrganization.internalValue;
  }

  // devin_role - computed: true, optional: true, required: false
  private _devinRole = new ResourceRemoteInfoDevinRoleOutputReference(this, "devin_role");
  public get devinRole() {
    return this._devinRole;
  }
  public putDevinRole(value: ResourceRemoteInfoDevinRole) {
    this._devinRole.internalValue = value;
  }
  public resetDevinRole() {
    this._devinRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devinRoleInput() {
    return this._devinRole.internalValue;
  }

  // gcp_big_query_dataset - computed: true, optional: true, required: false
  private _gcpBigQueryDataset = new ResourceRemoteInfoGcpBigQueryDatasetOutputReference(this, "gcp_big_query_dataset");
  public get gcpBigQueryDataset() {
    return this._gcpBigQueryDataset;
  }
  public putGcpBigQueryDataset(value: ResourceRemoteInfoGcpBigQueryDataset) {
    this._gcpBigQueryDataset.internalValue = value;
  }
  public resetGcpBigQueryDataset() {
    this._gcpBigQueryDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpBigQueryDatasetInput() {
    return this._gcpBigQueryDataset.internalValue;
  }

  // gcp_big_query_table - computed: true, optional: true, required: false
  private _gcpBigQueryTable = new ResourceRemoteInfoGcpBigQueryTableOutputReference(this, "gcp_big_query_table");
  public get gcpBigQueryTable() {
    return this._gcpBigQueryTable;
  }
  public putGcpBigQueryTable(value: ResourceRemoteInfoGcpBigQueryTable) {
    this._gcpBigQueryTable.internalValue = value;
  }
  public resetGcpBigQueryTable() {
    this._gcpBigQueryTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpBigQueryTableInput() {
    return this._gcpBigQueryTable.internalValue;
  }

  // gcp_bucket - computed: true, optional: true, required: false
  private _gcpBucket = new ResourceRemoteInfoGcpBucketOutputReference(this, "gcp_bucket");
  public get gcpBucket() {
    return this._gcpBucket;
  }
  public putGcpBucket(value: ResourceRemoteInfoGcpBucket) {
    this._gcpBucket.internalValue = value;
  }
  public resetGcpBucket() {
    this._gcpBucket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpBucketInput() {
    return this._gcpBucket.internalValue;
  }

  // gcp_compute_instance - computed: true, optional: true, required: false
  private _gcpComputeInstance = new ResourceRemoteInfoGcpComputeInstanceOutputReference(this, "gcp_compute_instance");
  public get gcpComputeInstance() {
    return this._gcpComputeInstance;
  }
  public putGcpComputeInstance(value: ResourceRemoteInfoGcpComputeInstance) {
    this._gcpComputeInstance.internalValue = value;
  }
  public resetGcpComputeInstance() {
    this._gcpComputeInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpComputeInstanceInput() {
    return this._gcpComputeInstance.internalValue;
  }

  // gcp_folder - computed: true, optional: true, required: false
  private _gcpFolder = new ResourceRemoteInfoGcpFolderOutputReference(this, "gcp_folder");
  public get gcpFolder() {
    return this._gcpFolder;
  }
  public putGcpFolder(value: ResourceRemoteInfoGcpFolder) {
    this._gcpFolder.internalValue = value;
  }
  public resetGcpFolder() {
    this._gcpFolder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpFolderInput() {
    return this._gcpFolder.internalValue;
  }

  // gcp_gke_cluster - computed: true, optional: true, required: false
  private _gcpGkeCluster = new ResourceRemoteInfoGcpGkeClusterOutputReference(this, "gcp_gke_cluster");
  public get gcpGkeCluster() {
    return this._gcpGkeCluster;
  }
  public putGcpGkeCluster(value: ResourceRemoteInfoGcpGkeCluster) {
    this._gcpGkeCluster.internalValue = value;
  }
  public resetGcpGkeCluster() {
    this._gcpGkeCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpGkeClusterInput() {
    return this._gcpGkeCluster.internalValue;
  }

  // gcp_organization - computed: true, optional: true, required: false
  private _gcpOrganization = new ResourceRemoteInfoGcpOrganizationOutputReference(this, "gcp_organization");
  public get gcpOrganization() {
    return this._gcpOrganization;
  }
  public putGcpOrganization(value: ResourceRemoteInfoGcpOrganization) {
    this._gcpOrganization.internalValue = value;
  }
  public resetGcpOrganization() {
    this._gcpOrganization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpOrganizationInput() {
    return this._gcpOrganization.internalValue;
  }

  // gcp_project - computed: true, optional: true, required: false
  private _gcpProject = new ResourceRemoteInfoGcpProjectOutputReference(this, "gcp_project");
  public get gcpProject() {
    return this._gcpProject;
  }
  public putGcpProject(value: ResourceRemoteInfoGcpProject) {
    this._gcpProject.internalValue = value;
  }
  public resetGcpProject() {
    this._gcpProject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectInput() {
    return this._gcpProject.internalValue;
  }

  // gcp_service_account - computed: true, optional: true, required: false
  private _gcpServiceAccount = new ResourceRemoteInfoGcpServiceAccountOutputReference(this, "gcp_service_account");
  public get gcpServiceAccount() {
    return this._gcpServiceAccount;
  }
  public putGcpServiceAccount(value: ResourceRemoteInfoGcpServiceAccount) {
    this._gcpServiceAccount.internalValue = value;
  }
  public resetGcpServiceAccount() {
    this._gcpServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountInput() {
    return this._gcpServiceAccount.internalValue;
  }

  // gcp_sql_instance - computed: true, optional: true, required: false
  private _gcpSqlInstance = new ResourceRemoteInfoGcpSqlInstanceOutputReference(this, "gcp_sql_instance");
  public get gcpSqlInstance() {
    return this._gcpSqlInstance;
  }
  public putGcpSqlInstance(value: ResourceRemoteInfoGcpSqlInstance) {
    this._gcpSqlInstance.internalValue = value;
  }
  public resetGcpSqlInstance() {
    this._gcpSqlInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSqlInstanceInput() {
    return this._gcpSqlInstance.internalValue;
  }

  // github_org - computed: true, optional: true, required: false
  private _githubOrg = new ResourceRemoteInfoGithubOrgOutputReference(this, "github_org");
  public get githubOrg() {
    return this._githubOrg;
  }
  public putGithubOrg(value: ResourceRemoteInfoGithubOrg) {
    this._githubOrg.internalValue = value;
  }
  public resetGithubOrg() {
    this._githubOrg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrgInput() {
    return this._githubOrg.internalValue;
  }

  // github_org_role - computed: true, optional: true, required: false
  private _githubOrgRole = new ResourceRemoteInfoGithubOrgRoleOutputReference(this, "github_org_role");
  public get githubOrgRole() {
    return this._githubOrgRole;
  }
  public putGithubOrgRole(value: ResourceRemoteInfoGithubOrgRole) {
    this._githubOrgRole.internalValue = value;
  }
  public resetGithubOrgRole() {
    this._githubOrgRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubOrgRoleInput() {
    return this._githubOrgRole.internalValue;
  }

  // github_repo - computed: true, optional: true, required: false
  private _githubRepo = new ResourceRemoteInfoGithubRepoOutputReference(this, "github_repo");
  public get githubRepo() {
    return this._githubRepo;
  }
  public putGithubRepo(value: ResourceRemoteInfoGithubRepo) {
    this._githubRepo.internalValue = value;
  }
  public resetGithubRepo() {
    this._githubRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubRepoInput() {
    return this._githubRepo.internalValue;
  }

  // gitlab_project - computed: true, optional: true, required: false
  private _gitlabProject = new ResourceRemoteInfoGitlabProjectOutputReference(this, "gitlab_project");
  public get gitlabProject() {
    return this._gitlabProject;
  }
  public putGitlabProject(value: ResourceRemoteInfoGitlabProject) {
    this._gitlabProject.internalValue = value;
  }
  public resetGitlabProject() {
    this._gitlabProject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabProjectInput() {
    return this._gitlabProject.internalValue;
  }

  // google_workspace_role - computed: true, optional: true, required: false
  private _googleWorkspaceRole = new ResourceRemoteInfoGoogleWorkspaceRoleOutputReference(this, "google_workspace_role");
  public get googleWorkspaceRole() {
    return this._googleWorkspaceRole;
  }
  public putGoogleWorkspaceRole(value: ResourceRemoteInfoGoogleWorkspaceRole) {
    this._googleWorkspaceRole.internalValue = value;
  }
  public resetGoogleWorkspaceRole() {
    this._googleWorkspaceRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleWorkspaceRoleInput() {
    return this._googleWorkspaceRole.internalValue;
  }

  // ilevel_advanced_role - computed: true, optional: true, required: false
  private _ilevelAdvancedRole = new ResourceRemoteInfoIlevelAdvancedRoleOutputReference(this, "ilevel_advanced_role");
  public get ilevelAdvancedRole() {
    return this._ilevelAdvancedRole;
  }
  public putIlevelAdvancedRole(value: ResourceRemoteInfoIlevelAdvancedRole) {
    this._ilevelAdvancedRole.internalValue = value;
  }
  public resetIlevelAdvancedRole() {
    this._ilevelAdvancedRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ilevelAdvancedRoleInput() {
    return this._ilevelAdvancedRole.internalValue;
  }

  // okta_app - computed: true, optional: true, required: false
  private _oktaApp = new ResourceRemoteInfoOktaAppOutputReference(this, "okta_app");
  public get oktaApp() {
    return this._oktaApp;
  }
  public putOktaApp(value: ResourceRemoteInfoOktaApp) {
    this._oktaApp.internalValue = value;
  }
  public resetOktaApp() {
    this._oktaApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaAppInput() {
    return this._oktaApp.internalValue;
  }

  // okta_custom_role - computed: true, optional: true, required: false
  private _oktaCustomRole = new ResourceRemoteInfoOktaCustomRoleOutputReference(this, "okta_custom_role");
  public get oktaCustomRole() {
    return this._oktaCustomRole;
  }
  public putOktaCustomRole(value: ResourceRemoteInfoOktaCustomRole) {
    this._oktaCustomRole.internalValue = value;
  }
  public resetOktaCustomRole() {
    this._oktaCustomRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaCustomRoleInput() {
    return this._oktaCustomRole.internalValue;
  }

  // okta_standard_role - computed: true, optional: true, required: false
  private _oktaStandardRole = new ResourceRemoteInfoOktaStandardRoleOutputReference(this, "okta_standard_role");
  public get oktaStandardRole() {
    return this._oktaStandardRole;
  }
  public putOktaStandardRole(value: ResourceRemoteInfoOktaStandardRole) {
    this._oktaStandardRole.internalValue = value;
  }
  public resetOktaStandardRole() {
    this._oktaStandardRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaStandardRoleInput() {
    return this._oktaStandardRole.internalValue;
  }

  // openai_platform_project - computed: true, optional: true, required: false
  private _openaiPlatformProject = new ResourceRemoteInfoOpenaiPlatformProjectOutputReference(this, "openai_platform_project");
  public get openaiPlatformProject() {
    return this._openaiPlatformProject;
  }
  public putOpenaiPlatformProject(value: ResourceRemoteInfoOpenaiPlatformProject) {
    this._openaiPlatformProject.internalValue = value;
  }
  public resetOpenaiPlatformProject() {
    this._openaiPlatformProject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiPlatformProjectInput() {
    return this._openaiPlatformProject.internalValue;
  }

  // openai_platform_service_account - computed: true, optional: true, required: false
  private _openaiPlatformServiceAccount = new ResourceRemoteInfoOpenaiPlatformServiceAccountOutputReference(this, "openai_platform_service_account");
  public get openaiPlatformServiceAccount() {
    return this._openaiPlatformServiceAccount;
  }
  public putOpenaiPlatformServiceAccount(value: ResourceRemoteInfoOpenaiPlatformServiceAccount) {
    this._openaiPlatformServiceAccount.internalValue = value;
  }
  public resetOpenaiPlatformServiceAccount() {
    this._openaiPlatformServiceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openaiPlatformServiceAccountInput() {
    return this._openaiPlatformServiceAccount.internalValue;
  }

  // oracle_fusion_role - computed: true, optional: true, required: false
  private _oracleFusionRole = new ResourceRemoteInfoOracleFusionRoleOutputReference(this, "oracle_fusion_role");
  public get oracleFusionRole() {
    return this._oracleFusionRole;
  }
  public putOracleFusionRole(value: ResourceRemoteInfoOracleFusionRole) {
    this._oracleFusionRole.internalValue = value;
  }
  public resetOracleFusionRole() {
    this._oracleFusionRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleFusionRoleInput() {
    return this._oracleFusionRole.internalValue;
  }

  // pagerduty_role - computed: true, optional: true, required: false
  private _pagerdutyRole = new ResourceRemoteInfoPagerdutyRoleOutputReference(this, "pagerduty_role");
  public get pagerdutyRole() {
    return this._pagerdutyRole;
  }
  public putPagerdutyRole(value: ResourceRemoteInfoPagerdutyRole) {
    this._pagerdutyRole.internalValue = value;
  }
  public resetPagerdutyRole() {
    this._pagerdutyRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagerdutyRoleInput() {
    return this._pagerdutyRole.internalValue;
  }

  // salesforce_permission_set - computed: true, optional: true, required: false
  private _salesforcePermissionSet = new ResourceRemoteInfoSalesforcePermissionSetOutputReference(this, "salesforce_permission_set");
  public get salesforcePermissionSet() {
    return this._salesforcePermissionSet;
  }
  public putSalesforcePermissionSet(value: ResourceRemoteInfoSalesforcePermissionSet) {
    this._salesforcePermissionSet.internalValue = value;
  }
  public resetSalesforcePermissionSet() {
    this._salesforcePermissionSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforcePermissionSetInput() {
    return this._salesforcePermissionSet.internalValue;
  }

  // salesforce_profile - computed: true, optional: true, required: false
  private _salesforceProfile = new ResourceRemoteInfoSalesforceProfileOutputReference(this, "salesforce_profile");
  public get salesforceProfile() {
    return this._salesforceProfile;
  }
  public putSalesforceProfile(value: ResourceRemoteInfoSalesforceProfile) {
    this._salesforceProfile.internalValue = value;
  }
  public resetSalesforceProfile() {
    this._salesforceProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceProfileInput() {
    return this._salesforceProfile.internalValue;
  }

  // salesforce_role - computed: true, optional: true, required: false
  private _salesforceRole = new ResourceRemoteInfoSalesforceRoleOutputReference(this, "salesforce_role");
  public get salesforceRole() {
    return this._salesforceRole;
  }
  public putSalesforceRole(value: ResourceRemoteInfoSalesforceRole) {
    this._salesforceRole.internalValue = value;
  }
  public resetSalesforceRole() {
    this._salesforceRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceRoleInput() {
    return this._salesforceRole.internalValue;
  }

  // snowflake_database - computed: true, optional: true, required: false
  private _snowflakeDatabase = new ResourceRemoteInfoSnowflakeDatabaseOutputReference(this, "snowflake_database");
  public get snowflakeDatabase() {
    return this._snowflakeDatabase;
  }
  public putSnowflakeDatabase(value: ResourceRemoteInfoSnowflakeDatabase) {
    this._snowflakeDatabase.internalValue = value;
  }
  public resetSnowflakeDatabase() {
    this._snowflakeDatabase.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeDatabaseInput() {
    return this._snowflakeDatabase.internalValue;
  }

  // snowflake_schema - computed: true, optional: true, required: false
  private _snowflakeSchema = new ResourceRemoteInfoSnowflakeSchemaOutputReference(this, "snowflake_schema");
  public get snowflakeSchema() {
    return this._snowflakeSchema;
  }
  public putSnowflakeSchema(value: ResourceRemoteInfoSnowflakeSchema) {
    this._snowflakeSchema.internalValue = value;
  }
  public resetSnowflakeSchema() {
    this._snowflakeSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeSchemaInput() {
    return this._snowflakeSchema.internalValue;
  }

  // snowflake_table - computed: true, optional: true, required: false
  private _snowflakeTable = new ResourceRemoteInfoSnowflakeTableOutputReference(this, "snowflake_table");
  public get snowflakeTable() {
    return this._snowflakeTable;
  }
  public putSnowflakeTable(value: ResourceRemoteInfoSnowflakeTable) {
    this._snowflakeTable.internalValue = value;
  }
  public resetSnowflakeTable() {
    this._snowflakeTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeTableInput() {
    return this._snowflakeTable.internalValue;
  }

  // tailscale_ssh - computed: true, optional: true, required: false
  private _tailscaleSsh = new ResourceRemoteInfoTailscaleSshOutputReference(this, "tailscale_ssh");
  public get tailscaleSsh() {
    return this._tailscaleSsh;
  }
  public putTailscaleSsh(value: ResourceRemoteInfoTailscaleSsh) {
    this._tailscaleSsh.internalValue = value;
  }
  public resetTailscaleSsh() {
    this._tailscaleSsh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tailscaleSshInput() {
    return this._tailscaleSsh.internalValue;
  }

  // teleport_role - computed: true, optional: true, required: false
  private _teleportRole = new ResourceRemoteInfoTeleportRoleOutputReference(this, "teleport_role");
  public get teleportRole() {
    return this._teleportRole;
  }
  public putTeleportRole(value: ResourceRemoteInfoTeleportRole) {
    this._teleportRole.internalValue = value;
  }
  public resetTeleportRole() {
    this._teleportRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teleportRoleInput() {
    return this._teleportRole.internalValue;
  }

  // workday_role - computed: true, optional: true, required: false
  private _workdayRole = new ResourceRemoteInfoWorkdayRoleOutputReference(this, "workday_role");
  public get workdayRole() {
    return this._workdayRole;
  }
  public putWorkdayRole(value: ResourceRemoteInfoWorkdayRole) {
    this._workdayRole.internalValue = value;
  }
  public resetWorkdayRole() {
    this._workdayRole.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workdayRoleInput() {
    return this._workdayRole.internalValue;
  }
}
export interface ResourceRequestConfigurationsCondition {
  /**
  * The list of group IDs to match. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#group_ids Resource#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * The list of role remote IDs to match. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#role_remote_ids Resource#role_remote_ids}
  */
  readonly roleRemoteIds?: string[];
}

export function resourceRequestConfigurationsConditionToTerraform(struct?: ResourceRequestConfigurationsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    role_remote_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roleRemoteIds),
  }
}


export function resourceRequestConfigurationsConditionToHclTerraform(struct?: ResourceRequestConfigurationsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_remote_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roleRemoteIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRequestConfigurationsConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceRequestConfigurationsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._roleRemoteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleRemoteIds = this._roleRemoteIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRequestConfigurationsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupIds = undefined;
      this._roleRemoteIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupIds = value.groupIds;
      this._roleRemoteIds = value.roleRemoteIds;
    }
  }

  // group_ids - computed: true, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
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

  // role_remote_ids - computed: true, optional: true, required: false
  private _roleRemoteIds?: string[]; 
  public get roleRemoteIds() {
    return cdktf.Fn.tolist(this.getListAttribute('role_remote_ids'));
  }
  public set roleRemoteIds(value: string[]) {
    this._roleRemoteIds = value;
  }
  public resetRoleRemoteIds() {
    this._roleRemoteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleRemoteIdsInput() {
    return this._roleRemoteIds;
  }
}
export interface ResourceRequestConfigurationsReviewerStages {
  /**
  * The operator of the reviewer stage. Admin and manager approval are also treated as reviewers. Default: "AND"; must be one of ["AND", "OR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#operator Resource#operator}
  */
  readonly operator?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#owner_ids Resource#owner_ids}
  */
  readonly ownerIds?: string[];
  /**
  * Whether this reviewer stage should require admin approval. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#require_admin_approval Resource#require_admin_approval}
  */
  readonly requireAdminApproval?: boolean | cdktf.IResolvable;
  /**
  * Whether this reviewer stage should require manager approval. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#require_manager_approval Resource#require_manager_approval}
  */
  readonly requireManagerApproval?: boolean | cdktf.IResolvable;
}

export function resourceRequestConfigurationsReviewerStagesToTerraform(struct?: ResourceRequestConfigurationsReviewerStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    owner_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ownerIds),
    require_admin_approval: cdktf.booleanToTerraform(struct!.requireAdminApproval),
    require_manager_approval: cdktf.booleanToTerraform(struct!.requireManagerApproval),
  }
}


export function resourceRequestConfigurationsReviewerStagesToHclTerraform(struct?: ResourceRequestConfigurationsReviewerStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ownerIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    require_admin_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireAdminApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_manager_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireManagerApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRequestConfigurationsReviewerStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceRequestConfigurationsReviewerStages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._ownerIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerIds = this._ownerIds;
    }
    if (this._requireAdminApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAdminApproval = this._requireAdminApproval;
    }
    if (this._requireManagerApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireManagerApproval = this._requireManagerApproval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRequestConfigurationsReviewerStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._ownerIds = undefined;
      this._requireAdminApproval = undefined;
      this._requireManagerApproval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._ownerIds = value.ownerIds;
      this._requireAdminApproval = value.requireAdminApproval;
      this._requireManagerApproval = value.requireManagerApproval;
    }
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // owner_ids - computed: true, optional: true, required: false
  private _ownerIds?: string[]; 
  public get ownerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('owner_ids'));
  }
  public set ownerIds(value: string[]) {
    this._ownerIds = value;
  }
  public resetOwnerIds() {
    this._ownerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerIdsInput() {
    return this._ownerIds;
  }

  // require_admin_approval - computed: true, optional: true, required: false
  private _requireAdminApproval?: boolean | cdktf.IResolvable; 
  public get requireAdminApproval() {
    return this.getBooleanAttribute('require_admin_approval');
  }
  public set requireAdminApproval(value: boolean | cdktf.IResolvable) {
    this._requireAdminApproval = value;
  }
  public resetRequireAdminApproval() {
    this._requireAdminApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAdminApprovalInput() {
    return this._requireAdminApproval;
  }

  // require_manager_approval - computed: true, optional: true, required: false
  private _requireManagerApproval?: boolean | cdktf.IResolvable; 
  public get requireManagerApproval() {
    return this.getBooleanAttribute('require_manager_approval');
  }
  public set requireManagerApproval(value: boolean | cdktf.IResolvable) {
    this._requireManagerApproval = value;
  }
  public resetRequireManagerApproval() {
    this._requireManagerApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireManagerApprovalInput() {
    return this._requireManagerApproval;
  }
}

export class ResourceRequestConfigurationsReviewerStagesList extends cdktf.ComplexList {
  public internalValue? : ResourceRequestConfigurationsReviewerStages[] | cdktf.IResolvable

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
  public get(index: number): ResourceRequestConfigurationsReviewerStagesOutputReference {
    return new ResourceRequestConfigurationsReviewerStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceRequestConfigurations {
  /**
  * A bool representing whether or not to allow requests for this resource. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#allow_requests Resource#allow_requests}
  */
  readonly allowRequests?: boolean | cdktf.IResolvable;
  /**
  * A bool representing whether or not to automatically approve requests for this resource. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#auto_approval Resource#auto_approval}
  */
  readonly autoApproval?: boolean | cdktf.IResolvable;
  /**
  * The condition for the request configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#condition Resource#condition}
  */
  readonly condition?: ResourceRequestConfigurationsCondition;
  /**
  * The duration for which access can be extended (in minutes). Set to 0 to disable extensions. When > 0, extensions are enabled for the specified duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#extensions_duration_in_minutes Resource#extensions_duration_in_minutes}
  */
  readonly extensionsDurationInMinutes?: number;
  /**
  * The maximum duration for which the resource can be requested (in minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#max_duration Resource#max_duration}
  */
  readonly maxDuration?: number;
  /**
  * The priority of the request configuration. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#priority Resource#priority}
  */
  readonly priority?: number;
  /**
  * The recommended duration for which the resource should be requested (in minutes). -1 represents an indefinite duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#recommended_duration Resource#recommended_duration}
  */
  readonly recommendedDuration?: number;
  /**
  * The ID of the associated request template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#request_template_id Resource#request_template_id}
  */
  readonly requestTemplateId?: string;
  /**
  * A bool representing whether or not to require MFA for requesting access to this resource. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#require_mfa_to_request Resource#require_mfa_to_request}
  */
  readonly requireMfaToRequest?: boolean | cdktf.IResolvable;
  /**
  * A bool representing whether or not access requests to the resource require an access ticket. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#require_support_ticket Resource#require_support_ticket}
  */
  readonly requireSupportTicket?: boolean | cdktf.IResolvable;
  /**
  * The list of reviewer stages for the request configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#reviewer_stages Resource#reviewer_stages}
  */
  readonly reviewerStages?: ResourceRequestConfigurationsReviewerStages[] | cdktf.IResolvable;
}

export function resourceRequestConfigurationsToTerraform(struct?: ResourceRequestConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_requests: cdktf.booleanToTerraform(struct!.allowRequests),
    auto_approval: cdktf.booleanToTerraform(struct!.autoApproval),
    condition: resourceRequestConfigurationsConditionToTerraform(struct!.condition),
    extensions_duration_in_minutes: cdktf.numberToTerraform(struct!.extensionsDurationInMinutes),
    max_duration: cdktf.numberToTerraform(struct!.maxDuration),
    priority: cdktf.numberToTerraform(struct!.priority),
    recommended_duration: cdktf.numberToTerraform(struct!.recommendedDuration),
    request_template_id: cdktf.stringToTerraform(struct!.requestTemplateId),
    require_mfa_to_request: cdktf.booleanToTerraform(struct!.requireMfaToRequest),
    require_support_ticket: cdktf.booleanToTerraform(struct!.requireSupportTicket),
    reviewer_stages: cdktf.listMapper(resourceRequestConfigurationsReviewerStagesToTerraform, false)(struct!.reviewerStages),
  }
}


export function resourceRequestConfigurationsToHclTerraform(struct?: ResourceRequestConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_requests: {
      value: cdktf.booleanToHclTerraform(struct!.allowRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_approval: {
      value: cdktf.booleanToHclTerraform(struct!.autoApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: resourceRequestConfigurationsConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "struct",
      storageClassType: "ResourceRequestConfigurationsCondition",
    },
    extensions_duration_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.extensionsDurationInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_duration: {
      value: cdktf.numberToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recommended_duration: {
      value: cdktf.numberToHclTerraform(struct!.recommendedDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_template_id: {
      value: cdktf.stringToHclTerraform(struct!.requestTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_mfa_to_request: {
      value: cdktf.booleanToHclTerraform(struct!.requireMfaToRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_support_ticket: {
      value: cdktf.booleanToHclTerraform(struct!.requireSupportTicket),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reviewer_stages: {
      value: cdktf.listMapperHcl(resourceRequestConfigurationsReviewerStagesToHclTerraform, false)(struct!.reviewerStages),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceRequestConfigurationsReviewerStagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceRequestConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceRequestConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRequests = this._allowRequests;
    }
    if (this._autoApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApproval = this._autoApproval;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._extensionsDurationInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensionsDurationInMinutes = this._extensionsDurationInMinutes;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._recommendedDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendedDuration = this._recommendedDuration;
    }
    if (this._requestTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTemplateId = this._requestTemplateId;
    }
    if (this._requireMfaToRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireMfaToRequest = this._requireMfaToRequest;
    }
    if (this._requireSupportTicket !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSupportTicket = this._requireSupportTicket;
    }
    if (this._reviewerStages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewerStages = this._reviewerStages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceRequestConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRequests = undefined;
      this._autoApproval = undefined;
      this._condition.internalValue = undefined;
      this._extensionsDurationInMinutes = undefined;
      this._maxDuration = undefined;
      this._priority = undefined;
      this._recommendedDuration = undefined;
      this._requestTemplateId = undefined;
      this._requireMfaToRequest = undefined;
      this._requireSupportTicket = undefined;
      this._reviewerStages.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRequests = value.allowRequests;
      this._autoApproval = value.autoApproval;
      this._condition.internalValue = value.condition;
      this._extensionsDurationInMinutes = value.extensionsDurationInMinutes;
      this._maxDuration = value.maxDuration;
      this._priority = value.priority;
      this._recommendedDuration = value.recommendedDuration;
      this._requestTemplateId = value.requestTemplateId;
      this._requireMfaToRequest = value.requireMfaToRequest;
      this._requireSupportTicket = value.requireSupportTicket;
      this._reviewerStages.internalValue = value.reviewerStages;
    }
  }

  // allow_requests - computed: true, optional: true, required: false
  private _allowRequests?: boolean | cdktf.IResolvable; 
  public get allowRequests() {
    return this.getBooleanAttribute('allow_requests');
  }
  public set allowRequests(value: boolean | cdktf.IResolvable) {
    this._allowRequests = value;
  }
  public resetAllowRequests() {
    this._allowRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRequestsInput() {
    return this._allowRequests;
  }

  // auto_approval - computed: true, optional: true, required: false
  private _autoApproval?: boolean | cdktf.IResolvable; 
  public get autoApproval() {
    return this.getBooleanAttribute('auto_approval');
  }
  public set autoApproval(value: boolean | cdktf.IResolvable) {
    this._autoApproval = value;
  }
  public resetAutoApproval() {
    this._autoApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApprovalInput() {
    return this._autoApproval;
  }

  // condition - computed: true, optional: true, required: false
  private _condition = new ResourceRequestConfigurationsConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ResourceRequestConfigurationsCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // extensions_duration_in_minutes - computed: true, optional: true, required: false
  private _extensionsDurationInMinutes?: number; 
  public get extensionsDurationInMinutes() {
    return this.getNumberAttribute('extensions_duration_in_minutes');
  }
  public set extensionsDurationInMinutes(value: number) {
    this._extensionsDurationInMinutes = value;
  }
  public resetExtensionsDurationInMinutes() {
    this._extensionsDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsDurationInMinutesInput() {
    return this._extensionsDurationInMinutes;
  }

  // max_duration - computed: true, optional: true, required: false
  private _maxDuration?: number; 
  public get maxDuration() {
    return this.getNumberAttribute('max_duration');
  }
  public set maxDuration(value: number) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // recommended_duration - computed: true, optional: true, required: false
  private _recommendedDuration?: number; 
  public get recommendedDuration() {
    return this.getNumberAttribute('recommended_duration');
  }
  public set recommendedDuration(value: number) {
    this._recommendedDuration = value;
  }
  public resetRecommendedDuration() {
    this._recommendedDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedDurationInput() {
    return this._recommendedDuration;
  }

  // request_template_id - computed: true, optional: true, required: false
  private _requestTemplateId?: string; 
  public get requestTemplateId() {
    return this.getStringAttribute('request_template_id');
  }
  public set requestTemplateId(value: string) {
    this._requestTemplateId = value;
  }
  public resetRequestTemplateId() {
    this._requestTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateIdInput() {
    return this._requestTemplateId;
  }

  // require_mfa_to_request - computed: true, optional: true, required: false
  private _requireMfaToRequest?: boolean | cdktf.IResolvable; 
  public get requireMfaToRequest() {
    return this.getBooleanAttribute('require_mfa_to_request');
  }
  public set requireMfaToRequest(value: boolean | cdktf.IResolvable) {
    this._requireMfaToRequest = value;
  }
  public resetRequireMfaToRequest() {
    this._requireMfaToRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMfaToRequestInput() {
    return this._requireMfaToRequest;
  }

  // require_support_ticket - computed: true, optional: true, required: false
  private _requireSupportTicket?: boolean | cdktf.IResolvable; 
  public get requireSupportTicket() {
    return this.getBooleanAttribute('require_support_ticket');
  }
  public set requireSupportTicket(value: boolean | cdktf.IResolvable) {
    this._requireSupportTicket = value;
  }
  public resetRequireSupportTicket() {
    this._requireSupportTicket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSupportTicketInput() {
    return this._requireSupportTicket;
  }

  // reviewer_stages - computed: true, optional: true, required: false
  private _reviewerStages = new ResourceRequestConfigurationsReviewerStagesList(this, "reviewer_stages", false);
  public get reviewerStages() {
    return this._reviewerStages;
  }
  public putReviewerStages(value: ResourceRequestConfigurationsReviewerStages[] | cdktf.IResolvable) {
    this._reviewerStages.internalValue = value;
  }
  public resetReviewerStages() {
    this._reviewerStages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewerStagesInput() {
    return this._reviewerStages.internalValue;
  }
}

export class ResourceRequestConfigurationsList extends cdktf.ComplexList {
  public internalValue? : ResourceRequestConfigurations[] | cdktf.IResolvable

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
  public get(index: number): ResourceRequestConfigurationsOutputReference {
    return new ResourceRequestConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTicketPropagation {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#enabled_on_grant Resource#enabled_on_grant}
  */
  readonly enabledOnGrant?: boolean | cdktf.IResolvable;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#enabled_on_revocation Resource#enabled_on_revocation}
  */
  readonly enabledOnRevocation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#ticket_project_id Resource#ticket_project_id}
  */
  readonly ticketProjectId?: string;
  /**
  * The third party ticketing platform provider. must be one of ["JIRA", "LINEAR", "SERVICE_NOW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#ticket_provider Resource#ticket_provider}
  */
  readonly ticketProvider?: string;
}

export function resourceTicketPropagationToTerraform(struct?: ResourceTicketPropagation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_on_grant: cdktf.booleanToTerraform(struct!.enabledOnGrant),
    enabled_on_revocation: cdktf.booleanToTerraform(struct!.enabledOnRevocation),
    ticket_project_id: cdktf.stringToTerraform(struct!.ticketProjectId),
    ticket_provider: cdktf.stringToTerraform(struct!.ticketProvider),
  }
}


export function resourceTicketPropagationToHclTerraform(struct?: ResourceTicketPropagation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_on_grant: {
      value: cdktf.booleanToHclTerraform(struct!.enabledOnGrant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled_on_revocation: {
      value: cdktf.booleanToHclTerraform(struct!.enabledOnRevocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ticket_project_id: {
      value: cdktf.stringToHclTerraform(struct!.ticketProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ticket_provider: {
      value: cdktf.stringToHclTerraform(struct!.ticketProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTicketPropagationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceTicketPropagation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledOnGrant !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledOnGrant = this._enabledOnGrant;
    }
    if (this._enabledOnRevocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledOnRevocation = this._enabledOnRevocation;
    }
    if (this._ticketProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketProjectId = this._ticketProjectId;
    }
    if (this._ticketProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketProvider = this._ticketProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTicketPropagation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledOnGrant = undefined;
      this._enabledOnRevocation = undefined;
      this._ticketProjectId = undefined;
      this._ticketProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledOnGrant = value.enabledOnGrant;
      this._enabledOnRevocation = value.enabledOnRevocation;
      this._ticketProjectId = value.ticketProjectId;
      this._ticketProvider = value.ticketProvider;
    }
  }

  // enabled_on_grant - computed: true, optional: true, required: false
  private _enabledOnGrant?: boolean | cdktf.IResolvable; 
  public get enabledOnGrant() {
    return this.getBooleanAttribute('enabled_on_grant');
  }
  public set enabledOnGrant(value: boolean | cdktf.IResolvable) {
    this._enabledOnGrant = value;
  }
  public resetEnabledOnGrant() {
    this._enabledOnGrant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOnGrantInput() {
    return this._enabledOnGrant;
  }

  // enabled_on_revocation - computed: true, optional: true, required: false
  private _enabledOnRevocation?: boolean | cdktf.IResolvable; 
  public get enabledOnRevocation() {
    return this.getBooleanAttribute('enabled_on_revocation');
  }
  public set enabledOnRevocation(value: boolean | cdktf.IResolvable) {
    this._enabledOnRevocation = value;
  }
  public resetEnabledOnRevocation() {
    this._enabledOnRevocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledOnRevocationInput() {
    return this._enabledOnRevocation;
  }

  // ticket_project_id - computed: true, optional: true, required: false
  private _ticketProjectId?: string; 
  public get ticketProjectId() {
    return this.getStringAttribute('ticket_project_id');
  }
  public set ticketProjectId(value: string) {
    this._ticketProjectId = value;
  }
  public resetTicketProjectId() {
    this._ticketProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketProjectIdInput() {
    return this._ticketProjectId;
  }

  // ticket_provider - computed: true, optional: true, required: false
  private _ticketProvider?: string; 
  public get ticketProvider() {
    return this.getStringAttribute('ticket_provider');
  }
  public set ticketProvider(value: string) {
    this._ticketProvider = value;
  }
  public resetTicketProvider() {
    this._ticketProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketProviderInput() {
    return this._ticketProvider;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource opal_resource}
*/
export class Resource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Resource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Resource to import
  * @param importFromId The id of the existing Resource that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Resource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/resources/resource opal_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_resource',
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
    this._adminOwnerId = config.adminOwnerId;
    this._appId = config.appId;
    this._customRequestNotification = config.customRequestNotification;
    this._description = config.description;
    this._extensionsDurationInMinutes = config.extensionsDurationInMinutes;
    this._name = config.name;
    this._remoteInfo.internalValue = config.remoteInfo;
    this._requestConfigurations.internalValue = config.requestConfigurations;
    this._requireMfaToApprove = config.requireMfaToApprove;
    this._requireMfaToConnect = config.requireMfaToConnect;
    this._resourceType = config.resourceType;
    this._riskSensitivityOverride = config.riskSensitivityOverride;
    this._ticketPropagation.internalValue = config.ticketPropagation;
    this._visibility = config.visibility;
    this._visibilityGroupIds = config.visibilityGroupIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_owner_id - computed: true, optional: true, required: false
  private _adminOwnerId?: string; 
  public get adminOwnerId() {
    return this.getStringAttribute('admin_owner_id');
  }
  public set adminOwnerId(value: string) {
    this._adminOwnerId = value;
  }
  public resetAdminOwnerId() {
    this._adminOwnerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminOwnerIdInput() {
    return this._adminOwnerId;
  }

  // ancestor_resource_ids - computed: true, optional: false, required: false
  public get ancestorResourceIds() {
    return this.getListAttribute('ancestor_resource_ids');
  }

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // custom_request_notification - computed: true, optional: true, required: false
  private _customRequestNotification?: string; 
  public get customRequestNotification() {
    return this.getStringAttribute('custom_request_notification');
  }
  public set customRequestNotification(value: string) {
    this._customRequestNotification = value;
  }
  public resetCustomRequestNotification() {
    this._customRequestNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRequestNotificationInput() {
    return this._customRequestNotification;
  }

  // descendant_resource_ids - computed: true, optional: false, required: false
  public get descendantResourceIds() {
    return this.getListAttribute('descendant_resource_ids');
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

  // extensions_duration_in_minutes - computed: true, optional: true, required: false
  private _extensionsDurationInMinutes?: number; 
  public get extensionsDurationInMinutes() {
    return this.getNumberAttribute('extensions_duration_in_minutes');
  }
  public set extensionsDurationInMinutes(value: number) {
    this._extensionsDurationInMinutes = value;
  }
  public resetExtensionsDurationInMinutes() {
    this._extensionsDurationInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsDurationInMinutesInput() {
    return this._extensionsDurationInMinutes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_successful_sync - computed: true, optional: false, required: false
  private _lastSuccessfulSync = new ResourceLastSuccessfulSyncOutputReference(this, "last_successful_sync");
  public get lastSuccessfulSync() {
    return this._lastSuccessfulSync;
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

  // parent_resource_id - computed: true, optional: false, required: false
  public get parentResourceId() {
    return this.getStringAttribute('parent_resource_id');
  }

  // remote_info - computed: true, optional: true, required: false
  private _remoteInfo = new ResourceRemoteInfoOutputReference(this, "remote_info");
  public get remoteInfo() {
    return this._remoteInfo;
  }
  public putRemoteInfo(value: ResourceRemoteInfo) {
    this._remoteInfo.internalValue = value;
  }
  public resetRemoteInfo() {
    this._remoteInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInfoInput() {
    return this._remoteInfo.internalValue;
  }

  // request_configurations - computed: false, optional: false, required: true
  private _requestConfigurations = new ResourceRequestConfigurationsList(this, "request_configurations", false);
  public get requestConfigurations() {
    return this._requestConfigurations;
  }
  public putRequestConfigurations(value: ResourceRequestConfigurations[] | cdktf.IResolvable) {
    this._requestConfigurations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConfigurationsInput() {
    return this._requestConfigurations.internalValue;
  }

  // require_mfa_to_approve - computed: true, optional: true, required: false
  private _requireMfaToApprove?: boolean | cdktf.IResolvable; 
  public get requireMfaToApprove() {
    return this.getBooleanAttribute('require_mfa_to_approve');
  }
  public set requireMfaToApprove(value: boolean | cdktf.IResolvable) {
    this._requireMfaToApprove = value;
  }
  public resetRequireMfaToApprove() {
    this._requireMfaToApprove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMfaToApproveInput() {
    return this._requireMfaToApprove;
  }

  // require_mfa_to_connect - computed: true, optional: true, required: false
  private _requireMfaToConnect?: boolean | cdktf.IResolvable; 
  public get requireMfaToConnect() {
    return this.getBooleanAttribute('require_mfa_to_connect');
  }
  public set requireMfaToConnect(value: boolean | cdktf.IResolvable) {
    this._requireMfaToConnect = value;
  }
  public resetRequireMfaToConnect() {
    this._requireMfaToConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireMfaToConnectInput() {
    return this._requireMfaToConnect;
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

  // risk_sensitivity - computed: true, optional: false, required: false
  public get riskSensitivity() {
    return this.getStringAttribute('risk_sensitivity');
  }

  // risk_sensitivity_override - computed: true, optional: true, required: false
  private _riskSensitivityOverride?: string; 
  public get riskSensitivityOverride() {
    return this.getStringAttribute('risk_sensitivity_override');
  }
  public set riskSensitivityOverride(value: string) {
    this._riskSensitivityOverride = value;
  }
  public resetRiskSensitivityOverride() {
    this._riskSensitivityOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskSensitivityOverrideInput() {
    return this._riskSensitivityOverride;
  }

  // ticket_propagation - computed: true, optional: true, required: false
  private _ticketPropagation = new ResourceTicketPropagationOutputReference(this, "ticket_propagation");
  public get ticketPropagation() {
    return this._ticketPropagation;
  }
  public putTicketPropagation(value: ResourceTicketPropagation) {
    this._ticketPropagation.internalValue = value;
  }
  public resetTicketPropagation() {
    this._ticketPropagation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketPropagationInput() {
    return this._ticketPropagation.internalValue;
  }

  // visibility - computed: false, optional: false, required: true
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // visibility_group_ids - computed: true, optional: true, required: false
  private _visibilityGroupIds?: string[]; 
  public get visibilityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('visibility_group_ids'));
  }
  public set visibilityGroupIds(value: string[]) {
    this._visibilityGroupIds = value;
  }
  public resetVisibilityGroupIds() {
    this._visibilityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityGroupIdsInput() {
    return this._visibilityGroupIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_owner_id: cdktf.stringToTerraform(this._adminOwnerId),
      app_id: cdktf.stringToTerraform(this._appId),
      custom_request_notification: cdktf.stringToTerraform(this._customRequestNotification),
      description: cdktf.stringToTerraform(this._description),
      extensions_duration_in_minutes: cdktf.numberToTerraform(this._extensionsDurationInMinutes),
      name: cdktf.stringToTerraform(this._name),
      remote_info: resourceRemoteInfoToTerraform(this._remoteInfo.internalValue),
      request_configurations: cdktf.listMapper(resourceRequestConfigurationsToTerraform, false)(this._requestConfigurations.internalValue),
      require_mfa_to_approve: cdktf.booleanToTerraform(this._requireMfaToApprove),
      require_mfa_to_connect: cdktf.booleanToTerraform(this._requireMfaToConnect),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      risk_sensitivity_override: cdktf.stringToTerraform(this._riskSensitivityOverride),
      ticket_propagation: resourceTicketPropagationToTerraform(this._ticketPropagation.internalValue),
      visibility: cdktf.stringToTerraform(this._visibility),
      visibility_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._visibilityGroupIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_owner_id: {
        value: cdktf.stringToHclTerraform(this._adminOwnerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_request_notification: {
        value: cdktf.stringToHclTerraform(this._customRequestNotification),
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
      extensions_duration_in_minutes: {
        value: cdktf.numberToHclTerraform(this._extensionsDurationInMinutes),
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
      remote_info: {
        value: resourceRemoteInfoToHclTerraform(this._remoteInfo.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceRemoteInfo",
      },
      request_configurations: {
        value: cdktf.listMapperHcl(resourceRequestConfigurationsToHclTerraform, false)(this._requestConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceRequestConfigurationsList",
      },
      require_mfa_to_approve: {
        value: cdktf.booleanToHclTerraform(this._requireMfaToApprove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_mfa_to_connect: {
        value: cdktf.booleanToHclTerraform(this._requireMfaToConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk_sensitivity_override: {
        value: cdktf.stringToHclTerraform(this._riskSensitivityOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ticket_propagation: {
        value: resourceTicketPropagationToHclTerraform(this._ticketPropagation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceTicketPropagation",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      visibility_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._visibilityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
