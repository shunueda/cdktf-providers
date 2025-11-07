// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIsisInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Address Family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#bfd_fast_detect_ipv4 RouterIsisInterface#bfd_fast_detect_ipv4}
  */
  readonly bfdFastDetectIpv4?: boolean | cdktf.IResolvable;
  /**
  * Address Family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#bfd_fast_detect_ipv6 RouterIsisInterface#bfd_fast_detect_ipv6}
  */
  readonly bfdFastDetectIpv6?: boolean | cdktf.IResolvable;
  /**
  * Hello interval
  *   - Range: `3`-`30000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#bfd_minimum_interval RouterIsisInterface#bfd_minimum_interval}
  */
  readonly bfdMinimumInterval?: number;
  /**
  * Detect multiplier
  *   - Range: `2`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#bfd_multiplier RouterIsisInterface#bfd_multiplier}
  */
  readonly bfdMultiplier?: number;
  /**
  * Configure circuit type for interface
  *   - Choices: `level-1`, `level-1-2`, `level-2-only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#circuit_type RouterIsisInterface#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#delete_mode RouterIsisInterface#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#device RouterIsisInterface#device}
  */
  readonly device?: string;
  /**
  * Add padding to IS-IS hello packets
  *   - Choices: `adaptive`, `always`, `disable`, `sometimes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_padding RouterIsisInterface#hello_padding}
  */
  readonly helloPadding?: string;
  /**
  * Set hello-padding for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_padding_levels RouterIsisInterface#hello_padding_levels}
  */
  readonly helloPaddingLevels?: RouterIsisInterfaceHelloPaddingLevels[] | cdktf.IResolvable;
  /**
  * Specifies a password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_accept_encrypted RouterIsisInterface#hello_password_accept_encrypted}
  */
  readonly helloPasswordAcceptEncrypted?: string;
  /**
  * Set hello-password for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_accepts_levels RouterIsisInterface#hello_password_accepts_levels}
  */
  readonly helloPasswordAcceptsLevels?: RouterIsisInterfaceHelloPasswordAcceptsLevels[] | cdktf.IResolvable;
  /**
  * Specifies a password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_hmac_md5_encrypted RouterIsisInterface#hello_password_hmac_md5_encrypted}
  */
  readonly helloPasswordHmacMd5Encrypted?: string;
  /**
  * Do not require authentication of incoming IIHs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_hmac_md5_send_only RouterIsisInterface#hello_password_hmac_md5_send_only}
  */
  readonly helloPasswordHmacMd5SendOnly?: boolean | cdktf.IResolvable;
  /**
  * Specifies a Key Chain name will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_keychain_name RouterIsisInterface#hello_password_keychain_name}
  */
  readonly helloPasswordKeychainName?: string;
  /**
  * Do not require authentication of incoming IIHs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_keychain_send_only RouterIsisInterface#hello_password_keychain_send_only}
  */
  readonly helloPasswordKeychainSendOnly?: boolean | cdktf.IResolvable;
  /**
  * Set hello-password for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_levels RouterIsisInterface#hello_password_levels}
  */
  readonly helloPasswordLevels?: RouterIsisInterfaceHelloPasswordLevels[] | cdktf.IResolvable;
  /**
  * Specifies a password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_text_encrypted RouterIsisInterface#hello_password_text_encrypted}
  */
  readonly helloPasswordTextEncrypted?: string;
  /**
  * Do not require authentication of incoming IIHs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_text_send_only RouterIsisInterface#hello_password_text_send_only}
  */
  readonly helloPasswordTextSendOnly?: boolean | cdktf.IResolvable;
  /**
  * Interface to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#interface_name RouterIsisInterface#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Treat active LAN interface as point-to-point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#point_to_point RouterIsisInterface#point_to_point}
  */
  readonly pointToPoint?: boolean | cdktf.IResolvable;
  /**
  * Set priority for Designated Router election
  *   - Range: `0`-`127`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#priority RouterIsisInterface#priority}
  */
  readonly priority?: number;
  /**
  * Set priority for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#priority_levels RouterIsisInterface#priority_levels}
  */
  readonly priorityLevels?: RouterIsisInterfacePriorityLevels[] | cdktf.IResolvable;
  /**
  * Process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#process_id RouterIsisInterface#process_id}
  */
  readonly processId: string;
  /**
  * Do not establish adjacencies over this interface
  *   - Choices: `passive`, `shutdown`, `suppressed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#state RouterIsisInterface#state}
  */
  readonly state?: string;
}
export interface RouterIsisInterfaceHelloPaddingLevels {
  /**
  * hello-padding
  *   - Choices: `adaptive`, `always`, `disable`, `sometimes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_padding RouterIsisInterface#hello_padding}
  */
  readonly helloPadding: string;
  /**
  * Set hello-padding for IIHs at this level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#level_number RouterIsisInterface#level_number}
  */
  readonly levelNumber: number;
}

