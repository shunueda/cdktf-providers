// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ntp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrNtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ntp#device DataIosxrNtp#device}
  */
  readonly device?: string;
}
export interface DataIosxrNtpAccessGroupVrfs {
}

export function dataIosxrNtpAccessGroupVrfsToTerraform(struct?: DataIosxrNtpAccessGroupVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpAccessGroupVrfsToHclTerraform(struct?: DataIosxrNtpAccessGroupVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpAccessGroupVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpAccessGroupVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpAccessGroupVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_peer - computed: true, optional: false, required: false
  public get ipv4Peer() {
    return this.getStringAttribute('ipv4_peer');
  }

  // ipv4_query_only - computed: true, optional: false, required: false
  public get ipv4QueryOnly() {
    return this.getStringAttribute('ipv4_query_only');
  }

  // ipv4_serve - computed: true, optional: false, required: false
  public get ipv4Serve() {
    return this.getStringAttribute('ipv4_serve');
  }

  // ipv4_serve_only - computed: true, optional: false, required: false
  public get ipv4ServeOnly() {
    return this.getStringAttribute('ipv4_serve_only');
  }

  // ipv6_peer - computed: true, optional: false, required: false
  public get ipv6Peer() {
    return this.getStringAttribute('ipv6_peer');
  }

  // ipv6_query_only - computed: true, optional: false, required: false
  public get ipv6QueryOnly() {
    return this.getStringAttribute('ipv6_query_only');
  }

  // ipv6_serve - computed: true, optional: false, required: false
  public get ipv6Serve() {
    return this.getStringAttribute('ipv6_serve');
  }

  // ipv6_serve_only - computed: true, optional: false, required: false
  public get ipv6ServeOnly() {
    return this.getStringAttribute('ipv6_serve_only');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class DataIosxrNtpAccessGroupVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpAccessGroupVrfsOutputReference {
    return new DataIosxrNtpAccessGroupVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpAuthenticationKeys {
}

export function dataIosxrNtpAuthenticationKeysToTerraform(struct?: DataIosxrNtpAuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpAuthenticationKeysToHclTerraform(struct?: DataIosxrNtpAuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpAuthenticationKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpAuthenticationKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_number - computed: true, optional: false, required: false
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }

  // md5_encrypted - computed: true, optional: false, required: false
  public get md5Encrypted() {
    return this.getStringAttribute('md5_encrypted');
  }
}

export class DataIosxrNtpAuthenticationKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpAuthenticationKeysOutputReference {
    return new DataIosxrNtpAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpCmacAuthenticationKeys {
}

export function dataIosxrNtpCmacAuthenticationKeysToTerraform(struct?: DataIosxrNtpCmacAuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpCmacAuthenticationKeysToHclTerraform(struct?: DataIosxrNtpCmacAuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpCmacAuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpCmacAuthenticationKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpCmacAuthenticationKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cmac_encrypted - computed: true, optional: false, required: false
  public get cmacEncrypted() {
    return this.getStringAttribute('cmac_encrypted');
  }

  // key_number - computed: true, optional: false, required: false
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }
}

export class DataIosxrNtpCmacAuthenticationKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpCmacAuthenticationKeysOutputReference {
    return new DataIosxrNtpCmacAuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpHmacSha1AuthenticationKeys {
}

export function dataIosxrNtpHmacSha1AuthenticationKeysToTerraform(struct?: DataIosxrNtpHmacSha1AuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpHmacSha1AuthenticationKeysToHclTerraform(struct?: DataIosxrNtpHmacSha1AuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpHmacSha1AuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpHmacSha1AuthenticationKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpHmacSha1AuthenticationKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hmac_sha1_encrypted - computed: true, optional: false, required: false
  public get hmacSha1Encrypted() {
    return this.getStringAttribute('hmac_sha1_encrypted');
  }

  // key_number - computed: true, optional: false, required: false
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }
}

export class DataIosxrNtpHmacSha1AuthenticationKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpHmacSha1AuthenticationKeysOutputReference {
    return new DataIosxrNtpHmacSha1AuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpHmacSha2AuthenticationKeys {
}

export function dataIosxrNtpHmacSha2AuthenticationKeysToTerraform(struct?: DataIosxrNtpHmacSha2AuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpHmacSha2AuthenticationKeysToHclTerraform(struct?: DataIosxrNtpHmacSha2AuthenticationKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpHmacSha2AuthenticationKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpHmacSha2AuthenticationKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpHmacSha2AuthenticationKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hmac_sha2_encrypted - computed: true, optional: false, required: false
  public get hmacSha2Encrypted() {
    return this.getStringAttribute('hmac_sha2_encrypted');
  }

  // key_number - computed: true, optional: false, required: false
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }
}

export class DataIosxrNtpHmacSha2AuthenticationKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpHmacSha2AuthenticationKeysOutputReference {
    return new DataIosxrNtpHmacSha2AuthenticationKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpInterfaceVrfsInterfaces {
}

export function dataIosxrNtpInterfaceVrfsInterfacesToTerraform(struct?: DataIosxrNtpInterfaceVrfsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpInterfaceVrfsInterfacesToHclTerraform(struct?: DataIosxrNtpInterfaceVrfsInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpInterfaceVrfsInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpInterfaceVrfsInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpInterfaceVrfsInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broadcast_client - computed: true, optional: false, required: false
  public get broadcastClient() {
    return this.getBooleanAttribute('broadcast_client');
  }

  // broadcast_destination - computed: true, optional: false, required: false
  public get broadcastDestination() {
    return this.getStringAttribute('broadcast_destination');
  }

  // broadcast_key - computed: true, optional: false, required: false
  public get broadcastKey() {
    return this.getNumberAttribute('broadcast_key');
  }

  // broadcast_version - computed: true, optional: false, required: false
  public get broadcastVersion() {
    return this.getNumberAttribute('broadcast_version');
  }

  // disable - computed: true, optional: false, required: false
  public get disable() {
    return this.getBooleanAttribute('disable');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
}

export class DataIosxrNtpInterfaceVrfsInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpInterfaceVrfsInterfacesOutputReference {
    return new DataIosxrNtpInterfaceVrfsInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpInterfaceVrfs {
}

export function dataIosxrNtpInterfaceVrfsToTerraform(struct?: DataIosxrNtpInterfaceVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpInterfaceVrfsToHclTerraform(struct?: DataIosxrNtpInterfaceVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpInterfaceVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpInterfaceVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpInterfaceVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataIosxrNtpInterfaceVrfsInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class DataIosxrNtpInterfaceVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpInterfaceVrfsOutputReference {
    return new DataIosxrNtpInterfaceVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpInterfaces {
}

export function dataIosxrNtpInterfacesToTerraform(struct?: DataIosxrNtpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpInterfacesToHclTerraform(struct?: DataIosxrNtpInterfaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpInterfaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpInterfaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // broadcast_destination - computed: true, optional: false, required: false
  public get broadcastDestination() {
    return this.getStringAttribute('broadcast_destination');
  }

  // broadcast_key - computed: true, optional: false, required: false
  public get broadcastKey() {
    return this.getNumberAttribute('broadcast_key');
  }

  // broadcast_version - computed: true, optional: false, required: false
  public get broadcastVersion() {
    return this.getNumberAttribute('broadcast_version');
  }

  // disable - computed: true, optional: false, required: false
  public get disable() {
    return this.getBooleanAttribute('disable');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
}

export class DataIosxrNtpInterfacesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpInterfacesOutputReference {
    return new DataIosxrNtpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpIpv4PeersServers {
}

export function dataIosxrNtpIpv4PeersServersToTerraform(struct?: DataIosxrNtpIpv4PeersServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpIpv4PeersServersToHclTerraform(struct?: DataIosxrNtpIpv4PeersServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpIpv4PeersServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpIpv4PeersServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpIpv4PeersServers | undefined) {
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

  // burst - computed: true, optional: false, required: false
  public get burst() {
    return this.getBooleanAttribute('burst');
  }

  // iburst - computed: true, optional: false, required: false
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // maxpoll - computed: true, optional: false, required: false
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }

  // minpoll - computed: true, optional: false, required: false
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }

  // prefer - computed: true, optional: false, required: false
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataIosxrNtpIpv4PeersServersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpIpv4PeersServersOutputReference {
    return new DataIosxrNtpIpv4PeersServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpIpv6PeersServers {
}

export function dataIosxrNtpIpv6PeersServersToTerraform(struct?: DataIosxrNtpIpv6PeersServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpIpv6PeersServersToHclTerraform(struct?: DataIosxrNtpIpv6PeersServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpIpv6PeersServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpIpv6PeersServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpIpv6PeersServers | undefined) {
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

  // burst - computed: true, optional: false, required: false
  public get burst() {
    return this.getBooleanAttribute('burst');
  }

  // iburst - computed: true, optional: false, required: false
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // maxpoll - computed: true, optional: false, required: false
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }

  // minpoll - computed: true, optional: false, required: false
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }

  // prefer - computed: true, optional: false, required: false
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataIosxrNtpIpv6PeersServersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpIpv6PeersServersOutputReference {
    return new DataIosxrNtpIpv6PeersServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpPeersServersVrfsIpv4PeersServers {
}

export function dataIosxrNtpPeersServersVrfsIpv4PeersServersToTerraform(struct?: DataIosxrNtpPeersServersVrfsIpv4PeersServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpPeersServersVrfsIpv4PeersServersToHclTerraform(struct?: DataIosxrNtpPeersServersVrfsIpv4PeersServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpPeersServersVrfsIpv4PeersServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpPeersServersVrfsIpv4PeersServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpPeersServersVrfsIpv4PeersServers | undefined) {
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

  // burst - computed: true, optional: false, required: false
  public get burst() {
    return this.getBooleanAttribute('burst');
  }

  // iburst - computed: true, optional: false, required: false
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // maxpoll - computed: true, optional: false, required: false
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }

  // minpoll - computed: true, optional: false, required: false
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }

  // prefer - computed: true, optional: false, required: false
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataIosxrNtpPeersServersVrfsIpv4PeersServersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpPeersServersVrfsIpv4PeersServersOutputReference {
    return new DataIosxrNtpPeersServersVrfsIpv4PeersServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpPeersServersVrfsIpv6PeersServers {
}

export function dataIosxrNtpPeersServersVrfsIpv6PeersServersToTerraform(struct?: DataIosxrNtpPeersServersVrfsIpv6PeersServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpPeersServersVrfsIpv6PeersServersToHclTerraform(struct?: DataIosxrNtpPeersServersVrfsIpv6PeersServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpPeersServersVrfsIpv6PeersServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpPeersServersVrfsIpv6PeersServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpPeersServersVrfsIpv6PeersServers | undefined) {
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

  // burst - computed: true, optional: false, required: false
  public get burst() {
    return this.getBooleanAttribute('burst');
  }

  // iburst - computed: true, optional: false, required: false
  public get iburst() {
    return this.getBooleanAttribute('iburst');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getNumberAttribute('key');
  }

  // maxpoll - computed: true, optional: false, required: false
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }

  // minpoll - computed: true, optional: false, required: false
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }

  // prefer - computed: true, optional: false, required: false
  public get prefer() {
    return this.getBooleanAttribute('prefer');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataIosxrNtpPeersServersVrfsIpv6PeersServersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpPeersServersVrfsIpv6PeersServersOutputReference {
    return new DataIosxrNtpPeersServersVrfsIpv6PeersServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpPeersServersVrfs {
}

export function dataIosxrNtpPeersServersVrfsToTerraform(struct?: DataIosxrNtpPeersServersVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpPeersServersVrfsToHclTerraform(struct?: DataIosxrNtpPeersServersVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpPeersServersVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpPeersServersVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpPeersServersVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipv4_peers_servers - computed: true, optional: false, required: false
  private _ipv4PeersServers = new DataIosxrNtpPeersServersVrfsIpv4PeersServersList(this, "ipv4_peers_servers", false);
  public get ipv4PeersServers() {
    return this._ipv4PeersServers;
  }

  // ipv6_peers_servers - computed: true, optional: false, required: false
  private _ipv6PeersServers = new DataIosxrNtpPeersServersVrfsIpv6PeersServersList(this, "ipv6_peers_servers", false);
  public get ipv6PeersServers() {
    return this._ipv6PeersServers;
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class DataIosxrNtpPeersServersVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpPeersServersVrfsOutputReference {
    return new DataIosxrNtpPeersServersVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpSourceVrfs {
}

export function dataIosxrNtpSourceVrfsToTerraform(struct?: DataIosxrNtpSourceVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpSourceVrfsToHclTerraform(struct?: DataIosxrNtpSourceVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpSourceVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpSourceVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpSourceVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // vrf_name - computed: true, optional: false, required: false
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
}

export class DataIosxrNtpSourceVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpSourceVrfsOutputReference {
    return new DataIosxrNtpSourceVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrNtpTrustedKeys {
}

export function dataIosxrNtpTrustedKeysToTerraform(struct?: DataIosxrNtpTrustedKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrNtpTrustedKeysToHclTerraform(struct?: DataIosxrNtpTrustedKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrNtpTrustedKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrNtpTrustedKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrNtpTrustedKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_number - computed: true, optional: false, required: false
  public get keyNumber() {
    return this.getNumberAttribute('key_number');
  }
}

export class DataIosxrNtpTrustedKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrNtpTrustedKeysOutputReference {
    return new DataIosxrNtpTrustedKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ntp iosxr_ntp}
*/
export class DataIosxrNtp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_ntp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrNtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrNtp to import
  * @param importFromId The id of the existing DataIosxrNtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ntp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrNtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_ntp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/ntp iosxr_ntp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrNtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxrNtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_ntp',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
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

  // access_group_ipv4_peer - computed: true, optional: false, required: false
  public get accessGroupIpv4Peer() {
    return this.getStringAttribute('access_group_ipv4_peer');
  }

  // access_group_ipv4_query_only - computed: true, optional: false, required: false
  public get accessGroupIpv4QueryOnly() {
    return this.getStringAttribute('access_group_ipv4_query_only');
  }

  // access_group_ipv4_serve - computed: true, optional: false, required: false
  public get accessGroupIpv4Serve() {
    return this.getStringAttribute('access_group_ipv4_serve');
  }

  // access_group_ipv4_serve_only - computed: true, optional: false, required: false
  public get accessGroupIpv4ServeOnly() {
    return this.getStringAttribute('access_group_ipv4_serve_only');
  }

  // access_group_ipv6_peer - computed: true, optional: false, required: false
  public get accessGroupIpv6Peer() {
    return this.getStringAttribute('access_group_ipv6_peer');
  }

  // access_group_ipv6_query_only - computed: true, optional: false, required: false
  public get accessGroupIpv6QueryOnly() {
    return this.getStringAttribute('access_group_ipv6_query_only');
  }

  // access_group_ipv6_serve - computed: true, optional: false, required: false
  public get accessGroupIpv6Serve() {
    return this.getStringAttribute('access_group_ipv6_serve');
  }

  // access_group_ipv6_serve_only - computed: true, optional: false, required: false
  public get accessGroupIpv6ServeOnly() {
    return this.getStringAttribute('access_group_ipv6_serve_only');
  }

  // access_group_vrfs - computed: true, optional: false, required: false
  private _accessGroupVrfs = new DataIosxrNtpAccessGroupVrfsList(this, "access_group_vrfs", false);
  public get accessGroupVrfs() {
    return this._accessGroupVrfs;
  }

  // admin_plane_burst - computed: true, optional: false, required: false
  public get adminPlaneBurst() {
    return this.getBooleanAttribute('admin_plane_burst');
  }

  // admin_plane_iburst - computed: true, optional: false, required: false
  public get adminPlaneIburst() {
    return this.getBooleanAttribute('admin_plane_iburst');
  }

  // admin_plane_key - computed: true, optional: false, required: false
  public get adminPlaneKey() {
    return this.getNumberAttribute('admin_plane_key');
  }

  // admin_plane_maxpoll - computed: true, optional: false, required: false
  public get adminPlaneMaxpoll() {
    return this.getNumberAttribute('admin_plane_maxpoll');
  }

  // admin_plane_minpoll - computed: true, optional: false, required: false
  public get adminPlaneMinpoll() {
    return this.getNumberAttribute('admin_plane_minpoll');
  }

  // admin_plane_prefer - computed: true, optional: false, required: false
  public get adminPlanePrefer() {
    return this.getBooleanAttribute('admin_plane_prefer');
  }

  // admin_plane_version - computed: true, optional: false, required: false
  public get adminPlaneVersion() {
    return this.getNumberAttribute('admin_plane_version');
  }

  // authenticate - computed: true, optional: false, required: false
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }

  // authentication_keys - computed: true, optional: false, required: false
  private _authenticationKeys = new DataIosxrNtpAuthenticationKeysList(this, "authentication_keys", false);
  public get authenticationKeys() {
    return this._authenticationKeys;
  }

  // broadcastdelay - computed: true, optional: false, required: false
  public get broadcastdelay() {
    return this.getNumberAttribute('broadcastdelay');
  }

  // cmac_authentication_keys - computed: true, optional: false, required: false
  private _cmacAuthenticationKeys = new DataIosxrNtpCmacAuthenticationKeysList(this, "cmac_authentication_keys", false);
  public get cmacAuthenticationKeys() {
    return this._cmacAuthenticationKeys;
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

  // hmac_sha1_authentication_keys - computed: true, optional: false, required: false
  private _hmacSha1AuthenticationKeys = new DataIosxrNtpHmacSha1AuthenticationKeysList(this, "hmac_sha1_authentication_keys", false);
  public get hmacSha1AuthenticationKeys() {
    return this._hmacSha1AuthenticationKeys;
  }

  // hmac_sha2_authentication_keys - computed: true, optional: false, required: false
  private _hmacSha2AuthenticationKeys = new DataIosxrNtpHmacSha2AuthenticationKeysList(this, "hmac_sha2_authentication_keys", false);
  public get hmacSha2AuthenticationKeys() {
    return this._hmacSha2AuthenticationKeys;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_vrfs - computed: true, optional: false, required: false
  private _interfaceVrfs = new DataIosxrNtpInterfaceVrfsList(this, "interface_vrfs", false);
  public get interfaceVrfs() {
    return this._interfaceVrfs;
  }

  // interfaces - computed: true, optional: false, required: false
  private _interfaces = new DataIosxrNtpInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }

  // ipv4_dscp - computed: true, optional: false, required: false
  public get ipv4Dscp() {
    return this.getStringAttribute('ipv4_dscp');
  }

  // ipv4_peers_servers - computed: true, optional: false, required: false
  private _ipv4PeersServers = new DataIosxrNtpIpv4PeersServersList(this, "ipv4_peers_servers", false);
  public get ipv4PeersServers() {
    return this._ipv4PeersServers;
  }

  // ipv4_precedence - computed: true, optional: false, required: false
  public get ipv4Precedence() {
    return this.getStringAttribute('ipv4_precedence');
  }

  // ipv6_dscp - computed: true, optional: false, required: false
  public get ipv6Dscp() {
    return this.getStringAttribute('ipv6_dscp');
  }

  // ipv6_peers_servers - computed: true, optional: false, required: false
  private _ipv6PeersServers = new DataIosxrNtpIpv6PeersServersList(this, "ipv6_peers_servers", false);
  public get ipv6PeersServers() {
    return this._ipv6PeersServers;
  }

  // ipv6_precedence - computed: true, optional: false, required: false
  public get ipv6Precedence() {
    return this.getStringAttribute('ipv6_precedence');
  }

  // log_internal_sync - computed: true, optional: false, required: false
  public get logInternalSync() {
    return this.getBooleanAttribute('log_internal_sync');
  }

  // max_associations - computed: true, optional: false, required: false
  public get maxAssociations() {
    return this.getNumberAttribute('max_associations');
  }

  // passive - computed: true, optional: false, required: false
  public get passive() {
    return this.getBooleanAttribute('passive');
  }

  // peers_servers_vrfs - computed: true, optional: false, required: false
  private _peersServersVrfs = new DataIosxrNtpPeersServersVrfsList(this, "peers_servers_vrfs", false);
  public get peersServersVrfs() {
    return this._peersServersVrfs;
  }

  // primary_reference_clock - computed: true, optional: false, required: false
  public get primaryReferenceClock() {
    return this.getBooleanAttribute('primary_reference_clock');
  }

  // primary_stratum_number - computed: true, optional: false, required: false
  public get primaryStratumNumber() {
    return this.getNumberAttribute('primary_stratum_number');
  }

  // source_interface_name - computed: true, optional: false, required: false
  public get sourceInterfaceName() {
    return this.getStringAttribute('source_interface_name');
  }

  // source_vrfs - computed: true, optional: false, required: false
  private _sourceVrfs = new DataIosxrNtpSourceVrfsList(this, "source_vrfs", false);
  public get sourceVrfs() {
    return this._sourceVrfs;
  }

  // trusted_keys - computed: true, optional: false, required: false
  private _trustedKeys = new DataIosxrNtpTrustedKeysList(this, "trusted_keys", false);
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
