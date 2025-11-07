// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TcpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#act_on_probes Tcpool#act_on_probes}
  */
  readonly actOnProbes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#failure_threshold Tcpool#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#id Tcpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#max_to_lb Tcpool#max_to_lb}
  */
  readonly maxToLb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#owner_name Tcpool#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#pool_description Tcpool#pool_description}
  */
  readonly poolDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#record_type Tcpool#record_type}
  */
  readonly recordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#run_probes Tcpool#run_probes}
  */
  readonly runProbes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#ttl Tcpool#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#zone_name Tcpool#zone_name}
  */
  readonly zoneName: string;
  /**
  * backup_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#backup_record Tcpool#backup_record}
  */
  readonly backupRecord?: TcpoolBackupRecord;
  /**
  * rdata_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#rdata_info Tcpool#rdata_info}
  */
  readonly rdataInfo: TcpoolRdataInfo[] | cdktf.IResolvable;
}
export interface TcpoolBackupRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#failover_delay Tcpool#failover_delay}
  */
  readonly failoverDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#rdata Tcpool#rdata}
  */
  readonly rdata: string;
}

export function tcpoolBackupRecordToTerraform(struct?: TcpoolBackupRecordOutputReference | TcpoolBackupRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_delay: cdktf.numberToTerraform(struct!.failoverDelay),
    rdata: cdktf.stringToTerraform(struct!.rdata),
  }
}


