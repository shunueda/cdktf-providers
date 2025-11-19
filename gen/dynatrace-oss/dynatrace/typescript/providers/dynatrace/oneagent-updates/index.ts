// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OneagentUpdatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates#id OneagentUpdates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Revision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates#revision OneagentUpdates#revision}
  */
  readonly revision?: string;
  /**
  * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates#scope OneagentUpdates#scope}
  */
  readonly scope?: string;
  /**
  * Target version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates#target_version OneagentUpdates#target_version}
  */
  readonly targetVersion?: string;
  /**
  * Possible Values: `AUTOMATIC`, `AUTOMATIC_DURING_MW`, `MANUAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates#update_mode OneagentUpdates#update_mode}
  */
  readonly updateMode: string;
  /**
  * maintenance_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates#maintenance_windows OneagentUpdates#maintenance_windows}
  */
  readonly maintenanceWindows?: OneagentUpdatesMaintenanceWindows;
}
export interface OneagentUpdatesMaintenanceWindowsMaintenanceWindow {
  /**
  * Select a [maintenance window for OneAgent updates](/ui/settings/builtin:deployment.management.update-windows)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates#maintenance_window OneagentUpdates#maintenance_window}
  */
  readonly maintenanceWindow: string;
}

export function oneagentUpdatesMaintenanceWindowsMaintenanceWindowToTerraform(struct?: OneagentUpdatesMaintenanceWindowsMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_window: cdktf.stringToTerraform(struct!.maintenanceWindow),
  }
}


export function oneagentUpdatesMaintenanceWindowsMaintenanceWindowToHclTerraform(struct?: OneagentUpdatesMaintenanceWindowsMaintenanceWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_window: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneagentUpdatesMaintenanceWindowsMaintenanceWindowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OneagentUpdatesMaintenanceWindowsMaintenanceWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneagentUpdatesMaintenanceWindowsMaintenanceWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maintenanceWindow = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maintenanceWindow = value.maintenanceWindow;
    }
  }

  // maintenance_window - computed: false, optional: false, required: true
  private _maintenanceWindow?: string; 
  public get maintenanceWindow() {
    return this.getStringAttribute('maintenance_window');
  }
  public set maintenanceWindow(value: string) {
    this._maintenanceWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow;
  }
}

export class OneagentUpdatesMaintenanceWindowsMaintenanceWindowList extends cdktf.ComplexList {
  public internalValue? : OneagentUpdatesMaintenanceWindowsMaintenanceWindow[] | cdktf.IResolvable

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
  public get(index: number): OneagentUpdatesMaintenanceWindowsMaintenanceWindowOutputReference {
    return new OneagentUpdatesMaintenanceWindowsMaintenanceWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OneagentUpdatesMaintenanceWindows {
  /**
  * maintenance_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates#maintenance_window OneagentUpdates#maintenance_window}
  */
  readonly maintenanceWindow: OneagentUpdatesMaintenanceWindowsMaintenanceWindow[] | cdktf.IResolvable;
}

export function oneagentUpdatesMaintenanceWindowsToTerraform(struct?: OneagentUpdatesMaintenanceWindowsOutputReference | OneagentUpdatesMaintenanceWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_window: cdktf.listMapper(oneagentUpdatesMaintenanceWindowsMaintenanceWindowToTerraform, true)(struct!.maintenanceWindow),
  }
}


export function oneagentUpdatesMaintenanceWindowsToHclTerraform(struct?: OneagentUpdatesMaintenanceWindowsOutputReference | OneagentUpdatesMaintenanceWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_window: {
      value: cdktf.listMapperHcl(oneagentUpdatesMaintenanceWindowsMaintenanceWindowToHclTerraform, true)(struct!.maintenanceWindow),
      isBlock: true,
      type: "set",
      storageClassType: "OneagentUpdatesMaintenanceWindowsMaintenanceWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OneagentUpdatesMaintenanceWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OneagentUpdatesMaintenanceWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OneagentUpdatesMaintenanceWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
    }
  }

  // maintenance_window - computed: false, optional: false, required: true
  private _maintenanceWindow = new OneagentUpdatesMaintenanceWindowsMaintenanceWindowList(this, "maintenance_window", true);
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: OneagentUpdatesMaintenanceWindowsMaintenanceWindow[] | cdktf.IResolvable) {
    this._maintenanceWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates dynatrace_oneagent_updates}
*/
export class OneagentUpdates extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_oneagent_updates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OneagentUpdates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OneagentUpdates to import
  * @param importFromId The id of the existing OneagentUpdates that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OneagentUpdates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_oneagent_updates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/oneagent_updates dynatrace_oneagent_updates} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OneagentUpdatesConfig
  */
  public constructor(scope: Construct, id: string, config: OneagentUpdatesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_oneagent_updates',
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
    this._id = config.id;
    this._revision = config.revision;
    this._scope = config.scope;
    this._targetVersion = config.targetVersion;
    this._updateMode = config.updateMode;
    this._maintenanceWindows.internalValue = config.maintenanceWindows;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // target_version - computed: false, optional: true, required: false
  private _targetVersion?: string; 
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string) {
    this._targetVersion = value;
  }
  public resetTargetVersion() {
    this._targetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion;
  }

  // update_mode - computed: false, optional: false, required: true
  private _updateMode?: string; 
  public get updateMode() {
    return this.getStringAttribute('update_mode');
  }
  public set updateMode(value: string) {
    this._updateMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateModeInput() {
    return this._updateMode;
  }

  // maintenance_windows - computed: false, optional: true, required: false
  private _maintenanceWindows = new OneagentUpdatesMaintenanceWindowsOutputReference(this, "maintenance_windows");
  public get maintenanceWindows() {
    return this._maintenanceWindows;
  }
  public putMaintenanceWindows(value: OneagentUpdatesMaintenanceWindows) {
    this._maintenanceWindows.internalValue = value;
  }
  public resetMaintenanceWindows() {
    this._maintenanceWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowsInput() {
    return this._maintenanceWindows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      revision: cdktf.stringToTerraform(this._revision),
      scope: cdktf.stringToTerraform(this._scope),
      target_version: cdktf.stringToTerraform(this._targetVersion),
      update_mode: cdktf.stringToTerraform(this._updateMode),
      maintenance_windows: oneagentUpdatesMaintenanceWindowsToTerraform(this._maintenanceWindows.internalValue),
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
      revision: {
        value: cdktf.stringToHclTerraform(this._revision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_version: {
        value: cdktf.stringToHclTerraform(this._targetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_mode: {
        value: cdktf.stringToHclTerraform(this._updateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_windows: {
        value: oneagentUpdatesMaintenanceWindowsToHclTerraform(this._maintenanceWindows.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OneagentUpdatesMaintenanceWindowsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
