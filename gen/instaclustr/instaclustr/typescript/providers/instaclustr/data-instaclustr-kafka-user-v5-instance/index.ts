// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_user_v5_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrKafkaUserV5InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication mechanisms supported for KafkaClusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_user_v5_instance#auth_mechanism DataInstaclustrKafkaUserV5Instance#auth_mechanism}
  */
  readonly authMechanism?: string;
  /**
  * ID of the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_user_v5_instance#cluster_id DataInstaclustrKafkaUserV5Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Indicates if the cluster is currently performing any operation such as being created, updated, or deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_user_v5_instance#current_operation_status DataInstaclustrKafkaUserV5Instance#current_operation_status}
  */
  readonly currentOperationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_user_v5_instance#id DataInstaclustrKafkaUserV5Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Password for the Kafka user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_user_v5_instance#password DataInstaclustrKafkaUserV5Instance#password}
  */
  readonly password?: string;
  /**
  * Scram Mechanism for SASL authentication. Valid values: SCRAM-SHA-256, SCRAM-SHA-512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_user_v5_instance#sasl_scram_mechanism DataInstaclustrKafkaUserV5Instance#sasl_scram_mechanism}
  */
  readonly saslScramMechanism?: string;
  /**
  * Username of the Kafka user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_user_v5_instance#username DataInstaclustrKafkaUserV5Instance#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_user_v5_instance instaclustr_kafka_user_v5_instance}
*/
export class DataInstaclustrKafkaUserV5Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_user_v5_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrKafkaUserV5Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrKafkaUserV5Instance to import
  * @param importFromId The id of the existing DataInstaclustrKafkaUserV5Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_user_v5_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrKafkaUserV5Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_user_v5_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.37/docs/data-sources/kafka_user_v5_instance instaclustr_kafka_user_v5_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrKafkaUserV5InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrKafkaUserV5InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_user_v5_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.37',
        providerVersionConstraint: '2.1.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authMechanism = config.authMechanism;
    this._clusterId = config.clusterId;
    this._currentOperationStatus = config.currentOperationStatus;
    this._id = config.id;
    this._password = config.password;
    this._saslScramMechanism = config.saslScramMechanism;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_mechanism - computed: true, optional: true, required: false
  private _authMechanism?: string; 
  public get authMechanism() {
    return this.getStringAttribute('auth_mechanism');
  }
  public set authMechanism(value: string) {
    this._authMechanism = value;
  }
  public resetAuthMechanism() {
    this._authMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMechanismInput() {
    return this._authMechanism;
  }

  // cluster_id - computed: true, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // current_operation_status - computed: true, optional: true, required: false
  private _currentOperationStatus?: string; 
  public get currentOperationStatus() {
    return this.getStringAttribute('current_operation_status');
  }
  public set currentOperationStatus(value: string) {
    this._currentOperationStatus = value;
  }
  public resetCurrentOperationStatus() {
    this._currentOperationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentOperationStatusInput() {
    return this._currentOperationStatus;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // sasl_scram_mechanism - computed: true, optional: true, required: false
  private _saslScramMechanism?: string; 
  public get saslScramMechanism() {
    return this.getStringAttribute('sasl_scram_mechanism');
  }
  public set saslScramMechanism(value: string) {
    this._saslScramMechanism = value;
  }
  public resetSaslScramMechanism() {
    this._saslScramMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslScramMechanismInput() {
    return this._saslScramMechanism;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_mechanism: cdktf.stringToTerraform(this._authMechanism),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      current_operation_status: cdktf.stringToTerraform(this._currentOperationStatus),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      sasl_scram_mechanism: cdktf.stringToTerraform(this._saslScramMechanism),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_mechanism: {
        value: cdktf.stringToHclTerraform(this._authMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      current_operation_status: {
        value: cdktf.stringToHclTerraform(this._currentOperationStatus),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sasl_scram_mechanism: {
        value: cdktf.stringToHclTerraform(this._saslScramMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
