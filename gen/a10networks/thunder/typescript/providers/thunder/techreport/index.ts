// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TechreportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable the polling techreport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#disable Techreport#disable}
  */
  readonly disable?: number;
  /**
  * Enable 31 day poll techreports (default seven) on platforms with less than 32GB disk (no op otherwise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#enable_full_history Techreport#enable_full_history}
  */
  readonly enableFullHistory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#id Techreport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#uuid Techreport#uuid}
  */
  readonly uuid?: string;
  /**
  * interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#interval Techreport#interval}
  */
  readonly interval?: TechreportInterval;
  /**
  * max_logfile_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#max_logfile_size Techreport#max_logfile_size}
  */
  readonly maxLogfileSize?: TechreportMaxLogfileSize;
  /**
  * max_partitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#max_partitions Techreport#max_partitions}
  */
  readonly maxPartitions?: TechreportMaxPartitions;
  /**
  * priority_partition_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#priority_partition_list Techreport#priority_partition_list}
  */
  readonly priorityPartitionList?: TechreportPriorityPartitionListStruct[] | cdktf.IResolvable;
}
export interface TechreportInterval {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#uuid Techreport#uuid}
  */
  readonly uuid?: string;
  /**
  * Showtech interval in minutes (default is 15)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#value Techreport#value}
  */
  readonly value?: number;
}

