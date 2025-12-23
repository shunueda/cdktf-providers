// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/networkprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviNetworkprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/networkprofile#id DataAviNetworkprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/networkprofile#name DataAviNetworkprofile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/networkprofile#tenant_ref DataAviNetworkprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/networkprofile#uuid DataAviNetworkprofile#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviNetworkprofileConfigpbAttributes {
}

export function dataAviNetworkprofileConfigpbAttributesToTerraform(struct?: DataAviNetworkprofileConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileConfigpbAttributesToHclTerraform(struct?: DataAviNetworkprofileConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviNetworkprofileConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileConfigpbAttributesOutputReference {
    return new DataAviNetworkprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviNetworkprofileMarkers {
}

export function dataAviNetworkprofileMarkersToTerraform(struct?: DataAviNetworkprofileMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileMarkersToHclTerraform(struct?: DataAviNetworkprofileMarkers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileMarkers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileMarkers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class DataAviNetworkprofileMarkersList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileMarkersOutputReference {
    return new DataAviNetworkprofileMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviNetworkprofileProfileSctpFastPathProfile {
}

export function dataAviNetworkprofileProfileSctpFastPathProfileToTerraform(struct?: DataAviNetworkprofileProfileSctpFastPathProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileProfileSctpFastPathProfileToHclTerraform(struct?: DataAviNetworkprofileProfileSctpFastPathProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileProfileSctpFastPathProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileProfileSctpFastPathProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileProfileSctpFastPathProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_init_chunk_protection - computed: true, optional: false, required: false
  public get enableInitChunkProtection() {
    return this.getStringAttribute('enable_init_chunk_protection');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
}

export class DataAviNetworkprofileProfileSctpFastPathProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileProfileSctpFastPathProfileOutputReference {
    return new DataAviNetworkprofileProfileSctpFastPathProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviNetworkprofileProfileSctpProxyProfile {
}

export function dataAviNetworkprofileProfileSctpProxyProfileToTerraform(struct?: DataAviNetworkprofileProfileSctpProxyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileProfileSctpProxyProfileToHclTerraform(struct?: DataAviNetworkprofileProfileSctpProxyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileProfileSctpProxyProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileProfileSctpProxyProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileProfileSctpProxyProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cookie_expiration_timeout - computed: true, optional: false, required: false
  public get cookieExpirationTimeout() {
    return this.getStringAttribute('cookie_expiration_timeout');
  }

  // heartbeat_interval - computed: true, optional: false, required: false
  public get heartbeatInterval() {
    return this.getStringAttribute('heartbeat_interval');
  }

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }

  // max_retransmissions_association - computed: true, optional: false, required: false
  public get maxRetransmissionsAssociation() {
    return this.getStringAttribute('max_retransmissions_association');
  }

  // max_retransmissions_init_chunks - computed: true, optional: false, required: false
  public get maxRetransmissionsInitChunks() {
    return this.getStringAttribute('max_retransmissions_init_chunks');
  }

  // number_of_streams - computed: true, optional: false, required: false
  public get numberOfStreams() {
    return this.getStringAttribute('number_of_streams');
  }

  // receive_window - computed: true, optional: false, required: false
  public get receiveWindow() {
    return this.getStringAttribute('receive_window');
  }

  // reset_timeout - computed: true, optional: false, required: false
  public get resetTimeout() {
    return this.getStringAttribute('reset_timeout');
  }
}

export class DataAviNetworkprofileProfileSctpProxyProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileProfileSctpProxyProfileOutputReference {
    return new DataAviNetworkprofileProfileSctpProxyProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviNetworkprofileProfileTcpFastPathProfileDsrProfile {
}

export function dataAviNetworkprofileProfileTcpFastPathProfileDsrProfileToTerraform(struct?: DataAviNetworkprofileProfileTcpFastPathProfileDsrProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileProfileTcpFastPathProfileDsrProfileToHclTerraform(struct?: DataAviNetworkprofileProfileTcpFastPathProfileDsrProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileProfileTcpFastPathProfileDsrProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileProfileTcpFastPathProfileDsrProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileProfileTcpFastPathProfileDsrProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dsr_encap_type - computed: true, optional: false, required: false
  public get dsrEncapType() {
    return this.getStringAttribute('dsr_encap_type');
  }

  // dsr_type - computed: true, optional: false, required: false
  public get dsrType() {
    return this.getStringAttribute('dsr_type');
  }
}

export class DataAviNetworkprofileProfileTcpFastPathProfileDsrProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileProfileTcpFastPathProfileDsrProfileOutputReference {
    return new DataAviNetworkprofileProfileTcpFastPathProfileDsrProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptions {
}

export function dataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptionsToTerraform(struct?: DataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptionsToHclTerraform(struct?: DataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // strip_sack - computed: true, optional: false, required: false
  public get stripSack() {
    return this.getStringAttribute('strip_sack');
  }
}

export class DataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptionsOutputReference {
    return new DataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviNetworkprofileProfileTcpFastPathProfile {
}

export function dataAviNetworkprofileProfileTcpFastPathProfileToTerraform(struct?: DataAviNetworkprofileProfileTcpFastPathProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileProfileTcpFastPathProfileToHclTerraform(struct?: DataAviNetworkprofileProfileTcpFastPathProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileProfileTcpFastPathProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileProfileTcpFastPathProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileProfileTcpFastPathProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dsr_profile - computed: true, optional: false, required: false
  private _dsrProfile = new DataAviNetworkprofileProfileTcpFastPathProfileDsrProfileList(this, "dsr_profile", true);
  public get dsrProfile() {
    return this._dsrProfile;
  }

  // enable_syn_protection - computed: true, optional: false, required: false
  public get enableSynProtection() {
    return this.getStringAttribute('enable_syn_protection');
  }

  // session_idle_timeout - computed: true, optional: false, required: false
  public get sessionIdleTimeout() {
    return this.getStringAttribute('session_idle_timeout');
  }

  // tcp_fastpath_options - computed: true, optional: false, required: false
  private _tcpFastpathOptions = new DataAviNetworkprofileProfileTcpFastPathProfileTcpFastpathOptionsList(this, "tcp_fastpath_options", true);
  public get tcpFastpathOptions() {
    return this._tcpFastpathOptions;
  }
}

export class DataAviNetworkprofileProfileTcpFastPathProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileProfileTcpFastPathProfileOutputReference {
    return new DataAviNetworkprofileProfileTcpFastPathProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviNetworkprofileProfileTcpProxyProfile {
}

export function dataAviNetworkprofileProfileTcpProxyProfileToTerraform(struct?: DataAviNetworkprofileProfileTcpProxyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileProfileTcpProxyProfileToHclTerraform(struct?: DataAviNetworkprofileProfileTcpProxyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileProfileTcpProxyProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileProfileTcpProxyProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileProfileTcpProxyProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ack_on_push - computed: true, optional: false, required: false
  public get ackOnPush() {
    return this.getStringAttribute('ack_on_push');
  }

  // aggressive_congestion_avoidance - computed: true, optional: false, required: false
  public get aggressiveCongestionAvoidance() {
    return this.getStringAttribute('aggressive_congestion_avoidance');
  }

  // auto_window_growth - computed: true, optional: false, required: false
  public get autoWindowGrowth() {
    return this.getStringAttribute('auto_window_growth');
  }

  // automatic - computed: true, optional: false, required: false
  public get automatic() {
    return this.getStringAttribute('automatic');
  }

  // cc_algo - computed: true, optional: false, required: false
  public get ccAlgo() {
    return this.getStringAttribute('cc_algo');
  }

  // congestion_recovery_scaling_factor - computed: true, optional: false, required: false
  public get congestionRecoveryScalingFactor() {
    return this.getStringAttribute('congestion_recovery_scaling_factor');
  }

  // delayed_ack_mode - computed: true, optional: false, required: false
  public get delayedAckMode() {
    return this.getStringAttribute('delayed_ack_mode');
  }

  // delayed_ack_timer_delay - computed: true, optional: false, required: false
  public get delayedAckTimerDelay() {
    return this.getStringAttribute('delayed_ack_timer_delay');
  }

  // idle_connection_timeout - computed: true, optional: false, required: false
  public get idleConnectionTimeout() {
    return this.getStringAttribute('idle_connection_timeout');
  }

  // idle_connection_type - computed: true, optional: false, required: false
  public get idleConnectionType() {
    return this.getStringAttribute('idle_connection_type');
  }

  // ignore_time_wait - computed: true, optional: false, required: false
  public get ignoreTimeWait() {
    return this.getStringAttribute('ignore_time_wait');
  }

  // ip_dscp - computed: true, optional: false, required: false
  public get ipDscp() {
    return this.getStringAttribute('ip_dscp');
  }

  // keepalive_in_halfclose_state - computed: true, optional: false, required: false
  public get keepaliveInHalfcloseState() {
    return this.getStringAttribute('keepalive_in_halfclose_state');
  }

  // max_retransmissions - computed: true, optional: false, required: false
  public get maxRetransmissions() {
    return this.getStringAttribute('max_retransmissions');
  }

  // max_segment_size - computed: true, optional: false, required: false
  public get maxSegmentSize() {
    return this.getStringAttribute('max_segment_size');
  }

  // max_syn_retransmissions - computed: true, optional: false, required: false
  public get maxSynRetransmissions() {
    return this.getStringAttribute('max_syn_retransmissions');
  }

  // min_rexmt_timeout - computed: true, optional: false, required: false
  public get minRexmtTimeout() {
    return this.getStringAttribute('min_rexmt_timeout');
  }

  // nagles_algorithm - computed: true, optional: false, required: false
  public get naglesAlgorithm() {
    return this.getStringAttribute('nagles_algorithm');
  }

  // reassembly_queue_size - computed: true, optional: false, required: false
  public get reassemblyQueueSize() {
    return this.getStringAttribute('reassembly_queue_size');
  }

  // receive_window - computed: true, optional: false, required: false
  public get receiveWindow() {
    return this.getStringAttribute('receive_window');
  }

  // reorder_threshold - computed: true, optional: false, required: false
  public get reorderThreshold() {
    return this.getStringAttribute('reorder_threshold');
  }

  // slow_start_scaling_factor - computed: true, optional: false, required: false
  public get slowStartScalingFactor() {
    return this.getStringAttribute('slow_start_scaling_factor');
  }

  // time_wait_delay - computed: true, optional: false, required: false
  public get timeWaitDelay() {
    return this.getStringAttribute('time_wait_delay');
  }

  // use_interface_mtu - computed: true, optional: false, required: false
  public get useInterfaceMtu() {
    return this.getStringAttribute('use_interface_mtu');
  }
}

export class DataAviNetworkprofileProfileTcpProxyProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileProfileTcpProxyProfileOutputReference {
    return new DataAviNetworkprofileProfileTcpProxyProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviNetworkprofileProfileUdpFastPathProfileDsrProfile {
}

export function dataAviNetworkprofileProfileUdpFastPathProfileDsrProfileToTerraform(struct?: DataAviNetworkprofileProfileUdpFastPathProfileDsrProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileProfileUdpFastPathProfileDsrProfileToHclTerraform(struct?: DataAviNetworkprofileProfileUdpFastPathProfileDsrProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileProfileUdpFastPathProfileDsrProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileProfileUdpFastPathProfileDsrProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileProfileUdpFastPathProfileDsrProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dsr_encap_type - computed: true, optional: false, required: false
  public get dsrEncapType() {
    return this.getStringAttribute('dsr_encap_type');
  }

  // dsr_type - computed: true, optional: false, required: false
  public get dsrType() {
    return this.getStringAttribute('dsr_type');
  }
}

export class DataAviNetworkprofileProfileUdpFastPathProfileDsrProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileProfileUdpFastPathProfileDsrProfileOutputReference {
    return new DataAviNetworkprofileProfileUdpFastPathProfileDsrProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviNetworkprofileProfileUdpFastPathProfile {
}

export function dataAviNetworkprofileProfileUdpFastPathProfileToTerraform(struct?: DataAviNetworkprofileProfileUdpFastPathProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileProfileUdpFastPathProfileToHclTerraform(struct?: DataAviNetworkprofileProfileUdpFastPathProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileProfileUdpFastPathProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileProfileUdpFastPathProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileProfileUdpFastPathProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dsr_profile - computed: true, optional: false, required: false
  private _dsrProfile = new DataAviNetworkprofileProfileUdpFastPathProfileDsrProfileList(this, "dsr_profile", true);
  public get dsrProfile() {
    return this._dsrProfile;
  }

  // per_pkt_loadbalance - computed: true, optional: false, required: false
  public get perPktLoadbalance() {
    return this.getStringAttribute('per_pkt_loadbalance');
  }

  // session_idle_timeout - computed: true, optional: false, required: false
  public get sessionIdleTimeout() {
    return this.getStringAttribute('session_idle_timeout');
  }

  // snat - computed: true, optional: false, required: false
  public get snat() {
    return this.getStringAttribute('snat');
  }
}

export class DataAviNetworkprofileProfileUdpFastPathProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileProfileUdpFastPathProfileOutputReference {
    return new DataAviNetworkprofileProfileUdpFastPathProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviNetworkprofileProfileUdpProxyProfile {
}

export function dataAviNetworkprofileProfileUdpProxyProfileToTerraform(struct?: DataAviNetworkprofileProfileUdpProxyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileProfileUdpProxyProfileToHclTerraform(struct?: DataAviNetworkprofileProfileUdpProxyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileProfileUdpProxyProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileProfileUdpProxyProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileProfileUdpProxyProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // session_idle_timeout - computed: true, optional: false, required: false
  public get sessionIdleTimeout() {
    return this.getStringAttribute('session_idle_timeout');
  }
}

export class DataAviNetworkprofileProfileUdpProxyProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileProfileUdpProxyProfileOutputReference {
    return new DataAviNetworkprofileProfileUdpProxyProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviNetworkprofileProfile {
}

export function dataAviNetworkprofileProfileToTerraform(struct?: DataAviNetworkprofileProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviNetworkprofileProfileToHclTerraform(struct?: DataAviNetworkprofileProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviNetworkprofileProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviNetworkprofileProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviNetworkprofileProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sctp_fast_path_profile - computed: true, optional: false, required: false
  private _sctpFastPathProfile = new DataAviNetworkprofileProfileSctpFastPathProfileList(this, "sctp_fast_path_profile", true);
  public get sctpFastPathProfile() {
    return this._sctpFastPathProfile;
  }

  // sctp_proxy_profile - computed: true, optional: false, required: false
  private _sctpProxyProfile = new DataAviNetworkprofileProfileSctpProxyProfileList(this, "sctp_proxy_profile", true);
  public get sctpProxyProfile() {
    return this._sctpProxyProfile;
  }

  // tcp_fast_path_profile - computed: true, optional: false, required: false
  private _tcpFastPathProfile = new DataAviNetworkprofileProfileTcpFastPathProfileList(this, "tcp_fast_path_profile", true);
  public get tcpFastPathProfile() {
    return this._tcpFastPathProfile;
  }

  // tcp_proxy_profile - computed: true, optional: false, required: false
  private _tcpProxyProfile = new DataAviNetworkprofileProfileTcpProxyProfileList(this, "tcp_proxy_profile", true);
  public get tcpProxyProfile() {
    return this._tcpProxyProfile;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // udp_fast_path_profile - computed: true, optional: false, required: false
  private _udpFastPathProfile = new DataAviNetworkprofileProfileUdpFastPathProfileList(this, "udp_fast_path_profile", true);
  public get udpFastPathProfile() {
    return this._udpFastPathProfile;
  }

  // udp_proxy_profile - computed: true, optional: false, required: false
  private _udpProxyProfile = new DataAviNetworkprofileProfileUdpProxyProfileList(this, "udp_proxy_profile", true);
  public get udpProxyProfile() {
    return this._udpProxyProfile;
  }
}

export class DataAviNetworkprofileProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviNetworkprofileProfileOutputReference {
    return new DataAviNetworkprofileProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/networkprofile avi_networkprofile}
*/
export class DataAviNetworkprofile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_networkprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviNetworkprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviNetworkprofile to import
  * @param importFromId The id of the existing DataAviNetworkprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/networkprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviNetworkprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_networkprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/data-sources/networkprofile avi_networkprofile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviNetworkprofileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviNetworkprofileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_networkprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviNetworkprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // connection_mirror - computed: true, optional: false, required: false
  public get connectionMirror() {
    return this.getStringAttribute('connection_mirror');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // markers - computed: true, optional: false, required: false
  private _markers = new DataAviNetworkprofileMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }

  // name - computed: true, optional: true, required: false
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

  // profile - computed: true, optional: false, required: false
  private _profile = new DataAviNetworkprofileProfileList(this, "profile", true);
  public get profile() {
    return this._profile;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
