// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerMacpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#bounce_port_duration SwitchcontrollerMacpolicy#bounce_port_duration}
  */
  readonly bouncePortDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#bounce_port_link SwitchcontrollerMacpolicy#bounce_port_link}
  */
  readonly bouncePortLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#description SwitchcontrollerMacpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#device_name SwitchcontrollerMacpolicy#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#device_vdom SwitchcontrollerMacpolicy#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#drop SwitchcontrollerMacpolicy#drop}
  */
  readonly drop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#fmgcount SwitchcontrollerMacpolicy#fmgcount}
  */
  readonly fmgcount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#fortilink SwitchcontrollerMacpolicy#fortilink}
  */
  readonly fortilink?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#id SwitchcontrollerMacpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#name SwitchcontrollerMacpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#poe_reset SwitchcontrollerMacpolicy#poe_reset}
  */
  readonly poeReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#traffic_policy SwitchcontrollerMacpolicy#traffic_policy}
  */
  readonly trafficPolicy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#vlan SwitchcontrollerMacpolicy#vlan}
  */
  readonly vlan?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy fmgdevice_switchcontroller_macpolicy}
*/
export class SwitchcontrollerMacpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_macpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerMacpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerMacpolicy to import
  * @param importFromId The id of the existing SwitchcontrollerMacpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerMacpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_macpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_macpolicy fmgdevice_switchcontroller_macpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerMacpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerMacpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_macpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bouncePortDuration = config.bouncePortDuration;
    this._bouncePortLink = config.bouncePortLink;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._drop = config.drop;
    this._fmgcount = config.fmgcount;
    this._fortilink = config.fortilink;
    this._id = config.id;
    this._name = config.name;
    this._poeReset = config.poeReset;
    this._trafficPolicy = config.trafficPolicy;
    this._vlan = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bounce_port_duration - computed: true, optional: true, required: false
  private _bouncePortDuration?: number; 
  public get bouncePortDuration() {
    return this.getNumberAttribute('bounce_port_duration');
  }
  public set bouncePortDuration(value: number) {
    this._bouncePortDuration = value;
  }
  public resetBouncePortDuration() {
    this._bouncePortDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bouncePortDurationInput() {
    return this._bouncePortDuration;
  }

  // bounce_port_link - computed: true, optional: true, required: false
  private _bouncePortLink?: string; 
  public get bouncePortLink() {
    return this.getStringAttribute('bounce_port_link');
  }
  public set bouncePortLink(value: string) {
    this._bouncePortLink = value;
  }
  public resetBouncePortLink() {
    this._bouncePortLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bouncePortLinkInput() {
    return this._bouncePortLink;
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

  // drop - computed: false, optional: true, required: false
  private _drop?: string; 
  public get drop() {
    return this.getStringAttribute('drop');
  }
  public set drop(value: string) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // fmgcount - computed: true, optional: true, required: false
  private _fmgcount?: string; 
  public get fmgcount() {
    return this.getStringAttribute('fmgcount');
  }
  public set fmgcount(value: string) {
    this._fmgcount = value;
  }
  public resetFmgcount() {
    this._fmgcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgcountInput() {
    return this._fmgcount;
  }

  // fortilink - computed: true, optional: true, required: false
  private _fortilink?: string[]; 
  public get fortilink() {
    return cdktf.Fn.tolist(this.getListAttribute('fortilink'));
  }
  public set fortilink(value: string[]) {
    this._fortilink = value;
  }
  public resetFortilink() {
    this._fortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkInput() {
    return this._fortilink;
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

  // poe_reset - computed: true, optional: true, required: false
  private _poeReset?: string; 
  public get poeReset() {
    return this.getStringAttribute('poe_reset');
  }
  public set poeReset(value: string) {
    this._poeReset = value;
  }
  public resetPoeReset() {
    this._poeReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeResetInput() {
    return this._poeReset;
  }

  // traffic_policy - computed: true, optional: true, required: false
  private _trafficPolicy?: string[]; 
  public get trafficPolicy() {
    return cdktf.Fn.tolist(this.getListAttribute('traffic_policy'));
  }
  public set trafficPolicy(value: string[]) {
    this._trafficPolicy = value;
  }
  public resetTrafficPolicy() {
    this._trafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyInput() {
    return this._trafficPolicy;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: string[]; 
  public get vlan() {
    return cdktf.Fn.tolist(this.getListAttribute('vlan'));
  }
  public set vlan(value: string[]) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bounce_port_duration: cdktf.numberToTerraform(this._bouncePortDuration),
      bounce_port_link: cdktf.stringToTerraform(this._bouncePortLink),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      drop: cdktf.stringToTerraform(this._drop),
      fmgcount: cdktf.stringToTerraform(this._fmgcount),
      fortilink: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fortilink),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      poe_reset: cdktf.stringToTerraform(this._poeReset),
      traffic_policy: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trafficPolicy),
      vlan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlan),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bounce_port_duration: {
        value: cdktf.numberToHclTerraform(this._bouncePortDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bounce_port_link: {
        value: cdktf.stringToHclTerraform(this._bouncePortLink),
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
      drop: {
        value: cdktf.stringToHclTerraform(this._drop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmgcount: {
        value: cdktf.stringToHclTerraform(this._fmgcount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortilink: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fortilink),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      poe_reset: {
        value: cdktf.stringToHclTerraform(this._poeReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_policy: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trafficPolicy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vlan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
