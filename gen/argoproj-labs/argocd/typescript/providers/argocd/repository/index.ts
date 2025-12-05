// https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * BearerToken contains the bearer token used for Git BitBucket Data Center auth at the repo server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#bearer_token Repository#bearer_token}
  */
  readonly bearerToken?: string;
  /**
  * Whether `git-lfs` support should be enabled for this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#enable_lfs Repository#enable_lfs}
  */
  readonly enableLfs?: boolean | cdktf.IResolvable;
  /**
  * Whether `helm-oci` support should be enabled for this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#enable_oci Repository#enable_oci}
  */
  readonly enableOci?: boolean | cdktf.IResolvable;
  /**
  * GitHub API URL for GitHub app authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#githubapp_enterprise_base_url Repository#githubapp_enterprise_base_url}
  */
  readonly githubappEnterpriseBaseUrl?: string;
  /**
  * ID of the GitHub app used to access the repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#githubapp_id Repository#githubapp_id}
  */
  readonly githubappId?: string;
  /**
  * The installation ID of the GitHub App used to access the repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#githubapp_installation_id Repository#githubapp_installation_id}
  */
  readonly githubappInstallationId?: string;
  /**
  * Private key data (PEM) for authentication via GitHub app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#githubapp_private_key Repository#githubapp_private_key}
  */
  readonly githubappPrivateKey?: string;
  /**
  * Whether the connection to the repository ignores any errors when verifying TLS certificates or SSH host keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#insecure Repository#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Name to be used for this repo. Only used with Helm repos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#name Repository#name}
  */
  readonly name?: string;
  /**
  * Password or PAT used for authenticating at the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#password Repository#password}
  */
  readonly password?: string;
  /**
  * The project name, in case the repository is project scoped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#project Repository#project}
  */
  readonly project?: string;
  /**
  * URL of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#repo Repository#repo}
  */
  readonly repo: string;
  /**
  * PEM data for authenticating at the repo server. Only used with Git repos.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#ssh_private_key Repository#ssh_private_key}
  */
  readonly sshPrivateKey?: string;
  /**
  * TLS client certificate in PEM format for authenticating at the repo server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#tls_client_cert_data Repository#tls_client_cert_data}
  */
  readonly tlsClientCertData?: string;
  /**
  * TLS client certificate private key in PEM format for authenticating at the repo server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#tls_client_cert_key Repository#tls_client_cert_key}
  */
  readonly tlsClientCertKey?: string;
  /**
  * Type of the repo. Can be either `git` or `helm`. `git` is assumed if empty or absent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#type Repository#type}
  */
  readonly type?: string;
  /**
  * Username used for authenticating at the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#username Repository#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository argocd_repository}
*/
export class Repository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "argocd_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Repository to import
  * @param importFromId The id of the existing Repository that should be imported. Refer to the {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Repository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "argocd_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.1/docs/resources/repository argocd_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'argocd_repository',
      terraformGeneratorMetadata: {
        providerName: 'argocd',
        providerVersion: '7.12.1',
        providerVersionConstraint: '7.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bearerToken = config.bearerToken;
    this._enableLfs = config.enableLfs;
    this._enableOci = config.enableOci;
    this._githubappEnterpriseBaseUrl = config.githubappEnterpriseBaseUrl;
    this._githubappId = config.githubappId;
    this._githubappInstallationId = config.githubappInstallationId;
    this._githubappPrivateKey = config.githubappPrivateKey;
    this._insecure = config.insecure;
    this._name = config.name;
    this._password = config.password;
    this._project = config.project;
    this._repo = config.repo;
    this._sshPrivateKey = config.sshPrivateKey;
    this._tlsClientCertData = config.tlsClientCertData;
    this._tlsClientCertKey = config.tlsClientCertKey;
    this._type = config.type;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bearer_token - computed: false, optional: true, required: false
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

  // connection_state_status - computed: true, optional: false, required: false
  public get connectionStateStatus() {
    return this.getStringAttribute('connection_state_status');
  }

  // enable_lfs - computed: true, optional: true, required: false
  private _enableLfs?: boolean | cdktf.IResolvable; 
  public get enableLfs() {
    return this.getBooleanAttribute('enable_lfs');
  }
  public set enableLfs(value: boolean | cdktf.IResolvable) {
    this._enableLfs = value;
  }
  public resetEnableLfs() {
    this._enableLfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLfsInput() {
    return this._enableLfs;
  }

  // enable_oci - computed: true, optional: true, required: false
  private _enableOci?: boolean | cdktf.IResolvable; 
  public get enableOci() {
    return this.getBooleanAttribute('enable_oci');
  }
  public set enableOci(value: boolean | cdktf.IResolvable) {
    this._enableOci = value;
  }
  public resetEnableOci() {
    this._enableOci = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOciInput() {
    return this._enableOci;
  }

  // githubapp_enterprise_base_url - computed: true, optional: true, required: false
  private _githubappEnterpriseBaseUrl?: string; 
  public get githubappEnterpriseBaseUrl() {
    return this.getStringAttribute('githubapp_enterprise_base_url');
  }
  public set githubappEnterpriseBaseUrl(value: string) {
    this._githubappEnterpriseBaseUrl = value;
  }
  public resetGithubappEnterpriseBaseUrl() {
    this._githubappEnterpriseBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubappEnterpriseBaseUrlInput() {
    return this._githubappEnterpriseBaseUrl;
  }

  // githubapp_id - computed: true, optional: true, required: false
  private _githubappId?: string; 
  public get githubappId() {
    return this.getStringAttribute('githubapp_id');
  }
  public set githubappId(value: string) {
    this._githubappId = value;
  }
  public resetGithubappId() {
    this._githubappId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubappIdInput() {
    return this._githubappId;
  }

  // githubapp_installation_id - computed: true, optional: true, required: false
  private _githubappInstallationId?: string; 
  public get githubappInstallationId() {
    return this.getStringAttribute('githubapp_installation_id');
  }
  public set githubappInstallationId(value: string) {
    this._githubappInstallationId = value;
  }
  public resetGithubappInstallationId() {
    this._githubappInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubappInstallationIdInput() {
    return this._githubappInstallationId;
  }

  // githubapp_private_key - computed: false, optional: true, required: false
  private _githubappPrivateKey?: string; 
  public get githubappPrivateKey() {
    return this.getStringAttribute('githubapp_private_key');
  }
  public set githubappPrivateKey(value: string) {
    this._githubappPrivateKey = value;
  }
  public resetGithubappPrivateKey() {
    this._githubappPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubappPrivateKeyInput() {
    return this._githubappPrivateKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherited_creds - computed: true, optional: false, required: false
  public get inheritedCreds() {
    return this.getBooleanAttribute('inherited_creds');
  }

  // insecure - computed: true, optional: true, required: false
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

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // ssh_private_key - computed: false, optional: true, required: false
  private _sshPrivateKey?: string; 
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }
  public set sshPrivateKey(value: string) {
    this._sshPrivateKey = value;
  }
  public resetSshPrivateKey() {
    this._sshPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPrivateKeyInput() {
    return this._sshPrivateKey;
  }

  // tls_client_cert_data - computed: false, optional: true, required: false
  private _tlsClientCertData?: string; 
  public get tlsClientCertData() {
    return this.getStringAttribute('tls_client_cert_data');
  }
  public set tlsClientCertData(value: string) {
    this._tlsClientCertData = value;
  }
  public resetTlsClientCertData() {
    this._tlsClientCertData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertDataInput() {
    return this._tlsClientCertData;
  }

  // tls_client_cert_key - computed: false, optional: true, required: false
  private _tlsClientCertKey?: string; 
  public get tlsClientCertKey() {
    return this.getStringAttribute('tls_client_cert_key');
  }
  public set tlsClientCertKey(value: string) {
    this._tlsClientCertKey = value;
  }
  public resetTlsClientCertKey() {
    this._tlsClientCertKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertKeyInput() {
    return this._tlsClientCertKey;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bearer_token: cdktf.stringToTerraform(this._bearerToken),
      enable_lfs: cdktf.booleanToTerraform(this._enableLfs),
      enable_oci: cdktf.booleanToTerraform(this._enableOci),
      githubapp_enterprise_base_url: cdktf.stringToTerraform(this._githubappEnterpriseBaseUrl),
      githubapp_id: cdktf.stringToTerraform(this._githubappId),
      githubapp_installation_id: cdktf.stringToTerraform(this._githubappInstallationId),
      githubapp_private_key: cdktf.stringToTerraform(this._githubappPrivateKey),
      insecure: cdktf.booleanToTerraform(this._insecure),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      project: cdktf.stringToTerraform(this._project),
      repo: cdktf.stringToTerraform(this._repo),
      ssh_private_key: cdktf.stringToTerraform(this._sshPrivateKey),
      tls_client_cert_data: cdktf.stringToTerraform(this._tlsClientCertData),
      tls_client_cert_key: cdktf.stringToTerraform(this._tlsClientCertKey),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bearer_token: {
        value: cdktf.stringToHclTerraform(this._bearerToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_lfs: {
        value: cdktf.booleanToHclTerraform(this._enableLfs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_oci: {
        value: cdktf.booleanToHclTerraform(this._enableOci),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      githubapp_enterprise_base_url: {
        value: cdktf.stringToHclTerraform(this._githubappEnterpriseBaseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      githubapp_id: {
        value: cdktf.stringToHclTerraform(this._githubappId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      githubapp_installation_id: {
        value: cdktf.stringToHclTerraform(this._githubappInstallationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      githubapp_private_key: {
        value: cdktf.stringToHclTerraform(this._githubappPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo: {
        value: cdktf.stringToHclTerraform(this._repo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_private_key: {
        value: cdktf.stringToHclTerraform(this._sshPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_client_cert_data: {
        value: cdktf.stringToHclTerraform(this._tlsClientCertData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_client_cert_key: {
        value: cdktf.stringToHclTerraform(this._tlsClientCertKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
