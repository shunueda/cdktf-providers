// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bfd_template_multi_hop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeBfdTemplateMultiHopConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bfd_template_multi_hop#device DataIosxeBfdTemplateMultiHop#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bfd_template_multi_hop#name DataIosxeBfdTemplateMultiHop#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bfd_template_multi_hop iosxe_bfd_template_multi_hop}
*/
export class DataIosxeBfdTemplateMultiHop extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_bfd_template_multi_hop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeBfdTemplateMultiHop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeBfdTemplateMultiHop to import
  * @param importFromId The id of the existing DataIosxeBfdTemplateMultiHop that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bfd_template_multi_hop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeBfdTemplateMultiHop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_bfd_template_multi_hop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/bfd_template_multi_hop iosxe_bfd_template_multi_hop} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeBfdTemplateMultiHopConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeBfdTemplateMultiHopConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_bfd_template_multi_hop',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_md5_keychain - computed: true, optional: false, required: false
  public get authenticationMd5Keychain() {
    return this.getStringAttribute('authentication_md5_keychain');
  }

  // authentication_meticulous_md5_keychain - computed: true, optional: false, required: false
  public get authenticationMeticulousMd5Keychain() {
    return this.getStringAttribute('authentication_meticulous_md5_keychain');
  }

  // authentication_meticulous_sha_1keychain - computed: true, optional: false, required: false
  public get authenticationMeticulousSha1Keychain() {
    return this.getStringAttribute('authentication_meticulous_sha_1keychain');
  }

  // authentication_sha_1_keychain - computed: true, optional: false, required: false
  public get authenticationSha1Keychain() {
    return this.getStringAttribute('authentication_sha_1_keychain');
  }

  // dampening_down_monitoring - computed: true, optional: false, required: false
  public get dampeningDownMonitoring() {
    return this.getBooleanAttribute('dampening_down_monitoring');
  }

  // dampening_half_time - computed: true, optional: false, required: false
  public get dampeningHalfTime() {
    return this.getNumberAttribute('dampening_half_time');
  }

  // dampening_max_suppressing_time - computed: true, optional: false, required: false
  public get dampeningMaxSuppressingTime() {
    return this.getNumberAttribute('dampening_max_suppressing_time');
  }

  // dampening_suppress_time - computed: true, optional: false, required: false
  public get dampeningSuppressTime() {
    return this.getNumberAttribute('dampening_suppress_time');
  }

  // dampening_threshold - computed: true, optional: false, required: false
  public get dampeningThreshold() {
    return this.getNumberAttribute('dampening_threshold');
  }

  // dampening_unsuppress_time - computed: true, optional: false, required: false
  public get dampeningUnsuppressTime() {
    return this.getNumberAttribute('dampening_unsuppress_time');
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

  // echo - computed: true, optional: false, required: false
  public get echo() {
    return this.getBooleanAttribute('echo');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interval_microseconds - computed: true, optional: false, required: false
  public get intervalMicroseconds() {
    return this.getBooleanAttribute('interval_microseconds');
  }

  // interval_microseconds_both - computed: true, optional: false, required: false
  public get intervalMicrosecondsBoth() {
    return this.getNumberAttribute('interval_microseconds_both');
  }

  // interval_microseconds_min_rx - computed: true, optional: false, required: false
  public get intervalMicrosecondsMinRx() {
    return this.getNumberAttribute('interval_microseconds_min_rx');
  }

  // interval_microseconds_min_tx - computed: true, optional: false, required: false
  public get intervalMicrosecondsMinTx() {
    return this.getNumberAttribute('interval_microseconds_min_tx');
  }

  // interval_microseconds_multiplier - computed: true, optional: false, required: false
  public get intervalMicrosecondsMultiplier() {
    return this.getNumberAttribute('interval_microseconds_multiplier');
  }

  // interval_milliseconds_both - computed: true, optional: false, required: false
  public get intervalMillisecondsBoth() {
    return this.getNumberAttribute('interval_milliseconds_both');
  }

  // interval_milliseconds_min_rx - computed: true, optional: false, required: false
  public get intervalMillisecondsMinRx() {
    return this.getNumberAttribute('interval_milliseconds_min_rx');
  }

  // interval_milliseconds_min_tx - computed: true, optional: false, required: false
  public get intervalMillisecondsMinTx() {
    return this.getNumberAttribute('interval_milliseconds_min_tx');
  }

  // interval_milliseconds_multiplier - computed: true, optional: false, required: false
  public get intervalMillisecondsMultiplier() {
    return this.getNumberAttribute('interval_milliseconds_multiplier');
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
