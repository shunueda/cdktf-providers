// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ethernet_switch_crs_egress_vlan_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetSwitchCrsEgressVlanTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ethernet_switch_crs_egress_vlan_tag#___path___ InterfaceEthernetSwitchCrsEgressVlanTag#___path___}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ethernet_switch_crs_egress_vlan_tag#comment InterfaceEthernetSwitchCrsEgressVlanTag#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ethernet_switch_crs_egress_vlan_tag#disabled InterfaceEthernetSwitchCrsEgressVlanTag#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ethernet_switch_crs_egress_vlan_tag#id InterfaceEthernetSwitchCrsEgressVlanTag#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ports that are tagged in egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ethernet_switch_crs_egress_vlan_tag#tagged_ports InterfaceEthernetSwitchCrsEgressVlanTag#tagged_ports}
  */
  readonly taggedPorts?: string[];
  /**
  * VLAN ID which is tagged in egress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ethernet_switch_crs_egress_vlan_tag#vlan_id InterfaceEthernetSwitchCrsEgressVlanTag#vlan_id}
  */
  readonly vlanId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ethernet_switch_crs_egress_vlan_tag routeros_interface_ethernet_switch_crs_egress_vlan_tag}
*/
export class InterfaceEthernetSwitchCrsEgressVlanTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_ethernet_switch_crs_egress_vlan_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetSwitchCrsEgressVlanTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetSwitchCrsEgressVlanTag to import
  * @param importFromId The id of the existing InterfaceEthernetSwitchCrsEgressVlanTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ethernet_switch_crs_egress_vlan_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetSwitchCrsEgressVlanTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_ethernet_switch_crs_egress_vlan_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/interface_ethernet_switch_crs_egress_vlan_tag routeros_interface_ethernet_switch_crs_egress_vlan_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetSwitchCrsEgressVlanTagConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetSwitchCrsEgressVlanTagConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_ethernet_switch_crs_egress_vlan_tag',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
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
    this._taggedPorts = config.taggedPorts;
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

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
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

  // tagged_ports - computed: false, optional: true, required: false
  private _taggedPorts?: string[]; 
  public get taggedPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('tagged_ports'));
  }
  public set taggedPorts(value: string[]) {
    this._taggedPorts = value;
  }
  public resetTaggedPorts() {
    this._taggedPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taggedPortsInput() {
    return this._taggedPorts;
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
      tagged_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._taggedPorts),
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
      tagged_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._taggedPorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
