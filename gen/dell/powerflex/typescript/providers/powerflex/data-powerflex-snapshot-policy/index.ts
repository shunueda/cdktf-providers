// https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPowerflexSnapshotPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#filter DataPowerflexSnapshotPolicy#filter}
  */
  readonly filter?: DataPowerflexSnapshotPolicyFilter;
}
export interface DataPowerflexSnapshotPolicySnapshotpoliciesLinks {
}

export function dataPowerflexSnapshotPolicySnapshotpoliciesLinksToTerraform(struct?: DataPowerflexSnapshotPolicySnapshotpoliciesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSnapshotPolicySnapshotpoliciesLinksToHclTerraform(struct?: DataPowerflexSnapshotPolicySnapshotpoliciesLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSnapshotPolicySnapshotpoliciesLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexSnapshotPolicySnapshotpoliciesLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSnapshotPolicySnapshotpoliciesLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class DataPowerflexSnapshotPolicySnapshotpoliciesLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexSnapshotPolicySnapshotpoliciesLinksOutputReference {
    return new DataPowerflexSnapshotPolicySnapshotpoliciesLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexSnapshotPolicySnapshotpolicies {
}

export function dataPowerflexSnapshotPolicySnapshotpoliciesToTerraform(struct?: DataPowerflexSnapshotPolicySnapshotpolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataPowerflexSnapshotPolicySnapshotpoliciesToHclTerraform(struct?: DataPowerflexSnapshotPolicySnapshotpolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataPowerflexSnapshotPolicySnapshotpoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataPowerflexSnapshotPolicySnapshotpolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSnapshotPolicySnapshotpolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_snapshot_creation_cadence_in_min - computed: true, optional: false, required: false
  public get autoSnapshotCreationCadenceInMin() {
    return this.getNumberAttribute('auto_snapshot_creation_cadence_in_min');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_auto_snapshot_creation_failure_reason - computed: true, optional: false, required: false
  public get lastAutoSnapshotCreationFailureReason() {
    return this.getStringAttribute('last_auto_snapshot_creation_failure_reason');
  }

  // last_auto_snapshot_failure_in_first_level - computed: true, optional: false, required: false
  public get lastAutoSnapshotFailureInFirstLevel() {
    return this.getBooleanAttribute('last_auto_snapshot_failure_in_first_level');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataPowerflexSnapshotPolicySnapshotpoliciesLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // max_vtree_auto_snapshots - computed: true, optional: false, required: false
  public get maxVtreeAutoSnapshots() {
    return this.getNumberAttribute('max_vtree_auto_snapshots');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // next_auto_snapshot_creation_time - computed: true, optional: false, required: false
  public get nextAutoSnapshotCreationTime() {
    return this.getNumberAttribute('next_auto_snapshot_creation_time');
  }

  // num_of_auto_snapshots - computed: true, optional: false, required: false
  public get numOfAutoSnapshots() {
    return this.getNumberAttribute('num_of_auto_snapshots');
  }

  // num_of_creation_failures - computed: true, optional: false, required: false
  public get numOfCreationFailures() {
    return this.getNumberAttribute('num_of_creation_failures');
  }

  // num_of_expired_but_locked_snapshots - computed: true, optional: false, required: false
  public get numOfExpiredButLockedSnapshots() {
    return this.getNumberAttribute('num_of_expired_but_locked_snapshots');
  }

  // num_of_locked_snapshots - computed: true, optional: false, required: false
  public get numOfLockedSnapshots() {
    return this.getNumberAttribute('num_of_locked_snapshots');
  }

  // num_of_retained_snapshots_per_level - computed: true, optional: false, required: false
  public get numOfRetainedSnapshotsPerLevel() {
    return this.getNumberListAttribute('num_of_retained_snapshots_per_level');
  }

  // num_of_source_volumes - computed: true, optional: false, required: false
  public get numOfSourceVolumes() {
    return this.getNumberAttribute('num_of_source_volumes');
  }

  // secure_snapshots - computed: true, optional: false, required: false
  public get secureSnapshots() {
    return this.getBooleanAttribute('secure_snapshots');
  }

  // snapshot_access_mode - computed: true, optional: false, required: false
  public get snapshotAccessMode() {
    return this.getStringAttribute('snapshot_access_mode');
  }

  // snapshot_policy_state - computed: true, optional: false, required: false
  public get snapshotPolicyState() {
    return this.getStringAttribute('snapshot_policy_state');
  }

  // system_id - computed: true, optional: false, required: false
  public get systemId() {
    return this.getStringAttribute('system_id');
  }

  // time_of_last_auto_snapshot - computed: true, optional: false, required: false
  public get timeOfLastAutoSnapshot() {
    return this.getNumberAttribute('time_of_last_auto_snapshot');
  }

  // time_of_last_auto_snapshot_creation_failure - computed: true, optional: false, required: false
  public get timeOfLastAutoSnapshotCreationFailure() {
    return this.getNumberAttribute('time_of_last_auto_snapshot_creation_failure');
  }
}

export class DataPowerflexSnapshotPolicySnapshotpoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataPowerflexSnapshotPolicySnapshotpoliciesOutputReference {
    return new DataPowerflexSnapshotPolicySnapshotpoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataPowerflexSnapshotPolicyFilter {
  /**
  * List of auto_snapshot_creation_cadence_in_min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#auto_snapshot_creation_cadence_in_min DataPowerflexSnapshotPolicy#auto_snapshot_creation_cadence_in_min}
  */
  readonly autoSnapshotCreationCadenceInMin?: number[];
  /**
  * List of id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#id DataPowerflexSnapshotPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * List of last_auto_snapshot_creation_failure_reason
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#last_auto_snapshot_creation_failure_reason DataPowerflexSnapshotPolicy#last_auto_snapshot_creation_failure_reason}
  */
  readonly lastAutoSnapshotCreationFailureReason?: string[];
  /**
  * Value for last_auto_snapshot_failure_in_first_level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#last_auto_snapshot_failure_in_first_level DataPowerflexSnapshotPolicy#last_auto_snapshot_failure_in_first_level}
  */
  readonly lastAutoSnapshotFailureInFirstLevel?: boolean | cdktf.IResolvable;
  /**
  * List of max_vtree_auto_snapshots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#max_vtree_auto_snapshots DataPowerflexSnapshotPolicy#max_vtree_auto_snapshots}
  */
  readonly maxVtreeAutoSnapshots?: number[];
  /**
  * List of name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#name DataPowerflexSnapshotPolicy#name}
  */
  readonly name?: string[];
  /**
  * List of next_auto_snapshot_creation_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#next_auto_snapshot_creation_time DataPowerflexSnapshotPolicy#next_auto_snapshot_creation_time}
  */
  readonly nextAutoSnapshotCreationTime?: number[];
  /**
  * List of num_of_auto_snapshots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#num_of_auto_snapshots DataPowerflexSnapshotPolicy#num_of_auto_snapshots}
  */
  readonly numOfAutoSnapshots?: number[];
  /**
  * List of num_of_creation_failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#num_of_creation_failures DataPowerflexSnapshotPolicy#num_of_creation_failures}
  */
  readonly numOfCreationFailures?: number[];
  /**
  * List of num_of_expired_but_locked_snapshots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#num_of_expired_but_locked_snapshots DataPowerflexSnapshotPolicy#num_of_expired_but_locked_snapshots}
  */
  readonly numOfExpiredButLockedSnapshots?: number[];
  /**
  * List of num_of_locked_snapshots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#num_of_locked_snapshots DataPowerflexSnapshotPolicy#num_of_locked_snapshots}
  */
  readonly numOfLockedSnapshots?: number[];
  /**
  * List of num_of_retained_snapshots_per_level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#num_of_retained_snapshots_per_level DataPowerflexSnapshotPolicy#num_of_retained_snapshots_per_level}
  */
  readonly numOfRetainedSnapshotsPerLevel?: number[];
  /**
  * List of num_of_source_volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#num_of_source_volumes DataPowerflexSnapshotPolicy#num_of_source_volumes}
  */
  readonly numOfSourceVolumes?: number[];
  /**
  * Value for secure_snapshots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#secure_snapshots DataPowerflexSnapshotPolicy#secure_snapshots}
  */
  readonly secureSnapshots?: boolean | cdktf.IResolvable;
  /**
  * List of snapshot_access_mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#snapshot_access_mode DataPowerflexSnapshotPolicy#snapshot_access_mode}
  */
  readonly snapshotAccessMode?: string[];
  /**
  * List of snapshot_policy_state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#snapshot_policy_state DataPowerflexSnapshotPolicy#snapshot_policy_state}
  */
  readonly snapshotPolicyState?: string[];
  /**
  * List of system_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#system_id DataPowerflexSnapshotPolicy#system_id}
  */
  readonly systemId?: string[];
  /**
  * List of time_of_last_auto_snapshot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#time_of_last_auto_snapshot DataPowerflexSnapshotPolicy#time_of_last_auto_snapshot}
  */
  readonly timeOfLastAutoSnapshot?: number[];
  /**
  * List of time_of_last_auto_snapshot_creation_failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#time_of_last_auto_snapshot_creation_failure DataPowerflexSnapshotPolicy#time_of_last_auto_snapshot_creation_failure}
  */
  readonly timeOfLastAutoSnapshotCreationFailure?: number[];
}

export function dataPowerflexSnapshotPolicyFilterToTerraform(struct?: DataPowerflexSnapshotPolicyFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_snapshot_creation_cadence_in_min: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.autoSnapshotCreationCadenceInMin),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    last_auto_snapshot_creation_failure_reason: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lastAutoSnapshotCreationFailureReason),
    last_auto_snapshot_failure_in_first_level: cdktf.booleanToTerraform(struct!.lastAutoSnapshotFailureInFirstLevel),
    max_vtree_auto_snapshots: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.maxVtreeAutoSnapshots),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    next_auto_snapshot_creation_time: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.nextAutoSnapshotCreationTime),
    num_of_auto_snapshots: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.numOfAutoSnapshots),
    num_of_creation_failures: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.numOfCreationFailures),
    num_of_expired_but_locked_snapshots: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.numOfExpiredButLockedSnapshots),
    num_of_locked_snapshots: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.numOfLockedSnapshots),
    num_of_retained_snapshots_per_level: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.numOfRetainedSnapshotsPerLevel),
    num_of_source_volumes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.numOfSourceVolumes),
    secure_snapshots: cdktf.booleanToTerraform(struct!.secureSnapshots),
    snapshot_access_mode: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.snapshotAccessMode),
    snapshot_policy_state: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.snapshotPolicyState),
    system_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemId),
    time_of_last_auto_snapshot: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.timeOfLastAutoSnapshot),
    time_of_last_auto_snapshot_creation_failure: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.timeOfLastAutoSnapshotCreationFailure),
  }
}


