// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/docker_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DockerRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/docker_repository#full_description DockerRepository#full_description}
  */
  readonly fullDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/docker_repository#id DockerRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/docker_repository#name DockerRepository#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/docker_repository#namespace_id DockerRepository#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/docker_repository#short_description DockerRepository#short_description}
  */
  readonly shortDescription?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/docker_repository hsdp_docker_repository}
*/
export class DockerRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_docker_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DockerRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DockerRepository to import
  * @param importFromId The id of the existing DockerRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/docker_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DockerRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_docker_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/resources/docker_repository hsdp_docker_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DockerRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: DockerRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_docker_repository',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fullDescription = config.fullDescription;
    this._id = config.id;
    this._name = config.name;
    this._namespaceId = config.namespaceId;
    this._shortDescription = config.shortDescription;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compressed_sizes - computed: true, optional: false, required: false
  public get compressedSizes() {
    return this.getNumberListAttribute('compressed_sizes');
  }

  // full_description - computed: false, optional: true, required: false
  private _fullDescription?: string; 
  public get fullDescription() {
    return this.getStringAttribute('full_description');
  }
  public set fullDescription(value: string) {
    this._fullDescription = value;
  }
  public resetFullDescription() {
    this._fullDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullDescriptionInput() {
    return this._fullDescription;
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getNumberListAttribute('ids');
  }

  // image_digests - computed: true, optional: false, required: false
  public get imageDigests() {
    return this.getListAttribute('image_digests');
  }

  // image_ids - computed: true, optional: false, required: false
  public get imageIds() {
    return this.getListAttribute('image_ids');
  }

  // latest_tag - computed: true, optional: false, required: false
  public get latestTag() {
    return this.getStringAttribute('latest_tag');
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

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // num_pulls - computed: true, optional: false, required: false
  public get numPulls() {
    return this.getNumberListAttribute('num_pulls');
  }

  // short_description - computed: false, optional: true, required: false
  private _shortDescription?: string; 
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }
  public set shortDescription(value: string) {
    this._shortDescription = value;
  }
  public resetShortDescription() {
    this._shortDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortDescriptionInput() {
    return this._shortDescription;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // total_pulls - computed: true, optional: false, required: false
  public get totalPulls() {
    return this.getNumberAttribute('total_pulls');
  }

  // total_tags - computed: true, optional: false, required: false
  public get totalTags() {
    return this.getNumberAttribute('total_tags');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getListAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      full_description: cdktf.stringToTerraform(this._fullDescription),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      short_description: cdktf.stringToTerraform(this._shortDescription),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      full_description: {
        value: cdktf.stringToHclTerraform(this._fullDescription),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      short_description: {
        value: cdktf.stringToHclTerraform(this._shortDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
