// https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/user_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of grants defining the role's access level inside each workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/user_role#access_grants UserRole#access_grants}
  */
  readonly accessGrants: UserRoleAccessGrants[] | cdktf.IResolvable;
  /**
  * User Role Name. Must be unique across WarpStream account. Must contain spaces, hyphens, underscores and alphanumeric characters only. Must be between 3 and 60 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/user_role#name UserRole#name}
  */
  readonly name: string;
}
export interface UserRoleAccessGrants {
  /**
  * Level of access inside the workspace. Current options are: admin and read_only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/user_role#grant_type UserRole#grant_type}
  */
  readonly grantType: string;
  /**
  * ID of a workspace that the role has access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/user_role#workspace_id UserRole#workspace_id}
  */
  readonly workspaceId: string;
}

export function userRoleAccessGrantsToTerraform(struct?: UserRoleAccessGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grant_type: cdktf.stringToTerraform(struct!.grantType),
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function userRoleAccessGrantsToHclTerraform(struct?: UserRoleAccessGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grant_type: {
      value: cdktf.stringToHclTerraform(struct!.grantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserRoleAccessGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserRoleAccessGrants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantType = this._grantType;
    }
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserRoleAccessGrants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grantType = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grantType = value.grantType;
      this._workspaceId = value.workspaceId;
    }
  }

  // grant_type - computed: false, optional: false, required: true
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }
}

export class UserRoleAccessGrantsList extends cdktf.ComplexList {
  public internalValue? : UserRoleAccessGrants[] | cdktf.IResolvable

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
  public get(index: number): UserRoleAccessGrantsOutputReference {
    return new UserRoleAccessGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/user_role warpstream_user_role}
*/
export class UserRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "warpstream_user_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserRole to import
  * @param importFromId The id of the existing UserRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/user_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "warpstream_user_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.4/docs/resources/user_role warpstream_user_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserRoleConfig
  */
  public constructor(scope: Construct, id: string, config: UserRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'warpstream_user_role',
      terraformGeneratorMetadata: {
        providerName: 'warpstream',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessGrants.internalValue = config.accessGrants;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_grants - computed: false, optional: false, required: true
  private _accessGrants = new UserRoleAccessGrantsList(this, "access_grants", false);
  public get accessGrants() {
    return this._accessGrants;
  }
  public putAccessGrants(value: UserRoleAccessGrants[] | cdktf.IResolvable) {
    this._accessGrants.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGrantsInput() {
    return this._accessGrants.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_grants: cdktf.listMapper(userRoleAccessGrantsToTerraform, false)(this._accessGrants.internalValue),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_grants: {
        value: cdktf.listMapperHcl(userRoleAccessGrantsToHclTerraform, false)(this._accessGrants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserRoleAccessGrantsList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
