// https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/data-sources/ip_routes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRouterosIpRoutesConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/data-sources/ip_routes#___path___ DataRouterosIpRoutes#___path___}
  */
  readonly path?: string;
  /**
  * Additional request filtering options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/data-sources/ip_routes#filter DataRouterosIpRoutes#filter}
  */
  readonly filter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/data-sources/ip_routes#id DataRouterosIpRoutes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataRouterosIpRoutesRoutes {
}

export function dataRouterosIpRoutesRoutesToTerraform(struct?: DataRouterosIpRoutesRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRouterosIpRoutesRoutesToHclTerraform(struct?: DataRouterosIpRoutesRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRouterosIpRoutesRoutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataRouterosIpRoutesRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRouterosIpRoutesRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // blackhole - computed: true, optional: false, required: false
  public get blackhole() {
    return this.getBooleanAttribute('blackhole');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // connect - computed: true, optional: false, required: false
  public get connect() {
    return this.getBooleanAttribute('connect');
  }

  // dhcp - computed: true, optional: false, required: false
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // distance - computed: true, optional: false, required: false
  public get distance() {
    return this.getNumberAttribute('distance');
  }

  // dst_address - computed: true, optional: false, required: false
  public get dstAddress() {
    return this.getStringAttribute('dst_address');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // ecmp - computed: true, optional: false, required: false
  public get ecmp() {
    return this.getBooleanAttribute('ecmp');
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // hw_offloaded - computed: true, optional: false, required: false
  public get hwOffloaded() {
    return this.getBooleanAttribute('hw_offloaded');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // immediate_gw - computed: true, optional: false, required: false
  public get immediateGw() {
    return this.getStringAttribute('immediate_gw');
  }

  // inactive - computed: true, optional: false, required: false
  public get inactive() {
    return this.getBooleanAttribute('inactive');
  }

  // local_address - computed: true, optional: false, required: false
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }

  // pref_src - computed: true, optional: false, required: false
  public get prefSrc() {
    return this.getStringAttribute('pref_src');
  }

  // routing_table - computed: true, optional: false, required: false
  public get routingTable() {
    return this.getStringAttribute('routing_table');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getNumberAttribute('scope');
  }

  // static - computed: true, optional: false, required: false
  public get static() {
    return this.getBooleanAttribute('static');
  }

  // suppress_hw_offload - computed: true, optional: false, required: false
  public get suppressHwOffload() {
    return this.getBooleanAttribute('suppress_hw_offload');
  }

  // target_scope - computed: true, optional: false, required: false
  public get targetScope() {
    return this.getNumberAttribute('target_scope');
  }

  // vrf_interface - computed: true, optional: false, required: false
  public get vrfInterface() {
    return this.getStringAttribute('vrf_interface');
  }
}

export class DataRouterosIpRoutesRoutesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataRouterosIpRoutesRoutesOutputReference {
    return new DataRouterosIpRoutesRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/data-sources/ip_routes routeros_ip_routes}
*/
export class DataRouterosIpRoutes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_routes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRouterosIpRoutes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRouterosIpRoutes to import
  * @param importFromId The id of the existing DataRouterosIpRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/data-sources/ip_routes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRouterosIpRoutes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_routes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.94.0/docs/data-sources/ip_routes routeros_ip_routes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRouterosIpRoutesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRouterosIpRoutesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_routes',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.94.0',
        providerVersionConstraint: '1.94.0'
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
    this._filter = config.filter;
    this._id = config.id;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: { [key: string]: string }; 
  public get filter() {
    return this.getStringMapAttribute('filter');
  }
  public set filter(value: { [key: string]: string }) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // routes - computed: true, optional: false, required: false
  private _routes = new DataRouterosIpRoutesRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      filter: cdktf.hashMapper(cdktf.stringToTerraform)(this._filter),
      id: cdktf.stringToTerraform(this._id),
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
      filter: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filter),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
