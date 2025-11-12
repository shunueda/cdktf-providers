// https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnapmirrorPolicyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Comment associated with the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#comment SnapmirrorPolicyA#comment}
  */
  readonly comment?: string;
  /**
  * Specifies that all the source Snapshot copies (including the one created by SnapMirror before the transfer begins) should be copied to the destination on a transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#copy_all_source_snapshots SnapmirrorPolicyA#copy_all_source_snapshots}
  */
  readonly copyAllSourceSnapshots?: boolean | cdktf.IResolvable;
  /**
  * Specifies that the latest source Snapshot copy (created by SnapMirror before the transfer begins) should be copied to the destination on a transfer. 'Retention' properties cannot be specified along with this property. This is applicable only to async policies. Property can only be set to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#copy_latest_source_snapshot SnapmirrorPolicyA#copy_latest_source_snapshot}
  */
  readonly copyLatestSourceSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Specifies that all the source Snapshot copies (including the one created by SnapMirror before the transfer begins) should be copied to the destination on a transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#create_snapshot_on_source SnapmirrorPolicyA#create_snapshot_on_source}
  */
  readonly createSnapshotOnSource?: boolean | cdktf.IResolvable;
  /**
  * Connection profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#cx_profile_name SnapmirrorPolicyA#cx_profile_name}
  */
  readonly cxProfileName: string;
  /**
  * Specifies which configuration of the source SVM is replicated to the destination SVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#identity_preservation SnapmirrorPolicyA#identity_preservation}
  */
  readonly identityPreservation?: string;
  /**
  * SnapmirrorPolicy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#name SnapmirrorPolicyA#name}
  */
  readonly name: string;
  /**
  * Specifies whether network compression is enabled for transfers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#network_compression_enabled SnapmirrorPolicyA#network_compression_enabled}
  */
  readonly networkCompressionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Rules for Snapshot copy retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#retention SnapmirrorPolicyA#retention}
  */
  readonly retention?: SnapmirrorPolicyRetention[] | cdktf.IResolvable;
  /**
  * SnapmirrorPolicy svm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#svm_name SnapmirrorPolicyA#svm_name}
  */
  readonly svmName: string;
  /**
  * SnapmirrorPolicy sync type. [sync, strict_sync, automated_failover]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#sync_type SnapmirrorPolicyA#sync_type}
  */
  readonly syncType?: string;
  /**
  * The schedule used to update asynchronous relationships
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#transfer_schedule_name SnapmirrorPolicyA#transfer_schedule_name}
  */
  readonly transferScheduleName?: string;
  /**
  * SnapmirrorPolicy type. [async, sync, continuous]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#type SnapmirrorPolicyA#type}
  */
  readonly type?: string;
}
export interface SnapmirrorPolicyRetention {
  /**
  * Number of Snapshot copies to be kept for retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#count SnapmirrorPolicyA#count}
  */
  readonly count?: number;
  /**
  * Schedule used to create Snapshot copies on the destination for long term retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#creation_schedule_name SnapmirrorPolicyA#creation_schedule_name}
  */
  readonly creationScheduleName?: string;
  /**
  * Snapshot copy label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#label SnapmirrorPolicyA#label}
  */
  readonly label: string;
  /**
  * Specifies the prefix for the Snapshot copy name to be created as per the schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#prefix SnapmirrorPolicyA#prefix}
  */
  readonly prefix?: string;
}