export function tcpoolBackupRecordToHclTerraform(struct?: TcpoolBackupRecordOutputReference | TcpoolBackupRecord): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_delay: {
      value: cdktf.numberToHclTerraform(struct!.failoverDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdata: {
      value: cdktf.stringToHclTerraform(struct!.rdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcpoolBackupRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TcpoolBackupRecord | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverDelay = this._failoverDelay;
    }
    if (this._rdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcpoolBackupRecord | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failoverDelay = undefined;
      this._rdata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failoverDelay = value.failoverDelay;
      this._rdata = value.rdata;
    }
  }

  // available_to_serve - computed: true, optional: false, required: false
  public get availableToServe() {
    return this.getBooleanAttribute('available_to_serve');
  }

  // failover_delay - computed: false, optional: true, required: false
  private _failoverDelay?: number; 
  public get failoverDelay() {
    return this.getNumberAttribute('failover_delay');
  }
  public set failoverDelay(value: number) {
    this._failoverDelay = value;
  }
  public resetFailoverDelay() {
    this._failoverDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverDelayInput() {
    return this._failoverDelay;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }
}
export interface TcpoolRdataInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#failover_delay Tcpool#failover_delay}
  */
  readonly failoverDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#priority Tcpool#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#rdata Tcpool#rdata}
  */
  readonly rdata: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#run_probes Tcpool#run_probes}
  */
  readonly runProbes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#state Tcpool#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#threshold Tcpool#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#weight Tcpool#weight}
  */
  readonly weight?: number;
}

export function tcpoolRdataInfoToTerraform(struct?: TcpoolRdataInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_delay: cdktf.numberToTerraform(struct!.failoverDelay),
    priority: cdktf.numberToTerraform(struct!.priority),
    rdata: cdktf.stringToTerraform(struct!.rdata),
    run_probes: cdktf.booleanToTerraform(struct!.runProbes),
    state: cdktf.stringToTerraform(struct!.state),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function tcpoolRdataInfoToHclTerraform(struct?: TcpoolRdataInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failover_delay: {
      value: cdktf.numberToHclTerraform(struct!.failoverDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdata: {
      value: cdktf.stringToHclTerraform(struct!.rdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_probes: {
      value: cdktf.booleanToHclTerraform(struct!.runProbes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TcpoolRdataInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TcpoolRdataInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failoverDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverDelay = this._failoverDelay;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._rdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdata = this._rdata;
    }
    if (this._runProbes !== undefined) {
      hasAnyValues = true;
      internalValueResult.runProbes = this._runProbes;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TcpoolRdataInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverDelay = undefined;
      this._priority = undefined;
      this._rdata = undefined;
      this._runProbes = undefined;
      this._state = undefined;
      this._threshold = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failoverDelay = value.failoverDelay;
      this._priority = value.priority;
      this._rdata = value.rdata;
      this._runProbes = value.runProbes;
      this._state = value.state;
      this._threshold = value.threshold;
      this._weight = value.weight;
    }
  }

  // available_to_serve - computed: true, optional: false, required: false
  public get availableToServe() {
    return this.getBooleanAttribute('available_to_serve');
  }

  // failover_delay - computed: false, optional: true, required: false
  private _failoverDelay?: number; 
  public get failoverDelay() {
    return this.getNumberAttribute('failover_delay');
  }
  public set failoverDelay(value: number) {
    this._failoverDelay = value;
  }
  public resetFailoverDelay() {
    this._failoverDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverDelayInput() {
    return this._failoverDelay;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // rdata - computed: false, optional: false, required: true
  private _rdata?: string; 
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
  public set rdata(value: string) {
    this._rdata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInput() {
    return this._rdata;
  }

  // run_probes - computed: false, optional: true, required: false
  private _runProbes?: boolean | cdktf.IResolvable; 
  public get runProbes() {
    return this.getBooleanAttribute('run_probes');
  }
  public set runProbes(value: boolean | cdktf.IResolvable) {
    this._runProbes = value;
  }
  public resetRunProbes() {
    this._runProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runProbesInput() {
    return this._runProbes;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // threshold - computed: false, optional: true, required: false
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class TcpoolRdataInfoList extends cdktf.ComplexList {
  public internalValue? : TcpoolRdataInfo[] | cdktf.IResolvable

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
  public get(index: number): TcpoolRdataInfoOutputReference {
    return new TcpoolRdataInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool ultradns_tcpool}
*/
export class Tcpool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_tcpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tcpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tcpool to import
  * @param importFromId The id of the existing Tcpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tcpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_tcpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/tcpool ultradns_tcpool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TcpoolConfig
  */
  public constructor(scope: Construct, id: string, config: TcpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_tcpool',
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
    this._actOnProbes = config.actOnProbes;
    this._failureThreshold = config.failureThreshold;
    this._id = config.id;
    this._maxToLb = config.maxToLb;
    this._ownerName = config.ownerName;
    this._poolDescription = config.poolDescription;
    this._recordType = config.recordType;
    this._runProbes = config.runProbes;
    this._ttl = config.ttl;
    this._zoneName = config.zoneName;
    this._backupRecord.internalValue = config.backupRecord;
    this._rdataInfo.internalValue = config.rdataInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // act_on_probes - computed: false, optional: true, required: false
  private _actOnProbes?: boolean | cdktf.IResolvable; 
  public get actOnProbes() {
    return this.getBooleanAttribute('act_on_probes');
  }
  public set actOnProbes(value: boolean | cdktf.IResolvable) {
    this._actOnProbes = value;
  }
  public resetActOnProbes() {
    this._actOnProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actOnProbesInput() {
    return this._actOnProbes;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
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

  // max_to_lb - computed: false, optional: true, required: false
  private _maxToLb?: number; 
  public get maxToLb() {
    return this.getNumberAttribute('max_to_lb');
  }
  public set maxToLb(value: number) {
    this._maxToLb = value;
  }
  public resetMaxToLb() {
    this._maxToLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxToLbInput() {
    return this._maxToLb;
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

  // pool_description - computed: false, optional: true, required: false
  private _poolDescription?: string; 
  public get poolDescription() {
    return this.getStringAttribute('pool_description');
  }
  public set poolDescription(value: string) {
    this._poolDescription = value;
  }
  public resetPoolDescription() {
    this._poolDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolDescriptionInput() {
    return this._poolDescription;
  }

  // record_type - computed: false, optional: false, required: true
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // run_probes - computed: false, optional: true, required: false
  private _runProbes?: boolean | cdktf.IResolvable; 
  public get runProbes() {
    return this.getBooleanAttribute('run_probes');
  }
  public set runProbes(value: boolean | cdktf.IResolvable) {
    this._runProbes = value;
  }
  public resetRunProbes() {
    this._runProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runProbesInput() {
    return this._runProbes;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // backup_record - computed: false, optional: true, required: false
  private _backupRecord = new TcpoolBackupRecordOutputReference(this, "backup_record");
  public get backupRecord() {
    return this._backupRecord;
  }
  public putBackupRecord(value: TcpoolBackupRecord) {
    this._backupRecord.internalValue = value;
  }
  public resetBackupRecord() {
    this._backupRecord.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRecordInput() {
    return this._backupRecord.internalValue;
  }

  // rdata_info - computed: false, optional: false, required: true
  private _rdataInfo = new TcpoolRdataInfoList(this, "rdata_info", true);
  public get rdataInfo() {
    return this._rdataInfo;
  }
  public putRdataInfo(value: TcpoolRdataInfo[] | cdktf.IResolvable) {
    this._rdataInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rdataInfoInput() {
    return this._rdataInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      act_on_probes: cdktf.booleanToTerraform(this._actOnProbes),
      failure_threshold: cdktf.numberToTerraform(this._failureThreshold),
      id: cdktf.stringToTerraform(this._id),
      max_to_lb: cdktf.numberToTerraform(this._maxToLb),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      pool_description: cdktf.stringToTerraform(this._poolDescription),
      record_type: cdktf.stringToTerraform(this._recordType),
      run_probes: cdktf.booleanToTerraform(this._runProbes),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      backup_record: tcpoolBackupRecordToTerraform(this._backupRecord.internalValue),
      rdata_info: cdktf.listMapper(tcpoolRdataInfoToTerraform, true)(this._rdataInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      act_on_probes: {
        value: cdktf.booleanToHclTerraform(this._actOnProbes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      failure_threshold: {
        value: cdktf.numberToHclTerraform(this._failureThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_to_lb: {
        value: cdktf.numberToHclTerraform(this._maxToLb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      owner_name: {
        value: cdktf.stringToHclTerraform(this._ownerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_description: {
        value: cdktf.stringToHclTerraform(this._poolDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_probes: {
        value: cdktf.booleanToHclTerraform(this._runProbes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
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
      backup_record: {
        value: tcpoolBackupRecordToHclTerraform(this._backupRecord.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TcpoolBackupRecordList",
      },
      rdata_info: {
        value: cdktf.listMapperHcl(tcpoolRdataInfoToHclTerraform, true)(this._rdataInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TcpoolRdataInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
