// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column#difference_column_key DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn#difference_column_key}
  */
  readonly differenceColumnKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column#id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column#sdm_masking_policy_difference_id DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn#sdm_masking_policy_difference_id}
  */
  readonly sdmMaskingPolicyDifferenceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column oci_data_safe_sdm_masking_policy_difference_difference_column}
*/
export class DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sdm_masking_policy_difference_difference_column";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn to import
  * @param importFromId The id of the existing DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sdm_masking_policy_difference_difference_column", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sdm_masking_policy_difference_difference_column oci_data_safe_sdm_masking_policy_difference_difference_column} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSdmMaskingPolicyDifferenceDifferenceColumnConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sdm_masking_policy_difference_difference_column',
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
    this._differenceColumnKey = config.differenceColumnKey;
    this._id = config.id;
    this._sdmMaskingPolicyDifferenceId = config.sdmMaskingPolicyDifferenceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column_name - computed: true, optional: false, required: false
  public get columnName() {
    return this.getStringAttribute('column_name');
  }

  // difference_column_key - computed: false, optional: false, required: true
  private _differenceColumnKey?: string; 
  public get differenceColumnKey() {
    return this.getStringAttribute('difference_column_key');
  }
  public set differenceColumnKey(value: string) {
    this._differenceColumnKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get differenceColumnKeyInput() {
    return this._differenceColumnKey;
  }

  // difference_type - computed: true, optional: false, required: false
  public get differenceType() {
    return this.getStringAttribute('difference_type');
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // masking_columnkey - computed: true, optional: false, required: false
  public get maskingColumnkey() {
    return this.getStringAttribute('masking_columnkey');
  }

  // object - computed: true, optional: false, required: false
  public get object() {
    return this.getStringAttribute('object');
  }

  // planned_action - computed: true, optional: false, required: false
  public get plannedAction() {
    return this.getStringAttribute('planned_action');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // sdm_masking_policy_difference_id - computed: false, optional: false, required: true
  private _sdmMaskingPolicyDifferenceId?: string; 
  public get sdmMaskingPolicyDifferenceId() {
    return this.getStringAttribute('sdm_masking_policy_difference_id');
  }
  public set sdmMaskingPolicyDifferenceId(value: string) {
    this._sdmMaskingPolicyDifferenceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdmMaskingPolicyDifferenceIdInput() {
    return this._sdmMaskingPolicyDifferenceId;
  }

  // sensitive_columnkey - computed: true, optional: false, required: false
  public get sensitiveColumnkey() {
    return this.getStringAttribute('sensitive_columnkey');
  }

  // sensitive_type_id - computed: true, optional: false, required: false
  public get sensitiveTypeId() {
    return this.getStringAttribute('sensitive_type_id');
  }

  // sync_status - computed: true, optional: false, required: false
  public get syncStatus() {
    return this.getStringAttribute('sync_status');
  }

  // time_last_synced - computed: true, optional: false, required: false
  public get timeLastSynced() {
    return this.getStringAttribute('time_last_synced');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      difference_column_key: cdktf.stringToTerraform(this._differenceColumnKey),
      id: cdktf.stringToTerraform(this._id),
      sdm_masking_policy_difference_id: cdktf.stringToTerraform(this._sdmMaskingPolicyDifferenceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      difference_column_key: {
        value: cdktf.stringToHclTerraform(this._differenceColumnKey),
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
      sdm_masking_policy_difference_id: {
        value: cdktf.stringToHclTerraform(this._sdmMaskingPolicyDifferenceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
