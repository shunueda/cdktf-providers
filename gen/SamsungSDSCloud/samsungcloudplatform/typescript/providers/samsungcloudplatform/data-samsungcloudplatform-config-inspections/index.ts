// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformConfigInspectionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * CSP Type (SCP, AWS, Azure)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections#csp_type DataSamsungcloudplatformConfigInspections#csp_type}
  */
  readonly cspType?: string[];
  /**
  * Diagnosis Account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections#diagnosis_account_id DataSamsungcloudplatformConfigInspections#diagnosis_account_id}
  */
  readonly diagnosisAccountId?: string;
  /**
  * Diagnosis Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections#diagnosis_name DataSamsungcloudplatformConfigInspections#diagnosis_name}
  */
  readonly diagnosisName?: string;
  /**
  * end date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections#end_date DataSamsungcloudplatformConfigInspections#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections#id DataSamsungcloudplatformConfigInspections#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Request page number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections#page DataSamsungcloudplatformConfigInspections#page}
  */
  readonly page?: number;
  /**
  * Recent Diagnosis State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections#recent_diagnosis_state DataSamsungcloudplatformConfigInspections#recent_diagnosis_state}
  */
  readonly recentDiagnosisState?: string[];
  /**
  * Number of items in the Page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections#size DataSamsungcloudplatformConfigInspections#size}
  */
  readonly size?: number;
  /**
  * Sort condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections#sort DataSamsungcloudplatformConfigInspections#sort}
  */
  readonly sort?: string[];
  /**
  * start date
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections#start_date DataSamsungcloudplatformConfigInspections#start_date}
  */
  readonly startDate?: string;
}
export interface DataSamsungcloudplatformConfigInspectionsContents {
}

export function dataSamsungcloudplatformConfigInspectionsContentsToTerraform(struct?: DataSamsungcloudplatformConfigInspectionsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformConfigInspectionsContentsToHclTerraform(struct?: DataSamsungcloudplatformConfigInspectionsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformConfigInspectionsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformConfigInspectionsContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformConfigInspectionsContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // csp_type - computed: true, optional: false, required: false
  public get cspType() {
    return this.getStringAttribute('csp_type');
  }

  // diagnosis_account - computed: true, optional: false, required: false
  public get diagnosisAccount() {
    return this.getStringAttribute('diagnosis_account');
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

  // diagnosis_type - computed: true, optional: false, required: false
  public get diagnosisType() {
    return this.getStringAttribute('diagnosis_type');
  }

  // error_state - computed: true, optional: false, required: false
  public get errorState() {
    return this.getStringAttribute('error_state');
  }

  // plan_type - computed: true, optional: false, required: false
  public get planType() {
    return this.getStringAttribute('plan_type');
  }

  // recent_diagnosis_dt - computed: true, optional: false, required: false
  public get recentDiagnosisDt() {
    return this.getStringAttribute('recent_diagnosis_dt');
  }

  // recent_diagnosis_state - computed: true, optional: false, required: false
  public get recentDiagnosisState() {
    return this.getStringAttribute('recent_diagnosis_state');
  }
}

export class DataSamsungcloudplatformConfigInspectionsContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformConfigInspectionsContentsOutputReference {
    return new DataSamsungcloudplatformConfigInspectionsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections samsungcloudplatform_config_inspections}
*/
export class DataSamsungcloudplatformConfigInspections extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_config_inspections";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformConfigInspections resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformConfigInspections to import
  * @param importFromId The id of the existing DataSamsungcloudplatformConfigInspections that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformConfigInspections to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_config_inspections", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspections samsungcloudplatform_config_inspections} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformConfigInspectionsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformConfigInspectionsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_config_inspections',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cspType = config.cspType;
    this._diagnosisAccountId = config.diagnosisAccountId;
    this._diagnosisName = config.diagnosisName;
    this._endDate = config.endDate;
    this._id = config.id;
    this._page = config.page;
    this._recentDiagnosisState = config.recentDiagnosisState;
    this._size = config.size;
    this._sort = config.sort;
    this._startDate = config.startDate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformConfigInspectionsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
  }

  // csp_type - computed: false, optional: true, required: false
  private _cspType?: string[]; 
  public get cspType() {
    return this.getListAttribute('csp_type');
  }
  public set cspType(value: string[]) {
    this._cspType = value;
  }
  public resetCspType() {
    this._cspType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspTypeInput() {
    return this._cspType;
  }

  // diagnosis_account_id - computed: false, optional: true, required: false
  private _diagnosisAccountId?: string; 
  public get diagnosisAccountId() {
    return this.getStringAttribute('diagnosis_account_id');
  }
  public set diagnosisAccountId(value: string) {
    this._diagnosisAccountId = value;
  }
  public resetDiagnosisAccountId() {
    this._diagnosisAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisAccountIdInput() {
    return this._diagnosisAccountId;
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

  // recent_diagnosis_state - computed: false, optional: true, required: false
  private _recentDiagnosisState?: string[]; 
  public get recentDiagnosisState() {
    return this.getListAttribute('recent_diagnosis_state');
  }
  public set recentDiagnosisState(value: string[]) {
    this._recentDiagnosisState = value;
  }
  public resetRecentDiagnosisState() {
    this._recentDiagnosisState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentDiagnosisStateInput() {
    return this._recentDiagnosisState;
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
      csp_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cspType),
      diagnosis_account_id: cdktf.stringToTerraform(this._diagnosisAccountId),
      diagnosis_name: cdktf.stringToTerraform(this._diagnosisName),
      end_date: cdktf.stringToTerraform(this._endDate),
      id: cdktf.stringToTerraform(this._id),
      page: cdktf.numberToTerraform(this._page),
      recent_diagnosis_state: cdktf.listMapper(cdktf.stringToTerraform, false)(this._recentDiagnosisState),
      size: cdktf.numberToTerraform(this._size),
      sort: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sort),
      start_date: cdktf.stringToTerraform(this._startDate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csp_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cspType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      diagnosis_account_id: {
        value: cdktf.stringToHclTerraform(this._diagnosisAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnosis_name: {
        value: cdktf.stringToHclTerraform(this._diagnosisName),
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
      recent_diagnosis_state: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._recentDiagnosisState),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
