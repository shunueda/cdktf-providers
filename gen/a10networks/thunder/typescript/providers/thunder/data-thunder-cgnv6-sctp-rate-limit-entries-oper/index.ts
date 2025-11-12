// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6SctpRateLimitEntriesOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper#id DataThunderCgnv6SctpRateLimitEntriesOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper#oper DataThunderCgnv6SctpRateLimitEntriesOper#oper}
  */
  readonly oper?: DataThunderCgnv6SctpRateLimitEntriesOperOper;
}
export interface DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper#address DataThunderCgnv6SctpRateLimitEntriesOper#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper#direction DataThunderCgnv6SctpRateLimitEntriesOper#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper#pps DataThunderCgnv6SctpRateLimitEntriesOper#pps}
  */
  readonly pps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper#rate_limit DataThunderCgnv6SctpRateLimitEntriesOper#rate_limit}
  */
  readonly rateLimit?: number;
}

export function dataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStructToTerraform(struct?: DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    direction: cdktf.stringToTerraform(struct!.direction),
    pps: cdktf.numberToTerraform(struct!.pps),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
  }
}


export function dataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStructToHclTerraform(struct?: DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStruct | cdktf.IResolvable): any {
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
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pps: {
      value: cdktf.numberToHclTerraform(struct!.pps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._pps !== undefined) {
      hasAnyValues = true;
      internalValueResult.pps = this._pps;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._direction = undefined;
      this._pps = undefined;
      this._rateLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._direction = value.direction;
      this._pps = value.pps;
      this._rateLimit = value.rateLimit;
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

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // pps - computed: false, optional: true, required: false
  private _pps?: number; 
  public get pps() {
    return this.getNumberAttribute('pps');
  }
  public set pps(value: number) {
    this._pps = value;
  }
  public resetPps() {
    this._pps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppsInput() {
    return this._pps;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }
}

export class DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStructOutputReference {
    return new DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6SctpRateLimitEntriesOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper#entry_count DataThunderCgnv6SctpRateLimitEntriesOper#entry_count}
  */
  readonly entryCount?: number;
  /**
  * rate_limit_entries_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper#rate_limit_entries_list DataThunderCgnv6SctpRateLimitEntriesOper#rate_limit_entries_list}
  */
  readonly rateLimitEntriesList?: DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6SctpRateLimitEntriesOperOperToTerraform(struct?: DataThunderCgnv6SctpRateLimitEntriesOperOperOutputReference | DataThunderCgnv6SctpRateLimitEntriesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_count: cdktf.numberToTerraform(struct!.entryCount),
    rate_limit_entries_list: cdktf.listMapper(dataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStructToTerraform, true)(struct!.rateLimitEntriesList),
  }
}


export function dataThunderCgnv6SctpRateLimitEntriesOperOperToHclTerraform(struct?: DataThunderCgnv6SctpRateLimitEntriesOperOperOutputReference | DataThunderCgnv6SctpRateLimitEntriesOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_count: {
      value: cdktf.numberToHclTerraform(struct!.entryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_entries_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStructToHclTerraform, true)(struct!.rateLimitEntriesList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6SctpRateLimitEntriesOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6SctpRateLimitEntriesOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCount = this._entryCount;
    }
    if (this._rateLimitEntriesList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitEntriesList = this._rateLimitEntriesList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6SctpRateLimitEntriesOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryCount = undefined;
      this._rateLimitEntriesList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryCount = value.entryCount;
      this._rateLimitEntriesList.internalValue = value.rateLimitEntriesList;
    }
  }

  // entry_count - computed: false, optional: true, required: false
  private _entryCount?: number; 
  public get entryCount() {
    return this.getNumberAttribute('entry_count');
  }
  public set entryCount(value: number) {
    this._entryCount = value;
  }
  public resetEntryCount() {
    this._entryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCountInput() {
    return this._entryCount;
  }

  // rate_limit_entries_list - computed: false, optional: true, required: false
  private _rateLimitEntriesList = new DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStructList(this, "rate_limit_entries_list", false);
  public get rateLimitEntriesList() {
    return this._rateLimitEntriesList;
  }
  public putRateLimitEntriesList(value: DataThunderCgnv6SctpRateLimitEntriesOperOperRateLimitEntriesListStruct[] | cdktf.IResolvable) {
    this._rateLimitEntriesList.internalValue = value;
  }
  public resetRateLimitEntriesList() {
    this._rateLimitEntriesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitEntriesListInput() {
    return this._rateLimitEntriesList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper thunder_cgnv6_sctp_rate_limit_entries_oper}
*/
export class DataThunderCgnv6SctpRateLimitEntriesOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_sctp_rate_limit_entries_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6SctpRateLimitEntriesOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6SctpRateLimitEntriesOper to import
  * @param importFromId The id of the existing DataThunderCgnv6SctpRateLimitEntriesOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6SctpRateLimitEntriesOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_sctp_rate_limit_entries_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sctp_rate_limit_entries_oper thunder_cgnv6_sctp_rate_limit_entries_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6SctpRateLimitEntriesOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6SctpRateLimitEntriesOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_sctp_rate_limit_entries_oper',
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
  private _oper = new DataThunderCgnv6SctpRateLimitEntriesOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6SctpRateLimitEntriesOperOper) {
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
      oper: dataThunderCgnv6SctpRateLimitEntriesOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6SctpRateLimitEntriesOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6SctpRateLimitEntriesOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
