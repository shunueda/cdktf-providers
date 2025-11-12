// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderRrdCgnOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#id DataThunderRrdCgnOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#oper DataThunderRrdCgnOper#oper}
  */
  readonly oper?: DataThunderRrdCgnOperOper;
}
export interface DataThunderRrdCgnOperOperCgnData {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#dslite_user_quota_create DataThunderRrdCgnOper#dslite_user_quota_create}
  */
  readonly dsliteUserQuotaCreate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#dslite_user_quota_delete DataThunderRrdCgnOper#dslite_user_quota_delete}
  */
  readonly dsliteUserQuotaDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#lsn_user_quota_create DataThunderRrdCgnOper#lsn_user_quota_create}
  */
  readonly lsnUserQuotaCreate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#lsn_user_quota_delete DataThunderRrdCgnOper#lsn_user_quota_delete}
  */
  readonly lsnUserQuotaDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#nat64_user_quota_create DataThunderRrdCgnOper#nat64_user_quota_create}
  */
  readonly nat64UserQuotaCreate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#nat64_user_quota_delete DataThunderRrdCgnOper#nat64_user_quota_delete}
  */
  readonly nat64UserQuotaDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#time DataThunderRrdCgnOper#time}
  */
  readonly time?: number;
}

export function dataThunderRrdCgnOperOperCgnDataToTerraform(struct?: DataThunderRrdCgnOperOperCgnData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dslite_user_quota_create: cdktf.numberToTerraform(struct!.dsliteUserQuotaCreate),
    dslite_user_quota_delete: cdktf.numberToTerraform(struct!.dsliteUserQuotaDelete),
    lsn_user_quota_create: cdktf.numberToTerraform(struct!.lsnUserQuotaCreate),
    lsn_user_quota_delete: cdktf.numberToTerraform(struct!.lsnUserQuotaDelete),
    nat64_user_quota_create: cdktf.numberToTerraform(struct!.nat64UserQuotaCreate),
    nat64_user_quota_delete: cdktf.numberToTerraform(struct!.nat64UserQuotaDelete),
    time: cdktf.numberToTerraform(struct!.time),
  }
}


