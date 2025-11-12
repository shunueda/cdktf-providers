// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/apps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAppsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Search only active applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/apps#active_only DataOktaApps#active_only}
  */
  readonly activeOnly?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to include non-active, but not deleted apps in the results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/apps#include_non_deleted DataOktaApps#include_non_deleted}
  */
  readonly includeNonDeleted?: boolean | cdktf.IResolvable;
  /**
  * Searches for applications whose label or name property matches this value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/apps#label DataOktaApps#label}
  */
  readonly label?: string;
  /**
  * Searches for applications whose label or name property begins with this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/apps#label_prefix DataOktaApps#label_prefix}
  */
  readonly labelPrefix?: string;
  /**
  * Searches for applications whose name or label properties that starts with this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/apps#q DataOktaApps#q}
  */
  readonly q?: string;
  /**
  * Specifies whether to use query optimization. If you specify `useOptimization=true` in the request query, the response contains a subset of app instance properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/apps#use_optimization DataOktaApps#use_optimization}
  */
  readonly useOptimization?: boolean | cdktf.IResolvable;
}
export interface DataOktaAppsAppsVisibilityHide {
}

export function dataOktaAppsAppsVisibilityHideToTerraform(struct?: DataOktaAppsAppsVisibilityHide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaAppsAppsVisibilityHideToHclTerraform(struct?: DataOktaAppsAppsVisibilityHide): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaAppsAppsVisibilityHideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaAppsAppsVisibilityHide | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaAppsAppsVisibilityHide | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ios - computed: true, optional: false, required: false
  public get ios() {
    return this.getBooleanAttribute('ios');
  }

  // web - computed: true, optional: false, required: false
  public get web() {
    return this.getBooleanAttribute('web');
  }
}
export interface DataOktaAppsAppsVisibility {
}

export function dataOktaAppsAppsVisibilityToTerraform(struct?: DataOktaAppsAppsVisibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaAppsAppsVisibilityToHclTerraform(struct?: DataOktaAppsAppsVisibility): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaAppsAppsVisibilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaAppsAppsVisibility | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaAppsAppsVisibility | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_launch - computed: true, optional: false, required: false
  public get autoLaunch() {
    return this.getBooleanAttribute('auto_launch');
  }

  // auto_submit_toolbar - computed: true, optional: false, required: false
  public get autoSubmitToolbar() {
    return this.getBooleanAttribute('auto_submit_toolbar');
  }

  // hide - computed: true, optional: false, required: false
  private _hide = new DataOktaAppsAppsVisibilityHideOutputReference(this, "hide");
  public get hide() {
    return this._hide;
  }
}
export interface DataOktaAppsApps {
}

export function dataOktaAppsAppsToTerraform(struct?: DataOktaAppsApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOktaAppsAppsToHclTerraform(struct?: DataOktaAppsApps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOktaAppsAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOktaAppsApps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaAppsApps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_note - computed: true, optional: false, required: false
  public get adminNote() {
    return this.getStringAttribute('admin_note');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enduser_note - computed: true, optional: false, required: false
  public get enduserNote() {
    return this.getStringAttribute('enduser_note');
  }

  // features - computed: true, optional: false, required: false
  public get features() {
    return this.getListAttribute('features');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sign_on_mode - computed: true, optional: false, required: false
  public get signOnMode() {
    return this.getStringAttribute('sign_on_mode');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // visibility - computed: true, optional: false, required: false
  private _visibility = new DataOktaAppsAppsVisibilityOutputReference(this, "visibility");
  public get visibility() {
    return this._visibility;
  }
}

export class DataOktaAppsAppsList extends cdktf.ComplexList {

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
  public get(index: number): DataOktaAppsAppsOutputReference {
    return new DataOktaAppsAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/apps okta_apps}
*/
export class DataOktaApps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_apps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaApps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaApps to import
  * @param importFromId The id of the existing DataOktaApps that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/apps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaApps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_apps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/data-sources/apps okta_apps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAppsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaAppsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_apps',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0',
        providerVersionConstraint: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeOnly = config.activeOnly;
    this._includeNonDeleted = config.includeNonDeleted;
    this._label = config.label;
    this._labelPrefix = config.labelPrefix;
    this._q = config.q;
    this._useOptimization = config.useOptimization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_only - computed: false, optional: true, required: false
  private _activeOnly?: boolean | cdktf.IResolvable; 
  public get activeOnly() {
    return this.getBooleanAttribute('active_only');
  }
  public set activeOnly(value: boolean | cdktf.IResolvable) {
    this._activeOnly = value;
  }
  public resetActiveOnly() {
    this._activeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeOnlyInput() {
    return this._activeOnly;
  }

  // apps - computed: true, optional: false, required: false
  private _apps = new DataOktaAppsAppsList(this, "apps", false);
  public get apps() {
    return this._apps;
  }

  // include_non_deleted - computed: false, optional: true, required: false
  private _includeNonDeleted?: boolean | cdktf.IResolvable; 
  public get includeNonDeleted() {
    return this.getBooleanAttribute('include_non_deleted');
  }
  public set includeNonDeleted(value: boolean | cdktf.IResolvable) {
    this._includeNonDeleted = value;
  }
  public resetIncludeNonDeleted() {
    this._includeNonDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNonDeletedInput() {
    return this._includeNonDeleted;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // label_prefix - computed: false, optional: true, required: false
  private _labelPrefix?: string; 
  public get labelPrefix() {
    return this.getStringAttribute('label_prefix');
  }
  public set labelPrefix(value: string) {
    this._labelPrefix = value;
  }
  public resetLabelPrefix() {
    this._labelPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelPrefixInput() {
    return this._labelPrefix;
  }

  // q - computed: false, optional: true, required: false
  private _q?: string; 
  public get q() {
    return this.getStringAttribute('q');
  }
  public set q(value: string) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // use_optimization - computed: false, optional: true, required: false
  private _useOptimization?: boolean | cdktf.IResolvable; 
  public get useOptimization() {
    return this.getBooleanAttribute('use_optimization');
  }
  public set useOptimization(value: boolean | cdktf.IResolvable) {
    this._useOptimization = value;
  }
  public resetUseOptimization() {
    this._useOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptimizationInput() {
    return this._useOptimization;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_only: cdktf.booleanToTerraform(this._activeOnly),
      include_non_deleted: cdktf.booleanToTerraform(this._includeNonDeleted),
      label: cdktf.stringToTerraform(this._label),
      label_prefix: cdktf.stringToTerraform(this._labelPrefix),
      q: cdktf.stringToTerraform(this._q),
      use_optimization: cdktf.booleanToTerraform(this._useOptimization),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_only: {
        value: cdktf.booleanToHclTerraform(this._activeOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_non_deleted: {
        value: cdktf.booleanToHclTerraform(this._includeNonDeleted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_prefix: {
        value: cdktf.stringToHclTerraform(this._labelPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      q: {
        value: cdktf.stringToHclTerraform(this._q),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_optimization: {
        value: cdktf.booleanToHclTerraform(this._useOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
