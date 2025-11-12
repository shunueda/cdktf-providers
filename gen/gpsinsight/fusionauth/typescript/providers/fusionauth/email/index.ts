// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default From Name used when sending emails. If not provided, and a localized value cannot be determined, the default value for the tenant will be used. This is the display name part of the email address ( i.e. Jared Dunn <jared@piedpiper.com>).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#default_from_name Email#default_from_name}
  */
  readonly defaultFromName?: string;
  /**
  * The default HTML Email Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#default_html_template Email#default_html_template}
  */
  readonly defaultHtmlTemplate: string;
  /**
  * The default Subject used when sending emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#default_subject Email#default_subject}
  */
  readonly defaultSubject: string;
  /**
  * The default Text Email Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#default_text_template Email#default_text_template}
  */
  readonly defaultTextTemplate: string;
  /**
  * The Id to use for the new Email Template. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#email_id Email#email_id}
  */
  readonly emailId?: string;
  /**
  * The email address that this email will be sent from. If not provided, the default value for the tenant will be used. This is the address part email address (i.e. Jared Dunn <jared@piedpiper.com>).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#from_email Email#from_email}
  */
  readonly fromEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#id Email#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The From Name used when sending emails to users who speak other languages. This overrides the default From Name based on the user’s list of preferred languages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#localized_from_names Email#localized_from_names}
  */
  readonly localizedFromNames?: { [key: string]: string };
  /**
  * The HTML Email Template used when sending emails to users who speak other languages. This overrides the default HTML Email Template based on the user’s list of preferred languages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#localized_html_templates Email#localized_html_templates}
  */
  readonly localizedHtmlTemplates?: { [key: string]: string };
  /**
  * The Subject used when sending emails to users who speak other languages. This overrides the default Subject based on the user’s list of preferred languages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#localized_subjects Email#localized_subjects}
  */
  readonly localizedSubjects?: { [key: string]: string };
  /**
  * The Text Email Template used when sending emails to users who speak other languages. This overrides the default Text Email Template based on the user’s list of preferred languages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#localized_text_templates Email#localized_text_templates}
  */
  readonly localizedTextTemplates?: { [key: string]: string };
  /**
  * A descriptive name for the email template (i.e. "April 2016 Coupon Email")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#name Email#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email fusionauth_email}
*/
export class Email extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_email";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Email resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Email to import
  * @param importFromId The id of the existing Email that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Email to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_email", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/email fusionauth_email} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailConfig
  */
  public constructor(scope: Construct, id: string, config: EmailConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_email',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100',
        providerVersionConstraint: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultFromName = config.defaultFromName;
    this._defaultHtmlTemplate = config.defaultHtmlTemplate;
    this._defaultSubject = config.defaultSubject;
    this._defaultTextTemplate = config.defaultTextTemplate;
    this._emailId = config.emailId;
    this._fromEmail = config.fromEmail;
    this._id = config.id;
    this._localizedFromNames = config.localizedFromNames;
    this._localizedHtmlTemplates = config.localizedHtmlTemplates;
    this._localizedSubjects = config.localizedSubjects;
    this._localizedTextTemplates = config.localizedTextTemplates;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_from_name - computed: false, optional: true, required: false
  private _defaultFromName?: string; 
  public get defaultFromName() {
    return this.getStringAttribute('default_from_name');
  }
  public set defaultFromName(value: string) {
    this._defaultFromName = value;
  }
  public resetDefaultFromName() {
    this._defaultFromName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFromNameInput() {
    return this._defaultFromName;
  }

  // default_html_template - computed: false, optional: false, required: true
  private _defaultHtmlTemplate?: string; 
  public get defaultHtmlTemplate() {
    return this.getStringAttribute('default_html_template');
  }
  public set defaultHtmlTemplate(value: string) {
    this._defaultHtmlTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHtmlTemplateInput() {
    return this._defaultHtmlTemplate;
  }

  // default_subject - computed: false, optional: false, required: true
  private _defaultSubject?: string; 
  public get defaultSubject() {
    return this.getStringAttribute('default_subject');
  }
  public set defaultSubject(value: string) {
    this._defaultSubject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSubjectInput() {
    return this._defaultSubject;
  }

  // default_text_template - computed: false, optional: false, required: true
  private _defaultTextTemplate?: string; 
  public get defaultTextTemplate() {
    return this.getStringAttribute('default_text_template');
  }
  public set defaultTextTemplate(value: string) {
    this._defaultTextTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTextTemplateInput() {
    return this._defaultTextTemplate;
  }

  // email_id - computed: false, optional: true, required: false
  private _emailId?: string; 
  public get emailId() {
    return this.getStringAttribute('email_id');
  }
  public set emailId(value: string) {
    this._emailId = value;
  }
  public resetEmailId() {
    this._emailId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailIdInput() {
    return this._emailId;
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

  // localized_from_names - computed: false, optional: true, required: false
  private _localizedFromNames?: { [key: string]: string }; 
  public get localizedFromNames() {
    return this.getStringMapAttribute('localized_from_names');
  }
  public set localizedFromNames(value: { [key: string]: string }) {
    this._localizedFromNames = value;
  }
  public resetLocalizedFromNames() {
    this._localizedFromNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedFromNamesInput() {
    return this._localizedFromNames;
  }

  // localized_html_templates - computed: false, optional: true, required: false
  private _localizedHtmlTemplates?: { [key: string]: string }; 
  public get localizedHtmlTemplates() {
    return this.getStringMapAttribute('localized_html_templates');
  }
  public set localizedHtmlTemplates(value: { [key: string]: string }) {
    this._localizedHtmlTemplates = value;
  }
  public resetLocalizedHtmlTemplates() {
    this._localizedHtmlTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedHtmlTemplatesInput() {
    return this._localizedHtmlTemplates;
  }

  // localized_subjects - computed: false, optional: true, required: false
  private _localizedSubjects?: { [key: string]: string }; 
  public get localizedSubjects() {
    return this.getStringMapAttribute('localized_subjects');
  }
  public set localizedSubjects(value: { [key: string]: string }) {
    this._localizedSubjects = value;
  }
  public resetLocalizedSubjects() {
    this._localizedSubjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedSubjectsInput() {
    return this._localizedSubjects;
  }

  // localized_text_templates - computed: false, optional: true, required: false
  private _localizedTextTemplates?: { [key: string]: string }; 
  public get localizedTextTemplates() {
    return this.getStringMapAttribute('localized_text_templates');
  }
  public set localizedTextTemplates(value: { [key: string]: string }) {
    this._localizedTextTemplates = value;
  }
  public resetLocalizedTextTemplates() {
    this._localizedTextTemplates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localizedTextTemplatesInput() {
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
      default_from_name: cdktf.stringToTerraform(this._defaultFromName),
      default_html_template: cdktf.stringToTerraform(this._defaultHtmlTemplate),
      default_subject: cdktf.stringToTerraform(this._defaultSubject),
      default_text_template: cdktf.stringToTerraform(this._defaultTextTemplate),
      email_id: cdktf.stringToTerraform(this._emailId),
      from_email: cdktf.stringToTerraform(this._fromEmail),
      id: cdktf.stringToTerraform(this._id),
      localized_from_names: cdktf.hashMapper(cdktf.stringToTerraform)(this._localizedFromNames),
      localized_html_templates: cdktf.hashMapper(cdktf.stringToTerraform)(this._localizedHtmlTemplates),
      localized_subjects: cdktf.hashMapper(cdktf.stringToTerraform)(this._localizedSubjects),
      localized_text_templates: cdktf.hashMapper(cdktf.stringToTerraform)(this._localizedTextTemplates),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_from_name: {
        value: cdktf.stringToHclTerraform(this._defaultFromName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_html_template: {
        value: cdktf.stringToHclTerraform(this._defaultHtmlTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_subject: {
        value: cdktf.stringToHclTerraform(this._defaultSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_text_template: {
        value: cdktf.stringToHclTerraform(this._defaultTextTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_id: {
        value: cdktf.stringToHclTerraform(this._emailId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_email: {
        value: cdktf.stringToHclTerraform(this._fromEmail),
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
      localized_from_names: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._localizedFromNames),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      localized_html_templates: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._localizedHtmlTemplates),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      localized_subjects: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._localizedSubjects),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      localized_text_templates: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._localizedTextTemplates),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
