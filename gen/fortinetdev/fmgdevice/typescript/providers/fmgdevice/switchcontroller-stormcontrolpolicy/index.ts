// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerStormcontrolpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy#broadcast SwitchcontrollerStormcontrolpolicy#broadcast}
  */
  readonly broadcast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy#description SwitchcontrollerStormcontrolpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy#device_name SwitchcontrollerStormcontrolpolicy#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy#device_vdom SwitchcontrollerStormcontrolpolicy#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy#id SwitchcontrollerStormcontrolpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy#name SwitchcontrollerStormcontrolpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy#rate SwitchcontrollerStormcontrolpolicy#rate}
  */
  readonly rate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy#storm_control_mode SwitchcontrollerStormcontrolpolicy#storm_control_mode}
  */
  readonly stormControlMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy#unknown_multicast SwitchcontrollerStormcontrolpolicy#unknown_multicast}
  */
  readonly unknownMulticast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy#unknown_unicast SwitchcontrollerStormcontrolpolicy#unknown_unicast}
  */
  readonly unknownUnicast?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy fmgdevice_switchcontroller_stormcontrolpolicy}
*/
export class SwitchcontrollerStormcontrolpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_stormcontrolpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerStormcontrolpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerStormcontrolpolicy to import
  * @param importFromId The id of the existing SwitchcontrollerStormcontrolpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerStormcontrolpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_stormcontrolpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_stormcontrolpolicy fmgdevice_switchcontroller_stormcontrolpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerStormcontrolpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerStormcontrolpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_stormcontrolpolicy',
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
    this._broadcast = config.broadcast;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._id = config.id;
    this._name = config.name;
    this._rate = config.rate;
    this._stormControlMode = config.stormControlMode;
    this._unknownMulticast = config.unknownMulticast;
    this._unknownUnicast = config.unknownUnicast;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // broadcast - computed: true, optional: true, required: false
  private _broadcast?: string; 
  public get broadcast() {
    return this.getStringAttribute('broadcast');
  }
  public set broadcast(value: string) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
  }

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

  // rate - computed: true, optional: true, required: false
  private _rate?: number; 
  public get rate() {
    return this.getNumberAttribute('rate');
  }
  public set rate(value: number) {
    this._rate = value;
  }
  public resetRate() {
    this._rate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateInput() {
    return this._rate;
  }

  // storm_control_mode - computed: true, optional: true, required: false
  private _stormControlMode?: string; 
  public get stormControlMode() {
    return this.getStringAttribute('storm_control_mode');
  }
  public set stormControlMode(value: string) {
    this._stormControlMode = value;
  }
  public resetStormControlMode() {
    this._stormControlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stormControlModeInput() {
    return this._stormControlMode;
  }

  // unknown_multicast - computed: true, optional: true, required: false
  private _unknownMulticast?: string; 
  public get unknownMulticast() {
    return this.getStringAttribute('unknown_multicast');
  }
  public set unknownMulticast(value: string) {
    this._unknownMulticast = value;
  }
  public resetUnknownMulticast() {
    this._unknownMulticast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownMulticastInput() {
    return this._unknownMulticast;
  }

  // unknown_unicast - computed: true, optional: true, required: false
  private _unknownUnicast?: string; 
  public get unknownUnicast() {
    return this.getStringAttribute('unknown_unicast');
  }
  public set unknownUnicast(value: string) {
    this._unknownUnicast = value;
  }
  public resetUnknownUnicast() {
    this._unknownUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownUnicastInput() {
    return this._unknownUnicast;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      broadcast: cdktf.stringToTerraform(this._broadcast),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rate: cdktf.numberToTerraform(this._rate),
      storm_control_mode: cdktf.stringToTerraform(this._stormControlMode),
      unknown_multicast: cdktf.stringToTerraform(this._unknownMulticast),
      unknown_unicast: cdktf.stringToTerraform(this._unknownUnicast),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      broadcast: {
        value: cdktf.stringToHclTerraform(this._broadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      rate: {
        value: cdktf.numberToHclTerraform(this._rate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storm_control_mode: {
        value: cdktf.stringToHclTerraform(this._stormControlMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_multicast: {
        value: cdktf.stringToHclTerraform(this._unknownMulticast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknown_unicast: {
        value: cdktf.stringToHclTerraform(this._unknownUnicast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
