// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInstaclustrKafkaUserV2InstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication mechanisms supported for KafkaClusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance#auth_mechanism DataInstaclustrKafkaUserV2Instance#auth_mechanism}
  */
  readonly authMechanism?: string;
  /**
  * ID of the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance#cluster_id DataInstaclustrKafkaUserV2Instance#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance#id DataInstaclustrKafkaUserV2Instance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Permissions initially granted to Kafka user upon creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance#initial_permissions DataInstaclustrKafkaUserV2Instance#initial_permissions}
  */
  readonly initialPermissions?: string;
  /**
  * Password for the Kafka user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance#password DataInstaclustrKafkaUserV2Instance#password}
  */
  readonly password?: string;
  /**
  * Username of the Kafka user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance#username DataInstaclustrKafkaUserV2Instance#username}
  */
  readonly username?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance#options DataInstaclustrKafkaUserV2Instance#options}
  */
  readonly options?: DataInstaclustrKafkaUserV2InstanceOptions;
}
export interface DataInstaclustrKafkaUserV2InstanceOptions {
  /**
  * Overwrite user if already exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance#override_existing_user DataInstaclustrKafkaUserV2Instance#override_existing_user}
  */
  readonly overrideExistingUser?: boolean | cdktf.IResolvable;
  /**
  * Scram Mechanism for SASL authentication. Valid values: SCRAM-SHA-256, SCRAM-SHA-512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance#sasl_scram_mechanism DataInstaclustrKafkaUserV2Instance#sasl_scram_mechanism}
  */
  readonly saslScramMechanism?: string;
}

export function dataInstaclustrKafkaUserV2InstanceOptionsToTerraform(struct?: DataInstaclustrKafkaUserV2InstanceOptionsOutputReference | DataInstaclustrKafkaUserV2InstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_existing_user: cdktf.booleanToTerraform(struct!.overrideExistingUser),
    sasl_scram_mechanism: cdktf.stringToTerraform(struct!.saslScramMechanism),
  }
}


export function dataInstaclustrKafkaUserV2InstanceOptionsToHclTerraform(struct?: DataInstaclustrKafkaUserV2InstanceOptionsOutputReference | DataInstaclustrKafkaUserV2InstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    override_existing_user: {
      value: cdktf.booleanToHclTerraform(struct!.overrideExistingUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sasl_scram_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.saslScramMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInstaclustrKafkaUserV2InstanceOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInstaclustrKafkaUserV2InstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overrideExistingUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideExistingUser = this._overrideExistingUser;
    }
    if (this._saslScramMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.saslScramMechanism = this._saslScramMechanism;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInstaclustrKafkaUserV2InstanceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overrideExistingUser = undefined;
      this._saslScramMechanism = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overrideExistingUser = value.overrideExistingUser;
      this._saslScramMechanism = value.saslScramMechanism;
    }
  }

  // override_existing_user - computed: true, optional: true, required: false
  private _overrideExistingUser?: boolean | cdktf.IResolvable; 
  public get overrideExistingUser() {
    return this.getBooleanAttribute('override_existing_user');
  }
  public set overrideExistingUser(value: boolean | cdktf.IResolvable) {
    this._overrideExistingUser = value;
  }
  public resetOverrideExistingUser() {
    this._overrideExistingUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideExistingUserInput() {
    return this._overrideExistingUser;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance instaclustr_kafka_user_v2_instance}
*/
export class DataInstaclustrKafkaUserV2Instance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_user_v2_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInstaclustrKafkaUserV2Instance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInstaclustrKafkaUserV2Instance to import
  * @param importFromId The id of the existing DataInstaclustrKafkaUserV2Instance that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInstaclustrKafkaUserV2Instance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_user_v2_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.28/docs/data-sources/kafka_user_v2_instance instaclustr_kafka_user_v2_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInstaclustrKafkaUserV2InstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataInstaclustrKafkaUserV2InstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_user_v2_instance',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.28',
        providerVersionConstraint: '2.1.28'
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
    this._id = config.id;
    this._initialPermissions = config.initialPermissions;
    this._password = config.password;
    this._username = config.username;
    this._options.internalValue = config.options;
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

  // initial_permissions - computed: true, optional: true, required: false
  private _initialPermissions?: string; 
  public get initialPermissions() {
    return this.getStringAttribute('initial_permissions');
  }
  public set initialPermissions(value: string) {
    this._initialPermissions = value;
  }
  public resetInitialPermissions() {
    this._initialPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPermissionsInput() {
    return this._initialPermissions;
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

  // options - computed: false, optional: true, required: false
  private _options = new DataInstaclustrKafkaUserV2InstanceOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: DataInstaclustrKafkaUserV2InstanceOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_mechanism: cdktf.stringToTerraform(this._authMechanism),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      initial_permissions: cdktf.stringToTerraform(this._initialPermissions),
      password: cdktf.stringToTerraform(this._password),
      username: cdktf.stringToTerraform(this._username),
      options: dataInstaclustrKafkaUserV2InstanceOptionsToTerraform(this._options.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_permissions: {
        value: cdktf.stringToHclTerraform(this._initialPermissions),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: dataInstaclustrKafkaUserV2InstanceOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataInstaclustrKafkaUserV2InstanceOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
