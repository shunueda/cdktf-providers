// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerOracleConfig extends cdktf.TerraformMetaArguments {
  /**
  * the set of root certificate authorities in base64 encoding that clients use when verifying server certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#db_server_certificates ProducerOracle#db_server_certificates}
  */
  readonly dbServerCertificates?: string;
  /**
  * Server name is used to verify the hostname on the returned certificates unless InsecureSkipVerify is given. It is also included in the client's handshake to support virtual hosting unless it is an IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#db_server_name ProducerOracle#db_server_name}
  */
  readonly dbServerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#id ProducerOracle#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#name ProducerOracle#name}
  */
  readonly name: string;
  /**
  * Oracle host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#oracle_host ProducerOracle#oracle_host}
  */
  readonly oracleHost?: string;
  /**
  * Oracle password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#oracle_password ProducerOracle#oracle_password}
  */
  readonly oraclePassword?: string;
  /**
  * Oracle port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#oracle_port ProducerOracle#oracle_port}
  */
  readonly oraclePort?: string;
  /**
  * Oracle Creation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#oracle_screation_statements ProducerOracle#oracle_screation_statements}
  */
  readonly oracleScreationStatements?: string;
  /**
  * Oracle service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#oracle_service_name ProducerOracle#oracle_service_name}
  */
  readonly oracleServiceName?: string;
  /**
  * Oracle user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#oracle_username ProducerOracle#oracle_username}
  */
  readonly oracleUsername?: string;
  /**
  * Encrypt producer with following key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#producer_encryption_key_name ProducerOracle#producer_encryption_key_name}
  */
  readonly producerEncryptionKeyName?: string;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#tags ProducerOracle#tags}
  */
  readonly tags?: string[];
  /**
  * Name of existing target to use in producer creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#target_name ProducerOracle#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#user_ttl ProducerOracle#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle akeyless_producer_oracle}
*/
export class ProducerOracle extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_oracle";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerOracle resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerOracle to import
  * @param importFromId The id of the existing ProducerOracle that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerOracle to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_oracle", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/producer_oracle akeyless_producer_oracle} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerOracleConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerOracleConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_oracle',
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
    this._dbServerCertificates = config.dbServerCertificates;
    this._dbServerName = config.dbServerName;
    this._id = config.id;
    this._name = config.name;
    this._oracleHost = config.oracleHost;
    this._oraclePassword = config.oraclePassword;
    this._oraclePort = config.oraclePort;
    this._oracleScreationStatements = config.oracleScreationStatements;
    this._oracleServiceName = config.oracleServiceName;
    this._oracleUsername = config.oracleUsername;
    this._producerEncryptionKeyName = config.producerEncryptionKeyName;
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

  // oracle_screation_statements - computed: false, optional: true, required: false
  private _oracleScreationStatements?: string; 
  public get oracleScreationStatements() {
    return this.getStringAttribute('oracle_screation_statements');
  }
  public set oracleScreationStatements(value: string) {
    this._oracleScreationStatements = value;
  }
  public resetOracleScreationStatements() {
    this._oracleScreationStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleScreationStatementsInput() {
    return this._oracleScreationStatements;
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
      name: cdktf.stringToTerraform(this._name),
      oracle_host: cdktf.stringToTerraform(this._oracleHost),
      oracle_password: cdktf.stringToTerraform(this._oraclePassword),
      oracle_port: cdktf.stringToTerraform(this._oraclePort),
      oracle_screation_statements: cdktf.stringToTerraform(this._oracleScreationStatements),
      oracle_service_name: cdktf.stringToTerraform(this._oracleServiceName),
      oracle_username: cdktf.stringToTerraform(this._oracleUsername),
      producer_encryption_key_name: cdktf.stringToTerraform(this._producerEncryptionKeyName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      oracle_screation_statements: {
        value: cdktf.stringToHclTerraform(this._oracleScreationStatements),
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
      producer_encryption_key_name: {
        value: cdktf.stringToHclTerraform(this._producerEncryptionKeyName),
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
