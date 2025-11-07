// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DynamicSecretCassandraConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cassandra Creation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#cassandra_creation_statements DynamicSecretCassandra#cassandra_creation_statements}
  */
  readonly cassandraCreationStatements?: string;
  /**
  * Cassandra hosts names or IP addresses, comma separated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#cassandra_hosts DynamicSecretCassandra#cassandra_hosts}
  */
  readonly cassandraHosts?: string;
  /**
  * Cassandra superuser password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#cassandra_password DynamicSecretCassandra#cassandra_password}
  */
  readonly cassandraPassword?: string;
  /**
  * Cassandra port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#cassandra_port DynamicSecretCassandra#cassandra_port}
  */
  readonly cassandraPort?: string;
  /**
  * Cassandra superuser user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#cassandra_username DynamicSecretCassandra#cassandra_username}
  */
  readonly cassandraUsername?: string;
  /**
  * Customize how temporary usernames are generated using go template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#custom_username_template DynamicSecretCassandra#custom_username_template}
  */
  readonly customUsernameTemplate?: string;
  /**
  * Encrypt dynamic secret details with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#encryption_key_name DynamicSecretCassandra#encryption_key_name}
  */
  readonly encryptionKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#id DynamicSecretCassandra#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Dynamic secret name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#name DynamicSecretCassandra#name}
  */
  readonly name: string;
  /**
  * The length of the password to be generated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#password_length DynamicSecretCassandra#password_length}
  */
  readonly passwordLength?: string;
  /**
  * Enable/Disable SSL [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#ssl DynamicSecretCassandra#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * SSL CA certificate in base64 encoding generated from a trusted Certificate Authority (CA)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#ssl_certificate DynamicSecretCassandra#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#tags DynamicSecretCassandra#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in dynamic secret creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#target_name DynamicSecretCassandra#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL (<=60m for access token)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#user_ttl DynamicSecretCassandra#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra akeyless_dynamic_secret_cassandra}
*/
export class DynamicSecretCassandra extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_dynamic_secret_cassandra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DynamicSecretCassandra resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DynamicSecretCassandra to import
  * @param importFromId The id of the existing DynamicSecretCassandra that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DynamicSecretCassandra to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_dynamic_secret_cassandra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/dynamic_secret_cassandra akeyless_dynamic_secret_cassandra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DynamicSecretCassandraConfig
  */
  public constructor(scope: Construct, id: string, config: DynamicSecretCassandraConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_dynamic_secret_cassandra',
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
    this._cassandraCreationStatements = config.cassandraCreationStatements;
    this._cassandraHosts = config.cassandraHosts;
    this._cassandraPassword = config.cassandraPassword;
    this._cassandraPort = config.cassandraPort;
    this._cassandraUsername = config.cassandraUsername;
    this._customUsernameTemplate = config.customUsernameTemplate;
    this._encryptionKeyName = config.encryptionKeyName;
    this._id = config.id;
    this._name = config.name;
    this._passwordLength = config.passwordLength;
    this._ssl = config.ssl;
    this._sslCertificate = config.sslCertificate;
    this._tags = config.tags;
    this._targetName = config.targetName;
    this._userTtl = config.userTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cassandra_creation_statements - computed: false, optional: true, required: false
  private _cassandraCreationStatements?: string; 
  public get cassandraCreationStatements() {
    return this.getStringAttribute('cassandra_creation_statements');
  }
  public set cassandraCreationStatements(value: string) {
    this._cassandraCreationStatements = value;
  }
  public resetCassandraCreationStatements() {
    this._cassandraCreationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraCreationStatementsInput() {
    return this._cassandraCreationStatements;
  }

  // cassandra_hosts - computed: false, optional: true, required: false
  private _cassandraHosts?: string; 
  public get cassandraHosts() {
    return this.getStringAttribute('cassandra_hosts');
  }
  public set cassandraHosts(value: string) {
    this._cassandraHosts = value;
  }
  public resetCassandraHosts() {
    this._cassandraHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraHostsInput() {
    return this._cassandraHosts;
  }

  // cassandra_password - computed: false, optional: true, required: false
  private _cassandraPassword?: string; 
  public get cassandraPassword() {
    return this.getStringAttribute('cassandra_password');
  }
  public set cassandraPassword(value: string) {
    this._cassandraPassword = value;
  }
  public resetCassandraPassword() {
    this._cassandraPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraPasswordInput() {
    return this._cassandraPassword;
  }

  // cassandra_port - computed: false, optional: true, required: false
  private _cassandraPort?: string; 
  public get cassandraPort() {
    return this.getStringAttribute('cassandra_port');
  }
  public set cassandraPort(value: string) {
    this._cassandraPort = value;
  }
  public resetCassandraPort() {
    this._cassandraPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraPortInput() {
    return this._cassandraPort;
  }

  // cassandra_username - computed: false, optional: true, required: false
  private _cassandraUsername?: string; 
  public get cassandraUsername() {
    return this.getStringAttribute('cassandra_username');
  }
  public set cassandraUsername(value: string) {
    this._cassandraUsername = value;
  }
  public resetCassandraUsername() {
    this._cassandraUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraUsernameInput() {
    return this._cassandraUsername;
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
      cassandra_creation_statements: cdktf.stringToTerraform(this._cassandraCreationStatements),
      cassandra_hosts: cdktf.stringToTerraform(this._cassandraHosts),
      cassandra_password: cdktf.stringToTerraform(this._cassandraPassword),
      cassandra_port: cdktf.stringToTerraform(this._cassandraPort),
      cassandra_username: cdktf.stringToTerraform(this._cassandraUsername),
      custom_username_template: cdktf.stringToTerraform(this._customUsernameTemplate),
      encryption_key_name: cdktf.stringToTerraform(this._encryptionKeyName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password_length: cdktf.stringToTerraform(this._passwordLength),
      ssl: cdktf.booleanToTerraform(this._ssl),
      ssl_certificate: cdktf.stringToTerraform(this._sslCertificate),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      target_name: cdktf.stringToTerraform(this._targetName),
      user_ttl: cdktf.stringToTerraform(this._userTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cassandra_creation_statements: {
        value: cdktf.stringToHclTerraform(this._cassandraCreationStatements),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cassandra_hosts: {
        value: cdktf.stringToHclTerraform(this._cassandraHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cassandra_password: {
        value: cdktf.stringToHclTerraform(this._cassandraPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cassandra_port: {
        value: cdktf.stringToHclTerraform(this._cassandraPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cassandra_username: {
        value: cdktf.stringToHclTerraform(this._cassandraUsername),
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
