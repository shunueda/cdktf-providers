// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRegionDeploymentTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#default_worker_pool_id CloudRegionDeploymentTarget#default_worker_pool_id}
  */
  readonly defaultWorkerPoolId?: string;
  /**
  * A list of environment IDs associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#environments CloudRegionDeploymentTarget#environments}
  */
  readonly environments: string[];
  /**
  * Represents the health status of this deployment target. Valid health statuses are `HasWarnings`, `Healthy`, `Unavailable`, `Unhealthy`, or `Unknown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#health_status CloudRegionDeploymentTarget#health_status}
  */
  readonly healthStatus?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#id CloudRegionDeploymentTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#is_disabled CloudRegionDeploymentTarget#is_disabled}
  */
  readonly isDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#machine_policy_id CloudRegionDeploymentTarget#machine_policy_id}
  */
  readonly machinePolicyId?: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#name CloudRegionDeploymentTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#operating_system CloudRegionDeploymentTarget#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#roles CloudRegionDeploymentTarget#roles}
  */
  readonly roles: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#shell_name CloudRegionDeploymentTarget#shell_name}
  */
  readonly shellName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#shell_version CloudRegionDeploymentTarget#shell_version}
  */
  readonly shellVersion?: string;
  /**
  * The space ID associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#space_id CloudRegionDeploymentTarget#space_id}
  */
  readonly spaceId?: string;
  /**
  * The status of this resource. Valid statuses are `CalamariNeedsUpgrade`, `Disabled`, `NeedsUpgrade`, `Offline`, `Online`, or `Unknown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#status CloudRegionDeploymentTarget#status}
  */
  readonly status?: string;
  /**
  * A summary elaborating on the status of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#status_summary CloudRegionDeploymentTarget#status_summary}
  */
  readonly statusSummary?: string;
  /**
  * A list of tenant tags associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#tenant_tags CloudRegionDeploymentTarget#tenant_tags}
  */
  readonly tenantTags?: string[];
  /**
  * The tenanted deployment mode of the resource. Valid account types are `Untenanted`, `TenantedOrUntenanted`, or `Tenanted`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#tenanted_deployment_participation CloudRegionDeploymentTarget#tenanted_deployment_participation}
  */
  readonly tenantedDeploymentParticipation?: string;
  /**
  * A list of tenant IDs associated with this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#tenants CloudRegionDeploymentTarget#tenants}
  */
  readonly tenants?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#thumbprint CloudRegionDeploymentTarget#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#uri CloudRegionDeploymentTarget#uri}
  */
  readonly uri?: string;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#endpoint CloudRegionDeploymentTarget#endpoint}
  */
  readonly endpoint?: CloudRegionDeploymentTargetEndpoint[] | cdktf.IResolvable;
}
export interface CloudRegionDeploymentTargetEndpointAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#account_id CloudRegionDeploymentTarget#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#admin_login CloudRegionDeploymentTarget#admin_login}
  */
  readonly adminLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#assume_role CloudRegionDeploymentTarget#assume_role}
  */
  readonly assumeRole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#assume_role_external_id CloudRegionDeploymentTarget#assume_role_external_id}
  */
  readonly assumeRoleExternalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#assume_role_session_duration CloudRegionDeploymentTarget#assume_role_session_duration}
  */
  readonly assumeRoleSessionDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#assumed_role_arn CloudRegionDeploymentTarget#assumed_role_arn}
  */
  readonly assumedRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#assumed_role_session CloudRegionDeploymentTarget#assumed_role_session}
  */
  readonly assumedRoleSession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#authentication_type CloudRegionDeploymentTarget#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#client_certificate CloudRegionDeploymentTarget#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#cluster_name CloudRegionDeploymentTarget#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#cluster_resource_group CloudRegionDeploymentTarget#cluster_resource_group}
  */
  readonly clusterResourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#impersonate_service_account CloudRegionDeploymentTarget#impersonate_service_account}
  */
  readonly impersonateServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#project CloudRegionDeploymentTarget#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#region CloudRegionDeploymentTarget#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#service_account_emails CloudRegionDeploymentTarget#service_account_emails}
  */
  readonly serviceAccountEmails?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#token_path CloudRegionDeploymentTarget#token_path}
  */
  readonly tokenPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#use_instance_role CloudRegionDeploymentTarget#use_instance_role}
  */
  readonly useInstanceRole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#use_vm_service_account CloudRegionDeploymentTarget#use_vm_service_account}
  */
  readonly useVmServiceAccount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#zone CloudRegionDeploymentTarget#zone}
  */
  readonly zone?: string;
}

