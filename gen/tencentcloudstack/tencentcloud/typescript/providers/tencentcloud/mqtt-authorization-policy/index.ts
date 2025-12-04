// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MqttAuthorizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Operation - connect: connect; pub: publish; sub: subscribe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#actions MqttAuthorizationPolicy#actions}
  */
  readonly actions: string;
  /**
  * Condition - Client ID, supports regular expressions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#client_id MqttAuthorizationPolicy#client_id}
  */
  readonly clientId?: string;
  /**
  * Decision: allow/deny.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#effect MqttAuthorizationPolicy#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#id MqttAuthorizationPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MQTT instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#instance_id MqttAuthorizationPolicy#instance_id}
  */
  readonly instanceId: string;
  /**
  * Condition - Client IP address, supports IP or CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#ip MqttAuthorizationPolicy#ip}
  */
  readonly ip?: string;
  /**
  * Policy name, cannot be empty, 3-64 characters, supports Chinese characters, letters, numbers, "-" and "_".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#policy_name MqttAuthorizationPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Policy version, default is 1, currently only 1 is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#policy_version MqttAuthorizationPolicy#policy_version}
  */
  readonly policyVersion: number;
  /**
  * The strategy priority, the smaller the higher the priority, cannot be repeated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#priority MqttAuthorizationPolicy#priority}
  */
  readonly priority: number;
  /**
  * Condition: Quality of Service 0: At most once 1: At least once 2: Exactly once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#qos MqttAuthorizationPolicy#qos}
  */
  readonly qos: string;
  /**
  * Remarks, up to 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#remark MqttAuthorizationPolicy#remark}
  */
  readonly remark?: string;
  /**
  * Resources, requiring matching subscriptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#resources MqttAuthorizationPolicy#resources}
  */
  readonly resources?: string;
  /**
  * Condition - Reserved message 1, match reserved message; 2, match unreserved message, 3. match reserved and unreserved message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#retain MqttAuthorizationPolicy#retain}
  */
  readonly retain: number;
  /**
  * Condition - Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#username MqttAuthorizationPolicy#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy tencentcloud_mqtt_authorization_policy}
*/
export class MqttAuthorizationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mqtt_authorization_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MqttAuthorizationPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MqttAuthorizationPolicy to import
  * @param importFromId The id of the existing MqttAuthorizationPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MqttAuthorizationPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mqtt_authorization_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/mqtt_authorization_policy tencentcloud_mqtt_authorization_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MqttAuthorizationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: MqttAuthorizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mqtt_authorization_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._clientId = config.clientId;
    this._effect = config.effect;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._ip = config.ip;
    this._policyName = config.policyName;
    this._policyVersion = config.policyVersion;
    this._priority = config.priority;
    this._qos = config.qos;
    this._remark = config.remark;
    this._resources = config.resources;
    this._retain = config.retain;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions?: string; 
  public get actions() {
    return this.getStringAttribute('actions');
  }
  public set actions(value: string) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getNumberAttribute('policy_id');
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_version - computed: false, optional: false, required: true
  private _policyVersion?: number; 
  public get policyVersion() {
    return this.getNumberAttribute('policy_version');
  }
  public set policyVersion(value: number) {
    this._policyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyVersionInput() {
    return this._policyVersion;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // qos - computed: false, optional: false, required: true
  private _qos?: string; 
  public get qos() {
    return this.getStringAttribute('qos');
  }
  public set qos(value: string) {
    this._qos = value;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string; 
  public get resources() {
    return this.getStringAttribute('resources');
  }
  public set resources(value: string) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // retain - computed: false, optional: false, required: true
  private _retain?: number; 
  public get retain() {
    return this.getNumberAttribute('retain');
  }
  public set retain(value: number) {
    this._retain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retainInput() {
    return this._retain;
  }

  // username - computed: false, optional: true, required: false
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
      actions: cdktf.stringToTerraform(this._actions),
      client_id: cdktf.stringToTerraform(this._clientId),
      effect: cdktf.stringToTerraform(this._effect),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      ip: cdktf.stringToTerraform(this._ip),
      policy_name: cdktf.stringToTerraform(this._policyName),
      policy_version: cdktf.numberToTerraform(this._policyVersion),
      priority: cdktf.numberToTerraform(this._priority),
      qos: cdktf.stringToTerraform(this._qos),
      remark: cdktf.stringToTerraform(this._remark),
      resources: cdktf.stringToTerraform(this._resources),
      retain: cdktf.numberToTerraform(this._retain),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.stringToHclTerraform(this._actions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effect: {
        value: cdktf.stringToHclTerraform(this._effect),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_version: {
        value: cdktf.numberToHclTerraform(this._policyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qos: {
        value: cdktf.stringToHclTerraform(this._qos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktf.stringToHclTerraform(this._resources),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain: {
        value: cdktf.numberToHclTerraform(this._retain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
