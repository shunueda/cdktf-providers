// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/misc_bfdtemplate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MiscBfdtemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The authentication key for BFD protocol message-digest authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/misc_bfdtemplate#authentication_key MiscBfdtemplate#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * The authentication key identifier for BFD protocol authentication. Valid values are between 1 and 255.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/misc_bfdtemplate#authentication_key_id MiscBfdtemplate#authentication_key_id}
  */
  readonly authenticationKeyId?: number;
  /**
  * The authentication type for BFD protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/misc_bfdtemplate#authentication_type MiscBfdtemplate#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * The detection time multiplier value for BFD protocol. The negotiated transmit interval, multiplied by this value, provides the detection time for the receiving system in asynchronous BFD mode. Valid values are between 3 and 50.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/misc_bfdtemplate#detection_multiplier MiscBfdtemplate#detection_multiplier}
  */
  readonly detectionMultiplier?: number;
  /**
  * The minimum receive time (in seconds) for BFD protocol. Valid values are between 50 and 9999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/misc_bfdtemplate#min_rx_interval MiscBfdtemplate#min_rx_interval}
  */
  readonly minRxInterval?: number;
  /**
  * The minimum transmission time (in seconds) for BFD protocol. Valid values are between 50 and 9999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/misc_bfdtemplate#min_tx_interval MiscBfdtemplate#min_tx_interval}
  */
  readonly minTxInterval?: number;
  /**
  * The name of the BFD template object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/misc_bfdtemplate#name MiscBfdtemplate#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/misc_bfdtemplate nios_misc_bfdtemplate}
*/
export class MiscBfdtemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_misc_bfdtemplate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MiscBfdtemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MiscBfdtemplate to import
  * @param importFromId The id of the existing MiscBfdtemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/misc_bfdtemplate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MiscBfdtemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_misc_bfdtemplate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/resources/misc_bfdtemplate nios_misc_bfdtemplate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MiscBfdtemplateConfig
  */
  public constructor(scope: Construct, id: string, config: MiscBfdtemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'nios_misc_bfdtemplate',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationKey = config.authenticationKey;
    this._authenticationKeyId = config.authenticationKeyId;
    this._authenticationType = config.authenticationType;
    this._detectionMultiplier = config.detectionMultiplier;
    this._minRxInterval = config.minRxInterval;
    this._minTxInterval = config.minTxInterval;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_key - computed: true, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // authentication_key_id - computed: true, optional: true, required: false
  private _authenticationKeyId?: number; 
  public get authenticationKeyId() {
    return this.getNumberAttribute('authentication_key_id');
  }
  public set authenticationKeyId(value: number) {
    this._authenticationKeyId = value;
  }
  public resetAuthenticationKeyId() {
    this._authenticationKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyIdInput() {
    return this._authenticationKeyId;
  }

  // authentication_type - computed: true, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // detection_multiplier - computed: true, optional: true, required: false
  private _detectionMultiplier?: number; 
  public get detectionMultiplier() {
    return this.getNumberAttribute('detection_multiplier');
  }
  public set detectionMultiplier(value: number) {
    this._detectionMultiplier = value;
  }
  public resetDetectionMultiplier() {
    this._detectionMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionMultiplierInput() {
    return this._detectionMultiplier;
  }

  // min_rx_interval - computed: true, optional: true, required: false
  private _minRxInterval?: number; 
  public get minRxInterval() {
    return this.getNumberAttribute('min_rx_interval');
  }
  public set minRxInterval(value: number) {
    this._minRxInterval = value;
  }
  public resetMinRxInterval() {
    this._minRxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRxIntervalInput() {
    return this._minRxInterval;
  }

  // min_tx_interval - computed: true, optional: true, required: false
  private _minTxInterval?: number; 
  public get minTxInterval() {
    return this.getNumberAttribute('min_tx_interval');
  }
  public set minTxInterval(value: number) {
    this._minTxInterval = value;
  }
  public resetMinTxInterval() {
    this._minTxInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTxIntervalInput() {
    return this._minTxInterval;
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

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_key: cdktf.stringToTerraform(this._authenticationKey),
      authentication_key_id: cdktf.numberToTerraform(this._authenticationKeyId),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      detection_multiplier: cdktf.numberToTerraform(this._detectionMultiplier),
      min_rx_interval: cdktf.numberToTerraform(this._minRxInterval),
      min_tx_interval: cdktf.numberToTerraform(this._minTxInterval),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_key: {
        value: cdktf.stringToHclTerraform(this._authenticationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_key_id: {
        value: cdktf.numberToHclTerraform(this._authenticationKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detection_multiplier: {
        value: cdktf.numberToHclTerraform(this._detectionMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_rx_interval: {
        value: cdktf.numberToHclTerraform(this._minRxInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_tx_interval: {
        value: cdktf.numberToHclTerraform(this._minTxInterval),
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
