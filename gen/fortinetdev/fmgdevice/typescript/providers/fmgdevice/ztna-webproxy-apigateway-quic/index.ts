// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZtnaWebproxyApigatewayQuicAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#ack_delay_exponent ZtnaWebproxyApigatewayQuicA#ack_delay_exponent}
  */
  readonly ackDelayExponent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#active_connection_id_limit ZtnaWebproxyApigatewayQuicA#active_connection_id_limit}
  */
  readonly activeConnectionIdLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#active_migration ZtnaWebproxyApigatewayQuicA#active_migration}
  */
  readonly activeMigration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#api_gateway ZtnaWebproxyApigatewayQuicA#api_gateway}
  */
  readonly apiGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#device_name ZtnaWebproxyApigatewayQuicA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#device_vdom ZtnaWebproxyApigatewayQuicA#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#grease_quic_bit ZtnaWebproxyApigatewayQuicA#grease_quic_bit}
  */
  readonly greaseQuicBit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#id ZtnaWebproxyApigatewayQuicA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#max_ack_delay ZtnaWebproxyApigatewayQuicA#max_ack_delay}
  */
  readonly maxAckDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#max_datagram_frame_size ZtnaWebproxyApigatewayQuicA#max_datagram_frame_size}
  */
  readonly maxDatagramFrameSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#max_idle_timeout ZtnaWebproxyApigatewayQuicA#max_idle_timeout}
  */
  readonly maxIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#max_udp_payload_size ZtnaWebproxyApigatewayQuicA#max_udp_payload_size}
  */
  readonly maxUdpPayloadSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#web_proxy ZtnaWebproxyApigatewayQuicA#web_proxy}
  */
  readonly webProxy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic fmgdevice_ztna_webproxy_apigateway_quic}
