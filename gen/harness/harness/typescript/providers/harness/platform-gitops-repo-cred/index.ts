// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformGitopsRepoCredConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier of the Repository Credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#account_id PlatformGitopsRepoCred#account_id}
  */
  readonly accountId?: string;
  /**
  * Agent identifier of the Repository Credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#agent_id PlatformGitopsRepoCred#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#id PlatformGitopsRepoCred#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the Repository Credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#identifier PlatformGitopsRepoCred#identifier}
  */
  readonly identifier: string;
  /**
  * Organization identifier of the Repository Credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#org_id PlatformGitopsRepoCred#org_id}
  */
  readonly orgId?: string;
  /**
  * Project identifier of the Repository Credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#project_id PlatformGitopsRepoCred#project_id}
  */
  readonly projectId?: string;
  /**
  * Indicates if the GitOps repository credential should be updated if existing and inserted if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#upsert PlatformGitopsRepoCred#upsert}
  */
  readonly upsert?: boolean | cdktf.IResolvable;
  /**
  * creds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#creds PlatformGitopsRepoCred#creds}
  */
  readonly creds?: PlatformGitopsRepoCredCreds;
}
export interface PlatformGitopsRepoCredCreds {
  /**
  * Specifies whether helm-oci support should be enabled for this repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#enable_oci PlatformGitopsRepoCred#enable_oci}
  */
  readonly enableOci?: boolean | cdktf.IResolvable;
  /**
  * Specifies the GitHub API URL for GitHub app authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#github_app_enterprise_base_url PlatformGitopsRepoCred#github_app_enterprise_base_url}
  */
  readonly githubAppEnterpriseBaseUrl?: string;
  /**
  * Specifies the Github App ID of the app used to access the repo for GitHub app authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#github_app_id PlatformGitopsRepoCred#github_app_id}
  */
  readonly githubAppId?: string;
  /**
  * Specifies the ID of the installed GitHub App for GitHub app authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#github_app_installation_id PlatformGitopsRepoCred#github_app_installation_id}
  */
  readonly githubAppInstallationId?: string;
  /**
  * github_app_private_key specifies the private key PEM data for authentication via GitHub app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#github_app_private_key PlatformGitopsRepoCred#github_app_private_key}
  */
  readonly githubAppPrivateKey?: string;
  /**
  * Password or PAT to be used for authenticating the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#password PlatformGitopsRepoCred#password}
  */
  readonly password?: string;
  /**
  * SSH Key in PEM format for authenticating the repository. Used only for Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#ssh_private_key PlatformGitopsRepoCred#ssh_private_key}
  */
  readonly sshPrivateKey?: string;
  /**
  * Certificate in PEM format for authenticating at the repo server. This is used for mTLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#tls_client_cert_data PlatformGitopsRepoCred#tls_client_cert_data}
  */
  readonly tlsClientCertData?: string;
  /**
  * Private key in PEM format for authenticating at the repo server. This is used for mTLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#tls_client_cert_key PlatformGitopsRepoCred#tls_client_cert_key}
  */
  readonly tlsClientCertKey?: string;
  /**
  * Type specifies the type of the repoCreds.Can be either 'git' or 'helm. 'git' is assumed if empty or absent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#type PlatformGitopsRepoCred#type}
  */
  readonly type?: string;
  /**
  * URL of the remote repository. Make sure you pass at least an org, this will not work if you just provide the host, for eg. "https://github.com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#url PlatformGitopsRepoCred#url}
  */
  readonly url?: string;
  /**
  * Username to be used for authenticating the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#username PlatformGitopsRepoCred#username}
  */
  readonly username?: string;
}