export function routerIsisInterfaceHelloPaddingLevelsToTerraform(struct?: RouterIsisInterfaceHelloPaddingLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_padding: cdktf.stringToTerraform(struct!.helloPadding),
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
  }
}


export function routerIsisInterfaceHelloPaddingLevelsToHclTerraform(struct?: RouterIsisInterfaceHelloPaddingLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_padding: {
      value: cdktf.stringToHclTerraform(struct!.helloPadding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisInterfaceHelloPaddingLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterfaceHelloPaddingLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloPadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloPadding = this._helloPadding;
    }
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisInterfaceHelloPaddingLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloPadding = undefined;
      this._levelNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloPadding = value.helloPadding;
      this._levelNumber = value.levelNumber;
    }
  }

  // hello_padding - computed: false, optional: false, required: true
  private _helloPadding?: string; 
  public get helloPadding() {
    return this.getStringAttribute('hello_padding');
  }
  public set helloPadding(value: string) {
    this._helloPadding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPaddingInput() {
    return this._helloPadding;
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }
}

export class RouterIsisInterfaceHelloPaddingLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterfaceHelloPaddingLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfaceHelloPaddingLevelsOutputReference {
    return new RouterIsisInterfaceHelloPaddingLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisInterfaceHelloPasswordAcceptsLevels {
  /**
  * Specifies a password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#encrypted RouterIsisInterface#encrypted}
  */
  readonly encrypted: string;
  /**
  * Set hello-password for IIHs at this level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#level_number RouterIsisInterface#level_number}
  */
  readonly levelNumber: number;
}

export function routerIsisInterfaceHelloPasswordAcceptsLevelsToTerraform(struct?: RouterIsisInterfaceHelloPasswordAcceptsLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
  }
}


export function routerIsisInterfaceHelloPasswordAcceptsLevelsToHclTerraform(struct?: RouterIsisInterfaceHelloPasswordAcceptsLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisInterfaceHelloPasswordAcceptsLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterfaceHelloPasswordAcceptsLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisInterfaceHelloPasswordAcceptsLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._levelNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._levelNumber = value.levelNumber;
    }
  }

  // encrypted - computed: false, optional: false, required: true
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }
}

