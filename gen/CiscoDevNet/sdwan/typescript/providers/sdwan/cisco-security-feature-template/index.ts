// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoSecurityFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set the authentication type for DTLS connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#authentication_type CiscoSecurityFeatureTemplate#authentication_type}
  */
  readonly authenticationType?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#authentication_type_variable CiscoSecurityFeatureTemplate#authentication_type_variable}
  */
  readonly authenticationTypeVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#description CiscoSecurityFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#device_types CiscoSecurityFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Extended Anti-Replay Window
  *   - Range: `10`-`2048`
  *   - Default value: `256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#extended_ar_window CiscoSecurityFeatureTemplate#extended_ar_window}
  */
  readonly extendedArWindow?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#extended_ar_window_variable CiscoSecurityFeatureTemplate#extended_ar_window_variable}
  */
  readonly extendedArWindowVariable?: string;
  /**
  * Set the authentication type for DTLS connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#integrity_type CiscoSecurityFeatureTemplate#integrity_type}
  */
  readonly integrityType?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#integrity_type_variable CiscoSecurityFeatureTemplate#integrity_type_variable}
  */
  readonly integrityTypeVariable?: string;
  /**
  * Configure a Keychain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#keychains CiscoSecurityFeatureTemplate#keychains}
  */
  readonly keychains?: CiscoSecurityFeatureTemplateKeychains[] | cdktf.IResolvable;
  /**
  * Configure a Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#keys CiscoSecurityFeatureTemplate#keys}
  */
  readonly keys?: CiscoSecurityFeatureTemplateKeys[] | cdktf.IResolvable;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#name CiscoSecurityFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Enable or disable IPsec pairwise-keying
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#pairwise_keying CiscoSecurityFeatureTemplate#pairwise_keying}
  */
  readonly pairwiseKeying?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#pairwise_keying_variable CiscoSecurityFeatureTemplate#pairwise_keying_variable}
  */
  readonly pairwiseKeyingVariable?: string;
  /**
  * Set how often to change the AES key for DTLS connections
  *   - Range: `10`-`1209600`
  *   - Default value: `86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#rekey_interval CiscoSecurityFeatureTemplate#rekey_interval}
  */
  readonly rekeyInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#rekey_interval_variable CiscoSecurityFeatureTemplate#rekey_interval_variable}
  */
  readonly rekeyIntervalVariable?: string;
  /**
  * Set the sliding replay window size
  *   - Choices: `64`, `128`, `256`, `512`, `1024`, `2048`, `4096`, `8192`
  *   - Default value: `512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#replay_window CiscoSecurityFeatureTemplate#replay_window}
  */
  readonly replayWindow?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#replay_window_variable CiscoSecurityFeatureTemplate#replay_window_variable}
  */
  readonly replayWindowVariable?: string;
}
export interface CiscoSecurityFeatureTemplateKeychains {
  /**
  * Specify the Key ID
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#key_id CiscoSecurityFeatureTemplate#key_id}
  */
  readonly keyId?: number;
  /**
  * Specify the name of the Keychain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#name CiscoSecurityFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#optional CiscoSecurityFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoSecurityFeatureTemplateKeychainsToTerraform(struct?: CiscoSecurityFeatureTemplateKeychains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.numberToTerraform(struct!.keyId),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoSecurityFeatureTemplateKeychainsToHclTerraform(struct?: CiscoSecurityFeatureTemplateKeychains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSecurityFeatureTemplateKeychainsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoSecurityFeatureTemplateKeychains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSecurityFeatureTemplateKeychains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._name = value.name;
      this._optional = value.optional;
    }
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoSecurityFeatureTemplateKeychainsList extends cdktf.ComplexList {
  public internalValue? : CiscoSecurityFeatureTemplateKeychains[] | cdktf.IResolvable

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
  public get(index: number): CiscoSecurityFeatureTemplateKeychainsOutputReference {
    return new CiscoSecurityFeatureTemplateKeychainsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSecurityFeatureTemplateKeys {
  /**
  * Configure Accept AO Mismatch
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#accept_ao_mismatch CiscoSecurityFeatureTemplate#accept_ao_mismatch}
  */
  readonly acceptAoMismatch?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#accept_ao_mismatch_variable CiscoSecurityFeatureTemplate#accept_ao_mismatch_variable}
  */
  readonly acceptAoMismatchVariable?: string;
  /**
  * Configure Accept lifetime Duration
  *   - Range: `1`-`2147483646`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#accept_lifetime_duration CiscoSecurityFeatureTemplate#accept_lifetime_duration}
  */
  readonly acceptLifetimeDuration?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#accept_lifetime_duration_variable CiscoSecurityFeatureTemplate#accept_lifetime_duration_variable}
  */
  readonly acceptLifetimeDurationVariable?: string;
  /**
  * Configure Key lifetime end time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#accept_lifetime_end_time CiscoSecurityFeatureTemplate#accept_lifetime_end_time}
  */
  readonly acceptLifetimeEndTime?: string;
  /**
  * Configure Key lifetime end time
  *   - Choices: `infinite`, `duration`, `end-epoch`
  *   - Default value: `infinite`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#accept_lifetime_end_time_format CiscoSecurityFeatureTemplate#accept_lifetime_end_time_format}
  */
  readonly acceptLifetimeEndTimeFormat?: string;
  /**
  * Configure Key lifetime end time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#accept_lifetime_infinite CiscoSecurityFeatureTemplate#accept_lifetime_infinite}
  */
  readonly acceptLifetimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#accept_lifetime_infinite_variable CiscoSecurityFeatureTemplate#accept_lifetime_infinite_variable}
  */
  readonly acceptLifetimeInfiniteVariable?: string;
  /**
  * Configure Accept Lifetime Local
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#accept_lifetime_local CiscoSecurityFeatureTemplate#accept_lifetime_local}
  */
  readonly acceptLifetimeLocal?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#accept_lifetime_local_variable CiscoSecurityFeatureTemplate#accept_lifetime_local_variable}
  */
  readonly acceptLifetimeLocalVariable?: string;
  /**
  * Configure Key lifetime start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#accept_lifetime_start_time CiscoSecurityFeatureTemplate#accept_lifetime_start_time}
  */
  readonly acceptLifetimeStartTime?: string;
  /**
  * Select the chain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#chain_name CiscoSecurityFeatureTemplate#chain_name}
  */
  readonly chainName?: string;
  /**
  * Crypto Algorithm
  *   - Choices: `aes-128-cmac`, `hmac-sha-1`, `hmac-sha-256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#crypto_algorithm CiscoSecurityFeatureTemplate#crypto_algorithm}
  */
  readonly cryptoAlgorithm?: string;
  /**
  * Select the Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#id CiscoSecurityFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure Include TCP Options
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#include_tcp_options CiscoSecurityFeatureTemplate#include_tcp_options}
  */
  readonly includeTcpOptions?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#include_tcp_options_variable CiscoSecurityFeatureTemplate#include_tcp_options_variable}
  */
  readonly includeTcpOptionsVariable?: string;
  /**
  * Specify the Key String
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#key_string CiscoSecurityFeatureTemplate#key_string}
  */
  readonly keyString?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#key_string_variable CiscoSecurityFeatureTemplate#key_string_variable}
  */
  readonly keyStringVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#optional CiscoSecurityFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Specify the Receiver ID
  *   - Range: `0`-`255`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#receive_id CiscoSecurityFeatureTemplate#receive_id}
  */
  readonly receiveId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#receive_id_variable CiscoSecurityFeatureTemplate#receive_id_variable}
  */
  readonly receiveIdVariable?: string;
  /**
  * Specify the Send ID
  *   - Range: `0`-`255`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#send_id CiscoSecurityFeatureTemplate#send_id}
  */
  readonly sendId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#send_id_variable CiscoSecurityFeatureTemplate#send_id_variable}
  */
  readonly sendIdVariable?: string;
  /**
  * Configure Send lifetime Duration
  *   - Range: `1`-`2147483646`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#send_lifetime_duration CiscoSecurityFeatureTemplate#send_lifetime_duration}
  */
  readonly sendLifetimeDuration?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#send_lifetime_duration_variable CiscoSecurityFeatureTemplate#send_lifetime_duration_variable}
  */
  readonly sendLifetimeDurationVariable?: string;
  /**
  * Configure Key lifetime end time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#send_lifetime_end_time CiscoSecurityFeatureTemplate#send_lifetime_end_time}
  */
  readonly sendLifetimeEndTime?: string;
  /**
  * Configure Key lifetime end time
  *   - Choices: `infinite`, `duration`, `end-epoch`
  *   - Default value: `infinite`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#send_lifetime_end_time_format CiscoSecurityFeatureTemplate#send_lifetime_end_time_format}
  */
  readonly sendLifetimeEndTimeFormat?: string;
  /**
  * Configure Key lifetime end time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#send_lifetime_infinite CiscoSecurityFeatureTemplate#send_lifetime_infinite}
  */
  readonly sendLifetimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#send_lifetime_infinite_variable CiscoSecurityFeatureTemplate#send_lifetime_infinite_variable}
  */
  readonly sendLifetimeInfiniteVariable?: string;
  /**
  * Configure Send lifetime Local
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#send_lifetime_local CiscoSecurityFeatureTemplate#send_lifetime_local}
  */
  readonly sendLifetimeLocal?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#send_lifetime_local_variable CiscoSecurityFeatureTemplate#send_lifetime_local_variable}
  */
  readonly sendLifetimeLocalVariable?: string;
  /**
  * Configure Key lifetime start time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#send_lifetime_start_time CiscoSecurityFeatureTemplate#send_lifetime_start_time}
  */
  readonly sendLifetimeStartTime?: string;
}