export function dataPowerflexSnapshotPolicyFilterToHclTerraform(struct?: DataPowerflexSnapshotPolicyFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_snapshot_creation_cadence_in_min: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.autoSnapshotCreationCadenceInMin),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    last_auto_snapshot_creation_failure_reason: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lastAutoSnapshotCreationFailureReason),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    last_auto_snapshot_failure_in_first_level: {
      value: cdktf.booleanToHclTerraform(struct!.lastAutoSnapshotFailureInFirstLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_vtree_auto_snapshots: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.maxVtreeAutoSnapshots),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    next_auto_snapshot_creation_time: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.nextAutoSnapshotCreationTime),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    num_of_auto_snapshots: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.numOfAutoSnapshots),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    num_of_creation_failures: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.numOfCreationFailures),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    num_of_expired_but_locked_snapshots: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.numOfExpiredButLockedSnapshots),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    num_of_locked_snapshots: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.numOfLockedSnapshots),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    num_of_retained_snapshots_per_level: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.numOfRetainedSnapshotsPerLevel),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    num_of_source_volumes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.numOfSourceVolumes),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    secure_snapshots: {
      value: cdktf.booleanToHclTerraform(struct!.secureSnapshots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snapshot_access_mode: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.snapshotAccessMode),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    snapshot_policy_state: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.snapshotPolicyState),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    system_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemId),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    time_of_last_auto_snapshot: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.timeOfLastAutoSnapshot),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    time_of_last_auto_snapshot_creation_failure: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.timeOfLastAutoSnapshotCreationFailure),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPowerflexSnapshotPolicyFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPowerflexSnapshotPolicyFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoSnapshotCreationCadenceInMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoSnapshotCreationCadenceInMin = this._autoSnapshotCreationCadenceInMin;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._lastAutoSnapshotCreationFailureReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAutoSnapshotCreationFailureReason = this._lastAutoSnapshotCreationFailureReason;
    }
    if (this._lastAutoSnapshotFailureInFirstLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastAutoSnapshotFailureInFirstLevel = this._lastAutoSnapshotFailureInFirstLevel;
    }
    if (this._maxVtreeAutoSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVtreeAutoSnapshots = this._maxVtreeAutoSnapshots;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextAutoSnapshotCreationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextAutoSnapshotCreationTime = this._nextAutoSnapshotCreationTime;
    }
    if (this._numOfAutoSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfAutoSnapshots = this._numOfAutoSnapshots;
    }
    if (this._numOfCreationFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfCreationFailures = this._numOfCreationFailures;
    }
    if (this._numOfExpiredButLockedSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfExpiredButLockedSnapshots = this._numOfExpiredButLockedSnapshots;
    }
    if (this._numOfLockedSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfLockedSnapshots = this._numOfLockedSnapshots;
    }
    if (this._numOfRetainedSnapshotsPerLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfRetainedSnapshotsPerLevel = this._numOfRetainedSnapshotsPerLevel;
    }
    if (this._numOfSourceVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numOfSourceVolumes = this._numOfSourceVolumes;
    }
    if (this._secureSnapshots !== undefined) {
      hasAnyValues = true;
      internalValueResult.secureSnapshots = this._secureSnapshots;
    }
    if (this._snapshotAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotAccessMode = this._snapshotAccessMode;
    }
    if (this._snapshotPolicyState !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotPolicyState = this._snapshotPolicyState;
    }
    if (this._systemId !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemId = this._systemId;
    }
    if (this._timeOfLastAutoSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfLastAutoSnapshot = this._timeOfLastAutoSnapshot;
    }
    if (this._timeOfLastAutoSnapshotCreationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfLastAutoSnapshotCreationFailure = this._timeOfLastAutoSnapshotCreationFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPowerflexSnapshotPolicyFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoSnapshotCreationCadenceInMin = undefined;
      this._id = undefined;
      this._lastAutoSnapshotCreationFailureReason = undefined;
      this._lastAutoSnapshotFailureInFirstLevel = undefined;
      this._maxVtreeAutoSnapshots = undefined;
      this._name = undefined;
      this._nextAutoSnapshotCreationTime = undefined;
      this._numOfAutoSnapshots = undefined;
      this._numOfCreationFailures = undefined;
      this._numOfExpiredButLockedSnapshots = undefined;
      this._numOfLockedSnapshots = undefined;
      this._numOfRetainedSnapshotsPerLevel = undefined;
      this._numOfSourceVolumes = undefined;
      this._secureSnapshots = undefined;
      this._snapshotAccessMode = undefined;
      this._snapshotPolicyState = undefined;
      this._systemId = undefined;
      this._timeOfLastAutoSnapshot = undefined;
      this._timeOfLastAutoSnapshotCreationFailure = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoSnapshotCreationCadenceInMin = value.autoSnapshotCreationCadenceInMin;
      this._id = value.id;
      this._lastAutoSnapshotCreationFailureReason = value.lastAutoSnapshotCreationFailureReason;
      this._lastAutoSnapshotFailureInFirstLevel = value.lastAutoSnapshotFailureInFirstLevel;
      this._maxVtreeAutoSnapshots = value.maxVtreeAutoSnapshots;
      this._name = value.name;
      this._nextAutoSnapshotCreationTime = value.nextAutoSnapshotCreationTime;
      this._numOfAutoSnapshots = value.numOfAutoSnapshots;
      this._numOfCreationFailures = value.numOfCreationFailures;
      this._numOfExpiredButLockedSnapshots = value.numOfExpiredButLockedSnapshots;
      this._numOfLockedSnapshots = value.numOfLockedSnapshots;
      this._numOfRetainedSnapshotsPerLevel = value.numOfRetainedSnapshotsPerLevel;
      this._numOfSourceVolumes = value.numOfSourceVolumes;
      this._secureSnapshots = value.secureSnapshots;
      this._snapshotAccessMode = value.snapshotAccessMode;
      this._snapshotPolicyState = value.snapshotPolicyState;
      this._systemId = value.systemId;
      this._timeOfLastAutoSnapshot = value.timeOfLastAutoSnapshot;
      this._timeOfLastAutoSnapshotCreationFailure = value.timeOfLastAutoSnapshotCreationFailure;
    }
  }

  // auto_snapshot_creation_cadence_in_min - computed: false, optional: true, required: false
  private _autoSnapshotCreationCadenceInMin?: number[]; 
  public get autoSnapshotCreationCadenceInMin() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('auto_snapshot_creation_cadence_in_min')));
  }
  public set autoSnapshotCreationCadenceInMin(value: number[]) {
    this._autoSnapshotCreationCadenceInMin = value;
  }
  public resetAutoSnapshotCreationCadenceInMin() {
    this._autoSnapshotCreationCadenceInMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSnapshotCreationCadenceInMinInput() {
    return this._autoSnapshotCreationCadenceInMin;
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

  // last_auto_snapshot_creation_failure_reason - computed: false, optional: true, required: false
  private _lastAutoSnapshotCreationFailureReason?: string[]; 
  public get lastAutoSnapshotCreationFailureReason() {
    return cdktf.Fn.tolist(this.getListAttribute('last_auto_snapshot_creation_failure_reason'));
  }
  public set lastAutoSnapshotCreationFailureReason(value: string[]) {
    this._lastAutoSnapshotCreationFailureReason = value;
  }
  public resetLastAutoSnapshotCreationFailureReason() {
    this._lastAutoSnapshotCreationFailureReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAutoSnapshotCreationFailureReasonInput() {
    return this._lastAutoSnapshotCreationFailureReason;
  }

  // last_auto_snapshot_failure_in_first_level - computed: false, optional: true, required: false
  private _lastAutoSnapshotFailureInFirstLevel?: boolean | cdktf.IResolvable; 
  public get lastAutoSnapshotFailureInFirstLevel() {
    return this.getBooleanAttribute('last_auto_snapshot_failure_in_first_level');
  }
  public set lastAutoSnapshotFailureInFirstLevel(value: boolean | cdktf.IResolvable) {
    this._lastAutoSnapshotFailureInFirstLevel = value;
  }
  public resetLastAutoSnapshotFailureInFirstLevel() {
    this._lastAutoSnapshotFailureInFirstLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastAutoSnapshotFailureInFirstLevelInput() {
    return this._lastAutoSnapshotFailureInFirstLevel;
  }

  // max_vtree_auto_snapshots - computed: false, optional: true, required: false
  private _maxVtreeAutoSnapshots?: number[]; 
  public get maxVtreeAutoSnapshots() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('max_vtree_auto_snapshots')));
  }
  public set maxVtreeAutoSnapshots(value: number[]) {
    this._maxVtreeAutoSnapshots = value;
  }
  public resetMaxVtreeAutoSnapshots() {
    this._maxVtreeAutoSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVtreeAutoSnapshotsInput() {
    return this._maxVtreeAutoSnapshots;
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

  // next_auto_snapshot_creation_time - computed: false, optional: true, required: false
  private _nextAutoSnapshotCreationTime?: number[]; 
  public get nextAutoSnapshotCreationTime() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('next_auto_snapshot_creation_time')));
  }
  public set nextAutoSnapshotCreationTime(value: number[]) {
    this._nextAutoSnapshotCreationTime = value;
  }
  public resetNextAutoSnapshotCreationTime() {
    this._nextAutoSnapshotCreationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextAutoSnapshotCreationTimeInput() {
    return this._nextAutoSnapshotCreationTime;
  }

  // num_of_auto_snapshots - computed: false, optional: true, required: false
  private _numOfAutoSnapshots?: number[]; 
  public get numOfAutoSnapshots() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('num_of_auto_snapshots')));
  }
  public set numOfAutoSnapshots(value: number[]) {
    this._numOfAutoSnapshots = value;
  }
  public resetNumOfAutoSnapshots() {
    this._numOfAutoSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfAutoSnapshotsInput() {
    return this._numOfAutoSnapshots;
  }

  // num_of_creation_failures - computed: false, optional: true, required: false
  private _numOfCreationFailures?: number[]; 
  public get numOfCreationFailures() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('num_of_creation_failures')));
  }
  public set numOfCreationFailures(value: number[]) {
    this._numOfCreationFailures = value;
  }
  public resetNumOfCreationFailures() {
    this._numOfCreationFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfCreationFailuresInput() {
    return this._numOfCreationFailures;
  }

  // num_of_expired_but_locked_snapshots - computed: false, optional: true, required: false
  private _numOfExpiredButLockedSnapshots?: number[]; 
  public get numOfExpiredButLockedSnapshots() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('num_of_expired_but_locked_snapshots')));
  }
  public set numOfExpiredButLockedSnapshots(value: number[]) {
    this._numOfExpiredButLockedSnapshots = value;
  }
  public resetNumOfExpiredButLockedSnapshots() {
    this._numOfExpiredButLockedSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfExpiredButLockedSnapshotsInput() {
    return this._numOfExpiredButLockedSnapshots;
  }

  // num_of_locked_snapshots - computed: false, optional: true, required: false
  private _numOfLockedSnapshots?: number[]; 
  public get numOfLockedSnapshots() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('num_of_locked_snapshots')));
  }
  public set numOfLockedSnapshots(value: number[]) {
    this._numOfLockedSnapshots = value;
  }
  public resetNumOfLockedSnapshots() {
    this._numOfLockedSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfLockedSnapshotsInput() {
    return this._numOfLockedSnapshots;
  }

  // num_of_retained_snapshots_per_level - computed: false, optional: true, required: false
  private _numOfRetainedSnapshotsPerLevel?: number[]; 
  public get numOfRetainedSnapshotsPerLevel() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('num_of_retained_snapshots_per_level')));
  }
  public set numOfRetainedSnapshotsPerLevel(value: number[]) {
    this._numOfRetainedSnapshotsPerLevel = value;
  }
  public resetNumOfRetainedSnapshotsPerLevel() {
    this._numOfRetainedSnapshotsPerLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfRetainedSnapshotsPerLevelInput() {
    return this._numOfRetainedSnapshotsPerLevel;
  }

  // num_of_source_volumes - computed: false, optional: true, required: false
  private _numOfSourceVolumes?: number[]; 
  public get numOfSourceVolumes() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('num_of_source_volumes')));
  }
  public set numOfSourceVolumes(value: number[]) {
    this._numOfSourceVolumes = value;
  }
  public resetNumOfSourceVolumes() {
    this._numOfSourceVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numOfSourceVolumesInput() {
    return this._numOfSourceVolumes;
  }

  // secure_snapshots - computed: false, optional: true, required: false
  private _secureSnapshots?: boolean | cdktf.IResolvable; 
  public get secureSnapshots() {
    return this.getBooleanAttribute('secure_snapshots');
  }
  public set secureSnapshots(value: boolean | cdktf.IResolvable) {
    this._secureSnapshots = value;
  }
  public resetSecureSnapshots() {
    this._secureSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureSnapshotsInput() {
    return this._secureSnapshots;
  }

  // snapshot_access_mode - computed: false, optional: true, required: false
  private _snapshotAccessMode?: string[]; 
  public get snapshotAccessMode() {
    return cdktf.Fn.tolist(this.getListAttribute('snapshot_access_mode'));
  }
  public set snapshotAccessMode(value: string[]) {
    this._snapshotAccessMode = value;
  }
  public resetSnapshotAccessMode() {
    this._snapshotAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotAccessModeInput() {
    return this._snapshotAccessMode;
  }

  // snapshot_policy_state - computed: false, optional: true, required: false
  private _snapshotPolicyState?: string[]; 
  public get snapshotPolicyState() {
    return cdktf.Fn.tolist(this.getListAttribute('snapshot_policy_state'));
  }
  public set snapshotPolicyState(value: string[]) {
    this._snapshotPolicyState = value;
  }
  public resetSnapshotPolicyState() {
    this._snapshotPolicyState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotPolicyStateInput() {
    return this._snapshotPolicyState;
  }

  // system_id - computed: false, optional: true, required: false
  private _systemId?: string[]; 
  public get systemId() {
    return cdktf.Fn.tolist(this.getListAttribute('system_id'));
  }
  public set systemId(value: string[]) {
    this._systemId = value;
  }
  public resetSystemId() {
    this._systemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // time_of_last_auto_snapshot - computed: false, optional: true, required: false
  private _timeOfLastAutoSnapshot?: number[]; 
  public get timeOfLastAutoSnapshot() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('time_of_last_auto_snapshot')));
  }
  public set timeOfLastAutoSnapshot(value: number[]) {
    this._timeOfLastAutoSnapshot = value;
  }
  public resetTimeOfLastAutoSnapshot() {
    this._timeOfLastAutoSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfLastAutoSnapshotInput() {
    return this._timeOfLastAutoSnapshot;
  }

  // time_of_last_auto_snapshot_creation_failure - computed: false, optional: true, required: false
  private _timeOfLastAutoSnapshotCreationFailure?: number[]; 
  public get timeOfLastAutoSnapshotCreationFailure() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('time_of_last_auto_snapshot_creation_failure')));
  }
  public set timeOfLastAutoSnapshotCreationFailure(value: number[]) {
    this._timeOfLastAutoSnapshotCreationFailure = value;
  }
  public resetTimeOfLastAutoSnapshotCreationFailure() {
    this._timeOfLastAutoSnapshotCreationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfLastAutoSnapshotCreationFailureInput() {
    return this._timeOfLastAutoSnapshotCreationFailure;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy powerflex_snapshot_policy}
*/
export class DataPowerflexSnapshotPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerflex_snapshot_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPowerflexSnapshotPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPowerflexSnapshotPolicy to import
  * @param importFromId The id of the existing DataPowerflexSnapshotPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPowerflexSnapshotPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerflex_snapshot_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerflex/1.8.0/docs/data-sources/snapshot_policy powerflex_snapshot_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPowerflexSnapshotPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPowerflexSnapshotPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerflex_snapshot_policy',
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

  // snapshotpolicies - computed: true, optional: false, required: false
  private _snapshotpolicies = new DataPowerflexSnapshotPolicySnapshotpoliciesList(this, "snapshotpolicies", false);
  public get snapshotpolicies() {
    return this._snapshotpolicies;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataPowerflexSnapshotPolicyFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataPowerflexSnapshotPolicyFilter) {
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
      filter: dataPowerflexSnapshotPolicyFilterToTerraform(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: dataPowerflexSnapshotPolicyFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataPowerflexSnapshotPolicyFilter",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
