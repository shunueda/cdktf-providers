// https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/registry_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHerokuxRegistryImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/registry_image#app_id DataHerokuxRegistryImage#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/registry_image#docker_tag DataHerokuxRegistryImage#docker_tag}
  */
  readonly dockerTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/registry_image#id DataHerokuxRegistryImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/registry_image#process_type DataHerokuxRegistryImage#process_type}
  */
  readonly processType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/registry_image herokux_registry_image}
*/
export class DataHerokuxRegistryImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "herokux_registry_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHerokuxRegistryImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHerokuxRegistryImage to import
  * @param importFromId The id of the existing DataHerokuxRegistryImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/registry_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHerokuxRegistryImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "herokux_registry_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/data-sources/registry_image herokux_registry_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHerokuxRegistryImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataHerokuxRegistryImageConfig) {
    super(scope, id, {
      terraformResourceType: 'herokux_registry_image',
      terraformGeneratorMetadata: {
        providerName: 'herokux',
        providerVersion: '1.4.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appId = config.appId;
    this._dockerTag = config.dockerTag;
    this._id = config.id;
    this._processType = config.processType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // docker_tag - computed: false, optional: true, required: false
  private _dockerTag?: string; 
  public get dockerTag() {
    return this.getStringAttribute('docker_tag');
  }
  public set dockerTag(value: string) {
    this._dockerTag = value;
  }
  public resetDockerTag() {
    this._dockerTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerTagInput() {
    return this._dockerTag;
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

  // number_of_layers - computed: true, optional: false, required: false
  public get numberOfLayers() {
    return this.getNumberAttribute('number_of_layers');
  }

  // process_type - computed: false, optional: false, required: true
  private _processType?: string; 
  public get processType() {
    return this.getStringAttribute('process_type');
  }
  public set processType(value: string) {
    this._processType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processTypeInput() {
    return this._processType;
  }

  // schema_version - computed: true, optional: false, required: false
  public get schemaVersion() {
    return this.getNumberAttribute('schema_version');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      docker_tag: cdktf.stringToTerraform(this._dockerTag),
      id: cdktf.stringToTerraform(this._id),
      process_type: cdktf.stringToTerraform(this._processType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_tag: {
        value: cdktf.stringToHclTerraform(this._dockerTag),
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
      process_type: {
        value: cdktf.stringToHclTerraform(this._processType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
