// https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list actions that are allowed on the object types. Acceptable values are `view`, `add`, `change`, or `delete`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission#actions Permission#actions}
  */
  readonly actions: string[];
  /**
  * A JSON string of an arbitrary filter used to limit the granted action(s) to a specific subset of objects. For more information on correct syntax, see https://docs.netbox.dev/en/stable/administration/permissions/#constraints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission#constraints Permission#constraints}
  */
  readonly constraints?: string;
  /**
  * The description of the permission object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission#description Permission#description}
  */
  readonly description?: string;
  /**
  * Whether the permission object is enabled or not. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission#enabled Permission#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A list of group IDs that have been assigned to this permission object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission#groups Permission#groups}
  */
  readonly groups?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission#id Permission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the permission object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission#name Permission#name}
  */
  readonly name: string;
  /**
  * A list of object types that the permission object allows access to. Should be in a form the API can accept. For example: `circuits.provider`, `dcim.inventoryitem`, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission#object_types Permission#object_types}
  */
  readonly objectTypes: string[];
  /**
  * A list of user IDs that have been assigned to this permission object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission#users Permission#users}
  */
  readonly users?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission netbox_permission}
*/
export class Permission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Permission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Permission to import
  * @param importFromId The id of the existing Permission that should be imported. Refer to the {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Permission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/e-breuninger/netbox/5.0.0/docs/resources/permission netbox_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PermissionConfig
  */
  public constructor(scope: Construct, id: string, config: PermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_permission',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '5.0.0'
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
    this._constraints = config.constraints;
    this._description = config.description;
    this._enabled = config.enabled;
    this._groups = config.groups;
    this._id = config.id;
    this._name = config.name;
    this._objectTypes = config.objectTypes;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints?: string; 
  public get constraints() {
    return this.getStringAttribute('constraints');
  }
  public set constraints(value: string) {
    this._constraints = value;
  }
  public resetConstraints() {
    this._constraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints;
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

  // groups - computed: false, optional: true, required: false
  private _groups?: number[]; 
  public get groups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('groups')));
  }
  public set groups(value: number[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // object_types - computed: false, optional: false, required: true
  private _objectTypes?: string[]; 
  public get objectTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('object_types'));
  }
  public set objectTypes(value: string[]) {
    this._objectTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypesInput() {
    return this._objectTypes;
  }

  // users - computed: false, optional: true, required: false
  private _users?: number[]; 
  public get users() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('users')));
  }
  public set users(value: number[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._actions),
      constraints: cdktf.stringToTerraform(this._constraints),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      object_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectTypes),
      users: cdktf.listMapper(cdktf.numberToTerraform, false)(this._users),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._actions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      constraints: {
        value: cdktf.stringToHclTerraform(this._constraints),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      object_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      users: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._users),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
