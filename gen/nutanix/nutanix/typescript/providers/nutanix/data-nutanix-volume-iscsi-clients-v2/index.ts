// https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/volume_iscsi_clients_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNutanixVolumeIscsiClientsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/volume_iscsi_clients_v2#expand DataNutanixVolumeIscsiClientsV2#expand}
  */
  readonly expand?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/volume_iscsi_clients_v2#filter DataNutanixVolumeIscsiClientsV2#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/volume_iscsi_clients_v2#id DataNutanixVolumeIscsiClientsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A URL query parameter that specifies the total number of records returned in the result set. Must be a positive integer between 1 and 100. Any number out of this range will lead to a validation error. If the limit is not provided, a default value of 50 records will be returned in the result set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/volume_iscsi_clients_v2#limit DataNutanixVolumeIscsiClientsV2#limit}
  */
  readonly limit?: number;
  /**
  * A URL query parameter that allows clients to specify the sort criteria for the returned list of objects. Resources can be sorted in ascending order using asc or descending order using desc. If asc or desc are not specified, the resources will be sorted in ascending order by default. For example, '$orderby=templateName desc' would get all templates sorted by templateName in descending order. The orderby can be applied to the following fields: clusterReference, extId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/volume_iscsi_clients_v2#orderby DataNutanixVolumeIscsiClientsV2#orderby}
  */
  readonly orderby?: string;
  /**
  * A URL query parameter that specifies the page number of the result set. It must be a positive integer between 0 and the maximum number of pages that are available for that resource. Any number out of this range might lead to no results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/volume_iscsi_clients_v2#page DataNutanixVolumeIscsiClientsV2#page}
  */
  readonly page?: number;
  /**
  * A URL query parameter that allows clients to request a specific set of properties for each entity or complex type. Expression specified with the $select must conform to the OData V4.01 URL conventions. If a $select expression consists of a single select item that is an asterisk (i.e., *), then all properties on the matching resource will be returned. The select can be applied to the following fields: clusterReference, extId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/volume_iscsi_clients_v2#select DataNutanixVolumeIscsiClientsV2#select}
  */
  readonly select?: string;
}
export interface DataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargets {
}

