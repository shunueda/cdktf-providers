// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TargetDbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#db_name TargetDb#db_name}
  */
  readonly dbName?: string;
  /**
  * Set of root certificate authorities in base64 encoding used by clients to verify server certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#db_server_certificates TargetDb#db_server_certificates}
  */
  readonly dbServerCertificates?: string;
  /**
  * Server name is used to verify the hostname on the returned certificates unless InsecureSkipVerify is provided. It is also included in the client's handshake to support virtual hosting unless it is an IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#db_server_name TargetDb#db_server_name}
  */
  readonly dbServerName?: string;
  /**
  * Database type: mysql/mssql/postgres/mongodb/snowflake/oracle/cassandra/redshift
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#db_type TargetDb#db_type}
  */
  readonly dbType: string;
  /**
  * Description of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#description TargetDb#description}
  */
  readonly description?: string;
  /**
  * Database host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#host TargetDb#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#id TargetDb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key name. The key will be used to encrypt the target secret value. If key name is not specified, the account default protection key is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#key TargetDb#key}
  */
  readonly key?: string;
  /**
  * Flag, set database type to mongodb and the flag to true to create Mongo Atlas target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#mongodb_atlas TargetDb#mongodb_atlas}
  */
  readonly mongodbAtlas?: boolean | cdktf.IResolvable;
  /**
  * MongoDB Atlas private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#mongodb_atlas_api_private_key TargetDb#mongodb_atlas_api_private_key}
  */
  readonly mongodbAtlasApiPrivateKey?: string;
  /**
  * MongoDB Atlas public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#mongodb_atlas_api_public_key TargetDb#mongodb_atlas_api_public_key}
  */
  readonly mongodbAtlasApiPublicKey?: string;
  /**
  * MongoDB Atlas project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#mongodb_atlas_project_id TargetDb#mongodb_atlas_project_id}
  */
  readonly mongodbAtlasProjectId?: string;
  /**
  * MongoDB server default authentication database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#mongodb_default_auth_db TargetDb#mongodb_default_auth_db}
  */
  readonly mongodbDefaultAuthDb?: string;
  /**
  * MongoDB server URI options (e.g. replicaSet=mySet&authSource=authDB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#mongodb_uri_options TargetDb#mongodb_uri_options}
  */
  readonly mongodbUriOptions?: string;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#name TargetDb#name}
  */
  readonly name: string;
  /**
  * oracle db service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#oracle_service_name TargetDb#oracle_service_name}
  */
  readonly oracleServiceName?: string;
  /**
  * Database port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#port TargetDb#port}
  */
  readonly port?: string;
  /**
  * Database password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#pwd TargetDb#pwd}
  */
  readonly pwd?: string;
  /**
  * Snowflake account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#snowflake_account TargetDb#snowflake_account}
  */
  readonly snowflakeAccount?: string;
  /**
  * Enable/Disable SSL [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#ssl TargetDb#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * SSL CA certificate in base64 encoding generated from a trusted Certificate Authority (CA)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#ssl_certificate TargetDb#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Database user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#user_name TargetDb#user_name}
  */
  readonly userName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db akeyless_target_db}
