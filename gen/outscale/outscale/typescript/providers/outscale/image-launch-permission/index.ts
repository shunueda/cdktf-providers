// https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageLaunchPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission#id ImageLaunchPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission#image_id ImageLaunchPermission#image_id}
  */
  readonly imageId: string;
  /**
  * permission_additions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission#permission_additions ImageLaunchPermission#permission_additions}
  */
  readonly permissionAdditions?: ImageLaunchPermissionPermissionAdditions;
  /**
  * permission_removals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission#permission_removals ImageLaunchPermission#permission_removals}
  */
  readonly permissionRemovals?: ImageLaunchPermissionPermissionRemovals;
}
export interface ImageLaunchPermissionPermissionsToLaunch {
}

export function imageLaunchPermissionPermissionsToLaunchToTerraform(struct?: ImageLaunchPermissionPermissionsToLaunch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imageLaunchPermissionPermissionsToLaunchToHclTerraform(struct?: ImageLaunchPermissionPermissionsToLaunch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImageLaunchPermissionPermissionsToLaunchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageLaunchPermissionPermissionsToLaunch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageLaunchPermissionPermissionsToLaunch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_ids - computed: true, optional: false, required: false
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }

  // global_permission - computed: true, optional: false, required: false
  public get globalPermission() {
    return this.getStringAttribute('global_permission');
  }
}

export class ImageLaunchPermissionPermissionsToLaunchList extends cdktf.ComplexList {

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
  public get(index: number): ImageLaunchPermissionPermissionsToLaunchOutputReference {
    return new ImageLaunchPermissionPermissionsToLaunchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageLaunchPermissionPermissionAdditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission#account_ids ImageLaunchPermission#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission#global_permission ImageLaunchPermission#global_permission}
  */
  readonly globalPermission?: string;
}

export function imageLaunchPermissionPermissionAdditionsToTerraform(struct?: ImageLaunchPermissionPermissionAdditionsOutputReference | ImageLaunchPermissionPermissionAdditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountIds),
    global_permission: cdktf.stringToTerraform(struct!.globalPermission),
  }
}


export function imageLaunchPermissionPermissionAdditionsToHclTerraform(struct?: ImageLaunchPermissionPermissionAdditionsOutputReference | ImageLaunchPermissionPermissionAdditions): any {
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
      value: cdktf.stringToHclTerraform(struct!.globalPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageLaunchPermissionPermissionAdditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImageLaunchPermissionPermissionAdditions | undefined {
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

  public set internalValue(value: ImageLaunchPermissionPermissionAdditions | undefined) {
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
  private _globalPermission?: string; 
  public get globalPermission() {
    return this.getStringAttribute('global_permission');
  }
  public set globalPermission(value: string) {
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
export interface ImageLaunchPermissionPermissionRemovals {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission#account_ids ImageLaunchPermission#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission#global_permission ImageLaunchPermission#global_permission}
  */
  readonly globalPermission?: string;
}

export function imageLaunchPermissionPermissionRemovalsToTerraform(struct?: ImageLaunchPermissionPermissionRemovalsOutputReference | ImageLaunchPermissionPermissionRemovals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountIds),
    global_permission: cdktf.stringToTerraform(struct!.globalPermission),
  }
}


export function imageLaunchPermissionPermissionRemovalsToHclTerraform(struct?: ImageLaunchPermissionPermissionRemovalsOutputReference | ImageLaunchPermissionPermissionRemovals): any {
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
      value: cdktf.stringToHclTerraform(struct!.globalPermission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageLaunchPermissionPermissionRemovalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ImageLaunchPermissionPermissionRemovals | undefined {
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

  public set internalValue(value: ImageLaunchPermissionPermissionRemovals | undefined) {
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
  private _globalPermission?: string; 
  public get globalPermission() {
    return this.getStringAttribute('global_permission');
  }
  public set globalPermission(value: string) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission outscale_image_launch_permission}
*/
export class ImageLaunchPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "outscale_image_launch_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImageLaunchPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImageLaunchPermission to import
  * @param importFromId The id of the existing ImageLaunchPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImageLaunchPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "outscale_image_launch_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/outscale/outscale/1.2.1/docs/resources/image_launch_permission outscale_image_launch_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageLaunchPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: ImageLaunchPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'outscale_image_launch_permission',
      terraformGeneratorMetadata: {
        providerName: 'outscale',
        providerVersion: '1.2.1'
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
    this._imageId = config.imageId;
    this._permissionAdditions.internalValue = config.permissionAdditions;
    this._permissionRemovals.internalValue = config.permissionRemovals;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // permissions_to_launch - computed: true, optional: false, required: false
  private _permissionsToLaunch = new ImageLaunchPermissionPermissionsToLaunchList(this, "permissions_to_launch", true);
  public get permissionsToLaunch() {
    return this._permissionsToLaunch;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // permission_additions - computed: false, optional: true, required: false
  private _permissionAdditions = new ImageLaunchPermissionPermissionAdditionsOutputReference(this, "permission_additions");
  public get permissionAdditions() {
    return this._permissionAdditions;
  }
  public putPermissionAdditions(value: ImageLaunchPermissionPermissionAdditions) {
    this._permissionAdditions.internalValue = value;
  }
  public resetPermissionAdditions() {
    this._permissionAdditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionAdditionsInput() {
    return this._permissionAdditions.internalValue;
  }

  // permission_removals - computed: false, optional: true, required: false
  private _permissionRemovals = new ImageLaunchPermissionPermissionRemovalsOutputReference(this, "permission_removals");
  public get permissionRemovals() {
    return this._permissionRemovals;
  }
  public putPermissionRemovals(value: ImageLaunchPermissionPermissionRemovals) {
    this._permissionRemovals.internalValue = value;
  }
  public resetPermissionRemovals() {
    this._permissionRemovals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionRemovalsInput() {
    return this._permissionRemovals.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      permission_additions: imageLaunchPermissionPermissionAdditionsToTerraform(this._permissionAdditions.internalValue),
      permission_removals: imageLaunchPermissionPermissionRemovalsToTerraform(this._permissionRemovals.internalValue),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_additions: {
        value: imageLaunchPermissionPermissionAdditionsToHclTerraform(this._permissionAdditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImageLaunchPermissionPermissionAdditionsList",
      },
      permission_removals: {
        value: imageLaunchPermissionPermissionRemovalsToHclTerraform(this._permissionRemovals.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ImageLaunchPermissionPermissionRemovalsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
