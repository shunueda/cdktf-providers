// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbaasLogsOutputGraylogStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cold storage compression method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#cold_storage_compression DbaasLogsOutputGraylogStream#cold_storage_compression}
  */
  readonly coldStorageCompression?: string;
  /**
  * ColdStorage content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#cold_storage_content DbaasLogsOutputGraylogStream#cold_storage_content}
  */
  readonly coldStorageContent?: string;
  /**
  * Is Cold storage enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#cold_storage_enabled DbaasLogsOutputGraylogStream#cold_storage_enabled}
  */
  readonly coldStorageEnabled?: boolean | cdktf.IResolvable;
  /**
  * Notify on new Cold storage archive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#cold_storage_notify_enabled DbaasLogsOutputGraylogStream#cold_storage_notify_enabled}
  */
  readonly coldStorageNotifyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Cold storage retention in year
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#cold_storage_retention DbaasLogsOutputGraylogStream#cold_storage_retention}
  */
  readonly coldStorageRetention?: number;
  /**
  * ColdStorage destination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#cold_storage_target DbaasLogsOutputGraylogStream#cold_storage_target}
  */
  readonly coldStorageTarget?: string;
  /**
  * Stream description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#description DbaasLogsOutputGraylogStream#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#id DbaasLogsOutputGraylogStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable ES indexing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#indexing_enabled DbaasLogsOutputGraylogStream#indexing_enabled}
  */
  readonly indexingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum indexing size (in GB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#indexing_max_size DbaasLogsOutputGraylogStream#indexing_max_size}
  */
  readonly indexingMaxSize?: number;
  /**
  * If set, notify when size is near 80, 90 or 100 % of the maximum configured setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#indexing_notify_enabled DbaasLogsOutputGraylogStream#indexing_notify_enabled}
  */
  readonly indexingNotifyEnabled?: boolean | cdktf.IResolvable;
  /**
  * Parent stream ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#parent_stream_id DbaasLogsOutputGraylogStream#parent_stream_id}
  */
  readonly parentStreamId?: string;
  /**
  * If set, pause indexing when maximum size is reach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#pause_indexing_on_max_size DbaasLogsOutputGraylogStream#pause_indexing_on_max_size}
  */
  readonly pauseIndexingOnMaxSize?: boolean | cdktf.IResolvable;
  /**
  * Retention ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#retention_id DbaasLogsOutputGraylogStream#retention_id}
  */
  readonly retentionId?: string;
  /**
  * The service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#service_name DbaasLogsOutputGraylogStream#service_name}
  */
  readonly serviceName: string;
  /**
  * Stream name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#title DbaasLogsOutputGraylogStream#title}
  */
  readonly title: string;
  /**
  * Enable Websocket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#web_socket_enabled DbaasLogsOutputGraylogStream#web_socket_enabled}
  */
  readonly webSocketEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream ovh_dbaas_logs_output_graylog_stream}
