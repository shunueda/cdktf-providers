// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagConfig extends cdktf.TerraformMetaArguments {
  /**
  * The color of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/tag#color Tag#color}
  */
  readonly color: string;
  /**
  * The description of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/tag#description Tag#description}
  */
  readonly description?: string;
  /**
  * The name of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/tag#name Tag#name}
  */
  readonly name: string;
  /**
  * The sort order of the tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/tag#sort_order Tag#sort_order}
  */
  readonly sortOrder?: number;
  /**
  * The ID of the associated tag set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/tag#tag_set_id Tag#tag_set_id}
  */
  readonly tagSetId: string;
  /**
  * The Space ID of the associated tag set. Required if the tag set is not in the same space as what is configured on the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/tag#tag_set_space_id Tag#tag_set_space_id}
  */
  readonly tagSetSpaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/tag octopusdeploy_tag}
*/
export class Tag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tag to import
  * @param importFromId The id of the existing Tag that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.5.0/docs/resources/tag octopusdeploy_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagConfig
  */
  public constructor(scope: Construct, id: string, config: TagConfig) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_tag',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._color = config.color;
    this._description = config.description;
    this._name = config.name;
    this._sortOrder = config.sortOrder;
    this._tagSetId = config.tagSetId;
    this._tagSetSpaceId = config.tagSetSpaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical_tag_name - computed: true, optional: false, required: false
  public get canonicalTagName() {
    return this.getStringAttribute('canonical_tag_name');
  }

  // color - computed: false, optional: false, required: true
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // sort_order - computed: true, optional: true, required: false
  private _sortOrder?: number; 
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }
  public set sortOrder(value: number) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // tag_set_id - computed: false, optional: false, required: true
  private _tagSetId?: string; 
  public get tagSetId() {
    return this.getStringAttribute('tag_set_id');
  }
  public set tagSetId(value: string) {
    this._tagSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSetIdInput() {
    return this._tagSetId;
  }

  // tag_set_space_id - computed: true, optional: true, required: false
  private _tagSetSpaceId?: string; 
  public get tagSetSpaceId() {
    return this.getStringAttribute('tag_set_space_id');
  }
  public set tagSetSpaceId(value: string) {
    this._tagSetSpaceId = value;
  }
  public resetTagSetSpaceId() {
    this._tagSetSpaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSetSpaceIdInput() {
    return this._tagSetSpaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      color: cdktf.stringToTerraform(this._color),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      sort_order: cdktf.numberToTerraform(this._sortOrder),
      tag_set_id: cdktf.stringToTerraform(this._tagSetId),
      tag_set_space_id: cdktf.stringToTerraform(this._tagSetSpaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      sort_order: {
        value: cdktf.numberToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag_set_id: {
        value: cdktf.stringToHclTerraform(this._tagSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_set_space_id: {
        value: cdktf.stringToHclTerraform(this._tagSetSpaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
