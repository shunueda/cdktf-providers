// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDnsZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#compartment_id DataOciDnsZones#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#dnssec_state DataOciDnsZones#dnssec_state}
  */
  readonly dnssecState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#id DataOciDnsZones#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#name DataOciDnsZones#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#name_contains DataOciDnsZones#name_contains}
  */
  readonly nameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#scope DataOciDnsZones#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#sort_by DataOciDnsZones#sort_by}
  */
  readonly sortBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#sort_order DataOciDnsZones#sort_order}
  */
  readonly sortOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#state DataOciDnsZones#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#time_created_greater_than_or_equal_to DataOciDnsZones#time_created_greater_than_or_equal_to}
  */
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#time_created_less_than DataOciDnsZones#time_created_less_than}
  */
  readonly timeCreatedLessThan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#tsig_key_id DataOciDnsZones#tsig_key_id}
  */
  readonly tsigKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#view_id DataOciDnsZones#view_id}
  */
  readonly viewId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#zone_type DataOciDnsZones#zone_type}
  */
  readonly zoneType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#filter DataOciDnsZones#filter}
  */
  readonly filter?: DataOciDnsZonesFilter[] | cdktf.IResolvable;
}
export interface DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsData {
}

export function dataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsDataToTerraform(struct?: DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsDataToHclTerraform(struct?: DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // digest_type - computed: true, optional: false, required: false
  public get digestType() {
    return this.getStringAttribute('digest_type');
  }

  // rdata - computed: true, optional: false, required: false
  public get rdata() {
    return this.getStringAttribute('rdata');
  }
}

export class DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsDataOutputReference {
    return new DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersions {
}

export function dataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsToTerraform(struct?: DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsToHclTerraform(struct?: DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // ds_data - computed: true, optional: false, required: false
  private _dsData = new DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsDsDataList(this, "ds_data", false);
  public get dsData() {
    return this._dsData;
  }

  // key_tag - computed: true, optional: false, required: false
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }

  // length_in_bytes - computed: true, optional: false, required: false
  public get lengthInBytes() {
    return this.getNumberAttribute('length_in_bytes');
  }

  // predecessor_dnssec_key_version_uuid - computed: true, optional: false, required: false
  public get predecessorDnssecKeyVersionUuid() {
    return this.getStringAttribute('predecessor_dnssec_key_version_uuid');
  }

  // successor_dnssec_key_version_uuid - computed: true, optional: false, required: false
  public get successorDnssecKeyVersionUuid() {
    return this.getStringAttribute('successor_dnssec_key_version_uuid');
  }

  // time_activated - computed: true, optional: false, required: false
  public get timeActivated() {
    return this.getStringAttribute('time_activated');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_expired - computed: true, optional: false, required: false
  public get timeExpired() {
    return this.getStringAttribute('time_expired');
  }

  // time_inactivated - computed: true, optional: false, required: false
  public get timeInactivated() {
    return this.getStringAttribute('time_inactivated');
  }

  // time_promoted - computed: true, optional: false, required: false
  public get timePromoted() {
    return this.getStringAttribute('time_promoted');
  }

  // time_published - computed: true, optional: false, required: false
  public get timePublished() {
    return this.getStringAttribute('time_published');
  }

  // time_unpublished - computed: true, optional: false, required: false
  public get timeUnpublished() {
    return this.getStringAttribute('time_unpublished');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsOutputReference {
    return new DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersions {
}

export function dataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersionsToTerraform(struct?: DataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersionsToHclTerraform(struct?: DataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key_tag - computed: true, optional: false, required: false
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }

  // length_in_bytes - computed: true, optional: false, required: false
  public get lengthInBytes() {
    return this.getNumberAttribute('length_in_bytes');
  }

  // predecessor_dnssec_key_version_uuid - computed: true, optional: false, required: false
  public get predecessorDnssecKeyVersionUuid() {
    return this.getStringAttribute('predecessor_dnssec_key_version_uuid');
  }

  // successor_dnssec_key_version_uuid - computed: true, optional: false, required: false
  public get successorDnssecKeyVersionUuid() {
    return this.getStringAttribute('successor_dnssec_key_version_uuid');
  }

  // time_activated - computed: true, optional: false, required: false
  public get timeActivated() {
    return this.getStringAttribute('time_activated');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_expired - computed: true, optional: false, required: false
  public get timeExpired() {
    return this.getStringAttribute('time_expired');
  }

  // time_inactivated - computed: true, optional: false, required: false
  public get timeInactivated() {
    return this.getStringAttribute('time_inactivated');
  }

  // time_promoted - computed: true, optional: false, required: false
  public get timePromoted() {
    return this.getStringAttribute('time_promoted');
  }

  // time_published - computed: true, optional: false, required: false
  public get timePublished() {
    return this.getStringAttribute('time_published');
  }

  // time_unpublished - computed: true, optional: false, required: false
  public get timeUnpublished() {
    return this.getStringAttribute('time_unpublished');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersionsOutputReference {
    return new DataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDnsZonesZonesDnssecConfig {
}

export function dataOciDnsZonesZonesDnssecConfigToTerraform(struct?: DataOciDnsZonesZonesDnssecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDnsZonesZonesDnssecConfigToHclTerraform(struct?: DataOciDnsZonesZonesDnssecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDnsZonesZonesDnssecConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDnsZonesZonesDnssecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDnsZonesZonesDnssecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ksk_dnssec_key_versions - computed: true, optional: false, required: false
  private _kskDnssecKeyVersions = new DataOciDnsZonesZonesDnssecConfigKskDnssecKeyVersionsList(this, "ksk_dnssec_key_versions", false);
  public get kskDnssecKeyVersions() {
    return this._kskDnssecKeyVersions;
  }

  // zsk_dnssec_key_versions - computed: true, optional: false, required: false
  private _zskDnssecKeyVersions = new DataOciDnsZonesZonesDnssecConfigZskDnssecKeyVersionsList(this, "zsk_dnssec_key_versions", false);
  public get zskDnssecKeyVersions() {
    return this._zskDnssecKeyVersions;
  }
}

export class DataOciDnsZonesZonesDnssecConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDnsZonesZonesDnssecConfigOutputReference {
    return new DataOciDnsZonesZonesDnssecConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDnsZonesZonesExternalDownstreams {
}

export function dataOciDnsZonesZonesExternalDownstreamsToTerraform(struct?: DataOciDnsZonesZonesExternalDownstreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDnsZonesZonesExternalDownstreamsToHclTerraform(struct?: DataOciDnsZonesZonesExternalDownstreams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDnsZonesZonesExternalDownstreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDnsZonesZonesExternalDownstreams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDnsZonesZonesExternalDownstreams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tsig_key_id - computed: true, optional: false, required: false
  public get tsigKeyId() {
    return this.getStringAttribute('tsig_key_id');
  }
}

export class DataOciDnsZonesZonesExternalDownstreamsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDnsZonesZonesExternalDownstreamsOutputReference {
    return new DataOciDnsZonesZonesExternalDownstreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDnsZonesZonesExternalMasters {
}

export function dataOciDnsZonesZonesExternalMastersToTerraform(struct?: DataOciDnsZonesZonesExternalMasters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDnsZonesZonesExternalMastersToHclTerraform(struct?: DataOciDnsZonesZonesExternalMasters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDnsZonesZonesExternalMastersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDnsZonesZonesExternalMasters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDnsZonesZonesExternalMasters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tsig_key_id - computed: true, optional: false, required: false
  public get tsigKeyId() {
    return this.getStringAttribute('tsig_key_id');
  }
}

export class DataOciDnsZonesZonesExternalMastersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDnsZonesZonesExternalMastersOutputReference {
    return new DataOciDnsZonesZonesExternalMastersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDnsZonesZonesNameservers {
}

export function dataOciDnsZonesZonesNameserversToTerraform(struct?: DataOciDnsZonesZonesNameservers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDnsZonesZonesNameserversToHclTerraform(struct?: DataOciDnsZonesZonesNameservers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDnsZonesZonesNameserversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDnsZonesZonesNameservers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDnsZonesZonesNameservers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
}

export class DataOciDnsZonesZonesNameserversList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDnsZonesZonesNameserversOutputReference {
    return new DataOciDnsZonesZonesNameserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDnsZonesZonesZoneTransferServers {
}

export function dataOciDnsZonesZonesZoneTransferServersToTerraform(struct?: DataOciDnsZonesZonesZoneTransferServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDnsZonesZonesZoneTransferServersToHclTerraform(struct?: DataOciDnsZonesZonesZoneTransferServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDnsZonesZonesZoneTransferServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDnsZonesZonesZoneTransferServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDnsZonesZonesZoneTransferServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // is_transfer_destination - computed: true, optional: false, required: false
  public get isTransferDestination() {
    return this.getBooleanAttribute('is_transfer_destination');
  }

  // is_transfer_source - computed: true, optional: false, required: false
  public get isTransferSource() {
    return this.getBooleanAttribute('is_transfer_source');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataOciDnsZonesZonesZoneTransferServersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDnsZonesZonesZoneTransferServersOutputReference {
    return new DataOciDnsZonesZonesZoneTransferServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDnsZonesZones {
}

export function dataOciDnsZonesZonesToTerraform(struct?: DataOciDnsZonesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDnsZonesZonesToHclTerraform(struct?: DataOciDnsZonesZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDnsZonesZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDnsZonesZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDnsZonesZones | undefined) {
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

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // dnssec_config - computed: true, optional: false, required: false
  private _dnssecConfig = new DataOciDnsZonesZonesDnssecConfigList(this, "dnssec_config", false);
  public get dnssecConfig() {
    return this._dnssecConfig;
  }

  // dnssec_state - computed: true, optional: false, required: false
  public get dnssecState() {
    return this.getStringAttribute('dnssec_state');
  }

  // external_downstreams - computed: true, optional: false, required: false
  private _externalDownstreams = new DataOciDnsZonesZonesExternalDownstreamsList(this, "external_downstreams", false);
  public get externalDownstreams() {
    return this._externalDownstreams;
  }

  // external_masters - computed: true, optional: false, required: false
  private _externalMasters = new DataOciDnsZonesZonesExternalMastersList(this, "external_masters", false);
  public get externalMasters() {
    return this._externalMasters;
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

  // is_protected - computed: true, optional: false, required: false
  public get isProtected() {
    return this.getBooleanAttribute('is_protected');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nameservers - computed: true, optional: false, required: false
  private _nameservers = new DataOciDnsZonesZonesNameserversList(this, "nameservers", false);
  public get nameservers() {
    return this._nameservers;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // self - computed: true, optional: false, required: false
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getNumberAttribute('serial');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // view_id - computed: true, optional: false, required: false
  public get viewId() {
    return this.getStringAttribute('view_id');
  }

  // zone_transfer_servers - computed: true, optional: false, required: false
  private _zoneTransferServers = new DataOciDnsZonesZonesZoneTransferServersList(this, "zone_transfer_servers", false);
  public get zoneTransferServers() {
    return this._zoneTransferServers;
  }

  // zone_type - computed: true, optional: false, required: false
  public get zoneType() {
    return this.getStringAttribute('zone_type');
  }
}

export class DataOciDnsZonesZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDnsZonesZonesOutputReference {
    return new DataOciDnsZonesZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDnsZonesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#name DataOciDnsZones#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#regex DataOciDnsZones#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#values DataOciDnsZones#values}
  */
  readonly values: string[];
}

export function dataOciDnsZonesFilterToTerraform(struct?: DataOciDnsZonesFilter | cdktf.IResolvable): any {
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


export function dataOciDnsZonesFilterToHclTerraform(struct?: DataOciDnsZonesFilter | cdktf.IResolvable): any {
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

export class DataOciDnsZonesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDnsZonesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDnsZonesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDnsZonesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDnsZonesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDnsZonesFilterOutputReference {
    return new DataOciDnsZonesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones oci_dns_zones}
*/
export class DataOciDnsZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dns_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDnsZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDnsZones to import
  * @param importFromId The id of the existing DataOciDnsZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDnsZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dns_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dns_zones oci_dns_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDnsZonesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDnsZonesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dns_zones',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._dnssecState = config.dnssecState;
    this._id = config.id;
    this._name = config.name;
    this._nameContains = config.nameContains;
    this._scope = config.scope;
    this._sortBy = config.sortBy;
    this._sortOrder = config.sortOrder;
    this._state = config.state;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
    this._tsigKeyId = config.tsigKeyId;
    this._viewId = config.viewId;
    this._zoneType = config.zoneType;
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

  // dnssec_state - computed: false, optional: true, required: false
  private _dnssecState?: string; 
  public get dnssecState() {
    return this.getStringAttribute('dnssec_state');
  }
  public set dnssecState(value: string) {
    this._dnssecState = value;
  }
  public resetDnssecState() {
    this._dnssecState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecStateInput() {
    return this._dnssecState;
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

  // name_contains - computed: false, optional: true, required: false
  private _nameContains?: string; 
  public get nameContains() {
    return this.getStringAttribute('name_contains');
  }
  public set nameContains(value: string) {
    this._nameContains = value;
  }
  public resetNameContains() {
    this._nameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameContainsInput() {
    return this._nameContains;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // sort_by - computed: false, optional: true, required: false
  private _sortBy?: string; 
  public get sortBy() {
    return this.getStringAttribute('sort_by');
  }
  public set sortBy(value: string) {
    this._sortBy = value;
  }
  public resetSortBy() {
    this._sortBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortByInput() {
    return this._sortBy;
  }

  // sort_order - computed: false, optional: true, required: false
  private _sortOrder?: string; 
  public get sortOrder() {
    return this.getStringAttribute('sort_order');
  }
  public set sortOrder(value: string) {
    this._sortOrder = value;
  }
  public resetSortOrder() {
    this._sortOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortOrderInput() {
    return this._sortOrder;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // time_created_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeCreatedGreaterThanOrEqualTo?: string; 
  public get timeCreatedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_created_greater_than_or_equal_to');
  }
  public set timeCreatedGreaterThanOrEqualTo(value: string) {
    this._timeCreatedGreaterThanOrEqualTo = value;
  }
  public resetTimeCreatedGreaterThanOrEqualTo() {
    this._timeCreatedGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedGreaterThanOrEqualToInput() {
    return this._timeCreatedGreaterThanOrEqualTo;
  }

  // time_created_less_than - computed: false, optional: true, required: false
  private _timeCreatedLessThan?: string; 
  public get timeCreatedLessThan() {
    return this.getStringAttribute('time_created_less_than');
  }
  public set timeCreatedLessThan(value: string) {
    this._timeCreatedLessThan = value;
  }
  public resetTimeCreatedLessThan() {
    this._timeCreatedLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedLessThanInput() {
    return this._timeCreatedLessThan;
  }

  // tsig_key_id - computed: false, optional: true, required: false
  private _tsigKeyId?: string; 
  public get tsigKeyId() {
    return this.getStringAttribute('tsig_key_id');
  }
  public set tsigKeyId(value: string) {
    this._tsigKeyId = value;
  }
  public resetTsigKeyId() {
    this._tsigKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigKeyIdInput() {
    return this._tsigKeyId;
  }

  // view_id - computed: false, optional: true, required: false
  private _viewId?: string; 
  public get viewId() {
    return this.getStringAttribute('view_id');
  }
  public set viewId(value: string) {
    this._viewId = value;
  }
  public resetViewId() {
    this._viewId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewIdInput() {
    return this._viewId;
  }

  // zone_type - computed: false, optional: true, required: false
  private _zoneType?: string; 
  public get zoneType() {
    return this.getStringAttribute('zone_type');
  }
  public set zoneType(value: string) {
    this._zoneType = value;
  }
  public resetZoneType() {
    this._zoneType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTypeInput() {
    return this._zoneType;
  }

  // zones - computed: true, optional: false, required: false
  private _zones = new DataOciDnsZonesZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDnsZonesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDnsZonesFilter[] | cdktf.IResolvable) {
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
      dnssec_state: cdktf.stringToTerraform(this._dnssecState),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_contains: cdktf.stringToTerraform(this._nameContains),
      scope: cdktf.stringToTerraform(this._scope),
      sort_by: cdktf.stringToTerraform(this._sortBy),
      sort_order: cdktf.stringToTerraform(this._sortOrder),
      state: cdktf.stringToTerraform(this._state),
      time_created_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeCreatedGreaterThanOrEqualTo),
      time_created_less_than: cdktf.stringToTerraform(this._timeCreatedLessThan),
      tsig_key_id: cdktf.stringToTerraform(this._tsigKeyId),
      view_id: cdktf.stringToTerraform(this._viewId),
      zone_type: cdktf.stringToTerraform(this._zoneType),
      filter: cdktf.listMapper(dataOciDnsZonesFilterToTerraform, true)(this._filter.internalValue),
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
      dnssec_state: {
        value: cdktf.stringToHclTerraform(this._dnssecState),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_contains: {
        value: cdktf.stringToHclTerraform(this._nameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_by: {
        value: cdktf.stringToHclTerraform(this._sortBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort_order: {
        value: cdktf.stringToHclTerraform(this._sortOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_created_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeCreatedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_created_less_than: {
        value: cdktf.stringToHclTerraform(this._timeCreatedLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tsig_key_id: {
        value: cdktf.stringToHclTerraform(this._tsigKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_id: {
        value: cdktf.stringToHclTerraform(this._viewId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_type: {
        value: cdktf.stringToHclTerraform(this._zoneType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDnsZonesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDnsZonesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
