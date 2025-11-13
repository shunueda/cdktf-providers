// https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.1/docs/data-sources/user_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWarpstreamUserRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of grants defining the role's access level inside each workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.1/docs/data-sources/user_role#access_grants DataWarpstreamUserRole#access_grants}
  */
  readonly accessGrants?: DataWarpstreamUserRoleAccessGrants[] | cdktf.IResolvable;
  /**
  * User Role ID. Exactly one of id or name must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.1/docs/data-sources/user_role#id DataWarpstreamUserRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User Role Name. Exactly one of id or name must be provided. Unique across WarpStream account. Contains spaces, hyphens, underscores or alphanumeric characters only. Between 3 and 60 characters in length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.1/docs/data-sources/user_role#name DataWarpstreamUserRole#name}
  */
  readonly name?: string;
}
export interface DataWarpstreamUserRoleAccessGrants {
}

export function dataWarpstreamUserRoleAccessGrantsToTerraform(struct?: DataWarpstreamUserRoleAccessGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWarpstreamUserRoleAccessGrantsToHclTerraform(struct?: DataWarpstreamUserRoleAccessGrants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWarpstreamUserRoleAccessGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWarpstreamUserRoleAccessGrants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWarpstreamUserRoleAccessGrants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // grant_type - computed: true, optional: false, required: false
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataWarpstreamUserRoleAccessGrantsList extends cdktf.ComplexList {
  public internalValue? : DataWarpstreamUserRoleAccessGrants[] | cdktf.IResolvable

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
  public get(index: number): DataWarpstreamUserRoleAccessGrantsOutputReference {
    return new DataWarpstreamUserRoleAccessGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.1/docs/data-sources/user_role warpstream_user_role}
*/
export class DataWarpstreamUserRole extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "warpstream_user_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWarpstreamUserRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWarpstreamUserRole to import
  * @param importFromId The id of the existing DataWarpstreamUserRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.1/docs/data-sources/user_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWarpstreamUserRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "warpstream_user_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/warpstreamlabs/warpstream/2.3.1/docs/data-sources/user_role warpstream_user_role} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWarpstreamUserRoleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataWarpstreamUserRoleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'warpstream_user_role',
      terraformGeneratorMetadata: {
        providerName: 'warpstream',
        providerVersion: '2.3.1',
        providerVersionConstraint: '2.3.1'
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_grants - computed: true, optional: true, required: false
  private _accessGrants = new DataWarpstreamUserRoleAccessGrantsList(this, "access_grants", false);
  public get accessGrants() {
    return this._accessGrants;
  }
  public putAccessGrants(value: DataWarpstreamUserRoleAccessGrants[] | cdktf.IResolvable) {
    this._accessGrants.internalValue = value;
  }
  public resetAccessGrants() {
    this._accessGrants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGrantsInput() {
    return this._accessGrants.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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
      access_grants: cdktf.listMapper(dataWarpstreamUserRoleAccessGrantsToTerraform, false)(this._accessGrants.internalValue),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_grants: {
        value: cdktf.listMapperHcl(dataWarpstreamUserRoleAccessGrantsToHclTerraform, false)(this._accessGrants.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataWarpstreamUserRoleAccessGrantsList",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
