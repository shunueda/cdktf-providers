// https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MigrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional version to start the migration history from. See https://atlasgo.io/versioned/apply#existing-databases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#baseline Migration#baseline}
  */
  readonly baseline?: string;
  /**
  * Atlas HCL configuration content. Use abspath(path.module) when referencing local files or directories, for example: `file://${abspath(path.module)}/migrations`. See https://atlasgo.io/hcl/config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#config Migration#config}
  */
  readonly config?: string;
  /**
  * The url of the dev-db see https://atlasgo.io/cli/url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#dev_url Migration#dev_url}
  */
  readonly devUrl?: string;
  /**
  * the URL of the migration directory. dir or remote_dir block is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#dir Migration#dir}
  */
  readonly dir?: string;
  /**
  * The name of the environment used for reporting runs to Atlas Cloud. Default: tf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#env_name Migration#env_name}
  */
  readonly envName?: string;
  /**
  * How Atlas computes and executes pending migration files to the database. One of `linear`,`linear-skip` or `non-linear`. See https://atlasgo.io/versioned/apply#execution-order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#exec_order Migration#exec_order}
  */
  readonly execOrder?: string;
  /**
  * The name of the schema the revisions table resides in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#revisions_schema Migration#revisions_schema}
  */
  readonly revisionsSchema?: string;
  /**
  * The url of the database see https://atlasgo.io/cli/url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#url Migration#url}
  */
  readonly url?: string;
  /**
  * Stringify JSON object containing variables to be used inside the Atlas configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#variables Migration#variables}
  */
  readonly variables?: string;
  /**
  * The version of the migration to apply, if not specified the latest version will be applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#version Migration#version}
  */
  readonly version?: string;
  /**
  * cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#cloud Migration#cloud}
  */
  readonly cloud?: MigrationCloud;
  /**
  * protected_flows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#protected_flows Migration#protected_flows}
  */
  readonly protectedFlows?: MigrationProtectedFlows;
  /**
  * remote_dir block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#remote_dir Migration#remote_dir}
  */
  readonly remoteDir?: MigrationRemoteDir;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#timeouts Migration#timeouts}
  */
  readonly timeouts?: MigrationTimeouts;
}
export interface MigrationStatus {
}

