// https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SbpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#act_on_probes Sbpool#act_on_probes}
  */
  readonly actOnProbes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#failure_threshold Sbpool#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#id Sbpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#max_active Sbpool#max_active}
  */
  readonly maxActive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#max_served Sbpool#max_served}
  */
  readonly maxServed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#order Sbpool#order}
  */
  readonly order?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#owner_name Sbpool#owner_name}
  */
  readonly ownerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#pool_description Sbpool#pool_description}
  */
  readonly poolDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#record_type Sbpool#record_type}
  */
  readonly recordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#run_probes Sbpool#run_probes}
  */
  readonly runProbes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#ttl Sbpool#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#zone_name Sbpool#zone_name}
  */
  readonly zoneName: string;
  /**
  * backup_record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#backup_record Sbpool#backup_record}
  */
  readonly backupRecord?: SbpoolBackupRecord[] | cdktf.IResolvable;
  /**
  * rdata_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#rdata_info Sbpool#rdata_info}
  */
  readonly rdataInfo: SbpoolRdataInfo[] | cdktf.IResolvable;
}
export interface SbpoolBackupRecord {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#failover_delay Sbpool#failover_delay}
  */
  readonly failoverDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#rdata Sbpool#rdata}
  */
  readonly rdata: string;
}

export function sbpoolBackupRecordToTerraform(struct?: SbpoolBackupRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failover_delay: cdktf.numberToTerraform(struct!.failoverDelay),
    rdata: cdktf.stringToTerraform(struct!.rdata),
  }
}


export function sbpoolBackupRecordToHclTerraform(struct?: SbpoolBackupRecord | cdktf.IResolvable): any {
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

export class SbpoolBackupRecordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SbpoolBackupRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: SbpoolBackupRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverDelay = undefined;
      this._rdata = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class SbpoolBackupRecordList extends cdktf.ComplexList {
  public internalValue? : SbpoolBackupRecord[] | cdktf.IResolvable

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
  public get(index: number): SbpoolBackupRecordOutputReference {
    return new SbpoolBackupRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SbpoolRdataInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#failover_delay Sbpool#failover_delay}
  */
  readonly failoverDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#priority Sbpool#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#rdata Sbpool#rdata}
  */
  readonly rdata: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#run_probes Sbpool#run_probes}
  */
  readonly runProbes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#state Sbpool#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#threshold Sbpool#threshold}
  */
  readonly threshold?: number;
}

export function sbpoolRdataInfoToTerraform(struct?: SbpoolRdataInfo | cdktf.IResolvable): any {
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
  }
}


export function sbpoolRdataInfoToHclTerraform(struct?: SbpoolRdataInfo | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SbpoolRdataInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SbpoolRdataInfo | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SbpoolRdataInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failoverDelay = undefined;
      this._priority = undefined;
      this._rdata = undefined;
      this._runProbes = undefined;
      this._state = undefined;
      this._threshold = undefined;
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
}

export class SbpoolRdataInfoList extends cdktf.ComplexList {
  public internalValue? : SbpoolRdataInfo[] | cdktf.IResolvable

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
  public get(index: number): SbpoolRdataInfoOutputReference {
    return new SbpoolRdataInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool ultradns_sbpool}
*/
export class Sbpool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ultradns_sbpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sbpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sbpool to import
  * @param importFromId The id of the existing Sbpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sbpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ultradns_sbpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ultradns/ultradns/1.11.1/docs/resources/sbpool ultradns_sbpool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SbpoolConfig
  */
  public constructor(scope: Construct, id: string, config: SbpoolConfig) {
    super(scope, id, {
      terraformResourceType: 'ultradns_sbpool',
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
    this._maxActive = config.maxActive;
    this._maxServed = config.maxServed;
    this._order = config.order;
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

  // max_active - computed: false, optional: true, required: false
  private _maxActive?: number; 
  public get maxActive() {
    return this.getNumberAttribute('max_active');
  }
  public set maxActive(value: number) {
    this._maxActive = value;
  }
  public resetMaxActive() {
    this._maxActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxActiveInput() {
    return this._maxActive;
  }

  // max_served - computed: true, optional: true, required: false
  private _maxServed?: number; 
  public get maxServed() {
    return this.getNumberAttribute('max_served');
  }
  public set maxServed(value: number) {
    this._maxServed = value;
  }
  public resetMaxServed() {
    this._maxServed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxServedInput() {
    return this._maxServed;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
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
  private _backupRecord = new SbpoolBackupRecordList(this, "backup_record", true);
  public get backupRecord() {
    return this._backupRecord;
  }
  public putBackupRecord(value: SbpoolBackupRecord[] | cdktf.IResolvable) {
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
  private _rdataInfo = new SbpoolRdataInfoList(this, "rdata_info", true);
  public get rdataInfo() {
    return this._rdataInfo;
  }
  public putRdataInfo(value: SbpoolRdataInfo[] | cdktf.IResolvable) {
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
      max_active: cdktf.numberToTerraform(this._maxActive),
      max_served: cdktf.numberToTerraform(this._maxServed),
      order: cdktf.stringToTerraform(this._order),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      pool_description: cdktf.stringToTerraform(this._poolDescription),
      record_type: cdktf.stringToTerraform(this._recordType),
      run_probes: cdktf.booleanToTerraform(this._runProbes),
      ttl: cdktf.numberToTerraform(this._ttl),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      backup_record: cdktf.listMapper(sbpoolBackupRecordToTerraform, true)(this._backupRecord.internalValue),
      rdata_info: cdktf.listMapper(sbpoolRdataInfoToTerraform, true)(this._rdataInfo.internalValue),
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
      max_active: {
        value: cdktf.numberToHclTerraform(this._maxActive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_served: {
        value: cdktf.numberToHclTerraform(this._maxServed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
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
        value: cdktf.listMapperHcl(sbpoolBackupRecordToHclTerraform, true)(this._backupRecord.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SbpoolBackupRecordList",
      },
      rdata_info: {
        value: cdktf.listMapperHcl(sbpoolRdataInfoToHclTerraform, true)(this._rdataInfo.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SbpoolRdataInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
