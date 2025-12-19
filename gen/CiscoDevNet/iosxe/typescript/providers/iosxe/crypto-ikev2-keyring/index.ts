// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CryptoIkev2KeyringConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#device CryptoIkev2Keyring#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#name CryptoIkev2Keyring#name}
  */
  readonly name: string;
  /**
  * Configure a Peer and associated keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#peers CryptoIkev2Keyring#peers}
  */
  readonly peers?: CryptoIkev2KeyringPeers[] | cdktf.IResolvable;
}
export interface CryptoIkev2KeyringPeers {
  /**
  * Specify a description of this peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#description CryptoIkev2Keyring#description}
  */
  readonly description?: string;
  /**
  * Hostname of peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#hostname CryptoIkev2Keyring#hostname}
  */
  readonly hostname?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#identity_address CryptoIkev2Keyring#identity_address}
  */
  readonly identityAddress?: string;
  /**
  * email Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#identity_email_domain CryptoIkev2Keyring#identity_email_domain}
  */
  readonly identityEmailDomain?: string;
  /**
  * Specify the name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#identity_email_name CryptoIkev2Keyring#identity_email_name}
  */
  readonly identityEmailName?: string;
  /**
  * email Domain Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#identity_fqdn_domain CryptoIkev2Keyring#identity_fqdn_domain}
  */
  readonly identityFqdnDomain?: string;
  /**
  * Specify the name string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#identity_fqdn_name CryptoIkev2Keyring#identity_fqdn_name}
  */
  readonly identityFqdnName?: string;
  /**
  * proprietary types of identification (ID KEY ID)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#identity_key_id CryptoIkev2Keyring#identity_key_id}
  */
  readonly identityKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#ipv4_address CryptoIkev2Keyring#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#ipv4_mask CryptoIkev2Keyring#ipv4_mask}
  */
  readonly ipv4Mask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#ipv6_prefix CryptoIkev2Keyring#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#name CryptoIkev2Keyring#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#pre_shared_key CryptoIkev2Keyring#pre_shared_key}
  */
  readonly preSharedKey?: string;
  /**
  * 
  *   - Choices: `0`, `6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#pre_shared_key_encryption CryptoIkev2Keyring#pre_shared_key_encryption}
  */
  readonly preSharedKeyEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#pre_shared_key_local CryptoIkev2Keyring#pre_shared_key_local}
  */
  readonly preSharedKeyLocal?: string;
  /**
  * 
  *   - Choices: `0`, `6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#pre_shared_key_local_encryption CryptoIkev2Keyring#pre_shared_key_local_encryption}
  */
  readonly preSharedKeyLocalEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#pre_shared_key_remote CryptoIkev2Keyring#pre_shared_key_remote}
  */
  readonly preSharedKeyRemote?: string;
  /**
  * 
  *   - Choices: `0`, `6`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#pre_shared_key_remote_encryption CryptoIkev2Keyring#pre_shared_key_remote_encryption}
  */
  readonly preSharedKeyRemoteEncryption?: string;
}

export function cryptoIkev2KeyringPeersToTerraform(struct?: CryptoIkev2KeyringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    identity_address: cdktf.stringToTerraform(struct!.identityAddress),
    identity_email_domain: cdktf.stringToTerraform(struct!.identityEmailDomain),
    identity_email_name: cdktf.stringToTerraform(struct!.identityEmailName),
    identity_fqdn_domain: cdktf.stringToTerraform(struct!.identityFqdnDomain),
    identity_fqdn_name: cdktf.stringToTerraform(struct!.identityFqdnName),
    identity_key_id: cdktf.stringToTerraform(struct!.identityKeyId),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_mask: cdktf.stringToTerraform(struct!.ipv4Mask),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    name: cdktf.stringToTerraform(struct!.name),
    pre_shared_key: cdktf.stringToTerraform(struct!.preSharedKey),
    pre_shared_key_encryption: cdktf.stringToTerraform(struct!.preSharedKeyEncryption),
    pre_shared_key_local: cdktf.stringToTerraform(struct!.preSharedKeyLocal),
    pre_shared_key_local_encryption: cdktf.stringToTerraform(struct!.preSharedKeyLocalEncryption),
    pre_shared_key_remote: cdktf.stringToTerraform(struct!.preSharedKeyRemote),
    pre_shared_key_remote_encryption: cdktf.stringToTerraform(struct!.preSharedKeyRemoteEncryption),
  }
}


