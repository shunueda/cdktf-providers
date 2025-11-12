// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapshotAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes#id SnapshotAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes#snapshot_id SnapshotAttributes#snapshot_id}
  */
  readonly snapshotId: string;
  /**
  * permissions_to_create_volume_additions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes#permissions_to_create_volume_additions SnapshotAttributes#permissions_to_create_volume_additions}
  */
  readonly permissionsToCreateVolumeAdditions?: SnapshotAttributesPermissionsToCreateVolumeAdditions;
  /**
  * permissions_to_create_volume_removals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes#permissions_to_create_volume_removals SnapshotAttributes#permissions_to_create_volume_removals}
  */
  readonly permissionsToCreateVolumeRemovals?: SnapshotAttributesPermissionsToCreateVolumeRemovals[] | cdktf.IResolvable;
}
export interface SnapshotAttributesPermissionsToCreateVolumeAdditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes#account_ids SnapshotAttributes#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes#global_permission SnapshotAttributes#global_permission}
  */
  readonly globalPermission?: boolean | cdktf.IResolvable;
}

export function snapshotAttributesPermissionsToCreateVolumeAdditionsToTerraform(struct?: SnapshotAttributesPermissionsToCreateVolumeAdditionsOutputReference | SnapshotAttributesPermissionsToCreateVolumeAdditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountIds),
    global_permission: cdktf.booleanToTerraform(struct!.globalPermission),
  }
}


export function snapshotAttributesPermissionsToCreateVolumeAdditionsToHclTerraform(struct?: SnapshotAttributesPermissionsToCreateVolumeAdditionsOutputReference | SnapshotAttributesPermissionsToCreateVolumeAdditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    global_permission: {
      value: cdktf.booleanToHclTerraform(struct!.globalPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotAttributesPermissionsToCreateVolumeAdditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SnapshotAttributesPermissionsToCreateVolumeAdditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._globalPermission !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalPermission = this._globalPermission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotAttributesPermissionsToCreateVolumeAdditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountIds = undefined;
      this._globalPermission = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountIds = value.accountIds;
      this._globalPermission = value.globalPermission;
    }
  }

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // global_permission - computed: false, optional: true, required: false
  private _globalPermission?: boolean | cdktf.IResolvable; 
  public get globalPermission() {
    return this.getBooleanAttribute('global_permission');
  }
  public set globalPermission(value: boolean | cdktf.IResolvable) {
    this._globalPermission = value;
  }
  public resetGlobalPermission() {
    this._globalPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPermissionInput() {
    return this._globalPermission;
  }
}
export interface SnapshotAttributesPermissionsToCreateVolumeRemovals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes#account_ids SnapshotAttributes#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes#global_permission SnapshotAttributes#global_permission}
  */
  readonly globalPermission?: boolean | cdktf.IResolvable;
}

export function snapshotAttributesPermissionsToCreateVolumeRemovalsToTerraform(struct?: SnapshotAttributesPermissionsToCreateVolumeRemovals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountIds),
    global_permission: cdktf.booleanToTerraform(struct!.globalPermission),
  }
}


