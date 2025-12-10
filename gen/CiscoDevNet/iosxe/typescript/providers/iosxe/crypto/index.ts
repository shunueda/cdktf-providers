// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/crypto
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CryptoConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/crypto#device Crypto#device}
  */
  readonly device?: string;
  /**
  * Allow weak crypto to be configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/crypto#engine_compliance_shield_disable Crypto#engine_compliance_shield_disable}
  */
  readonly engineComplianceShieldDisable?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/crypto iosxe_crypto}
*/
export class Crypto extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Crypto resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Crypto to import
  * @param importFromId The id of the existing Crypto that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/crypto#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Crypto to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.12.0/docs/resources/crypto iosxe_crypto} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CryptoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CryptoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.12.0',
        providerVersionConstraint: '0.12.0'
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
    this._engineComplianceShieldDisable = config.engineComplianceShieldDisable;
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

  // engine_compliance_shield_disable - computed: false, optional: true, required: false
  private _engineComplianceShieldDisable?: boolean | cdktf.IResolvable; 
  public get engineComplianceShieldDisable() {
    return this.getBooleanAttribute('engine_compliance_shield_disable');
  }
  public set engineComplianceShieldDisable(value: boolean | cdktf.IResolvable) {
    this._engineComplianceShieldDisable = value;
  }
  public resetEngineComplianceShieldDisable() {
    this._engineComplianceShieldDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineComplianceShieldDisableInput() {
    return this._engineComplianceShieldDisable;
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
      engine_compliance_shield_disable: cdktf.booleanToTerraform(this._engineComplianceShieldDisable),
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
      engine_compliance_shield_disable: {
        value: cdktf.booleanToHclTerraform(this._engineComplianceShieldDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
