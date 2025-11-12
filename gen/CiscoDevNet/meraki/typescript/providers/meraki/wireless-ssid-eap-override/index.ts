// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessSsidEapOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * Maximum number of EAPOL key retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override#eapol_key_retries WirelessSsidEapOverride#eapol_key_retries}
  */
  readonly eapolKeyRetries?: number;
  /**
  * EAPOL Key timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override#eapol_key_timeout_in_ms WirelessSsidEapOverride#eapol_key_timeout_in_ms}
  */
  readonly eapolKeyTimeoutInMs?: number;
  /**
  * Maximum number of EAP retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override#identity_retries WirelessSsidEapOverride#identity_retries}
  */
  readonly identityRetries?: number;
  /**
  * EAP timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override#identity_timeout WirelessSsidEapOverride#identity_timeout}
  */
  readonly identityTimeout?: number;
  /**
  * Maximum number of general EAP retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override#max_retries WirelessSsidEapOverride#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override#network_id WirelessSsidEapOverride#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override#number WirelessSsidEapOverride#number}
  */
  readonly number: string;
  /**
  * General EAP timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override#timeout WirelessSsidEapOverride#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override meraki_wireless_ssid_eap_override}
*/
export class WirelessSsidEapOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid_eap_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessSsidEapOverride resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessSsidEapOverride to import
  * @param importFromId The id of the existing WirelessSsidEapOverride that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessSsidEapOverride to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid_eap_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_eap_override meraki_wireless_ssid_eap_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessSsidEapOverrideConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessSsidEapOverrideConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid_eap_override',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._eapolKeyRetries = config.eapolKeyRetries;
    this._eapolKeyTimeoutInMs = config.eapolKeyTimeoutInMs;
    this._identityRetries = config.identityRetries;
    this._identityTimeout = config.identityTimeout;
    this._maxRetries = config.maxRetries;
    this._networkId = config.networkId;
    this._number = config.number;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eapol_key_retries - computed: false, optional: true, required: false
  private _eapolKeyRetries?: number; 
  public get eapolKeyRetries() {
    return this.getNumberAttribute('eapol_key_retries');
  }
  public set eapolKeyRetries(value: number) {
    this._eapolKeyRetries = value;
  }
  public resetEapolKeyRetries() {
    this._eapolKeyRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolKeyRetriesInput() {
    return this._eapolKeyRetries;
  }

  // eapol_key_timeout_in_ms - computed: false, optional: true, required: false
  private _eapolKeyTimeoutInMs?: number; 
  public get eapolKeyTimeoutInMs() {
    return this.getNumberAttribute('eapol_key_timeout_in_ms');
  }
  public set eapolKeyTimeoutInMs(value: number) {
    this._eapolKeyTimeoutInMs = value;
  }
  public resetEapolKeyTimeoutInMs() {
    this._eapolKeyTimeoutInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eapolKeyTimeoutInMsInput() {
    return this._eapolKeyTimeoutInMs;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_retries - computed: false, optional: true, required: false
  private _identityRetries?: number; 
  public get identityRetries() {
    return this.getNumberAttribute('identity_retries');
  }
  public set identityRetries(value: number) {
    this._identityRetries = value;
  }
  public resetIdentityRetries() {
    this._identityRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityRetriesInput() {
    return this._identityRetries;
  }

  // identity_timeout - computed: false, optional: true, required: false
  private _identityTimeout?: number; 
  public get identityTimeout() {
    return this.getNumberAttribute('identity_timeout');
  }
  public set identityTimeout(value: number) {
    this._identityTimeout = value;
  }
  public resetIdentityTimeout() {
    this._identityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityTimeoutInput() {
    return this._identityTimeout;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      eapol_key_retries: cdktf.numberToTerraform(this._eapolKeyRetries),
      eapol_key_timeout_in_ms: cdktf.numberToTerraform(this._eapolKeyTimeoutInMs),
      identity_retries: cdktf.numberToTerraform(this._identityRetries),
      identity_timeout: cdktf.numberToTerraform(this._identityTimeout),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      eapol_key_retries: {
        value: cdktf.numberToHclTerraform(this._eapolKeyRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eapol_key_timeout_in_ms: {
        value: cdktf.numberToHclTerraform(this._eapolKeyTimeoutInMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      identity_retries: {
        value: cdktf.numberToHclTerraform(this._identityRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      identity_timeout: {
        value: cdktf.numberToHclTerraform(this._identityTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
