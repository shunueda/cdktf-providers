// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityTopnOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#id DataThunderVisibilityTopnOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#oper DataThunderVisibilityTopnOper#oper}
  */
  readonly oper?: DataThunderVisibilityTopnOperOper;
}
export interface DataThunderVisibilityTopnOperOperMetricTopnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#object_name DataThunderVisibilityTopnOper#object_name}
  */
  readonly objectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#object_val DataThunderVisibilityTopnOper#object_val}
  */
  readonly objectVal?: number;
}

export function dataThunderVisibilityTopnOperOperMetricTopnListStructToTerraform(struct?: DataThunderVisibilityTopnOperOperMetricTopnListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_name: cdktf.stringToTerraform(struct!.objectName),
    object_val: cdktf.numberToTerraform(struct!.objectVal),
  }
}


export function dataThunderVisibilityTopnOperOperMetricTopnListStructToHclTerraform(struct?: DataThunderVisibilityTopnOperOperMetricTopnListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_name: {
      value: cdktf.stringToHclTerraform(struct!.objectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_val: {
      value: cdktf.numberToHclTerraform(struct!.objectVal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityTopnOperOperMetricTopnListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityTopnOperOperMetricTopnListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectName = this._objectName;
    }
    if (this._objectVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectVal = this._objectVal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityTopnOperOperMetricTopnListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectName = undefined;
      this._objectVal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectName = value.objectName;
      this._objectVal = value.objectVal;
    }
  }

  // object_name - computed: false, optional: true, required: false
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  public resetObjectName() {
    this._objectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // object_val - computed: false, optional: true, required: false
  private _objectVal?: number; 
  public get objectVal() {
    return this.getNumberAttribute('object_val');
  }
  public set objectVal(value: number) {
    this._objectVal = value;
  }
  public resetObjectVal() {
    this._objectVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectValInput() {
    return this._objectVal;
  }
}

export class DataThunderVisibilityTopnOperOperMetricTopnListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityTopnOperOperMetricTopnListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityTopnOperOperMetricTopnListStructOutputReference {
    return new DataThunderVisibilityTopnOperOperMetricTopnListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityTopnOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#class DataThunderVisibilityTopnOper#class}
  */
  readonly class?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#memory_usage DataThunderVisibilityTopnOper#memory_usage}
  */
  readonly memoryUsage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#metric DataThunderVisibilityTopnOper#metric}
  */
  readonly metric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#topn_duration DataThunderVisibilityTopnOper#topn_duration}
  */
  readonly topnDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#total_memory DataThunderVisibilityTopnOper#total_memory}
  */
  readonly totalMemory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#used_memory DataThunderVisibilityTopnOper#used_memory}
  */
  readonly usedMemory?: string;
  /**
  * metric_topn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#metric_topn_list DataThunderVisibilityTopnOper#metric_topn_list}
  */
  readonly metricTopnList?: DataThunderVisibilityTopnOperOperMetricTopnListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityTopnOperOperToTerraform(struct?: DataThunderVisibilityTopnOperOperOutputReference | DataThunderVisibilityTopnOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    memory_usage: cdktf.numberToTerraform(struct!.memoryUsage),
    metric: cdktf.stringToTerraform(struct!.metric),
    topn_duration: cdktf.stringToTerraform(struct!.topnDuration),
    total_memory: cdktf.stringToTerraform(struct!.totalMemory),
    used_memory: cdktf.stringToTerraform(struct!.usedMemory),
    metric_topn_list: cdktf.listMapper(dataThunderVisibilityTopnOperOperMetricTopnListStructToTerraform, true)(struct!.metricTopnList),
  }
}


export function dataThunderVisibilityTopnOperOperToHclTerraform(struct?: DataThunderVisibilityTopnOperOperOutputReference | DataThunderVisibilityTopnOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_usage: {
      value: cdktf.numberToHclTerraform(struct!.memoryUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topn_duration: {
      value: cdktf.stringToHclTerraform(struct!.topnDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_memory: {
      value: cdktf.stringToHclTerraform(struct!.totalMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used_memory: {
      value: cdktf.stringToHclTerraform(struct!.usedMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_topn_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityTopnOperOperMetricTopnListStructToHclTerraform, true)(struct!.metricTopnList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityTopnOperOperMetricTopnListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityTopnOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityTopnOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._memoryUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsage = this._memoryUsage;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._topnDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.topnDuration = this._topnDuration;
    }
    if (this._totalMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemory = this._totalMemory;
    }
    if (this._usedMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedMemory = this._usedMemory;
    }
    if (this._metricTopnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTopnList = this._metricTopnList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityTopnOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._class = undefined;
      this._memoryUsage = undefined;
      this._metric = undefined;
      this._topnDuration = undefined;
      this._totalMemory = undefined;
      this._usedMemory = undefined;
      this._metricTopnList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._class = value.class;
      this._memoryUsage = value.memoryUsage;
      this._metric = value.metric;
      this._topnDuration = value.topnDuration;
      this._totalMemory = value.totalMemory;
      this._usedMemory = value.usedMemory;
      this._metricTopnList.internalValue = value.metricTopnList;
    }
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // memory_usage - computed: false, optional: true, required: false
  private _memoryUsage?: number; 
  public get memoryUsage() {
    return this.getNumberAttribute('memory_usage');
  }
  public set memoryUsage(value: number) {
    this._memoryUsage = value;
  }
  public resetMemoryUsage() {
    this._memoryUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsageInput() {
    return this._memoryUsage;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // topn_duration - computed: false, optional: true, required: false
  private _topnDuration?: string; 
  public get topnDuration() {
    return this.getStringAttribute('topn_duration');
  }
  public set topnDuration(value: string) {
    this._topnDuration = value;
  }
  public resetTopnDuration() {
    this._topnDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topnDurationInput() {
    return this._topnDuration;
  }

  // total_memory - computed: false, optional: true, required: false
  private _totalMemory?: string; 
  public get totalMemory() {
    return this.getStringAttribute('total_memory');
  }
  public set totalMemory(value: string) {
    this._totalMemory = value;
  }
  public resetTotalMemory() {
    this._totalMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemoryInput() {
    return this._totalMemory;
  }

  // used_memory - computed: false, optional: true, required: false
  private _usedMemory?: string; 
  public get usedMemory() {
    return this.getStringAttribute('used_memory');
  }
  public set usedMemory(value: string) {
    this._usedMemory = value;
  }
  public resetUsedMemory() {
    this._usedMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedMemoryInput() {
    return this._usedMemory;
  }

  // metric_topn_list - computed: false, optional: true, required: false
  private _metricTopnList = new DataThunderVisibilityTopnOperOperMetricTopnListStructList(this, "metric_topn_list", false);
  public get metricTopnList() {
    return this._metricTopnList;
  }
  public putMetricTopnList(value: DataThunderVisibilityTopnOperOperMetricTopnListStruct[] | cdktf.IResolvable) {
    this._metricTopnList.internalValue = value;
  }
  public resetMetricTopnList() {
    this._metricTopnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTopnListInput() {
    return this._metricTopnList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper thunder_visibility_topn_oper}
*/
export class DataThunderVisibilityTopnOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_topn_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityTopnOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityTopnOper to import
  * @param importFromId The id of the existing DataThunderVisibilityTopnOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityTopnOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_topn_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/visibility_topn_oper thunder_visibility_topn_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityTopnOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityTopnOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_topn_oper',
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
  private _oper = new DataThunderVisibilityTopnOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityTopnOperOper) {
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
      oper: dataThunderVisibilityTopnOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVisibilityTopnOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityTopnOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
