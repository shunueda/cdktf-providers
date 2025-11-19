// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardSharingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Dynatrace entity ID of the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#dashboard_id DashboardSharing#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * The dashboard is shared (`true`) or private (`false`). Make sure that this value is aligned with the attribute `shared` of the resources `dynatrace_dashboard` and `dynatrace_json_dashboard`. Otherwise you will encounter non-empty plans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#enabled DashboardSharing#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#id DashboardSharing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If `true` the dashboard will be marked as preset. Setting this attribute to `true` will automatically enforce a specific set of permissions - Dashboards flagged as Preset are shared by default. Make sure that this value is aligned with the attribute `preset` of the resources `dynatrace_dashboard` and `dynatrace_json_dashboard`. Otherwise you will encounter non-empty plans.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#preset DashboardSharing#preset}
  */
  readonly preset?: boolean | cdktf.IResolvable;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#permissions DashboardSharing#permissions}
  */
  readonly permissions?: DashboardSharingPermissions;
  /**
  * public block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#public DashboardSharing#public}
  */
  readonly public?: DashboardSharingPublic;
}
export interface DashboardSharingPermissionsPermission {
  /**
  * The ID of the user or group to whom the permission is granted.
  * 
  * Not applicable if the **type** is set to `ALL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#id DashboardSharing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The level of the permission: 
  *  
  * * `VIEW`: The dashboard is shared with read permission. 
  * * `EDIT`: The dashboard is shared with edit permission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#level DashboardSharing#level}
  */
  readonly level: string;
  /**
  * The type of the permission: 
  * 
  * * `USER`: The dashboard is shared with the specified user. 
  * * `GROUP`: The dashboard is shared with all users of the specified group. 
  * * `ALL`: The dashboard is shared via link. Any authenticated user with the link can view the dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#type DashboardSharing#type}
  */
  readonly type: string;
}

export function dashboardSharingPermissionsPermissionToTerraform(struct?: DashboardSharingPermissionsPermission | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    level: cdktf.stringToTerraform(struct!.level),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dashboardSharingPermissionsPermissionToHclTerraform(struct?: DashboardSharingPermissionsPermission | cdktf.IResolvable): any {
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
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardSharingPermissionsPermissionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardSharingPermissionsPermission | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardSharingPermissionsPermission | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._level = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._level = value.level;
      this._type = value.type;
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

  // level - computed: false, optional: false, required: true
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DashboardSharingPermissionsPermissionList extends cdktf.ComplexList {
  public internalValue? : DashboardSharingPermissionsPermission[] | cdktf.IResolvable

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
  public get(index: number): DashboardSharingPermissionsPermissionOutputReference {
    return new DashboardSharingPermissionsPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardSharingPermissions {
  /**
  * permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#permission DashboardSharing#permission}
  */
  readonly permission?: DashboardSharingPermissionsPermission[] | cdktf.IResolvable;
}

export function dashboardSharingPermissionsToTerraform(struct?: DashboardSharingPermissionsOutputReference | DashboardSharingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    permission: cdktf.listMapper(dashboardSharingPermissionsPermissionToTerraform, true)(struct!.permission),
  }
}


export function dashboardSharingPermissionsToHclTerraform(struct?: DashboardSharingPermissionsOutputReference | DashboardSharingPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    permission: {
      value: cdktf.listMapperHcl(dashboardSharingPermissionsPermissionToHclTerraform, true)(struct!.permission),
      isBlock: true,
      type: "set",
      storageClassType: "DashboardSharingPermissionsPermissionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardSharingPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardSharingPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._permission?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardSharingPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._permission.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._permission.internalValue = value.permission;
    }
  }

  // permission - computed: false, optional: true, required: false
  private _permission = new DashboardSharingPermissionsPermissionList(this, "permission", true);
  public get permission() {
    return this._permission;
  }
  public putPermission(value: DashboardSharingPermissionsPermission[] | cdktf.IResolvable) {
    this._permission.internalValue = value;
  }
  public resetPermission() {
    this._permission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission.internalValue;
  }
}
export interface DashboardSharingPublic {
  /**
  * A list of management zones that can display data on the publicly shared dashboard. 
  * 
  * Specify management zone IDs here. For each management zone you specify Dynatrace generates an access link. To share the dashboard with its default management zone, use the `default` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#management_zones DashboardSharing#management_zones}
  */
  readonly managementZones: string[];
  /**
  * A list of URLs for anonymous access to the dashboard indexed by management zone name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#urls DashboardSharing#urls}
  */
  readonly urls?: { [key: string]: string };
}

export function dashboardSharingPublicToTerraform(struct?: DashboardSharingPublicOutputReference | DashboardSharingPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managementZones),
    urls: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.urls),
  }
}


export function dashboardSharingPublicToHclTerraform(struct?: DashboardSharingPublicOutputReference | DashboardSharingPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_zones: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managementZones),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    urls: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.urls),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardSharingPublicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardSharingPublic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementZones = this._managementZones;
    }
    if (this._urls !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardSharingPublic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managementZones = undefined;
      this._urls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managementZones = value.managementZones;
      this._urls = value.urls;
    }
  }

  // management_zones - computed: false, optional: false, required: true
  private _managementZones?: string[]; 
  public get managementZones() {
    return cdktf.Fn.tolist(this.getListAttribute('management_zones'));
  }
  public set managementZones(value: string[]) {
    this._managementZones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementZonesInput() {
    return this._managementZones;
  }

  // urls - computed: true, optional: true, required: false
  private _urls?: { [key: string]: string }; 
  public get urls() {
    return this.getStringMapAttribute('urls');
  }
  public set urls(value: { [key: string]: string }) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing dynatrace_dashboard_sharing}
*/
export class DashboardSharing extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_dashboard_sharing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardSharing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardSharing to import
  * @param importFromId The id of the existing DashboardSharing that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardSharing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_dashboard_sharing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/dashboard_sharing dynatrace_dashboard_sharing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardSharingConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardSharingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_dashboard_sharing',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dashboardId = config.dashboardId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._preset = config.preset;
    this._permissions.internalValue = config.permissions;
    this._public.internalValue = config.public;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dashboard_id - computed: false, optional: false, required: true
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
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

  // muted - computed: true, optional: false, required: false
  public get muted() {
    return this.getBooleanAttribute('muted');
  }

  // preset - computed: false, optional: true, required: false
  private _preset?: boolean | cdktf.IResolvable; 
  public get preset() {
    return this.getBooleanAttribute('preset');
  }
  public set preset(value: boolean | cdktf.IResolvable) {
    this._preset = value;
  }
  public resetPreset() {
    this._preset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetInput() {
    return this._preset;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new DashboardSharingPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: DashboardSharingPermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // public - computed: false, optional: true, required: false
  private _public = new DashboardSharingPublicOutputReference(this, "public");
  public get public() {
    return this._public;
  }
  public putPublic(value: DashboardSharingPublic) {
    this._public.internalValue = value;
  }
  public resetPublic() {
    this._public.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInput() {
    return this._public.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_id: cdktf.stringToTerraform(this._dashboardId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      preset: cdktf.booleanToTerraform(this._preset),
      permissions: dashboardSharingPermissionsToTerraform(this._permissions.internalValue),
      public: dashboardSharingPublicToTerraform(this._public.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_id: {
        value: cdktf.stringToHclTerraform(this._dashboardId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preset: {
        value: cdktf.booleanToHclTerraform(this._preset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      permissions: {
        value: dashboardSharingPermissionsToHclTerraform(this._permissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardSharingPermissionsList",
      },
      public: {
        value: dashboardSharingPublicToHclTerraform(this._public.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardSharingPublicList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
