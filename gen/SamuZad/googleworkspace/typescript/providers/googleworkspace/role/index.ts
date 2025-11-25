// https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * A short description of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/role#description Role#description}
  */
  readonly description?: string;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/role#name Role#name}
  */
  readonly name: string;
  /**
  * privileges block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/role#privileges Role#privileges}
  */
  readonly privileges: RolePrivileges[] | cdktf.IResolvable;
}
export interface RolePrivileges {
  /**
  * The name of the privilege.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/role#privilege_name Role#privilege_name}
  */
  readonly privilegeName: string;
  /**
  * The obfuscated ID of the service this privilege is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/role#service_id Role#service_id}
  */
  readonly serviceId: string;
}

export function rolePrivilegesToTerraform(struct?: RolePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privilege_name: cdktf.stringToTerraform(struct!.privilegeName),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
  }
}


export function rolePrivilegesToHclTerraform(struct?: RolePrivileges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privilege_name: {
      value: cdktf.stringToHclTerraform(struct!.privilegeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RolePrivilegesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RolePrivileges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privilegeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.privilegeName = this._privilegeName;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RolePrivileges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._privilegeName = undefined;
      this._serviceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._privilegeName = value.privilegeName;
      this._serviceId = value.serviceId;
    }
  }

  // privilege_name - computed: false, optional: false, required: true
  private _privilegeName?: string; 
  public get privilegeName() {
    return this.getStringAttribute('privilege_name');
  }
  public set privilegeName(value: string) {
    this._privilegeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeNameInput() {
    return this._privilegeName;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }
}

export class RolePrivilegesList extends cdktf.ComplexList {
  public internalValue? : RolePrivileges[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): RolePrivilegesOutputReference {
    return new RolePrivilegesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/role googleworkspace_role}
*/
export class Role extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Role resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Role to import
  * @param importFromId The id of the existing Role that should be imported. Refer to the {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Role to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "googleworkspace_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samuzad/googleworkspace/0.11.1/docs/resources/role googleworkspace_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleConfig
  */
  public constructor(scope: Construct, id: string, config: RoleConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_role',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.11.1',
        providerVersionConstraint: '0.11.1'
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
    this._name = config.name;
    this._privileges.internalValue = config.privileges;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_super_admin_role - computed: true, optional: false, required: false
  public get isSuperAdminRole() {
    return this.getBooleanAttribute('is_super_admin_role');
  }

  // is_system_role - computed: true, optional: false, required: false
  public get isSystemRole() {
    return this.getBooleanAttribute('is_system_role');
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

  // privileges - computed: false, optional: false, required: true
  private _privileges = new RolePrivilegesList(this, "privileges", true);
  public get privileges() {
    return this._privileges;
  }
  public putPrivileges(value: RolePrivileges[] | cdktf.IResolvable) {
    this._privileges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegesInput() {
    return this._privileges.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      privileges: cdktf.listMapper(rolePrivilegesToTerraform, true)(this._privileges.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privileges: {
        value: cdktf.listMapperHcl(rolePrivilegesToHclTerraform, true)(this._privileges.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RolePrivilegesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
