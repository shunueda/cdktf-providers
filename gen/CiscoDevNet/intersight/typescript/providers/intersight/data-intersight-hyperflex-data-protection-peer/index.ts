// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightHyperflexDataProtectionPeerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#account_moid DataIntersightHyperflexDataProtectionPeer#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#create_time DataIntersightHyperflexDataProtectionPeer#create_time}
  */
  readonly createTime?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#domain_group_moid DataIntersightHyperflexDataProtectionPeer#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#id DataIntersightHyperflexDataProtectionPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#mod_time DataIntersightHyperflexDataProtectionPeer#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#moid DataIntersightHyperflexDataProtectionPeer#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#owners DataIntersightHyperflexDataProtectionPeer#owners}
  */
  readonly owners?: string[];
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#shared_scope DataIntersightHyperflexDataProtectionPeer#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#ancestors DataIntersightHyperflexDataProtectionPeer#ancestors}
  */
  readonly ancestors?: DataIntersightHyperflexDataProtectionPeerAncestors[] | cdktf.IResolvable;
  /**
  * er block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#er DataIntersightHyperflexDataProtectionPeer#er}
  */
  readonly er?: DataIntersightHyperflexDataProtectionPeerEr;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#parent DataIntersightHyperflexDataProtectionPeer#parent}
  */
  readonly parent?: DataIntersightHyperflexDataProtectionPeerParent;
  /**
  * peer_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#peer_info DataIntersightHyperflexDataProtectionPeer#peer_info}
  */
  readonly peerInfo?: DataIntersightHyperflexDataProtectionPeerPeerInfo;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#permission_resources DataIntersightHyperflexDataProtectionPeer#permission_resources}
  */
  readonly permissionResources?: DataIntersightHyperflexDataProtectionPeerPermissionResources[] | cdktf.IResolvable;
  /**
  * src_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#src_cluster DataIntersightHyperflexDataProtectionPeer#src_cluster}
  */
  readonly srcCluster?: DataIntersightHyperflexDataProtectionPeerSrcCluster;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#tags DataIntersightHyperflexDataProtectionPeer#tags}
  */
  readonly tags?: DataIntersightHyperflexDataProtectionPeerTags[] | cdktf.IResolvable;
  /**
  * tgt_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#tgt_cluster DataIntersightHyperflexDataProtectionPeer#tgt_cluster}
  */
  readonly tgtCluster?: DataIntersightHyperflexDataProtectionPeerTgtCluster;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#version_context DataIntersightHyperflexDataProtectionPeer#version_context}
  */
  readonly versionContext?: DataIntersightHyperflexDataProtectionPeerVersionContext;
}
export interface DataIntersightHyperflexDataProtectionPeerResultsAncestors {
}

export function dataIntersightHyperflexDataProtectionPeerResultsAncestorsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsAncestorsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsAncestors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsAncestorsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsEr {
}

export function dataIntersightHyperflexDataProtectionPeerResultsErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsErOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsErList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsErOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsErOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsParent {
}

