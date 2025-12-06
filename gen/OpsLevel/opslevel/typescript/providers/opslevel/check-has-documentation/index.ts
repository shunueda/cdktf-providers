// https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CheckHasDocumentationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the category the check belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation#category CheckHasDocumentation#category}
  */
  readonly category: string;
  /**
  * The subtype of the document. One of `openapi`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation#document_subtype CheckHasDocumentation#document_subtype}
  */
  readonly documentSubtype: string;
  /**
  * The type of the document. One of `api`, `tech`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation#document_type CheckHasDocumentation#document_type}
  */
  readonly documentType: string;
  /**
  * The date when the check will be automatically enabled.
  *  If you use this field you should add both 'enabled' and 'enable_on' to the lifecycle ignore_changes settings.
  *  See example in opslevel_check_manual for proper configuration.
  *  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation#enable_on CheckHasDocumentation#enable_on}
  */
  readonly enableOn?: string;
  /**
  * Whether the check is enabled or not.  Do not use this field in tandem with 'enable_on'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation#enabled CheckHasDocumentation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The id of the filter of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation#filter CheckHasDocumentation#filter}
  */
  readonly filter?: string;
  /**
  * The id of the level the check belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation#level CheckHasDocumentation#level}
  */
  readonly level: string;
  /**
  * The display name of the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation#name CheckHasDocumentation#name}
  */
  readonly name: string;
  /**
  * Additional information to display to the service owner about the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation#notes CheckHasDocumentation#notes}
  */
  readonly notes?: string;
  /**
  * The id of the team that owns the check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation#owner CheckHasDocumentation#owner}
  */
  readonly owner?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation opslevel_check_has_documentation}
*/
export class CheckHasDocumentation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_check_has_documentation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CheckHasDocumentation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CheckHasDocumentation to import
  * @param importFromId The id of the existing CheckHasDocumentation that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CheckHasDocumentation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_check_has_documentation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.7.0/docs/resources/check_has_documentation opslevel_check_has_documentation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CheckHasDocumentationConfig
  */
  public constructor(scope: Construct, id: string, config: CheckHasDocumentationConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_check_has_documentation',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._documentSubtype = config.documentSubtype;
    this._documentType = config.documentType;
    this._enableOn = config.enableOn;
    this._enabled = config.enabled;
    this._filter = config.filter;
    this._level = config.level;
    this._name = config.name;
    this._notes = config.notes;
    this._owner = config.owner;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // document_subtype - computed: false, optional: false, required: true
  private _documentSubtype?: string; 
  public get documentSubtype() {
    return this.getStringAttribute('document_subtype');
  }
  public set documentSubtype(value: string) {
    this._documentSubtype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentSubtypeInput() {
    return this._documentSubtype;
  }

  // document_type - computed: false, optional: false, required: true
  private _documentType?: string; 
  public get documentType() {
    return this.getStringAttribute('document_type');
  }
  public set documentType(value: string) {
    this._documentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTypeInput() {
    return this._documentType;
  }

  // enable_on - computed: false, optional: true, required: false
  private _enableOn?: string; 
  public get enableOn() {
    return this.getStringAttribute('enable_on');
  }
  public set enableOn(value: string) {
    this._enableOn = value;
  }
  public resetEnableOn() {
    this._enableOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnInput() {
    return this._enableOn;
  }

  // enabled - computed: true, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      document_subtype: cdktf.stringToTerraform(this._documentSubtype),
      document_type: cdktf.stringToTerraform(this._documentType),
      enable_on: cdktf.stringToTerraform(this._enableOn),
      enabled: cdktf.booleanToTerraform(this._enabled),
      filter: cdktf.stringToTerraform(this._filter),
      level: cdktf.stringToTerraform(this._level),
      name: cdktf.stringToTerraform(this._name),
      notes: cdktf.stringToTerraform(this._notes),
      owner: cdktf.stringToTerraform(this._owner),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_subtype: {
        value: cdktf.stringToHclTerraform(this._documentSubtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_type: {
        value: cdktf.stringToHclTerraform(this._documentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_on: {
        value: cdktf.stringToHclTerraform(this._enableOn),
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
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      level: {
        value: cdktf.stringToHclTerraform(this._level),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
