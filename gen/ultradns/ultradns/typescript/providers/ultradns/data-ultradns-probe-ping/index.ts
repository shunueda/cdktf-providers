// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataUltradnsProbePingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping#agents DataUltradnsProbePing#agents}
  */
  readonly agents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping#guid DataUltradnsProbePing#guid}
  */
  readonly guid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping#id DataUltradnsProbePing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping#interval DataUltradnsProbePing#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping#owner_name DataUltradnsProbePing#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping#pool_record DataUltradnsProbePing#pool_record}
  */
  readonly poolRecord?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping#pool_type DataUltradnsProbePing#pool_type}
  */
  readonly poolType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping#threshold DataUltradnsProbePing#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping#zone_name DataUltradnsProbePing#zone_name}
  */
  readonly zoneName: string;
}
export interface DataUltradnsProbePingAverageLimit {
}

export function dataUltradnsProbePingAverageLimitToTerraform(struct?: DataUltradnsProbePingAverageLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsProbePingAverageLimitToHclTerraform(struct?: DataUltradnsProbePingAverageLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsProbePingAverageLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataUltradnsProbePingAverageLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsProbePingAverageLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // fail - computed: true, optional: false, required: false
  public get fail() {
    return this.getNumberAttribute('fail');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getNumberAttribute('warning');
  }
}

export class DataUltradnsProbePingAverageLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsProbePingAverageLimitOutputReference {
    return new DataUltradnsProbePingAverageLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsProbePingAvgRunLimit {
}

export function dataUltradnsProbePingAvgRunLimitToTerraform(struct?: DataUltradnsProbePingAvgRunLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsProbePingAvgRunLimitToHclTerraform(struct?: DataUltradnsProbePingAvgRunLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsProbePingAvgRunLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataUltradnsProbePingAvgRunLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsProbePingAvgRunLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // fail - computed: true, optional: false, required: false
  public get fail() {
    return this.getNumberAttribute('fail');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getNumberAttribute('warning');
  }
}

export class DataUltradnsProbePingAvgRunLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsProbePingAvgRunLimitOutputReference {
    return new DataUltradnsProbePingAvgRunLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsProbePingLossPercentLimit {
}

export function dataUltradnsProbePingLossPercentLimitToTerraform(struct?: DataUltradnsProbePingLossPercentLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsProbePingLossPercentLimitToHclTerraform(struct?: DataUltradnsProbePingLossPercentLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsProbePingLossPercentLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataUltradnsProbePingLossPercentLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsProbePingLossPercentLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // fail - computed: true, optional: false, required: false
  public get fail() {
    return this.getNumberAttribute('fail');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getNumberAttribute('warning');
  }
}

export class DataUltradnsProbePingLossPercentLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsProbePingLossPercentLimitOutputReference {
    return new DataUltradnsProbePingLossPercentLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsProbePingRunLimit {
}

export function dataUltradnsProbePingRunLimitToTerraform(struct?: DataUltradnsProbePingRunLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsProbePingRunLimitToHclTerraform(struct?: DataUltradnsProbePingRunLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsProbePingRunLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataUltradnsProbePingRunLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsProbePingRunLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // fail - computed: true, optional: false, required: false
  public get fail() {
    return this.getNumberAttribute('fail');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getNumberAttribute('warning');
  }
}

export class DataUltradnsProbePingRunLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsProbePingRunLimitOutputReference {
    return new DataUltradnsProbePingRunLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataUltradnsProbePingTotalLimit {
}

export function dataUltradnsProbePingTotalLimitToTerraform(struct?: DataUltradnsProbePingTotalLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataUltradnsProbePingTotalLimitToHclTerraform(struct?: DataUltradnsProbePingTotalLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataUltradnsProbePingTotalLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataUltradnsProbePingTotalLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataUltradnsProbePingTotalLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // fail - computed: true, optional: false, required: false
  public get fail() {
    return this.getNumberAttribute('fail');
  }

  // warning - computed: true, optional: false, required: false
  public get warning() {
    return this.getNumberAttribute('warning');
  }
}

export class DataUltradnsProbePingTotalLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataUltradnsProbePingTotalLimitOutputReference {
    return new DataUltradnsProbePingTotalLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping ultradns_probe_ping}
*/
export class DataUltradnsProbePing extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_probe_ping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataUltradnsProbePing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataUltradnsProbePing to import
  * @param importFromId The id of the existing DataUltradnsProbePing that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataUltradnsProbePing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_probe_ping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/data-sources/probe_ping ultradns_probe_ping} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataUltradnsProbePingConfig
  */
  public constructor(scope: Construct, id: string, config: DataUltradnsProbePingConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_probe_ping',
      terraformGeneratorMetadata: {
        providerName: 'ultradns',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agents = config.agents;
    this._guid = config.guid;
    this._id = config.id;
    this._interval = config.interval;
    this._ownerName = config.ownerName;
    this._poolRecord = config.poolRecord;
    this._poolType = config.poolType;
    this._threshold = config.threshold;
    this._zoneName = config.zoneName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agents - computed: true, optional: true, required: false
  private _agents?: string[]; 
  public get agents() {
    return cdktf.Fn.tolist(this.getListAttribute('agents'));
  }
  public set agents(value: string[]) {
    this._agents = value;
  }
  public resetAgents() {
    this._agents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents;
  }

  // average_limit - computed: true, optional: false, required: false
  private _averageLimit = new DataUltradnsProbePingAverageLimitList(this, "average_limit", false);
  public get averageLimit() {
    return this._averageLimit;
  }

  // avg_run_limit - computed: true, optional: false, required: false
  private _avgRunLimit = new DataUltradnsProbePingAvgRunLimitList(this, "avg_run_limit", false);
  public get avgRunLimit() {
    return this._avgRunLimit;
  }

  // guid - computed: false, optional: true, required: false
  private _guid?: string; 
  public get guid() {
    return this.getStringAttribute('guid');
  }
  public set guid(value: string) {
    this._guid = value;
  }
  public resetGuid() {
    this._guid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guidInput() {
    return this._guid;
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

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // loss_percent_limit - computed: true, optional: false, required: false
  private _lossPercentLimit = new DataUltradnsProbePingLossPercentLimitList(this, "loss_percent_limit", false);
  public get lossPercentLimit() {
    return this._lossPercentLimit;
  }

  // owner_name - computed: false, optional: false, required: true
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // packet_size - computed: true, optional: false, required: false
  public get packetSize() {
    return this.getNumberAttribute('packet_size');
  }

  // packets - computed: true, optional: false, required: false
  public get packets() {
    return this.getNumberAttribute('packets');
  }

  // pool_record - computed: true, optional: true, required: false
  private _poolRecord?: string; 
  public get poolRecord() {
    return this.getStringAttribute('pool_record');
  }
  public set poolRecord(value: string) {
    this._poolRecord = value;
  }
  public resetPoolRecord() {
    this._poolRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolRecordInput() {
    return this._poolRecord;
  }

  // pool_type - computed: false, optional: true, required: false
  private _poolType?: string; 
  public get poolType() {
    return this.getStringAttribute('pool_type');
  }
  public set poolType(value: string) {
    this._poolType = value;
  }
  public resetPoolType() {
    this._poolType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolTypeInput() {
    return this._poolType;
  }

  // run_limit - computed: true, optional: false, required: false
  private _runLimit = new DataUltradnsProbePingRunLimitList(this, "run_limit", false);
  public get runLimit() {
    return this._runLimit;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // total_limit - computed: true, optional: false, required: false
  private _totalLimit = new DataUltradnsProbePingTotalLimitList(this, "total_limit", false);
  public get totalLimit() {
    return this._totalLimit;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agents),
      guid: cdktf.stringToTerraform(this._guid),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      pool_record: cdktf.stringToTerraform(this._poolRecord),
      pool_type: cdktf.stringToTerraform(this._poolType),
      threshold: cdktf.numberToTerraform(this._threshold),
      zone_name: cdktf.stringToTerraform(this._zoneName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      guid: {
        value: cdktf.stringToHclTerraform(this._guid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_record: {
        value: cdktf.stringToHclTerraform(this._poolRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_type: {
        value: cdktf.stringToHclTerraform(this._poolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