export function dataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargetsToTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargetsToHclTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // iscsi_target_name - computed: true, optional: false, required: false
  public get iscsiTargetName() {
    return this.getStringAttribute('iscsi_target_name');
  }

  // num_virtual_targets - computed: true, optional: false, required: false
  public get numVirtualTargets() {
    return this.getNumberAttribute('num_virtual_targets');
  }
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargetsOutputReference {
    return new DataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdn {
}

export function dataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdnToTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdnToHclTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdnList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdnOutputReference {
    return new DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4 {
}

export function dataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4ToTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4ToHclTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4OutputReference {
    return new DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6 {
}

export function dataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6ToTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6ToHclTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6List extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6OutputReference {
    return new DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkId {
}

export function dataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdToTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdToHclTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  private _fqdn = new DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdFqdnList(this, "fqdn", false);
  public get fqdn() {
    return this._fqdn;
  }

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv4List(this, "ipv4", false);
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdOutputReference {
    return new DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVolumeIscsiClientsV2IscsiClientsLinks {
}

export function dataNutanixVolumeIscsiClientsV2IscsiClientsLinksToTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVolumeIscsiClientsV2IscsiClientsLinksToHclTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClientsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVolumeIscsiClientsV2IscsiClientsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVolumeIscsiClientsV2IscsiClientsLinks | undefined) {
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

export class DataNutanixVolumeIscsiClientsV2IscsiClientsLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVolumeIscsiClientsV2IscsiClientsLinksOutputReference {
    return new DataNutanixVolumeIscsiClientsV2IscsiClientsLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNutanixVolumeIscsiClientsV2IscsiClients {
}

export function dataNutanixVolumeIscsiClientsV2IscsiClientsToTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNutanixVolumeIscsiClientsV2IscsiClientsToHclTerraform(struct?: DataNutanixVolumeIscsiClientsV2IscsiClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNutanixVolumeIscsiClientsV2IscsiClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNutanixVolumeIscsiClientsV2IscsiClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attached_targets - computed: true, optional: false, required: false
  private _attachedTargets = new DataNutanixVolumeIscsiClientsV2IscsiClientsAttachedTargetsList(this, "attached_targets", false);
  public get attachedTargets() {
    return this._attachedTargets;
  }

  // attachment_site - computed: true, optional: false, required: false
  public get attachmentSite() {
    return this.getStringAttribute('attachment_site');
  }

  // cluster_reference - computed: true, optional: false, required: false
  public get clusterReference() {
    return this.getStringAttribute('cluster_reference');
  }

  // enabled_authentications - computed: true, optional: false, required: false
  public get enabledAuthentications() {
    return this.getStringAttribute('enabled_authentications');
  }

  // ext_id - computed: true, optional: false, required: false
  public get extId() {
    return this.getStringAttribute('ext_id');
  }

  // iscsi_initiator_name - computed: true, optional: false, required: false
  public get iscsiInitiatorName() {
    return this.getStringAttribute('iscsi_initiator_name');
  }

  // iscsi_initiator_network_id - computed: true, optional: false, required: false
  private _iscsiInitiatorNetworkId = new DataNutanixVolumeIscsiClientsV2IscsiClientsIscsiInitiatorNetworkIdList(this, "iscsi_initiator_network_id", false);
  public get iscsiInitiatorNetworkId() {
    return this._iscsiInitiatorNetworkId;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataNutanixVolumeIscsiClientsV2IscsiClientsLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataNutanixVolumeIscsiClientsV2IscsiClientsList extends cdktf.ComplexList {

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
  public get(index: number): DataNutanixVolumeIscsiClientsV2IscsiClientsOutputReference {
    return new DataNutanixVolumeIscsiClientsV2IscsiClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/volume_iscsi_clients_v2 nutanix_volume_iscsi_clients_v2}
*/
export class DataNutanixVolumeIscsiClientsV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_volume_iscsi_clients_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNutanixVolumeIscsiClientsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNutanixVolumeIscsiClientsV2 to import
  * @param importFromId The id of the existing DataNutanixVolumeIscsiClientsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/volume_iscsi_clients_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNutanixVolumeIscsiClientsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_volume_iscsi_clients_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/data-sources/volume_iscsi_clients_v2 nutanix_volume_iscsi_clients_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNutanixVolumeIscsiClientsV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNutanixVolumeIscsiClientsV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nutanix_volume_iscsi_clients_v2',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.4',
        providerVersionConstraint: '2.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expand = config.expand;
    this._filter = config.filter;
    this._id = config.id;
    this._limit = config.limit;
    this._orderby = config.orderby;
    this._page = config.page;
    this._select = config.select;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expand - computed: false, optional: true, required: false
  private _expand?: string; 
  public get expand() {
    return this.getStringAttribute('expand');
  }
  public set expand(value: string) {
    this._expand = value;
  }
  public resetExpand() {
    this._expand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandInput() {
    return this._expand;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // iscsi_clients - computed: true, optional: false, required: false
  private _iscsiClients = new DataNutanixVolumeIscsiClientsV2IscsiClientsList(this, "iscsi_clients", false);
  public get iscsiClients() {
    return this._iscsiClients;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // orderby - computed: false, optional: true, required: false
  private _orderby?: string; 
  public get orderby() {
    return this.getStringAttribute('orderby');
  }
  public set orderby(value: string) {
    this._orderby = value;
  }
  public resetOrderby() {
    this._orderby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderbyInput() {
    return this._orderby;
  }

  // page - computed: false, optional: true, required: false
  private _page?: number; 
  public get page() {
    return this.getNumberAttribute('page');
  }
  public set page(value: number) {
    this._page = value;
  }
  public resetPage() {
    this._page = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageInput() {
    return this._page;
  }

  // select - computed: false, optional: true, required: false
  private _select?: string; 
  public get select() {
    return this.getStringAttribute('select');
  }
  public set select(value: string) {
    this._select = value;
  }
  public resetSelect() {
    this._select = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectInput() {
    return this._select;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expand: cdktf.stringToTerraform(this._expand),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      orderby: cdktf.stringToTerraform(this._orderby),
      page: cdktf.numberToTerraform(this._page),
      select: cdktf.stringToTerraform(this._select),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expand: {
        value: cdktf.stringToHclTerraform(this._expand),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      orderby: {
        value: cdktf.stringToHclTerraform(this._orderby),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page: {
        value: cdktf.numberToHclTerraform(this._page),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      select: {
        value: cdktf.stringToHclTerraform(this._select),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
