// https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_static_route_next__table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingInstancesInstanceRoutingOptionsStaticRouteNextTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_static_route_next__table#id RoutingInstancesInstanceRoutingOptionsStaticRouteNextTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * xpath is: config.Groups.V_instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_static_route_next__table#name RoutingInstancesInstanceRoutingOptionsStaticRouteNextTable#name}
  */
  readonly name?: string;
  /**
  * xpath is: config.Groups.V_instance.V_route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_static_route_next__table#name__1 RoutingInstancesInstanceRoutingOptionsStaticRouteNextTable#name__1}
  */
  readonly name1?: string;
  /**
  * xpath is: config.Groups.V_instance.V_route. Next hop to another table
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_static_route_next__table#next__table RoutingInstancesInstanceRoutingOptionsStaticRouteNextTable#next__table}
  */
  readonly nextTable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_static_route_next__table#resource_name RoutingInstancesInstanceRoutingOptionsStaticRouteNextTable#resource_name}
  */
  readonly resourceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_static_route_next__table junos-vsrx_Routing__InstancesInstanceRouting__OptionsStaticRouteNext__Table}
*/
export class RoutingInstancesInstanceRoutingOptionsStaticRouteNextTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos-vsrx_Routing__InstancesInstanceRouting__OptionsStaticRouteNext__Table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingInstancesInstanceRoutingOptionsStaticRouteNextTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingInstancesInstanceRoutingOptionsStaticRouteNextTable to import
  * @param importFromId The id of the existing RoutingInstancesInstanceRoutingOptionsStaticRouteNextTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_static_route_next__table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingInstancesInstanceRoutingOptionsStaticRouteNextTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos-vsrx_Routing__InstancesInstanceRouting__OptionsStaticRouteNext__Table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_static_route_next__table junos-vsrx_Routing__InstancesInstanceRouting__OptionsStaticRouteNext__Table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingInstancesInstanceRoutingOptionsStaticRouteNextTableConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingInstancesInstanceRoutingOptionsStaticRouteNextTableConfig) {
    super(scope, id, {
      terraformResourceType: 'junos-vsrx_Routing__InstancesInstanceRouting__OptionsStaticRouteNext__Table',
      terraformGeneratorMetadata: {
        providerName: 'junos-vsrx',
        providerVersion: '20.32.106',
        providerVersionConstraint: '20.32.106'
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
    this._name = config.name;
    this._name1 = config.name1;
    this._nextTable = config.nextTable;
    this._resourceName = config.resourceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name__1 - computed: false, optional: true, required: false
  private _name1?: string; 
  public get name1() {
    return this.getStringAttribute('name__1');
  }
  public set name1(value: string) {
    this._name1 = value;
  }
  public resetName1() {
    this._name1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get name1Input() {
    return this._name1;
  }

  // next__table - computed: false, optional: true, required: false
  private _nextTable?: string; 
  public get nextTable() {
    return this.getStringAttribute('next__table');
  }
  public set nextTable(value: string) {
    this._nextTable = value;
  }
  public resetNextTable() {
    this._nextTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextTableInput() {
    return this._nextTable;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name__1: cdktf.stringToTerraform(this._name1),
      next__table: cdktf.stringToTerraform(this._nextTable),
      resource_name: cdktf.stringToTerraform(this._resourceName),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name__1: {
        value: cdktf.stringToHclTerraform(this._name1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next__table: {
        value: cdktf.stringToHclTerraform(this._nextTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
