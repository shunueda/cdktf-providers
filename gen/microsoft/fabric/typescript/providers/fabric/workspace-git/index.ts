// https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceGitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Git credentials details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#git_credentials WorkspaceGit#git_credentials}
  */
  readonly gitCredentials: WorkspaceGitGitCredentials;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Git provider details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#git_provider_details WorkspaceGit#git_provider_details}
  */
  readonly gitProviderDetails: WorkspaceGitGitProviderDetails;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The initialization strategy. Value must be one of : `PreferRemote`, `PreferWorkspace`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#initialization_strategy WorkspaceGit#initialization_strategy}
  */
  readonly initializationStrategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#timeouts WorkspaceGit#timeouts}
  */
  readonly timeouts?: WorkspaceGitTimeouts;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#workspace_id WorkspaceGit#workspace_id}
  */
  readonly workspaceId: string;
}
export interface WorkspaceGitGitCredentials {
  /**
  * The connection ID. If the value of [`git_credentials.source`](#git_credentials.source) attribute is `ConfiguredConnection` this attribute is **REQUIRED**. If the value of [`git_credentials.source`](#git_credentials.source) attribute is `Automatic` this attribute is **NULL**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#connection_id WorkspaceGit#connection_id}
  */
  readonly connectionId?: string;
  /**
  * The Git credentials source. 
  * 
  * -> **If the value of the attribute [`git_provider_details.git_provider_type`](#git_provider_details.git_provider_type) is `GitHub` the value is one of** - `"ConfiguredConnection"` - ConfiguredConnection<br>. 
  * 
  * -> **If the value of the attribute [`git_provider_details.git_provider_type`](#git_provider_details.git_provider_type) is `AzureDevOps` the value is one of** - `"ConfiguredConnection"` - ConfiguredConnection<br>- `"Automatic"` - Automatic<br>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#source WorkspaceGit#source}
  */
  readonly source: string;
}

export function workspaceGitGitCredentialsToTerraform(struct?: WorkspaceGitGitCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function workspaceGitGitCredentialsToHclTerraform(struct?: WorkspaceGitGitCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceGitGitCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceGitGitCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceGitGitCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionId = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionId = value.connectionId;
      this._source = value.source;
    }
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface WorkspaceGitGitProviderDetails {
  /**
  * The branch name. String length must be at most 250.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#branch_name WorkspaceGit#branch_name}
  */
  readonly branchName: string;
  /**
  * The directory name. String length must be at most 256. Directory name path must starts with forward slash '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#directory_name WorkspaceGit#directory_name}
  */
  readonly directoryName: string;
  /**
  * The git provider type. Value must be one of : `AzureDevOps`, `GitHub`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#git_provider_type WorkspaceGit#git_provider_type}
  */
  readonly gitProviderType: string;
  /**
  * The Azure DevOps organization name. String length must be at most 100. If the value of [`git_provider_details.git_provider_type`](#git_provider_details.git_provider_type) attribute is `GitHub` this attribute is **NULL**. If the value of [`git_provider_details.git_provider_type`](#git_provider_details.git_provider_type) attribute is `AzureDevOps` this attribute is **REQUIRED**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#organization_name WorkspaceGit#organization_name}
  */
  readonly organizationName?: string;
  /**
  * The GitHub owner name. String length must be at most 100. If the value of [`git_provider_details.git_provider_type`](#git_provider_details.git_provider_type) attribute is `AzureDevOps` this attribute is **NULL**. If the value of [`git_provider_details.git_provider_type`](#git_provider_details.git_provider_type) attribute is `GitHub` this attribute is **REQUIRED**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#owner_name WorkspaceGit#owner_name}
  */
  readonly ownerName?: string;
  /**
  * The Azure DevOps project name. String length must be at most 100. If the value of [`git_provider_details.git_provider_type`](#git_provider_details.git_provider_type) attribute is `GitHub` this attribute is **NULL**. If the value of [`git_provider_details.git_provider_type`](#git_provider_details.git_provider_type) attribute is `AzureDevOps` this attribute is **REQUIRED**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#project_name WorkspaceGit#project_name}
  */
  readonly projectName?: string;
  /**
  * The repository name. String length must be at most 128.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#repository_name WorkspaceGit#repository_name}
  */
  readonly repositoryName: string;
}

export function workspaceGitGitProviderDetailsToTerraform(struct?: WorkspaceGitGitProviderDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    directory_name: cdktf.stringToTerraform(struct!.directoryName),
    git_provider_type: cdktf.stringToTerraform(struct!.gitProviderType),
    organization_name: cdktf.stringToTerraform(struct!.organizationName),
    owner_name: cdktf.stringToTerraform(struct!.ownerName),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    repository_name: cdktf.stringToTerraform(struct!.repositoryName),
  }
}


