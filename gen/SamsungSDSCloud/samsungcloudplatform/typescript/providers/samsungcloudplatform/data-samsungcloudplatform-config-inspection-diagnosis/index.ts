// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnosis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformConfigInspectionDiagnosisConfig extends cdktf.TerraformMetaArguments {
  /**
  * DiagnosisId is obtained through Config Inspection List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnosis#diagnosis_id DataSamsungcloudplatformConfigInspectionDiagnosis#diagnosis_id}
  */
  readonly diagnosisId: string;
  /**
  * KAFKA Request Sequence is obtained through Report Diagnosis result list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnosis#diagnosis_request_sequence DataSamsungcloudplatformConfigInspectionDiagnosis#diagnosis_request_sequence}
  */
  readonly diagnosisRequestSequence: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnosis#id DataSamsungcloudplatformConfigInspectionDiagnosis#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStruct {
}

export function dataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStructToTerraform(struct?: DataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStructToHclTerraform(struct?: DataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_guide - computed: true, optional: false, required: false
  public get actionGuide() {
    return this.getStringAttribute('action_guide');
  }

  // changed - computed: true, optional: false, required: false
  public get changed() {
    return this.getBooleanAttribute('changed');
  }

  // diagnosis_check_type - computed: true, optional: false, required: false
  public get diagnosisCheckType() {
    return this.getStringAttribute('diagnosis_check_type');
  }

  // diagnosis_criteria - computed: true, optional: false, required: false
  public get diagnosisCriteria() {
    return this.getStringAttribute('diagnosis_criteria');
  }

  // diagnosis_item - computed: true, optional: false, required: false
  public get diagnosisItem() {
    return this.getStringAttribute('diagnosis_item');
  }

  // diagnosis_layer - computed: true, optional: false, required: false
  public get diagnosisLayer() {
    return this.getStringAttribute('diagnosis_layer');
  }

  // diagnosis_method - computed: true, optional: false, required: false
  public get diagnosisMethod() {
    return this.getStringAttribute('diagnosis_method');
  }

  // diagnosis_result - computed: true, optional: false, required: false
  public get diagnosisResult() {
    return this.getStringAttribute('diagnosis_result');
  }

  // result_contents - computed: true, optional: false, required: false
  public get resultContents() {
    return this.getStringAttribute('result_contents');
  }

  // sub_category - computed: true, optional: false, required: false
  public get subCategory() {
    return this.getStringAttribute('sub_category');
  }
}

export class DataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStructOutputReference {
    return new DataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnosis samsungcloudplatform_config_inspection_diagnosis}
*/
export class DataSamsungcloudplatformConfigInspectionDiagnosis extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_config_inspection_diagnosis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformConfigInspectionDiagnosis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformConfigInspectionDiagnosis to import
  * @param importFromId The id of the existing DataSamsungcloudplatformConfigInspectionDiagnosis that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnosis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformConfigInspectionDiagnosis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_config_inspection_diagnosis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnosis samsungcloudplatform_config_inspection_diagnosis} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformConfigInspectionDiagnosisConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformConfigInspectionDiagnosisConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_config_inspection_diagnosis',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diagnosisId = config.diagnosisId;
    this._diagnosisRequestSequence = config.diagnosisRequestSequence;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checklist_name - computed: true, optional: false, required: false
  public get checklistName() {
    return this.getStringAttribute('checklist_name');
  }

  // diagnosis_account - computed: true, optional: false, required: false
  public get diagnosisAccount() {
    return this.getStringAttribute('diagnosis_account');
  }

  // diagnosis_check_type - computed: true, optional: false, required: false
  public get diagnosisCheckType() {
    return this.getStringAttribute('diagnosis_check_type');
  }

  // diagnosis_id - computed: false, optional: false, required: true
  private _diagnosisId?: string; 
  public get diagnosisId() {
    return this.getStringAttribute('diagnosis_id');
  }
  public set diagnosisId(value: string) {
    this._diagnosisId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisIdInput() {
    return this._diagnosisId;
  }

  // diagnosis_name - computed: true, optional: false, required: false
  public get diagnosisName() {
    return this.getStringAttribute('diagnosis_name');
  }

  // diagnosis_request_sequence - computed: false, optional: false, required: true
  private _diagnosisRequestSequence?: string; 
  public get diagnosisRequestSequence() {
    return this.getStringAttribute('diagnosis_request_sequence');
  }
  public set diagnosisRequestSequence(value: string) {
    this._diagnosisRequestSequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisRequestSequenceInput() {
    return this._diagnosisRequestSequence;
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

  // proceed_date - computed: true, optional: false, required: false
  public get proceedDate() {
    return this.getStringAttribute('proceed_date');
  }

  // result_detail_list - computed: true, optional: false, required: false
  private _resultDetailList = new DataSamsungcloudplatformConfigInspectionDiagnosisResultDetailListStructList(this, "result_detail_list", false);
  public get resultDetailList() {
    return this._resultDetailList;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      diagnosis_id: cdktf.stringToTerraform(this._diagnosisId),
      diagnosis_request_sequence: cdktf.stringToTerraform(this._diagnosisRequestSequence),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      diagnosis_id: {
        value: cdktf.stringToHclTerraform(this._diagnosisId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnosis_request_sequence: {
        value: cdktf.stringToHclTerraform(this._diagnosisRequestSequence),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
