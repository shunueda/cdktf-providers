// https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/form_field_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FormFieldSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Associated form fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/form_field_set#form_fields FormFieldSet#form_fields}
  */
  readonly formFields?: { [key: string]: any };
  /**
  * Any associated InboxRegistrations or BundleRegistrations can be saved without providing company
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/form_field_set#skip_company FormFieldSet#skip_company}
  */
  readonly skipCompany?: boolean | cdktf.IResolvable;
  /**
  * Any associated InboxRegistrations or BundleRegistrations can be saved without providing email
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/form_field_set#skip_email FormFieldSet#skip_email}
  */
  readonly skipEmail?: boolean | cdktf.IResolvable;
  /**
  * Any associated InboxRegistrations or BundleRegistrations can be saved without providing name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/form_field_set#skip_name FormFieldSet#skip_name}
  */
  readonly skipName?: boolean | cdktf.IResolvable;
  /**
  * Title to be displayed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/form_field_set#title FormFieldSet#title}
  */
  readonly title?: string;
  /**
  * User ID.  Provide a value of `0` to operate the current session's user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/form_field_set#user_id FormFieldSet#user_id}
  */
  readonly userId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/form_field_set files_form_field_set}
*/
export class FormFieldSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_form_field_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FormFieldSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FormFieldSet to import
  * @param importFromId The id of the existing FormFieldSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/form_field_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FormFieldSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_form_field_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/resources/form_field_set files_form_field_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FormFieldSetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FormFieldSetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'files_form_field_set',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.375'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._formFields = config.formFields;
    this._skipCompany = config.skipCompany;
    this._skipEmail = config.skipEmail;
    this._skipName = config.skipName;
    this._title = config.title;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // form_fields - computed: true, optional: true, required: false
  private _formFields?: { [key: string]: any }; 
  public get formFields() {
    return this.getAnyMapAttribute('form_fields');
  }
  public set formFields(value: { [key: string]: any }) {
    this._formFields = value;
  }
  public resetFormFields() {
    this._formFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFieldsInput() {
    return this._formFields;
  }

  // form_layout - computed: true, optional: false, required: false
  public get formLayout() {
    return this.getNumberListAttribute('form_layout');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // in_use - computed: true, optional: false, required: false
  public get inUse() {
    return this.getBooleanAttribute('in_use');
  }

  // skip_company - computed: true, optional: true, required: false
  private _skipCompany?: boolean | cdktf.IResolvable; 
  public get skipCompany() {
    return this.getBooleanAttribute('skip_company');
  }
  public set skipCompany(value: boolean | cdktf.IResolvable) {
    this._skipCompany = value;
  }
  public resetSkipCompany() {
    this._skipCompany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCompanyInput() {
    return this._skipCompany;
  }

  // skip_email - computed: true, optional: true, required: false
  private _skipEmail?: boolean | cdktf.IResolvable; 
  public get skipEmail() {
    return this.getBooleanAttribute('skip_email');
  }
  public set skipEmail(value: boolean | cdktf.IResolvable) {
    this._skipEmail = value;
  }
  public resetSkipEmail() {
    this._skipEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipEmailInput() {
    return this._skipEmail;
  }

  // skip_name - computed: true, optional: true, required: false
  private _skipName?: boolean | cdktf.IResolvable; 
  public get skipName() {
    return this.getBooleanAttribute('skip_name');
  }
  public set skipName(value: boolean | cdktf.IResolvable) {
    this._skipName = value;
  }
  public resetSkipName() {
    this._skipName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNameInput() {
    return this._skipName;
  }

  // title - computed: true, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: number; 
  public get userId() {
    return this.getNumberAttribute('user_id');
  }
  public set userId(value: number) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      form_fields: cdktf.hashMapper(cdktf.anyToTerraform)(this._formFields),
      skip_company: cdktf.booleanToTerraform(this._skipCompany),
      skip_email: cdktf.booleanToTerraform(this._skipEmail),
      skip_name: cdktf.booleanToTerraform(this._skipName),
      title: cdktf.stringToTerraform(this._title),
      user_id: cdktf.numberToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      form_fields: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._formFields),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      skip_company: {
        value: cdktf.booleanToHclTerraform(this._skipCompany),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_email: {
        value: cdktf.booleanToHclTerraform(this._skipEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_name: {
        value: cdktf.booleanToHclTerraform(this._skipName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.numberToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
