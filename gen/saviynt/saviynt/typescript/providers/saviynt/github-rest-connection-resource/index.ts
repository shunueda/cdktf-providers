// https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GithubRestConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Property for ACCESS_TOKENS. For setting access_tokens either this field or access_tokens_wo need to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#access_tokens GithubRestConnectionResource#access_tokens}
  */
  readonly accessTokens?: string;
  /**
  * Property for ACCESS_TOKENS (write-only). For setting access_tokens either this field or access_tokens_wo need to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#access_tokens_wo GithubRestConnectionResource#access_tokens_wo}
  */
  readonly accessTokensWo?: string;
  /**
  * Property for ConnectionJSON. For setting connection_json either this field or connection_json_wo need to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#connection_json GithubRestConnectionResource#connection_json}
  */
  readonly connectionJson?: string;
  /**
  * Property for ConnectionJSON (write-only). For setting connection_json either this field or connection_json_wo need to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#connection_json_wo GithubRestConnectionResource#connection_json_wo}
  */
  readonly connectionJsonWo?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#connection_name GithubRestConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#defaultsavroles GithubRestConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#description GithubRestConnectionResource#description}
  */
  readonly description?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#email_template GithubRestConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * Property for ImportAccountEntJSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#import_account_ent_json GithubRestConnectionResource#import_account_ent_json}
  */
  readonly importAccountEntJson?: string;
  /**
  * Property for ORGANIZATION_LIST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#organization_list GithubRestConnectionResource#organization_list}
  */
  readonly organizationList?: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#save_in_vault GithubRestConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * Property for STATUS_THRESHOLD_CONFIG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#status_threshold_config GithubRestConnectionResource#status_threshold_config}
  */
  readonly statusThresholdConfig?: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#vault_configuration GithubRestConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#vault_connection GithubRestConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#wo_version GithubRestConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource saviynt_github_rest_connection_resource}
