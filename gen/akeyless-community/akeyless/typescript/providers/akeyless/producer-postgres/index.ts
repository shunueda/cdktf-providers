// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerPostgresConfig extends cdktf.TerraformMetaArguments {
  /**
  * PostgreSQL Creation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#creation_statements ProducerPostgres#creation_statements}
  */
  readonly creationStatements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#id ProducerPostgres#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#name ProducerPostgres#name}
  */
  readonly name: string;
  /**
  * PostgreSQL DB name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#postgresql_db_name ProducerPostgres#postgresql_db_name}
  */
  readonly postgresqlDbName?: string;
  /**
  * PostgreSQL host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#postgresql_host ProducerPostgres#postgresql_host}
  */
  readonly postgresqlHost?: string;
  /**
  * PostgreSQL password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#postgresql_password ProducerPostgres#postgresql_password}
  */
  readonly postgresqlPassword?: string;
  /**
  * PostgreSQL port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#postgresql_port ProducerPostgres#postgresql_port}
  */
  readonly postgresqlPort?: string;
  /**
  * PostgreSQL user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#postgresql_username ProducerPostgres#postgresql_username}
  */
  readonly postgresqlUsername?: string;
  /**
  * Encrypt producer with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#producer_encryption_key ProducerPostgres#producer_encryption_key}
  */
  readonly producerEncryptionKey?: string;
  /**
  * Path to the SSH Certificate Issuer for your Akeyless Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#secure_access_bastion_issuer ProducerPostgres#secure_access_bastion_issuer}
  */
  readonly secureAccessBastionIssuer?: string;
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#secure_access_db_name ProducerPostgres#secure_access_db_name}
  */
  readonly secureAccessDbName?: string;
  /**
  * The db schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#secure_access_db_schema ProducerPostgres#secure_access_db_schema}
  */
  readonly secureAccessDbSchema?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#secure_access_enable ProducerPostgres#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Target DB servers for connections., For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#secure_access_host ProducerPostgres#secure_access_host}
  */
  readonly secureAccessHost?: string[];
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#secure_access_web ProducerPostgres#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#tags ProducerPostgres#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in producer creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#target_name ProducerPostgres#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#user_ttl ProducerPostgres#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres akeyless_producer_postgres}
*/
export class ProducerPostgres extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_postgres";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerPostgres resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerPostgres to import
  * @param importFromId The id of the existing ProducerPostgres that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerPostgres to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_postgres", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_postgres akeyless_producer_postgres} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerPostgresConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerPostgresConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_postgres',
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
    this._creationStatements = config.creationStatements;
    this._id = config.id;
    this._name = config.name;
    this._postgresqlDbName = config.postgresqlDbName;
    this._postgresqlHost = config.postgresqlHost;
    this._postgresqlPassword = config.postgresqlPassword;
    this._postgresqlPort = config.postgresqlPort;
    this._postgresqlUsername = config.postgresqlUsername;
    this._producerEncryptionKey = config.producerEncryptionKey;
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

  // creation_statements - computed: false, optional: true, required: false
  private _creationStatements?: string; 
  public get creationStatements() {
    return this.getStringAttribute('creation_statements');
  }
  public set creationStatements(value: string) {
    this._creationStatements = value;
  }
  public resetCreationStatements() {
    this._creationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationStatementsInput() {
    return this._creationStatements;
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

  // postgresql_db_name - computed: false, optional: true, required: false
  private _postgresqlDbName?: string; 
  public get postgresqlDbName() {
    return this.getStringAttribute('postgresql_db_name');
  }
  public set postgresqlDbName(value: string) {
    this._postgresqlDbName = value;
  }
  public resetPostgresqlDbName() {
    this._postgresqlDbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlDbNameInput() {
    return this._postgresqlDbName;
  }

  // postgresql_host - computed: false, optional: true, required: false
  private _postgresqlHost?: string; 
  public get postgresqlHost() {
    return this.getStringAttribute('postgresql_host');
  }
  public set postgresqlHost(value: string) {
    this._postgresqlHost = value;
  }
  public resetPostgresqlHost() {
    this._postgresqlHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlHostInput() {
    return this._postgresqlHost;
  }

  // postgresql_password - computed: false, optional: true, required: false
  private _postgresqlPassword?: string; 
  public get postgresqlPassword() {
    return this.getStringAttribute('postgresql_password');
  }
  public set postgresqlPassword(value: string) {
    this._postgresqlPassword = value;
  }
  public resetPostgresqlPassword() {
    this._postgresqlPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlPasswordInput() {
    return this._postgresqlPassword;
  }

  // postgresql_port - computed: false, optional: true, required: false
  private _postgresqlPort?: string; 
  public get postgresqlPort() {
    return this.getStringAttribute('postgresql_port');
  }
  public set postgresqlPort(value: string) {
    this._postgresqlPort = value;
  }
  public resetPostgresqlPort() {
    this._postgresqlPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlPortInput() {
    return this._postgresqlPort;
  }

  // postgresql_username - computed: false, optional: true, required: false
  private _postgresqlUsername?: string; 
  public get postgresqlUsername() {
    return this.getStringAttribute('postgresql_username');
  }
  public set postgresqlUsername(value: string) {
    this._postgresqlUsername = value;
  }
  public resetPostgresqlUsername() {
    this._postgresqlUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlUsernameInput() {
    return this._postgresqlUsername;
  }

  // producer_encryption_key - computed: false, optional: true, required: false
  private _producerEncryptionKey?: string; 
  public get producerEncryptionKey() {
    return this.getStringAttribute('producer_encryption_key');
  }
  public set producerEncryptionKey(value: string) {
    this._producerEncryptionKey = value;
  }
  public resetProducerEncryptionKey() {
    this._producerEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerEncryptionKeyInput() {
    return this._producerEncryptionKey;
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
      creation_statements: cdktf.stringToTerraform(this._creationStatements),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      postgresql_db_name: cdktf.stringToTerraform(this._postgresqlDbName),
      postgresql_host: cdktf.stringToTerraform(this._postgresqlHost),
      postgresql_password: cdktf.stringToTerraform(this._postgresqlPassword),
      postgresql_port: cdktf.stringToTerraform(this._postgresqlPort),
      postgresql_username: cdktf.stringToTerraform(this._postgresqlUsername),
      producer_encryption_key: cdktf.stringToTerraform(this._producerEncryptionKey),
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
      creation_statements: {
        value: cdktf.stringToHclTerraform(this._creationStatements),
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
      postgresql_db_name: {
        value: cdktf.stringToHclTerraform(this._postgresqlDbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgresql_host: {
        value: cdktf.stringToHclTerraform(this._postgresqlHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgresql_password: {
        value: cdktf.stringToHclTerraform(this._postgresqlPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgresql_port: {
        value: cdktf.stringToHclTerraform(this._postgresqlPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgresql_username: {
        value: cdktf.stringToHclTerraform(this._postgresqlUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      producer_encryption_key: {
        value: cdktf.stringToHclTerraform(this._producerEncryptionKey),
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
