// https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/docker_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DockerImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/docker_image#endpoint_id DockerImage#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/docker_image#id DockerImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/docker_image#image DockerImage#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/docker_image#registry_auth DockerImage#registry_auth}
  */
  readonly registryAuth?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/docker_image portainer_docker_image}
*/
export class DockerImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "portainer_docker_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DockerImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DockerImage to import
  * @param importFromId The id of the existing DockerImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/docker_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DockerImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "portainer_docker_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/portainer/portainer/1.20.1/docs/resources/docker_image portainer_docker_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DockerImageConfig
  */
  public constructor(scope: Construct, id: string, config: DockerImageConfig) {
    super(scope, id, {
      terraformResourceType: 'portainer_docker_image',
      terraformGeneratorMetadata: {
        providerName: 'portainer',
        providerVersion: '1.20.1',
        providerVersionConstraint: '1.20.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._image = config.image;
    this._registryAuth = config.registryAuth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

  // registry_auth - computed: false, optional: true, required: false
  private _registryAuth?: string; 
  public get registryAuth() {
    return this.getStringAttribute('registry_auth');
  }
  public set registryAuth(value: string) {
    this._registryAuth = value;
  }
  public resetRegistryAuth() {
    this._registryAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryAuthInput() {
    return this._registryAuth;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      image: cdktf.stringToTerraform(this._image),
      registry_auth: cdktf.stringToTerraform(this._registryAuth),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_id: {
        value: cdktf.numberToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image: {
        value: cdktf.stringToHclTerraform(this._image),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_auth: {
        value: cdktf.stringToHclTerraform(this._registryAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
