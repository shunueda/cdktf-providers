// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/radius
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeRadiusConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/radius#device DataIosxeRadius#device}
  */
  readonly device?: string;
  /**
  * Name for the radius server configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/radius#name DataIosxeRadius#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/radius iosxe_radius}
*/
export class DataIosxeRadius extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_radius";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeRadius resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeRadius to import
  * @param importFromId The id of the existing DataIosxeRadius that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/radius#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeRadius to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_radius", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/radius iosxe_radius} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeRadiusConfig
  */
  public constructor(scope: Construct, id: string, config: DataIosxeRadiusConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_radius',
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

  // accounting_port - computed: true, optional: false, required: false
  public get accountingPort() {
    return this.getNumberAttribute('accounting_port');
  }

  // authentication_port - computed: true, optional: false, required: false
  public get authenticationPort() {
    return this.getNumberAttribute('authentication_port');
  }

  // automate_tester_idle_time - computed: true, optional: false, required: false
  public get automateTesterIdleTime() {
    return this.getNumberAttribute('automate_tester_idle_time');
  }

  // automate_tester_ignore_acct_port - computed: true, optional: false, required: false
  public get automateTesterIgnoreAcctPort() {
    return this.getBooleanAttribute('automate_tester_ignore_acct_port');
  }

  // automate_tester_ignore_auth_port - computed: true, optional: false, required: false
  public get automateTesterIgnoreAuthPort() {
    return this.getBooleanAttribute('automate_tester_ignore_auth_port');
  }

  // automate_tester_probe_on_config - computed: true, optional: false, required: false
  public get automateTesterProbeOnConfig() {
    return this.getBooleanAttribute('automate_tester_probe_on_config');
  }

  // automate_tester_username - computed: true, optional: false, required: false
  public get automateTesterUsername() {
    return this.getStringAttribute('automate_tester_username');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // key_encryption - computed: true, optional: false, required: false
  public get keyEncryption() {
    return this.getStringAttribute('key_encryption');
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

  // pac_key - computed: true, optional: false, required: false
  public get pacKey() {
    return this.getStringAttribute('pac_key');
  }

  // pac_key_encryption - computed: true, optional: false, required: false
  public get pacKeyEncryption() {
    return this.getStringAttribute('pac_key_encryption');
  }

  // retransmit - computed: true, optional: false, required: false
  public get retransmit() {
    return this.getNumberAttribute('retransmit');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
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
