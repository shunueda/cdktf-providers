// https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSinglestoredbWorkspacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the workspace group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspaces#workspace_group_id DataSinglestoredbWorkspaces#workspace_group_id}
  */
  readonly workspaceGroupId: string;
}
export interface DataSinglestoredbWorkspacesWorkspacesAutoScale {
}

export function dataSinglestoredbWorkspacesWorkspacesAutoScaleToTerraform(struct?: DataSinglestoredbWorkspacesWorkspacesAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSinglestoredbWorkspacesWorkspacesAutoScaleToHclTerraform(struct?: DataSinglestoredbWorkspacesWorkspacesAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSinglestoredbWorkspacesWorkspacesAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSinglestoredbWorkspacesWorkspacesAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSinglestoredbWorkspacesWorkspacesAutoScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_scale_factor - computed: true, optional: false, required: false
  public get maxScaleFactor() {
    return this.getNumberAttribute('max_scale_factor');
  }

  // sensitivity - computed: true, optional: false, required: false
  public get sensitivity() {
    return this.getStringAttribute('sensitivity');
  }
}
export interface DataSinglestoredbWorkspacesWorkspacesAutoSuspend {
}

export function dataSinglestoredbWorkspacesWorkspacesAutoSuspendToTerraform(struct?: DataSinglestoredbWorkspacesWorkspacesAutoSuspend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSinglestoredbWorkspacesWorkspacesAutoSuspendToHclTerraform(struct?: DataSinglestoredbWorkspacesWorkspacesAutoSuspend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSinglestoredbWorkspacesWorkspacesAutoSuspendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSinglestoredbWorkspacesWorkspacesAutoSuspend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSinglestoredbWorkspacesWorkspacesAutoSuspend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // suspend_after_seconds - computed: true, optional: false, required: false
  public get suspendAfterSeconds() {
    return this.getNumberAttribute('suspend_after_seconds');
  }

  // suspend_type - computed: true, optional: false, required: false
  public get suspendType() {
    return this.getStringAttribute('suspend_type');
  }
}
export interface DataSinglestoredbWorkspacesWorkspaces {
}

export function dataSinglestoredbWorkspacesWorkspacesToTerraform(struct?: DataSinglestoredbWorkspacesWorkspaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSinglestoredbWorkspacesWorkspacesToHclTerraform(struct?: DataSinglestoredbWorkspacesWorkspaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSinglestoredbWorkspacesWorkspacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSinglestoredbWorkspacesWorkspaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSinglestoredbWorkspacesWorkspaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_scale - computed: true, optional: false, required: false
  private _autoScale = new DataSinglestoredbWorkspacesWorkspacesAutoScaleOutputReference(this, "auto_scale");
  public get autoScale() {
    return this._autoScale;
  }

  // auto_suspend - computed: true, optional: false, required: false
  private _autoSuspend = new DataSinglestoredbWorkspacesWorkspacesAutoSuspendOutputReference(this, "auto_suspend");
  public get autoSuspend() {
    return this._autoSuspend;
  }

  // cache_config - computed: true, optional: false, required: false
  public get cacheConfig() {
    return this.getNumberAttribute('cache_config');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kai_enabled - computed: true, optional: false, required: false
  public get kaiEnabled() {
    return this.getBooleanAttribute('kai_enabled');
  }

  // last_resumed_at - computed: true, optional: false, required: false
  public get lastResumedAt() {
    return this.getStringAttribute('last_resumed_at');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // scale_factor - computed: true, optional: false, required: false
  public get scaleFactor() {
    return this.getNumberAttribute('scale_factor');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // suspended - computed: true, optional: false, required: false
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }

  // workspace_group_id - computed: true, optional: false, required: false
  public get workspaceGroupId() {
    return this.getStringAttribute('workspace_group_id');
  }
}

export class DataSinglestoredbWorkspacesWorkspacesList extends cdktf.ComplexList {

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
  public get(index: number): DataSinglestoredbWorkspacesWorkspacesOutputReference {
    return new DataSinglestoredbWorkspacesWorkspacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspaces singlestoredb_workspaces}
*/
export class DataSinglestoredbWorkspaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "singlestoredb_workspaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSinglestoredbWorkspaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSinglestoredbWorkspaces to import
  * @param importFromId The id of the existing DataSinglestoredbWorkspaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSinglestoredbWorkspaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "singlestoredb_workspaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspaces singlestoredb_workspaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSinglestoredbWorkspacesConfig
  */
  public constructor(scope: Construct, id: string, config: DataSinglestoredbWorkspacesConfig) {
    super(scope, id, {
      terraformResourceType: 'singlestoredb_workspaces',
      terraformGeneratorMetadata: {
        providerName: 'singlestoredb',
        providerVersion: '0.1.8',
        providerVersionConstraint: '0.1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._workspaceGroupId = config.workspaceGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // workspace_group_id - computed: false, optional: false, required: true
  private _workspaceGroupId?: string; 
  public get workspaceGroupId() {
    return this.getStringAttribute('workspace_group_id');
  }
  public set workspaceGroupId(value: string) {
    this._workspaceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceGroupIdInput() {
    return this._workspaceGroupId;
  }

  // workspaces - computed: true, optional: false, required: false
  private _workspaces = new DataSinglestoredbWorkspacesWorkspacesList(this, "workspaces", false);
  public get workspaces() {
    return this._workspaces;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      workspace_group_id: cdktf.stringToTerraform(this._workspaceGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      workspace_group_id: {
        value: cdktf.stringToHclTerraform(this._workspaceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
