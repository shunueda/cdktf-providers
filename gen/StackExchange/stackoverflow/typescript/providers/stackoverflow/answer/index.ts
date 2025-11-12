// https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/answer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AnswerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The answer content in Markdown format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/answer#body_markdown Answer#body_markdown}
  */
  readonly bodyMarkdown: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/answer#id Answer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The question identifier that this answer applies to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/answer#question_id Answer#question_id}
  */
  readonly questionId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/answer stackoverflow_answer}
*/
export class Answer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackoverflow_answer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Answer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Answer to import
  * @param importFromId The id of the existing Answer that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/answer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Answer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackoverflow_answer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackexchange/stackoverflow/1.0.5/docs/resources/answer stackoverflow_answer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AnswerConfig
  */
  public constructor(scope: Construct, id: string, config: AnswerConfig) {
    super(scope, id, {
      terraformResourceType: 'stackoverflow_answer',
      terraformGeneratorMetadata: {
        providerName: 'stackoverflow',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bodyMarkdown = config.bodyMarkdown;
    this._id = config.id;
    this._questionId = config.questionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body_markdown - computed: false, optional: false, required: true
  private _bodyMarkdown?: string; 
  public get bodyMarkdown() {
    return this.getStringAttribute('body_markdown');
  }
  public set bodyMarkdown(value: string) {
    this._bodyMarkdown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyMarkdownInput() {
    return this._bodyMarkdown;
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

  // question_id - computed: false, optional: false, required: true
  private _questionId?: number; 
  public get questionId() {
    return this.getNumberAttribute('question_id');
  }
  public set questionId(value: number) {
    this._questionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get questionIdInput() {
    return this._questionId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      body_markdown: cdktf.stringToTerraform(this._bodyMarkdown),
      id: cdktf.stringToTerraform(this._id),
      question_id: cdktf.numberToTerraform(this._questionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      body_markdown: {
        value: cdktf.stringToHclTerraform(this._bodyMarkdown),
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
      question_id: {
        value: cdktf.numberToHclTerraform(this._questionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