*/
export class TargetDb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_target_db";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TargetDb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TargetDb to import
  * @param importFromId The id of the existing TargetDb that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TargetDb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_target_db", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/target_db akeyless_target_db} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TargetDbConfig
  */
  public constructor(scope: Construct, id: string, config: TargetDbConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_target_db',
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
    this._dbName = config.dbName;
    this._dbServerCertificates = config.dbServerCertificates;
    this._dbServerName = config.dbServerName;
    this._dbType = config.dbType;
    this._description = config.description;
    this._host = config.host;
    this._id = config.id;
    this._key = config.key;
    this._mongodbAtlas = config.mongodbAtlas;
    this._mongodbAtlasApiPrivateKey = config.mongodbAtlasApiPrivateKey;
    this._mongodbAtlasApiPublicKey = config.mongodbAtlasApiPublicKey;
    this._mongodbAtlasProjectId = config.mongodbAtlasProjectId;
    this._mongodbDefaultAuthDb = config.mongodbDefaultAuthDb;
    this._mongodbUriOptions = config.mongodbUriOptions;
    this._name = config.name;
    this._oracleServiceName = config.oracleServiceName;
    this._port = config.port;
    this._pwd = config.pwd;
    this._snowflakeAccount = config.snowflakeAccount;
    this._ssl = config.ssl;
    this._sslCertificate = config.sslCertificate;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
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

  // db_type - computed: false, optional: false, required: true
  private _dbType?: string; 
  public get dbType() {
    return this.getStringAttribute('db_type');
  }
  public set dbType(value: string) {
    this._dbType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbTypeInput() {
    return this._dbType;
  }

  // description - computed: false, optional: true, required: false
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

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // mongodb_atlas - computed: false, optional: true, required: false
  private _mongodbAtlas?: boolean | cdktf.IResolvable; 
  public get mongodbAtlas() {
    return this.getBooleanAttribute('mongodb_atlas');
  }
  public set mongodbAtlas(value: boolean | cdktf.IResolvable) {
    this._mongodbAtlas = value;
  }
  public resetMongodbAtlas() {
    this._mongodbAtlas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbAtlasInput() {
    return this._mongodbAtlas;
  }

  // mongodb_atlas_api_private_key - computed: false, optional: true, required: false
  private _mongodbAtlasApiPrivateKey?: string; 
  public get mongodbAtlasApiPrivateKey() {
    return this.getStringAttribute('mongodb_atlas_api_private_key');
  }
  public set mongodbAtlasApiPrivateKey(value: string) {
    this._mongodbAtlasApiPrivateKey = value;
  }
  public resetMongodbAtlasApiPrivateKey() {
    this._mongodbAtlasApiPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbAtlasApiPrivateKeyInput() {
    return this._mongodbAtlasApiPrivateKey;
  }

  // mongodb_atlas_api_public_key - computed: false, optional: true, required: false
  private _mongodbAtlasApiPublicKey?: string; 
  public get mongodbAtlasApiPublicKey() {
    return this.getStringAttribute('mongodb_atlas_api_public_key');
  }
  public set mongodbAtlasApiPublicKey(value: string) {
    this._mongodbAtlasApiPublicKey = value;
  }
  public resetMongodbAtlasApiPublicKey() {
    this._mongodbAtlasApiPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbAtlasApiPublicKeyInput() {
    return this._mongodbAtlasApiPublicKey;
  }

  // mongodb_atlas_project_id - computed: false, optional: true, required: false
  private _mongodbAtlasProjectId?: string; 
  public get mongodbAtlasProjectId() {
    return this.getStringAttribute('mongodb_atlas_project_id');
  }
  public set mongodbAtlasProjectId(value: string) {
    this._mongodbAtlasProjectId = value;
  }
  public resetMongodbAtlasProjectId() {
    this._mongodbAtlasProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbAtlasProjectIdInput() {
    return this._mongodbAtlasProjectId;
  }

  // mongodb_default_auth_db - computed: false, optional: true, required: false
  private _mongodbDefaultAuthDb?: string; 
  public get mongodbDefaultAuthDb() {
    return this.getStringAttribute('mongodb_default_auth_db');
  }
  public set mongodbDefaultAuthDb(value: string) {
    this._mongodbDefaultAuthDb = value;
  }
  public resetMongodbDefaultAuthDb() {
    this._mongodbDefaultAuthDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbDefaultAuthDbInput() {
    return this._mongodbDefaultAuthDb;
  }

  // mongodb_uri_options - computed: false, optional: true, required: false
  private _mongodbUriOptions?: string; 
  public get mongodbUriOptions() {
    return this.getStringAttribute('mongodb_uri_options');
  }
  public set mongodbUriOptions(value: string) {
    this._mongodbUriOptions = value;
  }
  public resetMongodbUriOptions() {
    this._mongodbUriOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbUriOptionsInput() {
    return this._mongodbUriOptions;
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

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // pwd - computed: false, optional: true, required: false
  private _pwd?: string; 
  public get pwd() {
    return this.getStringAttribute('pwd');
  }
  public set pwd(value: string) {
    this._pwd = value;
  }
  public resetPwd() {
    this._pwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdInput() {
    return this._pwd;
  }

  // snowflake_account - computed: false, optional: true, required: false
  private _snowflakeAccount?: string; 
  public get snowflakeAccount() {
    return this.getStringAttribute('snowflake_account');
  }
  public set snowflakeAccount(value: string) {
    this._snowflakeAccount = value;
  }
  public resetSnowflakeAccount() {
    this._snowflakeAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeAccountInput() {
    return this._snowflakeAccount;
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

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      db_name: cdktf.stringToTerraform(this._dbName),
      db_server_certificates: cdktf.stringToTerraform(this._dbServerCertificates),
      db_server_name: cdktf.stringToTerraform(this._dbServerName),
      db_type: cdktf.stringToTerraform(this._dbType),
      description: cdktf.stringToTerraform(this._description),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      mongodb_atlas: cdktf.booleanToTerraform(this._mongodbAtlas),
      mongodb_atlas_api_private_key: cdktf.stringToTerraform(this._mongodbAtlasApiPrivateKey),
      mongodb_atlas_api_public_key: cdktf.stringToTerraform(this._mongodbAtlasApiPublicKey),
      mongodb_atlas_project_id: cdktf.stringToTerraform(this._mongodbAtlasProjectId),
      mongodb_default_auth_db: cdktf.stringToTerraform(this._mongodbDefaultAuthDb),
      mongodb_uri_options: cdktf.stringToTerraform(this._mongodbUriOptions),
      name: cdktf.stringToTerraform(this._name),
      oracle_service_name: cdktf.stringToTerraform(this._oracleServiceName),
      port: cdktf.stringToTerraform(this._port),
      pwd: cdktf.stringToTerraform(this._pwd),
      snowflake_account: cdktf.stringToTerraform(this._snowflakeAccount),
      ssl: cdktf.booleanToTerraform(this._ssl),
      ssl_certificate: cdktf.stringToTerraform(this._sslCertificate),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
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
      db_type: {
        value: cdktf.stringToHclTerraform(this._dbType),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodb_atlas: {
        value: cdktf.booleanToHclTerraform(this._mongodbAtlas),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mongodb_atlas_api_private_key: {
        value: cdktf.stringToHclTerraform(this._mongodbAtlasApiPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodb_atlas_api_public_key: {
        value: cdktf.stringToHclTerraform(this._mongodbAtlasApiPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodb_atlas_project_id: {
        value: cdktf.stringToHclTerraform(this._mongodbAtlasProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodb_default_auth_db: {
        value: cdktf.stringToHclTerraform(this._mongodbDefaultAuthDb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodb_uri_options: {
        value: cdktf.stringToHclTerraform(this._mongodbUriOptions),
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
      oracle_service_name: {
        value: cdktf.stringToHclTerraform(this._oracleServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwd: {
        value: cdktf.stringToHclTerraform(this._pwd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snowflake_account: {
        value: cdktf.stringToHclTerraform(this._snowflakeAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
