// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageSnapshotPolicyResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A comment associated with the Snapshot copy policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#comment StorageSnapshotPolicyResource#comment}
  */
  readonly comment?: string;
  /**
  * Snapshot copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#copies StorageSnapshotPolicyResource#copies}
  */
  readonly copies: StorageSnapshotPolicyResourceCopies[] | cdktf.IResolvable;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#cx_profile_name StorageSnapshotPolicyResource#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Is the Snapshot copy policy enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#enabled StorageSnapshotPolicyResource#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * SnapshotPolicy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#name StorageSnapshotPolicyResource#name}
  */
  readonly name: string;
  /**
  * SnapshotPolicy svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#svm_name StorageSnapshotPolicyResource#svm_name}
  */
  readonly svmName?: string;
}
export interface StorageSnapshotPolicyResourceCopiesSchedule {
  /**
  * Some common schedules already defined in the system are hourly, daily, weekly, at 15 minute intervals, and at 5 minute intervals. Snapshot copy policies with custom schedules can be referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#name StorageSnapshotPolicyResource#name}
  */
  readonly name: string;
}

export function storageSnapshotPolicyResourceCopiesScheduleToTerraform(struct?: StorageSnapshotPolicyResourceCopiesSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageSnapshotPolicyResourceCopiesScheduleToHclTerraform(struct?: StorageSnapshotPolicyResourceCopiesSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageSnapshotPolicyResourceCopiesScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StorageSnapshotPolicyResourceCopiesSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageSnapshotPolicyResourceCopiesSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface StorageSnapshotPolicyResourceCopies {
  /**
  * The number of Snapshot copies to maintain for this schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#count StorageSnapshotPolicyResource#count}
  */
  readonly count: number;
  /**
  * The prefix to use while creating Snapshot copies at regular intervals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#prefix StorageSnapshotPolicyResource#prefix}
  */
  readonly prefix?: string;
  /**
  * The retention period of Snapshot copies for this schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#retention_period StorageSnapshotPolicyResource#retention_period}
  */
  readonly retentionPeriod?: string;
  /**
  * Schedule at which Snapshot copies are captured on the volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#schedule StorageSnapshotPolicyResource#schedule}
  */
  readonly schedule: StorageSnapshotPolicyResourceCopiesSchedule;
  /**
  * Label for SnapMirror operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#snapmirror_label StorageSnapshotPolicyResource#snapmirror_label}
  */
  readonly snapmirrorLabel?: string;
}

export function storageSnapshotPolicyResourceCopiesToTerraform(struct?: StorageSnapshotPolicyResourceCopies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    retention_period: cdktf.stringToTerraform(struct!.retentionPeriod),
    schedule: storageSnapshotPolicyResourceCopiesScheduleToTerraform(struct!.schedule),
    snapmirror_label: cdktf.stringToTerraform(struct!.snapmirrorLabel),
  }
}


export function storageSnapshotPolicyResourceCopiesToHclTerraform(struct?: StorageSnapshotPolicyResourceCopies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period: {
      value: cdktf.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: storageSnapshotPolicyResourceCopiesScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "struct",
      storageClassType: "StorageSnapshotPolicyResourceCopiesSchedule",
    },
    snapmirror_label: {
      value: cdktf.stringToHclTerraform(struct!.snapmirrorLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageSnapshotPolicyResourceCopiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StorageSnapshotPolicyResourceCopies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._snapmirrorLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapmirrorLabel = this._snapmirrorLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageSnapshotPolicyResourceCopies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._prefix = undefined;
      this._retentionPeriod = undefined;
      this._schedule.internalValue = undefined;
      this._snapmirrorLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._prefix = value.prefix;
      this._retentionPeriod = value.retentionPeriod;
      this._schedule.internalValue = value.schedule;
      this._snapmirrorLabel = value.snapmirrorLabel;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule = new StorageSnapshotPolicyResourceCopiesScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: StorageSnapshotPolicyResourceCopiesSchedule) {
    this._schedule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // snapmirror_label - computed: false, optional: true, required: false
  private _snapmirrorLabel?: string; 
  public get snapmirrorLabel() {
    return this.getStringAttribute('snapmirror_label');
  }
  public set snapmirrorLabel(value: string) {
    this._snapmirrorLabel = value;
  }
  public resetSnapmirrorLabel() {
    this._snapmirrorLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapmirrorLabelInput() {
    return this._snapmirrorLabel;
  }
}

export class StorageSnapshotPolicyResourceCopiesList extends cdktf.ComplexList {
  public internalValue? : StorageSnapshotPolicyResourceCopies[] | cdktf.IResolvable

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
  public get(index: number): StorageSnapshotPolicyResourceCopiesOutputReference {
    return new StorageSnapshotPolicyResourceCopiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource netapp-ontap_storage_snapshot_policy_resource}
*/
export class StorageSnapshotPolicyResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_storage_snapshot_policy_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageSnapshotPolicyResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageSnapshotPolicyResource to import
  * @param importFromId The id of the existing StorageSnapshotPolicyResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageSnapshotPolicyResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_storage_snapshot_policy_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/storage_snapshot_policy_resource netapp-ontap_storage_snapshot_policy_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageSnapshotPolicyResourceConfig
  */
  public constructor(scope: Construct, id: string, config: StorageSnapshotPolicyResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_storage_snapshot_policy_resource',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._copies.internalValue = config.copies;
    this._cxProfileName = config.cxProfileName;
    this._enabled = config.enabled;
    this._name = config.name;
    this._svmName = config.svmName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // copies - computed: false, optional: false, required: true
  private _copies = new StorageSnapshotPolicyResourceCopiesList(this, "copies", true);
  public get copies() {
    return this._copies;
  }
  public putCopies(value: StorageSnapshotPolicyResourceCopies[] | cdktf.IResolvable) {
    this._copies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get copiesInput() {
    return this._copies.internalValue;
  }

  // cx_profile_name - computed: false, optional: false, required: true
  private _cxProfileName?: string; 
  public get cxProfileName() {
    return this.getStringAttribute('cx_profile_name');
  }
  public set cxProfileName(value: string) {
    this._cxProfileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxProfileNameInput() {
    return this._cxProfileName;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // svm_name - computed: false, optional: true, required: false
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  public resetSvmName() {
    this._svmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      copies: cdktf.listMapper(storageSnapshotPolicyResourceCopiesToTerraform, false)(this._copies.internalValue),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      svm_name: cdktf.stringToTerraform(this._svmName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      copies: {
        value: cdktf.listMapperHcl(storageSnapshotPolicyResourceCopiesToHclTerraform, false)(this._copies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "StorageSnapshotPolicyResourceCopiesList",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
