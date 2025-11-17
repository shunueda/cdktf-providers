// https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/resource_manager_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceManagerResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the server access resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/resource_manager_resource#description ResourceManagerResource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/resource_manager_resource#id ResourceManagerResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of server access resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/resource_manager_resource#name ResourceManagerResource#name}
  */
  readonly name: string;
  /**
  * The parameter values for the fields of the resource type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/resource_manager_resource#parameter_values ResourceManagerResource#parameter_values}
  */
  readonly parameterValues?: { [key: string]: string };
  /**
  * The resource labels associated with the server access resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/resource_manager_resource#resource_labels ResourceManagerResource#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * The resource type name associated with the server access resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/resource_manager_resource#resource_type ResourceManagerResource#resource_type}
  */
  readonly resourceType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/resource_manager_resource britive_resource_manager_resource}
*/
export class ResourceManagerResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_resource_manager_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceManagerResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceManagerResource to import
  * @param importFromId The id of the existing ResourceManagerResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/resource_manager_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceManagerResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_resource_manager_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/resource_manager_resource britive_resource_manager_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceManagerResourceConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceManagerResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_resource_manager_resource',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.5',
        providerVersionConstraint: '2.2.5'
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
    this._id = config.id;
    this._name = config.name;
    this._parameterValues = config.parameterValues;
    this._resourceLabels = config.resourceLabels;
    this._resourceType = config.resourceType;
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

  // parameter_values - computed: false, optional: true, required: false
  private _parameterValues?: { [key: string]: string }; 
  public get parameterValues() {
    return this.getStringMapAttribute('parameter_values');
  }
  public set parameterValues(value: { [key: string]: string }) {
    this._parameterValues = value;
  }
  public resetParameterValues() {
    this._parameterValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValuesInput() {
    return this._parameterValues;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // resource_type_id - computed: true, optional: false, required: false
  public get resourceTypeId() {
    return this.getStringAttribute('resource_type_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parameter_values: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameterValues),
      resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceLabels),
      resource_type: cdktf.stringToTerraform(this._resourceType),
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
      parameter_values: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._parameterValues),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resource_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
