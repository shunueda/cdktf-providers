// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretMysqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customize how temporary usernames are generated using go template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#custom_username_template DynamicSecretMysql#custom_username_template}
  */
  readonly customUsernameTemplate?: string;
  /**
  * the set of root certificate authorities in base64 encoding that clients use when verifying server certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#db_server_certificates DynamicSecretMysql#db_server_certificates}
  */
  readonly dbServerCertificates?: string;
  /**
  * Server name is used to verify the hostname on the returned certificates unless InsecureSkipVerify is given. It is also included in the client's handshake to support virtual hosting unless it is an IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#db_server_name DynamicSecretMysql#db_server_name}
  */
  readonly dbServerName?: string;
  /**
  * Encrypt dynamic secret details with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#encryption_key_name DynamicSecretMysql#encryption_key_name}
  */
  readonly encryptionKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#id DynamicSecretMysql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MySQL Creation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#mysql_creation_statements DynamicSecretMysql#mysql_creation_statements}
  */
  readonly mysqlCreationStatements?: string;
  /**
  * MySQL DB name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#mysql_dbname DynamicSecretMysql#mysql_dbname}
  */
  readonly mysqlDbname?: string;
  /**
  * MySQL host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#mysql_host DynamicSecretMysql#mysql_host}
  */
  readonly mysqlHost?: string;
  /**
  * MySQL password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#mysql_password DynamicSecretMysql#mysql_password}
  */
  readonly mysqlPassword?: string;
  /**
  * MySQL port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#mysql_port DynamicSecretMysql#mysql_port}
  */
  readonly mysqlPort?: string;
  /**
  * MySQL Revocation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#mysql_revocation_statements DynamicSecretMysql#mysql_revocation_statements}
  */
  readonly mysqlRevocationStatements?: string;
  /**
  * MySQL user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#mysql_username DynamicSecretMysql#mysql_username}
  */
  readonly mysqlUsername?: string;
  /**
  * Dynamic secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#name DynamicSecretMysql#name}
  */
  readonly name: string;
  /**
  * The length of the password to be generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#password_length DynamicSecretMysql#password_length}
  */
  readonly passwordLength?: string;
  /**
  * Path to the SSH Certificate Issuer for your Akeyless Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#secure_access_bastion_issuer DynamicSecretMysql#secure_access_bastion_issuer}
  */
  readonly secureAccessBastionIssuer?: string;
  /**
  * Enable Web Secure Remote Access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#secure_access_db_name DynamicSecretMysql#secure_access_db_name}
  */
  readonly secureAccessDbName?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#secure_access_enable DynamicSecretMysql#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Target DB servers for connections., For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#secure_access_host DynamicSecretMysql#secure_access_host}
  */
  readonly secureAccessHost?: string[];
  /**
  * Enable Web Secure Remote Access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#secure_access_web DynamicSecretMysql#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable SSL [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#ssl DynamicSecretMysql#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * SSL CA certificate in base64 encoding generated from a trusted Certificate Authority (CA)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#ssl_certificate DynamicSecretMysql#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#tags DynamicSecretMysql#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in dynamic secret creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#target_name DynamicSecretMysql#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#user_ttl DynamicSecretMysql#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql akeyless_dynamic_secret_mysql}
*/
export class DynamicSecretMysql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_dynamic_secret_mysql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretMysql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretMysql to import
  * @param importFromId The id of the existing DynamicSecretMysql that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretMysql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_dynamic_secret_mysql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_mysql akeyless_dynamic_secret_mysql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretMysqlConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretMysqlConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_dynamic_secret_mysql',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
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
    this._mysqlCreationStatements = config.mysqlCreationStatements;
    this._mysqlDbname = config.mysqlDbname;
    this._mysqlHost = config.mysqlHost;
    this._mysqlPassword = config.mysqlPassword;
    this._mysqlPort = config.mysqlPort;
    this._mysqlRevocationStatements = config.mysqlRevocationStatements;
    this._mysqlUsername = config.mysqlUsername;
    this._name = config.name;
    this._passwordLength = config.passwordLength;
    this._secureAccessBastionIssuer = config.secureAccessBastionIssuer;
    this._secureAccessDbName = config.secureAccessDbName;
    this._secureAccessEnable = config.secureAccessEnable;
    this._secureAccessHost = config.secureAccessHost;
    this._secureAccessWeb = config.secureAccessWeb;
    this._ssl = config.ssl;
    this._sslCertificate = config.sslCertificate;
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

  // mysql_creation_statements - computed: false, optional: true, required: false
  private _mysqlCreationStatements?: string; 
  public get mysqlCreationStatements() {
    return this.getStringAttribute('mysql_creation_statements');
  }
  public set mysqlCreationStatements(value: string) {
    this._mysqlCreationStatements = value;
  }
  public resetMysqlCreationStatements() {
    this._mysqlCreationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlCreationStatementsInput() {
    return this._mysqlCreationStatements;
  }

  // mysql_dbname - computed: false, optional: true, required: false
  private _mysqlDbname?: string; 
  public get mysqlDbname() {
    return this.getStringAttribute('mysql_dbname');
  }
  public set mysqlDbname(value: string) {
    this._mysqlDbname = value;
  }
  public resetMysqlDbname() {
    this._mysqlDbname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDbnameInput() {
    return this._mysqlDbname;
  }

  // mysql_host - computed: false, optional: true, required: false
  private _mysqlHost?: string; 
  public get mysqlHost() {
    return this.getStringAttribute('mysql_host');
  }
  public set mysqlHost(value: string) {
    this._mysqlHost = value;
  }
  public resetMysqlHost() {
    this._mysqlHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlHostInput() {
    return this._mysqlHost;
  }

  // mysql_password - computed: false, optional: true, required: false
  private _mysqlPassword?: string; 
  public get mysqlPassword() {
    return this.getStringAttribute('mysql_password');
  }
  public set mysqlPassword(value: string) {
    this._mysqlPassword = value;
  }
  public resetMysqlPassword() {
    this._mysqlPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlPasswordInput() {
    return this._mysqlPassword;
  }

  // mysql_port - computed: false, optional: true, required: false
  private _mysqlPort?: string; 
  public get mysqlPort() {
    return this.getStringAttribute('mysql_port');
  }
  public set mysqlPort(value: string) {
    this._mysqlPort = value;
  }
  public resetMysqlPort() {
    this._mysqlPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlPortInput() {
    return this._mysqlPort;
  }

  // mysql_revocation_statements - computed: false, optional: true, required: false
  private _mysqlRevocationStatements?: string; 
  public get mysqlRevocationStatements() {
    return this.getStringAttribute('mysql_revocation_statements');
  }
  public set mysqlRevocationStatements(value: string) {
    this._mysqlRevocationStatements = value;
  }
  public resetMysqlRevocationStatements() {
    this._mysqlRevocationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlRevocationStatementsInput() {
    return this._mysqlRevocationStatements;
  }

  // mysql_username - computed: false, optional: true, required: false
  private _mysqlUsername?: string; 
  public get mysqlUsername() {
    return this.getStringAttribute('mysql_username');
  }
  public set mysqlUsername(value: string) {
    this._mysqlUsername = value;
  }
  public resetMysqlUsername() {
    this._mysqlUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlUsernameInput() {
    return this._mysqlUsername;
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

  // secure_access_bastion_issuer - computed: false, optional: true, required: false
  private _secureAccessBastionIssuer?: string; 
  public get secureAccessBastionIssuer() {
    return this.getStringAttribute('secure_access_bastion_issuer');
  }
  public set secureAccessBastionIssuer(value: string) {
    this._secureAccessBastionIssuer = value;
  }
  public resetSecureAccessBastionIssuer() {
    this._secureAccessBastionIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessBastionIssuerInput() {
    return this._secureAccessBastionIssuer;
  }

  // secure_access_db_name - computed: true, optional: true, required: false
  private _secureAccessDbName?: string; 
  public get secureAccessDbName() {
    return this.getStringAttribute('secure_access_db_name');
  }
  public set secureAccessDbName(value: string) {
    this._secureAccessDbName = value;
  }
  public resetSecureAccessDbName() {
    this._secureAccessDbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessDbNameInput() {
    return this._secureAccessDbName;
  }

  // secure_access_enable - computed: false, optional: true, required: false
  private _secureAccessEnable?: string; 
  public get secureAccessEnable() {
    return this.getStringAttribute('secure_access_enable');
  }
  public set secureAccessEnable(value: string) {
    this._secureAccessEnable = value;
  }
  public resetSecureAccessEnable() {
    this._secureAccessEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessEnableInput() {
    return this._secureAccessEnable;
  }

  // secure_access_host - computed: false, optional: true, required: false
  private _secureAccessHost?: string[]; 
  public get secureAccessHost() {
    return cdktf.Fn.tolist(this.getListAttribute('secure_access_host'));
  }
  public set secureAccessHost(value: string[]) {
    this._secureAccessHost = value;
  }
  public resetSecureAccessHost() {
    this._secureAccessHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessHostInput() {
    return this._secureAccessHost;
  }

  // secure_access_web - computed: false, optional: true, required: false
  private _secureAccessWeb?: boolean | cdktf.IResolvable; 
  public get secureAccessWeb() {
    return this.getBooleanAttribute('secure_access_web');
  }
  public set secureAccessWeb(value: boolean | cdktf.IResolvable) {
    this._secureAccessWeb = value;
  }
  public resetSecureAccessWeb() {
    this._secureAccessWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessWebInput() {
    return this._secureAccessWeb;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
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
      mysql_creation_statements: cdktf.stringToTerraform(this._mysqlCreationStatements),
      mysql_dbname: cdktf.stringToTerraform(this._mysqlDbname),
      mysql_host: cdktf.stringToTerraform(this._mysqlHost),
      mysql_password: cdktf.stringToTerraform(this._mysqlPassword),
      mysql_port: cdktf.stringToTerraform(this._mysqlPort),
      mysql_revocation_statements: cdktf.stringToTerraform(this._mysqlRevocationStatements),
      mysql_username: cdktf.stringToTerraform(this._mysqlUsername),
      name: cdktf.stringToTerraform(this._name),
      password_length: cdktf.stringToTerraform(this._passwordLength),
      secure_access_bastion_issuer: cdktf.stringToTerraform(this._secureAccessBastionIssuer),
      secure_access_db_name: cdktf.stringToTerraform(this._secureAccessDbName),
      secure_access_enable: cdktf.stringToTerraform(this._secureAccessEnable),
      secure_access_host: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secureAccessHost),
      secure_access_web: cdktf.booleanToTerraform(this._secureAccessWeb),
      ssl: cdktf.booleanToTerraform(this._ssl),
      ssl_certificate: cdktf.stringToTerraform(this._sslCertificate),
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
      mysql_creation_statements: {
        value: cdktf.stringToHclTerraform(this._mysqlCreationStatements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_dbname: {
        value: cdktf.stringToHclTerraform(this._mysqlDbname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_host: {
        value: cdktf.stringToHclTerraform(this._mysqlHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_password: {
        value: cdktf.stringToHclTerraform(this._mysqlPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_port: {
        value: cdktf.stringToHclTerraform(this._mysqlPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_revocation_statements: {
        value: cdktf.stringToHclTerraform(this._mysqlRevocationStatements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mysql_username: {
        value: cdktf.stringToHclTerraform(this._mysqlUsername),
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
      password_length: {
        value: cdktf.stringToHclTerraform(this._passwordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_bastion_issuer: {
        value: cdktf.stringToHclTerraform(this._secureAccessBastionIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_db_name: {
        value: cdktf.stringToHclTerraform(this._secureAccessDbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_enable: {
        value: cdktf.stringToHclTerraform(this._secureAccessEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_access_host: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secureAccessHost),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secure_access_web: {
        value: cdktf.booleanToHclTerraform(this._secureAccessWeb),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_certificate: {
        value: cdktf.stringToHclTerraform(this._sslCertificate),
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
