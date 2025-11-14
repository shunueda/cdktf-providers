// https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricMacSecPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#account_moid FabricMacSecPolicy#account_moid}
  */
  readonly accountMoid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * An array of relationships to moBaseMo resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#ancestors FabricMacSecPolicy#ancestors}
  */
  readonly ancestors?: FabricMacSecPolicyAncestors[] | cdktf.IResolvable;
  /**
  * Cipher suite to be used for MACsec encryption.
  * * `GCM-AES-XPN-256` - An extended Cipher Suite of GCM-AES-256 used in MACsec (Media Access Control Security) that incorporates Extended Packet Numbering (XPN) for enhanced security and scalability.
  * * `GCM-AES-128` - This Cipher Suite employs the Advanced Encryption Standard (AES) with a 128-bit key in Galois/Counter Mode, offering both encryption and authentication.
  * * `GCM-AES-256` - This Cipher Suite utilizes Advanced Encryption Standard (AES) with a 256-bit key in Galois/Counter Mode, offering a higher level of security compared to GCM-AES-128 due to the larger key size.
  * * `GCM-AES-XPN-128` - An extended Cipher Suite of GCM-AES-128  used in MACsec (Media Access Control Security) that incorporates Extended Packet Numbering (XPN) to enhance security and scalability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#cipher_suite FabricMacSecPolicy#cipher_suite}
  */
  readonly cipherSuite?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * This property is used as a discriminator to identify the type of the payload
  * when marshaling and unmarshaling data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * The MACsec confidentiality offset specifies the number of bytes starting from the frame header. MACsec encrypts only the bytes after the offset in a frame.
  * * `CONF-OFFSET-0` - A value of 0 means the entire ethernet frame is encrypted.
  * * `CONF-OFFSET-30` - The first 30 bytes of the ethernet frame are not encrypted, and the rest of the frame is encrypted.
  * * `CONF-OFFSET-50` - The first 50 bytes of the ethernet frame are not encrypted, and the rest of the frame is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#confidentiality_offset FabricMacSecPolicy#confidentiality_offset}
  */
  readonly confidentialityOffset?: string;
  /**
  * The time when this managed object was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#create_time FabricMacSecPolicy#create_time}
  */
  readonly createTime?: string;
  /**
  * Description of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#description FabricMacSecPolicy#description}
  */
  readonly description?: string;
  /**
  * The DomainGroup ID for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#domain_group_moid FabricMacSecPolicy#domain_group_moid}
  */
  readonly domainGroupMoid?: string;
  /**
  * Fallback keychain for managing an alternative set of security keys to be used when a secure session cannot be established using the primary keychain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#fallback_key_chain FabricMacSecPolicy#fallback_key_chain}
  */
  readonly fallbackKeyChain?: FabricMacSecPolicyFallbackKeyChain[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#id FabricMacSecPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configures inclusion of the optional integrity check value (ICV) indicator as part of the transmitted MACsec key agreement protocol data unit (PDU).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#include_icv_indicator FabricMacSecPolicy#include_icv_indicator}
  */
  readonly includeIcvIndicator?: boolean | cdktf.IResolvable;
  /**
  * The key server is selected by comparing key-server priority values during MACsec key agreement (MKA) message exchange between peer devices. Valid values range from 0 to 255. The lower the value, the higher the chance it will be selected as the key server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#key_server_priority FabricMacSecPolicy#key_server_priority}
  */
  readonly keyServerPriority?: number;
  /**
  * Extensible authentication protocol over LAN (EAPoL). MACsec transmits MACsec key agreement (MKA) protocol data units (PDUs) using EAPoL packets to establish a secure session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#mac_sec_ea_pol FabricMacSecPolicy#mac_sec_ea_pol}
  */
  readonly macSecEaPol?: FabricMacSecPolicyMacSecEaPol[] | cdktf.IResolvable;
  /**
  * The time when this managed object was last modified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#mod_time FabricMacSecPolicy#mod_time}
  */
  readonly modTime?: string;
  /**
  * The unique identifier of this Managed Object instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#moid FabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Name of the concrete policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#name FabricMacSecPolicy#name}
  */
  readonly name?: string;
  /**
  * The fully-qualified name of the instantiated, concrete type.
  * The value should be the same as the 'ClassId' property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * A reference to a organizationOrganization resource.
  * When the $expand query parameter is specified, the referenced resource is returned inline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#organization FabricMacSecPolicy#organization}
  */
  readonly organization?: FabricMacSecPolicyOrganization[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#owners FabricMacSecPolicy#owners}
  */
  readonly owners?: string[];
  /**
  * A reference to a moBaseMo resource.
  * When the $expand query parameter is specified, the referenced resource is returned inline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#parent FabricMacSecPolicy#parent}
  */
  readonly parent?: FabricMacSecPolicyParent[] | cdktf.IResolvable;
  /**
  * An array of relationships to moBaseMo resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#permission_resources FabricMacSecPolicy#permission_resources}
  */
  readonly permissionResources?: FabricMacSecPolicyPermissionResources[] | cdktf.IResolvable;
  /**
  * Primary keychain for managing the default set of security keys for encryption and decryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#primary_key_chain FabricMacSecPolicy#primary_key_chain}
  */
  readonly primaryKeyChain?: FabricMacSecPolicyPrimaryKeyChain[] | cdktf.IResolvable;
  /**
  * Defines the size of the replay protection window. It determines the number of packets that can be received out of order without being considered replay attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#replay_window_size FabricMacSecPolicy#replay_window_size}
  */
  readonly replayWindowSize?: number;
  /**
  * Time in seconds to force secure association key (SAK) rekey. Valid range is from 60 to 2592000 seconds when configured. When not configured, the SAK rekey interval is determined based on the interface speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#sak_expiry_time FabricMacSecPolicy#sak_expiry_time}
  */
  readonly sakExpiryTime?: number;
  /**
  * The security policy specifies the level of MACsec enforcement on network traffic passing through a given interface.
  * Should secure allows unencrypted traffic to flow until the MACsec key agreement (MKA) session is secured. After the MKA session is secured, the policy switches to only allow encrypted traffic to flow. Must secure imposes only MACsec encrypted traffic to flow. Traffic will be dropped, until the MKA session is not secured.
  * * `Should-secure` - Should secure allows unencrypted traffic to flow until the MACsec key agreement (MKA) session is secured. After the MKA session is secured, the policy switches to only allow encrypted traffic to flow.
  * * `Must-secure` - Must secure imposes only MACsec encrypted traffic to flow. Traffic will be dropped, until the MKA session is not secured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#security_policy FabricMacSecPolicy#security_policy}
  */
  readonly securityPolicy?: string;
  /**
  * Intersight provides pre-built workflows, tasks and policies to end users through global catalogs.
  * Objects that are made available through global catalogs are said to have a 'shared' ownership. Shared objects are either made globally available to all end users or restricted to end users based on their license entitlement. Users can use this property to differentiate the scope (global or a specific license tier) to which a shared MO belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#shared_scope FabricMacSecPolicy#shared_scope}
  */
  readonly sharedScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#tags FabricMacSecPolicy#tags}
  */
  readonly tags?: FabricMacSecPolicyTags[] | cdktf.IResolvable;
  /**
  * The versioning info for this managed object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#version_context FabricMacSecPolicy#version_context}
  */
  readonly versionContext?: FabricMacSecPolicyVersionContext[] | cdktf.IResolvable;
}
export interface FabricMacSecPolicyAncestors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#moid FabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#selector FabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function fabricMacSecPolicyAncestorsToTerraform(struct?: FabricMacSecPolicyAncestors | cdktf.IResolvable): any {
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


export function fabricMacSecPolicyAncestorsToHclTerraform(struct?: FabricMacSecPolicyAncestors | cdktf.IResolvable): any {
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

export class FabricMacSecPolicyAncestorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyAncestors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyAncestors | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class FabricMacSecPolicyAncestorsList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyAncestors[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyAncestorsOutputReference {
    return new FabricMacSecPolicyAncestorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyFallbackKeyChainSecKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#cryptographic_algorithm FabricMacSecPolicy#cryptographic_algorithm}
  */
  readonly cryptographicAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#id FabricMacSecPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#is_octet_string_set FabricMacSecPolicy#is_octet_string_set}
  */
  readonly isOctetStringSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#key_type FabricMacSecPolicy#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#octet_string FabricMacSecPolicy#octet_string}
  */
  readonly octetString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_duration FabricMacSecPolicy#send_lifetime_duration}
  */
  readonly sendLifetimeDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_end_time FabricMacSecPolicy#send_lifetime_end_time}
  */
  readonly sendLifetimeEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_infinite FabricMacSecPolicy#send_lifetime_infinite}
  */
  readonly sendLifetimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_start_time FabricMacSecPolicy#send_lifetime_start_time}
  */
  readonly sendLifetimeStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_time_zone FabricMacSecPolicy#send_lifetime_time_zone}
  */
  readonly sendLifetimeTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_unlimited FabricMacSecPolicy#send_lifetime_unlimited}
  */
  readonly sendLifetimeUnlimited?: boolean | cdktf.IResolvable;
}

export function fabricMacSecPolicyFallbackKeyChainSecKeysToTerraform(struct?: FabricMacSecPolicyFallbackKeyChainSecKeys | cdktf.IResolvable): any {
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


export function fabricMacSecPolicyFallbackKeyChainSecKeysToHclTerraform(struct?: FabricMacSecPolicyFallbackKeyChainSecKeys | cdktf.IResolvable): any {
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

export class FabricMacSecPolicyFallbackKeyChainSecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyFallbackKeyChainSecKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyFallbackKeyChainSecKeys | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // cryptographic_algorithm - computed: true, optional: true, required: false
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

  // is_octet_string_set - computed: true, optional: true, required: false
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

  // key_type - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // octet_string - computed: true, optional: true, required: false
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

  // send_lifetime_duration - computed: true, optional: true, required: false
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

  // send_lifetime_end_time - computed: true, optional: true, required: false
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

  // send_lifetime_infinite - computed: true, optional: true, required: false
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

  // send_lifetime_start_time - computed: true, optional: true, required: false
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

  // send_lifetime_time_zone - computed: true, optional: true, required: false
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

  // send_lifetime_unlimited - computed: true, optional: true, required: false
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

export class FabricMacSecPolicyFallbackKeyChainSecKeysList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyFallbackKeyChainSecKeys[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyFallbackKeyChainSecKeysOutputReference {
    return new FabricMacSecPolicyFallbackKeyChainSecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyFallbackKeyChain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#name FabricMacSecPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#sec_keys FabricMacSecPolicy#sec_keys}
  */
  readonly secKeys?: FabricMacSecPolicyFallbackKeyChainSecKeys[] | cdktf.IResolvable;
}

export function fabricMacSecPolicyFallbackKeyChainToTerraform(struct?: FabricMacSecPolicyFallbackKeyChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    sec_keys: cdktf.listMapper(fabricMacSecPolicyFallbackKeyChainSecKeysToTerraform, false)(struct!.secKeys),
  }
}


export function fabricMacSecPolicyFallbackKeyChainToHclTerraform(struct?: FabricMacSecPolicyFallbackKeyChain | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(fabricMacSecPolicyFallbackKeyChainSecKeysToHclTerraform, false)(struct!.secKeys),
      isBlock: true,
      type: "list",
      storageClassType: "FabricMacSecPolicyFallbackKeyChainSecKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricMacSecPolicyFallbackKeyChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyFallbackKeyChain | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyFallbackKeyChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._secKeys.internalValue = undefined;
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
      this._name = value.name;
      this._objectType = value.objectType;
      this._secKeys.internalValue = value.secKeys;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // sec_keys - computed: true, optional: true, required: false
  private _secKeys = new FabricMacSecPolicyFallbackKeyChainSecKeysList(this, "sec_keys", false);
  public get secKeys() {
    return this._secKeys;
  }
  public putSecKeys(value: FabricMacSecPolicyFallbackKeyChainSecKeys[] | cdktf.IResolvable) {
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

export class FabricMacSecPolicyFallbackKeyChainList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyFallbackKeyChain[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyFallbackKeyChainOutputReference {
    return new FabricMacSecPolicyFallbackKeyChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyMacSecEaPol {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#ea_pol_ethertype FabricMacSecPolicy#ea_pol_ethertype}
  */
  readonly eaPolEthertype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#ea_pol_mac_address FabricMacSecPolicy#ea_pol_mac_address}
  */
  readonly eaPolMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
}

export function fabricMacSecPolicyMacSecEaPolToTerraform(struct?: FabricMacSecPolicyMacSecEaPol | cdktf.IResolvable): any {
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


export function fabricMacSecPolicyMacSecEaPolToHclTerraform(struct?: FabricMacSecPolicyMacSecEaPol | cdktf.IResolvable): any {
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

export class FabricMacSecPolicyMacSecEaPolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyMacSecEaPol | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyMacSecEaPol | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._eaPolEthertype = undefined;
      this._eaPolMacAddress = undefined;
      this._objectType = undefined;
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
      this._eaPolEthertype = value.eaPolEthertype;
      this._eaPolMacAddress = value.eaPolMacAddress;
      this._objectType = value.objectType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // ea_pol_ethertype - computed: true, optional: true, required: false
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

  // ea_pol_mac_address - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

export class FabricMacSecPolicyMacSecEaPolList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyMacSecEaPol[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyMacSecEaPolOutputReference {
    return new FabricMacSecPolicyMacSecEaPolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyOrganization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#moid FabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#selector FabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function fabricMacSecPolicyOrganizationToTerraform(struct?: FabricMacSecPolicyOrganization | cdktf.IResolvable): any {
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


export function fabricMacSecPolicyOrganizationToHclTerraform(struct?: FabricMacSecPolicyOrganization | cdktf.IResolvable): any {
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

export class FabricMacSecPolicyOrganizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyOrganization | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyOrganization | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class FabricMacSecPolicyOrganizationList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyOrganization[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyOrganizationOutputReference {
    return new FabricMacSecPolicyOrganizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyParent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#moid FabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#selector FabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function fabricMacSecPolicyParentToTerraform(struct?: FabricMacSecPolicyParent | cdktf.IResolvable): any {
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


export function fabricMacSecPolicyParentToHclTerraform(struct?: FabricMacSecPolicyParent | cdktf.IResolvable): any {
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

export class FabricMacSecPolicyParentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyParent | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyParent | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class FabricMacSecPolicyParentList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyParent[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyParentOutputReference {
    return new FabricMacSecPolicyParentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyPermissionResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#moid FabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#selector FabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function fabricMacSecPolicyPermissionResourcesToTerraform(struct?: FabricMacSecPolicyPermissionResources | cdktf.IResolvable): any {
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


export function fabricMacSecPolicyPermissionResourcesToHclTerraform(struct?: FabricMacSecPolicyPermissionResources | cdktf.IResolvable): any {
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

export class FabricMacSecPolicyPermissionResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyPermissionResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyPermissionResources | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class FabricMacSecPolicyPermissionResourcesList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyPermissionResources[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyPermissionResourcesOutputReference {
    return new FabricMacSecPolicyPermissionResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyPrimaryKeyChainSecKeys {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#cryptographic_algorithm FabricMacSecPolicy#cryptographic_algorithm}
  */
  readonly cryptographicAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#id FabricMacSecPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#is_octet_string_set FabricMacSecPolicy#is_octet_string_set}
  */
  readonly isOctetStringSet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#key_type FabricMacSecPolicy#key_type}
  */
  readonly keyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#octet_string FabricMacSecPolicy#octet_string}
  */
  readonly octetString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_duration FabricMacSecPolicy#send_lifetime_duration}
  */
  readonly sendLifetimeDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_end_time FabricMacSecPolicy#send_lifetime_end_time}
  */
  readonly sendLifetimeEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_infinite FabricMacSecPolicy#send_lifetime_infinite}
  */
  readonly sendLifetimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_start_time FabricMacSecPolicy#send_lifetime_start_time}
  */
  readonly sendLifetimeStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_time_zone FabricMacSecPolicy#send_lifetime_time_zone}
  */
  readonly sendLifetimeTimeZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#send_lifetime_unlimited FabricMacSecPolicy#send_lifetime_unlimited}
  */
  readonly sendLifetimeUnlimited?: boolean | cdktf.IResolvable;
}

export function fabricMacSecPolicyPrimaryKeyChainSecKeysToTerraform(struct?: FabricMacSecPolicyPrimaryKeyChainSecKeys | cdktf.IResolvable): any {
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


export function fabricMacSecPolicyPrimaryKeyChainSecKeysToHclTerraform(struct?: FabricMacSecPolicyPrimaryKeyChainSecKeys | cdktf.IResolvable): any {
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

export class FabricMacSecPolicyPrimaryKeyChainSecKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyPrimaryKeyChainSecKeys | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyPrimaryKeyChainSecKeys | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // cryptographic_algorithm - computed: true, optional: true, required: false
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

  // is_octet_string_set - computed: true, optional: true, required: false
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

  // key_type - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // octet_string - computed: true, optional: true, required: false
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

  // send_lifetime_duration - computed: true, optional: true, required: false
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

  // send_lifetime_end_time - computed: true, optional: true, required: false
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

  // send_lifetime_infinite - computed: true, optional: true, required: false
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

  // send_lifetime_start_time - computed: true, optional: true, required: false
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

  // send_lifetime_time_zone - computed: true, optional: true, required: false
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

  // send_lifetime_unlimited - computed: true, optional: true, required: false
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

export class FabricMacSecPolicyPrimaryKeyChainSecKeysList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyPrimaryKeyChainSecKeys[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyPrimaryKeyChainSecKeysOutputReference {
    return new FabricMacSecPolicyPrimaryKeyChainSecKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyPrimaryKeyChain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#name FabricMacSecPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#sec_keys FabricMacSecPolicy#sec_keys}
  */
  readonly secKeys?: FabricMacSecPolicyPrimaryKeyChainSecKeys[] | cdktf.IResolvable;
}

export function fabricMacSecPolicyPrimaryKeyChainToTerraform(struct?: FabricMacSecPolicyPrimaryKeyChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    sec_keys: cdktf.listMapper(fabricMacSecPolicyPrimaryKeyChainSecKeysToTerraform, false)(struct!.secKeys),
  }
}


export function fabricMacSecPolicyPrimaryKeyChainToHclTerraform(struct?: FabricMacSecPolicyPrimaryKeyChain | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(fabricMacSecPolicyPrimaryKeyChainSecKeysToHclTerraform, false)(struct!.secKeys),
      isBlock: true,
      type: "list",
      storageClassType: "FabricMacSecPolicyPrimaryKeyChainSecKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricMacSecPolicyPrimaryKeyChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyPrimaryKeyChain | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyPrimaryKeyChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._secKeys.internalValue = undefined;
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
      this._name = value.name;
      this._objectType = value.objectType;
      this._secKeys.internalValue = value.secKeys;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // sec_keys - computed: true, optional: true, required: false
  private _secKeys = new FabricMacSecPolicyPrimaryKeyChainSecKeysList(this, "sec_keys", false);
  public get secKeys() {
    return this._secKeys;
  }
  public putSecKeys(value: FabricMacSecPolicyPrimaryKeyChainSecKeys[] | cdktf.IResolvable) {
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

export class FabricMacSecPolicyPrimaryKeyChainList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyPrimaryKeyChain[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyPrimaryKeyChainOutputReference {
    return new FabricMacSecPolicyPrimaryKeyChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyTagsAncestorDefinitions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#moid FabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#selector FabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function fabricMacSecPolicyTagsAncestorDefinitionsToTerraform(struct?: FabricMacSecPolicyTagsAncestorDefinitions | cdktf.IResolvable): any {
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


export function fabricMacSecPolicyTagsAncestorDefinitionsToHclTerraform(struct?: FabricMacSecPolicyTagsAncestorDefinitions | cdktf.IResolvable): any {
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

export class FabricMacSecPolicyTagsAncestorDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyTagsAncestorDefinitions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyTagsAncestorDefinitions | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class FabricMacSecPolicyTagsAncestorDefinitionsList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyTagsAncestorDefinitions[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyTagsAncestorDefinitionsOutputReference {
    return new FabricMacSecPolicyTagsAncestorDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyTagsDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#moid FabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#selector FabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function fabricMacSecPolicyTagsDefinitionToTerraform(struct?: FabricMacSecPolicyTagsDefinition | cdktf.IResolvable): any {
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


export function fabricMacSecPolicyTagsDefinitionToHclTerraform(struct?: FabricMacSecPolicyTagsDefinition | cdktf.IResolvable): any {
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

export class FabricMacSecPolicyTagsDefinitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyTagsDefinition | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyTagsDefinition | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class FabricMacSecPolicyTagsDefinitionList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyTagsDefinition[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyTagsDefinitionOutputReference {
    return new FabricMacSecPolicyTagsDefinitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#ancestor_definitions FabricMacSecPolicy#ancestor_definitions}
  */
  readonly ancestorDefinitions?: FabricMacSecPolicyTagsAncestorDefinitions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#definition FabricMacSecPolicy#definition}
  */
  readonly definition?: FabricMacSecPolicyTagsDefinition[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#key FabricMacSecPolicy#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#propagated FabricMacSecPolicy#propagated}
  */
  readonly propagated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#sys_tag FabricMacSecPolicy#sys_tag}
  */
  readonly sysTag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#type FabricMacSecPolicy#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#value FabricMacSecPolicy#value}
  */
  readonly value?: string;
}

export function fabricMacSecPolicyTagsToTerraform(struct?: FabricMacSecPolicyTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    ancestor_definitions: cdktf.listMapper(fabricMacSecPolicyTagsAncestorDefinitionsToTerraform, false)(struct!.ancestorDefinitions),
    definition: cdktf.listMapper(fabricMacSecPolicyTagsDefinitionToTerraform, false)(struct!.definition),
    key: cdktf.stringToTerraform(struct!.key),
    propagated: cdktf.booleanToTerraform(struct!.propagated),
    sys_tag: cdktf.booleanToTerraform(struct!.sysTag),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fabricMacSecPolicyTagsToHclTerraform(struct?: FabricMacSecPolicyTags | cdktf.IResolvable): any {
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
    ancestor_definitions: {
      value: cdktf.listMapperHcl(fabricMacSecPolicyTagsAncestorDefinitionsToHclTerraform, false)(struct!.ancestorDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "FabricMacSecPolicyTagsAncestorDefinitionsList",
    },
    definition: {
      value: cdktf.listMapperHcl(fabricMacSecPolicyTagsDefinitionToHclTerraform, false)(struct!.definition),
      isBlock: true,
      type: "list",
      storageClassType: "FabricMacSecPolicyTagsDefinitionList",
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
    sys_tag: {
      value: cdktf.booleanToHclTerraform(struct!.sysTag),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricMacSecPolicyTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._ancestorDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ancestorDefinitions = this._ancestorDefinitions?.internalValue;
    }
    if (this._definition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definition = this._definition?.internalValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propagated !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagated = this._propagated;
    }
    if (this._sysTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysTag = this._sysTag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricMacSecPolicyTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._ancestorDefinitions.internalValue = undefined;
      this._definition.internalValue = undefined;
      this._key = undefined;
      this._propagated = undefined;
      this._sysTag = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._ancestorDefinitions.internalValue = value.ancestorDefinitions;
      this._definition.internalValue = value.definition;
      this._key = value.key;
      this._propagated = value.propagated;
      this._sysTag = value.sysTag;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // ancestor_definitions - computed: true, optional: true, required: false
  private _ancestorDefinitions = new FabricMacSecPolicyTagsAncestorDefinitionsList(this, "ancestor_definitions", false);
  public get ancestorDefinitions() {
    return this._ancestorDefinitions;
  }
  public putAncestorDefinitions(value: FabricMacSecPolicyTagsAncestorDefinitions[] | cdktf.IResolvable) {
    this._ancestorDefinitions.internalValue = value;
  }
  public resetAncestorDefinitions() {
    this._ancestorDefinitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorDefinitionsInput() {
    return this._ancestorDefinitions.internalValue;
  }

  // definition - computed: true, optional: true, required: false
  private _definition = new FabricMacSecPolicyTagsDefinitionList(this, "definition", false);
  public get definition() {
    return this._definition;
  }
  public putDefinition(value: FabricMacSecPolicyTagsDefinition[] | cdktf.IResolvable) {
    this._definition.internalValue = value;
  }
  public resetDefinition() {
    this._definition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition.internalValue;
  }

  // key - computed: true, optional: true, required: false
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

  // propagated - computed: true, optional: true, required: false
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

  // sys_tag - computed: true, optional: true, required: false
  private _sysTag?: boolean | cdktf.IResolvable; 
  public get sysTag() {
    return this.getBooleanAttribute('sys_tag');
  }
  public set sysTag(value: boolean | cdktf.IResolvable) {
    this._sysTag = value;
  }
  public resetSysTag() {
    this._sysTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysTagInput() {
    return this._sysTag;
  }

  // type - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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
}

export class FabricMacSecPolicyTagsList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyTags[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyTagsOutputReference {
    return new FabricMacSecPolicyTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyVersionContextInterestedMos {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#moid FabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#selector FabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function fabricMacSecPolicyVersionContextInterestedMosToTerraform(struct?: FabricMacSecPolicyVersionContextInterestedMos | cdktf.IResolvable): any {
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


export function fabricMacSecPolicyVersionContextInterestedMosToHclTerraform(struct?: FabricMacSecPolicyVersionContextInterestedMos | cdktf.IResolvable): any {
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

export class FabricMacSecPolicyVersionContextInterestedMosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyVersionContextInterestedMos | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyVersionContextInterestedMos | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class FabricMacSecPolicyVersionContextInterestedMosList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyVersionContextInterestedMos[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyVersionContextInterestedMosOutputReference {
    return new FabricMacSecPolicyVersionContextInterestedMosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyVersionContextRefMo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#moid FabricMacSecPolicy#moid}
  */
  readonly moid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#selector FabricMacSecPolicy#selector}
  */
  readonly selector?: string;
}

export function fabricMacSecPolicyVersionContextRefMoToTerraform(struct?: FabricMacSecPolicyVersionContextRefMo | cdktf.IResolvable): any {
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


export function fabricMacSecPolicyVersionContextRefMoToHclTerraform(struct?: FabricMacSecPolicyVersionContextRefMo | cdktf.IResolvable): any {
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

export class FabricMacSecPolicyVersionContextRefMoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyVersionContextRefMo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FabricMacSecPolicyVersionContextRefMo | cdktf.IResolvable | undefined) {
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

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // selector - computed: true, optional: true, required: false
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

export class FabricMacSecPolicyVersionContextRefMoList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyVersionContextRefMo[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyVersionContextRefMoOutputReference {
    return new FabricMacSecPolicyVersionContextRefMoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricMacSecPolicyVersionContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#additional_properties FabricMacSecPolicy#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#class_id FabricMacSecPolicy#class_id}
  */
  readonly classId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#interested_mos FabricMacSecPolicy#interested_mos}
  */
  readonly interestedMos?: FabricMacSecPolicyVersionContextInterestedMos[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#marked_for_deletion FabricMacSecPolicy#marked_for_deletion}
  */
  readonly markedForDeletion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#nr_version FabricMacSecPolicy#nr_version}
  */
  readonly nrVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#object_type FabricMacSecPolicy#object_type}
  */
  readonly objectType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#ref_mo FabricMacSecPolicy#ref_mo}
  */
  readonly refMo?: FabricMacSecPolicyVersionContextRefMo[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#timestamp FabricMacSecPolicy#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#version_type FabricMacSecPolicy#version_type}
  */
  readonly versionType?: string;
}

export function fabricMacSecPolicyVersionContextToTerraform(struct?: FabricMacSecPolicyVersionContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    class_id: cdktf.stringToTerraform(struct!.classId),
    interested_mos: cdktf.listMapper(fabricMacSecPolicyVersionContextInterestedMosToTerraform, false)(struct!.interestedMos),
    marked_for_deletion: cdktf.booleanToTerraform(struct!.markedForDeletion),
    nr_version: cdktf.stringToTerraform(struct!.nrVersion),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    ref_mo: cdktf.listMapper(fabricMacSecPolicyVersionContextRefMoToTerraform, false)(struct!.refMo),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    version_type: cdktf.stringToTerraform(struct!.versionType),
  }
}


export function fabricMacSecPolicyVersionContextToHclTerraform(struct?: FabricMacSecPolicyVersionContext | cdktf.IResolvable): any {
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
    interested_mos: {
      value: cdktf.listMapperHcl(fabricMacSecPolicyVersionContextInterestedMosToHclTerraform, false)(struct!.interestedMos),
      isBlock: true,
      type: "list",
      storageClassType: "FabricMacSecPolicyVersionContextInterestedMosList",
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
    ref_mo: {
      value: cdktf.listMapperHcl(fabricMacSecPolicyVersionContextRefMoToHclTerraform, false)(struct!.refMo),
      isBlock: true,
      type: "list",
      storageClassType: "FabricMacSecPolicyVersionContextRefMoList",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricMacSecPolicyVersionContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricMacSecPolicyVersionContext | cdktf.IResolvable | undefined {
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
    if (this._interestedMos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interestedMos = this._interestedMos?.internalValue;
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
    if (this._refMo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refMo = this._refMo?.internalValue;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._versionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionType = this._versionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricMacSecPolicyVersionContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._classId = undefined;
      this._interestedMos.internalValue = undefined;
      this._markedForDeletion = undefined;
      this._nrVersion = undefined;
      this._objectType = undefined;
      this._refMo.internalValue = undefined;
      this._timestamp = undefined;
      this._versionType = undefined;
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
      this._interestedMos.internalValue = value.interestedMos;
      this._markedForDeletion = value.markedForDeletion;
      this._nrVersion = value.nrVersion;
      this._objectType = value.objectType;
      this._refMo.internalValue = value.refMo;
      this._timestamp = value.timestamp;
      this._versionType = value.versionType;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
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

  // class_id - computed: true, optional: true, required: false
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

  // interested_mos - computed: true, optional: true, required: false
  private _interestedMos = new FabricMacSecPolicyVersionContextInterestedMosList(this, "interested_mos", false);
  public get interestedMos() {
    return this._interestedMos;
  }
  public putInterestedMos(value: FabricMacSecPolicyVersionContextInterestedMos[] | cdktf.IResolvable) {
    this._interestedMos.internalValue = value;
  }
  public resetInterestedMos() {
    this._interestedMos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interestedMosInput() {
    return this._interestedMos.internalValue;
  }

  // marked_for_deletion - computed: true, optional: true, required: false
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

  // nr_version - computed: true, optional: true, required: false
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

  // object_type - computed: true, optional: true, required: false
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

  // ref_mo - computed: true, optional: true, required: false
  private _refMo = new FabricMacSecPolicyVersionContextRefMoList(this, "ref_mo", false);
  public get refMo() {
    return this._refMo;
  }
  public putRefMo(value: FabricMacSecPolicyVersionContextRefMo[] | cdktf.IResolvable) {
    this._refMo.internalValue = value;
  }
  public resetRefMo() {
    this._refMo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refMoInput() {
    return this._refMo.internalValue;
  }

  // timestamp - computed: true, optional: true, required: false
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

  // version_type - computed: true, optional: true, required: false
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
}

export class FabricMacSecPolicyVersionContextList extends cdktf.ComplexList {
  public internalValue? : FabricMacSecPolicyVersionContext[] | cdktf.IResolvable

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
  public get(index: number): FabricMacSecPolicyVersionContextOutputReference {
    return new FabricMacSecPolicyVersionContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy intersight_fabric_mac_sec_policy}
*/
export class FabricMacSecPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "intersight_fabric_mac_sec_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricMacSecPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricMacSecPolicy to import
  * @param importFromId The id of the existing FabricMacSecPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricMacSecPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "intersight_fabric_mac_sec_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/intersight/1.0.73/docs/resources/fabric_mac_sec_policy intersight_fabric_mac_sec_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricMacSecPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FabricMacSecPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'intersight_fabric_mac_sec_policy',
      terraformGeneratorMetadata: {
        providerName: 'intersight',
        providerVersion: '1.0.73',
        providerVersionConstraint: '1.0.73'
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
    this._ancestors.internalValue = config.ancestors;
    this._cipherSuite = config.cipherSuite;
    this._classId = config.classId;
    this._confidentialityOffset = config.confidentialityOffset;
    this._createTime = config.createTime;
    this._description = config.description;
    this._domainGroupMoid = config.domainGroupMoid;
    this._fallbackKeyChain.internalValue = config.fallbackKeyChain;
    this._id = config.id;
    this._includeIcvIndicator = config.includeIcvIndicator;
    this._keyServerPriority = config.keyServerPriority;
    this._macSecEaPol.internalValue = config.macSecEaPol;
    this._modTime = config.modTime;
    this._moid = config.moid;
    this._name = config.name;
    this._objectType = config.objectType;
    this._organization.internalValue = config.organization;
    this._owners = config.owners;
    this._parent.internalValue = config.parent;
    this._permissionResources.internalValue = config.permissionResources;
    this._primaryKeyChain.internalValue = config.primaryKeyChain;
    this._replayWindowSize = config.replayWindowSize;
    this._sakExpiryTime = config.sakExpiryTime;
    this._securityPolicy = config.securityPolicy;
    this._sharedScope = config.sharedScope;
    this._tags.internalValue = config.tags;
    this._versionContext.internalValue = config.versionContext;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_moid - computed: true, optional: true, required: false
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

  // ancestors - computed: true, optional: true, required: false
  private _ancestors = new FabricMacSecPolicyAncestorsList(this, "ancestors", false);
  public get ancestors() {
    return this._ancestors;
  }
  public putAncestors(value: FabricMacSecPolicyAncestors[] | cdktf.IResolvable) {
    this._ancestors.internalValue = value;
  }
  public resetAncestors() {
    this._ancestors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ancestorsInput() {
    return this._ancestors.internalValue;
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

  // create_time - computed: true, optional: true, required: false
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

  // domain_group_moid - computed: true, optional: true, required: false
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

  // fallback_key_chain - computed: true, optional: true, required: false
  private _fallbackKeyChain = new FabricMacSecPolicyFallbackKeyChainList(this, "fallback_key_chain", false);
  public get fallbackKeyChain() {
    return this._fallbackKeyChain;
  }
  public putFallbackKeyChain(value: FabricMacSecPolicyFallbackKeyChain[] | cdktf.IResolvable) {
    this._fallbackKeyChain.internalValue = value;
  }
  public resetFallbackKeyChain() {
    this._fallbackKeyChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackKeyChainInput() {
    return this._fallbackKeyChain.internalValue;
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

  // mac_sec_ea_pol - computed: true, optional: true, required: false
  private _macSecEaPol = new FabricMacSecPolicyMacSecEaPolList(this, "mac_sec_ea_pol", false);
  public get macSecEaPol() {
    return this._macSecEaPol;
  }
  public putMacSecEaPol(value: FabricMacSecPolicyMacSecEaPol[] | cdktf.IResolvable) {
    this._macSecEaPol.internalValue = value;
  }
  public resetMacSecEaPol() {
    this._macSecEaPol.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macSecEaPolInput() {
    return this._macSecEaPol.internalValue;
  }

  // mod_time - computed: true, optional: true, required: false
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

  // moid - computed: true, optional: true, required: false
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

  // organization - computed: true, optional: true, required: false
  private _organization = new FabricMacSecPolicyOrganizationList(this, "organization", false);
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: FabricMacSecPolicyOrganization[] | cdktf.IResolvable) {
    this._organization.internalValue = value;
  }
  public resetOrganization() {
    this._organization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // owners - computed: true, optional: true, required: false
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

  // parent - computed: true, optional: true, required: false
  private _parent = new FabricMacSecPolicyParentList(this, "parent", false);
  public get parent() {
    return this._parent;
  }
  public putParent(value: FabricMacSecPolicyParent[] | cdktf.IResolvable) {
    this._parent.internalValue = value;
  }
  public resetParent() {
    this._parent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent.internalValue;
  }

  // permission_resources - computed: true, optional: true, required: false
  private _permissionResources = new FabricMacSecPolicyPermissionResourcesList(this, "permission_resources", false);
  public get permissionResources() {
    return this._permissionResources;
  }
  public putPermissionResources(value: FabricMacSecPolicyPermissionResources[] | cdktf.IResolvable) {
    this._permissionResources.internalValue = value;
  }
  public resetPermissionResources() {
    this._permissionResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionResourcesInput() {
    return this._permissionResources.internalValue;
  }

  // primary_key_chain - computed: true, optional: true, required: false
  private _primaryKeyChain = new FabricMacSecPolicyPrimaryKeyChainList(this, "primary_key_chain", false);
  public get primaryKeyChain() {
    return this._primaryKeyChain;
  }
  public putPrimaryKeyChain(value: FabricMacSecPolicyPrimaryKeyChain[] | cdktf.IResolvable) {
    this._primaryKeyChain.internalValue = value;
  }
  public resetPrimaryKeyChain() {
    this._primaryKeyChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyChainInput() {
    return this._primaryKeyChain.internalValue;
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

  // shared_scope - computed: true, optional: true, required: false
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

  // tags - computed: true, optional: true, required: false
  private _tags = new FabricMacSecPolicyTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FabricMacSecPolicyTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // version_context - computed: true, optional: true, required: false
  private _versionContext = new FabricMacSecPolicyVersionContextList(this, "version_context", false);
  public get versionContext() {
    return this._versionContext;
  }
  public putVersionContext(value: FabricMacSecPolicyVersionContext[] | cdktf.IResolvable) {
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
      ancestors: cdktf.listMapper(fabricMacSecPolicyAncestorsToTerraform, false)(this._ancestors.internalValue),
      cipher_suite: cdktf.stringToTerraform(this._cipherSuite),
      class_id: cdktf.stringToTerraform(this._classId),
      confidentiality_offset: cdktf.stringToTerraform(this._confidentialityOffset),
      create_time: cdktf.stringToTerraform(this._createTime),
      description: cdktf.stringToTerraform(this._description),
      domain_group_moid: cdktf.stringToTerraform(this._domainGroupMoid),
      fallback_key_chain: cdktf.listMapper(fabricMacSecPolicyFallbackKeyChainToTerraform, false)(this._fallbackKeyChain.internalValue),
      id: cdktf.stringToTerraform(this._id),
      include_icv_indicator: cdktf.booleanToTerraform(this._includeIcvIndicator),
      key_server_priority: cdktf.numberToTerraform(this._keyServerPriority),
      mac_sec_ea_pol: cdktf.listMapper(fabricMacSecPolicyMacSecEaPolToTerraform, false)(this._macSecEaPol.internalValue),
      mod_time: cdktf.stringToTerraform(this._modTime),
      moid: cdktf.stringToTerraform(this._moid),
      name: cdktf.stringToTerraform(this._name),
      object_type: cdktf.stringToTerraform(this._objectType),
      organization: cdktf.listMapper(fabricMacSecPolicyOrganizationToTerraform, false)(this._organization.internalValue),
      owners: cdktf.listMapper(cdktf.stringToTerraform, false)(this._owners),
      parent: cdktf.listMapper(fabricMacSecPolicyParentToTerraform, false)(this._parent.internalValue),
      permission_resources: cdktf.listMapper(fabricMacSecPolicyPermissionResourcesToTerraform, false)(this._permissionResources.internalValue),
      primary_key_chain: cdktf.listMapper(fabricMacSecPolicyPrimaryKeyChainToTerraform, false)(this._primaryKeyChain.internalValue),
      replay_window_size: cdktf.numberToTerraform(this._replayWindowSize),
      sak_expiry_time: cdktf.numberToTerraform(this._sakExpiryTime),
      security_policy: cdktf.stringToTerraform(this._securityPolicy),
      shared_scope: cdktf.stringToTerraform(this._sharedScope),
      tags: cdktf.listMapper(fabricMacSecPolicyTagsToTerraform, false)(this._tags.internalValue),
      version_context: cdktf.listMapper(fabricMacSecPolicyVersionContextToTerraform, false)(this._versionContext.internalValue),
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
      ancestors: {
        value: cdktf.listMapperHcl(fabricMacSecPolicyAncestorsToHclTerraform, false)(this._ancestors.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricMacSecPolicyAncestorsList",
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
      fallback_key_chain: {
        value: cdktf.listMapperHcl(fabricMacSecPolicyFallbackKeyChainToHclTerraform, false)(this._fallbackKeyChain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricMacSecPolicyFallbackKeyChainList",
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
      mac_sec_ea_pol: {
        value: cdktf.listMapperHcl(fabricMacSecPolicyMacSecEaPolToHclTerraform, false)(this._macSecEaPol.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricMacSecPolicyMacSecEaPolList",
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
      organization: {
        value: cdktf.listMapperHcl(fabricMacSecPolicyOrganizationToHclTerraform, false)(this._organization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricMacSecPolicyOrganizationList",
      },
      owners: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._owners),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      parent: {
        value: cdktf.listMapperHcl(fabricMacSecPolicyParentToHclTerraform, false)(this._parent.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricMacSecPolicyParentList",
      },
      permission_resources: {
        value: cdktf.listMapperHcl(fabricMacSecPolicyPermissionResourcesToHclTerraform, false)(this._permissionResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricMacSecPolicyPermissionResourcesList",
      },
      primary_key_chain: {
        value: cdktf.listMapperHcl(fabricMacSecPolicyPrimaryKeyChainToHclTerraform, false)(this._primaryKeyChain.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricMacSecPolicyPrimaryKeyChainList",
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
      tags: {
        value: cdktf.listMapperHcl(fabricMacSecPolicyTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricMacSecPolicyTagsList",
      },
      version_context: {
        value: cdktf.listMapperHcl(fabricMacSecPolicyVersionContextToHclTerraform, false)(this._versionContext.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FabricMacSecPolicyVersionContextList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
