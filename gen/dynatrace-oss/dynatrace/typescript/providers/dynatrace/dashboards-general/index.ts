// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_general
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardsGeneralConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow users to grant anonymous access to dashboards. No sign-in will be required to view those dashboards read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_general#enable_public_sharing DashboardsGeneral#enable_public_sharing}
  */
  readonly enablePublicSharing: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_general#id DashboardsGeneral#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * default_dashboard_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_general#default_dashboard_list DashboardsGeneral#default_dashboard_list}
  */
  readonly defaultDashboardList?: DashboardsGeneralDefaultDashboardListStruct;
}
export interface DashboardsGeneralDefaultDashboardListDefaultDashboard {
  /**
  * Preset dashboard to show as default landing page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_general#dashboard DashboardsGeneral#dashboard}
  */
  readonly dashboard: string;
  /**
  * Show selected dashboard by default for this user group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_general#user_group DashboardsGeneral#user_group}
  */
  readonly userGroup: string;
}

export function dashboardsGeneralDefaultDashboardListDefaultDashboardToTerraform(struct?: DashboardsGeneralDefaultDashboardListDefaultDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard: cdktf.stringToTerraform(struct!.dashboard),
    user_group: cdktf.stringToTerraform(struct!.userGroup),
  }
}


export function dashboardsGeneralDefaultDashboardListDefaultDashboardToHclTerraform(struct?: DashboardsGeneralDefaultDashboardListDefaultDashboard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard: {
      value: cdktf.stringToHclTerraform(struct!.dashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_group: {
      value: cdktf.stringToHclTerraform(struct!.userGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardsGeneralDefaultDashboardListDefaultDashboardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardsGeneralDefaultDashboardListDefaultDashboard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardsGeneralDefaultDashboardListDefaultDashboard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboard = undefined;
      this._userGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboard = value.dashboard;
      this._userGroup = value.userGroup;
    }
  }

  // dashboard - computed: false, optional: false, required: true
  private _dashboard?: string; 
  public get dashboard() {
    return this.getStringAttribute('dashboard');
  }
  public set dashboard(value: string) {
    this._dashboard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard;
  }

  // user_group - computed: false, optional: false, required: true
  private _userGroup?: string; 
  public get userGroup() {
    return this.getStringAttribute('user_group');
  }
  public set userGroup(value: string) {
    this._userGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupInput() {
    return this._userGroup;
  }
}

export class DashboardsGeneralDefaultDashboardListDefaultDashboardList extends cdktf.ComplexList {
  public internalValue? : DashboardsGeneralDefaultDashboardListDefaultDashboard[] | cdktf.IResolvable

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
  public get(index: number): DashboardsGeneralDefaultDashboardListDefaultDashboardOutputReference {
    return new DashboardsGeneralDefaultDashboardListDefaultDashboardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardsGeneralDefaultDashboardListStruct {
  /**
  * default_dashboard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_general#default_dashboard DashboardsGeneral#default_dashboard}
  */
  readonly defaultDashboard: DashboardsGeneralDefaultDashboardListDefaultDashboard[] | cdktf.IResolvable;
}

export function dashboardsGeneralDefaultDashboardListStructToTerraform(struct?: DashboardsGeneralDefaultDashboardListStructOutputReference | DashboardsGeneralDefaultDashboardListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_dashboard: cdktf.listMapper(dashboardsGeneralDefaultDashboardListDefaultDashboardToTerraform, true)(struct!.defaultDashboard),
  }
}


export function dashboardsGeneralDefaultDashboardListStructToHclTerraform(struct?: DashboardsGeneralDefaultDashboardListStructOutputReference | DashboardsGeneralDefaultDashboardListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_dashboard: {
      value: cdktf.listMapperHcl(dashboardsGeneralDefaultDashboardListDefaultDashboardToHclTerraform, true)(struct!.defaultDashboard),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardsGeneralDefaultDashboardListDefaultDashboardList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardsGeneralDefaultDashboardListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardsGeneralDefaultDashboardListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultDashboard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDashboard = this._defaultDashboard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardsGeneralDefaultDashboardListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultDashboard.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultDashboard.internalValue = value.defaultDashboard;
    }
  }

  // default_dashboard - computed: false, optional: false, required: true
  private _defaultDashboard = new DashboardsGeneralDefaultDashboardListDefaultDashboardList(this, "default_dashboard", false);
  public get defaultDashboard() {
    return this._defaultDashboard;
  }
  public putDefaultDashboard(value: DashboardsGeneralDefaultDashboardListDefaultDashboard[] | cdktf.IResolvable) {
    this._defaultDashboard.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDashboardInput() {
    return this._defaultDashboard.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_general dynatrace_dashboards_general}
*/
export class DashboardsGeneral extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_dashboards_general";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardsGeneral resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardsGeneral to import
  * @param importFromId The id of the existing DashboardsGeneral that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_general#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardsGeneral to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_dashboards_general", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/dashboards_general dynatrace_dashboards_general} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardsGeneralConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardsGeneralConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_dashboards_general',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enablePublicSharing = config.enablePublicSharing;
    this._id = config.id;
    this._defaultDashboardList.internalValue = config.defaultDashboardList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_public_sharing - computed: false, optional: false, required: true
  private _enablePublicSharing?: boolean | cdktf.IResolvable; 
  public get enablePublicSharing() {
    return this.getBooleanAttribute('enable_public_sharing');
  }
  public set enablePublicSharing(value: boolean | cdktf.IResolvable) {
    this._enablePublicSharing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicSharingInput() {
    return this._enablePublicSharing;
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

  // default_dashboard_list - computed: false, optional: true, required: false
  private _defaultDashboardList = new DashboardsGeneralDefaultDashboardListStructOutputReference(this, "default_dashboard_list");
  public get defaultDashboardList() {
    return this._defaultDashboardList;
  }
  public putDefaultDashboardList(value: DashboardsGeneralDefaultDashboardListStruct) {
    this._defaultDashboardList.internalValue = value;
  }
  public resetDefaultDashboardList() {
    this._defaultDashboardList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDashboardListInput() {
    return this._defaultDashboardList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_public_sharing: cdktf.booleanToTerraform(this._enablePublicSharing),
      id: cdktf.stringToTerraform(this._id),
      default_dashboard_list: dashboardsGeneralDefaultDashboardListStructToTerraform(this._defaultDashboardList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_public_sharing: {
        value: cdktf.booleanToHclTerraform(this._enablePublicSharing),
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
      default_dashboard_list: {
        value: dashboardsGeneralDefaultDashboardListStructToHclTerraform(this._defaultDashboardList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardsGeneralDefaultDashboardListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
