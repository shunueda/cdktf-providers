// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request_audit_log_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOperatorAccessControlAccessRequestAuditLogReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request_audit_log_report#access_request_id DataOciOperatorAccessControlAccessRequestAuditLogReport#access_request_id}
  */
  readonly accessRequestId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request_audit_log_report#enable_process_tree DataOciOperatorAccessControlAccessRequestAuditLogReport#enable_process_tree}
  */
  readonly enableProcessTree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request_audit_log_report#id DataOciOperatorAccessControlAccessRequestAuditLogReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request_audit_log_report oci_operator_access_control_access_request_audit_log_report}
*/
export class DataOciOperatorAccessControlAccessRequestAuditLogReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_operator_access_control_access_request_audit_log_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequestAuditLogReport to import
  * @param importFromId The id of the existing DataOciOperatorAccessControlAccessRequestAuditLogReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request_audit_log_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequestAuditLogReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_operator_access_control_access_request_audit_log_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/operator_access_control_access_request_audit_log_report oci_operator_access_control_access_request_audit_log_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOperatorAccessControlAccessRequestAuditLogReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOperatorAccessControlAccessRequestAuditLogReportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_operator_access_control_access_request_audit_log_report',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessRequestId = config.accessRequestId;
    this._enableProcessTree = config.enableProcessTree;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_request_id - computed: false, optional: false, required: true
  private _accessRequestId?: string; 
  public get accessRequestId() {
    return this.getStringAttribute('access_request_id');
  }
  public set accessRequestId(value: string) {
    this._accessRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRequestIdInput() {
    return this._accessRequestId;
  }

  // audit_report_status - computed: true, optional: false, required: false
  public get auditReportStatus() {
    return this.getStringAttribute('audit_report_status');
  }

  // enable_process_tree - computed: false, optional: true, required: false
  private _enableProcessTree?: number; 
  public get enableProcessTree() {
    return this.getNumberAttribute('enable_process_tree');
  }
  public set enableProcessTree(value: number) {
    this._enableProcessTree = value;
  }
  public resetEnableProcessTree() {
    this._enableProcessTree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProcessTreeInput() {
    return this._enableProcessTree;
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

  // process_tree - computed: true, optional: false, required: false
  public get processTree() {
    return this.getStringAttribute('process_tree');
  }

  // report - computed: true, optional: false, required: false
  public get report() {
    return this.getStringAttribute('report');
  }

  // time_of_report_generation - computed: true, optional: false, required: false
  public get timeOfReportGeneration() {
    return this.getStringAttribute('time_of_report_generation');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_request_id: cdktf.stringToTerraform(this._accessRequestId),
      enable_process_tree: cdktf.numberToTerraform(this._enableProcessTree),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_request_id: {
        value: cdktf.stringToHclTerraform(this._accessRequestId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_process_tree: {
        value: cdktf.numberToHclTerraform(this._enableProcessTree),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
