// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#always_compare_med RouterBgp#always_compare_med}
  */
  readonly alwaysCompareMed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#as RouterBgp#as}
  */
  readonly as?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#bestpath_cmp_routerid RouterBgp#bestpath_cmp_routerid}
  */
  readonly bestpathCmpRouterid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#deterministic_med RouterBgp#deterministic_med}
  */
  readonly deterministicMed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#id RouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#redistribute_connected RouterBgp#redistribute_connected}
  */
  readonly redistributeConnected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#redistribute_connected6 RouterBgp#redistribute_connected6}
  */
  readonly redistributeConnected6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#redistribute_ospf RouterBgp#redistribute_ospf}
  */
  readonly redistributeOspf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#redistribute_static RouterBgp#redistribute_static}
  */
  readonly redistributeStatic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#redistribute_static6 RouterBgp#redistribute_static6}
  */
  readonly redistributeStatic6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#router_id RouterBgp#router_id}
  */
  readonly routerId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp fortiadc_router_bgp}
*/
export class RouterBgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_router_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterBgp to import
  * @param importFromId The id of the existing RouterBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_router_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/router_bgp fortiadc_router_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterBgpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RouterBgpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_router_bgp',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alwaysCompareMed = config.alwaysCompareMed;
    this._as = config.as;
    this._bestpathCmpRouterid = config.bestpathCmpRouterid;
    this._deterministicMed = config.deterministicMed;
    this._id = config.id;
    this._redistributeConnected = config.redistributeConnected;
    this._redistributeConnected6 = config.redistributeConnected6;
    this._redistributeOspf = config.redistributeOspf;
    this._redistributeStatic = config.redistributeStatic;
    this._redistributeStatic6 = config.redistributeStatic6;
    this._routerId = config.routerId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_compare_med - computed: true, optional: true, required: false
  private _alwaysCompareMed?: string; 
  public get alwaysCompareMed() {
    return this.getStringAttribute('always_compare_med');
  }
  public set alwaysCompareMed(value: string) {
    this._alwaysCompareMed = value;
  }
  public resetAlwaysCompareMed() {
    this._alwaysCompareMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysCompareMedInput() {
    return this._alwaysCompareMed;
  }

  // as - computed: true, optional: true, required: false
  private _as?: string; 
  public get as() {
    return this.getStringAttribute('as');
  }
  public set as(value: string) {
    this._as = value;
  }
  public resetAs() {
    this._as = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asInput() {
    return this._as;
  }

  // bestpath_cmp_routerid - computed: true, optional: true, required: false
  private _bestpathCmpRouterid?: string; 
  public get bestpathCmpRouterid() {
    return this.getStringAttribute('bestpath_cmp_routerid');
  }
  public set bestpathCmpRouterid(value: string) {
    this._bestpathCmpRouterid = value;
  }
  public resetBestpathCmpRouterid() {
    this._bestpathCmpRouterid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestpathCmpRouteridInput() {
    return this._bestpathCmpRouterid;
  }

  // deterministic_med - computed: true, optional: true, required: false
  private _deterministicMed?: string; 
  public get deterministicMed() {
    return this.getStringAttribute('deterministic_med');
  }
  public set deterministicMed(value: string) {
    this._deterministicMed = value;
  }
  public resetDeterministicMed() {
    this._deterministicMed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deterministicMedInput() {
    return this._deterministicMed;
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

  // redistribute_connected - computed: true, optional: true, required: false
  private _redistributeConnected?: string; 
  public get redistributeConnected() {
    return this.getStringAttribute('redistribute_connected');
  }
  public set redistributeConnected(value: string) {
    this._redistributeConnected = value;
  }
  public resetRedistributeConnected() {
    this._redistributeConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnectedInput() {
    return this._redistributeConnected;
  }

  // redistribute_connected6 - computed: true, optional: true, required: false
  private _redistributeConnected6?: string; 
  public get redistributeConnected6() {
    return this.getStringAttribute('redistribute_connected6');
  }
  public set redistributeConnected6(value: string) {
    this._redistributeConnected6 = value;
  }
  public resetRedistributeConnected6() {
    this._redistributeConnected6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeConnected6Input() {
    return this._redistributeConnected6;
  }

  // redistribute_ospf - computed: true, optional: true, required: false
  private _redistributeOspf?: string; 
  public get redistributeOspf() {
    return this.getStringAttribute('redistribute_ospf');
  }
  public set redistributeOspf(value: string) {
    this._redistributeOspf = value;
  }
  public resetRedistributeOspf() {
    this._redistributeOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeOspfInput() {
    return this._redistributeOspf;
  }

  // redistribute_static - computed: true, optional: true, required: false
  private _redistributeStatic?: string; 
  public get redistributeStatic() {
    return this.getStringAttribute('redistribute_static');
  }
  public set redistributeStatic(value: string) {
    this._redistributeStatic = value;
  }
  public resetRedistributeStatic() {
    this._redistributeStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStaticInput() {
    return this._redistributeStatic;
  }

  // redistribute_static6 - computed: true, optional: true, required: false
  private _redistributeStatic6?: string; 
  public get redistributeStatic6() {
    return this.getStringAttribute('redistribute_static6');
  }
  public set redistributeStatic6(value: string) {
    this._redistributeStatic6 = value;
  }
  public resetRedistributeStatic6() {
    this._redistributeStatic6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributeStatic6Input() {
    return this._redistributeStatic6;
  }

  // router_id - computed: true, optional: true, required: false
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  public resetRouterId() {
    this._routerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_compare_med: cdktf.stringToTerraform(this._alwaysCompareMed),
      as: cdktf.stringToTerraform(this._as),
      bestpath_cmp_routerid: cdktf.stringToTerraform(this._bestpathCmpRouterid),
      deterministic_med: cdktf.stringToTerraform(this._deterministicMed),
      id: cdktf.stringToTerraform(this._id),
      redistribute_connected: cdktf.stringToTerraform(this._redistributeConnected),
      redistribute_connected6: cdktf.stringToTerraform(this._redistributeConnected6),
      redistribute_ospf: cdktf.stringToTerraform(this._redistributeOspf),
      redistribute_static: cdktf.stringToTerraform(this._redistributeStatic),
      redistribute_static6: cdktf.stringToTerraform(this._redistributeStatic6),
      router_id: cdktf.stringToTerraform(this._routerId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      always_compare_med: {
        value: cdktf.stringToHclTerraform(this._alwaysCompareMed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      as: {
        value: cdktf.stringToHclTerraform(this._as),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bestpath_cmp_routerid: {
        value: cdktf.stringToHclTerraform(this._bestpathCmpRouterid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deterministic_med: {
        value: cdktf.stringToHclTerraform(this._deterministicMed),
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
      redistribute_connected: {
        value: cdktf.stringToHclTerraform(this._redistributeConnected),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_connected6: {
        value: cdktf.stringToHclTerraform(this._redistributeConnected6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_ospf: {
        value: cdktf.stringToHclTerraform(this._redistributeOspf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_static: {
        value: cdktf.stringToHclTerraform(this._redistributeStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redistribute_static6: {
        value: cdktf.stringToHclTerraform(this._redistributeStatic6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
