// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_ja4_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSslJa4OperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_ja4_oper#id DataThunderSlbSslJa4Oper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_ja4_oper#oper DataThunderSlbSslJa4Oper#oper}
  */
  readonly oper?: DataThunderSlbSslJa4OperOper;
}
export interface DataThunderSlbSslJa4OperOperRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_ja4_oper#addr_v4 DataThunderSlbSslJa4Oper#addr_v4}
  */
  readonly addrV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_ja4_oper#addr_v6 DataThunderSlbSslJa4Oper#addr_v6}
  */
  readonly addrV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_ja4_oper#amount DataThunderSlbSslJa4Oper#amount}
  */
  readonly amount?: number;
}

export function dataThunderSlbSslJa4OperOperRecordToTerraform(struct?: DataThunderSlbSslJa4OperOperRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_v4: cdktf.stringToTerraform(struct!.addrV4),
    addr_v6: cdktf.stringToTerraform(struct!.addrV6),
    amount: cdktf.numberToTerraform(struct!.amount),
  }
}


export function dataThunderSlbSslJa4OperOperRecordToHclTerraform(struct?: DataThunderSlbSslJa4OperOperRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_v4: {
      value: cdktf.stringToHclTerraform(struct!.addrV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addr_v6: {
      value: cdktf.stringToHclTerraform(struct!.addrV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    amount: {
      value: cdktf.numberToHclTerraform(struct!.amount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslJa4OperOperRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSslJa4OperOperRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrV4 = this._addrV4;
    }
    if (this._addrV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrV6 = this._addrV6;
    }
    if (this._amount !== undefined) {
      hasAnyValues = true;
      internalValueResult.amount = this._amount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslJa4OperOperRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrV4 = undefined;
      this._addrV6 = undefined;
      this._amount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrV4 = value.addrV4;
      this._addrV6 = value.addrV6;
      this._amount = value.amount;
    }
  }

  // addr_v4 - computed: false, optional: true, required: false
  private _addrV4?: string; 
  public get addrV4() {
    return this.getStringAttribute('addr_v4');
  }
  public set addrV4(value: string) {
    this._addrV4 = value;
  }
  public resetAddrV4() {
    this._addrV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrV4Input() {
    return this._addrV4;
  }

  // addr_v6 - computed: false, optional: true, required: false
  private _addrV6?: string; 
  public get addrV6() {
    return this.getStringAttribute('addr_v6');
  }
  public set addrV6(value: string) {
    this._addrV6 = value;
  }
  public resetAddrV6() {
    this._addrV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrV6Input() {
    return this._addrV6;
  }

  // amount - computed: false, optional: true, required: false
  private _amount?: number; 
  public get amount() {
    return this.getNumberAttribute('amount');
  }
  public set amount(value: number) {
    this._amount = value;
  }
  public resetAmount() {
    this._amount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountInput() {
    return this._amount;
  }
}

export class DataThunderSlbSslJa4OperOperRecordList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSslJa4OperOperRecord[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSslJa4OperOperRecordOutputReference {
    return new DataThunderSlbSslJa4OperOperRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSslJa4OperOper {
  /**
  * record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_ja4_oper#record DataThunderSlbSslJa4Oper#record}
  */
  readonly record?: DataThunderSlbSslJa4OperOperRecord[] | cdktf.IResolvable;
}

export function dataThunderSlbSslJa4OperOperToTerraform(struct?: DataThunderSlbSslJa4OperOperOutputReference | DataThunderSlbSslJa4OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    record: cdktf.listMapper(dataThunderSlbSslJa4OperOperRecordToTerraform, true)(struct!.record),
  }
}


export function dataThunderSlbSslJa4OperOperToHclTerraform(struct?: DataThunderSlbSslJa4OperOperOutputReference | DataThunderSlbSslJa4OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    record: {
      value: cdktf.listMapperHcl(dataThunderSlbSslJa4OperOperRecordToHclTerraform, true)(struct!.record),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSslJa4OperOperRecordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSslJa4OperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSslJa4OperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._record?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.record = this._record?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSslJa4OperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._record.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._record.internalValue = value.record;
    }
  }

  // record - computed: false, optional: true, required: false
  private _record = new DataThunderSlbSslJa4OperOperRecordList(this, "record", false);
  public get record() {
    return this._record;
  }
  public putRecord(value: DataThunderSlbSslJa4OperOperRecord[] | cdktf.IResolvable) {
    this._record.internalValue = value;
  }
  public resetRecord() {
    this._record.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_ja4_oper thunder_slb_ssl_ja4_oper}
*/
export class DataThunderSlbSslJa4Oper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_ja4_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSslJa4Oper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSslJa4Oper to import
  * @param importFromId The id of the existing DataThunderSlbSslJa4Oper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_ja4_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSslJa4Oper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_ja4_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ssl_ja4_oper thunder_slb_ssl_ja4_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSslJa4OperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSslJa4OperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_ja4_oper',
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
  private _oper = new DataThunderSlbSslJa4OperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSslJa4OperOper) {
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
      oper: dataThunderSlbSslJa4OperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSslJa4OperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSslJa4OperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
