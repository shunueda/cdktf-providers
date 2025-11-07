// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/router_bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiadcRouterBgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/router_bgp#id DataFortiadcRouterBgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/router_bgp fortiadc_router_bgp}
*/
export class DataFortiadcRouterBgp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_router_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiadcRouterBgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiadcRouterBgp to import
  * @param importFromId The id of the existing DataFortiadcRouterBgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/router_bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiadcRouterBgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_router_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/data-sources/router_bgp fortiadc_router_bgp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiadcRouterBgpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiadcRouterBgpConfig = {}) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_compare_med - computed: true, optional: false, required: false
  public get alwaysCompareMed() {
    return this.getStringAttribute('always_compare_med');
  }

  // as - computed: true, optional: false, required: false
  public get as() {
    return this.getStringAttribute('as');
  }

  // bestpath_cmp_routerid - computed: true, optional: false, required: false
  public get bestpathCmpRouterid() {
    return this.getStringAttribute('bestpath_cmp_routerid');
  }

  // deterministic_med - computed: true, optional: false, required: false
  public get deterministicMed() {
    return this.getStringAttribute('deterministic_med');
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

  // redistribute_connected - computed: true, optional: false, required: false
  public get redistributeConnected() {
    return this.getStringAttribute('redistribute_connected');
  }

  // redistribute_connected6 - computed: true, optional: false, required: false
  public get redistributeConnected6() {
    return this.getStringAttribute('redistribute_connected6');
  }

  // redistribute_ospf - computed: true, optional: false, required: false
  public get redistributeOspf() {
    return this.getStringAttribute('redistribute_ospf');
  }

  // redistribute_static - computed: true, optional: false, required: false
  public get redistributeStatic() {
    return this.getStringAttribute('redistribute_static');
  }

  // redistribute_static6 - computed: true, optional: false, required: false
  public get redistributeStatic6() {
    return this.getStringAttribute('redistribute_static6');
  }

  // router_id - computed: true, optional: false, required: false
  public get routerId() {
    return this.getStringAttribute('router_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
