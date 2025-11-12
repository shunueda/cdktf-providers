// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformConfigInspectionDiagnosesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Diagnosis Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses#diagnosis_name DataSamsungcloudplatformConfigInspectionDiagnoses#diagnosis_name}
  */
  readonly diagnosisName?: string;
  /**
  * State of diagnosis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses#diagnosis_state DataSamsungcloudplatformConfigInspectionDiagnoses#diagnosis_state}
  */
  readonly diagnosisState?: string;
  /**
  * End Date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses#end_date DataSamsungcloudplatformConfigInspectionDiagnoses#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses#id DataSamsungcloudplatformConfigInspectionDiagnoses#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Request page number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses#page DataSamsungcloudplatformConfigInspectionDiagnoses#page}
  */
  readonly page?: number;
  /**
  * Number of items in the Page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses#size DataSamsungcloudplatformConfigInspectionDiagnoses#size}
  */
  readonly size?: number;
  /**
  * Sort condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses#sort DataSamsungcloudplatformConfigInspectionDiagnoses#sort}
  */
  readonly sort?: string[];
  /**
  * Start Date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses#start_date DataSamsungcloudplatformConfigInspectionDiagnoses#start_date}
  */
  readonly startDate?: string;
}
export interface DataSamsungcloudplatformConfigInspectionDiagnosesContents {
}

export function dataSamsungcloudplatformConfigInspectionDiagnosesContentsToTerraform(struct?: DataSamsungcloudplatformConfigInspectionDiagnosesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformConfigInspectionDiagnosesContentsToHclTerraform(struct?: DataSamsungcloudplatformConfigInspectionDiagnosesContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformConfigInspectionDiagnosesContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformConfigInspectionDiagnosesContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformConfigInspectionDiagnosesContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // check - computed: true, optional: false, required: false
  public get check() {
    return this.getNumberAttribute('check');
  }

  // csp_type - computed: true, optional: false, required: false
  public get cspType() {
    return this.getStringAttribute('csp_type');
  }

  // diagnosis_account_id - computed: true, optional: false, required: false
  public get diagnosisAccountId() {
    return this.getStringAttribute('diagnosis_account_id');
  }

  // diagnosis_check_type - computed: true, optional: false, required: false
  public get diagnosisCheckType() {
    return this.getStringAttribute('diagnosis_check_type');
  }

  // diagnosis_id - computed: true, optional: false, required: false
  public get diagnosisId() {
    return this.getStringAttribute('diagnosis_id');
  }

  // diagnosis_name - computed: true, optional: false, required: false
  public get diagnosisName() {
    return this.getStringAttribute('diagnosis_name');
  }

  // diagnosis_request_sequence - computed: true, optional: false, required: false
  public get diagnosisRequestSequence() {
    return this.getStringAttribute('diagnosis_request_sequence');
  }

  // diagnosis_result - computed: true, optional: false, required: false
  public get diagnosisResult() {
    return this.getStringAttribute('diagnosis_result');
  }

  // diagnosis_total_cnt - computed: true, optional: false, required: false
  public get diagnosisTotalCnt() {
    return this.getNumberAttribute('diagnosis_total_cnt');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getNumberAttribute('error');
  }

  // fail - computed: true, optional: false, required: false
  public get fail() {
    return this.getNumberAttribute('fail');
  }

  // na - computed: true, optional: false, required: false
  public get na() {
    return this.getNumberAttribute('na');
  }

  // pass - computed: true, optional: false, required: false
  public get pass() {
    return this.getNumberAttribute('pass');
  }

  // proceed_date - computed: true, optional: false, required: false
  public get proceedDate() {
    return this.getStringAttribute('proceed_date');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class DataSamsungcloudplatformConfigInspectionDiagnosesContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformConfigInspectionDiagnosesContentsOutputReference {
    return new DataSamsungcloudplatformConfigInspectionDiagnosesContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses samsungcloudplatform_config_inspection_diagnoses}
*/
export class DataSamsungcloudplatformConfigInspectionDiagnoses extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_config_inspection_diagnoses";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformConfigInspectionDiagnoses resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformConfigInspectionDiagnoses to import
  * @param importFromId The id of the existing DataSamsungcloudplatformConfigInspectionDiagnoses that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformConfigInspectionDiagnoses to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_config_inspection_diagnoses", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/config_inspection_diagnoses samsungcloudplatform_config_inspection_diagnoses} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformConfigInspectionDiagnosesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformConfigInspectionDiagnosesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_config_inspection_diagnoses',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0',
        providerVersionConstraint: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._diagnosisName = config.diagnosisName;
    this._diagnosisState = config.diagnosisState;
    this._endDate = config.endDate;
    this._id = config.id;
    this._page = config.page;
    this._size = config.size;
    this._sort = config.sort;
    this._startDate = config.startDate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformConfigInspectionDiagnosesContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }

  // diagnosis_name - computed: false, optional: true, required: false
  private _diagnosisName?: string; 
  public get diagnosisName() {
    return this.getStringAttribute('diagnosis_name');
  }
  public set diagnosisName(value: string) {
    this._diagnosisName = value;
  }
  public resetDiagnosisName() {
    this._diagnosisName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisNameInput() {
    return this._diagnosisName;
  }

  // diagnosis_state - computed: false, optional: true, required: false
  private _diagnosisState?: string; 
  public get diagnosisState() {
    return this.getStringAttribute('diagnosis_state');
  }
  public set diagnosisState(value: string) {
    this._diagnosisState = value;
  }
  public resetDiagnosisState() {
    this._diagnosisState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisStateInput() {
    return this._diagnosisState;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
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

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string[]; 
  public get sort() {
    return this.getListAttribute('sort');
  }
  public set sort(value: string[]) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
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
      diagnosis_name: cdktf.stringToTerraform(this._diagnosisName),
      diagnosis_state: cdktf.stringToTerraform(this._diagnosisState),
      end_date: cdktf.stringToTerraform(this._endDate),
      id: cdktf.stringToTerraform(this._id),
      page: cdktf.numberToTerraform(this._page),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sort),
      start_date: cdktf.stringToTerraform(this._startDate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      diagnosis_name: {
        value: cdktf.stringToHclTerraform(this._diagnosisName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnosis_state: {
        value: cdktf.stringToHclTerraform(this._diagnosisState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_date: {
        value: cdktf.stringToHclTerraform(this._endDate),
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
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sort: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sort),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      start_date: {
        value: cdktf.stringToHclTerraform(this._startDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