export function dataThunderRrdCgnOperOperCgnDataToHclTerraform(struct?: DataThunderRrdCgnOperOperCgnData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dslite_user_quota_create: {
      value: cdktf.numberToHclTerraform(struct!.dsliteUserQuotaCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_user_quota_delete: {
      value: cdktf.numberToHclTerraform(struct!.dsliteUserQuotaDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_user_quota_create: {
      value: cdktf.numberToHclTerraform(struct!.lsnUserQuotaCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lsn_user_quota_delete: {
      value: cdktf.numberToHclTerraform(struct!.lsnUserQuotaDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_user_quota_create: {
      value: cdktf.numberToHclTerraform(struct!.nat64UserQuotaCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_user_quota_delete: {
      value: cdktf.numberToHclTerraform(struct!.nat64UserQuotaDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdCgnOperOperCgnDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderRrdCgnOperOperCgnData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dsliteUserQuotaCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteUserQuotaCreate = this._dsliteUserQuotaCreate;
    }
    if (this._dsliteUserQuotaDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteUserQuotaDelete = this._dsliteUserQuotaDelete;
    }
    if (this._lsnUserQuotaCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnUserQuotaCreate = this._lsnUserQuotaCreate;
    }
    if (this._lsnUserQuotaDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.lsnUserQuotaDelete = this._lsnUserQuotaDelete;
    }
    if (this._nat64UserQuotaCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64UserQuotaCreate = this._nat64UserQuotaCreate;
    }
    if (this._nat64UserQuotaDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64UserQuotaDelete = this._nat64UserQuotaDelete;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdCgnOperOperCgnData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dsliteUserQuotaCreate = undefined;
      this._dsliteUserQuotaDelete = undefined;
      this._lsnUserQuotaCreate = undefined;
      this._lsnUserQuotaDelete = undefined;
      this._nat64UserQuotaCreate = undefined;
      this._nat64UserQuotaDelete = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dsliteUserQuotaCreate = value.dsliteUserQuotaCreate;
      this._dsliteUserQuotaDelete = value.dsliteUserQuotaDelete;
      this._lsnUserQuotaCreate = value.lsnUserQuotaCreate;
      this._lsnUserQuotaDelete = value.lsnUserQuotaDelete;
      this._nat64UserQuotaCreate = value.nat64UserQuotaCreate;
      this._nat64UserQuotaDelete = value.nat64UserQuotaDelete;
      this._time = value.time;
    }
  }

  // dslite_user_quota_create - computed: false, optional: true, required: false
  private _dsliteUserQuotaCreate?: number; 
  public get dsliteUserQuotaCreate() {
    return this.getNumberAttribute('dslite_user_quota_create');
  }
  public set dsliteUserQuotaCreate(value: number) {
    this._dsliteUserQuotaCreate = value;
  }
  public resetDsliteUserQuotaCreate() {
    this._dsliteUserQuotaCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteUserQuotaCreateInput() {
    return this._dsliteUserQuotaCreate;
  }

  // dslite_user_quota_delete - computed: false, optional: true, required: false
  private _dsliteUserQuotaDelete?: number; 
  public get dsliteUserQuotaDelete() {
    return this.getNumberAttribute('dslite_user_quota_delete');
  }
  public set dsliteUserQuotaDelete(value: number) {
    this._dsliteUserQuotaDelete = value;
  }
  public resetDsliteUserQuotaDelete() {
    this._dsliteUserQuotaDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteUserQuotaDeleteInput() {
    return this._dsliteUserQuotaDelete;
  }

  // lsn_user_quota_create - computed: false, optional: true, required: false
  private _lsnUserQuotaCreate?: number; 
  public get lsnUserQuotaCreate() {
    return this.getNumberAttribute('lsn_user_quota_create');
  }
  public set lsnUserQuotaCreate(value: number) {
    this._lsnUserQuotaCreate = value;
  }
  public resetLsnUserQuotaCreate() {
    this._lsnUserQuotaCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnUserQuotaCreateInput() {
    return this._lsnUserQuotaCreate;
  }

  // lsn_user_quota_delete - computed: false, optional: true, required: false
  private _lsnUserQuotaDelete?: number; 
  public get lsnUserQuotaDelete() {
    return this.getNumberAttribute('lsn_user_quota_delete');
  }
  public set lsnUserQuotaDelete(value: number) {
    this._lsnUserQuotaDelete = value;
  }
  public resetLsnUserQuotaDelete() {
    this._lsnUserQuotaDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsnUserQuotaDeleteInput() {
    return this._lsnUserQuotaDelete;
  }

  // nat64_user_quota_create - computed: false, optional: true, required: false
  private _nat64UserQuotaCreate?: number; 
  public get nat64UserQuotaCreate() {
    return this.getNumberAttribute('nat64_user_quota_create');
  }
  public set nat64UserQuotaCreate(value: number) {
    this._nat64UserQuotaCreate = value;
  }
  public resetNat64UserQuotaCreate() {
    this._nat64UserQuotaCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64UserQuotaCreateInput() {
    return this._nat64UserQuotaCreate;
  }

  // nat64_user_quota_delete - computed: false, optional: true, required: false
  private _nat64UserQuotaDelete?: number; 
  public get nat64UserQuotaDelete() {
    return this.getNumberAttribute('nat64_user_quota_delete');
  }
  public set nat64UserQuotaDelete(value: number) {
    this._nat64UserQuotaDelete = value;
  }
  public resetNat64UserQuotaDelete() {
    this._nat64UserQuotaDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64UserQuotaDeleteInput() {
    return this._nat64UserQuotaDelete;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class DataThunderRrdCgnOperOperCgnDataList extends cdktf.ComplexList {
  public internalValue? : DataThunderRrdCgnOperOperCgnData[] | cdktf.IResolvable

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
  public get(index: number): DataThunderRrdCgnOperOperCgnDataOutputReference {
    return new DataThunderRrdCgnOperOperCgnDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderRrdCgnOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#end_time DataThunderRrdCgnOper#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#start_time DataThunderRrdCgnOper#start_time}
  */
  readonly startTime?: number;
  /**
  * cgn_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#cgn_data DataThunderRrdCgnOper#cgn_data}
  */
  readonly cgnData?: DataThunderRrdCgnOperOperCgnData[] | cdktf.IResolvable;
}

export function dataThunderRrdCgnOperOperToTerraform(struct?: DataThunderRrdCgnOperOperOutputReference | DataThunderRrdCgnOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.numberToTerraform(struct!.endTime),
    start_time: cdktf.numberToTerraform(struct!.startTime),
    cgn_data: cdktf.listMapper(dataThunderRrdCgnOperOperCgnDataToTerraform, true)(struct!.cgnData),
  }
}


export function dataThunderRrdCgnOperOperToHclTerraform(struct?: DataThunderRrdCgnOperOperOutputReference | DataThunderRrdCgnOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.numberToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_time: {
      value: cdktf.numberToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cgn_data: {
      value: cdktf.listMapperHcl(dataThunderRrdCgnOperOperCgnDataToHclTerraform, true)(struct!.cgnData),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderRrdCgnOperOperCgnDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderRrdCgnOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderRrdCgnOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._cgnData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgnData = this._cgnData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderRrdCgnOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._cgnData.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._cgnData.internalValue = value.cgnData;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // cgn_data - computed: false, optional: true, required: false
  private _cgnData = new DataThunderRrdCgnOperOperCgnDataList(this, "cgn_data", false);
  public get cgnData() {
    return this._cgnData;
  }
  public putCgnData(value: DataThunderRrdCgnOperOperCgnData[] | cdktf.IResolvable) {
    this._cgnData.internalValue = value;
  }
  public resetCgnData() {
    this._cgnData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnDataInput() {
    return this._cgnData.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper thunder_rrd_cgn_oper}
*/
export class DataThunderRrdCgnOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_rrd_cgn_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderRrdCgnOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderRrdCgnOper to import
  * @param importFromId The id of the existing DataThunderRrdCgnOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderRrdCgnOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_rrd_cgn_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/rrd_cgn_oper thunder_rrd_cgn_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderRrdCgnOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderRrdCgnOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_rrd_cgn_oper',
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
  private _oper = new DataThunderRrdCgnOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderRrdCgnOperOper) {
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
      oper: dataThunderRrdCgnOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderRrdCgnOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderRrdCgnOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
