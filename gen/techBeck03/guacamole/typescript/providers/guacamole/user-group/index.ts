// https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection Group identifiers a user has permission to read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group#connection_groups UserGroup#connection_groups}
  */
  readonly connectionGroups?: string[];
  /**
  * Connections identifiers a user has permission to read
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group#connections UserGroup#connections}
  */
  readonly connections?: string[];
  /**
  * Groups this user group is a member of
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group#group_membership UserGroup#group_membership}
  */
  readonly groupMembership?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group#id UserGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of guacamole user group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group#identifier UserGroup#identifier}
  */
  readonly identifier: string;
  /**
  * System permissions assigned to user group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group#system_permissions UserGroup#system_permissions}
  */
  readonly systemPermissions?: string[];
  /**
  * attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group#attributes UserGroup#attributes}
  */
  readonly attributes?: UserGroupAttributes;
}
export interface UserGroupAttributes {
  /**
  * Whether group is disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group#disabled UserGroup#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function userGroupAttributesToTerraform(struct?: UserGroupAttributesOutputReference | UserGroupAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function userGroupAttributesToHclTerraform(struct?: UserGroupAttributesOutputReference | UserGroupAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserGroupAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group guacamole_user_group}
*/
export class UserGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "guacamole_user_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGroup to import
  * @param importFromId The id of the existing UserGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "guacamole_user_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/techbeck03/guacamole/1.4.1/docs/resources/user_group guacamole_user_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGroupConfig
  */
  public constructor(scope: Construct, id: string, config: UserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'guacamole_user_group',
      terraformGeneratorMetadata: {
        providerName: 'guacamole',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionGroups = config.connectionGroups;
    this._connections = config.connections;
    this._groupMembership = config.groupMembership;
    this._id = config.id;
    this._identifier = config.identifier;
    this._systemPermissions = config.systemPermissions;
    this._attributes.internalValue = config.attributes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_groups - computed: false, optional: true, required: false
  private _connectionGroups?: string[]; 
  public get connectionGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('connection_groups'));
  }
  public set connectionGroups(value: string[]) {
    this._connectionGroups = value;
  }
  public resetConnectionGroups() {
    this._connectionGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionGroupsInput() {
    return this._connectionGroups;
  }

  // connections - computed: false, optional: true, required: false
  private _connections?: string[]; 
  public get connections() {
    return cdktf.Fn.tolist(this.getListAttribute('connections'));
  }
  public set connections(value: string[]) {
    this._connections = value;
  }
  public resetConnections() {
    this._connections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections;
  }

  // group_membership - computed: false, optional: true, required: false
  private _groupMembership?: string[]; 
  public get groupMembership() {
    return cdktf.Fn.tolist(this.getListAttribute('group_membership'));
  }
  public set groupMembership(value: string[]) {
    this._groupMembership = value;
  }
  public resetGroupMembership() {
    this._groupMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipInput() {
    return this._groupMembership;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // system_permissions - computed: false, optional: true, required: false
  private _systemPermissions?: string[]; 
  public get systemPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('system_permissions'));
  }
  public set systemPermissions(value: string[]) {
    this._systemPermissions = value;
  }
  public resetSystemPermissions() {
    this._systemPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPermissionsInput() {
    return this._systemPermissions;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new UserGroupAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: UserGroupAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectionGroups),
      connections: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connections),
      group_membership: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupMembership),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      system_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._systemPermissions),
      attributes: userGroupAttributesToTerraform(this._attributes.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectionGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connections: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connections),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      group_membership: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupMembership),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._systemPermissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      attributes: {
        value: userGroupAttributesToHclTerraform(this._attributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupAttributesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