export function workspaceGitGitProviderDetailsToHclTerraform(struct?: WorkspaceGitGitProviderDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_name: {
      value: cdktf.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory_name: {
      value: cdktf.stringToHclTerraform(struct!.directoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git_provider_type: {
      value: cdktf.stringToHclTerraform(struct!.gitProviderType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organization_name: {
      value: cdktf.stringToHclTerraform(struct!.organizationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_name: {
      value: cdktf.stringToHclTerraform(struct!.ownerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_name: {
      value: cdktf.stringToHclTerraform(struct!.repositoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceGitGitProviderDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceGitGitProviderDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._directoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.directoryName = this._directoryName;
    }
    if (this._gitProviderType !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitProviderType = this._gitProviderType;
    }
    if (this._organizationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationName = this._organizationName;
    }
    if (this._ownerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerName = this._ownerName;
    }
    if (this._projectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectName = this._projectName;
    }
    if (this._repositoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryName = this._repositoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceGitGitProviderDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._branchName = undefined;
      this._directoryName = undefined;
      this._gitProviderType = undefined;
      this._organizationName = undefined;
      this._ownerName = undefined;
      this._projectName = undefined;
      this._repositoryName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._branchName = value.branchName;
      this._directoryName = value.directoryName;
      this._gitProviderType = value.gitProviderType;
      this._organizationName = value.organizationName;
      this._ownerName = value.ownerName;
      this._projectName = value.projectName;
      this._repositoryName = value.repositoryName;
    }
  }

  // branch_name - computed: false, optional: false, required: true
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // directory_name - computed: false, optional: false, required: true
  private _directoryName?: string; 
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }
  public set directoryName(value: string) {
    this._directoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName;
  }

  // git_provider_type - computed: false, optional: false, required: true
  private _gitProviderType?: string; 
  public get gitProviderType() {
    return this.getStringAttribute('git_provider_type');
  }
  public set gitProviderType(value: string) {
    this._gitProviderType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProviderTypeInput() {
    return this._gitProviderType;
  }

  // organization_name - computed: true, optional: true, required: false
  private _organizationName?: string; 
  public get organizationName() {
    return this.getStringAttribute('organization_name');
  }
  public set organizationName(value: string) {
    this._organizationName = value;
  }
  public resetOrganizationName() {
    this._organizationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationNameInput() {
    return this._organizationName;
  }

  // owner_name - computed: false, optional: true, required: false
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  public resetOwnerName() {
    this._ownerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // project_name - computed: true, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // repository_name - computed: false, optional: false, required: true
  private _repositoryName?: string; 
  public get repositoryName() {
    return this.getStringAttribute('repository_name');
  }
  public set repositoryName(value: string) {
    this._repositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryNameInput() {
    return this._repositoryName;
  }
}
export interface WorkspaceGitGitSyncDetails {
}

export function workspaceGitGitSyncDetailsToTerraform(struct?: WorkspaceGitGitSyncDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workspaceGitGitSyncDetailsToHclTerraform(struct?: WorkspaceGitGitSyncDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkspaceGitGitSyncDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceGitGitSyncDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceGitGitSyncDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // head - computed: true, optional: false, required: false
  public get head() {
    return this.getStringAttribute('head');
  }

  // last_sync_time - computed: true, optional: false, required: false
  public get lastSyncTime() {
    return this.getStringAttribute('last_sync_time');
  }
}
export interface WorkspaceGitTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#create WorkspaceGit#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#delete WorkspaceGit#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#read WorkspaceGit#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#update WorkspaceGit#update}
  */
  readonly update?: string;
}

export function workspaceGitTimeoutsToTerraform(struct?: WorkspaceGitTimeouts | cdktf.IResolvable): any {
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


export function workspaceGitTimeoutsToHclTerraform(struct?: WorkspaceGitTimeouts | cdktf.IResolvable): any {
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

export class WorkspaceGitTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceGitTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WorkspaceGitTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git fabric_workspace_git}
*/
export class WorkspaceGit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_workspace_git";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceGit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceGit to import
  * @param importFromId The id of the existing WorkspaceGit that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceGit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_workspace_git", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_git fabric_workspace_git} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceGitConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceGitConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_workspace_git',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gitCredentials.internalValue = config.gitCredentials;
    this._gitProviderDetails.internalValue = config.gitProviderDetails;
    this._initializationStrategy = config.initializationStrategy;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git_connection_state - computed: true, optional: false, required: false
  public get gitConnectionState() {
    return this.getStringAttribute('git_connection_state');
  }

  // git_credentials - computed: false, optional: false, required: true
  private _gitCredentials = new WorkspaceGitGitCredentialsOutputReference(this, "git_credentials");
  public get gitCredentials() {
    return this._gitCredentials;
  }
  public putGitCredentials(value: WorkspaceGitGitCredentials) {
    this._gitCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCredentialsInput() {
    return this._gitCredentials.internalValue;
  }

  // git_provider_details - computed: false, optional: false, required: true
  private _gitProviderDetails = new WorkspaceGitGitProviderDetailsOutputReference(this, "git_provider_details");
  public get gitProviderDetails() {
    return this._gitProviderDetails;
  }
  public putGitProviderDetails(value: WorkspaceGitGitProviderDetails) {
    this._gitProviderDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitProviderDetailsInput() {
    return this._gitProviderDetails.internalValue;
  }

  // git_sync_details - computed: true, optional: false, required: false
  private _gitSyncDetails = new WorkspaceGitGitSyncDetailsOutputReference(this, "git_sync_details");
  public get gitSyncDetails() {
    return this._gitSyncDetails;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initialization_strategy - computed: false, optional: false, required: true
  private _initializationStrategy?: string; 
  public get initializationStrategy() {
    return this.getStringAttribute('initialization_strategy');
  }
  public set initializationStrategy(value: string) {
    this._initializationStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationStrategyInput() {
    return this._initializationStrategy;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkspaceGitTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkspaceGitTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      git_credentials: workspaceGitGitCredentialsToTerraform(this._gitCredentials.internalValue),
      git_provider_details: workspaceGitGitProviderDetailsToTerraform(this._gitProviderDetails.internalValue),
      initialization_strategy: cdktf.stringToTerraform(this._initializationStrategy),
      timeouts: workspaceGitTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      git_credentials: {
        value: workspaceGitGitCredentialsToHclTerraform(this._gitCredentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceGitGitCredentials",
      },
      git_provider_details: {
        value: workspaceGitGitProviderDetailsToHclTerraform(this._gitProviderDetails.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceGitGitProviderDetails",
      },
      initialization_strategy: {
        value: cdktf.stringToHclTerraform(this._initializationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: workspaceGitTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceGitTimeouts",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
