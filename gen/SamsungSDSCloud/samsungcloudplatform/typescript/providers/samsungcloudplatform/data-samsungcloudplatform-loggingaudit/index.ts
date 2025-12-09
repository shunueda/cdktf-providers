// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformLoggingauditConfig extends cdktf.TerraformMetaArguments {
  /**
  * Logging ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudit#logging_id DataSamsungcloudplatformLoggingaudit#logging_id}
  */
  readonly loggingId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudit samsungcloudplatform_loggingaudit}
*/
export class DataSamsungcloudplatformLoggingaudit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_loggingaudit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformLoggingaudit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformLoggingaudit to import
  * @param importFromId The id of the existing DataSamsungcloudplatformLoggingaudit that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformLoggingaudit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_loggingaudit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/loggingaudit samsungcloudplatform_loggingaudit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformLoggingauditConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformLoggingauditConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_loggingaudit',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._loggingId = config.loggingId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_content - computed: true, optional: false, required: false
  public get auditContent() {
    return this.getStringAttribute('audit_content');
  }

  // audit_detail_content - computed: true, optional: false, required: false
  public get auditDetailContent() {
    return this.getStringAttribute('audit_detail_content');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cluster_namespace_id - computed: true, optional: false, required: false
  public get clusterNamespaceId() {
    return this.getStringAttribute('cluster_namespace_id');
  }

  // event_topic_name - computed: true, optional: false, required: false
  public get eventTopicName() {
    return this.getStringAttribute('event_topic_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_error_message - computed: true, optional: false, required: false
  public get logErrorMessage() {
    return this.getStringAttribute('log_error_message');
  }

  // logging_id - computed: false, optional: false, required: true
  private _loggingId?: string; 
  public get loggingId() {
    return this.getStringAttribute('logging_id');
  }
  public set loggingId(value: string) {
    this._loggingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingIdInput() {
    return this._loggingId;
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // object_name - computed: true, optional: false, required: false
  public get objectName() {
    return this.getStringAttribute('object_name');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // request_client_type - computed: true, optional: false, required: false
  public get requestClientType() {
    return this.getStringAttribute('request_client_type');
  }

  // request_dt - computed: true, optional: false, required: false
  public get requestDt() {
    return this.getStringAttribute('request_dt');
  }

  // requested_by - computed: true, optional: false, required: false
  public get requestedBy() {
    return this.getStringAttribute('requested_by');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // user_email - computed: true, optional: false, required: false
  public get userEmail() {
    return this.getStringAttribute('user_email');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      logging_id: cdktf.stringToTerraform(this._loggingId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      logging_id: {
        value: cdktf.stringToHclTerraform(this._loggingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
