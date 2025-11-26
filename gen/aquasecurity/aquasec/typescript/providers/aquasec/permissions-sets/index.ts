// https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/permissions_sets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionsSetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of allowed actions for the Permission Set (not relevant if 'is_super' is true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/permissions_sets#actions PermissionsSets#actions}
  */
  readonly actions: string[];
  /**
  * Free text description for the Permission Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/permissions_sets#description PermissionsSets#description}
  */
  readonly description?: string;
  /**
  * Give the Permission Set full access, meaning all actions are allowed without restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/permissions_sets#is_super PermissionsSets#is_super}
  */
  readonly isSuper?: boolean | cdktf.IResolvable;
  /**
  * The name of the Permission Set, comprised of alphanumeric characters and '-', '_', ' ', ':', '.', '@', '!', '^'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/permissions_sets#name PermissionsSets#name}
  */
  readonly name: string;
  /**
  * Whether to allow UI access for users with this Permission Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/permissions_sets#ui_access PermissionsSets#ui_access}
  */
  readonly uiAccess: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/permissions_sets aquasec_permissions_sets}
*/
export class PermissionsSets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_permissions_sets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PermissionsSets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PermissionsSets to import
  * @param importFromId The id of the existing PermissionsSets that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/permissions_sets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PermissionsSets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_permissions_sets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.12.1/docs/resources/permissions_sets aquasec_permissions_sets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionsSetsConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionsSetsConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_permissions_sets',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.12.1',
        providerVersionConstraint: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actions = config.actions;
    this._description = config.description;
    this._isSuper = config.isSuper;
    this._name = config.name;
    this._uiAccess = config.uiAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_super - computed: false, optional: true, required: false
  private _isSuper?: boolean | cdktf.IResolvable; 
  public get isSuper() {
    return this.getBooleanAttribute('is_super');
  }
  public set isSuper(value: boolean | cdktf.IResolvable) {
    this._isSuper = value;
  }
  public resetIsSuper() {
    this._isSuper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSuperInput() {
    return this._isSuper;
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

  // ui_access - computed: false, optional: false, required: true
  private _uiAccess?: boolean | cdktf.IResolvable; 
  public get uiAccess() {
    return this.getBooleanAttribute('ui_access');
  }
  public set uiAccess(value: boolean | cdktf.IResolvable) {
    this._uiAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uiAccessInput() {
    return this._uiAccess;
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
      actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actions),
      description: cdktf.stringToTerraform(this._description),
      is_super: cdktf.booleanToTerraform(this._isSuper),
      name: cdktf.stringToTerraform(this._name),
      ui_access: cdktf.booleanToTerraform(this._uiAccess),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._actions),
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
      is_super: {
        value: cdktf.booleanToHclTerraform(this._isSuper),
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
      ui_access: {
        value: cdktf.booleanToHclTerraform(this._uiAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
