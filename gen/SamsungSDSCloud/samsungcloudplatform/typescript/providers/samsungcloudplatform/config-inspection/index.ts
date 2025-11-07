// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigInspectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * CSP Type (SCP, AWS, Azure)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#csp_type ConfigInspection#csp_type}
  */
  readonly cspType?: string;
  /**
  * BP or SSI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#diagnosis_check_type ConfigInspection#diagnosis_check_type}
  */
  readonly diagnosisCheckType?: string;
  /**
  * Diagnosis Type(Console, SSI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#diagnosis_type ConfigInspection#diagnosis_type}
  */
  readonly diagnosisType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#id ConfigInspection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Plan Type (STANDARD, MONTHLY)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#plan_type ConfigInspection#plan_type}
  */
  readonly planType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#tags ConfigInspection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * auth_key_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#auth_key_request ConfigInspection#auth_key_request}
  */
  readonly authKeyRequest?: ConfigInspectionAuthKeyRequest;
  /**
  * diagnosis_object_request_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#diagnosis_object_request_list ConfigInspection#diagnosis_object_request_list}
  */
  readonly diagnosisObjectRequestList: ConfigInspectionDiagnosisObjectRequestListStruct[] | cdktf.IResolvable;
  /**
  * schedule_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#schedule_request ConfigInspection#schedule_request}
  */
  readonly scheduleRequest?: ConfigInspectionScheduleRequest;
}
export interface ConfigInspectionAuthKeyRequest {
  /**
  * Auth Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#auth_key_id ConfigInspection#auth_key_id}
  */
  readonly authKeyId?: string;
}

export function configInspectionAuthKeyRequestToTerraform(struct?: ConfigInspectionAuthKeyRequestOutputReference | ConfigInspectionAuthKeyRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_key_id: cdktf.stringToTerraform(struct!.authKeyId),
  }
}


export function configInspectionAuthKeyRequestToHclTerraform(struct?: ConfigInspectionAuthKeyRequestOutputReference | ConfigInspectionAuthKeyRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_key_id: {
      value: cdktf.stringToHclTerraform(struct!.authKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigInspectionAuthKeyRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigInspectionAuthKeyRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKeyId = this._authKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigInspectionAuthKeyRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authKeyId = value.authKeyId;
    }
  }

  // auth_key_id - computed: false, optional: true, required: false
  private _authKeyId?: string; 
  public get authKeyId() {
    return this.getStringAttribute('auth_key_id');
  }
  public set authKeyId(value: string) {
    this._authKeyId = value;
  }
  public resetAuthKeyId() {
    this._authKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyIdInput() {
    return this._authKeyId;
  }
}
export interface ConfigInspectionDiagnosisObjectRequestListStruct {
  /**
  * Diagnosis Account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#diagnosis_account_id ConfigInspection#diagnosis_account_id}
  */
  readonly diagnosisAccountId: string;
  /**
  * Diagnosis ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#diagnosis_id ConfigInspection#diagnosis_id}
  */
  readonly diagnosisId?: string;
  /**
  * Diagnosis Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#diagnosis_name ConfigInspection#diagnosis_name}
  */
  readonly diagnosisName: string;
}

export function configInspectionDiagnosisObjectRequestListStructToTerraform(struct?: ConfigInspectionDiagnosisObjectRequestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    diagnosis_account_id: cdktf.stringToTerraform(struct!.diagnosisAccountId),
    diagnosis_id: cdktf.stringToTerraform(struct!.diagnosisId),
    diagnosis_name: cdktf.stringToTerraform(struct!.diagnosisName),
  }
}


