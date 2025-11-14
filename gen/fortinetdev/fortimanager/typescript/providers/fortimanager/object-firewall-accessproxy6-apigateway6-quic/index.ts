// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallAccessproxy6Apigateway6QuicAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#access_proxy6 ObjectFirewallAccessproxy6Apigateway6QuicA#access_proxy6}
  */
  readonly accessProxy6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#ack_delay_exponent ObjectFirewallAccessproxy6Apigateway6QuicA#ack_delay_exponent}
  */
  readonly ackDelayExponent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#active_connection_id_limit ObjectFirewallAccessproxy6Apigateway6QuicA#active_connection_id_limit}
  */
  readonly activeConnectionIdLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#active_migration ObjectFirewallAccessproxy6Apigateway6QuicA#active_migration}
  */
  readonly activeMigration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#adom ObjectFirewallAccessproxy6Apigateway6QuicA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#api_gateway6 ObjectFirewallAccessproxy6Apigateway6QuicA#api_gateway6}
  */
  readonly apiGateway6: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#grease_quic_bit ObjectFirewallAccessproxy6Apigateway6QuicA#grease_quic_bit}
  */
  readonly greaseQuicBit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#id ObjectFirewallAccessproxy6Apigateway6QuicA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#max_ack_delay ObjectFirewallAccessproxy6Apigateway6QuicA#max_ack_delay}
  */
  readonly maxAckDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#max_datagram_frame_size ObjectFirewallAccessproxy6Apigateway6QuicA#max_datagram_frame_size}
  */
  readonly maxDatagramFrameSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#max_idle_timeout ObjectFirewallAccessproxy6Apigateway6QuicA#max_idle_timeout}
  */
  readonly maxIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#max_udp_payload_size ObjectFirewallAccessproxy6Apigateway6QuicA#max_udp_payload_size}
  */
  readonly maxUdpPayloadSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#scopetype ObjectFirewallAccessproxy6Apigateway6QuicA#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic fortimanager_object_firewall_accessproxy6_apigateway6_quic}
*/
export class ObjectFirewallAccessproxy6Apigateway6QuicA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_accessproxy6_apigateway6_quic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallAccessproxy6Apigateway6QuicA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallAccessproxy6Apigateway6QuicA to import
  * @param importFromId The id of the existing ObjectFirewallAccessproxy6Apigateway6QuicA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallAccessproxy6Apigateway6QuicA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_accessproxy6_apigateway6_quic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6_apigateway6_quic fortimanager_object_firewall_accessproxy6_apigateway6_quic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallAccessproxy6Apigateway6QuicAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallAccessproxy6Apigateway6QuicAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_accessproxy6_apigateway6_quic',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessProxy6 = config.accessProxy6;
    this._ackDelayExponent = config.ackDelayExponent;
    this._activeConnectionIdLimit = config.activeConnectionIdLimit;
    this._activeMigration = config.activeMigration;
    this._adom = config.adom;
    this._apiGateway6 = config.apiGateway6;
    this._greaseQuicBit = config.greaseQuicBit;
    this._id = config.id;
    this._maxAckDelay = config.maxAckDelay;
    this._maxDatagramFrameSize = config.maxDatagramFrameSize;
    this._maxIdleTimeout = config.maxIdleTimeout;
    this._maxUdpPayloadSize = config.maxUdpPayloadSize;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_proxy6 - computed: false, optional: false, required: true
  private _accessProxy6?: string; 
  public get accessProxy6() {
    return this.getStringAttribute('access_proxy6');
  }
  public set accessProxy6(value: string) {
    this._accessProxy6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessProxy6Input() {
    return this._accessProxy6;
  }

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

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // api_gateway6 - computed: false, optional: false, required: true
  private _apiGateway6?: string; 
  public get apiGateway6() {
    return this.getStringAttribute('api_gateway6');
  }
  public set apiGateway6(value: string) {
    this._apiGateway6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGateway6Input() {
    return this._apiGateway6;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_proxy6: cdktf.stringToTerraform(this._accessProxy6),
      ack_delay_exponent: cdktf.numberToTerraform(this._ackDelayExponent),
      active_connection_id_limit: cdktf.numberToTerraform(this._activeConnectionIdLimit),
      active_migration: cdktf.stringToTerraform(this._activeMigration),
      adom: cdktf.stringToTerraform(this._adom),
      api_gateway6: cdktf.stringToTerraform(this._apiGateway6),
      grease_quic_bit: cdktf.stringToTerraform(this._greaseQuicBit),
      id: cdktf.stringToTerraform(this._id),
      max_ack_delay: cdktf.numberToTerraform(this._maxAckDelay),
      max_datagram_frame_size: cdktf.numberToTerraform(this._maxDatagramFrameSize),
      max_idle_timeout: cdktf.numberToTerraform(this._maxIdleTimeout),
      max_udp_payload_size: cdktf.numberToTerraform(this._maxUdpPayloadSize),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_proxy6: {
        value: cdktf.stringToHclTerraform(this._accessProxy6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_gateway6: {
        value: cdktf.stringToHclTerraform(this._apiGateway6),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
