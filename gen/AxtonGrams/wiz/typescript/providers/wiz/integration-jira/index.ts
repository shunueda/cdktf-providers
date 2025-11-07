// https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationJiraConfig extends cdktf.TerraformMetaArguments {
  /**
  * Jira integration TLS setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_allow_insecure_tls IntegrationJira#jira_allow_insecure_tls}
  */
  readonly jiraAllowInsecureTls?: boolean | cdktf.IResolvable;
  /**
  * Jira PEM with client certificate and private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_client_certificate_and_private_key IntegrationJira#jira_client_certificate_and_private_key}
  */
  readonly jiraClientCertificateAndPrivateKey?: string;
  /**
  * Whether Jira instance is on prem
  *     - Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_is_on_prem IntegrationJira#jira_is_on_prem}
  */
  readonly jiraIsOnPrem?: boolean | cdktf.IResolvable;
  /**
  * Jira password. (default: none, environment variable: WIZ_INTEGRATION_JIRA_PASSWORD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_password IntegrationJira#jira_password}
  */
  readonly jiraPassword?: string;
  /**
  * Jira personal access token (used for on-prem). (default: none, environment variable: WIZ_INTEGRATION_JIRA_PAT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_pat IntegrationJira#jira_pat}
  */
  readonly jiraPat?: string;
  /**
  * Jira server CA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_server_ca IntegrationJira#jira_server_ca}
  */
  readonly jiraServerCa?: string;
  /**
  * Jira server type
  *     - Defaults to `CLOUD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_server_type IntegrationJira#jira_server_type}
  */
  readonly jiraServerType?: string;
  /**
  * Jira URL. (default: none, environment variable: WIZ_INTEGRATION_JIRA_URL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_url IntegrationJira#jira_url}
  */
  readonly jiraUrl: string;
  /**
  * Email of a Jira user with permissions to create tickets. (default: none, environment variable: WIZ_INTEGRATION_JIRA_USERNAME)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#jira_username IntegrationJira#jira_username}
  */
  readonly jiraUsername?: string;
  /**
  * The name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#name IntegrationJira#name}
  */
  readonly name: string;
  /**
  * The project this action is scoped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#project_id IntegrationJira#project_id}
  */
  readonly projectId?: string;
  /**
  * Scoping to a selected Project makes this Integration accessible only to users with global roles or Project-scoped access to the selected Project. Other users will not be able to see it, use it, or view its results. Integrations restricted to global roles cannot be seen or used by users with Project-scoped roles. 
  *     - Allowed values: 
  *         - Selected Project
  *         - All Resources
  *         - All Resources, Restrict this Integration to global roles only
  * 
  *     - Defaults to `All Resources, Restrict this Integration to global roles only`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#scope IntegrationJira#scope}
  */
  readonly scope?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira wiz_integration_jira}
