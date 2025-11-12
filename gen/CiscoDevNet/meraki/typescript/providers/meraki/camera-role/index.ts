// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CameraRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device tag on which this specified permission is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#applied_on_devices CameraRole#applied_on_devices}
  */
  readonly appliedOnDevices?: CameraRoleAppliedOnDevices[] | cdktf.IResolvable;
  /**
  * Network tag on which this specified permission is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#applied_on_networks CameraRole#applied_on_networks}
  */
  readonly appliedOnNetworks?: CameraRoleAppliedOnNetworks[] | cdktf.IResolvable;
  /**
  * Permissions to be applied org wide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#applied_org_wide CameraRole#applied_org_wide}
  */
  readonly appliedOrgWide?: CameraRoleAppliedOrgWide[] | cdktf.IResolvable;
  /**
  * The name of the new role. Must be unique. This parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#name CameraRole#name}
  */
  readonly name: string;
  /**
  * Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#organization_id CameraRole#organization_id}
  */
  readonly organizationId: string;
}
export interface CameraRoleAppliedOnDevices {
  /**
  * Device id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#id CameraRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network id scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#in_networks_with_id CameraRole#in_networks_with_id}
  */
  readonly inNetworksWithId?: string;
  /**
  * Network tag scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#in_networks_with_tag CameraRole#in_networks_with_tag}
  */
  readonly inNetworksWithTag?: string;
  /**
  * Permission scope id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#permission_scope_id CameraRole#permission_scope_id}
  */
  readonly permissionScopeId: string;
  /**
  * Device tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#tag CameraRole#tag}
  */
  readonly tag?: string;
}

