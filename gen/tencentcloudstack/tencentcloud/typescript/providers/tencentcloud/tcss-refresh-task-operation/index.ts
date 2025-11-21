// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_refresh_task_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcssRefreshTaskOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster Id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_refresh_task_operation#cluster_ids TcssRefreshTaskOperation#cluster_ids}
  */
  readonly clusterIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_refresh_task_operation#id TcssRefreshTaskOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to sync list only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_refresh_task_operation#is_sync_list_only TcssRefreshTaskOperation#is_sync_list_only}
  */
  readonly isSyncListOnly?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_refresh_task_operation tencentcloud_tcss_refresh_task_operation}
*/
export class TcssRefreshTaskOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tcss_refresh_task_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TcssRefreshTaskOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TcssRefreshTaskOperation to import
  * @param importFromId The id of the existing TcssRefreshTaskOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_refresh_task_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TcssRefreshTaskOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tcss_refresh_task_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tcss_refresh_task_operation tencentcloud_tcss_refresh_task_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcssRefreshTaskOperationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TcssRefreshTaskOperationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tcss_refresh_task_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterIds = config.clusterIds;
    this._id = config.id;
    this._isSyncListOnly = config.isSyncListOnly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ids - computed: false, optional: true, required: false
  private _clusterIds?: string[]; 
  public get clusterIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_ids'));
  }
  public set clusterIds(value: string[]) {
    this._clusterIds = value;
  }
  public resetClusterIds() {
    this._clusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdsInput() {
    return this._clusterIds;
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

  // is_sync_list_only - computed: false, optional: true, required: false
  private _isSyncListOnly?: boolean | cdktf.IResolvable; 
  public get isSyncListOnly() {
    return this.getBooleanAttribute('is_sync_list_only');
  }
  public set isSyncListOnly(value: boolean | cdktf.IResolvable) {
    this._isSyncListOnly = value;
  }
  public resetIsSyncListOnly() {
    this._isSyncListOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSyncListOnlyInput() {
    return this._isSyncListOnly;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusterIds),
      id: cdktf.stringToTerraform(this._id),
      is_sync_list_only: cdktf.booleanToTerraform(this._isSyncListOnly),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusterIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_sync_list_only: {
        value: cdktf.booleanToHclTerraform(this._isSyncListOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