export function techreportIntervalToTerraform(struct?: TechreportIntervalOutputReference | TechreportInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function techreportIntervalToHclTerraform(struct?: TechreportIntervalOutputReference | TechreportInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechreportIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TechreportInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechreportInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._value = value.value;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface TechreportMaxLogfileSize {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#uuid Techreport#uuid}
  */
  readonly uuid?: string;
  /**
  * Log file size for periodic techsupport (default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#value Techreport#value}
  */
  readonly value?: number;
}

export function techreportMaxLogfileSizeToTerraform(struct?: TechreportMaxLogfileSizeOutputReference | TechreportMaxLogfileSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function techreportMaxLogfileSizeToHclTerraform(struct?: TechreportMaxLogfileSizeOutputReference | TechreportMaxLogfileSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechreportMaxLogfileSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TechreportMaxLogfileSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechreportMaxLogfileSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._value = value.value;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface TechreportMaxPartitions {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#uuid Techreport#uuid}
  */
  readonly uuid?: string;
  /**
  * Maximum partions to show in per periodic techsupport (default is 30)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#value Techreport#value}
  */
  readonly value?: number;
}

export function techreportMaxPartitionsToTerraform(struct?: TechreportMaxPartitionsOutputReference | TechreportMaxPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function techreportMaxPartitionsToHclTerraform(struct?: TechreportMaxPartitionsOutputReference | TechreportMaxPartitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechreportMaxPartitionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TechreportMaxPartitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechreportMaxPartitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._value = value.value;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface TechreportPriorityPartitionListStruct {
  /**
  * Name of partition always want to show in showtech (shared is always shown by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#part_name Techreport#part_name}
  */
  readonly partName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#uuid Techreport#uuid}
  */
  readonly uuid?: string;
}

export function techreportPriorityPartitionListStructToTerraform(struct?: TechreportPriorityPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    part_name: cdktf.stringToTerraform(struct!.partName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function techreportPriorityPartitionListStructToHclTerraform(struct?: TechreportPriorityPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    part_name: {
      value: cdktf.stringToHclTerraform(struct!.partName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TechreportPriorityPartitionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TechreportPriorityPartitionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partName = this._partName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TechreportPriorityPartitionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partName = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partName = value.partName;
      this._uuid = value.uuid;
    }
  }

  // part_name - computed: false, optional: false, required: true
  private _partName?: string; 
  public get partName() {
    return this.getStringAttribute('part_name');
  }
  public set partName(value: string) {
    this._partName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partNameInput() {
    return this._partName;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class TechreportPriorityPartitionListStructList extends cdktf.ComplexList {
  public internalValue? : TechreportPriorityPartitionListStruct[] | cdktf.IResolvable

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
  public get(index: number): TechreportPriorityPartitionListStructOutputReference {
    return new TechreportPriorityPartitionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport thunder_techreport}
*/
export class Techreport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_techreport";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Techreport resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Techreport to import
  * @param importFromId The id of the existing Techreport that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Techreport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_techreport", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/techreport thunder_techreport} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TechreportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TechreportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_techreport',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disable = config.disable;
    this._enableFullHistory = config.enableFullHistory;
    this._id = config.id;
    this._uuid = config.uuid;
    this._interval.internalValue = config.interval;
    this._maxLogfileSize.internalValue = config.maxLogfileSize;
    this._maxPartitions.internalValue = config.maxPartitions;
    this._priorityPartitionList.internalValue = config.priorityPartitionList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable_full_history - computed: false, optional: true, required: false
  private _enableFullHistory?: number; 
  public get enableFullHistory() {
    return this.getNumberAttribute('enable_full_history');
  }
  public set enableFullHistory(value: number) {
    this._enableFullHistory = value;
  }
  public resetEnableFullHistory() {
    this._enableFullHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFullHistoryInput() {
    return this._enableFullHistory;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // interval - computed: false, optional: true, required: false
  private _interval = new TechreportIntervalOutputReference(this, "interval");
  public get interval() {
    return this._interval;
  }
  public putInterval(value: TechreportInterval) {
    this._interval.internalValue = value;
  }
  public resetInterval() {
    this._interval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval.internalValue;
  }

  // max_logfile_size - computed: false, optional: true, required: false
  private _maxLogfileSize = new TechreportMaxLogfileSizeOutputReference(this, "max_logfile_size");
  public get maxLogfileSize() {
    return this._maxLogfileSize;
  }
  public putMaxLogfileSize(value: TechreportMaxLogfileSize) {
    this._maxLogfileSize.internalValue = value;
  }
  public resetMaxLogfileSize() {
    this._maxLogfileSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogfileSizeInput() {
    return this._maxLogfileSize.internalValue;
  }

  // max_partitions - computed: false, optional: true, required: false
  private _maxPartitions = new TechreportMaxPartitionsOutputReference(this, "max_partitions");
  public get maxPartitions() {
    return this._maxPartitions;
  }
  public putMaxPartitions(value: TechreportMaxPartitions) {
    this._maxPartitions.internalValue = value;
  }
  public resetMaxPartitions() {
    this._maxPartitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPartitionsInput() {
    return this._maxPartitions.internalValue;
  }

  // priority_partition_list - computed: false, optional: true, required: false
  private _priorityPartitionList = new TechreportPriorityPartitionListStructList(this, "priority_partition_list", false);
  public get priorityPartitionList() {
    return this._priorityPartitionList;
  }
  public putPriorityPartitionList(value: TechreportPriorityPartitionListStruct[] | cdktf.IResolvable) {
    this._priorityPartitionList.internalValue = value;
  }
  public resetPriorityPartitionList() {
    this._priorityPartitionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityPartitionListInput() {
    return this._priorityPartitionList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.numberToTerraform(this._disable),
      enable_full_history: cdktf.numberToTerraform(this._enableFullHistory),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      interval: techreportIntervalToTerraform(this._interval.internalValue),
      max_logfile_size: techreportMaxLogfileSizeToTerraform(this._maxLogfileSize.internalValue),
      max_partitions: techreportMaxPartitionsToTerraform(this._maxPartitions.internalValue),
      priority_partition_list: cdktf.listMapper(techreportPriorityPartitionListStructToTerraform, true)(this._priorityPartitionList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_full_history: {
        value: cdktf.numberToHclTerraform(this._enableFullHistory),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: techreportIntervalToHclTerraform(this._interval.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TechreportIntervalList",
      },
      max_logfile_size: {
        value: techreportMaxLogfileSizeToHclTerraform(this._maxLogfileSize.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TechreportMaxLogfileSizeList",
      },
      max_partitions: {
        value: techreportMaxPartitionsToHclTerraform(this._maxPartitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TechreportMaxPartitionsList",
      },
      priority_partition_list: {
        value: cdktf.listMapperHcl(techreportPriorityPartitionListStructToHclTerraform, true)(this._priorityPartitionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TechreportPriorityPartitionListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