export function cameraRoleAppliedOnDevicesToTerraform(struct?: CameraRoleAppliedOnDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    in_networks_with_id: cdktf.stringToTerraform(struct!.inNetworksWithId),
    in_networks_with_tag: cdktf.stringToTerraform(struct!.inNetworksWithTag),
    permission_scope_id: cdktf.stringToTerraform(struct!.permissionScopeId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function cameraRoleAppliedOnDevicesToHclTerraform(struct?: CameraRoleAppliedOnDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_networks_with_id: {
      value: cdktf.stringToHclTerraform(struct!.inNetworksWithId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_networks_with_tag: {
      value: cdktf.stringToHclTerraform(struct!.inNetworksWithTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_scope_id: {
      value: cdktf.stringToHclTerraform(struct!.permissionScopeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CameraRoleAppliedOnDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CameraRoleAppliedOnDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inNetworksWithId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inNetworksWithId = this._inNetworksWithId;
    }
    if (this._inNetworksWithTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.inNetworksWithTag = this._inNetworksWithTag;
    }
    if (this._permissionScopeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionScopeId = this._permissionScopeId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CameraRoleAppliedOnDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._inNetworksWithId = undefined;
      this._inNetworksWithTag = undefined;
      this._permissionScopeId = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._inNetworksWithId = value.inNetworksWithId;
      this._inNetworksWithTag = value.inNetworksWithTag;
      this._permissionScopeId = value.permissionScopeId;
      this._tag = value.tag;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // in_networks_with_id - computed: false, optional: true, required: false
  private _inNetworksWithId?: string; 
  public get inNetworksWithId() {
    return this.getStringAttribute('in_networks_with_id');
  }
  public set inNetworksWithId(value: string) {
    this._inNetworksWithId = value;
  }
  public resetInNetworksWithId() {
    this._inNetworksWithId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inNetworksWithIdInput() {
    return this._inNetworksWithId;
  }

  // in_networks_with_tag - computed: false, optional: true, required: false
  private _inNetworksWithTag?: string; 
  public get inNetworksWithTag() {
    return this.getStringAttribute('in_networks_with_tag');
  }
  public set inNetworksWithTag(value: string) {
    this._inNetworksWithTag = value;
  }
  public resetInNetworksWithTag() {
    this._inNetworksWithTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inNetworksWithTagInput() {
    return this._inNetworksWithTag;
  }

  // permission_scope_id - computed: false, optional: false, required: true
  private _permissionScopeId?: string; 
  public get permissionScopeId() {
    return this.getStringAttribute('permission_scope_id');
  }
  public set permissionScopeId(value: string) {
    this._permissionScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionScopeIdInput() {
    return this._permissionScopeId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class CameraRoleAppliedOnDevicesList extends cdktf.ComplexList {
  public internalValue? : CameraRoleAppliedOnDevices[] | cdktf.IResolvable

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
  public get(index: number): CameraRoleAppliedOnDevicesOutputReference {
    return new CameraRoleAppliedOnDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CameraRoleAppliedOnNetworks {
  /**
  * Network id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#id CameraRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Permission scope id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#permission_scope_id CameraRole#permission_scope_id}
  */
  readonly permissionScopeId: string;
  /**
  * Network tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#tag CameraRole#tag}
  */
  readonly tag?: string;
}

export function cameraRoleAppliedOnNetworksToTerraform(struct?: CameraRoleAppliedOnNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    permission_scope_id: cdktf.stringToTerraform(struct!.permissionScopeId),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function cameraRoleAppliedOnNetworksToHclTerraform(struct?: CameraRoleAppliedOnNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permission_scope_id: {
      value: cdktf.stringToHclTerraform(struct!.permissionScopeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CameraRoleAppliedOnNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CameraRoleAppliedOnNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._permissionScopeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionScopeId = this._permissionScopeId;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CameraRoleAppliedOnNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._permissionScopeId = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._permissionScopeId = value.permissionScopeId;
      this._tag = value.tag;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // permission_scope_id - computed: false, optional: false, required: true
  private _permissionScopeId?: string; 
  public get permissionScopeId() {
    return this.getStringAttribute('permission_scope_id');
  }
  public set permissionScopeId(value: string) {
    this._permissionScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionScopeIdInput() {
    return this._permissionScopeId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class CameraRoleAppliedOnNetworksList extends cdktf.ComplexList {
  public internalValue? : CameraRoleAppliedOnNetworks[] | cdktf.IResolvable

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
  public get(index: number): CameraRoleAppliedOnNetworksOutputReference {
    return new CameraRoleAppliedOnNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CameraRoleAppliedOrgWide {
  /**
  * Permission scope id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#permission_scope_id CameraRole#permission_scope_id}
  */
  readonly permissionScopeId: string;
}

export function cameraRoleAppliedOrgWideToTerraform(struct?: CameraRoleAppliedOrgWide | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission_scope_id: cdktf.stringToTerraform(struct!.permissionScopeId),
  }
}


export function cameraRoleAppliedOrgWideToHclTerraform(struct?: CameraRoleAppliedOrgWide | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission_scope_id: {
      value: cdktf.stringToHclTerraform(struct!.permissionScopeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CameraRoleAppliedOrgWideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CameraRoleAppliedOrgWide | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permissionScopeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissionScopeId = this._permissionScopeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CameraRoleAppliedOrgWide | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._permissionScopeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._permissionScopeId = value.permissionScopeId;
    }
  }

  // permission_scope_id - computed: false, optional: false, required: true
  private _permissionScopeId?: string; 
  public get permissionScopeId() {
    return this.getStringAttribute('permission_scope_id');
  }
  public set permissionScopeId(value: string) {
    this._permissionScopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionScopeIdInput() {
    return this._permissionScopeId;
  }
}

export class CameraRoleAppliedOrgWideList extends cdktf.ComplexList {
  public internalValue? : CameraRoleAppliedOrgWide[] | cdktf.IResolvable

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
  public get(index: number): CameraRoleAppliedOrgWideOutputReference {
    return new CameraRoleAppliedOrgWideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role meraki_camera_role}
*/
export class CameraRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_camera_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CameraRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CameraRole to import
  * @param importFromId The id of the existing CameraRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CameraRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_camera_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/camera_role meraki_camera_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CameraRoleConfig
  */
  public constructor(scope: Construct, id: string, config: CameraRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_camera_role',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appliedOnDevices.internalValue = config.appliedOnDevices;
    this._appliedOnNetworks.internalValue = config.appliedOnNetworks;
    this._appliedOrgWide.internalValue = config.appliedOrgWide;
    this._name = config.name;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applied_on_devices - computed: false, optional: true, required: false
  private _appliedOnDevices = new CameraRoleAppliedOnDevicesList(this, "applied_on_devices", false);
  public get appliedOnDevices() {
    return this._appliedOnDevices;
  }
  public putAppliedOnDevices(value: CameraRoleAppliedOnDevices[] | cdktf.IResolvable) {
    this._appliedOnDevices.internalValue = value;
  }
  public resetAppliedOnDevices() {
    this._appliedOnDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliedOnDevicesInput() {
    return this._appliedOnDevices.internalValue;
  }

  // applied_on_networks - computed: false, optional: true, required: false
  private _appliedOnNetworks = new CameraRoleAppliedOnNetworksList(this, "applied_on_networks", false);
  public get appliedOnNetworks() {
    return this._appliedOnNetworks;
  }
  public putAppliedOnNetworks(value: CameraRoleAppliedOnNetworks[] | cdktf.IResolvable) {
    this._appliedOnNetworks.internalValue = value;
  }
  public resetAppliedOnNetworks() {
    this._appliedOnNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliedOnNetworksInput() {
    return this._appliedOnNetworks.internalValue;
  }

  // applied_org_wide - computed: false, optional: true, required: false
  private _appliedOrgWide = new CameraRoleAppliedOrgWideList(this, "applied_org_wide", false);
  public get appliedOrgWide() {
    return this._appliedOrgWide;
  }
  public putAppliedOrgWide(value: CameraRoleAppliedOrgWide[] | cdktf.IResolvable) {
    this._appliedOrgWide.internalValue = value;
  }
  public resetAppliedOrgWide() {
    this._appliedOrgWide.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliedOrgWideInput() {
    return this._appliedOrgWide.internalValue;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applied_on_devices: cdktf.listMapper(cameraRoleAppliedOnDevicesToTerraform, false)(this._appliedOnDevices.internalValue),
      applied_on_networks: cdktf.listMapper(cameraRoleAppliedOnNetworksToTerraform, false)(this._appliedOnNetworks.internalValue),
      applied_org_wide: cdktf.listMapper(cameraRoleAppliedOrgWideToTerraform, false)(this._appliedOrgWide.internalValue),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      applied_on_devices: {
        value: cdktf.listMapperHcl(cameraRoleAppliedOnDevicesToHclTerraform, false)(this._appliedOnDevices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CameraRoleAppliedOnDevicesList",
      },
      applied_on_networks: {
        value: cdktf.listMapperHcl(cameraRoleAppliedOnNetworksToHclTerraform, false)(this._appliedOnNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CameraRoleAppliedOnNetworksList",
      },
      applied_org_wide: {
        value: cdktf.listMapperHcl(cameraRoleAppliedOrgWideToHclTerraform, false)(this._appliedOrgWide.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CameraRoleAppliedOrgWideList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
