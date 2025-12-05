// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FormSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The forms included in the form set. Add custom forms using the custom form's `slug` field. Or choose a built-in form: `web_new_incident_form`, `web_update_incident_form`, `web_incident_post_mortem_form`, `web_incident_mitigation_form`, `web_incident_resolution_form`, `web_incident_cancellation_form`, `web_scheduled_incident_form`, `web_update_scheduled_incident_form`, `slack_new_incident_form`, `slack_update_incident_form`, `slack_update_incident_status_form`, `slack_incident_mitigation_form`, `slack_incident_resolution_form`, `slack_incident_cancellation_form`, `slack_scheduled_incident_form`, `slack_update_scheduled_incident_form`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_set#forms FormSet#forms}
  */
  readonly forms: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_set#id FormSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the form set is default. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_set#is_default FormSet#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * The name of the form set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_set#name FormSet#name}
  */
  readonly name: string;
  /**
  * The slug of the form set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_set#slug FormSet#slug}
  */
  readonly slug?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_set rootly_form_set}
*/
export class FormSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_form_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FormSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FormSet to import
  * @param importFromId The id of the existing FormSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FormSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_form_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.13/docs/resources/form_set rootly_form_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FormSetConfig
  */
  public constructor(scope: Construct, id: string, config: FormSetConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_form_set',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.13',
        providerVersionConstraint: '4.3.13'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forms = config.forms;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._name = config.name;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // forms - computed: false, optional: false, required: true
  private _forms?: string[]; 
  public get forms() {
    return this.getListAttribute('forms');
  }
  public set forms(value: string[]) {
    this._forms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formsInput() {
    return this._forms;
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

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
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

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      forms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._forms),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      forms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._forms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
