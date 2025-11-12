// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerMysqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * the set of root certificate authorities in base64 encoding that clients use when verifying server certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#db_server_certificates ProducerMysql#db_server_certificates}
  */
  readonly dbServerCertificates?: string;
  /**
  * Server name is used to verify the hostname on the returned certificates unless InsecureSkipVerify is given. It is also included in the client's handshake to support virtual hosting unless it is an IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#db_server_name ProducerMysql#db_server_name}
  */
  readonly dbServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#id ProducerMysql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MySQL DB name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#mysql_dbname ProducerMysql#mysql_dbname}
  */
  readonly mysqlDbname?: string;
  /**
  * MySQL host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#mysql_host ProducerMysql#mysql_host}
  */
  readonly mysqlHost?: string;
  /**
  * MySQL password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#mysql_password ProducerMysql#mysql_password}
  */
  readonly mysqlPassword?: string;
  /**
  * MySQL port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#mysql_port ProducerMysql#mysql_port}
  */
  readonly mysqlPort?: string;
  /**
  * MySQL Creation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#mysql_screation_statements ProducerMysql#mysql_screation_statements}
  */
  readonly mysqlScreationStatements?: string;
  /**
  * MySQL user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#mysql_username ProducerMysql#mysql_username}
  */
  readonly mysqlUsername?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#name ProducerMysql#name}
  */
  readonly name: string;
  /**
  * Encrypt producer with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#producer_encryption_key_name ProducerMysql#producer_encryption_key_name}
  */
  readonly producerEncryptionKeyName?: string;
  /**
  * Path to the SSH Certificate Issuer for your Akeyless Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#secure_access_bastion_issuer ProducerMysql#secure_access_bastion_issuer}
  */
  readonly secureAccessBastionIssuer?: string;
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#secure_access_db_name ProducerMysql#secure_access_db_name}
  */
  readonly secureAccessDbName?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#secure_access_enable ProducerMysql#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Target DB servers for connections., For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#secure_access_host ProducerMysql#secure_access_host}
  */
  readonly secureAccessHost?: string[];
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#secure_access_web ProducerMysql#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#tags ProducerMysql#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in producer creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#target_name ProducerMysql#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#user_ttl ProducerMysql#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql akeyless_producer_mysql}
*/
export class ProducerMysql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_mysql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerMysql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerMysql to import
  * @param importFromId The id of the existing ProducerMysql that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerMysql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_mysql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mysql akeyless_producer_mysql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerMysqlConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerMysqlConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_mysql',
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
    this._dbServerCertificates = config.dbServerCertificates;
    this._dbServerName = config.dbServerName;
    this._id = config.id;
    this._mysqlDbname = config.mysqlDbname;
    this._mysqlHost = config.mysqlHost;
    this._mysqlPassword = config.mysqlPassword;
    this._mysqlPort = config.mysqlPort;
    this._mysqlScreationStatements = config.mysqlScreationStatements;
    this._mysqlUsername = config.mysqlUsername;
    this._name = config.name;
    this._producerEncryptionKeyName = config.producerEncryptionKeyName;
    this._secureAccessBastionIssuer = config.secureAccessBastionIssuer;
    this._secureAccessDbName = config.secureAccessDbName;
    this._secureAccessEnable = config.secureAccessEnable;
    this._secureAccessHost = config.secureAccessHost;
    this._secureAccessWeb = config.secureAccessWeb;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._userTtl = config.userTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mysql_screation_statements - computed: true, optional: true, required: false
  private _mysqlScreationStatements?: string; 
  public get mysqlScreationStatements() {
    return this.getStringAttribute('mysql_screation_statements');
  }
  public set mysqlScreationStatements(value: string) {
    this._mysqlScreationStatements = value;
  }
  public resetMysqlScreationStatements() {
    this._mysqlScreationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlScreationStatementsInput() {
    return this._mysqlScreationStatements;
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

  // producer_encryption_key_name - computed: false, optional: true, required: false
  private _producerEncryptionKeyName?: string; 
  public get producerEncryptionKeyName() {
    return this.getStringAttribute('producer_encryption_key_name');
  }
  public set producerEncryptionKeyName(value: string) {
    this._producerEncryptionKeyName = value;
  }
  public resetProducerEncryptionKeyName() {
    this._producerEncryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerEncryptionKeyNameInput() {
    return this._producerEncryptionKeyName;
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
      db_server_certificates: cdktf.stringToTerraform(this._dbServerCertificates),
      db_server_name: cdktf.stringToTerraform(this._dbServerName),
      id: cdktf.stringToTerraform(this._id),
      mysql_dbname: cdktf.stringToTerraform(this._mysqlDbname),
      mysql_host: cdktf.stringToTerraform(this._mysqlHost),
      mysql_password: cdktf.stringToTerraform(this._mysqlPassword),
      mysql_port: cdktf.stringToTerraform(this._mysqlPort),
      mysql_screation_statements: cdktf.stringToTerraform(this._mysqlScreationStatements),
      mysql_username: cdktf.stringToTerraform(this._mysqlUsername),
      name: cdktf.stringToTerraform(this._name),
      producer_encryption_key_name: cdktf.stringToTerraform(this._producerEncryptionKeyName),
      secure_access_bastion_issuer: cdktf.stringToTerraform(this._secureAccessBastionIssuer),
      secure_access_db_name: cdktf.stringToTerraform(this._secureAccessDbName),
      secure_access_enable: cdktf.stringToTerraform(this._secureAccessEnable),
      secure_access_host: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secureAccessHost),
      secure_access_web: cdktf.booleanToTerraform(this._secureAccessWeb),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      user_ttl: cdktf.stringToTerraform(this._userTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      mysql_screation_statements: {
        value: cdktf.stringToHclTerraform(this._mysqlScreationStatements),
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
      producer_encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._producerEncryptionKeyName),
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
