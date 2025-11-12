// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsReassignPartitionsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#execute_at DmsReassignPartitionsV2#execute_at}
  */
  readonly executeAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#id DmsReassignPartitionsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#instance_id DmsReassignPartitionsV2#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#is_schedule DmsReassignPartitionsV2#is_schedule}
  */
  readonly isSchedule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#throttle DmsReassignPartitionsV2#throttle}
  */
  readonly throttle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#time_estimate DmsReassignPartitionsV2#time_estimate}
  */
  readonly timeEstimate?: boolean | cdktf.IResolvable;
  /**
  * reassignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#reassignments DmsReassignPartitionsV2#reassignments}
  */
  readonly reassignments: DmsReassignPartitionsV2Reassignments[] | cdktf.IResolvable;
}
export interface DmsReassignPartitionsV2ReassignmentsAssignments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#partition DmsReassignPartitionsV2#partition}
  */
  readonly partition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#partition_brokers DmsReassignPartitionsV2#partition_brokers}
  */
  readonly partitionBrokers?: number[];
}

export function dmsReassignPartitionsV2ReassignmentsAssignmentsToTerraform(struct?: DmsReassignPartitionsV2ReassignmentsAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition: cdktf.numberToTerraform(struct!.partition),
    partition_brokers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.partitionBrokers),
  }
}


export function dmsReassignPartitionsV2ReassignmentsAssignmentsToHclTerraform(struct?: DmsReassignPartitionsV2ReassignmentsAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_brokers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.partitionBrokers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DmsReassignPartitionsV2ReassignmentsAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._partitionBrokers !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionBrokers = this._partitionBrokers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsReassignPartitionsV2ReassignmentsAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._partition = undefined;
      this._partitionBrokers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._partition = value.partition;
      this._partitionBrokers = value.partitionBrokers;
    }
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // partition_brokers - computed: false, optional: true, required: false
  private _partitionBrokers?: number[]; 
  public get partitionBrokers() {
    return this.getNumberListAttribute('partition_brokers');
  }
  public set partitionBrokers(value: number[]) {
    this._partitionBrokers = value;
  }
  public resetPartitionBrokers() {
    this._partitionBrokers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionBrokersInput() {
    return this._partitionBrokers;
  }
}

export class DmsReassignPartitionsV2ReassignmentsAssignmentsList extends cdktf.ComplexList {
  public internalValue? : DmsReassignPartitionsV2ReassignmentsAssignments[] | cdktf.IResolvable

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
  public get(index: number): DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference {
    return new DmsReassignPartitionsV2ReassignmentsAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DmsReassignPartitionsV2Reassignments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#brokers DmsReassignPartitionsV2#brokers}
  */
  readonly brokers?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#replication_factor DmsReassignPartitionsV2#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#topic DmsReassignPartitionsV2#topic}
  */
  readonly topic: string;
  /**
  * assignments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#assignments DmsReassignPartitionsV2#assignments}
  */
  readonly assignments?: DmsReassignPartitionsV2ReassignmentsAssignments[] | cdktf.IResolvable;
}

export function dmsReassignPartitionsV2ReassignmentsToTerraform(struct?: DmsReassignPartitionsV2Reassignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brokers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.brokers),
    replication_factor: cdktf.numberToTerraform(struct!.replicationFactor),
    topic: cdktf.stringToTerraform(struct!.topic),
    assignments: cdktf.listMapper(dmsReassignPartitionsV2ReassignmentsAssignmentsToTerraform, true)(struct!.assignments),
  }
}


