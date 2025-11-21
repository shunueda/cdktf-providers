// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSafeMaskingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#add_masking_columns_from_sdm_trigger DataSafeMaskingPolicy#add_masking_columns_from_sdm_trigger}
  */
  readonly addMaskingColumnsFromSdmTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#compartment_id DataSafeMaskingPolicy#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#defined_tags DataSafeMaskingPolicy#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#description DataSafeMaskingPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#display_name DataSafeMaskingPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#freeform_tags DataSafeMaskingPolicy#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#generate_health_report_trigger DataSafeMaskingPolicy#generate_health_report_trigger}
  */
  readonly generateHealthReportTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#id DataSafeMaskingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#is_drop_temp_tables_enabled DataSafeMaskingPolicy#is_drop_temp_tables_enabled}
  */
  readonly isDropTempTablesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#is_redo_logging_enabled DataSafeMaskingPolicy#is_redo_logging_enabled}
  */
  readonly isRedoLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#is_refresh_stats_enabled DataSafeMaskingPolicy#is_refresh_stats_enabled}
  */
  readonly isRefreshStatsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#parallel_degree DataSafeMaskingPolicy#parallel_degree}
  */
  readonly parallelDegree?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#post_masking_script DataSafeMaskingPolicy#post_masking_script}
  */
  readonly postMaskingScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#pre_masking_script DataSafeMaskingPolicy#pre_masking_script}
  */
  readonly preMaskingScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#recompile DataSafeMaskingPolicy#recompile}
  */
  readonly recompile?: string;
  /**
  * column_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}
  */
  readonly columnSource: DataSafeMaskingPolicyColumnSource[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#timeouts DataSafeMaskingPolicy#timeouts}
  */
  readonly timeouts?: DataSafeMaskingPolicyTimeouts;
}
export interface DataSafeMaskingPolicyColumnSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#column_source DataSafeMaskingPolicy#column_source}
  */
  readonly columnSource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#sensitive_data_model_id DataSafeMaskingPolicy#sensitive_data_model_id}
  */
  readonly sensitiveDataModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#target_id DataSafeMaskingPolicy#target_id}
  */
  readonly targetId?: string;
}

export function dataSafeMaskingPolicyColumnSourceToTerraform(struct?: DataSafeMaskingPolicyColumnSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_source: cdktf.stringToTerraform(struct!.columnSource),
    sensitive_data_model_id: cdktf.stringToTerraform(struct!.sensitiveDataModelId),
    target_id: cdktf.stringToTerraform(struct!.targetId),
  }
}


