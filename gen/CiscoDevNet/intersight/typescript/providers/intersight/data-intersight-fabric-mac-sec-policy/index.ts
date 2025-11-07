// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIntersightFabricMacSecPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#account_moid DataIntersightFabricMacSecPolicy#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Cipher suite to be used for MACsec encryption.
  * * `GCM-AES-XPN-256` - An extended Cipher Suite of GCM-AES-256 used in MACsec (Media Access Control Security) that incorporates Extended Packet Numbering (XPN) for enhanced security and scalability.
  * * `GCM-AES-128` - This Cipher Suite employs the Advanced Encryption Standard (AES) with a 128-bit key in Galois/Counter Mode, offering both encryption and authentication.
  * * `GCM-AES-256` - This Cipher Suite utilizes Advanced Encryption Standard (AES) with a 256-bit key in Galois/Counter Mode, offering a higher level of security compared to GCM-AES-128 due to the larger key size.
  * * `GCM-AES-XPN-128` - An extended Cipher Suite of GCM-AES-128  used in MACsec (Media Access Control Security) that incorporates Extended Packet Numbering (XPN) to enhance security and scalability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#cipher_suite DataIntersightFabricMacSecPolicy#cipher_suite}
  */
  readonly cipherSuite?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The MACsec confidentiality offset specifies the number of bytes starting from the frame header. MACsec encrypts only the bytes after the offset in a frame.
  * * `CONF-OFFSET-0` - A value of 0 means the entire ethernet frame is encrypted.
  * * `CONF-OFFSET-30` - The first 30 bytes of the ethernet frame are not encrypted, and the rest of the frame is encrypted.
  * * `CONF-OFFSET-50` - The first 50 bytes of the ethernet frame are not encrypted, and the rest of the frame is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#confidentiality_offset DataIntersightFabricMacSecPolicy#confidentiality_offset}
  */
  readonly confidentialityOffset?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#create_time DataIntersightFabricMacSecPolicy#create_time}
  */
  readonly createTime?: string;
  /**
  * Description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#description DataIntersightFabricMacSecPolicy#description}
  */
  readonly description?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#domain_group_moid DataIntersightFabricMacSecPolicy#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#id DataIntersightFabricMacSecPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configures inclusion of the optional integrity check value (ICV) indicator as part of the transmitted MACsec key agreement protocol data unit (PDU).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#include_icv_indicator DataIntersightFabricMacSecPolicy#include_icv_indicator}
  */
  readonly includeIcvIndicator?: boolean | cdktf.IResolvable;
  /**
  * The key server is selected by comparing key-server priority values during MACsec key agreement (MKA) message exchange between peer devices. Valid values range from 0 to 255. The lower the value, the higher the chance it will be selected as the key server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#key_server_priority DataIntersightFabricMacSecPolicy#key_server_priority}
  */
  readonly keyServerPriority?: number;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#mod_time DataIntersightFabricMacSecPolicy#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#moid DataIntersightFabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Name of the concrete policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#name DataIntersightFabricMacSecPolicy#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#owners DataIntersightFabricMacSecPolicy#owners}
  */
  readonly owners?: string[];
  /**
  * Defines the size of the replay protection window. It determines the number of packets that can be received out of order without being considered replay attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#replay_window_size DataIntersightFabricMacSecPolicy#replay_window_size}
  */
  readonly replayWindowSize?: number;
  /**
  * Time in seconds to force secure association key (SAK) rekey. Valid range is from 60 to 2592000 seconds when configured. When not configured, the SAK rekey interval is determined based on the interface speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#sak_expiry_time DataIntersightFabricMacSecPolicy#sak_expiry_time}
  */
  readonly sakExpiryTime?: number;
  /**
  * The security policy specifies the level of MACsec enforcement on network traffic passing through a given interface.
  * Should secure allows unencrypted traffic to flow until the MACsec key agreement (MKA) session is secured. After the MKA session is secured, the policy switches to only allow encrypted traffic to flow. Must secure imposes only MACsec encrypted traffic to flow. Traffic will be dropped, until the MKA session is not secured.
  * * `Should-secure` - Should secure allows unencrypted traffic to flow until the MACsec key agreement (MKA) session is secured. After the MKA session is secured, the policy switches to only allow encrypted traffic to flow.
  * * `Must-secure` - Must secure imposes only MACsec encrypted traffic to flow. Traffic will be dropped, until the MKA session is not secured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#security_policy DataIntersightFabricMacSecPolicy#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#shared_scope DataIntersightFabricMacSecPolicy#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * ancestors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#ancestors DataIntersightFabricMacSecPolicy#ancestors}
  */
  readonly ancestors?: DataIntersightFabricMacSecPolicyAncestors[] | cdktf.IResolvable;
  /**
  * fallback_key_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#fallback_key_chain DataIntersightFabricMacSecPolicy#fallback_key_chain}
  */
  readonly fallbackKeyChain?: DataIntersightFabricMacSecPolicyFallbackKeyChain;
  /**
  * mac_sec_ea_pol block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#mac_sec_ea_pol DataIntersightFabricMacSecPolicy#mac_sec_ea_pol}
  */
  readonly macSecEaPol?: DataIntersightFabricMacSecPolicyMacSecEaPol;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#organization DataIntersightFabricMacSecPolicy#organization}
  */
  readonly organization?: DataIntersightFabricMacSecPolicyOrganization;
  /**
  * parent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#parent DataIntersightFabricMacSecPolicy#parent}
  */
  readonly parent?: DataIntersightFabricMacSecPolicyParent;
  /**
  * permission_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#permission_resources DataIntersightFabricMacSecPolicy#permission_resources}
  */
  readonly permissionResources?: DataIntersightFabricMacSecPolicyPermissionResources[] | cdktf.IResolvable;
  /**
  * primary_key_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#primary_key_chain DataIntersightFabricMacSecPolicy#primary_key_chain}
  */
  readonly primaryKeyChain?: DataIntersightFabricMacSecPolicyPrimaryKeyChain;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#tags DataIntersightFabricMacSecPolicy#tags}
  */
  readonly tags?: DataIntersightFabricMacSecPolicyTags[] | cdktf.IResolvable;
  /**
  * version_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#version_context DataIntersightFabricMacSecPolicy#version_context}
  */
  readonly versionContext?: DataIntersightFabricMacSecPolicyVersionContext;
}
export interface DataIntersightFabricMacSecPolicyResultsAncestors {
}

