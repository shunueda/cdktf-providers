// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StaticNodeMgmtAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address#addr StaticNodeMgmtAddress#addr}
  */
  readonly addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address#annotation StaticNodeMgmtAddress#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address#description StaticNodeMgmtAddress#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address#gw StaticNodeMgmtAddress#gw}
  */
  readonly gw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address#id StaticNodeMgmtAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address#management_epg_dn StaticNodeMgmtAddress#management_epg_dn}
  */
  readonly managementEpgDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address#t_dn StaticNodeMgmtAddress#t_dn}
  */
  readonly tDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address#type StaticNodeMgmtAddress#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address#v6_addr StaticNodeMgmtAddress#v6_addr}
  */
  readonly v6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address#v6_gw StaticNodeMgmtAddress#v6_gw}
  */
  readonly v6Gw?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address aci_static_node_mgmt_address}
*/
export class StaticNodeMgmtAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_static_node_mgmt_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StaticNodeMgmtAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StaticNodeMgmtAddress to import
  * @param importFromId The id of the existing StaticNodeMgmtAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StaticNodeMgmtAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_static_node_mgmt_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/static_node_mgmt_address aci_static_node_mgmt_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StaticNodeMgmtAddressConfig
  */
  public constructor(scope: Construct, id: string, config: StaticNodeMgmtAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_static_node_mgmt_address',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addr = config.addr;
    this._annotation = config.annotation;
    this._description = config.description;
    this._gw = config.gw;
    this._id = config.id;
    this._managementEpgDn = config.managementEpgDn;
    this._tDn = config.tDn;
    this._type = config.type;
    this._v6Addr = config.v6Addr;
    this._v6Gw = config.v6Gw;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr - computed: true, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }

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

  // gw - computed: true, optional: true, required: false
  private _gw?: string; 
  public get gw() {
    return this.getStringAttribute('gw');
  }
  public set gw(value: string) {
    this._gw = value;
  }
  public resetGw() {
    this._gw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gwInput() {
    return this._gw;
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

  // management_epg_dn - computed: false, optional: false, required: true
  private _managementEpgDn?: string; 
  public get managementEpgDn() {
    return this.getStringAttribute('management_epg_dn');
  }
  public set managementEpgDn(value: string) {
    this._managementEpgDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementEpgDnInput() {
    return this._managementEpgDn;
  }

  // t_dn - computed: false, optional: false, required: true
  private _tDn?: string; 
  public get tDn() {
    return this.getStringAttribute('t_dn');
  }
  public set tDn(value: string) {
    this._tDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tDnInput() {
    return this._tDn;
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

  // v6_addr - computed: true, optional: true, required: false
  private _v6Addr?: string; 
  public get v6Addr() {
    return this.getStringAttribute('v6_addr');
  }
  public set v6Addr(value: string) {
    this._v6Addr = value;
  }
  public resetV6Addr() {
    this._v6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AddrInput() {
    return this._v6Addr;
  }

  // v6_gw - computed: true, optional: true, required: false
  private _v6Gw?: string; 
  public get v6Gw() {
    return this.getStringAttribute('v6_gw');
  }
  public set v6Gw(value: string) {
    this._v6Gw = value;
  }
  public resetV6Gw() {
    this._v6Gw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6GwInput() {
    return this._v6Gw;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr: cdktf.stringToTerraform(this._addr),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      gw: cdktf.stringToTerraform(this._gw),
      id: cdktf.stringToTerraform(this._id),
      management_epg_dn: cdktf.stringToTerraform(this._managementEpgDn),
      t_dn: cdktf.stringToTerraform(this._tDn),
      type: cdktf.stringToTerraform(this._type),
      v6_addr: cdktf.stringToTerraform(this._v6Addr),
      v6_gw: cdktf.stringToTerraform(this._v6Gw),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr: {
        value: cdktf.stringToHclTerraform(this._addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      gw: {
        value: cdktf.stringToHclTerraform(this._gw),
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
      management_epg_dn: {
        value: cdktf.stringToHclTerraform(this._managementEpgDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      t_dn: {
        value: cdktf.stringToHclTerraform(this._tDn),
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
      v6_addr: {
        value: cdktf.stringToHclTerraform(this._v6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6_gw: {
        value: cdktf.stringToHclTerraform(this._v6Gw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
