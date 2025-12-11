// https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether `helm-oci` support should be enabled for this repo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#enable_oci RepositoryCredentials#enable_oci}
  */
  readonly enableOci?: boolean | cdktf.IResolvable;
  /**
  * GitHub API URL for GitHub app authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#githubapp_enterprise_base_url RepositoryCredentials#githubapp_enterprise_base_url}
  */
  readonly githubappEnterpriseBaseUrl?: string;
  /**
  * GitHub App ID of the app used to access the repo for GitHub app authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#githubapp_id RepositoryCredentials#githubapp_id}
  */
  readonly githubappId?: string;
  /**
  * ID of the installed GitHub App for GitHub app authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#githubapp_installation_id RepositoryCredentials#githubapp_installation_id}
  */
  readonly githubappInstallationId?: string;
  /**
  * Private key data (PEM) for authentication via GitHub app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#githubapp_private_key RepositoryCredentials#githubapp_private_key}
  */
  readonly githubappPrivateKey?: string;
  /**
  * Password for authenticating at the repo server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#password RepositoryCredentials#password}
  */
  readonly password?: string;
  /**
  * Private key data for authenticating at the repo server using SSH (only Git repos)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#ssh_private_key RepositoryCredentials#ssh_private_key}
  */
  readonly sshPrivateKey?: string;
  /**
  * TLS client cert data for authenticating at the repo server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#tls_client_cert_data RepositoryCredentials#tls_client_cert_data}
  */
  readonly tlsClientCertData?: string;
  /**
  * TLS client cert key for authenticating at the repo server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#tls_client_cert_key RepositoryCredentials#tls_client_cert_key}
  */
  readonly tlsClientCertKey?: string;
  /**
  * URL that these credentials match to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#url RepositoryCredentials#url}
  */
  readonly url: string;
  /**
  * Username for authenticating at the repo server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#username RepositoryCredentials#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials argocd_repository_credentials}
*/
export class RepositoryCredentials extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "argocd_repository_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryCredentials to import
  * @param importFromId The id of the existing RepositoryCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "argocd_repository_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/argoproj-labs/argocd/7.12.3/docs/resources/repository_credentials argocd_repository_credentials} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'argocd_repository_credentials',
      terraformGeneratorMetadata: {
        providerName: 'argocd',
        providerVersion: '7.12.3',
        providerVersionConstraint: '7.12.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableOci = config.enableOci;
    this._githubappEnterpriseBaseUrl = config.githubappEnterpriseBaseUrl;
    this._githubappId = config.githubappId;
    this._githubappInstallationId = config.githubappInstallationId;
    this._githubappPrivateKey = config.githubappPrivateKey;
    this._password = config.password;
    this._sshPrivateKey = config.sshPrivateKey;
    this._tlsClientCertData = config.tlsClientCertData;
    this._tlsClientCertKey = config.tlsClientCertKey;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // githubapp_enterprise_base_url - computed: false, optional: true, required: false
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

  // githubapp_id - computed: false, optional: true, required: false
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

  // githubapp_installation_id - computed: false, optional: true, required: false
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
      enable_oci: cdktf.booleanToTerraform(this._enableOci),
      githubapp_enterprise_base_url: cdktf.stringToTerraform(this._githubappEnterpriseBaseUrl),
      githubapp_id: cdktf.stringToTerraform(this._githubappId),
      githubapp_installation_id: cdktf.stringToTerraform(this._githubappInstallationId),
      githubapp_private_key: cdktf.stringToTerraform(this._githubappPrivateKey),
      password: cdktf.stringToTerraform(this._password),
      ssh_private_key: cdktf.stringToTerraform(this._sshPrivateKey),
      tls_client_cert_data: cdktf.stringToTerraform(this._tlsClientCertData),
      tls_client_cert_key: cdktf.stringToTerraform(this._tlsClientCertKey),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
