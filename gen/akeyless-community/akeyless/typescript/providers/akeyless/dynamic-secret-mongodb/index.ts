// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretMongodbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Customize how temporary usernames are generated using go template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#custom_username_template DynamicSecretMongodb#custom_username_template}
  */
  readonly customUsernameTemplate?: string;
  /**
  * Encrypt dynamic secret details with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#encryption_key_name DynamicSecretMongodb#encryption_key_name}
  */
  readonly encryptionKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#id DynamicSecretMongodb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MongoDB Atlas private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#mongodb_atlas_api_private_key DynamicSecretMongodb#mongodb_atlas_api_private_key}
  */
  readonly mongodbAtlasApiPrivateKey?: string;
  /**
  * MongoDB Atlas public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#mongodb_atlas_api_public_key DynamicSecretMongodb#mongodb_atlas_api_public_key}
  */
  readonly mongodbAtlasApiPublicKey?: string;
  /**
  * MongoDB Atlas project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#mongodb_atlas_project_id DynamicSecretMongodb#mongodb_atlas_project_id}
  */
  readonly mongodbAtlasProjectId?: string;
  /**
  * MongoDB server default authentication database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#mongodb_default_auth_db DynamicSecretMongodb#mongodb_default_auth_db}
  */
  readonly mongodbDefaultAuthDb?: string;
  /**
  * host:port (e.g. my.mongo.db:27017)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#mongodb_host_port DynamicSecretMongodb#mongodb_host_port}
  */
  readonly mongodbHostPort?: string;
  /**
  * MongoDB name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#mongodb_name DynamicSecretMongodb#mongodb_name}
  */
  readonly mongodbName?: string;
  /**
  * MongoDB server password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#mongodb_password DynamicSecretMongodb#mongodb_password}
  */
  readonly mongodbPassword?: string;
  /**
  * MongoDB roles (e.g. MongoDB:[{role:readWrite, db: sales}], MongoDB Atlas:[{roleName : readWrite, databaseName: sales}])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#mongodb_roles DynamicSecretMongodb#mongodb_roles}
  */
  readonly mongodbRoles?: string;
  /**
  * MongoDB server URI (e.g. mongodb://user:password@my.mongo.db:27017/admin?replicaSet=mySet)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#mongodb_server_uri DynamicSecretMongodb#mongodb_server_uri}
  */
  readonly mongodbServerUri?: string;
  /**
  * MongoDB server URI options (e.g. replicaSet=mySet&authSource=authDB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#mongodb_uri_options DynamicSecretMongodb#mongodb_uri_options}
  */
  readonly mongodbUriOptions?: string;
  /**
  * MongoDB server username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#mongodb_username DynamicSecretMongodb#mongodb_username}
  */
  readonly mongodbUsername?: string;
  /**
  * Dynamic secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#name DynamicSecretMongodb#name}
  */
  readonly name: string;
  /**
  * The length of the password to be generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#password_length DynamicSecretMongodb#password_length}
  */
  readonly passwordLength?: string;
  /**
  * Path to the SSH Certificate Issuer for your Akeyless Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#secure_access_bastion_issuer DynamicSecretMongodb#secure_access_bastion_issuer}
  */
  readonly secureAccessBastionIssuer?: string;
  /**
  * The DB name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#secure_access_db_name DynamicSecretMongodb#secure_access_db_name}
  */
  readonly secureAccessDbName?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#secure_access_enable DynamicSecretMongodb#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Target DB servers for connections., For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#secure_access_host DynamicSecretMongodb#secure_access_host}
  */
  readonly secureAccessHost?: string[];
  /**
  * Enable Web Secure Remote Access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#secure_access_web DynamicSecretMongodb#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#tags DynamicSecretMongodb#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in dynamic secret creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#target_name DynamicSecretMongodb#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL (e.g. 60s, 60m, 60h)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#user_ttl DynamicSecretMongodb#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb akeyless_dynamic_secret_mongodb}
*/
export class DynamicSecretMongodb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_dynamic_secret_mongodb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretMongodb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretMongodb to import
  * @param importFromId The id of the existing DynamicSecretMongodb that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretMongodb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_dynamic_secret_mongodb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/dynamic_secret_mongodb akeyless_dynamic_secret_mongodb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretMongodbConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretMongodbConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_dynamic_secret_mongodb',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
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
    this._encryptionKeyName = config.encryptionKeyName;
    this._id = config.id;
    this._mongodbAtlasApiPrivateKey = config.mongodbAtlasApiPrivateKey;
    this._mongodbAtlasApiPublicKey = config.mongodbAtlasApiPublicKey;
    this._mongodbAtlasProjectId = config.mongodbAtlasProjectId;
    this._mongodbDefaultAuthDb = config.mongodbDefaultAuthDb;
    this._mongodbHostPort = config.mongodbHostPort;
    this._mongodbName = config.mongodbName;
    this._mongodbPassword = config.mongodbPassword;
    this._mongodbRoles = config.mongodbRoles;
    this._mongodbServerUri = config.mongodbServerUri;
    this._mongodbUriOptions = config.mongodbUriOptions;
    this._mongodbUsername = config.mongodbUsername;
    this._name = config.name;
    this._passwordLength = config.passwordLength;
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

  // mongodb_host_port - computed: false, optional: true, required: false
  private _mongodbHostPort?: string; 
  public get mongodbHostPort() {
    return this.getStringAttribute('mongodb_host_port');
  }
  public set mongodbHostPort(value: string) {
    this._mongodbHostPort = value;
  }
  public resetMongodbHostPort() {
    this._mongodbHostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbHostPortInput() {
    return this._mongodbHostPort;
  }

  // mongodb_name - computed: false, optional: true, required: false
  private _mongodbName?: string; 
  public get mongodbName() {
    return this.getStringAttribute('mongodb_name');
  }
  public set mongodbName(value: string) {
    this._mongodbName = value;
  }
  public resetMongodbName() {
    this._mongodbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbNameInput() {
    return this._mongodbName;
  }

  // mongodb_password - computed: false, optional: true, required: false
  private _mongodbPassword?: string; 
  public get mongodbPassword() {
    return this.getStringAttribute('mongodb_password');
  }
  public set mongodbPassword(value: string) {
    this._mongodbPassword = value;
  }
  public resetMongodbPassword() {
    this._mongodbPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbPasswordInput() {
    return this._mongodbPassword;
  }

  // mongodb_roles - computed: false, optional: true, required: false
  private _mongodbRoles?: string; 
  public get mongodbRoles() {
    return this.getStringAttribute('mongodb_roles');
  }
  public set mongodbRoles(value: string) {
    this._mongodbRoles = value;
  }
  public resetMongodbRoles() {
    this._mongodbRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbRolesInput() {
    return this._mongodbRoles;
  }

  // mongodb_server_uri - computed: false, optional: true, required: false
  private _mongodbServerUri?: string; 
  public get mongodbServerUri() {
    return this.getStringAttribute('mongodb_server_uri');
  }
  public set mongodbServerUri(value: string) {
    this._mongodbServerUri = value;
  }
  public resetMongodbServerUri() {
    this._mongodbServerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbServerUriInput() {
    return this._mongodbServerUri;
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

  // mongodb_username - computed: false, optional: true, required: false
  private _mongodbUsername?: string; 
  public get mongodbUsername() {
    return this.getStringAttribute('mongodb_username');
  }
  public set mongodbUsername(value: string) {
    this._mongodbUsername = value;
  }
  public resetMongodbUsername() {
    this._mongodbUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongodbUsernameInput() {
    return this._mongodbUsername;
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
      encryption_key_name: cdktf.stringToTerraform(this._encryptionKeyName),
      id: cdktf.stringToTerraform(this._id),
      mongodb_atlas_api_private_key: cdktf.stringToTerraform(this._mongodbAtlasApiPrivateKey),
      mongodb_atlas_api_public_key: cdktf.stringToTerraform(this._mongodbAtlasApiPublicKey),
      mongodb_atlas_project_id: cdktf.stringToTerraform(this._mongodbAtlasProjectId),
      mongodb_default_auth_db: cdktf.stringToTerraform(this._mongodbDefaultAuthDb),
      mongodb_host_port: cdktf.stringToTerraform(this._mongodbHostPort),
      mongodb_name: cdktf.stringToTerraform(this._mongodbName),
      mongodb_password: cdktf.stringToTerraform(this._mongodbPassword),
      mongodb_roles: cdktf.stringToTerraform(this._mongodbRoles),
      mongodb_server_uri: cdktf.stringToTerraform(this._mongodbServerUri),
      mongodb_uri_options: cdktf.stringToTerraform(this._mongodbUriOptions),
      mongodb_username: cdktf.stringToTerraform(this._mongodbUsername),
      name: cdktf.stringToTerraform(this._name),
      password_length: cdktf.stringToTerraform(this._passwordLength),
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
      custom_username_template: {
        value: cdktf.stringToHclTerraform(this._customUsernameTemplate),
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
      mongodb_host_port: {
        value: cdktf.stringToHclTerraform(this._mongodbHostPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodb_name: {
        value: cdktf.stringToHclTerraform(this._mongodbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodb_password: {
        value: cdktf.stringToHclTerraform(this._mongodbPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodb_roles: {
        value: cdktf.stringToHclTerraform(this._mongodbRoles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mongodb_server_uri: {
        value: cdktf.stringToHclTerraform(this._mongodbServerUri),
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
      mongodb_username: {
        value: cdktf.stringToHclTerraform(this._mongodbUsername),
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
