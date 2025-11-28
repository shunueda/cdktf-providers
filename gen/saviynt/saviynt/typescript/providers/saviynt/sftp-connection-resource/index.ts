// https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SftpConnectionResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of authentication (password, key, etc.). Example: "password"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#auth_credential_type SftpConnectionResource#auth_credential_type}
  */
  readonly authCredentialType: string;
  /**
  * Authentication credential (password or private key path).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#auth_credential_value SftpConnectionResource#auth_credential_value}
  */
  readonly authCredentialValue?: string;
  /**
  * Authentication credential (write-only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#auth_credential_value_wo SftpConnectionResource#auth_credential_value_wo}
  */
  readonly authCredentialValueWo?: string;
  /**
  * Name of the connection. Example: "Active Directory_Doc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#connection_name SftpConnectionResource#connection_name}
  */
  readonly connectionName: string;
  /**
  * Default SAV roles for managing the connection. Example: "ROLE_ORG"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#defaultsavroles SftpConnectionResource#defaultsavroles}
  */
  readonly defaultsavroles?: string;
  /**
  * Description for the connection. Example: "ORG_AD"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#description SftpConnectionResource#description}
  */
  readonly description?: string;
  /**
  * Email template for notifications. Example: "New Account Task Creation"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#email_template SftpConnectionResource#email_template}
  */
  readonly emailTemplate?: string;
  /**
  * Files to download from SFTP server. Example: "*.csv"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#files_to_get SftpConnectionResource#files_to_get}
  */
  readonly filesToGet?: string;
  /**
  * Files to upload to SFTP server. Example: "upload/*.txt"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#files_to_put SftpConnectionResource#files_to_put}
  */
  readonly filesToPut?: string;
  /**
  * SFTP server hostname or IP address. Example: "sftp.example.com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#host_name SftpConnectionResource#host_name}
  */
  readonly hostName: string;
  /**
  * PAM configuration for SFTP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#pam_config SftpConnectionResource#pam_config}
  */
  readonly pamConfig?: string;
  /**
  * Passphrase for encrypted private key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#passphrase SftpConnectionResource#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Passphrase for encrypted private key (write-only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#passphrase_wo SftpConnectionResource#passphrase_wo}
  */
  readonly passphraseWo?: string;
  /**
  * SFTP server port number. Default is 22. Example: "22"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#port_number SftpConnectionResource#port_number}
  */
  readonly portNumber: string;
  /**
  * Flag indicating whether the encrypted attribute should be saved in the configured vault. Example: "false"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#save_in_vault SftpConnectionResource#save_in_vault}
  */
  readonly saveInVault?: string;
  /**
  * Username for SFTP authentication. Example: "sftpuser"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#username SftpConnectionResource#username}
  */
  readonly username: string;
  /**
  * JSON string specifying vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#vault_configuration SftpConnectionResource#vault_configuration}
  */
  readonly vaultConfiguration?: string;
  /**
  * Specifies the type of vault connection being used (e.g., 'Hashicorp'). Example: "Hashicorp"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#vault_connection SftpConnectionResource#vault_connection}
  */
  readonly vaultConnection?: string;
  /**
  * Add/change the value of this attribute to update the writeonly attributes like username, password etc in connection resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#wo_version SftpConnectionResource#wo_version}
  */
  readonly woVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource saviynt_sftp_connection_resource}
