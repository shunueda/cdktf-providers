// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/ntp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeNtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/ntp#device DataIosxeNtp#device}
  */
  readonly device?: string;
}
export interface DataIosxeNtpAuthenticationKeys {
}

export function dataIosxeNtpAuthenticationKeysToTerraform(struct?: DataIosxeNtpAuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeNtpAuthenticationKeysToHclTerraform(struct?: DataIosxeNtpAuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeNtpAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeNtpAuthenticationKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeNtpAuthenticationKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmac_aes_128 - computed: true, optional: false, required: false
  public get cmacAes128() {
    return this.getStringAttribute('cmac_aes_128');
  }

  // encryption_type - computed: true, optional: false, required: false
  public get encryptionType() {
    return this.getNumberAttribute('encryption_type');
  }

  // hmac_sha1 - computed: true, optional: false, required: false
  public get hmacSha1() {
    return this.getStringAttribute('hmac_sha1');
  }

  // hmac_sha2_256 - computed: true, optional: false, required: false
  public get hmacSha2256() {
    return this.getStringAttribute('hmac_sha2_256');
  }

  // md5 - computed: true, optional: false, required: false
  public get md5() {
    return this.getStringAttribute('md5');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // sha1 - computed: true, optional: false, required: false
  public get sha1() {
    return this.getStringAttribute('sha1');
  }

  // sha2 - computed: true, optional: false, required: false
  public get sha2() {
    return this.getStringAttribute('sha2');
  }
}

export class DataIosxeNtpAuthenticationKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeNtpAuthenticationKeysOutputReference {
    return new DataIosxeNtpAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeNtpPeerVrfsPeers {
}

export function dataIosxeNtpPeerVrfsPeersToTerraform(struct?: DataIosxeNtpPeerVrfsPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeNtpPeerVrfsPeersToHclTerraform(struct?: DataIosxeNtpPeerVrfsPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeNtpPeerVrfsPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeNtpPeerVrfsPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeNtpPeerVrfsPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // prefer - computed: true, optional: false, required: false
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataIosxeNtpPeerVrfsPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeNtpPeerVrfsPeersOutputReference {
    return new DataIosxeNtpPeerVrfsPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeNtpPeerVrfs {
}

export function dataIosxeNtpPeerVrfsToTerraform(struct?: DataIosxeNtpPeerVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeNtpPeerVrfsToHclTerraform(struct?: DataIosxeNtpPeerVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeNtpPeerVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeNtpPeerVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeNtpPeerVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peers - computed: true, optional: false, required: false
  private _peers = new DataIosxeNtpPeerVrfsPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
}

export class DataIosxeNtpPeerVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeNtpPeerVrfsOutputReference {
    return new DataIosxeNtpPeerVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeNtpPeers {
}

export function dataIosxeNtpPeersToTerraform(struct?: DataIosxeNtpPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeNtpPeersToHclTerraform(struct?: DataIosxeNtpPeers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeNtpPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeNtpPeers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeNtpPeers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // prefer - computed: true, optional: false, required: false
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataIosxeNtpPeersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeNtpPeersOutputReference {
    return new DataIosxeNtpPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeNtpServerVrfsServers {
}

export function dataIosxeNtpServerVrfsServersToTerraform(struct?: DataIosxeNtpServerVrfsServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeNtpServerVrfsServersToHclTerraform(struct?: DataIosxeNtpServerVrfsServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeNtpServerVrfsServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeNtpServerVrfsServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeNtpServerVrfsServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst - computed: true, optional: false, required: false
  public get burst() {
    return this.getBooleanAttribute('burst');
  }

  // iburst - computed: true, optional: false, required: false
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // periodic - computed: true, optional: false, required: false
  public get periodic() {
    return this.getBooleanAttribute('periodic');
  }

  // prefer - computed: true, optional: false, required: false
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataIosxeNtpServerVrfsServersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeNtpServerVrfsServersOutputReference {
    return new DataIosxeNtpServerVrfsServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeNtpServerVrfs {
}

export function dataIosxeNtpServerVrfsToTerraform(struct?: DataIosxeNtpServerVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeNtpServerVrfsToHclTerraform(struct?: DataIosxeNtpServerVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeNtpServerVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeNtpServerVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeNtpServerVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new DataIosxeNtpServerVrfsServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }
}

export class DataIosxeNtpServerVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeNtpServerVrfsOutputReference {
    return new DataIosxeNtpServerVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeNtpServers {
}

export function dataIosxeNtpServersToTerraform(struct?: DataIosxeNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeNtpServersToHclTerraform(struct?: DataIosxeNtpServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeNtpServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeNtpServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeNtpServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst - computed: true, optional: false, required: false
  public get burst() {
    return this.getBooleanAttribute('burst');
  }

  // iburst - computed: true, optional: false, required: false
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // periodic - computed: true, optional: false, required: false
  public get periodic() {
    return this.getBooleanAttribute('periodic');
  }

  // prefer - computed: true, optional: false, required: false
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataIosxeNtpServersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeNtpServersOutputReference {
    return new DataIosxeNtpServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxeNtpTrustedKeys {
}

export function dataIosxeNtpTrustedKeysToTerraform(struct?: DataIosxeNtpTrustedKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxeNtpTrustedKeysToHclTerraform(struct?: DataIosxeNtpTrustedKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxeNtpTrustedKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxeNtpTrustedKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxeNtpTrustedKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }
}

export class DataIosxeNtpTrustedKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxeNtpTrustedKeysOutputReference {
    return new DataIosxeNtpTrustedKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/ntp iosxe_ntp}
*/
export class DataIosxeNtp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_ntp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeNtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeNtp to import
  * @param importFromId The id of the existing DataIosxeNtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/ntp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeNtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_ntp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/data-sources/ntp iosxe_ntp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeNtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeNtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_ntp',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_group_peer_acl - computed: true, optional: false, required: false
  public get accessGroupPeerAcl() {
    return this.getStringAttribute('access_group_peer_acl');
  }

  // access_group_query_only_acl - computed: true, optional: false, required: false
  public get accessGroupQueryOnlyAcl() {
    return this.getStringAttribute('access_group_query_only_acl');
  }

  // access_group_serve_acl - computed: true, optional: false, required: false
  public get accessGroupServeAcl() {
    return this.getStringAttribute('access_group_serve_acl');
  }

  // access_group_serve_only_acl - computed: true, optional: false, required: false
  public get accessGroupServeOnlyAcl() {
    return this.getStringAttribute('access_group_serve_only_acl');
  }

  // authenticate - computed: true, optional: false, required: false
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }

  // authentication_keys - computed: true, optional: false, required: false
  private _authenticationKeys = new DataIosxeNtpAuthenticationKeysList(this, "authentication_keys", false);
  public get authenticationKeys() {
    return this._authenticationKeys;
  }

  // clock_period - computed: true, optional: false, required: false
  public get clockPeriod() {
    return this.getNumberAttribute('clock_period');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // logging - computed: true, optional: false, required: false
  public get logging() {
    return this.getBooleanAttribute('logging');
  }

  // master - computed: true, optional: false, required: false
  public get master() {
    return this.getBooleanAttribute('master');
  }

  // master_stratum - computed: true, optional: false, required: false
  public get masterStratum() {
    return this.getNumberAttribute('master_stratum');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getBooleanAttribute('passive');
  }

  // peer_vrfs - computed: true, optional: false, required: false
  private _peerVrfs = new DataIosxeNtpPeerVrfsList(this, "peer_vrfs", false);
  public get peerVrfs() {
    return this._peerVrfs;
  }

  // peers - computed: true, optional: false, required: false
  private _peers = new DataIosxeNtpPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }

  // server_vrfs - computed: true, optional: false, required: false
  private _serverVrfs = new DataIosxeNtpServerVrfsList(this, "server_vrfs", false);
  public get serverVrfs() {
    return this._serverVrfs;
  }

  // servers - computed: true, optional: false, required: false
  private _servers = new DataIosxeNtpServersList(this, "servers", false);
  public get servers() {
    return this._servers;
  }

  // source_forty_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceFortyGigabitEthernet() {
    return this.getStringAttribute('source_forty_gigabit_ethernet');
  }

  // source_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceGigabitEthernet() {
    return this.getStringAttribute('source_gigabit_ethernet');
  }

  // source_hundred_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceHundredGigabitEthernet() {
    return this.getStringAttribute('source_hundred_gigabit_ethernet');
  }

  // source_loopback - computed: true, optional: false, required: false
  public get sourceLoopback() {
    return this.getNumberAttribute('source_loopback');
  }

  // source_port_channel - computed: true, optional: false, required: false
  public get sourcePortChannel() {
    return this.getNumberAttribute('source_port_channel');
  }

  // source_port_channel_subinterface - computed: true, optional: false, required: false
  public get sourcePortChannelSubinterface() {
    return this.getStringAttribute('source_port_channel_subinterface');
  }

  // source_ten_gigabit_ethernet - computed: true, optional: false, required: false
  public get sourceTenGigabitEthernet() {
    return this.getStringAttribute('source_ten_gigabit_ethernet');
  }

  // source_vlan - computed: true, optional: false, required: false
  public get sourceVlan() {
    return this.getNumberAttribute('source_vlan');
  }

  // trusted_keys - computed: true, optional: false, required: false
  private _trustedKeys = new DataIosxeNtpTrustedKeysList(this, "trusted_keys", false);
  public get trustedKeys() {
    return this._trustedKeys;
  }

  // update_calendar - computed: true, optional: false, required: false
  public get updateCalendar() {
    return this.getBooleanAttribute('update_calendar');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
