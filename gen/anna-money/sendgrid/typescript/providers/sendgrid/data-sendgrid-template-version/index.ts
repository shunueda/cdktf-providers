// https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/template_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSendgridTemplateVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/template_version#id DataSendgridTemplateVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the transactional template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/template_version#template_id DataSendgridTemplateVersion#template_id}
  */
  readonly templateId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/template_version sendgrid_template_version}
*/
export class DataSendgridTemplateVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sendgrid_template_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSendgridTemplateVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSendgridTemplateVersion to import
  * @param importFromId The id of the existing DataSendgridTemplateVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/template_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSendgridTemplateVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sendgrid_template_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/anna-money/sendgrid/1.1.2/docs/data-sources/template_version sendgrid_template_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSendgridTemplateVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSendgridTemplateVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'sendgrid_template_version',
      terraformGeneratorMetadata: {
        providerName: 'sendgrid',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
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
    this._templateId = config.templateId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getNumberAttribute('active');
  }

  // editor - computed: true, optional: false, required: false
  public get editor() {
    return this.getStringAttribute('editor');
  }

  // generate_plain_content - computed: true, optional: false, required: false
  public get generatePlainContent() {
    return this.getBooleanAttribute('generate_plain_content');
  }

  // html_content - computed: true, optional: false, required: false
  public get htmlContent() {
    return this.getStringAttribute('html_content');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plain_content - computed: true, optional: false, required: false
  public get plainContent() {
    return this.getStringAttribute('plain_content');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
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

  // test_data - computed: true, optional: false, required: false
  public get testData() {
    return this.getStringAttribute('test_data');
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
      id: cdktf.stringToTerraform(this._id),
      template_id: cdktf.stringToTerraform(this._templateId),
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