export class RouterIsisInterfaceHelloPasswordAcceptsLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterfaceHelloPasswordAcceptsLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfaceHelloPasswordAcceptsLevelsOutputReference {
    return new RouterIsisInterfaceHelloPasswordAcceptsLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisInterfaceHelloPasswordLevels {
  /**
  * Specifies a Key Chain name will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_keychain_name RouterIsisInterface#hello_keychain_name}
  */
  readonly helloKeychainName?: string;
  /**
  * Do not require authentication of incoming IIHs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_keychain_send_only RouterIsisInterface#hello_keychain_send_only}
  */
  readonly helloKeychainSendOnly?: boolean | cdktf.IResolvable;
  /**
  * Specifies a password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_hmac_md5_encrypted RouterIsisInterface#hello_password_hmac_md5_encrypted}
  */
  readonly helloPasswordHmacMd5Encrypted?: string;
  /**
  * Do not require authentication of incoming IIHs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_hmac_md5_send_only RouterIsisInterface#hello_password_hmac_md5_send_only}
  */
  readonly helloPasswordHmacMd5SendOnly?: boolean | cdktf.IResolvable;
  /**
  * Specifies a password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_text_encrypted RouterIsisInterface#hello_password_text_encrypted}
  */
  readonly helloPasswordTextEncrypted?: string;
  /**
  * Do not require authentication of incoming IIHs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#hello_password_text_send_only RouterIsisInterface#hello_password_text_send_only}
  */
  readonly helloPasswordTextSendOnly?: boolean | cdktf.IResolvable;
  /**
  * Set hello-password for one level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#level_number RouterIsisInterface#level_number}
  */
  readonly levelNumber: number;
}

export function routerIsisInterfaceHelloPasswordLevelsToTerraform(struct?: RouterIsisInterfaceHelloPasswordLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hello_keychain_name: cdktf.stringToTerraform(struct!.helloKeychainName),
    hello_keychain_send_only: cdktf.booleanToTerraform(struct!.helloKeychainSendOnly),
    hello_password_hmac_md5_encrypted: cdktf.stringToTerraform(struct!.helloPasswordHmacMd5Encrypted),
    hello_password_hmac_md5_send_only: cdktf.booleanToTerraform(struct!.helloPasswordHmacMd5SendOnly),
    hello_password_text_encrypted: cdktf.stringToTerraform(struct!.helloPasswordTextEncrypted),
    hello_password_text_send_only: cdktf.booleanToTerraform(struct!.helloPasswordTextSendOnly),
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
  }
}