export function dataIntersightFabricMacSecPolicyResultsAncestorsToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsAncestorsToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsAncestors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsAncestors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsAncestors | undefined) {
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

export class DataIntersightFabricMacSecPolicyResultsAncestorsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsAncestorsOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeys {
}

export function dataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeysToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeysToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeys | undefined) {
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

  // cryptographic_algorithm - computed: true, optional: false, required: false
  public get cryptographicAlgorithm() {
    return this.getStringAttribute('cryptographic_algorithm');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_octet_string_set - computed: true, optional: false, required: false
  public get isOctetStringSet() {
    return this.getBooleanAttribute('is_octet_string_set');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // octet_string - computed: true, optional: false, required: false
  public get octetString() {
    return this.getStringAttribute('octet_string');
  }

  // send_lifetime_duration - computed: true, optional: false, required: false
  public get sendLifetimeDuration() {
    return this.getNumberAttribute('send_lifetime_duration');
  }

  // send_lifetime_end_time - computed: true, optional: false, required: false
  public get sendLifetimeEndTime() {
    return this.getStringAttribute('send_lifetime_end_time');
  }

  // send_lifetime_infinite - computed: true, optional: false, required: false
  public get sendLifetimeInfinite() {
    return this.getBooleanAttribute('send_lifetime_infinite');
  }

  // send_lifetime_start_time - computed: true, optional: false, required: false
  public get sendLifetimeStartTime() {
    return this.getStringAttribute('send_lifetime_start_time');
  }

  // send_lifetime_time_zone - computed: true, optional: false, required: false
  public get sendLifetimeTimeZone() {
    return this.getStringAttribute('send_lifetime_time_zone');
  }

  // send_lifetime_unlimited - computed: true, optional: false, required: false
  public get sendLifetimeUnlimited() {
    return this.getBooleanAttribute('send_lifetime_unlimited');
  }
}

export class DataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeysOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsFallbackKeyChain {
}

export function dataIntersightFabricMacSecPolicyResultsFallbackKeyChainToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsFallbackKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsFallbackKeyChainToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsFallbackKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsFallbackKeyChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsFallbackKeyChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsFallbackKeyChain | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // sec_keys - computed: true, optional: false, required: false
  private _secKeys = new DataIntersightFabricMacSecPolicyResultsFallbackKeyChainSecKeysList(this, "sec_keys", false);
  public get secKeys() {
    return this._secKeys;
  }
}

export class DataIntersightFabricMacSecPolicyResultsFallbackKeyChainList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsFallbackKeyChainOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsFallbackKeyChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsMacSecEaPol {
}

export function dataIntersightFabricMacSecPolicyResultsMacSecEaPolToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsMacSecEaPol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsMacSecEaPolToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsMacSecEaPol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsMacSecEaPolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsMacSecEaPol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsMacSecEaPol | undefined) {
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

  // ea_pol_ethertype - computed: true, optional: false, required: false
  public get eaPolEthertype() {
    return this.getStringAttribute('ea_pol_ethertype');
  }

  // ea_pol_mac_address - computed: true, optional: false, required: false
  public get eaPolMacAddress() {
    return this.getStringAttribute('ea_pol_mac_address');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataIntersightFabricMacSecPolicyResultsMacSecEaPolList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsMacSecEaPolOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsMacSecEaPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsOrganization {
}

export function dataIntersightFabricMacSecPolicyResultsOrganizationToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsOrganizationToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsOrganizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsOrganization | undefined) {
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

export class DataIntersightFabricMacSecPolicyResultsOrganizationList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsOrganizationOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsOrganizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsParent {
}

export function dataIntersightFabricMacSecPolicyResultsParentToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsParentToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsParent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsParent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsParent | undefined) {
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

export class DataIntersightFabricMacSecPolicyResultsParentList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsParentOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsPermissionResources {
}

export function dataIntersightFabricMacSecPolicyResultsPermissionResourcesToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsPermissionResourcesToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsPermissionResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsPermissionResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsPermissionResources | undefined) {
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

export class DataIntersightFabricMacSecPolicyResultsPermissionResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsPermissionResourcesOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeys {
}

export function dataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeysToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeysToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeys | undefined) {
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

  // cryptographic_algorithm - computed: true, optional: false, required: false
  public get cryptographicAlgorithm() {
    return this.getStringAttribute('cryptographic_algorithm');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_octet_string_set - computed: true, optional: false, required: false
  public get isOctetStringSet() {
    return this.getBooleanAttribute('is_octet_string_set');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // octet_string - computed: true, optional: false, required: false
  public get octetString() {
    return this.getStringAttribute('octet_string');
  }

  // send_lifetime_duration - computed: true, optional: false, required: false
  public get sendLifetimeDuration() {
    return this.getNumberAttribute('send_lifetime_duration');
  }

  // send_lifetime_end_time - computed: true, optional: false, required: false
  public get sendLifetimeEndTime() {
    return this.getStringAttribute('send_lifetime_end_time');
  }

  // send_lifetime_infinite - computed: true, optional: false, required: false
  public get sendLifetimeInfinite() {
    return this.getBooleanAttribute('send_lifetime_infinite');
  }

  // send_lifetime_start_time - computed: true, optional: false, required: false
  public get sendLifetimeStartTime() {
    return this.getStringAttribute('send_lifetime_start_time');
  }

  // send_lifetime_time_zone - computed: true, optional: false, required: false
  public get sendLifetimeTimeZone() {
    return this.getStringAttribute('send_lifetime_time_zone');
  }

  // send_lifetime_unlimited - computed: true, optional: false, required: false
  public get sendLifetimeUnlimited() {
    return this.getBooleanAttribute('send_lifetime_unlimited');
  }
}

export class DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeysList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeysOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsPrimaryKeyChain {
}

export function dataIntersightFabricMacSecPolicyResultsPrimaryKeyChainToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsPrimaryKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsPrimaryKeyChainToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsPrimaryKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsPrimaryKeyChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsPrimaryKeyChain | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // sec_keys - computed: true, optional: false, required: false
  private _secKeys = new DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainSecKeysList(this, "sec_keys", false);
  public get secKeys() {
    return this._secKeys;
  }
}

export class DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitions {
}

export function dataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitionsToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitions | undefined) {
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

export class DataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitionsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitionsOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsTagsDefinition {
}

export function dataIntersightFabricMacSecPolicyResultsTagsDefinitionToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsTagsDefinitionToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsTagsDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsTagsDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsTagsDefinition | undefined) {
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

export class DataIntersightFabricMacSecPolicyResultsTagsDefinitionList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsTagsDefinitionOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsTags {
}

export function dataIntersightFabricMacSecPolicyResultsTagsToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsTagsToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsTags | undefined) {
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
  private _ancestorDefinitions = new DataIntersightFabricMacSecPolicyResultsTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }

  // definition - computed: true, optional: false, required: false
  private _definition = new DataIntersightFabricMacSecPolicyResultsTagsDefinitionList(this, "definition", false);
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

export class DataIntersightFabricMacSecPolicyResultsTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsTagsOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsVersionContextInterestedMos {
}

export function dataIntersightFabricMacSecPolicyResultsVersionContextInterestedMosToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsVersionContextInterestedMosToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsVersionContextInterestedMos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsVersionContextInterestedMos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsVersionContextInterestedMos | undefined) {
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

export class DataIntersightFabricMacSecPolicyResultsVersionContextInterestedMosList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsVersionContextInterestedMosOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsVersionContextRefMo {
}

export function dataIntersightFabricMacSecPolicyResultsVersionContextRefMoToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsVersionContextRefMoToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsVersionContextRefMo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsVersionContextRefMo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsVersionContextRefMo | undefined) {
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

export class DataIntersightFabricMacSecPolicyResultsVersionContextRefMoList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsVersionContextRefMoOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResultsVersionContext {
}

export function dataIntersightFabricMacSecPolicyResultsVersionContextToTerraform(struct?: DataIntersightFabricMacSecPolicyResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsVersionContextToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResultsVersionContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResultsVersionContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResultsVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightFabricMacSecPolicyResultsVersionContextInterestedMosList(this, "interested_mos", false);
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
  private _refMo = new DataIntersightFabricMacSecPolicyResultsVersionContextRefMoList(this, "ref_mo", false);
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

export class DataIntersightFabricMacSecPolicyResultsVersionContextList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsVersionContextOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyResults {
}

export function dataIntersightFabricMacSecPolicyResultsToTerraform(struct?: DataIntersightFabricMacSecPolicyResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIntersightFabricMacSecPolicyResultsToHclTerraform(struct?: DataIntersightFabricMacSecPolicyResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIntersightFabricMacSecPolicyResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyResults | undefined) {
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
  private _ancestors = new DataIntersightFabricMacSecPolicyResultsAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }

  // cipher_suite - computed: true, optional: false, required: false
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }

  // class_id - computed: true, optional: false, required: false
  public get classId() {
    return this.getStringAttribute('class_id');
  }

  // confidentiality_offset - computed: true, optional: false, required: false
  public get confidentialityOffset() {
    return this.getStringAttribute('confidentiality_offset');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // domain_group_moid - computed: true, optional: false, required: false
  public get domainGroupMoid() {
    return this.getStringAttribute('domain_group_moid');
  }

  // fallback_key_chain - computed: true, optional: false, required: false
  private _fallbackKeyChain = new DataIntersightFabricMacSecPolicyResultsFallbackKeyChainList(this, "fallback_key_chain", false);
  public get fallbackKeyChain() {
    return this._fallbackKeyChain;
  }

  // include_icv_indicator - computed: true, optional: false, required: false
  public get includeIcvIndicator() {
    return this.getBooleanAttribute('include_icv_indicator');
  }

  // key_server_priority - computed: true, optional: false, required: false
  public get keyServerPriority() {
    return this.getNumberAttribute('key_server_priority');
  }

  // mac_sec_ea_pol - computed: true, optional: false, required: false
  private _macSecEaPol = new DataIntersightFabricMacSecPolicyResultsMacSecEaPolList(this, "mac_sec_ea_pol", false);
  public get macSecEaPol() {
    return this._macSecEaPol;
  }

  // mod_time - computed: true, optional: false, required: false
  public get modTime() {
    return this.getStringAttribute('mod_time');
  }

  // moid - computed: true, optional: false, required: false
  public get moid() {
    return this.getStringAttribute('moid');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }

  // organization - computed: true, optional: false, required: false
  private _organization = new DataIntersightFabricMacSecPolicyResultsOrganizationList(this, "organization", false);
  public get organization() {
    return this._organization;
  }

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // parent - computed: true, optional: false, required: false
  private _parent = new DataIntersightFabricMacSecPolicyResultsParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }

  // permission_resources - computed: true, optional: false, required: false
  private _permissionResources = new DataIntersightFabricMacSecPolicyResultsPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }

  // primary_key_chain - computed: true, optional: false, required: false
  private _primaryKeyChain = new DataIntersightFabricMacSecPolicyResultsPrimaryKeyChainList(this, "primary_key_chain", false);
  public get primaryKeyChain() {
    return this._primaryKeyChain;
  }

  // replay_window_size - computed: true, optional: false, required: false
  public get replayWindowSize() {
    return this.getNumberAttribute('replay_window_size');
  }

  // sak_expiry_time - computed: true, optional: false, required: false
  public get sakExpiryTime() {
    return this.getNumberAttribute('sak_expiry_time');
  }

  // security_policy - computed: true, optional: false, required: false
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }

  // shared_scope - computed: true, optional: false, required: false
  public get sharedScope() {
    return this.getStringAttribute('shared_scope');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataIntersightFabricMacSecPolicyResultsTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }

  // version_context - computed: true, optional: false, required: false
  private _versionContext = new DataIntersightFabricMacSecPolicyResultsVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }
}

export class DataIntersightFabricMacSecPolicyResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataIntersightFabricMacSecPolicyResultsOutputReference {
    return new DataIntersightFabricMacSecPolicyResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#moid DataIntersightFabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#selector DataIntersightFabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFabricMacSecPolicyAncestorsToTerraform(struct?: DataIntersightFabricMacSecPolicyAncestors | cdktf.IResolvable): any {
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


export function dataIntersightFabricMacSecPolicyAncestorsToHclTerraform(struct?: DataIntersightFabricMacSecPolicyAncestors | cdktf.IResolvable): any {
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

export class DataIntersightFabricMacSecPolicyAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyAncestors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightFabricMacSecPolicyAncestors | cdktf.IResolvable | undefined) {
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

export class DataIntersightFabricMacSecPolicyAncestorsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFabricMacSecPolicyAncestors[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFabricMacSecPolicyAncestorsOutputReference {
    return new DataIntersightFabricMacSecPolicyAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The cryptographic algorithm that employs the cipher-based message authentication code (CMAC) mode of operation with advanced encryption standard (AES).
  * * `AES_256_CMAC` - Uses the AES (Advanced Encryption Standard) algorithm with a 256-bit key to generate a CMAC.
  * * `AES_128_CMAC` - Uses the AES (Advanced Encryption Standard) algorithm with a 128-bit key to generate a CMAC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#cryptographic_algorithm DataIntersightFabricMacSecPolicy#cryptographic_algorithm}
  */
  readonly cryptographicAlgorithm?: string;
  /**
  * Must have an even number of hexadecimal characters (including 0-9 and A-F, only) with a length between 2 and 64 characters. For example, "10", "2000", "ABCD1234".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#id DataIntersightFabricMacSecPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether the value of the 'octetString' property has been set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#is_octet_string_set DataIntersightFabricMacSecPolicy#is_octet_string_set}
  */
  readonly isOctetStringSet?: boolean | cdktf.IResolvable;
  /**
  * The type of encryption used for the specified key.
  * * `Type-0` - No encryption for the specified octetString.
  * * `Type-6` - Proprietary advanced encryption standard for the specified octetString.
  * * `Type-7` - Proprietary insecure encryption for the specified octetString.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#key_type DataIntersightFabricMacSecPolicy#key_type}
  */
  readonly keyType?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * The key octet string is a shared secret used in cryptographic operations. The valid size and format of the octet string depend on the selected KeyCryptographicAlgorithm and KeyEncryptionType. It should start with the character 'J'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#octet_string DataIntersightFabricMacSecPolicy#octet_string}
  */
  readonly octetString?: string;
  /**
  * The key lifetime duration in seconds after the start time. If a non-zero value is configured for the duration, the end time configuration for the key lifetime is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_duration DataIntersightFabricMacSecPolicy#send_lifetime_duration}
  */
  readonly sendLifetimeDuration?: number;
  /**
  * The time of day and date when the key becomes inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_end_time DataIntersightFabricMacSecPolicy#send_lifetime_end_time}
  */
  readonly sendLifetimeEndTime?: string;
  /**
  * Indicates that the key remains active indefinitely after the specified start time. When this parameter is set, the end time and duration configurations for the key lifetime are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_infinite DataIntersightFabricMacSecPolicy#send_lifetime_infinite}
  */
  readonly sendLifetimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * The time of day and date when the key becomes active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_start_time DataIntersightFabricMacSecPolicy#send_lifetime_start_time}
  */
  readonly sendLifetimeStartTime?: string;
  /**
  * The time zone used for key lifetime configurations.
  * * `UTC` - The Universal Time (UTC) for key lifetime configurations.
  * * `Local` - The local time zone of the device for key lifetime configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_time_zone DataIntersightFabricMacSecPolicy#send_lifetime_time_zone}
  */
  readonly sendLifetimeTimeZone?: string;
  /**
  * Indicates that the key is always active. When this parameter is set, all other key lifetime configurations are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_unlimited DataIntersightFabricMacSecPolicy#send_lifetime_unlimited}
  */
  readonly sendLifetimeUnlimited?: boolean | cdktf.IResolvable;
}

export function dataIntersightFabricMacSecPolicyFallbackKeyChainSecKeysToTerraform(struct?: DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    cryptographic_algorithm: cdktf.stringToTerraform(struct!.cryptographicAlgorithm),
    id: cdktf.stringToTerraform(struct!.id),
    is_octet_string_set: cdktf.booleanToTerraform(struct!.isOctetStringSet),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    octet_string: cdktf.stringToTerraform(struct!.octetString),
    send_lifetime_duration: cdktf.numberToTerraform(struct!.sendLifetimeDuration),
    send_lifetime_end_time: cdktf.stringToTerraform(struct!.sendLifetimeEndTime),
    send_lifetime_infinite: cdktf.booleanToTerraform(struct!.sendLifetimeInfinite),
    send_lifetime_start_time: cdktf.stringToTerraform(struct!.sendLifetimeStartTime),
    send_lifetime_time_zone: cdktf.stringToTerraform(struct!.sendLifetimeTimeZone),
    send_lifetime_unlimited: cdktf.booleanToTerraform(struct!.sendLifetimeUnlimited),
  }
}


export function dataIntersightFabricMacSecPolicyFallbackKeyChainSecKeysToHclTerraform(struct?: DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeys | cdktf.IResolvable): any {
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
    cryptographic_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.cryptographicAlgorithm),
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
    is_octet_string_set: {
      value: cdktf.booleanToHclTerraform(struct!.isOctetStringSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
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
    octet_string: {
      value: cdktf.stringToHclTerraform(struct!.octetString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_duration: {
      value: cdktf.numberToHclTerraform(struct!.sendLifetimeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_lifetime_end_time: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_infinite: {
      value: cdktf.booleanToHclTerraform(struct!.sendLifetimeInfinite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_lifetime_start_time: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_unlimited: {
      value: cdktf.booleanToHclTerraform(struct!.sendLifetimeUnlimited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeys | cdktf.IResolvable | undefined {
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
    if (this._cryptographicAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptographicAlgorithm = this._cryptographicAlgorithm;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isOctetStringSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOctetStringSet = this._isOctetStringSet;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._octetString !== undefined) {
      hasAnyValues = true;
      internalValueResult.octetString = this._octetString;
    }
    if (this._sendLifetimeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeDuration = this._sendLifetimeDuration;
    }
    if (this._sendLifetimeEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeEndTime = this._sendLifetimeEndTime;
    }
    if (this._sendLifetimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeInfinite = this._sendLifetimeInfinite;
    }
    if (this._sendLifetimeStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeStartTime = this._sendLifetimeStartTime;
    }
    if (this._sendLifetimeTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeTimeZone = this._sendLifetimeTimeZone;
    }
    if (this._sendLifetimeUnlimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeUnlimited = this._sendLifetimeUnlimited;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._cryptographicAlgorithm = undefined;
      this._id = undefined;
      this._isOctetStringSet = undefined;
      this._keyType = undefined;
      this._objectType = undefined;
      this._octetString = undefined;
      this._sendLifetimeDuration = undefined;
      this._sendLifetimeEndTime = undefined;
      this._sendLifetimeInfinite = undefined;
      this._sendLifetimeStartTime = undefined;
      this._sendLifetimeTimeZone = undefined;
      this._sendLifetimeUnlimited = undefined;
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
      this._cryptographicAlgorithm = value.cryptographicAlgorithm;
      this._id = value.id;
      this._isOctetStringSet = value.isOctetStringSet;
      this._keyType = value.keyType;
      this._objectType = value.objectType;
      this._octetString = value.octetString;
      this._sendLifetimeDuration = value.sendLifetimeDuration;
      this._sendLifetimeEndTime = value.sendLifetimeEndTime;
      this._sendLifetimeInfinite = value.sendLifetimeInfinite;
      this._sendLifetimeStartTime = value.sendLifetimeStartTime;
      this._sendLifetimeTimeZone = value.sendLifetimeTimeZone;
      this._sendLifetimeUnlimited = value.sendLifetimeUnlimited;
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

  // cryptographic_algorithm - computed: false, optional: true, required: false
  private _cryptographicAlgorithm?: string; 
  public get cryptographicAlgorithm() {
    return this.getStringAttribute('cryptographic_algorithm');
  }
  public set cryptographicAlgorithm(value: string) {
    this._cryptographicAlgorithm = value;
  }
  public resetCryptographicAlgorithm() {
    this._cryptographicAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptographicAlgorithmInput() {
    return this._cryptographicAlgorithm;
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

  // is_octet_string_set - computed: false, optional: true, required: false
  private _isOctetStringSet?: boolean | cdktf.IResolvable; 
  public get isOctetStringSet() {
    return this.getBooleanAttribute('is_octet_string_set');
  }
  public set isOctetStringSet(value: boolean | cdktf.IResolvable) {
    this._isOctetStringSet = value;
  }
  public resetIsOctetStringSet() {
    this._isOctetStringSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOctetStringSetInput() {
    return this._isOctetStringSet;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
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

  // octet_string - computed: false, optional: true, required: false
  private _octetString?: string; 
  public get octetString() {
    return this.getStringAttribute('octet_string');
  }
  public set octetString(value: string) {
    this._octetString = value;
  }
  public resetOctetString() {
    this._octetString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get octetStringInput() {
    return this._octetString;
  }

  // send_lifetime_duration - computed: false, optional: true, required: false
  private _sendLifetimeDuration?: number; 
  public get sendLifetimeDuration() {
    return this.getNumberAttribute('send_lifetime_duration');
  }
  public set sendLifetimeDuration(value: number) {
    this._sendLifetimeDuration = value;
  }
  public resetSendLifetimeDuration() {
    this._sendLifetimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeDurationInput() {
    return this._sendLifetimeDuration;
  }

  // send_lifetime_end_time - computed: false, optional: true, required: false
  private _sendLifetimeEndTime?: string; 
  public get sendLifetimeEndTime() {
    return this.getStringAttribute('send_lifetime_end_time');
  }
  public set sendLifetimeEndTime(value: string) {
    this._sendLifetimeEndTime = value;
  }
  public resetSendLifetimeEndTime() {
    this._sendLifetimeEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeEndTimeInput() {
    return this._sendLifetimeEndTime;
  }

  // send_lifetime_infinite - computed: false, optional: true, required: false
  private _sendLifetimeInfinite?: boolean | cdktf.IResolvable; 
  public get sendLifetimeInfinite() {
    return this.getBooleanAttribute('send_lifetime_infinite');
  }
  public set sendLifetimeInfinite(value: boolean | cdktf.IResolvable) {
    this._sendLifetimeInfinite = value;
  }
  public resetSendLifetimeInfinite() {
    this._sendLifetimeInfinite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeInfiniteInput() {
    return this._sendLifetimeInfinite;
  }

  // send_lifetime_start_time - computed: false, optional: true, required: false
  private _sendLifetimeStartTime?: string; 
  public get sendLifetimeStartTime() {
    return this.getStringAttribute('send_lifetime_start_time');
  }
  public set sendLifetimeStartTime(value: string) {
    this._sendLifetimeStartTime = value;
  }
  public resetSendLifetimeStartTime() {
    this._sendLifetimeStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeStartTimeInput() {
    return this._sendLifetimeStartTime;
  }

  // send_lifetime_time_zone - computed: false, optional: true, required: false
  private _sendLifetimeTimeZone?: string; 
  public get sendLifetimeTimeZone() {
    return this.getStringAttribute('send_lifetime_time_zone');
  }
  public set sendLifetimeTimeZone(value: string) {
    this._sendLifetimeTimeZone = value;
  }
  public resetSendLifetimeTimeZone() {
    this._sendLifetimeTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeTimeZoneInput() {
    return this._sendLifetimeTimeZone;
  }

  // send_lifetime_unlimited - computed: false, optional: true, required: false
  private _sendLifetimeUnlimited?: boolean | cdktf.IResolvable; 
  public get sendLifetimeUnlimited() {
    return this.getBooleanAttribute('send_lifetime_unlimited');
  }
  public set sendLifetimeUnlimited(value: boolean | cdktf.IResolvable) {
    this._sendLifetimeUnlimited = value;
  }
  public resetSendLifetimeUnlimited() {
    this._sendLifetimeUnlimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeUnlimitedInput() {
    return this._sendLifetimeUnlimited;
  }
}

export class DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeysList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeys[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeysOutputReference {
    return new DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyFallbackKeyChain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Must be a maximum of 63 characters, without spacing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#name DataIntersightFabricMacSecPolicy#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * sec_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#sec_keys DataIntersightFabricMacSecPolicy#sec_keys}
  */
  readonly secKeys?: DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeys[] | cdktf.IResolvable;
}

export function dataIntersightFabricMacSecPolicyFallbackKeyChainToTerraform(struct?: DataIntersightFabricMacSecPolicyFallbackKeyChainOutputReference | DataIntersightFabricMacSecPolicyFallbackKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    sec_keys: cdktf.listMapper(dataIntersightFabricMacSecPolicyFallbackKeyChainSecKeysToTerraform, true)(struct!.secKeys),
  }
}


export function dataIntersightFabricMacSecPolicyFallbackKeyChainToHclTerraform(struct?: DataIntersightFabricMacSecPolicyFallbackKeyChainOutputReference | DataIntersightFabricMacSecPolicyFallbackKeyChain): any {
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
    sec_keys: {
      value: cdktf.listMapperHcl(dataIntersightFabricMacSecPolicyFallbackKeyChainSecKeysToHclTerraform, true)(struct!.secKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFabricMacSecPolicyFallbackKeyChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFabricMacSecPolicyFallbackKeyChain | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._secKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secKeys = this._secKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyFallbackKeyChain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._secKeys.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._name = value.name;
      this._objectType = value.objectType;
      this._secKeys.internalValue = value.secKeys;
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

  // sec_keys - computed: false, optional: true, required: false
  private _secKeys = new DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeysList(this, "sec_keys", false);
  public get secKeys() {
    return this._secKeys;
  }
  public putSecKeys(value: DataIntersightFabricMacSecPolicyFallbackKeyChainSecKeys[] | cdktf.IResolvable) {
    this._secKeys.internalValue = value;
  }
  public resetSecKeys() {
    this._secKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secKeysInput() {
    return this._secKeys.internalValue;
  }
}
export interface DataIntersightFabricMacSecPolicyMacSecEaPol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Ethertype to use in extensible authentication protocol over LAN (EAPoL) frames for MACsec key agreement (MKA) protocol data units (PDUs). The range is between 0x600 - 0xffff.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#ea_pol_ethertype DataIntersightFabricMacSecPolicy#ea_pol_ethertype}
  */
  readonly eaPolEthertype?: string;
  /**
  * MAC address to use in extensible authentication protocol over LAN (EAPoL) for MACsec key agreement (MKA) protocol data units (PDUs). EAPol mac address should not be equal to all-zero (0000.0000.0000).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#ea_pol_mac_address DataIntersightFabricMacSecPolicy#ea_pol_mac_address}
  */
  readonly eaPolMacAddress?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
}

export function dataIntersightFabricMacSecPolicyMacSecEaPolToTerraform(struct?: DataIntersightFabricMacSecPolicyMacSecEaPolOutputReference | DataIntersightFabricMacSecPolicyMacSecEaPol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    ea_pol_ethertype: cdktf.stringToTerraform(struct!.eaPolEthertype),
    ea_pol_mac_address: cdktf.stringToTerraform(struct!.eaPolMacAddress),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function dataIntersightFabricMacSecPolicyMacSecEaPolToHclTerraform(struct?: DataIntersightFabricMacSecPolicyMacSecEaPolOutputReference | DataIntersightFabricMacSecPolicyMacSecEaPol): any {
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
    ea_pol_ethertype: {
      value: cdktf.stringToHclTerraform(struct!.eaPolEthertype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ea_pol_mac_address: {
      value: cdktf.stringToHclTerraform(struct!.eaPolMacAddress),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFabricMacSecPolicyMacSecEaPolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFabricMacSecPolicyMacSecEaPol | undefined {
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
    if (this._eaPolEthertype !== undefined) {
      hasAnyValues = true;
      internalValueResult.eaPolEthertype = this._eaPolEthertype;
    }
    if (this._eaPolMacAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.eaPolMacAddress = this._eaPolMacAddress;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyMacSecEaPol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._eaPolEthertype = undefined;
      this._eaPolMacAddress = undefined;
      this._objectType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._eaPolEthertype = value.eaPolEthertype;
      this._eaPolMacAddress = value.eaPolMacAddress;
      this._objectType = value.objectType;
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

  // ea_pol_ethertype - computed: false, optional: true, required: false
  private _eaPolEthertype?: string; 
  public get eaPolEthertype() {
    return this.getStringAttribute('ea_pol_ethertype');
  }
  public set eaPolEthertype(value: string) {
    this._eaPolEthertype = value;
  }
  public resetEaPolEthertype() {
    this._eaPolEthertype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eaPolEthertypeInput() {
    return this._eaPolEthertype;
  }

  // ea_pol_mac_address - computed: false, optional: true, required: false
  private _eaPolMacAddress?: string; 
  public get eaPolMacAddress() {
    return this.getStringAttribute('ea_pol_mac_address');
  }
  public set eaPolMacAddress(value: string) {
    this._eaPolMacAddress = value;
  }
  public resetEaPolMacAddress() {
    this._eaPolMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eaPolMacAddressInput() {
    return this._eaPolMacAddress;
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
}
export interface DataIntersightFabricMacSecPolicyOrganization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#moid DataIntersightFabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#selector DataIntersightFabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFabricMacSecPolicyOrganizationToTerraform(struct?: DataIntersightFabricMacSecPolicyOrganizationOutputReference | DataIntersightFabricMacSecPolicyOrganization): any {
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


export function dataIntersightFabricMacSecPolicyOrganizationToHclTerraform(struct?: DataIntersightFabricMacSecPolicyOrganizationOutputReference | DataIntersightFabricMacSecPolicyOrganization): any {
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

export class DataIntersightFabricMacSecPolicyOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFabricMacSecPolicyOrganization | undefined {
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

  public set internalValue(value: DataIntersightFabricMacSecPolicyOrganization | undefined) {
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
export interface DataIntersightFabricMacSecPolicyParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#moid DataIntersightFabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#selector DataIntersightFabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFabricMacSecPolicyParentToTerraform(struct?: DataIntersightFabricMacSecPolicyParentOutputReference | DataIntersightFabricMacSecPolicyParent): any {
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


export function dataIntersightFabricMacSecPolicyParentToHclTerraform(struct?: DataIntersightFabricMacSecPolicyParentOutputReference | DataIntersightFabricMacSecPolicyParent): any {
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

export class DataIntersightFabricMacSecPolicyParentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFabricMacSecPolicyParent | undefined {
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

  public set internalValue(value: DataIntersightFabricMacSecPolicyParent | undefined) {
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
export interface DataIntersightFabricMacSecPolicyPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#moid DataIntersightFabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#selector DataIntersightFabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFabricMacSecPolicyPermissionResourcesToTerraform(struct?: DataIntersightFabricMacSecPolicyPermissionResources | cdktf.IResolvable): any {
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


export function dataIntersightFabricMacSecPolicyPermissionResourcesToHclTerraform(struct?: DataIntersightFabricMacSecPolicyPermissionResources | cdktf.IResolvable): any {
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

export class DataIntersightFabricMacSecPolicyPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyPermissionResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightFabricMacSecPolicyPermissionResources | cdktf.IResolvable | undefined) {
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

export class DataIntersightFabricMacSecPolicyPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFabricMacSecPolicyPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFabricMacSecPolicyPermissionResourcesOutputReference {
    return new DataIntersightFabricMacSecPolicyPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The cryptographic algorithm that employs the cipher-based message authentication code (CMAC) mode of operation with advanced encryption standard (AES).
  * * `AES_256_CMAC` - Uses the AES (Advanced Encryption Standard) algorithm with a 256-bit key to generate a CMAC.
  * * `AES_128_CMAC` - Uses the AES (Advanced Encryption Standard) algorithm with a 128-bit key to generate a CMAC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#cryptographic_algorithm DataIntersightFabricMacSecPolicy#cryptographic_algorithm}
  */
  readonly cryptographicAlgorithm?: string;
  /**
  * Must have an even number of hexadecimal characters (including 0-9 and A-F, only) with a length between 2 and 64 characters. For example, "10", "2000", "ABCD1234".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#id DataIntersightFabricMacSecPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether the value of the 'octetString' property has been set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#is_octet_string_set DataIntersightFabricMacSecPolicy#is_octet_string_set}
  */
  readonly isOctetStringSet?: boolean | cdktf.IResolvable;
  /**
  * The type of encryption used for the specified key.
  * * `Type-0` - No encryption for the specified octetString.
  * * `Type-6` - Proprietary advanced encryption standard for the specified octetString.
  * * `Type-7` - Proprietary insecure encryption for the specified octetString.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#key_type DataIntersightFabricMacSecPolicy#key_type}
  */
  readonly keyType?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * The key octet string is a shared secret used in cryptographic operations. The valid size and format of the octet string depend on the selected KeyCryptographicAlgorithm and KeyEncryptionType. It should start with the character 'J'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#octet_string DataIntersightFabricMacSecPolicy#octet_string}
  */
  readonly octetString?: string;
  /**
  * The key lifetime duration in seconds after the start time. If a non-zero value is configured for the duration, the end time configuration for the key lifetime is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_duration DataIntersightFabricMacSecPolicy#send_lifetime_duration}
  */
  readonly sendLifetimeDuration?: number;
  /**
  * The time of day and date when the key becomes inactive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_end_time DataIntersightFabricMacSecPolicy#send_lifetime_end_time}
  */
  readonly sendLifetimeEndTime?: string;
  /**
  * Indicates that the key remains active indefinitely after the specified start time. When this parameter is set, the end time and duration configurations for the key lifetime are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_infinite DataIntersightFabricMacSecPolicy#send_lifetime_infinite}
  */
  readonly sendLifetimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * The time of day and date when the key becomes active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_start_time DataIntersightFabricMacSecPolicy#send_lifetime_start_time}
  */
  readonly sendLifetimeStartTime?: string;
  /**
  * The time zone used for key lifetime configurations.
  * * `UTC` - The Universal Time (UTC) for key lifetime configurations.
  * * `Local` - The local time zone of the device for key lifetime configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_time_zone DataIntersightFabricMacSecPolicy#send_lifetime_time_zone}
  */
  readonly sendLifetimeTimeZone?: string;
  /**
  * Indicates that the key is always active. When this parameter is set, all other key lifetime configurations are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#send_lifetime_unlimited DataIntersightFabricMacSecPolicy#send_lifetime_unlimited}
  */
  readonly sendLifetimeUnlimited?: boolean | cdktf.IResolvable;
}

export function dataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeysToTerraform(struct?: DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    cryptographic_algorithm: cdktf.stringToTerraform(struct!.cryptographicAlgorithm),
    id: cdktf.stringToTerraform(struct!.id),
    is_octet_string_set: cdktf.booleanToTerraform(struct!.isOctetStringSet),
    key_type: cdktf.stringToTerraform(struct!.keyType),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    octet_string: cdktf.stringToTerraform(struct!.octetString),
    send_lifetime_duration: cdktf.numberToTerraform(struct!.sendLifetimeDuration),
    send_lifetime_end_time: cdktf.stringToTerraform(struct!.sendLifetimeEndTime),
    send_lifetime_infinite: cdktf.booleanToTerraform(struct!.sendLifetimeInfinite),
    send_lifetime_start_time: cdktf.stringToTerraform(struct!.sendLifetimeStartTime),
    send_lifetime_time_zone: cdktf.stringToTerraform(struct!.sendLifetimeTimeZone),
    send_lifetime_unlimited: cdktf.booleanToTerraform(struct!.sendLifetimeUnlimited),
  }
}


export function dataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeysToHclTerraform(struct?: DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeys | cdktf.IResolvable): any {
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
    cryptographic_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.cryptographicAlgorithm),
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
    is_octet_string_set: {
      value: cdktf.booleanToHclTerraform(struct!.isOctetStringSet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_type: {
      value: cdktf.stringToHclTerraform(struct!.keyType),
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
    octet_string: {
      value: cdktf.stringToHclTerraform(struct!.octetString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_duration: {
      value: cdktf.numberToHclTerraform(struct!.sendLifetimeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_lifetime_end_time: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_infinite: {
      value: cdktf.booleanToHclTerraform(struct!.sendLifetimeInfinite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_lifetime_start_time: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_unlimited: {
      value: cdktf.booleanToHclTerraform(struct!.sendLifetimeUnlimited),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeys | cdktf.IResolvable | undefined {
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
    if (this._cryptographicAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptographicAlgorithm = this._cryptographicAlgorithm;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._isOctetStringSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOctetStringSet = this._isOctetStringSet;
    }
    if (this._keyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyType = this._keyType;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._octetString !== undefined) {
      hasAnyValues = true;
      internalValueResult.octetString = this._octetString;
    }
    if (this._sendLifetimeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeDuration = this._sendLifetimeDuration;
    }
    if (this._sendLifetimeEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeEndTime = this._sendLifetimeEndTime;
    }
    if (this._sendLifetimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeInfinite = this._sendLifetimeInfinite;
    }
    if (this._sendLifetimeStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeStartTime = this._sendLifetimeStartTime;
    }
    if (this._sendLifetimeTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeTimeZone = this._sendLifetimeTimeZone;
    }
    if (this._sendLifetimeUnlimited !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeUnlimited = this._sendLifetimeUnlimited;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._cryptographicAlgorithm = undefined;
      this._id = undefined;
      this._isOctetStringSet = undefined;
      this._keyType = undefined;
      this._objectType = undefined;
      this._octetString = undefined;
      this._sendLifetimeDuration = undefined;
      this._sendLifetimeEndTime = undefined;
      this._sendLifetimeInfinite = undefined;
      this._sendLifetimeStartTime = undefined;
      this._sendLifetimeTimeZone = undefined;
      this._sendLifetimeUnlimited = undefined;
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
      this._cryptographicAlgorithm = value.cryptographicAlgorithm;
      this._id = value.id;
      this._isOctetStringSet = value.isOctetStringSet;
      this._keyType = value.keyType;
      this._objectType = value.objectType;
      this._octetString = value.octetString;
      this._sendLifetimeDuration = value.sendLifetimeDuration;
      this._sendLifetimeEndTime = value.sendLifetimeEndTime;
      this._sendLifetimeInfinite = value.sendLifetimeInfinite;
      this._sendLifetimeStartTime = value.sendLifetimeStartTime;
      this._sendLifetimeTimeZone = value.sendLifetimeTimeZone;
      this._sendLifetimeUnlimited = value.sendLifetimeUnlimited;
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

  // cryptographic_algorithm - computed: false, optional: true, required: false
  private _cryptographicAlgorithm?: string; 
  public get cryptographicAlgorithm() {
    return this.getStringAttribute('cryptographic_algorithm');
  }
  public set cryptographicAlgorithm(value: string) {
    this._cryptographicAlgorithm = value;
  }
  public resetCryptographicAlgorithm() {
    this._cryptographicAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptographicAlgorithmInput() {
    return this._cryptographicAlgorithm;
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

  // is_octet_string_set - computed: false, optional: true, required: false
  private _isOctetStringSet?: boolean | cdktf.IResolvable; 
  public get isOctetStringSet() {
    return this.getBooleanAttribute('is_octet_string_set');
  }
  public set isOctetStringSet(value: boolean | cdktf.IResolvable) {
    this._isOctetStringSet = value;
  }
  public resetIsOctetStringSet() {
    this._isOctetStringSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOctetStringSetInput() {
    return this._isOctetStringSet;
  }

  // key_type - computed: false, optional: true, required: false
  private _keyType?: string; 
  public get keyType() {
    return this.getStringAttribute('key_type');
  }
  public set keyType(value: string) {
    this._keyType = value;
  }
  public resetKeyType() {
    this._keyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTypeInput() {
    return this._keyType;
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

  // octet_string - computed: false, optional: true, required: false
  private _octetString?: string; 
  public get octetString() {
    return this.getStringAttribute('octet_string');
  }
  public set octetString(value: string) {
    this._octetString = value;
  }
  public resetOctetString() {
    this._octetString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get octetStringInput() {
    return this._octetString;
  }

  // send_lifetime_duration - computed: false, optional: true, required: false
  private _sendLifetimeDuration?: number; 
  public get sendLifetimeDuration() {
    return this.getNumberAttribute('send_lifetime_duration');
  }
  public set sendLifetimeDuration(value: number) {
    this._sendLifetimeDuration = value;
  }
  public resetSendLifetimeDuration() {
    this._sendLifetimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeDurationInput() {
    return this._sendLifetimeDuration;
  }

  // send_lifetime_end_time - computed: false, optional: true, required: false
  private _sendLifetimeEndTime?: string; 
  public get sendLifetimeEndTime() {
    return this.getStringAttribute('send_lifetime_end_time');
  }
  public set sendLifetimeEndTime(value: string) {
    this._sendLifetimeEndTime = value;
  }
  public resetSendLifetimeEndTime() {
    this._sendLifetimeEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeEndTimeInput() {
    return this._sendLifetimeEndTime;
  }

  // send_lifetime_infinite - computed: false, optional: true, required: false
  private _sendLifetimeInfinite?: boolean | cdktf.IResolvable; 
  public get sendLifetimeInfinite() {
    return this.getBooleanAttribute('send_lifetime_infinite');
  }
  public set sendLifetimeInfinite(value: boolean | cdktf.IResolvable) {
    this._sendLifetimeInfinite = value;
  }
  public resetSendLifetimeInfinite() {
    this._sendLifetimeInfinite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeInfiniteInput() {
    return this._sendLifetimeInfinite;
  }

  // send_lifetime_start_time - computed: false, optional: true, required: false
  private _sendLifetimeStartTime?: string; 
  public get sendLifetimeStartTime() {
    return this.getStringAttribute('send_lifetime_start_time');
  }
  public set sendLifetimeStartTime(value: string) {
    this._sendLifetimeStartTime = value;
  }
  public resetSendLifetimeStartTime() {
    this._sendLifetimeStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeStartTimeInput() {
    return this._sendLifetimeStartTime;
  }

  // send_lifetime_time_zone - computed: false, optional: true, required: false
  private _sendLifetimeTimeZone?: string; 
  public get sendLifetimeTimeZone() {
    return this.getStringAttribute('send_lifetime_time_zone');
  }
  public set sendLifetimeTimeZone(value: string) {
    this._sendLifetimeTimeZone = value;
  }
  public resetSendLifetimeTimeZone() {
    this._sendLifetimeTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeTimeZoneInput() {
    return this._sendLifetimeTimeZone;
  }

  // send_lifetime_unlimited - computed: false, optional: true, required: false
  private _sendLifetimeUnlimited?: boolean | cdktf.IResolvable; 
  public get sendLifetimeUnlimited() {
    return this.getBooleanAttribute('send_lifetime_unlimited');
  }
  public set sendLifetimeUnlimited(value: boolean | cdktf.IResolvable) {
    this._sendLifetimeUnlimited = value;
  }
  public resetSendLifetimeUnlimited() {
    this._sendLifetimeUnlimited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeUnlimitedInput() {
    return this._sendLifetimeUnlimited;
  }
}

export class DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeysList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeys[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeysOutputReference {
    return new DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyPrimaryKeyChain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Must be a maximum of 63 characters, without spacing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#name DataIntersightFabricMacSecPolicy#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * sec_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#sec_keys DataIntersightFabricMacSecPolicy#sec_keys}
  */
  readonly secKeys?: DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeys[] | cdktf.IResolvable;
}

export function dataIntersightFabricMacSecPolicyPrimaryKeyChainToTerraform(struct?: DataIntersightFabricMacSecPolicyPrimaryKeyChainOutputReference | DataIntersightFabricMacSecPolicyPrimaryKeyChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    sec_keys: cdktf.listMapper(dataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeysToTerraform, true)(struct!.secKeys),
  }
}


export function dataIntersightFabricMacSecPolicyPrimaryKeyChainToHclTerraform(struct?: DataIntersightFabricMacSecPolicyPrimaryKeyChainOutputReference | DataIntersightFabricMacSecPolicyPrimaryKeyChain): any {
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
    sec_keys: {
      value: cdktf.listMapperHcl(dataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeysToHclTerraform, true)(struct!.secKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFabricMacSecPolicyPrimaryKeyChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFabricMacSecPolicyPrimaryKeyChain | undefined {
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
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._secKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secKeys = this._secKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIntersightFabricMacSecPolicyPrimaryKeyChain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._secKeys.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._classId = value.classId;
      this._name = value.name;
      this._objectType = value.objectType;
      this._secKeys.internalValue = value.secKeys;
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

  // sec_keys - computed: false, optional: true, required: false
  private _secKeys = new DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeysList(this, "sec_keys", false);
  public get secKeys() {
    return this._secKeys;
  }
  public putSecKeys(value: DataIntersightFabricMacSecPolicyPrimaryKeyChainSecKeys[] | cdktf.IResolvable) {
    this._secKeys.internalValue = value;
  }
  public resetSecKeys() {
    this._secKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secKeysInput() {
    return this._secKeys.internalValue;
  }
}
export interface DataIntersightFabricMacSecPolicyTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#moid DataIntersightFabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#selector DataIntersightFabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFabricMacSecPolicyTagsAncestorDefinitionsToTerraform(struct?: DataIntersightFabricMacSecPolicyTagsAncestorDefinitions | cdktf.IResolvable): any {
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


export function dataIntersightFabricMacSecPolicyTagsAncestorDefinitionsToHclTerraform(struct?: DataIntersightFabricMacSecPolicyTagsAncestorDefinitions | cdktf.IResolvable): any {
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

export class DataIntersightFabricMacSecPolicyTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyTagsAncestorDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightFabricMacSecPolicyTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
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

export class DataIntersightFabricMacSecPolicyTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFabricMacSecPolicyTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFabricMacSecPolicyTagsAncestorDefinitionsOutputReference {
    return new DataIntersightFabricMacSecPolicyTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#moid DataIntersightFabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#selector DataIntersightFabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFabricMacSecPolicyTagsDefinitionToTerraform(struct?: DataIntersightFabricMacSecPolicyTagsDefinitionOutputReference | DataIntersightFabricMacSecPolicyTagsDefinition): any {
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


export function dataIntersightFabricMacSecPolicyTagsDefinitionToHclTerraform(struct?: DataIntersightFabricMacSecPolicyTagsDefinitionOutputReference | DataIntersightFabricMacSecPolicyTagsDefinition): any {
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

export class DataIntersightFabricMacSecPolicyTagsDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFabricMacSecPolicyTagsDefinition | undefined {
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

  public set internalValue(value: DataIntersightFabricMacSecPolicyTagsDefinition | undefined) {
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
export interface DataIntersightFabricMacSecPolicyTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The string representation of a tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#key DataIntersightFabricMacSecPolicy#key}
  */
  readonly key?: string;
  /**
  * Propagated is a boolean flag that indicates whether the tag is propagated to the related managed objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#propagated DataIntersightFabricMacSecPolicy#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * An enum type that defines the type of tag. Supported values are 'pathtag' and 'keyvalue'.
  * * `KeyValue` - KeyValue type of tag. Key is required for these tags. Value is optional.
  * * `PathTag` - Key contain path information. Value is not present for these tags. The path is created by using the '/' character as a delimiter.For example, if the tag is "A/B/C", then "A" is the parent tag, "B" is the child tag of "A" and "C" is the child tag of "B".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#type DataIntersightFabricMacSecPolicy#type}
  */
  readonly type?: string;
  /**
  * The string representation of a tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#value DataIntersightFabricMacSecPolicy#value}
  */
  readonly value?: string;
  /**
  * ancestor_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#ancestor_definitions DataIntersightFabricMacSecPolicy#ancestor_definitions}
  */
  readonly ancestorDefinitions?: DataIntersightFabricMacSecPolicyTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#definition DataIntersightFabricMacSecPolicy#definition}
  */
  readonly definition?: DataIntersightFabricMacSecPolicyTagsDefinition;
}

export function dataIntersightFabricMacSecPolicyTagsToTerraform(struct?: DataIntersightFabricMacSecPolicyTags | cdktf.IResolvable): any {
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
    ancestor_definitions: cdktf.listMapper(dataIntersightFabricMacSecPolicyTagsAncestorDefinitionsToTerraform, true)(struct!.ancestorDefinitions),
    definition: dataIntersightFabricMacSecPolicyTagsDefinitionToTerraform(struct!.definition),
  }
}


export function dataIntersightFabricMacSecPolicyTagsToHclTerraform(struct?: DataIntersightFabricMacSecPolicyTags | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataIntersightFabricMacSecPolicyTagsAncestorDefinitionsToHclTerraform, true)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightFabricMacSecPolicyTagsAncestorDefinitionsList",
    },
    definition: {
      value: dataIntersightFabricMacSecPolicyTagsDefinitionToHclTerraform(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightFabricMacSecPolicyTagsDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFabricMacSecPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightFabricMacSecPolicyTags | cdktf.IResolvable | undefined) {
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
  private _ancestorDefinitions = new DataIntersightFabricMacSecPolicyTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: DataIntersightFabricMacSecPolicyTagsAncestorDefinitions[] | cdktf.IResolvable) {
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
  private _definition = new DataIntersightFabricMacSecPolicyTagsDefinitionOutputReference(this, "definition");
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: DataIntersightFabricMacSecPolicyTagsDefinition) {
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

export class DataIntersightFabricMacSecPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFabricMacSecPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFabricMacSecPolicyTagsOutputReference {
    return new DataIntersightFabricMacSecPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#moid DataIntersightFabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#selector DataIntersightFabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFabricMacSecPolicyVersionContextInterestedMosToTerraform(struct?: DataIntersightFabricMacSecPolicyVersionContextInterestedMos | cdktf.IResolvable): any {
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


export function dataIntersightFabricMacSecPolicyVersionContextInterestedMosToHclTerraform(struct?: DataIntersightFabricMacSecPolicyVersionContextInterestedMos | cdktf.IResolvable): any {
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

export class DataIntersightFabricMacSecPolicyVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIntersightFabricMacSecPolicyVersionContextInterestedMos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataIntersightFabricMacSecPolicyVersionContextInterestedMos | cdktf.IResolvable | undefined) {
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

export class DataIntersightFabricMacSecPolicyVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : DataIntersightFabricMacSecPolicyVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): DataIntersightFabricMacSecPolicyVersionContextInterestedMosOutputReference {
    return new DataIntersightFabricMacSecPolicyVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIntersightFabricMacSecPolicyVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The Moid of the referenced REST resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#moid DataIntersightFabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * The fully-qualified name of the remote type referred by this relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#selector DataIntersightFabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function dataIntersightFabricMacSecPolicyVersionContextRefMoToTerraform(struct?: DataIntersightFabricMacSecPolicyVersionContextRefMoOutputReference | DataIntersightFabricMacSecPolicyVersionContextRefMo): any {
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


export function dataIntersightFabricMacSecPolicyVersionContextRefMoToHclTerraform(struct?: DataIntersightFabricMacSecPolicyVersionContextRefMoOutputReference | DataIntersightFabricMacSecPolicyVersionContextRefMo): any {
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

export class DataIntersightFabricMacSecPolicyVersionContextRefMoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFabricMacSecPolicyVersionContextRefMo | undefined {
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

  public set internalValue(value: DataIntersightFabricMacSecPolicyVersionContextRefMo | undefined) {
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
export interface DataIntersightFabricMacSecPolicyVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#additional_properties DataIntersightFabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#class_id DataIntersightFabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The flag to indicate if snapshot is marked for deletion or not. If flag is set then snapshot will be removed after the successful deployment of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#marked_for_deletion DataIntersightFabricMacSecPolicy#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * The version of the Managed Object, e.g. an incrementing number or a hash id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#nr_version DataIntersightFabricMacSecPolicy#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#object_type DataIntersightFabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * The time this versioned Managed Object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#timestamp DataIntersightFabricMacSecPolicy#timestamp}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#version_type DataIntersightFabricMacSecPolicy#version_type}
  */
  readonly versionType?: string;
  /**
  * interested_mos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#interested_mos DataIntersightFabricMacSecPolicy#interested_mos}
  */
  readonly interestedMos?: DataIntersightFabricMacSecPolicyVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * ref_mo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#ref_mo DataIntersightFabricMacSecPolicy#ref_mo}
  */
  readonly refMo?: DataIntersightFabricMacSecPolicyVersionContextRefMo;
}

export function dataIntersightFabricMacSecPolicyVersionContextToTerraform(struct?: DataIntersightFabricMacSecPolicyVersionContextOutputReference | DataIntersightFabricMacSecPolicyVersionContext): any {
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
    interested_mos: cdktf.listMapper(dataIntersightFabricMacSecPolicyVersionContextInterestedMosToTerraform, true)(struct!.interestedMos),
    ref_mo: dataIntersightFabricMacSecPolicyVersionContextRefMoToTerraform(struct!.refMo),
  }
}


export function dataIntersightFabricMacSecPolicyVersionContextToHclTerraform(struct?: DataIntersightFabricMacSecPolicyVersionContextOutputReference | DataIntersightFabricMacSecPolicyVersionContext): any {
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
      value: cdktf.listMapperHcl(dataIntersightFabricMacSecPolicyVersionContextInterestedMosToHclTerraform, true)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightFabricMacSecPolicyVersionContextInterestedMosList",
    },
    ref_mo: {
      value: dataIntersightFabricMacSecPolicyVersionContextRefMoToHclTerraform(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "DataIntersightFabricMacSecPolicyVersionContextRefMoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataIntersightFabricMacSecPolicyVersionContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataIntersightFabricMacSecPolicyVersionContext | undefined {
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

  public set internalValue(value: DataIntersightFabricMacSecPolicyVersionContext | undefined) {
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
  private _interestedMos = new DataIntersightFabricMacSecPolicyVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: DataIntersightFabricMacSecPolicyVersionContextInterestedMos[] | cdktf.IResolvable) {
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
  private _refMo = new DataIntersightFabricMacSecPolicyVersionContextRefMoOutputReference(this, "ref_mo");
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: DataIntersightFabricMacSecPolicyVersionContextRefMo) {
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
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy intersight_fabric_mac_sec_policy}
*/
export class DataIntersightFabricMacSecPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_fabric_mac_sec_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIntersightFabricMacSecPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIntersightFabricMacSecPolicy to import
  * @param importFromId The id of the existing DataIntersightFabricMacSecPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIntersightFabricMacSecPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_fabric_mac_sec_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.72/docs/data-sources/fabric_mac_sec_policy intersight_fabric_mac_sec_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIntersightFabricMacSecPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIntersightFabricMacSecPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_fabric_mac_sec_policy',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.72'
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
    this._cipherSuite = config.cipherSuite;
    this._classId = config.classId;
    this._confidentialityOffset = config.confidentialityOffset;
    this._createTime = config.createTime;
    this._description = config.description;
    this._domainGroupMoid = config.domainGroupMoid;
    this._id = config.id;
    this._includeIcvIndicator = config.includeIcvIndicator;
    this._keyServerPriority = config.keyServerPriority;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._name = config.name;
    this._objectType = config.objectType;
    this._owners = config.owners;
    this._replayWindowSize = config.replayWindowSize;
    this._sakExpiryTime = config.sakExpiryTime;
    this._securityPolicy = config.securityPolicy;
    this._sharedScope = config.sharedScope;
    this._ancestors.internalValue = config.ancestors;
    this._fallbackKeyChain.internalValue = config.fallbackKeyChain;
    this._macSecEaPol.internalValue = config.macSecEaPol;
    this._organization.internalValue = config.organization;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._primaryKeyChain.internalValue = config.primaryKeyChain;
    this._tags.internalValue = config.tags;
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

  // cipher_suite - computed: false, optional: true, required: false
  private _cipherSuite?: string; 
  public get cipherSuite() {
    return this.getStringAttribute('cipher_suite');
  }
  public set cipherSuite(value: string) {
    this._cipherSuite = value;
  }
  public resetCipherSuite() {
    this._cipherSuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuiteInput() {
    return this._cipherSuite;
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

  // confidentiality_offset - computed: false, optional: true, required: false
  private _confidentialityOffset?: string; 
  public get confidentialityOffset() {
    return this.getStringAttribute('confidentiality_offset');
  }
  public set confidentialityOffset(value: string) {
    this._confidentialityOffset = value;
  }
  public resetConfidentialityOffset() {
    this._confidentialityOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialityOffsetInput() {
    return this._confidentialityOffset;
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

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // include_icv_indicator - computed: false, optional: true, required: false
  private _includeIcvIndicator?: boolean | cdktf.IResolvable; 
  public get includeIcvIndicator() {
    return this.getBooleanAttribute('include_icv_indicator');
  }
  public set includeIcvIndicator(value: boolean | cdktf.IResolvable) {
    this._includeIcvIndicator = value;
  }
  public resetIncludeIcvIndicator() {
    this._includeIcvIndicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIcvIndicatorInput() {
    return this._includeIcvIndicator;
  }

  // key_server_priority - computed: false, optional: true, required: false
  private _keyServerPriority?: number; 
  public get keyServerPriority() {
    return this.getNumberAttribute('key_server_priority');
  }
  public set keyServerPriority(value: number) {
    this._keyServerPriority = value;
  }
  public resetKeyServerPriority() {
    this._keyServerPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyServerPriorityInput() {
    return this._keyServerPriority;
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

  // replay_window_size - computed: false, optional: true, required: false
  private _replayWindowSize?: number; 
  public get replayWindowSize() {
    return this.getNumberAttribute('replay_window_size');
  }
  public set replayWindowSize(value: number) {
    this._replayWindowSize = value;
  }
  public resetReplayWindowSize() {
    this._replayWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayWindowSizeInput() {
    return this._replayWindowSize;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataIntersightFabricMacSecPolicyResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // sak_expiry_time - computed: false, optional: true, required: false
  private _sakExpiryTime?: number; 
  public get sakExpiryTime() {
    return this.getNumberAttribute('sak_expiry_time');
  }
  public set sakExpiryTime(value: number) {
    this._sakExpiryTime = value;
  }
  public resetSakExpiryTime() {
    this._sakExpiryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sakExpiryTimeInput() {
    return this._sakExpiryTime;
  }

  // security_policy - computed: false, optional: true, required: false
  private _securityPolicy?: string; 
  public get securityPolicy() {
    return this.getStringAttribute('security_policy');
  }
  public set securityPolicy(value: string) {
    this._securityPolicy = value;
  }
  public resetSecurityPolicy() {
    this._securityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyInput() {
    return this._securityPolicy;
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
  private _ancestors = new DataIntersightFabricMacSecPolicyAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: DataIntersightFabricMacSecPolicyAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
  }

  // fallback_key_chain - computed: false, optional: true, required: false
  private _fallbackKeyChain = new DataIntersightFabricMacSecPolicyFallbackKeyChainOutputReference(this, "fallback_key_chain");
  public get fallbackKeyChain() {
    return this._fallbackKeyChain;
  }
  public putFallbackKeyChain(value: DataIntersightFabricMacSecPolicyFallbackKeyChain) {
    this._fallbackKeyChain.internalValue = value;
  }
  public resetFallbackKeyChain() {
    this._fallbackKeyChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackKeyChainInput() {
    return this._fallbackKeyChain.internalValue;
  }

  // mac_sec_ea_pol - computed: false, optional: true, required: false
  private _macSecEaPol = new DataIntersightFabricMacSecPolicyMacSecEaPolOutputReference(this, "mac_sec_ea_pol");
  public get macSecEaPol() {
    return this._macSecEaPol;
  }
  public putMacSecEaPol(value: DataIntersightFabricMacSecPolicyMacSecEaPol) {
    this._macSecEaPol.internalValue = value;
  }
  public resetMacSecEaPol() {
    this._macSecEaPol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macSecEaPolInput() {
    return this._macSecEaPol.internalValue;
  }

  // organization - computed: false, optional: true, required: false
  private _organization = new DataIntersightFabricMacSecPolicyOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: DataIntersightFabricMacSecPolicyOrganization) {
    this._organization.internalValue = value;
  }
  public resetOrganization() {
    this._organization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // parent - computed: false, optional: true, required: false
  private _parent = new DataIntersightFabricMacSecPolicyParentOutputReference(this, "parent");
  public get parent() {
    return this._parent;
  }
  public putParent(value: DataIntersightFabricMacSecPolicyParent) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: false, optional: true, required: false
  private _permissionResources = new DataIntersightFabricMacSecPolicyPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: DataIntersightFabricMacSecPolicyPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // primary_key_chain - computed: false, optional: true, required: false
  private _primaryKeyChain = new DataIntersightFabricMacSecPolicyPrimaryKeyChainOutputReference(this, "primary_key_chain");
  public get primaryKeyChain() {
    return this._primaryKeyChain;
  }
  public putPrimaryKeyChain(value: DataIntersightFabricMacSecPolicyPrimaryKeyChain) {
    this._primaryKeyChain.internalValue = value;
  }
  public resetPrimaryKeyChain() {
    this._primaryKeyChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyChainInput() {
    return this._primaryKeyChain.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataIntersightFabricMacSecPolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataIntersightFabricMacSecPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_context - computed: false, optional: true, required: false
  private _versionContext = new DataIntersightFabricMacSecPolicyVersionContextOutputReference(this, "version_context");
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: DataIntersightFabricMacSecPolicyVersionContext) {
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
      cipher_suite: cdktf.stringToTerraform(this._cipherSuite),
      class_id: cdktf.stringToTerraform(this._classId),
      confidentiality_offset: cdktf.stringToTerraform(this._confidentialityOffset),
      create_time: cdktf.stringToTerraform(this._createTime),
      description: cdktf.stringToTerraform(this._description),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      id: cdktf.stringToTerraform(this._id),
      include_icv_indicator: cdktf.booleanToTerraform(this._includeIcvIndicator),
      key_server_priority: cdktf.numberToTerraform(this._keyServerPriority),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      name: cdktf.stringToTerraform(this._name),
      object_type: cdktf.stringToTerraform(this._objectType),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      replay_window_size: cdktf.numberToTerraform(this._replayWindowSize),
      sak_expiry_time: cdktf.numberToTerraform(this._sakExpiryTime),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      ancestors: cdktf.listMapper(dataIntersightFabricMacSecPolicyAncestorsToTerraform, true)(this._ancestors.internalValue),
      fallback_key_chain: dataIntersightFabricMacSecPolicyFallbackKeyChainToTerraform(this._fallbackKeyChain.internalValue),
      mac_sec_ea_pol: dataIntersightFabricMacSecPolicyMacSecEaPolToTerraform(this._macSecEaPol.internalValue),
      organization: dataIntersightFabricMacSecPolicyOrganizationToTerraform(this._organization.internalValue),
      parent: dataIntersightFabricMacSecPolicyParentToTerraform(this._parent.internalValue),
      permission_resources: cdktf.listMapper(dataIntersightFabricMacSecPolicyPermissionResourcesToTerraform, true)(this._permissionResources.internalValue),
      primary_key_chain: dataIntersightFabricMacSecPolicyPrimaryKeyChainToTerraform(this._primaryKeyChain.internalValue),
      tags: cdktf.listMapper(dataIntersightFabricMacSecPolicyTagsToTerraform, true)(this._tags.internalValue),
      version_context: dataIntersightFabricMacSecPolicyVersionContextToTerraform(this._versionContext.internalValue),
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
      cipher_suite: {
        value: cdktf.stringToHclTerraform(this._cipherSuite),
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
      confidentiality_offset: {
        value: cdktf.stringToHclTerraform(this._confidentialityOffset),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      include_icv_indicator: {
        value: cdktf.booleanToHclTerraform(this._includeIcvIndicator),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_server_priority: {
        value: cdktf.numberToHclTerraform(this._keyServerPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      replay_window_size: {
        value: cdktf.numberToHclTerraform(this._replayWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sak_expiry_time: {
        value: cdktf.numberToHclTerraform(this._sakExpiryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_policy: {
        value: cdktf.stringToHclTerraform(this._securityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_scope: {
        value: cdktf.stringToHclTerraform(this._sharedScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ancestors: {
        value: cdktf.listMapperHcl(dataIntersightFabricMacSecPolicyAncestorsToHclTerraform, true)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFabricMacSecPolicyAncestorsList",
      },
      fallback_key_chain: {
        value: dataIntersightFabricMacSecPolicyFallbackKeyChainToHclTerraform(this._fallbackKeyChain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFabricMacSecPolicyFallbackKeyChainList",
      },
      mac_sec_ea_pol: {
        value: dataIntersightFabricMacSecPolicyMacSecEaPolToHclTerraform(this._macSecEaPol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFabricMacSecPolicyMacSecEaPolList",
      },
      organization: {
        value: dataIntersightFabricMacSecPolicyOrganizationToHclTerraform(this._organization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFabricMacSecPolicyOrganizationList",
      },
      parent: {
        value: dataIntersightFabricMacSecPolicyParentToHclTerraform(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFabricMacSecPolicyParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(dataIntersightFabricMacSecPolicyPermissionResourcesToHclTerraform, true)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFabricMacSecPolicyPermissionResourcesList",
      },
      primary_key_chain: {
        value: dataIntersightFabricMacSecPolicyPrimaryKeyChainToHclTerraform(this._primaryKeyChain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFabricMacSecPolicyPrimaryKeyChainList",
      },
      tags: {
        value: cdktf.listMapperHcl(dataIntersightFabricMacSecPolicyTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFabricMacSecPolicyTagsList",
      },
      version_context: {
        value: dataIntersightFabricMacSecPolicyVersionContextToHclTerraform(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataIntersightFabricMacSecPolicyVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