export function dmsReassignPartitionsV2ReassignmentsToHclTerraform(struct?: DmsReassignPartitionsV2Reassignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brokers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.brokers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    replication_factor: {
      value: cdktf.numberToHclTerraform(struct!.replicationFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assignments: {
      value: cdktf.listMapperHcl(dmsReassignPartitionsV2ReassignmentsAssignmentsToHclTerraform, true)(struct!.assignments),
      isBlock: true,
      type: "list",
      storageClassType: "DmsReassignPartitionsV2ReassignmentsAssignmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsReassignPartitionsV2ReassignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DmsReassignPartitionsV2Reassignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokers !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokers = this._brokers;
    }
    if (this._replicationFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationFactor = this._replicationFactor;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._assignments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignments = this._assignments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsReassignPartitionsV2Reassignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._brokers = undefined;
      this._replicationFactor = undefined;
      this._topic = undefined;
      this._assignments.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._brokers = value.brokers;
      this._replicationFactor = value.replicationFactor;
      this._topic = value.topic;
      this._assignments.internalValue = value.assignments;
    }
  }

  // brokers - computed: false, optional: true, required: false
  private _brokers?: number[]; 
  public get brokers() {
    return this.getNumberListAttribute('brokers');
  }
  public set brokers(value: number[]) {
    this._brokers = value;
  }
  public resetBrokers() {
    this._brokers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokersInput() {
    return this._brokers;
  }

  // replication_factor - computed: false, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // assignments - computed: false, optional: true, required: false
  private _assignments = new DmsReassignPartitionsV2ReassignmentsAssignmentsList(this, "assignments", false);
  public get assignments() {
    return this._assignments;
  }
  public putAssignments(value: DmsReassignPartitionsV2ReassignmentsAssignments[] | cdktf.IResolvable) {
    this._assignments.internalValue = value;
  }
  public resetAssignments() {
    this._assignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentsInput() {
    return this._assignments.internalValue;
  }
}

export class DmsReassignPartitionsV2ReassignmentsList extends cdktf.ComplexList {
  public internalValue? : DmsReassignPartitionsV2Reassignments[] | cdktf.IResolvable

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
  public get(index: number): DmsReassignPartitionsV2ReassignmentsOutputReference {
    return new DmsReassignPartitionsV2ReassignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2 opentelekomcloud_dms_reassign_partitions_v2}
*/
export class DmsReassignPartitionsV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_dms_reassign_partitions_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsReassignPartitionsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsReassignPartitionsV2 to import
  * @param importFromId The id of the existing DmsReassignPartitionsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsReassignPartitionsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_dms_reassign_partitions_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/dms_reassign_partitions_v2 opentelekomcloud_dms_reassign_partitions_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsReassignPartitionsV2Config
  */
  public constructor(scope: Construct, id: string, config: DmsReassignPartitionsV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_dms_reassign_partitions_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52',
        providerVersionConstraint: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._executeAt = config.executeAt;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._isSchedule = config.isSchedule;
    this._throttle = config.throttle;
    this._timeEstimate = config.timeEstimate;
    this._reassignments.internalValue = config.reassignments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // execute_at - computed: false, optional: true, required: false
  private _executeAt?: number; 
  public get executeAt() {
    return this.getNumberAttribute('execute_at');
  }
  public set executeAt(value: number) {
    this._executeAt = value;
  }
  public resetExecuteAt() {
    this._executeAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeAtInput() {
    return this._executeAt;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_schedule - computed: false, optional: true, required: false
  private _isSchedule?: boolean | cdktf.IResolvable; 
  public get isSchedule() {
    return this.getBooleanAttribute('is_schedule');
  }
  public set isSchedule(value: boolean | cdktf.IResolvable) {
    this._isSchedule = value;
  }
  public resetIsSchedule() {
    this._isSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isScheduleInput() {
    return this._isSchedule;
  }

  // reassignment_time - computed: true, optional: false, required: false
  public get reassignmentTime() {
    return this.getNumberAttribute('reassignment_time');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // throttle - computed: false, optional: true, required: false
  private _throttle?: number; 
  public get throttle() {
    return this.getNumberAttribute('throttle');
  }
  public set throttle(value: number) {
    this._throttle = value;
  }
  public resetThrottle() {
    this._throttle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleInput() {
    return this._throttle;
  }

  // time_estimate - computed: false, optional: true, required: false
  private _timeEstimate?: boolean | cdktf.IResolvable; 
  public get timeEstimate() {
    return this.getBooleanAttribute('time_estimate');
  }
  public set timeEstimate(value: boolean | cdktf.IResolvable) {
    this._timeEstimate = value;
  }
  public resetTimeEstimate() {
    this._timeEstimate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEstimateInput() {
    return this._timeEstimate;
  }

  // reassignments - computed: false, optional: false, required: true
  private _reassignments = new DmsReassignPartitionsV2ReassignmentsList(this, "reassignments", false);
  public get reassignments() {
    return this._reassignments;
  }
  public putReassignments(value: DmsReassignPartitionsV2Reassignments[] | cdktf.IResolvable) {
    this._reassignments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reassignmentsInput() {
    return this._reassignments.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execute_at: cdktf.numberToTerraform(this._executeAt),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_schedule: cdktf.booleanToTerraform(this._isSchedule),
      throttle: cdktf.numberToTerraform(this._throttle),
      time_estimate: cdktf.booleanToTerraform(this._timeEstimate),
      reassignments: cdktf.listMapper(dmsReassignPartitionsV2ReassignmentsToTerraform, true)(this._reassignments.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execute_at: {
        value: cdktf.numberToHclTerraform(this._executeAt),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_schedule: {
        value: cdktf.booleanToHclTerraform(this._isSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      throttle: {
        value: cdktf.numberToHclTerraform(this._throttle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_estimate: {
        value: cdktf.booleanToHclTerraform(this._timeEstimate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reassignments: {
        value: cdktf.listMapperHcl(dmsReassignPartitionsV2ReassignmentsToHclTerraform, true)(this._reassignments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DmsReassignPartitionsV2ReassignmentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
