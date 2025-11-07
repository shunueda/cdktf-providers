// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_aws_extended_resource_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanAwsExtendedResourceDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_aws_extended_resource_definition#id OceanAwsExtendedResourceDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_aws_extended_resource_definition#name OceanAwsExtendedResourceDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_aws_extended_resource_definition#resource_mapping OceanAwsExtendedResourceDefinition#resource_mapping}
  */
  readonly resourceMapping: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_aws_extended_resource_definition spotinst_ocean_aws_extended_resource_definition}
*/
export class OceanAwsExtendedResourceDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_aws_extended_resource_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OceanAwsExtendedResourceDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OceanAwsExtendedResourceDefinition to import
  * @param importFromId The id of the existing OceanAwsExtendedResourceDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_aws_extended_resource_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OceanAwsExtendedResourceDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_ocean_aws_extended_resource_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/ocean_aws_extended_resource_definition spotinst_ocean_aws_extended_resource_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanAwsExtendedResourceDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: OceanAwsExtendedResourceDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_aws_extended_resource_definition',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0'
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
    this._resourceMapping = config.resourceMapping;
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

  // resource_mapping - computed: false, optional: false, required: true
  private _resourceMapping?: { [key: string]: string }; 
  public get resourceMapping() {
    return this.getStringMapAttribute('resource_mapping');
  }
  public set resourceMapping(value: { [key: string]: string }) {
    this._resourceMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMappingInput() {
    return this._resourceMapping;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceMapping),
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
      resource_mapping: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceMapping),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
