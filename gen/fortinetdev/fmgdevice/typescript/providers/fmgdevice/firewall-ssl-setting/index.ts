// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallSslSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#abbreviate_handshake FirewallSslSetting#abbreviate_handshake}
  */
  readonly abbreviateHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#cert_cache_capacity FirewallSslSetting#cert_cache_capacity}
  */
  readonly certCacheCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#cert_cache_timeout FirewallSslSetting#cert_cache_timeout}
  */
  readonly certCacheTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#device_name FirewallSslSetting#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#id FirewallSslSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#kxp_queue_threshold FirewallSslSetting#kxp_queue_threshold}
  */
  readonly kxpQueueThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#no_matching_cipher_action FirewallSslSetting#no_matching_cipher_action}
  */
  readonly noMatchingCipherAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#proxy_connect_timeout FirewallSslSetting#proxy_connect_timeout}
  */
  readonly proxyConnectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#session_cache_capacity FirewallSslSetting#session_cache_capacity}
  */
  readonly sessionCacheCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#session_cache_timeout FirewallSslSetting#session_cache_timeout}
  */
  readonly sessionCacheTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#ssl_dh_bits FirewallSslSetting#ssl_dh_bits}
  */
  readonly sslDhBits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#ssl_queue_threshold FirewallSslSetting#ssl_queue_threshold}
  */
  readonly sslQueueThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#ssl_send_empty_frags FirewallSslSetting#ssl_send_empty_frags}
  */
  readonly sslSendEmptyFrags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting fmgdevice_firewall_ssl_setting}
