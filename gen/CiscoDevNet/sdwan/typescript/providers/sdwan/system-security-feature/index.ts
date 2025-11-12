// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemSecurityFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the sliding replay window size
  *   - Choices: `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`
  *   - Default value: `512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#anti_replay_window SystemSecurityFeature#anti_replay_window}
  */
  readonly antiReplayWindow?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#anti_replay_window_variable SystemSecurityFeature#anti_replay_window_variable}
  */
  readonly antiReplayWindowVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#description SystemSecurityFeature#description}
  */
  readonly description?: string;
  /**
  * Extended Anti-Replay Window
  *   - Range: `10`-`2048`
  *   - Default value: `256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#extended_anti_replay_window SystemSecurityFeature#extended_anti_replay_window}
  */
  readonly extendedAntiReplayWindow?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#extended_anti_replay_window_variable SystemSecurityFeature#extended_anti_replay_window_variable}
  */
  readonly extendedAntiReplayWindowVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#feature_profile_id SystemSecurityFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Set the authentication type for DTLS connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#integrity_type SystemSecurityFeature#integrity_type}
  */
  readonly integrityType?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#integrity_type_variable SystemSecurityFeature#integrity_type_variable}
  */
  readonly integrityTypeVariable?: string;
  /**
  * Enable or disable IPsec pairwise-keying
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#ipsec_pairwise_keying SystemSecurityFeature#ipsec_pairwise_keying}
  */
  readonly ipsecPairwiseKeying?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#ipsec_pairwise_keying_variable SystemSecurityFeature#ipsec_pairwise_keying_variable}
  */
  readonly ipsecPairwiseKeyingVariable?: string;
  /**
  * Configure a Keychain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#keychains SystemSecurityFeature#keychains}
  */
  readonly keychains?: SystemSecurityFeatureKeychains[] | cdktf.IResolvable;
  /**
  * Configure a Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#keys SystemSecurityFeature#keys}
  */
  readonly keys?: SystemSecurityFeatureKeys[] | cdktf.IResolvable;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#name SystemSecurityFeature#name}
  */
  readonly name: string;
  /**
  * Set how often to change the AES key for DTLS connections
  *   - Range: `10`-`1209600`
  *   - Default value: `86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#rekey SystemSecurityFeature#rekey}
  */
  readonly rekey?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#rekey_variable SystemSecurityFeature#rekey_variable}
  */
  readonly rekeyVariable?: string;
}
export interface SystemSecurityFeatureKeychains {
  /**
  * Specify the name of the Keychain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#key_chain_name SystemSecurityFeature#key_chain_name}
  */
  readonly keyChainName?: string;
  /**
  * Specify the Key ID
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#key_id SystemSecurityFeature#key_id}
  */
  readonly keyId?: number;
}

export function systemSecurityFeatureKeychainsToTerraform(struct?: SystemSecurityFeatureKeychains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain_name: cdktf.stringToTerraform(struct!.keyChainName),
    key_id: cdktf.numberToTerraform(struct!.keyId),
  }
}


