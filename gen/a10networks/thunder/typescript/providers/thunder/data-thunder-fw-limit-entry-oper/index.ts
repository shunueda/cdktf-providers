// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwLimitEntryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#id DataThunderFwLimitEntryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#oper DataThunderFwLimitEntryOper#oper}
  */
  readonly oper?: DataThunderFwLimitEntryOperOper;
}
export interface DataThunderFwLimitEntryOperOperLimitEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#address DataThunderFwLimitEntryOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#curr_count DataThunderFwLimitEntryOper#curr_count}
  */
  readonly currCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#max_count DataThunderFwLimitEntryOper#max_count}
  */
  readonly maxCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#prefix_len DataThunderFwLimitEntryOper#prefix_len}
  */
  readonly prefixLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#rule_name DataThunderFwLimitEntryOper#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#type DataThunderFwLimitEntryOper#type}
  */
  readonly type?: string;
}

export function dataThunderFwLimitEntryOperOperLimitEntryListStructToTerraform(struct?: DataThunderFwLimitEntryOperOperLimitEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    curr_count: cdktf.numberToTerraform(struct!.currCount),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    prefix_len: cdktf.numberToTerraform(struct!.prefixLen),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderFwLimitEntryOperOperLimitEntryListStructToHclTerraform(struct?: DataThunderFwLimitEntryOperOperLimitEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curr_count: {
      value: cdktf.numberToHclTerraform(struct!.currCount),
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
    prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.prefixLen),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwLimitEntryOperOperLimitEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderFwLimitEntryOperOperLimitEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._currCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.currCount = this._currCount;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._prefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLen = this._prefixLen;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwLimitEntryOperOperLimitEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._currCount = undefined;
      this._maxCount = undefined;
      this._prefixLen = undefined;
      this._ruleName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._currCount = value.currCount;
      this._maxCount = value.maxCount;
      this._prefixLen = value.prefixLen;
      this._ruleName = value.ruleName;
      this._type = value.type;
    }
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

  // curr_count - computed: false, optional: true, required: false
  private _currCount?: number; 
  public get currCount() {
    return this.getNumberAttribute('curr_count');
  }
  public set currCount(value: number) {
    this._currCount = value;
  }
  public resetCurrCount() {
    this._currCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currCountInput() {
    return this._currCount;
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

  // prefix_len - computed: false, optional: true, required: false
  private _prefixLen?: number; 
  public get prefixLen() {
    return this.getNumberAttribute('prefix_len');
  }
  public set prefixLen(value: number) {
    this._prefixLen = value;
  }
  public resetPrefixLen() {
    this._prefixLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLenInput() {
    return this._prefixLen;
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

  // type - computed: false, optional: true, required: false
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
}

export class DataThunderFwLimitEntryOperOperLimitEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderFwLimitEntryOperOperLimitEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderFwLimitEntryOperOperLimitEntryListStructOutputReference {
    return new DataThunderFwLimitEntryOperOperLimitEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderFwLimitEntryOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#limit_entry_count DataThunderFwLimitEntryOper#limit_entry_count}
  */
  readonly limitEntryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#prefix4 DataThunderFwLimitEntryOper#prefix4}
  */
  readonly prefix4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#prefix6 DataThunderFwLimitEntryOper#prefix6}
  */
  readonly prefix6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#prefix_len4 DataThunderFwLimitEntryOper#prefix_len4}
  */
  readonly prefixLen4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#prefix_len6 DataThunderFwLimitEntryOper#prefix_len6}
  */
  readonly prefixLen6?: number;
  /**
  * limit_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#limit_entry_list DataThunderFwLimitEntryOper#limit_entry_list}
  */
  readonly limitEntryList?: DataThunderFwLimitEntryOperOperLimitEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderFwLimitEntryOperOperToTerraform(struct?: DataThunderFwLimitEntryOperOperOutputReference | DataThunderFwLimitEntryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit_entry_count: cdktf.numberToTerraform(struct!.limitEntryCount),
    prefix4: cdktf.stringToTerraform(struct!.prefix4),
    prefix6: cdktf.stringToTerraform(struct!.prefix6),
    prefix_len4: cdktf.numberToTerraform(struct!.prefixLen4),
    prefix_len6: cdktf.numberToTerraform(struct!.prefixLen6),
    limit_entry_list: cdktf.listMapper(dataThunderFwLimitEntryOperOperLimitEntryListStructToTerraform, true)(struct!.limitEntryList),
  }
}


export function dataThunderFwLimitEntryOperOperToHclTerraform(struct?: DataThunderFwLimitEntryOperOperOutputReference | DataThunderFwLimitEntryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit_entry_count: {
      value: cdktf.numberToHclTerraform(struct!.limitEntryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix4: {
      value: cdktf.stringToHclTerraform(struct!.prefix4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix6: {
      value: cdktf.stringToHclTerraform(struct!.prefix6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_len4: {
      value: cdktf.numberToHclTerraform(struct!.prefixLen4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_len6: {
      value: cdktf.numberToHclTerraform(struct!.prefixLen6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_entry_list: {
      value: cdktf.listMapperHcl(dataThunderFwLimitEntryOperOperLimitEntryListStructToHclTerraform, true)(struct!.limitEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwLimitEntryOperOperLimitEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwLimitEntryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwLimitEntryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitEntryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitEntryCount = this._limitEntryCount;
    }
    if (this._prefix4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix4 = this._prefix4;
    }
    if (this._prefix6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix6 = this._prefix6;
    }
    if (this._prefixLen4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLen4 = this._prefixLen4;
    }
    if (this._prefixLen6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLen6 = this._prefixLen6;
    }
    if (this._limitEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitEntryList = this._limitEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwLimitEntryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limitEntryCount = undefined;
      this._prefix4 = undefined;
      this._prefix6 = undefined;
      this._prefixLen4 = undefined;
      this._prefixLen6 = undefined;
      this._limitEntryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limitEntryCount = value.limitEntryCount;
      this._prefix4 = value.prefix4;
      this._prefix6 = value.prefix6;
      this._prefixLen4 = value.prefixLen4;
      this._prefixLen6 = value.prefixLen6;
      this._limitEntryList.internalValue = value.limitEntryList;
    }
  }

  // limit_entry_count - computed: false, optional: true, required: false
  private _limitEntryCount?: number; 
  public get limitEntryCount() {
    return this.getNumberAttribute('limit_entry_count');
  }
  public set limitEntryCount(value: number) {
    this._limitEntryCount = value;
  }
  public resetLimitEntryCount() {
    this._limitEntryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitEntryCountInput() {
    return this._limitEntryCount;
  }

  // prefix4 - computed: false, optional: true, required: false
  private _prefix4?: string; 
  public get prefix4() {
    return this.getStringAttribute('prefix4');
  }
  public set prefix4(value: string) {
    this._prefix4 = value;
  }
  public resetPrefix4() {
    this._prefix4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefix4Input() {
    return this._prefix4;
  }

  // prefix6 - computed: false, optional: true, required: false
  private _prefix6?: string; 
  public get prefix6() {
    return this.getStringAttribute('prefix6');
  }
  public set prefix6(value: string) {
    this._prefix6 = value;
  }
  public resetPrefix6() {
    this._prefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefix6Input() {
    return this._prefix6;
  }

  // prefix_len4 - computed: false, optional: true, required: false
  private _prefixLen4?: number; 
  public get prefixLen4() {
    return this.getNumberAttribute('prefix_len4');
  }
  public set prefixLen4(value: number) {
    this._prefixLen4 = value;
  }
  public resetPrefixLen4() {
    this._prefixLen4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLen4Input() {
    return this._prefixLen4;
  }

  // prefix_len6 - computed: false, optional: true, required: false
  private _prefixLen6?: number; 
  public get prefixLen6() {
    return this.getNumberAttribute('prefix_len6');
  }
  public set prefixLen6(value: number) {
    this._prefixLen6 = value;
  }
  public resetPrefixLen6() {
    this._prefixLen6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLen6Input() {
    return this._prefixLen6;
  }

  // limit_entry_list - computed: false, optional: true, required: false
  private _limitEntryList = new DataThunderFwLimitEntryOperOperLimitEntryListStructList(this, "limit_entry_list", false);
  public get limitEntryList() {
    return this._limitEntryList;
  }
  public putLimitEntryList(value: DataThunderFwLimitEntryOperOperLimitEntryListStruct[] | cdktf.IResolvable) {
    this._limitEntryList.internalValue = value;
  }
  public resetLimitEntryList() {
    this._limitEntryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitEntryListInput() {
    return this._limitEntryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper thunder_fw_limit_entry_oper}
*/
export class DataThunderFwLimitEntryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_limit_entry_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwLimitEntryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwLimitEntryOper to import
  * @param importFromId The id of the existing DataThunderFwLimitEntryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwLimitEntryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_limit_entry_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_limit_entry_oper thunder_fw_limit_entry_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwLimitEntryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwLimitEntryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_limit_entry_oper',
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
  private _oper = new DataThunderFwLimitEntryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwLimitEntryOperOper) {
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
      oper: dataThunderFwLimitEntryOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderFwLimitEntryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwLimitEntryOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
