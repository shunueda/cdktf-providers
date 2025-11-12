// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciL3OutStaticRouteNextHopConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop#annotation DataAciL3OutStaticRouteNextHop#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop#description DataAciL3OutStaticRouteNextHop#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop#id DataAciL3OutStaticRouteNextHop#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop#name_alias DataAciL3OutStaticRouteNextHop#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop#nexthop_profile_type DataAciL3OutStaticRouteNextHop#nexthop_profile_type}
  */
  readonly nexthopProfileType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop#nh_addr DataAciL3OutStaticRouteNextHop#nh_addr}
  */
  readonly nhAddr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop#pref DataAciL3OutStaticRouteNextHop#pref}
  */
  readonly pref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop#static_route_dn DataAciL3OutStaticRouteNextHop#static_route_dn}
  */
  readonly staticRouteDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop aci_l3out_static_route_next_hop}
*/
export class DataAciL3OutStaticRouteNextHop extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_static_route_next_hop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciL3OutStaticRouteNextHop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciL3OutStaticRouteNextHop to import
  * @param importFromId The id of the existing DataAciL3OutStaticRouteNextHop that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciL3OutStaticRouteNextHop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_static_route_next_hop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/l3out_static_route_next_hop aci_l3out_static_route_next_hop} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciL3OutStaticRouteNextHopConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciL3OutStaticRouteNextHopConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_static_route_next_hop',
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
    this._nameAlias = config.nameAlias;
    this._nexthopProfileType = config.nexthopProfileType;
    this._nhAddr = config.nhAddr;
    this._pref = config.pref;
    this._staticRouteDn = config.staticRouteDn;
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

  // nexthop_profile_type - computed: true, optional: true, required: false
  private _nexthopProfileType?: string; 
  public get nexthopProfileType() {
    return this.getStringAttribute('nexthop_profile_type');
  }
  public set nexthopProfileType(value: string) {
    this._nexthopProfileType = value;
  }
  public resetNexthopProfileType() {
    this._nexthopProfileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopProfileTypeInput() {
    return this._nexthopProfileType;
  }

  // nh_addr - computed: false, optional: false, required: true
  private _nhAddr?: string; 
  public get nhAddr() {
    return this.getStringAttribute('nh_addr');
  }
  public set nhAddr(value: string) {
    this._nhAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nhAddrInput() {
    return this._nhAddr;
  }

  // pref - computed: true, optional: true, required: false
  private _pref?: string; 
  public get pref() {
    return this.getStringAttribute('pref');
  }
  public set pref(value: string) {
    this._pref = value;
  }
  public resetPref() {
    this._pref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefInput() {
    return this._pref;
  }

  // static_route_dn - computed: false, optional: false, required: true
  private _staticRouteDn?: string; 
  public get staticRouteDn() {
    return this.getStringAttribute('static_route_dn');
  }
  public set staticRouteDn(value: string) {
    this._staticRouteDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRouteDnInput() {
    return this._staticRouteDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      nexthop_profile_type: cdktf.stringToTerraform(this._nexthopProfileType),
      nh_addr: cdktf.stringToTerraform(this._nhAddr),
      pref: cdktf.stringToTerraform(this._pref),
      static_route_dn: cdktf.stringToTerraform(this._staticRouteDn),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop_profile_type: {
        value: cdktf.stringToHclTerraform(this._nexthopProfileType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nh_addr: {
        value: cdktf.stringToHclTerraform(this._nhAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pref: {
        value: cdktf.stringToHclTerraform(this._pref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_route_dn: {
        value: cdktf.stringToHclTerraform(this._staticRouteDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
