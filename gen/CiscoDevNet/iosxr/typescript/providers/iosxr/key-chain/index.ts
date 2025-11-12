// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyChainConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#device KeyChain#device}
  */
  readonly device?: string;
  /**
  * Configure a Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#keys KeyChain#keys}
  */
  readonly keys?: KeyChainKeys[] | cdktf.IResolvable;
  /**
  * Name of the key chain - maximum 32 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#name KeyChain#name}
  */
  readonly name: string;
}
export interface KeyChainKeys {
  /**
  * Never expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#accept_lifetime_infinite KeyChain#accept_lifetime_infinite}
  */
  readonly acceptLifetimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * Day of the month
  *   - Range: `1`-`31`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#accept_lifetime_start_time_day_of_month KeyChain#accept_lifetime_start_time_day_of_month}
  */
  readonly acceptLifetimeStartTimeDayOfMonth?: number;
  /**
  * Start time hour
  *   - Range: `0`-`23`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#accept_lifetime_start_time_hour KeyChain#accept_lifetime_start_time_hour}
  */
  readonly acceptLifetimeStartTimeHour?: number;
  /**
  * Start time minute
  *   - Range: `0`-`59`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#accept_lifetime_start_time_minute KeyChain#accept_lifetime_start_time_minute}
  */
  readonly acceptLifetimeStartTimeMinute?: number;
  /**
  * Month of the year
  *   - Choices: `april`, `august`, `december`, `february`, `january`, `july`, `june`, `march`, `may`, `november`, `october`, `september`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#accept_lifetime_start_time_month KeyChain#accept_lifetime_start_time_month}
  */
  readonly acceptLifetimeStartTimeMonth?: string;
  /**
  * Start time second
  *   - Range: `0`-`59`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#accept_lifetime_start_time_second KeyChain#accept_lifetime_start_time_second}
  */
  readonly acceptLifetimeStartTimeSecond?: number;
  /**
  * Year
  *   - Range: `1993`-`2035`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#accept_lifetime_start_time_year KeyChain#accept_lifetime_start_time_year}
  */
  readonly acceptLifetimeStartTimeYear?: number;
  /**
  * Choose cryptographic algorithm
  *   - Choices: `aes-128-cmac-96`, `hmac-md5`, `hmac-sha-256`, `hmac-sha1-12`, `hmac-sha1-20`, `hmac-sha1-96`, `md5`, `sha-1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#cryptographic_algorithm KeyChain#cryptographic_algorithm}
  */
  readonly cryptographicAlgorithm?: string;
  /**
  * Configure a Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#key_name KeyChain#key_name}
  */
  readonly keyName: string;
  /**
  * Encrypted key string (even number of characters with first two as digits and sum less than 53, and rest of the characters should be hex digits)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#key_string_password KeyChain#key_string_password}
  */
  readonly keyStringPassword?: string;
  /**
  * Never expires
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#send_lifetime_infinite KeyChain#send_lifetime_infinite}
  */
  readonly sendLifetimeInfinite?: boolean | cdktf.IResolvable;
  /**
  * Day of the month
  *   - Range: `1`-`31`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#send_lifetime_start_time_day_of_month KeyChain#send_lifetime_start_time_day_of_month}
  */
  readonly sendLifetimeStartTimeDayOfMonth?: number;
  /**
  * Start time hour
  *   - Range: `0`-`23`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#send_lifetime_start_time_hour KeyChain#send_lifetime_start_time_hour}
  */
  readonly sendLifetimeStartTimeHour?: number;
  /**
  * Start time minute
  *   - Range: `0`-`59`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#send_lifetime_start_time_minute KeyChain#send_lifetime_start_time_minute}
  */
  readonly sendLifetimeStartTimeMinute?: number;
  /**
  * Month of the year
  *   - Choices: `april`, `august`, `december`, `february`, `january`, `july`, `june`, `march`, `may`, `november`, `october`, `september`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#send_lifetime_start_time_month KeyChain#send_lifetime_start_time_month}
  */
  readonly sendLifetimeStartTimeMonth?: string;
  /**
  * Start time second
  *   - Range: `0`-`59`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#send_lifetime_start_time_second KeyChain#send_lifetime_start_time_second}
  */
  readonly sendLifetimeStartTimeSecond?: number;
  /**
  * Year
  *   - Range: `1993`-`2035`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#send_lifetime_start_time_year KeyChain#send_lifetime_start_time_year}
  */
  readonly sendLifetimeStartTimeYear?: number;
}