export function routerIsisInterfaceHelloPasswordLevelsToHclTerraform(struct?: RouterIsisInterfaceHelloPasswordLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hello_keychain_name: {
      value: cdktf.stringToHclTerraform(struct!.helloKeychainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_keychain_send_only: {
      value: cdktf.booleanToHclTerraform(struct!.helloKeychainSendOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hello_password_hmac_md5_encrypted: {
      value: cdktf.stringToHclTerraform(struct!.helloPasswordHmacMd5Encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_password_hmac_md5_send_only: {
      value: cdktf.booleanToHclTerraform(struct!.helloPasswordHmacMd5SendOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hello_password_text_encrypted: {
      value: cdktf.stringToHclTerraform(struct!.helloPasswordTextEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_password_text_send_only: {
      value: cdktf.booleanToHclTerraform(struct!.helloPasswordTextSendOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisInterfaceHelloPasswordLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterfaceHelloPasswordLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helloKeychainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloKeychainName = this._helloKeychainName;
    }
    if (this._helloKeychainSendOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloKeychainSendOnly = this._helloKeychainSendOnly;
    }
    if (this._helloPasswordHmacMd5Encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloPasswordHmacMd5Encrypted = this._helloPasswordHmacMd5Encrypted;
    }
    if (this._helloPasswordHmacMd5SendOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloPasswordHmacMd5SendOnly = this._helloPasswordHmacMd5SendOnly;
    }
    if (this._helloPasswordTextEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloPasswordTextEncrypted = this._helloPasswordTextEncrypted;
    }
    if (this._helloPasswordTextSendOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloPasswordTextSendOnly = this._helloPasswordTextSendOnly;
    }
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisInterfaceHelloPasswordLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helloKeychainName = undefined;
      this._helloKeychainSendOnly = undefined;
      this._helloPasswordHmacMd5Encrypted = undefined;
      this._helloPasswordHmacMd5SendOnly = undefined;
      this._helloPasswordTextEncrypted = undefined;
      this._helloPasswordTextSendOnly = undefined;
      this._levelNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helloKeychainName = value.helloKeychainName;
      this._helloKeychainSendOnly = value.helloKeychainSendOnly;
      this._helloPasswordHmacMd5Encrypted = value.helloPasswordHmacMd5Encrypted;
      this._helloPasswordHmacMd5SendOnly = value.helloPasswordHmacMd5SendOnly;
      this._helloPasswordTextEncrypted = value.helloPasswordTextEncrypted;
      this._helloPasswordTextSendOnly = value.helloPasswordTextSendOnly;
      this._levelNumber = value.levelNumber;
    }
  }

  // hello_keychain_name - computed: false, optional: true, required: false
  private _helloKeychainName?: string; 
  public get helloKeychainName() {
    return this.getStringAttribute('hello_keychain_name');
  }
  public set helloKeychainName(value: string) {
    this._helloKeychainName = value;
  }
  public resetHelloKeychainName() {
    this._helloKeychainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloKeychainNameInput() {
    return this._helloKeychainName;
  }

  // hello_keychain_send_only - computed: false, optional: true, required: false
  private _helloKeychainSendOnly?: boolean | cdktf.IResolvable; 
  public get helloKeychainSendOnly() {
    return this.getBooleanAttribute('hello_keychain_send_only');
  }
  public set helloKeychainSendOnly(value: boolean | cdktf.IResolvable) {
    this._helloKeychainSendOnly = value;
  }
  public resetHelloKeychainSendOnly() {
    this._helloKeychainSendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloKeychainSendOnlyInput() {
    return this._helloKeychainSendOnly;
  }

  // hello_password_hmac_md5_encrypted - computed: false, optional: true, required: false
  private _helloPasswordHmacMd5Encrypted?: string; 
  public get helloPasswordHmacMd5Encrypted() {
    return this.getStringAttribute('hello_password_hmac_md5_encrypted');
  }
  public set helloPasswordHmacMd5Encrypted(value: string) {
    this._helloPasswordHmacMd5Encrypted = value;
  }
  public resetHelloPasswordHmacMd5Encrypted() {
    this._helloPasswordHmacMd5Encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordHmacMd5EncryptedInput() {
    return this._helloPasswordHmacMd5Encrypted;
  }

  // hello_password_hmac_md5_send_only - computed: false, optional: true, required: false
  private _helloPasswordHmacMd5SendOnly?: boolean | cdktf.IResolvable; 
  public get helloPasswordHmacMd5SendOnly() {
    return this.getBooleanAttribute('hello_password_hmac_md5_send_only');
  }
  public set helloPasswordHmacMd5SendOnly(value: boolean | cdktf.IResolvable) {
    this._helloPasswordHmacMd5SendOnly = value;
  }
  public resetHelloPasswordHmacMd5SendOnly() {
    this._helloPasswordHmacMd5SendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordHmacMd5SendOnlyInput() {
    return this._helloPasswordHmacMd5SendOnly;
  }

  // hello_password_text_encrypted - computed: false, optional: true, required: false
  private _helloPasswordTextEncrypted?: string; 
  public get helloPasswordTextEncrypted() {
    return this.getStringAttribute('hello_password_text_encrypted');
  }
  public set helloPasswordTextEncrypted(value: string) {
    this._helloPasswordTextEncrypted = value;
  }
  public resetHelloPasswordTextEncrypted() {
    this._helloPasswordTextEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordTextEncryptedInput() {
    return this._helloPasswordTextEncrypted;
  }

  // hello_password_text_send_only - computed: false, optional: true, required: false
  private _helloPasswordTextSendOnly?: boolean | cdktf.IResolvable; 
  public get helloPasswordTextSendOnly() {
    return this.getBooleanAttribute('hello_password_text_send_only');
  }
  public set helloPasswordTextSendOnly(value: boolean | cdktf.IResolvable) {
    this._helloPasswordTextSendOnly = value;
  }
  public resetHelloPasswordTextSendOnly() {
    this._helloPasswordTextSendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordTextSendOnlyInput() {
    return this._helloPasswordTextSendOnly;
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }
}

export class RouterIsisInterfaceHelloPasswordLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterfaceHelloPasswordLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfaceHelloPasswordLevelsOutputReference {
    return new RouterIsisInterfaceHelloPasswordLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisInterfacePriorityLevels {
  /**
  * Set priority for this level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#level_number RouterIsisInterface#level_number}
  */
  readonly levelNumber: number;
  /**
  * Set priority for Designated Router election
  *   - Range: `0`-`127`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#priority RouterIsisInterface#priority}
  */
  readonly priority: number;
}

export function routerIsisInterfacePriorityLevelsToTerraform(struct?: RouterIsisInterfacePriorityLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function routerIsisInterfacePriorityLevelsToHclTerraform(struct?: RouterIsisInterfacePriorityLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisInterfacePriorityLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterfacePriorityLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisInterfacePriorityLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._priority = value.priority;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class RouterIsisInterfacePriorityLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterfacePriorityLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfacePriorityLevelsOutputReference {
    return new RouterIsisInterfacePriorityLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface iosxr_router_isis_interface}
*/
export class RouterIsisInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_isis_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIsisInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIsisInterface to import
  * @param importFromId The id of the existing RouterIsisInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIsisInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_isis_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis_interface iosxr_router_isis_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIsisInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: RouterIsisInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_isis_interface',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bfdFastDetectIpv4 = config.bfdFastDetectIpv4;
    this._bfdFastDetectIpv6 = config.bfdFastDetectIpv6;
    this._bfdMinimumInterval = config.bfdMinimumInterval;
    this._bfdMultiplier = config.bfdMultiplier;
    this._circuitType = config.circuitType;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._helloPadding = config.helloPadding;
    this._helloPaddingLevels.internalValue = config.helloPaddingLevels;
    this._helloPasswordAcceptEncrypted = config.helloPasswordAcceptEncrypted;
    this._helloPasswordAcceptsLevels.internalValue = config.helloPasswordAcceptsLevels;
    this._helloPasswordHmacMd5Encrypted = config.helloPasswordHmacMd5Encrypted;
    this._helloPasswordHmacMd5SendOnly = config.helloPasswordHmacMd5SendOnly;
    this._helloPasswordKeychainName = config.helloPasswordKeychainName;
    this._helloPasswordKeychainSendOnly = config.helloPasswordKeychainSendOnly;
    this._helloPasswordLevels.internalValue = config.helloPasswordLevels;
    this._helloPasswordTextEncrypted = config.helloPasswordTextEncrypted;
    this._helloPasswordTextSendOnly = config.helloPasswordTextSendOnly;
    this._interfaceName = config.interfaceName;
    this._pointToPoint = config.pointToPoint;
    this._priority = config.priority;
    this._priorityLevels.internalValue = config.priorityLevels;
    this._processId = config.processId;
    this._state = config.state;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bfd_fast_detect_ipv4 - computed: false, optional: true, required: false
  private _bfdFastDetectIpv4?: boolean | cdktf.IResolvable; 
  public get bfdFastDetectIpv4() {
    return this.getBooleanAttribute('bfd_fast_detect_ipv4');
  }
  public set bfdFastDetectIpv4(value: boolean | cdktf.IResolvable) {
    this._bfdFastDetectIpv4 = value;
  }
  public resetBfdFastDetectIpv4() {
    this._bfdFastDetectIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectIpv4Input() {
    return this._bfdFastDetectIpv4;
  }

  // bfd_fast_detect_ipv6 - computed: false, optional: true, required: false
  private _bfdFastDetectIpv6?: boolean | cdktf.IResolvable; 
  public get bfdFastDetectIpv6() {
    return this.getBooleanAttribute('bfd_fast_detect_ipv6');
  }
  public set bfdFastDetectIpv6(value: boolean | cdktf.IResolvable) {
    this._bfdFastDetectIpv6 = value;
  }
  public resetBfdFastDetectIpv6() {
    this._bfdFastDetectIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdFastDetectIpv6Input() {
    return this._bfdFastDetectIpv6;
  }

  // bfd_minimum_interval - computed: false, optional: true, required: false
  private _bfdMinimumInterval?: number; 
  public get bfdMinimumInterval() {
    return this.getNumberAttribute('bfd_minimum_interval');
  }
  public set bfdMinimumInterval(value: number) {
    this._bfdMinimumInterval = value;
  }
  public resetBfdMinimumInterval() {
    this._bfdMinimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMinimumIntervalInput() {
    return this._bfdMinimumInterval;
  }

  // bfd_multiplier - computed: false, optional: true, required: false
  private _bfdMultiplier?: number; 
  public get bfdMultiplier() {
    return this.getNumberAttribute('bfd_multiplier');
  }
  public set bfdMultiplier(value: number) {
    this._bfdMultiplier = value;
  }
  public resetBfdMultiplier() {
    this._bfdMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdMultiplierInput() {
    return this._bfdMultiplier;
  }

  // circuit_type - computed: false, optional: true, required: false
  private _circuitType?: string; 
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
  }
  public set circuitType(value: string) {
    this._circuitType = value;
  }
  public resetCircuitType() {
    this._circuitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitTypeInput() {
    return this._circuitType;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // hello_padding - computed: false, optional: true, required: false
  private _helloPadding?: string; 
  public get helloPadding() {
    return this.getStringAttribute('hello_padding');
  }
  public set helloPadding(value: string) {
    this._helloPadding = value;
  }
  public resetHelloPadding() {
    this._helloPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPaddingInput() {
    return this._helloPadding;
  }

  // hello_padding_levels - computed: false, optional: true, required: false
  private _helloPaddingLevels = new RouterIsisInterfaceHelloPaddingLevelsList(this, "hello_padding_levels", false);
  public get helloPaddingLevels() {
    return this._helloPaddingLevels;
  }
  public putHelloPaddingLevels(value: RouterIsisInterfaceHelloPaddingLevels[] | cdktf.IResolvable) {
    this._helloPaddingLevels.internalValue = value;
  }
  public resetHelloPaddingLevels() {
    this._helloPaddingLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPaddingLevelsInput() {
    return this._helloPaddingLevels.internalValue;
  }

  // hello_password_accept_encrypted - computed: false, optional: true, required: false
  private _helloPasswordAcceptEncrypted?: string; 
  public get helloPasswordAcceptEncrypted() {
    return this.getStringAttribute('hello_password_accept_encrypted');
  }
  public set helloPasswordAcceptEncrypted(value: string) {
    this._helloPasswordAcceptEncrypted = value;
  }
  public resetHelloPasswordAcceptEncrypted() {
    this._helloPasswordAcceptEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordAcceptEncryptedInput() {
    return this._helloPasswordAcceptEncrypted;
  }

  // hello_password_accepts_levels - computed: false, optional: true, required: false
  private _helloPasswordAcceptsLevels = new RouterIsisInterfaceHelloPasswordAcceptsLevelsList(this, "hello_password_accepts_levels", false);
  public get helloPasswordAcceptsLevels() {
    return this._helloPasswordAcceptsLevels;
  }
  public putHelloPasswordAcceptsLevels(value: RouterIsisInterfaceHelloPasswordAcceptsLevels[] | cdktf.IResolvable) {
    this._helloPasswordAcceptsLevels.internalValue = value;
  }
  public resetHelloPasswordAcceptsLevels() {
    this._helloPasswordAcceptsLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordAcceptsLevelsInput() {
    return this._helloPasswordAcceptsLevels.internalValue;
  }

  // hello_password_hmac_md5_encrypted - computed: false, optional: true, required: false
  private _helloPasswordHmacMd5Encrypted?: string; 
  public get helloPasswordHmacMd5Encrypted() {
    return this.getStringAttribute('hello_password_hmac_md5_encrypted');
  }
  public set helloPasswordHmacMd5Encrypted(value: string) {
    this._helloPasswordHmacMd5Encrypted = value;
  }
  public resetHelloPasswordHmacMd5Encrypted() {
    this._helloPasswordHmacMd5Encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordHmacMd5EncryptedInput() {
    return this._helloPasswordHmacMd5Encrypted;
  }

  // hello_password_hmac_md5_send_only - computed: false, optional: true, required: false
  private _helloPasswordHmacMd5SendOnly?: boolean | cdktf.IResolvable; 
  public get helloPasswordHmacMd5SendOnly() {
    return this.getBooleanAttribute('hello_password_hmac_md5_send_only');
  }
  public set helloPasswordHmacMd5SendOnly(value: boolean | cdktf.IResolvable) {
    this._helloPasswordHmacMd5SendOnly = value;
  }
  public resetHelloPasswordHmacMd5SendOnly() {
    this._helloPasswordHmacMd5SendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordHmacMd5SendOnlyInput() {
    return this._helloPasswordHmacMd5SendOnly;
  }

  // hello_password_keychain_name - computed: false, optional: true, required: false
  private _helloPasswordKeychainName?: string; 
  public get helloPasswordKeychainName() {
    return this.getStringAttribute('hello_password_keychain_name');
  }
  public set helloPasswordKeychainName(value: string) {
    this._helloPasswordKeychainName = value;
  }
  public resetHelloPasswordKeychainName() {
    this._helloPasswordKeychainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordKeychainNameInput() {
    return this._helloPasswordKeychainName;
  }

  // hello_password_keychain_send_only - computed: false, optional: true, required: false
  private _helloPasswordKeychainSendOnly?: boolean | cdktf.IResolvable; 
  public get helloPasswordKeychainSendOnly() {
    return this.getBooleanAttribute('hello_password_keychain_send_only');
  }
  public set helloPasswordKeychainSendOnly(value: boolean | cdktf.IResolvable) {
    this._helloPasswordKeychainSendOnly = value;
  }
  public resetHelloPasswordKeychainSendOnly() {
    this._helloPasswordKeychainSendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordKeychainSendOnlyInput() {
    return this._helloPasswordKeychainSendOnly;
  }

  // hello_password_levels - computed: false, optional: true, required: false
  private _helloPasswordLevels = new RouterIsisInterfaceHelloPasswordLevelsList(this, "hello_password_levels", false);
  public get helloPasswordLevels() {
    return this._helloPasswordLevels;
  }
  public putHelloPasswordLevels(value: RouterIsisInterfaceHelloPasswordLevels[] | cdktf.IResolvable) {
    this._helloPasswordLevels.internalValue = value;
  }
  public resetHelloPasswordLevels() {
    this._helloPasswordLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordLevelsInput() {
    return this._helloPasswordLevels.internalValue;
  }

  // hello_password_text_encrypted - computed: false, optional: true, required: false
  private _helloPasswordTextEncrypted?: string; 
  public get helloPasswordTextEncrypted() {
    return this.getStringAttribute('hello_password_text_encrypted');
  }
  public set helloPasswordTextEncrypted(value: string) {
    this._helloPasswordTextEncrypted = value;
  }
  public resetHelloPasswordTextEncrypted() {
    this._helloPasswordTextEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordTextEncryptedInput() {
    return this._helloPasswordTextEncrypted;
  }

  // hello_password_text_send_only - computed: false, optional: true, required: false
  private _helloPasswordTextSendOnly?: boolean | cdktf.IResolvable; 
  public get helloPasswordTextSendOnly() {
    return this.getBooleanAttribute('hello_password_text_send_only');
  }
  public set helloPasswordTextSendOnly(value: boolean | cdktf.IResolvable) {
    this._helloPasswordTextSendOnly = value;
  }
  public resetHelloPasswordTextSendOnly() {
    this._helloPasswordTextSendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPasswordTextSendOnlyInput() {
    return this._helloPasswordTextSendOnly;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // point_to_point - computed: false, optional: true, required: false
  private _pointToPoint?: boolean | cdktf.IResolvable; 
  public get pointToPoint() {
    return this.getBooleanAttribute('point_to_point');
  }
  public set pointToPoint(value: boolean | cdktf.IResolvable) {
    this._pointToPoint = value;
  }
  public resetPointToPoint() {
    this._pointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToPointInput() {
    return this._pointToPoint;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priority_levels - computed: false, optional: true, required: false
  private _priorityLevels = new RouterIsisInterfacePriorityLevelsList(this, "priority_levels", false);
  public get priorityLevels() {
    return this._priorityLevels;
  }
  public putPriorityLevels(value: RouterIsisInterfacePriorityLevels[] | cdktf.IResolvable) {
    this._priorityLevels.internalValue = value;
  }
  public resetPriorityLevels() {
    this._priorityLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityLevelsInput() {
    return this._priorityLevels.internalValue;
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bfd_fast_detect_ipv4: cdktf.booleanToTerraform(this._bfdFastDetectIpv4),
      bfd_fast_detect_ipv6: cdktf.booleanToTerraform(this._bfdFastDetectIpv6),
      bfd_minimum_interval: cdktf.numberToTerraform(this._bfdMinimumInterval),
      bfd_multiplier: cdktf.numberToTerraform(this._bfdMultiplier),
      circuit_type: cdktf.stringToTerraform(this._circuitType),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      hello_padding: cdktf.stringToTerraform(this._helloPadding),
      hello_padding_levels: cdktf.listMapper(routerIsisInterfaceHelloPaddingLevelsToTerraform, false)(this._helloPaddingLevels.internalValue),
      hello_password_accept_encrypted: cdktf.stringToTerraform(this._helloPasswordAcceptEncrypted),
      hello_password_accepts_levels: cdktf.listMapper(routerIsisInterfaceHelloPasswordAcceptsLevelsToTerraform, false)(this._helloPasswordAcceptsLevels.internalValue),
      hello_password_hmac_md5_encrypted: cdktf.stringToTerraform(this._helloPasswordHmacMd5Encrypted),
      hello_password_hmac_md5_send_only: cdktf.booleanToTerraform(this._helloPasswordHmacMd5SendOnly),
      hello_password_keychain_name: cdktf.stringToTerraform(this._helloPasswordKeychainName),
      hello_password_keychain_send_only: cdktf.booleanToTerraform(this._helloPasswordKeychainSendOnly),
      hello_password_levels: cdktf.listMapper(routerIsisInterfaceHelloPasswordLevelsToTerraform, false)(this._helloPasswordLevels.internalValue),
      hello_password_text_encrypted: cdktf.stringToTerraform(this._helloPasswordTextEncrypted),
      hello_password_text_send_only: cdktf.booleanToTerraform(this._helloPasswordTextSendOnly),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      point_to_point: cdktf.booleanToTerraform(this._pointToPoint),
      priority: cdktf.numberToTerraform(this._priority),
      priority_levels: cdktf.listMapper(routerIsisInterfacePriorityLevelsToTerraform, false)(this._priorityLevels.internalValue),
      process_id: cdktf.stringToTerraform(this._processId),
      state: cdktf.stringToTerraform(this._state),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bfd_fast_detect_ipv4: {
        value: cdktf.booleanToHclTerraform(this._bfdFastDetectIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_fast_detect_ipv6: {
        value: cdktf.booleanToHclTerraform(this._bfdFastDetectIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bfd_minimum_interval: {
        value: cdktf.numberToHclTerraform(this._bfdMinimumInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd_multiplier: {
        value: cdktf.numberToHclTerraform(this._bfdMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      circuit_type: {
        value: cdktf.stringToHclTerraform(this._circuitType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_padding: {
        value: cdktf.stringToHclTerraform(this._helloPadding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_padding_levels: {
        value: cdktf.listMapperHcl(routerIsisInterfaceHelloPaddingLevelsToHclTerraform, false)(this._helloPaddingLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisInterfaceHelloPaddingLevelsList",
      },
      hello_password_accept_encrypted: {
        value: cdktf.stringToHclTerraform(this._helloPasswordAcceptEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_password_accepts_levels: {
        value: cdktf.listMapperHcl(routerIsisInterfaceHelloPasswordAcceptsLevelsToHclTerraform, false)(this._helloPasswordAcceptsLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisInterfaceHelloPasswordAcceptsLevelsList",
      },
      hello_password_hmac_md5_encrypted: {
        value: cdktf.stringToHclTerraform(this._helloPasswordHmacMd5Encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_password_hmac_md5_send_only: {
        value: cdktf.booleanToHclTerraform(this._helloPasswordHmacMd5SendOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hello_password_keychain_name: {
        value: cdktf.stringToHclTerraform(this._helloPasswordKeychainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_password_keychain_send_only: {
        value: cdktf.booleanToHclTerraform(this._helloPasswordKeychainSendOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hello_password_levels: {
        value: cdktf.listMapperHcl(routerIsisInterfaceHelloPasswordLevelsToHclTerraform, false)(this._helloPasswordLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisInterfaceHelloPasswordLevelsList",
      },
      hello_password_text_encrypted: {
        value: cdktf.stringToHclTerraform(this._helloPasswordTextEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_password_text_send_only: {
        value: cdktf.booleanToHclTerraform(this._helloPasswordTextSendOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      point_to_point: {
        value: cdktf.booleanToHclTerraform(this._pointToPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority_levels: {
        value: cdktf.listMapperHcl(routerIsisInterfacePriorityLevelsToHclTerraform, false)(this._priorityLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisInterfacePriorityLevelsList",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