export function snapshotAttributesPermissionsToCreateVolumeRemovalsToHclTerraform(struct?: SnapshotAttributesPermissionsToCreateVolumeRemovals | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    global_permission: {
      value: cdktf.booleanToHclTerraform(struct!.globalPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapshotAttributesPermissionsToCreateVolumeRemovalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnapshotAttributesPermissionsToCreateVolumeRemovals | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIds = this._accountIds;
    }
    if (this._globalPermission !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalPermission = this._globalPermission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapshotAttributesPermissionsToCreateVolumeRemovals | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIds = undefined;
      this._globalPermission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIds = value.accountIds;
      this._globalPermission = value.globalPermission;
    }
  }

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // global_permission - computed: false, optional: true, required: false
  private _globalPermission?: boolean | cdktf.IResolvable; 
  public get globalPermission() {
    return this.getBooleanAttribute('global_permission');
  }
  public set globalPermission(value: boolean | cdktf.IResolvable) {
    this._globalPermission = value;
  }
  public resetGlobalPermission() {
    this._globalPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalPermissionInput() {
    return this._globalPermission;
  }
}

export class SnapshotAttributesPermissionsToCreateVolumeRemovalsList extends cdktf.ComplexList {
  public internalValue? : SnapshotAttributesPermissionsToCreateVolumeRemovals[] | cdktf.IResolvable

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
  public get(index: number): SnapshotAttributesPermissionsToCreateVolumeRemovalsOutputReference {
    return new SnapshotAttributesPermissionsToCreateVolumeRemovalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes outscale_snapshot_attributes}
*/
export class SnapshotAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_snapshot_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnapshotAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnapshotAttributes to import
  * @param importFromId The id of the existing SnapshotAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnapshotAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_snapshot_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/snapshot_attributes outscale_snapshot_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapshotAttributesConfig
  */
  public constructor(scope: Construct, id: string, config: SnapshotAttributesConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_snapshot_attributes',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._snapshotId = config.snapshotId;
    this._permissionsToCreateVolumeAdditions.internalValue = config.permissionsToCreateVolumeAdditions;
    this._permissionsToCreateVolumeRemovals.internalValue = config.permissionsToCreateVolumeRemovals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
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

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // snapshot_id - computed: false, optional: false, required: true
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // permissions_to_create_volume_additions - computed: false, optional: true, required: false
  private _permissionsToCreateVolumeAdditions = new SnapshotAttributesPermissionsToCreateVolumeAdditionsOutputReference(this, "permissions_to_create_volume_additions");
  public get permissionsToCreateVolumeAdditions() {
    return this._permissionsToCreateVolumeAdditions;
  }
  public putPermissionsToCreateVolumeAdditions(value: SnapshotAttributesPermissionsToCreateVolumeAdditions) {
    this._permissionsToCreateVolumeAdditions.internalValue = value;
  }
  public resetPermissionsToCreateVolumeAdditions() {
    this._permissionsToCreateVolumeAdditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsToCreateVolumeAdditionsInput() {
    return this._permissionsToCreateVolumeAdditions.internalValue;
  }

  // permissions_to_create_volume_removals - computed: false, optional: true, required: false
  private _permissionsToCreateVolumeRemovals = new SnapshotAttributesPermissionsToCreateVolumeRemovalsList(this, "permissions_to_create_volume_removals", false);
  public get permissionsToCreateVolumeRemovals() {
    return this._permissionsToCreateVolumeRemovals;
  }
  public putPermissionsToCreateVolumeRemovals(value: SnapshotAttributesPermissionsToCreateVolumeRemovals[] | cdktf.IResolvable) {
    this._permissionsToCreateVolumeRemovals.internalValue = value;
  }
  public resetPermissionsToCreateVolumeRemovals() {
    this._permissionsToCreateVolumeRemovals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsToCreateVolumeRemovalsInput() {
    return this._permissionsToCreateVolumeRemovals.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      snapshot_id: cdktf.stringToTerraform(this._snapshotId),
      permissions_to_create_volume_additions: snapshotAttributesPermissionsToCreateVolumeAdditionsToTerraform(this._permissionsToCreateVolumeAdditions.internalValue),
      permissions_to_create_volume_removals: cdktf.listMapper(snapshotAttributesPermissionsToCreateVolumeRemovalsToTerraform, true)(this._permissionsToCreateVolumeRemovals.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snapshot_id: {
        value: cdktf.stringToHclTerraform(this._snapshotId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions_to_create_volume_additions: {
        value: snapshotAttributesPermissionsToCreateVolumeAdditionsToHclTerraform(this._permissionsToCreateVolumeAdditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnapshotAttributesPermissionsToCreateVolumeAdditionsList",
      },
      permissions_to_create_volume_removals: {
        value: cdktf.listMapperHcl(snapshotAttributesPermissionsToCreateVolumeRemovalsToHclTerraform, true)(this._permissionsToCreateVolumeRemovals.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnapshotAttributesPermissionsToCreateVolumeRemovalsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
