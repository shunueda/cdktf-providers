// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/text_chart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TextChartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the chart (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/text_chart#description TextChart#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/text_chart#id TextChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Markdown text to display. More info at: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/text_chart#markdown TextChart#markdown}
  */
  readonly markdown: string;
  /**
  * Name of the chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/text_chart#name TextChart#name}
  */
  readonly name: string;
  /**
  * Tags associated with the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/text_chart#tags TextChart#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/text_chart signalfx_text_chart}
*/
export class TextChart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_text_chart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TextChart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TextChart to import
  * @param importFromId The id of the existing TextChart that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/text_chart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TextChart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_text_chart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/text_chart signalfx_text_chart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TextChartConfig
  */
  public constructor(scope: Construct, id: string, config: TextChartConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_text_chart',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.1',
        providerVersionConstraint: '9.23.1'
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
    this._markdown = config.markdown;
    this._name = config.name;
    this._tags = config.tags;
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

  // markdown - computed: false, optional: false, required: true
  private _markdown?: string; 
  public get markdown() {
    return this.getStringAttribute('markdown');
  }
  public set markdown(value: string) {
    this._markdown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get markdownInput() {
    return this._markdown;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      markdown: cdktf.stringToTerraform(this._markdown),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
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
      markdown: {
        value: cdktf.stringToHclTerraform(this._markdown),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
