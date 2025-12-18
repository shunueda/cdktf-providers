// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_archive_retrieval
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeAuditArchiveRetrievalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_archive_retrieval#audit_archive_retrieval_id DataOciDataSafeAuditArchiveRetrieval#audit_archive_retrieval_id}
  */
  readonly auditArchiveRetrievalId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_archive_retrieval oci_data_safe_audit_archive_retrieval}
*/
export class DataOciDataSafeAuditArchiveRetrieval extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_audit_archive_retrieval";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeAuditArchiveRetrieval resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeAuditArchiveRetrieval to import
  * @param importFromId The id of the existing DataOciDataSafeAuditArchiveRetrieval that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_archive_retrieval#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeAuditArchiveRetrieval to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_audit_archive_retrieval", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_audit_archive_retrieval oci_data_safe_audit_archive_retrieval} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeAuditArchiveRetrievalConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeAuditArchiveRetrievalConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_audit_archive_retrieval',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditArchiveRetrievalId = config.auditArchiveRetrievalId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_archive_retrieval_id - computed: false, optional: false, required: true
  private _auditArchiveRetrievalId?: string; 
  public get auditArchiveRetrievalId() {
    return this.getStringAttribute('audit_archive_retrieval_id');
  }
  public set auditArchiveRetrievalId(value: string) {
    this._auditArchiveRetrievalId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get auditArchiveRetrievalIdInput() {
    return this._auditArchiveRetrievalId;
  }

  // audit_event_count - computed: true, optional: false, required: false
  public get auditEventCount() {
    return this.getStringAttribute('audit_event_count');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // end_date - computed: true, optional: false, required: false
  public get endDate() {
    return this.getStringAttribute('end_date');
  }

  // error_info - computed: true, optional: false, required: false
  public get errorInfo() {
    return this.getStringAttribute('error_info');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // start_date - computed: true, optional: false, required: false
  public get startDate() {
    return this.getStringAttribute('start_date');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_completed - computed: true, optional: false, required: false
  public get timeCompleted() {
    return this.getStringAttribute('time_completed');
  }

  // time_of_expiry - computed: true, optional: false, required: false
  public get timeOfExpiry() {
    return this.getStringAttribute('time_of_expiry');
  }

  // time_requested - computed: true, optional: false, required: false
  public get timeRequested() {
    return this.getStringAttribute('time_requested');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_archive_retrieval_id: cdktf.stringToTerraform(this._auditArchiveRetrievalId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_archive_retrieval_id: {
        value: cdktf.stringToHclTerraform(this._auditArchiveRetrievalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
