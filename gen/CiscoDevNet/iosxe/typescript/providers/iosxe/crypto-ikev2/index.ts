// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CryptoIkev2Config extends cdktf.TerraformMetaArguments {
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2#delete_mode CryptoIkev2#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2#device CryptoIkev2#device}
  */
  readonly device?: string;
  /**
  * Enable IKE liveness check for peers
  *   - Range: `10`-`3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2#dpd CryptoIkev2#dpd}
  */
  readonly dpd?: number;
  /**
  * 
  *   - Choices: `on-demand`, `periodic`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2#dpd_query CryptoIkev2#dpd_query}
  */
  readonly dpdQuery?: string;
  /**
  * 
  *   - Range: `2`-`60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2#dpd_retry_interval CryptoIkev2#dpd_retry_interval}
  */
  readonly dpdRetryInterval?: number;
  /**
  * Enable certificate lookup based on HTTP-based URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2#http_url_cert CryptoIkev2#http_url_cert}
  */
  readonly httpUrlCert?: boolean | cdktf.IResolvable;
  /**
  * Set NAT keepalive interval
  *   - Range: `5`-`3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2#nat_keepalive CryptoIkev2#nat_keepalive}
  */
  readonly natKeepalive?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2 iosxe_crypto_ikev2}
*/
export class CryptoIkev2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_crypto_ikev2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CryptoIkev2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CryptoIkev2 to import
  * @param importFromId The id of the existing CryptoIkev2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CryptoIkev2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_crypto_ikev2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/crypto_ikev2 iosxe_crypto_ikev2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CryptoIkev2Config = {}
  */
  public constructor(scope: Construct, id: string, config: CryptoIkev2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_crypto_ikev2',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._dpd = config.dpd;
    this._dpdQuery = config.dpdQuery;
    this._dpdRetryInterval = config.dpdRetryInterval;
    this._httpUrlCert = config.httpUrlCert;
    this._natKeepalive = config.natKeepalive;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // dpd - computed: false, optional: true, required: false
  private _dpd?: number; 
  public get dpd() {
    return this.getNumberAttribute('dpd');
  }
  public set dpd(value: number) {
    this._dpd = value;
  }
  public resetDpd() {
    this._dpd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdInput() {
    return this._dpd;
  }

  // dpd_query - computed: false, optional: true, required: false
  private _dpdQuery?: string; 
  public get dpdQuery() {
    return this.getStringAttribute('dpd_query');
  }
  public set dpdQuery(value: string) {
    this._dpdQuery = value;
  }
  public resetDpdQuery() {
    this._dpdQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdQueryInput() {
    return this._dpdQuery;
  }

  // dpd_retry_interval - computed: false, optional: true, required: false
  private _dpdRetryInterval?: number; 
  public get dpdRetryInterval() {
    return this.getNumberAttribute('dpd_retry_interval');
  }
  public set dpdRetryInterval(value: number) {
    this._dpdRetryInterval = value;
  }
  public resetDpdRetryInterval() {
    this._dpdRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpdRetryIntervalInput() {
    return this._dpdRetryInterval;
  }

  // http_url_cert - computed: false, optional: true, required: false
  private _httpUrlCert?: boolean | cdktf.IResolvable; 
  public get httpUrlCert() {
    return this.getBooleanAttribute('http_url_cert');
  }
  public set httpUrlCert(value: boolean | cdktf.IResolvable) {
    this._httpUrlCert = value;
  }
  public resetHttpUrlCert() {
    this._httpUrlCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUrlCertInput() {
    return this._httpUrlCert;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // nat_keepalive - computed: false, optional: true, required: false
  private _natKeepalive?: number; 
  public get natKeepalive() {
    return this.getNumberAttribute('nat_keepalive');
  }
  public set natKeepalive(value: number) {
    this._natKeepalive = value;
  }
  public resetNatKeepalive() {
    this._natKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natKeepaliveInput() {
    return this._natKeepalive;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      dpd: cdktf.numberToTerraform(this._dpd),
      dpd_query: cdktf.stringToTerraform(this._dpdQuery),
      dpd_retry_interval: cdktf.numberToTerraform(this._dpdRetryInterval),
      http_url_cert: cdktf.booleanToTerraform(this._httpUrlCert),
      nat_keepalive: cdktf.numberToTerraform(this._natKeepalive),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd: {
        value: cdktf.numberToHclTerraform(this._dpd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dpd_query: {
        value: cdktf.stringToHclTerraform(this._dpdQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dpd_retry_interval: {
        value: cdktf.numberToHclTerraform(this._dpdRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_url_cert: {
        value: cdktf.booleanToHclTerraform(this._httpUrlCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nat_keepalive: {
        value: cdktf.numberToHclTerraform(this._natKeepalive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
