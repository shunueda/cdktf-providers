// https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_instance__import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingInstancesInstanceRoutingOptionsInstanceImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_instance__import#id RoutingInstancesInstanceRoutingOptionsInstanceImport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * xpath is: config.Groups.V_instance.V_routing__options. Import policy for instance RIBs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_instance__import#instance__import RoutingInstancesInstanceRoutingOptionsInstanceImport#instance__import}
  */
  readonly instanceImport?: string;
  /**
  * xpath is: config.Groups.V_instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_instance__import#name RoutingInstancesInstanceRoutingOptionsInstanceImport#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_instance__import#resource_name RoutingInstancesInstanceRoutingOptionsInstanceImport#resource_name}
  */
  readonly resourceName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_instance__import junos-vsrx_Routing__InstancesInstanceRouting__OptionsInstance__Import}
*/
export class RoutingInstancesInstanceRoutingOptionsInstanceImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos-vsrx_Routing__InstancesInstanceRouting__OptionsInstance__Import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingInstancesInstanceRoutingOptionsInstanceImport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingInstancesInstanceRoutingOptionsInstanceImport to import
  * @param importFromId The id of the existing RoutingInstancesInstanceRoutingOptionsInstanceImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_instance__import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingInstancesInstanceRoutingOptionsInstanceImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos-vsrx_Routing__InstancesInstanceRouting__OptionsInstance__Import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/junos-vsrx/20.32.106/docs/resources/routing__instances_instance_routing__options_instance__import junos-vsrx_Routing__InstancesInstanceRouting__OptionsInstance__Import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingInstancesInstanceRoutingOptionsInstanceImportConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingInstancesInstanceRoutingOptionsInstanceImportConfig) {
    super(scope, id, {
      terraformResourceType: 'junos-vsrx_Routing__InstancesInstanceRouting__OptionsInstance__Import',
      terraformGeneratorMetadata: {
        providerName: 'junos-vsrx',
        providerVersion: '20.32.106'
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
    this._instanceImport = config.instanceImport;
    this._name = config.name;
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

  // instance__import - computed: false, optional: true, required: false
  private _instanceImport?: string; 
  public get instanceImport() {
    return this.getStringAttribute('instance__import');
  }
  public set instanceImport(value: string) {
    this._instanceImport = value;
  }
  public resetInstanceImport() {
    this._instanceImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceImportInput() {
    return this._instanceImport;
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
      instance__import: cdktf.stringToTerraform(this._instanceImport),
      name: cdktf.stringToTerraform(this._name),
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
      instance__import: {
        value: cdktf.stringToHclTerraform(this._instanceImport),
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
