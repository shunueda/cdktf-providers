// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerMacpolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy#adom ObjectSwitchcontrollerMacpolicy#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy#bounce_port_link ObjectSwitchcontrollerMacpolicy#bounce_port_link}
  */
  readonly bouncePortLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy#description ObjectSwitchcontrollerMacpolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy#drop ObjectSwitchcontrollerMacpolicy#drop}
  */
  readonly drop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy#fmgcount ObjectSwitchcontrollerMacpolicy#fmgcount}
  */
  readonly fmgcount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy#id ObjectSwitchcontrollerMacpolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy#name ObjectSwitchcontrollerMacpolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy#scopetype ObjectSwitchcontrollerMacpolicy#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy#traffic_policy ObjectSwitchcontrollerMacpolicy#traffic_policy}
  */
  readonly trafficPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy#vlan ObjectSwitchcontrollerMacpolicy#vlan}
  */
  readonly vlan?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy fortimanager_object_switchcontroller_macpolicy}
*/
export class ObjectSwitchcontrollerMacpolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_macpolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerMacpolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerMacpolicy to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerMacpolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerMacpolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_macpolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_macpolicy fortimanager_object_switchcontroller_macpolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerMacpolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerMacpolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_macpolicy',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
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
    this._bouncePortLink = config.bouncePortLink;
    this._description = config.description;
    this._drop = config.drop;
    this._fmgcount = config.fmgcount;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._trafficPolicy = config.trafficPolicy;
    this._vlan = config.vlan;
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

  // drop - computed: true, optional: true, required: false
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

  // traffic_policy - computed: false, optional: true, required: false
  private _trafficPolicy?: string; 
  public get trafficPolicy() {
    return this.getStringAttribute('traffic_policy');
  }
  public set trafficPolicy(value: string) {
    this._trafficPolicy = value;
  }
  public resetTrafficPolicy() {
    this._trafficPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficPolicyInput() {
    return this._trafficPolicy;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
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
      adom: cdktf.stringToTerraform(this._adom),
      bounce_port_link: cdktf.stringToTerraform(this._bouncePortLink),
      description: cdktf.stringToTerraform(this._description),
      drop: cdktf.stringToTerraform(this._drop),
      fmgcount: cdktf.stringToTerraform(this._fmgcount),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      traffic_policy: cdktf.stringToTerraform(this._trafficPolicy),
      vlan: cdktf.stringToTerraform(this._vlan),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_policy: {
        value: cdktf.stringToHclTerraform(this._trafficPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.stringToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
