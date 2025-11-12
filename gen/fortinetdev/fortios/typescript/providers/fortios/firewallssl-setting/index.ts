// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallsslSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#abbreviate_handshake FirewallsslSetting#abbreviate_handshake}
  */
  readonly abbreviateHandshake?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#cert_cache_capacity FirewallsslSetting#cert_cache_capacity}
  */
  readonly certCacheCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#cert_cache_timeout FirewallsslSetting#cert_cache_timeout}
  */
  readonly certCacheTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#cert_manager_cache_timeout FirewallsslSetting#cert_manager_cache_timeout}
  */
  readonly certManagerCacheTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#id FirewallsslSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#kxp_queue_threshold FirewallsslSetting#kxp_queue_threshold}
  */
  readonly kxpQueueThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#no_matching_cipher_action FirewallsslSetting#no_matching_cipher_action}
  */
  readonly noMatchingCipherAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#proxy_connect_timeout FirewallsslSetting#proxy_connect_timeout}
  */
  readonly proxyConnectTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#resigned_short_lived_certificate FirewallsslSetting#resigned_short_lived_certificate}
  */
  readonly resignedShortLivedCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#session_cache_capacity FirewallsslSetting#session_cache_capacity}
  */
  readonly sessionCacheCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#session_cache_timeout FirewallsslSetting#session_cache_timeout}
  */
  readonly sessionCacheTimeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#ssl_dh_bits FirewallsslSetting#ssl_dh_bits}
  */
  readonly sslDhBits: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#ssl_queue_threshold FirewallsslSetting#ssl_queue_threshold}
  */
  readonly sslQueueThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#ssl_send_empty_frags FirewallsslSetting#ssl_send_empty_frags}
  */
  readonly sslSendEmptyFrags: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#vdomparam FirewallsslSetting#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting fortios_firewallssl_setting}