*/
export class ZtnaWebproxyApigatewayQuicA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_ztna_webproxy_apigateway_quic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZtnaWebproxyApigatewayQuicA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZtnaWebproxyApigatewayQuicA to import
  * @param importFromId The id of the existing ZtnaWebproxyApigatewayQuicA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZtnaWebproxyApigatewayQuicA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_ztna_webproxy_apigateway_quic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/ztna_webproxy_apigateway_quic fmgdevice_ztna_webproxy_apigateway_quic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZtnaWebproxyApigatewayQuicAConfig
  */
  public constructor(scope: Construct, id: string, config: ZtnaWebproxyApigatewayQuicAConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_ztna_webproxy_apigateway_quic',
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
    this._ackDelayExponent = config.ackDelayExponent;
    this._activeConnectionIdLimit = config.activeConnectionIdLimit;
    this._activeMigration = config.activeMigration;
    this._apiGateway = config.apiGateway;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._greaseQuicBit = config.greaseQuicBit;
    this._id = config.id;
    this._maxAckDelay = config.maxAckDelay;
    this._maxDatagramFrameSize = config.maxDatagramFrameSize;
    this._maxIdleTimeout = config.maxIdleTimeout;
    this._maxUdpPayloadSize = config.maxUdpPayloadSize;
    this._webProxy = config.webProxy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_delay_exponent - computed: true, optional: true, required: false
  private _ackDelayExponent?: number; 
  public get ackDelayExponent() {
    return this.getNumberAttribute('ack_delay_exponent');
  }
  public set ackDelayExponent(value: number) {
    this._ackDelayExponent = value;
  }
  public resetAckDelayExponent() {
    this._ackDelayExponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackDelayExponentInput() {
    return this._ackDelayExponent;
  }

  // active_connection_id_limit - computed: true, optional: true, required: false
  private _activeConnectionIdLimit?: number; 
  public get activeConnectionIdLimit() {
    return this.getNumberAttribute('active_connection_id_limit');
  }
  public set activeConnectionIdLimit(value: number) {
    this._activeConnectionIdLimit = value;
  }
  public resetActiveConnectionIdLimit() {
    this._activeConnectionIdLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeConnectionIdLimitInput() {
    return this._activeConnectionIdLimit;
  }

  // active_migration - computed: true, optional: true, required: false
  private _activeMigration?: string; 
  public get activeMigration() {
    return this.getStringAttribute('active_migration');
  }
  public set activeMigration(value: string) {
    this._activeMigration = value;
  }
  public resetActiveMigration() {
    this._activeMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeMigrationInput() {
    return this._activeMigration;
  }

  // api_gateway - computed: false, optional: false, required: true
  private _apiGateway?: string; 
  public get apiGateway() {
    return this.getStringAttribute('api_gateway');
  }
  public set apiGateway(value: string) {
    this._apiGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayInput() {
    return this._apiGateway;
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

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // grease_quic_bit - computed: true, optional: true, required: false
  private _greaseQuicBit?: string; 
  public get greaseQuicBit() {
    return this.getStringAttribute('grease_quic_bit');
  }
  public set greaseQuicBit(value: string) {
    this._greaseQuicBit = value;
  }
  public resetGreaseQuicBit() {
    this._greaseQuicBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaseQuicBitInput() {
    return this._greaseQuicBit;
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

  // max_ack_delay - computed: true, optional: true, required: false
  private _maxAckDelay?: number; 
  public get maxAckDelay() {
    return this.getNumberAttribute('max_ack_delay');
  }
  public set maxAckDelay(value: number) {
    this._maxAckDelay = value;
  }
  public resetMaxAckDelay() {
    this._maxAckDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAckDelayInput() {
    return this._maxAckDelay;
  }

  // max_datagram_frame_size - computed: true, optional: true, required: false
  private _maxDatagramFrameSize?: number; 
  public get maxDatagramFrameSize() {
    return this.getNumberAttribute('max_datagram_frame_size');
  }
  public set maxDatagramFrameSize(value: number) {
    this._maxDatagramFrameSize = value;
  }
  public resetMaxDatagramFrameSize() {
    this._maxDatagramFrameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDatagramFrameSizeInput() {
    return this._maxDatagramFrameSize;
  }

  // max_idle_timeout - computed: true, optional: true, required: false
  private _maxIdleTimeout?: number; 
  public get maxIdleTimeout() {
    return this.getNumberAttribute('max_idle_timeout');
  }
  public set maxIdleTimeout(value: number) {
    this._maxIdleTimeout = value;
  }
  public resetMaxIdleTimeout() {
    this._maxIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleTimeoutInput() {
    return this._maxIdleTimeout;
  }

  // max_udp_payload_size - computed: true, optional: true, required: false
  private _maxUdpPayloadSize?: number; 
  public get maxUdpPayloadSize() {
    return this.getNumberAttribute('max_udp_payload_size');
  }
  public set maxUdpPayloadSize(value: number) {
    this._maxUdpPayloadSize = value;
  }
  public resetMaxUdpPayloadSize() {
    this._maxUdpPayloadSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUdpPayloadSizeInput() {
    return this._maxUdpPayloadSize;
  }

  // web_proxy - computed: false, optional: false, required: true
  private _webProxy?: string; 
  public get webProxy() {
    return this.getStringAttribute('web_proxy');
  }
  public set webProxy(value: string) {
    this._webProxy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webProxyInput() {
    return this._webProxy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ack_delay_exponent: cdktf.numberToTerraform(this._ackDelayExponent),
      active_connection_id_limit: cdktf.numberToTerraform(this._activeConnectionIdLimit),
      active_migration: cdktf.stringToTerraform(this._activeMigration),
      api_gateway: cdktf.stringToTerraform(this._apiGateway),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      grease_quic_bit: cdktf.stringToTerraform(this._greaseQuicBit),
      id: cdktf.stringToTerraform(this._id),
      max_ack_delay: cdktf.numberToTerraform(this._maxAckDelay),
      max_datagram_frame_size: cdktf.numberToTerraform(this._maxDatagramFrameSize),
      max_idle_timeout: cdktf.numberToTerraform(this._maxIdleTimeout),
      max_udp_payload_size: cdktf.numberToTerraform(this._maxUdpPayloadSize),
      web_proxy: cdktf.stringToTerraform(this._webProxy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack_delay_exponent: {
        value: cdktf.numberToHclTerraform(this._ackDelayExponent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      active_connection_id_limit: {
        value: cdktf.numberToHclTerraform(this._activeConnectionIdLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      active_migration: {
        value: cdktf.stringToHclTerraform(this._activeMigration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_gateway: {
        value: cdktf.stringToHclTerraform(this._apiGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grease_quic_bit: {
        value: cdktf.stringToHclTerraform(this._greaseQuicBit),
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
      max_ack_delay: {
        value: cdktf.numberToHclTerraform(this._maxAckDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_datagram_frame_size: {
        value: cdktf.numberToHclTerraform(this._maxDatagramFrameSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._maxIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_udp_payload_size: {
        value: cdktf.numberToHclTerraform(this._maxUdpPayloadSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      web_proxy: {
        value: cdktf.stringToHclTerraform(this._webProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
