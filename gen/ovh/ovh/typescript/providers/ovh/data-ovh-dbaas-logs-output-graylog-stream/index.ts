// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_output_graylog_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhDbaasLogsOutputGraylogStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_output_graylog_stream#id DataOvhDbaasLogsOutputGraylogStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_output_graylog_stream#service_name DataOvhDbaasLogsOutputGraylogStream#service_name}
  */
  readonly serviceName: string;
  /**
  * Stream name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_output_graylog_stream#title DataOvhDbaasLogsOutputGraylogStream#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_output_graylog_stream ovh_dbaas_logs_output_graylog_stream}
*/
export class DataOvhDbaasLogsOutputGraylogStream extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_dbaas_logs_output_graylog_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhDbaasLogsOutputGraylogStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhDbaasLogsOutputGraylogStream to import
  * @param importFromId The id of the existing DataOvhDbaasLogsOutputGraylogStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_output_graylog_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhDbaasLogsOutputGraylogStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_dbaas_logs_output_graylog_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/dbaas_logs_output_graylog_stream ovh_dbaas_logs_output_graylog_stream} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhDbaasLogsOutputGraylogStreamConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhDbaasLogsOutputGraylogStreamConfig) {
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
    this._id = config.id;
    this._serviceName = config.serviceName;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // can_alert - computed: true, optional: false, required: false
  public get canAlert() {
    return this.getBooleanAttribute('can_alert');
  }

  // cold_storage_compression - computed: true, optional: false, required: false
  public get coldStorageCompression() {
    return this.getStringAttribute('cold_storage_compression');
  }

  // cold_storage_content - computed: true, optional: false, required: false
  public get coldStorageContent() {
    return this.getStringAttribute('cold_storage_content');
  }

  // cold_storage_enabled - computed: true, optional: false, required: false
  public get coldStorageEnabled() {
    return this.getBooleanAttribute('cold_storage_enabled');
  }

  // cold_storage_notify_enabled - computed: true, optional: false, required: false
  public get coldStorageNotifyEnabled() {
    return this.getBooleanAttribute('cold_storage_notify_enabled');
  }

  // cold_storage_retention - computed: true, optional: false, required: false
  public get coldStorageRetention() {
    return this.getNumberAttribute('cold_storage_retention');
  }

  // cold_storage_target - computed: true, optional: false, required: false
  public get coldStorageTarget() {
    return this.getStringAttribute('cold_storage_target');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // indexing_enabled - computed: true, optional: false, required: false
  public get indexingEnabled() {
    return this.getBooleanAttribute('indexing_enabled');
  }

  // indexing_max_size - computed: true, optional: false, required: false
  public get indexingMaxSize() {
    return this.getNumberAttribute('indexing_max_size');
  }

  // indexing_notify_enabled - computed: true, optional: false, required: false
  public get indexingNotifyEnabled() {
    return this.getBooleanAttribute('indexing_notify_enabled');
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

  // parent_stream_id - computed: true, optional: false, required: false
  public get parentStreamId() {
    return this.getStringAttribute('parent_stream_id');
  }

  // pause_indexing_on_max_size - computed: true, optional: false, required: false
  public get pauseIndexingOnMaxSize() {
    return this.getBooleanAttribute('pause_indexing_on_max_size');
  }

  // retention_id - computed: true, optional: false, required: false
  public get retentionId() {
    return this.getStringAttribute('retention_id');
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

  // web_socket_enabled - computed: true, optional: false, required: false
  public get webSocketEnabled() {
    return this.getBooleanAttribute('web_socket_enabled');
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
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
      title: cdktf.stringToTerraform(this._title),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
