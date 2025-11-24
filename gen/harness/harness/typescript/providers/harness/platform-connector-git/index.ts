// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformConnectorGitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the connection we're making is to a git repository or a git account. Valid values are Account, Repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#connection_type PlatformConnectorGit#connection_type}
  */
  readonly connectionType: string;
  /**
  * Tags to filter delegates for connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#delegate_selectors PlatformConnectorGit#delegate_selectors}
  */
  readonly delegateSelectors?: string[];
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#description PlatformConnectorGit#description}
  */
  readonly description?: string;
  /**
  * Execute on delegate or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#execute_on_delegate PlatformConnectorGit#execute_on_delegate}
  */
  readonly executeOnDelegate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#id PlatformConnectorGit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#identifier PlatformConnectorGit#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#name PlatformConnectorGit#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#org_id PlatformConnectorGit#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#project_id PlatformConnectorGit#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#tags PlatformConnectorGit#tags}
  */
  readonly tags?: string[];
  /**
  * URL of the git repository or account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#url PlatformConnectorGit#url}
  */
  readonly url: string;
  /**
  * Repository to test the connection with. This is only used when `connection_type` is `Account`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#validation_repo PlatformConnectorGit#validation_repo}
  */
  readonly validationRepo?: string;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#credentials PlatformConnectorGit#credentials}
  */
  readonly credentials: PlatformConnectorGitCredentials;
}
export interface PlatformConnectorGitCredentialsHttp {
  /**
  * Reference to a secret containing the password to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#password_ref PlatformConnectorGit#password_ref}
  */
  readonly passwordRef: string;
  /**
  * Username to use for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#username PlatformConnectorGit#username}
  */
  readonly username?: string;
  /**
  * Reference to a secret containing the username to use for authentication. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#username_ref PlatformConnectorGit#username_ref}
  */
  readonly usernameRef?: string;
}

export function platformConnectorGitCredentialsHttpToTerraform(struct?: PlatformConnectorGitCredentialsHttpOutputReference | PlatformConnectorGitCredentialsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_ref: cdktf.stringToTerraform(struct!.passwordRef),
    username: cdktf.stringToTerraform(struct!.username),
    username_ref: cdktf.stringToTerraform(struct!.usernameRef),
  }
}


