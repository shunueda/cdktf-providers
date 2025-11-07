// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreVolumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#availability_domain CoreVolume#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#backup_policy_id CoreVolume#backup_policy_id}
  */
  readonly backupPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#block_volume_replicas_deletion CoreVolume#block_volume_replicas_deletion}
  */
  readonly blockVolumeReplicasDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#cluster_placement_group_id CoreVolume#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#compartment_id CoreVolume#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#defined_tags CoreVolume#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#display_name CoreVolume#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#freeform_tags CoreVolume#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#id CoreVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#is_auto_tune_enabled CoreVolume#is_auto_tune_enabled}
  */
  readonly isAutoTuneEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#is_reservations_enabled CoreVolume#is_reservations_enabled}
  */
  readonly isReservationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#kms_key_id CoreVolume#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#size_in_gbs CoreVolume#size_in_gbs}
  */
  readonly sizeInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#size_in_mbs CoreVolume#size_in_mbs}
  */
  readonly sizeInMbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#volume_backup_id CoreVolume#volume_backup_id}
  */
  readonly volumeBackupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#vpus_per_gb CoreVolume#vpus_per_gb}
  */
  readonly vpusPerGb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#xrc_kms_key_id CoreVolume#xrc_kms_key_id}
  */
  readonly xrcKmsKeyId?: string;
  /**
  * autotune_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#autotune_policies CoreVolume#autotune_policies}
  */
  readonly autotunePolicies?: CoreVolumeAutotunePolicies[] | cdktf.IResolvable;
  /**
  * block_volume_replicas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#block_volume_replicas CoreVolume#block_volume_replicas}
  */
  readonly blockVolumeReplicas?: CoreVolumeBlockVolumeReplicas[] | cdktf.IResolvable;
  /**
  * source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#source_details CoreVolume#source_details}
  */
  readonly sourceDetails?: CoreVolumeSourceDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#timeouts CoreVolume#timeouts}
  */
  readonly timeouts?: CoreVolumeTimeouts;
}
export interface CoreVolumeAutotunePolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#autotune_type CoreVolume#autotune_type}
  */
  readonly autotuneType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#max_vpus_per_gb CoreVolume#max_vpus_per_gb}
  */
  readonly maxVpusPerGb?: string;
}

export function coreVolumeAutotunePoliciesToTerraform(struct?: CoreVolumeAutotunePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autotune_type: cdktf.stringToTerraform(struct!.autotuneType),
    max_vpus_per_gb: cdktf.stringToTerraform(struct!.maxVpusPerGb),
  }
}


