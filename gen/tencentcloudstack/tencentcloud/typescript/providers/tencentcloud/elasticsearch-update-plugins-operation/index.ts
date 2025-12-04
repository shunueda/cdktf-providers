// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/elasticsearch_update_plugins_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElasticsearchUpdatePluginsOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to force a restart. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/elasticsearch_update_plugins_operation#force_restart ElasticsearchUpdatePluginsOperation#force_restart}
  */
  readonly forceRestart?: boolean | cdktf.IResolvable;
  /**
  * Whether to reinstall, default value false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/elasticsearch_update_plugins_operation#force_update ElasticsearchUpdatePluginsOperation#force_update}
  */
  readonly forceUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/elasticsearch_update_plugins_operation#id ElasticsearchUpdatePluginsOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of plugins that need to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/elasticsearch_update_plugins_operation#install_plugin_list ElasticsearchUpdatePluginsOperation#install_plugin_list}
  */
  readonly installPluginList?: string[];
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/elasticsearch_update_plugins_operation#instance_id ElasticsearchUpdatePluginsOperation#instance_id}
  */
  readonly instanceId: string;
  /**
  * Plugin type. 0: system plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/elasticsearch_update_plugins_operation#plugin_type ElasticsearchUpdatePluginsOperation#plugin_type}
  */
  readonly pluginType?: number;
  /**
  * List of plugins that need to be uninstalled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/elasticsearch_update_plugins_operation#remove_plugin_list ElasticsearchUpdatePluginsOperation#remove_plugin_list}
  */
  readonly removePluginList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/elasticsearch_update_plugins_operation tencentcloud_elasticsearch_update_plugins_operation}
*/
export class ElasticsearchUpdatePluginsOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_elasticsearch_update_plugins_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElasticsearchUpdatePluginsOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElasticsearchUpdatePluginsOperation to import
  * @param importFromId The id of the existing ElasticsearchUpdatePluginsOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/elasticsearch_update_plugins_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElasticsearchUpdatePluginsOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_elasticsearch_update_plugins_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/elasticsearch_update_plugins_operation tencentcloud_elasticsearch_update_plugins_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElasticsearchUpdatePluginsOperationConfig
  */
  public constructor(scope: Construct, id: string, config: ElasticsearchUpdatePluginsOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_elasticsearch_update_plugins_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
    this._forceUpdate = config.forceUpdate;
    this._id = config.id;
    this._installPluginList = config.installPluginList;
    this._instanceId = config.instanceId;
    this._pluginType = config.pluginType;
    this._removePluginList = config.removePluginList;
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

  // force_update - computed: false, optional: true, required: false
  private _forceUpdate?: boolean | cdktf.IResolvable; 
  public get forceUpdate() {
    return this.getBooleanAttribute('force_update');
  }
  public set forceUpdate(value: boolean | cdktf.IResolvable) {
    this._forceUpdate = value;
  }
  public resetForceUpdate() {
    this._forceUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpdateInput() {
    return this._forceUpdate;
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

  // install_plugin_list - computed: false, optional: true, required: false
  private _installPluginList?: string[]; 
  public get installPluginList() {
    return cdktf.Fn.tolist(this.getListAttribute('install_plugin_list'));
  }
  public set installPluginList(value: string[]) {
    this._installPluginList = value;
  }
  public resetInstallPluginList() {
    this._installPluginList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installPluginListInput() {
    return this._installPluginList;
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

  // plugin_type - computed: false, optional: true, required: false
  private _pluginType?: number; 
  public get pluginType() {
    return this.getNumberAttribute('plugin_type');
  }
  public set pluginType(value: number) {
    this._pluginType = value;
  }
  public resetPluginType() {
    this._pluginType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginTypeInput() {
    return this._pluginType;
  }

  // remove_plugin_list - computed: false, optional: true, required: false
  private _removePluginList?: string[]; 
  public get removePluginList() {
    return cdktf.Fn.tolist(this.getListAttribute('remove_plugin_list'));
  }
  public set removePluginList(value: string[]) {
    this._removePluginList = value;
  }
  public resetRemovePluginList() {
    this._removePluginList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removePluginListInput() {
    return this._removePluginList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      force_restart: cdktf.booleanToTerraform(this._forceRestart),
      force_update: cdktf.booleanToTerraform(this._forceUpdate),
      id: cdktf.stringToTerraform(this._id),
      install_plugin_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._installPluginList),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      plugin_type: cdktf.numberToTerraform(this._pluginType),
      remove_plugin_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._removePluginList),
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
      force_update: {
        value: cdktf.booleanToHclTerraform(this._forceUpdate),
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
      install_plugin_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._installPluginList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_type: {
        value: cdktf.numberToHclTerraform(this._pluginType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_plugin_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._removePluginList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