export function ciscoSecurityFeatureTemplateKeysToTerraform(struct?: CiscoSecurityFeatureTemplateKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_ao_mismatch: cdktf.booleanToTerraform(struct!.acceptAoMismatch),
    accept_ao_mismatch_variable: cdktf.stringToTerraform(struct!.acceptAoMismatchVariable),
    accept_lifetime_duration: cdktf.numberToTerraform(struct!.acceptLifetimeDuration),
    accept_lifetime_duration_variable: cdktf.stringToTerraform(struct!.acceptLifetimeDurationVariable),
    accept_lifetime_end_time: cdktf.stringToTerraform(struct!.acceptLifetimeEndTime),
    accept_lifetime_end_time_format: cdktf.stringToTerraform(struct!.acceptLifetimeEndTimeFormat),
    accept_lifetime_infinite: cdktf.booleanToTerraform(struct!.acceptLifetimeInfinite),
    accept_lifetime_infinite_variable: cdktf.stringToTerraform(struct!.acceptLifetimeInfiniteVariable),
    accept_lifetime_local: cdktf.booleanToTerraform(struct!.acceptLifetimeLocal),
    accept_lifetime_local_variable: cdktf.stringToTerraform(struct!.acceptLifetimeLocalVariable),
    accept_lifetime_start_time: cdktf.stringToTerraform(struct!.acceptLifetimeStartTime),
    chain_name: cdktf.stringToTerraform(struct!.chainName),
    crypto_algorithm: cdktf.stringToTerraform(struct!.cryptoAlgorithm),
    id: cdktf.stringToTerraform(struct!.id),
    include_tcp_options: cdktf.booleanToTerraform(struct!.includeTcpOptions),
    include_tcp_options_variable: cdktf.stringToTerraform(struct!.includeTcpOptionsVariable),
    key_string: cdktf.stringToTerraform(struct!.keyString),
    key_string_variable: cdktf.stringToTerraform(struct!.keyStringVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    receive_id: cdktf.numberToTerraform(struct!.receiveId),
    receive_id_variable: cdktf.stringToTerraform(struct!.receiveIdVariable),
    send_id: cdktf.numberToTerraform(struct!.sendId),
    send_id_variable: cdktf.stringToTerraform(struct!.sendIdVariable),
    send_lifetime_duration: cdktf.numberToTerraform(struct!.sendLifetimeDuration),
    send_lifetime_duration_variable: cdktf.stringToTerraform(struct!.sendLifetimeDurationVariable),
    send_lifetime_end_time: cdktf.stringToTerraform(struct!.sendLifetimeEndTime),
    send_lifetime_end_time_format: cdktf.stringToTerraform(struct!.sendLifetimeEndTimeFormat),
    send_lifetime_infinite: cdktf.booleanToTerraform(struct!.sendLifetimeInfinite),
    send_lifetime_infinite_variable: cdktf.stringToTerraform(struct!.sendLifetimeInfiniteVariable),
    send_lifetime_local: cdktf.booleanToTerraform(struct!.sendLifetimeLocal),
    send_lifetime_local_variable: cdktf.stringToTerraform(struct!.sendLifetimeLocalVariable),
    send_lifetime_start_time: cdktf.stringToTerraform(struct!.sendLifetimeStartTime),
  }
}


