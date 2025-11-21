// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudQuotasQuotaAlarmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#enable_details DataAlicloudQuotasQuotaAlarms#enable_details}
  */
  readonly enableDetails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#id DataAlicloudQuotasQuotaAlarms#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#ids DataAlicloudQuotasQuotaAlarms#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#name_regex DataAlicloudQuotasQuotaAlarms#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#output_file DataAlicloudQuotasQuotaAlarms#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#product_code DataAlicloudQuotasQuotaAlarms#product_code}
  */
  readonly productCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#quota_action_code DataAlicloudQuotasQuotaAlarms#quota_action_code}
  */
  readonly quotaActionCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#quota_alarm_name DataAlicloudQuotasQuotaAlarms#quota_alarm_name}
  */
  readonly quotaAlarmName?: string;
  /**
  * quota_dimensions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#quota_dimensions DataAlicloudQuotasQuotaAlarms#quota_dimensions}
  */
  readonly quotaDimensions?: DataAlicloudQuotasQuotaAlarmsQuotaDimensions[] | cdktf.IResolvable;
}
export interface DataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensions {
}

export function dataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensionsToTerraform(struct?: DataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensionsToHclTerraform(struct?: DataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensionsOutputReference {
    return new DataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudQuotasQuotaAlarmsAlarms {
}

export function dataAlicloudQuotasQuotaAlarmsAlarmsToTerraform(struct?: DataAlicloudQuotasQuotaAlarmsAlarms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudQuotasQuotaAlarmsAlarmsToHclTerraform(struct?: DataAlicloudQuotasQuotaAlarmsAlarms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudQuotasQuotaAlarmsAlarmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudQuotasQuotaAlarmsAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudQuotasQuotaAlarmsAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alarm_id - computed: true, optional: false, required: false
  public get alarmId() {
    return this.getStringAttribute('alarm_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // product_code - computed: true, optional: false, required: false
  public get productCode() {
    return this.getStringAttribute('product_code');
  }

  // quota_action_code - computed: true, optional: false, required: false
  public get quotaActionCode() {
    return this.getStringAttribute('quota_action_code');
  }

  // quota_alarm_name - computed: true, optional: false, required: false
  public get quotaAlarmName() {
    return this.getStringAttribute('quota_alarm_name');
  }

  // quota_dimensions - computed: true, optional: false, required: false
  private _quotaDimensions = new DataAlicloudQuotasQuotaAlarmsAlarmsQuotaDimensionsList(this, "quota_dimensions", false);
  public get quotaDimensions() {
    return this._quotaDimensions;
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // threshold_percent - computed: true, optional: false, required: false
  public get thresholdPercent() {
    return this.getNumberAttribute('threshold_percent');
  }

  // web_hook - computed: true, optional: false, required: false
  public get webHook() {
    return this.getStringAttribute('web_hook');
  }
}

export class DataAlicloudQuotasQuotaAlarmsAlarmsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudQuotasQuotaAlarmsAlarmsOutputReference {
    return new DataAlicloudQuotasQuotaAlarmsAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudQuotasQuotaAlarmsQuotaDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#key DataAlicloudQuotasQuotaAlarms#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#value DataAlicloudQuotasQuotaAlarms#value}
  */
  readonly value?: string;
}

export function dataAlicloudQuotasQuotaAlarmsQuotaDimensionsToTerraform(struct?: DataAlicloudQuotasQuotaAlarmsQuotaDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataAlicloudQuotasQuotaAlarmsQuotaDimensionsToHclTerraform(struct?: DataAlicloudQuotasQuotaAlarmsQuotaDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAlicloudQuotasQuotaAlarmsQuotaDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudQuotasQuotaAlarmsQuotaDimensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudQuotasQuotaAlarmsQuotaDimensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataAlicloudQuotasQuotaAlarmsQuotaDimensionsList extends cdktf.ComplexList {
  public internalValue? : DataAlicloudQuotasQuotaAlarmsQuotaDimensions[] | cdktf.IResolvable

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
  public get(index: number): DataAlicloudQuotasQuotaAlarmsQuotaDimensionsOutputReference {
    return new DataAlicloudQuotasQuotaAlarmsQuotaDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms alicloud_quotas_quota_alarms}
*/
export class DataAlicloudQuotasQuotaAlarms extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_quotas_quota_alarms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudQuotasQuotaAlarms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudQuotasQuotaAlarms to import
  * @param importFromId The id of the existing DataAlicloudQuotasQuotaAlarms that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudQuotasQuotaAlarms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_quotas_quota_alarms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/quotas_quota_alarms alicloud_quotas_quota_alarms} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudQuotasQuotaAlarmsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudQuotasQuotaAlarmsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_quotas_quota_alarms',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDetails = config.enableDetails;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._productCode = config.productCode;
    this._quotaActionCode = config.quotaActionCode;
    this._quotaAlarmName = config.quotaAlarmName;
    this._quotaDimensions.internalValue = config.quotaDimensions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alarms - computed: true, optional: false, required: false
  private _alarms = new DataAlicloudQuotasQuotaAlarmsAlarmsList(this, "alarms", false);
  public get alarms() {
    return this._alarms;
  }

  // enable_details - computed: false, optional: true, required: false
  private _enableDetails?: boolean | cdktf.IResolvable; 
  public get enableDetails() {
    return this.getBooleanAttribute('enable_details');
  }
  public set enableDetails(value: boolean | cdktf.IResolvable) {
    this._enableDetails = value;
  }
  public resetEnableDetails() {
    this._enableDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDetailsInput() {
    return this._enableDetails;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // product_code - computed: false, optional: true, required: false
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  public resetProductCode() {
    this._productCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // quota_action_code - computed: false, optional: true, required: false
  private _quotaActionCode?: string; 
  public get quotaActionCode() {
    return this.getStringAttribute('quota_action_code');
  }
  public set quotaActionCode(value: string) {
    this._quotaActionCode = value;
  }
  public resetQuotaActionCode() {
    this._quotaActionCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaActionCodeInput() {
    return this._quotaActionCode;
  }

  // quota_alarm_name - computed: false, optional: true, required: false
  private _quotaAlarmName?: string; 
  public get quotaAlarmName() {
    return this.getStringAttribute('quota_alarm_name');
  }
  public set quotaAlarmName(value: string) {
    this._quotaAlarmName = value;
  }
  public resetQuotaAlarmName() {
    this._quotaAlarmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaAlarmNameInput() {
    return this._quotaAlarmName;
  }

  // quota_dimensions - computed: false, optional: true, required: false
  private _quotaDimensions = new DataAlicloudQuotasQuotaAlarmsQuotaDimensionsList(this, "quota_dimensions", false);
  public get quotaDimensions() {
    return this._quotaDimensions;
  }
  public putQuotaDimensions(value: DataAlicloudQuotasQuotaAlarmsQuotaDimensions[] | cdktf.IResolvable) {
    this._quotaDimensions.internalValue = value;
  }
  public resetQuotaDimensions() {
    this._quotaDimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaDimensionsInput() {
    return this._quotaDimensions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_details: cdktf.booleanToTerraform(this._enableDetails),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      product_code: cdktf.stringToTerraform(this._productCode),
      quota_action_code: cdktf.stringToTerraform(this._quotaActionCode),
      quota_alarm_name: cdktf.stringToTerraform(this._quotaAlarmName),
      quota_dimensions: cdktf.listMapper(dataAlicloudQuotasQuotaAlarmsQuotaDimensionsToTerraform, true)(this._quotaDimensions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_details: {
        value: cdktf.booleanToHclTerraform(this._enableDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_code: {
        value: cdktf.stringToHclTerraform(this._productCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_action_code: {
        value: cdktf.stringToHclTerraform(this._quotaActionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_alarm_name: {
        value: cdktf.stringToHclTerraform(this._quotaAlarmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_dimensions: {
        value: cdktf.listMapperHcl(dataAlicloudQuotasQuotaAlarmsQuotaDimensionsToHclTerraform, true)(this._quotaDimensions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAlicloudQuotasQuotaAlarmsQuotaDimensionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
