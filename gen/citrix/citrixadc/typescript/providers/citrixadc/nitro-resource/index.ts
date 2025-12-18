// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nitro_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NitroResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nitro_resource#attributes NitroResource#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nitro_resource#id NitroResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nitro_resource#non_updateable_attributes NitroResource#non_updateable_attributes}
  */
  readonly nonUpdateableAttributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nitro_resource#workflow NitroResource#workflow}
  */
  readonly workflow: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nitro_resource#workflows_file NitroResource#workflows_file}
  */
  readonly workflowsFile: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nitro_resource citrixadc_nitro_resource}
*/
export class NitroResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nitro_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NitroResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NitroResource to import
  * @param importFromId The id of the existing NitroResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nitro_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NitroResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nitro_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nitro_resource citrixadc_nitro_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NitroResourceConfig
  */
  public constructor(scope: Construct, id: string, config: NitroResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nitro_resource',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._id = config.id;
    this._nonUpdateableAttributes = config.nonUpdateableAttributes;
    this._workflow = config.workflow;
    this._workflowsFile = config.workflowsFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
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

  // non_updateable_attributes - computed: true, optional: true, required: false
  private _nonUpdateableAttributes?: { [key: string]: string }; 
  public get nonUpdateableAttributes() {
    return this.getStringMapAttribute('non_updateable_attributes');
  }
  public set nonUpdateableAttributes(value: { [key: string]: string }) {
    this._nonUpdateableAttributes = value;
  }
  public resetNonUpdateableAttributes() {
    this._nonUpdateableAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonUpdateableAttributesInput() {
    return this._nonUpdateableAttributes;
  }

  // workflow - computed: false, optional: false, required: true
  private _workflow?: string; 
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
  public set workflow(value: string) {
    this._workflow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }

  // workflows_file - computed: false, optional: false, required: true
  private _workflowsFile?: string; 
  public get workflowsFile() {
    return this.getStringAttribute('workflows_file');
  }
  public set workflowsFile(value: string) {
    this._workflowsFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowsFileInput() {
    return this._workflowsFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      id: cdktf.stringToTerraform(this._id),
      non_updateable_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._nonUpdateableAttributes),
      workflow: cdktf.stringToTerraform(this._workflow),
      workflows_file: cdktf.stringToTerraform(this._workflowsFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_updateable_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nonUpdateableAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      workflow: {
        value: cdktf.stringToHclTerraform(this._workflow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflows_file: {
        value: cdktf.stringToHclTerraform(this._workflowsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
