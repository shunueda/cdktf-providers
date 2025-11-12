// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosResourceTrackingCpuOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#id DataThunderDdosResourceTrackingCpuOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#oper DataThunderDdosResourceTrackingCpuOper#oper}
  */
  readonly oper?: DataThunderDdosResourceTrackingCpuOperOper;
}
export interface DataThunderDdosResourceTrackingCpuOperOperTimestampsEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#absolute_cpu_percent DataThunderDdosResourceTrackingCpuOper#absolute_cpu_percent}
  */
  readonly absoluteCpuPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#address DataThunderDdosResourceTrackingCpuOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#entry DataThunderDdosResourceTrackingCpuOper#entry}
  */
  readonly entry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#relative_cpu_percent DataThunderDdosResourceTrackingCpuOper#relative_cpu_percent}
  */
  readonly relativeCpuPercent?: string;
}

export function dataThunderDdosResourceTrackingCpuOperOperTimestampsEntriesToTerraform(struct?: DataThunderDdosResourceTrackingCpuOperOperTimestampsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    absolute_cpu_percent: cdktf.stringToTerraform(struct!.absoluteCpuPercent),
    address: cdktf.stringToTerraform(struct!.address),
    entry: cdktf.stringToTerraform(struct!.entry),
    relative_cpu_percent: cdktf.stringToTerraform(struct!.relativeCpuPercent),
  }
}


