// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/dashboards_presets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardsPresetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dashboard presets are visible to all users by default. For a pristine environment you may disable them entirely or opt to manually limit visibility to selected user groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/dashboards_presets#enable_dashboard_presets DashboardsPresets#enable_dashboard_presets}
  */
  readonly enableDashboardPresets: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/dashboards_presets#id DashboardsPresets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * dashboard_presets_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/dashboards_presets#dashboard_presets_list DashboardsPresets#dashboard_presets_list}
  */
  readonly dashboardPresetsList?: DashboardsPresetsDashboardPresetsListStruct;
}
export interface DashboardsPresetsDashboardPresetsListDashboardPresets {
  /**
  * Dashboard preset to limit visibility for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/dashboards_presets#dashboard_preset DashboardsPresets#dashboard_preset}
  */
  readonly dashboardPreset: string;
  /**
  * User group to show selected dashboard preset to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/dashboards_presets#user_group DashboardsPresets#user_group}
  */
  readonly userGroup: string;
}

export function dashboardsPresetsDashboardPresetsListDashboardPresetsToTerraform(struct?: DashboardsPresetsDashboardPresetsListDashboardPresets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_preset: cdktf.stringToTerraform(struct!.dashboardPreset),
    user_group: cdktf.stringToTerraform(struct!.userGroup),
  }
}


export function dashboardsPresetsDashboardPresetsListDashboardPresetsToHclTerraform(struct?: DashboardsPresetsDashboardPresetsListDashboardPresets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_preset: {
      value: cdktf.stringToHclTerraform(struct!.dashboardPreset),
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

export class DashboardsPresetsDashboardPresetsListDashboardPresetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DashboardsPresetsDashboardPresetsListDashboardPresets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardPreset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardPreset = this._dashboardPreset;
    }
    if (this._userGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroup = this._userGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardsPresetsDashboardPresetsListDashboardPresets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardPreset = undefined;
      this._userGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardPreset = value.dashboardPreset;
      this._userGroup = value.userGroup;
    }
  }

  // dashboard_preset - computed: false, optional: false, required: true
  private _dashboardPreset?: string; 
  public get dashboardPreset() {
    return this.getStringAttribute('dashboard_preset');
  }
  public set dashboardPreset(value: string) {
    this._dashboardPreset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardPresetInput() {
    return this._dashboardPreset;
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

export class DashboardsPresetsDashboardPresetsListDashboardPresetsList extends cdktf.ComplexList {
  public internalValue? : DashboardsPresetsDashboardPresetsListDashboardPresets[] | cdktf.IResolvable

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
  public get(index: number): DashboardsPresetsDashboardPresetsListDashboardPresetsOutputReference {
    return new DashboardsPresetsDashboardPresetsListDashboardPresetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DashboardsPresetsDashboardPresetsListStruct {
  /**
  * dashboard_presets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/dashboards_presets#dashboard_presets DashboardsPresets#dashboard_presets}
  */
  readonly dashboardPresets: DashboardsPresetsDashboardPresetsListDashboardPresets[] | cdktf.IResolvable;
}

export function dashboardsPresetsDashboardPresetsListStructToTerraform(struct?: DashboardsPresetsDashboardPresetsListStructOutputReference | DashboardsPresetsDashboardPresetsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_presets: cdktf.listMapper(dashboardsPresetsDashboardPresetsListDashboardPresetsToTerraform, true)(struct!.dashboardPresets),
  }
}


export function dashboardsPresetsDashboardPresetsListStructToHclTerraform(struct?: DashboardsPresetsDashboardPresetsListStructOutputReference | DashboardsPresetsDashboardPresetsListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_presets: {
      value: cdktf.listMapperHcl(dashboardsPresetsDashboardPresetsListDashboardPresetsToHclTerraform, true)(struct!.dashboardPresets),
      isBlock: true,
      type: "list",
      storageClassType: "DashboardsPresetsDashboardPresetsListDashboardPresetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DashboardsPresetsDashboardPresetsListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DashboardsPresetsDashboardPresetsListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardPresets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardPresets = this._dashboardPresets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DashboardsPresetsDashboardPresetsListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dashboardPresets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dashboardPresets.internalValue = value.dashboardPresets;
    }
  }

  // dashboard_presets - computed: false, optional: false, required: true
  private _dashboardPresets = new DashboardsPresetsDashboardPresetsListDashboardPresetsList(this, "dashboard_presets", false);
  public get dashboardPresets() {
    return this._dashboardPresets;
  }
  public putDashboardPresets(value: DashboardsPresetsDashboardPresetsListDashboardPresets[] | cdktf.IResolvable) {
    this._dashboardPresets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardPresetsInput() {
    return this._dashboardPresets.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/dashboards_presets dynatrace_dashboards_presets}
*/
export class DashboardsPresets extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_dashboards_presets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardsPresets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardsPresets to import
  * @param importFromId The id of the existing DashboardsPresets that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/dashboards_presets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardsPresets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_dashboards_presets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/dashboards_presets dynatrace_dashboards_presets} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardsPresetsConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardsPresetsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_dashboards_presets',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDashboardPresets = config.enableDashboardPresets;
    this._id = config.id;
    this._dashboardPresetsList.internalValue = config.dashboardPresetsList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_dashboard_presets - computed: false, optional: false, required: true
  private _enableDashboardPresets?: boolean | cdktf.IResolvable; 
  public get enableDashboardPresets() {
    return this.getBooleanAttribute('enable_dashboard_presets');
  }
  public set enableDashboardPresets(value: boolean | cdktf.IResolvable) {
    this._enableDashboardPresets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDashboardPresetsInput() {
    return this._enableDashboardPresets;
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

  // dashboard_presets_list - computed: false, optional: true, required: false
  private _dashboardPresetsList = new DashboardsPresetsDashboardPresetsListStructOutputReference(this, "dashboard_presets_list");
  public get dashboardPresetsList() {
    return this._dashboardPresetsList;
  }
  public putDashboardPresetsList(value: DashboardsPresetsDashboardPresetsListStruct) {
    this._dashboardPresetsList.internalValue = value;
  }
  public resetDashboardPresetsList() {
    this._dashboardPresetsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardPresetsListInput() {
    return this._dashboardPresetsList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_dashboard_presets: cdktf.booleanToTerraform(this._enableDashboardPresets),
      id: cdktf.stringToTerraform(this._id),
      dashboard_presets_list: dashboardsPresetsDashboardPresetsListStructToTerraform(this._dashboardPresetsList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_dashboard_presets: {
        value: cdktf.booleanToHclTerraform(this._enableDashboardPresets),
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
      dashboard_presets_list: {
        value: dashboardsPresetsDashboardPresetsListStructToHclTerraform(this._dashboardPresetsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DashboardsPresetsDashboardPresetsListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
