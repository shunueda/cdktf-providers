// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexReplicationConsistencyGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#filter DataPowerflexReplicationConsistencyGroup#filter}
  */
  readonly filter?: DataPowerflexReplicationConsistencyGroupFilter;
}
export interface DataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetails {
}

export function dataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetailsToTerraform(struct?: DataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetailsToHclTerraform(struct?: DataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abstract_state - computed: true, optional: false, required: false
  public get abstractState() {
    return this.getStringAttribute('abstract_state');
  }

  // active_local - computed: true, optional: false, required: false
  public get activeLocal() {
    return this.getBooleanAttribute('active_local');
  }

  // active_remote - computed: true, optional: false, required: false
  public get activeRemote() {
    return this.getBooleanAttribute('active_remote');
  }

  // curr_consist_mode - computed: true, optional: false, required: false
  public get currConsistMode() {
    return this.getStringAttribute('curr_consist_mode');
  }

  // destination_system_id - computed: true, optional: false, required: false
  public get destinationSystemId() {
    return this.getStringAttribute('destination_system_id');
  }

  // disaster_recovery_state - computed: true, optional: false, required: false
  public get disasterRecoveryState() {
    return this.getStringAttribute('disaster_recovery_state');
  }

  // error - computed: true, optional: false, required: false
  public get error() {
    return this.getNumberAttribute('error');
  }

  // failover_state - computed: true, optional: false, required: false
  public get failoverState() {
    return this.getStringAttribute('failover_state');
  }

  // failover_type - computed: true, optional: false, required: false
  public get failoverType() {
    return this.getStringAttribute('failover_type');
  }

  // freeze_state - computed: true, optional: false, required: false
  public get freezeState() {
    return this.getStringAttribute('freeze_state');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inactive_reason - computed: true, optional: false, required: false
  public get inactiveReason() {
    return this.getNumberAttribute('inactive_reason');
  }

  // last_snap_group_id - computed: true, optional: false, required: false
  public get lastSnapGroupId() {
    return this.getStringAttribute('last_snap_group_id');
  }

  // lifetime_state - computed: true, optional: false, required: false
  public get lifetimeState() {
    return this.getStringAttribute('lifetime_state');
  }

  // local_activity_state - computed: true, optional: false, required: false
  public get localActivityState() {
    return this.getStringAttribute('local_activity_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pause_mode - computed: true, optional: false, required: false
  public get pauseMode() {
    return this.getStringAttribute('pause_mode');
  }

  // peer_mdm_id - computed: true, optional: false, required: false
  public get peerMdmId() {
    return this.getStringAttribute('peer_mdm_id');
  }

  // protection_domain_id - computed: true, optional: false, required: false
  public get protectionDomainId() {
    return this.getStringAttribute('protection_domain_id');
  }

  // remote_activity_state - computed: true, optional: false, required: false
  public get remoteActivityState() {
    return this.getStringAttribute('remote_activity_state');
  }

  // remote_disaster_recovery_state - computed: true, optional: false, required: false
  public get remoteDisasterRecoveryState() {
    return this.getStringAttribute('remote_disaster_recovery_state');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // remote_mdm_id - computed: true, optional: false, required: false
  public get remoteMdmId() {
    return this.getStringAttribute('remote_mdm_id');
  }

  // remote_protection_domain_id - computed: true, optional: false, required: false
  public get remoteProtectionDomainId() {
    return this.getStringAttribute('remote_protection_domain_id');
  }

  // replication_direction - computed: true, optional: false, required: false
  public get replicationDirection() {
    return this.getStringAttribute('replication_direction');
  }

  // rpo_in_seconds - computed: true, optional: false, required: false
  public get rpoInSeconds() {
    return this.getNumberAttribute('rpo_in_seconds');
  }

  // snap_creation_in_progress - computed: true, optional: false, required: false
  public get snapCreationInProgress() {
    return this.getBooleanAttribute('snap_creation_in_progress');
  }

  // target_volume_access_mode - computed: true, optional: false, required: false
  public get targetVolumeAccessMode() {
    return this.getStringAttribute('target_volume_access_mode');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetailsOutputReference {
    return new DataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexReplicationConsistencyGroupFilter {
  /**
  * List of abstract_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#abstract_state DataPowerflexReplicationConsistencyGroup#abstract_state}
  */
  readonly abstractState?: string[];
  /**
  * Value for active_local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#active_local DataPowerflexReplicationConsistencyGroup#active_local}
  */
  readonly activeLocal?: boolean | cdktf.IResolvable;
  /**
  * Value for active_remote
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#active_remote DataPowerflexReplicationConsistencyGroup#active_remote}
  */
  readonly activeRemote?: boolean | cdktf.IResolvable;
  /**
  * List of curr_consist_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#curr_consist_mode DataPowerflexReplicationConsistencyGroup#curr_consist_mode}
  */
  readonly currConsistMode?: string[];
  /**
  * List of destination_system_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#destination_system_id DataPowerflexReplicationConsistencyGroup#destination_system_id}
  */
  readonly destinationSystemId?: string[];
  /**
  * List of disaster_recovery_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#disaster_recovery_state DataPowerflexReplicationConsistencyGroup#disaster_recovery_state}
  */
  readonly disasterRecoveryState?: string[];
  /**
  * List of error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#error DataPowerflexReplicationConsistencyGroup#error}
  */
  readonly error?: number[];
  /**
  * List of failover_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#failover_state DataPowerflexReplicationConsistencyGroup#failover_state}
  */
  readonly failoverState?: string[];
  /**
  * List of failover_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#failover_type DataPowerflexReplicationConsistencyGroup#failover_type}
  */
  readonly failoverType?: string[];
  /**
  * List of freeze_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#freeze_state DataPowerflexReplicationConsistencyGroup#freeze_state}
  */
  readonly freezeState?: string[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#id DataPowerflexReplicationConsistencyGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of inactive_reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#inactive_reason DataPowerflexReplicationConsistencyGroup#inactive_reason}
  */
  readonly inactiveReason?: number[];
  /**
  * List of last_snap_group_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#last_snap_group_id DataPowerflexReplicationConsistencyGroup#last_snap_group_id}
  */
  readonly lastSnapGroupId?: string[];
  /**
  * List of lifetime_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#lifetime_state DataPowerflexReplicationConsistencyGroup#lifetime_state}
  */
  readonly lifetimeState?: string[];
  /**
  * List of local_activity_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#local_activity_state DataPowerflexReplicationConsistencyGroup#local_activity_state}
  */
  readonly localActivityState?: string[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#name DataPowerflexReplicationConsistencyGroup#name}
  */
  readonly name?: string[];
  /**
  * List of pause_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#pause_mode DataPowerflexReplicationConsistencyGroup#pause_mode}
  */
  readonly pauseMode?: string[];
  /**
  * List of peer_mdm_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#peer_mdm_id DataPowerflexReplicationConsistencyGroup#peer_mdm_id}
  */
  readonly peerMdmId?: string[];
  /**
  * List of protection_domain_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#protection_domain_id DataPowerflexReplicationConsistencyGroup#protection_domain_id}
  */
  readonly protectionDomainId?: string[];
  /**
  * List of remote_activity_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#remote_activity_state DataPowerflexReplicationConsistencyGroup#remote_activity_state}
  */
  readonly remoteActivityState?: string[];
  /**
  * List of remote_disaster_recovery_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#remote_disaster_recovery_state DataPowerflexReplicationConsistencyGroup#remote_disaster_recovery_state}
  */
  readonly remoteDisasterRecoveryState?: string[];
  /**
  * List of remote_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#remote_id DataPowerflexReplicationConsistencyGroup#remote_id}
  */
  readonly remoteId?: string[];
  /**
  * List of remote_mdm_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#remote_mdm_id DataPowerflexReplicationConsistencyGroup#remote_mdm_id}
  */
  readonly remoteMdmId?: string[];
  /**
  * List of remote_protection_domain_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#remote_protection_domain_id DataPowerflexReplicationConsistencyGroup#remote_protection_domain_id}
  */
  readonly remoteProtectionDomainId?: string[];
  /**
  * List of replication_direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#replication_direction DataPowerflexReplicationConsistencyGroup#replication_direction}
  */
  readonly replicationDirection?: string[];
  /**
  * List of rpo_in_seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#rpo_in_seconds DataPowerflexReplicationConsistencyGroup#rpo_in_seconds}
  */
  readonly rpoInSeconds?: number[];
  /**
  * Value for snap_creation_in_progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#snap_creation_in_progress DataPowerflexReplicationConsistencyGroup#snap_creation_in_progress}
  */
  readonly snapCreationInProgress?: boolean | cdktf.IResolvable;
  /**
  * List of target_volume_access_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#target_volume_access_mode DataPowerflexReplicationConsistencyGroup#target_volume_access_mode}
  */
  readonly targetVolumeAccessMode?: string[];
  /**
  * List of type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#type DataPowerflexReplicationConsistencyGroup#type}
  */
  readonly type?: string[];
}

export function dataPowerflexReplicationConsistencyGroupFilterToTerraform(struct?: DataPowerflexReplicationConsistencyGroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abstract_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.abstractState),
    active_local: cdktf.booleanToTerraform(struct!.activeLocal),
    active_remote: cdktf.booleanToTerraform(struct!.activeRemote),
    curr_consist_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.currConsistMode),
    destination_system_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationSystemId),
    disaster_recovery_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.disasterRecoveryState),
    error: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.error),
    failover_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failoverState),
    failover_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failoverType),
    freeze_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.freezeState),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    inactive_reason: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.inactiveReason),
    last_snap_group_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lastSnapGroupId),
    lifetime_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifetimeState),
    local_activity_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localActivityState),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    pause_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pauseMode),
    peer_mdm_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.peerMdmId),
    protection_domain_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protectionDomainId),
    remote_activity_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteActivityState),
    remote_disaster_recovery_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteDisasterRecoveryState),
    remote_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteId),
    remote_mdm_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteMdmId),
    remote_protection_domain_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteProtectionDomainId),
    replication_direction: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.replicationDirection),
    rpo_in_seconds: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.rpoInSeconds),
    snap_creation_in_progress: cdktf.booleanToTerraform(struct!.snapCreationInProgress),
    target_volume_access_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetVolumeAccessMode),
    type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.type),
  }
}


