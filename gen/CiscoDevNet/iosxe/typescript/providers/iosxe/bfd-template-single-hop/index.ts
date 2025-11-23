// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BfdTemplateSingleHopConfig extends cdktf.TerraformMetaArguments {
  /**
  * keychain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#authentication_md5_keychain BfdTemplateSingleHop#authentication_md5_keychain}
  */
  readonly authenticationMd5Keychain?: string;
  /**
  * keychain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#authentication_meticulous_md5_keychain BfdTemplateSingleHop#authentication_meticulous_md5_keychain}
  */
  readonly authenticationMeticulousMd5Keychain?: string;
  /**
  * keychain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#authentication_meticulous_sha_1_keychain BfdTemplateSingleHop#authentication_meticulous_sha_1_keychain}
  */
  readonly authenticationMeticulousSha1Keychain?: string;
  /**
  * keychain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#authentication_sha_1_keychain BfdTemplateSingleHop#authentication_sha_1_keychain}
  */
  readonly authenticationSha1Keychain?: string;
  /**
  * Half-life time for the penalty
  *   - Range: `1`-`30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#dampening_half_time BfdTemplateSingleHop#dampening_half_time}
  */
  readonly dampeningHalfTime?: number;
  /**
  * Maximum duration to suppress a session
  *   - Range: `1`-`420`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#dampening_max_suppressing_time BfdTemplateSingleHop#dampening_max_suppressing_time}
  */
  readonly dampeningMaxSuppressingTime?: number;
  /**
  * Value to start suppressing a session
  *   - Range: `1`-`18000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#dampening_suppress_time BfdTemplateSingleHop#dampening_suppress_time}
  */
  readonly dampeningSuppressTime?: number;
  /**
  * Value to unsuppress a session
  *   - Range: `1`-`18000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#dampening_unsuppress_time BfdTemplateSingleHop#dampening_unsuppress_time}
  */
  readonly dampeningUnsuppressTime?: number;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#device BfdTemplateSingleHop#device}
  */
  readonly device?: string;
  /**
  * Use echo adjunct as bfd detection mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#echo BfdTemplateSingleHop#echo}
  */
  readonly echo?: boolean | cdktf.IResolvable;
  /**
  * Minimum receive interval capability
  *   - Range: `3300`-`9999000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#interval_microseconds_min_rx BfdTemplateSingleHop#interval_microseconds_min_rx}
  */
  readonly intervalMicrosecondsMinRx?: number;
  /**
  * Minimum transmit interval capability
  *   - Range: `3300`-`9999000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#interval_microseconds_min_tx BfdTemplateSingleHop#interval_microseconds_min_tx}
  */
  readonly intervalMicrosecondsMinTx?: number;
  /**
  * Minimum transmit and receive interval capability
  *   - Range: `4`-`9999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#interval_milliseconds_both BfdTemplateSingleHop#interval_milliseconds_both}
  */
  readonly intervalMillisecondsBoth?: number;
  /**
  * Minimum receive interval capability
  *   - Range: `4`-`9999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#interval_milliseconds_min_rx BfdTemplateSingleHop#interval_milliseconds_min_rx}
  */
  readonly intervalMillisecondsMinRx?: number;
  /**
  * Minimum transmit interval capability
  *   - Range: `4`-`9999`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#interval_milliseconds_min_tx BfdTemplateSingleHop#interval_milliseconds_min_tx}
  */
  readonly intervalMillisecondsMinTx?: number;
  /**
  * Multiplier value used to compute holddown
  *   - Range: `3`-`50`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#interval_milliseconds_multiplier BfdTemplateSingleHop#interval_milliseconds_multiplier}
  */
  readonly intervalMillisecondsMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#name BfdTemplateSingleHop#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop iosxe_bfd_template_single_hop}
