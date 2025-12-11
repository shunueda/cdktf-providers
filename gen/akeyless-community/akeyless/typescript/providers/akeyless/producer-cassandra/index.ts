// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProducerCassandraConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cassandra Creation Statements
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#cassandra_creation_statements ProducerCassandra#cassandra_creation_statements}
  */
  readonly cassandraCreationStatements?: string;
  /**
  * Cassandra hosts names or IP addresses, comma separated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#cassandra_hosts ProducerCassandra#cassandra_hosts}
  */
  readonly cassandraHosts?: string;
  /**
  * Cassandra superuser password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#cassandra_password ProducerCassandra#cassandra_password}
  */
  readonly cassandraPassword?: string;
  /**
  * Cassandra port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#cassandra_port ProducerCassandra#cassandra_port}
  */
  readonly cassandraPort?: string;
  /**
  * Cassandra superuser user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#cassandra_username ProducerCassandra#cassandra_username}
  */
  readonly cassandraUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#id ProducerCassandra#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Producer name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#name ProducerCassandra#name}
  */
  readonly name: string;
  /**
  * Dynamic producer encryption key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#producer_encryption_key_name ProducerCassandra#producer_encryption_key_name}
  */
  readonly producerEncryptionKeyName?: string;
  /**
  * List of the tags attached to this secret. To specify multiple tags use argument multiple times: -t Tag1 -t Tag2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#tags ProducerCassandra#tags}
  */
  readonly tags?: string[];
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#target_name ProducerCassandra#target_name}
  */
  readonly targetName?: string;
  /**
  * User TTL (<=60m for access token)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#user_ttl ProducerCassandra#user_ttl}
  */
  readonly userTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra akeyless_producer_cassandra}
*/
export class ProducerCassandra extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_producer_cassandra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProducerCassandra resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProducerCassandra to import
  * @param importFromId The id of the existing ProducerCassandra that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProducerCassandra to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_producer_cassandra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/producer_cassandra akeyless_producer_cassandra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProducerCassandraConfig
  */
  public constructor(scope: Construct, id: string, config: ProducerCassandraConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_producer_cassandra',
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
    this._cassandraCreationStatements = config.cassandraCreationStatements;
    this._cassandraHosts = config.cassandraHosts;
    this._cassandraPassword = config.cassandraPassword;
    this._cassandraPort = config.cassandraPort;
    this._cassandraUsername = config.cassandraUsername;
    this._id = config.id;
    this._name = config.name;
    this._producerEncryptionKeyName = config.producerEncryptionKeyName;
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
      cassandra_creation_statements: cdktf.stringToTerraform(this._cassandraCreationStatements),
      cassandra_hosts: cdktf.stringToTerraform(this._cassandraHosts),
      cassandra_password: cdktf.stringToTerraform(this._cassandraPassword),
      cassandra_port: cdktf.stringToTerraform(this._cassandraPort),
      cassandra_username: cdktf.stringToTerraform(this._cassandraUsername),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      producer_encryption_key_name: cdktf.stringToTerraform(this._producerEncryptionKeyName),
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