*/
export class SftpConnectionResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_sftp_connection_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SftpConnectionResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SftpConnectionResource to import
  * @param importFromId The id of the existing SftpConnectionResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SftpConnectionResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_sftp_connection_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/resources/sftp_connection_resource saviynt_sftp_connection_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SftpConnectionResourceConfig
  */
  public constructor(scope: Construct, id: string, config: SftpConnectionResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_sftp_connection_resource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.1',
        providerVersionConstraint: '0.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authCredentialType = config.authCredentialType;
    this._authCredentialValue = config.authCredentialValue;
    this._authCredentialValueWo = config.authCredentialValueWo;
    this._connectionName = config.connectionName;
    this._defaultsavroles = config.defaultsavroles;
    this._description = config.description;
    this._emailTemplate = config.emailTemplate;
    this._filesToGet = config.filesToGet;
    this._filesToPut = config.filesToPut;
    this._hostName = config.hostName;
    this._pamConfig = config.pamConfig;
    this._passphrase = config.passphrase;
    this._passphraseWo = config.passphraseWo;
    this._portNumber = config.portNumber;
    this._saveInVault = config.saveInVault;
    this._username = config.username;
    this._vaultConfiguration = config.vaultConfiguration;
    this._vaultConnection = config.vaultConnection;
    this._woVersion = config.woVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_credential_type - computed: false, optional: false, required: true
  private _authCredentialType?: string; 
  public get authCredentialType() {
    return this.getStringAttribute('auth_credential_type');
  }
  public set authCredentialType(value: string) {
    this._authCredentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authCredentialTypeInput() {
    return this._authCredentialType;
  }

  // auth_credential_value - computed: false, optional: true, required: false
  private _authCredentialValue?: string; 
  public get authCredentialValue() {
    return this.getStringAttribute('auth_credential_value');
  }
  public set authCredentialValue(value: string) {
    this._authCredentialValue = value;
  }
  public resetAuthCredentialValue() {
    this._authCredentialValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCredentialValueInput() {
    return this._authCredentialValue;
  }

  // auth_credential_value_wo - computed: false, optional: true, required: false
  private _authCredentialValueWo?: string; 
  public get authCredentialValueWo() {
    return this.getStringAttribute('auth_credential_value_wo');
  }
  public set authCredentialValueWo(value: string) {
    this._authCredentialValueWo = value;
  }
  public resetAuthCredentialValueWo() {
    this._authCredentialValueWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCredentialValueWoInput() {
    return this._authCredentialValueWo;
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

  // files_to_get - computed: true, optional: true, required: false
  private _filesToGet?: string; 
  public get filesToGet() {
    return this.getStringAttribute('files_to_get');
  }
  public set filesToGet(value: string) {
    this._filesToGet = value;
  }
  public resetFilesToGet() {
    this._filesToGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesToGetInput() {
    return this._filesToGet;
  }

  // files_to_put - computed: true, optional: true, required: false
  private _filesToPut?: string; 
  public get filesToPut() {
    return this.getStringAttribute('files_to_put');
  }
  public set filesToPut(value: string) {
    this._filesToPut = value;
  }
  public resetFilesToPut() {
    this._filesToPut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesToPutInput() {
    return this._filesToPut;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // pam_config - computed: true, optional: true, required: false
  private _pamConfig?: string; 
  public get pamConfig() {
    return this.getStringAttribute('pam_config');
  }
  public set pamConfig(value: string) {
    this._pamConfig = value;
  }
  public resetPamConfig() {
    this._pamConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pamConfigInput() {
    return this._pamConfig;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // passphrase_wo - computed: false, optional: true, required: false
  private _passphraseWo?: string; 
  public get passphraseWo() {
    return this.getStringAttribute('passphrase_wo');
  }
  public set passphraseWo(value: string) {
    this._passphraseWo = value;
  }
  public resetPassphraseWo() {
    this._passphraseWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseWoInput() {
    return this._passphraseWo;
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: string; 
  public get portNumber() {
    return this.getStringAttribute('port_number');
  }
  public set portNumber(value: string) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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
      auth_credential_type: cdktf.stringToTerraform(this._authCredentialType),
      auth_credential_value: cdktf.stringToTerraform(this._authCredentialValue),
      auth_credential_value_wo: cdktf.stringToTerraform(this._authCredentialValueWo),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      defaultsavroles: cdktf.stringToTerraform(this._defaultsavroles),
      description: cdktf.stringToTerraform(this._description),
      email_template: cdktf.stringToTerraform(this._emailTemplate),
      files_to_get: cdktf.stringToTerraform(this._filesToGet),
      files_to_put: cdktf.stringToTerraform(this._filesToPut),
      host_name: cdktf.stringToTerraform(this._hostName),
      pam_config: cdktf.stringToTerraform(this._pamConfig),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      passphrase_wo: cdktf.stringToTerraform(this._passphraseWo),
      port_number: cdktf.stringToTerraform(this._portNumber),
      save_in_vault: cdktf.stringToTerraform(this._saveInVault),
      username: cdktf.stringToTerraform(this._username),
      vault_configuration: cdktf.stringToTerraform(this._vaultConfiguration),
      vault_connection: cdktf.stringToTerraform(this._vaultConnection),
      wo_version: cdktf.stringToTerraform(this._woVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_credential_type: {
        value: cdktf.stringToHclTerraform(this._authCredentialType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_credential_value: {
        value: cdktf.stringToHclTerraform(this._authCredentialValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_credential_value_wo: {
        value: cdktf.stringToHclTerraform(this._authCredentialValueWo),
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
      files_to_get: {
        value: cdktf.stringToHclTerraform(this._filesToGet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      files_to_put: {
        value: cdktf.stringToHclTerraform(this._filesToPut),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pam_config: {
        value: cdktf.stringToHclTerraform(this._pamConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase_wo: {
        value: cdktf.stringToHclTerraform(this._passphraseWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_number: {
        value: cdktf.stringToHclTerraform(this._portNumber),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
