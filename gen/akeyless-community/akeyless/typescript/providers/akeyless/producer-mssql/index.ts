// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerMssqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#id ProducerMssql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MSSQL Server Creation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#mssql_create_statements ProducerMssql#mssql_create_statements}
  */
  readonly mssqlCreateStatements?: string;
  /**
  * MSSQL Server DB Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#mssql_dbname ProducerMssql#mssql_dbname}
  */
  readonly mssqlDbname?: string;
  /**
  * MS SQL Server host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#mssql_host ProducerMssql#mssql_host}
  */
  readonly mssqlHost?: string;
  /**
  * MS SQL Server password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#mssql_password ProducerMssql#mssql_password}
  */
  readonly mssqlPassword?: string;
  /**
  * MS SQL Server port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#mssql_port ProducerMssql#mssql_port}
  */
  readonly mssqlPort?: string;
  /**
  * MSSQL Server Revocation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#mssql_revocation_statements ProducerMssql#mssql_revocation_statements}
  */
  readonly mssqlRevocationStatements?: string;
  /**
  * MS SQL Server user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#mssql_username ProducerMssql#mssql_username}
  */
  readonly mssqlUsername?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#name ProducerMssql#name}
  */
  readonly name: string;
  /**
  * Encrypt producer with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#producer_encryption_key_name ProducerMssql#producer_encryption_key_name}
  */
  readonly producerEncryptionKeyName?: string;
  /**
  * Path to the SSH Certificate Issuer for your Akeyless Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#secure_access_bastion_issuer ProducerMssql#secure_access_bastion_issuer}
  */
  readonly secureAccessBastionIssuer?: string;
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#secure_access_db_name ProducerMssql#secure_access_db_name}
  */
  readonly secureAccessDbName?: string;
  /**
  * The db schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#secure_access_db_schema ProducerMssql#secure_access_db_schema}
  */
  readonly secureAccessDbSchema?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#secure_access_enable ProducerMssql#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Target DB servers for connections., For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#secure_access_host ProducerMssql#secure_access_host}
  */
  readonly secureAccessHost?: string[];
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#secure_access_web ProducerMssql#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#tags ProducerMssql#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in producer creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#target_name ProducerMssql#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#user_ttl ProducerMssql#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql akeyless_producer_mssql}
*/
export class ProducerMssql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_mssql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerMssql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerMssql to import
  * @param importFromId The id of the existing ProducerMssql that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerMssql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_mssql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_mssql akeyless_producer_mssql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerMssqlConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerMssqlConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_mssql',
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
    this._id = config.id;
    this._mssqlCreateStatements = config.mssqlCreateStatements;
    this._mssqlDbname = config.mssqlDbname;
    this._mssqlHost = config.mssqlHost;
    this._mssqlPassword = config.mssqlPassword;
    this._mssqlPort = config.mssqlPort;
    this._mssqlRevocationStatements = config.mssqlRevocationStatements;
    this._mssqlUsername = config.mssqlUsername;
    this._name = config.name;
    this._producerEncryptionKeyName = config.producerEncryptionKeyName;
    this._secureAccessBastionIssuer = config.secureAccessBastionIssuer;
    this._secureAccessDbName = config.secureAccessDbName;
    this._secureAccessDbSchema = config.secureAccessDbSchema;
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

  // mssql_create_statements - computed: false, optional: true, required: false
  private _mssqlCreateStatements?: string; 
  public get mssqlCreateStatements() {
    return this.getStringAttribute('mssql_create_statements');
  }
  public set mssqlCreateStatements(value: string) {
    this._mssqlCreateStatements = value;
  }
  public resetMssqlCreateStatements() {
    this._mssqlCreateStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlCreateStatementsInput() {
    return this._mssqlCreateStatements;
  }

  // mssql_dbname - computed: false, optional: true, required: false
  private _mssqlDbname?: string; 
  public get mssqlDbname() {
    return this.getStringAttribute('mssql_dbname');
  }
  public set mssqlDbname(value: string) {
    this._mssqlDbname = value;
  }
  public resetMssqlDbname() {
    this._mssqlDbname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlDbnameInput() {
    return this._mssqlDbname;
  }

  // mssql_host - computed: false, optional: true, required: false
  private _mssqlHost?: string; 
  public get mssqlHost() {
    return this.getStringAttribute('mssql_host');
  }
  public set mssqlHost(value: string) {
    this._mssqlHost = value;
  }
  public resetMssqlHost() {
    this._mssqlHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlHostInput() {
    return this._mssqlHost;
  }

  // mssql_password - computed: false, optional: true, required: false
  private _mssqlPassword?: string; 
  public get mssqlPassword() {
    return this.getStringAttribute('mssql_password');
  }
  public set mssqlPassword(value: string) {
    this._mssqlPassword = value;
  }
  public resetMssqlPassword() {
    this._mssqlPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlPasswordInput() {
    return this._mssqlPassword;
  }

  // mssql_port - computed: false, optional: true, required: false
  private _mssqlPort?: string; 
  public get mssqlPort() {
    return this.getStringAttribute('mssql_port');
  }
  public set mssqlPort(value: string) {
    this._mssqlPort = value;
  }
  public resetMssqlPort() {
    this._mssqlPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlPortInput() {
    return this._mssqlPort;
  }

  // mssql_revocation_statements - computed: false, optional: true, required: false
  private _mssqlRevocationStatements?: string; 
  public get mssqlRevocationStatements() {
    return this.getStringAttribute('mssql_revocation_statements');
  }
  public set mssqlRevocationStatements(value: string) {
    this._mssqlRevocationStatements = value;
  }
  public resetMssqlRevocationStatements() {
    this._mssqlRevocationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlRevocationStatementsInput() {
    return this._mssqlRevocationStatements;
  }

  // mssql_username - computed: false, optional: true, required: false
  private _mssqlUsername?: string; 
  public get mssqlUsername() {
    return this.getStringAttribute('mssql_username');
  }
  public set mssqlUsername(value: string) {
    this._mssqlUsername = value;
  }
  public resetMssqlUsername() {
    this._mssqlUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssqlUsernameInput() {
    return this._mssqlUsername;
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

  // secure_access_db_schema - computed: false, optional: true, required: false
  private _secureAccessDbSchema?: string; 
  public get secureAccessDbSchema() {
    return this.getStringAttribute('secure_access_db_schema');
  }
  public set secureAccessDbSchema(value: string) {
    this._secureAccessDbSchema = value;
  }
  public resetSecureAccessDbSchema() {
    this._secureAccessDbSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureAccessDbSchemaInput() {
    return this._secureAccessDbSchema;
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
      id: cdktf.stringToTerraform(this._id),
      mssql_create_statements: cdktf.stringToTerraform(this._mssqlCreateStatements),
      mssql_dbname: cdktf.stringToTerraform(this._mssqlDbname),
      mssql_host: cdktf.stringToTerraform(this._mssqlHost),
      mssql_password: cdktf.stringToTerraform(this._mssqlPassword),
      mssql_port: cdktf.stringToTerraform(this._mssqlPort),
      mssql_revocation_statements: cdktf.stringToTerraform(this._mssqlRevocationStatements),
      mssql_username: cdktf.stringToTerraform(this._mssqlUsername),
      name: cdktf.stringToTerraform(this._name),
      producer_encryption_key_name: cdktf.stringToTerraform(this._producerEncryptionKeyName),
      secure_access_bastion_issuer: cdktf.stringToTerraform(this._secureAccessBastionIssuer),
      secure_access_db_name: cdktf.stringToTerraform(this._secureAccessDbName),
      secure_access_db_schema: cdktf.stringToTerraform(this._secureAccessDbSchema),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mssql_create_statements: {
        value: cdktf.stringToHclTerraform(this._mssqlCreateStatements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mssql_dbname: {
        value: cdktf.stringToHclTerraform(this._mssqlDbname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mssql_host: {
        value: cdktf.stringToHclTerraform(this._mssqlHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mssql_password: {
        value: cdktf.stringToHclTerraform(this._mssqlPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mssql_port: {
        value: cdktf.stringToHclTerraform(this._mssqlPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mssql_revocation_statements: {
        value: cdktf.stringToHclTerraform(this._mssqlRevocationStatements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mssql_username: {
        value: cdktf.stringToHclTerraform(this._mssqlUsername),
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
      secure_access_db_schema: {
        value: cdktf.stringToHclTerraform(this._secureAccessDbSchema),
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
