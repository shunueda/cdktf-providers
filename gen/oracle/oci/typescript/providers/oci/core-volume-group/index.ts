// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreVolumeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#backup_policy_id CoreVolumeGroup#backup_policy_id}
  */
  readonly backupPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#cluster_placement_group_id CoreVolumeGroup#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#compartment_id CoreVolumeGroup#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#defined_tags CoreVolumeGroup#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#freeform_tags CoreVolumeGroup#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#id CoreVolumeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#preserve_volume_replica CoreVolumeGroup#preserve_volume_replica}
  */
  readonly preserveVolumeReplica?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#volume_group_replicas_deletion CoreVolumeGroup#volume_group_replicas_deletion}
  */
  readonly volumeGroupReplicasDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}
  */
  readonly volumeIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#xrc_kms_key_id CoreVolumeGroup#xrc_kms_key_id}
  */
  readonly xrcKmsKeyId?: string;
  /**
  * source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#source_details CoreVolumeGroup#source_details}
  */
  readonly sourceDetails: CoreVolumeGroupSourceDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#timeouts CoreVolumeGroup#timeouts}
  */
  readonly timeouts?: CoreVolumeGroupTimeouts;
  /**
  * volume_group_replicas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#volume_group_replicas CoreVolumeGroup#volume_group_replicas}
  */
  readonly volumeGroupReplicas?: CoreVolumeGroupVolumeGroupReplicas[] | cdktf.IResolvable;
}
export interface CoreVolumeGroupSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#type CoreVolumeGroup#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#volume_group_backup_id CoreVolumeGroup#volume_group_backup_id}
  */
  readonly volumeGroupBackupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#volume_group_id CoreVolumeGroup#volume_group_id}
  */
  readonly volumeGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#volume_group_replica_id CoreVolumeGroup#volume_group_replica_id}
  */
  readonly volumeGroupReplicaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}
  */
  readonly volumeIds?: string[];
}

export function coreVolumeGroupSourceDetailsToTerraform(struct?: CoreVolumeGroupSourceDetailsOutputReference | CoreVolumeGroupSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    volume_group_backup_id: cdktf.stringToTerraform(struct!.volumeGroupBackupId),
    volume_group_id: cdktf.stringToTerraform(struct!.volumeGroupId),
    volume_group_replica_id: cdktf.stringToTerraform(struct!.volumeGroupReplicaId),
    volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.volumeIds),
  }
}