export function cryptoIkev2KeyringPeersToHclTerraform(struct?: CryptoIkev2KeyringPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_address: {
      value: cdktf.stringToHclTerraform(struct!.identityAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_email_domain: {
      value: cdktf.stringToHclTerraform(struct!.identityEmailDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_email_name: {
      value: cdktf.stringToHclTerraform(struct!.identityEmailName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_fqdn_domain: {
      value: cdktf.stringToHclTerraform(struct!.identityFqdnDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_fqdn_name: {
      value: cdktf.stringToHclTerraform(struct!.identityFqdnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_key_id: {
      value: cdktf.stringToHclTerraform(struct!.identityKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
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
    pre_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_shared_key_encryption: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKeyEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_shared_key_local: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKeyLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_shared_key_local_encryption: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKeyLocalEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_shared_key_remote: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKeyRemote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_shared_key_remote_encryption: {
      value: cdktf.stringToHclTerraform(struct!.preSharedKeyRemoteEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CryptoIkev2KeyringPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CryptoIkev2KeyringPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._identityAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityAddress = this._identityAddress;
    }
    if (this._identityEmailDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityEmailDomain = this._identityEmailDomain;
    }
    if (this._identityEmailName !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityEmailName = this._identityEmailName;
    }
    if (this._identityFqdnDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityFqdnDomain = this._identityFqdnDomain;
    }
    if (this._identityFqdnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityFqdnName = this._identityFqdnName;
    }
    if (this._identityKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityKeyId = this._identityKeyId;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Mask = this._ipv4Mask;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKey = this._preSharedKey;
    }
    if (this._preSharedKeyEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKeyEncryption = this._preSharedKeyEncryption;
    }
    if (this._preSharedKeyLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKeyLocal = this._preSharedKeyLocal;
    }
    if (this._preSharedKeyLocalEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKeyLocalEncryption = this._preSharedKeyLocalEncryption;
    }
    if (this._preSharedKeyRemote !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKeyRemote = this._preSharedKeyRemote;
    }
    if (this._preSharedKeyRemoteEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.preSharedKeyRemoteEncryption = this._preSharedKeyRemoteEncryption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CryptoIkev2KeyringPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._hostname = undefined;
      this._identityAddress = undefined;
      this._identityEmailDomain = undefined;
      this._identityEmailName = undefined;
      this._identityFqdnDomain = undefined;
      this._identityFqdnName = undefined;
      this._identityKeyId = undefined;
      this._ipv4Address = undefined;
      this._ipv4Mask = undefined;
      this._ipv6Prefix = undefined;
      this._name = undefined;
      this._preSharedKey = undefined;
      this._preSharedKeyEncryption = undefined;
      this._preSharedKeyLocal = undefined;
      this._preSharedKeyLocalEncryption = undefined;
      this._preSharedKeyRemote = undefined;
      this._preSharedKeyRemoteEncryption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._hostname = value.hostname;
      this._identityAddress = value.identityAddress;
      this._identityEmailDomain = value.identityEmailDomain;
      this._identityEmailName = value.identityEmailName;
      this._identityFqdnDomain = value.identityFqdnDomain;
      this._identityFqdnName = value.identityFqdnName;
      this._identityKeyId = value.identityKeyId;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Mask = value.ipv4Mask;
      this._ipv6Prefix = value.ipv6Prefix;
      this._name = value.name;
      this._preSharedKey = value.preSharedKey;
      this._preSharedKeyEncryption = value.preSharedKeyEncryption;
      this._preSharedKeyLocal = value.preSharedKeyLocal;
      this._preSharedKeyLocalEncryption = value.preSharedKeyLocalEncryption;
      this._preSharedKeyRemote = value.preSharedKeyRemote;
      this._preSharedKeyRemoteEncryption = value.preSharedKeyRemoteEncryption;
    }
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // identity_address - computed: false, optional: true, required: false
  private _identityAddress?: string; 
  public get identityAddress() {
    return this.getStringAttribute('identity_address');
  }
  public set identityAddress(value: string) {
    this._identityAddress = value;
  }
  public resetIdentityAddress() {
    this._identityAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityAddressInput() {
    return this._identityAddress;
  }

  // identity_email_domain - computed: false, optional: true, required: false
  private _identityEmailDomain?: string; 
  public get identityEmailDomain() {
    return this.getStringAttribute('identity_email_domain');
  }
  public set identityEmailDomain(value: string) {
    this._identityEmailDomain = value;
  }
  public resetIdentityEmailDomain() {
    this._identityEmailDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityEmailDomainInput() {
    return this._identityEmailDomain;
  }

  // identity_email_name - computed: false, optional: true, required: false
  private _identityEmailName?: string; 
  public get identityEmailName() {
    return this.getStringAttribute('identity_email_name');
  }
  public set identityEmailName(value: string) {
    this._identityEmailName = value;
  }
  public resetIdentityEmailName() {
    this._identityEmailName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityEmailNameInput() {
    return this._identityEmailName;
  }

  // identity_fqdn_domain - computed: false, optional: true, required: false
  private _identityFqdnDomain?: string; 
  public get identityFqdnDomain() {
    return this.getStringAttribute('identity_fqdn_domain');
  }
  public set identityFqdnDomain(value: string) {
    this._identityFqdnDomain = value;
  }
  public resetIdentityFqdnDomain() {
    this._identityFqdnDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityFqdnDomainInput() {
    return this._identityFqdnDomain;
  }

  // identity_fqdn_name - computed: false, optional: true, required: false
  private _identityFqdnName?: string; 
  public get identityFqdnName() {
    return this.getStringAttribute('identity_fqdn_name');
  }
  public set identityFqdnName(value: string) {
    this._identityFqdnName = value;
  }
  public resetIdentityFqdnName() {
    this._identityFqdnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityFqdnNameInput() {
    return this._identityFqdnName;
  }

  // identity_key_id - computed: false, optional: true, required: false
  private _identityKeyId?: string; 
  public get identityKeyId() {
    return this.getStringAttribute('identity_key_id');
  }
  public set identityKeyId(value: string) {
    this._identityKeyId = value;
  }
  public resetIdentityKeyId() {
    this._identityKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityKeyIdInput() {
    return this._identityKeyId;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_mask - computed: false, optional: true, required: false
  private _ipv4Mask?: string; 
  public get ipv4Mask() {
    return this.getStringAttribute('ipv4_mask');
  }
  public set ipv4Mask(value: string) {
    this._ipv4Mask = value;
  }
  public resetIpv4Mask() {
    this._ipv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4MaskInput() {
    return this._ipv4Mask;
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
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

  // pre_shared_key - computed: false, optional: true, required: false
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  public resetPreSharedKey() {
    this._preSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // pre_shared_key_encryption - computed: false, optional: true, required: false
  private _preSharedKeyEncryption?: string; 
  public get preSharedKeyEncryption() {
    return this.getStringAttribute('pre_shared_key_encryption');
  }
  public set preSharedKeyEncryption(value: string) {
    this._preSharedKeyEncryption = value;
  }
  public resetPreSharedKeyEncryption() {
    this._preSharedKeyEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyEncryptionInput() {
    return this._preSharedKeyEncryption;
  }

  // pre_shared_key_local - computed: false, optional: true, required: false
  private _preSharedKeyLocal?: string; 
  public get preSharedKeyLocal() {
    return this.getStringAttribute('pre_shared_key_local');
  }
  public set preSharedKeyLocal(value: string) {
    this._preSharedKeyLocal = value;
  }
  public resetPreSharedKeyLocal() {
    this._preSharedKeyLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyLocalInput() {
    return this._preSharedKeyLocal;
  }

  // pre_shared_key_local_encryption - computed: false, optional: true, required: false
  private _preSharedKeyLocalEncryption?: string; 
  public get preSharedKeyLocalEncryption() {
    return this.getStringAttribute('pre_shared_key_local_encryption');
  }
  public set preSharedKeyLocalEncryption(value: string) {
    this._preSharedKeyLocalEncryption = value;
  }
  public resetPreSharedKeyLocalEncryption() {
    this._preSharedKeyLocalEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyLocalEncryptionInput() {
    return this._preSharedKeyLocalEncryption;
  }

  // pre_shared_key_remote - computed: false, optional: true, required: false
  private _preSharedKeyRemote?: string; 
  public get preSharedKeyRemote() {
    return this.getStringAttribute('pre_shared_key_remote');
  }
  public set preSharedKeyRemote(value: string) {
    this._preSharedKeyRemote = value;
  }
  public resetPreSharedKeyRemote() {
    this._preSharedKeyRemote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyRemoteInput() {
    return this._preSharedKeyRemote;
  }

  // pre_shared_key_remote_encryption - computed: false, optional: true, required: false
  private _preSharedKeyRemoteEncryption?: string; 
  public get preSharedKeyRemoteEncryption() {
    return this.getStringAttribute('pre_shared_key_remote_encryption');
  }
  public set preSharedKeyRemoteEncryption(value: string) {
    this._preSharedKeyRemoteEncryption = value;
  }
  public resetPreSharedKeyRemoteEncryption() {
    this._preSharedKeyRemoteEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyRemoteEncryptionInput() {
    return this._preSharedKeyRemoteEncryption;
  }
}

export class CryptoIkev2KeyringPeersList extends cdktf.ComplexList {
  public internalValue? : CryptoIkev2KeyringPeers[] | cdktf.IResolvable

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
  public get(index: number): CryptoIkev2KeyringPeersOutputReference {
    return new CryptoIkev2KeyringPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring iosxe_crypto_ikev2_keyring}
*/
export class CryptoIkev2Keyring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_ikev2_keyring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CryptoIkev2Keyring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CryptoIkev2Keyring to import
  * @param importFromId The id of the existing CryptoIkev2Keyring that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CryptoIkev2Keyring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_ikev2_keyring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.14.6/docs/resources/crypto_ikev2_keyring iosxe_crypto_ikev2_keyring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CryptoIkev2KeyringConfig
  */
  public constructor(scope: Construct, id: string, config: CryptoIkev2KeyringConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto_ikev2_keyring',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.14.6',
        providerVersionConstraint: '0.14.6'
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
    this._name = config.name;
    this._peers.internalValue = config.peers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // peers - computed: false, optional: true, required: false
  private _peers = new CryptoIkev2KeyringPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: CryptoIkev2KeyringPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      name: cdktf.stringToTerraform(this._name),
      peers: cdktf.listMapper(cryptoIkev2KeyringPeersToTerraform, false)(this._peers.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peers: {
        value: cdktf.listMapperHcl(cryptoIkev2KeyringPeersToHclTerraform, false)(this._peers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CryptoIkev2KeyringPeersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
