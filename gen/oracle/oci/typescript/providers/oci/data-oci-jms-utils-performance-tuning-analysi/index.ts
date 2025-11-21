// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_utils_performance_tuning_analysi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciJmsUtilsPerformanceTuningAnalysiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_utils_performance_tuning_analysi#compartment_id DataOciJmsUtilsPerformanceTuningAnalysi#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_utils_performance_tuning_analysi#id DataOciJmsUtilsPerformanceTuningAnalysi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_utils_performance_tuning_analysi#performance_tuning_analysis_id DataOciJmsUtilsPerformanceTuningAnalysi#performance_tuning_analysis_id}
  */
  readonly performanceTuningAnalysisId: string;
}
export interface DataOciJmsUtilsPerformanceTuningAnalysiCreatedBy {
}

export function dataOciJmsUtilsPerformanceTuningAnalysiCreatedByToTerraform(struct?: DataOciJmsUtilsPerformanceTuningAnalysiCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciJmsUtilsPerformanceTuningAnalysiCreatedByToHclTerraform(struct?: DataOciJmsUtilsPerformanceTuningAnalysiCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciJmsUtilsPerformanceTuningAnalysiCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciJmsUtilsPerformanceTuningAnalysiCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciJmsUtilsPerformanceTuningAnalysiCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciJmsUtilsPerformanceTuningAnalysiCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): DataOciJmsUtilsPerformanceTuningAnalysiCreatedByOutputReference {
    return new DataOciJmsUtilsPerformanceTuningAnalysiCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_utils_performance_tuning_analysi oci_jms_utils_performance_tuning_analysi}
*/
export class DataOciJmsUtilsPerformanceTuningAnalysi extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_jms_utils_performance_tuning_analysi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciJmsUtilsPerformanceTuningAnalysi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciJmsUtilsPerformanceTuningAnalysi to import
  * @param importFromId The id of the existing DataOciJmsUtilsPerformanceTuningAnalysi that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_utils_performance_tuning_analysi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciJmsUtilsPerformanceTuningAnalysi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_jms_utils_performance_tuning_analysi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/jms_utils_performance_tuning_analysi oci_jms_utils_performance_tuning_analysi} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciJmsUtilsPerformanceTuningAnalysiConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciJmsUtilsPerformanceTuningAnalysiConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_jms_utils_performance_tuning_analysi',
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
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._performanceTuningAnalysisId = config.performanceTuningAnalysisId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analysis_project_name - computed: true, optional: false, required: false
  public get analysisProjectName() {
    return this.getStringAttribute('analysis_project_name');
  }

  // artifact_object_storage_path - computed: true, optional: false, required: false
  public get artifactObjectStoragePath() {
    return this.getStringAttribute('artifact_object_storage_path');
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new DataOciJmsUtilsPerformanceTuningAnalysiCreatedByList(this, "created_by", false);
  public get createdBy() {
    return this._createdBy;
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

  // performance_tuning_analysis_id - computed: false, optional: false, required: true
  private _performanceTuningAnalysisId?: string; 
  public get performanceTuningAnalysisId() {
    return this.getStringAttribute('performance_tuning_analysis_id');
  }
  public set performanceTuningAnalysisId(value: string) {
    this._performanceTuningAnalysisId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceTuningAnalysisIdInput() {
    return this._performanceTuningAnalysisId;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // result_object_storage_path - computed: true, optional: false, required: false
  public get resultObjectStoragePath() {
    return this.getStringAttribute('result_object_storage_path');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_started - computed: true, optional: false, required: false
  public get timeStarted() {
    return this.getStringAttribute('time_started');
  }

  // warning_count - computed: true, optional: false, required: false
  public get warningCount() {
    return this.getNumberAttribute('warning_count');
  }

  // work_request_id - computed: true, optional: false, required: false
  public get workRequestId() {
    return this.getStringAttribute('work_request_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      performance_tuning_analysis_id: cdktf.stringToTerraform(this._performanceTuningAnalysisId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
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
      performance_tuning_analysis_id: {
        value: cdktf.stringToHclTerraform(this._performanceTuningAnalysisId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
