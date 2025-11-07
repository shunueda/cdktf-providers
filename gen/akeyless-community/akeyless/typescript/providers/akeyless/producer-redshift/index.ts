// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerRedshiftConfig extends cdktf.TerraformMetaArguments {
  /**
  * Redshift Creation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#creation_statements ProducerRedshift#creation_statements}
  */
  readonly creationStatements?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#id ProducerRedshift#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#name ProducerRedshift#name}
  */
  readonly name: string;
  /**
  * Encrypt producer with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#producer_encryption_key ProducerRedshift#producer_encryption_key}
  */
  readonly producerEncryptionKey?: string;
  /**
  * Redshift DB name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#redshift_db_name ProducerRedshift#redshift_db_name}
  */
  readonly redshiftDbName?: string;
  /**
  * Redshift host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#redshift_host ProducerRedshift#redshift_host}
  */
  readonly redshiftHost?: string;
  /**
  * Redshift password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#redshift_password ProducerRedshift#redshift_password}
  */
  readonly redshiftPassword?: string;
  /**
  * Redshift port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#redshift_port ProducerRedshift#redshift_port}
  */
  readonly redshiftPort?: string;
  /**
  * redshiftL user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#redshift_username ProducerRedshift#redshift_username}
  */
  readonly redshiftUsername?: string;
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#secure_access_db_name ProducerRedshift#secure_access_db_name}
  */
  readonly secureAccessDbName?: string;
  /**
  * Enable/Disable secure remote access, [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#secure_access_enable ProducerRedshift#secure_access_enable}
  */
  readonly secureAccessEnable?: string;
  /**
  * Target DB servers for connections., For multiple values repeat this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#secure_access_host ProducerRedshift#secure_access_host}
  */
  readonly secureAccessHost?: string[];
  /**
  * Enable Web Secure Remote Access 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#secure_access_web ProducerRedshift#secure_access_web}
  */
  readonly secureAccessWeb?: boolean | cdktf.IResolvable;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#tags ProducerRedshift#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in producer creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#target_name ProducerRedshift#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#user_ttl ProducerRedshift#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift akeyless_producer_redshift}
*/
export class ProducerRedshift extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_redshift";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerRedshift resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerRedshift to import
  * @param importFromId The id of the existing ProducerRedshift that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerRedshift to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_redshift", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_redshift akeyless_producer_redshift} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerRedshiftConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerRedshiftConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_redshift',
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
    this._producerEncryptionKey = config.producerEncryptionKey;
    this._redshiftDbName = config.redshiftDbName;
    this._redshiftHost = config.redshiftHost;
    this._redshiftPassword = config.redshiftPassword;
    this._redshiftPort = config.redshiftPort;
    this._redshiftUsername = config.redshiftUsername;
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

  // redshift_db_name - computed: false, optional: true, required: false
  private _redshiftDbName?: string; 
  public get redshiftDbName() {
    return this.getStringAttribute('redshift_db_name');
  }
  public set redshiftDbName(value: string) {
    this._redshiftDbName = value;
  }
  public resetRedshiftDbName() {
    this._redshiftDbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftDbNameInput() {
    return this._redshiftDbName;
  }

  // redshift_host - computed: false, optional: true, required: false
  private _redshiftHost?: string; 
  public get redshiftHost() {
    return this.getStringAttribute('redshift_host');
  }
  public set redshiftHost(value: string) {
    this._redshiftHost = value;
  }
  public resetRedshiftHost() {
    this._redshiftHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftHostInput() {
    return this._redshiftHost;
  }

  // redshift_password - computed: false, optional: true, required: false
  private _redshiftPassword?: string; 
  public get redshiftPassword() {
    return this.getStringAttribute('redshift_password');
  }
  public set redshiftPassword(value: string) {
    this._redshiftPassword = value;
  }
  public resetRedshiftPassword() {
    this._redshiftPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftPasswordInput() {
    return this._redshiftPassword;
  }

  // redshift_port - computed: false, optional: true, required: false
  private _redshiftPort?: string; 
  public get redshiftPort() {
    return this.getStringAttribute('redshift_port');
  }
  public set redshiftPort(value: string) {
    this._redshiftPort = value;
  }
  public resetRedshiftPort() {
    this._redshiftPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftPortInput() {
    return this._redshiftPort;
  }

  // redshift_username - computed: false, optional: true, required: false
  private _redshiftUsername?: string; 
  public get redshiftUsername() {
    return this.getStringAttribute('redshift_username');
  }
  public set redshiftUsername(value: string) {
    this._redshiftUsername = value;
  }
  public resetRedshiftUsername() {
    this._redshiftUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redshiftUsernameInput() {
    return this._redshiftUsername;
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

  // secure_access_web - computed: true, optional: true, required: false
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
      producer_encryption_key: cdktf.stringToTerraform(this._producerEncryptionKey),
      redshift_db_name: cdktf.stringToTerraform(this._redshiftDbName),
      redshift_host: cdktf.stringToTerraform(this._redshiftHost),
      redshift_password: cdktf.stringToTerraform(this._redshiftPassword),
      redshift_port: cdktf.stringToTerraform(this._redshiftPort),
      redshift_username: cdktf.stringToTerraform(this._redshiftUsername),
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
      producer_encryption_key: {
        value: cdktf.stringToHclTerraform(this._producerEncryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redshift_db_name: {
        value: cdktf.stringToHclTerraform(this._redshiftDbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redshift_host: {
        value: cdktf.stringToHclTerraform(this._redshiftHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redshift_password: {
        value: cdktf.stringToHclTerraform(this._redshiftPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redshift_port: {
        value: cdktf.stringToHclTerraform(this._redshiftPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redshift_username: {
        value: cdktf.stringToHclTerraform(this._redshiftUsername),
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
