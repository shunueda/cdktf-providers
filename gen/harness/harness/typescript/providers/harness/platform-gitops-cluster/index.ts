// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformGitopsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier of the GitOps cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#account_id PlatformGitopsCluster#account_id}
  */
  readonly accountId?: string;
  /**
  * Agent identifier of the GitOps cluster. (include scope prefix) 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#agent_id PlatformGitopsCluster#agent_id}
  */
  readonly agentId: string;
  /**
  * Indicates if the cluster should be deleted forcefully, regardless of existing applications using that cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#force_delete PlatformGitopsCluster#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the cluster should be updated forcefully, regardless of existing applications using that cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#force_update PlatformGitopsCluster#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#id PlatformGitopsCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the GitOps cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#identifier PlatformGitopsCluster#identifier}
  */
  readonly identifier: string;
  /**
  * Organization identifier of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#org_id PlatformGitopsCluster#org_id}
  */
  readonly orgId?: string;
  /**
  * Project identifier of the GitOps cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#project_id PlatformGitopsCluster#project_id}
  */
  readonly projectId?: string;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#request PlatformGitopsCluster#request}
  */
  readonly request?: PlatformGitopsClusterRequest;
}
export interface PlatformGitopsClusterRequestClusterInfoCacheInfo {
}

export function platformGitopsClusterRequestClusterInfoCacheInfoToTerraform(struct?: PlatformGitopsClusterRequestClusterInfoCacheInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function platformGitopsClusterRequestClusterInfoCacheInfoToHclTerraform(struct?: PlatformGitopsClusterRequestClusterInfoCacheInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PlatformGitopsClusterRequestClusterInfoCacheInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsClusterRequestClusterInfoCacheInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsClusterRequestClusterInfoCacheInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apis_count - computed: true, optional: false, required: false
  public get apisCount() {
    return this.getStringAttribute('apis_count');
  }

  // last_cache_sync_time - computed: true, optional: false, required: false
  public get lastCacheSyncTime() {
    return this.getStringAttribute('last_cache_sync_time');
  }

  // resources_count - computed: true, optional: false, required: false
  public get resourcesCount() {
    return this.getStringAttribute('resources_count');
  }
}

export class PlatformGitopsClusterRequestClusterInfoCacheInfoList extends cdktf.ComplexList {

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
  public get(index: number): PlatformGitopsClusterRequestClusterInfoCacheInfoOutputReference {
    return new PlatformGitopsClusterRequestClusterInfoCacheInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsClusterRequestClusterInfoConnectionStateAttemptedAt {
}

export function platformGitopsClusterRequestClusterInfoConnectionStateAttemptedAtToTerraform(struct?: PlatformGitopsClusterRequestClusterInfoConnectionStateAttemptedAt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function platformGitopsClusterRequestClusterInfoConnectionStateAttemptedAtToHclTerraform(struct?: PlatformGitopsClusterRequestClusterInfoConnectionStateAttemptedAt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PlatformGitopsClusterRequestClusterInfoConnectionStateAttemptedAtOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsClusterRequestClusterInfoConnectionStateAttemptedAt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsClusterRequestClusterInfoConnectionStateAttemptedAt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
}

export class PlatformGitopsClusterRequestClusterInfoConnectionStateAttemptedAtList extends cdktf.ComplexList {

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
  public get(index: number): PlatformGitopsClusterRequestClusterInfoConnectionStateAttemptedAtOutputReference {
    return new PlatformGitopsClusterRequestClusterInfoConnectionStateAttemptedAtOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsClusterRequestClusterInfoConnectionState {
}

export function platformGitopsClusterRequestClusterInfoConnectionStateToTerraform(struct?: PlatformGitopsClusterRequestClusterInfoConnectionState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function platformGitopsClusterRequestClusterInfoConnectionStateToHclTerraform(struct?: PlatformGitopsClusterRequestClusterInfoConnectionState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PlatformGitopsClusterRequestClusterInfoConnectionStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsClusterRequestClusterInfoConnectionState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsClusterRequestClusterInfoConnectionState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attempted_at - computed: true, optional: false, required: false
  private _attemptedAt = new PlatformGitopsClusterRequestClusterInfoConnectionStateAttemptedAtList(this, "attempted_at", false);
  public get attemptedAt() {
    return this._attemptedAt;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class PlatformGitopsClusterRequestClusterInfoConnectionStateList extends cdktf.ComplexList {

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
  public get(index: number): PlatformGitopsClusterRequestClusterInfoConnectionStateOutputReference {
    return new PlatformGitopsClusterRequestClusterInfoConnectionStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsClusterRequestClusterInfo {
}

export function platformGitopsClusterRequestClusterInfoToTerraform(struct?: PlatformGitopsClusterRequestClusterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function platformGitopsClusterRequestClusterInfoToHclTerraform(struct?: PlatformGitopsClusterRequestClusterInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PlatformGitopsClusterRequestClusterInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsClusterRequestClusterInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsClusterRequestClusterInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_versions - computed: true, optional: false, required: false
  public get apiVersions() {
    return this.getListAttribute('api_versions');
  }

  // applications_count - computed: true, optional: false, required: false
  public get applicationsCount() {
    return this.getStringAttribute('applications_count');
  }

  // cache_info - computed: true, optional: false, required: false
  private _cacheInfo = new PlatformGitopsClusterRequestClusterInfoCacheInfoList(this, "cache_info", false);
  public get cacheInfo() {
    return this._cacheInfo;
  }

  // connection_state - computed: true, optional: false, required: false
  private _connectionState = new PlatformGitopsClusterRequestClusterInfoConnectionStateList(this, "connection_state", false);
  public get connectionState() {
    return this._connectionState;
  }

  // server_version - computed: true, optional: false, required: false
  public get serverVersion() {
    return this.getStringAttribute('server_version');
  }
}

export class PlatformGitopsClusterRequestClusterInfoList extends cdktf.ComplexList {

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
  public get(index: number): PlatformGitopsClusterRequestClusterInfoOutputReference {
    return new PlatformGitopsClusterRequestClusterInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsClusterRequestClusterConfigExecProviderConfig {
  /**
  * Preferred input version of the ExecInfo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#api_version PlatformGitopsCluster#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Arguments to pass to the command when executing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#args PlatformGitopsCluster#args}
  */
  readonly args?: string[];
  /**
  * Command to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#command PlatformGitopsCluster#command}
  */
  readonly command?: string;
  /**
  * Additional environment variables to expose to the process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#env PlatformGitopsCluster#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Message displayed when the executable is not found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#install_hint PlatformGitopsCluster#install_hint}
  */
  readonly installHint?: string;
}

export function platformGitopsClusterRequestClusterConfigExecProviderConfigToTerraform(struct?: PlatformGitopsClusterRequestClusterConfigExecProviderConfigOutputReference | PlatformGitopsClusterRequestClusterConfigExecProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    install_hint: cdktf.stringToTerraform(struct!.installHint),
  }
}


export function platformGitopsClusterRequestClusterConfigExecProviderConfigToHclTerraform(struct?: PlatformGitopsClusterRequestClusterConfigExecProviderConfigOutputReference | PlatformGitopsClusterRequestClusterConfigExecProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    install_hint: {
      value: cdktf.stringToHclTerraform(struct!.installHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsClusterRequestClusterConfigExecProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsClusterRequestClusterConfigExecProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._installHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.installHint = this._installHint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsClusterRequestClusterConfigExecProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiVersion = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._installHint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiVersion = value.apiVersion;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._installHint = value.installHint;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // args - computed: true, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // install_hint - computed: false, optional: true, required: false
  private _installHint?: string; 
  public get installHint() {
    return this.getStringAttribute('install_hint');
  }
  public set installHint(value: string) {
    this._installHint = value;
  }
  public resetInstallHint() {
    this._installHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installHintInput() {
    return this._installHint;
  }
}
export interface PlatformGitopsClusterRequestClusterConfigTlsClientConfig {
  /**
  * CA data holds PEM-encoded bytes (typically read from a root certificates bundle). Use this if you are using self-signed certificates. CAData takes precedence over CAFile. The value should be base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#ca_data PlatformGitopsCluster#ca_data}
  */
  readonly caData?: string;
  /**
  * Certificate data holds PEM-encoded bytes (typically read from a client certificate file). CertData takes precedence over CertFile. Use this if you are using mTLS. The value should be base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#cert_data PlatformGitopsCluster#cert_data}
  */
  readonly certData?: string;
  /**
  * Indicates if the TLS connection to the cluster should be insecure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#insecure PlatformGitopsCluster#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Key data holds PEM-encoded bytes (typically read from a client certificate key file). KeyData takes precedence over KeyFile. Use this if you are using mTLS. The value should be base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#key_data PlatformGitopsCluster#key_data}
  */
  readonly keyData?: string;
  /**
  * Server name for SNI in the client to check server certificates against. If ServerName is empty, the hostname used to contact the server is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#server_name PlatformGitopsCluster#server_name}
  */
  readonly serverName?: string;
}

export function platformGitopsClusterRequestClusterConfigTlsClientConfigToTerraform(struct?: PlatformGitopsClusterRequestClusterConfigTlsClientConfigOutputReference | PlatformGitopsClusterRequestClusterConfigTlsClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_data: cdktf.stringToTerraform(struct!.caData),
    cert_data: cdktf.stringToTerraform(struct!.certData),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    key_data: cdktf.stringToTerraform(struct!.keyData),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function platformGitopsClusterRequestClusterConfigTlsClientConfigToHclTerraform(struct?: PlatformGitopsClusterRequestClusterConfigTlsClientConfigOutputReference | PlatformGitopsClusterRequestClusterConfigTlsClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_data: {
      value: cdktf.stringToHclTerraform(struct!.caData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsClusterRequestClusterConfigTlsClientConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsClusterRequestClusterConfigTlsClientConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caData !== undefined) {
      hasAnyValues = true;
      internalValueResult.caData = this._caData;
    }
    if (this._certData !== undefined) {
      hasAnyValues = true;
      internalValueResult.certData = this._certData;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsClusterRequestClusterConfigTlsClientConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caData = undefined;
      this._certData = undefined;
      this._insecure = undefined;
      this._keyData = undefined;
      this._serverName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caData = value.caData;
      this._certData = value.certData;
      this._insecure = value.insecure;
      this._keyData = value.keyData;
      this._serverName = value.serverName;
    }
  }

  // ca_data - computed: false, optional: true, required: false
  private _caData?: string; 
  public get caData() {
    return this.getStringAttribute('ca_data');
  }
  public set caData(value: string) {
    this._caData = value;
  }
  public resetCaData() {
    this._caData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caDataInput() {
    return this._caData;
  }

  // cert_data - computed: false, optional: true, required: false
  private _certData?: string; 
  public get certData() {
    return this.getStringAttribute('cert_data');
  }
  public set certData(value: string) {
    this._certData = value;
  }
  public resetCertData() {
    this._certData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDataInput() {
    return this._certData;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
  }

  // server_name - computed: false, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface PlatformGitopsClusterRequestClusterConfig {
  /**
  * AWS Cluster name. If set then AWS CLI EKS token command will be used to access cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#aws_cluster_name PlatformGitopsCluster#aws_cluster_name}
  */
  readonly awsClusterName?: string;
  /**
  * Bearer authentication token the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#bearer_token PlatformGitopsCluster#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Identifies the authentication method used to connect to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#cluster_connection_type PlatformGitopsCluster#cluster_connection_type}
  */
  readonly clusterConnectionType?: string;
  /**
  * DisableCompression bypasses automatic GZip compression requests to to the cluster's API server. Corresponds to running kubectl with --disable-compression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#disable_compression PlatformGitopsCluster#disable_compression}
  */
  readonly disableCompression?: boolean | cdktf.IResolvable;
  /**
  * Password of the server of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#password PlatformGitopsCluster#password}
  */
  readonly password?: string;
  /**
  * The URL to the proxy to be used for all requests send to the cluster's API server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#proxy_url PlatformGitopsCluster#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Optional role ARN. If set then used for AWS IAM Authenticator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#role_a_r_n PlatformGitopsCluster#role_a_r_n}
  */
  readonly roleARN?: string;
  /**
  * Username of the server of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#username PlatformGitopsCluster#username}
  */
  readonly username?: string;
  /**
  * exec_provider_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#exec_provider_config PlatformGitopsCluster#exec_provider_config}
  */
  readonly execProviderConfig?: PlatformGitopsClusterRequestClusterConfigExecProviderConfig;
  /**
  * tls_client_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#tls_client_config PlatformGitopsCluster#tls_client_config}
  */
  readonly tlsClientConfig?: PlatformGitopsClusterRequestClusterConfigTlsClientConfig;
}

export function platformGitopsClusterRequestClusterConfigToTerraform(struct?: PlatformGitopsClusterRequestClusterConfigOutputReference | PlatformGitopsClusterRequestClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_cluster_name: cdktf.stringToTerraform(struct!.awsClusterName),
    bearer_token: cdktf.stringToTerraform(struct!.bearerToken),
    cluster_connection_type: cdktf.stringToTerraform(struct!.clusterConnectionType),
    disable_compression: cdktf.booleanToTerraform(struct!.disableCompression),
    password: cdktf.stringToTerraform(struct!.password),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    role_a_r_n: cdktf.stringToTerraform(struct!.roleARN),
    username: cdktf.stringToTerraform(struct!.username),
    exec_provider_config: platformGitopsClusterRequestClusterConfigExecProviderConfigToTerraform(struct!.execProviderConfig),
    tls_client_config: platformGitopsClusterRequestClusterConfigTlsClientConfigToTerraform(struct!.tlsClientConfig),
  }
}


export function platformGitopsClusterRequestClusterConfigToHclTerraform(struct?: PlatformGitopsClusterRequestClusterConfigOutputReference | PlatformGitopsClusterRequestClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.awsClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bearer_token: {
      value: cdktf.stringToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_connection_type: {
      value: cdktf.stringToHclTerraform(struct!.clusterConnectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_compression: {
      value: cdktf.booleanToHclTerraform(struct!.disableCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_a_r_n: {
      value: cdktf.stringToHclTerraform(struct!.roleARN),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exec_provider_config: {
      value: platformGitopsClusterRequestClusterConfigExecProviderConfigToHclTerraform(struct!.execProviderConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsClusterRequestClusterConfigExecProviderConfigList",
    },
    tls_client_config: {
      value: platformGitopsClusterRequestClusterConfigTlsClientConfigToHclTerraform(struct!.tlsClientConfig),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsClusterRequestClusterConfigTlsClientConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsClusterRequestClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsClusterRequestClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsClusterName = this._awsClusterName;
    }
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    if (this._clusterConnectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterConnectionType = this._clusterConnectionType;
    }
    if (this._disableCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCompression = this._disableCompression;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._roleARN !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleARN = this._roleARN;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._execProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execProviderConfig = this._execProviderConfig?.internalValue;
    }
    if (this._tlsClientConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientConfig = this._tlsClientConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsClusterRequestClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsClusterName = undefined;
      this._bearerToken = undefined;
      this._clusterConnectionType = undefined;
      this._disableCompression = undefined;
      this._password = undefined;
      this._proxyUrl = undefined;
      this._roleARN = undefined;
      this._username = undefined;
      this._execProviderConfig.internalValue = undefined;
      this._tlsClientConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsClusterName = value.awsClusterName;
      this._bearerToken = value.bearerToken;
      this._clusterConnectionType = value.clusterConnectionType;
      this._disableCompression = value.disableCompression;
      this._password = value.password;
      this._proxyUrl = value.proxyUrl;
      this._roleARN = value.roleARN;
      this._username = value.username;
      this._execProviderConfig.internalValue = value.execProviderConfig;
      this._tlsClientConfig.internalValue = value.tlsClientConfig;
    }
  }

  // aws_cluster_name - computed: false, optional: true, required: false
  private _awsClusterName?: string; 
  public get awsClusterName() {
    return this.getStringAttribute('aws_cluster_name');
  }
  public set awsClusterName(value: string) {
    this._awsClusterName = value;
  }
  public resetAwsClusterName() {
    this._awsClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsClusterNameInput() {
    return this._awsClusterName;
  }

  // bearer_token - computed: true, optional: true, required: false
  private _bearerToken?: string; 
  public get bearerToken() {
    return this.getStringAttribute('bearer_token');
  }
  public set bearerToken(value: string) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }

  // cluster_connection_type - computed: false, optional: true, required: false
  private _clusterConnectionType?: string; 
  public get clusterConnectionType() {
    return this.getStringAttribute('cluster_connection_type');
  }
  public set clusterConnectionType(value: string) {
    this._clusterConnectionType = value;
  }
  public resetClusterConnectionType() {
    this._clusterConnectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConnectionTypeInput() {
    return this._clusterConnectionType;
  }

  // disable_compression - computed: false, optional: true, required: false
  private _disableCompression?: boolean | cdktf.IResolvable; 
  public get disableCompression() {
    return this.getBooleanAttribute('disable_compression');
  }
  public set disableCompression(value: boolean | cdktf.IResolvable) {
    this._disableCompression = value;
  }
  public resetDisableCompression() {
    this._disableCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCompressionInput() {
    return this._disableCompression;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // role_a_r_n - computed: false, optional: true, required: false
  private _roleARN?: string; 
  public get roleARN() {
    return this.getStringAttribute('role_a_r_n');
  }
  public set roleARN(value: string) {
    this._roleARN = value;
  }
  public resetRoleARN() {
    this._roleARN = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleARNInput() {
    return this._roleARN;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // exec_provider_config - computed: false, optional: true, required: false
  private _execProviderConfig = new PlatformGitopsClusterRequestClusterConfigExecProviderConfigOutputReference(this, "exec_provider_config");
  public get execProviderConfig() {
    return this._execProviderConfig;
  }
  public putExecProviderConfig(value: PlatformGitopsClusterRequestClusterConfigExecProviderConfig) {
    this._execProviderConfig.internalValue = value;
  }
  public resetExecProviderConfig() {
    this._execProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execProviderConfigInput() {
    return this._execProviderConfig.internalValue;
  }

  // tls_client_config - computed: false, optional: true, required: false
  private _tlsClientConfig = new PlatformGitopsClusterRequestClusterConfigTlsClientConfigOutputReference(this, "tls_client_config");
  public get tlsClientConfig() {
    return this._tlsClientConfig;
  }
  public putTlsClientConfig(value: PlatformGitopsClusterRequestClusterConfigTlsClientConfig) {
    this._tlsClientConfig.internalValue = value;
  }
  public resetTlsClientConfig() {
    this._tlsClientConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientConfigInput() {
    return this._tlsClientConfig.internalValue;
  }
}
export interface PlatformGitopsClusterRequestClusterRefreshRequestedAt {
  /**
  * Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. This field may be limited in precision depending on context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#nanos PlatformGitopsCluster#nanos}
  */
  readonly nanos?: number;
  /**
  * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#seconds PlatformGitopsCluster#seconds}
  */
  readonly seconds?: string;
}

export function platformGitopsClusterRequestClusterRefreshRequestedAtToTerraform(struct?: PlatformGitopsClusterRequestClusterRefreshRequestedAtOutputReference | PlatformGitopsClusterRequestClusterRefreshRequestedAt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.stringToTerraform(struct!.seconds),
  }
}


export function platformGitopsClusterRequestClusterRefreshRequestedAtToHclTerraform(struct?: PlatformGitopsClusterRequestClusterRefreshRequestedAtOutputReference | PlatformGitopsClusterRequestClusterRefreshRequestedAt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.stringToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsClusterRequestClusterRefreshRequestedAtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsClusterRequestClusterRefreshRequestedAt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsClusterRequestClusterRefreshRequestedAt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: string; 
  public get seconds() {
    return this.getStringAttribute('seconds');
  }
  public set seconds(value: string) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface PlatformGitopsClusterRequestCluster {
  /**
  * Annotations for cluster secret metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#annotations PlatformGitopsCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Indicates if cluster level resources should be managed. This setting is used only if cluster is connected in a namespaced mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#cluster_resources PlatformGitopsCluster#cluster_resources}
  */
  readonly clusterResources?: boolean | cdktf.IResolvable;
  /**
  * Labels for cluster secret metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#labels PlatformGitopsCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the cluster. If omitted, the server address will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#name PlatformGitopsCluster#name}
  */
  readonly name?: string;
  /**
  * List of namespaces which are accessible in that cluster. Cluster level resources will be ignored if namespace list is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#namespaces PlatformGitopsCluster#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * The ArgoCD project name corresponding to this GitOps cluster. An empty string means that the GitOps cluster belongs to the default project created by Harness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#project PlatformGitopsCluster#project}
  */
  readonly project?: string;
  /**
  * API server URL of the kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#server PlatformGitopsCluster#server}
  */
  readonly server: string;
  /**
  * Shard number to be managed by a specific application controller pod. Calculated on the fly by the application controller if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#shard PlatformGitopsCluster#shard}
  */
  readonly shard?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#config PlatformGitopsCluster#config}
  */
  readonly config: PlatformGitopsClusterRequestClusterConfig;
  /**
  * refresh_requested_at block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#refresh_requested_at PlatformGitopsCluster#refresh_requested_at}
  */
  readonly refreshRequestedAt?: PlatformGitopsClusterRequestClusterRefreshRequestedAt;
}

export function platformGitopsClusterRequestClusterToTerraform(struct?: PlatformGitopsClusterRequestClusterOutputReference | PlatformGitopsClusterRequestCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    cluster_resources: cdktf.booleanToTerraform(struct!.clusterResources),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    project: cdktf.stringToTerraform(struct!.project),
    server: cdktf.stringToTerraform(struct!.server),
    shard: cdktf.stringToTerraform(struct!.shard),
    config: platformGitopsClusterRequestClusterConfigToTerraform(struct!.config),
    refresh_requested_at: platformGitopsClusterRequestClusterRefreshRequestedAtToTerraform(struct!.refreshRequestedAt),
  }
}


export function platformGitopsClusterRequestClusterToHclTerraform(struct?: PlatformGitopsClusterRequestClusterOutputReference | PlatformGitopsClusterRequestCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cluster_resources: {
      value: cdktf.booleanToHclTerraform(struct!.clusterResources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shard: {
      value: cdktf.stringToHclTerraform(struct!.shard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: platformGitopsClusterRequestClusterConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsClusterRequestClusterConfigList",
    },
    refresh_requested_at: {
      value: platformGitopsClusterRequestClusterRefreshRequestedAtToHclTerraform(struct!.refreshRequestedAt),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsClusterRequestClusterRefreshRequestedAtList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsClusterRequestClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsClusterRequestCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._clusterResources !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResources = this._clusterResources;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._shard !== undefined) {
      hasAnyValues = true;
      internalValueResult.shard = this._shard;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._refreshRequestedAt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshRequestedAt = this._refreshRequestedAt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsClusterRequestCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._clusterResources = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespaces = undefined;
      this._project = undefined;
      this._server = undefined;
      this._shard = undefined;
      this._config.internalValue = undefined;
      this._refreshRequestedAt.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._clusterResources = value.clusterResources;
      this._labels = value.labels;
      this._name = value.name;
      this._namespaces = value.namespaces;
      this._project = value.project;
      this._server = value.server;
      this._shard = value.shard;
      this._config.internalValue = value.config;
      this._refreshRequestedAt.internalValue = value.refreshRequestedAt;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // cluster_resources - computed: false, optional: true, required: false
  private _clusterResources?: boolean | cdktf.IResolvable; 
  public get clusterResources() {
    return this.getBooleanAttribute('cluster_resources');
  }
  public set clusterResources(value: boolean | cdktf.IResolvable) {
    this._clusterResources = value;
  }
  public resetClusterResources() {
    this._clusterResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourcesInput() {
    return this._clusterResources;
  }

  // info - computed: true, optional: false, required: false
  private _info = new PlatformGitopsClusterRequestClusterInfoList(this, "info", false);
  public get info() {
    return this._info;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // project - computed: true, optional: true, required: false
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

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // shard - computed: false, optional: true, required: false
  private _shard?: string; 
  public get shard() {
    return this.getStringAttribute('shard');
  }
  public set shard(value: string) {
    this._shard = value;
  }
  public resetShard() {
    this._shard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardInput() {
    return this._shard;
  }

  // config - computed: false, optional: false, required: true
  private _config = new PlatformGitopsClusterRequestClusterConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: PlatformGitopsClusterRequestClusterConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // refresh_requested_at - computed: false, optional: true, required: false
  private _refreshRequestedAt = new PlatformGitopsClusterRequestClusterRefreshRequestedAtOutputReference(this, "refresh_requested_at");
  public get refreshRequestedAt() {
    return this._refreshRequestedAt;
  }
  public putRefreshRequestedAt(value: PlatformGitopsClusterRequestClusterRefreshRequestedAt) {
    this._refreshRequestedAt.internalValue = value;
  }
  public resetRefreshRequestedAt() {
    this._refreshRequestedAt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRequestedAtInput() {
    return this._refreshRequestedAt.internalValue;
  }
}
export interface PlatformGitopsClusterRequest {
  /**
  * Tags for the GitOps cluster. These can be used to search or filter the GitOps agents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#tags PlatformGitopsCluster#tags}
  */
  readonly tags?: string[];
  /**
  * Fields which are updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#updated_fields PlatformGitopsCluster#updated_fields}
  */
  readonly updatedFields?: string[];
  /**
  * Indicates if the GitOps cluster should be updated if existing and inserted if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#upsert PlatformGitopsCluster#upsert}
  */
  readonly upsert?: boolean | cdktf.IResolvable;
  /**
  * cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#cluster PlatformGitopsCluster#cluster}
  */
  readonly cluster?: PlatformGitopsClusterRequestCluster;
}

export function platformGitopsClusterRequestToTerraform(struct?: PlatformGitopsClusterRequestOutputReference | PlatformGitopsClusterRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    updated_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.updatedFields),
    upsert: cdktf.booleanToTerraform(struct!.upsert),
    cluster: platformGitopsClusterRequestClusterToTerraform(struct!.cluster),
  }
}


export function platformGitopsClusterRequestToHclTerraform(struct?: PlatformGitopsClusterRequestOutputReference | PlatformGitopsClusterRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    updated_fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.updatedFields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    upsert: {
      value: cdktf.booleanToHclTerraform(struct!.upsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster: {
      value: platformGitopsClusterRequestClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsClusterRequestClusterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsClusterRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsClusterRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._updatedFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedFields = this._updatedFields;
    }
    if (this._upsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.upsert = this._upsert;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsClusterRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
      this._updatedFields = undefined;
      this._upsert = undefined;
      this._cluster.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
      this._updatedFields = value.updatedFields;
      this._upsert = value.upsert;
      this._cluster.internalValue = value.cluster;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_fields - computed: true, optional: true, required: false
  private _updatedFields?: string[]; 
  public get updatedFields() {
    return this.getListAttribute('updated_fields');
  }
  public set updatedFields(value: string[]) {
    this._updatedFields = value;
  }
  public resetUpdatedFields() {
    this._updatedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedFieldsInput() {
    return this._updatedFields;
  }

  // upsert - computed: false, optional: true, required: false
  private _upsert?: boolean | cdktf.IResolvable; 
  public get upsert() {
    return this.getBooleanAttribute('upsert');
  }
  public set upsert(value: boolean | cdktf.IResolvable) {
    this._upsert = value;
  }
  public resetUpsert() {
    this._upsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upsertInput() {
    return this._upsert;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster = new PlatformGitopsClusterRequestClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: PlatformGitopsClusterRequestCluster) {
    this._cluster.internalValue = value;
  }
  public resetCluster() {
    this._cluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster harness_platform_gitops_cluster}
*/
export class PlatformGitopsCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_gitops_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformGitopsCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformGitopsCluster to import
  * @param importFromId The id of the existing PlatformGitopsCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformGitopsCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_gitops_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_gitops_cluster harness_platform_gitops_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformGitopsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformGitopsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_gitops_cluster',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._agentId = config.agentId;
    this._forceDelete = config.forceDelete;
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
    this._identifier = config.identifier;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._request.internalValue = config.request;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // org_id - computed: false, optional: true, required: false
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

  // project_id - computed: false, optional: true, required: false
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

  // request - computed: false, optional: true, required: false
  private _request = new PlatformGitopsClusterRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: PlatformGitopsClusterRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      agent_id: cdktf.stringToTerraform(this._agentId),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      request: platformGitopsClusterRequestToTerraform(this._request.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request: {
        value: platformGitopsClusterRequestToHclTerraform(this._request.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformGitopsClusterRequestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
