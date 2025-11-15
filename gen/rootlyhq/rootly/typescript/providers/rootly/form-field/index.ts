// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FormFieldConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#default_values FormField#default_values}
  */
  readonly defaultValues?: string[];
  /**
  * The description of the form field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#description FormField#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#enabled FormField#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#id FormField#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The input kind of the form field. Value must be one of `text`, `textarea`, `select`, `multi_select`, `date`, `datetime`, `number`, `checkbox`, `tags`, `rich_text`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#input_kind FormField#input_kind}
  */
  readonly inputKind?: string;
  /**
  * The kind of the form field. Value must be one of `custom`, `title`, `summary`, `mitigation_message`, `resolution_message`, `severity`, `environments`, `types`, `services`, `causes`, `functionalities`, `teams`, `visibility`, `mark_as_test`, `mark_as_backfilled`, `labels`, `notify_emails`, `trigger_manual_workflows`, `show_ongoing_incidents`, `attach_alerts`, `mark_as_in_triage`, `in_triage_at`, `started_at`, `detected_at`, `acknowledged_at`, `mitigated_at`, `resolved_at`, `closed_at`, `custom_sub_status`, `manual_starting_datetime_field`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#kind FormField#kind}
  */
  readonly kind?: string;
  /**
  * The name of the form field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#name FormField#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#required FormField#required}
  */
  readonly required?: string[];
  /**
  * Whether the form field is shown on the incident details panel. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#show_on_incident_details FormField#show_on_incident_details}
  */
  readonly showOnIncidentDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#shown FormField#shown}
  */
  readonly shown?: string[];
  /**
  * The slug of the form field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#slug FormField#slug}
  */
  readonly slug?: string;
  /**
  * The value kind of the form field. Value must be one of `inherit`, `group`, `service`, `functionality`, `user`, `catalog_entity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#value_kind FormField#value_kind}
  */
  readonly valueKind?: string;
  /**
  * The ID of the catalog used when value_kind is `catalog_entity`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#value_kind_catalog_id FormField#value_kind_catalog_id}
  */
  readonly valueKindCatalogId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field rootly_form_field}
*/
export class FormField extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_form_field";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FormField resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FormField to import
  * @param importFromId The id of the existing FormField that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FormField to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_form_field", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/form_field rootly_form_field} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FormFieldConfig
  */
  public constructor(scope: Construct, id: string, config: FormFieldConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_form_field',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.8',
        providerVersionConstraint: '4.3.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultValues = config.defaultValues;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._inputKind = config.inputKind;
    this._kind = config.kind;
    this._name = config.name;
    this._required = config.required;
    this._showOnIncidentDetails = config.showOnIncidentDetails;
    this._shown = config.shown;
    this._slug = config.slug;
    this._valueKind = config.valueKind;
    this._valueKindCatalogId = config.valueKindCatalogId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_values - computed: false, optional: true, required: false
  private _defaultValues?: string[]; 
  public get defaultValues() {
    return this.getListAttribute('default_values');
  }
  public set defaultValues(value: string[]) {
    this._defaultValues = value;
  }
  public resetDefaultValues() {
    this._defaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues;
  }

  // description - computed: true, optional: true, required: false
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // input_kind - computed: false, optional: true, required: false
  private _inputKind?: string; 
  public get inputKind() {
    return this.getStringAttribute('input_kind');
  }
  public set inputKind(value: string) {
    this._inputKind = value;
  }
  public resetInputKind() {
    this._inputKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputKindInput() {
    return this._inputKind;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // show_on_incident_details - computed: true, optional: true, required: false
  private _showOnIncidentDetails?: boolean | cdktf.IResolvable; 
  public get showOnIncidentDetails() {
    return this.getBooleanAttribute('show_on_incident_details');
  }
  public set showOnIncidentDetails(value: boolean | cdktf.IResolvable) {
    this._showOnIncidentDetails = value;
  }
  public resetShowOnIncidentDetails() {
    this._showOnIncidentDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showOnIncidentDetailsInput() {
    return this._showOnIncidentDetails;
  }

  // shown - computed: false, optional: true, required: false
  private _shown?: string[]; 
  public get shown() {
    return this.getListAttribute('shown');
  }
  public set shown(value: string[]) {
    this._shown = value;
  }
  public resetShown() {
    this._shown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shownInput() {
    return this._shown;
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

  // value_kind - computed: false, optional: true, required: false
  private _valueKind?: string; 
  public get valueKind() {
    return this.getStringAttribute('value_kind');
  }
  public set valueKind(value: string) {
    this._valueKind = value;
  }
  public resetValueKind() {
    this._valueKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueKindInput() {
    return this._valueKind;
  }

  // value_kind_catalog_id - computed: true, optional: true, required: false
  private _valueKindCatalogId?: string; 
  public get valueKindCatalogId() {
    return this.getStringAttribute('value_kind_catalog_id');
  }
  public set valueKindCatalogId(value: string) {
    this._valueKindCatalogId = value;
  }
  public resetValueKindCatalogId() {
    this._valueKindCatalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueKindCatalogIdInput() {
    return this._valueKindCatalogId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_values: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultValues),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      input_kind: cdktf.stringToTerraform(this._inputKind),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      required: cdktf.listMapper(cdktf.stringToTerraform, false)(this._required),
      show_on_incident_details: cdktf.booleanToTerraform(this._showOnIncidentDetails),
      shown: cdktf.listMapper(cdktf.stringToTerraform, false)(this._shown),
      slug: cdktf.stringToTerraform(this._slug),
      value_kind: cdktf.stringToTerraform(this._valueKind),
      value_kind_catalog_id: cdktf.stringToTerraform(this._valueKindCatalogId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_values: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultValues),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_kind: {
        value: cdktf.stringToHclTerraform(this._inputKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
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
      required: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._required),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      show_on_incident_details: {
        value: cdktf.booleanToHclTerraform(this._showOnIncidentDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shown: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._shown),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_kind: {
        value: cdktf.stringToHclTerraform(this._valueKind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value_kind_catalog_id: {
        value: cdktf.stringToHclTerraform(this._valueKindCatalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