*/
export class GithubRestConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_github_rest_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GithubRestConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GithubRestConnectionResource to import
  * @param importFromId The id of the existing GithubRestConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GithubRestConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_github_rest_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.2.13/docs/resources/github_rest_connection_resource saviynt_github_rest_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GithubRestConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: GithubRestConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_github_rest_connection_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.2.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokens = config.accessTokens;
    this._accessTokensWo = config.accessTokensWo;
    this._connectionJson = config.connectionJson;
    this._connectionJsonWo = config.connectionJsonWo;
    this._connectionName = config.connectionName;
    this._defaultsavroles = config.defaultsavroles;
    this._description = config.description;
    this._emailTemplate = config.emailTemplate;
    this._importAccountEntJson = config.importAccountEntJson;
    this._organizationList = config.organizationList;
    this._saveInVault = config.saveInVault;
    this._statusThresholdConfig = config.statusThresholdConfig;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._woVersion = config.woVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_tokens - computed: false, optional: true, required: false
  private _accessTokens?: string; 
  public get accessTokens() {
    return this.getStringAttribute('access_tokens');
  }
  public set accessTokens(value: string) {
    this._accessTokens = value;
  }
  public resetAccessTokens() {
    this._accessTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokensInput() {
    return this._accessTokens;
  }

  // access_tokens_wo - computed: false, optional: true, required: false
  private _accessTokensWo?: string; 
  public get accessTokensWo() {
    return this.getStringAttribute('access_tokens_wo');
  }
  public set accessTokensWo(value: string) {
    this._accessTokensWo = value;
  }
  public resetAccessTokensWo() {
    this._accessTokensWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokensWoInput() {
    return this._accessTokensWo;
  }

  // connection_json - computed: false, optional: true, required: false
  private _connectionJson?: string; 
  public get connectionJson() {
    return this.getStringAttribute('connection_json');
  }
  public set connectionJson(value: string) {
    this._connectionJson = value;
  }
  public resetConnectionJson() {
    this._connectionJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionJsonInput() {
    return this._connectionJson;
  }

  // connection_json_wo - computed: false, optional: true, required: false
  private _connectionJsonWo?: string; 
  public get connectionJsonWo() {
    return this.getStringAttribute('connection_json_wo');
  }
  public set connectionJsonWo(value: string) {
    this._connectionJsonWo = value;
  }
  public resetConnectionJsonWo() {
    this._connectionJsonWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionJsonWoInput() {
    return this._connectionJsonWo;
  }

  // connection_key - computed: true, optional: false, required: false
  public get connectionKey() {
    return this.getNumberAttribute('connection_key');
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // defaultsavroles - computed: true, optional: true, required: false
  private _defaultsavroles?: string; 
  public get defaultsavroles() {
    return this.getStringAttribute('defaultsavroles');
  }
  public set defaultsavroles(value: string) {
    this._defaultsavroles = value;
  }
  public resetDefaultsavroles() {
    this._defaultsavroles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsavrolesInput() {
    return this._defaultsavroles;
  }

  // description - computed: true, optional: true, required: false
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

  // email_template - computed: true, optional: true, required: false
  private _emailTemplate?: string; 
  public get emailTemplate() {
    return this.getStringAttribute('email_template');
  }
  public set emailTemplate(value: string) {
    this._emailTemplate = value;
  }
  public resetEmailTemplate() {
    this._emailTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateInput() {
    return this._emailTemplate;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_account_ent_json - computed: true, optional: true, required: false
  private _importAccountEntJson?: string; 
  public get importAccountEntJson() {
    return this.getStringAttribute('import_account_ent_json');
  }
  public set importAccountEntJson(value: string) {
    this._importAccountEntJson = value;
  }
  public resetImportAccountEntJson() {
    this._importAccountEntJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importAccountEntJsonInput() {
    return this._importAccountEntJson;
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // organization_list - computed: true, optional: true, required: false
  private _organizationList?: string; 
  public get organizationList() {
    return this.getStringAttribute('organization_list');
  }
  public set organizationList(value: string) {
    this._organizationList = value;
  }
  public resetOrganizationList() {
    this._organizationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationListInput() {
    return this._organizationList;
  }

  // save_in_vault - computed: false, optional: true, required: false
  private _saveInVault?: string; 
  public get saveInVault() {
    return this.getStringAttribute('save_in_vault');
  }
  public set saveInVault(value: string) {
    this._saveInVault = value;
  }
  public resetSaveInVault() {
    this._saveInVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveInVaultInput() {
    return this._saveInVault;
  }

  // status_threshold_config - computed: true, optional: true, required: false
  private _statusThresholdConfig?: string; 
  public get statusThresholdConfig() {
    return this.getStringAttribute('status_threshold_config');
  }
  public set statusThresholdConfig(value: string) {
    this._statusThresholdConfig = value;
  }
  public resetStatusThresholdConfig() {
    this._statusThresholdConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusThresholdConfigInput() {
    return this._statusThresholdConfig;
  }

  // vault_configuration - computed: false, optional: true, required: false
  private _vaultConfiguration?: string; 
  public get vaultConfiguration() {
    return this.getStringAttribute('vault_configuration');
  }
  public set vaultConfiguration(value: string) {
    this._vaultConfiguration = value;
  }
  public resetVaultConfiguration() {
    this._vaultConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultConfigurationInput() {
    return this._vaultConfiguration;
  }

  // vault_connection - computed: false, optional: true, required: false
  private _vaultConnection?: string; 
  public get vaultConnection() {
    return this.getStringAttribute('vault_connection');
  }
  public set vaultConnection(value: string) {
    this._vaultConnection = value;
  }
  public resetVaultConnection() {
    this._vaultConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultConnectionInput() {
    return this._vaultConnection;
  }

  // wo_version - computed: false, optional: true, required: false
  private _woVersion?: string; 
  public get woVersion() {
    return this.getStringAttribute('wo_version');
  }
  public set woVersion(value: string) {
    this._woVersion = value;
  }
  public resetWoVersion() {
    this._woVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get woVersionInput() {
    return this._woVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_tokens: cdktf.stringToTerraform(this._accessTokens),
      access_tokens_wo: cdktf.stringToTerraform(this._accessTokensWo),
      connection_json: cdktf.stringToTerraform(this._connectionJson),
      connection_json_wo: cdktf.stringToTerraform(this._connectionJsonWo),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      description: cdktf.stringToTerraform(this._description),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      import_account_ent_json: cdktf.stringToTerraform(this._importAccountEntJson),
      organization_list: cdktf.stringToTerraform(this._organizationList),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      status_threshold_config: cdktf.stringToTerraform(this._statusThresholdConfig),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      wo_version: cdktf.stringToTerraform(this._woVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_tokens: {
        value: cdktf.stringToHclTerraform(this._accessTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_tokens_wo: {
        value: cdktf.stringToHclTerraform(this._accessTokensWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_json: {
        value: cdktf.stringToHclTerraform(this._connectionJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_json_wo: {
        value: cdktf.stringToHclTerraform(this._connectionJsonWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultsavroles: {
        value: cdktf.stringToHclTerraform(this._defaultsavroles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_template: {
        value: cdktf.stringToHclTerraform(this._emailTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_account_ent_json: {
        value: cdktf.stringToHclTerraform(this._importAccountEntJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_list: {
        value: cdktf.stringToHclTerraform(this._organizationList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      save_in_vault: {
        value: cdktf.stringToHclTerraform(this._saveInVault),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status_threshold_config: {
        value: cdktf.stringToHclTerraform(this._statusThresholdConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_configuration: {
        value: cdktf.stringToHclTerraform(this._vaultConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_connection: {
        value: cdktf.stringToHclTerraform(this._vaultConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wo_version: {
        value: cdktf.stringToHclTerraform(this._woVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
