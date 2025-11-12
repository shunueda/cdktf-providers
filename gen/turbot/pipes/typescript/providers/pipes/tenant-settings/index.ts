// https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#cli_session_timeout TenantSettings#cli_session_timeout}
  */
  readonly cliSessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#console_session_timeout TenantSettings#console_session_timeout}
  */
  readonly consoleSessionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#id TenantSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#login_email_state TenantSettings#login_email_state}
  */
  readonly loginEmailState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#login_github_state TenantSettings#login_github_state}
  */
  readonly loginGithubState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#login_google_state TenantSettings#login_google_state}
  */
  readonly loginGoogleState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#login_saml_certificate TenantSettings#login_saml_certificate}
  */
  readonly loginSamlCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#login_saml_issuer TenantSettings#login_saml_issuer}
  */
  readonly loginSamlIssuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#login_saml_sso_url TenantSettings#login_saml_sso_url}
  */
  readonly loginSamlSsoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#login_saml_state TenantSettings#login_saml_state}
  */
  readonly loginSamlState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#max_token_expiration TenantSettings#max_token_expiration}
  */
  readonly maxTokenExpiration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#personal_workspaces TenantSettings#personal_workspaces}
  */
  readonly personalWorkspaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#postgres_endpoint TenantSettings#postgres_endpoint}
  */
  readonly postgresEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#user_provisioning TenantSettings#user_provisioning}
  */
  readonly userProvisioning?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#user_provisioning_permitted_domains TenantSettings#user_provisioning_permitted_domains}
  */
  readonly userProvisioningPermittedDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#workspace_snapshot_permitted_visibility TenantSettings#workspace_snapshot_permitted_visibility}
  */
  readonly workspaceSnapshotPermittedVisibility?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings pipes_tenant_settings}
