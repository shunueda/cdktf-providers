// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_mon_topk_sources_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityMonTopkSourcesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_mon_topk_sources_oper#id DataThunderVisibilityMonTopkSourcesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_mon_topk_sources_oper#oper DataThunderVisibilityMonTopkSourcesOper#oper}
  */
  readonly oper?: DataThunderVisibilityMonTopkSourcesOperOper;
}
export interface DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_mon_topk_sources_oper#ip_addr DataThunderVisibilityMonTopkSourcesOper#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_mon_topk_sources_oper#metric_value DataThunderVisibilityMonTopkSourcesOper#metric_value}
  */
  readonly metricValue?: string;
}

export function dataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStructToTerraform(struct?: DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    metric_value: cdktf.stringToTerraform(struct!.metricValue),
  }
}


export function dataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_value: {
      value: cdktf.stringToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._metricValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr = value.ipAddr;
      this._metricValue = value.metricValue;
    }
  }

  // ip_addr - computed: false, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // metric_value - computed: false, optional: true, required: false
  private _metricValue?: string; 
  public get metricValue() {
    return this.getStringAttribute('metric_value');
  }
  public set metricValue(value: string) {
    this._metricValue = value;
  }
  public resetMetricValue() {
    this._metricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }
}

export class DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStructOutputReference {
    return new DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_mon_topk_sources_oper#metric_name DataThunderVisibilityMonTopkSourcesOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_mon_topk_sources_oper#topk_list DataThunderVisibilityMonTopkSourcesOper#topk_list}
  */
  readonly topkList?: DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStructToTerraform(struct?: DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    topk_list: cdktf.listMapper(dataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStructToTerraform, true)(struct!.topkList),
  }
}


export function dataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStructToHclTerraform(struct?: DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStructToHclTerraform, true)(struct!.topkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._topkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkList = this._topkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._topkList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._topkList.internalValue = value.topkList;
    }
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // topk_list - computed: false, optional: true, required: false
  private _topkList = new DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStructList(this, "topk_list", false);
  public get topkList() {
    return this._topkList;
  }
  public putTopkList(value: DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable) {
    this._topkList.internalValue = value;
  }
  public resetTopkList() {
    this._topkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkListInput() {
    return this._topkList.internalValue;
  }
}

export class DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStructOutputReference {
    return new DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityMonTopkSourcesOperOper {
  /**
  * metric_topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_mon_topk_sources_oper#metric_topk_list DataThunderVisibilityMonTopkSourcesOper#metric_topk_list}
  */
  readonly metricTopkList?: DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityMonTopkSourcesOperOperToTerraform(struct?: DataThunderVisibilityMonTopkSourcesOperOperOutputReference | DataThunderVisibilityMonTopkSourcesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_topk_list: cdktf.listMapper(dataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStructToTerraform, true)(struct!.metricTopkList),
  }
}


export function dataThunderVisibilityMonTopkSourcesOperOperToHclTerraform(struct?: DataThunderVisibilityMonTopkSourcesOperOperOutputReference | DataThunderVisibilityMonTopkSourcesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_topk_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStructToHclTerraform, true)(struct!.metricTopkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityMonTopkSourcesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityMonTopkSourcesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricTopkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTopkList = this._metricTopkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityMonTopkSourcesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metricTopkList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metricTopkList.internalValue = value.metricTopkList;
    }
  }

  // metric_topk_list - computed: false, optional: true, required: false
  private _metricTopkList = new DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStructList(this, "metric_topk_list", false);
  public get metricTopkList() {
    return this._metricTopkList;
  }
  public putMetricTopkList(value: DataThunderVisibilityMonTopkSourcesOperOperMetricTopkListStruct[] | cdktf.IResolvable) {
    this._metricTopkList.internalValue = value;
  }
  public resetMetricTopkList() {
    this._metricTopkList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTopkListInput() {
    return this._metricTopkList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_mon_topk_sources_oper thunder_visibility_mon_topk_sources_oper}
*/
export class DataThunderVisibilityMonTopkSourcesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_mon_topk_sources_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityMonTopkSourcesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityMonTopkSourcesOper to import
  * @param importFromId The id of the existing DataThunderVisibilityMonTopkSourcesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_mon_topk_sources_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityMonTopkSourcesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_mon_topk_sources_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_mon_topk_sources_oper thunder_visibility_mon_topk_sources_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityMonTopkSourcesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityMonTopkSourcesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_mon_topk_sources_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _oper = new DataThunderVisibilityMonTopkSourcesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityMonTopkSourcesOperOper) {
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
      oper: dataThunderVisibilityMonTopkSourcesOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVisibilityMonTopkSourcesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityMonTopkSourcesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
