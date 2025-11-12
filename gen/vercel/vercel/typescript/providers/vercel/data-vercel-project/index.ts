// https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVercelProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * The build machine type to use for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project#build_machine_type DataVercelProject#build_machine_type}
  */
  readonly buildMachineType?: string;
  /**
  * The name of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project#name DataVercelProject#name}
  */
  readonly name: string;
  /**
  * Instantly scale build capacity to skip the queue, even if all build slots are in use. You can also choose a larger build machine; charges apply per minute if it exceeds your team's default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project#on_demand_concurrent_builds DataVercelProject#on_demand_concurrent_builds}
  */
  readonly onDemandConcurrentBuilds?: boolean | cdktf.IResolvable;
  /**
  * The team ID the project exists beneath. Required when configuring a team resource if a default team has not been set in the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project#team_id DataVercelProject#team_id}
  */
  readonly teamId?: string;
}
export interface DataVercelProjectEnvironment {
}

export function dataVercelProjectEnvironmentToTerraform(struct?: DataVercelProjectEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelProjectEnvironmentToHclTerraform(struct?: DataVercelProjectEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelProjectEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVercelProjectEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // custom_environment_ids - computed: true, optional: false, required: false
  public get customEnvironmentIds() {
    return cdktf.Fn.tolist(this.getListAttribute('custom_environment_ids'));
  }

  // git_branch - computed: true, optional: false, required: false
  public get gitBranch() {
    return this.getStringAttribute('git_branch');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // sensitive - computed: true, optional: false, required: false
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return cdktf.Fn.tolist(this.getListAttribute('target'));
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataVercelProjectEnvironmentList extends cdktf.ComplexList {

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
  public get(index: number): DataVercelProjectEnvironmentOutputReference {
    return new DataVercelProjectEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVercelProjectGitComments {
  /**
  * Whether Commit comments are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project#on_commit DataVercelProject#on_commit}
  */
  readonly onCommit: boolean | cdktf.IResolvable;
  /**
  * Whether Pull Request comments are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project#on_pull_request DataVercelProject#on_pull_request}
  */
  readonly onPullRequest: boolean | cdktf.IResolvable;
}

export function dataVercelProjectGitCommentsToTerraform(struct?: DataVercelProjectGitComments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_commit: cdktf.booleanToTerraform(struct!.onCommit),
    on_pull_request: cdktf.booleanToTerraform(struct!.onPullRequest),
  }
}


export function dataVercelProjectGitCommentsToHclTerraform(struct?: DataVercelProjectGitComments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_commit: {
      value: cdktf.booleanToHclTerraform(struct!.onCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_pull_request: {
      value: cdktf.booleanToHclTerraform(struct!.onPullRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVercelProjectGitCommentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVercelProjectGitComments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.onCommit = this._onCommit;
    }
    if (this._onPullRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPullRequest = this._onPullRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectGitComments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onCommit = undefined;
      this._onPullRequest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onCommit = value.onCommit;
      this._onPullRequest = value.onPullRequest;
    }
  }

  // on_commit - computed: true, optional: false, required: true
  private _onCommit?: boolean | cdktf.IResolvable; 
  public get onCommit() {
    return this.getBooleanAttribute('on_commit');
  }
  public set onCommit(value: boolean | cdktf.IResolvable) {
    this._onCommit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onCommitInput() {
    return this._onCommit;
  }

  // on_pull_request - computed: true, optional: false, required: true
  private _onPullRequest?: boolean | cdktf.IResolvable; 
  public get onPullRequest() {
    return this.getBooleanAttribute('on_pull_request');
  }
  public set onPullRequest(value: boolean | cdktf.IResolvable) {
    this._onPullRequest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPullRequestInput() {
    return this._onPullRequest;
  }
}
export interface DataVercelProjectGitRepositoryDeployHooks {
}

export function dataVercelProjectGitRepositoryDeployHooksToTerraform(struct?: DataVercelProjectGitRepositoryDeployHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelProjectGitRepositoryDeployHooksToHclTerraform(struct?: DataVercelProjectGitRepositoryDeployHooks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelProjectGitRepositoryDeployHooksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVercelProjectGitRepositoryDeployHooks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectGitRepositoryDeployHooks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataVercelProjectGitRepositoryDeployHooksList extends cdktf.ComplexList {

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
  public get(index: number): DataVercelProjectGitRepositoryDeployHooksOutputReference {
    return new DataVercelProjectGitRepositoryDeployHooksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVercelProjectGitRepository {
}

export function dataVercelProjectGitRepositoryToTerraform(struct?: DataVercelProjectGitRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelProjectGitRepositoryToHclTerraform(struct?: DataVercelProjectGitRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelProjectGitRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVercelProjectGitRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectGitRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deploy_hooks - computed: true, optional: false, required: false
  private _deployHooks = new DataVercelProjectGitRepositoryDeployHooksList(this, "deploy_hooks", true);
  public get deployHooks() {
    return this._deployHooks;
  }

  // production_branch - computed: true, optional: false, required: false
  public get productionBranch() {
    return this.getStringAttribute('production_branch');
  }

  // repo - computed: true, optional: false, required: false
  public get repo() {
    return this.getStringAttribute('repo');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataVercelProjectOidcTokenConfig {
  /**
  * Configures the URL of the `iss` claim. `team` = `https://oidc.vercel.com/[team_slug]` `global` = `https://oidc.vercel.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project#issuer_mode DataVercelProject#issuer_mode}
  */
  readonly issuerMode?: string;
}

export function dataVercelProjectOidcTokenConfigToTerraform(struct?: DataVercelProjectOidcTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_mode: cdktf.stringToTerraform(struct!.issuerMode),
  }
}


export function dataVercelProjectOidcTokenConfigToHclTerraform(struct?: DataVercelProjectOidcTokenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer_mode: {
      value: cdktf.stringToHclTerraform(struct!.issuerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataVercelProjectOidcTokenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVercelProjectOidcTokenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerMode = this._issuerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectOidcTokenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuerMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuerMode = value.issuerMode;
    }
  }

  // issuer_mode - computed: true, optional: true, required: false
  private _issuerMode?: string; 
  public get issuerMode() {
    return this.getStringAttribute('issuer_mode');
  }
  public set issuerMode(value: string) {
    this._issuerMode = value;
  }
  public resetIssuerMode() {
    this._issuerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerModeInput() {
    return this._issuerMode;
  }
}
export interface DataVercelProjectOptionsAllowlistPaths {
}

export function dataVercelProjectOptionsAllowlistPathsToTerraform(struct?: DataVercelProjectOptionsAllowlistPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelProjectOptionsAllowlistPathsToHclTerraform(struct?: DataVercelProjectOptionsAllowlistPaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelProjectOptionsAllowlistPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVercelProjectOptionsAllowlistPaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectOptionsAllowlistPaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataVercelProjectOptionsAllowlistPathsList extends cdktf.ComplexList {

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
  public get(index: number): DataVercelProjectOptionsAllowlistPathsOutputReference {
    return new DataVercelProjectOptionsAllowlistPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVercelProjectOptionsAllowlistStruct {
}

export function dataVercelProjectOptionsAllowlistStructToTerraform(struct?: DataVercelProjectOptionsAllowlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelProjectOptionsAllowlistStructToHclTerraform(struct?: DataVercelProjectOptionsAllowlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelProjectOptionsAllowlistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVercelProjectOptionsAllowlistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectOptionsAllowlistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // paths - computed: true, optional: false, required: false
  private _paths = new DataVercelProjectOptionsAllowlistPathsList(this, "paths", true);
  public get paths() {
    return this._paths;
  }
}
export interface DataVercelProjectPasswordProtection {
}

export function dataVercelProjectPasswordProtectionToTerraform(struct?: DataVercelProjectPasswordProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelProjectPasswordProtectionToHclTerraform(struct?: DataVercelProjectPasswordProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelProjectPasswordProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVercelProjectPasswordProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectPasswordProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
}
export interface DataVercelProjectResourceConfig {
}

export function dataVercelProjectResourceConfigToTerraform(struct?: DataVercelProjectResourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelProjectResourceConfigToHclTerraform(struct?: DataVercelProjectResourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelProjectResourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVercelProjectResourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectResourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fluid - computed: true, optional: false, required: false
  public get fluid() {
    return this.getBooleanAttribute('fluid');
  }

  // function_default_cpu_type - computed: true, optional: false, required: false
  public get functionDefaultCpuType() {
    return this.getStringAttribute('function_default_cpu_type');
  }

  // function_default_regions - computed: true, optional: false, required: false
  public get functionDefaultRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('function_default_regions'));
  }

  // function_default_timeout - computed: true, optional: false, required: false
  public get functionDefaultTimeout() {
    return this.getNumberAttribute('function_default_timeout');
  }
}
export interface DataVercelProjectTrustedIpsAddresses {
}

export function dataVercelProjectTrustedIpsAddressesToTerraform(struct?: DataVercelProjectTrustedIpsAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelProjectTrustedIpsAddressesToHclTerraform(struct?: DataVercelProjectTrustedIpsAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelProjectTrustedIpsAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVercelProjectTrustedIpsAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectTrustedIpsAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // note - computed: true, optional: false, required: false
  public get note() {
    return this.getStringAttribute('note');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataVercelProjectTrustedIpsAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataVercelProjectTrustedIpsAddressesOutputReference {
    return new DataVercelProjectTrustedIpsAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVercelProjectTrustedIps {
}

export function dataVercelProjectTrustedIpsToTerraform(struct?: DataVercelProjectTrustedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelProjectTrustedIpsToHclTerraform(struct?: DataVercelProjectTrustedIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelProjectTrustedIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVercelProjectTrustedIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectTrustedIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addresses - computed: true, optional: false, required: false
  private _addresses = new DataVercelProjectTrustedIpsAddressesList(this, "addresses", true);
  public get addresses() {
    return this._addresses;
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // protection_mode - computed: true, optional: false, required: false
  public get protectionMode() {
    return this.getStringAttribute('protection_mode');
  }
}
export interface DataVercelProjectVercelAuthentication {
}

export function dataVercelProjectVercelAuthenticationToTerraform(struct?: DataVercelProjectVercelAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVercelProjectVercelAuthenticationToHclTerraform(struct?: DataVercelProjectVercelAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVercelProjectVercelAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataVercelProjectVercelAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVercelProjectVercelAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project vercel_project}
*/
export class DataVercelProject extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVercelProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVercelProject to import
  * @param importFromId The id of the existing DataVercelProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVercelProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.0/docs/data-sources/project vercel_project} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVercelProjectConfig
  */
  public constructor(scope: Construct, id: string, config: DataVercelProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_project',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
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
    this._buildMachineType = config.buildMachineType;
    this._name = config.name;
    this._onDemandConcurrentBuilds = config.onDemandConcurrentBuilds;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_assign_custom_domains - computed: true, optional: false, required: false
  public get autoAssignCustomDomains() {
    return this.getBooleanAttribute('auto_assign_custom_domains');
  }

  // automatically_expose_system_environment_variables - computed: true, optional: false, required: false
  public get automaticallyExposeSystemEnvironmentVariables() {
    return this.getBooleanAttribute('automatically_expose_system_environment_variables');
  }

  // build_command - computed: true, optional: false, required: false
  public get buildCommand() {
    return this.getStringAttribute('build_command');
  }

  // build_machine_type - computed: true, optional: true, required: false
  private _buildMachineType?: string; 
  public get buildMachineType() {
    return this.getStringAttribute('build_machine_type');
  }
  public set buildMachineType(value: string) {
    this._buildMachineType = value;
  }
  public resetBuildMachineType() {
    this._buildMachineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildMachineTypeInput() {
    return this._buildMachineType;
  }

  // customer_success_code_visibility - computed: true, optional: false, required: false
  public get customerSuccessCodeVisibility() {
    return this.getBooleanAttribute('customer_success_code_visibility');
  }

  // dev_command - computed: true, optional: false, required: false
  public get devCommand() {
    return this.getStringAttribute('dev_command');
  }

  // directory_listing - computed: true, optional: false, required: false
  public get directoryListing() {
    return this.getBooleanAttribute('directory_listing');
  }

  // enable_affected_projects_deployments - computed: true, optional: false, required: false
  public get enableAffectedProjectsDeployments() {
    return this.getBooleanAttribute('enable_affected_projects_deployments');
  }

  // enable_preview_feedback - computed: true, optional: false, required: false
  public get enablePreviewFeedback() {
    return this.getBooleanAttribute('enable_preview_feedback');
  }

  // enable_production_feedback - computed: true, optional: false, required: false
  public get enableProductionFeedback() {
    return this.getBooleanAttribute('enable_production_feedback');
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataVercelProjectEnvironmentList(this, "environment", true);
  public get environment() {
    return this._environment;
  }

  // framework - computed: true, optional: false, required: false
  public get framework() {
    return this.getStringAttribute('framework');
  }

  // function_failover - computed: true, optional: false, required: false
  public get functionFailover() {
    return this.getBooleanAttribute('function_failover');
  }

  // git_comments - computed: true, optional: false, required: false
  private _gitComments = new DataVercelProjectGitCommentsOutputReference(this, "git_comments");
  public get gitComments() {
    return this._gitComments;
  }

  // git_fork_protection - computed: true, optional: false, required: false
  public get gitForkProtection() {
    return this.getBooleanAttribute('git_fork_protection');
  }

  // git_lfs - computed: true, optional: false, required: false
  public get gitLfs() {
    return this.getBooleanAttribute('git_lfs');
  }

  // git_repository - computed: true, optional: false, required: false
  private _gitRepository = new DataVercelProjectGitRepositoryOutputReference(this, "git_repository");
  public get gitRepository() {
    return this._gitRepository;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_command - computed: true, optional: false, required: false
  public get ignoreCommand() {
    return this.getStringAttribute('ignore_command');
  }

  // install_command - computed: true, optional: false, required: false
  public get installCommand() {
    return this.getStringAttribute('install_command');
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

  // node_version - computed: true, optional: false, required: false
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }

  // oidc_token_config - computed: true, optional: false, required: false
  private _oidcTokenConfig = new DataVercelProjectOidcTokenConfigOutputReference(this, "oidc_token_config");
  public get oidcTokenConfig() {
    return this._oidcTokenConfig;
  }

  // on_demand_concurrent_builds - computed: true, optional: true, required: false
  private _onDemandConcurrentBuilds?: boolean | cdktf.IResolvable; 
  public get onDemandConcurrentBuilds() {
    return this.getBooleanAttribute('on_demand_concurrent_builds');
  }
  public set onDemandConcurrentBuilds(value: boolean | cdktf.IResolvable) {
    this._onDemandConcurrentBuilds = value;
  }
  public resetOnDemandConcurrentBuilds() {
    this._onDemandConcurrentBuilds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandConcurrentBuildsInput() {
    return this._onDemandConcurrentBuilds;
  }

  // options_allowlist - computed: true, optional: false, required: false
  private _optionsAllowlist = new DataVercelProjectOptionsAllowlistStructOutputReference(this, "options_allowlist");
  public get optionsAllowlist() {
    return this._optionsAllowlist;
  }

  // output_directory - computed: true, optional: false, required: false
  public get outputDirectory() {
    return this.getStringAttribute('output_directory');
  }

  // password_protection - computed: true, optional: false, required: false
  private _passwordProtection = new DataVercelProjectPasswordProtectionOutputReference(this, "password_protection");
  public get passwordProtection() {
    return this._passwordProtection;
  }

  // preview_comments - computed: true, optional: false, required: false
  public get previewComments() {
    return this.getBooleanAttribute('preview_comments');
  }

  // preview_deployments_disabled - computed: true, optional: false, required: false
  public get previewDeploymentsDisabled() {
    return this.getBooleanAttribute('preview_deployments_disabled');
  }

  // prioritise_production_builds - computed: true, optional: false, required: false
  public get prioritiseProductionBuilds() {
    return this.getBooleanAttribute('prioritise_production_builds');
  }

  // protection_bypass_for_automation - computed: true, optional: false, required: false
  public get protectionBypassForAutomation() {
    return this.getBooleanAttribute('protection_bypass_for_automation');
  }

  // protection_bypass_for_automation_secret - computed: true, optional: false, required: false
  public get protectionBypassForAutomationSecret() {
    return this.getStringAttribute('protection_bypass_for_automation_secret');
  }

  // public_source - computed: true, optional: false, required: false
  public get publicSource() {
    return this.getBooleanAttribute('public_source');
  }

  // resource_config - computed: true, optional: false, required: false
  private _resourceConfig = new DataVercelProjectResourceConfigOutputReference(this, "resource_config");
  public get resourceConfig() {
    return this._resourceConfig;
  }

  // root_directory - computed: true, optional: false, required: false
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }

  // serverless_function_region - computed: true, optional: false, required: false
  public get serverlessFunctionRegion() {
    return this.getStringAttribute('serverless_function_region');
  }

  // skew_protection - computed: true, optional: false, required: false
  public get skewProtection() {
    return this.getStringAttribute('skew_protection');
  }

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // trusted_ips - computed: true, optional: false, required: false
  private _trustedIps = new DataVercelProjectTrustedIpsOutputReference(this, "trusted_ips");
  public get trustedIps() {
    return this._trustedIps;
  }

  // vercel_authentication - computed: true, optional: false, required: false
  private _vercelAuthentication = new DataVercelProjectVercelAuthenticationOutputReference(this, "vercel_authentication");
  public get vercelAuthentication() {
    return this._vercelAuthentication;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      build_machine_type: cdktf.stringToTerraform(this._buildMachineType),
      name: cdktf.stringToTerraform(this._name),
      on_demand_concurrent_builds: cdktf.booleanToTerraform(this._onDemandConcurrentBuilds),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      build_machine_type: {
        value: cdktf.stringToHclTerraform(this._buildMachineType),
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
      on_demand_concurrent_builds: {
        value: cdktf.booleanToHclTerraform(this._onDemandConcurrentBuilds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