*/
export class BfdTemplateSingleHop extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bfd_template_single_hop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BfdTemplateSingleHop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BfdTemplateSingleHop to import
  * @param importFromId The id of the existing BfdTemplateSingleHop that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BfdTemplateSingleHop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bfd_template_single_hop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.11.0/docs/resources/bfd_template_single_hop iosxe_bfd_template_single_hop} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BfdTemplateSingleHopConfig
  */
  public constructor(scope: Construct, id: string, config: BfdTemplateSingleHopConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bfd_template_single_hop',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationMd5Keychain = config.authenticationMd5Keychain;
    this._authenticationMeticulousMd5Keychain = config.authenticationMeticulousMd5Keychain;
    this._authenticationMeticulousSha1Keychain = config.authenticationMeticulousSha1Keychain;
    this._authenticationSha1Keychain = config.authenticationSha1Keychain;
    this._dampeningHalfTime = config.dampeningHalfTime;
    this._dampeningMaxSuppressingTime = config.dampeningMaxSuppressingTime;
    this._dampeningSuppressTime = config.dampeningSuppressTime;
    this._dampeningUnsuppressTime = config.dampeningUnsuppressTime;
    this._device = config.device;
    this._echo = config.echo;
    this._intervalMicrosecondsMinRx = config.intervalMicrosecondsMinRx;
    this._intervalMicrosecondsMinTx = config.intervalMicrosecondsMinTx;
    this._intervalMillisecondsBoth = config.intervalMillisecondsBoth;
    this._intervalMillisecondsMinRx = config.intervalMillisecondsMinRx;
    this._intervalMillisecondsMinTx = config.intervalMillisecondsMinTx;
    this._intervalMillisecondsMultiplier = config.intervalMillisecondsMultiplier;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_md5_keychain - computed: false, optional: true, required: false
  private _authenticationMd5Keychain?: string; 
  public get authenticationMd5Keychain() {
    return this.getStringAttribute('authentication_md5_keychain');
  }
  public set authenticationMd5Keychain(value: string) {
    this._authenticationMd5Keychain = value;
  }
  public resetAuthenticationMd5Keychain() {
    this._authenticationMd5Keychain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMd5KeychainInput() {
    return this._authenticationMd5Keychain;
  }

  // authentication_meticulous_md5_keychain - computed: false, optional: true, required: false
  private _authenticationMeticulousMd5Keychain?: string; 
  public get authenticationMeticulousMd5Keychain() {
    return this.getStringAttribute('authentication_meticulous_md5_keychain');
  }
  public set authenticationMeticulousMd5Keychain(value: string) {
    this._authenticationMeticulousMd5Keychain = value;
  }
  public resetAuthenticationMeticulousMd5Keychain() {
    this._authenticationMeticulousMd5Keychain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMeticulousMd5KeychainInput() {
    return this._authenticationMeticulousMd5Keychain;
  }

  // authentication_meticulous_sha_1_keychain - computed: false, optional: true, required: false
  private _authenticationMeticulousSha1Keychain?: string; 
  public get authenticationMeticulousSha1Keychain() {
    return this.getStringAttribute('authentication_meticulous_sha_1_keychain');
  }
  public set authenticationMeticulousSha1Keychain(value: string) {
    this._authenticationMeticulousSha1Keychain = value;
  }
  public resetAuthenticationMeticulousSha1Keychain() {
    this._authenticationMeticulousSha1Keychain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMeticulousSha1KeychainInput() {
    return this._authenticationMeticulousSha1Keychain;
  }

  // authentication_sha_1_keychain - computed: false, optional: true, required: false
  private _authenticationSha1Keychain?: string; 
  public get authenticationSha1Keychain() {
    return this.getStringAttribute('authentication_sha_1_keychain');
  }
  public set authenticationSha1Keychain(value: string) {
    this._authenticationSha1Keychain = value;
  }
  public resetAuthenticationSha1Keychain() {
    this._authenticationSha1Keychain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSha1KeychainInput() {
    return this._authenticationSha1Keychain;
  }

  // dampening_half_time - computed: false, optional: true, required: false
  private _dampeningHalfTime?: number; 
  public get dampeningHalfTime() {
    return this.getNumberAttribute('dampening_half_time');
  }
  public set dampeningHalfTime(value: number) {
    this._dampeningHalfTime = value;
  }
  public resetDampeningHalfTime() {
    this._dampeningHalfTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningHalfTimeInput() {
    return this._dampeningHalfTime;
  }

  // dampening_max_suppressing_time - computed: false, optional: true, required: false
  private _dampeningMaxSuppressingTime?: number; 
  public get dampeningMaxSuppressingTime() {
    return this.getNumberAttribute('dampening_max_suppressing_time');
  }
  public set dampeningMaxSuppressingTime(value: number) {
    this._dampeningMaxSuppressingTime = value;
  }
  public resetDampeningMaxSuppressingTime() {
    this._dampeningMaxSuppressingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningMaxSuppressingTimeInput() {
    return this._dampeningMaxSuppressingTime;
  }

  // dampening_suppress_time - computed: false, optional: true, required: false
  private _dampeningSuppressTime?: number; 
  public get dampeningSuppressTime() {
    return this.getNumberAttribute('dampening_suppress_time');
  }
  public set dampeningSuppressTime(value: number) {
    this._dampeningSuppressTime = value;
  }
  public resetDampeningSuppressTime() {
    this._dampeningSuppressTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningSuppressTimeInput() {
    return this._dampeningSuppressTime;
  }

  // dampening_unsuppress_time - computed: false, optional: true, required: false
  private _dampeningUnsuppressTime?: number; 
  public get dampeningUnsuppressTime() {
    return this.getNumberAttribute('dampening_unsuppress_time');
  }
  public set dampeningUnsuppressTime(value: number) {
    this._dampeningUnsuppressTime = value;
  }
  public resetDampeningUnsuppressTime() {
    this._dampeningUnsuppressTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dampeningUnsuppressTimeInput() {
    return this._dampeningUnsuppressTime;
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

  // echo - computed: false, optional: true, required: false
  private _echo?: boolean | cdktf.IResolvable; 
  public get echo() {
    return this.getBooleanAttribute('echo');
  }
  public set echo(value: boolean | cdktf.IResolvable) {
    this._echo = value;
  }
  public resetEcho() {
    this._echo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get echoInput() {
    return this._echo;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval_microseconds_min_rx - computed: false, optional: true, required: false
  private _intervalMicrosecondsMinRx?: number; 
  public get intervalMicrosecondsMinRx() {
    return this.getNumberAttribute('interval_microseconds_min_rx');
  }
  public set intervalMicrosecondsMinRx(value: number) {
    this._intervalMicrosecondsMinRx = value;
  }
  public resetIntervalMicrosecondsMinRx() {
    this._intervalMicrosecondsMinRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMicrosecondsMinRxInput() {
    return this._intervalMicrosecondsMinRx;
  }

  // interval_microseconds_min_tx - computed: false, optional: true, required: false
  private _intervalMicrosecondsMinTx?: number; 
  public get intervalMicrosecondsMinTx() {
    return this.getNumberAttribute('interval_microseconds_min_tx');
  }
  public set intervalMicrosecondsMinTx(value: number) {
    this._intervalMicrosecondsMinTx = value;
  }
  public resetIntervalMicrosecondsMinTx() {
    this._intervalMicrosecondsMinTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMicrosecondsMinTxInput() {
    return this._intervalMicrosecondsMinTx;
  }

  // interval_milliseconds_both - computed: false, optional: true, required: false
  private _intervalMillisecondsBoth?: number; 
  public get intervalMillisecondsBoth() {
    return this.getNumberAttribute('interval_milliseconds_both');
  }
  public set intervalMillisecondsBoth(value: number) {
    this._intervalMillisecondsBoth = value;
  }
  public resetIntervalMillisecondsBoth() {
    this._intervalMillisecondsBoth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMillisecondsBothInput() {
    return this._intervalMillisecondsBoth;
  }

  // interval_milliseconds_min_rx - computed: false, optional: true, required: false
  private _intervalMillisecondsMinRx?: number; 
  public get intervalMillisecondsMinRx() {
    return this.getNumberAttribute('interval_milliseconds_min_rx');
  }
  public set intervalMillisecondsMinRx(value: number) {
    this._intervalMillisecondsMinRx = value;
  }
  public resetIntervalMillisecondsMinRx() {
    this._intervalMillisecondsMinRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMillisecondsMinRxInput() {
    return this._intervalMillisecondsMinRx;
  }

  // interval_milliseconds_min_tx - computed: false, optional: true, required: false
  private _intervalMillisecondsMinTx?: number; 
  public get intervalMillisecondsMinTx() {
    return this.getNumberAttribute('interval_milliseconds_min_tx');
  }
  public set intervalMillisecondsMinTx(value: number) {
    this._intervalMillisecondsMinTx = value;
  }
  public resetIntervalMillisecondsMinTx() {
    this._intervalMillisecondsMinTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMillisecondsMinTxInput() {
    return this._intervalMillisecondsMinTx;
  }

  // interval_milliseconds_multiplier - computed: false, optional: true, required: false
  private _intervalMillisecondsMultiplier?: number; 
  public get intervalMillisecondsMultiplier() {
    return this.getNumberAttribute('interval_milliseconds_multiplier');
  }
  public set intervalMillisecondsMultiplier(value: number) {
    this._intervalMillisecondsMultiplier = value;
  }
  public resetIntervalMillisecondsMultiplier() {
    this._intervalMillisecondsMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMillisecondsMultiplierInput() {
    return this._intervalMillisecondsMultiplier;
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
      authentication_md5_keychain: cdktf.stringToTerraform(this._authenticationMd5Keychain),
      authentication_meticulous_md5_keychain: cdktf.stringToTerraform(this._authenticationMeticulousMd5Keychain),
      authentication_meticulous_sha_1_keychain: cdktf.stringToTerraform(this._authenticationMeticulousSha1Keychain),
      authentication_sha_1_keychain: cdktf.stringToTerraform(this._authenticationSha1Keychain),
      dampening_half_time: cdktf.numberToTerraform(this._dampeningHalfTime),
      dampening_max_suppressing_time: cdktf.numberToTerraform(this._dampeningMaxSuppressingTime),
      dampening_suppress_time: cdktf.numberToTerraform(this._dampeningSuppressTime),
      dampening_unsuppress_time: cdktf.numberToTerraform(this._dampeningUnsuppressTime),
      device: cdktf.stringToTerraform(this._device),
      echo: cdktf.booleanToTerraform(this._echo),
      interval_microseconds_min_rx: cdktf.numberToTerraform(this._intervalMicrosecondsMinRx),
      interval_microseconds_min_tx: cdktf.numberToTerraform(this._intervalMicrosecondsMinTx),
      interval_milliseconds_both: cdktf.numberToTerraform(this._intervalMillisecondsBoth),
      interval_milliseconds_min_rx: cdktf.numberToTerraform(this._intervalMillisecondsMinRx),
      interval_milliseconds_min_tx: cdktf.numberToTerraform(this._intervalMillisecondsMinTx),
      interval_milliseconds_multiplier: cdktf.numberToTerraform(this._intervalMillisecondsMultiplier),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_md5_keychain: {
        value: cdktf.stringToHclTerraform(this._authenticationMd5Keychain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_meticulous_md5_keychain: {
        value: cdktf.stringToHclTerraform(this._authenticationMeticulousMd5Keychain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_meticulous_sha_1_keychain: {
        value: cdktf.stringToHclTerraform(this._authenticationMeticulousSha1Keychain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_sha_1_keychain: {
        value: cdktf.stringToHclTerraform(this._authenticationSha1Keychain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dampening_half_time: {
        value: cdktf.numberToHclTerraform(this._dampeningHalfTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_max_suppressing_time: {
        value: cdktf.numberToHclTerraform(this._dampeningMaxSuppressingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_suppress_time: {
        value: cdktf.numberToHclTerraform(this._dampeningSuppressTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dampening_unsuppress_time: {
        value: cdktf.numberToHclTerraform(this._dampeningUnsuppressTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      echo: {
        value: cdktf.booleanToHclTerraform(this._echo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interval_microseconds_min_rx: {
        value: cdktf.numberToHclTerraform(this._intervalMicrosecondsMinRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval_microseconds_min_tx: {
        value: cdktf.numberToHclTerraform(this._intervalMicrosecondsMinTx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval_milliseconds_both: {
        value: cdktf.numberToHclTerraform(this._intervalMillisecondsBoth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval_milliseconds_min_rx: {
        value: cdktf.numberToHclTerraform(this._intervalMillisecondsMinRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval_milliseconds_min_tx: {
        value: cdktf.numberToHclTerraform(this._intervalMillisecondsMinTx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval_milliseconds_multiplier: {
        value: cdktf.numberToHclTerraform(this._intervalMillisecondsMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
