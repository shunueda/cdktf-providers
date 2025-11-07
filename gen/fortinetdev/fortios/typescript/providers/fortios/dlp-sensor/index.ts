// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlpSensorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#comment DlpSensor#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#dlp_log DlpSensor#dlp_log}
  */
  readonly dlpLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#dynamic_sort_subtable DlpSensor#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#eval DlpSensor#eval}
  */
  readonly eval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#extended_log DlpSensor#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#feature_set DlpSensor#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#flow_based DlpSensor#flow_based}
  */
  readonly flowBased?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#full_archive_proto DlpSensor#full_archive_proto}
  */
  readonly fullArchiveProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#get_all_tables DlpSensor#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#id DlpSensor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#match_type DlpSensor#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#nac_quar_log DlpSensor#nac_quar_log}
  */
  readonly nacQuarLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#name DlpSensor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#options DlpSensor#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#replacemsg_group DlpSensor#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#summary_proto DlpSensor#summary_proto}
  */
  readonly summaryProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#vdomparam DlpSensor#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#entries DlpSensor#entries}
  */
  readonly entries?: DlpSensorEntries[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#filter DlpSensor#filter}
  */
  readonly filter?: DlpSensorFilter[] | cdktf.IResolvable;
}
export interface DlpSensorEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#count DlpSensor#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#dictionary DlpSensor#dictionary}
  */
  readonly dictionary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#id DlpSensor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#status DlpSensor#status}
  */
  readonly status?: string;
}