export function platformConnectorGitCredentialsHttpToHclTerraform(struct?: PlatformConnectorGitCredentialsHttpOutputReference | PlatformConnectorGitCredentialsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_ref: {
      value: cdktf.stringToHclTerraform(struct!.passwordRef),
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
    username_ref: {
      value: cdktf.stringToHclTerraform(struct!.usernameRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGitCredentialsHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGitCredentialsHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRef = this._passwordRef;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._usernameRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameRef = this._usernameRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGitCredentialsHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passwordRef = undefined;
      this._username = undefined;
      this._usernameRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passwordRef = value.passwordRef;
      this._username = value.username;
      this._usernameRef = value.usernameRef;
    }
  }

  // password_ref - computed: false, optional: false, required: true
  private _passwordRef?: string; 
  public get passwordRef() {
    return this.getStringAttribute('password_ref');
  }
  public set passwordRef(value: string) {
    this._passwordRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRefInput() {
    return this._passwordRef;
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

  // username_ref - computed: false, optional: true, required: false
  private _usernameRef?: string; 
  public get usernameRef() {
    return this.getStringAttribute('username_ref');
  }
  public set usernameRef(value: string) {
    this._usernameRef = value;
  }
  public resetUsernameRef() {
    this._usernameRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameRefInput() {
    return this._usernameRef;
  }
}
export interface PlatformConnectorGitCredentialsSsh {
  /**
  * Reference to the Harness secret containing the ssh key. To reference a secret at the organization scope, prefix 'org' to the expression: org.{identifier}. To reference a secret at the account scope, prefix 'account` to the expression: account.{identifier}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#ssh_key_ref PlatformConnectorGit#ssh_key_ref}
  */
  readonly sshKeyRef: string;
}

export function platformConnectorGitCredentialsSshToTerraform(struct?: PlatformConnectorGitCredentialsSshOutputReference | PlatformConnectorGitCredentialsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_key_ref: cdktf.stringToTerraform(struct!.sshKeyRef),
  }
}


export function platformConnectorGitCredentialsSshToHclTerraform(struct?: PlatformConnectorGitCredentialsSshOutputReference | PlatformConnectorGitCredentialsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh_key_ref: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGitCredentialsSshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGitCredentialsSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshKeyRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyRef = this._sshKeyRef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGitCredentialsSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sshKeyRef = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sshKeyRef = value.sshKeyRef;
    }
  }

  // ssh_key_ref - computed: false, optional: false, required: true
  private _sshKeyRef?: string; 
  public get sshKeyRef() {
    return this.getStringAttribute('ssh_key_ref');
  }
  public set sshKeyRef(value: string) {
    this._sshKeyRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyRefInput() {
    return this._sshKeyRef;
  }
}
export interface PlatformConnectorGitCredentials {
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#http PlatformConnectorGit#http}
  */
  readonly http?: PlatformConnectorGitCredentialsHttp;
  /**
  * ssh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#ssh PlatformConnectorGit#ssh}
  */
  readonly ssh?: PlatformConnectorGitCredentialsSsh;
}

export function platformConnectorGitCredentialsToTerraform(struct?: PlatformConnectorGitCredentialsOutputReference | PlatformConnectorGitCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: platformConnectorGitCredentialsHttpToTerraform(struct!.http),
    ssh: platformConnectorGitCredentialsSshToTerraform(struct!.ssh),
  }
}


export function platformConnectorGitCredentialsToHclTerraform(struct?: PlatformConnectorGitCredentialsOutputReference | PlatformConnectorGitCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: platformConnectorGitCredentialsHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorGitCredentialsHttpList",
    },
    ssh: {
      value: platformConnectorGitCredentialsSshToHclTerraform(struct!.ssh),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformConnectorGitCredentialsSshList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformConnectorGitCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformConnectorGitCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._ssh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssh = this._ssh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformConnectorGitCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._http.internalValue = undefined;
      this._ssh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._http.internalValue = value.http;
      this._ssh.internalValue = value.ssh;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new PlatformConnectorGitCredentialsHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: PlatformConnectorGitCredentialsHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // ssh - computed: false, optional: true, required: false
  private _ssh = new PlatformConnectorGitCredentialsSshOutputReference(this, "ssh");
  public get ssh() {
    return this._ssh;
  }
  public putSsh(value: PlatformConnectorGitCredentialsSsh) {
    this._ssh.internalValue = value;
  }
  public resetSsh() {
    this._ssh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git harness_platform_connector_git}
*/
export class PlatformConnectorGit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_connector_git";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformConnectorGit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformConnectorGit to import
  * @param importFromId The id of the existing PlatformConnectorGit that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformConnectorGit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_connector_git", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_connector_git harness_platform_connector_git} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformConnectorGitConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformConnectorGitConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_connector_git',
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
    this._connectionType = config.connectionType;
    this._delegateSelectors = config.delegateSelectors;
    this._description = config.description;
    this._executeOnDelegate = config.executeOnDelegate;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._url = config.url;
    this._validationRepo = config.validationRepo;
    this._credentials.internalValue = config.credentials;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // delegate_selectors - computed: false, optional: true, required: false
  private _delegateSelectors?: string[]; 
  public get delegateSelectors() {
    return cdktf.Fn.tolist(this.getListAttribute('delegate_selectors'));
  }
  public set delegateSelectors(value: string[]) {
    this._delegateSelectors = value;
  }
  public resetDelegateSelectors() {
    this._delegateSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateSelectorsInput() {
    return this._delegateSelectors;
  }

  // description - computed: false, optional: true, required: false
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

  // execute_on_delegate - computed: false, optional: true, required: false
  private _executeOnDelegate?: boolean | cdktf.IResolvable; 
  public get executeOnDelegate() {
    return this.getBooleanAttribute('execute_on_delegate');
  }
  public set executeOnDelegate(value: boolean | cdktf.IResolvable) {
    this._executeOnDelegate = value;
  }
  public resetExecuteOnDelegate() {
    this._executeOnDelegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnDelegateInput() {
    return this._executeOnDelegate;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // validation_repo - computed: false, optional: true, required: false
  private _validationRepo?: string; 
  public get validationRepo() {
    return this.getStringAttribute('validation_repo');
  }
  public set validationRepo(value: string) {
    this._validationRepo = value;
  }
  public resetValidationRepo() {
    this._validationRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRepoInput() {
    return this._validationRepo;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new PlatformConnectorGitCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: PlatformConnectorGitCredentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_type: cdktf.stringToTerraform(this._connectionType),
      delegate_selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegateSelectors),
      description: cdktf.stringToTerraform(this._description),
      execute_on_delegate: cdktf.booleanToTerraform(this._executeOnDelegate),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      url: cdktf.stringToTerraform(this._url),
      validation_repo: cdktf.stringToTerraform(this._validationRepo),
      credentials: platformConnectorGitCredentialsToTerraform(this._credentials.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegate_selectors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegateSelectors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execute_on_delegate: {
        value: cdktf.booleanToHclTerraform(this._executeOnDelegate),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation_repo: {
        value: cdktf.stringToHclTerraform(this._validationRepo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: platformConnectorGitCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformConnectorGitCredentialsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
