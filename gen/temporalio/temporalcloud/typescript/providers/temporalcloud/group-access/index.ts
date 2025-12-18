// https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/group_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * The role on the account. Must be one of owner, admin, developer, none, or read (case-insensitive). owner is only valid for import and cannot be created, updated or deleted without Temporal support. none is only valid for users managed via SCIM that derive their roles from group memberships or for group access resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/group_access#account_access GroupAccess#account_access}
  */
  readonly accountAccess: string;
  /**
  * The unique identifier of the group access across all Temporal Cloud tenants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/group_access#id GroupAccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The set of namespace accesses. Empty sets are not allowed, omit the attribute instead. Users with account_access roles of owner or admin cannot be assigned explicit permissions to namespaces. They implicitly receive access to all Namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/group_access#namespace_accesses GroupAccess#namespace_accesses}
  */
  readonly namespaceAccesses?: GroupAccessNamespaceAccesses[] | cdktf.IResolvable;
}
export interface GroupAccessNamespaceAccesses {
  /**
  * The namespace to assign permissions to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/group_access#namespace_id GroupAccess#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * The permission to assign. Must be one of admin, write, or read (case-insensitive)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/group_access#permission GroupAccess#permission}
  */
  readonly permission: string;
}

export function groupAccessNamespaceAccessesToTerraform(struct?: GroupAccessNamespaceAccesses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function groupAccessNamespaceAccessesToHclTerraform(struct?: GroupAccessNamespaceAccesses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_id: {
      value: cdktf.stringToHclTerraform(struct!.namespaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GroupAccessNamespaceAccessesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupAccessNamespaceAccesses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupAccessNamespaceAccesses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaceId = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaceId = value.namespaceId;
      this._permission = value.permission;
    }
  }

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // permission - computed: false, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class GroupAccessNamespaceAccessesList extends cdktf.ComplexList {
  public internalValue? : GroupAccessNamespaceAccesses[] | cdktf.IResolvable

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
  public get(index: number): GroupAccessNamespaceAccessesOutputReference {
    return new GroupAccessNamespaceAccessesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/group_access temporalcloud_group_access}
*/
export class GroupAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "temporalcloud_group_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupAccess to import
  * @param importFromId The id of the existing GroupAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/group_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "temporalcloud_group_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/temporalio/temporalcloud/1.1.2/docs/resources/group_access temporalcloud_group_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupAccessConfig
  */
  public constructor(scope: Construct, id: string, config: GroupAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'temporalcloud_group_access',
      terraformGeneratorMetadata: {
        providerName: 'temporalcloud',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountAccess = config.accountAccess;
    this._id = config.id;
    this._namespaceAccesses.internalValue = config.namespaceAccesses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_access - computed: false, optional: false, required: true
  private _accountAccess?: string; 
  public get accountAccess() {
    return this.getStringAttribute('account_access');
  }
  public set accountAccess(value: string) {
    this._accountAccess = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAccessInput() {
    return this._accountAccess;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // namespace_accesses - computed: false, optional: true, required: false
  private _namespaceAccesses = new GroupAccessNamespaceAccessesList(this, "namespace_accesses", true);
  public get namespaceAccesses() {
    return this._namespaceAccesses;
  }
  public putNamespaceAccesses(value: GroupAccessNamespaceAccesses[] | cdktf.IResolvable) {
    this._namespaceAccesses.internalValue = value;
  }
  public resetNamespaceAccesses() {
    this._namespaceAccesses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceAccessesInput() {
    return this._namespaceAccesses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_access: cdktf.stringToTerraform(this._accountAccess),
      id: cdktf.stringToTerraform(this._id),
      namespace_accesses: cdktf.listMapper(groupAccessNamespaceAccessesToTerraform, false)(this._namespaceAccesses.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_access: {
        value: cdktf.stringToHclTerraform(this._accountAccess),
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
      namespace_accesses: {
        value: cdktf.listMapperHcl(groupAccessNamespaceAccessesToHclTerraform, false)(this._namespaceAccesses.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupAccessNamespaceAccessesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
