// https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether or not this group is displayed collapsed by default on the status page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group#collapsed Group#collapsed}
  */
  readonly collapsed?: boolean | cdktf.IResolvable;
  /**
  * A description of this Group, potentially with markdown formatting, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group#description Group#description}
  */
  readonly description?: string;
  /**
  * A description of this Group, potentially with markdown formatting, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group#description_translations Group#description_translations}
  */
  readonly descriptionTranslations?: { [key: string]: string };
  /**
  * The name of this Group, in the default translation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group#name Group#name}
  */
  readonly name?: string;
  /**
  * The name of this Group, translated into multiple languages. Map keys express the language each string value is to be interpreted in. The `original` field of this map denotes the language used for the non-`_translations` version of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group#name_translations Group#name_translations}
  */
  readonly nameTranslations?: { [key: string]: string };
  /**
  * An integer representing the position of this Group. Groups are displayed on the status page in ascending order according to this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group#position Group#position}
  */
  readonly position?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group hund_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hund_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hund_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hundio/hund/0.1.0/docs/resources/group hund_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'hund_group',
      terraformGeneratorMetadata: {
        providerName: 'hund',
        providerVersion: '0.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collapsed = config.collapsed;
    this._description = config.description;
    this._descriptionTranslations = config.descriptionTranslations;
    this._name = config.name;
    this._nameTranslations = config.nameTranslations;
    this._position = config.position;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collapsed - computed: true, optional: true, required: false
  private _collapsed?: boolean | cdktf.IResolvable; 
  public get collapsed() {
    return this.getBooleanAttribute('collapsed');
  }
  public set collapsed(value: boolean | cdktf.IResolvable) {
    this._collapsed = value;
  }
  public resetCollapsed() {
    this._collapsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collapsedInput() {
    return this._collapsed;
  }

  // components - computed: true, optional: false, required: false
  public get components() {
    return this.getListAttribute('components');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // description_html - computed: true, optional: false, required: false
  public get descriptionHtml() {
    return this.getStringAttribute('description_html');
  }

  // description_html_translations - computed: true, optional: false, required: false
  private _descriptionHtmlTranslations = new cdktf.StringMap(this, "description_html_translations");
  public get descriptionHtmlTranslations() {
    return this._descriptionHtmlTranslations;
  }

  // description_translations - computed: true, optional: true, required: false
  private _descriptionTranslations?: { [key: string]: string }; 
  public get descriptionTranslations() {
    return this.getStringMapAttribute('description_translations');
  }
  public set descriptionTranslations(value: { [key: string]: string }) {
    this._descriptionTranslations = value;
  }
  public resetDescriptionTranslations() {
    this._descriptionTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionTranslationsInput() {
    return this._descriptionTranslations;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_translations - computed: true, optional: true, required: false
  private _nameTranslations?: { [key: string]: string }; 
  public get nameTranslations() {
    return this.getStringMapAttribute('name_translations');
  }
  public set nameTranslations(value: { [key: string]: string }) {
    this._nameTranslations = value;
  }
  public resetNameTranslations() {
    this._nameTranslations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTranslationsInput() {
    return this._nameTranslations;
  }

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
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
      collapsed: cdktf.booleanToTerraform(this._collapsed),
      description: cdktf.stringToTerraform(this._description),
      description_translations: cdktf.hashMapper(cdktf.stringToTerraform)(this._descriptionTranslations),
      name: cdktf.stringToTerraform(this._name),
      name_translations: cdktf.hashMapper(cdktf.stringToTerraform)(this._nameTranslations),
      position: cdktf.numberToTerraform(this._position),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collapsed: {
        value: cdktf.booleanToHclTerraform(this._collapsed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description_translations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._descriptionTranslations),
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
      name_translations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._nameTranslations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