export function dataSafeMaskingPolicyColumnSourceToHclTerraform(struct?: DataSafeMaskingPolicyColumnSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_source: {
      value: cdktf.stringToHclTerraform(struct!.columnSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitive_data_model_id: {
      value: cdktf.stringToHclTerraform(struct!.sensitiveDataModelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_id: {
      value: cdktf.stringToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeMaskingPolicyColumnSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSafeMaskingPolicyColumnSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnSource = this._columnSource;
    }
    if (this._sensitiveDataModelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitiveDataModelId = this._sensitiveDataModelId;
    }
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeMaskingPolicyColumnSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columnSource = undefined;
      this._sensitiveDataModelId = undefined;
      this._targetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columnSource = value.columnSource;
      this._sensitiveDataModelId = value.sensitiveDataModelId;
      this._targetId = value.targetId;
    }
  }

  // column_source - computed: false, optional: false, required: true
  private _columnSource?: string; 
  public get columnSource() {
    return this.getStringAttribute('column_source');
  }
  public set columnSource(value: string) {
    this._columnSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSourceInput() {
    return this._columnSource;
  }

  // sensitive_data_model_id - computed: true, optional: true, required: false
  private _sensitiveDataModelId?: string; 
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
  }
  public set sensitiveDataModelId(value: string) {
    this._sensitiveDataModelId = value;
  }
  public resetSensitiveDataModelId() {
    this._sensitiveDataModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataModelIdInput() {
    return this._sensitiveDataModelId;
  }

  // target_id - computed: true, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }
}

export class DataSafeMaskingPolicyColumnSourceList extends cdktf.ComplexList {
  public internalValue? : DataSafeMaskingPolicyColumnSource[] | cdktf.IResolvable

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
  public get(index: number): DataSafeMaskingPolicyColumnSourceOutputReference {
    return new DataSafeMaskingPolicyColumnSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSafeMaskingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#create DataSafeMaskingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#delete DataSafeMaskingPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#update DataSafeMaskingPolicy#update}
  */
  readonly update?: string;
}

export function dataSafeMaskingPolicyTimeoutsToTerraform(struct?: DataSafeMaskingPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataSafeMaskingPolicyTimeoutsToHclTerraform(struct?: DataSafeMaskingPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSafeMaskingPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSafeMaskingPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSafeMaskingPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy oci_data_safe_masking_policy}
*/
export class DataSafeMaskingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_masking_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSafeMaskingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSafeMaskingPolicy to import
  * @param importFromId The id of the existing DataSafeMaskingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSafeMaskingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_masking_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/data_safe_masking_policy oci_data_safe_masking_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSafeMaskingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataSafeMaskingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_masking_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addMaskingColumnsFromSdmTrigger = config.addMaskingColumnsFromSdmTrigger;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._generateHealthReportTrigger = config.generateHealthReportTrigger;
    this._id = config.id;
    this._isDropTempTablesEnabled = config.isDropTempTablesEnabled;
    this._isRedoLoggingEnabled = config.isRedoLoggingEnabled;
    this._isRefreshStatsEnabled = config.isRefreshStatsEnabled;
    this._parallelDegree = config.parallelDegree;
    this._postMaskingScript = config.postMaskingScript;
    this._preMaskingScript = config.preMaskingScript;
    this._recompile = config.recompile;
    this._columnSource.internalValue = config.columnSource;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_masking_columns_from_sdm_trigger - computed: false, optional: true, required: false
  private _addMaskingColumnsFromSdmTrigger?: number; 
  public get addMaskingColumnsFromSdmTrigger() {
    return this.getNumberAttribute('add_masking_columns_from_sdm_trigger');
  }
  public set addMaskingColumnsFromSdmTrigger(value: number) {
    this._addMaskingColumnsFromSdmTrigger = value;
  }
  public resetAddMaskingColumnsFromSdmTrigger() {
    this._addMaskingColumnsFromSdmTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addMaskingColumnsFromSdmTriggerInput() {
    return this._addMaskingColumnsFromSdmTrigger;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // generate_health_report_trigger - computed: false, optional: true, required: false
  private _generateHealthReportTrigger?: number; 
  public get generateHealthReportTrigger() {
    return this.getNumberAttribute('generate_health_report_trigger');
  }
  public set generateHealthReportTrigger(value: number) {
    this._generateHealthReportTrigger = value;
  }
  public resetGenerateHealthReportTrigger() {
    this._generateHealthReportTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateHealthReportTriggerInput() {
    return this._generateHealthReportTrigger;
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

  // is_drop_temp_tables_enabled - computed: true, optional: true, required: false
  private _isDropTempTablesEnabled?: boolean | cdktf.IResolvable; 
  public get isDropTempTablesEnabled() {
    return this.getBooleanAttribute('is_drop_temp_tables_enabled');
  }
  public set isDropTempTablesEnabled(value: boolean | cdktf.IResolvable) {
    this._isDropTempTablesEnabled = value;
  }
  public resetIsDropTempTablesEnabled() {
    this._isDropTempTablesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDropTempTablesEnabledInput() {
    return this._isDropTempTablesEnabled;
  }

  // is_redo_logging_enabled - computed: true, optional: true, required: false
  private _isRedoLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get isRedoLoggingEnabled() {
    return this.getBooleanAttribute('is_redo_logging_enabled');
  }
  public set isRedoLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._isRedoLoggingEnabled = value;
  }
  public resetIsRedoLoggingEnabled() {
    this._isRedoLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRedoLoggingEnabledInput() {
    return this._isRedoLoggingEnabled;
  }

  // is_refresh_stats_enabled - computed: true, optional: true, required: false
  private _isRefreshStatsEnabled?: boolean | cdktf.IResolvable; 
  public get isRefreshStatsEnabled() {
    return this.getBooleanAttribute('is_refresh_stats_enabled');
  }
  public set isRefreshStatsEnabled(value: boolean | cdktf.IResolvable) {
    this._isRefreshStatsEnabled = value;
  }
  public resetIsRefreshStatsEnabled() {
    this._isRefreshStatsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRefreshStatsEnabledInput() {
    return this._isRefreshStatsEnabled;
  }

  // parallel_degree - computed: true, optional: true, required: false
  private _parallelDegree?: string; 
  public get parallelDegree() {
    return this.getStringAttribute('parallel_degree');
  }
  public set parallelDegree(value: string) {
    this._parallelDegree = value;
  }
  public resetParallelDegree() {
    this._parallelDegree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelDegreeInput() {
    return this._parallelDegree;
  }

  // post_masking_script - computed: true, optional: true, required: false
  private _postMaskingScript?: string; 
  public get postMaskingScript() {
    return this.getStringAttribute('post_masking_script');
  }
  public set postMaskingScript(value: string) {
    this._postMaskingScript = value;
  }
  public resetPostMaskingScript() {
    this._postMaskingScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postMaskingScriptInput() {
    return this._postMaskingScript;
  }

  // pre_masking_script - computed: true, optional: true, required: false
  private _preMaskingScript?: string; 
  public get preMaskingScript() {
    return this.getStringAttribute('pre_masking_script');
  }
  public set preMaskingScript(value: string) {
    this._preMaskingScript = value;
  }
  public resetPreMaskingScript() {
    this._preMaskingScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preMaskingScriptInput() {
    return this._preMaskingScript;
  }

  // recompile - computed: true, optional: true, required: false
  private _recompile?: string; 
  public get recompile() {
    return this.getStringAttribute('recompile');
  }
  public set recompile(value: string) {
    this._recompile = value;
  }
  public resetRecompile() {
    this._recompile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recompileInput() {
    return this._recompile;
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

  // column_source - computed: false, optional: false, required: true
  private _columnSource = new DataSafeMaskingPolicyColumnSourceList(this, "column_source", false);
  public get columnSource() {
    return this._columnSource;
  }
  public putColumnSource(value: DataSafeMaskingPolicyColumnSource[] | cdktf.IResolvable) {
    this._columnSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnSourceInput() {
    return this._columnSource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSafeMaskingPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSafeMaskingPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_masking_columns_from_sdm_trigger: cdktf.numberToTerraform(this._addMaskingColumnsFromSdmTrigger),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      generate_health_report_trigger: cdktf.numberToTerraform(this._generateHealthReportTrigger),
      id: cdktf.stringToTerraform(this._id),
      is_drop_temp_tables_enabled: cdktf.booleanToTerraform(this._isDropTempTablesEnabled),
      is_redo_logging_enabled: cdktf.booleanToTerraform(this._isRedoLoggingEnabled),
      is_refresh_stats_enabled: cdktf.booleanToTerraform(this._isRefreshStatsEnabled),
      parallel_degree: cdktf.stringToTerraform(this._parallelDegree),
      post_masking_script: cdktf.stringToTerraform(this._postMaskingScript),
      pre_masking_script: cdktf.stringToTerraform(this._preMaskingScript),
      recompile: cdktf.stringToTerraform(this._recompile),
      column_source: cdktf.listMapper(dataSafeMaskingPolicyColumnSourceToTerraform, true)(this._columnSource.internalValue),
      timeouts: dataSafeMaskingPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_masking_columns_from_sdm_trigger: {
        value: cdktf.numberToHclTerraform(this._addMaskingColumnsFromSdmTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      generate_health_report_trigger: {
        value: cdktf.numberToHclTerraform(this._generateHealthReportTrigger),
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
      is_drop_temp_tables_enabled: {
        value: cdktf.booleanToHclTerraform(this._isDropTempTablesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_redo_logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._isRedoLoggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_refresh_stats_enabled: {
        value: cdktf.booleanToHclTerraform(this._isRefreshStatsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      parallel_degree: {
        value: cdktf.stringToHclTerraform(this._parallelDegree),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_masking_script: {
        value: cdktf.stringToHclTerraform(this._postMaskingScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_masking_script: {
        value: cdktf.stringToHclTerraform(this._preMaskingScript),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recompile: {
        value: cdktf.stringToHclTerraform(this._recompile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      column_source: {
        value: cdktf.listMapperHcl(dataSafeMaskingPolicyColumnSourceToHclTerraform, true)(this._columnSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSafeMaskingPolicyColumnSourceList",
      },
      timeouts: {
        value: dataSafeMaskingPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSafeMaskingPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
