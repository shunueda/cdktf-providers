// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformGitopsAgentDeployYamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier of the GitOps agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#account_id DataHarnessPlatformGitopsAgentDeployYaml#account_id}
  */
  readonly accountId?: string;
  /**
  * CA data of the GitOps agent, base64 encoded content of ca chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#ca_data DataHarnessPlatformGitopsAgentDeployYaml#ca_data}
  */
  readonly caData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#id DataHarnessPlatformGitopsAgentDeployYaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the GitOps agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#identifier DataHarnessPlatformGitopsAgentDeployYaml#identifier}
  */
  readonly identifier: string;
  /**
  * The kubernetes namespace where the agent is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#namespace DataHarnessPlatformGitopsAgentDeployYaml#namespace}
  */
  readonly namespace: string;
  /**
  * Organization identifier of the GitOps agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#org_id DataHarnessPlatformGitopsAgentDeployYaml#org_id}
  */
  readonly orgId?: string;
  /**
  * Private key for the GitOps agent. If provided authentication token will not be regenerated. Must be base64 encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#private_key DataHarnessPlatformGitopsAgentDeployYaml#private_key}
  */
  readonly privateKey?: string;
  /**
  * Project identifier of the GitOps agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#project_id DataHarnessPlatformGitopsAgentDeployYaml#project_id}
  */
  readonly projectId?: string;
  /**
  * Skip CRDs for the GitOps agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#skip_crds DataHarnessPlatformGitopsAgentDeployYaml#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * argocd_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#argocd_settings DataHarnessPlatformGitopsAgentDeployYaml#argocd_settings}
  */
  readonly argocdSettings?: DataHarnessPlatformGitopsAgentDeployYamlArgocdSettings;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#proxy DataHarnessPlatformGitopsAgentDeployYaml#proxy}
  */
  readonly proxy?: DataHarnessPlatformGitopsAgentDeployYamlProxy[] | cdktf.IResolvable;
}
export interface DataHarnessPlatformGitopsAgentDeployYamlArgocdSettings {
  /**
  * Controls the Environment variable HELM_SECRETS_VALUES_ALLOW_PATH_TRAVERSAL to allow or deny dot-dot-slash values file paths. Disabled by default for security reasons. This config is pushed as an env variable to the repo-server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#enable_helm_path_traversal DataHarnessPlatformGitopsAgentDeployYaml#enable_helm_path_traversal}
  */
  readonly enableHelmPathTraversal?: boolean | cdktf.IResolvable;
}

export function dataHarnessPlatformGitopsAgentDeployYamlArgocdSettingsToTerraform(struct?: DataHarnessPlatformGitopsAgentDeployYamlArgocdSettingsOutputReference | DataHarnessPlatformGitopsAgentDeployYamlArgocdSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_helm_path_traversal: cdktf.booleanToTerraform(struct!.enableHelmPathTraversal),
  }
}