*/
export class FirewallsslSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewallssl_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallsslSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallsslSetting to import
  * @param importFromId The id of the existing FirewallsslSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallsslSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewallssl_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewallssl_setting fortios_firewallssl_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallsslSettingConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallsslSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewallssl_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._certManagerCacheTimeout = config.certManagerCacheTimeout;
    this._id = config.id;
    this._kxpQueueThreshold = config.kxpQueueThreshold;
    this._noMatchingCipherAction = config.noMatchingCipherAction;
    this._proxyConnectTimeout = config.proxyConnectTimeout;
    this._resignedShortLivedCertificate = config.resignedShortLivedCertificate;
    this._sessionCacheCapacity = config.sessionCacheCapacity;
    this._sessionCacheTimeout = config.sessionCacheTimeout;
    this._sslDhBits = config.sslDhBits;
    this._sslQueueThreshold = config.sslQueueThreshold;
    this._sslSendEmptyFrags = config.sslSendEmptyFrags;
    this._vdomparam = config.vdomparam;
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

  // cert_cache_capacity - computed: false, optional: false, required: true
  private _certCacheCapacity?: number; 
  public get certCacheCapacity() {
    return this.getNumberAttribute('cert_cache_capacity');
  }
  public set certCacheCapacity(value: number) {
    this._certCacheCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certCacheCapacityInput() {
    return this._certCacheCapacity;
  }

  // cert_cache_timeout - computed: false, optional: false, required: true
  private _certCacheTimeout?: number; 
  public get certCacheTimeout() {
    return this.getNumberAttribute('cert_cache_timeout');
  }
  public set certCacheTimeout(value: number) {
    this._certCacheTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certCacheTimeoutInput() {
    return this._certCacheTimeout;
  }

  // cert_manager_cache_timeout - computed: true, optional: true, required: false
  private _certManagerCacheTimeout?: number; 
  public get certManagerCacheTimeout() {
    return this.getNumberAttribute('cert_manager_cache_timeout');
  }
  public set certManagerCacheTimeout(value: number) {
    this._certManagerCacheTimeout = value;
  }
  public resetCertManagerCacheTimeout() {
    this._certManagerCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certManagerCacheTimeoutInput() {
    return this._certManagerCacheTimeout;
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

  // kxp_queue_threshold - computed: true, optional: true, required: false
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

  // no_matching_cipher_action - computed: false, optional: false, required: true
  private _noMatchingCipherAction?: string; 
  public get noMatchingCipherAction() {
    return this.getStringAttribute('no_matching_cipher_action');
  }
  public set noMatchingCipherAction(value: string) {
    this._noMatchingCipherAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noMatchingCipherActionInput() {
    return this._noMatchingCipherAction;
  }

  // proxy_connect_timeout - computed: false, optional: false, required: true
  private _proxyConnectTimeout?: number; 
  public get proxyConnectTimeout() {
    return this.getNumberAttribute('proxy_connect_timeout');
  }
  public set proxyConnectTimeout(value: number) {
    this._proxyConnectTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConnectTimeoutInput() {
    return this._proxyConnectTimeout;
  }

  // resigned_short_lived_certificate - computed: true, optional: true, required: false
  private _resignedShortLivedCertificate?: string; 
  public get resignedShortLivedCertificate() {
    return this.getStringAttribute('resigned_short_lived_certificate');
  }
  public set resignedShortLivedCertificate(value: string) {
    this._resignedShortLivedCertificate = value;
  }
  public resetResignedShortLivedCertificate() {
    this._resignedShortLivedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resignedShortLivedCertificateInput() {
    return this._resignedShortLivedCertificate;
  }

  // session_cache_capacity - computed: false, optional: false, required: true
  private _sessionCacheCapacity?: number; 
  public get sessionCacheCapacity() {
    return this.getNumberAttribute('session_cache_capacity');
  }
  public set sessionCacheCapacity(value: number) {
    this._sessionCacheCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCacheCapacityInput() {
    return this._sessionCacheCapacity;
  }

  // session_cache_timeout - computed: false, optional: false, required: true
  private _sessionCacheTimeout?: number; 
  public get sessionCacheTimeout() {
    return this.getNumberAttribute('session_cache_timeout');
  }
  public set sessionCacheTimeout(value: number) {
    this._sessionCacheTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCacheTimeoutInput() {
    return this._sessionCacheTimeout;
  }

  // ssl_dh_bits - computed: false, optional: false, required: true
  private _sslDhBits?: string; 
  public get sslDhBits() {
    return this.getStringAttribute('ssl_dh_bits');
  }
  public set sslDhBits(value: string) {
    this._sslDhBits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDhBitsInput() {
    return this._sslDhBits;
  }

  // ssl_queue_threshold - computed: true, optional: true, required: false
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

  // ssl_send_empty_frags - computed: false, optional: false, required: true
  private _sslSendEmptyFrags?: string; 
  public get sslSendEmptyFrags() {
    return this.getStringAttribute('ssl_send_empty_frags');
  }
  public set sslSendEmptyFrags(value: string) {
    this._sslSendEmptyFrags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSendEmptyFragsInput() {
    return this._sslSendEmptyFrags;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abbreviate_handshake: cdktf.stringToTerraform(this._abbreviateHandshake),
      cert_cache_capacity: cdktf.numberToTerraform(this._certCacheCapacity),
      cert_cache_timeout: cdktf.numberToTerraform(this._certCacheTimeout),
      cert_manager_cache_timeout: cdktf.numberToTerraform(this._certManagerCacheTimeout),
      id: cdktf.stringToTerraform(this._id),
      kxp_queue_threshold: cdktf.numberToTerraform(this._kxpQueueThreshold),
      no_matching_cipher_action: cdktf.stringToTerraform(this._noMatchingCipherAction),
      proxy_connect_timeout: cdktf.numberToTerraform(this._proxyConnectTimeout),
      resigned_short_lived_certificate: cdktf.stringToTerraform(this._resignedShortLivedCertificate),
      session_cache_capacity: cdktf.numberToTerraform(this._sessionCacheCapacity),
      session_cache_timeout: cdktf.numberToTerraform(this._sessionCacheTimeout),
      ssl_dh_bits: cdktf.stringToTerraform(this._sslDhBits),
      ssl_queue_threshold: cdktf.numberToTerraform(this._sslQueueThreshold),
      ssl_send_empty_frags: cdktf.stringToTerraform(this._sslSendEmptyFrags),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      cert_manager_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._certManagerCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      resigned_short_lived_certificate: {
        value: cdktf.stringToHclTerraform(this._resignedShortLivedCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
