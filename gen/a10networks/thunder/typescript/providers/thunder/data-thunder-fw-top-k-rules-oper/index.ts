// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_top_k_rules_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwTopKRulesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_top_k_rules_oper#id DataThunderFwTopKRulesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_top_k_rules_oper#oper DataThunderFwTopKRulesOper#oper}
  */
  readonly oper?: DataThunderFwTopKRulesOperOper;
}
export interface DataThunderFwTopKRulesOperOperMetricTopkListTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_top_k_rules_oper#metric_value DataThunderFwTopKRulesOper#metric_value}
  */
  readonly metricValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_top_k_rules_oper#rule_name DataThunderFwTopKRulesOper#rule_name}
  */
  readonly ruleName?: string;
}

export function dataThunderFwTopKRulesOperOperMetricTopkListTopkListStructToTerraform(struct?: DataThunderFwTopKRulesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_value: cdktf.numberToTerraform(struct!.metricValue),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
  }
}


export function dataThunderFwTopKRulesOperOperMetricTopkListTopkListStructToHclTerraform(struct?: DataThunderFwTopKRulesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_value: {
      value: cdktf.numberToHclTerraform(struct!.metricValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwTopKRulesOperOperMetricTopkListTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderFwTopKRulesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricValue = this._metricValue;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwTopKRulesOperOperMetricTopkListTopkListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricValue = undefined;
      this._ruleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricValue = value.metricValue;
      this._ruleName = value.ruleName;
    }
  }

  // metric_value - computed: false, optional: true, required: false
  private _metricValue?: number; 
  public get metricValue() {
    return this.getNumberAttribute('metric_value');
  }
  public set metricValue(value: number) {
    this._metricValue = value;
  }
  public resetMetricValue() {
    this._metricValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricValueInput() {
    return this._metricValue;
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }
}

export class DataThunderFwTopKRulesOperOperMetricTopkListTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderFwTopKRulesOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderFwTopKRulesOperOperMetricTopkListTopkListStructOutputReference {
    return new DataThunderFwTopKRulesOperOperMetricTopkListTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderFwTopKRulesOperOperMetricTopkListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_top_k_rules_oper#metric_name DataThunderFwTopKRulesOper#metric_name}
  */
  readonly metricName?: string;
  /**
  * topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_top_k_rules_oper#topk_list DataThunderFwTopKRulesOper#topk_list}
  */
  readonly topkList?: DataThunderFwTopKRulesOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderFwTopKRulesOperOperMetricTopkListStructToTerraform(struct?: DataThunderFwTopKRulesOperOperMetricTopkListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    topk_list: cdktf.listMapper(dataThunderFwTopKRulesOperOperMetricTopkListTopkListStructToTerraform, true)(struct!.topkList),
  }
}


export function dataThunderFwTopKRulesOperOperMetricTopkListStructToHclTerraform(struct?: DataThunderFwTopKRulesOperOperMetricTopkListStruct | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataThunderFwTopKRulesOperOperMetricTopkListTopkListStructToHclTerraform, true)(struct!.topkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwTopKRulesOperOperMetricTopkListTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwTopKRulesOperOperMetricTopkListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderFwTopKRulesOperOperMetricTopkListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderFwTopKRulesOperOperMetricTopkListStruct | cdktf.IResolvable | undefined) {
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
  private _topkList = new DataThunderFwTopKRulesOperOperMetricTopkListTopkListStructList(this, "topk_list", false);
  public get topkList() {
    return this._topkList;
  }
  public putTopkList(value: DataThunderFwTopKRulesOperOperMetricTopkListTopkListStruct[] | cdktf.IResolvable) {
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

export class DataThunderFwTopKRulesOperOperMetricTopkListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderFwTopKRulesOperOperMetricTopkListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderFwTopKRulesOperOperMetricTopkListStructOutputReference {
    return new DataThunderFwTopKRulesOperOperMetricTopkListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderFwTopKRulesOperOper {
  /**
  * metric_topk_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_top_k_rules_oper#metric_topk_list DataThunderFwTopKRulesOper#metric_topk_list}
  */
  readonly metricTopkList?: DataThunderFwTopKRulesOperOperMetricTopkListStruct[] | cdktf.IResolvable;
}

export function dataThunderFwTopKRulesOperOperToTerraform(struct?: DataThunderFwTopKRulesOperOperOutputReference | DataThunderFwTopKRulesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_topk_list: cdktf.listMapper(dataThunderFwTopKRulesOperOperMetricTopkListStructToTerraform, true)(struct!.metricTopkList),
  }
}


export function dataThunderFwTopKRulesOperOperToHclTerraform(struct?: DataThunderFwTopKRulesOperOperOutputReference | DataThunderFwTopKRulesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_topk_list: {
      value: cdktf.listMapperHcl(dataThunderFwTopKRulesOperOperMetricTopkListStructToHclTerraform, true)(struct!.metricTopkList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwTopKRulesOperOperMetricTopkListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwTopKRulesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwTopKRulesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricTopkList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricTopkList = this._metricTopkList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwTopKRulesOperOper | undefined) {
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
  private _metricTopkList = new DataThunderFwTopKRulesOperOperMetricTopkListStructList(this, "metric_topk_list", false);
  public get metricTopkList() {
    return this._metricTopkList;
  }
  public putMetricTopkList(value: DataThunderFwTopKRulesOperOperMetricTopkListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_top_k_rules_oper thunder_fw_top_k_rules_oper}
*/
export class DataThunderFwTopKRulesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_top_k_rules_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwTopKRulesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwTopKRulesOper to import
  * @param importFromId The id of the existing DataThunderFwTopKRulesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_top_k_rules_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwTopKRulesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_top_k_rules_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_top_k_rules_oper thunder_fw_top_k_rules_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwTopKRulesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwTopKRulesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_top_k_rules_oper',
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
  private _oper = new DataThunderFwTopKRulesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwTopKRulesOperOper) {
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
      oper: dataThunderFwTopKRulesOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderFwTopKRulesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwTopKRulesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
