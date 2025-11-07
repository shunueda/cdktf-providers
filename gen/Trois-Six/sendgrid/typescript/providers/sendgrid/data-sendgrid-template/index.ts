// https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/data-sources/template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSendgridTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/data-sources/template#generation DataSendgridTemplate#generation}
  */
  readonly generation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/data-sources/template#id DataSendgridTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the template to retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/data-sources/template#name DataSendgridTemplate#name}
  */
  readonly name?: string;
  /**
  * The ID of the template to retrieve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/data-sources/template#template_id DataSendgridTemplate#template_id}
  */
  readonly templateId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/data-sources/template sendgrid_template}
*/
export class DataSendgridTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sendgrid_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSendgridTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSendgridTemplate to import
  * @param importFromId The id of the existing DataSendgridTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/data-sources/template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSendgridTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sendgrid_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/data-sources/template sendgrid_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSendgridTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSendgridTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sendgrid_template',
      terraformGeneratorMetadata: {
        providerName: 'sendgrid',
        providerVersion: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._generation = config.generation;
    this._id = config.id;
    this._name = config.name;
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // generation - computed: true, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
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

  // name - computed: true, optional: true, required: false
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      generation: cdktf.stringToTerraform(this._generation),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      template_id: cdktf.stringToTerraform(this._templateId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      generation: {
        value: cdktf.stringToHclTerraform(this._generation),
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
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
