// https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_owner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoderWorkspaceOwnerConfig extends cdktf.TerraformMetaArguments {
}
export interface DataCoderWorkspaceOwnerRbacRoles {
}

export function dataCoderWorkspaceOwnerRbacRolesToTerraform(struct?: DataCoderWorkspaceOwnerRbacRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoderWorkspaceOwnerRbacRolesToHclTerraform(struct?: DataCoderWorkspaceOwnerRbacRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoderWorkspaceOwnerRbacRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCoderWorkspaceOwnerRbacRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoderWorkspaceOwnerRbacRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
}

export class DataCoderWorkspaceOwnerRbacRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataCoderWorkspaceOwnerRbacRolesOutputReference {
    return new DataCoderWorkspaceOwnerRbacRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_owner coder_workspace_owner}
*/
export class DataCoderWorkspaceOwner extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coder_workspace_owner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoderWorkspaceOwner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoderWorkspaceOwner to import
  * @param importFromId The id of the existing DataCoderWorkspaceOwner that should be imported. Refer to the {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_owner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoderWorkspaceOwner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coder_workspace_owner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coder/coder/2.13.1/docs/data-sources/workspace_owner coder_workspace_owner} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoderWorkspaceOwnerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCoderWorkspaceOwnerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coder_workspace_owner',
      terraformGeneratorMetadata: {
        providerName: 'coder',
        providerVersion: '2.13.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return this.getListAttribute('groups');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login_type - computed: true, optional: false, required: false
  public get loginType() {
    return this.getStringAttribute('login_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oidc_access_token - computed: true, optional: false, required: false
  public get oidcAccessToken() {
    return this.getStringAttribute('oidc_access_token');
  }

  // rbac_roles - computed: true, optional: false, required: false
  private _rbacRoles = new DataCoderWorkspaceOwnerRbacRolesList(this, "rbac_roles", false);
  public get rbacRoles() {
    return this._rbacRoles;
  }

  // session_token - computed: true, optional: false, required: false
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }

  // ssh_private_key - computed: true, optional: false, required: false
  public get sshPrivateKey() {
    return this.getStringAttribute('ssh_private_key');
  }

  // ssh_public_key - computed: true, optional: false, required: false
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
