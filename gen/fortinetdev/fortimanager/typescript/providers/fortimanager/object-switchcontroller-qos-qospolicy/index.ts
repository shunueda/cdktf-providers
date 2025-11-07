// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerQosQospolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy#adom ObjectSwitchcontrollerQosQospolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy#default_cos ObjectSwitchcontrollerQosQospolicy#default_cos}
  */
  readonly defaultCos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy#id ObjectSwitchcontrollerQosQospolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy#name ObjectSwitchcontrollerQosQospolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy#queue_policy ObjectSwitchcontrollerQosQospolicy#queue_policy}
  */
  readonly queuePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy#scopetype ObjectSwitchcontrollerQosQospolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy#trust_dot1p_map ObjectSwitchcontrollerQosQospolicy#trust_dot1p_map}
  */
  readonly trustDot1PMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy#trust_ip_dscp_map ObjectSwitchcontrollerQosQospolicy#trust_ip_dscp_map}
  */
  readonly trustIpDscpMap?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy fortimanager_object_switchcontroller_qos_qospolicy}
*/
export class ObjectSwitchcontrollerQosQospolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_qos_qospolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerQosQospolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerQosQospolicy to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerQosQospolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerQosQospolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_qos_qospolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_qos_qospolicy fortimanager_object_switchcontroller_qos_qospolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerQosQospolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerQosQospolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_qos_qospolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._defaultCos = config.defaultCos;
    this._id = config.id;
    this._name = config.name;
    this._queuePolicy = config.queuePolicy;
    this._scopetype = config.scopetype;
    this._trustDot1PMap = config.trustDot1PMap;
    this._trustIpDscpMap = config.trustIpDscpMap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // default_cos - computed: false, optional: true, required: false
  private _defaultCos?: number; 
  public get defaultCos() {
    return this.getNumberAttribute('default_cos');
  }
  public set defaultCos(value: number) {
    this._defaultCos = value;
  }
  public resetDefaultCos() {
    this._defaultCos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCosInput() {
    return this._defaultCos;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // queue_policy - computed: true, optional: true, required: false
  private _queuePolicy?: string; 
  public get queuePolicy() {
    return this.getStringAttribute('queue_policy');
  }
  public set queuePolicy(value: string) {
    this._queuePolicy = value;
  }
  public resetQueuePolicy() {
    this._queuePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePolicyInput() {
    return this._queuePolicy;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // trust_dot1p_map - computed: false, optional: true, required: false
  private _trustDot1PMap?: string; 
  public get trustDot1PMap() {
    return this.getStringAttribute('trust_dot1p_map');
  }
  public set trustDot1PMap(value: string) {
    this._trustDot1PMap = value;
  }
  public resetTrustDot1PMap() {
    this._trustDot1PMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDot1PMapInput() {
    return this._trustDot1PMap;
  }

  // trust_ip_dscp_map - computed: false, optional: true, required: false
  private _trustIpDscpMap?: string; 
  public get trustIpDscpMap() {
    return this.getStringAttribute('trust_ip_dscp_map');
  }
  public set trustIpDscpMap(value: string) {
    this._trustIpDscpMap = value;
  }
  public resetTrustIpDscpMap() {
    this._trustIpDscpMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIpDscpMapInput() {
    return this._trustIpDscpMap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      default_cos: cdktf.numberToTerraform(this._defaultCos),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      queue_policy: cdktf.stringToTerraform(this._queuePolicy),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      trust_dot1p_map: cdktf.stringToTerraform(this._trustDot1PMap),
      trust_ip_dscp_map: cdktf.stringToTerraform(this._trustIpDscpMap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_cos: {
        value: cdktf.numberToHclTerraform(this._defaultCos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      queue_policy: {
        value: cdktf.stringToHclTerraform(this._queuePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_dot1p_map: {
        value: cdktf.stringToHclTerraform(this._trustDot1PMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ip_dscp_map: {
        value: cdktf.stringToHclTerraform(this._trustIpDscpMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
