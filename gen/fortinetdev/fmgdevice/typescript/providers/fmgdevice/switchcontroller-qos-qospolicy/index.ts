// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerQosQospolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy#default_cos SwitchcontrollerQosQospolicy#default_cos}
  */
  readonly defaultCos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy#device_name SwitchcontrollerQosQospolicy#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy#device_vdom SwitchcontrollerQosQospolicy#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy#id SwitchcontrollerQosQospolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy#name SwitchcontrollerQosQospolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy#queue_policy SwitchcontrollerQosQospolicy#queue_policy}
  */
  readonly queuePolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy#trust_dot1p_map SwitchcontrollerQosQospolicy#trust_dot1p_map}
  */
  readonly trustDot1PMap?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy#trust_ip_dscp_map SwitchcontrollerQosQospolicy#trust_ip_dscp_map}
  */
  readonly trustIpDscpMap?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy fmgdevice_switchcontroller_qos_qospolicy}
*/
export class SwitchcontrollerQosQospolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_qos_qospolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerQosQospolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerQosQospolicy to import
  * @param importFromId The id of the existing SwitchcontrollerQosQospolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerQosQospolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_qos_qospolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_qos_qospolicy fmgdevice_switchcontroller_qos_qospolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerQosQospolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerQosQospolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_qos_qospolicy',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultCos = config.defaultCos;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._name = config.name;
    this._queuePolicy = config.queuePolicy;
    this._trustDot1PMap = config.trustDot1PMap;
    this._trustIpDscpMap = config.trustIpDscpMap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
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
  private _queuePolicy?: string[]; 
  public get queuePolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('queue_policy'));
  }
  public set queuePolicy(value: string[]) {
    this._queuePolicy = value;
  }
  public resetQueuePolicy() {
    this._queuePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuePolicyInput() {
    return this._queuePolicy;
  }

  // trust_dot1p_map - computed: true, optional: true, required: false
  private _trustDot1PMap?: string[]; 
  public get trustDot1PMap() {
    return cdktf.Fn.tolist(this.getListAttribute('trust_dot1p_map'));
  }
  public set trustDot1PMap(value: string[]) {
    this._trustDot1PMap = value;
  }
  public resetTrustDot1PMap() {
    this._trustDot1PMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustDot1PMapInput() {
    return this._trustDot1PMap;
  }

  // trust_ip_dscp_map - computed: true, optional: true, required: false
  private _trustIpDscpMap?: string[]; 
  public get trustIpDscpMap() {
    return cdktf.Fn.tolist(this.getListAttribute('trust_ip_dscp_map'));
  }
  public set trustIpDscpMap(value: string[]) {
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
      default_cos: cdktf.numberToTerraform(this._defaultCos),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      queue_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._queuePolicy),
      trust_dot1p_map: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trustDot1PMap),
      trust_ip_dscp_map: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trustIpDscpMap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_cos: {
        value: cdktf.numberToHclTerraform(this._defaultCos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
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
      queue_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._queuePolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trust_dot1p_map: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trustDot1PMap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trust_ip_dscp_map: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trustIpDscpMap),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
