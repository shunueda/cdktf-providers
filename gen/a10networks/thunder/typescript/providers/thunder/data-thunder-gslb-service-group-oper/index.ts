// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbServiceGroupOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#id DataThunderGslbServiceGroupOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify Service Group name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#service_group_name DataThunderGslbServiceGroupOper#service_group_name}
  */
  readonly serviceGroupName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#oper DataThunderGslbServiceGroupOper#oper}
  */
  readonly oper?: DataThunderGslbServiceGroupOperOper;
}
export interface DataThunderGslbServiceGroupOperOperSessionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#aging DataThunderGslbServiceGroupOper#aging}
  */
  readonly aging?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#best DataThunderGslbServiceGroupOper#best}
  */
  readonly best?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#client DataThunderGslbServiceGroupOper#client}
  */
  readonly client?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#hits DataThunderGslbServiceGroupOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#last_second_hits DataThunderGslbServiceGroupOper#last_second_hits}
  */
  readonly lastSecondHits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#mode DataThunderGslbServiceGroupOper#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#ttl DataThunderGslbServiceGroupOper#ttl}
  */
  readonly ttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#update DataThunderGslbServiceGroupOper#update}
  */
  readonly update?: number;
}

export function dataThunderGslbServiceGroupOperOperSessionListStructToTerraform(struct?: DataThunderGslbServiceGroupOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aging: cdktf.numberToTerraform(struct!.aging),
    best: cdktf.stringToTerraform(struct!.best),
    client: cdktf.stringToTerraform(struct!.client),
    hits: cdktf.numberToTerraform(struct!.hits),
    last_second_hits: cdktf.numberToTerraform(struct!.lastSecondHits),
    mode: cdktf.stringToTerraform(struct!.mode),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    update: cdktf.numberToTerraform(struct!.update),
  }
}