export function coreVolumeGroupSourceDetailsToHclTerraform(struct?: CoreVolumeGroupSourceDetailsOutputReference | CoreVolumeGroupSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_group_backup_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupBackupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_group_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_group_replica_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeGroupReplicaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.volumeIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreVolumeGroupSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreVolumeGroupSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumeGroupBackupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupBackupId = this._volumeGroupBackupId;
    }
    if (this._volumeGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupId = this._volumeGroupId;
    }
    if (this._volumeGroupReplicaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGroupReplicaId = this._volumeGroupReplicaId;
    }
    if (this._volumeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeIds = this._volumeIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVolumeGroupSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._volumeGroupBackupId = undefined;
      this._volumeGroupId = undefined;
      this._volumeGroupReplicaId = undefined;
      this._volumeIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._volumeGroupBackupId = value.volumeGroupBackupId;
      this._volumeGroupId = value.volumeGroupId;
      this._volumeGroupReplicaId = value.volumeGroupReplicaId;
      this._volumeIds = value.volumeIds;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // volume_group_backup_id - computed: false, optional: true, required: false
  private _volumeGroupBackupId?: string; 
  public get volumeGroupBackupId() {
    return this.getStringAttribute('volume_group_backup_id');
  }
  public set volumeGroupBackupId(value: string) {
    this._volumeGroupBackupId = value;
  }
  public resetVolumeGroupBackupId() {
    this._volumeGroupBackupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupBackupIdInput() {
    return this._volumeGroupBackupId;
  }

  // volume_group_id - computed: false, optional: true, required: false
  private _volumeGroupId?: string; 
  public get volumeGroupId() {
    return this.getStringAttribute('volume_group_id');
  }
  public set volumeGroupId(value: string) {
    this._volumeGroupId = value;
  }
  public resetVolumeGroupId() {
    this._volumeGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupIdInput() {
    return this._volumeGroupId;
  }

  // volume_group_replica_id - computed: false, optional: true, required: false
  private _volumeGroupReplicaId?: string; 
  public get volumeGroupReplicaId() {
    return this.getStringAttribute('volume_group_replica_id');
  }
  public set volumeGroupReplicaId(value: string) {
    this._volumeGroupReplicaId = value;
  }
  public resetVolumeGroupReplicaId() {
    this._volumeGroupReplicaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupReplicaIdInput() {
    return this._volumeGroupReplicaId;
  }

  // volume_ids - computed: false, optional: true, required: false
  private _volumeIds?: string[]; 
  public get volumeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('volume_ids'));
  }
  public set volumeIds(value: string[]) {
    this._volumeIds = value;
  }
  public resetVolumeIds() {
    this._volumeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdsInput() {
    return this._volumeIds;
  }
}
export interface CoreVolumeGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#create CoreVolumeGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#delete CoreVolumeGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#update CoreVolumeGroup#update}
  */
  readonly update?: string;
}

export function coreVolumeGroupTimeoutsToTerraform(struct?: CoreVolumeGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function coreVolumeGroupTimeoutsToHclTerraform(struct?: CoreVolumeGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreVolumeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreVolumeGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVolumeGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
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
export interface CoreVolumeGroupVolumeGroupReplicas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#xrr_kms_key_id CoreVolumeGroup#xrr_kms_key_id}
  */
  readonly xrrKmsKeyId?: string;
}

export function coreVolumeGroupVolumeGroupReplicasToTerraform(struct?: CoreVolumeGroupVolumeGroupReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_domain: cdktf.stringToTerraform(struct!.availabilityDomain),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    xrr_kms_key_id: cdktf.stringToTerraform(struct!.xrrKmsKeyId),
  }
}


export function coreVolumeGroupVolumeGroupReplicasToHclTerraform(struct?: CoreVolumeGroupVolumeGroupReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_domain: {
      value: cdktf.stringToHclTerraform(struct!.availabilityDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xrr_kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.xrrKmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreVolumeGroupVolumeGroupReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreVolumeGroupVolumeGroupReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityDomain = this._availabilityDomain;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._xrrKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.xrrKmsKeyId = this._xrrKmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVolumeGroupVolumeGroupReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityDomain = undefined;
      this._displayName = undefined;
      this._xrrKmsKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityDomain = value.availabilityDomain;
      this._displayName = value.displayName;
      this._xrrKmsKeyId = value.xrrKmsKeyId;
    }
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // volume_group_replica_id - computed: true, optional: false, required: false
  public get volumeGroupReplicaId() {
    return this.getStringAttribute('volume_group_replica_id');
  }

  // xrr_kms_key_id - computed: true, optional: true, required: false
  private _xrrKmsKeyId?: string; 
  public get xrrKmsKeyId() {
    return this.getStringAttribute('xrr_kms_key_id');
  }
  public set xrrKmsKeyId(value: string) {
    this._xrrKmsKeyId = value;
  }
  public resetXrrKmsKeyId() {
    this._xrrKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrrKmsKeyIdInput() {
    return this._xrrKmsKeyId;
  }
}

export class CoreVolumeGroupVolumeGroupReplicasList extends cdktf.ComplexList {
  public internalValue? : CoreVolumeGroupVolumeGroupReplicas[] | cdktf.IResolvable

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
  public get(index: number): CoreVolumeGroupVolumeGroupReplicasOutputReference {
    return new CoreVolumeGroupVolumeGroupReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group oci_core_volume_group}
*/
export class CoreVolumeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_volume_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreVolumeGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreVolumeGroup to import
  * @param importFromId The id of the existing CoreVolumeGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreVolumeGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_volume_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume_group oci_core_volume_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreVolumeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CoreVolumeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume_group',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._backupPolicyId = config.backupPolicyId;
    this._clusterPlacementGroupId = config.clusterPlacementGroupId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._preserveVolumeReplica = config.preserveVolumeReplica;
    this._volumeGroupReplicasDeletion = config.volumeGroupReplicasDeletion;
    this._volumeIds = config.volumeIds;
    this._xrcKmsKeyId = config.xrcKmsKeyId;
    this._sourceDetails.internalValue = config.sourceDetails;
    this._timeouts.internalValue = config.timeouts;
    this._volumeGroupReplicas.internalValue = config.volumeGroupReplicas;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // backup_policy_id - computed: true, optional: true, required: false
  private _backupPolicyId?: string; 
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }
  public set backupPolicyId(value: string) {
    this._backupPolicyId = value;
  }
  public resetBackupPolicyId() {
    this._backupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyIdInput() {
    return this._backupPolicyId;
  }

  // cluster_placement_group_id - computed: true, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_hydrated - computed: true, optional: false, required: false
  public get isHydrated() {
    return this.getBooleanAttribute('is_hydrated');
  }

  // preserve_volume_replica - computed: false, optional: true, required: false
  private _preserveVolumeReplica?: boolean | cdktf.IResolvable; 
  public get preserveVolumeReplica() {
    return this.getBooleanAttribute('preserve_volume_replica');
  }
  public set preserveVolumeReplica(value: boolean | cdktf.IResolvable) {
    this._preserveVolumeReplica = value;
  }
  public resetPreserveVolumeReplica() {
    this._preserveVolumeReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveVolumeReplicaInput() {
    return this._preserveVolumeReplica;
  }

  // size_in_gbs - computed: true, optional: false, required: false
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }

  // size_in_mbs - computed: true, optional: false, required: false
  public get sizeInMbs() {
    return this.getStringAttribute('size_in_mbs');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // volume_group_replicas_deletion - computed: false, optional: true, required: false
  private _volumeGroupReplicasDeletion?: boolean | cdktf.IResolvable; 
  public get volumeGroupReplicasDeletion() {
    return this.getBooleanAttribute('volume_group_replicas_deletion');
  }
  public set volumeGroupReplicasDeletion(value: boolean | cdktf.IResolvable) {
    this._volumeGroupReplicasDeletion = value;
  }
  public resetVolumeGroupReplicasDeletion() {
    this._volumeGroupReplicasDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupReplicasDeletionInput() {
    return this._volumeGroupReplicasDeletion;
  }

  // volume_ids - computed: true, optional: true, required: false
  private _volumeIds?: string[]; 
  public get volumeIds() {
    return this.getListAttribute('volume_ids');
  }
  public set volumeIds(value: string[]) {
    this._volumeIds = value;
  }
  public resetVolumeIds() {
    this._volumeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdsInput() {
    return this._volumeIds;
  }

  // xrc_kms_key_id - computed: true, optional: true, required: false
  private _xrcKmsKeyId?: string; 
  public get xrcKmsKeyId() {
    return this.getStringAttribute('xrc_kms_key_id');
  }
  public set xrcKmsKeyId(value: string) {
    this._xrcKmsKeyId = value;
  }
  public resetXrcKmsKeyId() {
    this._xrcKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrcKmsKeyIdInput() {
    return this._xrcKmsKeyId;
  }

  // source_details - computed: false, optional: false, required: true
  private _sourceDetails = new CoreVolumeGroupSourceDetailsOutputReference(this, "source_details");
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public putSourceDetails(value: CoreVolumeGroupSourceDetails) {
    this._sourceDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailsInput() {
    return this._sourceDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreVolumeGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreVolumeGroupTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume_group_replicas - computed: false, optional: true, required: false
  private _volumeGroupReplicas = new CoreVolumeGroupVolumeGroupReplicasList(this, "volume_group_replicas", false);
  public get volumeGroupReplicas() {
    return this._volumeGroupReplicas;
  }
  public putVolumeGroupReplicas(value: CoreVolumeGroupVolumeGroupReplicas[] | cdktf.IResolvable) {
    this._volumeGroupReplicas.internalValue = value;
  }
  public resetVolumeGroupReplicas() {
    this._volumeGroupReplicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGroupReplicasInput() {
    return this._volumeGroupReplicas.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      backup_policy_id: cdktf.stringToTerraform(this._backupPolicyId),
      cluster_placement_group_id: cdktf.stringToTerraform(this._clusterPlacementGroupId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      preserve_volume_replica: cdktf.booleanToTerraform(this._preserveVolumeReplica),
      volume_group_replicas_deletion: cdktf.booleanToTerraform(this._volumeGroupReplicasDeletion),
      volume_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._volumeIds),
      xrc_kms_key_id: cdktf.stringToTerraform(this._xrcKmsKeyId),
      source_details: coreVolumeGroupSourceDetailsToTerraform(this._sourceDetails.internalValue),
      timeouts: coreVolumeGroupTimeoutsToTerraform(this._timeouts.internalValue),
      volume_group_replicas: cdktf.listMapper(coreVolumeGroupVolumeGroupReplicasToTerraform, true)(this._volumeGroupReplicas.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_policy_id: {
        value: cdktf.stringToHclTerraform(this._backupPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._clusterPlacementGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_volume_replica: {
        value: cdktf.booleanToHclTerraform(this._preserveVolumeReplica),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volume_group_replicas_deletion: {
        value: cdktf.booleanToHclTerraform(this._volumeGroupReplicasDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      volume_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._volumeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      xrc_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._xrcKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_details: {
        value: coreVolumeGroupSourceDetailsToHclTerraform(this._sourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreVolumeGroupSourceDetailsList",
      },
      timeouts: {
        value: coreVolumeGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreVolumeGroupTimeouts",
      },
      volume_group_replicas: {
        value: cdktf.listMapperHcl(coreVolumeGroupVolumeGroupReplicasToHclTerraform, true)(this._volumeGroupReplicas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreVolumeGroupVolumeGroupReplicasList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