export function snapmirrorPolicyRetentionToTerraform(struct?: SnapmirrorPolicyRetention | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    creation_schedule_name: cdktf.stringToTerraform(struct!.creationScheduleName),
    label: cdktf.stringToTerraform(struct!.label),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function snapmirrorPolicyRetentionToHclTerraform(struct?: SnapmirrorPolicyRetention | cdktf.IResolvable): any {
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
    creation_schedule_name: {
      value: cdktf.stringToHclTerraform(struct!.creationScheduleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnapmirrorPolicyRetentionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SnapmirrorPolicyRetention | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._creationScheduleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationScheduleName = this._creationScheduleName;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnapmirrorPolicyRetention | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._creationScheduleName = undefined;
      this._label = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._creationScheduleName = value.creationScheduleName;
      this._label = value.label;
      this._prefix = value.prefix;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // creation_schedule_name - computed: false, optional: true, required: false
  private _creationScheduleName?: string; 
  public get creationScheduleName() {
    return this.getStringAttribute('creation_schedule_name');
  }
  public set creationScheduleName(value: string) {
    this._creationScheduleName = value;
  }
  public resetCreationScheduleName() {
    this._creationScheduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationScheduleNameInput() {
    return this._creationScheduleName;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // prefix - computed: true, optional: true, required: false
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
}

export class SnapmirrorPolicyRetentionList extends cdktf.ComplexList {
  public internalValue? : SnapmirrorPolicyRetention[] | cdktf.IResolvable

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
  public get(index: number): SnapmirrorPolicyRetentionOutputReference {
    return new SnapmirrorPolicyRetentionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy netapp-ontap_snapmirror_policy}
*/
export class SnapmirrorPolicyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netapp-ontap_snapmirror_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnapmirrorPolicyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnapmirrorPolicyA to import
  * @param importFromId The id of the existing SnapmirrorPolicyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnapmirrorPolicyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netapp-ontap_snapmirror_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netapp/netapp-ontap/2.3.0/docs/resources/snapmirror_policy netapp-ontap_snapmirror_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnapmirrorPolicyAConfig
  */
  public constructor(scope: Construct, id: string, config: SnapmirrorPolicyAConfig) {
    super(scope, id, {
      terraformResourceType: 'netapp-ontap_snapmirror_policy',
      terraformGeneratorMetadata: {
        providerName: 'netapp-ontap',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
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
    this._copyAllSourceSnapshots = config.copyAllSourceSnapshots;
    this._copyLatestSourceSnapshot = config.copyLatestSourceSnapshot;
    this._createSnapshotOnSource = config.createSnapshotOnSource;
    this._cxProfileName = config.cxProfileName;
    this._identityPreservation = config.identityPreservation;
    this._name = config.name;
    this._networkCompressionEnabled = config.networkCompressionEnabled;
    this._retention.internalValue = config.retention;
    this._svmName = config.svmName;
    this._syncType = config.syncType;
    this._transferScheduleName = config.transferScheduleName;
    this._type = config.type;
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

  // copy_all_source_snapshots - computed: true, optional: true, required: false
  private _copyAllSourceSnapshots?: boolean | cdktf.IResolvable; 
  public get copyAllSourceSnapshots() {
    return this.getBooleanAttribute('copy_all_source_snapshots');
  }
  public set copyAllSourceSnapshots(value: boolean | cdktf.IResolvable) {
    this._copyAllSourceSnapshots = value;
  }
  public resetCopyAllSourceSnapshots() {
    this._copyAllSourceSnapshots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyAllSourceSnapshotsInput() {
    return this._copyAllSourceSnapshots;
  }

  // copy_latest_source_snapshot - computed: true, optional: true, required: false
  private _copyLatestSourceSnapshot?: boolean | cdktf.IResolvable; 
  public get copyLatestSourceSnapshot() {
    return this.getBooleanAttribute('copy_latest_source_snapshot');
  }
  public set copyLatestSourceSnapshot(value: boolean | cdktf.IResolvable) {
    this._copyLatestSourceSnapshot = value;
  }
  public resetCopyLatestSourceSnapshot() {
    this._copyLatestSourceSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyLatestSourceSnapshotInput() {
    return this._copyLatestSourceSnapshot;
  }

  // create_snapshot_on_source - computed: true, optional: true, required: false
  private _createSnapshotOnSource?: boolean | cdktf.IResolvable; 
  public get createSnapshotOnSource() {
    return this.getBooleanAttribute('create_snapshot_on_source');
  }
  public set createSnapshotOnSource(value: boolean | cdktf.IResolvable) {
    this._createSnapshotOnSource = value;
  }
  public resetCreateSnapshotOnSource() {
    this._createSnapshotOnSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSnapshotOnSourceInput() {
    return this._createSnapshotOnSource;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_preservation - computed: false, optional: true, required: false
  private _identityPreservation?: string; 
  public get identityPreservation() {
    return this.getStringAttribute('identity_preservation');
  }
  public set identityPreservation(value: string) {
    this._identityPreservation = value;
  }
  public resetIdentityPreservation() {
    this._identityPreservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPreservationInput() {
    return this._identityPreservation;
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

  // network_compression_enabled - computed: true, optional: true, required: false
  private _networkCompressionEnabled?: boolean | cdktf.IResolvable; 
  public get networkCompressionEnabled() {
    return this.getBooleanAttribute('network_compression_enabled');
  }
  public set networkCompressionEnabled(value: boolean | cdktf.IResolvable) {
    this._networkCompressionEnabled = value;
  }
  public resetNetworkCompressionEnabled() {
    this._networkCompressionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkCompressionEnabledInput() {
    return this._networkCompressionEnabled;
  }

  // retention - computed: false, optional: true, required: false
  private _retention = new SnapmirrorPolicyRetentionList(this, "retention", false);
  public get retention() {
    return this._retention;
  }
  public putRetention(value: SnapmirrorPolicyRetention[] | cdktf.IResolvable) {
    this._retention.internalValue = value;
  }
  public resetRetention() {
    this._retention.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention.internalValue;
  }

  // svm_name - computed: false, optional: false, required: true
  private _svmName?: string; 
  public get svmName() {
    return this.getStringAttribute('svm_name');
  }
  public set svmName(value: string) {
    this._svmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get svmNameInput() {
    return this._svmName;
  }

  // sync_type - computed: false, optional: true, required: false
  private _syncType?: string; 
  public get syncType() {
    return this.getStringAttribute('sync_type');
  }
  public set syncType(value: string) {
    this._syncType = value;
  }
  public resetSyncType() {
    this._syncType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTypeInput() {
    return this._syncType;
  }

  // transfer_schedule_name - computed: false, optional: true, required: false
  private _transferScheduleName?: string; 
  public get transferScheduleName() {
    return this.getStringAttribute('transfer_schedule_name');
  }
  public set transferScheduleName(value: string) {
    this._transferScheduleName = value;
  }
  public resetTransferScheduleName() {
    this._transferScheduleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferScheduleNameInput() {
    return this._transferScheduleName;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      copy_all_source_snapshots: cdktf.booleanToTerraform(this._copyAllSourceSnapshots),
      copy_latest_source_snapshot: cdktf.booleanToTerraform(this._copyLatestSourceSnapshot),
      create_snapshot_on_source: cdktf.booleanToTerraform(this._createSnapshotOnSource),
      cx_profile_name: cdktf.stringToTerraform(this._cxProfileName),
      identity_preservation: cdktf.stringToTerraform(this._identityPreservation),
      name: cdktf.stringToTerraform(this._name),
      network_compression_enabled: cdktf.booleanToTerraform(this._networkCompressionEnabled),
      retention: cdktf.listMapper(snapmirrorPolicyRetentionToTerraform, false)(this._retention.internalValue),
      svm_name: cdktf.stringToTerraform(this._svmName),
      sync_type: cdktf.stringToTerraform(this._syncType),
      transfer_schedule_name: cdktf.stringToTerraform(this._transferScheduleName),
      type: cdktf.stringToTerraform(this._type),
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
      copy_all_source_snapshots: {
        value: cdktf.booleanToHclTerraform(this._copyAllSourceSnapshots),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      copy_latest_source_snapshot: {
        value: cdktf.booleanToHclTerraform(this._copyLatestSourceSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_snapshot_on_source: {
        value: cdktf.booleanToHclTerraform(this._createSnapshotOnSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cx_profile_name: {
        value: cdktf.stringToHclTerraform(this._cxProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_preservation: {
        value: cdktf.stringToHclTerraform(this._identityPreservation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_compression_enabled: {
        value: cdktf.booleanToHclTerraform(this._networkCompressionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retention: {
        value: cdktf.listMapperHcl(snapmirrorPolicyRetentionToHclTerraform, false)(this._retention.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SnapmirrorPolicyRetentionList",
      },
      svm_name: {
        value: cdktf.stringToHclTerraform(this._svmName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_type: {
        value: cdktf.stringToHclTerraform(this._syncType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transfer_schedule_name: {
        value: cdktf.stringToHclTerraform(this._transferScheduleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