export function cloudRegionDeploymentTargetEndpointAuthenticationToTerraform(struct?: CloudRegionDeploymentTargetEndpointAuthenticationOutputReference | CloudRegionDeploymentTargetEndpointAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    admin_login: cdktf.stringToTerraform(struct!.adminLogin),
    assume_role: cdktf.booleanToTerraform(struct!.assumeRole),
    assume_role_external_id: cdktf.stringToTerraform(struct!.assumeRoleExternalId),
    assume_role_session_duration: cdktf.numberToTerraform(struct!.assumeRoleSessionDuration),
    assumed_role_arn: cdktf.stringToTerraform(struct!.assumedRoleArn),
    assumed_role_session: cdktf.stringToTerraform(struct!.assumedRoleSession),
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cluster_resource_group: cdktf.stringToTerraform(struct!.clusterResourceGroup),
    impersonate_service_account: cdktf.booleanToTerraform(struct!.impersonateServiceAccount),
    project: cdktf.stringToTerraform(struct!.project),
    region: cdktf.stringToTerraform(struct!.region),
    service_account_emails: cdktf.stringToTerraform(struct!.serviceAccountEmails),
    token_path: cdktf.stringToTerraform(struct!.tokenPath),
    use_instance_role: cdktf.booleanToTerraform(struct!.useInstanceRole),
    use_vm_service_account: cdktf.booleanToTerraform(struct!.useVmServiceAccount),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function cloudRegionDeploymentTargetEndpointAuthenticationToHclTerraform(struct?: CloudRegionDeploymentTargetEndpointAuthenticationOutputReference | CloudRegionDeploymentTargetEndpointAuthentication): any {
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
    admin_login: {
      value: cdktf.stringToHclTerraform(struct!.adminLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assume_role: {
      value: cdktf.booleanToHclTerraform(struct!.assumeRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assume_role_external_id: {
      value: cdktf.stringToHclTerraform(struct!.assumeRoleExternalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assume_role_session_duration: {
      value: cdktf.numberToHclTerraform(struct!.assumeRoleSessionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assumed_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.assumedRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assumed_role_session: {
      value: cdktf.stringToHclTerraform(struct!.assumedRoleSession),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.clusterResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    impersonate_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.impersonateServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
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
    service_account_emails: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_path: {
      value: cdktf.stringToHclTerraform(struct!.tokenPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_instance_role: {
      value: cdktf.booleanToHclTerraform(struct!.useInstanceRole),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_vm_service_account: {
      value: cdktf.booleanToHclTerraform(struct!.useVmServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class CloudRegionDeploymentTargetEndpointAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRegionDeploymentTargetEndpointAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._adminLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminLogin = this._adminLogin;
    }
    if (this._assumeRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRole = this._assumeRole;
    }
    if (this._assumeRoleExternalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleExternalId = this._assumeRoleExternalId;
    }
    if (this._assumeRoleSessionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumeRoleSessionDuration = this._assumeRoleSessionDuration;
    }
    if (this._assumedRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumedRoleArn = this._assumedRoleArn;
    }
    if (this._assumedRoleSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.assumedRoleSession = this._assumedRoleSession;
    }
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._clusterResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResourceGroup = this._clusterResourceGroup;
    }
    if (this._impersonateServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.impersonateServiceAccount = this._impersonateServiceAccount;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceAccountEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmails = this._serviceAccountEmails;
    }
    if (this._tokenPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenPath = this._tokenPath;
    }
    if (this._useInstanceRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInstanceRole = this._useInstanceRole;
    }
    if (this._useVmServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.useVmServiceAccount = this._useVmServiceAccount;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRegionDeploymentTargetEndpointAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
      this._adminLogin = undefined;
      this._assumeRole = undefined;
      this._assumeRoleExternalId = undefined;
      this._assumeRoleSessionDuration = undefined;
      this._assumedRoleArn = undefined;
      this._assumedRoleSession = undefined;
      this._authenticationType = undefined;
      this._clientCertificate = undefined;
      this._clusterName = undefined;
      this._clusterResourceGroup = undefined;
      this._impersonateServiceAccount = undefined;
      this._project = undefined;
      this._region = undefined;
      this._serviceAccountEmails = undefined;
      this._tokenPath = undefined;
      this._useInstanceRole = undefined;
      this._useVmServiceAccount = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
      this._adminLogin = value.adminLogin;
      this._assumeRole = value.assumeRole;
      this._assumeRoleExternalId = value.assumeRoleExternalId;
      this._assumeRoleSessionDuration = value.assumeRoleSessionDuration;
      this._assumedRoleArn = value.assumedRoleArn;
      this._assumedRoleSession = value.assumedRoleSession;
      this._authenticationType = value.authenticationType;
      this._clientCertificate = value.clientCertificate;
      this._clusterName = value.clusterName;
      this._clusterResourceGroup = value.clusterResourceGroup;
      this._impersonateServiceAccount = value.impersonateServiceAccount;
      this._project = value.project;
      this._region = value.region;
      this._serviceAccountEmails = value.serviceAccountEmails;
      this._tokenPath = value.tokenPath;
      this._useInstanceRole = value.useInstanceRole;
      this._useVmServiceAccount = value.useVmServiceAccount;
      this._zone = value.zone;
    }
  }

  // account_id - computed: false, optional: true, required: false
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

  // admin_login - computed: false, optional: true, required: false
  private _adminLogin?: string; 
  public get adminLogin() {
    return this.getStringAttribute('admin_login');
  }
  public set adminLogin(value: string) {
    this._adminLogin = value;
  }
  public resetAdminLogin() {
    this._adminLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminLoginInput() {
    return this._adminLogin;
  }

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: boolean | cdktf.IResolvable; 
  public get assumeRole() {
    return this.getBooleanAttribute('assume_role');
  }
  public set assumeRole(value: boolean | cdktf.IResolvable) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // assume_role_external_id - computed: false, optional: true, required: false
  private _assumeRoleExternalId?: string; 
  public get assumeRoleExternalId() {
    return this.getStringAttribute('assume_role_external_id');
  }
  public set assumeRoleExternalId(value: string) {
    this._assumeRoleExternalId = value;
  }
  public resetAssumeRoleExternalId() {
    this._assumeRoleExternalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleExternalIdInput() {
    return this._assumeRoleExternalId;
  }

  // assume_role_session_duration - computed: false, optional: true, required: false
  private _assumeRoleSessionDuration?: number; 
  public get assumeRoleSessionDuration() {
    return this.getNumberAttribute('assume_role_session_duration');
  }
  public set assumeRoleSessionDuration(value: number) {
    this._assumeRoleSessionDuration = value;
  }
  public resetAssumeRoleSessionDuration() {
    this._assumeRoleSessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleSessionDurationInput() {
    return this._assumeRoleSessionDuration;
  }

  // assumed_role_arn - computed: false, optional: true, required: false
  private _assumedRoleArn?: string; 
  public get assumedRoleArn() {
    return this.getStringAttribute('assumed_role_arn');
  }
  public set assumedRoleArn(value: string) {
    this._assumedRoleArn = value;
  }
  public resetAssumedRoleArn() {
    this._assumedRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumedRoleArnInput() {
    return this._assumedRoleArn;
  }

  // assumed_role_session - computed: false, optional: true, required: false
  private _assumedRoleSession?: string; 
  public get assumedRoleSession() {
    return this.getStringAttribute('assumed_role_session');
  }
  public set assumedRoleSession(value: string) {
    this._assumedRoleSession = value;
  }
  public resetAssumedRoleSession() {
    this._assumedRoleSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumedRoleSessionInput() {
    return this._assumedRoleSession;
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // cluster_name - computed: false, optional: true, required: false
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

  // cluster_resource_group - computed: false, optional: true, required: false
  private _clusterResourceGroup?: string; 
  public get clusterResourceGroup() {
    return this.getStringAttribute('cluster_resource_group');
  }
  public set clusterResourceGroup(value: string) {
    this._clusterResourceGroup = value;
  }
  public resetClusterResourceGroup() {
    this._clusterResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceGroupInput() {
    return this._clusterResourceGroup;
  }

  // impersonate_service_account - computed: false, optional: true, required: false
  private _impersonateServiceAccount?: boolean | cdktf.IResolvable; 
  public get impersonateServiceAccount() {
    return this.getBooleanAttribute('impersonate_service_account');
  }
  public set impersonateServiceAccount(value: boolean | cdktf.IResolvable) {
    this._impersonateServiceAccount = value;
  }
  public resetImpersonateServiceAccount() {
    this._impersonateServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateServiceAccountInput() {
    return this._impersonateServiceAccount;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: true, required: false
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

  // service_account_emails - computed: false, optional: true, required: false
  private _serviceAccountEmails?: string; 
  public get serviceAccountEmails() {
    return this.getStringAttribute('service_account_emails');
  }
  public set serviceAccountEmails(value: string) {
    this._serviceAccountEmails = value;
  }
  public resetServiceAccountEmails() {
    this._serviceAccountEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailsInput() {
    return this._serviceAccountEmails;
  }

  // token_path - computed: false, optional: true, required: false
  private _tokenPath?: string; 
  public get tokenPath() {
    return this.getStringAttribute('token_path');
  }
  public set tokenPath(value: string) {
    this._tokenPath = value;
  }
  public resetTokenPath() {
    this._tokenPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPathInput() {
    return this._tokenPath;
  }

  // use_instance_role - computed: false, optional: true, required: false
  private _useInstanceRole?: boolean | cdktf.IResolvable; 
  public get useInstanceRole() {
    return this.getBooleanAttribute('use_instance_role');
  }
  public set useInstanceRole(value: boolean | cdktf.IResolvable) {
    this._useInstanceRole = value;
  }
  public resetUseInstanceRole() {
    this._useInstanceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInstanceRoleInput() {
    return this._useInstanceRole;
  }

  // use_vm_service_account - computed: false, optional: true, required: false
  private _useVmServiceAccount?: boolean | cdktf.IResolvable; 
  public get useVmServiceAccount() {
    return this.getBooleanAttribute('use_vm_service_account');
  }
  public set useVmServiceAccount(value: boolean | cdktf.IResolvable) {
    this._useVmServiceAccount = value;
  }
  public resetUseVmServiceAccount() {
    this._useVmServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useVmServiceAccountInput() {
    return this._useVmServiceAccount;
  }

  // zone - computed: false, optional: true, required: false
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
export interface CloudRegionDeploymentTargetEndpointContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#feed_id CloudRegionDeploymentTarget#feed_id}
  */
  readonly feedId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#image CloudRegionDeploymentTarget#image}
  */
  readonly image?: string;
}

export function cloudRegionDeploymentTargetEndpointContainerToTerraform(struct?: CloudRegionDeploymentTargetEndpointContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_id: cdktf.stringToTerraform(struct!.feedId),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function cloudRegionDeploymentTargetEndpointContainerToHclTerraform(struct?: CloudRegionDeploymentTargetEndpointContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feed_id: {
      value: cdktf.stringToHclTerraform(struct!.feedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRegionDeploymentTargetEndpointContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRegionDeploymentTargetEndpointContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedId = this._feedId;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRegionDeploymentTargetEndpointContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feedId = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feedId = value.feedId;
      this._image = value.image;
    }
  }

  // feed_id - computed: false, optional: true, required: false
  private _feedId?: string; 
  public get feedId() {
    return this.getStringAttribute('feed_id');
  }
  public set feedId(value: string) {
    this._feedId = value;
  }
  public resetFeedId() {
    this._feedId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedIdInput() {
    return this._feedId;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }
}

export class CloudRegionDeploymentTargetEndpointContainerList extends cdktf.ComplexList {
  public internalValue? : CloudRegionDeploymentTargetEndpointContainer[] | cdktf.IResolvable

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
  public get(index: number): CloudRegionDeploymentTargetEndpointContainerOutputReference {
    return new CloudRegionDeploymentTargetEndpointContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRegionDeploymentTargetEndpointDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#destination_type CloudRegionDeploymentTarget#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#drop_folder_path CloudRegionDeploymentTarget#drop_folder_path}
  */
  readonly dropFolderPath?: string;
}

export function cloudRegionDeploymentTargetEndpointDestinationToTerraform(struct?: CloudRegionDeploymentTargetEndpointDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    drop_folder_path: cdktf.stringToTerraform(struct!.dropFolderPath),
  }
}


export function cloudRegionDeploymentTargetEndpointDestinationToHclTerraform(struct?: CloudRegionDeploymentTargetEndpointDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    drop_folder_path: {
      value: cdktf.stringToHclTerraform(struct!.dropFolderPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRegionDeploymentTargetEndpointDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRegionDeploymentTargetEndpointDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._dropFolderPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropFolderPath = this._dropFolderPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRegionDeploymentTargetEndpointDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationType = undefined;
      this._dropFolderPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationType = value.destinationType;
      this._dropFolderPath = value.dropFolderPath;
    }
  }

  // destination_type - computed: false, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // drop_folder_path - computed: false, optional: true, required: false
  private _dropFolderPath?: string; 
  public get dropFolderPath() {
    return this.getStringAttribute('drop_folder_path');
  }
  public set dropFolderPath(value: string) {
    this._dropFolderPath = value;
  }
  public resetDropFolderPath() {
    this._dropFolderPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropFolderPathInput() {
    return this._dropFolderPath;
  }
}

export class CloudRegionDeploymentTargetEndpointDestinationList extends cdktf.ComplexList {
  public internalValue? : CloudRegionDeploymentTargetEndpointDestination[] | cdktf.IResolvable

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
  public get(index: number): CloudRegionDeploymentTargetEndpointDestinationOutputReference {
    return new CloudRegionDeploymentTargetEndpointDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRegionDeploymentTargetEndpointTentacleVersionDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#upgrade_locked CloudRegionDeploymentTarget#upgrade_locked}
  */
  readonly upgradeLocked?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#upgrade_required CloudRegionDeploymentTarget#upgrade_required}
  */
  readonly upgradeRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#upgrade_suggested CloudRegionDeploymentTarget#upgrade_suggested}
  */
  readonly upgradeSuggested?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#version CloudRegionDeploymentTarget#version}
  */
  readonly version?: string;
}

export function cloudRegionDeploymentTargetEndpointTentacleVersionDetailsToTerraform(struct?: CloudRegionDeploymentTargetEndpointTentacleVersionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upgrade_locked: cdktf.booleanToTerraform(struct!.upgradeLocked),
    upgrade_required: cdktf.booleanToTerraform(struct!.upgradeRequired),
    upgrade_suggested: cdktf.booleanToTerraform(struct!.upgradeSuggested),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function cloudRegionDeploymentTargetEndpointTentacleVersionDetailsToHclTerraform(struct?: CloudRegionDeploymentTargetEndpointTentacleVersionDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upgrade_locked: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeLocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upgrade_required: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upgrade_suggested: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeSuggested),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRegionDeploymentTargetEndpointTentacleVersionDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRegionDeploymentTargetEndpointTentacleVersionDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upgradeLocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeLocked = this._upgradeLocked;
    }
    if (this._upgradeRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeRequired = this._upgradeRequired;
    }
    if (this._upgradeSuggested !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSuggested = this._upgradeSuggested;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRegionDeploymentTargetEndpointTentacleVersionDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._upgradeLocked = undefined;
      this._upgradeRequired = undefined;
      this._upgradeSuggested = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._upgradeLocked = value.upgradeLocked;
      this._upgradeRequired = value.upgradeRequired;
      this._upgradeSuggested = value.upgradeSuggested;
      this._version = value.version;
    }
  }

  // upgrade_locked - computed: true, optional: true, required: false
  private _upgradeLocked?: boolean | cdktf.IResolvable; 
  public get upgradeLocked() {
    return this.getBooleanAttribute('upgrade_locked');
  }
  public set upgradeLocked(value: boolean | cdktf.IResolvable) {
    this._upgradeLocked = value;
  }
  public resetUpgradeLocked() {
    this._upgradeLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeLockedInput() {
    return this._upgradeLocked;
  }

  // upgrade_required - computed: true, optional: true, required: false
  private _upgradeRequired?: boolean | cdktf.IResolvable; 
  public get upgradeRequired() {
    return this.getBooleanAttribute('upgrade_required');
  }
  public set upgradeRequired(value: boolean | cdktf.IResolvable) {
    this._upgradeRequired = value;
  }
  public resetUpgradeRequired() {
    this._upgradeRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeRequiredInput() {
    return this._upgradeRequired;
  }

  // upgrade_suggested - computed: true, optional: true, required: false
  private _upgradeSuggested?: boolean | cdktf.IResolvable; 
  public get upgradeSuggested() {
    return this.getBooleanAttribute('upgrade_suggested');
  }
  public set upgradeSuggested(value: boolean | cdktf.IResolvable) {
    this._upgradeSuggested = value;
  }
  public resetUpgradeSuggested() {
    this._upgradeSuggested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSuggestedInput() {
    return this._upgradeSuggested;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class CloudRegionDeploymentTargetEndpointTentacleVersionDetailsList extends cdktf.ComplexList {
  public internalValue? : CloudRegionDeploymentTargetEndpointTentacleVersionDetails[] | cdktf.IResolvable

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
  public get(index: number): CloudRegionDeploymentTargetEndpointTentacleVersionDetailsOutputReference {
    return new CloudRegionDeploymentTargetEndpointTentacleVersionDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRegionDeploymentTargetEndpoint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#aad_client_credential_secret CloudRegionDeploymentTarget#aad_client_credential_secret}
  */
  readonly aadClientCredentialSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#aad_credential_type CloudRegionDeploymentTarget#aad_credential_type}
  */
  readonly aadCredentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#aad_user_credential_username CloudRegionDeploymentTarget#aad_user_credential_username}
  */
  readonly aadUserCredentialUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#account_id CloudRegionDeploymentTarget#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#applications_directory CloudRegionDeploymentTarget#applications_directory}
  */
  readonly applicationsDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#certificate_signature_algorithm CloudRegionDeploymentTarget#certificate_signature_algorithm}
  */
  readonly certificateSignatureAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#certificate_store_location CloudRegionDeploymentTarget#certificate_store_location}
  */
  readonly certificateStoreLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#certificate_store_name CloudRegionDeploymentTarget#certificate_store_name}
  */
  readonly certificateStoreName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#client_certificate_variable CloudRegionDeploymentTarget#client_certificate_variable}
  */
  readonly clientCertificateVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#cloud_service_name CloudRegionDeploymentTarget#cloud_service_name}
  */
  readonly cloudServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#cluster_certificate CloudRegionDeploymentTarget#cluster_certificate}
  */
  readonly clusterCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#cluster_certificate_path CloudRegionDeploymentTarget#cluster_certificate_path}
  */
  readonly clusterCertificatePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#cluster_url CloudRegionDeploymentTarget#cluster_url}
  */
  readonly clusterUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#communication_style CloudRegionDeploymentTarget#communication_style}
  */
  readonly communicationStyle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#connection_endpoint CloudRegionDeploymentTarget#connection_endpoint}
  */
  readonly connectionEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#container_options CloudRegionDeploymentTarget#container_options}
  */
  readonly containerOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#default_worker_pool_id CloudRegionDeploymentTarget#default_worker_pool_id}
  */
  readonly defaultWorkerPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#dot_net_core_platform CloudRegionDeploymentTarget#dot_net_core_platform}
  */
  readonly dotNetCorePlatform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#fingerprint CloudRegionDeploymentTarget#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#host CloudRegionDeploymentTarget#host}
  */
  readonly host?: string;
  /**
  * The unique ID for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#id CloudRegionDeploymentTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#namespace CloudRegionDeploymentTarget#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#port CloudRegionDeploymentTarget#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#proxy_id CloudRegionDeploymentTarget#proxy_id}
  */
  readonly proxyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#resource_group_name CloudRegionDeploymentTarget#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#running_in_container CloudRegionDeploymentTarget#running_in_container}
  */
  readonly runningInContainer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#security_mode CloudRegionDeploymentTarget#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#server_certificate_thumbprint CloudRegionDeploymentTarget#server_certificate_thumbprint}
  */
  readonly serverCertificateThumbprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#skip_tls_verification CloudRegionDeploymentTarget#skip_tls_verification}
  */
  readonly skipTlsVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#slot CloudRegionDeploymentTarget#slot}
  */
  readonly slot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#storage_account_name CloudRegionDeploymentTarget#storage_account_name}
  */
  readonly storageAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#swap_if_possible CloudRegionDeploymentTarget#swap_if_possible}
  */
  readonly swapIfPossible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#thumbprint CloudRegionDeploymentTarget#thumbprint}
  */
  readonly thumbprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#uri CloudRegionDeploymentTarget#uri}
  */
  readonly uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#use_current_instance_count CloudRegionDeploymentTarget#use_current_instance_count}
  */
  readonly useCurrentInstanceCount?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#web_app_name CloudRegionDeploymentTarget#web_app_name}
  */
  readonly webAppName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#web_app_slot_name CloudRegionDeploymentTarget#web_app_slot_name}
  */
  readonly webAppSlotName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#working_directory CloudRegionDeploymentTarget#working_directory}
  */
  readonly workingDirectory?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#authentication CloudRegionDeploymentTarget#authentication}
  */
  readonly authentication?: CloudRegionDeploymentTargetEndpointAuthentication;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#container CloudRegionDeploymentTarget#container}
  */
  readonly container?: CloudRegionDeploymentTargetEndpointContainer[] | cdktf.IResolvable;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#destination CloudRegionDeploymentTarget#destination}
  */
  readonly destination?: CloudRegionDeploymentTargetEndpointDestination[] | cdktf.IResolvable;
  /**
  * tentacle_version_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#tentacle_version_details CloudRegionDeploymentTarget#tentacle_version_details}
  */
  readonly tentacleVersionDetails?: CloudRegionDeploymentTargetEndpointTentacleVersionDetails[] | cdktf.IResolvable;
}

export function cloudRegionDeploymentTargetEndpointToTerraform(struct?: CloudRegionDeploymentTargetEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aad_client_credential_secret: cdktf.stringToTerraform(struct!.aadClientCredentialSecret),
    aad_credential_type: cdktf.stringToTerraform(struct!.aadCredentialType),
    aad_user_credential_username: cdktf.stringToTerraform(struct!.aadUserCredentialUsername),
    account_id: cdktf.stringToTerraform(struct!.accountId),
    applications_directory: cdktf.stringToTerraform(struct!.applicationsDirectory),
    certificate_signature_algorithm: cdktf.stringToTerraform(struct!.certificateSignatureAlgorithm),
    certificate_store_location: cdktf.stringToTerraform(struct!.certificateStoreLocation),
    certificate_store_name: cdktf.stringToTerraform(struct!.certificateStoreName),
    client_certificate_variable: cdktf.stringToTerraform(struct!.clientCertificateVariable),
    cloud_service_name: cdktf.stringToTerraform(struct!.cloudServiceName),
    cluster_certificate: cdktf.stringToTerraform(struct!.clusterCertificate),
    cluster_certificate_path: cdktf.stringToTerraform(struct!.clusterCertificatePath),
    cluster_url: cdktf.stringToTerraform(struct!.clusterUrl),
    communication_style: cdktf.stringToTerraform(struct!.communicationStyle),
    connection_endpoint: cdktf.stringToTerraform(struct!.connectionEndpoint),
    container_options: cdktf.stringToTerraform(struct!.containerOptions),
    default_worker_pool_id: cdktf.stringToTerraform(struct!.defaultWorkerPoolId),
    dot_net_core_platform: cdktf.stringToTerraform(struct!.dotNetCorePlatform),
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    host: cdktf.stringToTerraform(struct!.host),
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    port: cdktf.numberToTerraform(struct!.port),
    proxy_id: cdktf.stringToTerraform(struct!.proxyId),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    running_in_container: cdktf.booleanToTerraform(struct!.runningInContainer),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
    server_certificate_thumbprint: cdktf.stringToTerraform(struct!.serverCertificateThumbprint),
    skip_tls_verification: cdktf.booleanToTerraform(struct!.skipTlsVerification),
    slot: cdktf.stringToTerraform(struct!.slot),
    storage_account_name: cdktf.stringToTerraform(struct!.storageAccountName),
    swap_if_possible: cdktf.booleanToTerraform(struct!.swapIfPossible),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
    uri: cdktf.stringToTerraform(struct!.uri),
    use_current_instance_count: cdktf.booleanToTerraform(struct!.useCurrentInstanceCount),
    web_app_name: cdktf.stringToTerraform(struct!.webAppName),
    web_app_slot_name: cdktf.stringToTerraform(struct!.webAppSlotName),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
    authentication: cloudRegionDeploymentTargetEndpointAuthenticationToTerraform(struct!.authentication),
    container: cdktf.listMapper(cloudRegionDeploymentTargetEndpointContainerToTerraform, true)(struct!.container),
    destination: cdktf.listMapper(cloudRegionDeploymentTargetEndpointDestinationToTerraform, true)(struct!.destination),
    tentacle_version_details: cdktf.listMapper(cloudRegionDeploymentTargetEndpointTentacleVersionDetailsToTerraform, true)(struct!.tentacleVersionDetails),
  }
}


export function cloudRegionDeploymentTargetEndpointToHclTerraform(struct?: CloudRegionDeploymentTargetEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aad_client_credential_secret: {
      value: cdktf.stringToHclTerraform(struct!.aadClientCredentialSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_credential_type: {
      value: cdktf.stringToHclTerraform(struct!.aadCredentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aad_user_credential_username: {
      value: cdktf.stringToHclTerraform(struct!.aadUserCredentialUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applications_directory: {
      value: cdktf.stringToHclTerraform(struct!.applicationsDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.certificateSignatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_store_location: {
      value: cdktf.stringToHclTerraform(struct!.certificateStoreLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_store_name: {
      value: cdktf.stringToHclTerraform(struct!.certificateStoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_variable: {
      value: cdktf.stringToHclTerraform(struct!.clientCertificateVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_service_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_certificate: {
      value: cdktf.stringToHclTerraform(struct!.clusterCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_certificate_path: {
      value: cdktf.stringToHclTerraform(struct!.clusterCertificatePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_url: {
      value: cdktf.stringToHclTerraform(struct!.clusterUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    communication_style: {
      value: cdktf.stringToHclTerraform(struct!.communicationStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.connectionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_options: {
      value: cdktf.stringToHclTerraform(struct!.containerOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_worker_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultWorkerPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dot_net_core_platform: {
      value: cdktf.stringToHclTerraform(struct!.dotNetCorePlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_id: {
      value: cdktf.stringToHclTerraform(struct!.proxyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    running_in_container: {
      value: cdktf.booleanToHclTerraform(struct!.runningInContainer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate_thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificateThumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_tls_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipTlsVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    slot: {
      value: cdktf.stringToHclTerraform(struct!.slot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_account_name: {
      value: cdktf.stringToHclTerraform(struct!.storageAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    swap_if_possible: {
      value: cdktf.booleanToHclTerraform(struct!.swapIfPossible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_current_instance_count: {
      value: cdktf.booleanToHclTerraform(struct!.useCurrentInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_app_name: {
      value: cdktf.stringToHclTerraform(struct!.webAppName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_app_slot_name: {
      value: cdktf.stringToHclTerraform(struct!.webAppSlotName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_directory: {
      value: cdktf.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: cloudRegionDeploymentTargetEndpointAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRegionDeploymentTargetEndpointAuthenticationList",
    },
    container: {
      value: cdktf.listMapperHcl(cloudRegionDeploymentTargetEndpointContainerToHclTerraform, true)(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRegionDeploymentTargetEndpointContainerList",
    },
    destination: {
      value: cdktf.listMapperHcl(cloudRegionDeploymentTargetEndpointDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRegionDeploymentTargetEndpointDestinationList",
    },
    tentacle_version_details: {
      value: cdktf.listMapperHcl(cloudRegionDeploymentTargetEndpointTentacleVersionDetailsToHclTerraform, true)(struct!.tentacleVersionDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRegionDeploymentTargetEndpointTentacleVersionDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRegionDeploymentTargetEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRegionDeploymentTargetEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aadClientCredentialSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadClientCredentialSecret = this._aadClientCredentialSecret;
    }
    if (this._aadCredentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadCredentialType = this._aadCredentialType;
    }
    if (this._aadUserCredentialUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.aadUserCredentialUsername = this._aadUserCredentialUsername;
    }
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._applicationsDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationsDirectory = this._applicationsDirectory;
    }
    if (this._certificateSignatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateSignatureAlgorithm = this._certificateSignatureAlgorithm;
    }
    if (this._certificateStoreLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStoreLocation = this._certificateStoreLocation;
    }
    if (this._certificateStoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateStoreName = this._certificateStoreName;
    }
    if (this._clientCertificateVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateVariable = this._clientCertificateVariable;
    }
    if (this._cloudServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudServiceName = this._cloudServiceName;
    }
    if (this._clusterCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCertificate = this._clusterCertificate;
    }
    if (this._clusterCertificatePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCertificatePath = this._clusterCertificatePath;
    }
    if (this._clusterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterUrl = this._clusterUrl;
    }
    if (this._communicationStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.communicationStyle = this._communicationStyle;
    }
    if (this._connectionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionEndpoint = this._connectionEndpoint;
    }
    if (this._containerOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerOptions = this._containerOptions;
    }
    if (this._defaultWorkerPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultWorkerPoolId = this._defaultWorkerPoolId;
    }
    if (this._dotNetCorePlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.dotNetCorePlatform = this._dotNetCorePlatform;
    }
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyId = this._proxyId;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._runningInContainer !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningInContainer = this._runningInContainer;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    if (this._serverCertificateThumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateThumbprint = this._serverCertificateThumbprint;
    }
    if (this._skipTlsVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipTlsVerification = this._skipTlsVerification;
    }
    if (this._slot !== undefined) {
      hasAnyValues = true;
      internalValueResult.slot = this._slot;
    }
    if (this._storageAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccountName = this._storageAccountName;
    }
    if (this._swapIfPossible !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapIfPossible = this._swapIfPossible;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._useCurrentInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCurrentInstanceCount = this._useCurrentInstanceCount;
    }
    if (this._webAppName !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAppName = this._webAppName;
    }
    if (this._webAppSlotName !== undefined) {
      hasAnyValues = true;
      internalValueResult.webAppSlotName = this._webAppSlotName;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._tentacleVersionDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tentacleVersionDetails = this._tentacleVersionDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRegionDeploymentTargetEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aadClientCredentialSecret = undefined;
      this._aadCredentialType = undefined;
      this._aadUserCredentialUsername = undefined;
      this._accountId = undefined;
      this._applicationsDirectory = undefined;
      this._certificateSignatureAlgorithm = undefined;
      this._certificateStoreLocation = undefined;
      this._certificateStoreName = undefined;
      this._clientCertificateVariable = undefined;
      this._cloudServiceName = undefined;
      this._clusterCertificate = undefined;
      this._clusterCertificatePath = undefined;
      this._clusterUrl = undefined;
      this._communicationStyle = undefined;
      this._connectionEndpoint = undefined;
      this._containerOptions = undefined;
      this._defaultWorkerPoolId = undefined;
      this._dotNetCorePlatform = undefined;
      this._fingerprint = undefined;
      this._host = undefined;
      this._id = undefined;
      this._namespace = undefined;
      this._port = undefined;
      this._proxyId = undefined;
      this._resourceGroupName = undefined;
      this._runningInContainer = undefined;
      this._securityMode = undefined;
      this._serverCertificateThumbprint = undefined;
      this._skipTlsVerification = undefined;
      this._slot = undefined;
      this._storageAccountName = undefined;
      this._swapIfPossible = undefined;
      this._thumbprint = undefined;
      this._uri = undefined;
      this._useCurrentInstanceCount = undefined;
      this._webAppName = undefined;
      this._webAppSlotName = undefined;
      this._workingDirectory = undefined;
      this._authentication.internalValue = undefined;
      this._container.internalValue = undefined;
      this._destination.internalValue = undefined;
      this._tentacleVersionDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aadClientCredentialSecret = value.aadClientCredentialSecret;
      this._aadCredentialType = value.aadCredentialType;
      this._aadUserCredentialUsername = value.aadUserCredentialUsername;
      this._accountId = value.accountId;
      this._applicationsDirectory = value.applicationsDirectory;
      this._certificateSignatureAlgorithm = value.certificateSignatureAlgorithm;
      this._certificateStoreLocation = value.certificateStoreLocation;
      this._certificateStoreName = value.certificateStoreName;
      this._clientCertificateVariable = value.clientCertificateVariable;
      this._cloudServiceName = value.cloudServiceName;
      this._clusterCertificate = value.clusterCertificate;
      this._clusterCertificatePath = value.clusterCertificatePath;
      this._clusterUrl = value.clusterUrl;
      this._communicationStyle = value.communicationStyle;
      this._connectionEndpoint = value.connectionEndpoint;
      this._containerOptions = value.containerOptions;
      this._defaultWorkerPoolId = value.defaultWorkerPoolId;
      this._dotNetCorePlatform = value.dotNetCorePlatform;
      this._fingerprint = value.fingerprint;
      this._host = value.host;
      this._id = value.id;
      this._namespace = value.namespace;
      this._port = value.port;
      this._proxyId = value.proxyId;
      this._resourceGroupName = value.resourceGroupName;
      this._runningInContainer = value.runningInContainer;
      this._securityMode = value.securityMode;
      this._serverCertificateThumbprint = value.serverCertificateThumbprint;
      this._skipTlsVerification = value.skipTlsVerification;
      this._slot = value.slot;
      this._storageAccountName = value.storageAccountName;
      this._swapIfPossible = value.swapIfPossible;
      this._thumbprint = value.thumbprint;
      this._uri = value.uri;
      this._useCurrentInstanceCount = value.useCurrentInstanceCount;
      this._webAppName = value.webAppName;
      this._webAppSlotName = value.webAppSlotName;
      this._workingDirectory = value.workingDirectory;
      this._authentication.internalValue = value.authentication;
      this._container.internalValue = value.container;
      this._destination.internalValue = value.destination;
      this._tentacleVersionDetails.internalValue = value.tentacleVersionDetails;
    }
  }

  // aad_client_credential_secret - computed: false, optional: true, required: false
  private _aadClientCredentialSecret?: string; 
  public get aadClientCredentialSecret() {
    return this.getStringAttribute('aad_client_credential_secret');
  }
  public set aadClientCredentialSecret(value: string) {
    this._aadClientCredentialSecret = value;
  }
  public resetAadClientCredentialSecret() {
    this._aadClientCredentialSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadClientCredentialSecretInput() {
    return this._aadClientCredentialSecret;
  }

  // aad_credential_type - computed: false, optional: true, required: false
  private _aadCredentialType?: string; 
  public get aadCredentialType() {
    return this.getStringAttribute('aad_credential_type');
  }
  public set aadCredentialType(value: string) {
    this._aadCredentialType = value;
  }
  public resetAadCredentialType() {
    this._aadCredentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadCredentialTypeInput() {
    return this._aadCredentialType;
  }

  // aad_user_credential_username - computed: false, optional: true, required: false
  private _aadUserCredentialUsername?: string; 
  public get aadUserCredentialUsername() {
    return this.getStringAttribute('aad_user_credential_username');
  }
  public set aadUserCredentialUsername(value: string) {
    this._aadUserCredentialUsername = value;
  }
  public resetAadUserCredentialUsername() {
    this._aadUserCredentialUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aadUserCredentialUsernameInput() {
    return this._aadUserCredentialUsername;
  }

  // account_id - computed: false, optional: true, required: false
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

  // applications_directory - computed: false, optional: true, required: false
  private _applicationsDirectory?: string; 
  public get applicationsDirectory() {
    return this.getStringAttribute('applications_directory');
  }
  public set applicationsDirectory(value: string) {
    this._applicationsDirectory = value;
  }
  public resetApplicationsDirectory() {
    this._applicationsDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsDirectoryInput() {
    return this._applicationsDirectory;
  }

  // certificate_signature_algorithm - computed: false, optional: true, required: false
  private _certificateSignatureAlgorithm?: string; 
  public get certificateSignatureAlgorithm() {
    return this.getStringAttribute('certificate_signature_algorithm');
  }
  public set certificateSignatureAlgorithm(value: string) {
    this._certificateSignatureAlgorithm = value;
  }
  public resetCertificateSignatureAlgorithm() {
    this._certificateSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateSignatureAlgorithmInput() {
    return this._certificateSignatureAlgorithm;
  }

  // certificate_store_location - computed: false, optional: true, required: false
  private _certificateStoreLocation?: string; 
  public get certificateStoreLocation() {
    return this.getStringAttribute('certificate_store_location');
  }
  public set certificateStoreLocation(value: string) {
    this._certificateStoreLocation = value;
  }
  public resetCertificateStoreLocation() {
    this._certificateStoreLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreLocationInput() {
    return this._certificateStoreLocation;
  }

  // certificate_store_name - computed: false, optional: true, required: false
  private _certificateStoreName?: string; 
  public get certificateStoreName() {
    return this.getStringAttribute('certificate_store_name');
  }
  public set certificateStoreName(value: string) {
    this._certificateStoreName = value;
  }
  public resetCertificateStoreName() {
    this._certificateStoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateStoreNameInput() {
    return this._certificateStoreName;
  }

  // client_certificate_variable - computed: false, optional: true, required: false
  private _clientCertificateVariable?: string; 
  public get clientCertificateVariable() {
    return this.getStringAttribute('client_certificate_variable');
  }
  public set clientCertificateVariable(value: string) {
    this._clientCertificateVariable = value;
  }
  public resetClientCertificateVariable() {
    this._clientCertificateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateVariableInput() {
    return this._clientCertificateVariable;
  }

  // cloud_service_name - computed: false, optional: true, required: false
  private _cloudServiceName?: string; 
  public get cloudServiceName() {
    return this.getStringAttribute('cloud_service_name');
  }
  public set cloudServiceName(value: string) {
    this._cloudServiceName = value;
  }
  public resetCloudServiceName() {
    this._cloudServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudServiceNameInput() {
    return this._cloudServiceName;
  }

  // cluster_certificate - computed: false, optional: true, required: false
  private _clusterCertificate?: string; 
  public get clusterCertificate() {
    return this.getStringAttribute('cluster_certificate');
  }
  public set clusterCertificate(value: string) {
    this._clusterCertificate = value;
  }
  public resetClusterCertificate() {
    this._clusterCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCertificateInput() {
    return this._clusterCertificate;
  }

  // cluster_certificate_path - computed: false, optional: true, required: false
  private _clusterCertificatePath?: string; 
  public get clusterCertificatePath() {
    return this.getStringAttribute('cluster_certificate_path');
  }
  public set clusterCertificatePath(value: string) {
    this._clusterCertificatePath = value;
  }
  public resetClusterCertificatePath() {
    this._clusterCertificatePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCertificatePathInput() {
    return this._clusterCertificatePath;
  }

  // cluster_url - computed: false, optional: true, required: false
  private _clusterUrl?: string; 
  public get clusterUrl() {
    return this.getStringAttribute('cluster_url');
  }
  public set clusterUrl(value: string) {
    this._clusterUrl = value;
  }
  public resetClusterUrl() {
    this._clusterUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUrlInput() {
    return this._clusterUrl;
  }

  // communication_style - computed: false, optional: false, required: true
  private _communicationStyle?: string; 
  public get communicationStyle() {
    return this.getStringAttribute('communication_style');
  }
  public set communicationStyle(value: string) {
    this._communicationStyle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationStyleInput() {
    return this._communicationStyle;
  }

  // connection_endpoint - computed: false, optional: true, required: false
  private _connectionEndpoint?: string; 
  public get connectionEndpoint() {
    return this.getStringAttribute('connection_endpoint');
  }
  public set connectionEndpoint(value: string) {
    this._connectionEndpoint = value;
  }
  public resetConnectionEndpoint() {
    this._connectionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionEndpointInput() {
    return this._connectionEndpoint;
  }

  // container_options - computed: false, optional: true, required: false
  private _containerOptions?: string; 
  public get containerOptions() {
    return this.getStringAttribute('container_options');
  }
  public set containerOptions(value: string) {
    this._containerOptions = value;
  }
  public resetContainerOptions() {
    this._containerOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerOptionsInput() {
    return this._containerOptions;
  }

  // default_worker_pool_id - computed: false, optional: true, required: false
  private _defaultWorkerPoolId?: string; 
  public get defaultWorkerPoolId() {
    return this.getStringAttribute('default_worker_pool_id');
  }
  public set defaultWorkerPoolId(value: string) {
    this._defaultWorkerPoolId = value;
  }
  public resetDefaultWorkerPoolId() {
    this._defaultWorkerPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWorkerPoolIdInput() {
    return this._defaultWorkerPoolId;
  }

  // dot_net_core_platform - computed: false, optional: true, required: false
  private _dotNetCorePlatform?: string; 
  public get dotNetCorePlatform() {
    return this.getStringAttribute('dot_net_core_platform');
  }
  public set dotNetCorePlatform(value: string) {
    this._dotNetCorePlatform = value;
  }
  public resetDotNetCorePlatform() {
    this._dotNetCorePlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dotNetCorePlatformInput() {
    return this._dotNetCorePlatform;
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proxy_id - computed: false, optional: true, required: false
  private _proxyId?: string; 
  public get proxyId() {
    return this.getStringAttribute('proxy_id');
  }
  public set proxyId(value: string) {
    this._proxyId = value;
  }
  public resetProxyId() {
    this._proxyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdInput() {
    return this._proxyId;
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // running_in_container - computed: false, optional: true, required: false
  private _runningInContainer?: boolean | cdktf.IResolvable; 
  public get runningInContainer() {
    return this.getBooleanAttribute('running_in_container');
  }
  public set runningInContainer(value: boolean | cdktf.IResolvable) {
    this._runningInContainer = value;
  }
  public resetRunningInContainer() {
    this._runningInContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningInContainerInput() {
    return this._runningInContainer;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // server_certificate_thumbprint - computed: false, optional: true, required: false
  private _serverCertificateThumbprint?: string; 
  public get serverCertificateThumbprint() {
    return this.getStringAttribute('server_certificate_thumbprint');
  }
  public set serverCertificateThumbprint(value: string) {
    this._serverCertificateThumbprint = value;
  }
  public resetServerCertificateThumbprint() {
    this._serverCertificateThumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateThumbprintInput() {
    return this._serverCertificateThumbprint;
  }

  // skip_tls_verification - computed: false, optional: true, required: false
  private _skipTlsVerification?: boolean | cdktf.IResolvable; 
  public get skipTlsVerification() {
    return this.getBooleanAttribute('skip_tls_verification');
  }
  public set skipTlsVerification(value: boolean | cdktf.IResolvable) {
    this._skipTlsVerification = value;
  }
  public resetSkipTlsVerification() {
    this._skipTlsVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerificationInput() {
    return this._skipTlsVerification;
  }

  // slot - computed: false, optional: true, required: false
  private _slot?: string; 
  public get slot() {
    return this.getStringAttribute('slot');
  }
  public set slot(value: string) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }

  // storage_account_name - computed: false, optional: true, required: false
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  public resetStorageAccountName() {
    this._storageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // swap_if_possible - computed: false, optional: true, required: false
  private _swapIfPossible?: boolean | cdktf.IResolvable; 
  public get swapIfPossible() {
    return this.getBooleanAttribute('swap_if_possible');
  }
  public set swapIfPossible(value: boolean | cdktf.IResolvable) {
    this._swapIfPossible = value;
  }
  public resetSwapIfPossible() {
    this._swapIfPossible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapIfPossibleInput() {
    return this._swapIfPossible;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // use_current_instance_count - computed: false, optional: true, required: false
  private _useCurrentInstanceCount?: boolean | cdktf.IResolvable; 
  public get useCurrentInstanceCount() {
    return this.getBooleanAttribute('use_current_instance_count');
  }
  public set useCurrentInstanceCount(value: boolean | cdktf.IResolvable) {
    this._useCurrentInstanceCount = value;
  }
  public resetUseCurrentInstanceCount() {
    this._useCurrentInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCurrentInstanceCountInput() {
    return this._useCurrentInstanceCount;
  }

  // web_app_name - computed: false, optional: true, required: false
  private _webAppName?: string; 
  public get webAppName() {
    return this.getStringAttribute('web_app_name');
  }
  public set webAppName(value: string) {
    this._webAppName = value;
  }
  public resetWebAppName() {
    this._webAppName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppNameInput() {
    return this._webAppName;
  }

  // web_app_slot_name - computed: false, optional: true, required: false
  private _webAppSlotName?: string; 
  public get webAppSlotName() {
    return this.getStringAttribute('web_app_slot_name');
  }
  public set webAppSlotName(value: string) {
    this._webAppSlotName = value;
  }
  public resetWebAppSlotName() {
    this._webAppSlotName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppSlotNameInput() {
    return this._webAppSlotName;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new CloudRegionDeploymentTargetEndpointAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: CloudRegionDeploymentTargetEndpointAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new CloudRegionDeploymentTargetEndpointContainerList(this, "container", false);
  public get container() {
    return this._container;
  }
  public putContainer(value: CloudRegionDeploymentTargetEndpointContainer[] | cdktf.IResolvable) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new CloudRegionDeploymentTargetEndpointDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: CloudRegionDeploymentTargetEndpointDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // tentacle_version_details - computed: false, optional: true, required: false
  private _tentacleVersionDetails = new CloudRegionDeploymentTargetEndpointTentacleVersionDetailsList(this, "tentacle_version_details", false);
  public get tentacleVersionDetails() {
    return this._tentacleVersionDetails;
  }
  public putTentacleVersionDetails(value: CloudRegionDeploymentTargetEndpointTentacleVersionDetails[] | cdktf.IResolvable) {
    this._tentacleVersionDetails.internalValue = value;
  }
  public resetTentacleVersionDetails() {
    this._tentacleVersionDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tentacleVersionDetailsInput() {
    return this._tentacleVersionDetails.internalValue;
  }
}

export class CloudRegionDeploymentTargetEndpointList extends cdktf.ComplexList {
  public internalValue? : CloudRegionDeploymentTargetEndpoint[] | cdktf.IResolvable

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
  public get(index: number): CloudRegionDeploymentTargetEndpointOutputReference {
    return new CloudRegionDeploymentTargetEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target octopusdeploy_cloud_region_deployment_target}
*/
export class CloudRegionDeploymentTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_cloud_region_deployment_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudRegionDeploymentTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudRegionDeploymentTarget to import
  * @param importFromId The id of the existing CloudRegionDeploymentTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudRegionDeploymentTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_cloud_region_deployment_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.4.0/docs/resources/cloud_region_deployment_target octopusdeploy_cloud_region_deployment_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRegionDeploymentTargetConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRegionDeploymentTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_cloud_region_deployment_target',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.4.0',
        providerVersionConstraint: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultWorkerPoolId = config.defaultWorkerPoolId;
    this._environments = config.environments;
    this._healthStatus = config.healthStatus;
    this._id = config.id;
    this._isDisabled = config.isDisabled;
    this._machinePolicyId = config.machinePolicyId;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._roles = config.roles;
    this._shellName = config.shellName;
    this._shellVersion = config.shellVersion;
    this._spaceId = config.spaceId;
    this._status = config.status;
    this._statusSummary = config.statusSummary;
    this._tenantTags = config.tenantTags;
    this._tenantedDeploymentParticipation = config.tenantedDeploymentParticipation;
    this._tenants = config.tenants;
    this._thumbprint = config.thumbprint;
    this._uri = config.uri;
    this._endpoint.internalValue = config.endpoint;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_worker_pool_id - computed: false, optional: true, required: false
  private _defaultWorkerPoolId?: string; 
  public get defaultWorkerPoolId() {
    return this.getStringAttribute('default_worker_pool_id');
  }
  public set defaultWorkerPoolId(value: string) {
    this._defaultWorkerPoolId = value;
  }
  public resetDefaultWorkerPoolId() {
    this._defaultWorkerPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWorkerPoolIdInput() {
    return this._defaultWorkerPoolId;
  }

  // environments - computed: false, optional: false, required: true
  private _environments?: string[]; 
  public get environments() {
    return this.getListAttribute('environments');
  }
  public set environments(value: string[]) {
    this._environments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentsInput() {
    return this._environments;
  }

  // has_latest_calamari - computed: true, optional: false, required: false
  public get hasLatestCalamari() {
    return this.getBooleanAttribute('has_latest_calamari');
  }

  // health_status - computed: true, optional: true, required: false
  private _healthStatus?: string; 
  public get healthStatus() {
    return this.getStringAttribute('health_status');
  }
  public set healthStatus(value: string) {
    this._healthStatus = value;
  }
  public resetHealthStatus() {
    this._healthStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthStatusInput() {
    return this._healthStatus;
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

  // is_disabled - computed: true, optional: true, required: false
  private _isDisabled?: boolean | cdktf.IResolvable; 
  public get isDisabled() {
    return this.getBooleanAttribute('is_disabled');
  }
  public set isDisabled(value: boolean | cdktf.IResolvable) {
    this._isDisabled = value;
  }
  public resetIsDisabled() {
    this._isDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisabledInput() {
    return this._isDisabled;
  }

  // is_in_process - computed: true, optional: false, required: false
  public get isInProcess() {
    return this.getBooleanAttribute('is_in_process');
  }

  // machine_policy_id - computed: true, optional: true, required: false
  private _machinePolicyId?: string; 
  public get machinePolicyId() {
    return this.getStringAttribute('machine_policy_id');
  }
  public set machinePolicyId(value: string) {
    this._machinePolicyId = value;
  }
  public resetMachinePolicyId() {
    this._machinePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePolicyIdInput() {
    return this._machinePolicyId;
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

  // operating_system - computed: true, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // roles - computed: false, optional: false, required: true
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // shell_name - computed: true, optional: true, required: false
  private _shellName?: string; 
  public get shellName() {
    return this.getStringAttribute('shell_name');
  }
  public set shellName(value: string) {
    this._shellName = value;
  }
  public resetShellName() {
    this._shellName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellNameInput() {
    return this._shellName;
  }

  // shell_version - computed: true, optional: true, required: false
  private _shellVersion?: string; 
  public get shellVersion() {
    return this.getStringAttribute('shell_version');
  }
  public set shellVersion(value: string) {
    this._shellVersion = value;
  }
  public resetShellVersion() {
    this._shellVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shellVersionInput() {
    return this._shellVersion;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_summary - computed: true, optional: true, required: false
  private _statusSummary?: string; 
  public get statusSummary() {
    return this.getStringAttribute('status_summary');
  }
  public set statusSummary(value: string) {
    this._statusSummary = value;
  }
  public resetStatusSummary() {
    this._statusSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusSummaryInput() {
    return this._statusSummary;
  }

  // tenant_tags - computed: true, optional: true, required: false
  private _tenantTags?: string[]; 
  public get tenantTags() {
    return this.getListAttribute('tenant_tags');
  }
  public set tenantTags(value: string[]) {
    this._tenantTags = value;
  }
  public resetTenantTags() {
    this._tenantTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantTagsInput() {
    return this._tenantTags;
  }

  // tenanted_deployment_participation - computed: true, optional: true, required: false
  private _tenantedDeploymentParticipation?: string; 
  public get tenantedDeploymentParticipation() {
    return this.getStringAttribute('tenanted_deployment_participation');
  }
  public set tenantedDeploymentParticipation(value: string) {
    this._tenantedDeploymentParticipation = value;
  }
  public resetTenantedDeploymentParticipation() {
    this._tenantedDeploymentParticipation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantedDeploymentParticipationInput() {
    return this._tenantedDeploymentParticipation;
  }

  // tenants - computed: true, optional: true, required: false
  private _tenants?: string[]; 
  public get tenants() {
    return this.getListAttribute('tenants');
  }
  public set tenants(value: string[]) {
    this._tenants = value;
  }
  public resetTenants() {
    this._tenants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants;
  }

  // thumbprint - computed: true, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint = new CloudRegionDeploymentTargetEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: CloudRegionDeploymentTargetEndpoint[] | cdktf.IResolvable) {
    this._endpoint.internalValue = value;
  }
  public resetEndpoint() {
    this._endpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_worker_pool_id: cdktf.stringToTerraform(this._defaultWorkerPoolId),
      environments: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environments),
      health_status: cdktf.stringToTerraform(this._healthStatus),
      id: cdktf.stringToTerraform(this._id),
      is_disabled: cdktf.booleanToTerraform(this._isDisabled),
      machine_policy_id: cdktf.stringToTerraform(this._machinePolicyId),
      name: cdktf.stringToTerraform(this._name),
      operating_system: cdktf.stringToTerraform(this._operatingSystem),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      shell_name: cdktf.stringToTerraform(this._shellName),
      shell_version: cdktf.stringToTerraform(this._shellVersion),
      space_id: cdktf.stringToTerraform(this._spaceId),
      status: cdktf.stringToTerraform(this._status),
      status_summary: cdktf.stringToTerraform(this._statusSummary),
      tenant_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenantTags),
      tenanted_deployment_participation: cdktf.stringToTerraform(this._tenantedDeploymentParticipation),
      tenants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tenants),
      thumbprint: cdktf.stringToTerraform(this._thumbprint),
      uri: cdktf.stringToTerraform(this._uri),
      endpoint: cdktf.listMapper(cloudRegionDeploymentTargetEndpointToTerraform, true)(this._endpoint.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_worker_pool_id: {
        value: cdktf.stringToHclTerraform(this._defaultWorkerPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environments: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environments),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      health_status: {
        value: cdktf.stringToHclTerraform(this._healthStatus),
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
      is_disabled: {
        value: cdktf.booleanToHclTerraform(this._isDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      machine_policy_id: {
        value: cdktf.stringToHclTerraform(this._machinePolicyId),
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
      operating_system: {
        value: cdktf.stringToHclTerraform(this._operatingSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shell_name: {
        value: cdktf.stringToHclTerraform(this._shellName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shell_version: {
        value: cdktf.stringToHclTerraform(this._shellVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_summary: {
        value: cdktf.stringToHclTerraform(this._statusSummary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenantTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenanted_deployment_participation: {
        value: cdktf.stringToHclTerraform(this._tenantedDeploymentParticipation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tenants),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      thumbprint: {
        value: cdktf.stringToHclTerraform(this._thumbprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.listMapperHcl(cloudRegionDeploymentTargetEndpointToHclTerraform, true)(this._endpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRegionDeploymentTargetEndpointList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
