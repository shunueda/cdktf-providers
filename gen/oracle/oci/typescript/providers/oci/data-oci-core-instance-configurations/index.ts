// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_instance_configurations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreInstanceConfigurationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_instance_configurations#compartment_id DataOciCoreInstanceConfigurations#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_instance_configurations#id DataOciCoreInstanceConfigurations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_instance_configurations#filter DataOciCoreInstanceConfigurations#filter}
  */
  readonly filter?: DataOciCoreInstanceConfigurationsFilter[] | cdktf.IResolvable;
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: false
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // is_read_only - computed: true, optional: false, required: false
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }

  // is_shareable - computed: true, optional: false, required: false
  public get isShareable() {
    return this.getBooleanAttribute('is_shareable');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_chap - computed: true, optional: false, required: false
  public get useChap() {
    return this.getBooleanAttribute('use_chap');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autotune_type - computed: true, optional: false, required: false
  public get autotuneType() {
    return this.getStringAttribute('autotune_type');
  }

  // max_vpus_per_gb - computed: true, optional: false, required: false
  public get maxVpusPerGb() {
    return this.getStringAttribute('max_vpus_per_gb');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autotune_policies - computed: true, optional: false, required: false
  private _autotunePolicies = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsAutotunePoliciesList(this, "autotune_policies", false);
  public get autotunePolicies() {
    return this._autotunePolicies;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_policy_id - computed: true, optional: false, required: false
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }

  // block_volume_replicas - computed: true, optional: false, required: false
  private _blockVolumeReplicas = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsBlockVolumeReplicasList(this, "block_volume_replicas", false);
  public get blockVolumeReplicas() {
    return this._blockVolumeReplicas;
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // is_auto_tune_enabled - computed: true, optional: false, required: false
  public get isAutoTuneEnabled() {
    return this.getBooleanAttribute('is_auto_tune_enabled');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // size_in_gbs - computed: true, optional: false, required: false
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }

  // source_details - computed: true, optional: false, required: false
  private _sourceDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsSourceDetailsList(this, "source_details", false);
  public get sourceDetails() {
    return this._sourceDetails;
  }

  // vpus_per_gb - computed: true, optional: false, required: false
  public get vpusPerGb() {
    return this.getStringAttribute('vpus_per_gb');
  }

  // xrc_kms_key_id - computed: true, optional: false, required: false
  public get xrcKmsKeyId() {
    return this.getStringAttribute('xrc_kms_key_id');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumes {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attach_details - computed: true, optional: false, required: false
  private _attachDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesAttachDetailsList(this, "attach_details", false);
  public get attachDetails() {
    return this._attachDetails;
  }

  // create_details - computed: true, optional: false, required: false
  private _createDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesCreateDetailsList(this, "create_details", false);
  public get createDetails() {
    return this._createDetails;
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // desired_state - computed: true, optional: false, required: false
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_all_plugins_disabled - computed: true, optional: false, required: false
  public get areAllPluginsDisabled() {
    return this.getBooleanAttribute('are_all_plugins_disabled');
  }

  // is_management_disabled - computed: true, optional: false, required: false
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }

  // is_monitoring_disabled - computed: true, optional: false, required: false
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }

  // plugins_config - computed: true, optional: false, required: false
  private _pluginsConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigPluginsConfigList(this, "plugins_config", false);
  public get pluginsConfig() {
    return this._pluginsConfig;
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_live_migration_preferred - computed: true, optional: false, required: false
  public get isLiveMigrationPreferred() {
    return this.getBooleanAttribute('is_live_migration_preferred');
  }

  // recovery_action - computed: true, optional: false, required: false
  public get recoveryAction() {
    return this.getStringAttribute('recovery_action');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6address');
  }

  // ipv6subnet_cidr - computed: true, optional: false, required: false
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_ipv6ip - computed: true, optional: false, required: false
  public get assignIpv6Ip() {
    return this.getBooleanAttribute('assign_ipv6ip');
  }

  // assign_private_dns_record - computed: true, optional: false, required: false
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: true, optional: false, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // skip_source_dest_check - computed: true, optional: false, required: false
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }

  // subnet_cidr - computed: true, optional: false, required: false
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptions {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptionsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptionsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_legacy_imds_endpoints_disabled - computed: true, optional: false, required: false
  public get areLegacyImdsEndpointsDisabled() {
    return this.getBooleanAttribute('are_legacy_imds_endpoints_disabled');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptionsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptions {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptionsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptionsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_volume_type - computed: true, optional: false, required: false
  public get bootVolumeType() {
    return this.getStringAttribute('boot_volume_type');
  }

  // firmware - computed: true, optional: false, required: false
  public get firmware() {
    return this.getStringAttribute('firmware');
  }

  // is_consistent_volume_naming_enabled - computed: true, optional: false, required: false
  public get isConsistentVolumeNamingEnabled() {
    return this.getBooleanAttribute('is_consistent_volume_naming_enabled');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: false
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // remote_data_volume_type - computed: true, optional: false, required: false
  public get remoteDataVolumeType() {
    return this.getStringAttribute('remote_data_volume_type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptionsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigs {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_host_group_id - computed: true, optional: false, required: false
  public get computeHostGroupId() {
    return this.getStringAttribute('compute_host_group_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_virtual_instructions_enabled - computed: true, optional: false, required: false
  public get areVirtualInstructionsEnabled() {
    return this.getBooleanAttribute('are_virtual_instructions_enabled');
  }

  // config_map - computed: true, optional: false, required: false
  private _configMap = new cdktf.StringMap(this, "config_map");
  public get configMap() {
    return this._configMap;
  }

  // is_access_control_service_enabled - computed: true, optional: false, required: false
  public get isAccessControlServiceEnabled() {
    return this.getBooleanAttribute('is_access_control_service_enabled');
  }

  // is_input_output_memory_management_unit_enabled - computed: true, optional: false, required: false
  public get isInputOutputMemoryManagementUnitEnabled() {
    return this.getBooleanAttribute('is_input_output_memory_management_unit_enabled');
  }

  // is_measured_boot_enabled - computed: true, optional: false, required: false
  public get isMeasuredBootEnabled() {
    return this.getBooleanAttribute('is_measured_boot_enabled');
  }

  // is_memory_encryption_enabled - computed: true, optional: false, required: false
  public get isMemoryEncryptionEnabled() {
    return this.getBooleanAttribute('is_memory_encryption_enabled');
  }

  // is_secure_boot_enabled - computed: true, optional: false, required: false
  public get isSecureBootEnabled() {
    return this.getBooleanAttribute('is_secure_boot_enabled');
  }

  // is_symmetric_multi_threading_enabled - computed: true, optional: false, required: false
  public get isSymmetricMultiThreadingEnabled() {
    return this.getBooleanAttribute('is_symmetric_multi_threading_enabled');
  }

  // is_trusted_platform_module_enabled - computed: true, optional: false, required: false
  public get isTrustedPlatformModuleEnabled() {
    return this.getBooleanAttribute('is_trusted_platform_module_enabled');
  }

  // numa_nodes_per_socket - computed: true, optional: false, required: false
  public get numaNodesPerSocket() {
    return this.getStringAttribute('numa_nodes_per_socket');
  }

  // percentage_of_cores_enabled - computed: true, optional: false, required: false
  public get percentageOfCoresEnabled() {
    return this.getNumberAttribute('percentage_of_cores_enabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preserve_boot_volume - computed: true, optional: false, required: false
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preemption_action - computed: true, optional: false, required: false
  private _preemptionAction = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigPreemptionActionList(this, "preemption_action", false);
  public get preemptionAction() {
    return this._preemptionAction;
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_ocpu_utilization - computed: true, optional: false, required: false
  public get baselineOcpuUtilization() {
    return this.getStringAttribute('baseline_ocpu_utilization');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // resource_management - computed: true, optional: false, required: false
  public get resourceManagement() {
    return this.getStringAttribute('resource_management');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags_filter - computed: true, optional: false, required: false
  private _definedTagsFilter = new cdktf.StringMap(this, "defined_tags_filter");
  public get definedTagsFilter() {
    return this._definedTagsFilter;
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // operating_system_version - computed: true, optional: false, required: false
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_volume_id - computed: true, optional: false, required: false
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // boot_volume_size_in_gbs - computed: true, optional: false, required: false
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }

  // boot_volume_vpus_per_gb - computed: true, optional: false, required: false
  public get bootVolumeVpusPerGb() {
    return this.getStringAttribute('boot_volume_vpus_per_gb');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_source_image_filter_details - computed: true, optional: false, required: false
  private _instanceSourceImageFilterDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsList(this, "instance_source_image_filter_details", false);
  public get instanceSourceImageFilterDetails() {
    return this._instanceSourceImageFilterDetails;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_config - computed: true, optional: false, required: false
  private _agentConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAgentConfigList(this, "agent_config", false);
  public get agentConfig() {
    return this._agentConfig;
  }

  // availability_config - computed: true, optional: false, required: false
  private _availabilityConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsAvailabilityConfigList(this, "availability_config", false);
  public get availabilityConfig() {
    return this._availabilityConfig;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_cluster_id - computed: true, optional: false, required: false
  public get computeClusterId() {
    return this.getStringAttribute('compute_cluster_id');
  }

  // create_vnic_details - computed: true, optional: false, required: false
  private _createVnicDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsCreateVnicDetailsList(this, "create_vnic_details", false);
  public get createVnicDetails() {
    return this._createVnicDetails;
  }

  // dedicated_vm_host_id - computed: true, optional: false, required: false
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // extended_metadata - computed: true, optional: false, required: false
  private _extendedMetadata = new cdktf.StringMap(this, "extended_metadata");
  public get extendedMetadata() {
    return this._extendedMetadata;
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // instance_options - computed: true, optional: false, required: false
  private _instanceOptions = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsInstanceOptionsList(this, "instance_options", false);
  public get instanceOptions() {
    return this._instanceOptions;
  }

  // ipxe_script - computed: true, optional: false, required: false
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }

  // is_ai_enterprise_enabled - computed: true, optional: false, required: false
  public get isAiEnterpriseEnabled() {
    return this.getBooleanAttribute('is_ai_enterprise_enabled');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: false
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // launch_mode - computed: true, optional: false, required: false
  public get launchMode() {
    return this.getStringAttribute('launch_mode');
  }

  // launch_options - computed: true, optional: false, required: false
  private _launchOptions = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLaunchOptionsList(this, "launch_options", false);
  public get launchOptions() {
    return this._launchOptions;
  }

  // licensing_configs - computed: true, optional: false, required: false
  private _licensingConfigs = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsLicensingConfigsList(this, "licensing_configs", false);
  public get licensingConfigs() {
    return this._licensingConfigs;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // placement_constraint_details - computed: true, optional: false, required: false
  private _placementConstraintDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlacementConstraintDetailsList(this, "placement_constraint_details", false);
  public get placementConstraintDetails() {
    return this._placementConstraintDetails;
  }

  // platform_config - computed: true, optional: false, required: false
  private _platformConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPlatformConfigList(this, "platform_config", false);
  public get platformConfig() {
    return this._platformConfig;
  }

  // preemptible_instance_config - computed: true, optional: false, required: false
  private _preemptibleInstanceConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsPreemptibleInstanceConfigList(this, "preemptible_instance_config", false);
  public get preemptibleInstanceConfig() {
    return this._preemptibleInstanceConfig;
  }

  // preferred_maintenance_action - computed: true, optional: false, required: false
  public get preferredMaintenanceAction() {
    return this.getStringAttribute('preferred_maintenance_action');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // source_details - computed: true, optional: false, required: false
  private _sourceDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsSourceDetailsList(this, "source_details", false);
  public get sourceDetails() {
    return this._sourceDetails;
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: false
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // is_read_only - computed: true, optional: false, required: false
  public get isReadOnly() {
    return this.getBooleanAttribute('is_read_only');
  }

  // is_shareable - computed: true, optional: false, required: false
  public get isShareable() {
    return this.getBooleanAttribute('is_shareable');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // use_chap - computed: true, optional: false, required: false
  public get useChap() {
    return this.getBooleanAttribute('use_chap');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autotune_type - computed: true, optional: false, required: false
  public get autotuneType() {
    return this.getStringAttribute('autotune_type');
  }

  // max_vpus_per_gb - computed: true, optional: false, required: false
  public get maxVpusPerGb() {
    return this.getStringAttribute('max_vpus_per_gb');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autotune_policies - computed: true, optional: false, required: false
  private _autotunePolicies = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsAutotunePoliciesList(this, "autotune_policies", false);
  public get autotunePolicies() {
    return this._autotunePolicies;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // backup_policy_id - computed: true, optional: false, required: false
  public get backupPolicyId() {
    return this.getStringAttribute('backup_policy_id');
  }

  // block_volume_replicas - computed: true, optional: false, required: false
  private _blockVolumeReplicas = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsBlockVolumeReplicasList(this, "block_volume_replicas", false);
  public get blockVolumeReplicas() {
    return this._blockVolumeReplicas;
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // is_auto_tune_enabled - computed: true, optional: false, required: false
  public get isAutoTuneEnabled() {
    return this.getBooleanAttribute('is_auto_tune_enabled');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // size_in_gbs - computed: true, optional: false, required: false
  public get sizeInGbs() {
    return this.getStringAttribute('size_in_gbs');
  }

  // source_details - computed: true, optional: false, required: false
  private _sourceDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsSourceDetailsList(this, "source_details", false);
  public get sourceDetails() {
    return this._sourceDetails;
  }

  // vpus_per_gb - computed: true, optional: false, required: false
  public get vpusPerGb() {
    return this.getStringAttribute('vpus_per_gb');
  }

  // xrc_kms_key_id - computed: true, optional: false, required: false
  public get xrcKmsKeyId() {
    return this.getStringAttribute('xrc_kms_key_id');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumes {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attach_details - computed: true, optional: false, required: false
  private _attachDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesAttachDetailsList(this, "attach_details", false);
  public get attachDetails() {
    return this._attachDetails;
  }

  // create_details - computed: true, optional: false, required: false
  private _createDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesCreateDetailsList(this, "create_details", false);
  public get createDetails() {
    return this._createDetails;
  }

  // volume_id - computed: true, optional: false, required: false
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // desired_state - computed: true, optional: false, required: false
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_all_plugins_disabled - computed: true, optional: false, required: false
  public get areAllPluginsDisabled() {
    return this.getBooleanAttribute('are_all_plugins_disabled');
  }

  // is_management_disabled - computed: true, optional: false, required: false
  public get isManagementDisabled() {
    return this.getBooleanAttribute('is_management_disabled');
  }

  // is_monitoring_disabled - computed: true, optional: false, required: false
  public get isMonitoringDisabled() {
    return this.getBooleanAttribute('is_monitoring_disabled');
  }

  // plugins_config - computed: true, optional: false, required: false
  private _pluginsConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigPluginsConfigList(this, "plugins_config", false);
  public get pluginsConfig() {
    return this._pluginsConfig;
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_live_migration_preferred - computed: true, optional: false, required: false
  public get isLiveMigrationPreferred() {
    return this.getBooleanAttribute('is_live_migration_preferred');
  }

  // recovery_action - computed: true, optional: false, required: false
  public get recoveryAction() {
    return this.getStringAttribute('recovery_action');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6address');
  }

  // ipv6subnet_cidr - computed: true, optional: false, required: false
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_ipv6ip - computed: true, optional: false, required: false
  public get assignIpv6Ip() {
    return this.getBooleanAttribute('assign_ipv6ip');
  }

  // assign_private_dns_record - computed: true, optional: false, required: false
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: true, optional: false, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // skip_source_dest_check - computed: true, optional: false, required: false
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }

  // subnet_cidr - computed: true, optional: false, required: false
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptions {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptionsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptionsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_legacy_imds_endpoints_disabled - computed: true, optional: false, required: false
  public get areLegacyImdsEndpointsDisabled() {
    return this.getBooleanAttribute('are_legacy_imds_endpoints_disabled');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptionsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptions {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptionsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptionsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_volume_type - computed: true, optional: false, required: false
  public get bootVolumeType() {
    return this.getStringAttribute('boot_volume_type');
  }

  // firmware - computed: true, optional: false, required: false
  public get firmware() {
    return this.getStringAttribute('firmware');
  }

  // is_consistent_volume_naming_enabled - computed: true, optional: false, required: false
  public get isConsistentVolumeNamingEnabled() {
    return this.getBooleanAttribute('is_consistent_volume_naming_enabled');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: false
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // remote_data_volume_type - computed: true, optional: false, required: false
  public get remoteDataVolumeType() {
    return this.getStringAttribute('remote_data_volume_type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptionsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigs {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_host_group_id - computed: true, optional: false, required: false
  public get computeHostGroupId() {
    return this.getStringAttribute('compute_host_group_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // are_virtual_instructions_enabled - computed: true, optional: false, required: false
  public get areVirtualInstructionsEnabled() {
    return this.getBooleanAttribute('are_virtual_instructions_enabled');
  }

  // is_access_control_service_enabled - computed: true, optional: false, required: false
  public get isAccessControlServiceEnabled() {
    return this.getBooleanAttribute('is_access_control_service_enabled');
  }

  // is_input_output_memory_management_unit_enabled - computed: true, optional: false, required: false
  public get isInputOutputMemoryManagementUnitEnabled() {
    return this.getBooleanAttribute('is_input_output_memory_management_unit_enabled');
  }

  // is_measured_boot_enabled - computed: true, optional: false, required: false
  public get isMeasuredBootEnabled() {
    return this.getBooleanAttribute('is_measured_boot_enabled');
  }

  // is_memory_encryption_enabled - computed: true, optional: false, required: false
  public get isMemoryEncryptionEnabled() {
    return this.getBooleanAttribute('is_memory_encryption_enabled');
  }

  // is_secure_boot_enabled - computed: true, optional: false, required: false
  public get isSecureBootEnabled() {
    return this.getBooleanAttribute('is_secure_boot_enabled');
  }

  // is_symmetric_multi_threading_enabled - computed: true, optional: false, required: false
  public get isSymmetricMultiThreadingEnabled() {
    return this.getBooleanAttribute('is_symmetric_multi_threading_enabled');
  }

  // is_trusted_platform_module_enabled - computed: true, optional: false, required: false
  public get isTrustedPlatformModuleEnabled() {
    return this.getBooleanAttribute('is_trusted_platform_module_enabled');
  }

  // numa_nodes_per_socket - computed: true, optional: false, required: false
  public get numaNodesPerSocket() {
    return this.getStringAttribute('numa_nodes_per_socket');
  }

  // percentage_of_cores_enabled - computed: true, optional: false, required: false
  public get percentageOfCoresEnabled() {
    return this.getNumberAttribute('percentage_of_cores_enabled');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preserve_boot_volume - computed: true, optional: false, required: false
  public get preserveBootVolume() {
    return this.getBooleanAttribute('preserve_boot_volume');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preemption_action - computed: true, optional: false, required: false
  private _preemptionAction = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigPreemptionActionList(this, "preemption_action", false);
  public get preemptionAction() {
    return this._preemptionAction;
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfig {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfigToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfigToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // baseline_ocpu_utilization - computed: true, optional: false, required: false
  public get baselineOcpuUtilization() {
    return this.getStringAttribute('baseline_ocpu_utilization');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // nvmes - computed: true, optional: false, required: false
  public get nvmes() {
    return this.getNumberAttribute('nvmes');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // resource_management - computed: true, optional: false, required: false
  public get resourceManagement() {
    return this.getStringAttribute('resource_management');
  }

  // vcpus - computed: true, optional: false, required: false
  public get vcpus() {
    return this.getNumberAttribute('vcpus');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfigOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags_filter - computed: true, optional: false, required: false
  private _definedTagsFilter = new cdktf.StringMap(this, "defined_tags_filter");
  public get definedTagsFilter() {
    return this._definedTagsFilter;
  }

  // operating_system - computed: true, optional: false, required: false
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // operating_system_version - computed: true, optional: false, required: false
  public get operatingSystemVersion() {
    return this.getStringAttribute('operating_system_version');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boot_volume_id - computed: true, optional: false, required: false
  public get bootVolumeId() {
    return this.getStringAttribute('boot_volume_id');
  }

  // boot_volume_size_in_gbs - computed: true, optional: false, required: false
  public get bootVolumeSizeInGbs() {
    return this.getStringAttribute('boot_volume_size_in_gbs');
  }

  // boot_volume_vpus_per_gb - computed: true, optional: false, required: false
  public get bootVolumeVpusPerGb() {
    return this.getStringAttribute('boot_volume_vpus_per_gb');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_source_image_filter_details - computed: true, optional: false, required: false
  private _instanceSourceImageFilterDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsInstanceSourceImageFilterDetailsList(this, "instance_source_image_filter_details", false);
  public get instanceSourceImageFilterDetails() {
    return this._instanceSourceImageFilterDetails;
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_config - computed: true, optional: false, required: false
  private _agentConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAgentConfigList(this, "agent_config", false);
  public get agentConfig() {
    return this._agentConfig;
  }

  // availability_config - computed: true, optional: false, required: false
  private _availabilityConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsAvailabilityConfigList(this, "availability_config", false);
  public get availabilityConfig() {
    return this._availabilityConfig;
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // capacity_reservation_id - computed: true, optional: false, required: false
  public get capacityReservationId() {
    return this.getStringAttribute('capacity_reservation_id');
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_cluster_id - computed: true, optional: false, required: false
  public get computeClusterId() {
    return this.getStringAttribute('compute_cluster_id');
  }

  // create_vnic_details - computed: true, optional: false, required: false
  private _createVnicDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsCreateVnicDetailsList(this, "create_vnic_details", false);
  public get createVnicDetails() {
    return this._createVnicDetails;
  }

  // dedicated_vm_host_id - computed: true, optional: false, required: false
  public get dedicatedVmHostId() {
    return this.getStringAttribute('dedicated_vm_host_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // extended_metadata - computed: true, optional: false, required: false
  private _extendedMetadata = new cdktf.StringMap(this, "extended_metadata");
  public get extendedMetadata() {
    return this._extendedMetadata;
  }

  // fault_domain - computed: true, optional: false, required: false
  public get faultDomain() {
    return this.getStringAttribute('fault_domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // instance_options - computed: true, optional: false, required: false
  private _instanceOptions = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsInstanceOptionsList(this, "instance_options", false);
  public get instanceOptions() {
    return this._instanceOptions;
  }

  // ipxe_script - computed: true, optional: false, required: false
  public get ipxeScript() {
    return this.getStringAttribute('ipxe_script');
  }

  // is_ai_enterprise_enabled - computed: true, optional: false, required: false
  public get isAiEnterpriseEnabled() {
    return this.getBooleanAttribute('is_ai_enterprise_enabled');
  }

  // is_pv_encryption_in_transit_enabled - computed: true, optional: false, required: false
  public get isPvEncryptionInTransitEnabled() {
    return this.getBooleanAttribute('is_pv_encryption_in_transit_enabled');
  }

  // launch_mode - computed: true, optional: false, required: false
  public get launchMode() {
    return this.getStringAttribute('launch_mode');
  }

  // launch_options - computed: true, optional: false, required: false
  private _launchOptions = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLaunchOptionsList(this, "launch_options", false);
  public get launchOptions() {
    return this._launchOptions;
  }

  // licensing_configs - computed: true, optional: false, required: false
  private _licensingConfigs = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsLicensingConfigsList(this, "licensing_configs", false);
  public get licensingConfigs() {
    return this._licensingConfigs;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // placement_constraint_details - computed: true, optional: false, required: false
  private _placementConstraintDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlacementConstraintDetailsList(this, "placement_constraint_details", false);
  public get placementConstraintDetails() {
    return this._placementConstraintDetails;
  }

  // platform_config - computed: true, optional: false, required: false
  private _platformConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPlatformConfigList(this, "platform_config", false);
  public get platformConfig() {
    return this._platformConfig;
  }

  // preemptible_instance_config - computed: true, optional: false, required: false
  private _preemptibleInstanceConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsPreemptibleInstanceConfigList(this, "preemptible_instance_config", false);
  public get preemptibleInstanceConfig() {
    return this._preemptibleInstanceConfig;
  }

  // preferred_maintenance_action - computed: true, optional: false, required: false
  public get preferredMaintenanceAction() {
    return this.getStringAttribute('preferred_maintenance_action');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // shape_config - computed: true, optional: false, required: false
  private _shapeConfig = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsShapeConfigList(this, "shape_config", false);
  public get shapeConfig() {
    return this._shapeConfig;
  }

  // source_details - computed: true, optional: false, required: false
  private _sourceDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsSourceDetailsList(this, "source_details", false);
  public get sourceDetails() {
    return this._sourceDetails;
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6address');
  }

  // ipv6subnet_cidr - computed: true, optional: false, required: false
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_ipv6ip - computed: true, optional: false, required: false
  public get assignIpv6Ip() {
    return this.getBooleanAttribute('assign_ipv6ip');
  }

  // assign_private_dns_record - computed: true, optional: false, required: false
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: true, optional: false, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // skip_source_dest_check - computed: true, optional: false, required: false
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }

  // subnet_cidr - computed: true, optional: false, required: false
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnics {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_vnic_details - computed: true, optional: false, required: false
  private _createVnicDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsCreateVnicDetailsList(this, "create_vnic_details", false);
  public get createVnicDetails() {
    return this._createVnicDetails;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // nic_index - computed: true, optional: false, required: false
  public get nicIndex() {
    return this.getNumberAttribute('nic_index');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptions {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volumes - computed: true, optional: false, required: false
  private _blockVolumes = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsBlockVolumesList(this, "block_volumes", false);
  public get blockVolumes() {
    return this._blockVolumes;
  }

  // launch_details - computed: true, optional: false, required: false
  private _launchDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsLaunchDetailsList(this, "launch_details", false);
  public get launchDetails() {
    return this._launchDetails;
  }

  // secondary_vnics - computed: true, optional: false, required: false
  private _secondaryVnics = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsSecondaryVnicsList(this, "secondary_vnics", false);
  public get secondaryVnics() {
    return this._secondaryVnics;
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv6address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6address');
  }

  // ipv6subnet_cidr - computed: true, optional: false, required: false
  public get ipv6SubnetCidr() {
    return this.getStringAttribute('ipv6subnet_cidr');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_ipv6ip - computed: true, optional: false, required: false
  public get assignIpv6Ip() {
    return this.getBooleanAttribute('assign_ipv6ip');
  }

  // assign_private_dns_record - computed: true, optional: false, required: false
  public get assignPrivateDnsRecord() {
    return this.getBooleanAttribute('assign_private_dns_record');
  }

  // assign_public_ip - computed: true, optional: false, required: false
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hostname_label - computed: true, optional: false, required: false
  public get hostnameLabel() {
    return this.getStringAttribute('hostname_label');
  }

  // ipv6address_ipv6subnet_cidr_pair_details - computed: true, optional: false, required: false
  private _ipv6AddressIpv6SubnetCidrPairDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsIpv6AddressIpv6SubnetCidrPairDetailsList(this, "ipv6address_ipv6subnet_cidr_pair_details", false);
  public get ipv6AddressIpv6SubnetCidrPairDetails() {
    return this._ipv6AddressIpv6SubnetCidrPairDetails;
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // security_attributes - computed: true, optional: false, required: false
  private _securityAttributes = new cdktf.StringMap(this, "security_attributes");
  public get securityAttributes() {
    return this._securityAttributes;
  }

  // skip_source_dest_check - computed: true, optional: false, required: false
  public get skipSourceDestCheck() {
    return this.getBooleanAttribute('skip_source_dest_check');
  }

  // subnet_cidr - computed: true, optional: false, required: false
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnics {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_vnic_details - computed: true, optional: false, required: false
  private _createVnicDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsCreateVnicDetailsList(this, "create_vnic_details", false);
  public get createVnicDetails() {
    return this._createVnicDetails;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // nic_index - computed: true, optional: false, required: false
  public get nicIndex() {
    return this.getNumberAttribute('nic_index');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetails {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_volumes - computed: true, optional: false, required: false
  private _blockVolumes = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsBlockVolumesList(this, "block_volumes", false);
  public get blockVolumes() {
    return this._blockVolumes;
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // launch_details - computed: true, optional: false, required: false
  private _launchDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsLaunchDetailsList(this, "launch_details", false);
  public get launchDetails() {
    return this._launchDetails;
  }

  // options - computed: true, optional: false, required: false
  private _options = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }

  // secondary_vnics - computed: true, optional: false, required: false
  private _secondaryVnics = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsSecondaryVnicsList(this, "secondary_vnics", false);
  public get secondaryVnics() {
    return this._secondaryVnics;
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsInstanceConfigurations {
}

export function dataOciCoreInstanceConfigurationsInstanceConfigurationsToTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCoreInstanceConfigurationsInstanceConfigurationsToHclTerraform(struct?: DataOciCoreInstanceConfigurationsInstanceConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsInstanceConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsInstanceConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // deferred_fields - computed: true, optional: false, required: false
  public get deferredFields() {
    return this.getListAttribute('deferred_fields');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_details - computed: true, optional: false, required: false
  private _instanceDetails = new DataOciCoreInstanceConfigurationsInstanceConfigurationsInstanceDetailsList(this, "instance_details", false);
  public get instanceDetails() {
    return this._instanceDetails;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}

export class DataOciCoreInstanceConfigurationsInstanceConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCoreInstanceConfigurationsInstanceConfigurationsOutputReference {
    return new DataOciCoreInstanceConfigurationsInstanceConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCoreInstanceConfigurationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_instance_configurations#name DataOciCoreInstanceConfigurations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_instance_configurations#regex DataOciCoreInstanceConfigurations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_instance_configurations#values DataOciCoreInstanceConfigurations#values}
  */
  readonly values: string[];
}

export function dataOciCoreInstanceConfigurationsFilterToTerraform(struct?: DataOciCoreInstanceConfigurationsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciCoreInstanceConfigurationsFilterToHclTerraform(struct?: DataOciCoreInstanceConfigurationsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciCoreInstanceConfigurationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCoreInstanceConfigurationsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCoreInstanceConfigurationsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciCoreInstanceConfigurationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCoreInstanceConfigurationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCoreInstanceConfigurationsFilterOutputReference {
    return new DataOciCoreInstanceConfigurationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_instance_configurations oci_core_instance_configurations}
*/
export class DataOciCoreInstanceConfigurations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_instance_configurations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreInstanceConfigurations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreInstanceConfigurations to import
  * @param importFromId The id of the existing DataOciCoreInstanceConfigurations that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_instance_configurations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreInstanceConfigurations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_instance_configurations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/core_instance_configurations oci_core_instance_configurations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreInstanceConfigurationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreInstanceConfigurationsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_instance_configurations',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_configurations - computed: true, optional: false, required: false
  private _instanceConfigurations = new DataOciCoreInstanceConfigurationsInstanceConfigurationsList(this, "instance_configurations", false);
  public get instanceConfigurations() {
    return this._instanceConfigurations;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCoreInstanceConfigurationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCoreInstanceConfigurationsFilter[] | cdktf.IResolvable) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      filter: cdktf.listMapper(dataOciCoreInstanceConfigurationsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCoreInstanceConfigurationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCoreInstanceConfigurationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
