// https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/container_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMittwaldContainerImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The image to use for the container. Follows the usual Docker image format, e.g. `nginx:latest` or `registry.example.com/my-image:latest`. You _can_ omit the tag, in which case `latest` will be used. This will trigger a warning, however.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/container_image#image DataMittwaldContainerImage#image}
  */
  readonly image: string;
  /**
  * The ID of the project where the image is stored. This attribute (or `registry_id`)  is required if the image is not public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/container_image#project_id DataMittwaldContainerImage#project_id}
  */
  readonly projectId?: string;
  /**
  * The ID of the registry where the image is stored. This attribute (or `project_id`) is required if the image is not public.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/container_image#registry_id DataMittwaldContainerImage#registry_id}
  */
  readonly registryId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/container_image mittwald_container_image}
*/
export class DataMittwaldContainerImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mittwald_container_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMittwaldContainerImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMittwaldContainerImage to import
  * @param importFromId The id of the existing DataMittwaldContainerImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/container_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMittwaldContainerImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mittwald_container_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.1/docs/data-sources/container_image mittwald_container_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMittwaldContainerImageConfig
  */
  public constructor(scope: Construct, id: string, config: DataMittwaldContainerImageConfig) {
    super(scope, id, {
      terraformResourceType: 'mittwald_container_image',
      terraformGeneratorMetadata: {
        providerName: 'mittwald',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._image = config.image;
    this._projectId = config.projectId;
    this._registryId = config.registryId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getListAttribute('command');
  }

  // entrypoint - computed: true, optional: false, required: false
  public get entrypoint() {
    return this.getListAttribute('entrypoint');
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // registry_id - computed: false, optional: true, required: false
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  public resetRegistryId() {
    this._registryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      image: cdktf.stringToTerraform(this._image),
      project_id: cdktf.stringToTerraform(this._projectId),
      registry_id: cdktf.stringToTerraform(this._registryId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
