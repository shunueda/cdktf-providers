// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerNacdeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#description SwitchcontrollerNacdevice#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#fosid SwitchcontrollerNacdevice#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#id SwitchcontrollerNacdevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#last_known_port SwitchcontrollerNacdevice#last_known_port}
  */
  readonly lastKnownPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#last_known_switch SwitchcontrollerNacdevice#last_known_switch}
  */
  readonly lastKnownSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#last_seen SwitchcontrollerNacdevice#last_seen}
  */
  readonly lastSeen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#mac SwitchcontrollerNacdevice#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#mac_policy SwitchcontrollerNacdevice#mac_policy}
  */
  readonly macPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#matched_nac_policy SwitchcontrollerNacdevice#matched_nac_policy}
  */
  readonly matchedNacPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#port_policy SwitchcontrollerNacdevice#port_policy}
  */
  readonly portPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#status SwitchcontrollerNacdevice#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#vdomparam SwitchcontrollerNacdevice#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice fortios_switchcontroller_nacdevice}
*/
export class SwitchcontrollerNacdevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_nacdevice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerNacdevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerNacdevice to import
  * @param importFromId The id of the existing SwitchcontrollerNacdevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerNacdevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_nacdevice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_nacdevice fortios_switchcontroller_nacdevice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerNacdeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerNacdeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_nacdevice',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._fosid = config.fosid;
    this._id = config.id;
    this._lastKnownPort = config.lastKnownPort;
    this._lastKnownSwitch = config.lastKnownSwitch;
    this._lastSeen = config.lastSeen;
    this._mac = config.mac;
    this._macPolicy = config.macPolicy;
    this._matchedNacPolicy = config.matchedNacPolicy;
    this._portPolicy = config.portPolicy;
    this._status = config.status;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // last_known_port - computed: false, optional: true, required: false
  private _lastKnownPort?: string; 
  public get lastKnownPort() {
    return this.getStringAttribute('last_known_port');
  }
  public set lastKnownPort(value: string) {
    this._lastKnownPort = value;
  }
  public resetLastKnownPort() {
    this._lastKnownPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastKnownPortInput() {
    return this._lastKnownPort;
  }

  // last_known_switch - computed: false, optional: true, required: false
  private _lastKnownSwitch?: string; 
  public get lastKnownSwitch() {
    return this.getStringAttribute('last_known_switch');
  }
  public set lastKnownSwitch(value: string) {
    this._lastKnownSwitch = value;
  }
  public resetLastKnownSwitch() {
    this._lastKnownSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastKnownSwitchInput() {
    return this._lastKnownSwitch;
  }

  // last_seen - computed: false, optional: true, required: false
  private _lastSeen?: number; 
  public get lastSeen() {
    return this.getNumberAttribute('last_seen');
  }
  public set lastSeen(value: number) {
    this._lastSeen = value;
  }
  public resetLastSeen() {
    this._lastSeen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSeenInput() {
    return this._lastSeen;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // mac_policy - computed: false, optional: true, required: false
  private _macPolicy?: string; 
  public get macPolicy() {
    return this.getStringAttribute('mac_policy');
  }
  public set macPolicy(value: string) {
    this._macPolicy = value;
  }
  public resetMacPolicy() {
    this._macPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macPolicyInput() {
    return this._macPolicy;
  }

  // matched_nac_policy - computed: false, optional: true, required: false
  private _matchedNacPolicy?: string; 
  public get matchedNacPolicy() {
    return this.getStringAttribute('matched_nac_policy');
  }
  public set matchedNacPolicy(value: string) {
    this._matchedNacPolicy = value;
  }
  public resetMatchedNacPolicy() {
    this._matchedNacPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchedNacPolicyInput() {
    return this._matchedNacPolicy;
  }

  // port_policy - computed: false, optional: true, required: false
  private _portPolicy?: string; 
  public get portPolicy() {
    return this.getStringAttribute('port_policy');
  }
  public set portPolicy(value: string) {
    this._portPolicy = value;
  }
  public resetPortPolicy() {
    this._portPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPolicyInput() {
    return this._portPolicy;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      last_known_port: cdktf.stringToTerraform(this._lastKnownPort),
      last_known_switch: cdktf.stringToTerraform(this._lastKnownSwitch),
      last_seen: cdktf.numberToTerraform(this._lastSeen),
      mac: cdktf.stringToTerraform(this._mac),
      mac_policy: cdktf.stringToTerraform(this._macPolicy),
      matched_nac_policy: cdktf.stringToTerraform(this._matchedNacPolicy),
      port_policy: cdktf.stringToTerraform(this._portPolicy),
      status: cdktf.stringToTerraform(this._status),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      last_known_port: {
        value: cdktf.stringToHclTerraform(this._lastKnownPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_known_switch: {
        value: cdktf.stringToHclTerraform(this._lastKnownSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_seen: {
        value: cdktf.numberToHclTerraform(this._lastSeen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_policy: {
        value: cdktf.stringToHclTerraform(this._macPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matched_nac_policy: {
        value: cdktf.stringToHclTerraform(this._matchedNacPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_policy: {
        value: cdktf.stringToHclTerraform(this._portPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
