// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretPostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * PostgreSQL Creation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#creation_statements DynamicSecretPostgresql#creation_statements}
  */
  readonly creationStatements?: string;
  /**
  * Customize how temporary usernames are generated using go template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#custom_username_template DynamicSecretPostgresql#custom_username_template}
  */
  readonly customUsernameTemplate?: string;
  /**
  * Encrypt dynamic secret details with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#encryption_key_name DynamicSecretPostgresql#encryption_key_name}
  */
  readonly encryptionKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#id DynamicSecretPostgresql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Dynamic secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#name DynamicSecretPostgresql#name}
  */
  readonly name: string;
  /**
  * The length of the password to be generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#password_length DynamicSecretPostgresql#password_length}
  */
  readonly passwordLength?: string;
  /**
  * PostgreSQL DB name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#postgresql_db_name DynamicSecretPostgresql#postgresql_db_name}
  */
  readonly postgresqlDbName?: string;
  /**
  * PostgreSQL host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#postgresql_host DynamicSecretPostgresql#postgresql_host}
  */
  readonly postgresqlHost?: string;
  /**
  * PostgreSQL password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#postgresql_password DynamicSecretPostgresql#postgresql_password}
  */
  readonly postgresqlPassword?: string;
  /**
  * PostgreSQL port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#postgresql_port DynamicSecretPostgresql#postgresql_port}
  */
  readonly postgresqlPort?: string;
  /**
  * PostgreSQL user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#postgresql_username DynamicSecretPostgresql#postgresql_username}
  */
  readonly postgresqlUsername?: string;
  /**
  * PostgreSQL Revocation Statement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#revocation_statements DynamicSecretPostgresql#revocation_statements}
  */
  readonly revocationStatements?: string;
  /**
  * Path to the SSH Certificate Issuer for your Akeyless Bastion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#secure_access_bastion_issuer DynamicSecretPostgresql#secure_access_bastion_issuer}
  */
  readonly secureAccessBastionIssuer?: string;
  /**
  * The DB Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#secure_access_db_name DynamicSecretPostgresql#secure_access_db_name}
  */
  readonly secureAccessDbName?: string;
  /**
  * The db schema
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#secure_access_db_schema DynamicSecretPostgresql#secure_access_db_schema}
  */
  readonly secureAccessDbSchema?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#secure_access_enable DynamicSecretPostgresql#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Target DB servers for connections., For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#secure_access_host DynamicSecretPostgresql#secure_access_host}
  */
  readonly secureAccessHost?: string[];
  /**
  * Enable Web Secure Remote Access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#secure_access_web DynamicSecretPostgresql#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable SSL [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#ssl DynamicSecretPostgresql#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#tags DynamicSecretPostgresql#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in dynamic secret creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#target_name DynamicSecretPostgresql#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#user_ttl DynamicSecretPostgresql#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql akeyless_dynamic_secret_postgresql}
*/
export class DynamicSecretPostgresql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_dynamic_secret_postgresql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretPostgresql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretPostgresql to import
  * @param importFromId The id of the existing DynamicSecretPostgresql that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretPostgresql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_dynamic_secret_postgresql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_postgresql akeyless_dynamic_secret_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretPostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretPostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_dynamic_secret_postgresql',
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
    this._creationStatements = config.creationStatements;
    this._customUsernameTemplate = config.customUsernameTemplate;
    this._encryptionKeyName = config.encryptionKeyName;
    this._id = config.id;
    this._name = config.name;
    this._passwordLength = config.passwordLength;
    this._postgresqlDbName = config.postgresqlDbName;
    this._postgresqlHost = config.postgresqlHost;
    this._postgresqlPassword = config.postgresqlPassword;
    this._postgresqlPort = config.postgresqlPort;
    this._postgresqlUsername = config.postgresqlUsername;
    this._revocationStatements = config.revocationStatements;
    this._secureAccessBastionIssuer = config.secureAccessBastionIssuer;
    this._secureAccessDbName = config.secureAccessDbName;
    this._secureAccessDbSchema = config.secureAccessDbSchema;
    this._secureAccessEnable = config.secureAccessEnable;
    this._secureAccessHost = config.secureAccessHost;
    this._secureAccessWeb = config.secureAccessWeb;
    this._ssl = config.ssl;
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

  // revocation_statements - computed: false, optional: true, required: false
  private _revocationStatements?: string; 
  public get revocationStatements() {
    return this.getStringAttribute('revocation_statements');
  }
  public set revocationStatements(value: string) {
    this._revocationStatements = value;
  }
  public resetRevocationStatements() {
    this._revocationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revocationStatementsInput() {
    return this._revocationStatements;
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
      custom_username_template: cdktf.stringToTerraform(this._customUsernameTemplate),
      encryption_key_name: cdktf.stringToTerraform(this._encryptionKeyName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password_length: cdktf.stringToTerraform(this._passwordLength),
      postgresql_db_name: cdktf.stringToTerraform(this._postgresqlDbName),
      postgresql_host: cdktf.stringToTerraform(this._postgresqlHost),
      postgresql_password: cdktf.stringToTerraform(this._postgresqlPassword),
      postgresql_port: cdktf.stringToTerraform(this._postgresqlPort),
      postgresql_username: cdktf.stringToTerraform(this._postgresqlUsername),
      revocation_statements: cdktf.stringToTerraform(this._revocationStatements),
      secure_access_bastion_issuer: cdktf.stringToTerraform(this._secureAccessBastionIssuer),
      secure_access_db_name: cdktf.stringToTerraform(this._secureAccessDbName),
      secure_access_db_schema: cdktf.stringToTerraform(this._secureAccessDbSchema),
      secure_access_enable: cdktf.stringToTerraform(this._secureAccessEnable),
      secure_access_host: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secureAccessHost),
      secure_access_web: cdktf.booleanToTerraform(this._secureAccessWeb),
      ssl: cdktf.booleanToTerraform(this._ssl),
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
      revocation_statements: {
        value: cdktf.stringToHclTerraform(this._revocationStatements),
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
      ssl: {
        value: cdktf.booleanToHclTerraform(this._ssl),
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
