// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexReplicationPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#filter DataPowerflexReplicationPair#filter}
  */
  readonly filter?: DataPowerflexReplicationPairFilter;
}
export interface DataPowerflexReplicationPairReplicationPairDetails {
}

export function dataPowerflexReplicationPairReplicationPairDetailsToTerraform(struct?: DataPowerflexReplicationPairReplicationPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexReplicationPairReplicationPairDetailsToHclTerraform(struct?: DataPowerflexReplicationPairReplicationPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexReplicationPairReplicationPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexReplicationPairReplicationPairDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexReplicationPairReplicationPairDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // copy_type - computed: true, optional: false, required: false
  public get copyType() {
    return this.getStringAttribute('copy_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_copy_priority - computed: true, optional: false, required: false
  public get initialCopyPriority() {
    return this.getNumberAttribute('initial_copy_priority');
  }

  // initial_copy_state - computed: true, optional: false, required: false
  public get initialCopyState() {
    return this.getStringAttribute('initial_copy_state');
  }

  // lifetime_state - computed: true, optional: false, required: false
  public get lifetimeState() {
    return this.getStringAttribute('lifetime_state');
  }

  // local_volume_id - computed: true, optional: false, required: false
  public get localVolumeId() {
    return this.getStringAttribute('local_volume_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_system_name - computed: true, optional: false, required: false
  public get peerSystemName() {
    return this.getStringAttribute('peer_system_name');
  }

  // remote_capacity_in_mb - computed: true, optional: false, required: false
  public get remoteCapacityInMb() {
    return this.getNumberAttribute('remote_capacity_in_mb');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }

  // remote_volume_id - computed: true, optional: false, required: false
  public get remoteVolumeId() {
    return this.getStringAttribute('remote_volume_id');
  }

  // remote_volume_name - computed: true, optional: false, required: false
  public get remoteVolumeName() {
    return this.getStringAttribute('remote_volume_name');
  }

  // replication_consistency_group_id - computed: true, optional: false, required: false
  public get replicationConsistencyGroupId() {
    return this.getStringAttribute('replication_consistency_group_id');
  }

  // user_requested_pause_transmit_init_copy - computed: true, optional: false, required: false
  public get userRequestedPauseTransmitInitCopy() {
    return this.getBooleanAttribute('user_requested_pause_transmit_init_copy');
  }
}

export class DataPowerflexReplicationPairReplicationPairDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexReplicationPairReplicationPairDetailsOutputReference {
    return new DataPowerflexReplicationPairReplicationPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexReplicationPairFilter {
  /**
  * List of copy_type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#copy_type DataPowerflexReplicationPair#copy_type}
  */
  readonly copyType?: string[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#id DataPowerflexReplicationPair#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of initial_copy_priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#initial_copy_priority DataPowerflexReplicationPair#initial_copy_priority}
  */
  readonly initialCopyPriority?: number[];
  /**
  * List of initial_copy_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#initial_copy_state DataPowerflexReplicationPair#initial_copy_state}
  */
  readonly initialCopyState?: string[];
  /**
  * List of lifetime_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#lifetime_state DataPowerflexReplicationPair#lifetime_state}
  */
  readonly lifetimeState?: string[];
  /**
  * List of local_volume_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#local_volume_id DataPowerflexReplicationPair#local_volume_id}
  */
  readonly localVolumeId?: string[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#name DataPowerflexReplicationPair#name}
  */
  readonly name?: string[];
  /**
  * List of peer_system_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#peer_system_name DataPowerflexReplicationPair#peer_system_name}
  */
  readonly peerSystemName?: string[];
  /**
  * List of remote_capacity_in_mb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#remote_capacity_in_mb DataPowerflexReplicationPair#remote_capacity_in_mb}
  */
  readonly remoteCapacityInMb?: number[];
  /**
  * List of remote_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#remote_id DataPowerflexReplicationPair#remote_id}
  */
  readonly remoteId?: string[];
  /**
  * List of remote_volume_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#remote_volume_id DataPowerflexReplicationPair#remote_volume_id}
  */
  readonly remoteVolumeId?: string[];
  /**
  * List of remote_volume_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#remote_volume_name DataPowerflexReplicationPair#remote_volume_name}
  */
  readonly remoteVolumeName?: string[];
  /**
  * List of replication_consistency_group_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#replication_consistency_group_id DataPowerflexReplicationPair#replication_consistency_group_id}
  */
  readonly replicationConsistencyGroupId?: string[];
  /**
  * Value for user_requested_pause_transmit_init_copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#user_requested_pause_transmit_init_copy DataPowerflexReplicationPair#user_requested_pause_transmit_init_copy}
  */
  readonly userRequestedPauseTransmitInitCopy?: boolean | cdktf.IResolvable;
}

export function dataPowerflexReplicationPairFilterToTerraform(struct?: DataPowerflexReplicationPairFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    copy_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.copyType),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    initial_copy_priority: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.initialCopyPriority),
    initial_copy_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.initialCopyState),
    lifetime_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifetimeState),
    local_volume_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.localVolumeId),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    peer_system_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.peerSystemName),
    remote_capacity_in_mb: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.remoteCapacityInMb),
    remote_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteId),
    remote_volume_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteVolumeId),
    remote_volume_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.remoteVolumeName),
    replication_consistency_group_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.replicationConsistencyGroupId),
    user_requested_pause_transmit_init_copy: cdktf.booleanToTerraform(struct!.userRequestedPauseTransmitInitCopy),
  }
}


