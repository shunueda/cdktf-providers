// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeMaskingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policy#masking_policy_id DataOciDataSafeMaskingPolicy#masking_policy_id}
  */
  readonly maskingPolicyId: string;
}
export interface DataOciDataSafeMaskingPolicyColumnSource {
}

export function dataOciDataSafeMaskingPolicyColumnSourceToTerraform(struct?: DataOciDataSafeMaskingPolicyColumnSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeMaskingPolicyColumnSourceToHclTerraform(struct?: DataOciDataSafeMaskingPolicyColumnSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeMaskingPolicyColumnSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciDataSafeMaskingPolicyColumnSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeMaskingPolicyColumnSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // column_source - computed: true, optional: false, required: false
  public get columnSource() {
    return this.getStringAttribute('column_source');
  }

  // sensitive_data_model_id - computed: true, optional: false, required: false
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
}

export class DataOciDataSafeMaskingPolicyColumnSourceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciDataSafeMaskingPolicyColumnSourceOutputReference {
    return new DataOciDataSafeMaskingPolicyColumnSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policy oci_data_safe_masking_policy}
*/
export class DataOciDataSafeMaskingPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_masking_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeMaskingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeMaskingPolicy to import
  * @param importFromId The id of the existing DataOciDataSafeMaskingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeMaskingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_masking_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/data_safe_masking_policy oci_data_safe_masking_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeMaskingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeMaskingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_masking_policy',
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
    this._maskingPolicyId = config.maskingPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_masking_columns_from_sdm_trigger - computed: true, optional: false, required: false
  public get addMaskingColumnsFromSdmTrigger() {
    return this.getNumberAttribute('add_masking_columns_from_sdm_trigger');
  }

  // column_source - computed: true, optional: false, required: false
  private _columnSource = new DataOciDataSafeMaskingPolicyColumnSourceList(this, "column_source", false);
  public get columnSource() {
    return this._columnSource;
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // generate_health_report_trigger - computed: true, optional: false, required: false
  public get generateHealthReportTrigger() {
    return this.getNumberAttribute('generate_health_report_trigger');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // masking_policy_id - computed: false, optional: false, required: true
  private _maskingPolicyId?: string; 
  public get maskingPolicyId() {
    return this.getStringAttribute('masking_policy_id');
  }
  public set maskingPolicyId(value: string) {
    this._maskingPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingPolicyIdInput() {
    return this._maskingPolicyId;
  }

  // parallel_degree - computed: true, optional: false, required: false
  public get parallelDegree() {
    return this.getStringAttribute('parallel_degree');
  }

  // post_masking_script - computed: true, optional: false, required: false
  public get postMaskingScript() {
    return this.getStringAttribute('post_masking_script');
  }

  // pre_masking_script - computed: true, optional: false, required: false
  public get preMaskingScript() {
    return this.getStringAttribute('pre_masking_script');
  }

  // recompile - computed: true, optional: false, required: false
  public get recompile() {
    return this.getStringAttribute('recompile');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      masking_policy_id: cdktf.stringToTerraform(this._maskingPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      masking_policy_id: {
        value: cdktf.stringToHclTerraform(this._maskingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
