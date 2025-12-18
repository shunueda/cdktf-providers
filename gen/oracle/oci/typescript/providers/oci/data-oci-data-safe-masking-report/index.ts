// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeMaskingReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_report#id DataOciDataSafeMaskingReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_report#masking_report_id DataOciDataSafeMaskingReport#masking_report_id}
  */
  readonly maskingReportId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_report oci_data_safe_masking_report}
*/
export class DataOciDataSafeMaskingReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_masking_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeMaskingReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeMaskingReport to import
  * @param importFromId The id of the existing DataOciDataSafeMaskingReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeMaskingReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_masking_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_report oci_data_safe_masking_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeMaskingReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeMaskingReportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_masking_report',
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
    this._id = config.id;
    this._maskingReportId = config.maskingReportId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
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

  // is_drop_temp_tables_enabled - computed: true, optional: false, required: false
  public get isDropTempTablesEnabled() {
    return this.getBooleanAttribute('is_drop_temp_tables_enabled');
  }

  // is_redo_logging_enabled - computed: true, optional: false, required: false
  public get isRedoLoggingEnabled() {
    return this.getBooleanAttribute('is_redo_logging_enabled');
  }

  // is_refresh_stats_enabled - computed: true, optional: false, required: false
  public get isRefreshStatsEnabled() {
    return this.getBooleanAttribute('is_refresh_stats_enabled');
  }

  // masking_policy_id - computed: true, optional: false, required: false
  public get maskingPolicyId() {
    return this.getStringAttribute('masking_policy_id');
  }

  // masking_report_id - computed: false, optional: false, required: true
  private _maskingReportId?: string; 
  public get maskingReportId() {
    return this.getStringAttribute('masking_report_id');
  }
  public set maskingReportId(value: string) {
    this._maskingReportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingReportIdInput() {
    return this._maskingReportId;
  }

  // masking_status - computed: true, optional: false, required: false
  public get maskingStatus() {
    return this.getStringAttribute('masking_status');
  }

  // masking_work_request_id - computed: true, optional: false, required: false
  public get maskingWorkRequestId() {
    return this.getStringAttribute('masking_work_request_id');
  }

  // parallel_degree - computed: true, optional: false, required: false
  public get parallelDegree() {
    return this.getStringAttribute('parallel_degree');
  }

  // recompile - computed: true, optional: false, required: false
  public get recompile() {
    return this.getStringAttribute('recompile');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_masking_finished - computed: true, optional: false, required: false
  public get timeMaskingFinished() {
    return this.getStringAttribute('time_masking_finished');
  }

  // time_masking_started - computed: true, optional: false, required: false
  public get timeMaskingStarted() {
    return this.getStringAttribute('time_masking_started');
  }

  // total_masked_columns - computed: true, optional: false, required: false
  public get totalMaskedColumns() {
    return this.getStringAttribute('total_masked_columns');
  }

  // total_masked_objects - computed: true, optional: false, required: false
  public get totalMaskedObjects() {
    return this.getStringAttribute('total_masked_objects');
  }

  // total_masked_schemas - computed: true, optional: false, required: false
  public get totalMaskedSchemas() {
    return this.getStringAttribute('total_masked_schemas');
  }

  // total_masked_sensitive_types - computed: true, optional: false, required: false
  public get totalMaskedSensitiveTypes() {
    return this.getStringAttribute('total_masked_sensitive_types');
  }

  // total_masked_values - computed: true, optional: false, required: false
  public get totalMaskedValues() {
    return this.getStringAttribute('total_masked_values');
  }

  // total_post_masking_script_errors - computed: true, optional: false, required: false
  public get totalPostMaskingScriptErrors() {
    return this.getStringAttribute('total_post_masking_script_errors');
  }

  // total_pre_masking_script_errors - computed: true, optional: false, required: false
  public get totalPreMaskingScriptErrors() {
    return this.getStringAttribute('total_pre_masking_script_errors');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      masking_report_id: cdktf.stringToTerraform(this._maskingReportId),
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
      masking_report_id: {
        value: cdktf.stringToHclTerraform(this._maskingReportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