*/
export class FirewallSslSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_firewall_ssl_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallSslSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallSslSetting to import
  * @param importFromId The id of the existing FirewallSslSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallSslSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_firewall_ssl_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ssl_setting fmgdevice_firewall_ssl_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallSslSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallSslSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_firewall_ssl_setting',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abbreviateHandshake = config.abbreviateHandshake;
    this._certCacheCapacity = config.certCacheCapacity;
    this._certCacheTimeout = config.certCacheTimeout;
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._kxpQueueThreshold = config.kxpQueueThreshold;
    this._noMatchingCipherAction = config.noMatchingCipherAction;
    this._proxyConnectTimeout = config.proxyConnectTimeout;
    this._sessionCacheCapacity = config.sessionCacheCapacity;
    this._sessionCacheTimeout = config.sessionCacheTimeout;
    this._sslDhBits = config.sslDhBits;
    this._sslQueueThreshold = config.sslQueueThreshold;
    this._sslSendEmptyFrags = config.sslSendEmptyFrags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abbreviate_handshake - computed: true, optional: true, required: false
  private _abbreviateHandshake?: string; 
  public get abbreviateHandshake() {
    return this.getStringAttribute('abbreviate_handshake');
  }
  public set abbreviateHandshake(value: string) {
    this._abbreviateHandshake = value;
  }
  public resetAbbreviateHandshake() {
    this._abbreviateHandshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abbreviateHandshakeInput() {
    return this._abbreviateHandshake;
  }

  // cert_cache_capacity - computed: true, optional: true, required: false
  private _certCacheCapacity?: number; 
  public get certCacheCapacity() {
    return this.getNumberAttribute('cert_cache_capacity');
  }
  public set certCacheCapacity(value: number) {
    this._certCacheCapacity = value;
  }
  public resetCertCacheCapacity() {
    this._certCacheCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCacheCapacityInput() {
    return this._certCacheCapacity;
  }

  // cert_cache_timeout - computed: true, optional: true, required: false
  private _certCacheTimeout?: number; 
  public get certCacheTimeout() {
    return this.getNumberAttribute('cert_cache_timeout');
  }
  public set certCacheTimeout(value: number) {
    this._certCacheTimeout = value;
  }
  public resetCertCacheTimeout() {
    this._certCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certCacheTimeoutInput() {
    return this._certCacheTimeout;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // id - computed: true, optional: true, required: false
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

  // kxp_queue_threshold - computed: false, optional: true, required: false
  private _kxpQueueThreshold?: number; 
  public get kxpQueueThreshold() {
    return this.getNumberAttribute('kxp_queue_threshold');
  }
  public set kxpQueueThreshold(value: number) {
    this._kxpQueueThreshold = value;
  }
  public resetKxpQueueThreshold() {
    this._kxpQueueThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kxpQueueThresholdInput() {
    return this._kxpQueueThreshold;
  }

  // no_matching_cipher_action - computed: true, optional: true, required: false
  private _noMatchingCipherAction?: string; 
  public get noMatchingCipherAction() {
    return this.getStringAttribute('no_matching_cipher_action');
  }
  public set noMatchingCipherAction(value: string) {
    this._noMatchingCipherAction = value;
  }
  public resetNoMatchingCipherAction() {
    this._noMatchingCipherAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMatchingCipherActionInput() {
    return this._noMatchingCipherAction;
  }

  // proxy_connect_timeout - computed: true, optional: true, required: false
  private _proxyConnectTimeout?: number; 
  public get proxyConnectTimeout() {
    return this.getNumberAttribute('proxy_connect_timeout');
  }
  public set proxyConnectTimeout(value: number) {
    this._proxyConnectTimeout = value;
  }
  public resetProxyConnectTimeout() {
    this._proxyConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConnectTimeoutInput() {
    return this._proxyConnectTimeout;
  }

  // session_cache_capacity - computed: true, optional: true, required: false
  private _sessionCacheCapacity?: number; 
  public get sessionCacheCapacity() {
    return this.getNumberAttribute('session_cache_capacity');
  }
  public set sessionCacheCapacity(value: number) {
    this._sessionCacheCapacity = value;
  }
  public resetSessionCacheCapacity() {
    this._sessionCacheCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCacheCapacityInput() {
    return this._sessionCacheCapacity;
  }

  // session_cache_timeout - computed: true, optional: true, required: false
  private _sessionCacheTimeout?: number; 
  public get sessionCacheTimeout() {
    return this.getNumberAttribute('session_cache_timeout');
  }
  public set sessionCacheTimeout(value: number) {
    this._sessionCacheTimeout = value;
  }
  public resetSessionCacheTimeout() {
    this._sessionCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCacheTimeoutInput() {
    return this._sessionCacheTimeout;
  }

  // ssl_dh_bits - computed: true, optional: true, required: false
  private _sslDhBits?: string; 
  public get sslDhBits() {
    return this.getStringAttribute('ssl_dh_bits');
  }
  public set sslDhBits(value: string) {
    this._sslDhBits = value;
  }
  public resetSslDhBits() {
    this._sslDhBits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDhBitsInput() {
    return this._sslDhBits;
  }

  // ssl_queue_threshold - computed: false, optional: true, required: false
  private _sslQueueThreshold?: number; 
  public get sslQueueThreshold() {
    return this.getNumberAttribute('ssl_queue_threshold');
  }
  public set sslQueueThreshold(value: number) {
    this._sslQueueThreshold = value;
  }
  public resetSslQueueThreshold() {
    this._sslQueueThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslQueueThresholdInput() {
    return this._sslQueueThreshold;
  }

  // ssl_send_empty_frags - computed: true, optional: true, required: false
  private _sslSendEmptyFrags?: string; 
  public get sslSendEmptyFrags() {
    return this.getStringAttribute('ssl_send_empty_frags');
  }
  public set sslSendEmptyFrags(value: string) {
    this._sslSendEmptyFrags = value;
  }
  public resetSslSendEmptyFrags() {
    this._sslSendEmptyFrags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSendEmptyFragsInput() {
    return this._sslSendEmptyFrags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abbreviate_handshake: cdktf.stringToTerraform(this._abbreviateHandshake),
      cert_cache_capacity: cdktf.numberToTerraform(this._certCacheCapacity),
      cert_cache_timeout: cdktf.numberToTerraform(this._certCacheTimeout),
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      kxp_queue_threshold: cdktf.numberToTerraform(this._kxpQueueThreshold),
      no_matching_cipher_action: cdktf.stringToTerraform(this._noMatchingCipherAction),
      proxy_connect_timeout: cdktf.numberToTerraform(this._proxyConnectTimeout),
      session_cache_capacity: cdktf.numberToTerraform(this._sessionCacheCapacity),
      session_cache_timeout: cdktf.numberToTerraform(this._sessionCacheTimeout),
      ssl_dh_bits: cdktf.stringToTerraform(this._sslDhBits),
      ssl_queue_threshold: cdktf.numberToTerraform(this._sslQueueThreshold),
      ssl_send_empty_frags: cdktf.stringToTerraform(this._sslSendEmptyFrags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abbreviate_handshake: {
        value: cdktf.stringToHclTerraform(this._abbreviateHandshake),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_cache_capacity: {
        value: cdktf.numberToHclTerraform(this._certCacheCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cert_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._certCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kxp_queue_threshold: {
        value: cdktf.numberToHclTerraform(this._kxpQueueThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_matching_cipher_action: {
        value: cdktf.stringToHclTerraform(this._noMatchingCipherAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_connect_timeout: {
        value: cdktf.numberToHclTerraform(this._proxyConnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_cache_capacity: {
        value: cdktf.numberToHclTerraform(this._sessionCacheCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._sessionCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_dh_bits: {
        value: cdktf.stringToHclTerraform(this._sslDhBits),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_queue_threshold: {
        value: cdktf.numberToHclTerraform(this._sslQueueThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_send_empty_frags: {
        value: cdktf.stringToHclTerraform(this._sslSendEmptyFrags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