export function systemSecurityFeatureKeychainsToHclTerraform(struct?: SystemSecurityFeatureKeychains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain_name: {
      value: cdktf.stringToHclTerraform(struct!.keyChainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSecurityFeatureKeychainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSecurityFeatureKeychains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChainName = this._keyChainName;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSecurityFeatureKeychains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyChainName = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyChainName = value.keyChainName;
      this._keyId = value.keyId;
    }
  }

  // key_chain_name - computed: false, optional: true, required: false
  private _keyChainName?: string; 
  public get keyChainName() {
    return this.getStringAttribute('key_chain_name');
  }
  public set keyChainName(value: string) {
    this._keyChainName = value;
  }
  public resetKeyChainName() {
    this._keyChainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainNameInput() {
    return this._keyChainName;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}

export class SystemSecurityFeatureKeychainsList extends cdktf.ComplexList {
  public internalValue? : SystemSecurityFeatureKeychains[] | cdktf.IResolvable

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
  public get(index: number): SystemSecurityFeatureKeychainsOutputReference {
    return new SystemSecurityFeatureKeychainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemSecurityFeatureKeys {
  /**
  * Configure Accept AO Mismatch
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#accept_ao_mismatch SystemSecurityFeature#accept_ao_mismatch}
  */
  readonly acceptAoMismatch?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#accept_ao_mismatch_variable SystemSecurityFeature#accept_ao_mismatch_variable}
  */
  readonly acceptAoMismatchVariable?: string;
  /**
  * Send lifetime Duration (seconds)
  *   - Range: `1`-`2147483646`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#accept_life_time_duration SystemSecurityFeature#accept_life_time_duration}
  */
  readonly acceptLifeTimeDuration?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#accept_life_time_duration_variable SystemSecurityFeature#accept_life_time_duration_variable}
  */
  readonly acceptLifeTimeDurationVariable?: string;
  /**
  * Configure Key lifetime end time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#accept_life_time_exact SystemSecurityFeature#accept_life_time_exact}
  */
  readonly acceptLifeTimeExact?: number;
  /**
  * Infinite lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#accept_life_time_infinite SystemSecurityFeature#accept_life_time_infinite}
  */
  readonly acceptLifeTimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#accept_life_time_infinite_variable SystemSecurityFeature#accept_life_time_infinite_variable}
  */
  readonly acceptLifeTimeInfiniteVariable?: string;
  /**
  * Configure Send lifetime Local
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#accept_life_time_local SystemSecurityFeature#accept_life_time_local}
  */
  readonly acceptLifeTimeLocal?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#accept_life_time_local_variable SystemSecurityFeature#accept_life_time_local_variable}
  */
  readonly acceptLifeTimeLocalVariable?: string;
  /**
  * Configure Key lifetime start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#accept_life_time_start_epoch SystemSecurityFeature#accept_life_time_start_epoch}
  */
  readonly acceptLifeTimeStartEpoch?: number;
  /**
  * Crypto Algorithm
  *   - Choices: `aes-128-cmac`, `hmac-sha-1`, `hmac-sha-256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#crypto_algorithm SystemSecurityFeature#crypto_algorithm}
  */
  readonly cryptoAlgorithm?: string;
  /**
  * Select the Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#id SystemSecurityFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Configure Include TCP Options
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#include_tcp_options SystemSecurityFeature#include_tcp_options}
  */
  readonly includeTcpOptions?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#include_tcp_options_variable SystemSecurityFeature#include_tcp_options_variable}
  */
  readonly includeTcpOptionsVariable?: string;
  /**
  * Specify the Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#key_string SystemSecurityFeature#key_string}
  */
  readonly keyString?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#key_string_variable SystemSecurityFeature#key_string_variable}
  */
  readonly keyStringVariable?: string;
  /**
  * Select the chain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#name SystemSecurityFeature#name}
  */
  readonly name?: string;
  /**
  * Specify the Receiver ID
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#receiver_id SystemSecurityFeature#receiver_id}
  */
  readonly receiverId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#receiver_id_variable SystemSecurityFeature#receiver_id_variable}
  */
  readonly receiverIdVariable?: string;
  /**
  * Specify the Send ID
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#send_id SystemSecurityFeature#send_id}
  */
  readonly sendId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#send_id_variable SystemSecurityFeature#send_id_variable}
  */
  readonly sendIdVariable?: string;
  /**
  * Send lifetime Duration (seconds)
  *   - Range: `1`-`2147483646`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#send_life_time_duration SystemSecurityFeature#send_life_time_duration}
  */
  readonly sendLifeTimeDuration?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#send_life_time_duration_variable SystemSecurityFeature#send_life_time_duration_variable}
  */
  readonly sendLifeTimeDurationVariable?: string;
  /**
  * Configure Key lifetime end time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#send_life_time_exact SystemSecurityFeature#send_life_time_exact}
  */
  readonly sendLifeTimeExact?: number;
  /**
  * Infinite lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#send_life_time_infinite SystemSecurityFeature#send_life_time_infinite}
  */
  readonly sendLifeTimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#send_life_time_infinite_variable SystemSecurityFeature#send_life_time_infinite_variable}
  */
  readonly sendLifeTimeInfiniteVariable?: string;
  /**
  * Configure Send lifetime Local
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#send_life_time_local SystemSecurityFeature#send_life_time_local}
  */
  readonly sendLifeTimeLocal?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#send_life_time_local_variable SystemSecurityFeature#send_life_time_local_variable}
  */
  readonly sendLifeTimeLocalVariable?: string;
  /**
  * Configure Key lifetime start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#send_life_time_start_epoch SystemSecurityFeature#send_life_time_start_epoch}
  */
  readonly sendLifeTimeStartEpoch?: number;
}

export function systemSecurityFeatureKeysToTerraform(struct?: SystemSecurityFeatureKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_ao_mismatch: cdktf.booleanToTerraform(struct!.acceptAoMismatch),
    accept_ao_mismatch_variable: cdktf.stringToTerraform(struct!.acceptAoMismatchVariable),
    accept_life_time_duration: cdktf.numberToTerraform(struct!.acceptLifeTimeDuration),
    accept_life_time_duration_variable: cdktf.stringToTerraform(struct!.acceptLifeTimeDurationVariable),
    accept_life_time_exact: cdktf.numberToTerraform(struct!.acceptLifeTimeExact),
    accept_life_time_infinite: cdktf.booleanToTerraform(struct!.acceptLifeTimeInfinite),
    accept_life_time_infinite_variable: cdktf.stringToTerraform(struct!.acceptLifeTimeInfiniteVariable),
    accept_life_time_local: cdktf.booleanToTerraform(struct!.acceptLifeTimeLocal),
    accept_life_time_local_variable: cdktf.stringToTerraform(struct!.acceptLifeTimeLocalVariable),
    accept_life_time_start_epoch: cdktf.numberToTerraform(struct!.acceptLifeTimeStartEpoch),
    crypto_algorithm: cdktf.stringToTerraform(struct!.cryptoAlgorithm),
    id: cdktf.numberToTerraform(struct!.id),
    include_tcp_options: cdktf.booleanToTerraform(struct!.includeTcpOptions),
    include_tcp_options_variable: cdktf.stringToTerraform(struct!.includeTcpOptionsVariable),
    key_string: cdktf.stringToTerraform(struct!.keyString),
    key_string_variable: cdktf.stringToTerraform(struct!.keyStringVariable),
    name: cdktf.stringToTerraform(struct!.name),
    receiver_id: cdktf.numberToTerraform(struct!.receiverId),
    receiver_id_variable: cdktf.stringToTerraform(struct!.receiverIdVariable),
    send_id: cdktf.numberToTerraform(struct!.sendId),
    send_id_variable: cdktf.stringToTerraform(struct!.sendIdVariable),
    send_life_time_duration: cdktf.numberToTerraform(struct!.sendLifeTimeDuration),
    send_life_time_duration_variable: cdktf.stringToTerraform(struct!.sendLifeTimeDurationVariable),
    send_life_time_exact: cdktf.numberToTerraform(struct!.sendLifeTimeExact),
    send_life_time_infinite: cdktf.booleanToTerraform(struct!.sendLifeTimeInfinite),
    send_life_time_infinite_variable: cdktf.stringToTerraform(struct!.sendLifeTimeInfiniteVariable),
    send_life_time_local: cdktf.booleanToTerraform(struct!.sendLifeTimeLocal),
    send_life_time_local_variable: cdktf.stringToTerraform(struct!.sendLifeTimeLocalVariable),
    send_life_time_start_epoch: cdktf.numberToTerraform(struct!.sendLifeTimeStartEpoch),
  }
}


export function systemSecurityFeatureKeysToHclTerraform(struct?: SystemSecurityFeatureKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_ao_mismatch: {
      value: cdktf.booleanToHclTerraform(struct!.acceptAoMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accept_ao_mismatch_variable: {
      value: cdktf.stringToHclTerraform(struct!.acceptAoMismatchVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_life_time_duration: {
      value: cdktf.numberToHclTerraform(struct!.acceptLifeTimeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accept_life_time_duration_variable: {
      value: cdktf.stringToHclTerraform(struct!.acceptLifeTimeDurationVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_life_time_exact: {
      value: cdktf.numberToHclTerraform(struct!.acceptLifeTimeExact),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accept_life_time_infinite: {
      value: cdktf.booleanToHclTerraform(struct!.acceptLifeTimeInfinite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accept_life_time_infinite_variable: {
      value: cdktf.stringToHclTerraform(struct!.acceptLifeTimeInfiniteVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_life_time_local: {
      value: cdktf.booleanToHclTerraform(struct!.acceptLifeTimeLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accept_life_time_local_variable: {
      value: cdktf.stringToHclTerraform(struct!.acceptLifeTimeLocalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_life_time_start_epoch: {
      value: cdktf.numberToHclTerraform(struct!.acceptLifeTimeStartEpoch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    crypto_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.cryptoAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    include_tcp_options: {
      value: cdktf.booleanToHclTerraform(struct!.includeTcpOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_tcp_options_variable: {
      value: cdktf.stringToHclTerraform(struct!.includeTcpOptionsVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_string: {
      value: cdktf.stringToHclTerraform(struct!.keyString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_string_variable: {
      value: cdktf.stringToHclTerraform(struct!.keyStringVariable),
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
    receiver_id: {
      value: cdktf.numberToHclTerraform(struct!.receiverId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receiver_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.receiverIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_id: {
      value: cdktf.numberToHclTerraform(struct!.sendId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_life_time_duration: {
      value: cdktf.numberToHclTerraform(struct!.sendLifeTimeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_life_time_duration_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendLifeTimeDurationVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_life_time_exact: {
      value: cdktf.numberToHclTerraform(struct!.sendLifeTimeExact),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_life_time_infinite: {
      value: cdktf.booleanToHclTerraform(struct!.sendLifeTimeInfinite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_life_time_infinite_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendLifeTimeInfiniteVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_life_time_local: {
      value: cdktf.booleanToHclTerraform(struct!.sendLifeTimeLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_life_time_local_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendLifeTimeLocalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_life_time_start_epoch: {
      value: cdktf.numberToHclTerraform(struct!.sendLifeTimeStartEpoch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemSecurityFeatureKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemSecurityFeatureKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptAoMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptAoMismatch = this._acceptAoMismatch;
    }
    if (this._acceptAoMismatchVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptAoMismatchVariable = this._acceptAoMismatchVariable;
    }
    if (this._acceptLifeTimeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifeTimeDuration = this._acceptLifeTimeDuration;
    }
    if (this._acceptLifeTimeDurationVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifeTimeDurationVariable = this._acceptLifeTimeDurationVariable;
    }
    if (this._acceptLifeTimeExact !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifeTimeExact = this._acceptLifeTimeExact;
    }
    if (this._acceptLifeTimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifeTimeInfinite = this._acceptLifeTimeInfinite;
    }
    if (this._acceptLifeTimeInfiniteVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifeTimeInfiniteVariable = this._acceptLifeTimeInfiniteVariable;
    }
    if (this._acceptLifeTimeLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifeTimeLocal = this._acceptLifeTimeLocal;
    }
    if (this._acceptLifeTimeLocalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifeTimeLocalVariable = this._acceptLifeTimeLocalVariable;
    }
    if (this._acceptLifeTimeStartEpoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifeTimeStartEpoch = this._acceptLifeTimeStartEpoch;
    }
    if (this._cryptoAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptoAlgorithm = this._cryptoAlgorithm;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._includeTcpOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTcpOptions = this._includeTcpOptions;
    }
    if (this._includeTcpOptionsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTcpOptionsVariable = this._includeTcpOptionsVariable;
    }
    if (this._keyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyString = this._keyString;
    }
    if (this._keyStringVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStringVariable = this._keyStringVariable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._receiverId !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverId = this._receiverId;
    }
    if (this._receiverIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverIdVariable = this._receiverIdVariable;
    }
    if (this._sendId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendId = this._sendId;
    }
    if (this._sendIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendIdVariable = this._sendIdVariable;
    }
    if (this._sendLifeTimeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifeTimeDuration = this._sendLifeTimeDuration;
    }
    if (this._sendLifeTimeDurationVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifeTimeDurationVariable = this._sendLifeTimeDurationVariable;
    }
    if (this._sendLifeTimeExact !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifeTimeExact = this._sendLifeTimeExact;
    }
    if (this._sendLifeTimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifeTimeInfinite = this._sendLifeTimeInfinite;
    }
    if (this._sendLifeTimeInfiniteVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifeTimeInfiniteVariable = this._sendLifeTimeInfiniteVariable;
    }
    if (this._sendLifeTimeLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifeTimeLocal = this._sendLifeTimeLocal;
    }
    if (this._sendLifeTimeLocalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifeTimeLocalVariable = this._sendLifeTimeLocalVariable;
    }
    if (this._sendLifeTimeStartEpoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifeTimeStartEpoch = this._sendLifeTimeStartEpoch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemSecurityFeatureKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptAoMismatch = undefined;
      this._acceptAoMismatchVariable = undefined;
      this._acceptLifeTimeDuration = undefined;
      this._acceptLifeTimeDurationVariable = undefined;
      this._acceptLifeTimeExact = undefined;
      this._acceptLifeTimeInfinite = undefined;
      this._acceptLifeTimeInfiniteVariable = undefined;
      this._acceptLifeTimeLocal = undefined;
      this._acceptLifeTimeLocalVariable = undefined;
      this._acceptLifeTimeStartEpoch = undefined;
      this._cryptoAlgorithm = undefined;
      this._id = undefined;
      this._includeTcpOptions = undefined;
      this._includeTcpOptionsVariable = undefined;
      this._keyString = undefined;
      this._keyStringVariable = undefined;
      this._name = undefined;
      this._receiverId = undefined;
      this._receiverIdVariable = undefined;
      this._sendId = undefined;
      this._sendIdVariable = undefined;
      this._sendLifeTimeDuration = undefined;
      this._sendLifeTimeDurationVariable = undefined;
      this._sendLifeTimeExact = undefined;
      this._sendLifeTimeInfinite = undefined;
      this._sendLifeTimeInfiniteVariable = undefined;
      this._sendLifeTimeLocal = undefined;
      this._sendLifeTimeLocalVariable = undefined;
      this._sendLifeTimeStartEpoch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptAoMismatch = value.acceptAoMismatch;
      this._acceptAoMismatchVariable = value.acceptAoMismatchVariable;
      this._acceptLifeTimeDuration = value.acceptLifeTimeDuration;
      this._acceptLifeTimeDurationVariable = value.acceptLifeTimeDurationVariable;
      this._acceptLifeTimeExact = value.acceptLifeTimeExact;
      this._acceptLifeTimeInfinite = value.acceptLifeTimeInfinite;
      this._acceptLifeTimeInfiniteVariable = value.acceptLifeTimeInfiniteVariable;
      this._acceptLifeTimeLocal = value.acceptLifeTimeLocal;
      this._acceptLifeTimeLocalVariable = value.acceptLifeTimeLocalVariable;
      this._acceptLifeTimeStartEpoch = value.acceptLifeTimeStartEpoch;
      this._cryptoAlgorithm = value.cryptoAlgorithm;
      this._id = value.id;
      this._includeTcpOptions = value.includeTcpOptions;
      this._includeTcpOptionsVariable = value.includeTcpOptionsVariable;
      this._keyString = value.keyString;
      this._keyStringVariable = value.keyStringVariable;
      this._name = value.name;
      this._receiverId = value.receiverId;
      this._receiverIdVariable = value.receiverIdVariable;
      this._sendId = value.sendId;
      this._sendIdVariable = value.sendIdVariable;
      this._sendLifeTimeDuration = value.sendLifeTimeDuration;
      this._sendLifeTimeDurationVariable = value.sendLifeTimeDurationVariable;
      this._sendLifeTimeExact = value.sendLifeTimeExact;
      this._sendLifeTimeInfinite = value.sendLifeTimeInfinite;
      this._sendLifeTimeInfiniteVariable = value.sendLifeTimeInfiniteVariable;
      this._sendLifeTimeLocal = value.sendLifeTimeLocal;
      this._sendLifeTimeLocalVariable = value.sendLifeTimeLocalVariable;
      this._sendLifeTimeStartEpoch = value.sendLifeTimeStartEpoch;
    }
  }

  // accept_ao_mismatch - computed: false, optional: true, required: false
  private _acceptAoMismatch?: boolean | cdktf.IResolvable; 
  public get acceptAoMismatch() {
    return this.getBooleanAttribute('accept_ao_mismatch');
  }
  public set acceptAoMismatch(value: boolean | cdktf.IResolvable) {
    this._acceptAoMismatch = value;
  }
  public resetAcceptAoMismatch() {
    this._acceptAoMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAoMismatchInput() {
    return this._acceptAoMismatch;
  }

  // accept_ao_mismatch_variable - computed: false, optional: true, required: false
  private _acceptAoMismatchVariable?: string; 
  public get acceptAoMismatchVariable() {
    return this.getStringAttribute('accept_ao_mismatch_variable');
  }
  public set acceptAoMismatchVariable(value: string) {
    this._acceptAoMismatchVariable = value;
  }
  public resetAcceptAoMismatchVariable() {
    this._acceptAoMismatchVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAoMismatchVariableInput() {
    return this._acceptAoMismatchVariable;
  }

  // accept_life_time_duration - computed: false, optional: true, required: false
  private _acceptLifeTimeDuration?: number; 
  public get acceptLifeTimeDuration() {
    return this.getNumberAttribute('accept_life_time_duration');
  }
  public set acceptLifeTimeDuration(value: number) {
    this._acceptLifeTimeDuration = value;
  }
  public resetAcceptLifeTimeDuration() {
    this._acceptLifeTimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifeTimeDurationInput() {
    return this._acceptLifeTimeDuration;
  }

  // accept_life_time_duration_variable - computed: false, optional: true, required: false
  private _acceptLifeTimeDurationVariable?: string; 
  public get acceptLifeTimeDurationVariable() {
    return this.getStringAttribute('accept_life_time_duration_variable');
  }
  public set acceptLifeTimeDurationVariable(value: string) {
    this._acceptLifeTimeDurationVariable = value;
  }
  public resetAcceptLifeTimeDurationVariable() {
    this._acceptLifeTimeDurationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifeTimeDurationVariableInput() {
    return this._acceptLifeTimeDurationVariable;
  }

  // accept_life_time_exact - computed: false, optional: true, required: false
  private _acceptLifeTimeExact?: number; 
  public get acceptLifeTimeExact() {
    return this.getNumberAttribute('accept_life_time_exact');
  }
  public set acceptLifeTimeExact(value: number) {
    this._acceptLifeTimeExact = value;
  }
  public resetAcceptLifeTimeExact() {
    this._acceptLifeTimeExact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifeTimeExactInput() {
    return this._acceptLifeTimeExact;
  }

  // accept_life_time_infinite - computed: false, optional: true, required: false
  private _acceptLifeTimeInfinite?: boolean | cdktf.IResolvable; 
  public get acceptLifeTimeInfinite() {
    return this.getBooleanAttribute('accept_life_time_infinite');
  }
  public set acceptLifeTimeInfinite(value: boolean | cdktf.IResolvable) {
    this._acceptLifeTimeInfinite = value;
  }
  public resetAcceptLifeTimeInfinite() {
    this._acceptLifeTimeInfinite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifeTimeInfiniteInput() {
    return this._acceptLifeTimeInfinite;
  }

  // accept_life_time_infinite_variable - computed: false, optional: true, required: false
  private _acceptLifeTimeInfiniteVariable?: string; 
  public get acceptLifeTimeInfiniteVariable() {
    return this.getStringAttribute('accept_life_time_infinite_variable');
  }
  public set acceptLifeTimeInfiniteVariable(value: string) {
    this._acceptLifeTimeInfiniteVariable = value;
  }
  public resetAcceptLifeTimeInfiniteVariable() {
    this._acceptLifeTimeInfiniteVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifeTimeInfiniteVariableInput() {
    return this._acceptLifeTimeInfiniteVariable;
  }

  // accept_life_time_local - computed: false, optional: true, required: false
  private _acceptLifeTimeLocal?: boolean | cdktf.IResolvable; 
  public get acceptLifeTimeLocal() {
    return this.getBooleanAttribute('accept_life_time_local');
  }
  public set acceptLifeTimeLocal(value: boolean | cdktf.IResolvable) {
    this._acceptLifeTimeLocal = value;
  }
  public resetAcceptLifeTimeLocal() {
    this._acceptLifeTimeLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifeTimeLocalInput() {
    return this._acceptLifeTimeLocal;
  }

  // accept_life_time_local_variable - computed: false, optional: true, required: false
  private _acceptLifeTimeLocalVariable?: string; 
  public get acceptLifeTimeLocalVariable() {
    return this.getStringAttribute('accept_life_time_local_variable');
  }
  public set acceptLifeTimeLocalVariable(value: string) {
    this._acceptLifeTimeLocalVariable = value;
  }
  public resetAcceptLifeTimeLocalVariable() {
    this._acceptLifeTimeLocalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifeTimeLocalVariableInput() {
    return this._acceptLifeTimeLocalVariable;
  }

  // accept_life_time_start_epoch - computed: false, optional: true, required: false
  private _acceptLifeTimeStartEpoch?: number; 
  public get acceptLifeTimeStartEpoch() {
    return this.getNumberAttribute('accept_life_time_start_epoch');
  }
  public set acceptLifeTimeStartEpoch(value: number) {
    this._acceptLifeTimeStartEpoch = value;
  }
  public resetAcceptLifeTimeStartEpoch() {
    this._acceptLifeTimeStartEpoch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifeTimeStartEpochInput() {
    return this._acceptLifeTimeStartEpoch;
  }

  // crypto_algorithm - computed: false, optional: true, required: false
  private _cryptoAlgorithm?: string; 
  public get cryptoAlgorithm() {
    return this.getStringAttribute('crypto_algorithm');
  }
  public set cryptoAlgorithm(value: string) {
    this._cryptoAlgorithm = value;
  }
  public resetCryptoAlgorithm() {
    this._cryptoAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoAlgorithmInput() {
    return this._cryptoAlgorithm;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // include_tcp_options - computed: false, optional: true, required: false
  private _includeTcpOptions?: boolean | cdktf.IResolvable; 
  public get includeTcpOptions() {
    return this.getBooleanAttribute('include_tcp_options');
  }
  public set includeTcpOptions(value: boolean | cdktf.IResolvable) {
    this._includeTcpOptions = value;
  }
  public resetIncludeTcpOptions() {
    this._includeTcpOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTcpOptionsInput() {
    return this._includeTcpOptions;
  }

  // include_tcp_options_variable - computed: false, optional: true, required: false
  private _includeTcpOptionsVariable?: string; 
  public get includeTcpOptionsVariable() {
    return this.getStringAttribute('include_tcp_options_variable');
  }
  public set includeTcpOptionsVariable(value: string) {
    this._includeTcpOptionsVariable = value;
  }
  public resetIncludeTcpOptionsVariable() {
    this._includeTcpOptionsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTcpOptionsVariableInput() {
    return this._includeTcpOptionsVariable;
  }

  // key_string - computed: false, optional: true, required: false
  private _keyString?: string; 
  public get keyString() {
    return this.getStringAttribute('key_string');
  }
  public set keyString(value: string) {
    this._keyString = value;
  }
  public resetKeyString() {
    this._keyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStringInput() {
    return this._keyString;
  }

  // key_string_variable - computed: false, optional: true, required: false
  private _keyStringVariable?: string; 
  public get keyStringVariable() {
    return this.getStringAttribute('key_string_variable');
  }
  public set keyStringVariable(value: string) {
    this._keyStringVariable = value;
  }
  public resetKeyStringVariable() {
    this._keyStringVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStringVariableInput() {
    return this._keyStringVariable;
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

  // receiver_id - computed: false, optional: true, required: false
  private _receiverId?: number; 
  public get receiverId() {
    return this.getNumberAttribute('receiver_id');
  }
  public set receiverId(value: number) {
    this._receiverId = value;
  }
  public resetReceiverId() {
    this._receiverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverIdInput() {
    return this._receiverId;
  }

  // receiver_id_variable - computed: false, optional: true, required: false
  private _receiverIdVariable?: string; 
  public get receiverIdVariable() {
    return this.getStringAttribute('receiver_id_variable');
  }
  public set receiverIdVariable(value: string) {
    this._receiverIdVariable = value;
  }
  public resetReceiverIdVariable() {
    this._receiverIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverIdVariableInput() {
    return this._receiverIdVariable;
  }

  // send_id - computed: false, optional: true, required: false
  private _sendId?: number; 
  public get sendId() {
    return this.getNumberAttribute('send_id');
  }
  public set sendId(value: number) {
    this._sendId = value;
  }
  public resetSendId() {
    this._sendId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIdInput() {
    return this._sendId;
  }

  // send_id_variable - computed: false, optional: true, required: false
  private _sendIdVariable?: string; 
  public get sendIdVariable() {
    return this.getStringAttribute('send_id_variable');
  }
  public set sendIdVariable(value: string) {
    this._sendIdVariable = value;
  }
  public resetSendIdVariable() {
    this._sendIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendIdVariableInput() {
    return this._sendIdVariable;
  }

  // send_life_time_duration - computed: false, optional: true, required: false
  private _sendLifeTimeDuration?: number; 
  public get sendLifeTimeDuration() {
    return this.getNumberAttribute('send_life_time_duration');
  }
  public set sendLifeTimeDuration(value: number) {
    this._sendLifeTimeDuration = value;
  }
  public resetSendLifeTimeDuration() {
    this._sendLifeTimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifeTimeDurationInput() {
    return this._sendLifeTimeDuration;
  }

  // send_life_time_duration_variable - computed: false, optional: true, required: false
  private _sendLifeTimeDurationVariable?: string; 
  public get sendLifeTimeDurationVariable() {
    return this.getStringAttribute('send_life_time_duration_variable');
  }
  public set sendLifeTimeDurationVariable(value: string) {
    this._sendLifeTimeDurationVariable = value;
  }
  public resetSendLifeTimeDurationVariable() {
    this._sendLifeTimeDurationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifeTimeDurationVariableInput() {
    return this._sendLifeTimeDurationVariable;
  }

  // send_life_time_exact - computed: false, optional: true, required: false
  private _sendLifeTimeExact?: number; 
  public get sendLifeTimeExact() {
    return this.getNumberAttribute('send_life_time_exact');
  }
  public set sendLifeTimeExact(value: number) {
    this._sendLifeTimeExact = value;
  }
  public resetSendLifeTimeExact() {
    this._sendLifeTimeExact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifeTimeExactInput() {
    return this._sendLifeTimeExact;
  }

  // send_life_time_infinite - computed: false, optional: true, required: false
  private _sendLifeTimeInfinite?: boolean | cdktf.IResolvable; 
  public get sendLifeTimeInfinite() {
    return this.getBooleanAttribute('send_life_time_infinite');
  }
  public set sendLifeTimeInfinite(value: boolean | cdktf.IResolvable) {
    this._sendLifeTimeInfinite = value;
  }
  public resetSendLifeTimeInfinite() {
    this._sendLifeTimeInfinite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifeTimeInfiniteInput() {
    return this._sendLifeTimeInfinite;
  }

  // send_life_time_infinite_variable - computed: false, optional: true, required: false
  private _sendLifeTimeInfiniteVariable?: string; 
  public get sendLifeTimeInfiniteVariable() {
    return this.getStringAttribute('send_life_time_infinite_variable');
  }
  public set sendLifeTimeInfiniteVariable(value: string) {
    this._sendLifeTimeInfiniteVariable = value;
  }
  public resetSendLifeTimeInfiniteVariable() {
    this._sendLifeTimeInfiniteVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifeTimeInfiniteVariableInput() {
    return this._sendLifeTimeInfiniteVariable;
  }

  // send_life_time_local - computed: false, optional: true, required: false
  private _sendLifeTimeLocal?: boolean | cdktf.IResolvable; 
  public get sendLifeTimeLocal() {
    return this.getBooleanAttribute('send_life_time_local');
  }
  public set sendLifeTimeLocal(value: boolean | cdktf.IResolvable) {
    this._sendLifeTimeLocal = value;
  }
  public resetSendLifeTimeLocal() {
    this._sendLifeTimeLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifeTimeLocalInput() {
    return this._sendLifeTimeLocal;
  }

  // send_life_time_local_variable - computed: false, optional: true, required: false
  private _sendLifeTimeLocalVariable?: string; 
  public get sendLifeTimeLocalVariable() {
    return this.getStringAttribute('send_life_time_local_variable');
  }
  public set sendLifeTimeLocalVariable(value: string) {
    this._sendLifeTimeLocalVariable = value;
  }
  public resetSendLifeTimeLocalVariable() {
    this._sendLifeTimeLocalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifeTimeLocalVariableInput() {
    return this._sendLifeTimeLocalVariable;
  }

  // send_life_time_start_epoch - computed: false, optional: true, required: false
  private _sendLifeTimeStartEpoch?: number; 
  public get sendLifeTimeStartEpoch() {
    return this.getNumberAttribute('send_life_time_start_epoch');
  }
  public set sendLifeTimeStartEpoch(value: number) {
    this._sendLifeTimeStartEpoch = value;
  }
  public resetSendLifeTimeStartEpoch() {
    this._sendLifeTimeStartEpoch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifeTimeStartEpochInput() {
    return this._sendLifeTimeStartEpoch;
  }
}

export class SystemSecurityFeatureKeysList extends cdktf.ComplexList {
  public internalValue? : SystemSecurityFeatureKeys[] | cdktf.IResolvable

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
  public get(index: number): SystemSecurityFeatureKeysOutputReference {
    return new SystemSecurityFeatureKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature sdwan_system_security_feature}
*/
export class SystemSecurityFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_security_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemSecurityFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemSecurityFeature to import
  * @param importFromId The id of the existing SystemSecurityFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemSecurityFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_security_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/system_security_feature sdwan_system_security_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemSecurityFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: SystemSecurityFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_security_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._antiReplayWindow = config.antiReplayWindow;
    this._antiReplayWindowVariable = config.antiReplayWindowVariable;
    this._description = config.description;
    this._extendedAntiReplayWindow = config.extendedAntiReplayWindow;
    this._extendedAntiReplayWindowVariable = config.extendedAntiReplayWindowVariable;
    this._featureProfileId = config.featureProfileId;
    this._integrityType = config.integrityType;
    this._integrityTypeVariable = config.integrityTypeVariable;
    this._ipsecPairwiseKeying = config.ipsecPairwiseKeying;
    this._ipsecPairwiseKeyingVariable = config.ipsecPairwiseKeyingVariable;
    this._keychains.internalValue = config.keychains;
    this._keys.internalValue = config.keys;
    this._name = config.name;
    this._rekey = config.rekey;
    this._rekeyVariable = config.rekeyVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_replay_window - computed: false, optional: true, required: false
  private _antiReplayWindow?: string; 
  public get antiReplayWindow() {
    return this.getStringAttribute('anti_replay_window');
  }
  public set antiReplayWindow(value: string) {
    this._antiReplayWindow = value;
  }
  public resetAntiReplayWindow() {
    this._antiReplayWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayWindowInput() {
    return this._antiReplayWindow;
  }

  // anti_replay_window_variable - computed: false, optional: true, required: false
  private _antiReplayWindowVariable?: string; 
  public get antiReplayWindowVariable() {
    return this.getStringAttribute('anti_replay_window_variable');
  }
  public set antiReplayWindowVariable(value: string) {
    this._antiReplayWindowVariable = value;
  }
  public resetAntiReplayWindowVariable() {
    this._antiReplayWindowVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiReplayWindowVariableInput() {
    return this._antiReplayWindowVariable;
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

  // extended_anti_replay_window - computed: false, optional: true, required: false
  private _extendedAntiReplayWindow?: number; 
  public get extendedAntiReplayWindow() {
    return this.getNumberAttribute('extended_anti_replay_window');
  }
  public set extendedAntiReplayWindow(value: number) {
    this._extendedAntiReplayWindow = value;
  }
  public resetExtendedAntiReplayWindow() {
    this._extendedAntiReplayWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAntiReplayWindowInput() {
    return this._extendedAntiReplayWindow;
  }

  // extended_anti_replay_window_variable - computed: false, optional: true, required: false
  private _extendedAntiReplayWindowVariable?: string; 
  public get extendedAntiReplayWindowVariable() {
    return this.getStringAttribute('extended_anti_replay_window_variable');
  }
  public set extendedAntiReplayWindowVariable(value: string) {
    this._extendedAntiReplayWindowVariable = value;
  }
  public resetExtendedAntiReplayWindowVariable() {
    this._extendedAntiReplayWindowVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAntiReplayWindowVariableInput() {
    return this._extendedAntiReplayWindowVariable;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integrity_type - computed: false, optional: true, required: false
  private _integrityType?: string[]; 
  public get integrityType() {
    return cdktf.Fn.tolist(this.getListAttribute('integrity_type'));
  }
  public set integrityType(value: string[]) {
    this._integrityType = value;
  }
  public resetIntegrityType() {
    this._integrityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrityTypeInput() {
    return this._integrityType;
  }

  // integrity_type_variable - computed: false, optional: true, required: false
  private _integrityTypeVariable?: string; 
  public get integrityTypeVariable() {
    return this.getStringAttribute('integrity_type_variable');
  }
  public set integrityTypeVariable(value: string) {
    this._integrityTypeVariable = value;
  }
  public resetIntegrityTypeVariable() {
    this._integrityTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrityTypeVariableInput() {
    return this._integrityTypeVariable;
  }

  // ipsec_pairwise_keying - computed: false, optional: true, required: false
  private _ipsecPairwiseKeying?: boolean | cdktf.IResolvable; 
  public get ipsecPairwiseKeying() {
    return this.getBooleanAttribute('ipsec_pairwise_keying');
  }
  public set ipsecPairwiseKeying(value: boolean | cdktf.IResolvable) {
    this._ipsecPairwiseKeying = value;
  }
  public resetIpsecPairwiseKeying() {
    this._ipsecPairwiseKeying = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPairwiseKeyingInput() {
    return this._ipsecPairwiseKeying;
  }

  // ipsec_pairwise_keying_variable - computed: false, optional: true, required: false
  private _ipsecPairwiseKeyingVariable?: string; 
  public get ipsecPairwiseKeyingVariable() {
    return this.getStringAttribute('ipsec_pairwise_keying_variable');
  }
  public set ipsecPairwiseKeyingVariable(value: string) {
    this._ipsecPairwiseKeyingVariable = value;
  }
  public resetIpsecPairwiseKeyingVariable() {
    this._ipsecPairwiseKeyingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPairwiseKeyingVariableInput() {
    return this._ipsecPairwiseKeyingVariable;
  }

  // keychains - computed: false, optional: true, required: false
  private _keychains = new SystemSecurityFeatureKeychainsList(this, "keychains", false);
  public get keychains() {
    return this._keychains;
  }
  public putKeychains(value: SystemSecurityFeatureKeychains[] | cdktf.IResolvable) {
    this._keychains.internalValue = value;
  }
  public resetKeychains() {
    this._keychains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keychainsInput() {
    return this._keychains.internalValue;
  }

  // keys - computed: false, optional: true, required: false
  private _keys = new SystemSecurityFeatureKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
  public putKeys(value: SystemSecurityFeatureKeys[] | cdktf.IResolvable) {
    this._keys.internalValue = value;
  }
  public resetKeys() {
    this._keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
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

  // rekey - computed: false, optional: true, required: false
  private _rekey?: number; 
  public get rekey() {
    return this.getNumberAttribute('rekey');
  }
  public set rekey(value: number) {
    this._rekey = value;
  }
  public resetRekey() {
    this._rekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyInput() {
    return this._rekey;
  }

  // rekey_variable - computed: false, optional: true, required: false
  private _rekeyVariable?: string; 
  public get rekeyVariable() {
    return this.getStringAttribute('rekey_variable');
  }
  public set rekeyVariable(value: string) {
    this._rekeyVariable = value;
  }
  public resetRekeyVariable() {
    this._rekeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyVariableInput() {
    return this._rekeyVariable;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anti_replay_window: cdktf.stringToTerraform(this._antiReplayWindow),
      anti_replay_window_variable: cdktf.stringToTerraform(this._antiReplayWindowVariable),
      description: cdktf.stringToTerraform(this._description),
      extended_anti_replay_window: cdktf.numberToTerraform(this._extendedAntiReplayWindow),
      extended_anti_replay_window_variable: cdktf.stringToTerraform(this._extendedAntiReplayWindowVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      integrity_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrityType),
      integrity_type_variable: cdktf.stringToTerraform(this._integrityTypeVariable),
      ipsec_pairwise_keying: cdktf.booleanToTerraform(this._ipsecPairwiseKeying),
      ipsec_pairwise_keying_variable: cdktf.stringToTerraform(this._ipsecPairwiseKeyingVariable),
      keychains: cdktf.listMapper(systemSecurityFeatureKeychainsToTerraform, false)(this._keychains.internalValue),
      keys: cdktf.listMapper(systemSecurityFeatureKeysToTerraform, false)(this._keys.internalValue),
      name: cdktf.stringToTerraform(this._name),
      rekey: cdktf.numberToTerraform(this._rekey),
      rekey_variable: cdktf.stringToTerraform(this._rekeyVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_replay_window: {
        value: cdktf.stringToHclTerraform(this._antiReplayWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_replay_window_variable: {
        value: cdktf.stringToHclTerraform(this._antiReplayWindowVariable),
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
      extended_anti_replay_window: {
        value: cdktf.numberToHclTerraform(this._extendedAntiReplayWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_anti_replay_window_variable: {
        value: cdktf.stringToHclTerraform(this._extendedAntiReplayWindowVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integrity_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._integrityType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      integrity_type_variable: {
        value: cdktf.stringToHclTerraform(this._integrityTypeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_pairwise_keying: {
        value: cdktf.booleanToHclTerraform(this._ipsecPairwiseKeying),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipsec_pairwise_keying_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecPairwiseKeyingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keychains: {
        value: cdktf.listMapperHcl(systemSecurityFeatureKeychainsToHclTerraform, false)(this._keychains.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSecurityFeatureKeychainsList",
      },
      keys: {
        value: cdktf.listMapperHcl(systemSecurityFeatureKeysToHclTerraform, false)(this._keys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemSecurityFeatureKeysList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rekey: {
        value: cdktf.numberToHclTerraform(this._rekey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rekey_variable: {
        value: cdktf.stringToHclTerraform(this._rekeyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
