// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformConfigInspectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Diagnosis ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection#diagnosis_id DataSamsungcloudplatformConfigInspection#diagnosis_id}
  */
  readonly diagnosisId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection#id DataSamsungcloudplatformConfigInspection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataSamsungcloudplatformConfigInspectionAuthKeyResponse {
}

export function dataSamsungcloudplatformConfigInspectionAuthKeyResponseToTerraform(struct?: DataSamsungcloudplatformConfigInspectionAuthKeyResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformConfigInspectionAuthKeyResponseToHclTerraform(struct?: DataSamsungcloudplatformConfigInspectionAuthKeyResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformConfigInspectionAuthKeyResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformConfigInspectionAuthKeyResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformConfigInspectionAuthKeyResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_key_create_dt - computed: true, optional: false, required: false
  public get authKeyCreateDt() {
    return this.getStringAttribute('auth_key_create_dt');
  }

  // auth_key_expire_dt - computed: true, optional: false, required: false
  public get authKeyExpireDt() {
    return this.getStringAttribute('auth_key_expire_dt');
  }

  // auth_key_id - computed: true, optional: false, required: false
  public get authKeyId() {
    return this.getStringAttribute('auth_key_id');
  }

  // auth_key_state - computed: true, optional: false, required: false
  public get authKeyState() {
    return this.getStringAttribute('auth_key_state');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }
}

export class DataSamsungcloudplatformConfigInspectionAuthKeyResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformConfigInspectionAuthKeyResponseOutputReference {
    return new DataSamsungcloudplatformConfigInspectionAuthKeyResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformConfigInspectionScheduleResponse {
}

export function dataSamsungcloudplatformConfigInspectionScheduleResponseToTerraform(struct?: DataSamsungcloudplatformConfigInspectionScheduleResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformConfigInspectionScheduleResponseToHclTerraform(struct?: DataSamsungcloudplatformConfigInspectionScheduleResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformConfigInspectionScheduleResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformConfigInspectionScheduleResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformConfigInspectionScheduleResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // diagnosis_id - computed: true, optional: false, required: false
  public get diagnosisId() {
    return this.getStringAttribute('diagnosis_id');
  }

  // diagnosis_start_time_pattern - computed: true, optional: false, required: false
  public get diagnosisStartTimePattern() {
    return this.getStringAttribute('diagnosis_start_time_pattern');
  }

  // frequency_type - computed: true, optional: false, required: false
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }

  // frequency_value - computed: true, optional: false, required: false
  public get frequencyValue() {
    return this.getStringAttribute('frequency_value');
  }

  // use_diagnosis_check_type_bp - computed: true, optional: false, required: false
  public get useDiagnosisCheckTypeBp() {
    return this.getStringAttribute('use_diagnosis_check_type_bp');
  }

  // use_diagnosis_check_type_ssi - computed: true, optional: false, required: false
  public get useDiagnosisCheckTypeSsi() {
    return this.getStringAttribute('use_diagnosis_check_type_ssi');
  }
}

export class DataSamsungcloudplatformConfigInspectionScheduleResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformConfigInspectionScheduleResponseOutputReference {
    return new DataSamsungcloudplatformConfigInspectionScheduleResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformConfigInspectionSummaryResponse {
}

export function dataSamsungcloudplatformConfigInspectionSummaryResponseToTerraform(struct?: DataSamsungcloudplatformConfigInspectionSummaryResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformConfigInspectionSummaryResponseToHclTerraform(struct?: DataSamsungcloudplatformConfigInspectionSummaryResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformConfigInspectionSummaryResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformConfigInspectionSummaryResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformConfigInspectionSummaryResponse | undefined) {
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

export class DataSamsungcloudplatformConfigInspectionSummaryResponseList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformConfigInspectionSummaryResponseOutputReference {
    return new DataSamsungcloudplatformConfigInspectionSummaryResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection samsungcloudplatform_config_inspection}
*/
export class DataSamsungcloudplatformConfigInspection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_config_inspection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformConfigInspection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformConfigInspection to import
  * @param importFromId The id of the existing DataSamsungcloudplatformConfigInspection that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformConfigInspection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_config_inspection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/config_inspection samsungcloudplatform_config_inspection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformConfigInspectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformConfigInspectionConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_config_inspection',
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
    this._diagnosisId = config.diagnosisId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_key_response - computed: true, optional: false, required: false
  private _authKeyResponse = new DataSamsungcloudplatformConfigInspectionAuthKeyResponseList(this, "auth_key_response", true);
  public get authKeyResponse() {
    return this._authKeyResponse;
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

  // schedule_response - computed: true, optional: false, required: false
  private _scheduleResponse = new DataSamsungcloudplatformConfigInspectionScheduleResponseList(this, "schedule_response", true);
  public get scheduleResponse() {
    return this._scheduleResponse;
  }

  // summary_response - computed: true, optional: false, required: false
  private _summaryResponse = new DataSamsungcloudplatformConfigInspectionSummaryResponseList(this, "summary_response", true);
  public get summaryResponse() {
    return this._summaryResponse;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      diagnosis_id: cdktf.stringToTerraform(this._diagnosisId),
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
