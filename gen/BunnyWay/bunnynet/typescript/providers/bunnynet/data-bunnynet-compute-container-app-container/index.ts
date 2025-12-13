// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/data-sources/compute_container_app_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBunnynetComputeContainerAppContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The application unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/data-sources/compute_container_app_container#app DataBunnynetComputeContainerAppContainer#app}
  */
  readonly app: string;
  /**
  * The container name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/data-sources/compute_container_app_container#name DataBunnynetComputeContainerAppContainer#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/data-sources/compute_container_app_container bunnynet_compute_container_app_container}
*/
export class DataBunnynetComputeContainerAppContainer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_compute_container_app_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBunnynetComputeContainerAppContainer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBunnynetComputeContainerAppContainer to import
  * @param importFromId The id of the existing DataBunnynetComputeContainerAppContainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/data-sources/compute_container_app_container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBunnynetComputeContainerAppContainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_compute_container_app_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.4/docs/data-sources/compute_container_app_container bunnynet_compute_container_app_container} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBunnynetComputeContainerAppContainerConfig
  */
  public constructor(scope: Construct, id: string, config: DataBunnynetComputeContainerAppContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_compute_container_app_container',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.4',
        providerVersionConstraint: '0.11.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._app = config.app;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: cdktf.stringToTerraform(this._app),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktf.stringToHclTerraform(this._app),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