export function dataThunderDdosResourceTrackingCpuOperOperTimestampsEntriesToHclTerraform(struct?: DataThunderDdosResourceTrackingCpuOperOperTimestampsEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    absolute_cpu_percent: {
      value: cdktf.stringToHclTerraform(struct!.absoluteCpuPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry: {
      value: cdktf.stringToHclTerraform(struct!.entry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_cpu_percent: {
      value: cdktf.stringToHclTerraform(struct!.relativeCpuPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosResourceTrackingCpuOperOperTimestampsEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosResourceTrackingCpuOperOperTimestampsEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._absoluteCpuPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.absoluteCpuPercent = this._absoluteCpuPercent;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._entry !== undefined) {
      hasAnyValues = true;
      internalValueResult.entry = this._entry;
    }
    if (this._relativeCpuPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeCpuPercent = this._relativeCpuPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosResourceTrackingCpuOperOperTimestampsEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._absoluteCpuPercent = undefined;
      this._address = undefined;
      this._entry = undefined;
      this._relativeCpuPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._absoluteCpuPercent = value.absoluteCpuPercent;
      this._address = value.address;
      this._entry = value.entry;
      this._relativeCpuPercent = value.relativeCpuPercent;
    }
  }

  // absolute_cpu_percent - computed: false, optional: true, required: false
  private _absoluteCpuPercent?: string; 
  public get absoluteCpuPercent() {
    return this.getStringAttribute('absolute_cpu_percent');
  }
  public set absoluteCpuPercent(value: string) {
    this._absoluteCpuPercent = value;
  }
  public resetAbsoluteCpuPercent() {
    this._absoluteCpuPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get absoluteCpuPercentInput() {
    return this._absoluteCpuPercent;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // entry - computed: false, optional: true, required: false
  private _entry?: string; 
  public get entry() {
    return this.getStringAttribute('entry');
  }
  public set entry(value: string) {
    this._entry = value;
  }
  public resetEntry() {
    this._entry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry;
  }

  // relative_cpu_percent - computed: false, optional: true, required: false
  private _relativeCpuPercent?: string; 
  public get relativeCpuPercent() {
    return this.getStringAttribute('relative_cpu_percent');
  }
  public set relativeCpuPercent(value: string) {
    this._relativeCpuPercent = value;
  }
  public resetRelativeCpuPercent() {
    this._relativeCpuPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeCpuPercentInput() {
    return this._relativeCpuPercent;
  }
}

export class DataThunderDdosResourceTrackingCpuOperOperTimestampsEntriesList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosResourceTrackingCpuOperOperTimestampsEntries[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosResourceTrackingCpuOperOperTimestampsEntriesOutputReference {
    return new DataThunderDdosResourceTrackingCpuOperOperTimestampsEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosResourceTrackingCpuOperOperTimestamps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#average_cpu_percent DataThunderDdosResourceTrackingCpuOper#average_cpu_percent}
  */
  readonly averageCpuPercent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#timestamp DataThunderDdosResourceTrackingCpuOper#timestamp}
  */
  readonly timestamp?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#entries DataThunderDdosResourceTrackingCpuOper#entries}
  */
  readonly entries?: DataThunderDdosResourceTrackingCpuOperOperTimestampsEntries[] | cdktf.IResolvable;
}

export function dataThunderDdosResourceTrackingCpuOperOperTimestampsToTerraform(struct?: DataThunderDdosResourceTrackingCpuOperOperTimestamps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    average_cpu_percent: cdktf.stringToTerraform(struct!.averageCpuPercent),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    entries: cdktf.listMapper(dataThunderDdosResourceTrackingCpuOperOperTimestampsEntriesToTerraform, true)(struct!.entries),
  }
}


export function dataThunderDdosResourceTrackingCpuOperOperTimestampsToHclTerraform(struct?: DataThunderDdosResourceTrackingCpuOperOperTimestamps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    average_cpu_percent: {
      value: cdktf.stringToHclTerraform(struct!.averageCpuPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entries: {
      value: cdktf.listMapperHcl(dataThunderDdosResourceTrackingCpuOperOperTimestampsEntriesToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosResourceTrackingCpuOperOperTimestampsEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosResourceTrackingCpuOperOperTimestampsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderDdosResourceTrackingCpuOperOperTimestamps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._averageCpuPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.averageCpuPercent = this._averageCpuPercent;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosResourceTrackingCpuOperOperTimestamps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._averageCpuPercent = undefined;
      this._timestamp = undefined;
      this._entries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._averageCpuPercent = value.averageCpuPercent;
      this._timestamp = value.timestamp;
      this._entries.internalValue = value.entries;
    }
  }

  // average_cpu_percent - computed: false, optional: true, required: false
  private _averageCpuPercent?: string; 
  public get averageCpuPercent() {
    return this.getStringAttribute('average_cpu_percent');
  }
  public set averageCpuPercent(value: string) {
    this._averageCpuPercent = value;
  }
  public resetAverageCpuPercent() {
    this._averageCpuPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get averageCpuPercentInput() {
    return this._averageCpuPercent;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // entries - computed: false, optional: true, required: false
  private _entries = new DataThunderDdosResourceTrackingCpuOperOperTimestampsEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: DataThunderDdosResourceTrackingCpuOperOperTimestampsEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}

export class DataThunderDdosResourceTrackingCpuOperOperTimestampsList extends cdktf.ComplexList {
  public internalValue? : DataThunderDdosResourceTrackingCpuOperOperTimestamps[] | cdktf.IResolvable

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
  public get(index: number): DataThunderDdosResourceTrackingCpuOperOperTimestampsOutputReference {
    return new DataThunderDdosResourceTrackingCpuOperOperTimestampsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderDdosResourceTrackingCpuOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#error_str DataThunderDdosResourceTrackingCpuOper#error_str}
  */
  readonly errorStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#if_show_error_str DataThunderDdosResourceTrackingCpuOper#if_show_error_str}
  */
  readonly ifShowErrorStr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#max_count DataThunderDdosResourceTrackingCpuOper#max_count}
  */
  readonly maxCount?: number;
  /**
  * timestamps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#timestamps DataThunderDdosResourceTrackingCpuOper#timestamps}
  */
  readonly timestamps?: DataThunderDdosResourceTrackingCpuOperOperTimestamps[] | cdktf.IResolvable;
}

export function dataThunderDdosResourceTrackingCpuOperOperToTerraform(struct?: DataThunderDdosResourceTrackingCpuOperOperOutputReference | DataThunderDdosResourceTrackingCpuOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_str: cdktf.stringToTerraform(struct!.errorStr),
    if_show_error_str: cdktf.numberToTerraform(struct!.ifShowErrorStr),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    timestamps: cdktf.listMapper(dataThunderDdosResourceTrackingCpuOperOperTimestampsToTerraform, true)(struct!.timestamps),
  }
}


export function dataThunderDdosResourceTrackingCpuOperOperToHclTerraform(struct?: DataThunderDdosResourceTrackingCpuOperOperOutputReference | DataThunderDdosResourceTrackingCpuOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_str: {
      value: cdktf.stringToHclTerraform(struct!.errorStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_show_error_str: {
      value: cdktf.numberToHclTerraform(struct!.ifShowErrorStr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timestamps: {
      value: cdktf.listMapperHcl(dataThunderDdosResourceTrackingCpuOperOperTimestampsToHclTerraform, true)(struct!.timestamps),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderDdosResourceTrackingCpuOperOperTimestampsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosResourceTrackingCpuOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosResourceTrackingCpuOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorStr = this._errorStr;
    }
    if (this._ifShowErrorStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifShowErrorStr = this._ifShowErrorStr;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._timestamps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamps = this._timestamps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosResourceTrackingCpuOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errorStr = undefined;
      this._ifShowErrorStr = undefined;
      this._maxCount = undefined;
      this._timestamps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errorStr = value.errorStr;
      this._ifShowErrorStr = value.ifShowErrorStr;
      this._maxCount = value.maxCount;
      this._timestamps.internalValue = value.timestamps;
    }
  }

  // error_str - computed: false, optional: true, required: false
  private _errorStr?: string; 
  public get errorStr() {
    return this.getStringAttribute('error_str');
  }
  public set errorStr(value: string) {
    this._errorStr = value;
  }
  public resetErrorStr() {
    this._errorStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorStrInput() {
    return this._errorStr;
  }

  // if_show_error_str - computed: false, optional: true, required: false
  private _ifShowErrorStr?: number; 
  public get ifShowErrorStr() {
    return this.getNumberAttribute('if_show_error_str');
  }
  public set ifShowErrorStr(value: number) {
    this._ifShowErrorStr = value;
  }
  public resetIfShowErrorStr() {
    this._ifShowErrorStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifShowErrorStrInput() {
    return this._ifShowErrorStr;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // timestamps - computed: false, optional: true, required: false
  private _timestamps = new DataThunderDdosResourceTrackingCpuOperOperTimestampsList(this, "timestamps", false);
  public get timestamps() {
    return this._timestamps;
  }
  public putTimestamps(value: DataThunderDdosResourceTrackingCpuOperOperTimestamps[] | cdktf.IResolvable) {
    this._timestamps.internalValue = value;
  }
  public resetTimestamps() {
    this._timestamps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsInput() {
    return this._timestamps.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper thunder_ddos_resource_tracking_cpu_oper}
*/
export class DataThunderDdosResourceTrackingCpuOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_resource_tracking_cpu_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosResourceTrackingCpuOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosResourceTrackingCpuOper to import
  * @param importFromId The id of the existing DataThunderDdosResourceTrackingCpuOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosResourceTrackingCpuOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_resource_tracking_cpu_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_resource_tracking_cpu_oper thunder_ddos_resource_tracking_cpu_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosResourceTrackingCpuOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosResourceTrackingCpuOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_resource_tracking_cpu_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDdosResourceTrackingCpuOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosResourceTrackingCpuOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderDdosResourceTrackingCpuOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderDdosResourceTrackingCpuOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosResourceTrackingCpuOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