export function configInspectionDiagnosisObjectRequestListStructToHclTerraform(struct?: ConfigInspectionDiagnosisObjectRequestListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    diagnosis_account_id: {
      value: cdktf.stringToHclTerraform(struct!.diagnosisAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diagnosis_id: {
      value: cdktf.stringToHclTerraform(struct!.diagnosisId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diagnosis_name: {
      value: cdktf.stringToHclTerraform(struct!.diagnosisName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigInspectionDiagnosisObjectRequestListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConfigInspectionDiagnosisObjectRequestListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diagnosisAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosisAccountId = this._diagnosisAccountId;
    }
    if (this._diagnosisId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosisId = this._diagnosisId;
    }
    if (this._diagnosisName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosisName = this._diagnosisName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigInspectionDiagnosisObjectRequestListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diagnosisAccountId = undefined;
      this._diagnosisId = undefined;
      this._diagnosisName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diagnosisAccountId = value.diagnosisAccountId;
      this._diagnosisId = value.diagnosisId;
      this._diagnosisName = value.diagnosisName;
    }
  }

  // diagnosis_account_id - computed: false, optional: false, required: true
  private _diagnosisAccountId?: string; 
  public get diagnosisAccountId() {
    return this.getStringAttribute('diagnosis_account_id');
  }
  public set diagnosisAccountId(value: string) {
    this._diagnosisAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisAccountIdInput() {
    return this._diagnosisAccountId;
  }

  // diagnosis_id - computed: false, optional: true, required: false
  private _diagnosisId?: string; 
  public get diagnosisId() {
    return this.getStringAttribute('diagnosis_id');
  }
  public set diagnosisId(value: string) {
    this._diagnosisId = value;
  }
  public resetDiagnosisId() {
    this._diagnosisId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisIdInput() {
    return this._diagnosisId;
  }

  // diagnosis_name - computed: false, optional: false, required: true
  private _diagnosisName?: string; 
  public get diagnosisName() {
    return this.getStringAttribute('diagnosis_name');
  }
  public set diagnosisName(value: string) {
    this._diagnosisName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisNameInput() {
    return this._diagnosisName;
  }
}

export class ConfigInspectionDiagnosisObjectRequestListStructList extends cdktf.ComplexList {
  public internalValue? : ConfigInspectionDiagnosisObjectRequestListStruct[] | cdktf.IResolvable

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
  public get(index: number): ConfigInspectionDiagnosisObjectRequestListStructOutputReference {
    return new ConfigInspectionDiagnosisObjectRequestListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigInspectionScheduleRequest {
  /**
  * Diagnosis Start Time (5-minute interval, 00~23 hours, 00~55 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#diagnosis_start_time_pattern ConfigInspection#diagnosis_start_time_pattern}
  */
  readonly diagnosisStartTimePattern?: string;
  /**
  * Diagnosis Schedule Type (Monthly, Weekly, Daily)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#frequency_type ConfigInspection#frequency_type}
  */
  readonly frequencyType?: string;
  /**
  * Diagnosis Schedule (0131, MondaySunday, everyDay)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#frequency_value ConfigInspection#frequency_value}
  */
  readonly frequencyValue?: string;
  /**
  * Use Best Practice Checklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#use_diagnosis_check_type_bp ConfigInspection#use_diagnosis_check_type_bp}
  */
  readonly useDiagnosisCheckTypeBp?: string;
  /**
  * Use SSI Checklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#use_diagnosis_check_type_ssi ConfigInspection#use_diagnosis_check_type_ssi}
  */
  readonly useDiagnosisCheckTypeSsi?: string;
}

export function configInspectionScheduleRequestToTerraform(struct?: ConfigInspectionScheduleRequestOutputReference | ConfigInspectionScheduleRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    diagnosis_start_time_pattern: cdktf.stringToTerraform(struct!.diagnosisStartTimePattern),
    frequency_type: cdktf.stringToTerraform(struct!.frequencyType),
    frequency_value: cdktf.stringToTerraform(struct!.frequencyValue),
    use_diagnosis_check_type_bp: cdktf.stringToTerraform(struct!.useDiagnosisCheckTypeBp),
    use_diagnosis_check_type_ssi: cdktf.stringToTerraform(struct!.useDiagnosisCheckTypeSsi),
  }
}


export function configInspectionScheduleRequestToHclTerraform(struct?: ConfigInspectionScheduleRequestOutputReference | ConfigInspectionScheduleRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    diagnosis_start_time_pattern: {
      value: cdktf.stringToHclTerraform(struct!.diagnosisStartTimePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency_type: {
      value: cdktf.stringToHclTerraform(struct!.frequencyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frequency_value: {
      value: cdktf.stringToHclTerraform(struct!.frequencyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_diagnosis_check_type_bp: {
      value: cdktf.stringToHclTerraform(struct!.useDiagnosisCheckTypeBp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_diagnosis_check_type_ssi: {
      value: cdktf.stringToHclTerraform(struct!.useDiagnosisCheckTypeSsi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigInspectionScheduleRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConfigInspectionScheduleRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diagnosisStartTimePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosisStartTimePattern = this._diagnosisStartTimePattern;
    }
    if (this._frequencyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyType = this._frequencyType;
    }
    if (this._frequencyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequencyValue = this._frequencyValue;
    }
    if (this._useDiagnosisCheckTypeBp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDiagnosisCheckTypeBp = this._useDiagnosisCheckTypeBp;
    }
    if (this._useDiagnosisCheckTypeSsi !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDiagnosisCheckTypeSsi = this._useDiagnosisCheckTypeSsi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigInspectionScheduleRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diagnosisStartTimePattern = undefined;
      this._frequencyType = undefined;
      this._frequencyValue = undefined;
      this._useDiagnosisCheckTypeBp = undefined;
      this._useDiagnosisCheckTypeSsi = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diagnosisStartTimePattern = value.diagnosisStartTimePattern;
      this._frequencyType = value.frequencyType;
      this._frequencyValue = value.frequencyValue;
      this._useDiagnosisCheckTypeBp = value.useDiagnosisCheckTypeBp;
      this._useDiagnosisCheckTypeSsi = value.useDiagnosisCheckTypeSsi;
    }
  }

  // diagnosis_start_time_pattern - computed: false, optional: true, required: false
  private _diagnosisStartTimePattern?: string; 
  public get diagnosisStartTimePattern() {
    return this.getStringAttribute('diagnosis_start_time_pattern');
  }
  public set diagnosisStartTimePattern(value: string) {
    this._diagnosisStartTimePattern = value;
  }
  public resetDiagnosisStartTimePattern() {
    this._diagnosisStartTimePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisStartTimePatternInput() {
    return this._diagnosisStartTimePattern;
  }

  // frequency_type - computed: false, optional: true, required: false
  private _frequencyType?: string; 
  public get frequencyType() {
    return this.getStringAttribute('frequency_type');
  }
  public set frequencyType(value: string) {
    this._frequencyType = value;
  }
  public resetFrequencyType() {
    this._frequencyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyTypeInput() {
    return this._frequencyType;
  }

  // frequency_value - computed: false, optional: true, required: false
  private _frequencyValue?: string; 
  public get frequencyValue() {
    return this.getStringAttribute('frequency_value');
  }
  public set frequencyValue(value: string) {
    this._frequencyValue = value;
  }
  public resetFrequencyValue() {
    this._frequencyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyValueInput() {
    return this._frequencyValue;
  }

  // use_diagnosis_check_type_bp - computed: false, optional: true, required: false
  private _useDiagnosisCheckTypeBp?: string; 
  public get useDiagnosisCheckTypeBp() {
    return this.getStringAttribute('use_diagnosis_check_type_bp');
  }
  public set useDiagnosisCheckTypeBp(value: string) {
    this._useDiagnosisCheckTypeBp = value;
  }
  public resetUseDiagnosisCheckTypeBp() {
    this._useDiagnosisCheckTypeBp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDiagnosisCheckTypeBpInput() {
    return this._useDiagnosisCheckTypeBp;
  }

  // use_diagnosis_check_type_ssi - computed: false, optional: true, required: false
  private _useDiagnosisCheckTypeSsi?: string; 
  public get useDiagnosisCheckTypeSsi() {
    return this.getStringAttribute('use_diagnosis_check_type_ssi');
  }
  public set useDiagnosisCheckTypeSsi(value: string) {
    this._useDiagnosisCheckTypeSsi = value;
  }
  public resetUseDiagnosisCheckTypeSsi() {
    this._useDiagnosisCheckTypeSsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDiagnosisCheckTypeSsiInput() {
    return this._useDiagnosisCheckTypeSsi;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection samsungcloudplatform_config_inspection}
*/
export class ConfigInspection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_config_inspection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigInspection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigInspection to import
  * @param importFromId The id of the existing ConfigInspection that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigInspection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_config_inspection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/config_inspection samsungcloudplatform_config_inspection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigInspectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigInspectionConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_config_inspection',
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
    this._cspType = config.cspType;
    this._diagnosisCheckType = config.diagnosisCheckType;
    this._diagnosisType = config.diagnosisType;
    this._id = config.id;
    this._planType = config.planType;
    this._tags = config.tags;
    this._authKeyRequest.internalValue = config.authKeyRequest;
    this._diagnosisObjectRequestList.internalValue = config.diagnosisObjectRequestList;
    this._scheduleRequest.internalValue = config.scheduleRequest;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // csp_type - computed: false, optional: true, required: false
  private _cspType?: string; 
  public get cspType() {
    return this.getStringAttribute('csp_type');
  }
  public set cspType(value: string) {
    this._cspType = value;
  }
  public resetCspType() {
    this._cspType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspTypeInput() {
    return this._cspType;
  }

  // diagnosis_check_type - computed: false, optional: true, required: false
  private _diagnosisCheckType?: string; 
  public get diagnosisCheckType() {
    return this.getStringAttribute('diagnosis_check_type');
  }
  public set diagnosisCheckType(value: string) {
    this._diagnosisCheckType = value;
  }
  public resetDiagnosisCheckType() {
    this._diagnosisCheckType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisCheckTypeInput() {
    return this._diagnosisCheckType;
  }

  // diagnosis_type - computed: false, optional: true, required: false
  private _diagnosisType?: string; 
  public get diagnosisType() {
    return this.getStringAttribute('diagnosis_type');
  }
  public set diagnosisType(value: string) {
    this._diagnosisType = value;
  }
  public resetDiagnosisType() {
    this._diagnosisType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisTypeInput() {
    return this._diagnosisType;
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

  // plan_type - computed: false, optional: true, required: false
  private _planType?: string; 
  public get planType() {
    return this.getStringAttribute('plan_type');
  }
  public set planType(value: string) {
    this._planType = value;
  }
  public resetPlanType() {
    this._planType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planTypeInput() {
    return this._planType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // auth_key_request - computed: false, optional: true, required: false
  private _authKeyRequest = new ConfigInspectionAuthKeyRequestOutputReference(this, "auth_key_request");
  public get authKeyRequest() {
    return this._authKeyRequest;
  }
  public putAuthKeyRequest(value: ConfigInspectionAuthKeyRequest) {
    this._authKeyRequest.internalValue = value;
  }
  public resetAuthKeyRequest() {
    this._authKeyRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyRequestInput() {
    return this._authKeyRequest.internalValue;
  }

  // diagnosis_object_request_list - computed: false, optional: false, required: true
  private _diagnosisObjectRequestList = new ConfigInspectionDiagnosisObjectRequestListStructList(this, "diagnosis_object_request_list", false);
  public get diagnosisObjectRequestList() {
    return this._diagnosisObjectRequestList;
  }
  public putDiagnosisObjectRequestList(value: ConfigInspectionDiagnosisObjectRequestListStruct[] | cdktf.IResolvable) {
    this._diagnosisObjectRequestList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosisObjectRequestListInput() {
    return this._diagnosisObjectRequestList.internalValue;
  }

  // schedule_request - computed: false, optional: true, required: false
  private _scheduleRequest = new ConfigInspectionScheduleRequestOutputReference(this, "schedule_request");
  public get scheduleRequest() {
    return this._scheduleRequest;
  }
  public putScheduleRequest(value: ConfigInspectionScheduleRequest) {
    this._scheduleRequest.internalValue = value;
  }
  public resetScheduleRequest() {
    this._scheduleRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleRequestInput() {
    return this._scheduleRequest.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      csp_type: cdktf.stringToTerraform(this._cspType),
      diagnosis_check_type: cdktf.stringToTerraform(this._diagnosisCheckType),
      diagnosis_type: cdktf.stringToTerraform(this._diagnosisType),
      id: cdktf.stringToTerraform(this._id),
      plan_type: cdktf.stringToTerraform(this._planType),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      auth_key_request: configInspectionAuthKeyRequestToTerraform(this._authKeyRequest.internalValue),
      diagnosis_object_request_list: cdktf.listMapper(configInspectionDiagnosisObjectRequestListStructToTerraform, true)(this._diagnosisObjectRequestList.internalValue),
      schedule_request: configInspectionScheduleRequestToTerraform(this._scheduleRequest.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      csp_type: {
        value: cdktf.stringToHclTerraform(this._cspType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnosis_check_type: {
        value: cdktf.stringToHclTerraform(this._diagnosisCheckType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnosis_type: {
        value: cdktf.stringToHclTerraform(this._diagnosisType),
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
      plan_type: {
        value: cdktf.stringToHclTerraform(this._planType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      auth_key_request: {
        value: configInspectionAuthKeyRequestToHclTerraform(this._authKeyRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigInspectionAuthKeyRequestList",
      },
      diagnosis_object_request_list: {
        value: cdktf.listMapperHcl(configInspectionDiagnosisObjectRequestListStructToHclTerraform, true)(this._diagnosisObjectRequestList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigInspectionDiagnosisObjectRequestListStructList",
      },
      schedule_request: {
        value: configInspectionScheduleRequestToHclTerraform(this._scheduleRequest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigInspectionScheduleRequestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