export function dataPowerflexReplicationPairFilterToHclTerraform(struct?: DataPowerflexReplicationPairFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    copy_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.copyType),
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
    initial_copy_priority: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.initialCopyPriority),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    initial_copy_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.initialCopyState),
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
    local_volume_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.localVolumeId),
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
    peer_system_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.peerSystemName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remote_capacity_in_mb: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.remoteCapacityInMb),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    remote_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remote_volume_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteVolumeId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    remote_volume_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.remoteVolumeName),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    replication_consistency_group_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.replicationConsistencyGroupId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_requested_pause_transmit_init_copy: {
      value: cdktf.booleanToHclTerraform(struct!.userRequestedPauseTransmitInitCopy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexReplicationPairFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexReplicationPairFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._copyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.copyType = this._copyType;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._initialCopyPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCopyPriority = this._initialCopyPriority;
    }
    if (this._initialCopyState !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCopyState = this._initialCopyState;
    }
    if (this._lifetimeState !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeState = this._lifetimeState;
    }
    if (this._localVolumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localVolumeId = this._localVolumeId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._peerSystemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerSystemName = this._peerSystemName;
    }
    if (this._remoteCapacityInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCapacityInMb = this._remoteCapacityInMb;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._remoteVolumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteVolumeId = this._remoteVolumeId;
    }
    if (this._remoteVolumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteVolumeName = this._remoteVolumeName;
    }
    if (this._replicationConsistencyGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationConsistencyGroupId = this._replicationConsistencyGroupId;
    }
    if (this._userRequestedPauseTransmitInitCopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRequestedPauseTransmitInitCopy = this._userRequestedPauseTransmitInitCopy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexReplicationPairFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._copyType = undefined;
      this._id = undefined;
      this._initialCopyPriority = undefined;
      this._initialCopyState = undefined;
      this._lifetimeState = undefined;
      this._localVolumeId = undefined;
      this._name = undefined;
      this._peerSystemName = undefined;
      this._remoteCapacityInMb = undefined;
      this._remoteId = undefined;
      this._remoteVolumeId = undefined;
      this._remoteVolumeName = undefined;
      this._replicationConsistencyGroupId = undefined;
      this._userRequestedPauseTransmitInitCopy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._copyType = value.copyType;
      this._id = value.id;
      this._initialCopyPriority = value.initialCopyPriority;
      this._initialCopyState = value.initialCopyState;
      this._lifetimeState = value.lifetimeState;
      this._localVolumeId = value.localVolumeId;
      this._name = value.name;
      this._peerSystemName = value.peerSystemName;
      this._remoteCapacityInMb = value.remoteCapacityInMb;
      this._remoteId = value.remoteId;
      this._remoteVolumeId = value.remoteVolumeId;
      this._remoteVolumeName = value.remoteVolumeName;
      this._replicationConsistencyGroupId = value.replicationConsistencyGroupId;
      this._userRequestedPauseTransmitInitCopy = value.userRequestedPauseTransmitInitCopy;
    }
  }

  // copy_type - computed: false, optional: true, required: false
  private _copyType?: string[]; 
  public get copyType() {
    return cdktf.Fn.tolist(this.getListAttribute('copy_type'));
  }
  public set copyType(value: string[]) {
    this._copyType = value;
  }
  public resetCopyType() {
    this._copyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyTypeInput() {
    return this._copyType;
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

  // initial_copy_priority - computed: false, optional: true, required: false
  private _initialCopyPriority?: number[]; 
  public get initialCopyPriority() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('initial_copy_priority')));
  }
  public set initialCopyPriority(value: number[]) {
    this._initialCopyPriority = value;
  }
  public resetInitialCopyPriority() {
    this._initialCopyPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCopyPriorityInput() {
    return this._initialCopyPriority;
  }

  // initial_copy_state - computed: false, optional: true, required: false
  private _initialCopyState?: string[]; 
  public get initialCopyState() {
    return cdktf.Fn.tolist(this.getListAttribute('initial_copy_state'));
  }
  public set initialCopyState(value: string[]) {
    this._initialCopyState = value;
  }
  public resetInitialCopyState() {
    this._initialCopyState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCopyStateInput() {
    return this._initialCopyState;
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

  // local_volume_id - computed: false, optional: true, required: false
  private _localVolumeId?: string[]; 
  public get localVolumeId() {
    return cdktf.Fn.tolist(this.getListAttribute('local_volume_id'));
  }
  public set localVolumeId(value: string[]) {
    this._localVolumeId = value;
  }
  public resetLocalVolumeId() {
    this._localVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVolumeIdInput() {
    return this._localVolumeId;
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

  // peer_system_name - computed: false, optional: true, required: false
  private _peerSystemName?: string[]; 
  public get peerSystemName() {
    return cdktf.Fn.tolist(this.getListAttribute('peer_system_name'));
  }
  public set peerSystemName(value: string[]) {
    this._peerSystemName = value;
  }
  public resetPeerSystemName() {
    this._peerSystemName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerSystemNameInput() {
    return this._peerSystemName;
  }

  // remote_capacity_in_mb - computed: false, optional: true, required: false
  private _remoteCapacityInMb?: number[]; 
  public get remoteCapacityInMb() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('remote_capacity_in_mb')));
  }
  public set remoteCapacityInMb(value: number[]) {
    this._remoteCapacityInMb = value;
  }
  public resetRemoteCapacityInMb() {
    this._remoteCapacityInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCapacityInMbInput() {
    return this._remoteCapacityInMb;
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

  // remote_volume_id - computed: false, optional: true, required: false
  private _remoteVolumeId?: string[]; 
  public get remoteVolumeId() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_volume_id'));
  }
  public set remoteVolumeId(value: string[]) {
    this._remoteVolumeId = value;
  }
  public resetRemoteVolumeId() {
    this._remoteVolumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVolumeIdInput() {
    return this._remoteVolumeId;
  }

  // remote_volume_name - computed: false, optional: true, required: false
  private _remoteVolumeName?: string[]; 
  public get remoteVolumeName() {
    return cdktf.Fn.tolist(this.getListAttribute('remote_volume_name'));
  }
  public set remoteVolumeName(value: string[]) {
    this._remoteVolumeName = value;
  }
  public resetRemoteVolumeName() {
    this._remoteVolumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVolumeNameInput() {
    return this._remoteVolumeName;
  }

  // replication_consistency_group_id - computed: false, optional: true, required: false
  private _replicationConsistencyGroupId?: string[]; 
  public get replicationConsistencyGroupId() {
    return cdktf.Fn.tolist(this.getListAttribute('replication_consistency_group_id'));
  }
  public set replicationConsistencyGroupId(value: string[]) {
    this._replicationConsistencyGroupId = value;
  }
  public resetReplicationConsistencyGroupId() {
    this._replicationConsistencyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationConsistencyGroupIdInput() {
    return this._replicationConsistencyGroupId;
  }

  // user_requested_pause_transmit_init_copy - computed: false, optional: true, required: false
  private _userRequestedPauseTransmitInitCopy?: boolean | cdktf.IResolvable; 
  public get userRequestedPauseTransmitInitCopy() {
    return this.getBooleanAttribute('user_requested_pause_transmit_init_copy');
  }
  public set userRequestedPauseTransmitInitCopy(value: boolean | cdktf.IResolvable) {
    this._userRequestedPauseTransmitInitCopy = value;
  }
  public resetUserRequestedPauseTransmitInitCopy() {
    this._userRequestedPauseTransmitInitCopy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userRequestedPauseTransmitInitCopyInput() {
    return this._userRequestedPauseTransmitInitCopy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair powerflex_replication_pair}
*/
export class DataPowerflexReplicationPair extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_replication_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexReplicationPair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexReplicationPair to import
  * @param importFromId The id of the existing DataPowerflexReplicationPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexReplicationPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_replication_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/replication_pair powerflex_replication_pair} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexReplicationPairConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexReplicationPairConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_replication_pair',
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

  // replication_pair_details - computed: true, optional: false, required: false
  private _replicationPairDetails = new DataPowerflexReplicationPairReplicationPairDetailsList(this, "replication_pair_details", false);
  public get replicationPairDetails() {
    return this._replicationPairDetails;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexReplicationPairFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexReplicationPairFilter) {
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
      filter: dataPowerflexReplicationPairFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexReplicationPairFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexReplicationPairFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