*/
export class IntegrationJira extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wiz_integration_jira";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationJira resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationJira to import
  * @param importFromId The id of the existing IntegrationJira that should be imported. Refer to the {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationJira to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wiz_integration_jira", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/axtongrams/wiz/1.2.5/docs/resources/integration_jira wiz_integration_jira} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationJiraConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationJiraConfig) {
    super(scope, id, {
      terraformResourceType: 'wiz_integration_jira',
      terraformGeneratorMetadata: {
        providerName: 'wiz',
        providerVersion: '1.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._jiraAllowInsecureTls = config.jiraAllowInsecureTls;
    this._jiraClientCertificateAndPrivateKey = config.jiraClientCertificateAndPrivateKey;
    this._jiraIsOnPrem = config.jiraIsOnPrem;
    this._jiraPassword = config.jiraPassword;
    this._jiraPat = config.jiraPat;
    this._jiraServerCa = config.jiraServerCa;
    this._jiraServerType = config.jiraServerType;
    this._jiraUrl = config.jiraUrl;
    this._jiraUsername = config.jiraUsername;
    this._name = config.name;
    this._projectId = config.projectId;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jira_allow_insecure_tls - computed: false, optional: true, required: false
  private _jiraAllowInsecureTls?: boolean | cdktf.IResolvable; 
  public get jiraAllowInsecureTls() {
    return this.getBooleanAttribute('jira_allow_insecure_tls');
  }
  public set jiraAllowInsecureTls(value: boolean | cdktf.IResolvable) {
    this._jiraAllowInsecureTls = value;
  }
  public resetJiraAllowInsecureTls() {
    this._jiraAllowInsecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraAllowInsecureTlsInput() {
    return this._jiraAllowInsecureTls;
  }

  // jira_client_certificate_and_private_key - computed: false, optional: true, required: false
  private _jiraClientCertificateAndPrivateKey?: string; 
  public get jiraClientCertificateAndPrivateKey() {
    return this.getStringAttribute('jira_client_certificate_and_private_key');
  }
  public set jiraClientCertificateAndPrivateKey(value: string) {
    this._jiraClientCertificateAndPrivateKey = value;
  }
  public resetJiraClientCertificateAndPrivateKey() {
    this._jiraClientCertificateAndPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraClientCertificateAndPrivateKeyInput() {
    return this._jiraClientCertificateAndPrivateKey;
  }

  // jira_is_on_prem - computed: false, optional: true, required: false
  private _jiraIsOnPrem?: boolean | cdktf.IResolvable; 
  public get jiraIsOnPrem() {
    return this.getBooleanAttribute('jira_is_on_prem');
  }
  public set jiraIsOnPrem(value: boolean | cdktf.IResolvable) {
    this._jiraIsOnPrem = value;
  }
  public resetJiraIsOnPrem() {
    this._jiraIsOnPrem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraIsOnPremInput() {
    return this._jiraIsOnPrem;
  }

  // jira_password - computed: false, optional: true, required: false
  private _jiraPassword?: string; 
  public get jiraPassword() {
    return this.getStringAttribute('jira_password');
  }
  public set jiraPassword(value: string) {
    this._jiraPassword = value;
  }
  public resetJiraPassword() {
    this._jiraPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraPasswordInput() {
    return this._jiraPassword;
  }

  // jira_pat - computed: false, optional: true, required: false
  private _jiraPat?: string; 
  public get jiraPat() {
    return this.getStringAttribute('jira_pat');
  }
  public set jiraPat(value: string) {
    this._jiraPat = value;
  }
  public resetJiraPat() {
    this._jiraPat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraPatInput() {
    return this._jiraPat;
  }

  // jira_server_ca - computed: false, optional: true, required: false
  private _jiraServerCa?: string; 
  public get jiraServerCa() {
    return this.getStringAttribute('jira_server_ca');
  }
  public set jiraServerCa(value: string) {
    this._jiraServerCa = value;
  }
  public resetJiraServerCa() {
    this._jiraServerCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraServerCaInput() {
    return this._jiraServerCa;
  }

  // jira_server_type - computed: false, optional: true, required: false
  private _jiraServerType?: string; 
  public get jiraServerType() {
    return this.getStringAttribute('jira_server_type');
  }
  public set jiraServerType(value: string) {
    this._jiraServerType = value;
  }
  public resetJiraServerType() {
    this._jiraServerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraServerTypeInput() {
    return this._jiraServerType;
  }

  // jira_url - computed: false, optional: false, required: true
  private _jiraUrl?: string; 
  public get jiraUrl() {
    return this.getStringAttribute('jira_url');
  }
  public set jiraUrl(value: string) {
    this._jiraUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraUrlInput() {
    return this._jiraUrl;
  }

  // jira_username - computed: false, optional: true, required: false
  private _jiraUsername?: string; 
  public get jiraUsername() {
    return this.getStringAttribute('jira_username');
  }
  public set jiraUsername(value: string) {
    this._jiraUsername = value;
  }
  public resetJiraUsername() {
    this._jiraUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraUsernameInput() {
    return this._jiraUsername;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      jira_allow_insecure_tls: cdktf.booleanToTerraform(this._jiraAllowInsecureTls),
      jira_client_certificate_and_private_key: cdktf.stringToTerraform(this._jiraClientCertificateAndPrivateKey),
      jira_is_on_prem: cdktf.booleanToTerraform(this._jiraIsOnPrem),
      jira_password: cdktf.stringToTerraform(this._jiraPassword),
      jira_pat: cdktf.stringToTerraform(this._jiraPat),
      jira_server_ca: cdktf.stringToTerraform(this._jiraServerCa),
      jira_server_type: cdktf.stringToTerraform(this._jiraServerType),
      jira_url: cdktf.stringToTerraform(this._jiraUrl),
      jira_username: cdktf.stringToTerraform(this._jiraUsername),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      jira_allow_insecure_tls: {
        value: cdktf.booleanToHclTerraform(this._jiraAllowInsecureTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jira_client_certificate_and_private_key: {
        value: cdktf.stringToHclTerraform(this._jiraClientCertificateAndPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_is_on_prem: {
        value: cdktf.booleanToHclTerraform(this._jiraIsOnPrem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jira_password: {
        value: cdktf.stringToHclTerraform(this._jiraPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_pat: {
        value: cdktf.stringToHclTerraform(this._jiraPat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_server_ca: {
        value: cdktf.stringToHclTerraform(this._jiraServerCa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_server_type: {
        value: cdktf.stringToHclTerraform(this._jiraServerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_url: {
        value: cdktf.stringToHclTerraform(this._jiraUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jira_username: {
        value: cdktf.stringToHclTerraform(this._jiraUsername),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