export function keyChainKeysToTerraform(struct?: KeyChainKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_lifetime_infinite: cdktf.booleanToTerraform(struct!.acceptLifetimeInfinite),
    accept_lifetime_start_time_day_of_month: cdktf.numberToTerraform(struct!.acceptLifetimeStartTimeDayOfMonth),
    accept_lifetime_start_time_hour: cdktf.numberToTerraform(struct!.acceptLifetimeStartTimeHour),
    accept_lifetime_start_time_minute: cdktf.numberToTerraform(struct!.acceptLifetimeStartTimeMinute),
    accept_lifetime_start_time_month: cdktf.stringToTerraform(struct!.acceptLifetimeStartTimeMonth),
    accept_lifetime_start_time_second: cdktf.numberToTerraform(struct!.acceptLifetimeStartTimeSecond),
    accept_lifetime_start_time_year: cdktf.numberToTerraform(struct!.acceptLifetimeStartTimeYear),
    cryptographic_algorithm: cdktf.stringToTerraform(struct!.cryptographicAlgorithm),
    key_name: cdktf.stringToTerraform(struct!.keyName),
    key_string_password: cdktf.stringToTerraform(struct!.keyStringPassword),
    send_lifetime_infinite: cdktf.booleanToTerraform(struct!.sendLifetimeInfinite),
    send_lifetime_start_time_day_of_month: cdktf.numberToTerraform(struct!.sendLifetimeStartTimeDayOfMonth),
    send_lifetime_start_time_hour: cdktf.numberToTerraform(struct!.sendLifetimeStartTimeHour),
    send_lifetime_start_time_minute: cdktf.numberToTerraform(struct!.sendLifetimeStartTimeMinute),
    send_lifetime_start_time_month: cdktf.stringToTerraform(struct!.sendLifetimeStartTimeMonth),
    send_lifetime_start_time_second: cdktf.numberToTerraform(struct!.sendLifetimeStartTimeSecond),
    send_lifetime_start_time_year: cdktf.numberToTerraform(struct!.sendLifetimeStartTimeYear),
  }
}