*/
export class TenantSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipes_tenant_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenantSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenantSettings to import
  * @param importFromId The id of the existing TenantSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenantSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipes_tenant_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_settings pipes_tenant_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TenantSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pipes_tenant_settings',
      terraformGeneratorMetadata: {
        providerName: 'pipes',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cliSessionTimeout = config.cliSessionTimeout;
    this._consoleSessionTimeout = config.consoleSessionTimeout;
    this._id = config.id;
    this._loginEmailState = config.loginEmailState;
    this._loginGithubState = config.loginGithubState;
    this._loginGoogleState = config.loginGoogleState;
    this._loginSamlCertificate = config.loginSamlCertificate;
    this._loginSamlIssuer = config.loginSamlIssuer;
    this._loginSamlSsoUrl = config.loginSamlSsoUrl;
    this._loginSamlState = config.loginSamlState;
    this._maxTokenExpiration = config.maxTokenExpiration;
    this._personalWorkspaces = config.personalWorkspaces;
    this._postgresEndpoint = config.postgresEndpoint;
    this._userProvisioning = config.userProvisioning;
    this._userProvisioningPermittedDomains = config.userProvisioningPermittedDomains;
    this._workspaceSnapshotPermittedVisibility = config.workspaceSnapshotPermittedVisibility;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cli_session_timeout - computed: true, optional: true, required: false
  private _cliSessionTimeout?: number; 
  public get cliSessionTimeout() {
    return this.getNumberAttribute('cli_session_timeout');
  }
  public set cliSessionTimeout(value: number) {
    this._cliSessionTimeout = value;
  }
  public resetCliSessionTimeout() {
    this._cliSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliSessionTimeoutInput() {
    return this._cliSessionTimeout;
  }

  // console_session_timeout - computed: true, optional: true, required: false
  private _consoleSessionTimeout?: number; 
  public get consoleSessionTimeout() {
    return this.getNumberAttribute('console_session_timeout');
  }
  public set consoleSessionTimeout(value: number) {
    this._consoleSessionTimeout = value;
  }
  public resetConsoleSessionTimeout() {
    this._consoleSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleSessionTimeoutInput() {
    return this._consoleSessionTimeout;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // login_email_state - computed: true, optional: true, required: false
  private _loginEmailState?: string; 
  public get loginEmailState() {
    return this.getStringAttribute('login_email_state');
  }
  public set loginEmailState(value: string) {
    this._loginEmailState = value;
  }
  public resetLoginEmailState() {
    this._loginEmailState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginEmailStateInput() {
    return this._loginEmailState;
  }

  // login_github_state - computed: true, optional: true, required: false
  private _loginGithubState?: string; 
  public get loginGithubState() {
    return this.getStringAttribute('login_github_state');
  }
  public set loginGithubState(value: string) {
    this._loginGithubState = value;
  }
  public resetLoginGithubState() {
    this._loginGithubState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginGithubStateInput() {
    return this._loginGithubState;
  }

  // login_google_state - computed: true, optional: true, required: false
  private _loginGoogleState?: string; 
  public get loginGoogleState() {
    return this.getStringAttribute('login_google_state');
  }
  public set loginGoogleState(value: string) {
    this._loginGoogleState = value;
  }
  public resetLoginGoogleState() {
    this._loginGoogleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginGoogleStateInput() {
    return this._loginGoogleState;
  }

  // login_saml_certificate - computed: false, optional: true, required: false
  private _loginSamlCertificate?: string; 
  public get loginSamlCertificate() {
    return this.getStringAttribute('login_saml_certificate');
  }
  public set loginSamlCertificate(value: string) {
    this._loginSamlCertificate = value;
  }
  public resetLoginSamlCertificate() {
    this._loginSamlCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginSamlCertificateInput() {
    return this._loginSamlCertificate;
  }

  // login_saml_issuer - computed: false, optional: true, required: false
  private _loginSamlIssuer?: string; 
  public get loginSamlIssuer() {
    return this.getStringAttribute('login_saml_issuer');
  }
  public set loginSamlIssuer(value: string) {
    this._loginSamlIssuer = value;
  }
  public resetLoginSamlIssuer() {
    this._loginSamlIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginSamlIssuerInput() {
    return this._loginSamlIssuer;
  }

  // login_saml_sso_url - computed: false, optional: true, required: false
  private _loginSamlSsoUrl?: string; 
  public get loginSamlSsoUrl() {
    return this.getStringAttribute('login_saml_sso_url');
  }
  public set loginSamlSsoUrl(value: string) {
    this._loginSamlSsoUrl = value;
  }
  public resetLoginSamlSsoUrl() {
    this._loginSamlSsoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginSamlSsoUrlInput() {
    return this._loginSamlSsoUrl;
  }

  // login_saml_state - computed: true, optional: true, required: false
  private _loginSamlState?: string; 
  public get loginSamlState() {
    return this.getStringAttribute('login_saml_state');
  }
  public set loginSamlState(value: string) {
    this._loginSamlState = value;
  }
  public resetLoginSamlState() {
    this._loginSamlState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginSamlStateInput() {
    return this._loginSamlState;
  }

  // max_token_expiration - computed: true, optional: true, required: false
  private _maxTokenExpiration?: number; 
  public get maxTokenExpiration() {
    return this.getNumberAttribute('max_token_expiration');
  }
  public set maxTokenExpiration(value: number) {
    this._maxTokenExpiration = value;
  }
  public resetMaxTokenExpiration() {
    this._maxTokenExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokenExpirationInput() {
    return this._maxTokenExpiration;
  }

  // personal_workspaces - computed: true, optional: true, required: false
  private _personalWorkspaces?: string; 
  public get personalWorkspaces() {
    return this.getStringAttribute('personal_workspaces');
  }
  public set personalWorkspaces(value: string) {
    this._personalWorkspaces = value;
  }
  public resetPersonalWorkspaces() {
    this._personalWorkspaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalWorkspacesInput() {
    return this._personalWorkspaces;
  }

  // postgres_endpoint - computed: true, optional: true, required: false
  private _postgresEndpoint?: string; 
  public get postgresEndpoint() {
    return this.getStringAttribute('postgres_endpoint');
  }
  public set postgresEndpoint(value: string) {
    this._postgresEndpoint = value;
  }
  public resetPostgresEndpoint() {
    this._postgresEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresEndpointInput() {
    return this._postgresEndpoint;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // user_provisioning - computed: true, optional: true, required: false
  private _userProvisioning?: string[]; 
  public get userProvisioning() {
    return this.getListAttribute('user_provisioning');
  }
  public set userProvisioning(value: string[]) {
    this._userProvisioning = value;
  }
  public resetUserProvisioning() {
    this._userProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProvisioningInput() {
    return this._userProvisioning;
  }

  // user_provisioning_permitted_domains - computed: true, optional: true, required: false
  private _userProvisioningPermittedDomains?: string[]; 
  public get userProvisioningPermittedDomains() {
    return this.getListAttribute('user_provisioning_permitted_domains');
  }
  public set userProvisioningPermittedDomains(value: string[]) {
    this._userProvisioningPermittedDomains = value;
  }
  public resetUserProvisioningPermittedDomains() {
    this._userProvisioningPermittedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProvisioningPermittedDomainsInput() {
    return this._userProvisioningPermittedDomains;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // workspace_snapshot_permitted_visibility - computed: true, optional: true, required: false
  private _workspaceSnapshotPermittedVisibility?: string[]; 
  public get workspaceSnapshotPermittedVisibility() {
    return this.getListAttribute('workspace_snapshot_permitted_visibility');
  }
  public set workspaceSnapshotPermittedVisibility(value: string[]) {
    this._workspaceSnapshotPermittedVisibility = value;
  }
  public resetWorkspaceSnapshotPermittedVisibility() {
    this._workspaceSnapshotPermittedVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceSnapshotPermittedVisibilityInput() {
    return this._workspaceSnapshotPermittedVisibility;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cli_session_timeout: cdktf.numberToTerraform(this._cliSessionTimeout),
      console_session_timeout: cdktf.numberToTerraform(this._consoleSessionTimeout),
      id: cdktf.stringToTerraform(this._id),
      login_email_state: cdktf.stringToTerraform(this._loginEmailState),
      login_github_state: cdktf.stringToTerraform(this._loginGithubState),
      login_google_state: cdktf.stringToTerraform(this._loginGoogleState),
      login_saml_certificate: cdktf.stringToTerraform(this._loginSamlCertificate),
      login_saml_issuer: cdktf.stringToTerraform(this._loginSamlIssuer),
      login_saml_sso_url: cdktf.stringToTerraform(this._loginSamlSsoUrl),
      login_saml_state: cdktf.stringToTerraform(this._loginSamlState),
      max_token_expiration: cdktf.numberToTerraform(this._maxTokenExpiration),
      personal_workspaces: cdktf.stringToTerraform(this._personalWorkspaces),
      postgres_endpoint: cdktf.stringToTerraform(this._postgresEndpoint),
      user_provisioning: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userProvisioning),
      user_provisioning_permitted_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userProvisioningPermittedDomains),
      workspace_snapshot_permitted_visibility: cdktf.listMapper(cdktf.stringToTerraform, false)(this._workspaceSnapshotPermittedVisibility),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cli_session_timeout: {
        value: cdktf.numberToHclTerraform(this._cliSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      console_session_timeout: {
        value: cdktf.numberToHclTerraform(this._consoleSessionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_email_state: {
        value: cdktf.stringToHclTerraform(this._loginEmailState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_github_state: {
        value: cdktf.stringToHclTerraform(this._loginGithubState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_google_state: {
        value: cdktf.stringToHclTerraform(this._loginGoogleState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_saml_certificate: {
        value: cdktf.stringToHclTerraform(this._loginSamlCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_saml_issuer: {
        value: cdktf.stringToHclTerraform(this._loginSamlIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_saml_sso_url: {
        value: cdktf.stringToHclTerraform(this._loginSamlSsoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_saml_state: {
        value: cdktf.stringToHclTerraform(this._loginSamlState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_token_expiration: {
        value: cdktf.numberToHclTerraform(this._maxTokenExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      personal_workspaces: {
        value: cdktf.stringToHclTerraform(this._personalWorkspaces),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgres_endpoint: {
        value: cdktf.stringToHclTerraform(this._postgresEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_provisioning: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userProvisioning),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      user_provisioning_permitted_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userProvisioningPermittedDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workspace_snapshot_permitted_visibility: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._workspaceSnapshotPermittedVisibility),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
