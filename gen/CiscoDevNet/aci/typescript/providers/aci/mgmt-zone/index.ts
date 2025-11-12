// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MgmtZoneConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#annotation MgmtZone#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#description MgmtZone#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#id MgmtZone#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#managed_node_connectivity_group_dn MgmtZone#managed_node_connectivity_group_dn}
  */
  readonly managedNodeConnectivityGroupDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#name MgmtZone#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#name_alias MgmtZone#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Create relation to fvns:AddrInst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#relation_mgmt_rs_addr_inst MgmtZone#relation_mgmt_rs_addr_inst}
  */
  readonly relationMgmtRsAddrInst?: string;
  /**
  * Create relation to mgmt:InB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#relation_mgmt_rs_in_b MgmtZone#relation_mgmt_rs_in_b}
  */
  readonly relationMgmtRsInB?: string;
  /**
  * Create relation to mgmt:InB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#relation_mgmt_rs_inb_epg MgmtZone#relation_mgmt_rs_inb_epg}
  */
  readonly relationMgmtRsInbEpg?: string;
  /**
  * Create relation to mgmt:OoB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#relation_mgmt_rs_oo_b MgmtZone#relation_mgmt_rs_oo_b}
  */
  readonly relationMgmtRsOoB?: string;
  /**
  * Create relation to mgmt:OoB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#relation_mgmt_rs_oob_epg MgmtZone#relation_mgmt_rs_oob_epg}
  */
  readonly relationMgmtRsOobEpg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#type MgmtZone#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone aci_mgmt_zone}
*/
export class MgmtZone extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_mgmt_zone";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MgmtZone resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MgmtZone to import
  * @param importFromId The id of the existing MgmtZone that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MgmtZone to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_mgmt_zone", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/mgmt_zone aci_mgmt_zone} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MgmtZoneConfig
  */
  public constructor(scope: Construct, id: string, config: MgmtZoneConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_mgmt_zone',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._managedNodeConnectivityGroupDn = config.managedNodeConnectivityGroupDn;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationMgmtRsAddrInst = config.relationMgmtRsAddrInst;
    this._relationMgmtRsInB = config.relationMgmtRsInB;
    this._relationMgmtRsInbEpg = config.relationMgmtRsInbEpg;
    this._relationMgmtRsOoB = config.relationMgmtRsOoB;
    this._relationMgmtRsOobEpg = config.relationMgmtRsOobEpg;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // description - computed: true, optional: true, required: false
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

  // managed_node_connectivity_group_dn - computed: false, optional: false, required: true
  private _managedNodeConnectivityGroupDn?: string; 
  public get managedNodeConnectivityGroupDn() {
    return this.getStringAttribute('managed_node_connectivity_group_dn');
  }
  public set managedNodeConnectivityGroupDn(value: string) {
    this._managedNodeConnectivityGroupDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNodeConnectivityGroupDnInput() {
    return this._managedNodeConnectivityGroupDn;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // relation_mgmt_rs_addr_inst - computed: false, optional: true, required: false
  private _relationMgmtRsAddrInst?: string; 
  public get relationMgmtRsAddrInst() {
    return this.getStringAttribute('relation_mgmt_rs_addr_inst');
  }
  public set relationMgmtRsAddrInst(value: string) {
    this._relationMgmtRsAddrInst = value;
  }
  public resetRelationMgmtRsAddrInst() {
    this._relationMgmtRsAddrInst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationMgmtRsAddrInstInput() {
    return this._relationMgmtRsAddrInst;
  }

  // relation_mgmt_rs_in_b - computed: false, optional: true, required: false
  private _relationMgmtRsInB?: string; 
  public get relationMgmtRsInB() {
    return this.getStringAttribute('relation_mgmt_rs_in_b');
  }
  public set relationMgmtRsInB(value: string) {
    this._relationMgmtRsInB = value;
  }
  public resetRelationMgmtRsInB() {
    this._relationMgmtRsInB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationMgmtRsInBInput() {
    return this._relationMgmtRsInB;
  }

  // relation_mgmt_rs_inb_epg - computed: false, optional: true, required: false
  private _relationMgmtRsInbEpg?: string; 
  public get relationMgmtRsInbEpg() {
    return this.getStringAttribute('relation_mgmt_rs_inb_epg');
  }
  public set relationMgmtRsInbEpg(value: string) {
    this._relationMgmtRsInbEpg = value;
  }
  public resetRelationMgmtRsInbEpg() {
    this._relationMgmtRsInbEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationMgmtRsInbEpgInput() {
    return this._relationMgmtRsInbEpg;
  }

  // relation_mgmt_rs_oo_b - computed: false, optional: true, required: false
  private _relationMgmtRsOoB?: string; 
  public get relationMgmtRsOoB() {
    return this.getStringAttribute('relation_mgmt_rs_oo_b');
  }
  public set relationMgmtRsOoB(value: string) {
    this._relationMgmtRsOoB = value;
  }
  public resetRelationMgmtRsOoB() {
    this._relationMgmtRsOoB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationMgmtRsOoBInput() {
    return this._relationMgmtRsOoB;
  }

  // relation_mgmt_rs_oob_epg - computed: false, optional: true, required: false
  private _relationMgmtRsOobEpg?: string; 
  public get relationMgmtRsOobEpg() {
    return this.getStringAttribute('relation_mgmt_rs_oob_epg');
  }
  public set relationMgmtRsOobEpg(value: string) {
    this._relationMgmtRsOobEpg = value;
  }
  public resetRelationMgmtRsOobEpg() {
    this._relationMgmtRsOobEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationMgmtRsOobEpgInput() {
    return this._relationMgmtRsOobEpg;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      managed_node_connectivity_group_dn: cdktf.stringToTerraform(this._managedNodeConnectivityGroupDn),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_mgmt_rs_addr_inst: cdktf.stringToTerraform(this._relationMgmtRsAddrInst),
      relation_mgmt_rs_in_b: cdktf.stringToTerraform(this._relationMgmtRsInB),
      relation_mgmt_rs_inb_epg: cdktf.stringToTerraform(this._relationMgmtRsInbEpg),
      relation_mgmt_rs_oo_b: cdktf.stringToTerraform(this._relationMgmtRsOoB),
      relation_mgmt_rs_oob_epg: cdktf.stringToTerraform(this._relationMgmtRsOobEpg),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_node_connectivity_group_dn: {
        value: cdktf.stringToHclTerraform(this._managedNodeConnectivityGroupDn),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_mgmt_rs_addr_inst: {
        value: cdktf.stringToHclTerraform(this._relationMgmtRsAddrInst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_mgmt_rs_in_b: {
        value: cdktf.stringToHclTerraform(this._relationMgmtRsInB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_mgmt_rs_inb_epg: {
        value: cdktf.stringToHclTerraform(this._relationMgmtRsInbEpg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_mgmt_rs_oo_b: {
        value: cdktf.stringToHclTerraform(this._relationMgmtRsOoB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_mgmt_rs_oob_epg: {
        value: cdktf.stringToHclTerraform(this._relationMgmtRsOobEpg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