export function dataPowerflexReplicationConsistencyGroupFilterToHclTerraform(struct?: DataPowerflexReplicationConsistencyGroupFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abstract_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.abstractState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    active_local: {
      value: cdktf.booleanToHclTerraform(struct!.activeLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    active_remote: {
      value: cdktf.booleanToHclTerraform(struct!.activeRemote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    curr_consist_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.currConsistMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    destination_system_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationSystemId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    disaster_recovery_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.disasterRecoveryState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    error: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.error),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    failover_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failoverState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    failover_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failoverType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    freeze_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.freezeState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inactive_reason: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.inactiveReason),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    last_snap_group_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lastSnapGroupId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    lifetime_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifetimeState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    local_activity_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localActivityState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pause_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pauseMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    peer_mdm_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.peerMdmId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    protection_domain_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protectionDomainId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remote_activity_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteActivityState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remote_disaster_recovery_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteDisasterRecoveryState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remote_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remote_mdm_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteMdmId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remote_protection_domain_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteProtectionDomainId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    replication_direction: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.replicationDirection),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    rpo_in_seconds: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.rpoInSeconds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    snap_creation_in_progress: {
      value: cdktf.booleanToHclTerraform(struct!.snapCreationInProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_volume_access_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetVolumeAccessMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.type),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexReplicationConsistencyGroupFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexReplicationConsistencyGroupFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abstractState !== undefined) {
      hasAnyValues = true;
      internalValueResult.abstractState = this._abstractState;
    }
    if (this._activeLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeLocal = this._activeLocal;
    }
    if (this._activeRemote !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeRemote = this._activeRemote;
    }
    if (this._currConsistMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.currConsistMode = this._currConsistMode;
    }
    if (this._destinationSystemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSystemId = this._destinationSystemId;
    }
    if (this._disasterRecoveryState !== undefined) {
      hasAnyValues = true;
      internalValueResult.disasterRecoveryState = this._disasterRecoveryState;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._failoverState !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverState = this._failoverState;
    }
    if (this._failoverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverType = this._failoverType;
    }
    if (this._freezeState !== undefined) {
      hasAnyValues = true;
      internalValueResult.freezeState = this._freezeState;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inactiveReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactiveReason = this._inactiveReason;
    }
    if (this._lastSnapGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastSnapGroupId = this._lastSnapGroupId;
    }
    if (this._lifetimeState !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeState = this._lifetimeState;
    }
    if (this._localActivityState !== undefined) {
      hasAnyValues = true;
      internalValueResult.localActivityState = this._localActivityState;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pauseMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseMode = this._pauseMode;
    }
    if (this._peerMdmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerMdmId = this._peerMdmId;
    }
    if (this._protectionDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomainId = this._protectionDomainId;
    }
    if (this._remoteActivityState !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteActivityState = this._remoteActivityState;
    }
    if (this._remoteDisasterRecoveryState !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteDisasterRecoveryState = this._remoteDisasterRecoveryState;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._remoteMdmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteMdmId = this._remoteMdmId;
    }
    if (this._remoteProtectionDomainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteProtectionDomainId = this._remoteProtectionDomainId;
    }
    if (this._replicationDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationDirection = this._replicationDirection;
    }
    if (this._rpoInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoInSeconds = this._rpoInSeconds;
    }
    if (this._snapCreationInProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapCreationInProgress = this._snapCreationInProgress;
    }
    if (this._targetVolumeAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetVolumeAccessMode = this._targetVolumeAccessMode;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexReplicationConsistencyGroupFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abstractState = undefined;
      this._activeLocal = undefined;
      this._activeRemote = undefined;
      this._currConsistMode = undefined;
      this._destinationSystemId = undefined;
      this._disasterRecoveryState = undefined;
      this._error = undefined;
      this._failoverState = undefined;
      this._failoverType = undefined;
      this._freezeState = undefined;
      this._id = undefined;
      this._inactiveReason = undefined;
      this._lastSnapGroupId = undefined;
      this._lifetimeState = undefined;
      this._localActivityState = undefined;
      this._name = undefined;
      this._pauseMode = undefined;
      this._peerMdmId = undefined;
      this._protectionDomainId = undefined;
      this._remoteActivityState = undefined;
      this._remoteDisasterRecoveryState = undefined;
      this._remoteId = undefined;
      this._remoteMdmId = undefined;
      this._remoteProtectionDomainId = undefined;
      this._replicationDirection = undefined;
      this._rpoInSeconds = undefined;
      this._snapCreationInProgress = undefined;
      this._targetVolumeAccessMode = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abstractState = value.abstractState;
      this._activeLocal = value.activeLocal;
      this._activeRemote = value.activeRemote;
      this._currConsistMode = value.currConsistMode;
      this._destinationSystemId = value.destinationSystemId;
      this._disasterRecoveryState = value.disasterRecoveryState;
      this._error = value.error;
      this._failoverState = value.failoverState;
      this._failoverType = value.failoverType;
      this._freezeState = value.freezeState;
      this._id = value.id;
      this._inactiveReason = value.inactiveReason;
      this._lastSnapGroupId = value.lastSnapGroupId;
      this._lifetimeState = value.lifetimeState;
      this._localActivityState = value.localActivityState;
      this._name = value.name;
      this._pauseMode = value.pauseMode;
      this._peerMdmId = value.peerMdmId;
      this._protectionDomainId = value.protectionDomainId;
      this._remoteActivityState = value.remoteActivityState;
      this._remoteDisasterRecoveryState = value.remoteDisasterRecoveryState;
      this._remoteId = value.remoteId;
      this._remoteMdmId = value.remoteMdmId;
      this._remoteProtectionDomainId = value.remoteProtectionDomainId;
      this._replicationDirection = value.replicationDirection;
      this._rpoInSeconds = value.rpoInSeconds;
      this._snapCreationInProgress = value.snapCreationInProgress;
      this._targetVolumeAccessMode = value.targetVolumeAccessMode;
      this._type = value.type;
    }
  }

  // abstract_state - computed: false, optional: true, required: false
  private _abstractState?: string[]; 
  public get abstractState() {
    return cdktf.Fn.tolist(this.getListAttribute('abstract_state'));
  }
  public set abstractState(value: string[]) {
    this._abstractState = value;
  }
  public resetAbstractState() {
    this._abstractState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abstractStateInput() {
    return this._abstractState;
  }

  // active_local - computed: false, optional: true, required: false
  private _activeLocal?: boolean | cdktf.IResolvable; 
  public get activeLocal() {
    return this.getBooleanAttribute('active_local');
  }
  public set activeLocal(value: boolean | cdktf.IResolvable) {
    this._activeLocal = value;
  }
  public resetActiveLocal() {
    this._activeLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeLocalInput() {
    return this._activeLocal;
  }

  // active_remote - computed: false, optional: true, required: false
  private _activeRemote?: boolean | cdktf.IResolvable; 
  public get activeRemote() {
    return this.getBooleanAttribute('active_remote');
  }
  public set activeRemote(value: boolean | cdktf.IResolvable) {
    this._activeRemote = value;
  }
  public resetActiveRemote() {
    this._activeRemote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeRemoteInput() {
    return this._activeRemote;
  }

  // curr_consist_mode - computed: false, optional: true, required: false
  private _currConsistMode?: string[]; 
  public get currConsistMode() {
    return cdktf.Fn.tolist(this.getListAttribute('curr_consist_mode'));
  }
  public set currConsistMode(value: string[]) {
    this._currConsistMode = value;
  }
  public resetCurrConsistMode() {
    this._currConsistMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currConsistModeInput() {
    return this._currConsistMode;
  }

  // destination_system_id - computed: false, optional: true, required: false
  private _destinationSystemId?: string[]; 
  public get destinationSystemId() {
    return cdktf.Fn.tolist(this.getListAttribute('destination_system_id'));
  }
  public set destinationSystemId(value: string[]) {
    this._destinationSystemId = value;
  }
  public resetDestinationSystemId() {
    this._destinationSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSystemIdInput() {
    return this._destinationSystemId;
  }

  // disaster_recovery_state - computed: false, optional: true, required: false
  private _disasterRecoveryState?: string[]; 
  public get disasterRecoveryState() {
    return cdktf.Fn.tolist(this.getListAttribute('disaster_recovery_state'));
  }
  public set disasterRecoveryState(value: string[]) {
    this._disasterRecoveryState = value;
  }
  public resetDisasterRecoveryState() {
    this._disasterRecoveryState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoveryStateInput() {
    return this._disasterRecoveryState;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number[]; 
  public get error() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('error')));
  }
  public set error(value: number[]) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // failover_state - computed: false, optional: true, required: false
  private _failoverState?: string[]; 
  public get failoverState() {
    return cdktf.Fn.tolist(this.getListAttribute('failover_state'));
  }
  public set failoverState(value: string[]) {
    this._failoverState = value;
  }
  public resetFailoverState() {
    this._failoverState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverStateInput() {
    return this._failoverState;
  }

  // failover_type - computed: false, optional: true, required: false
  private _failoverType?: string[]; 
  public get failoverType() {
    return cdktf.Fn.tolist(this.getListAttribute('failover_type'));
  }
  public set failoverType(value: string[]) {
    this._failoverType = value;
  }
  public resetFailoverType() {
    this._failoverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTypeInput() {
    return this._failoverType;
  }

  // freeze_state - computed: false, optional: true, required: false
  private _freezeState?: string[]; 
  public get freezeState() {
    return cdktf.Fn.tolist(this.getListAttribute('freeze_state'));
  }
  public set freezeState(value: string[]) {
    this._freezeState = value;
  }
  public resetFreezeState() {
    this._freezeState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freezeStateInput() {
    return this._freezeState;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return cdktf.Fn.tolist(this.getListAttribute('id'));
  }
  public set id(value: string[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // inactive_reason - computed: false, optional: true, required: false
  private _inactiveReason?: number[]; 
  public get inactiveReason() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('inactive_reason')));
  }
  public set inactiveReason(value: number[]) {
    this._inactiveReason = value;
  }
  public resetInactiveReason() {
    this._inactiveReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveReasonInput() {
    return this._inactiveReason;
  }

  // last_snap_group_id - computed: false, optional: true, required: false
  private _lastSnapGroupId?: string[]; 
  public get lastSnapGroupId() {
    return cdktf.Fn.tolist(this.getListAttribute('last_snap_group_id'));
  }
  public set lastSnapGroupId(value: string[]) {
    this._lastSnapGroupId = value;
  }
  public resetLastSnapGroupId() {
    this._lastSnapGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastSnapGroupIdInput() {
    return this._lastSnapGroupId;
  }

  // lifetime_state - computed: false, optional: true, required: false
  private _lifetimeState?: string[]; 
  public get lifetimeState() {
    return cdktf.Fn.tolist(this.getListAttribute('lifetime_state'));
  }
  public set lifetimeState(value: string[]) {
    this._lifetimeState = value;
  }
  public resetLifetimeState() {
    this._lifetimeState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeStateInput() {
    return this._lifetimeState;
  }

  // local_activity_state - computed: false, optional: true, required: false
  private _localActivityState?: string[]; 
  public get localActivityState() {
    return cdktf.Fn.tolist(this.getListAttribute('local_activity_state'));
  }
  public set localActivityState(value: string[]) {
    this._localActivityState = value;
  }
  public resetLocalActivityState() {
    this._localActivityState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localActivityStateInput() {
    return this._localActivityState;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return cdktf.Fn.tolist(this.getListAttribute('name'));
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // pause_mode - computed: false, optional: true, required: false
  private _pauseMode?: string[]; 
  public get pauseMode() {
    return cdktf.Fn.tolist(this.getListAttribute('pause_mode'));
  }
  public set pauseMode(value: string[]) {
    this._pauseMode = value;
  }
  public resetPauseMode() {
    this._pauseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseModeInput() {
    return this._pauseMode;
  }

  // peer_mdm_id - computed: false, optional: true, required: false
  private _peerMdmId?: string[]; 
  public get peerMdmId() {
    return cdktf.Fn.tolist(this.getListAttribute('peer_mdm_id'));
  }
  public set peerMdmId(value: string[]) {
    this._peerMdmId = value;
  }
  public resetPeerMdmId() {
    this._peerMdmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerMdmIdInput() {
    return this._peerMdmId;
  }

  // protection_domain_id - computed: false, optional: true, required: false
  private _protectionDomainId?: string[]; 
  public get protectionDomainId() {
    return cdktf.Fn.tolist(this.getListAttribute('protection_domain_id'));
  }
  public set protectionDomainId(value: string[]) {
    this._protectionDomainId = value;
  }
  public resetProtectionDomainId() {
    this._protectionDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainIdInput() {
    return this._protectionDomainId;
  }

  // remote_activity_state - computed: false, optional: true, required: false
  private _remoteActivityState?: string[]; 
  public get remoteActivityState() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_activity_state'));
  }
  public set remoteActivityState(value: string[]) {
    this._remoteActivityState = value;
  }
  public resetRemoteActivityState() {
    this._remoteActivityState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteActivityStateInput() {
    return this._remoteActivityState;
  }

  // remote_disaster_recovery_state - computed: false, optional: true, required: false
  private _remoteDisasterRecoveryState?: string[]; 
  public get remoteDisasterRecoveryState() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_disaster_recovery_state'));
  }
  public set remoteDisasterRecoveryState(value: string[]) {
    this._remoteDisasterRecoveryState = value;
  }
  public resetRemoteDisasterRecoveryState() {
    this._remoteDisasterRecoveryState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDisasterRecoveryStateInput() {
    return this._remoteDisasterRecoveryState;
  }

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string[]; 
  public get remoteId() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_id'));
  }
  public set remoteId(value: string[]) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // remote_mdm_id - computed: false, optional: true, required: false
  private _remoteMdmId?: string[]; 
  public get remoteMdmId() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_mdm_id'));
  }
  public set remoteMdmId(value: string[]) {
    this._remoteMdmId = value;
  }
  public resetRemoteMdmId() {
    this._remoteMdmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteMdmIdInput() {
    return this._remoteMdmId;
  }

  // remote_protection_domain_id - computed: false, optional: true, required: false
  private _remoteProtectionDomainId?: string[]; 
  public get remoteProtectionDomainId() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_protection_domain_id'));
  }
  public set remoteProtectionDomainId(value: string[]) {
    this._remoteProtectionDomainId = value;
  }
  public resetRemoteProtectionDomainId() {
    this._remoteProtectionDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteProtectionDomainIdInput() {
    return this._remoteProtectionDomainId;
  }

  // replication_direction - computed: false, optional: true, required: false
  private _replicationDirection?: string[]; 
  public get replicationDirection() {
    return cdktf.Fn.tolist(this.getListAttribute('replication_direction'));
  }
  public set replicationDirection(value: string[]) {
    this._replicationDirection = value;
  }
  public resetReplicationDirection() {
    this._replicationDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationDirectionInput() {
    return this._replicationDirection;
  }

  // rpo_in_seconds - computed: false, optional: true, required: false
  private _rpoInSeconds?: number[]; 
  public get rpoInSeconds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rpo_in_seconds')));
  }
  public set rpoInSeconds(value: number[]) {
    this._rpoInSeconds = value;
  }
  public resetRpoInSeconds() {
    this._rpoInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoInSecondsInput() {
    return this._rpoInSeconds;
  }

  // snap_creation_in_progress - computed: false, optional: true, required: false
  private _snapCreationInProgress?: boolean | cdktf.IResolvable; 
  public get snapCreationInProgress() {
    return this.getBooleanAttribute('snap_creation_in_progress');
  }
  public set snapCreationInProgress(value: boolean | cdktf.IResolvable) {
    this._snapCreationInProgress = value;
  }
  public resetSnapCreationInProgress() {
    this._snapCreationInProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapCreationInProgressInput() {
    return this._snapCreationInProgress;
  }

  // target_volume_access_mode - computed: false, optional: true, required: false
  private _targetVolumeAccessMode?: string[]; 
  public get targetVolumeAccessMode() {
    return cdktf.Fn.tolist(this.getListAttribute('target_volume_access_mode'));
  }
  public set targetVolumeAccessMode(value: string[]) {
    this._targetVolumeAccessMode = value;
  }
  public resetTargetVolumeAccessMode() {
    this._targetVolumeAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVolumeAccessModeInput() {
    return this._targetVolumeAccessMode;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return cdktf.Fn.tolist(this.getListAttribute('type'));
  }
  public set type(value: string[]) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group powerflex_replication_consistency_group}
*/
export class DataPowerflexReplicationConsistencyGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_replication_consistency_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexReplicationConsistencyGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexReplicationConsistencyGroup to import
  * @param importFromId The id of the existing DataPowerflexReplicationConsistencyGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexReplicationConsistencyGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_replication_consistency_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_consistency_group powerflex_replication_consistency_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexReplicationConsistencyGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexReplicationConsistencyGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_replication_consistency_group',
      terraformGeneratorMetadata: {
        providerName: 'powerflex',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // replication_consistency_group_details - computed: true, optional: false, required: false
  private _replicationConsistencyGroupDetails = new DataPowerflexReplicationConsistencyGroupReplicationConsistencyGroupDetailsList(this, "replication_consistency_group_details", false);
  public get replicationConsistencyGroupDetails() {
    return this._replicationConsistencyGroupDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexReplicationConsistencyGroupFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexReplicationConsistencyGroupFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: dataPowerflexReplicationConsistencyGroupFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexReplicationConsistencyGroupFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexReplicationConsistencyGroupFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
