// https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/report_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReportTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The JSON encoded blocks of the report template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/report_template#blocks ReportTemplate#blocks}
  */
  readonly blocks: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/report_template#id ReportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The JSON encoded links of a report template with other report templates. Defaults to `[]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/report_template#links ReportTemplate#links}
  */
  readonly links?: string;
  /**
  * The name/symbol for the object within Shoreline and the op language (must be unique, only alphanumeric/underscore).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/report_template#name ReportTemplate#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/report_template shoreline_report_template}
*/
export class ReportTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "shoreline_report_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReportTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReportTemplate to import
  * @param importFromId The id of the existing ReportTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/report_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReportTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "shoreline_report_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/shorelinesoftware/shoreline/1.15.38/docs/resources/report_template shoreline_report_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReportTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ReportTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'shoreline_report_template',
      terraformGeneratorMetadata: {
        providerName: 'shoreline',
        providerVersion: '1.15.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blocks = config.blocks;
    this._id = config.id;
    this._links = config.links;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocks - computed: false, optional: false, required: true
  private _blocks?: string; 
  public get blocks() {
    return this.getStringAttribute('blocks');
  }
  public set blocks(value: string) {
    this._blocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksInput() {
    return this._blocks;
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

  // links - computed: false, optional: true, required: false
  private _links?: string; 
  public get links() {
    return this.getStringAttribute('links');
  }
  public set links(value: string) {
    this._links = value;
  }
  public resetLinks() {
    this._links = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blocks: cdktf.stringToTerraform(this._blocks),
      id: cdktf.stringToTerraform(this._id),
      links: cdktf.stringToTerraform(this._links),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blocks: {
        value: cdktf.stringToHclTerraform(this._blocks),
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
      links: {
        value: cdktf.stringToHclTerraform(this._links),
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
