// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetSwitchVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan#___path___ InterfaceEthernetSwitchVlan#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan#comment InterfaceEthernetSwitchVlan#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan#disabled InterfaceEthernetSwitchVlan#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan#id InterfaceEthernetSwitchVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to use shared-VLAN-learning (SVL) or independent-VLAN-learning (IVL).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan#independent_learning InterfaceEthernetSwitchVlan#independent_learning}
  */
  readonly independentLearning?: boolean | cdktf.IResolvable;
  /**
  * Interface member list for the respective VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan#ports InterfaceEthernetSwitchVlan#ports}
  */
  readonly ports: string[];
  /**
  * Name of the switch for which the respective VLAN entry is intended for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan#switch InterfaceEthernetSwitchVlan#switch}
  */
  readonly switch: string;
  /**
  * The VLAN ID for certain switch port configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan#vlan_id InterfaceEthernetSwitchVlan#vlan_id}
  */
  readonly vlanId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan routeros_interface_ethernet_switch_vlan}
*/
export class InterfaceEthernetSwitchVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ethernet_switch_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetSwitchVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetSwitchVlan to import
  * @param importFromId The id of the existing InterfaceEthernetSwitchVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetSwitchVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ethernet_switch_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_ethernet_switch_vlan routeros_interface_ethernet_switch_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetSwitchVlanConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetSwitchVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ethernet_switch_vlan',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._independentLearning = config.independentLearning;
    this._ports = config.ports;
    this._switch = config.switch;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // independent_learning - computed: false, optional: true, required: false
  private _independentLearning?: boolean | cdktf.IResolvable; 
  public get independentLearning() {
    return this.getBooleanAttribute('independent_learning');
  }
  public set independentLearning(value: boolean | cdktf.IResolvable) {
    this._independentLearning = value;
  }
  public resetIndependentLearning() {
    this._independentLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get independentLearningInput() {
    return this._independentLearning;
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      independent_learning: cdktf.booleanToTerraform(this._independentLearning),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      switch: cdktf.stringToTerraform(this._switch),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      independent_learning: {
        value: cdktf.booleanToHclTerraform(this._independentLearning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      switch: {
        value: cdktf.stringToHclTerraform(this._switch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