export function migrationStatusToTerraform(struct?: MigrationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function migrationStatusToHclTerraform(struct?: MigrationStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MigrationStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current - computed: true, optional: false, required: false
  public get current() {
    return this.getStringAttribute('current');
  }

  // latest - computed: true, optional: false, required: false
  public get latest() {
    return this.getStringAttribute('latest');
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface MigrationCloud {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#project Migration#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#repo Migration#repo}
  */
  readonly repo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#token Migration#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#url Migration#url}
  */
  readonly url?: string;
}

export function migrationCloudToTerraform(struct?: MigrationCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    repo: cdktf.stringToTerraform(struct!.repo),
    token: cdktf.stringToTerraform(struct!.token),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function migrationCloudToHclTerraform(struct?: MigrationCloud | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo: {
      value: cdktf.stringToHclTerraform(struct!.repo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MigrationCloud | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._repo !== undefined) {
      hasAnyValues = true;
      internalValueResult.repo = this._repo;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCloud | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._project = undefined;
      this._repo = undefined;
      this._token = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._project = value.project;
      this._repo = value.repo;
      this._token = value.token;
      this._url = value.url;
    }
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

  // repo - computed: false, optional: true, required: false
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  public resetRepo() {
    this._repo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface MigrationProtectedFlowsMigrateDown {
  /**
  * Allow allows the flow to be executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#allow Migration#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * AutoApprove allows the flow to be automatically approved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#auto_approve Migration#auto_approve}
  */
  readonly autoApprove?: boolean | cdktf.IResolvable;
}

export function migrationProtectedFlowsMigrateDownToTerraform(struct?: MigrationProtectedFlowsMigrateDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    auto_approve: cdktf.booleanToTerraform(struct!.autoApprove),
  }
}


export function migrationProtectedFlowsMigrateDownToHclTerraform(struct?: MigrationProtectedFlowsMigrateDown | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_approve: {
      value: cdktf.booleanToHclTerraform(struct!.autoApprove),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationProtectedFlowsMigrateDownOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MigrationProtectedFlowsMigrateDown | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._autoApprove !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoApprove = this._autoApprove;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationProtectedFlowsMigrateDown | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow = undefined;
      this._autoApprove = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow = value.allow;
      this._autoApprove = value.autoApprove;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // auto_approve - computed: false, optional: true, required: false
  private _autoApprove?: boolean | cdktf.IResolvable; 
  public get autoApprove() {
    return this.getBooleanAttribute('auto_approve');
  }
  public set autoApprove(value: boolean | cdktf.IResolvable) {
    this._autoApprove = value;
  }
  public resetAutoApprove() {
    this._autoApprove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveInput() {
    return this._autoApprove;
  }
}
export interface MigrationProtectedFlows {
  /**
  * migrate_down block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#migrate_down Migration#migrate_down}
  */
  readonly migrateDown?: MigrationProtectedFlowsMigrateDown;
}

export function migrationProtectedFlowsToTerraform(struct?: MigrationProtectedFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    migrate_down: migrationProtectedFlowsMigrateDownToTerraform(struct!.migrateDown),
  }
}


export function migrationProtectedFlowsToHclTerraform(struct?: MigrationProtectedFlows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    migrate_down: {
      value: migrationProtectedFlowsMigrateDownToHclTerraform(struct!.migrateDown),
      isBlock: true,
      type: "struct",
      storageClassType: "MigrationProtectedFlowsMigrateDown",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationProtectedFlowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MigrationProtectedFlows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._migrateDown?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrateDown = this._migrateDown?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationProtectedFlows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._migrateDown.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._migrateDown.internalValue = value.migrateDown;
    }
  }

  // migrate_down - computed: false, optional: true, required: false
  private _migrateDown = new MigrationProtectedFlowsMigrateDownOutputReference(this, "migrate_down");
  public get migrateDown() {
    return this._migrateDown;
  }
  public putMigrateDown(value: MigrationProtectedFlowsMigrateDown) {
    this._migrateDown.internalValue = value;
  }
  public resetMigrateDown() {
    this._migrateDown.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateDownInput() {
    return this._migrateDown.internalValue;
  }
}
export interface MigrationRemoteDir {
  /**
  * The name of the remote directory. This attribute is required when remote_dir is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#name Migration#name}
  */
  readonly name?: string;
  /**
  * The tag of the remote directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#tag Migration#tag}
  */
  readonly tag?: string;
}

export function migrationRemoteDirToTerraform(struct?: MigrationRemoteDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function migrationRemoteDirToHclTerraform(struct?: MigrationRemoteDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationRemoteDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MigrationRemoteDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationRemoteDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._tag = value.tag;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface MigrationTimeouts {
  /**
  * Timeout defaults to 20 mins. A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#create Migration#create}
  */
  readonly create?: string;
  /**
  * Timeout defaults to 20 mins. A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#update Migration#update}
  */
  readonly update?: string;
}

export function migrationTimeoutsToTerraform(struct?: MigrationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function migrationTimeoutsToHclTerraform(struct?: MigrationTimeouts | cdktf.IResolvable): any {
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

export class MigrationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MigrationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration atlas_migration}
*/
export class Migration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "atlas_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Migration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Migration to import
  * @param importFromId The id of the existing Migration that should be imported. Refer to the {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Migration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "atlas_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ariga/atlas/0.10.0/docs/resources/migration atlas_migration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MigrationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MigrationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'atlas_migration',
      terraformGeneratorMetadata: {
        providerName: 'atlas',
        providerVersion: '0.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseline = config.baseline;
    this._config = config.config;
    this._devUrl = config.devUrl;
    this._dir = config.dir;
    this._envName = config.envName;
    this._execOrder = config.execOrder;
    this._revisionsSchema = config.revisionsSchema;
    this._url = config.url;
    this._variables = config.variables;
    this._version = config.version;
    this._cloud.internalValue = config.cloud;
    this._protectedFlows.internalValue = config.protectedFlows;
    this._remoteDir.internalValue = config.remoteDir;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline - computed: false, optional: true, required: false
  private _baseline?: string; 
  public get baseline() {
    return this.getStringAttribute('baseline');
  }
  public set baseline(value: string) {
    this._baseline = value;
  }
  public resetBaseline() {
    this._baseline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineInput() {
    return this._baseline;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // dev_url - computed: false, optional: true, required: false
  private _devUrl?: string; 
  public get devUrl() {
    return this.getStringAttribute('dev_url');
  }
  public set devUrl(value: string) {
    this._devUrl = value;
  }
  public resetDevUrl() {
    this._devUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devUrlInput() {
    return this._devUrl;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // env_name - computed: false, optional: true, required: false
  private _envName?: string; 
  public get envName() {
    return this.getStringAttribute('env_name');
  }
  public set envName(value: string) {
    this._envName = value;
  }
  public resetEnvName() {
    this._envName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envNameInput() {
    return this._envName;
  }

  // exec_order - computed: false, optional: true, required: false
  private _execOrder?: string; 
  public get execOrder() {
    return this.getStringAttribute('exec_order');
  }
  public set execOrder(value: string) {
    this._execOrder = value;
  }
  public resetExecOrder() {
    this._execOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execOrderInput() {
    return this._execOrder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // revisions_schema - computed: false, optional: true, required: false
  private _revisionsSchema?: string; 
  public get revisionsSchema() {
    return this.getStringAttribute('revisions_schema');
  }
  public set revisionsSchema(value: string) {
    this._revisionsSchema = value;
  }
  public resetRevisionsSchema() {
    this._revisionsSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionsSchemaInput() {
    return this._revisionsSchema;
  }

  // status - computed: true, optional: false, required: false
  private _status = new MigrationStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: string; 
  public get variables() {
    return this.getStringAttribute('variables');
  }
  public set variables(value: string) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
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

  // cloud - computed: false, optional: true, required: false
  private _cloud = new MigrationCloudOutputReference(this, "cloud");
  public get cloud() {
    return this._cloud;
  }
  public putCloud(value: MigrationCloud) {
    this._cloud.internalValue = value;
  }
  public resetCloud() {
    this._cloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud.internalValue;
  }

  // protected_flows - computed: false, optional: true, required: false
  private _protectedFlows = new MigrationProtectedFlowsOutputReference(this, "protected_flows");
  public get protectedFlows() {
    return this._protectedFlows;
  }
  public putProtectedFlows(value: MigrationProtectedFlows) {
    this._protectedFlows.internalValue = value;
  }
  public resetProtectedFlows() {
    this._protectedFlows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedFlowsInput() {
    return this._protectedFlows.internalValue;
  }

  // remote_dir - computed: false, optional: true, required: false
  private _remoteDir = new MigrationRemoteDirOutputReference(this, "remote_dir");
  public get remoteDir() {
    return this._remoteDir;
  }
  public putRemoteDir(value: MigrationRemoteDir) {
    this._remoteDir.internalValue = value;
  }
  public resetRemoteDir() {
    this._remoteDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDirInput() {
    return this._remoteDir.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MigrationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MigrationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      baseline: cdktf.stringToTerraform(this._baseline),
      config: cdktf.stringToTerraform(this._config),
      dev_url: cdktf.stringToTerraform(this._devUrl),
      dir: cdktf.stringToTerraform(this._dir),
      env_name: cdktf.stringToTerraform(this._envName),
      exec_order: cdktf.stringToTerraform(this._execOrder),
      revisions_schema: cdktf.stringToTerraform(this._revisionsSchema),
      url: cdktf.stringToTerraform(this._url),
      variables: cdktf.stringToTerraform(this._variables),
      version: cdktf.stringToTerraform(this._version),
      cloud: migrationCloudToTerraform(this._cloud.internalValue),
      protected_flows: migrationProtectedFlowsToTerraform(this._protectedFlows.internalValue),
      remote_dir: migrationRemoteDirToTerraform(this._remoteDir.internalValue),
      timeouts: migrationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      baseline: {
        value: cdktf.stringToHclTerraform(this._baseline),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_url: {
        value: cdktf.stringToHclTerraform(this._devUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dir: {
        value: cdktf.stringToHclTerraform(this._dir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_name: {
        value: cdktf.stringToHclTerraform(this._envName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exec_order: {
        value: cdktf.stringToHclTerraform(this._execOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revisions_schema: {
        value: cdktf.stringToHclTerraform(this._revisionsSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variables: {
        value: cdktf.stringToHclTerraform(this._variables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: migrationCloudToHclTerraform(this._cloud.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MigrationCloud",
      },
      protected_flows: {
        value: migrationProtectedFlowsToHclTerraform(this._protectedFlows.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MigrationProtectedFlows",
      },
      remote_dir: {
        value: migrationRemoteDirToHclTerraform(this._remoteDir.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MigrationRemoteDir",
      },
      timeouts: {
        value: migrationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MigrationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
