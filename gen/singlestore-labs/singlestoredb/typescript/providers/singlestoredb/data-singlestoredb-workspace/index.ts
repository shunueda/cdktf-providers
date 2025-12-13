// https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSinglestoredbWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier of the workspace. Either `id` or `name` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspace#id DataSinglestoredbWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the workspace. Either `id` or `name` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspace#name DataSinglestoredbWorkspace#name}
  */
  readonly name?: string;
}
export interface DataSinglestoredbWorkspaceAutoScale {
}

export function dataSinglestoredbWorkspaceAutoScaleToTerraform(struct?: DataSinglestoredbWorkspaceAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSinglestoredbWorkspaceAutoScaleToHclTerraform(struct?: DataSinglestoredbWorkspaceAutoScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSinglestoredbWorkspaceAutoScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSinglestoredbWorkspaceAutoScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSinglestoredbWorkspaceAutoScale | undefined) {
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
export interface DataSinglestoredbWorkspaceAutoSuspend {
}

export function dataSinglestoredbWorkspaceAutoSuspendToTerraform(struct?: DataSinglestoredbWorkspaceAutoSuspend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSinglestoredbWorkspaceAutoSuspendToHclTerraform(struct?: DataSinglestoredbWorkspaceAutoSuspend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSinglestoredbWorkspaceAutoSuspendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSinglestoredbWorkspaceAutoSuspend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSinglestoredbWorkspaceAutoSuspend | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspace singlestoredb_workspace}
*/
export class DataSinglestoredbWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "singlestoredb_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSinglestoredbWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSinglestoredbWorkspace to import
  * @param importFromId The id of the existing DataSinglestoredbWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSinglestoredbWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "singlestoredb_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/singlestore-labs/singlestoredb/0.1.8/docs/data-sources/workspace singlestoredb_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSinglestoredbWorkspaceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSinglestoredbWorkspaceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'singlestoredb_workspace',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scale - computed: true, optional: false, required: false
  private _autoScale = new DataSinglestoredbWorkspaceAutoScaleOutputReference(this, "auto_scale");
  public get autoScale() {
    return this._autoScale;
  }

  // auto_suspend - computed: true, optional: false, required: false
  private _autoSuspend = new DataSinglestoredbWorkspaceAutoSuspendOutputReference(this, "auto_suspend");
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

  // kai_enabled - computed: true, optional: false, required: false
  public get kaiEnabled() {
    return this.getBooleanAttribute('kai_enabled');
  }

  // last_resumed_at - computed: true, optional: false, required: false
  public get lastResumedAt() {
    return this.getStringAttribute('last_resumed_at');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
