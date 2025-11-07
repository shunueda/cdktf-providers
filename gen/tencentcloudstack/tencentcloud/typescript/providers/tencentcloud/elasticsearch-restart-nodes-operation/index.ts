// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/elasticsearch_restart_nodes_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchRestartNodesOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to force a restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/elasticsearch_restart_nodes_operation#force_restart ElasticsearchRestartNodesOperation#force_restart}
  */
  readonly forceRestart?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/elasticsearch_restart_nodes_operation#id ElasticsearchRestartNodesOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/elasticsearch_restart_nodes_operation#instance_id ElasticsearchRestartNodesOperation#instance_id}
  */
  readonly instanceId: string;
  /**
  * Node status, used in blue-green mode; off-line node blue-green is risky.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/elasticsearch_restart_nodes_operation#is_offline ElasticsearchRestartNodesOperation#is_offline}
  */
  readonly isOffline?: boolean | cdktf.IResolvable;
  /**
  * List of node names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/elasticsearch_restart_nodes_operation#node_names ElasticsearchRestartNodesOperation#node_names}
  */
  readonly nodeNames: string[];
  /**
  * Optional restart mode in-place,blue-green, which means restart and blue-green restart, respectively. The default is in-place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/elasticsearch_restart_nodes_operation#restart_mode ElasticsearchRestartNodesOperation#restart_mode}
  */
  readonly restartMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/elasticsearch_restart_nodes_operation tencentcloud_elasticsearch_restart_nodes_operation}
*/
export class ElasticsearchRestartNodesOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elasticsearch_restart_nodes_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchRestartNodesOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchRestartNodesOperation to import
  * @param importFromId The id of the existing ElasticsearchRestartNodesOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/elasticsearch_restart_nodes_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchRestartNodesOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elasticsearch_restart_nodes_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/elasticsearch_restart_nodes_operation tencentcloud_elasticsearch_restart_nodes_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchRestartNodesOperationConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchRestartNodesOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elasticsearch_restart_nodes_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._forceRestart = config.forceRestart;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._isOffline = config.isOffline;
    this._nodeNames = config.nodeNames;
    this._restartMode = config.restartMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // force_restart - computed: false, optional: true, required: false
  private _forceRestart?: boolean | cdktf.IResolvable; 
  public get forceRestart() {
    return this.getBooleanAttribute('force_restart');
  }
  public set forceRestart(value: boolean | cdktf.IResolvable) {
    this._forceRestart = value;
  }
  public resetForceRestart() {
    this._forceRestart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRestartInput() {
    return this._forceRestart;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_offline - computed: false, optional: true, required: false
  private _isOffline?: boolean | cdktf.IResolvable; 
  public get isOffline() {
    return this.getBooleanAttribute('is_offline');
  }
  public set isOffline(value: boolean | cdktf.IResolvable) {
    this._isOffline = value;
  }
  public resetIsOffline() {
    this._isOffline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOfflineInput() {
    return this._isOffline;
  }

  // node_names - computed: false, optional: false, required: true
  private _nodeNames?: string[]; 
  public get nodeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('node_names'));
  }
  public set nodeNames(value: string[]) {
    this._nodeNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNamesInput() {
    return this._nodeNames;
  }

  // restart_mode - computed: false, optional: true, required: false
  private _restartMode?: string; 
  public get restartMode() {
    return this.getStringAttribute('restart_mode');
  }
  public set restartMode(value: string) {
    this._restartMode = value;
  }
  public resetRestartMode() {
    this._restartMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartModeInput() {
    return this._restartMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_restart: cdktf.booleanToTerraform(this._forceRestart),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_offline: cdktf.booleanToTerraform(this._isOffline),
      node_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeNames),
      restart_mode: cdktf.stringToTerraform(this._restartMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      force_restart: {
        value: cdktf.booleanToHclTerraform(this._forceRestart),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_offline: {
        value: cdktf.booleanToHclTerraform(this._isOffline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nodeNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      restart_mode: {
        value: cdktf.stringToHclTerraform(this._restartMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