export function keyChainKeysToHclTerraform(struct?: KeyChainKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_lifetime_infinite: {
      value: cdktf.booleanToHclTerraform(struct!.acceptLifetimeInfinite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    accept_lifetime_start_time_day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.acceptLifetimeStartTimeDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accept_lifetime_start_time_hour: {
      value: cdktf.numberToHclTerraform(struct!.acceptLifetimeStartTimeHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accept_lifetime_start_time_minute: {
      value: cdktf.numberToHclTerraform(struct!.acceptLifetimeStartTimeMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accept_lifetime_start_time_month: {
      value: cdktf.stringToHclTerraform(struct!.acceptLifetimeStartTimeMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_lifetime_start_time_second: {
      value: cdktf.numberToHclTerraform(struct!.acceptLifetimeStartTimeSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accept_lifetime_start_time_year: {
      value: cdktf.numberToHclTerraform(struct!.acceptLifetimeStartTimeYear),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cryptographic_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.cryptographicAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_string_password: {
      value: cdktf.stringToHclTerraform(struct!.keyStringPassword),
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
    send_lifetime_start_time_day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.sendLifetimeStartTimeDayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_lifetime_start_time_hour: {
      value: cdktf.numberToHclTerraform(struct!.sendLifetimeStartTimeHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_lifetime_start_time_minute: {
      value: cdktf.numberToHclTerraform(struct!.sendLifetimeStartTimeMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_lifetime_start_time_month: {
      value: cdktf.stringToHclTerraform(struct!.sendLifetimeStartTimeMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_lifetime_start_time_second: {
      value: cdktf.numberToHclTerraform(struct!.sendLifetimeStartTimeSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_lifetime_start_time_year: {
      value: cdktf.numberToHclTerraform(struct!.sendLifetimeStartTimeYear),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KeyChainKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KeyChainKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptLifetimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeInfinite = this._acceptLifetimeInfinite;
    }
    if (this._acceptLifetimeStartTimeDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeStartTimeDayOfMonth = this._acceptLifetimeStartTimeDayOfMonth;
    }
    if (this._acceptLifetimeStartTimeHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeStartTimeHour = this._acceptLifetimeStartTimeHour;
    }
    if (this._acceptLifetimeStartTimeMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeStartTimeMinute = this._acceptLifetimeStartTimeMinute;
    }
    if (this._acceptLifetimeStartTimeMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeStartTimeMonth = this._acceptLifetimeStartTimeMonth;
    }
    if (this._acceptLifetimeStartTimeSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeStartTimeSecond = this._acceptLifetimeStartTimeSecond;
    }
    if (this._acceptLifetimeStartTimeYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLifetimeStartTimeYear = this._acceptLifetimeStartTimeYear;
    }
    if (this._cryptographicAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.cryptographicAlgorithm = this._cryptographicAlgorithm;
    }
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._keyStringPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStringPassword = this._keyStringPassword;
    }
    if (this._sendLifetimeInfinite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeInfinite = this._sendLifetimeInfinite;
    }
    if (this._sendLifetimeStartTimeDayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeStartTimeDayOfMonth = this._sendLifetimeStartTimeDayOfMonth;
    }
    if (this._sendLifetimeStartTimeHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeStartTimeHour = this._sendLifetimeStartTimeHour;
    }
    if (this._sendLifetimeStartTimeMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeStartTimeMinute = this._sendLifetimeStartTimeMinute;
    }
    if (this._sendLifetimeStartTimeMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeStartTimeMonth = this._sendLifetimeStartTimeMonth;
    }
    if (this._sendLifetimeStartTimeSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeStartTimeSecond = this._sendLifetimeStartTimeSecond;
    }
    if (this._sendLifetimeStartTimeYear !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendLifetimeStartTimeYear = this._sendLifetimeStartTimeYear;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KeyChainKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptLifetimeInfinite = undefined;
      this._acceptLifetimeStartTimeDayOfMonth = undefined;
      this._acceptLifetimeStartTimeHour = undefined;
      this._acceptLifetimeStartTimeMinute = undefined;
      this._acceptLifetimeStartTimeMonth = undefined;
      this._acceptLifetimeStartTimeSecond = undefined;
      this._acceptLifetimeStartTimeYear = undefined;
      this._cryptographicAlgorithm = undefined;
      this._keyName = undefined;
      this._keyStringPassword = undefined;
      this._sendLifetimeInfinite = undefined;
      this._sendLifetimeStartTimeDayOfMonth = undefined;
      this._sendLifetimeStartTimeHour = undefined;
      this._sendLifetimeStartTimeMinute = undefined;
      this._sendLifetimeStartTimeMonth = undefined;
      this._sendLifetimeStartTimeSecond = undefined;
      this._sendLifetimeStartTimeYear = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceptLifetimeInfinite = value.acceptLifetimeInfinite;
      this._acceptLifetimeStartTimeDayOfMonth = value.acceptLifetimeStartTimeDayOfMonth;
      this._acceptLifetimeStartTimeHour = value.acceptLifetimeStartTimeHour;
      this._acceptLifetimeStartTimeMinute = value.acceptLifetimeStartTimeMinute;
      this._acceptLifetimeStartTimeMonth = value.acceptLifetimeStartTimeMonth;
      this._acceptLifetimeStartTimeSecond = value.acceptLifetimeStartTimeSecond;
      this._acceptLifetimeStartTimeYear = value.acceptLifetimeStartTimeYear;
      this._cryptographicAlgorithm = value.cryptographicAlgorithm;
      this._keyName = value.keyName;
      this._keyStringPassword = value.keyStringPassword;
      this._sendLifetimeInfinite = value.sendLifetimeInfinite;
      this._sendLifetimeStartTimeDayOfMonth = value.sendLifetimeStartTimeDayOfMonth;
      this._sendLifetimeStartTimeHour = value.sendLifetimeStartTimeHour;
      this._sendLifetimeStartTimeMinute = value.sendLifetimeStartTimeMinute;
      this._sendLifetimeStartTimeMonth = value.sendLifetimeStartTimeMonth;
      this._sendLifetimeStartTimeSecond = value.sendLifetimeStartTimeSecond;
      this._sendLifetimeStartTimeYear = value.sendLifetimeStartTimeYear;
    }
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

  // accept_lifetime_start_time_day_of_month - computed: false, optional: true, required: false
  private _acceptLifetimeStartTimeDayOfMonth?: number; 
  public get acceptLifetimeStartTimeDayOfMonth() {
    return this.getNumberAttribute('accept_lifetime_start_time_day_of_month');
  }
  public set acceptLifetimeStartTimeDayOfMonth(value: number) {
    this._acceptLifetimeStartTimeDayOfMonth = value;
  }
  public resetAcceptLifetimeStartTimeDayOfMonth() {
    this._acceptLifetimeStartTimeDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeStartTimeDayOfMonthInput() {
    return this._acceptLifetimeStartTimeDayOfMonth;
  }

  // accept_lifetime_start_time_hour - computed: false, optional: true, required: false
  private _acceptLifetimeStartTimeHour?: number; 
  public get acceptLifetimeStartTimeHour() {
    return this.getNumberAttribute('accept_lifetime_start_time_hour');
  }
  public set acceptLifetimeStartTimeHour(value: number) {
    this._acceptLifetimeStartTimeHour = value;
  }
  public resetAcceptLifetimeStartTimeHour() {
    this._acceptLifetimeStartTimeHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeStartTimeHourInput() {
    return this._acceptLifetimeStartTimeHour;
  }

  // accept_lifetime_start_time_minute - computed: false, optional: true, required: false
  private _acceptLifetimeStartTimeMinute?: number; 
  public get acceptLifetimeStartTimeMinute() {
    return this.getNumberAttribute('accept_lifetime_start_time_minute');
  }
  public set acceptLifetimeStartTimeMinute(value: number) {
    this._acceptLifetimeStartTimeMinute = value;
  }
  public resetAcceptLifetimeStartTimeMinute() {
    this._acceptLifetimeStartTimeMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeStartTimeMinuteInput() {
    return this._acceptLifetimeStartTimeMinute;
  }

  // accept_lifetime_start_time_month - computed: false, optional: true, required: false
  private _acceptLifetimeStartTimeMonth?: string; 
  public get acceptLifetimeStartTimeMonth() {
    return this.getStringAttribute('accept_lifetime_start_time_month');
  }
  public set acceptLifetimeStartTimeMonth(value: string) {
    this._acceptLifetimeStartTimeMonth = value;
  }
  public resetAcceptLifetimeStartTimeMonth() {
    this._acceptLifetimeStartTimeMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeStartTimeMonthInput() {
    return this._acceptLifetimeStartTimeMonth;
  }

  // accept_lifetime_start_time_second - computed: false, optional: true, required: false
  private _acceptLifetimeStartTimeSecond?: number; 
  public get acceptLifetimeStartTimeSecond() {
    return this.getNumberAttribute('accept_lifetime_start_time_second');
  }
  public set acceptLifetimeStartTimeSecond(value: number) {
    this._acceptLifetimeStartTimeSecond = value;
  }
  public resetAcceptLifetimeStartTimeSecond() {
    this._acceptLifetimeStartTimeSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeStartTimeSecondInput() {
    return this._acceptLifetimeStartTimeSecond;
  }

  // accept_lifetime_start_time_year - computed: false, optional: true, required: false
  private _acceptLifetimeStartTimeYear?: number; 
  public get acceptLifetimeStartTimeYear() {
    return this.getNumberAttribute('accept_lifetime_start_time_year');
  }
  public set acceptLifetimeStartTimeYear(value: number) {
    this._acceptLifetimeStartTimeYear = value;
  }
  public resetAcceptLifetimeStartTimeYear() {
    this._acceptLifetimeStartTimeYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLifetimeStartTimeYearInput() {
    return this._acceptLifetimeStartTimeYear;
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

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_string_password - computed: false, optional: true, required: false
  private _keyStringPassword?: string; 
  public get keyStringPassword() {
    return this.getStringAttribute('key_string_password');
  }
  public set keyStringPassword(value: string) {
    this._keyStringPassword = value;
  }
  public resetKeyStringPassword() {
    this._keyStringPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStringPasswordInput() {
    return this._keyStringPassword;
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

  // send_lifetime_start_time_day_of_month - computed: false, optional: true, required: false
  private _sendLifetimeStartTimeDayOfMonth?: number; 
  public get sendLifetimeStartTimeDayOfMonth() {
    return this.getNumberAttribute('send_lifetime_start_time_day_of_month');
  }
  public set sendLifetimeStartTimeDayOfMonth(value: number) {
    this._sendLifetimeStartTimeDayOfMonth = value;
  }
  public resetSendLifetimeStartTimeDayOfMonth() {
    this._sendLifetimeStartTimeDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeStartTimeDayOfMonthInput() {
    return this._sendLifetimeStartTimeDayOfMonth;
  }

  // send_lifetime_start_time_hour - computed: false, optional: true, required: false
  private _sendLifetimeStartTimeHour?: number; 
  public get sendLifetimeStartTimeHour() {
    return this.getNumberAttribute('send_lifetime_start_time_hour');
  }
  public set sendLifetimeStartTimeHour(value: number) {
    this._sendLifetimeStartTimeHour = value;
  }
  public resetSendLifetimeStartTimeHour() {
    this._sendLifetimeStartTimeHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeStartTimeHourInput() {
    return this._sendLifetimeStartTimeHour;
  }

  // send_lifetime_start_time_minute - computed: false, optional: true, required: false
  private _sendLifetimeStartTimeMinute?: number; 
  public get sendLifetimeStartTimeMinute() {
    return this.getNumberAttribute('send_lifetime_start_time_minute');
  }
  public set sendLifetimeStartTimeMinute(value: number) {
    this._sendLifetimeStartTimeMinute = value;
  }
  public resetSendLifetimeStartTimeMinute() {
    this._sendLifetimeStartTimeMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeStartTimeMinuteInput() {
    return this._sendLifetimeStartTimeMinute;
  }

  // send_lifetime_start_time_month - computed: false, optional: true, required: false
  private _sendLifetimeStartTimeMonth?: string; 
  public get sendLifetimeStartTimeMonth() {
    return this.getStringAttribute('send_lifetime_start_time_month');
  }
  public set sendLifetimeStartTimeMonth(value: string) {
    this._sendLifetimeStartTimeMonth = value;
  }
  public resetSendLifetimeStartTimeMonth() {
    this._sendLifetimeStartTimeMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeStartTimeMonthInput() {
    return this._sendLifetimeStartTimeMonth;
  }

  // send_lifetime_start_time_second - computed: false, optional: true, required: false
  private _sendLifetimeStartTimeSecond?: number; 
  public get sendLifetimeStartTimeSecond() {
    return this.getNumberAttribute('send_lifetime_start_time_second');
  }
  public set sendLifetimeStartTimeSecond(value: number) {
    this._sendLifetimeStartTimeSecond = value;
  }
  public resetSendLifetimeStartTimeSecond() {
    this._sendLifetimeStartTimeSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeStartTimeSecondInput() {
    return this._sendLifetimeStartTimeSecond;
  }

  // send_lifetime_start_time_year - computed: false, optional: true, required: false
  private _sendLifetimeStartTimeYear?: number; 
  public get sendLifetimeStartTimeYear() {
    return this.getNumberAttribute('send_lifetime_start_time_year');
  }
  public set sendLifetimeStartTimeYear(value: number) {
    this._sendLifetimeStartTimeYear = value;
  }
  public resetSendLifetimeStartTimeYear() {
    this._sendLifetimeStartTimeYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendLifetimeStartTimeYearInput() {
    return this._sendLifetimeStartTimeYear;
  }
}

export class KeyChainKeysList extends cdktf.ComplexList {
  public internalValue? : KeyChainKeys[] | cdktf.IResolvable

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
  public get(index: number): KeyChainKeysOutputReference {
    return new KeyChainKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain iosxr_key_chain}
*/
export class KeyChain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_key_chain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyChain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyChain to import
  * @param importFromId The id of the existing KeyChain that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyChain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_key_chain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/key_chain iosxr_key_chain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyChainConfig
  */
  public constructor(scope: Construct, id: string, config: KeyChainConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_key_chain',
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
    this._keys.internalValue = config.keys;
    this._name = config.name;
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

  // keys - computed: false, optional: true, required: false
  private _keys = new KeyChainKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
  public putKeys(value: KeyChainKeys[] | cdktf.IResolvable) {
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      keys: cdktf.listMapper(keyChainKeysToTerraform, false)(this._keys.internalValue),
      name: cdktf.stringToTerraform(this._name),
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
      keys: {
        value: cdktf.listMapperHcl(keyChainKeysToHclTerraform, false)(this._keys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KeyChainKeysList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
