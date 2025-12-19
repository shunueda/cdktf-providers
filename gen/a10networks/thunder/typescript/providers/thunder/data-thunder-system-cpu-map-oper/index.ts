// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_map_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemCpuMapOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_map_oper#id DataThunderSystemCpuMapOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_map_oper#oper DataThunderSystemCpuMapOper#oper}
  */
  readonly oper?: DataThunderSystemCpuMapOperOper;
}
export interface DataThunderSystemCpuMapOperOperSystemCpuMap {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_map_oper#cpu_idx DataThunderSystemCpuMapOper#cpu_idx}
  */
  readonly cpuIdx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_map_oper#cpu_type DataThunderSystemCpuMapOper#cpu_type}
  */
  readonly cpuType?: string;
}

export function dataThunderSystemCpuMapOperOperSystemCpuMapToTerraform(struct?: DataThunderSystemCpuMapOperOperSystemCpuMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_idx: cdktf.stringToTerraform(struct!.cpuIdx),
    cpu_type: cdktf.stringToTerraform(struct!.cpuType),
  }
}


export function dataThunderSystemCpuMapOperOperSystemCpuMapToHclTerraform(struct?: DataThunderSystemCpuMapOperOperSystemCpuMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_idx: {
      value: cdktf.stringToHclTerraform(struct!.cpuIdx),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_type: {
      value: cdktf.stringToHclTerraform(struct!.cpuType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemCpuMapOperOperSystemCpuMapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSystemCpuMapOperOperSystemCpuMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuIdx !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuIdx = this._cpuIdx;
    }
    if (this._cpuType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuType = this._cpuType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemCpuMapOperOperSystemCpuMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuIdx = undefined;
      this._cpuType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuIdx = value.cpuIdx;
      this._cpuType = value.cpuType;
    }
  }

  // cpu_idx - computed: false, optional: true, required: false
  private _cpuIdx?: string; 
  public get cpuIdx() {
    return this.getStringAttribute('cpu_idx');
  }
  public set cpuIdx(value: string) {
    this._cpuIdx = value;
  }
  public resetCpuIdx() {
    this._cpuIdx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuIdxInput() {
    return this._cpuIdx;
  }

  // cpu_type - computed: false, optional: true, required: false
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  public resetCpuType() {
    this._cpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
  }
}

export class DataThunderSystemCpuMapOperOperSystemCpuMapList extends cdktf.ComplexList {
  public internalValue? : DataThunderSystemCpuMapOperOperSystemCpuMap[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSystemCpuMapOperOperSystemCpuMapOutputReference {
    return new DataThunderSystemCpuMapOperOperSystemCpuMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSystemCpuMapOperOper {
  /**
  * system_cpu_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_map_oper#system_cpu_map DataThunderSystemCpuMapOper#system_cpu_map}
  */
  readonly systemCpuMap?: DataThunderSystemCpuMapOperOperSystemCpuMap[] | cdktf.IResolvable;
}

export function dataThunderSystemCpuMapOperOperToTerraform(struct?: DataThunderSystemCpuMapOperOperOutputReference | DataThunderSystemCpuMapOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system_cpu_map: cdktf.listMapper(dataThunderSystemCpuMapOperOperSystemCpuMapToTerraform, true)(struct!.systemCpuMap),
  }
}


export function dataThunderSystemCpuMapOperOperToHclTerraform(struct?: DataThunderSystemCpuMapOperOperOutputReference | DataThunderSystemCpuMapOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system_cpu_map: {
      value: cdktf.listMapperHcl(dataThunderSystemCpuMapOperOperSystemCpuMapToHclTerraform, true)(struct!.systemCpuMap),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemCpuMapOperOperSystemCpuMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemCpuMapOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemCpuMapOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemCpuMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCpuMap = this._systemCpuMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemCpuMapOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemCpuMap.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemCpuMap.internalValue = value.systemCpuMap;
    }
  }

  // system_cpu_map - computed: false, optional: true, required: false
  private _systemCpuMap = new DataThunderSystemCpuMapOperOperSystemCpuMapList(this, "system_cpu_map", false);
  public get systemCpuMap() {
    return this._systemCpuMap;
  }
  public putSystemCpuMap(value: DataThunderSystemCpuMapOperOperSystemCpuMap[] | cdktf.IResolvable) {
    this._systemCpuMap.internalValue = value;
  }
  public resetSystemCpuMap() {
    this._systemCpuMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCpuMapInput() {
    return this._systemCpuMap.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_map_oper thunder_system_cpu_map_oper}
*/
export class DataThunderSystemCpuMapOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_cpu_map_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemCpuMapOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemCpuMapOper to import
  * @param importFromId The id of the existing DataThunderSystemCpuMapOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_map_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemCpuMapOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_cpu_map_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_cpu_map_oper thunder_system_cpu_map_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemCpuMapOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemCpuMapOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_cpu_map_oper',
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
  private _oper = new DataThunderSystemCpuMapOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSystemCpuMapOperOper) {
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
      oper: dataThunderSystemCpuMapOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSystemCpuMapOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemCpuMapOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