export function platformGitopsRepoCredCredsToTerraform(struct?: PlatformGitopsRepoCredCredsOutputReference | PlatformGitopsRepoCredCreds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_oci: cdktf.booleanToTerraform(struct!.enableOci),
    github_app_enterprise_base_url: cdktf.stringToTerraform(struct!.githubAppEnterpriseBaseUrl),
    github_app_id: cdktf.stringToTerraform(struct!.githubAppId),
    github_app_installation_id: cdktf.stringToTerraform(struct!.githubAppInstallationId),
    github_app_private_key: cdktf.stringToTerraform(struct!.githubAppPrivateKey),
    password: cdktf.stringToTerraform(struct!.password),
    ssh_private_key: cdktf.stringToTerraform(struct!.sshPrivateKey),
    tls_client_cert_data: cdktf.stringToTerraform(struct!.tlsClientCertData),
    tls_client_cert_key: cdktf.stringToTerraform(struct!.tlsClientCertKey),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function platformGitopsRepoCredCredsToHclTerraform(struct?: PlatformGitopsRepoCredCredsOutputReference | PlatformGitopsRepoCredCreds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_oci: {
      value: cdktf.booleanToHclTerraform(struct!.enableOci),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    github_app_enterprise_base_url: {
      value: cdktf.stringToHclTerraform(struct!.githubAppEnterpriseBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_app_id: {
      value: cdktf.stringToHclTerraform(struct!.githubAppId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_app_installation_id: {
      value: cdktf.stringToHclTerraform(struct!.githubAppInstallationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_app_private_key: {
      value: cdktf.stringToHclTerraform(struct!.githubAppPrivateKey),
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
    ssh_private_key: {
      value: cdktf.stringToHclTerraform(struct!.sshPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert_data: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCertData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert_key: {
      value: cdktf.stringToHclTerraform(struct!.tlsClientCertKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class PlatformGitopsRepoCredCredsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsRepoCredCreds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOci !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOci = this._enableOci;
    }
    if (this._githubAppEnterpriseBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubAppEnterpriseBaseUrl = this._githubAppEnterpriseBaseUrl;
    }
    if (this._githubAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubAppId = this._githubAppId;
    }
    if (this._githubAppInstallationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubAppInstallationId = this._githubAppInstallationId;
    }
    if (this._githubAppPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubAppPrivateKey = this._githubAppPrivateKey;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPrivateKey = this._sshPrivateKey;
    }
    if (this._tlsClientCertData !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCertData = this._tlsClientCertData;
    }
    if (this._tlsClientCertKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCertKey = this._tlsClientCertKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsRepoCredCreds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOci = undefined;
      this._githubAppEnterpriseBaseUrl = undefined;
      this._githubAppId = undefined;
      this._githubAppInstallationId = undefined;
      this._githubAppPrivateKey = undefined;
      this._password = undefined;
      this._sshPrivateKey = undefined;
      this._tlsClientCertData = undefined;
      this._tlsClientCertKey = undefined;
      this._type = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOci = value.enableOci;
      this._githubAppEnterpriseBaseUrl = value.githubAppEnterpriseBaseUrl;
      this._githubAppId = value.githubAppId;
      this._githubAppInstallationId = value.githubAppInstallationId;
      this._githubAppPrivateKey = value.githubAppPrivateKey;
      this._password = value.password;
      this._sshPrivateKey = value.sshPrivateKey;
      this._tlsClientCertData = value.tlsClientCertData;
      this._tlsClientCertKey = value.tlsClientCertKey;
      this._type = value.type;
      this._url = value.url;
      this._username = value.username;
    }
  }

  // enable_oci - computed: false, optional: true, required: false
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

  // github_app_enterprise_base_url - computed: false, optional: true, required: false
  private _githubAppEnterpriseBaseUrl?: string; 
  public get githubAppEnterpriseBaseUrl() {
    return this.getStringAttribute('github_app_enterprise_base_url');
  }
  public set githubAppEnterpriseBaseUrl(value: string) {
    this._githubAppEnterpriseBaseUrl = value;
  }
  public resetGithubAppEnterpriseBaseUrl() {
    this._githubAppEnterpriseBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppEnterpriseBaseUrlInput() {
    return this._githubAppEnterpriseBaseUrl;
  }

  // github_app_id - computed: true, optional: true, required: false
  private _githubAppId?: string; 
  public get githubAppId() {
    return this.getStringAttribute('github_app_id');
  }
  public set githubAppId(value: string) {
    this._githubAppId = value;
  }
  public resetGithubAppId() {
    this._githubAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppIdInput() {
    return this._githubAppId;
  }

  // github_app_installation_id - computed: true, optional: true, required: false
  private _githubAppInstallationId?: string; 
  public get githubAppInstallationId() {
    return this.getStringAttribute('github_app_installation_id');
  }
  public set githubAppInstallationId(value: string) {
    this._githubAppInstallationId = value;
  }
  public resetGithubAppInstallationId() {
    this._githubAppInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppInstallationIdInput() {
    return this._githubAppInstallationId;
  }

  // github_app_private_key - computed: true, optional: true, required: false
  private _githubAppPrivateKey?: string; 
  public get githubAppPrivateKey() {
    return this.getStringAttribute('github_app_private_key');
  }
  public set githubAppPrivateKey(value: string) {
    this._githubAppPrivateKey = value;
  }
  public resetGithubAppPrivateKey() {
    this._githubAppPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubAppPrivateKeyInput() {
    return this._githubAppPrivateKey;
  }

  // password - computed: true, optional: true, required: false
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

  // ssh_private_key - computed: true, optional: true, required: false
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

  // tls_client_cert_data - computed: true, optional: true, required: false
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

  // tls_client_cert_key - computed: true, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred harness_platform_gitops_repo_cred}
*/
export class PlatformGitopsRepoCred extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_gitops_repo_cred";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformGitopsRepoCred resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformGitopsRepoCred to import
  * @param importFromId The id of the existing PlatformGitopsRepoCred that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformGitopsRepoCred to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_gitops_repo_cred", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/platform_gitops_repo_cred harness_platform_gitops_repo_cred} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformGitopsRepoCredConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformGitopsRepoCredConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_gitops_repo_cred',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
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
    this._id = config.id;
    this._identifier = config.identifier;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._upsert = config.upsert;
    this._creds.internalValue = config.creds;
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

  // creds - computed: false, optional: true, required: false
  private _creds = new PlatformGitopsRepoCredCredsOutputReference(this, "creds");
  public get creds() {
    return this._creds;
  }
  public putCreds(value: PlatformGitopsRepoCredCreds) {
    this._creds.internalValue = value;
  }
  public resetCreds() {
    this._creds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credsInput() {
    return this._creds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      agent_id: cdktf.stringToTerraform(this._agentId),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      upsert: cdktf.booleanToTerraform(this._upsert),
      creds: platformGitopsRepoCredCredsToTerraform(this._creds.internalValue),
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
      upsert: {
        value: cdktf.booleanToHclTerraform(this._upsert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      creds: {
        value: platformGitopsRepoCredCredsToHclTerraform(this._creds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformGitopsRepoCredCredsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
