// https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KafkaUserV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Authentication mechanisms supported for KafkaClusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#auth_mechanism KafkaUserV2#auth_mechanism}
  */
  readonly authMechanism?: string;
  /**
  * ID of the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#cluster_id KafkaUserV2#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#id KafkaUserV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Permissions initially granted to Kafka user upon creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#initial_permissions KafkaUserV2#initial_permissions}
  */
  readonly initialPermissions: string;
  /**
  * Password for the Kafka user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#password KafkaUserV2#password}
  */
  readonly password: string;
  /**
  * Username of the Kafka user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#username KafkaUserV2#username}
  */
  readonly username: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#options KafkaUserV2#options}
  */
  readonly options: KafkaUserV2Options;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#timeouts KafkaUserV2#timeouts}
  */
  readonly timeouts?: KafkaUserV2Timeouts;
}
export interface KafkaUserV2Options {
  /**
  * Overwrite user if already exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#override_existing_user KafkaUserV2#override_existing_user}
  */
  readonly overrideExistingUser?: boolean | cdktf.IResolvable;
  /**
  * Scram Mechanism for SASL authentication. Valid values: SCRAM-SHA-256, SCRAM-SHA-512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#sasl_scram_mechanism KafkaUserV2#sasl_scram_mechanism}
  */
  readonly saslScramMechanism: string;
}

export function kafkaUserV2OptionsToTerraform(struct?: KafkaUserV2OptionsOutputReference | KafkaUserV2Options): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    override_existing_user: cdktf.booleanToTerraform(struct!.overrideExistingUser),
    sasl_scram_mechanism: cdktf.stringToTerraform(struct!.saslScramMechanism),
  }
}


export function kafkaUserV2OptionsToHclTerraform(struct?: KafkaUserV2OptionsOutputReference | KafkaUserV2Options): any {
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

export class KafkaUserV2OptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KafkaUserV2Options | undefined {
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

  public set internalValue(value: KafkaUserV2Options | undefined) {
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

  // override_existing_user - computed: false, optional: true, required: false
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

  // sasl_scram_mechanism - computed: false, optional: false, required: true
  private _saslScramMechanism?: string; 
  public get saslScramMechanism() {
    return this.getStringAttribute('sasl_scram_mechanism');
  }
  public set saslScramMechanism(value: string) {
    this._saslScramMechanism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saslScramMechanismInput() {
    return this._saslScramMechanism;
  }
}
export interface KafkaUserV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#default KafkaUserV2#default}
  */
  readonly default?: string;
}

export function kafkaUserV2TimeoutsToTerraform(struct?: KafkaUserV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function kafkaUserV2TimeoutsToHclTerraform(struct?: KafkaUserV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KafkaUserV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KafkaUserV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KafkaUserV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2 instaclustr_kafka_user_v2}
*/
export class KafkaUserV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "instaclustr_kafka_user_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KafkaUserV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KafkaUserV2 to import
  * @param importFromId The id of the existing KafkaUserV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KafkaUserV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "instaclustr_kafka_user_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/instaclustr/instaclustr/2.1.39/docs/resources/kafka_user_v2 instaclustr_kafka_user_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KafkaUserV2Config
  */
  public constructor(scope: Construct, id: string, config: KafkaUserV2Config) {
    super(scope, id, {
      terraformResourceType: 'instaclustr_kafka_user_v2',
      terraformGeneratorMetadata: {
        providerName: 'instaclustr',
        providerVersion: '2.1.39',
        providerVersionConstraint: '2.1.39'
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_mechanism - computed: false, optional: true, required: false
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

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // initial_permissions - computed: false, optional: false, required: true
  private _initialPermissions?: string; 
  public get initialPermissions() {
    return this.getStringAttribute('initial_permissions');
  }
  public set initialPermissions(value: string) {
    this._initialPermissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialPermissionsInput() {
    return this._initialPermissions;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // options - computed: false, optional: false, required: true
  private _options = new KafkaUserV2OptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: KafkaUserV2Options) {
    this._options.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KafkaUserV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KafkaUserV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      options: kafkaUserV2OptionsToTerraform(this._options.internalValue),
      timeouts: kafkaUserV2TimeoutsToTerraform(this._timeouts.internalValue),
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
        value: kafkaUserV2OptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KafkaUserV2OptionsList",
      },
      timeouts: {
        value: kafkaUserV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KafkaUserV2Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
