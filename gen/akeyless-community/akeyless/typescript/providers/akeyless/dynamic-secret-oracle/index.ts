// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretOracleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customize how temporary usernames are generated using go template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#custom_username_template DynamicSecretOracle#custom_username_template}
  */
  readonly customUsernameTemplate?: string;
  /**
  * the set of root certificate authorities in base64 encoding that clients use when verifying server certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#db_server_certificates DynamicSecretOracle#db_server_certificates}
  */
  readonly dbServerCertificates?: string;
  /**
  * Server name is used to verify the hostname on the returned certificates unless InsecureSkipVerify is given. It is also included in the client's handshake to support virtual hosting unless it is an IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#db_server_name DynamicSecretOracle#db_server_name}
  */
  readonly dbServerName?: string;
  /**
  * Encrypt dynamic secret details with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#encryption_key_name DynamicSecretOracle#encryption_key_name}
  */
  readonly encryptionKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#id DynamicSecretOracle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Dynamic secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#name DynamicSecretOracle#name}
  */
  readonly name: string;
  /**
  * Oracle Creation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#oracle_creation_statements DynamicSecretOracle#oracle_creation_statements}
  */
  readonly oracleCreationStatements?: string;
  /**
  * Oracle host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#oracle_host DynamicSecretOracle#oracle_host}
  */
  readonly oracleHost?: string;
  /**
  * Oracle password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#oracle_password DynamicSecretOracle#oracle_password}
  */
  readonly oraclePassword?: string;
  /**
  * Oracle port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#oracle_port DynamicSecretOracle#oracle_port}
  */
  readonly oraclePort?: string;
  /**
  * Oracle Revocation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#oracle_revocation_statements DynamicSecretOracle#oracle_revocation_statements}
  */
  readonly oracleRevocationStatements?: string;
  /**
  * Oracle service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#oracle_service_name DynamicSecretOracle#oracle_service_name}
  */
  readonly oracleServiceName?: string;
  /**
  * Oracle user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#oracle_username DynamicSecretOracle#oracle_username}
  */
  readonly oracleUsername?: string;
  /**
  * The length of the password to be generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#password_length DynamicSecretOracle#password_length}
  */
  readonly passwordLength?: string;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#tags DynamicSecretOracle#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in dynamic secret creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#target_name DynamicSecretOracle#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#user_ttl DynamicSecretOracle#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle akeyless_dynamic_secret_oracle}
