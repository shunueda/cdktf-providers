// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CsoarPlaybookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#description CsoarPlaybook#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#draft CsoarPlaybook#draft}
  */
  readonly draft?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#id CsoarPlaybook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#is_deleted CsoarPlaybook#is_deleted}
  */
  readonly isDeleted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#is_enabled CsoarPlaybook#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#is_published CsoarPlaybook#is_published}
  */
  readonly isPublished?: boolean | cdktf.IResolvable;
  /**
  * JSON string representation of playbook links
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#links CsoarPlaybook#links}
  */
  readonly links?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#name CsoarPlaybook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#nested CsoarPlaybook#nested}
  */
  readonly nested?: boolean | cdktf.IResolvable;
  /**
  * JSON string representation of playbook nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#nodes CsoarPlaybook#nodes}
  */
  readonly nodes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#tags CsoarPlaybook#tags}
  */
  readonly tags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#type CsoarPlaybook#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#updated_name CsoarPlaybook#updated_name}
  */
  readonly updatedName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook sumologic_csoar_playbook}
*/
export class CsoarPlaybook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_csoar_playbook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CsoarPlaybook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CsoarPlaybook to import
  * @param importFromId The id of the existing CsoarPlaybook that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CsoarPlaybook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_csoar_playbook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/csoar_playbook sumologic_csoar_playbook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CsoarPlaybookConfig
  */
  public constructor(scope: Construct, id: string, config: CsoarPlaybookConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_csoar_playbook',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._draft = config.draft;
    this._id = config.id;
    this._isDeleted = config.isDeleted;
    this._isEnabled = config.isEnabled;
    this._isPublished = config.isPublished;
    this._links = config.links;
    this._name = config.name;
    this._nested = config.nested;
    this._nodes = config.nodes;
    this._tags = config.tags;
    this._type = config.type;
    this._updatedName = config.updatedName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getNumberAttribute('created_by');
  }

  // description - computed: false, optional: true, required: false
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

  // draft - computed: false, optional: true, required: false
  private _draft?: boolean | cdktf.IResolvable; 
  public get draft() {
    return this.getBooleanAttribute('draft');
  }
  public set draft(value: boolean | cdktf.IResolvable) {
    this._draft = value;
  }
  public resetDraft() {
    this._draft = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get draftInput() {
    return this._draft;
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

  // is_deleted - computed: false, optional: true, required: false
  private _isDeleted?: boolean | cdktf.IResolvable; 
  public get isDeleted() {
    return this.getBooleanAttribute('is_deleted');
  }
  public set isDeleted(value: boolean | cdktf.IResolvable) {
    this._isDeleted = value;
  }
  public resetIsDeleted() {
    this._isDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDeletedInput() {
    return this._isDeleted;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_published - computed: false, optional: true, required: false
  private _isPublished?: boolean | cdktf.IResolvable; 
  public get isPublished() {
    return this.getBooleanAttribute('is_published');
  }
  public set isPublished(value: boolean | cdktf.IResolvable) {
    this._isPublished = value;
  }
  public resetIsPublished() {
    this._isPublished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublishedInput() {
    return this._isPublished;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }

  // links - computed: false, optional: true, required: false
  private _links?: string; 
  public get links() {
    return this.getStringAttribute('links');
  }
  public set links(value: string) {
    this._links = value;
  }
  public resetLinks() {
    this._links = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linksInput() {
    return this._links;
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

  // nested - computed: false, optional: true, required: false
  private _nested?: boolean | cdktf.IResolvable; 
  public get nested() {
    return this.getBooleanAttribute('nested');
  }
  public set nested(value: boolean | cdktf.IResolvable) {
    this._nested = value;
  }
  public resetNested() {
    this._nested = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestedInput() {
    return this._nested;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: string; 
  public get nodes() {
    return this.getStringAttribute('nodes');
  }
  public set nodes(value: string) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getNumberAttribute('updated_by');
  }

  // updated_name - computed: false, optional: true, required: false
  private _updatedName?: string; 
  public get updatedName() {
    return this.getStringAttribute('updated_name');
  }
  public set updatedName(value: string) {
    this._updatedName = value;
  }
  public resetUpdatedName() {
    this._updatedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedNameInput() {
    return this._updatedName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      draft: cdktf.booleanToTerraform(this._draft),
      id: cdktf.stringToTerraform(this._id),
      is_deleted: cdktf.booleanToTerraform(this._isDeleted),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      is_published: cdktf.booleanToTerraform(this._isPublished),
      links: cdktf.stringToTerraform(this._links),
      name: cdktf.stringToTerraform(this._name),
      nested: cdktf.booleanToTerraform(this._nested),
      nodes: cdktf.stringToTerraform(this._nodes),
      tags: cdktf.stringToTerraform(this._tags),
      type: cdktf.stringToTerraform(this._type),
      updated_name: cdktf.stringToTerraform(this._updatedName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      draft: {
        value: cdktf.booleanToHclTerraform(this._draft),
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
      is_deleted: {
        value: cdktf.booleanToHclTerraform(this._isDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_published: {
        value: cdktf.booleanToHclTerraform(this._isPublished),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      links: {
        value: cdktf.stringToHclTerraform(this._links),
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
      nested: {
        value: cdktf.booleanToHclTerraform(this._nested),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nodes: {
        value: cdktf.stringToHclTerraform(this._nodes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.stringToHclTerraform(this._tags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_name: {
        value: cdktf.stringToHclTerraform(this._updatedName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