export function dlpSensorEntriesToTerraform(struct?: DlpSensorEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    dictionary: cdktf.stringToTerraform(struct!.dictionary),
    id: cdktf.numberToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dlpSensorEntriesToHclTerraform(struct?: DlpSensorEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dictionary: {
      value: cdktf.stringToHclTerraform(struct!.dictionary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpSensorEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpSensorEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._dictionary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpSensorEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._dictionary = undefined;
      this._id = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._dictionary = value.dictionary;
      this._id = value.id;
      this._status = value.status;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary?: string; 
  public get dictionary() {
    return this.getStringAttribute('dictionary');
  }
  public set dictionary(value: string) {
    this._dictionary = value;
  }
  public resetDictionary() {
    this._dictionary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DlpSensorEntriesList extends cdktf.ComplexList {
  public internalValue? : DlpSensorEntries[] | cdktf.IResolvable

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
  public get(index: number): DlpSensorEntriesOutputReference {
    return new DlpSensorEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlpSensorFilterFpSensitivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#name DlpSensor#name}
  */
  readonly name?: string;
}

export function dlpSensorFilterFpSensitivityToTerraform(struct?: DlpSensorFilterFpSensitivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dlpSensorFilterFpSensitivityToHclTerraform(struct?: DlpSensorFilterFpSensitivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpSensorFilterFpSensitivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpSensorFilterFpSensitivity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpSensorFilterFpSensitivity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DlpSensorFilterFpSensitivityList extends cdktf.ComplexList {
  public internalValue? : DlpSensorFilterFpSensitivity[] | cdktf.IResolvable

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
  public get(index: number): DlpSensorFilterFpSensitivityOutputReference {
    return new DlpSensorFilterFpSensitivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlpSensorFilterSensitivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#name DlpSensor#name}
  */
  readonly name?: string;
}

export function dlpSensorFilterSensitivityToTerraform(struct?: DlpSensorFilterSensitivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dlpSensorFilterSensitivityToHclTerraform(struct?: DlpSensorFilterSensitivity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpSensorFilterSensitivityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpSensorFilterSensitivity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpSensorFilterSensitivity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class DlpSensorFilterSensitivityList extends cdktf.ComplexList {
  public internalValue? : DlpSensorFilterSensitivity[] | cdktf.IResolvable

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
  public get(index: number): DlpSensorFilterSensitivityOutputReference {
    return new DlpSensorFilterSensitivityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlpSensorFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#action DlpSensor#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#archive DlpSensor#archive}
  */
  readonly archive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#company_identifier DlpSensor#company_identifier}
  */
  readonly companyIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#expiry DlpSensor#expiry}
  */
  readonly expiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#file_size DlpSensor#file_size}
  */
  readonly fileSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#file_type DlpSensor#file_type}
  */
  readonly fileType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#filter_by DlpSensor#filter_by}
  */
  readonly filterBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#id DlpSensor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#match_percentage DlpSensor#match_percentage}
  */
  readonly matchPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#name DlpSensor#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#proto DlpSensor#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#regexp DlpSensor#regexp}
  */
  readonly regexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#severity DlpSensor#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#type DlpSensor#type}
  */
  readonly type?: string;
  /**
  * fp_sensitivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#fp_sensitivity DlpSensor#fp_sensitivity}
  */
  readonly fpSensitivity?: DlpSensorFilterFpSensitivity[] | cdktf.IResolvable;
  /**
  * sensitivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#sensitivity DlpSensor#sensitivity}
  */
  readonly sensitivity?: DlpSensorFilterSensitivity[] | cdktf.IResolvable;
}

export function dlpSensorFilterToTerraform(struct?: DlpSensorFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    archive: cdktf.stringToTerraform(struct!.archive),
    company_identifier: cdktf.stringToTerraform(struct!.companyIdentifier),
    expiry: cdktf.stringToTerraform(struct!.expiry),
    file_size: cdktf.numberToTerraform(struct!.fileSize),
    file_type: cdktf.numberToTerraform(struct!.fileType),
    filter_by: cdktf.stringToTerraform(struct!.filterBy),
    id: cdktf.numberToTerraform(struct!.id),
    match_percentage: cdktf.numberToTerraform(struct!.matchPercentage),
    name: cdktf.stringToTerraform(struct!.name),
    proto: cdktf.stringToTerraform(struct!.proto),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    severity: cdktf.stringToTerraform(struct!.severity),
    type: cdktf.stringToTerraform(struct!.type),
    fp_sensitivity: cdktf.listMapper(dlpSensorFilterFpSensitivityToTerraform, true)(struct!.fpSensitivity),
    sensitivity: cdktf.listMapper(dlpSensorFilterSensitivityToTerraform, true)(struct!.sensitivity),
  }
}


export function dlpSensorFilterToHclTerraform(struct?: DlpSensorFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    archive: {
      value: cdktf.stringToHclTerraform(struct!.archive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    company_identifier: {
      value: cdktf.stringToHclTerraform(struct!.companyIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry: {
      value: cdktf.stringToHclTerraform(struct!.expiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_size: {
      value: cdktf.numberToHclTerraform(struct!.fileSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_type: {
      value: cdktf.numberToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_by: {
      value: cdktf.stringToHclTerraform(struct!.filterBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_percentage: {
      value: cdktf.numberToHclTerraform(struct!.matchPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fp_sensitivity: {
      value: cdktf.listMapperHcl(dlpSensorFilterFpSensitivityToHclTerraform, true)(struct!.fpSensitivity),
      isBlock: true,
      type: "list",
      storageClassType: "DlpSensorFilterFpSensitivityList",
    },
    sensitivity: {
      value: cdktf.listMapperHcl(dlpSensorFilterSensitivityToHclTerraform, true)(struct!.sensitivity),
      isBlock: true,
      type: "set",
      storageClassType: "DlpSensorFilterSensitivityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpSensorFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpSensorFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._archive !== undefined) {
      hasAnyValues = true;
      internalValueResult.archive = this._archive;
    }
    if (this._companyIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.companyIdentifier = this._companyIdentifier;
    }
    if (this._expiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiry = this._expiry;
    }
    if (this._fileSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSize = this._fileSize;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._filterBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterBy = this._filterBy;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._matchPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPercentage = this._matchPercentage;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._fpSensitivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpSensitivity = this._fpSensitivity?.internalValue;
    }
    if (this._sensitivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivity = this._sensitivity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpSensorFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._archive = undefined;
      this._companyIdentifier = undefined;
      this._expiry = undefined;
      this._fileSize = undefined;
      this._fileType = undefined;
      this._filterBy = undefined;
      this._id = undefined;
      this._matchPercentage = undefined;
      this._name = undefined;
      this._proto = undefined;
      this._regexp = undefined;
      this._severity = undefined;
      this._type = undefined;
      this._fpSensitivity.internalValue = undefined;
      this._sensitivity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._archive = value.archive;
      this._companyIdentifier = value.companyIdentifier;
      this._expiry = value.expiry;
      this._fileSize = value.fileSize;
      this._fileType = value.fileType;
      this._filterBy = value.filterBy;
      this._id = value.id;
      this._matchPercentage = value.matchPercentage;
      this._name = value.name;
      this._proto = value.proto;
      this._regexp = value.regexp;
      this._severity = value.severity;
      this._type = value.type;
      this._fpSensitivity.internalValue = value.fpSensitivity;
      this._sensitivity.internalValue = value.sensitivity;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // archive - computed: true, optional: true, required: false
  private _archive?: string; 
  public get archive() {
    return this.getStringAttribute('archive');
  }
  public set archive(value: string) {
    this._archive = value;
  }
  public resetArchive() {
    this._archive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveInput() {
    return this._archive;
  }

  // company_identifier - computed: false, optional: true, required: false
  private _companyIdentifier?: string; 
  public get companyIdentifier() {
    return this.getStringAttribute('company_identifier');
  }
  public set companyIdentifier(value: string) {
    this._companyIdentifier = value;
  }
  public resetCompanyIdentifier() {
    this._companyIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdentifierInput() {
    return this._companyIdentifier;
  }

  // expiry - computed: true, optional: true, required: false
  private _expiry?: string; 
  public get expiry() {
    return this.getStringAttribute('expiry');
  }
  public set expiry(value: string) {
    this._expiry = value;
  }
  public resetExpiry() {
    this._expiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryInput() {
    return this._expiry;
  }

  // file_size - computed: true, optional: true, required: false
  private _fileSize?: number; 
  public get fileSize() {
    return this.getNumberAttribute('file_size');
  }
  public set fileSize(value: number) {
    this._fileSize = value;
  }
  public resetFileSize() {
    this._fileSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSizeInput() {
    return this._fileSize;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: number; 
  public get fileType() {
    return this.getNumberAttribute('file_type');
  }
  public set fileType(value: number) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }

  // filter_by - computed: true, optional: true, required: false
  private _filterBy?: string; 
  public get filterBy() {
    return this.getStringAttribute('filter_by');
  }
  public set filterBy(value: string) {
    this._filterBy = value;
  }
  public resetFilterBy() {
    this._filterBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByInput() {
    return this._filterBy;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // match_percentage - computed: true, optional: true, required: false
  private _matchPercentage?: number; 
  public get matchPercentage() {
    return this.getNumberAttribute('match_percentage');
  }
  public set matchPercentage(value: number) {
    this._matchPercentage = value;
  }
  public resetMatchPercentage() {
    this._matchPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPercentageInput() {
    return this._matchPercentage;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // regexp - computed: false, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // fp_sensitivity - computed: false, optional: true, required: false
  private _fpSensitivity = new DlpSensorFilterFpSensitivityList(this, "fp_sensitivity", false);
  public get fpSensitivity() {
    return this._fpSensitivity;
  }
  public putFpSensitivity(value: DlpSensorFilterFpSensitivity[] | cdktf.IResolvable) {
    this._fpSensitivity.internalValue = value;
  }
  public resetFpSensitivity() {
    this._fpSensitivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpSensitivityInput() {
    return this._fpSensitivity.internalValue;
  }

  // sensitivity - computed: false, optional: true, required: false
  private _sensitivity = new DlpSensorFilterSensitivityList(this, "sensitivity", true);
  public get sensitivity() {
    return this._sensitivity;
  }
  public putSensitivity(value: DlpSensorFilterSensitivity[] | cdktf.IResolvable) {
    this._sensitivity.internalValue = value;
  }
  public resetSensitivity() {
    this._sensitivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityInput() {
    return this._sensitivity.internalValue;
  }
}

export class DlpSensorFilterList extends cdktf.ComplexList {
  public internalValue? : DlpSensorFilter[] | cdktf.IResolvable

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
  public get(index: number): DlpSensorFilterOutputReference {
    return new DlpSensorFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor fortios_dlp_sensor}
*/
export class DlpSensor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_dlp_sensor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlpSensor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlpSensor to import
  * @param importFromId The id of the existing DlpSensor that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlpSensor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_dlp_sensor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/dlp_sensor fortios_dlp_sensor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlpSensorConfig
  */
  public constructor(scope: Construct, id: string, config: DlpSensorConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_dlp_sensor',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._dlpLog = config.dlpLog;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._eval = config.eval;
    this._extendedLog = config.extendedLog;
    this._featureSet = config.featureSet;
    this._flowBased = config.flowBased;
    this._fullArchiveProto = config.fullArchiveProto;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._matchType = config.matchType;
    this._nacQuarLog = config.nacQuarLog;
    this._name = config.name;
    this._options = config.options;
    this._replacemsgGroup = config.replacemsgGroup;
    this._summaryProto = config.summaryProto;
    this._vdomparam = config.vdomparam;
    this._entries.internalValue = config.entries;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dlp_log - computed: true, optional: true, required: false
  private _dlpLog?: string; 
  public get dlpLog() {
    return this.getStringAttribute('dlp_log');
  }
  public set dlpLog(value: string) {
    this._dlpLog = value;
  }
  public resetDlpLog() {
    this._dlpLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpLogInput() {
    return this._dlpLog;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // eval - computed: false, optional: true, required: false
  private _eval?: string; 
  public get eval() {
    return this.getStringAttribute('eval');
  }
  public set eval(value: string) {
    this._eval = value;
  }
  public resetEval() {
    this._eval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evalInput() {
    return this._eval;
  }

  // extended_log - computed: true, optional: true, required: false
  private _extendedLog?: string; 
  public get extendedLog() {
    return this.getStringAttribute('extended_log');
  }
  public set extendedLog(value: string) {
    this._extendedLog = value;
  }
  public resetExtendedLog() {
    this._extendedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLogInput() {
    return this._extendedLog;
  }

  // feature_set - computed: true, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
  }

  // flow_based - computed: false, optional: true, required: false
  private _flowBased?: string; 
  public get flowBased() {
    return this.getStringAttribute('flow_based');
  }
  public set flowBased(value: string) {
    this._flowBased = value;
  }
  public resetFlowBased() {
    this._flowBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowBasedInput() {
    return this._flowBased;
  }

  // full_archive_proto - computed: false, optional: true, required: false
  private _fullArchiveProto?: string; 
  public get fullArchiveProto() {
    return this.getStringAttribute('full_archive_proto');
  }
  public set fullArchiveProto(value: string) {
    this._fullArchiveProto = value;
  }
  public resetFullArchiveProto() {
    this._fullArchiveProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullArchiveProtoInput() {
    return this._fullArchiveProto;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // match_type - computed: true, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // nac_quar_log - computed: true, optional: true, required: false
  private _nacQuarLog?: string; 
  public get nacQuarLog() {
    return this.getStringAttribute('nac_quar_log');
  }
  public set nacQuarLog(value: string) {
    this._nacQuarLog = value;
  }
  public resetNacQuarLog() {
    this._nacQuarLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacQuarLogInput() {
    return this._nacQuarLog;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // summary_proto - computed: false, optional: true, required: false
  private _summaryProto?: string; 
  public get summaryProto() {
    return this.getStringAttribute('summary_proto');
  }
  public set summaryProto(value: string) {
    this._summaryProto = value;
  }
  public resetSummaryProto() {
    this._summaryProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryProtoInput() {
    return this._summaryProto;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new DlpSensorEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: DlpSensorEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DlpSensorFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DlpSensorFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      dlp_log: cdktf.stringToTerraform(this._dlpLog),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      eval: cdktf.stringToTerraform(this._eval),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
      feature_set: cdktf.stringToTerraform(this._featureSet),
      flow_based: cdktf.stringToTerraform(this._flowBased),
      full_archive_proto: cdktf.stringToTerraform(this._fullArchiveProto),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      match_type: cdktf.stringToTerraform(this._matchType),
      nac_quar_log: cdktf.stringToTerraform(this._nacQuarLog),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.stringToTerraform(this._options),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      summary_proto: cdktf.stringToTerraform(this._summaryProto),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      entries: cdktf.listMapper(dlpSensorEntriesToTerraform, true)(this._entries.internalValue),
      filter: cdktf.listMapper(dlpSensorFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dlp_log: {
        value: cdktf.stringToHclTerraform(this._dlpLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eval: {
        value: cdktf.stringToHclTerraform(this._eval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_log: {
        value: cdktf.stringToHclTerraform(this._extendedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_set: {
        value: cdktf.stringToHclTerraform(this._featureSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_based: {
        value: cdktf.stringToHclTerraform(this._flowBased),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_archive_proto: {
        value: cdktf.stringToHclTerraform(this._fullArchiveProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      match_type: {
        value: cdktf.stringToHclTerraform(this._matchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nac_quar_log: {
        value: cdktf.stringToHclTerraform(this._nacQuarLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.stringToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      summary_proto: {
        value: cdktf.stringToHclTerraform(this._summaryProto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entries: {
        value: cdktf.listMapperHcl(dlpSensorEntriesToHclTerraform, true)(this._entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlpSensorEntriesList",
      },
      filter: {
        value: cdktf.listMapperHcl(dlpSensorFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DlpSensorFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