*/
export class DynamicSecretOracle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_dynamic_secret_oracle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretOracle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretOracle to import
  * @param importFromId The id of the existing DynamicSecretOracle that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretOracle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_dynamic_secret_oracle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_oracle akeyless_dynamic_secret_oracle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretOracleConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretOracleConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_dynamic_secret_oracle',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customUsernameTemplate = config.customUsernameTemplate;
    this._dbServerCertificates = config.dbServerCertificates;
    this._dbServerName = config.dbServerName;
    this._encryptionKeyName = config.encryptionKeyName;
    this._id = config.id;
    this._name = config.name;
    this._oracleCreationStatements = config.oracleCreationStatements;
    this._oracleHost = config.oracleHost;
    this._oraclePassword = config.oraclePassword;
    this._oraclePort = config.oraclePort;
    this._oracleRevocationStatements = config.oracleRevocationStatements;
    this._oracleServiceName = config.oracleServiceName;
    this._oracleUsername = config.oracleUsername;
    this._passwordLength = config.passwordLength;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._userTtl = config.userTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_username_template - computed: false, optional: true, required: false
  private _customUsernameTemplate?: string; 
  public get customUsernameTemplate() {
    return this.getStringAttribute('custom_username_template');
  }
  public set customUsernameTemplate(value: string) {
    this._customUsernameTemplate = value;
  }
  public resetCustomUsernameTemplate() {
    this._customUsernameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customUsernameTemplateInput() {
    return this._customUsernameTemplate;
  }

  // db_server_certificates - computed: false, optional: true, required: false
  private _dbServerCertificates?: string; 
  public get dbServerCertificates() {
    return this.getStringAttribute('db_server_certificates');
  }
  public set dbServerCertificates(value: string) {
    this._dbServerCertificates = value;
  }
  public resetDbServerCertificates() {
    this._dbServerCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServerCertificatesInput() {
    return this._dbServerCertificates;
  }

  // db_server_name - computed: false, optional: true, required: false
  private _dbServerName?: string; 
  public get dbServerName() {
    return this.getStringAttribute('db_server_name');
  }
  public set dbServerName(value: string) {
    this._dbServerName = value;
  }
  public resetDbServerName() {
    this._dbServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServerNameInput() {
    return this._dbServerName;
  }

  // encryption_key_name - computed: false, optional: true, required: false
  private _encryptionKeyName?: string; 
  public get encryptionKeyName() {
    return this.getStringAttribute('encryption_key_name');
  }
  public set encryptionKeyName(value: string) {
    this._encryptionKeyName = value;
  }
  public resetEncryptionKeyName() {
    this._encryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyNameInput() {
    return this._encryptionKeyName;
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

  // oracle_creation_statements - computed: false, optional: true, required: false
  private _oracleCreationStatements?: string; 
  public get oracleCreationStatements() {
    return this.getStringAttribute('oracle_creation_statements');
  }
  public set oracleCreationStatements(value: string) {
    this._oracleCreationStatements = value;
  }
  public resetOracleCreationStatements() {
    this._oracleCreationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleCreationStatementsInput() {
    return this._oracleCreationStatements;
  }

  // oracle_host - computed: false, optional: true, required: false
  private _oracleHost?: string; 
  public get oracleHost() {
    return this.getStringAttribute('oracle_host');
  }
  public set oracleHost(value: string) {
    this._oracleHost = value;
  }
  public resetOracleHost() {
    this._oracleHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleHostInput() {
    return this._oracleHost;
  }

  // oracle_password - computed: false, optional: true, required: false
  private _oraclePassword?: string; 
  public get oraclePassword() {
    return this.getStringAttribute('oracle_password');
  }
  public set oraclePassword(value: string) {
    this._oraclePassword = value;
  }
  public resetOraclePassword() {
    this._oraclePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oraclePasswordInput() {
    return this._oraclePassword;
  }

  // oracle_port - computed: false, optional: true, required: false
  private _oraclePort?: string; 
  public get oraclePort() {
    return this.getStringAttribute('oracle_port');
  }
  public set oraclePort(value: string) {
    this._oraclePort = value;
  }
  public resetOraclePort() {
    this._oraclePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oraclePortInput() {
    return this._oraclePort;
  }

  // oracle_revocation_statements - computed: false, optional: true, required: false
  private _oracleRevocationStatements?: string; 
  public get oracleRevocationStatements() {
    return this.getStringAttribute('oracle_revocation_statements');
  }
  public set oracleRevocationStatements(value: string) {
    this._oracleRevocationStatements = value;
  }
  public resetOracleRevocationStatements() {
    this._oracleRevocationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleRevocationStatementsInput() {
    return this._oracleRevocationStatements;
  }

  // oracle_service_name - computed: false, optional: true, required: false
  private _oracleServiceName?: string; 
  public get oracleServiceName() {
    return this.getStringAttribute('oracle_service_name');
  }
  public set oracleServiceName(value: string) {
    this._oracleServiceName = value;
  }
  public resetOracleServiceName() {
    this._oracleServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleServiceNameInput() {
    return this._oracleServiceName;
  }

  // oracle_username - computed: false, optional: true, required: false
  private _oracleUsername?: string; 
  public get oracleUsername() {
    return this.getStringAttribute('oracle_username');
  }
  public set oracleUsername(value: string) {
    this._oracleUsername = value;
  }
  public resetOracleUsername() {
    this._oracleUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleUsernameInput() {
    return this._oracleUsername;
  }

  // password_length - computed: false, optional: true, required: false
  private _passwordLength?: string; 
  public get passwordLength() {
    return this.getStringAttribute('password_length');
  }
  public set passwordLength(value: string) {
    this._passwordLength = value;
  }
  public resetPasswordLength() {
    this._passwordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLengthInput() {
    return this._passwordLength;
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

  // target_name - computed: false, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // user_ttl - computed: false, optional: true, required: false
  private _userTtl?: string; 
  public get userTtl() {
    return this.getStringAttribute('user_ttl');
  }
  public set userTtl(value: string) {
    this._userTtl = value;
  }
  public resetUserTtl() {
    this._userTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTtlInput() {
    return this._userTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_username_template: cdktf.stringToTerraform(this._customUsernameTemplate),
      db_server_certificates: cdktf.stringToTerraform(this._dbServerCertificates),
      db_server_name: cdktf.stringToTerraform(this._dbServerName),
      encryption_key_name: cdktf.stringToTerraform(this._encryptionKeyName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oracle_creation_statements: cdktf.stringToTerraform(this._oracleCreationStatements),
      oracle_host: cdktf.stringToTerraform(this._oracleHost),
      oracle_password: cdktf.stringToTerraform(this._oraclePassword),
      oracle_port: cdktf.stringToTerraform(this._oraclePort),
      oracle_revocation_statements: cdktf.stringToTerraform(this._oracleRevocationStatements),
      oracle_service_name: cdktf.stringToTerraform(this._oracleServiceName),
      oracle_username: cdktf.stringToTerraform(this._oracleUsername),
      password_length: cdktf.stringToTerraform(this._passwordLength),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      user_ttl: cdktf.stringToTerraform(this._userTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_username_template: {
        value: cdktf.stringToHclTerraform(this._customUsernameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_server_certificates: {
        value: cdktf.stringToHclTerraform(this._dbServerCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_server_name: {
        value: cdktf.stringToHclTerraform(this._dbServerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._encryptionKeyName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_creation_statements: {
        value: cdktf.stringToHclTerraform(this._oracleCreationStatements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_host: {
        value: cdktf.stringToHclTerraform(this._oracleHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_password: {
        value: cdktf.stringToHclTerraform(this._oraclePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_port: {
        value: cdktf.stringToHclTerraform(this._oraclePort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_revocation_statements: {
        value: cdktf.stringToHclTerraform(this._oracleRevocationStatements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_service_name: {
        value: cdktf.stringToHclTerraform(this._oracleServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oracle_username: {
        value: cdktf.stringToHclTerraform(this._oracleUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_length: {
        value: cdktf.stringToHclTerraform(this._passwordLength),
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
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ttl: {
        value: cdktf.stringToHclTerraform(this._userTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