export function dataThunderGslbServiceGroupOperOperSessionListStructToHclTerraform(struct?: DataThunderGslbServiceGroupOperOperSessionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aging: {
      value: cdktf.numberToHclTerraform(struct!.aging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    best: {
      value: cdktf.stringToHclTerraform(struct!.best),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client: {
      value: cdktf.stringToHclTerraform(struct!.client),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_second_hits: {
      value: cdktf.numberToHclTerraform(struct!.lastSecondHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.numberToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbServiceGroupOperOperSessionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbServiceGroupOperOperSessionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aging !== undefined) {
      hasAnyValues = true;
      internalValueResult.aging = this._aging;
    }
    if (this._best !== undefined) {
      hasAnyValues = true;
      internalValueResult.best = this._best;
    }
    if (this._client !== undefined) {
      hasAnyValues = true;
      internalValueResult.client = this._client;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._lastSecondHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSecondHits = this._lastSecondHits;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbServiceGroupOperOperSessionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aging = undefined;
      this._best = undefined;
      this._client = undefined;
      this._hits = undefined;
      this._lastSecondHits = undefined;
      this._mode = undefined;
      this._ttl = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aging = value.aging;
      this._best = value.best;
      this._client = value.client;
      this._hits = value.hits;
      this._lastSecondHits = value.lastSecondHits;
      this._mode = value.mode;
      this._ttl = value.ttl;
      this._update = value.update;
    }
  }

  // aging - computed: false, optional: true, required: false
  private _aging?: number; 
  public get aging() {
    return this.getNumberAttribute('aging');
  }
  public set aging(value: number) {
    this._aging = value;
  }
  public resetAging() {
    this._aging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingInput() {
    return this._aging;
  }

  // best - computed: false, optional: true, required: false
  private _best?: string; 
  public get best() {
    return this.getStringAttribute('best');
  }
  public set best(value: string) {
    this._best = value;
  }
  public resetBest() {
    this._best = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bestInput() {
    return this._best;
  }

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // last_second_hits - computed: false, optional: true, required: false
  private _lastSecondHits?: number; 
  public get lastSecondHits() {
    return this.getNumberAttribute('last_second_hits');
  }
  public set lastSecondHits(value: number) {
    this._lastSecondHits = value;
  }
  public resetLastSecondHits() {
    this._lastSecondHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSecondHitsInput() {
    return this._lastSecondHits;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // update - computed: false, optional: true, required: false
  private _update?: number; 
  public get update() {
    return this.getNumberAttribute('update');
  }
  public set update(value: number) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

export class DataThunderGslbServiceGroupOperOperSessionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbServiceGroupOperOperSessionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbServiceGroupOperOperSessionListStructOutputReference {
    return new DataThunderGslbServiceGroupOperOperSessionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbServiceGroupOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#matched DataThunderGslbServiceGroupOper#matched}
  */
  readonly matched?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#total_sessions DataThunderGslbServiceGroupOper#total_sessions}
  */
  readonly totalSessions?: number;
  /**
  * session_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#session_list DataThunderGslbServiceGroupOper#session_list}
  */
  readonly sessionList?: DataThunderGslbServiceGroupOperOperSessionListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbServiceGroupOperOperToTerraform(struct?: DataThunderGslbServiceGroupOperOperOutputReference | DataThunderGslbServiceGroupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matched: cdktf.numberToTerraform(struct!.matched),
    total_sessions: cdktf.numberToTerraform(struct!.totalSessions),
    session_list: cdktf.listMapper(dataThunderGslbServiceGroupOperOperSessionListStructToTerraform, true)(struct!.sessionList),
  }
}


export function dataThunderGslbServiceGroupOperOperToHclTerraform(struct?: DataThunderGslbServiceGroupOperOperOutputReference | DataThunderGslbServiceGroupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matched: {
      value: cdktf.numberToHclTerraform(struct!.matched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_sessions: {
      value: cdktf.numberToHclTerraform(struct!.totalSessions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_list: {
      value: cdktf.listMapperHcl(dataThunderGslbServiceGroupOperOperSessionListStructToHclTerraform, true)(struct!.sessionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbServiceGroupOperOperSessionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbServiceGroupOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbServiceGroupOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matched !== undefined) {
      hasAnyValues = true;
      internalValueResult.matched = this._matched;
    }
    if (this._totalSessions !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalSessions = this._totalSessions;
    }
    if (this._sessionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionList = this._sessionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbServiceGroupOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matched = undefined;
      this._totalSessions = undefined;
      this._sessionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matched = value.matched;
      this._totalSessions = value.totalSessions;
      this._sessionList.internalValue = value.sessionList;
    }
  }

  // matched - computed: false, optional: true, required: false
  private _matched?: number; 
  public get matched() {
    return this.getNumberAttribute('matched');
  }
  public set matched(value: number) {
    this._matched = value;
  }
  public resetMatched() {
    this._matched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchedInput() {
    return this._matched;
  }

  // total_sessions - computed: false, optional: true, required: false
  private _totalSessions?: number; 
  public get totalSessions() {
    return this.getNumberAttribute('total_sessions');
  }
  public set totalSessions(value: number) {
    this._totalSessions = value;
  }
  public resetTotalSessions() {
    this._totalSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalSessionsInput() {
    return this._totalSessions;
  }

  // session_list - computed: false, optional: true, required: false
  private _sessionList = new DataThunderGslbServiceGroupOperOperSessionListStructList(this, "session_list", false);
  public get sessionList() {
    return this._sessionList;
  }
  public putSessionList(value: DataThunderGslbServiceGroupOperOperSessionListStruct[] | cdktf.IResolvable) {
    this._sessionList.internalValue = value;
  }
  public resetSessionList() {
    this._sessionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionListInput() {
    return this._sessionList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper thunder_gslb_service_group_oper}
*/
export class DataThunderGslbServiceGroupOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_service_group_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbServiceGroupOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbServiceGroupOper to import
  * @param importFromId The id of the existing DataThunderGslbServiceGroupOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbServiceGroupOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_service_group_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/gslb_service_group_oper thunder_gslb_service_group_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbServiceGroupOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbServiceGroupOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_service_group_oper',
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
    this._serviceGroupName = config.serviceGroupName;
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

  // service_group_name - computed: false, optional: false, required: true
  private _serviceGroupName?: string; 
  public get serviceGroupName() {
    return this.getStringAttribute('service_group_name');
  }
  public set serviceGroupName(value: string) {
    this._serviceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNameInput() {
    return this._serviceGroupName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbServiceGroupOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbServiceGroupOperOper) {
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
      service_group_name: cdktf.stringToTerraform(this._serviceGroupName),
      oper: dataThunderGslbServiceGroupOperOperToTerraform(this._oper.internalValue),
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
      service_group_name: {
        value: cdktf.stringToHclTerraform(this._serviceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderGslbServiceGroupOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbServiceGroupOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
