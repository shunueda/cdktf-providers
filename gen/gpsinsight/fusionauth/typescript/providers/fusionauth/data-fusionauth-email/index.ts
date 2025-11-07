// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFusionauthEmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * The email address that this email will be sent from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/email#from_email DataFusionauthEmail#from_email}
  */
  readonly fromEmail?: string;
  /**
  * The name of the Email Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/email#name DataFusionauthEmail#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/email fusionauth_email}
*/
export class DataFusionauthEmail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFusionauthEmail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFusionauthEmail to import
  * @param importFromId The id of the existing DataFusionauthEmail that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFusionauthEmail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/data-sources/email fusionauth_email} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFusionauthEmailConfig
  */
  public constructor(scope: Construct, id: string, config: DataFusionauthEmailConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_email',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fromEmail = config.fromEmail;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_from_name - computed: true, optional: false, required: false
  public get defaultFromName() {
    return this.getStringAttribute('default_from_name');
  }

  // default_html_template - computed: true, optional: false, required: false
  public get defaultHtmlTemplate() {
    return this.getStringAttribute('default_html_template');
  }

  // default_subject - computed: true, optional: false, required: false
  public get defaultSubject() {
    return this.getStringAttribute('default_subject');
  }

  // default_text_template - computed: true, optional: false, required: false
  public get defaultTextTemplate() {
    return this.getStringAttribute('default_text_template');
  }

  // from_email - computed: false, optional: true, required: false
  private _fromEmail?: string; 
  public get fromEmail() {
    return this.getStringAttribute('from_email');
  }
  public set fromEmail(value: string) {
    this._fromEmail = value;
  }
  public resetFromEmail() {
    this._fromEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromEmailInput() {
    return this._fromEmail;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // localized_from_names - computed: true, optional: false, required: false
  private _localizedFromNames = new cdktf.StringMap(this, "localized_from_names");
  public get localizedFromNames() {
    return this._localizedFromNames;
  }

  // localized_html_templates - computed: true, optional: false, required: false
  private _localizedHtmlTemplates = new cdktf.StringMap(this, "localized_html_templates");
  public get localizedHtmlTemplates() {
    return this._localizedHtmlTemplates;
  }

  // localized_subjects - computed: true, optional: false, required: false
  private _localizedSubjects = new cdktf.StringMap(this, "localized_subjects");
  public get localizedSubjects() {
    return this._localizedSubjects;
  }

  // localized_text_templates - computed: true, optional: false, required: false
  private _localizedTextTemplates = new cdktf.StringMap(this, "localized_text_templates");
  public get localizedTextTemplates() {
    return this._localizedTextTemplates;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      from_email: cdktf.stringToTerraform(this._fromEmail),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      from_email: {
        value: cdktf.stringToHclTerraform(this._fromEmail),
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
