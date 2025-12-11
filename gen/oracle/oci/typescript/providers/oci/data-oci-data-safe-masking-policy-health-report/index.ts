// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_masking_policy_health_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeMaskingPolicyHealthReportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_masking_policy_health_report#id DataOciDataSafeMaskingPolicyHealthReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_masking_policy_health_report#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReport#masking_policy_health_report_id}
  */
  readonly maskingPolicyHealthReportId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_masking_policy_health_report oci_data_safe_masking_policy_health_report}
*/
export class DataOciDataSafeMaskingPolicyHealthReport extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_masking_policy_health_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeMaskingPolicyHealthReport to import
  * @param importFromId The id of the existing DataOciDataSafeMaskingPolicyHealthReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_masking_policy_health_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeMaskingPolicyHealthReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_masking_policy_health_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/data_safe_masking_policy_health_report oci_data_safe_masking_policy_health_report} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeMaskingPolicyHealthReportConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeMaskingPolicyHealthReportConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_masking_policy_health_report',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._maskingPolicyHealthReportId = config.maskingPolicyHealthReportId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // error_count - computed: true, optional: false, required: false
  public get errorCount() {
    return this.getStringAttribute('error_count');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
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

  // masking_policy_health_report_id - computed: false, optional: false, required: true
  private _maskingPolicyHealthReportId?: string; 
  public get maskingPolicyHealthReportId() {
    return this.getStringAttribute('masking_policy_health_report_id');
  }
  public set maskingPolicyHealthReportId(value: string) {
    this._maskingPolicyHealthReportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyHealthReportIdInput() {
    return this._maskingPolicyHealthReportId;
  }

  // masking_policy_id - computed: true, optional: false, required: false
  public get maskingPolicyId() {
    return this.getStringAttribute('masking_policy_id');
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // warning_count - computed: true, optional: false, required: false
  public get warningCount() {
    return this.getStringAttribute('warning_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      masking_policy_health_report_id: cdktf.stringToTerraform(this._maskingPolicyHealthReportId),
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
      masking_policy_health_report_id: {
        value: cdktf.stringToHclTerraform(this._maskingPolicyHealthReportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
