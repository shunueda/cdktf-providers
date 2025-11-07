// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerPortpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy#bounce_port_link SwitchcontrollerPortpolicy#bounce_port_link}
  */
  readonly bouncePortLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy#description SwitchcontrollerPortpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy#fortilink SwitchcontrollerPortpolicy#fortilink}
  */
  readonly fortilink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy#id SwitchcontrollerPortpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy#lldp_profile SwitchcontrollerPortpolicy#lldp_profile}
  */
  readonly lldpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy#n802_1x SwitchcontrollerPortpolicy#n802_1x}
  */
  readonly n8021X?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy#name SwitchcontrollerPortpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy#qos_policy SwitchcontrollerPortpolicy#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy#vdomparam SwitchcontrollerPortpolicy#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy#vlan_policy SwitchcontrollerPortpolicy#vlan_policy}
  */
  readonly vlanPolicy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy fortios_switchcontroller_portpolicy}
*/
export class SwitchcontrollerPortpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_portpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerPortpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerPortpolicy to import
  * @param importFromId The id of the existing SwitchcontrollerPortpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerPortpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_portpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_portpolicy fortios_switchcontroller_portpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerPortpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerPortpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_portpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bouncePortLink = config.bouncePortLink;
    this._description = config.description;
    this._fortilink = config.fortilink;
    this._id = config.id;
    this._lldpProfile = config.lldpProfile;
    this._n8021X = config.n8021X;
    this._name = config.name;
    this._qosPolicy = config.qosPolicy;
    this._vdomparam = config.vdomparam;
    this._vlanPolicy = config.vlanPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fortilink - computed: false, optional: true, required: false
  private _fortilink?: string; 
  public get fortilink() {
    return this.getStringAttribute('fortilink');
  }
  public set fortilink(value: string) {
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

  // lldp_profile - computed: false, optional: true, required: false
  private _lldpProfile?: string; 
  public get lldpProfile() {
    return this.getStringAttribute('lldp_profile');
  }
  public set lldpProfile(value: string) {
    this._lldpProfile = value;
  }
  public resetLldpProfile() {
    this._lldpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpProfileInput() {
    return this._lldpProfile;
  }

  // n802_1x - computed: false, optional: true, required: false
  private _n8021X?: string; 
  public get n8021X() {
    return this.getStringAttribute('n802_1x');
  }
  public set n8021X(value: string) {
    this._n8021X = value;
  }
  public resetN8021X() {
    this._n8021X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get n8021XInput() {
    return this._n8021X;
  }

  // name - computed: true, optional: true, required: false
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

  // qos_policy - computed: false, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
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

  // vlan_policy - computed: false, optional: true, required: false
  private _vlanPolicy?: string; 
  public get vlanPolicy() {
    return this.getStringAttribute('vlan_policy');
  }
  public set vlanPolicy(value: string) {
    this._vlanPolicy = value;
  }
  public resetVlanPolicy() {
    this._vlanPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanPolicyInput() {
    return this._vlanPolicy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bounce_port_link: cdktf.stringToTerraform(this._bouncePortLink),
      description: cdktf.stringToTerraform(this._description),
      fortilink: cdktf.stringToTerraform(this._fortilink),
      id: cdktf.stringToTerraform(this._id),
      lldp_profile: cdktf.stringToTerraform(this._lldpProfile),
      n802_1x: cdktf.stringToTerraform(this._n8021X),
      name: cdktf.stringToTerraform(this._name),
      qos_policy: cdktf.stringToTerraform(this._qosPolicy),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vlan_policy: cdktf.stringToTerraform(this._vlanPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      fortilink: {
        value: cdktf.stringToHclTerraform(this._fortilink),
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
      lldp_profile: {
        value: cdktf.stringToHclTerraform(this._lldpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      n802_1x: {
        value: cdktf.stringToHclTerraform(this._n8021X),
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
      qos_policy: {
        value: cdktf.stringToHclTerraform(this._qosPolicy),
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
      vlan_policy: {
        value: cdktf.stringToHclTerraform(this._vlanPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
