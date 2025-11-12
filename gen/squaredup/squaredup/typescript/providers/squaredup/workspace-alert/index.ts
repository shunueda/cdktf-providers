// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * The alerting rules to create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert#alerting_rules WorkspaceAlert#alerting_rules}
  */
  readonly alertingRules: WorkspaceAlertAlertingRules[] | cdktf.IResolvable;
  /**
  * The ID of the workspace to create the alert in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert#workspace_id WorkspaceAlert#workspace_id}
  */
  readonly workspaceId: string;
}
export interface WorkspaceAlertAlertingRulesSelectedMonitors {
  /**
  * The ID of the dashboard where the monitor is configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert#dashboard_id WorkspaceAlert#dashboard_id}
  */
  readonly dashboardId: string;
  /**
  * The ID of the tiles to trigger the alert on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert#tiles_id WorkspaceAlert#tiles_id}
  */
  readonly tilesId: string[];
}

export function workspaceAlertAlertingRulesSelectedMonitorsToTerraform(struct?: WorkspaceAlertAlertingRulesSelectedMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dashboard_id: cdktf.stringToTerraform(struct!.dashboardId),
    tiles_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tilesId),
  }
}


export function workspaceAlertAlertingRulesSelectedMonitorsToHclTerraform(struct?: WorkspaceAlertAlertingRulesSelectedMonitors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dashboard_id: {
      value: cdktf.stringToHclTerraform(struct!.dashboardId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tiles_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tilesId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAlertAlertingRulesSelectedMonitorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceAlertAlertingRulesSelectedMonitors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashboardId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardId = this._dashboardId;
    }
    if (this._tilesId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tilesId = this._tilesId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAlertAlertingRulesSelectedMonitors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashboardId = undefined;
      this._tilesId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashboardId = value.dashboardId;
      this._tilesId = value.tilesId;
    }
  }

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

  // tiles_id - computed: false, optional: false, required: true
  private _tilesId?: string[]; 
  public get tilesId() {
    return this.getListAttribute('tiles_id');
  }
  public set tilesId(value: string[]) {
    this._tilesId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tilesIdInput() {
    return this._tilesId;
  }
}

export class WorkspaceAlertAlertingRulesSelectedMonitorsList extends cdktf.ComplexList {
  public internalValue? : WorkspaceAlertAlertingRulesSelectedMonitors[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceAlertAlertingRulesSelectedMonitorsOutputReference {
    return new WorkspaceAlertAlertingRulesSelectedMonitorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceAlertAlertingRules {
  /**
  * The ID of the channel to send the alert to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert#channel WorkspaceAlert#channel}
  */
  readonly channel: string;
  /**
  * Condition to trigger the alert. Must be one of: 'workspace_state', 'all_monitors', or 'selected_monitors'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert#notify_on WorkspaceAlert#notify_on}
  */
  readonly notifyOn: string;
  /**
  * Whether to include a preview image in the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert#preview_image WorkspaceAlert#preview_image}
  */
  readonly previewImage?: boolean | cdktf.IResolvable;
  /**
  * The monitors to trigger the alert on. Required if notify_on is 'selected_monitors'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert#selected_monitors WorkspaceAlert#selected_monitors}
  */
  readonly selectedMonitors?: WorkspaceAlertAlertingRulesSelectedMonitors[] | cdktf.IResolvable;
}

export function workspaceAlertAlertingRulesToTerraform(struct?: WorkspaceAlertAlertingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
    notify_on: cdktf.stringToTerraform(struct!.notifyOn),
    preview_image: cdktf.booleanToTerraform(struct!.previewImage),
    selected_monitors: cdktf.listMapper(workspaceAlertAlertingRulesSelectedMonitorsToTerraform, false)(struct!.selectedMonitors),
  }
}


export function workspaceAlertAlertingRulesToHclTerraform(struct?: WorkspaceAlertAlertingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_on: {
      value: cdktf.stringToHclTerraform(struct!.notifyOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preview_image: {
      value: cdktf.booleanToHclTerraform(struct!.previewImage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selected_monitors: {
      value: cdktf.listMapperHcl(workspaceAlertAlertingRulesSelectedMonitorsToHclTerraform, false)(struct!.selectedMonitors),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceAlertAlertingRulesSelectedMonitorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceAlertAlertingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceAlertAlertingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    if (this._notifyOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOn = this._notifyOn;
    }
    if (this._previewImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.previewImage = this._previewImage;
    }
    if (this._selectedMonitors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedMonitors = this._selectedMonitors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceAlertAlertingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channel = undefined;
      this._notifyOn = undefined;
      this._previewImage = undefined;
      this._selectedMonitors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channel = value.channel;
      this._notifyOn = value.notifyOn;
      this._previewImage = value.previewImage;
      this._selectedMonitors.internalValue = value.selectedMonitors;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }

  // notify_on - computed: false, optional: false, required: true
  private _notifyOn?: string; 
  public get notifyOn() {
    return this.getStringAttribute('notify_on');
  }
  public set notifyOn(value: string) {
    this._notifyOn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnInput() {
    return this._notifyOn;
  }

  // preview_image - computed: true, optional: true, required: false
  private _previewImage?: boolean | cdktf.IResolvable; 
  public get previewImage() {
    return this.getBooleanAttribute('preview_image');
  }
  public set previewImage(value: boolean | cdktf.IResolvable) {
    this._previewImage = value;
  }
  public resetPreviewImage() {
    this._previewImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previewImageInput() {
    return this._previewImage;
  }

  // selected_monitors - computed: false, optional: true, required: false
  private _selectedMonitors = new WorkspaceAlertAlertingRulesSelectedMonitorsList(this, "selected_monitors", false);
  public get selectedMonitors() {
    return this._selectedMonitors;
  }
  public putSelectedMonitors(value: WorkspaceAlertAlertingRulesSelectedMonitors[] | cdktf.IResolvable) {
    this._selectedMonitors.internalValue = value;
  }
  public resetSelectedMonitors() {
    this._selectedMonitors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedMonitorsInput() {
    return this._selectedMonitors.internalValue;
  }
}

export class WorkspaceAlertAlertingRulesList extends cdktf.ComplexList {
  public internalValue? : WorkspaceAlertAlertingRules[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceAlertAlertingRulesOutputReference {
    return new WorkspaceAlertAlertingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert squaredup_workspace_alert}
*/
export class WorkspaceAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_workspace_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceAlert to import
  * @param importFromId The id of the existing WorkspaceAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_workspace_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/workspace_alert squaredup_workspace_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceAlertConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'squaredup_workspace_alert',
      terraformGeneratorMetadata: {
        providerName: 'squaredup',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertingRules.internalValue = config.alertingRules;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerting_rules - computed: false, optional: false, required: true
  private _alertingRules = new WorkspaceAlertAlertingRulesList(this, "alerting_rules", false);
  public get alertingRules() {
    return this._alertingRules;
  }
  public putAlertingRules(value: WorkspaceAlertAlertingRules[] | cdktf.IResolvable) {
    this._alertingRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingRulesInput() {
    return this._alertingRules.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerting_rules: cdktf.listMapper(workspaceAlertAlertingRulesToTerraform, false)(this._alertingRules.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerting_rules: {
        value: cdktf.listMapperHcl(workspaceAlertAlertingRulesToHclTerraform, false)(this._alertingRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceAlertAlertingRulesList",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
