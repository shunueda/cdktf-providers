// https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/entity_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identity of the Britive application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/entity_group#application_id EntityGroup#application_id}
  */
  readonly applicationId: string;
  /**
  * The description of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/entity_group#entity_description EntityGroup#entity_description}
  */
  readonly entityDescription: string;
  /**
  * The identity of the application entity of type environment group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/entity_group#entity_id EntityGroup#entity_id}
  */
  readonly entityId?: string;
  /**
  * The name of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/entity_group#entity_name EntityGroup#entity_name}
  */
  readonly entityName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/entity_group#id EntityGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent id under which the environment group will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/entity_group#parent_id EntityGroup#parent_id}
  */
  readonly parentId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/entity_group britive_entity_group}
*/
export class EntityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "britive_entity_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EntityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EntityGroup to import
  * @param importFromId The id of the existing EntityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/entity_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EntityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "britive_entity_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/britive/britive/2.2.5/docs/resources/entity_group britive_entity_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EntityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'britive_entity_group',
      terraformGeneratorMetadata: {
        providerName: 'britive',
        providerVersion: '2.2.5',
        providerVersionConstraint: '2.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._entityDescription = config.entityDescription;
    this._entityId = config.entityId;
    this._entityName = config.entityName;
    this._id = config.id;
    this._parentId = config.parentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // entity_description - computed: false, optional: false, required: true
  private _entityDescription?: string; 
  public get entityDescription() {
    return this.getStringAttribute('entity_description');
  }
  public set entityDescription(value: string) {
    this._entityDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityDescriptionInput() {
    return this._entityDescription;
  }

  // entity_id - computed: true, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
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

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      entity_description: cdktf.stringToTerraform(this._entityDescription),
      entity_id: cdktf.stringToTerraform(this._entityId),
      entity_name: cdktf.stringToTerraform(this._entityName),
      id: cdktf.stringToTerraform(this._id),
      parent_id: cdktf.stringToTerraform(this._parentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_description: {
        value: cdktf.stringToHclTerraform(this._entityDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_name: {
        value: cdktf.stringToHclTerraform(this._entityName),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