export function dataHarnessPlatformGitopsAgentDeployYamlArgocdSettingsToHclTerraform(struct?: DataHarnessPlatformGitopsAgentDeployYamlArgocdSettingsOutputReference | DataHarnessPlatformGitopsAgentDeployYamlArgocdSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_helm_path_traversal: {
      value: cdktf.booleanToHclTerraform(struct!.enableHelmPathTraversal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformGitopsAgentDeployYamlArgocdSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHarnessPlatformGitopsAgentDeployYamlArgocdSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHelmPathTraversal !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHelmPathTraversal = this._enableHelmPathTraversal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsAgentDeployYamlArgocdSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableHelmPathTraversal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableHelmPathTraversal = value.enableHelmPathTraversal;
    }
  }

  // enable_helm_path_traversal - computed: false, optional: true, required: false
  private _enableHelmPathTraversal?: boolean | cdktf.IResolvable; 
  public get enableHelmPathTraversal() {
    return this.getBooleanAttribute('enable_helm_path_traversal');
  }
  public set enableHelmPathTraversal(value: boolean | cdktf.IResolvable) {
    this._enableHelmPathTraversal = value;
  }
  public resetEnableHelmPathTraversal() {
    this._enableHelmPathTraversal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHelmPathTraversalInput() {
    return this._enableHelmPathTraversal;
  }
}
export interface DataHarnessPlatformGitopsAgentDeployYamlProxy {
  /**
  * HTTP proxy settings for the GitOps agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#http DataHarnessPlatformGitopsAgentDeployYaml#http}
  */
  readonly http?: string;
  /**
  * HTTPS proxy settings for the GitOps agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#https DataHarnessPlatformGitopsAgentDeployYaml#https}
  */
  readonly https?: string;
  /**
  * Password for the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#password DataHarnessPlatformGitopsAgentDeployYaml#password}
  */
  readonly password?: string;
  /**
  * Username for the proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#username DataHarnessPlatformGitopsAgentDeployYaml#username}
  */
  readonly username?: string;
}

export function dataHarnessPlatformGitopsAgentDeployYamlProxyToTerraform(struct?: DataHarnessPlatformGitopsAgentDeployYamlProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: cdktf.stringToTerraform(struct!.http),
    https: cdktf.stringToTerraform(struct!.https),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataHarnessPlatformGitopsAgentDeployYamlProxyToHclTerraform(struct?: DataHarnessPlatformGitopsAgentDeployYamlProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: cdktf.stringToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https: {
      value: cdktf.stringToHclTerraform(struct!.https),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformGitopsAgentDeployYamlProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsAgentDeployYamlProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._https !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsAgentDeployYamlProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http = undefined;
      this._https = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http = value.http;
      this._https = value.https;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http?: string; 
  public get http() {
    return this.getStringAttribute('http');
  }
  public set http(value: string) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // https - computed: false, optional: true, required: false
  private _https?: string; 
  public get https() {
    return this.getStringAttribute('https');
  }
  public set https(value: string) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
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
}

export class DataHarnessPlatformGitopsAgentDeployYamlProxyList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformGitopsAgentDeployYamlProxy[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformGitopsAgentDeployYamlProxyOutputReference {
    return new DataHarnessPlatformGitopsAgentDeployYamlProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml harness_platform_gitops_agent_deploy_yaml}
*/
export class DataHarnessPlatformGitopsAgentDeployYaml extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_gitops_agent_deploy_yaml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformGitopsAgentDeployYaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformGitopsAgentDeployYaml to import
  * @param importFromId The id of the existing DataHarnessPlatformGitopsAgentDeployYaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformGitopsAgentDeployYaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_gitops_agent_deploy_yaml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_gitops_agent_deploy_yaml harness_platform_gitops_agent_deploy_yaml} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformGitopsAgentDeployYamlConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformGitopsAgentDeployYamlConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_gitops_agent_deploy_yaml',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
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
    this._caData = config.caData;
    this._id = config.id;
    this._identifier = config.identifier;
    this._namespace = config.namespace;
    this._orgId = config.orgId;
    this._privateKey = config.privateKey;
    this._projectId = config.projectId;
    this._skipCrds = config.skipCrds;
    this._argocdSettings.internalValue = config.argocdSettings;
    this._proxy.internalValue = config.proxy;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
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

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // argocd_settings - computed: false, optional: true, required: false
  private _argocdSettings = new DataHarnessPlatformGitopsAgentDeployYamlArgocdSettingsOutputReference(this, "argocd_settings");
  public get argocdSettings() {
    return this._argocdSettings;
  }
  public putArgocdSettings(value: DataHarnessPlatformGitopsAgentDeployYamlArgocdSettings) {
    this._argocdSettings.internalValue = value;
  }
  public resetArgocdSettings() {
    this._argocdSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argocdSettingsInput() {
    return this._argocdSettings.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataHarnessPlatformGitopsAgentDeployYamlProxyList(this, "proxy", false);
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataHarnessPlatformGitopsAgentDeployYamlProxy[] | cdktf.IResolvable) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      ca_data: cdktf.stringToTerraform(this._caData),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      namespace: cdktf.stringToTerraform(this._namespace),
      org_id: cdktf.stringToTerraform(this._orgId),
      private_key: cdktf.stringToTerraform(this._privateKey),
      project_id: cdktf.stringToTerraform(this._projectId),
      skip_crds: cdktf.booleanToTerraform(this._skipCrds),
      argocd_settings: dataHarnessPlatformGitopsAgentDeployYamlArgocdSettingsToTerraform(this._argocdSettings.internalValue),
      proxy: cdktf.listMapper(dataHarnessPlatformGitopsAgentDeployYamlProxyToTerraform, true)(this._proxy.internalValue),
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
      ca_data: {
        value: cdktf.stringToHclTerraform(this._caData),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
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
      skip_crds: {
        value: cdktf.booleanToHclTerraform(this._skipCrds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      argocd_settings: {
        value: dataHarnessPlatformGitopsAgentDeployYamlArgocdSettingsToHclTerraform(this._argocdSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessPlatformGitopsAgentDeployYamlArgocdSettingsList",
      },
      proxy: {
        value: cdktf.listMapperHcl(dataHarnessPlatformGitopsAgentDeployYamlProxyToHclTerraform, true)(this._proxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessPlatformGitopsAgentDeployYamlProxyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