export function coreVolumeAutotunePoliciesToHclTerraform(struct?: CoreVolumeAutotunePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autotune_type: {
      value: cdktf.stringToHclTerraform(struct!.autotuneType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_vpus_per_gb: {
      value: cdktf.stringToHclTerraform(struct!.maxVpusPerGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreVolumeAutotunePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreVolumeAutotunePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autotuneType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autotuneType = this._autotuneType;
    }
    if (this._maxVpusPerGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVpusPerGb = this._maxVpusPerGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVolumeAutotunePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autotuneType = undefined;
      this._maxVpusPerGb = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autotuneType = value.autotuneType;
      this._maxVpusPerGb = value.maxVpusPerGb;
    }
  }

  // autotune_type - computed: false, optional: false, required: true
  private _autotuneType?: string; 
  public get autotuneType() {
    return this.getStringAttribute('autotune_type');
  }
  public set autotuneType(value: string) {
    this._autotuneType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autotuneTypeInput() {
    return this._autotuneType;
  }

  // max_vpus_per_gb - computed: true, optional: true, required: false
  private _maxVpusPerGb?: string; 
  public get maxVpusPerGb() {
    return this.getStringAttribute('max_vpus_per_gb');
  }
  public set maxVpusPerGb(value: string) {
    this._maxVpusPerGb = value;
  }
  public resetMaxVpusPerGb() {
    this._maxVpusPerGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVpusPerGbInput() {
    return this._maxVpusPerGb;
  }
}

export class CoreVolumeAutotunePoliciesList extends cdktf.ComplexList {
  public internalValue? : CoreVolumeAutotunePolicies[] | cdktf.IResolvable

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
  public get(index: number): CoreVolumeAutotunePoliciesOutputReference {
    return new CoreVolumeAutotunePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreVolumeBlockVolumeReplicas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#availability_domain CoreVolume#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#display_name CoreVolume#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#xrr_kms_key_id CoreVolume#xrr_kms_key_id}
  */
  readonly xrrKmsKeyId?: string;
}

export function coreVolumeBlockVolumeReplicasToTerraform(struct?: CoreVolumeBlockVolumeReplicas | cdktf.IResolvable): any {
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


export function coreVolumeBlockVolumeReplicasToHclTerraform(struct?: CoreVolumeBlockVolumeReplicas | cdktf.IResolvable): any {
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

export class CoreVolumeBlockVolumeReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoreVolumeBlockVolumeReplicas | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreVolumeBlockVolumeReplicas | cdktf.IResolvable | undefined) {
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

  // block_volume_replica_id - computed: true, optional: false, required: false
  public get blockVolumeReplicaId() {
    return this.getStringAttribute('block_volume_replica_id');
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

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
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

export class CoreVolumeBlockVolumeReplicasList extends cdktf.ComplexList {
  public internalValue? : CoreVolumeBlockVolumeReplicas[] | cdktf.IResolvable

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
  public get(index: number): CoreVolumeBlockVolumeReplicasOutputReference {
    return new CoreVolumeBlockVolumeReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CoreVolumeSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#change_block_size_in_bytes CoreVolume#change_block_size_in_bytes}
  */
  readonly changeBlockSizeInBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#first_backup_id CoreVolume#first_backup_id}
  */
  readonly firstBackupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#id CoreVolume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#second_backup_id CoreVolume#second_backup_id}
  */
  readonly secondBackupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#type CoreVolume#type}
  */
  readonly type: string;
}

export function coreVolumeSourceDetailsToTerraform(struct?: CoreVolumeSourceDetailsOutputReference | CoreVolumeSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_block_size_in_bytes: cdktf.stringToTerraform(struct!.changeBlockSizeInBytes),
    first_backup_id: cdktf.stringToTerraform(struct!.firstBackupId),
    id: cdktf.stringToTerraform(struct!.id),
    second_backup_id: cdktf.stringToTerraform(struct!.secondBackupId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function coreVolumeSourceDetailsToHclTerraform(struct?: CoreVolumeSourceDetailsOutputReference | CoreVolumeSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_block_size_in_bytes: {
      value: cdktf.stringToHclTerraform(struct!.changeBlockSizeInBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_backup_id: {
      value: cdktf.stringToHclTerraform(struct!.firstBackupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    second_backup_id: {
      value: cdktf.stringToHclTerraform(struct!.secondBackupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreVolumeSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoreVolumeSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeBlockSizeInBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeBlockSizeInBytes = this._changeBlockSizeInBytes;
    }
    if (this._firstBackupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstBackupId = this._firstBackupId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._secondBackupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondBackupId = this._secondBackupId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreVolumeSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeBlockSizeInBytes = undefined;
      this._firstBackupId = undefined;
      this._id = undefined;
      this._secondBackupId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeBlockSizeInBytes = value.changeBlockSizeInBytes;
      this._firstBackupId = value.firstBackupId;
      this._id = value.id;
      this._secondBackupId = value.secondBackupId;
      this._type = value.type;
    }
  }

  // change_block_size_in_bytes - computed: false, optional: true, required: false
  private _changeBlockSizeInBytes?: string; 
  public get changeBlockSizeInBytes() {
    return this.getStringAttribute('change_block_size_in_bytes');
  }
  public set changeBlockSizeInBytes(value: string) {
    this._changeBlockSizeInBytes = value;
  }
  public resetChangeBlockSizeInBytes() {
    this._changeBlockSizeInBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeBlockSizeInBytesInput() {
    return this._changeBlockSizeInBytes;
  }

  // first_backup_id - computed: false, optional: true, required: false
  private _firstBackupId?: string; 
  public get firstBackupId() {
    return this.getStringAttribute('first_backup_id');
  }
  public set firstBackupId(value: string) {
    this._firstBackupId = value;
  }
  public resetFirstBackupId() {
    this._firstBackupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstBackupIdInput() {
    return this._firstBackupId;
  }

  // id - computed: false, optional: true, required: false
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

  // second_backup_id - computed: false, optional: true, required: false
  private _secondBackupId?: string; 
  public get secondBackupId() {
    return this.getStringAttribute('second_backup_id');
  }
  public set secondBackupId(value: string) {
    this._secondBackupId = value;
  }
  public resetSecondBackupId() {
    this._secondBackupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondBackupIdInput() {
    return this._secondBackupId;
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
}
export interface CoreVolumeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#create CoreVolume#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#delete CoreVolume#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#update CoreVolume#update}
  */
  readonly update?: string;
}

export function coreVolumeTimeoutsToTerraform(struct?: CoreVolumeTimeouts | cdktf.IResolvable): any {
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


export function coreVolumeTimeoutsToHclTerraform(struct?: CoreVolumeTimeouts | cdktf.IResolvable): any {
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

export class CoreVolumeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreVolumeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreVolumeTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume oci_core_volume}
*/
export class CoreVolume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_volume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreVolume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreVolume to import
  * @param importFromId The id of the existing CoreVolume that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreVolume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_volume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_volume oci_core_volume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreVolumeConfig
  */
  public constructor(scope: Construct, id: string, config: CoreVolumeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_volume',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._blockVolumeReplicasDeletion = config.blockVolumeReplicasDeletion;
    this._clusterPlacementGroupId = config.clusterPlacementGroupId;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isAutoTuneEnabled = config.isAutoTuneEnabled;
    this._isReservationsEnabled = config.isReservationsEnabled;
    this._kmsKeyId = config.kmsKeyId;
    this._sizeInGbs = config.sizeInGbs;
    this._sizeInMbs = config.sizeInMbs;
    this._volumeBackupId = config.volumeBackupId;
    this._vpusPerGb = config.vpusPerGb;
    this._xrcKmsKeyId = config.xrcKmsKeyId;
    this._autotunePolicies.internalValue = config.autotunePolicies;
    this._blockVolumeReplicas.internalValue = config.blockVolumeReplicas;
    this._sourceDetails.internalValue = config.sourceDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_tuned_vpus_per_gb - computed: true, optional: false, required: false
  public get autoTunedVpusPerGb() {
    return this.getStringAttribute('auto_tuned_vpus_per_gb');
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

  // block_volume_replicas_deletion - computed: false, optional: true, required: false
  private _blockVolumeReplicasDeletion?: boolean | cdktf.IResolvable; 
  public get blockVolumeReplicasDeletion() {
    return this.getBooleanAttribute('block_volume_replicas_deletion');
  }
  public set blockVolumeReplicasDeletion(value: boolean | cdktf.IResolvable) {
    this._blockVolumeReplicasDeletion = value;
  }
  public resetBlockVolumeReplicasDeletion() {
    this._blockVolumeReplicasDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeReplicasDeletionInput() {
    return this._blockVolumeReplicasDeletion;
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

  // is_auto_tune_enabled - computed: true, optional: true, required: false
  private _isAutoTuneEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoTuneEnabled() {
    return this.getBooleanAttribute('is_auto_tune_enabled');
  }
  public set isAutoTuneEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoTuneEnabled = value;
  }
  public resetIsAutoTuneEnabled() {
    this._isAutoTuneEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoTuneEnabledInput() {
    return this._isAutoTuneEnabled;
  }

  // is_hydrated - computed: true, optional: false, required: false
  public get isHydrated() {
    return this.getBooleanAttribute('is_hydrated');
  }

  // is_reservations_enabled - computed: true, optional: true, required: false
  private _isReservationsEnabled?: boolean | cdktf.IResolvable; 
  public get isReservationsEnabled() {
    return this.getBooleanAttribute('is_reservations_enabled');
  }
  public set isReservationsEnabled(value: boolean | cdktf.IResolvable) {
    this._isReservationsEnabled = value;
  }
  public resetIsReservationsEnabled() {
    this._isReservationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isReservationsEnabledInput() {
    return this._isReservationsEnabled;
  }

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // size_in_gbs - computed: true, optional: true, required: false
  private _sizeInGbs?: string; 
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }
  public set sizeInGbs(value: string) {
    this._sizeInGbs = value;
  }
  public resetSizeInGbs() {
    this._sizeInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbsInput() {
    return this._sizeInGbs;
  }

  // size_in_mbs - computed: true, optional: true, required: false
  private _sizeInMbs?: string; 
  public get sizeInMbs() {
    return this.getStringAttribute('size_in_mbs');
  }
  public set sizeInMbs(value: string) {
    this._sizeInMbs = value;
  }
  public resetSizeInMbs() {
    this._sizeInMbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInMbsInput() {
    return this._sizeInMbs;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // volume_backup_id - computed: true, optional: true, required: false
  private _volumeBackupId?: string; 
  public get volumeBackupId() {
    return this.getStringAttribute('volume_backup_id');
  }
  public set volumeBackupId(value: string) {
    this._volumeBackupId = value;
  }
  public resetVolumeBackupId() {
    this._volumeBackupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeBackupIdInput() {
    return this._volumeBackupId;
  }

  // volume_group_id - computed: true, optional: false, required: false
  public get volumeGroupId() {
    return this.getStringAttribute('volume_group_id');
  }

  // vpus_per_gb - computed: true, optional: true, required: false
  private _vpusPerGb?: string; 
  public get vpusPerGb() {
    return this.getStringAttribute('vpus_per_gb');
  }
  public set vpusPerGb(value: string) {
    this._vpusPerGb = value;
  }
  public resetVpusPerGb() {
    this._vpusPerGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpusPerGbInput() {
    return this._vpusPerGb;
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

  // autotune_policies - computed: false, optional: true, required: false
  private _autotunePolicies = new CoreVolumeAutotunePoliciesList(this, "autotune_policies", false);
  public get autotunePolicies() {
    return this._autotunePolicies;
  }
  public putAutotunePolicies(value: CoreVolumeAutotunePolicies[] | cdktf.IResolvable) {
    this._autotunePolicies.internalValue = value;
  }
  public resetAutotunePolicies() {
    this._autotunePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autotunePoliciesInput() {
    return this._autotunePolicies.internalValue;
  }

  // block_volume_replicas - computed: false, optional: true, required: false
  private _blockVolumeReplicas = new CoreVolumeBlockVolumeReplicasList(this, "block_volume_replicas", false);
  public get blockVolumeReplicas() {
    return this._blockVolumeReplicas;
  }
  public putBlockVolumeReplicas(value: CoreVolumeBlockVolumeReplicas[] | cdktf.IResolvable) {
    this._blockVolumeReplicas.internalValue = value;
  }
  public resetBlockVolumeReplicas() {
    this._blockVolumeReplicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockVolumeReplicasInput() {
    return this._blockVolumeReplicas.internalValue;
  }

  // source_details - computed: false, optional: true, required: false
  private _sourceDetails = new CoreVolumeSourceDetailsOutputReference(this, "source_details");
  public get sourceDetails() {
    return this._sourceDetails;
  }
  public putSourceDetails(value: CoreVolumeSourceDetails) {
    this._sourceDetails.internalValue = value;
  }
  public resetSourceDetails() {
    this._sourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetailsInput() {
    return this._sourceDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreVolumeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreVolumeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      backup_policy_id: cdktf.stringToTerraform(this._backupPolicyId),
      block_volume_replicas_deletion: cdktf.booleanToTerraform(this._blockVolumeReplicasDeletion),
      cluster_placement_group_id: cdktf.stringToTerraform(this._clusterPlacementGroupId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_auto_tune_enabled: cdktf.booleanToTerraform(this._isAutoTuneEnabled),
      is_reservations_enabled: cdktf.booleanToTerraform(this._isReservationsEnabled),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      size_in_gbs: cdktf.stringToTerraform(this._sizeInGbs),
      size_in_mbs: cdktf.stringToTerraform(this._sizeInMbs),
      volume_backup_id: cdktf.stringToTerraform(this._volumeBackupId),
      vpus_per_gb: cdktf.stringToTerraform(this._vpusPerGb),
      xrc_kms_key_id: cdktf.stringToTerraform(this._xrcKmsKeyId),
      autotune_policies: cdktf.listMapper(coreVolumeAutotunePoliciesToTerraform, true)(this._autotunePolicies.internalValue),
      block_volume_replicas: cdktf.listMapper(coreVolumeBlockVolumeReplicasToTerraform, true)(this._blockVolumeReplicas.internalValue),
      source_details: coreVolumeSourceDetailsToTerraform(this._sourceDetails.internalValue),
      timeouts: coreVolumeTimeoutsToTerraform(this._timeouts.internalValue),
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
      block_volume_replicas_deletion: {
        value: cdktf.booleanToHclTerraform(this._blockVolumeReplicasDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      is_auto_tune_enabled: {
        value: cdktf.booleanToHclTerraform(this._isAutoTuneEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_reservations_enabled: {
        value: cdktf.booleanToHclTerraform(this._isReservationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_in_gbs: {
        value: cdktf.stringToHclTerraform(this._sizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size_in_mbs: {
        value: cdktf.stringToHclTerraform(this._sizeInMbs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_backup_id: {
        value: cdktf.stringToHclTerraform(this._volumeBackupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpus_per_gb: {
        value: cdktf.stringToHclTerraform(this._vpusPerGb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xrc_kms_key_id: {
        value: cdktf.stringToHclTerraform(this._xrcKmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autotune_policies: {
        value: cdktf.listMapperHcl(coreVolumeAutotunePoliciesToHclTerraform, true)(this._autotunePolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreVolumeAutotunePoliciesList",
      },
      block_volume_replicas: {
        value: cdktf.listMapperHcl(coreVolumeBlockVolumeReplicasToHclTerraform, true)(this._blockVolumeReplicas.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreVolumeBlockVolumeReplicasList",
      },
      source_details: {
        value: coreVolumeSourceDetailsToHclTerraform(this._sourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreVolumeSourceDetailsList",
      },
      timeouts: {
        value: coreVolumeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreVolumeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
