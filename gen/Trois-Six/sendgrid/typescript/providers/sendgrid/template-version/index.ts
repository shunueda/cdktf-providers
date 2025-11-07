// https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemplateVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the version as the active version associated with the template. Only one version of a template can be active. The first version created for a template will automatically be set to Active. Allowed values: 0, 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version#active TemplateVersion#active}
  */
  readonly active?: number;
  /**
  * The editor used in the UI, allowed values: code (default), design.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version#editor TemplateVersion#editor}
  */
  readonly editor?: string;
  /**
  * If true (default), plain_content is always generated from html_content. If false, plain_content is not altered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version#generate_plain_content TemplateVersion#generate_plain_content}
  */
  readonly generatePlainContent?: boolean | cdktf.IResolvable;
  /**
  * The HTML content of the version, maximum of 1048576 bytes allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version#html_content TemplateVersion#html_content}
  */
  readonly htmlContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version#id TemplateVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the transactional template version, max length: 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version#name TemplateVersion#name}
  */
  readonly name: string;
  /**
  * Text/plain content of the transactional template version, maximum of 1048576 bytes allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version#plain_content TemplateVersion#plain_content}
  */
  readonly plainContent?: string;
  /**
  * Subject of the new transactional template version, max length: 255.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version#subject TemplateVersion#subject}
  */
  readonly subject: string;
  /**
  * ID of the transactional template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version#template_id TemplateVersion#template_id}
  */
  readonly templateId: string;
  /**
  * For dynamic templates only, the mock json data that will be used for template preview and test sends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version#test_data TemplateVersion#test_data}
  */
  readonly testData?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version sendgrid_template_version}
*/
export class TemplateVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sendgrid_template_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemplateVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemplateVersion to import
  * @param importFromId The id of the existing TemplateVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemplateVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sendgrid_template_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/template_version sendgrid_template_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemplateVersionConfig
  */
  public constructor(scope: Construct, id: string, config: TemplateVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'sendgrid_template_version',
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
    this._active = config.active;
    this._editor = config.editor;
    this._generatePlainContent = config.generatePlainContent;
    this._htmlContent = config.htmlContent;
    this._id = config.id;
    this._name = config.name;
    this._plainContent = config.plainContent;
    this._subject = config.subject;
    this._templateId = config.templateId;
    this._testData = config.testData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: number; 
  public get active() {
    return this.getNumberAttribute('active');
  }
  public set active(value: number) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // editor - computed: false, optional: true, required: false
  private _editor?: string; 
  public get editor() {
    return this.getStringAttribute('editor');
  }
  public set editor(value: string) {
    this._editor = value;
  }
  public resetEditor() {
    this._editor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editorInput() {
    return this._editor;
  }

  // generate_plain_content - computed: false, optional: true, required: false
  private _generatePlainContent?: boolean | cdktf.IResolvable; 
  public get generatePlainContent() {
    return this.getBooleanAttribute('generate_plain_content');
  }
  public set generatePlainContent(value: boolean | cdktf.IResolvable) {
    this._generatePlainContent = value;
  }
  public resetGeneratePlainContent() {
    this._generatePlainContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatePlainContentInput() {
    return this._generatePlainContent;
  }

  // html_content - computed: false, optional: true, required: false
  private _htmlContent?: string; 
  public get htmlContent() {
    return this.getStringAttribute('html_content');
  }
  public set htmlContent(value: string) {
    this._htmlContent = value;
  }
  public resetHtmlContent() {
    this._htmlContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlContentInput() {
    return this._htmlContent;
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

  // plain_content - computed: true, optional: true, required: false
  private _plainContent?: string; 
  public get plainContent() {
    return this.getStringAttribute('plain_content');
  }
  public set plainContent(value: string) {
    this._plainContent = value;
  }
  public resetPlainContent() {
    this._plainContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plainContentInput() {
    return this._plainContent;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // template_id - computed: false, optional: false, required: true
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // test_data - computed: false, optional: true, required: false
  private _testData?: string; 
  public get testData() {
    return this.getStringAttribute('test_data');
  }
  public set testData(value: string) {
    this._testData = value;
  }
  public resetTestData() {
    this._testData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testDataInput() {
    return this._testData;
  }

  // thumbnail_url - computed: true, optional: false, required: false
  public get thumbnailUrl() {
    return this.getStringAttribute('thumbnail_url');
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
      active: cdktf.numberToTerraform(this._active),
      editor: cdktf.stringToTerraform(this._editor),
      generate_plain_content: cdktf.booleanToTerraform(this._generatePlainContent),
      html_content: cdktf.stringToTerraform(this._htmlContent),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      plain_content: cdktf.stringToTerraform(this._plainContent),
      subject: cdktf.stringToTerraform(this._subject),
      template_id: cdktf.stringToTerraform(this._templateId),
      test_data: cdktf.stringToTerraform(this._testData),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.numberToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      editor: {
        value: cdktf.stringToHclTerraform(this._editor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_plain_content: {
        value: cdktf.booleanToHclTerraform(this._generatePlainContent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      html_content: {
        value: cdktf.stringToHclTerraform(this._htmlContent),
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
      plain_content: {
        value: cdktf.stringToHclTerraform(this._plainContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject: {
        value: cdktf.stringToHclTerraform(this._subject),
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
      test_data: {
        value: cdktf.stringToHclTerraform(this._testData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
