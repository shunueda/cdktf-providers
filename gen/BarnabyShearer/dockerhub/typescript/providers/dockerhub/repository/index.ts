// https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Repository description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repository#description Repository#description}
  */
  readonly description?: string;
  /**
  * Repository full description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repository#full_description Repository#full_description}
  */
  readonly fullDescription?: string;
  /**
  * Repository name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repository#name Repository#name}
  */
  readonly name: string;
  /**
  * Repository namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repository#namespace Repository#namespace}
  */
  readonly namespace: string;
  /**
  * Is the repository private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repository#private Repository#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repository dockerhub_repository}
*/
export class Repository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dockerhub_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Repository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Repository to import
  * @param importFromId The id of the existing Repository that should be imported. Refer to the {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Repository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dockerhub_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/barnabyshearer/dockerhub/0.0.15/docs/resources/repository dockerhub_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'dockerhub_repository',
      terraformGeneratorMetadata: {
        providerName: 'dockerhub',
        providerVersion: '0.0.15',
        providerVersionConstraint: '0.0.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._fullDescription = config.fullDescription;
    this._name = config.name;
    this._namespace = config.namespace;
    this._private = config.private;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // private - computed: false, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      full_description: cdktf.stringToTerraform(this._fullDescription),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      private: cdktf.booleanToTerraform(this._private),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_description: {
        value: cdktf.stringToHclTerraform(this._fullDescription),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private: {
        value: cdktf.booleanToHclTerraform(this._private),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