*/
export class DbaasLogsOutputGraylogStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dbaas_logs_output_graylog_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DbaasLogsOutputGraylogStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DbaasLogsOutputGraylogStream to import
  * @param importFromId The id of the existing DbaasLogsOutputGraylogStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DbaasLogsOutputGraylogStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dbaas_logs_output_graylog_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/dbaas_logs_output_graylog_stream ovh_dbaas_logs_output_graylog_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbaasLogsOutputGraylogStreamConfig
  */
  public constructor(scope: Construct, id: string, config: DbaasLogsOutputGraylogStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_dbaas_logs_output_graylog_stream',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0',
        providerVersionConstraint: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._coldStorageCompression = config.coldStorageCompression;
    this._coldStorageContent = config.coldStorageContent;
    this._coldStorageEnabled = config.coldStorageEnabled;
    this._coldStorageNotifyEnabled = config.coldStorageNotifyEnabled;
    this._coldStorageRetention = config.coldStorageRetention;
    this._coldStorageTarget = config.coldStorageTarget;
    this._description = config.description;
    this._id = config.id;
    this._indexingEnabled = config.indexingEnabled;
    this._indexingMaxSize = config.indexingMaxSize;
    this._indexingNotifyEnabled = config.indexingNotifyEnabled;
    this._parentStreamId = config.parentStreamId;
    this._pauseIndexingOnMaxSize = config.pauseIndexingOnMaxSize;
    this._retentionId = config.retentionId;
    this._serviceName = config.serviceName;
    this._title = config.title;
    this._webSocketEnabled = config.webSocketEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_alert - computed: true, optional: false, required: false
  public get canAlert() {
    return this.getBooleanAttribute('can_alert');
  }

  // cold_storage_compression - computed: true, optional: true, required: false
  private _coldStorageCompression?: string; 
  public get coldStorageCompression() {
    return this.getStringAttribute('cold_storage_compression');
  }
  public set coldStorageCompression(value: string) {
    this._coldStorageCompression = value;
  }
  public resetColdStorageCompression() {
    this._coldStorageCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageCompressionInput() {
    return this._coldStorageCompression;
  }

  // cold_storage_content - computed: true, optional: true, required: false
  private _coldStorageContent?: string; 
  public get coldStorageContent() {
    return this.getStringAttribute('cold_storage_content');
  }
  public set coldStorageContent(value: string) {
    this._coldStorageContent = value;
  }
  public resetColdStorageContent() {
    this._coldStorageContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageContentInput() {
    return this._coldStorageContent;
  }

  // cold_storage_enabled - computed: true, optional: true, required: false
  private _coldStorageEnabled?: boolean | cdktf.IResolvable; 
  public get coldStorageEnabled() {
    return this.getBooleanAttribute('cold_storage_enabled');
  }
  public set coldStorageEnabled(value: boolean | cdktf.IResolvable) {
    this._coldStorageEnabled = value;
  }
  public resetColdStorageEnabled() {
    this._coldStorageEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageEnabledInput() {
    return this._coldStorageEnabled;
  }

  // cold_storage_notify_enabled - computed: true, optional: true, required: false
  private _coldStorageNotifyEnabled?: boolean | cdktf.IResolvable; 
  public get coldStorageNotifyEnabled() {
    return this.getBooleanAttribute('cold_storage_notify_enabled');
  }
  public set coldStorageNotifyEnabled(value: boolean | cdktf.IResolvable) {
    this._coldStorageNotifyEnabled = value;
  }
  public resetColdStorageNotifyEnabled() {
    this._coldStorageNotifyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageNotifyEnabledInput() {
    return this._coldStorageNotifyEnabled;
  }

  // cold_storage_retention - computed: true, optional: true, required: false
  private _coldStorageRetention?: number; 
  public get coldStorageRetention() {
    return this.getNumberAttribute('cold_storage_retention');
  }
  public set coldStorageRetention(value: number) {
    this._coldStorageRetention = value;
  }
  public resetColdStorageRetention() {
    this._coldStorageRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageRetentionInput() {
    return this._coldStorageRetention;
  }

  // cold_storage_target - computed: true, optional: true, required: false
  private _coldStorageTarget?: string; 
  public get coldStorageTarget() {
    return this.getStringAttribute('cold_storage_target');
  }
  public set coldStorageTarget(value: string) {
    this._coldStorageTarget = value;
  }
  public resetColdStorageTarget() {
    this._coldStorageTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coldStorageTargetInput() {
    return this._coldStorageTarget;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // indexing_enabled - computed: true, optional: true, required: false
  private _indexingEnabled?: boolean | cdktf.IResolvable; 
  public get indexingEnabled() {
    return this.getBooleanAttribute('indexing_enabled');
  }
  public set indexingEnabled(value: boolean | cdktf.IResolvable) {
    this._indexingEnabled = value;
  }
  public resetIndexingEnabled() {
    this._indexingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingEnabledInput() {
    return this._indexingEnabled;
  }

  // indexing_max_size - computed: true, optional: true, required: false
  private _indexingMaxSize?: number; 
  public get indexingMaxSize() {
    return this.getNumberAttribute('indexing_max_size');
  }
  public set indexingMaxSize(value: number) {
    this._indexingMaxSize = value;
  }
  public resetIndexingMaxSize() {
    this._indexingMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingMaxSizeInput() {
    return this._indexingMaxSize;
  }

  // indexing_notify_enabled - computed: true, optional: true, required: false
  private _indexingNotifyEnabled?: boolean | cdktf.IResolvable; 
  public get indexingNotifyEnabled() {
    return this.getBooleanAttribute('indexing_notify_enabled');
  }
  public set indexingNotifyEnabled(value: boolean | cdktf.IResolvable) {
    this._indexingNotifyEnabled = value;
  }
  public resetIndexingNotifyEnabled() {
    this._indexingNotifyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexingNotifyEnabledInput() {
    return this._indexingNotifyEnabled;
  }

  // is_editable - computed: true, optional: false, required: false
  public get isEditable() {
    return this.getBooleanAttribute('is_editable');
  }

  // is_shareable - computed: true, optional: false, required: false
  public get isShareable() {
    return this.getBooleanAttribute('is_shareable');
  }

  // nb_alert_condition - computed: true, optional: false, required: false
  public get nbAlertCondition() {
    return this.getNumberAttribute('nb_alert_condition');
  }

  // nb_archive - computed: true, optional: false, required: false
  public get nbArchive() {
    return this.getNumberAttribute('nb_archive');
  }

  // parent_stream_id - computed: false, optional: true, required: false
  private _parentStreamId?: string; 
  public get parentStreamId() {
    return this.getStringAttribute('parent_stream_id');
  }
  public set parentStreamId(value: string) {
    this._parentStreamId = value;
  }
  public resetParentStreamId() {
    this._parentStreamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentStreamIdInput() {
    return this._parentStreamId;
  }

  // pause_indexing_on_max_size - computed: true, optional: true, required: false
  private _pauseIndexingOnMaxSize?: boolean | cdktf.IResolvable; 
  public get pauseIndexingOnMaxSize() {
    return this.getBooleanAttribute('pause_indexing_on_max_size');
  }
  public set pauseIndexingOnMaxSize(value: boolean | cdktf.IResolvable) {
    this._pauseIndexingOnMaxSize = value;
  }
  public resetPauseIndexingOnMaxSize() {
    this._pauseIndexingOnMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseIndexingOnMaxSizeInput() {
    return this._pauseIndexingOnMaxSize;
  }

  // retention_id - computed: true, optional: true, required: false
  private _retentionId?: string; 
  public get retentionId() {
    return this.getStringAttribute('retention_id');
  }
  public set retentionId(value: string) {
    this._retentionId = value;
  }
  public resetRetentionId() {
    this._retentionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionIdInput() {
    return this._retentionId;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // stream_id - computed: true, optional: false, required: false
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // web_socket_enabled - computed: true, optional: true, required: false
  private _webSocketEnabled?: boolean | cdktf.IResolvable; 
  public get webSocketEnabled() {
    return this.getBooleanAttribute('web_socket_enabled');
  }
  public set webSocketEnabled(value: boolean | cdktf.IResolvable) {
    this._webSocketEnabled = value;
  }
  public resetWebSocketEnabled() {
    this._webSocketEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSocketEnabledInput() {
    return this._webSocketEnabled;
  }

  // write_token - computed: true, optional: false, required: false
  public get writeToken() {
    return this.getStringAttribute('write_token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cold_storage_compression: cdktf.stringToTerraform(this._coldStorageCompression),
      cold_storage_content: cdktf.stringToTerraform(this._coldStorageContent),
      cold_storage_enabled: cdktf.booleanToTerraform(this._coldStorageEnabled),
      cold_storage_notify_enabled: cdktf.booleanToTerraform(this._coldStorageNotifyEnabled),
      cold_storage_retention: cdktf.numberToTerraform(this._coldStorageRetention),
      cold_storage_target: cdktf.stringToTerraform(this._coldStorageTarget),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      indexing_enabled: cdktf.booleanToTerraform(this._indexingEnabled),
      indexing_max_size: cdktf.numberToTerraform(this._indexingMaxSize),
      indexing_notify_enabled: cdktf.booleanToTerraform(this._indexingNotifyEnabled),
      parent_stream_id: cdktf.stringToTerraform(this._parentStreamId),
      pause_indexing_on_max_size: cdktf.booleanToTerraform(this._pauseIndexingOnMaxSize),
      retention_id: cdktf.stringToTerraform(this._retentionId),
      service_name: cdktf.stringToTerraform(this._serviceName),
      title: cdktf.stringToTerraform(this._title),
      web_socket_enabled: cdktf.booleanToTerraform(this._webSocketEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cold_storage_compression: {
        value: cdktf.stringToHclTerraform(this._coldStorageCompression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cold_storage_content: {
        value: cdktf.stringToHclTerraform(this._coldStorageContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cold_storage_enabled: {
        value: cdktf.booleanToHclTerraform(this._coldStorageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cold_storage_notify_enabled: {
        value: cdktf.booleanToHclTerraform(this._coldStorageNotifyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cold_storage_retention: {
        value: cdktf.numberToHclTerraform(this._coldStorageRetention),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cold_storage_target: {
        value: cdktf.stringToHclTerraform(this._coldStorageTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      indexing_enabled: {
        value: cdktf.booleanToHclTerraform(this._indexingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      indexing_max_size: {
        value: cdktf.numberToHclTerraform(this._indexingMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      indexing_notify_enabled: {
        value: cdktf.booleanToHclTerraform(this._indexingNotifyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      parent_stream_id: {
        value: cdktf.stringToHclTerraform(this._parentStreamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pause_indexing_on_max_size: {
        value: cdktf.booleanToHclTerraform(this._pauseIndexingOnMaxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retention_id: {
        value: cdktf.stringToHclTerraform(this._retentionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_socket_enabled: {
        value: cdktf.booleanToHclTerraform(this._webSocketEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
