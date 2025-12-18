// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#delegated_resource_access_request_id}
  */
  readonly delegatedResourceAccessRequestId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#id DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#is_process_tree_enabled DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport#is_process_tree_enabled}
  */
  readonly isProcessTreeEnabled?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report oci_delegate_access_control_delegated_resource_access_request_audit_log_report}
*/
export class DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_delegate_access_control_delegated_resource_access_request_audit_log_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport to import
  * @param importFromId The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_delegate_access_control_delegated_resource_access_request_audit_log_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/delegate_access_control_delegated_resource_access_request_audit_log_report oci_delegate_access_control_delegated_resource_access_request_audit_log_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDelegateAccessControlDelegatedResourceAccessRequestAuditLogReportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_delegate_access_control_delegated_resource_access_request_audit_log_report',
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
    this._delegatedResourceAccessRequestId = config.delegatedResourceAccessRequestId;
    this._id = config.id;
    this._isProcessTreeEnabled = config.isProcessTreeEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_report_status - computed: true, optional: false, required: false
  public get auditReportStatus() {
    return this.getStringAttribute('audit_report_status');
  }

  // delegated_resource_access_request_id - computed: false, optional: false, required: true
  private _delegatedResourceAccessRequestId?: string; 
  public get delegatedResourceAccessRequestId() {
    return this.getStringAttribute('delegated_resource_access_request_id');
  }
  public set delegatedResourceAccessRequestId(value: string) {
    this._delegatedResourceAccessRequestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedResourceAccessRequestIdInput() {
    return this._delegatedResourceAccessRequestId;
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

  // is_process_tree_enabled - computed: false, optional: true, required: false
  private _isProcessTreeEnabled?: boolean | cdktf.IResolvable; 
  public get isProcessTreeEnabled() {
    return this.getBooleanAttribute('is_process_tree_enabled');
  }
  public set isProcessTreeEnabled(value: boolean | cdktf.IResolvable) {
    this._isProcessTreeEnabled = value;
  }
  public resetIsProcessTreeEnabled() {
    this._isProcessTreeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProcessTreeEnabledInput() {
    return this._isProcessTreeEnabled;
  }

  // process_tree - computed: true, optional: false, required: false
  public get processTree() {
    return this.getStringAttribute('process_tree');
  }

  // report - computed: true, optional: false, required: false
  public get report() {
    return this.getStringAttribute('report');
  }

  // time_report_generated - computed: true, optional: false, required: false
  public get timeReportGenerated() {
    return this.getStringAttribute('time_report_generated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegated_resource_access_request_id: cdktf.stringToTerraform(this._delegatedResourceAccessRequestId),
      id: cdktf.stringToTerraform(this._id),
      is_process_tree_enabled: cdktf.booleanToTerraform(this._isProcessTreeEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegated_resource_access_request_id: {
        value: cdktf.stringToHclTerraform(this._delegatedResourceAccessRequestId),
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
      is_process_tree_enabled: {
        value: cdktf.booleanToHclTerraform(this._isProcessTreeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
