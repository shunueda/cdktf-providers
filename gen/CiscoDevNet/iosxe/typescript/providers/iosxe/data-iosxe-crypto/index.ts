// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/crypto
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeCryptoConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/crypto#device DataIosxeCrypto#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/crypto iosxe_crypto}
*/
export class DataIosxeCrypto extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeCrypto resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeCrypto to import
  * @param importFromId The id of the existing DataIosxeCrypto that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/crypto#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeCrypto to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/data-sources/crypto iosxe_crypto} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeCryptoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeCryptoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto',
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

  // engine_compliance_shield_disable - computed: true, optional: false, required: false
  public get engineComplianceShieldDisable() {
    return this.getBooleanAttribute('engine_compliance_shield_disable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