export function ciscoSecurityFeatureTemplateKeysToHclTerraform(struct?: CiscoSecurityFeatureTemplateKeys | cdktf.IResolvable): any {
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
    accept_lifetime_duration: {
      value: cdktf.numberToHclTerraform(struct!.acceptLifetimeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accept_lifetime_duration_variable: {
      value: cdktf.stringToHclTerraform(struct!.acceptLifetimeDurationVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_lifetime_end_time: {
      value: cdktf.stringToHclTerraform(struct!.acceptLifetimeEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_lifetime_end_time_format: {
      value: cdktf.stringToHclTerraform(struct!.acceptLifetimeEndTimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_lifetime_infinite: {
      value: cdktf.booleanToHclTerraform(struct!.acceptLifetimeInfinite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accept_lifetime_infinite_variable: {
      value: cdktf.stringToHclTerraform(struct!.acceptLifetimeInfiniteVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_lifetime_local: {
      value: cdktf.booleanToHclTerraform(struct!.acceptLifetimeLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accept_lifetime_local_variable: {
      value: cdktf.stringToHclTerraform(struct!.acceptLifetimeLocalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_lifetime_start_time: {
      value: cdktf.stringToHclTerraform(struct!.acceptLifetimeStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chain_name: {
      value: cdktf.stringToHclTerraform(struct!.chainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crypto_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.cryptoAlgorithm),
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    receive_id: {
      value: cdktf.numberToHclTerraform(struct!.receiveId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.receiveIdVariable),
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
    send_lifetime_duration: {
      value: cdktf.numberToHclTerraform(struct!.sendLifetimeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_lifetime_duration_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeDurationVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_end_time: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_end_time_format: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeEndTimeFormat),
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
    send_lifetime_infinite_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeInfiniteVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_local: {
      value: cdktf.booleanToHclTerraform(struct!.sendLifetimeLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_lifetime_local_variable: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeLocalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_start_time: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSecurityFeatureTemplateKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoSecurityFeatureTemplateKeys | cdktf.IResolvable | undefined {
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
    if (this._acceptLifetimeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeDuration = this._acceptLifetimeDuration;
    }
    if (this._acceptLifetimeDurationVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeDurationVariable = this._acceptLifetimeDurationVariable;
    }
    if (this._acceptLifetimeEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeEndTime = this._acceptLifetimeEndTime;
    }
    if (this._acceptLifetimeEndTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeEndTimeFormat = this._acceptLifetimeEndTimeFormat;
    }
    if (this._acceptLifetimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeInfinite = this._acceptLifetimeInfinite;
    }
    if (this._acceptLifetimeInfiniteVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeInfiniteVariable = this._acceptLifetimeInfiniteVariable;
    }
    if (this._acceptLifetimeLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeLocal = this._acceptLifetimeLocal;
    }
    if (this._acceptLifetimeLocalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeLocalVariable = this._acceptLifetimeLocalVariable;
    }
    if (this._acceptLifetimeStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeStartTime = this._acceptLifetimeStartTime;
    }
    if (this._chainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainName = this._chainName;
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._receiveId !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveId = this._receiveId;
    }
    if (this._receiveIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveIdVariable = this._receiveIdVariable;
    }
    if (this._sendId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendId = this._sendId;
    }
    if (this._sendIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendIdVariable = this._sendIdVariable;
    }
    if (this._sendLifetimeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeDuration = this._sendLifetimeDuration;
    }
    if (this._sendLifetimeDurationVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeDurationVariable = this._sendLifetimeDurationVariable;
    }
    if (this._sendLifetimeEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeEndTime = this._sendLifetimeEndTime;
    }
    if (this._sendLifetimeEndTimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeEndTimeFormat = this._sendLifetimeEndTimeFormat;
    }
    if (this._sendLifetimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeInfinite = this._sendLifetimeInfinite;
    }
    if (this._sendLifetimeInfiniteVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeInfiniteVariable = this._sendLifetimeInfiniteVariable;
    }
    if (this._sendLifetimeLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeLocal = this._sendLifetimeLocal;
    }
    if (this._sendLifetimeLocalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeLocalVariable = this._sendLifetimeLocalVariable;
    }
    if (this._sendLifetimeStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeStartTime = this._sendLifetimeStartTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSecurityFeatureTemplateKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptAoMismatch = undefined;
      this._acceptAoMismatchVariable = undefined;
      this._acceptLifetimeDuration = undefined;
      this._acceptLifetimeDurationVariable = undefined;
      this._acceptLifetimeEndTime = undefined;
      this._acceptLifetimeEndTimeFormat = undefined;
      this._acceptLifetimeInfinite = undefined;
      this._acceptLifetimeInfiniteVariable = undefined;
      this._acceptLifetimeLocal = undefined;
      this._acceptLifetimeLocalVariable = undefined;
      this._acceptLifetimeStartTime = undefined;
      this._chainName = undefined;
      this._cryptoAlgorithm = undefined;
      this._id = undefined;
      this._includeTcpOptions = undefined;
      this._includeTcpOptionsVariable = undefined;
      this._keyString = undefined;
      this._keyStringVariable = undefined;
      this._optional = undefined;
      this._receiveId = undefined;
      this._receiveIdVariable = undefined;
      this._sendId = undefined;
      this._sendIdVariable = undefined;
      this._sendLifetimeDuration = undefined;
      this._sendLifetimeDurationVariable = undefined;
      this._sendLifetimeEndTime = undefined;
      this._sendLifetimeEndTimeFormat = undefined;
      this._sendLifetimeInfinite = undefined;
      this._sendLifetimeInfiniteVariable = undefined;
      this._sendLifetimeLocal = undefined;
      this._sendLifetimeLocalVariable = undefined;
      this._sendLifetimeStartTime = undefined;
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
      this._acceptLifetimeDuration = value.acceptLifetimeDuration;
      this._acceptLifetimeDurationVariable = value.acceptLifetimeDurationVariable;
      this._acceptLifetimeEndTime = value.acceptLifetimeEndTime;
      this._acceptLifetimeEndTimeFormat = value.acceptLifetimeEndTimeFormat;
      this._acceptLifetimeInfinite = value.acceptLifetimeInfinite;
      this._acceptLifetimeInfiniteVariable = value.acceptLifetimeInfiniteVariable;
      this._acceptLifetimeLocal = value.acceptLifetimeLocal;
      this._acceptLifetimeLocalVariable = value.acceptLifetimeLocalVariable;
      this._acceptLifetimeStartTime = value.acceptLifetimeStartTime;
      this._chainName = value.chainName;
      this._cryptoAlgorithm = value.cryptoAlgorithm;
      this._id = value.id;
      this._includeTcpOptions = value.includeTcpOptions;
      this._includeTcpOptionsVariable = value.includeTcpOptionsVariable;
      this._keyString = value.keyString;
      this._keyStringVariable = value.keyStringVariable;
      this._optional = value.optional;
      this._receiveId = value.receiveId;
      this._receiveIdVariable = value.receiveIdVariable;
      this._sendId = value.sendId;
      this._sendIdVariable = value.sendIdVariable;
      this._sendLifetimeDuration = value.sendLifetimeDuration;
      this._sendLifetimeDurationVariable = value.sendLifetimeDurationVariable;
      this._sendLifetimeEndTime = value.sendLifetimeEndTime;
      this._sendLifetimeEndTimeFormat = value.sendLifetimeEndTimeFormat;
      this._sendLifetimeInfinite = value.sendLifetimeInfinite;
      this._sendLifetimeInfiniteVariable = value.sendLifetimeInfiniteVariable;
      this._sendLifetimeLocal = value.sendLifetimeLocal;
      this._sendLifetimeLocalVariable = value.sendLifetimeLocalVariable;
      this._sendLifetimeStartTime = value.sendLifetimeStartTime;
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

  // accept_lifetime_duration - computed: false, optional: true, required: false
  private _acceptLifetimeDuration?: number; 
  public get acceptLifetimeDuration() {
    return this.getNumberAttribute('accept_lifetime_duration');
  }
  public set acceptLifetimeDuration(value: number) {
    this._acceptLifetimeDuration = value;
  }
  public resetAcceptLifetimeDuration() {
    this._acceptLifetimeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeDurationInput() {
    return this._acceptLifetimeDuration;
  }

  // accept_lifetime_duration_variable - computed: false, optional: true, required: false
  private _acceptLifetimeDurationVariable?: string; 
  public get acceptLifetimeDurationVariable() {
    return this.getStringAttribute('accept_lifetime_duration_variable');
  }
  public set acceptLifetimeDurationVariable(value: string) {
    this._acceptLifetimeDurationVariable = value;
  }
  public resetAcceptLifetimeDurationVariable() {
    this._acceptLifetimeDurationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeDurationVariableInput() {
    return this._acceptLifetimeDurationVariable;
  }

  // accept_lifetime_end_time - computed: false, optional: true, required: false
  private _acceptLifetimeEndTime?: string; 
  public get acceptLifetimeEndTime() {
    return this.getStringAttribute('accept_lifetime_end_time');
  }
  public set acceptLifetimeEndTime(value: string) {
    this._acceptLifetimeEndTime = value;
  }
  public resetAcceptLifetimeEndTime() {
    this._acceptLifetimeEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeEndTimeInput() {
    return this._acceptLifetimeEndTime;
  }

  // accept_lifetime_end_time_format - computed: false, optional: true, required: false
  private _acceptLifetimeEndTimeFormat?: string; 
  public get acceptLifetimeEndTimeFormat() {
    return this.getStringAttribute('accept_lifetime_end_time_format');
  }
  public set acceptLifetimeEndTimeFormat(value: string) {
    this._acceptLifetimeEndTimeFormat = value;
  }
  public resetAcceptLifetimeEndTimeFormat() {
    this._acceptLifetimeEndTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeEndTimeFormatInput() {
    return this._acceptLifetimeEndTimeFormat;
  }

  // accept_lifetime_infinite - computed: false, optional: true, required: false
  private _acceptLifetimeInfinite?: boolean | cdktf.IResolvable; 
  public get acceptLifetimeInfinite() {
    return this.getBooleanAttribute('accept_lifetime_infinite');
  }
  public set acceptLifetimeInfinite(value: boolean | cdktf.IResolvable) {
    this._acceptLifetimeInfinite = value;
  }
  public resetAcceptLifetimeInfinite() {
    this._acceptLifetimeInfinite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeInfiniteInput() {
    return this._acceptLifetimeInfinite;
  }

  // accept_lifetime_infinite_variable - computed: false, optional: true, required: false
  private _acceptLifetimeInfiniteVariable?: string; 
  public get acceptLifetimeInfiniteVariable() {
    return this.getStringAttribute('accept_lifetime_infinite_variable');
  }
  public set acceptLifetimeInfiniteVariable(value: string) {
    this._acceptLifetimeInfiniteVariable = value;
  }
  public resetAcceptLifetimeInfiniteVariable() {
    this._acceptLifetimeInfiniteVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeInfiniteVariableInput() {
    return this._acceptLifetimeInfiniteVariable;
  }

  // accept_lifetime_local - computed: false, optional: true, required: false
  private _acceptLifetimeLocal?: boolean | cdktf.IResolvable; 
  public get acceptLifetimeLocal() {
    return this.getBooleanAttribute('accept_lifetime_local');
  }
  public set acceptLifetimeLocal(value: boolean | cdktf.IResolvable) {
    this._acceptLifetimeLocal = value;
  }
  public resetAcceptLifetimeLocal() {
    this._acceptLifetimeLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeLocalInput() {
    return this._acceptLifetimeLocal;
  }

  // accept_lifetime_local_variable - computed: false, optional: true, required: false
  private _acceptLifetimeLocalVariable?: string; 
  public get acceptLifetimeLocalVariable() {
    return this.getStringAttribute('accept_lifetime_local_variable');
  }
  public set acceptLifetimeLocalVariable(value: string) {
    this._acceptLifetimeLocalVariable = value;
  }
  public resetAcceptLifetimeLocalVariable() {
    this._acceptLifetimeLocalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeLocalVariableInput() {
    return this._acceptLifetimeLocalVariable;
  }

  // accept_lifetime_start_time - computed: false, optional: true, required: false
  private _acceptLifetimeStartTime?: string; 
  public get acceptLifetimeStartTime() {
    return this.getStringAttribute('accept_lifetime_start_time');
  }
  public set acceptLifetimeStartTime(value: string) {
    this._acceptLifetimeStartTime = value;
  }
  public resetAcceptLifetimeStartTime() {
    this._acceptLifetimeStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeStartTimeInput() {
    return this._acceptLifetimeStartTime;
  }

  // chain_name - computed: false, optional: true, required: false
  private _chainName?: string; 
  public get chainName() {
    return this.getStringAttribute('chain_name');
  }
  public set chainName(value: string) {
    this._chainName = value;
  }
  public resetChainName() {
    this._chainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainNameInput() {
    return this._chainName;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // receive_id - computed: false, optional: true, required: false
  private _receiveId?: number; 
  public get receiveId() {
    return this.getNumberAttribute('receive_id');
  }
  public set receiveId(value: number) {
    this._receiveId = value;
  }
  public resetReceiveId() {
    this._receiveId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveIdInput() {
    return this._receiveId;
  }

  // receive_id_variable - computed: false, optional: true, required: false
  private _receiveIdVariable?: string; 
  public get receiveIdVariable() {
    return this.getStringAttribute('receive_id_variable');
  }
  public set receiveIdVariable(value: string) {
    this._receiveIdVariable = value;
  }
  public resetReceiveIdVariable() {
    this._receiveIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveIdVariableInput() {
    return this._receiveIdVariable;
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

  // send_lifetime_duration_variable - computed: false, optional: true, required: false
  private _sendLifetimeDurationVariable?: string; 
  public get sendLifetimeDurationVariable() {
    return this.getStringAttribute('send_lifetime_duration_variable');
  }
  public set sendLifetimeDurationVariable(value: string) {
    this._sendLifetimeDurationVariable = value;
  }
  public resetSendLifetimeDurationVariable() {
    this._sendLifetimeDurationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeDurationVariableInput() {
    return this._sendLifetimeDurationVariable;
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

  // send_lifetime_end_time_format - computed: false, optional: true, required: false
  private _sendLifetimeEndTimeFormat?: string; 
  public get sendLifetimeEndTimeFormat() {
    return this.getStringAttribute('send_lifetime_end_time_format');
  }
  public set sendLifetimeEndTimeFormat(value: string) {
    this._sendLifetimeEndTimeFormat = value;
  }
  public resetSendLifetimeEndTimeFormat() {
    this._sendLifetimeEndTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeEndTimeFormatInput() {
    return this._sendLifetimeEndTimeFormat;
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

  // send_lifetime_infinite_variable - computed: false, optional: true, required: false
  private _sendLifetimeInfiniteVariable?: string; 
  public get sendLifetimeInfiniteVariable() {
    return this.getStringAttribute('send_lifetime_infinite_variable');
  }
  public set sendLifetimeInfiniteVariable(value: string) {
    this._sendLifetimeInfiniteVariable = value;
  }
  public resetSendLifetimeInfiniteVariable() {
    this._sendLifetimeInfiniteVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeInfiniteVariableInput() {
    return this._sendLifetimeInfiniteVariable;
  }

  // send_lifetime_local - computed: false, optional: true, required: false
  private _sendLifetimeLocal?: boolean | cdktf.IResolvable; 
  public get sendLifetimeLocal() {
    return this.getBooleanAttribute('send_lifetime_local');
  }
  public set sendLifetimeLocal(value: boolean | cdktf.IResolvable) {
    this._sendLifetimeLocal = value;
  }
  public resetSendLifetimeLocal() {
    this._sendLifetimeLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeLocalInput() {
    return this._sendLifetimeLocal;
  }

  // send_lifetime_local_variable - computed: false, optional: true, required: false
  private _sendLifetimeLocalVariable?: string; 
  public get sendLifetimeLocalVariable() {
    return this.getStringAttribute('send_lifetime_local_variable');
  }
  public set sendLifetimeLocalVariable(value: string) {
    this._sendLifetimeLocalVariable = value;
  }
  public resetSendLifetimeLocalVariable() {
    this._sendLifetimeLocalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeLocalVariableInput() {
    return this._sendLifetimeLocalVariable;
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
}

export class CiscoSecurityFeatureTemplateKeysList extends cdktf.ComplexList {
  public internalValue? : CiscoSecurityFeatureTemplateKeys[] | cdktf.IResolvable

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
  public get(index: number): CiscoSecurityFeatureTemplateKeysOutputReference {
    return new CiscoSecurityFeatureTemplateKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template sdwan_cisco_security_feature_template}
*/
export class CiscoSecurityFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_security_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoSecurityFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoSecurityFeatureTemplate to import
  * @param importFromId The id of the existing CiscoSecurityFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoSecurityFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_security_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_security_feature_template sdwan_cisco_security_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoSecurityFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoSecurityFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_security_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationType = config.authenticationType;
    this._authenticationTypeVariable = config.authenticationTypeVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._extendedArWindow = config.extendedArWindow;
    this._extendedArWindowVariable = config.extendedArWindowVariable;
    this._integrityType = config.integrityType;
    this._integrityTypeVariable = config.integrityTypeVariable;
    this._keychains.internalValue = config.keychains;
    this._keys.internalValue = config.keys;
    this._name = config.name;
    this._pairwiseKeying = config.pairwiseKeying;
    this._pairwiseKeyingVariable = config.pairwiseKeyingVariable;
    this._rekeyInterval = config.rekeyInterval;
    this._rekeyIntervalVariable = config.rekeyIntervalVariable;
    this._replayWindow = config.replayWindow;
    this._replayWindowVariable = config.replayWindowVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string[]; 
  public get authenticationType() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_type'));
  }
  public set authenticationType(value: string[]) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // authentication_type_variable - computed: false, optional: true, required: false
  private _authenticationTypeVariable?: string; 
  public get authenticationTypeVariable() {
    return this.getStringAttribute('authentication_type_variable');
  }
  public set authenticationTypeVariable(value: string) {
    this._authenticationTypeVariable = value;
  }
  public resetAuthenticationTypeVariable() {
    this._authenticationTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeVariableInput() {
    return this._authenticationTypeVariable;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // extended_ar_window - computed: false, optional: true, required: false
  private _extendedArWindow?: number; 
  public get extendedArWindow() {
    return this.getNumberAttribute('extended_ar_window');
  }
  public set extendedArWindow(value: number) {
    this._extendedArWindow = value;
  }
  public resetExtendedArWindow() {
    this._extendedArWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedArWindowInput() {
    return this._extendedArWindow;
  }

  // extended_ar_window_variable - computed: false, optional: true, required: false
  private _extendedArWindowVariable?: string; 
  public get extendedArWindowVariable() {
    return this.getStringAttribute('extended_ar_window_variable');
  }
  public set extendedArWindowVariable(value: string) {
    this._extendedArWindowVariable = value;
  }
  public resetExtendedArWindowVariable() {
    this._extendedArWindowVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedArWindowVariableInput() {
    return this._extendedArWindowVariable;
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

  // keychains - computed: false, optional: true, required: false
  private _keychains = new CiscoSecurityFeatureTemplateKeychainsList(this, "keychains", false);
  public get keychains() {
    return this._keychains;
  }
  public putKeychains(value: CiscoSecurityFeatureTemplateKeychains[] | cdktf.IResolvable) {
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
  private _keys = new CiscoSecurityFeatureTemplateKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
  public putKeys(value: CiscoSecurityFeatureTemplateKeys[] | cdktf.IResolvable) {
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

  // pairwise_keying - computed: false, optional: true, required: false
  private _pairwiseKeying?: boolean | cdktf.IResolvable; 
  public get pairwiseKeying() {
    return this.getBooleanAttribute('pairwise_keying');
  }
  public set pairwiseKeying(value: boolean | cdktf.IResolvable) {
    this._pairwiseKeying = value;
  }
  public resetPairwiseKeying() {
    this._pairwiseKeying = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairwiseKeyingInput() {
    return this._pairwiseKeying;
  }

  // pairwise_keying_variable - computed: false, optional: true, required: false
  private _pairwiseKeyingVariable?: string; 
  public get pairwiseKeyingVariable() {
    return this.getStringAttribute('pairwise_keying_variable');
  }
  public set pairwiseKeyingVariable(value: string) {
    this._pairwiseKeyingVariable = value;
  }
  public resetPairwiseKeyingVariable() {
    this._pairwiseKeyingVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairwiseKeyingVariableInput() {
    return this._pairwiseKeyingVariable;
  }

  // rekey_interval - computed: false, optional: true, required: false
  private _rekeyInterval?: number; 
  public get rekeyInterval() {
    return this.getNumberAttribute('rekey_interval');
  }
  public set rekeyInterval(value: number) {
    this._rekeyInterval = value;
  }
  public resetRekeyInterval() {
    this._rekeyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyIntervalInput() {
    return this._rekeyInterval;
  }

  // rekey_interval_variable - computed: false, optional: true, required: false
  private _rekeyIntervalVariable?: string; 
  public get rekeyIntervalVariable() {
    return this.getStringAttribute('rekey_interval_variable');
  }
  public set rekeyIntervalVariable(value: string) {
    this._rekeyIntervalVariable = value;
  }
  public resetRekeyIntervalVariable() {
    this._rekeyIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rekeyIntervalVariableInput() {
    return this._rekeyIntervalVariable;
  }

  // replay_window - computed: false, optional: true, required: false
  private _replayWindow?: string; 
  public get replayWindow() {
    return this.getStringAttribute('replay_window');
  }
  public set replayWindow(value: string) {
    this._replayWindow = value;
  }
  public resetReplayWindow() {
    this._replayWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayWindowInput() {
    return this._replayWindow;
  }

  // replay_window_variable - computed: false, optional: true, required: false
  private _replayWindowVariable?: string; 
  public get replayWindowVariable() {
    return this.getStringAttribute('replay_window_variable');
  }
  public set replayWindowVariable(value: string) {
    this._replayWindowVariable = value;
  }
  public resetReplayWindowVariable() {
    this._replayWindowVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayWindowVariableInput() {
    return this._replayWindowVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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
      authentication_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationType),
      authentication_type_variable: cdktf.stringToTerraform(this._authenticationTypeVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      extended_ar_window: cdktf.numberToTerraform(this._extendedArWindow),
      extended_ar_window_variable: cdktf.stringToTerraform(this._extendedArWindowVariable),
      integrity_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._integrityType),
      integrity_type_variable: cdktf.stringToTerraform(this._integrityTypeVariable),
      keychains: cdktf.listMapper(ciscoSecurityFeatureTemplateKeychainsToTerraform, false)(this._keychains.internalValue),
      keys: cdktf.listMapper(ciscoSecurityFeatureTemplateKeysToTerraform, false)(this._keys.internalValue),
      name: cdktf.stringToTerraform(this._name),
      pairwise_keying: cdktf.booleanToTerraform(this._pairwiseKeying),
      pairwise_keying_variable: cdktf.stringToTerraform(this._pairwiseKeyingVariable),
      rekey_interval: cdktf.numberToTerraform(this._rekeyInterval),
      rekey_interval_variable: cdktf.stringToTerraform(this._rekeyIntervalVariable),
      replay_window: cdktf.stringToTerraform(this._replayWindow),
      replay_window_variable: cdktf.stringToTerraform(this._replayWindowVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationType),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authentication_type_variable: {
        value: cdktf.stringToHclTerraform(this._authenticationTypeVariable),
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
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extended_ar_window: {
        value: cdktf.numberToHclTerraform(this._extendedArWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      extended_ar_window_variable: {
        value: cdktf.stringToHclTerraform(this._extendedArWindowVariable),
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
      keychains: {
        value: cdktf.listMapperHcl(ciscoSecurityFeatureTemplateKeychainsToHclTerraform, false)(this._keychains.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSecurityFeatureTemplateKeychainsList",
      },
      keys: {
        value: cdktf.listMapperHcl(ciscoSecurityFeatureTemplateKeysToHclTerraform, false)(this._keys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSecurityFeatureTemplateKeysList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pairwise_keying: {
        value: cdktf.booleanToHclTerraform(this._pairwiseKeying),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pairwise_keying_variable: {
        value: cdktf.stringToHclTerraform(this._pairwiseKeyingVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rekey_interval: {
        value: cdktf.numberToHclTerraform(this._rekeyInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rekey_interval_variable: {
        value: cdktf.stringToHclTerraform(this._rekeyIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replay_window: {
        value: cdktf.stringToHclTerraform(this._replayWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replay_window_variable: {
        value: cdktf.stringToHclTerraform(this._replayWindowVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