export function dataIntersightHyperflexDataProtectionPeerResultsParentToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsParentToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsParentOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterEr {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterErOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterErList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterErOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterErOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreEr {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreErOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreErList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreErOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreErOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAds {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cluster_er - computed: true, optional: false, required: false
  private _clusterEr = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsClusterErList(this, "cluster_er", false);
  public get clusterEr() {
    return this._clusterEr;
  }

  // datastore_er - computed: true, optional: false, required: false
  private _datastoreEr = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsDatastoreErList(this, "datastore_er", false);
  public get datastoreEr() {
    return this._datastoreEr;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterEr {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterErOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterErList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterErOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterErOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreEr {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreErOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreErList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreErOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreErOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBds {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cluster_er - computed: true, optional: false, required: false
  private _clusterEr = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsClusterErList(this, "cluster_er", false);
  public get clusterEr() {
    return this._clusterEr;
  }

  // datastore_er - computed: true, optional: false, required: false
  private _datastoreEr = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsDatastoreErList(this, "datastore_er", false);
  public get datastoreEr() {
    return this._datastoreEr;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterEr {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterErOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterErList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterErOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterErOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreEr {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreErOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreErList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreErOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreErOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourceds {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourceds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourceds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourceds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourceds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // cluster_er - computed: true, optional: false, required: false
  private _clusterEr = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsClusterErList(this, "cluster_er", false);
  public get clusterEr() {
    return this._clusterEr;
  }

  // datastore_er - computed: true, optional: false, required: false
  private _datastoreEr = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsDatastoreErList(this, "datastore_er", false);
  public get datastoreEr() {
    return this._datastoreEr;
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastores {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastores): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastores | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastores | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ads - computed: true, optional: false, required: false
  private _ads = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresAdsList(this, "ads", false);
  public get ads() {
    return this._ads;
  }

  // backup_only - computed: true, optional: false, required: false
  public get backupOnly() {
    return this.getBooleanAttribute('backup_only');
  }

  // bds - computed: true, optional: false, required: false
  private _bds = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresBdsList(this, "bds", false);
  public get bds() {
    return this._bds;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // quiesce - computed: true, optional: false, required: false
  public get quiesce() {
    return this.getBooleanAttribute('quiesce');
  }

  // replication_interval_in_minutes - computed: true, optional: false, required: false
  public get replicationIntervalInMinutes() {
    return this.getNumberAttribute('replication_interval_in_minutes');
  }

  // sourceds - computed: true, optional: false, required: false
  private _sourceds = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresSourcedsList(this, "sourceds", false);
  public get sourceds() {
    return this._sourceds;
  }

  // storage_only - computed: true, optional: false, required: false
  public get storageOnly() {
    return this.getBooleanAttribute('storage_only');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoEr {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoErOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confignum - computed: true, optional: false, required: false
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idtype - computed: true, optional: false, required: false
  public get idtype() {
    return this.getStringAttribute('idtype');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoErList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoErOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoErOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfoPorts {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoPortsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoPortsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfoPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // i16 - computed: true, optional: false, required: false
  public get i16() {
    return this.getNumberAttribute('i16');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // string - computed: true, optional: false, required: false
  public get string() {
    return this.getStringAttribute('string');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoPortsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPeerInfo {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPeerInfoToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPeerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPeerInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPeerInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // datastores - computed: true, optional: false, required: false
  private _datastores = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoDatastoresList(this, "datastores", false);
  public get datastores() {
    return this._datastores;
  }

  // dcip - computed: true, optional: false, required: false
  public get dcip() {
    return this.getStringAttribute('dcip');
  }

  // er - computed: true, optional: false, required: false
  private _er = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoErList(this, "er", false);
  public get er() {
    return this._er;
  }

  // mcip - computed: true, optional: false, required: false
  public get mcip() {
    return this.getStringAttribute('mcip');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ports - computed: true, optional: false, required: false
  private _ports = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }

  // repl_cip - computed: true, optional: false, required: false
  public get replCip() {
    return this.getStringAttribute('repl_cip');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_details - computed: true, optional: false, required: false
  public get statusDetails() {
    return this.getStringAttribute('status_details');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPeerInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPeerInfoOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsPermissionResources {
}

export function dataIntersightHyperflexDataProtectionPeerResultsPermissionResourcesToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsPermissionResourcesToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsPermissionResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsPermissionResourcesOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsSrcCluster {
}

export function dataIntersightHyperflexDataProtectionPeerResultsSrcClusterToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsSrcCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsSrcClusterToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsSrcCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsSrcClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsSrcCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsSrcCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsSrcClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsSrcClusterOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsSrcClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitions {
}

export function dataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsTagsDefinition {
}

export function dataIntersightHyperflexDataProtectionPeerResultsTagsDefinitionToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsTagsDefinitionToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsTagsDefinitionOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsTags {
}

export function dataIntersightHyperflexDataProtectionPeerResultsTagsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsTagsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestor_definitions - computed: true, optional: false, required: false
  private _ancestorDefinitions = new DataIntersightHyperflexDataProtectionPeerResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightHyperflexDataProtectionPeerResultsTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // propagated - computed: true, optional: false, required: false
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsTagsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsTgtCluster {
}

export function dataIntersightHyperflexDataProtectionPeerResultsTgtClusterToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsTgtCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsTgtClusterToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsTgtCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsTgtClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsTgtCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsTgtCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsTgtClusterList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsTgtClusterOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsTgtClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMos {
}

export function dataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMo {
}

export function dataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMoToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMoOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResultsVersionContext {
}

export function dataIntersightHyperflexDataProtectionPeerResultsVersionContextToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsVersionContextToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResultsVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // interested_mos - computed: true, optional: false, required: false
  private _interestedMos = new DataIntersightHyperflexDataProtectionPeerResultsVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }

  // marked_for_deletion - computed: true, optional: false, required: false
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }

  // nr_version - computed: true, optional: false, required: false
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // ref_mo - computed: true, optional: false, required: false
  private _refMo = new DataIntersightHyperflexDataProtectionPeerResultsVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // version_type - computed: true, optional: false, required: false
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsVersionContextOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerResults {
}

export function dataIntersightHyperflexDataProtectionPeerResultsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightHyperflexDataProtectionPeerResultsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightHyperflexDataProtectionPeerResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_moid - computed: true, optional: false, required: false
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }

  // additional_properties - computed: true, optional: false, required: false
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }

  // ancestors - computed: true, optional: false, required: false
  private _ancestors = new DataIntersightHyperflexDataProtectionPeerResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // er - computed: true, optional: false, required: false
  private _er = new DataIntersightHyperflexDataProtectionPeerResultsErList(this, "er", false);
  public get er() {
    return this._er;
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightHyperflexDataProtectionPeerResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // peer_info - computed: true, optional: false, required: false
  private _peerInfo = new DataIntersightHyperflexDataProtectionPeerResultsPeerInfoList(this, "peer_info", false);
  public get peerInfo() {
    return this._peerInfo;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightHyperflexDataProtectionPeerResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // src_cluster - computed: true, optional: false, required: false
  private _srcCluster = new DataIntersightHyperflexDataProtectionPeerResultsSrcClusterList(this, "src_cluster", false);
  public get srcCluster() {
    return this._srcCluster;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightHyperflexDataProtectionPeerResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // tgt_cluster - computed: true, optional: false, required: false
  private _tgtCluster = new DataIntersightHyperflexDataProtectionPeerResultsTgtClusterList(this, "tgt_cluster", false);
  public get tgtCluster() {
    return this._tgtCluster;
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightHyperflexDataProtectionPeerResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }
}

export class DataIntersightHyperflexDataProtectionPeerResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerResultsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#moid DataIntersightHyperflexDataProtectionPeer#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#selector DataIntersightHyperflexDataProtectionPeer#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexDataProtectionPeerAncestorsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexDataProtectionPeerAncestorsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerAncestors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerAncestors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerAncestors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexDataProtectionPeerAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexDataProtectionPeerAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerAncestorsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerEr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#confignum DataIntersightHyperflexDataProtectionPeer#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#id DataIntersightHyperflexDataProtectionPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#idtype DataIntersightHyperflexDataProtectionPeer#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#name DataIntersightHyperflexDataProtectionPeer#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#type DataIntersightHyperflexDataProtectionPeer#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexDataProtectionPeerErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerErOutputReference | DataIntersightHyperflexDataProtectionPeerEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexDataProtectionPeerErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerErOutputReference | DataIntersightHyperflexDataProtectionPeerEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
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

export class DataIntersightHyperflexDataProtectionPeerErOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // type - computed: false, optional: true, required: false
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
}
export interface DataIntersightHyperflexDataProtectionPeerParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#moid DataIntersightHyperflexDataProtectionPeer#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#selector DataIntersightHyperflexDataProtectionPeer#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexDataProtectionPeerParentToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerParentOutputReference | DataIntersightHyperflexDataProtectionPeerParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexDataProtectionPeerParentToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerParentOutputReference | DataIntersightHyperflexDataProtectionPeerParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerParent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterEr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#confignum DataIntersightHyperflexDataProtectionPeer#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#id DataIntersightHyperflexDataProtectionPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#idtype DataIntersightHyperflexDataProtectionPeer#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#name DataIntersightHyperflexDataProtectionPeer#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#type DataIntersightHyperflexDataProtectionPeer#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
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

export class DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterErOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // type - computed: false, optional: true, required: false
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
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreEr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#confignum DataIntersightHyperflexDataProtectionPeer#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#id DataIntersightHyperflexDataProtectionPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#idtype DataIntersightHyperflexDataProtectionPeer#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#name DataIntersightHyperflexDataProtectionPeer#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#type DataIntersightHyperflexDataProtectionPeer#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
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

export class DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreErOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // type - computed: false, optional: true, required: false
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
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * cluster_er block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#cluster_er DataIntersightHyperflexDataProtectionPeer#cluster_er}
  */
  readonly clusterEr?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterEr;
  /**
  * datastore_er block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#datastore_er DataIntersightHyperflexDataProtectionPeer#datastore_er}
  */
  readonly datastoreEr?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreEr;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    cluster_er: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterErToTerraform(struct!.clusterEr),
    datastore_er: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreErToTerraform(struct!.datastoreEr),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_er: {
      value: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterErToHclTerraform(struct!.clusterEr),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterErList",
    },
    datastore_er: {
      value: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreErToHclTerraform(struct!.datastoreEr),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreErList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._clusterEr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterEr = this._clusterEr?.internalValue;
    }
    if (this._datastoreEr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreEr = this._datastoreEr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._clusterEr.internalValue = undefined;
      this._datastoreEr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._clusterEr.internalValue = value.clusterEr;
      this._datastoreEr.internalValue = value.datastoreEr;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // cluster_er - computed: false, optional: true, required: false
  private _clusterEr = new DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterErOutputReference(this, "cluster_er");
  public get clusterEr() {
    return this._clusterEr;
  }
  public putClusterEr(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsClusterEr) {
    this._clusterEr.internalValue = value;
  }
  public resetClusterEr() {
    this._clusterEr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterErInput() {
    return this._clusterEr.internalValue;
  }

  // datastore_er - computed: false, optional: true, required: false
  private _datastoreEr = new DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreErOutputReference(this, "datastore_er");
  public get datastoreEr() {
    return this._datastoreEr;
  }
  public putDatastoreEr(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsDatastoreEr) {
    this._datastoreEr.internalValue = value;
  }
  public resetDatastoreEr() {
    this._datastoreEr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreErInput() {
    return this._datastoreEr.internalValue;
  }
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterEr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#confignum DataIntersightHyperflexDataProtectionPeer#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#id DataIntersightHyperflexDataProtectionPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#idtype DataIntersightHyperflexDataProtectionPeer#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#name DataIntersightHyperflexDataProtectionPeer#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#type DataIntersightHyperflexDataProtectionPeer#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
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

export class DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterErOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // type - computed: false, optional: true, required: false
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
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreEr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#confignum DataIntersightHyperflexDataProtectionPeer#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#id DataIntersightHyperflexDataProtectionPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#idtype DataIntersightHyperflexDataProtectionPeer#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#name DataIntersightHyperflexDataProtectionPeer#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#type DataIntersightHyperflexDataProtectionPeer#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
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

export class DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreErOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // type - computed: false, optional: true, required: false
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
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * cluster_er block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#cluster_er DataIntersightHyperflexDataProtectionPeer#cluster_er}
  */
  readonly clusterEr?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterEr;
  /**
  * datastore_er block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#datastore_er DataIntersightHyperflexDataProtectionPeer#datastore_er}
  */
  readonly datastoreEr?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreEr;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    cluster_er: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterErToTerraform(struct!.clusterEr),
    datastore_er: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreErToTerraform(struct!.datastoreEr),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_er: {
      value: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterErToHclTerraform(struct!.clusterEr),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterErList",
    },
    datastore_er: {
      value: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreErToHclTerraform(struct!.datastoreEr),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreErList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._clusterEr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterEr = this._clusterEr?.internalValue;
    }
    if (this._datastoreEr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreEr = this._datastoreEr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._clusterEr.internalValue = undefined;
      this._datastoreEr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._clusterEr.internalValue = value.clusterEr;
      this._datastoreEr.internalValue = value.datastoreEr;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // cluster_er - computed: false, optional: true, required: false
  private _clusterEr = new DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterErOutputReference(this, "cluster_er");
  public get clusterEr() {
    return this._clusterEr;
  }
  public putClusterEr(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsClusterEr) {
    this._clusterEr.internalValue = value;
  }
  public resetClusterEr() {
    this._clusterEr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterErInput() {
    return this._clusterEr.internalValue;
  }

  // datastore_er - computed: false, optional: true, required: false
  private _datastoreEr = new DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreErOutputReference(this, "datastore_er");
  public get datastoreEr() {
    return this._datastoreEr;
  }
  public putDatastoreEr(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsDatastoreEr) {
    this._datastoreEr.internalValue = value;
  }
  public resetDatastoreEr() {
    this._datastoreEr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreErInput() {
    return this._datastoreEr.internalValue;
  }
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterEr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#confignum DataIntersightHyperflexDataProtectionPeer#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#id DataIntersightHyperflexDataProtectionPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#idtype DataIntersightHyperflexDataProtectionPeer#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#name DataIntersightHyperflexDataProtectionPeer#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#type DataIntersightHyperflexDataProtectionPeer#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
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

export class DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterErOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // type - computed: false, optional: true, required: false
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
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreEr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#confignum DataIntersightHyperflexDataProtectionPeer#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#id DataIntersightHyperflexDataProtectionPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#idtype DataIntersightHyperflexDataProtectionPeer#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#name DataIntersightHyperflexDataProtectionPeer#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#type DataIntersightHyperflexDataProtectionPeer#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
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

export class DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreErOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // type - computed: false, optional: true, required: false
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
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourceds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * cluster_er block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#cluster_er DataIntersightHyperflexDataProtectionPeer#cluster_er}
  */
  readonly clusterEr?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterEr;
  /**
  * datastore_er block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#datastore_er DataIntersightHyperflexDataProtectionPeer#datastore_er}
  */
  readonly datastoreEr?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreEr;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourceds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    cluster_er: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterErToTerraform(struct!.clusterEr),
    datastore_er: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreErToTerraform(struct!.datastoreEr),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourceds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_er: {
      value: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterErToHclTerraform(struct!.clusterEr),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterErList",
    },
    datastore_er: {
      value: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreErToHclTerraform(struct!.datastoreEr),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreErList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourceds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._clusterEr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterEr = this._clusterEr?.internalValue;
    }
    if (this._datastoreEr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreEr = this._datastoreEr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourceds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._clusterEr.internalValue = undefined;
      this._datastoreEr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._clusterEr.internalValue = value.clusterEr;
      this._datastoreEr.internalValue = value.datastoreEr;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // cluster_er - computed: false, optional: true, required: false
  private _clusterEr = new DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterErOutputReference(this, "cluster_er");
  public get clusterEr() {
    return this._clusterEr;
  }
  public putClusterEr(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsClusterEr) {
    this._clusterEr.internalValue = value;
  }
  public resetClusterEr() {
    this._clusterEr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterErInput() {
    return this._clusterEr.internalValue;
  }

  // datastore_er - computed: false, optional: true, required: false
  private _datastoreEr = new DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreErOutputReference(this, "datastore_er");
  public get datastoreEr() {
    return this._datastoreEr;
  }
  public putDatastoreEr(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsDatastoreEr) {
    this._datastoreEr.internalValue = value;
  }
  public resetDatastoreEr() {
    this._datastoreEr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreErInput() {
    return this._datastoreEr.internalValue;
  }
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoDatastores {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Boolean representing if this is a backup only pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#backup_only DataIntersightHyperflexDataProtectionPeer#backup_only}
  */
  readonly backupOnly?: boolean | cdktf.IResolvable;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * Boolean representing if this datastore pairing has quiesce snapshots enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#quiesce DataIntersightHyperflexDataProtectionPeer#quiesce}
  */
  readonly quiesce?: boolean | cdktf.IResolvable;
  /**
  * The replication interval for this pair in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#replication_interval_in_minutes DataIntersightHyperflexDataProtectionPeer#replication_interval_in_minutes}
  */
  readonly replicationIntervalInMinutes?: number;
  /**
  * HyperFlex datastore pair is used for storage only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#storage_only DataIntersightHyperflexDataProtectionPeer#storage_only}
  */
  readonly storageOnly?: boolean | cdktf.IResolvable;
  /**
  * ads block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#ads DataIntersightHyperflexDataProtectionPeer#ads}
  */
  readonly ads?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAds;
  /**
  * bds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#bds DataIntersightHyperflexDataProtectionPeer#bds}
  */
  readonly bds?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBds;
  /**
  * sourceds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#sourceds DataIntersightHyperflexDataProtectionPeer#sourceds}
  */
  readonly sourceds?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourceds;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    backup_only: cdktf.booleanToTerraform(struct!.backupOnly),
    class_id: cdktf.stringToTerraform(struct!.classId),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    quiesce: cdktf.booleanToTerraform(struct!.quiesce),
    replication_interval_in_minutes: cdktf.numberToTerraform(struct!.replicationIntervalInMinutes),
    storage_only: cdktf.booleanToTerraform(struct!.storageOnly),
    ads: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsToTerraform(struct!.ads),
    bds: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsToTerraform(struct!.bds),
    sourceds: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsToTerraform(struct!.sourceds),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastores | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_only: {
      value: cdktf.booleanToHclTerraform(struct!.backupOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quiesce: {
      value: cdktf.booleanToHclTerraform(struct!.quiesce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replication_interval_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.replicationIntervalInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_only: {
      value: cdktf.booleanToHclTerraform(struct!.storageOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ads: {
      value: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsToHclTerraform(struct!.ads),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsList",
    },
    bds: {
      value: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsToHclTerraform(struct!.bds),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsList",
    },
    sourceds: {
      value: dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsToHclTerraform(struct!.sourceds),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoDatastores | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._backupOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupOnly = this._backupOnly;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._quiesce !== undefined) {
      hasAnyValues = true;
      internalValueResult.quiesce = this._quiesce;
    }
    if (this._replicationIntervalInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationIntervalInMinutes = this._replicationIntervalInMinutes;
    }
    if (this._storageOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageOnly = this._storageOnly;
    }
    if (this._ads?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ads = this._ads?.internalValue;
    }
    if (this._bds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bds = this._bds?.internalValue;
    }
    if (this._sourceds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceds = this._sourceds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastores | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._backupOnly = undefined;
      this._classId = undefined;
      this._objectType = undefined;
      this._quiesce = undefined;
      this._replicationIntervalInMinutes = undefined;
      this._storageOnly = undefined;
      this._ads.internalValue = undefined;
      this._bds.internalValue = undefined;
      this._sourceds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._backupOnly = value.backupOnly;
      this._classId = value.classId;
      this._objectType = value.objectType;
      this._quiesce = value.quiesce;
      this._replicationIntervalInMinutes = value.replicationIntervalInMinutes;
      this._storageOnly = value.storageOnly;
      this._ads.internalValue = value.ads;
      this._bds.internalValue = value.bds;
      this._sourceds.internalValue = value.sourceds;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // backup_only - computed: false, optional: true, required: false
  private _backupOnly?: boolean | cdktf.IResolvable; 
  public get backupOnly() {
    return this.getBooleanAttribute('backup_only');
  }
  public set backupOnly(value: boolean | cdktf.IResolvable) {
    this._backupOnly = value;
  }
  public resetBackupOnly() {
    this._backupOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOnlyInput() {
    return this._backupOnly;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // quiesce - computed: false, optional: true, required: false
  private _quiesce?: boolean | cdktf.IResolvable; 
  public get quiesce() {
    return this.getBooleanAttribute('quiesce');
  }
  public set quiesce(value: boolean | cdktf.IResolvable) {
    this._quiesce = value;
  }
  public resetQuiesce() {
    this._quiesce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quiesceInput() {
    return this._quiesce;
  }

  // replication_interval_in_minutes - computed: false, optional: true, required: false
  private _replicationIntervalInMinutes?: number; 
  public get replicationIntervalInMinutes() {
    return this.getNumberAttribute('replication_interval_in_minutes');
  }
  public set replicationIntervalInMinutes(value: number) {
    this._replicationIntervalInMinutes = value;
  }
  public resetReplicationIntervalInMinutes() {
    this._replicationIntervalInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationIntervalInMinutesInput() {
    return this._replicationIntervalInMinutes;
  }

  // storage_only - computed: false, optional: true, required: false
  private _storageOnly?: boolean | cdktf.IResolvable; 
  public get storageOnly() {
    return this.getBooleanAttribute('storage_only');
  }
  public set storageOnly(value: boolean | cdktf.IResolvable) {
    this._storageOnly = value;
  }
  public resetStorageOnly() {
    this._storageOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageOnlyInput() {
    return this._storageOnly;
  }

  // ads - computed: false, optional: true, required: false
  private _ads = new DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAdsOutputReference(this, "ads");
  public get ads() {
    return this._ads;
  }
  public putAds(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresAds) {
    this._ads.internalValue = value;
  }
  public resetAds() {
    this._ads.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adsInput() {
    return this._ads.internalValue;
  }

  // bds - computed: false, optional: true, required: false
  private _bds = new DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBdsOutputReference(this, "bds");
  public get bds() {
    return this._bds;
  }
  public putBds(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresBds) {
    this._bds.internalValue = value;
  }
  public resetBds() {
    this._bds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bdsInput() {
    return this._bds.internalValue;
  }

  // sourceds - computed: false, optional: true, required: false
  private _sourceds = new DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourcedsOutputReference(this, "sourceds");
  public get sourceds() {
    return this._sourceds;
  }
  public putSourceds(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresSourceds) {
    this._sourceds.internalValue = value;
  }
  public resetSourceds() {
    this._sourceds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcedsInput() {
    return this._sourceds.internalValue;
  }
}

export class DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexDataProtectionPeerPeerInfoDatastores[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoEr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * Configuration number for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#confignum DataIntersightHyperflexDataProtectionPeer#confignum}
  */
  readonly confignum?: number;
  /**
  * Uuid of the entity for this reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#id DataIntersightHyperflexDataProtectionPeer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of entity id for this reference.
  * * `VCMOID` - The entity reference ID type is VC MOID.
  * * `VMBIOSUUID` - The entity reference ID type is VM Bios UUID.
  * * `VMDSPATH` - The entity reference ID type is VM Datastore Path.
  * * `VMINSTANCEUUID` - The entity reference ID type is VM Instance UUID.
  * * `VMNAME` - The entity reference ID type is VM Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#idtype DataIntersightHyperflexDataProtectionPeer#idtype}
  */
  readonly idtype?: string;
  /**
  * Name of the entity for this entity reference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#name DataIntersightHyperflexDataProtectionPeer#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * Type of the entity for this entity reference.
  * * `DISK` - This entity type is a disk.
  * * `PNODE` - This entity type is a P node.
  * * `NODE` - This entity type is a node.
  * * `CLUSTER` - This entity type is a cluster.
  * * `DATASTORE` - This entity is a datastore.
  * * `VIRTNODE` - This entity is a HyperFlex virtual node.
  * * `VIRTCLUSTER` - This entity type is a virtual cluster.
  * * `VIRTDATASTORE` - This entity type is a virtual data store.
  * * `VIRTMACHINE` - This entity type is a virtual machine.
  * * `PDISK` - This entity type is a P disk.
  * * `PDATASTORE` - This entity type is a P Datastore.
  * * `VIRTMACHINESNAPSHOT` - This entity is a virtual machine snapshot.
  * * `FOLDER` - This entity type is a folder.
  * * `RESOURCEPOOL` - This entity type is a resource pool.
  * * `FILE` - This entity type is a file.
  * * `VIRTDATACENTER` - This entity type is a virtual data center.
  * * `REPLICATION_APPLIANCE` - This entity type is a replication appliance.
  * * `REPLICATION_JOB` - This entity type is a replication job.
  * * `IP_POOL` - This entity type is an IP Pool.
  * * `REPLICATION_INFO` - This entity type is a replication information.
  * * `DP_VM_SNAPSHOT` - This entity type is a DP VM Snapshot.
  * * `DP_VMGROUP_SNAPSHOT` - This entity type is a DP VM Group Snapshot.
  * * `DP_VM_CONFIG` - This entity type is a DP VM Configuration.
  * * `DP_VM` - This entity type is a DP VM.
  * * `DP_VMGROUP` - This entity type is a DP VM Group.
  * * `DP_VM_SNAPSHOT_POINT` - This entity type is a DP VM Snapshot Point.
  * * `CLUSTER_PAIR` - This entity is a cluster pair.
  * * `HX_TASK` - This entity type is a HyperFlex task.
  * * `ZONE` - This entity type is a zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#type DataIntersightHyperflexDataProtectionPeer#type}
  */
  readonly type?: string;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoErToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    confignum: cdktf.numberToTerraform(struct!.confignum),
    id: cdktf.stringToTerraform(struct!.id),
    idtype: cdktf.stringToTerraform(struct!.idtype),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoErToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoErOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfoEr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confignum: {
      value: cdktf.numberToHclTerraform(struct!.confignum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idtype: {
      value: cdktf.stringToHclTerraform(struct!.idtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
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

export class DataIntersightHyperflexDataProtectionPeerPeerInfoErOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoEr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._confignum !== undefined) {
      hasAnyValues = true;
      internalValueResult.confignum = this._confignum;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._idtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.idtype = this._idtype;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoEr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._confignum = undefined;
      this._id = undefined;
      this._idtype = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._confignum = value.confignum;
      this._id = value.id;
      this._idtype = value.idtype;
      this._name = value.name;
      this._objectType = value.objectType;
      this._type = value.type;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // confignum - computed: false, optional: true, required: false
  private _confignum?: number; 
  public get confignum() {
    return this.getNumberAttribute('confignum');
  }
  public set confignum(value: number) {
    this._confignum = value;
  }
  public resetConfignum() {
    this._confignum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confignumInput() {
    return this._confignum;
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

  // idtype - computed: false, optional: true, required: false
  private _idtype?: string; 
  public get idtype() {
    return this.getStringAttribute('idtype');
  }
  public set idtype(value: string) {
    this._idtype = value;
  }
  public resetIdtype() {
    this._idtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idtypeInput() {
    return this._idtype;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // type - computed: false, optional: true, required: false
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
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfoPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * Integer describing port type to port number map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#i16 DataIntersightHyperflexDataProtectionPeer#i16}
  */
  readonly i16?: number;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * String describing port type to port number map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#string DataIntersightHyperflexDataProtectionPeer#string}
  */
  readonly string?: string;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoPortsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    i16: cdktf.numberToTerraform(struct!.i16),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoPortsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    i16: {
      value: cdktf.numberToHclTerraform(struct!.i16),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerPeerInfoPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfoPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._i16 !== undefined) {
      hasAnyValues = true;
      internalValueResult.i16 = this._i16;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfoPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._i16 = undefined;
      this._objectType = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._i16 = value.i16;
      this._objectType = value.objectType;
      this._string = value.string;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // i16 - computed: false, optional: true, required: false
  private _i16?: number; 
  public get i16() {
    return this.getNumberAttribute('i16');
  }
  public set i16(value: number) {
    this._i16 = value;
  }
  public resetI16() {
    this._i16 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get i16Input() {
    return this._i16;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class DataIntersightHyperflexDataProtectionPeerPeerInfoPortsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexDataProtectionPeerPeerInfoPorts[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerPeerInfoPortsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerPeerInfoPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerPeerInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * Data Cluster IP for the replication peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#dcip DataIntersightHyperflexDataProtectionPeer#dcip}
  */
  readonly dcip?: string;
  /**
  * Management Cluster IP for the replication peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#mcip DataIntersightHyperflexDataProtectionPeer#mcip}
  */
  readonly mcip?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * Replication Cluster IP for the replication peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#repl_cip DataIntersightHyperflexDataProtectionPeer#repl_cip}
  */
  readonly replCip?: string;
  /**
  * Peer Cluster Status for the replication peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#status DataIntersightHyperflexDataProtectionPeer#status}
  */
  readonly status?: string;
  /**
  * Peer Cluster Status Details for the replication peer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#status_details DataIntersightHyperflexDataProtectionPeer#status_details}
  */
  readonly statusDetails?: string;
  /**
  * datastores block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#datastores DataIntersightHyperflexDataProtectionPeer#datastores}
  */
  readonly datastores?: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastores[] | cdktf.IResolvable;
  /**
  * er block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#er DataIntersightHyperflexDataProtectionPeer#er}
  */
  readonly er?: DataIntersightHyperflexDataProtectionPeerPeerInfoEr;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#ports DataIntersightHyperflexDataProtectionPeer#ports}
  */
  readonly ports?: DataIntersightHyperflexDataProtectionPeerPeerInfoPorts[] | cdktf.IResolvable;
}

export function dataIntersightHyperflexDataProtectionPeerPeerInfoToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    dcip: cdktf.stringToTerraform(struct!.dcip),
    mcip: cdktf.stringToTerraform(struct!.mcip),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    repl_cip: cdktf.stringToTerraform(struct!.replCip),
    status: cdktf.stringToTerraform(struct!.status),
    status_details: cdktf.stringToTerraform(struct!.statusDetails),
    datastores: cdktf.listMapper(dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresToTerraform, true)(struct!.datastores),
    er: dataIntersightHyperflexDataProtectionPeerPeerInfoErToTerraform(struct!.er),
    ports: cdktf.listMapper(dataIntersightHyperflexDataProtectionPeerPeerInfoPortsToTerraform, true)(struct!.ports),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPeerInfoToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPeerInfoOutputReference | DataIntersightHyperflexDataProtectionPeerPeerInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dcip: {
      value: cdktf.stringToHclTerraform(struct!.dcip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mcip: {
      value: cdktf.stringToHclTerraform(struct!.mcip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repl_cip: {
      value: cdktf.stringToHclTerraform(struct!.replCip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_details: {
      value: cdktf.stringToHclTerraform(struct!.statusDetails),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastores: {
      value: cdktf.listMapperHcl(dataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresToHclTerraform, true)(struct!.datastores),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresList",
    },
    er: {
      value: dataIntersightHyperflexDataProtectionPeerPeerInfoErToHclTerraform(struct!.er),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoErList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataIntersightHyperflexDataProtectionPeerPeerInfoPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerPeerInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPeerInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._dcip !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcip = this._dcip;
    }
    if (this._mcip !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcip = this._mcip;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._replCip !== undefined) {
      hasAnyValues = true;
      internalValueResult.replCip = this._replCip;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._statusDetails !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusDetails = this._statusDetails;
    }
    if (this._datastores?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastores = this._datastores?.internalValue;
    }
    if (this._er?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.er = this._er?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPeerInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._dcip = undefined;
      this._mcip = undefined;
      this._objectType = undefined;
      this._replCip = undefined;
      this._status = undefined;
      this._statusDetails = undefined;
      this._datastores.internalValue = undefined;
      this._er.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._dcip = value.dcip;
      this._mcip = value.mcip;
      this._objectType = value.objectType;
      this._replCip = value.replCip;
      this._status = value.status;
      this._statusDetails = value.statusDetails;
      this._datastores.internalValue = value.datastores;
      this._er.internalValue = value.er;
      this._ports.internalValue = value.ports;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // dcip - computed: false, optional: true, required: false
  private _dcip?: string; 
  public get dcip() {
    return this.getStringAttribute('dcip');
  }
  public set dcip(value: string) {
    this._dcip = value;
  }
  public resetDcip() {
    this._dcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcipInput() {
    return this._dcip;
  }

  // mcip - computed: false, optional: true, required: false
  private _mcip?: string; 
  public get mcip() {
    return this.getStringAttribute('mcip');
  }
  public set mcip(value: string) {
    this._mcip = value;
  }
  public resetMcip() {
    this._mcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcipInput() {
    return this._mcip;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // repl_cip - computed: false, optional: true, required: false
  private _replCip?: string; 
  public get replCip() {
    return this.getStringAttribute('repl_cip');
  }
  public set replCip(value: string) {
    this._replCip = value;
  }
  public resetReplCip() {
    this._replCip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replCipInput() {
    return this._replCip;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // status_details - computed: false, optional: true, required: false
  private _statusDetails?: string; 
  public get statusDetails() {
    return this.getStringAttribute('status_details');
  }
  public set statusDetails(value: string) {
    this._statusDetails = value;
  }
  public resetStatusDetails() {
    this._statusDetails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusDetailsInput() {
    return this._statusDetails;
  }

  // datastores - computed: false, optional: true, required: false
  private _datastores = new DataIntersightHyperflexDataProtectionPeerPeerInfoDatastoresList(this, "datastores", false);
  public get datastores() {
    return this._datastores;
  }
  public putDatastores(value: DataIntersightHyperflexDataProtectionPeerPeerInfoDatastores[] | cdktf.IResolvable) {
    this._datastores.internalValue = value;
  }
  public resetDatastores() {
    this._datastores.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoresInput() {
    return this._datastores.internalValue;
  }

  // er - computed: false, optional: true, required: false
  private _er = new DataIntersightHyperflexDataProtectionPeerPeerInfoErOutputReference(this, "er");
  public get er() {
    return this._er;
  }
  public putEr(value: DataIntersightHyperflexDataProtectionPeerPeerInfoEr) {
    this._er.internalValue = value;
  }
  public resetEr() {
    this._er.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erInput() {
    return this._er.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataIntersightHyperflexDataProtectionPeerPeerInfoPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataIntersightHyperflexDataProtectionPeerPeerInfoPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}
export interface DataIntersightHyperflexDataProtectionPeerPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#moid DataIntersightHyperflexDataProtectionPeer#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#selector DataIntersightHyperflexDataProtectionPeer#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexDataProtectionPeerPermissionResourcesToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexDataProtectionPeerPermissionResourcesToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerPermissionResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerPermissionResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerPermissionResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexDataProtectionPeerPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexDataProtectionPeerPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerPermissionResourcesOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerSrcCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#moid DataIntersightHyperflexDataProtectionPeer#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#selector DataIntersightHyperflexDataProtectionPeer#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexDataProtectionPeerSrcClusterToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerSrcClusterOutputReference | DataIntersightHyperflexDataProtectionPeerSrcCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexDataProtectionPeerSrcClusterToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerSrcClusterOutputReference | DataIntersightHyperflexDataProtectionPeerSrcCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerSrcClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerSrcCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerSrcCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#moid DataIntersightHyperflexDataProtectionPeer#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#selector DataIntersightHyperflexDataProtectionPeer#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitionsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitionsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#moid DataIntersightHyperflexDataProtectionPeer#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#selector DataIntersightHyperflexDataProtectionPeer#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexDataProtectionPeerTagsDefinitionToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerTagsDefinitionOutputReference | DataIntersightHyperflexDataProtectionPeerTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexDataProtectionPeerTagsDefinitionToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerTagsDefinitionOutputReference | DataIntersightHyperflexDataProtectionPeerTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerTagsDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexDataProtectionPeerTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#key DataIntersightHyperflexDataProtectionPeer#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#propagated DataIntersightHyperflexDataProtectionPeer#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#type DataIntersightHyperflexDataProtectionPeer#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#value DataIntersightHyperflexDataProtectionPeer#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#ancestor_definitions DataIntersightHyperflexDataProtectionPeer#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#definition DataIntersightHyperflexDataProtectionPeer#definition}
  */
  readonly definition?: DataIntersightHyperflexDataProtectionPeerTagsDefinition;
}

export function dataIntersightHyperflexDataProtectionPeerTagsToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    ancestor_definitions: cdktf.listMapper(dataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightHyperflexDataProtectionPeerTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightHyperflexDataProtectionPeerTagsToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagated: {
      value: cdktf.booleanToHclTerraform(struct!.propagated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ancestor_definitions: {
      value: cdktf.listMapperHcl(dataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightHyperflexDataProtectionPeerTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._type = undefined;
      this._value = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._key = value.key;
      this._propagated = value.propagated;
      this._type = value.type;
      this._value = value.value;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // propagated - computed: false, optional: true, required: false
  private _propagated?: boolean | cdktf.IResolvable; 
  public get propagated() {
    return this.getBooleanAttribute('propagated');
  }
  public set propagated(value: boolean | cdktf.IResolvable) {
    this._propagated = value;
  }
  public resetPropagated() {
    this._propagated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagatedInput() {
    return this._propagated;
  }

  // type - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // ancestor_definitions - computed: false, optional: true, required: false
  private _ancestorDefinitions = new DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightHyperflexDataProtectionPeerTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: false, optional: true, required: false
  private _definition = new DataIntersightHyperflexDataProtectionPeerTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightHyperflexDataProtectionPeerTagsDefinition) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }
}

export class DataIntersightHyperflexDataProtectionPeerTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexDataProtectionPeerTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerTagsOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerTgtCluster {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#moid DataIntersightHyperflexDataProtectionPeer#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#selector DataIntersightHyperflexDataProtectionPeer#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexDataProtectionPeerTgtClusterToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerTgtClusterOutputReference | DataIntersightHyperflexDataProtectionPeerTgtCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexDataProtectionPeerTgtClusterToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerTgtClusterOutputReference | DataIntersightHyperflexDataProtectionPeerTgtCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerTgtClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerTgtCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerTgtCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#moid DataIntersightHyperflexDataProtectionPeer#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#selector DataIntersightHyperflexDataProtectionPeer#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexDataProtectionPeerVersionContextInterestedMosToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexDataProtectionPeerVersionContextInterestedMosToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}

export class DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMosOutputReference {
    return new DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightHyperflexDataProtectionPeerVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#moid DataIntersightHyperflexDataProtectionPeer#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * An OData $filter expression which describes the REST resource to be referenced. This field may
  * be set instead of 'moid' by clients.
  * 1. If 'moid' is set this field is ignored.
  * 1. If 'selector' is set and 'moid' is empty/absent from the request, Intersight determines the Moid of the
  * resource matching the filter expression and populates it in the MoRef that is part of the object
  * instance being inserted/updated to fulfill the REST request.
  * An error is returned if the filter matches zero or more than one REST resource.
  * An example filter string is: Serial eq '3AA8B7T11'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#selector DataIntersightHyperflexDataProtectionPeer#selector}
  */
  readonly selector?: string;
}

export function dataIntersightHyperflexDataProtectionPeerVersionContextRefMoToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerVersionContextRefMoOutputReference | DataIntersightHyperflexDataProtectionPeerVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    moid: cdktf.stringToTerraform(struct!.moid),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    selector: cdktf.stringToTerraform(struct!.selector),
  }
}


export function dataIntersightHyperflexDataProtectionPeerVersionContextRefMoToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerVersionContextRefMoOutputReference | DataIntersightHyperflexDataProtectionPeerVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moid: {
      value: cdktf.stringToHclTerraform(struct!.moid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._moid !== undefined) {
      hasAnyValues = true;
      internalValueResult.moid = this._moid;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerVersionContextRefMo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._moid = undefined;
      this._objectType = undefined;
      this._selector = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._moid = value.moid;
      this._objectType = value.objectType;
      this._selector = value.selector;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }
}
export interface DataIntersightHyperflexDataProtectionPeerVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#additional_properties DataIntersightHyperflexDataProtectionPeer#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#class_id DataIntersightHyperflexDataProtectionPeer#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#marked_for_deletion DataIntersightHyperflexDataProtectionPeer#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#nr_version DataIntersightHyperflexDataProtectionPeer#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#object_type DataIntersightHyperflexDataProtectionPeer#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#timestamp DataIntersightHyperflexDataProtectionPeer#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Specifies type of version. Currently the only supported value is "Configured"
  * that is used to keep track of snapshots of policies and profiles that are intended
  * to be configured to target endpoints.
  * * `Modified` - Version created every time an object is modified.
  * * `Configured` - Version created every time an object is configured to the service profile.
  * * `Deployed` - Version created for objects related to a service profile when it is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#version_type DataIntersightHyperflexDataProtectionPeer#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#interested_mos DataIntersightHyperflexDataProtectionPeer#interested_mos}
  */
  readonly interestedMos?: DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#ref_mo DataIntersightHyperflexDataProtectionPeer#ref_mo}
  */
  readonly refMo?: DataIntersightHyperflexDataProtectionPeerVersionContextRefMo;
}

export function dataIntersightHyperflexDataProtectionPeerVersionContextToTerraform(struct?: DataIntersightHyperflexDataProtectionPeerVersionContextOutputReference | DataIntersightHyperflexDataProtectionPeerVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
    interested_mos: cdktf.listMapper(dataIntersightHyperflexDataProtectionPeerVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightHyperflexDataProtectionPeerVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightHyperflexDataProtectionPeerVersionContextToHclTerraform(struct?: DataIntersightHyperflexDataProtectionPeerVersionContextOutputReference | DataIntersightHyperflexDataProtectionPeerVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_id: {
      value: cdktf.stringToHclTerraform(struct!.classId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    marked_for_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.markedForDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nr_version: {
      value: cdktf.stringToHclTerraform(struct!.nrVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_type: {
      value: cdktf.stringToHclTerraform(struct!.versionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interested_mos: {
      value: cdktf.listMapperHcl(dataIntersightHyperflexDataProtectionPeerVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightHyperflexDataProtectionPeerVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightHyperflexDataProtectionPeerVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightHyperflexDataProtectionPeerVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightHyperflexDataProtectionPeerVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._classId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classId = this._classId;
    }
    if (this._markedForDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.markedForDeletion = this._markedForDeletion;
    }
    if (this._nrVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.nrVersion = this._nrVersion;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
    }
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightHyperflexDataProtectionPeerVersionContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
      this._interestedMos.internalValue = undefined;
      this._refMo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
      this._interestedMos.internalValue = value.interestedMos;
      this._refMo.internalValue = value.refMo;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // marked_for_deletion - computed: false, optional: true, required: false
  private _markedForDeletion?: boolean | cdktf.IResolvable; 
  public get markedForDeletion() {
    return this.getBooleanAttribute('marked_for_deletion');
  }
  public set markedForDeletion(value: boolean | cdktf.IResolvable) {
    this._markedForDeletion = value;
  }
  public resetMarkedForDeletion() {
    this._markedForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markedForDeletionInput() {
    return this._markedForDeletion;
  }

  // nr_version - computed: false, optional: true, required: false
  private _nrVersion?: string; 
  public get nrVersion() {
    return this.getStringAttribute('nr_version');
  }
  public set nrVersion(value: string) {
    this._nrVersion = value;
  }
  public resetNrVersion() {
    this._nrVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nrVersionInput() {
    return this._nrVersion;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // version_type - computed: false, optional: true, required: false
  private _versionType?: string; 
  public get versionType() {
    return this.getStringAttribute('version_type');
  }
  public set versionType(value: string) {
    this._versionType = value;
  }
  public resetVersionType() {
    this._versionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionTypeInput() {
    return this._versionType;
  }

  // interested_mos - computed: false, optional: true, required: false
  private _interestedMos = new DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightHyperflexDataProtectionPeerVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // ref_mo - computed: false, optional: true, required: false
  private _refMo = new DataIntersightHyperflexDataProtectionPeerVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightHyperflexDataProtectionPeerVersionContextRefMo) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer intersight_hyperflex_data_protection_peer}
*/
export class DataIntersightHyperflexDataProtectionPeer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_hyperflex_data_protection_peer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightHyperflexDataProtectionPeer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightHyperflexDataProtectionPeer to import
  * @param importFromId The id of the existing DataIntersightHyperflexDataProtectionPeer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightHyperflexDataProtectionPeer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_hyperflex_data_protection_peer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/hyperflex_data_protection_peer intersight_hyperflex_data_protection_peer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightHyperflexDataProtectionPeerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightHyperflexDataProtectionPeerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_hyperflex_data_protection_peer',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72',
        providerVersionConstraint: '1.0.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountMoid = config.accountMoid;
    this._additionalProperties = config.additionalProperties;
    this._classId = config.classId;
    this._createTime = config.createTime;
    this._domainGroupMoid = config.domainGroupMoid;
    this._id = config.id;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._sharedScope = config.sharedScope;
    this._ancestors.internalValue = config.ancestors;
    this._er.internalValue = config.er;
    this._parent.internalValue = config.parent;
    this._peerInfo.internalValue = config.peerInfo;
    this._permissionResources.internalValue = config.permissionResources;
    this._srcCluster.internalValue = config.srcCluster;
    this._tags.internalValue = config.tags;
    this._tgtCluster.internalValue = config.tgtCluster;
    this._versionContext.internalValue = config.versionContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: false, optional: true, required: false
  private _accountMoid?: string; 
  public get accountMoid() {
    return this.getStringAttribute('account_moid');
  }
  public set accountMoid(value: string) {
    this._accountMoid = value;
  }
  public resetAccountMoid() {
    this._accountMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountMoidInput() {
    return this._accountMoid;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // class_id - computed: false, optional: true, required: false
  private _classId?: string; 
  public get classId() {
    return this.getStringAttribute('class_id');
  }
  public set classId(value: string) {
    this._classId = value;
  }
  public resetClassId() {
    this._classId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classIdInput() {
    return this._classId;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // domain_group_moid - computed: false, optional: true, required: false
  private _domainGroupMoid?: string; 
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }
  public set domainGroupMoid(value: string) {
    this._domainGroupMoid = value;
  }
  public resetDomainGroupMoid() {
    this._domainGroupMoid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainGroupMoidInput() {
    return this._domainGroupMoid;
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

  // mod_time - computed: false, optional: true, required: false
  private _modTime?: string; 
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }
  public set modTime(value: string) {
    this._modTime = value;
  }
  public resetModTime() {
    this._modTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modTimeInput() {
    return this._modTime;
  }

  // moid - computed: false, optional: true, required: false
  private _moid?: string; 
  public get moid() {
    return this.getStringAttribute('moid');
  }
  public set moid(value: string) {
    this._moid = value;
  }
  public resetMoid() {
    this._moid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moidInput() {
    return this._moid;
  }

  // object_type - computed: false, optional: true, required: false
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  public resetObjectType() {
    this._objectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // owners - computed: false, optional: true, required: false
  private _owners?: string[]; 
  public get owners() {
    return this.getListAttribute('owners');
  }
  public set owners(value: string[]) {
    this._owners = value;
  }
  public resetOwners() {
    this._owners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownersInput() {
    return this._owners;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightHyperflexDataProtectionPeerResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // shared_scope - computed: false, optional: true, required: false
  private _sharedScope?: string; 
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }
  public set sharedScope(value: string) {
    this._sharedScope = value;
  }
  public resetSharedScope() {
    this._sharedScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedScopeInput() {
    return this._sharedScope;
  }

  // ancestors - computed: false, optional: true, required: false
  private _ancestors = new DataIntersightHyperflexDataProtectionPeerAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightHyperflexDataProtectionPeerAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // er - computed: false, optional: true, required: false
  private _er = new DataIntersightHyperflexDataProtectionPeerErOutputReference(this, "er");
  public get er() {
    return this._er;
  }
  public putEr(value: DataIntersightHyperflexDataProtectionPeerEr) {
    this._er.internalValue = value;
  }
  public resetEr() {
    this._er.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erInput() {
    return this._er.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightHyperflexDataProtectionPeerParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightHyperflexDataProtectionPeerParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // peer_info - computed: false, optional: true, required: false
  private _peerInfo = new DataIntersightHyperflexDataProtectionPeerPeerInfoOutputReference(this, "peer_info");
  public get peerInfo() {
    return this._peerInfo;
  }
  public putPeerInfo(value: DataIntersightHyperflexDataProtectionPeerPeerInfo) {
    this._peerInfo.internalValue = value;
  }
  public resetPeerInfo() {
    this._peerInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInfoInput() {
    return this._peerInfo.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightHyperflexDataProtectionPeerPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightHyperflexDataProtectionPeerPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // src_cluster - computed: false, optional: true, required: false
  private _srcCluster = new DataIntersightHyperflexDataProtectionPeerSrcClusterOutputReference(this, "src_cluster");
  public get srcCluster() {
    return this._srcCluster;
  }
  public putSrcCluster(value: DataIntersightHyperflexDataProtectionPeerSrcCluster) {
    this._srcCluster.internalValue = value;
  }
  public resetSrcCluster() {
    this._srcCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcClusterInput() {
    return this._srcCluster.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightHyperflexDataProtectionPeerTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightHyperflexDataProtectionPeerTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tgt_cluster - computed: false, optional: true, required: false
  private _tgtCluster = new DataIntersightHyperflexDataProtectionPeerTgtClusterOutputReference(this, "tgt_cluster");
  public get tgtCluster() {
    return this._tgtCluster;
  }
  public putTgtCluster(value: DataIntersightHyperflexDataProtectionPeerTgtCluster) {
    this._tgtCluster.internalValue = value;
  }
  public resetTgtCluster() {
    this._tgtCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tgtClusterInput() {
    return this._tgtCluster.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightHyperflexDataProtectionPeerVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightHyperflexDataProtectionPeerVersionContext) {
    this._versionContext.internalValue = value;
  }
  public resetVersionContext() {
    this._versionContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionContextInput() {
    return this._versionContext.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_moid: cdktf.stringToTerraform(this._accountMoid),
      additional_properties: cdktf.stringToTerraform(this._additionalProperties),
      class_id: cdktf.stringToTerraform(this._classId),
      create_time: cdktf.stringToTerraform(this._createTime),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      id: cdktf.stringToTerraform(this._id),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      ancestors: cdktf.listMapper(dataIntersightHyperflexDataProtectionPeerAncestorsToTerraform, true)(this._ancestors.internalValue),
      er: dataIntersightHyperflexDataProtectionPeerErToTerraform(this._er.internalValue),
      parent: dataIntersightHyperflexDataProtectionPeerParentToTerraform(this._parent.internalValue),
      peer_info: dataIntersightHyperflexDataProtectionPeerPeerInfoToTerraform(this._peerInfo.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightHyperflexDataProtectionPeerPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      src_cluster: dataIntersightHyperflexDataProtectionPeerSrcClusterToTerraform(this._srcCluster.internalValue),
      tags: cdktf.listMapper(dataIntersightHyperflexDataProtectionPeerTagsToTerraform, true)(this._tags.internalValue),
      tgt_cluster: dataIntersightHyperflexDataProtectionPeerTgtClusterToTerraform(this._tgtCluster.internalValue),
      version_context: dataIntersightHyperflexDataProtectionPeerVersionContextToTerraform(this._versionContext.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_moid: {
        value: cdktf.stringToHclTerraform(this._accountMoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_properties: {
        value: cdktf.stringToHclTerraform(this._additionalProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_id: {
        value: cdktf.stringToHclTerraform(this._classId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_time: {
        value: cdktf.stringToHclTerraform(this._createTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_group_moid: {
        value: cdktf.stringToHclTerraform(this._domainGroupMoid),
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
      mod_time: {
        value: cdktf.stringToHclTerraform(this._modTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      moid: {
        value: cdktf.stringToHclTerraform(this._moid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_type: {
        value: cdktf.stringToHclTerraform(this._objectType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexDataProtectionPeerAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexDataProtectionPeerAncestorsList",
      },
      er: {
        value: dataIntersightHyperflexDataProtectionPeerErToHclTerraform(this._er.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexDataProtectionPeerErList",
      },
      parent: {
        value: dataIntersightHyperflexDataProtectionPeerParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexDataProtectionPeerParentList",
      },
      peer_info: {
        value: dataIntersightHyperflexDataProtectionPeerPeerInfoToHclTerraform(this._peerInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexDataProtectionPeerPeerInfoList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexDataProtectionPeerPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexDataProtectionPeerPermissionResourcesList",
      },
      src_cluster: {
        value: dataIntersightHyperflexDataProtectionPeerSrcClusterToHclTerraform(this._srcCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexDataProtectionPeerSrcClusterList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightHyperflexDataProtectionPeerTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexDataProtectionPeerTagsList",
      },
      tgt_cluster: {
        value: dataIntersightHyperflexDataProtectionPeerTgtClusterToHclTerraform(this._tgtCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexDataProtectionPeerTgtClusterList",
      },
      version_context: {
        value: dataIntersightHyperflexDataProtectionPeerVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightHyperflexDataProtectionPeerVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
