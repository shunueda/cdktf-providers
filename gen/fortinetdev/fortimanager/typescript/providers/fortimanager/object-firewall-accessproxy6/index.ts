// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallAccessproxy6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#add_vhost_domain_to_dnsdb ObjectFirewallAccessproxy6#add_vhost_domain_to_dnsdb}
  */
  readonly addVhostDomainToDnsdb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#adom ObjectFirewallAccessproxy6#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#auth_portal ObjectFirewallAccessproxy6#auth_portal}
  */
  readonly authPortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#auth_virtual_host ObjectFirewallAccessproxy6#auth_virtual_host}
  */
  readonly authVirtualHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#client_cert ObjectFirewallAccessproxy6#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#decrypted_traffic_mirror ObjectFirewallAccessproxy6#decrypted_traffic_mirror}
  */
  readonly decryptedTrafficMirror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#dynamic_sort_subtable ObjectFirewallAccessproxy6#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#empty_cert_action ObjectFirewallAccessproxy6#empty_cert_action}
  */
  readonly emptyCertAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_supported_max_version ObjectFirewallAccessproxy6#http_supported_max_version}
  */
  readonly httpSupportedMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#id ObjectFirewallAccessproxy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#log_blocked_traffic ObjectFirewallAccessproxy6#log_blocked_traffic}
  */
  readonly logBlockedTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#name ObjectFirewallAccessproxy6#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#scopetype ObjectFirewallAccessproxy6#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#svr_pool_multiplex ObjectFirewallAccessproxy6#svr_pool_multiplex}
  */
  readonly svrPoolMultiplex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#svr_pool_server_max_concurrent_request ObjectFirewallAccessproxy6#svr_pool_server_max_concurrent_request}
  */
  readonly svrPoolServerMaxConcurrentRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#svr_pool_server_max_request ObjectFirewallAccessproxy6#svr_pool_server_max_request}
  */
  readonly svrPoolServerMaxRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#svr_pool_ttl ObjectFirewallAccessproxy6#svr_pool_ttl}
  */
  readonly svrPoolTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#user_agent_detect ObjectFirewallAccessproxy6#user_agent_detect}
  */
  readonly userAgentDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#vip ObjectFirewallAccessproxy6#vip}
  */
  readonly vip?: string;
  /**
  * api_gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#api_gateway ObjectFirewallAccessproxy6#api_gateway}
  */
  readonly apiGateway?: ObjectFirewallAccessproxy6ApiGateway[] | cdktf.IResolvable;
  /**
  * api_gateway6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#api_gateway6 ObjectFirewallAccessproxy6#api_gateway6}
  */
  readonly apiGateway6?: ObjectFirewallAccessproxy6ApiGateway6[] | cdktf.IResolvable;
}
export interface ObjectFirewallAccessproxy6ApiGatewayQuic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ack_delay_exponent ObjectFirewallAccessproxy6#ack_delay_exponent}
  */
  readonly ackDelayExponent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#active_connection_id_limit ObjectFirewallAccessproxy6#active_connection_id_limit}
  */
  readonly activeConnectionIdLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#active_migration ObjectFirewallAccessproxy6#active_migration}
  */
  readonly activeMigration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#grease_quic_bit ObjectFirewallAccessproxy6#grease_quic_bit}
  */
  readonly greaseQuicBit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#max_ack_delay ObjectFirewallAccessproxy6#max_ack_delay}
  */
  readonly maxAckDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#max_datagram_frame_size ObjectFirewallAccessproxy6#max_datagram_frame_size}
  */
  readonly maxDatagramFrameSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#max_idle_timeout ObjectFirewallAccessproxy6#max_idle_timeout}
  */
  readonly maxIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#max_udp_payload_size ObjectFirewallAccessproxy6#max_udp_payload_size}
  */
  readonly maxUdpPayloadSize?: number;
}

export function objectFirewallAccessproxy6ApiGatewayQuicToTerraform(struct?: ObjectFirewallAccessproxy6ApiGatewayQuicOutputReference | ObjectFirewallAccessproxy6ApiGatewayQuic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_delay_exponent: cdktf.numberToTerraform(struct!.ackDelayExponent),
    active_connection_id_limit: cdktf.numberToTerraform(struct!.activeConnectionIdLimit),
    active_migration: cdktf.stringToTerraform(struct!.activeMigration),
    grease_quic_bit: cdktf.stringToTerraform(struct!.greaseQuicBit),
    max_ack_delay: cdktf.numberToTerraform(struct!.maxAckDelay),
    max_datagram_frame_size: cdktf.numberToTerraform(struct!.maxDatagramFrameSize),
    max_idle_timeout: cdktf.numberToTerraform(struct!.maxIdleTimeout),
    max_udp_payload_size: cdktf.numberToTerraform(struct!.maxUdpPayloadSize),
  }
}


export function objectFirewallAccessproxy6ApiGatewayQuicToHclTerraform(struct?: ObjectFirewallAccessproxy6ApiGatewayQuicOutputReference | ObjectFirewallAccessproxy6ApiGatewayQuic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_delay_exponent: {
      value: cdktf.numberToHclTerraform(struct!.ackDelayExponent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_connection_id_limit: {
      value: cdktf.numberToHclTerraform(struct!.activeConnectionIdLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_migration: {
      value: cdktf.stringToHclTerraform(struct!.activeMigration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grease_quic_bit: {
      value: cdktf.stringToHclTerraform(struct!.greaseQuicBit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ack_delay: {
      value: cdktf.numberToHclTerraform(struct!.maxAckDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_datagram_frame_size: {
      value: cdktf.numberToHclTerraform(struct!.maxDatagramFrameSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_udp_payload_size: {
      value: cdktf.numberToHclTerraform(struct!.maxUdpPayloadSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAccessproxy6ApiGatewayQuicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallAccessproxy6ApiGatewayQuic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackDelayExponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackDelayExponent = this._ackDelayExponent;
    }
    if (this._activeConnectionIdLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeConnectionIdLimit = this._activeConnectionIdLimit;
    }
    if (this._activeMigration !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeMigration = this._activeMigration;
    }
    if (this._greaseQuicBit !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaseQuicBit = this._greaseQuicBit;
    }
    if (this._maxAckDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAckDelay = this._maxAckDelay;
    }
    if (this._maxDatagramFrameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDatagramFrameSize = this._maxDatagramFrameSize;
    }
    if (this._maxIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeout = this._maxIdleTimeout;
    }
    if (this._maxUdpPayloadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUdpPayloadSize = this._maxUdpPayloadSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAccessproxy6ApiGatewayQuic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackDelayExponent = undefined;
      this._activeConnectionIdLimit = undefined;
      this._activeMigration = undefined;
      this._greaseQuicBit = undefined;
      this._maxAckDelay = undefined;
      this._maxDatagramFrameSize = undefined;
      this._maxIdleTimeout = undefined;
      this._maxUdpPayloadSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackDelayExponent = value.ackDelayExponent;
      this._activeConnectionIdLimit = value.activeConnectionIdLimit;
      this._activeMigration = value.activeMigration;
      this._greaseQuicBit = value.greaseQuicBit;
      this._maxAckDelay = value.maxAckDelay;
      this._maxDatagramFrameSize = value.maxDatagramFrameSize;
      this._maxIdleTimeout = value.maxIdleTimeout;
      this._maxUdpPayloadSize = value.maxUdpPayloadSize;
    }
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
}
export interface ObjectFirewallAccessproxy6ApiGatewayRealservers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#addr_type ObjectFirewallAccessproxy6#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#address ObjectFirewallAccessproxy6#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#domain ObjectFirewallAccessproxy6#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#external_auth ObjectFirewallAccessproxy6#external_auth}
  */
  readonly externalAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#health_check ObjectFirewallAccessproxy6#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#health_check_proto ObjectFirewallAccessproxy6#health_check_proto}
  */
  readonly healthCheckProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#holddown_interval ObjectFirewallAccessproxy6#holddown_interval}
  */
  readonly holddownInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_host ObjectFirewallAccessproxy6#http_host}
  */
  readonly httpHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#id ObjectFirewallAccessproxy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ip ObjectFirewallAccessproxy6#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#mappedport ObjectFirewallAccessproxy6#mappedport}
  */
  readonly mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#port ObjectFirewallAccessproxy6#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssh_client_cert ObjectFirewallAccessproxy6#ssh_client_cert}
  */
  readonly sshClientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssh_host_key ObjectFirewallAccessproxy6#ssh_host_key}
  */
  readonly sshHostKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssh_host_key_validation ObjectFirewallAccessproxy6#ssh_host_key_validation}
  */
  readonly sshHostKeyValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#status ObjectFirewallAccessproxy6#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#translate_host ObjectFirewallAccessproxy6#translate_host}
  */
  readonly translateHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#tunnel_encryption ObjectFirewallAccessproxy6#tunnel_encryption}
  */
  readonly tunnelEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#type ObjectFirewallAccessproxy6#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#verify_cert ObjectFirewallAccessproxy6#verify_cert}
  */
  readonly verifyCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#weight ObjectFirewallAccessproxy6#weight}
  */
  readonly weight?: number;
}

export function objectFirewallAccessproxy6ApiGatewayRealserversToTerraform(struct?: ObjectFirewallAccessproxy6ApiGatewayRealservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_type: cdktf.stringToTerraform(struct!.addrType),
    address: cdktf.stringToTerraform(struct!.address),
    domain: cdktf.stringToTerraform(struct!.domain),
    external_auth: cdktf.stringToTerraform(struct!.externalAuth),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    health_check_proto: cdktf.stringToTerraform(struct!.healthCheckProto),
    holddown_interval: cdktf.stringToTerraform(struct!.holddownInterval),
    http_host: cdktf.stringToTerraform(struct!.httpHost),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    mappedport: cdktf.stringToTerraform(struct!.mappedport),
    port: cdktf.numberToTerraform(struct!.port),
    ssh_client_cert: cdktf.stringToTerraform(struct!.sshClientCert),
    ssh_host_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshHostKey),
    ssh_host_key_validation: cdktf.stringToTerraform(struct!.sshHostKeyValidation),
    status: cdktf.stringToTerraform(struct!.status),
    translate_host: cdktf.stringToTerraform(struct!.translateHost),
    tunnel_encryption: cdktf.stringToTerraform(struct!.tunnelEncryption),
    type: cdktf.stringToTerraform(struct!.type),
    verify_cert: cdktf.stringToTerraform(struct!.verifyCert),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectFirewallAccessproxy6ApiGatewayRealserversToHclTerraform(struct?: ObjectFirewallAccessproxy6ApiGatewayRealservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_type: {
      value: cdktf.stringToHclTerraform(struct!.addrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_auth: {
      value: cdktf.stringToHclTerraform(struct!.externalAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: cdktf.stringToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_proto: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    holddown_interval: {
      value: cdktf.stringToHclTerraform(struct!.holddownInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_host: {
      value: cdktf.stringToHclTerraform(struct!.httpHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mappedport: {
      value: cdktf.stringToHclTerraform(struct!.mappedport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_client_cert: {
      value: cdktf.stringToHclTerraform(struct!.sshClientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_host_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshHostKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ssh_host_key_validation: {
      value: cdktf.stringToHclTerraform(struct!.sshHostKeyValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_host: {
      value: cdktf.stringToHclTerraform(struct!.translateHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_encryption: {
      value: cdktf.stringToHclTerraform(struct!.tunnelEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_cert: {
      value: cdktf.stringToHclTerraform(struct!.verifyCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAccessproxy6ApiGatewayRealserversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ObjectFirewallAccessproxy6ApiGatewayRealservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrType = this._addrType;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._externalAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAuth = this._externalAuth;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._healthCheckProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckProto = this._healthCheckProto;
    }
    if (this._holddownInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.holddownInterval = this._holddownInterval;
    }
    if (this._httpHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHost = this._httpHost;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mappedport !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedport = this._mappedport;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sshClientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshClientCert = this._sshClientCert;
    }
    if (this._sshHostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshHostKey = this._sshHostKey;
    }
    if (this._sshHostKeyValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshHostKeyValidation = this._sshHostKeyValidation;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._translateHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateHost = this._translateHost;
    }
    if (this._tunnelEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEncryption = this._tunnelEncryption;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._verifyCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCert = this._verifyCert;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAccessproxy6ApiGatewayRealservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrType = undefined;
      this._address = undefined;
      this._domain = undefined;
      this._externalAuth = undefined;
      this._healthCheck = undefined;
      this._healthCheckProto = undefined;
      this._holddownInterval = undefined;
      this._httpHost = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._mappedport = undefined;
      this._port = undefined;
      this._sshClientCert = undefined;
      this._sshHostKey = undefined;
      this._sshHostKeyValidation = undefined;
      this._status = undefined;
      this._translateHost = undefined;
      this._tunnelEncryption = undefined;
      this._type = undefined;
      this._verifyCert = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrType = value.addrType;
      this._address = value.address;
      this._domain = value.domain;
      this._externalAuth = value.externalAuth;
      this._healthCheck = value.healthCheck;
      this._healthCheckProto = value.healthCheckProto;
      this._holddownInterval = value.holddownInterval;
      this._httpHost = value.httpHost;
      this._id = value.id;
      this._ip = value.ip;
      this._mappedport = value.mappedport;
      this._port = value.port;
      this._sshClientCert = value.sshClientCert;
      this._sshHostKey = value.sshHostKey;
      this._sshHostKeyValidation = value.sshHostKeyValidation;
      this._status = value.status;
      this._translateHost = value.translateHost;
      this._tunnelEncryption = value.tunnelEncryption;
      this._type = value.type;
      this._verifyCert = value.verifyCert;
      this._weight = value.weight;
    }
  }

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // external_auth - computed: true, optional: true, required: false
  private _externalAuth?: string; 
  public get externalAuth() {
    return this.getStringAttribute('external_auth');
  }
  public set externalAuth(value: string) {
    this._externalAuth = value;
  }
  public resetExternalAuth() {
    this._externalAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthInput() {
    return this._externalAuth;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_proto - computed: true, optional: true, required: false
  private _healthCheckProto?: string; 
  public get healthCheckProto() {
    return this.getStringAttribute('health_check_proto');
  }
  public set healthCheckProto(value: string) {
    this._healthCheckProto = value;
  }
  public resetHealthCheckProto() {
    this._healthCheckProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckProtoInput() {
    return this._healthCheckProto;
  }

  // holddown_interval - computed: true, optional: true, required: false
  private _holddownInterval?: string; 
  public get holddownInterval() {
    return this.getStringAttribute('holddown_interval');
  }
  public set holddownInterval(value: string) {
    this._holddownInterval = value;
  }
  public resetHolddownInterval() {
    this._holddownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownIntervalInput() {
    return this._holddownInterval;
  }

  // http_host - computed: false, optional: true, required: false
  private _httpHost?: string; 
  public get httpHost() {
    return this.getStringAttribute('http_host');
  }
  public set httpHost(value: string) {
    this._httpHost = value;
  }
  public resetHttpHost() {
    this._httpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHostInput() {
    return this._httpHost;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mappedport - computed: false, optional: true, required: false
  private _mappedport?: string; 
  public get mappedport() {
    return this.getStringAttribute('mappedport');
  }
  public set mappedport(value: string) {
    this._mappedport = value;
  }
  public resetMappedport() {
    this._mappedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedportInput() {
    return this._mappedport;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssh_client_cert - computed: false, optional: true, required: false
  private _sshClientCert?: string; 
  public get sshClientCert() {
    return this.getStringAttribute('ssh_client_cert');
  }
  public set sshClientCert(value: string) {
    this._sshClientCert = value;
  }
  public resetSshClientCert() {
    this._sshClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshClientCertInput() {
    return this._sshClientCert;
  }

  // ssh_host_key - computed: true, optional: true, required: false
  private _sshHostKey?: string[]; 
  public get sshHostKey() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_host_key'));
  }
  public set sshHostKey(value: string[]) {
    this._sshHostKey = value;
  }
  public resetSshHostKey() {
    this._sshHostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostKeyInput() {
    return this._sshHostKey;
  }

  // ssh_host_key_validation - computed: true, optional: true, required: false
  private _sshHostKeyValidation?: string; 
  public get sshHostKeyValidation() {
    return this.getStringAttribute('ssh_host_key_validation');
  }
  public set sshHostKeyValidation(value: string) {
    this._sshHostKeyValidation = value;
  }
  public resetSshHostKeyValidation() {
    this._sshHostKeyValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostKeyValidationInput() {
    return this._sshHostKeyValidation;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // translate_host - computed: true, optional: true, required: false
  private _translateHost?: string; 
  public get translateHost() {
    return this.getStringAttribute('translate_host');
  }
  public set translateHost(value: string) {
    this._translateHost = value;
  }
  public resetTranslateHost() {
    this._translateHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateHostInput() {
    return this._translateHost;
  }

  // tunnel_encryption - computed: true, optional: true, required: false
  private _tunnelEncryption?: string; 
  public get tunnelEncryption() {
    return this.getStringAttribute('tunnel_encryption');
  }
  public set tunnelEncryption(value: string) {
    this._tunnelEncryption = value;
  }
  public resetTunnelEncryption() {
    this._tunnelEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEncryptionInput() {
    return this._tunnelEncryption;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // verify_cert - computed: false, optional: true, required: false
  private _verifyCert?: string; 
  public get verifyCert() {
    return this.getStringAttribute('verify_cert');
  }
  public set verifyCert(value: string) {
    this._verifyCert = value;
  }
  public resetVerifyCert() {
    this._verifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertInput() {
    return this._verifyCert;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ObjectFirewallAccessproxy6ApiGatewayRealserversList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAccessproxy6ApiGatewayRealservers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObjectFirewallAccessproxy6ApiGatewayRealserversOutputReference {
    return new ObjectFirewallAccessproxy6ApiGatewayRealserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAccessproxy6ApiGatewaySslCipherSuites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#cipher ObjectFirewallAccessproxy6#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#priority ObjectFirewallAccessproxy6#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#versions ObjectFirewallAccessproxy6#versions}
  */
  readonly versions?: string[];
}

export function objectFirewallAccessproxy6ApiGatewaySslCipherSuitesToTerraform(struct?: ObjectFirewallAccessproxy6ApiGatewaySslCipherSuites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher: cdktf.stringToTerraform(struct!.cipher),
    priority: cdktf.numberToTerraform(struct!.priority),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function objectFirewallAccessproxy6ApiGatewaySslCipherSuitesToHclTerraform(struct?: ObjectFirewallAccessproxy6ApiGatewaySslCipherSuites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher: {
      value: cdktf.stringToHclTerraform(struct!.cipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAccessproxy6ApiGatewaySslCipherSuitesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ObjectFirewallAccessproxy6ApiGatewaySslCipherSuites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher = this._cipher;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAccessproxy6ApiGatewaySslCipherSuites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipher = undefined;
      this._priority = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipher = value.cipher;
      this._priority = value.priority;
      this._versions = value.versions;
    }
  }

  // cipher - computed: false, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // versions - computed: true, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return cdktf.Fn.tolist(this.getListAttribute('versions'));
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}

export class ObjectFirewallAccessproxy6ApiGatewaySslCipherSuitesList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAccessproxy6ApiGatewaySslCipherSuites[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObjectFirewallAccessproxy6ApiGatewaySslCipherSuitesOutputReference {
    return new ObjectFirewallAccessproxy6ApiGatewaySslCipherSuitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAccessproxy6ApiGateway {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#application ObjectFirewallAccessproxy6#application}
  */
  readonly application?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#h2_support ObjectFirewallAccessproxy6#h2_support}
  */
  readonly h2Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#h3_support ObjectFirewallAccessproxy6#h3_support}
  */
  readonly h3Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_age ObjectFirewallAccessproxy6#http_cookie_age}
  */
  readonly httpCookieAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_domain ObjectFirewallAccessproxy6#http_cookie_domain}
  */
  readonly httpCookieDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_domain_from_host ObjectFirewallAccessproxy6#http_cookie_domain_from_host}
  */
  readonly httpCookieDomainFromHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_generation ObjectFirewallAccessproxy6#http_cookie_generation}
  */
  readonly httpCookieGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_path ObjectFirewallAccessproxy6#http_cookie_path}
  */
  readonly httpCookiePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_share ObjectFirewallAccessproxy6#http_cookie_share}
  */
  readonly httpCookieShare?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#https_cookie_secure ObjectFirewallAccessproxy6#https_cookie_secure}
  */
  readonly httpsCookieSecure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#id ObjectFirewallAccessproxy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ldb_method ObjectFirewallAccessproxy6#ldb_method}
  */
  readonly ldbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#persistence ObjectFirewallAccessproxy6#persistence}
  */
  readonly persistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#saml_redirect ObjectFirewallAccessproxy6#saml_redirect}
  */
  readonly samlRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#saml_server ObjectFirewallAccessproxy6#saml_server}
  */
  readonly samlServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#service ObjectFirewallAccessproxy6#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_algorithm ObjectFirewallAccessproxy6#ssl_algorithm}
  */
  readonly sslAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_dh_bits ObjectFirewallAccessproxy6#ssl_dh_bits}
  */
  readonly sslDhBits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_max_version ObjectFirewallAccessproxy6#ssl_max_version}
  */
  readonly sslMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_min_version ObjectFirewallAccessproxy6#ssl_min_version}
  */
  readonly sslMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_renegotiation ObjectFirewallAccessproxy6#ssl_renegotiation}
  */
  readonly sslRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_vpn_web_portal ObjectFirewallAccessproxy6#ssl_vpn_web_portal}
  */
  readonly sslVpnWebPortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#url_map ObjectFirewallAccessproxy6#url_map}
  */
  readonly urlMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#url_map_type ObjectFirewallAccessproxy6#url_map_type}
  */
  readonly urlMapType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#virtual_host ObjectFirewallAccessproxy6#virtual_host}
  */
  readonly virtualHost?: string;
  /**
  * quic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#quic ObjectFirewallAccessproxy6#quic}
  */
  readonly quic?: ObjectFirewallAccessproxy6ApiGatewayQuic;
  /**
  * realservers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#realservers ObjectFirewallAccessproxy6#realservers}
  */
  readonly realservers?: ObjectFirewallAccessproxy6ApiGatewayRealservers[] | cdktf.IResolvable;
  /**
  * ssl_cipher_suites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_cipher_suites ObjectFirewallAccessproxy6#ssl_cipher_suites}
  */
  readonly sslCipherSuites?: ObjectFirewallAccessproxy6ApiGatewaySslCipherSuites[] | cdktf.IResolvable;
}

export function objectFirewallAccessproxy6ApiGatewayToTerraform(struct?: ObjectFirewallAccessproxy6ApiGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.application),
    h2_support: cdktf.stringToTerraform(struct!.h2Support),
    h3_support: cdktf.stringToTerraform(struct!.h3Support),
    http_cookie_age: cdktf.numberToTerraform(struct!.httpCookieAge),
    http_cookie_domain: cdktf.stringToTerraform(struct!.httpCookieDomain),
    http_cookie_domain_from_host: cdktf.stringToTerraform(struct!.httpCookieDomainFromHost),
    http_cookie_generation: cdktf.numberToTerraform(struct!.httpCookieGeneration),
    http_cookie_path: cdktf.stringToTerraform(struct!.httpCookiePath),
    http_cookie_share: cdktf.stringToTerraform(struct!.httpCookieShare),
    https_cookie_secure: cdktf.stringToTerraform(struct!.httpsCookieSecure),
    id: cdktf.numberToTerraform(struct!.id),
    ldb_method: cdktf.stringToTerraform(struct!.ldbMethod),
    persistence: cdktf.stringToTerraform(struct!.persistence),
    saml_redirect: cdktf.stringToTerraform(struct!.samlRedirect),
    saml_server: cdktf.stringToTerraform(struct!.samlServer),
    service: cdktf.stringToTerraform(struct!.service),
    ssl_algorithm: cdktf.stringToTerraform(struct!.sslAlgorithm),
    ssl_dh_bits: cdktf.stringToTerraform(struct!.sslDhBits),
    ssl_max_version: cdktf.stringToTerraform(struct!.sslMaxVersion),
    ssl_min_version: cdktf.stringToTerraform(struct!.sslMinVersion),
    ssl_renegotiation: cdktf.stringToTerraform(struct!.sslRenegotiation),
    ssl_vpn_web_portal: cdktf.stringToTerraform(struct!.sslVpnWebPortal),
    url_map: cdktf.stringToTerraform(struct!.urlMap),
    url_map_type: cdktf.stringToTerraform(struct!.urlMapType),
    virtual_host: cdktf.stringToTerraform(struct!.virtualHost),
    quic: objectFirewallAccessproxy6ApiGatewayQuicToTerraform(struct!.quic),
    realservers: cdktf.listMapper(objectFirewallAccessproxy6ApiGatewayRealserversToTerraform, true)(struct!.realservers),
    ssl_cipher_suites: cdktf.listMapper(objectFirewallAccessproxy6ApiGatewaySslCipherSuitesToTerraform, true)(struct!.sslCipherSuites),
  }
}


export function objectFirewallAccessproxy6ApiGatewayToHclTerraform(struct?: ObjectFirewallAccessproxy6ApiGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.application),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    h2_support: {
      value: cdktf.stringToHclTerraform(struct!.h2Support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    h3_support: {
      value: cdktf.stringToHclTerraform(struct!.h3Support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_age: {
      value: cdktf.numberToHclTerraform(struct!.httpCookieAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_cookie_domain: {
      value: cdktf.stringToHclTerraform(struct!.httpCookieDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_domain_from_host: {
      value: cdktf.stringToHclTerraform(struct!.httpCookieDomainFromHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_generation: {
      value: cdktf.numberToHclTerraform(struct!.httpCookieGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_cookie_path: {
      value: cdktf.stringToHclTerraform(struct!.httpCookiePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_share: {
      value: cdktf.stringToHclTerraform(struct!.httpCookieShare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_cookie_secure: {
      value: cdktf.stringToHclTerraform(struct!.httpsCookieSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldb_method: {
      value: cdktf.stringToHclTerraform(struct!.ldbMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistence: {
      value: cdktf.stringToHclTerraform(struct!.persistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_redirect: {
      value: cdktf.stringToHclTerraform(struct!.samlRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_server: {
      value: cdktf.stringToHclTerraform(struct!.samlServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sslAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_dh_bits: {
      value: cdktf.stringToHclTerraform(struct!.sslDhBits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_max_version: {
      value: cdktf.stringToHclTerraform(struct!.sslMaxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_min_version: {
      value: cdktf.stringToHclTerraform(struct!.sslMinVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_renegotiation: {
      value: cdktf.stringToHclTerraform(struct!.sslRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_vpn_web_portal: {
      value: cdktf.stringToHclTerraform(struct!.sslVpnWebPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_map: {
      value: cdktf.stringToHclTerraform(struct!.urlMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_map_type: {
      value: cdktf.stringToHclTerraform(struct!.urlMapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_host: {
      value: cdktf.stringToHclTerraform(struct!.virtualHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: objectFirewallAccessproxy6ApiGatewayQuicToHclTerraform(struct!.quic),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallAccessproxy6ApiGatewayQuicList",
    },
    realservers: {
      value: cdktf.listMapperHcl(objectFirewallAccessproxy6ApiGatewayRealserversToHclTerraform, true)(struct!.realservers),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallAccessproxy6ApiGatewayRealserversList",
    },
    ssl_cipher_suites: {
      value: cdktf.listMapperHcl(objectFirewallAccessproxy6ApiGatewaySslCipherSuitesToHclTerraform, true)(struct!.sslCipherSuites),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallAccessproxy6ApiGatewaySslCipherSuitesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAccessproxy6ApiGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ObjectFirewallAccessproxy6ApiGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._h2Support !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2Support = this._h2Support;
    }
    if (this._h3Support !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3Support = this._h3Support;
    }
    if (this._httpCookieAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieAge = this._httpCookieAge;
    }
    if (this._httpCookieDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieDomain = this._httpCookieDomain;
    }
    if (this._httpCookieDomainFromHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieDomainFromHost = this._httpCookieDomainFromHost;
    }
    if (this._httpCookieGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieGeneration = this._httpCookieGeneration;
    }
    if (this._httpCookiePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookiePath = this._httpCookiePath;
    }
    if (this._httpCookieShare !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieShare = this._httpCookieShare;
    }
    if (this._httpsCookieSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsCookieSecure = this._httpsCookieSecure;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ldbMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldbMethod = this._ldbMethod;
    }
    if (this._persistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistence = this._persistence;
    }
    if (this._samlRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlRedirect = this._samlRedirect;
    }
    if (this._samlServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlServer = this._samlServer;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._sslAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAlgorithm = this._sslAlgorithm;
    }
    if (this._sslDhBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslDhBits = this._sslDhBits;
    }
    if (this._sslMaxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMaxVersion = this._sslMaxVersion;
    }
    if (this._sslMinVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMinVersion = this._sslMinVersion;
    }
    if (this._sslRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRenegotiation = this._sslRenegotiation;
    }
    if (this._sslVpnWebPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVpnWebPortal = this._sslVpnWebPortal;
    }
    if (this._urlMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlMap = this._urlMap;
    }
    if (this._urlMapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlMapType = this._urlMapType;
    }
    if (this._virtualHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualHost = this._virtualHost;
    }
    if (this._quic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic?.internalValue;
    }
    if (this._realservers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realservers = this._realservers?.internalValue;
    }
    if (this._sslCipherSuites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCipherSuites = this._sslCipherSuites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAccessproxy6ApiGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._h2Support = undefined;
      this._h3Support = undefined;
      this._httpCookieAge = undefined;
      this._httpCookieDomain = undefined;
      this._httpCookieDomainFromHost = undefined;
      this._httpCookieGeneration = undefined;
      this._httpCookiePath = undefined;
      this._httpCookieShare = undefined;
      this._httpsCookieSecure = undefined;
      this._id = undefined;
      this._ldbMethod = undefined;
      this._persistence = undefined;
      this._samlRedirect = undefined;
      this._samlServer = undefined;
      this._service = undefined;
      this._sslAlgorithm = undefined;
      this._sslDhBits = undefined;
      this._sslMaxVersion = undefined;
      this._sslMinVersion = undefined;
      this._sslRenegotiation = undefined;
      this._sslVpnWebPortal = undefined;
      this._urlMap = undefined;
      this._urlMapType = undefined;
      this._virtualHost = undefined;
      this._quic.internalValue = undefined;
      this._realservers.internalValue = undefined;
      this._sslCipherSuites.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._h2Support = value.h2Support;
      this._h3Support = value.h3Support;
      this._httpCookieAge = value.httpCookieAge;
      this._httpCookieDomain = value.httpCookieDomain;
      this._httpCookieDomainFromHost = value.httpCookieDomainFromHost;
      this._httpCookieGeneration = value.httpCookieGeneration;
      this._httpCookiePath = value.httpCookiePath;
      this._httpCookieShare = value.httpCookieShare;
      this._httpsCookieSecure = value.httpsCookieSecure;
      this._id = value.id;
      this._ldbMethod = value.ldbMethod;
      this._persistence = value.persistence;
      this._samlRedirect = value.samlRedirect;
      this._samlServer = value.samlServer;
      this._service = value.service;
      this._sslAlgorithm = value.sslAlgorithm;
      this._sslDhBits = value.sslDhBits;
      this._sslMaxVersion = value.sslMaxVersion;
      this._sslMinVersion = value.sslMinVersion;
      this._sslRenegotiation = value.sslRenegotiation;
      this._sslVpnWebPortal = value.sslVpnWebPortal;
      this._urlMap = value.urlMap;
      this._urlMapType = value.urlMapType;
      this._virtualHost = value.virtualHost;
      this._quic.internalValue = value.quic;
      this._realservers.internalValue = value.realservers;
      this._sslCipherSuites.internalValue = value.sslCipherSuites;
    }
  }

  // application - computed: true, optional: true, required: false
  private _application?: string[]; 
  public get application() {
    return cdktf.Fn.tolist(this.getListAttribute('application'));
  }
  public set application(value: string[]) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // h2_support - computed: true, optional: true, required: false
  private _h2Support?: string; 
  public get h2Support() {
    return this.getStringAttribute('h2_support');
  }
  public set h2Support(value: string) {
    this._h2Support = value;
  }
  public resetH2Support() {
    this._h2Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2SupportInput() {
    return this._h2Support;
  }

  // h3_support - computed: true, optional: true, required: false
  private _h3Support?: string; 
  public get h3Support() {
    return this.getStringAttribute('h3_support');
  }
  public set h3Support(value: string) {
    this._h3Support = value;
  }
  public resetH3Support() {
    this._h3Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3SupportInput() {
    return this._h3Support;
  }

  // http_cookie_age - computed: true, optional: true, required: false
  private _httpCookieAge?: number; 
  public get httpCookieAge() {
    return this.getNumberAttribute('http_cookie_age');
  }
  public set httpCookieAge(value: number) {
    this._httpCookieAge = value;
  }
  public resetHttpCookieAge() {
    this._httpCookieAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieAgeInput() {
    return this._httpCookieAge;
  }

  // http_cookie_domain - computed: false, optional: true, required: false
  private _httpCookieDomain?: string; 
  public get httpCookieDomain() {
    return this.getStringAttribute('http_cookie_domain');
  }
  public set httpCookieDomain(value: string) {
    this._httpCookieDomain = value;
  }
  public resetHttpCookieDomain() {
    this._httpCookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieDomainInput() {
    return this._httpCookieDomain;
  }

  // http_cookie_domain_from_host - computed: true, optional: true, required: false
  private _httpCookieDomainFromHost?: string; 
  public get httpCookieDomainFromHost() {
    return this.getStringAttribute('http_cookie_domain_from_host');
  }
  public set httpCookieDomainFromHost(value: string) {
    this._httpCookieDomainFromHost = value;
  }
  public resetHttpCookieDomainFromHost() {
    this._httpCookieDomainFromHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieDomainFromHostInput() {
    return this._httpCookieDomainFromHost;
  }

  // http_cookie_generation - computed: true, optional: true, required: false
  private _httpCookieGeneration?: number; 
  public get httpCookieGeneration() {
    return this.getNumberAttribute('http_cookie_generation');
  }
  public set httpCookieGeneration(value: number) {
    this._httpCookieGeneration = value;
  }
  public resetHttpCookieGeneration() {
    this._httpCookieGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieGenerationInput() {
    return this._httpCookieGeneration;
  }

  // http_cookie_path - computed: false, optional: true, required: false
  private _httpCookiePath?: string; 
  public get httpCookiePath() {
    return this.getStringAttribute('http_cookie_path');
  }
  public set httpCookiePath(value: string) {
    this._httpCookiePath = value;
  }
  public resetHttpCookiePath() {
    this._httpCookiePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookiePathInput() {
    return this._httpCookiePath;
  }

  // http_cookie_share - computed: true, optional: true, required: false
  private _httpCookieShare?: string; 
  public get httpCookieShare() {
    return this.getStringAttribute('http_cookie_share');
  }
  public set httpCookieShare(value: string) {
    this._httpCookieShare = value;
  }
  public resetHttpCookieShare() {
    this._httpCookieShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieShareInput() {
    return this._httpCookieShare;
  }

  // https_cookie_secure - computed: true, optional: true, required: false
  private _httpsCookieSecure?: string; 
  public get httpsCookieSecure() {
    return this.getStringAttribute('https_cookie_secure');
  }
  public set httpsCookieSecure(value: string) {
    this._httpsCookieSecure = value;
  }
  public resetHttpsCookieSecure() {
    this._httpsCookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsCookieSecureInput() {
    return this._httpsCookieSecure;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ldb_method - computed: true, optional: true, required: false
  private _ldbMethod?: string; 
  public get ldbMethod() {
    return this.getStringAttribute('ldb_method');
  }
  public set ldbMethod(value: string) {
    this._ldbMethod = value;
  }
  public resetLdbMethod() {
    this._ldbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldbMethodInput() {
    return this._ldbMethod;
  }

  // persistence - computed: true, optional: true, required: false
  private _persistence?: string; 
  public get persistence() {
    return this.getStringAttribute('persistence');
  }
  public set persistence(value: string) {
    this._persistence = value;
  }
  public resetPersistence() {
    this._persistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence;
  }

  // saml_redirect - computed: true, optional: true, required: false
  private _samlRedirect?: string; 
  public get samlRedirect() {
    return this.getStringAttribute('saml_redirect');
  }
  public set samlRedirect(value: string) {
    this._samlRedirect = value;
  }
  public resetSamlRedirect() {
    this._samlRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlRedirectInput() {
    return this._samlRedirect;
  }

  // saml_server - computed: false, optional: true, required: false
  private _samlServer?: string; 
  public get samlServer() {
    return this.getStringAttribute('saml_server');
  }
  public set samlServer(value: string) {
    this._samlServer = value;
  }
  public resetSamlServer() {
    this._samlServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlServerInput() {
    return this._samlServer;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // ssl_algorithm - computed: true, optional: true, required: false
  private _sslAlgorithm?: string; 
  public get sslAlgorithm() {
    return this.getStringAttribute('ssl_algorithm');
  }
  public set sslAlgorithm(value: string) {
    this._sslAlgorithm = value;
  }
  public resetSslAlgorithm() {
    this._sslAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAlgorithmInput() {
    return this._sslAlgorithm;
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

  // ssl_max_version - computed: false, optional: true, required: false
  private _sslMaxVersion?: string; 
  public get sslMaxVersion() {
    return this.getStringAttribute('ssl_max_version');
  }
  public set sslMaxVersion(value: string) {
    this._sslMaxVersion = value;
  }
  public resetSslMaxVersion() {
    this._sslMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMaxVersionInput() {
    return this._sslMaxVersion;
  }

  // ssl_min_version - computed: false, optional: true, required: false
  private _sslMinVersion?: string; 
  public get sslMinVersion() {
    return this.getStringAttribute('ssl_min_version');
  }
  public set sslMinVersion(value: string) {
    this._sslMinVersion = value;
  }
  public resetSslMinVersion() {
    this._sslMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinVersionInput() {
    return this._sslMinVersion;
  }

  // ssl_renegotiation - computed: true, optional: true, required: false
  private _sslRenegotiation?: string; 
  public get sslRenegotiation() {
    return this.getStringAttribute('ssl_renegotiation');
  }
  public set sslRenegotiation(value: string) {
    this._sslRenegotiation = value;
  }
  public resetSslRenegotiation() {
    this._sslRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRenegotiationInput() {
    return this._sslRenegotiation;
  }

  // ssl_vpn_web_portal - computed: false, optional: true, required: false
  private _sslVpnWebPortal?: string; 
  public get sslVpnWebPortal() {
    return this.getStringAttribute('ssl_vpn_web_portal');
  }
  public set sslVpnWebPortal(value: string) {
    this._sslVpnWebPortal = value;
  }
  public resetSslVpnWebPortal() {
    this._sslVpnWebPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnWebPortalInput() {
    return this._sslVpnWebPortal;
  }

  // url_map - computed: true, optional: true, required: false
  private _urlMap?: string; 
  public get urlMap() {
    return this.getStringAttribute('url_map');
  }
  public set urlMap(value: string) {
    this._urlMap = value;
  }
  public resetUrlMap() {
    this._urlMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMapInput() {
    return this._urlMap;
  }

  // url_map_type - computed: true, optional: true, required: false
  private _urlMapType?: string; 
  public get urlMapType() {
    return this.getStringAttribute('url_map_type');
  }
  public set urlMapType(value: string) {
    this._urlMapType = value;
  }
  public resetUrlMapType() {
    this._urlMapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMapTypeInput() {
    return this._urlMapType;
  }

  // virtual_host - computed: false, optional: true, required: false
  private _virtualHost?: string; 
  public get virtualHost() {
    return this.getStringAttribute('virtual_host');
  }
  public set virtualHost(value: string) {
    this._virtualHost = value;
  }
  public resetVirtualHost() {
    this._virtualHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostInput() {
    return this._virtualHost;
  }

  // quic - computed: false, optional: true, required: false
  private _quic = new ObjectFirewallAccessproxy6ApiGatewayQuicOutputReference(this, "quic");
  public get quic() {
    return this._quic;
  }
  public putQuic(value: ObjectFirewallAccessproxy6ApiGatewayQuic) {
    this._quic.internalValue = value;
  }
  public resetQuic() {
    this._quic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic.internalValue;
  }

  // realservers - computed: false, optional: true, required: false
  private _realservers = new ObjectFirewallAccessproxy6ApiGatewayRealserversList(this, "realservers", false);
  public get realservers() {
    return this._realservers;
  }
  public putRealservers(value: ObjectFirewallAccessproxy6ApiGatewayRealservers[] | cdktf.IResolvable) {
    this._realservers.internalValue = value;
  }
  public resetRealservers() {
    this._realservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realserversInput() {
    return this._realservers.internalValue;
  }

  // ssl_cipher_suites - computed: false, optional: true, required: false
  private _sslCipherSuites = new ObjectFirewallAccessproxy6ApiGatewaySslCipherSuitesList(this, "ssl_cipher_suites", false);
  public get sslCipherSuites() {
    return this._sslCipherSuites;
  }
  public putSslCipherSuites(value: ObjectFirewallAccessproxy6ApiGatewaySslCipherSuites[] | cdktf.IResolvable) {
    this._sslCipherSuites.internalValue = value;
  }
  public resetSslCipherSuites() {
    this._sslCipherSuites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherSuitesInput() {
    return this._sslCipherSuites.internalValue;
  }
}

export class ObjectFirewallAccessproxy6ApiGatewayList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAccessproxy6ApiGateway[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObjectFirewallAccessproxy6ApiGatewayOutputReference {
    return new ObjectFirewallAccessproxy6ApiGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAccessproxy6ApiGateway6Quic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ack_delay_exponent ObjectFirewallAccessproxy6#ack_delay_exponent}
  */
  readonly ackDelayExponent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#active_connection_id_limit ObjectFirewallAccessproxy6#active_connection_id_limit}
  */
  readonly activeConnectionIdLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#active_migration ObjectFirewallAccessproxy6#active_migration}
  */
  readonly activeMigration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#grease_quic_bit ObjectFirewallAccessproxy6#grease_quic_bit}
  */
  readonly greaseQuicBit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#max_ack_delay ObjectFirewallAccessproxy6#max_ack_delay}
  */
  readonly maxAckDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#max_datagram_frame_size ObjectFirewallAccessproxy6#max_datagram_frame_size}
  */
  readonly maxDatagramFrameSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#max_idle_timeout ObjectFirewallAccessproxy6#max_idle_timeout}
  */
  readonly maxIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#max_udp_payload_size ObjectFirewallAccessproxy6#max_udp_payload_size}
  */
  readonly maxUdpPayloadSize?: number;
}

export function objectFirewallAccessproxy6ApiGateway6QuicToTerraform(struct?: ObjectFirewallAccessproxy6ApiGateway6QuicOutputReference | ObjectFirewallAccessproxy6ApiGateway6Quic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_delay_exponent: cdktf.numberToTerraform(struct!.ackDelayExponent),
    active_connection_id_limit: cdktf.numberToTerraform(struct!.activeConnectionIdLimit),
    active_migration: cdktf.stringToTerraform(struct!.activeMigration),
    grease_quic_bit: cdktf.stringToTerraform(struct!.greaseQuicBit),
    max_ack_delay: cdktf.numberToTerraform(struct!.maxAckDelay),
    max_datagram_frame_size: cdktf.numberToTerraform(struct!.maxDatagramFrameSize),
    max_idle_timeout: cdktf.numberToTerraform(struct!.maxIdleTimeout),
    max_udp_payload_size: cdktf.numberToTerraform(struct!.maxUdpPayloadSize),
  }
}


export function objectFirewallAccessproxy6ApiGateway6QuicToHclTerraform(struct?: ObjectFirewallAccessproxy6ApiGateway6QuicOutputReference | ObjectFirewallAccessproxy6ApiGateway6Quic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_delay_exponent: {
      value: cdktf.numberToHclTerraform(struct!.ackDelayExponent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_connection_id_limit: {
      value: cdktf.numberToHclTerraform(struct!.activeConnectionIdLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_migration: {
      value: cdktf.stringToHclTerraform(struct!.activeMigration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grease_quic_bit: {
      value: cdktf.stringToHclTerraform(struct!.greaseQuicBit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ack_delay: {
      value: cdktf.numberToHclTerraform(struct!.maxAckDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_datagram_frame_size: {
      value: cdktf.numberToHclTerraform(struct!.maxDatagramFrameSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.maxIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_udp_payload_size: {
      value: cdktf.numberToHclTerraform(struct!.maxUdpPayloadSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAccessproxy6ApiGateway6QuicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ObjectFirewallAccessproxy6ApiGateway6Quic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackDelayExponent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackDelayExponent = this._ackDelayExponent;
    }
    if (this._activeConnectionIdLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeConnectionIdLimit = this._activeConnectionIdLimit;
    }
    if (this._activeMigration !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeMigration = this._activeMigration;
    }
    if (this._greaseQuicBit !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaseQuicBit = this._greaseQuicBit;
    }
    if (this._maxAckDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAckDelay = this._maxAckDelay;
    }
    if (this._maxDatagramFrameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDatagramFrameSize = this._maxDatagramFrameSize;
    }
    if (this._maxIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdleTimeout = this._maxIdleTimeout;
    }
    if (this._maxUdpPayloadSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUdpPayloadSize = this._maxUdpPayloadSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAccessproxy6ApiGateway6Quic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackDelayExponent = undefined;
      this._activeConnectionIdLimit = undefined;
      this._activeMigration = undefined;
      this._greaseQuicBit = undefined;
      this._maxAckDelay = undefined;
      this._maxDatagramFrameSize = undefined;
      this._maxIdleTimeout = undefined;
      this._maxUdpPayloadSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackDelayExponent = value.ackDelayExponent;
      this._activeConnectionIdLimit = value.activeConnectionIdLimit;
      this._activeMigration = value.activeMigration;
      this._greaseQuicBit = value.greaseQuicBit;
      this._maxAckDelay = value.maxAckDelay;
      this._maxDatagramFrameSize = value.maxDatagramFrameSize;
      this._maxIdleTimeout = value.maxIdleTimeout;
      this._maxUdpPayloadSize = value.maxUdpPayloadSize;
    }
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
}
export interface ObjectFirewallAccessproxy6ApiGateway6Realservers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#addr_type ObjectFirewallAccessproxy6#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#address ObjectFirewallAccessproxy6#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#domain ObjectFirewallAccessproxy6#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#external_auth ObjectFirewallAccessproxy6#external_auth}
  */
  readonly externalAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#health_check ObjectFirewallAccessproxy6#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#health_check_proto ObjectFirewallAccessproxy6#health_check_proto}
  */
  readonly healthCheckProto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#holddown_interval ObjectFirewallAccessproxy6#holddown_interval}
  */
  readonly holddownInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_host ObjectFirewallAccessproxy6#http_host}
  */
  readonly httpHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#id ObjectFirewallAccessproxy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ip ObjectFirewallAccessproxy6#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#mappedport ObjectFirewallAccessproxy6#mappedport}
  */
  readonly mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#port ObjectFirewallAccessproxy6#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssh_client_cert ObjectFirewallAccessproxy6#ssh_client_cert}
  */
  readonly sshClientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssh_host_key ObjectFirewallAccessproxy6#ssh_host_key}
  */
  readonly sshHostKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssh_host_key_validation ObjectFirewallAccessproxy6#ssh_host_key_validation}
  */
  readonly sshHostKeyValidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#status ObjectFirewallAccessproxy6#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#translate_host ObjectFirewallAccessproxy6#translate_host}
  */
  readonly translateHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#tunnel_encryption ObjectFirewallAccessproxy6#tunnel_encryption}
  */
  readonly tunnelEncryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#type ObjectFirewallAccessproxy6#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#verify_cert ObjectFirewallAccessproxy6#verify_cert}
  */
  readonly verifyCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#weight ObjectFirewallAccessproxy6#weight}
  */
  readonly weight?: number;
}

export function objectFirewallAccessproxy6ApiGateway6RealserversToTerraform(struct?: ObjectFirewallAccessproxy6ApiGateway6Realservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_type: cdktf.stringToTerraform(struct!.addrType),
    address: cdktf.stringToTerraform(struct!.address),
    domain: cdktf.stringToTerraform(struct!.domain),
    external_auth: cdktf.stringToTerraform(struct!.externalAuth),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    health_check_proto: cdktf.stringToTerraform(struct!.healthCheckProto),
    holddown_interval: cdktf.stringToTerraform(struct!.holddownInterval),
    http_host: cdktf.stringToTerraform(struct!.httpHost),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    mappedport: cdktf.stringToTerraform(struct!.mappedport),
    port: cdktf.numberToTerraform(struct!.port),
    ssh_client_cert: cdktf.stringToTerraform(struct!.sshClientCert),
    ssh_host_key: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshHostKey),
    ssh_host_key_validation: cdktf.stringToTerraform(struct!.sshHostKeyValidation),
    status: cdktf.stringToTerraform(struct!.status),
    translate_host: cdktf.stringToTerraform(struct!.translateHost),
    tunnel_encryption: cdktf.stringToTerraform(struct!.tunnelEncryption),
    type: cdktf.stringToTerraform(struct!.type),
    verify_cert: cdktf.stringToTerraform(struct!.verifyCert),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function objectFirewallAccessproxy6ApiGateway6RealserversToHclTerraform(struct?: ObjectFirewallAccessproxy6ApiGateway6Realservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_type: {
      value: cdktf.stringToHclTerraform(struct!.addrType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_auth: {
      value: cdktf.stringToHclTerraform(struct!.externalAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: cdktf.stringToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_proto: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckProto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    holddown_interval: {
      value: cdktf.stringToHclTerraform(struct!.holddownInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_host: {
      value: cdktf.stringToHclTerraform(struct!.httpHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mappedport: {
      value: cdktf.stringToHclTerraform(struct!.mappedport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_client_cert: {
      value: cdktf.stringToHclTerraform(struct!.sshClientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_host_key: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshHostKey),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ssh_host_key_validation: {
      value: cdktf.stringToHclTerraform(struct!.sshHostKeyValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    translate_host: {
      value: cdktf.stringToHclTerraform(struct!.translateHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_encryption: {
      value: cdktf.stringToHclTerraform(struct!.tunnelEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_cert: {
      value: cdktf.stringToHclTerraform(struct!.verifyCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAccessproxy6ApiGateway6RealserversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ObjectFirewallAccessproxy6ApiGateway6Realservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrType = this._addrType;
    }
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._externalAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAuth = this._externalAuth;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._healthCheckProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckProto = this._healthCheckProto;
    }
    if (this._holddownInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.holddownInterval = this._holddownInterval;
    }
    if (this._httpHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHost = this._httpHost;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mappedport !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedport = this._mappedport;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sshClientCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshClientCert = this._sshClientCert;
    }
    if (this._sshHostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshHostKey = this._sshHostKey;
    }
    if (this._sshHostKeyValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshHostKeyValidation = this._sshHostKeyValidation;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._translateHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.translateHost = this._translateHost;
    }
    if (this._tunnelEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelEncryption = this._tunnelEncryption;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._verifyCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyCert = this._verifyCert;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAccessproxy6ApiGateway6Realservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrType = undefined;
      this._address = undefined;
      this._domain = undefined;
      this._externalAuth = undefined;
      this._healthCheck = undefined;
      this._healthCheckProto = undefined;
      this._holddownInterval = undefined;
      this._httpHost = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._mappedport = undefined;
      this._port = undefined;
      this._sshClientCert = undefined;
      this._sshHostKey = undefined;
      this._sshHostKeyValidation = undefined;
      this._status = undefined;
      this._translateHost = undefined;
      this._tunnelEncryption = undefined;
      this._type = undefined;
      this._verifyCert = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrType = value.addrType;
      this._address = value.address;
      this._domain = value.domain;
      this._externalAuth = value.externalAuth;
      this._healthCheck = value.healthCheck;
      this._healthCheckProto = value.healthCheckProto;
      this._holddownInterval = value.holddownInterval;
      this._httpHost = value.httpHost;
      this._id = value.id;
      this._ip = value.ip;
      this._mappedport = value.mappedport;
      this._port = value.port;
      this._sshClientCert = value.sshClientCert;
      this._sshHostKey = value.sshHostKey;
      this._sshHostKeyValidation = value.sshHostKeyValidation;
      this._status = value.status;
      this._translateHost = value.translateHost;
      this._tunnelEncryption = value.tunnelEncryption;
      this._type = value.type;
      this._verifyCert = value.verifyCert;
      this._weight = value.weight;
    }
  }

  // addr_type - computed: true, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // external_auth - computed: true, optional: true, required: false
  private _externalAuth?: string; 
  public get externalAuth() {
    return this.getStringAttribute('external_auth');
  }
  public set externalAuth(value: string) {
    this._externalAuth = value;
  }
  public resetExternalAuth() {
    this._externalAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthInput() {
    return this._externalAuth;
  }

  // health_check - computed: true, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_proto - computed: true, optional: true, required: false
  private _healthCheckProto?: string; 
  public get healthCheckProto() {
    return this.getStringAttribute('health_check_proto');
  }
  public set healthCheckProto(value: string) {
    this._healthCheckProto = value;
  }
  public resetHealthCheckProto() {
    this._healthCheckProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckProtoInput() {
    return this._healthCheckProto;
  }

  // holddown_interval - computed: true, optional: true, required: false
  private _holddownInterval?: string; 
  public get holddownInterval() {
    return this.getStringAttribute('holddown_interval');
  }
  public set holddownInterval(value: string) {
    this._holddownInterval = value;
  }
  public resetHolddownInterval() {
    this._holddownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownIntervalInput() {
    return this._holddownInterval;
  }

  // http_host - computed: false, optional: true, required: false
  private _httpHost?: string; 
  public get httpHost() {
    return this.getStringAttribute('http_host');
  }
  public set httpHost(value: string) {
    this._httpHost = value;
  }
  public resetHttpHost() {
    this._httpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHostInput() {
    return this._httpHost;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mappedport - computed: false, optional: true, required: false
  private _mappedport?: string; 
  public get mappedport() {
    return this.getStringAttribute('mappedport');
  }
  public set mappedport(value: string) {
    this._mappedport = value;
  }
  public resetMappedport() {
    this._mappedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedportInput() {
    return this._mappedport;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssh_client_cert - computed: false, optional: true, required: false
  private _sshClientCert?: string; 
  public get sshClientCert() {
    return this.getStringAttribute('ssh_client_cert');
  }
  public set sshClientCert(value: string) {
    this._sshClientCert = value;
  }
  public resetSshClientCert() {
    this._sshClientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshClientCertInput() {
    return this._sshClientCert;
  }

  // ssh_host_key - computed: true, optional: true, required: false
  private _sshHostKey?: string[]; 
  public get sshHostKey() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_host_key'));
  }
  public set sshHostKey(value: string[]) {
    this._sshHostKey = value;
  }
  public resetSshHostKey() {
    this._sshHostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostKeyInput() {
    return this._sshHostKey;
  }

  // ssh_host_key_validation - computed: true, optional: true, required: false
  private _sshHostKeyValidation?: string; 
  public get sshHostKeyValidation() {
    return this.getStringAttribute('ssh_host_key_validation');
  }
  public set sshHostKeyValidation(value: string) {
    this._sshHostKeyValidation = value;
  }
  public resetSshHostKeyValidation() {
    this._sshHostKeyValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshHostKeyValidationInput() {
    return this._sshHostKeyValidation;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // translate_host - computed: true, optional: true, required: false
  private _translateHost?: string; 
  public get translateHost() {
    return this.getStringAttribute('translate_host');
  }
  public set translateHost(value: string) {
    this._translateHost = value;
  }
  public resetTranslateHost() {
    this._translateHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translateHostInput() {
    return this._translateHost;
  }

  // tunnel_encryption - computed: true, optional: true, required: false
  private _tunnelEncryption?: string; 
  public get tunnelEncryption() {
    return this.getStringAttribute('tunnel_encryption');
  }
  public set tunnelEncryption(value: string) {
    this._tunnelEncryption = value;
  }
  public resetTunnelEncryption() {
    this._tunnelEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelEncryptionInput() {
    return this._tunnelEncryption;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // verify_cert - computed: false, optional: true, required: false
  private _verifyCert?: string; 
  public get verifyCert() {
    return this.getStringAttribute('verify_cert');
  }
  public set verifyCert(value: string) {
    this._verifyCert = value;
  }
  public resetVerifyCert() {
    this._verifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertInput() {
    return this._verifyCert;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ObjectFirewallAccessproxy6ApiGateway6RealserversList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAccessproxy6ApiGateway6Realservers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObjectFirewallAccessproxy6ApiGateway6RealserversOutputReference {
    return new ObjectFirewallAccessproxy6ApiGateway6RealserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAccessproxy6ApiGateway6SslCipherSuites {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#cipher ObjectFirewallAccessproxy6#cipher}
  */
  readonly cipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#priority ObjectFirewallAccessproxy6#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#versions ObjectFirewallAccessproxy6#versions}
  */
  readonly versions?: string[];
}

export function objectFirewallAccessproxy6ApiGateway6SslCipherSuitesToTerraform(struct?: ObjectFirewallAccessproxy6ApiGateway6SslCipherSuites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher: cdktf.stringToTerraform(struct!.cipher),
    priority: cdktf.numberToTerraform(struct!.priority),
    versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versions),
  }
}


export function objectFirewallAccessproxy6ApiGateway6SslCipherSuitesToHclTerraform(struct?: ObjectFirewallAccessproxy6ApiGateway6SslCipherSuites | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher: {
      value: cdktf.stringToHclTerraform(struct!.cipher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.versions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAccessproxy6ApiGateway6SslCipherSuitesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ObjectFirewallAccessproxy6ApiGateway6SslCipherSuites | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipher = this._cipher;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._versions !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAccessproxy6ApiGateway6SslCipherSuites | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cipher = undefined;
      this._priority = undefined;
      this._versions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cipher = value.cipher;
      this._priority = value.priority;
      this._versions = value.versions;
    }
  }

  // cipher - computed: false, optional: true, required: false
  private _cipher?: string; 
  public get cipher() {
    return this.getStringAttribute('cipher');
  }
  public set cipher(value: string) {
    this._cipher = value;
  }
  public resetCipher() {
    this._cipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherInput() {
    return this._cipher;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // versions - computed: true, optional: true, required: false
  private _versions?: string[]; 
  public get versions() {
    return cdktf.Fn.tolist(this.getListAttribute('versions'));
  }
  public set versions(value: string[]) {
    this._versions = value;
  }
  public resetVersions() {
    this._versions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions;
  }
}

export class ObjectFirewallAccessproxy6ApiGateway6SslCipherSuitesList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAccessproxy6ApiGateway6SslCipherSuites[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObjectFirewallAccessproxy6ApiGateway6SslCipherSuitesOutputReference {
    return new ObjectFirewallAccessproxy6ApiGateway6SslCipherSuitesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectFirewallAccessproxy6ApiGateway6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#application ObjectFirewallAccessproxy6#application}
  */
  readonly application?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#h2_support ObjectFirewallAccessproxy6#h2_support}
  */
  readonly h2Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#h3_support ObjectFirewallAccessproxy6#h3_support}
  */
  readonly h3Support?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_age ObjectFirewallAccessproxy6#http_cookie_age}
  */
  readonly httpCookieAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_domain ObjectFirewallAccessproxy6#http_cookie_domain}
  */
  readonly httpCookieDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_domain_from_host ObjectFirewallAccessproxy6#http_cookie_domain_from_host}
  */
  readonly httpCookieDomainFromHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_generation ObjectFirewallAccessproxy6#http_cookie_generation}
  */
  readonly httpCookieGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_path ObjectFirewallAccessproxy6#http_cookie_path}
  */
  readonly httpCookiePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#http_cookie_share ObjectFirewallAccessproxy6#http_cookie_share}
  */
  readonly httpCookieShare?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#https_cookie_secure ObjectFirewallAccessproxy6#https_cookie_secure}
  */
  readonly httpsCookieSecure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#id ObjectFirewallAccessproxy6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ldb_method ObjectFirewallAccessproxy6#ldb_method}
  */
  readonly ldbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#persistence ObjectFirewallAccessproxy6#persistence}
  */
  readonly persistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#saml_redirect ObjectFirewallAccessproxy6#saml_redirect}
  */
  readonly samlRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#saml_server ObjectFirewallAccessproxy6#saml_server}
  */
  readonly samlServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#service ObjectFirewallAccessproxy6#service}
  */
  readonly service?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_algorithm ObjectFirewallAccessproxy6#ssl_algorithm}
  */
  readonly sslAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_dh_bits ObjectFirewallAccessproxy6#ssl_dh_bits}
  */
  readonly sslDhBits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_max_version ObjectFirewallAccessproxy6#ssl_max_version}
  */
  readonly sslMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_min_version ObjectFirewallAccessproxy6#ssl_min_version}
  */
  readonly sslMinVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_renegotiation ObjectFirewallAccessproxy6#ssl_renegotiation}
  */
  readonly sslRenegotiation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_vpn_web_portal ObjectFirewallAccessproxy6#ssl_vpn_web_portal}
  */
  readonly sslVpnWebPortal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#url_map ObjectFirewallAccessproxy6#url_map}
  */
  readonly urlMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#url_map_type ObjectFirewallAccessproxy6#url_map_type}
  */
  readonly urlMapType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#virtual_host ObjectFirewallAccessproxy6#virtual_host}
  */
  readonly virtualHost?: string;
  /**
  * quic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#quic ObjectFirewallAccessproxy6#quic}
  */
  readonly quic?: ObjectFirewallAccessproxy6ApiGateway6Quic;
  /**
  * realservers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#realservers ObjectFirewallAccessproxy6#realservers}
  */
  readonly realservers?: ObjectFirewallAccessproxy6ApiGateway6Realservers[] | cdktf.IResolvable;
  /**
  * ssl_cipher_suites block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#ssl_cipher_suites ObjectFirewallAccessproxy6#ssl_cipher_suites}
  */
  readonly sslCipherSuites?: ObjectFirewallAccessproxy6ApiGateway6SslCipherSuites[] | cdktf.IResolvable;
}

export function objectFirewallAccessproxy6ApiGateway6ToTerraform(struct?: ObjectFirewallAccessproxy6ApiGateway6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.application),
    h2_support: cdktf.stringToTerraform(struct!.h2Support),
    h3_support: cdktf.stringToTerraform(struct!.h3Support),
    http_cookie_age: cdktf.numberToTerraform(struct!.httpCookieAge),
    http_cookie_domain: cdktf.stringToTerraform(struct!.httpCookieDomain),
    http_cookie_domain_from_host: cdktf.stringToTerraform(struct!.httpCookieDomainFromHost),
    http_cookie_generation: cdktf.numberToTerraform(struct!.httpCookieGeneration),
    http_cookie_path: cdktf.stringToTerraform(struct!.httpCookiePath),
    http_cookie_share: cdktf.stringToTerraform(struct!.httpCookieShare),
    https_cookie_secure: cdktf.stringToTerraform(struct!.httpsCookieSecure),
    id: cdktf.numberToTerraform(struct!.id),
    ldb_method: cdktf.stringToTerraform(struct!.ldbMethod),
    persistence: cdktf.stringToTerraform(struct!.persistence),
    saml_redirect: cdktf.stringToTerraform(struct!.samlRedirect),
    saml_server: cdktf.stringToTerraform(struct!.samlServer),
    service: cdktf.stringToTerraform(struct!.service),
    ssl_algorithm: cdktf.stringToTerraform(struct!.sslAlgorithm),
    ssl_dh_bits: cdktf.stringToTerraform(struct!.sslDhBits),
    ssl_max_version: cdktf.stringToTerraform(struct!.sslMaxVersion),
    ssl_min_version: cdktf.stringToTerraform(struct!.sslMinVersion),
    ssl_renegotiation: cdktf.stringToTerraform(struct!.sslRenegotiation),
    ssl_vpn_web_portal: cdktf.stringToTerraform(struct!.sslVpnWebPortal),
    url_map: cdktf.stringToTerraform(struct!.urlMap),
    url_map_type: cdktf.stringToTerraform(struct!.urlMapType),
    virtual_host: cdktf.stringToTerraform(struct!.virtualHost),
    quic: objectFirewallAccessproxy6ApiGateway6QuicToTerraform(struct!.quic),
    realservers: cdktf.listMapper(objectFirewallAccessproxy6ApiGateway6RealserversToTerraform, true)(struct!.realservers),
    ssl_cipher_suites: cdktf.listMapper(objectFirewallAccessproxy6ApiGateway6SslCipherSuitesToTerraform, true)(struct!.sslCipherSuites),
  }
}


export function objectFirewallAccessproxy6ApiGateway6ToHclTerraform(struct?: ObjectFirewallAccessproxy6ApiGateway6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.application),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    h2_support: {
      value: cdktf.stringToHclTerraform(struct!.h2Support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    h3_support: {
      value: cdktf.stringToHclTerraform(struct!.h3Support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_age: {
      value: cdktf.numberToHclTerraform(struct!.httpCookieAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_cookie_domain: {
      value: cdktf.stringToHclTerraform(struct!.httpCookieDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_domain_from_host: {
      value: cdktf.stringToHclTerraform(struct!.httpCookieDomainFromHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_generation: {
      value: cdktf.numberToHclTerraform(struct!.httpCookieGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_cookie_path: {
      value: cdktf.stringToHclTerraform(struct!.httpCookiePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_cookie_share: {
      value: cdktf.stringToHclTerraform(struct!.httpCookieShare),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_cookie_secure: {
      value: cdktf.stringToHclTerraform(struct!.httpsCookieSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldb_method: {
      value: cdktf.stringToHclTerraform(struct!.ldbMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistence: {
      value: cdktf.stringToHclTerraform(struct!.persistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_redirect: {
      value: cdktf.stringToHclTerraform(struct!.samlRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_server: {
      value: cdktf.stringToHclTerraform(struct!.samlServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.sslAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_dh_bits: {
      value: cdktf.stringToHclTerraform(struct!.sslDhBits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_max_version: {
      value: cdktf.stringToHclTerraform(struct!.sslMaxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_min_version: {
      value: cdktf.stringToHclTerraform(struct!.sslMinVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_renegotiation: {
      value: cdktf.stringToHclTerraform(struct!.sslRenegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_vpn_web_portal: {
      value: cdktf.stringToHclTerraform(struct!.sslVpnWebPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_map: {
      value: cdktf.stringToHclTerraform(struct!.urlMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_map_type: {
      value: cdktf.stringToHclTerraform(struct!.urlMapType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_host: {
      value: cdktf.stringToHclTerraform(struct!.virtualHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quic: {
      value: objectFirewallAccessproxy6ApiGateway6QuicToHclTerraform(struct!.quic),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallAccessproxy6ApiGateway6QuicList",
    },
    realservers: {
      value: cdktf.listMapperHcl(objectFirewallAccessproxy6ApiGateway6RealserversToHclTerraform, true)(struct!.realservers),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallAccessproxy6ApiGateway6RealserversList",
    },
    ssl_cipher_suites: {
      value: cdktf.listMapperHcl(objectFirewallAccessproxy6ApiGateway6SslCipherSuitesToHclTerraform, true)(struct!.sslCipherSuites),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectFirewallAccessproxy6ApiGateway6SslCipherSuitesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallAccessproxy6ApiGateway6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ObjectFirewallAccessproxy6ApiGateway6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._h2Support !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2Support = this._h2Support;
    }
    if (this._h3Support !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3Support = this._h3Support;
    }
    if (this._httpCookieAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieAge = this._httpCookieAge;
    }
    if (this._httpCookieDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieDomain = this._httpCookieDomain;
    }
    if (this._httpCookieDomainFromHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieDomainFromHost = this._httpCookieDomainFromHost;
    }
    if (this._httpCookieGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieGeneration = this._httpCookieGeneration;
    }
    if (this._httpCookiePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookiePath = this._httpCookiePath;
    }
    if (this._httpCookieShare !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCookieShare = this._httpCookieShare;
    }
    if (this._httpsCookieSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsCookieSecure = this._httpsCookieSecure;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ldbMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldbMethod = this._ldbMethod;
    }
    if (this._persistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistence = this._persistence;
    }
    if (this._samlRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlRedirect = this._samlRedirect;
    }
    if (this._samlServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlServer = this._samlServer;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._sslAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslAlgorithm = this._sslAlgorithm;
    }
    if (this._sslDhBits !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslDhBits = this._sslDhBits;
    }
    if (this._sslMaxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMaxVersion = this._sslMaxVersion;
    }
    if (this._sslMinVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslMinVersion = this._sslMinVersion;
    }
    if (this._sslRenegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslRenegotiation = this._sslRenegotiation;
    }
    if (this._sslVpnWebPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVpnWebPortal = this._sslVpnWebPortal;
    }
    if (this._urlMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlMap = this._urlMap;
    }
    if (this._urlMapType !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlMapType = this._urlMapType;
    }
    if (this._virtualHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualHost = this._virtualHost;
    }
    if (this._quic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic?.internalValue;
    }
    if (this._realservers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realservers = this._realservers?.internalValue;
    }
    if (this._sslCipherSuites?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCipherSuites = this._sslCipherSuites?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallAccessproxy6ApiGateway6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._h2Support = undefined;
      this._h3Support = undefined;
      this._httpCookieAge = undefined;
      this._httpCookieDomain = undefined;
      this._httpCookieDomainFromHost = undefined;
      this._httpCookieGeneration = undefined;
      this._httpCookiePath = undefined;
      this._httpCookieShare = undefined;
      this._httpsCookieSecure = undefined;
      this._id = undefined;
      this._ldbMethod = undefined;
      this._persistence = undefined;
      this._samlRedirect = undefined;
      this._samlServer = undefined;
      this._service = undefined;
      this._sslAlgorithm = undefined;
      this._sslDhBits = undefined;
      this._sslMaxVersion = undefined;
      this._sslMinVersion = undefined;
      this._sslRenegotiation = undefined;
      this._sslVpnWebPortal = undefined;
      this._urlMap = undefined;
      this._urlMapType = undefined;
      this._virtualHost = undefined;
      this._quic.internalValue = undefined;
      this._realservers.internalValue = undefined;
      this._sslCipherSuites.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._h2Support = value.h2Support;
      this._h3Support = value.h3Support;
      this._httpCookieAge = value.httpCookieAge;
      this._httpCookieDomain = value.httpCookieDomain;
      this._httpCookieDomainFromHost = value.httpCookieDomainFromHost;
      this._httpCookieGeneration = value.httpCookieGeneration;
      this._httpCookiePath = value.httpCookiePath;
      this._httpCookieShare = value.httpCookieShare;
      this._httpsCookieSecure = value.httpsCookieSecure;
      this._id = value.id;
      this._ldbMethod = value.ldbMethod;
      this._persistence = value.persistence;
      this._samlRedirect = value.samlRedirect;
      this._samlServer = value.samlServer;
      this._service = value.service;
      this._sslAlgorithm = value.sslAlgorithm;
      this._sslDhBits = value.sslDhBits;
      this._sslMaxVersion = value.sslMaxVersion;
      this._sslMinVersion = value.sslMinVersion;
      this._sslRenegotiation = value.sslRenegotiation;
      this._sslVpnWebPortal = value.sslVpnWebPortal;
      this._urlMap = value.urlMap;
      this._urlMapType = value.urlMapType;
      this._virtualHost = value.virtualHost;
      this._quic.internalValue = value.quic;
      this._realservers.internalValue = value.realservers;
      this._sslCipherSuites.internalValue = value.sslCipherSuites;
    }
  }

  // application - computed: true, optional: true, required: false
  private _application?: string[]; 
  public get application() {
    return cdktf.Fn.tolist(this.getListAttribute('application'));
  }
  public set application(value: string[]) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // h2_support - computed: true, optional: true, required: false
  private _h2Support?: string; 
  public get h2Support() {
    return this.getStringAttribute('h2_support');
  }
  public set h2Support(value: string) {
    this._h2Support = value;
  }
  public resetH2Support() {
    this._h2Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2SupportInput() {
    return this._h2Support;
  }

  // h3_support - computed: true, optional: true, required: false
  private _h3Support?: string; 
  public get h3Support() {
    return this.getStringAttribute('h3_support');
  }
  public set h3Support(value: string) {
    this._h3Support = value;
  }
  public resetH3Support() {
    this._h3Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3SupportInput() {
    return this._h3Support;
  }

  // http_cookie_age - computed: true, optional: true, required: false
  private _httpCookieAge?: number; 
  public get httpCookieAge() {
    return this.getNumberAttribute('http_cookie_age');
  }
  public set httpCookieAge(value: number) {
    this._httpCookieAge = value;
  }
  public resetHttpCookieAge() {
    this._httpCookieAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieAgeInput() {
    return this._httpCookieAge;
  }

  // http_cookie_domain - computed: false, optional: true, required: false
  private _httpCookieDomain?: string; 
  public get httpCookieDomain() {
    return this.getStringAttribute('http_cookie_domain');
  }
  public set httpCookieDomain(value: string) {
    this._httpCookieDomain = value;
  }
  public resetHttpCookieDomain() {
    this._httpCookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieDomainInput() {
    return this._httpCookieDomain;
  }

  // http_cookie_domain_from_host - computed: true, optional: true, required: false
  private _httpCookieDomainFromHost?: string; 
  public get httpCookieDomainFromHost() {
    return this.getStringAttribute('http_cookie_domain_from_host');
  }
  public set httpCookieDomainFromHost(value: string) {
    this._httpCookieDomainFromHost = value;
  }
  public resetHttpCookieDomainFromHost() {
    this._httpCookieDomainFromHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieDomainFromHostInput() {
    return this._httpCookieDomainFromHost;
  }

  // http_cookie_generation - computed: true, optional: true, required: false
  private _httpCookieGeneration?: number; 
  public get httpCookieGeneration() {
    return this.getNumberAttribute('http_cookie_generation');
  }
  public set httpCookieGeneration(value: number) {
    this._httpCookieGeneration = value;
  }
  public resetHttpCookieGeneration() {
    this._httpCookieGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieGenerationInput() {
    return this._httpCookieGeneration;
  }

  // http_cookie_path - computed: false, optional: true, required: false
  private _httpCookiePath?: string; 
  public get httpCookiePath() {
    return this.getStringAttribute('http_cookie_path');
  }
  public set httpCookiePath(value: string) {
    this._httpCookiePath = value;
  }
  public resetHttpCookiePath() {
    this._httpCookiePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookiePathInput() {
    return this._httpCookiePath;
  }

  // http_cookie_share - computed: true, optional: true, required: false
  private _httpCookieShare?: string; 
  public get httpCookieShare() {
    return this.getStringAttribute('http_cookie_share');
  }
  public set httpCookieShare(value: string) {
    this._httpCookieShare = value;
  }
  public resetHttpCookieShare() {
    this._httpCookieShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCookieShareInput() {
    return this._httpCookieShare;
  }

  // https_cookie_secure - computed: true, optional: true, required: false
  private _httpsCookieSecure?: string; 
  public get httpsCookieSecure() {
    return this.getStringAttribute('https_cookie_secure');
  }
  public set httpsCookieSecure(value: string) {
    this._httpsCookieSecure = value;
  }
  public resetHttpsCookieSecure() {
    this._httpsCookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsCookieSecureInput() {
    return this._httpsCookieSecure;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ldb_method - computed: true, optional: true, required: false
  private _ldbMethod?: string; 
  public get ldbMethod() {
    return this.getStringAttribute('ldb_method');
  }
  public set ldbMethod(value: string) {
    this._ldbMethod = value;
  }
  public resetLdbMethod() {
    this._ldbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldbMethodInput() {
    return this._ldbMethod;
  }

  // persistence - computed: true, optional: true, required: false
  private _persistence?: string; 
  public get persistence() {
    return this.getStringAttribute('persistence');
  }
  public set persistence(value: string) {
    this._persistence = value;
  }
  public resetPersistence() {
    this._persistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceInput() {
    return this._persistence;
  }

  // saml_redirect - computed: true, optional: true, required: false
  private _samlRedirect?: string; 
  public get samlRedirect() {
    return this.getStringAttribute('saml_redirect');
  }
  public set samlRedirect(value: string) {
    this._samlRedirect = value;
  }
  public resetSamlRedirect() {
    this._samlRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlRedirectInput() {
    return this._samlRedirect;
  }

  // saml_server - computed: false, optional: true, required: false
  private _samlServer?: string; 
  public get samlServer() {
    return this.getStringAttribute('saml_server');
  }
  public set samlServer(value: string) {
    this._samlServer = value;
  }
  public resetSamlServer() {
    this._samlServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlServerInput() {
    return this._samlServer;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // ssl_algorithm - computed: true, optional: true, required: false
  private _sslAlgorithm?: string; 
  public get sslAlgorithm() {
    return this.getStringAttribute('ssl_algorithm');
  }
  public set sslAlgorithm(value: string) {
    this._sslAlgorithm = value;
  }
  public resetSslAlgorithm() {
    this._sslAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslAlgorithmInput() {
    return this._sslAlgorithm;
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

  // ssl_max_version - computed: false, optional: true, required: false
  private _sslMaxVersion?: string; 
  public get sslMaxVersion() {
    return this.getStringAttribute('ssl_max_version');
  }
  public set sslMaxVersion(value: string) {
    this._sslMaxVersion = value;
  }
  public resetSslMaxVersion() {
    this._sslMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMaxVersionInput() {
    return this._sslMaxVersion;
  }

  // ssl_min_version - computed: false, optional: true, required: false
  private _sslMinVersion?: string; 
  public get sslMinVersion() {
    return this.getStringAttribute('ssl_min_version');
  }
  public set sslMinVersion(value: string) {
    this._sslMinVersion = value;
  }
  public resetSslMinVersion() {
    this._sslMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMinVersionInput() {
    return this._sslMinVersion;
  }

  // ssl_renegotiation - computed: true, optional: true, required: false
  private _sslRenegotiation?: string; 
  public get sslRenegotiation() {
    return this.getStringAttribute('ssl_renegotiation');
  }
  public set sslRenegotiation(value: string) {
    this._sslRenegotiation = value;
  }
  public resetSslRenegotiation() {
    this._sslRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRenegotiationInput() {
    return this._sslRenegotiation;
  }

  // ssl_vpn_web_portal - computed: false, optional: true, required: false
  private _sslVpnWebPortal?: string; 
  public get sslVpnWebPortal() {
    return this.getStringAttribute('ssl_vpn_web_portal');
  }
  public set sslVpnWebPortal(value: string) {
    this._sslVpnWebPortal = value;
  }
  public resetSslVpnWebPortal() {
    this._sslVpnWebPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnWebPortalInput() {
    return this._sslVpnWebPortal;
  }

  // url_map - computed: true, optional: true, required: false
  private _urlMap?: string; 
  public get urlMap() {
    return this.getStringAttribute('url_map');
  }
  public set urlMap(value: string) {
    this._urlMap = value;
  }
  public resetUrlMap() {
    this._urlMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMapInput() {
    return this._urlMap;
  }

  // url_map_type - computed: true, optional: true, required: false
  private _urlMapType?: string; 
  public get urlMapType() {
    return this.getStringAttribute('url_map_type');
  }
  public set urlMapType(value: string) {
    this._urlMapType = value;
  }
  public resetUrlMapType() {
    this._urlMapType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMapTypeInput() {
    return this._urlMapType;
  }

  // virtual_host - computed: false, optional: true, required: false
  private _virtualHost?: string; 
  public get virtualHost() {
    return this.getStringAttribute('virtual_host');
  }
  public set virtualHost(value: string) {
    this._virtualHost = value;
  }
  public resetVirtualHost() {
    this._virtualHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostInput() {
    return this._virtualHost;
  }

  // quic - computed: false, optional: true, required: false
  private _quic = new ObjectFirewallAccessproxy6ApiGateway6QuicOutputReference(this, "quic");
  public get quic() {
    return this._quic;
  }
  public putQuic(value: ObjectFirewallAccessproxy6ApiGateway6Quic) {
    this._quic.internalValue = value;
  }
  public resetQuic() {
    this._quic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic.internalValue;
  }

  // realservers - computed: false, optional: true, required: false
  private _realservers = new ObjectFirewallAccessproxy6ApiGateway6RealserversList(this, "realservers", false);
  public get realservers() {
    return this._realservers;
  }
  public putRealservers(value: ObjectFirewallAccessproxy6ApiGateway6Realservers[] | cdktf.IResolvable) {
    this._realservers.internalValue = value;
  }
  public resetRealservers() {
    this._realservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realserversInput() {
    return this._realservers.internalValue;
  }

  // ssl_cipher_suites - computed: false, optional: true, required: false
  private _sslCipherSuites = new ObjectFirewallAccessproxy6ApiGateway6SslCipherSuitesList(this, "ssl_cipher_suites", false);
  public get sslCipherSuites() {
    return this._sslCipherSuites;
  }
  public putSslCipherSuites(value: ObjectFirewallAccessproxy6ApiGateway6SslCipherSuites[] | cdktf.IResolvable) {
    this._sslCipherSuites.internalValue = value;
  }
  public resetSslCipherSuites() {
    this._sslCipherSuites.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherSuitesInput() {
    return this._sslCipherSuites.internalValue;
  }
}

export class ObjectFirewallAccessproxy6ApiGateway6List extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallAccessproxy6ApiGateway6[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ObjectFirewallAccessproxy6ApiGateway6OutputReference {
    return new ObjectFirewallAccessproxy6ApiGateway6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6 fortimanager_object_firewall_accessproxy6}
*/
export class ObjectFirewallAccessproxy6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_accessproxy6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallAccessproxy6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallAccessproxy6 to import
  * @param importFromId The id of the existing ObjectFirewallAccessproxy6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallAccessproxy6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_accessproxy6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_accessproxy6 fortimanager_object_firewall_accessproxy6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallAccessproxy6Config = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallAccessproxy6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_accessproxy6',
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
    this._addVhostDomainToDnsdb = config.addVhostDomainToDnsdb;
    this._adom = config.adom;
    this._authPortal = config.authPortal;
    this._authVirtualHost = config.authVirtualHost;
    this._clientCert = config.clientCert;
    this._decryptedTrafficMirror = config.decryptedTrafficMirror;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emptyCertAction = config.emptyCertAction;
    this._httpSupportedMaxVersion = config.httpSupportedMaxVersion;
    this._id = config.id;
    this._logBlockedTraffic = config.logBlockedTraffic;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._svrPoolMultiplex = config.svrPoolMultiplex;
    this._svrPoolServerMaxConcurrentRequest = config.svrPoolServerMaxConcurrentRequest;
    this._svrPoolServerMaxRequest = config.svrPoolServerMaxRequest;
    this._svrPoolTtl = config.svrPoolTtl;
    this._userAgentDetect = config.userAgentDetect;
    this._vip = config.vip;
    this._apiGateway.internalValue = config.apiGateway;
    this._apiGateway6.internalValue = config.apiGateway6;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_vhost_domain_to_dnsdb - computed: true, optional: true, required: false
  private _addVhostDomainToDnsdb?: string; 
  public get addVhostDomainToDnsdb() {
    return this.getStringAttribute('add_vhost_domain_to_dnsdb');
  }
  public set addVhostDomainToDnsdb(value: string) {
    this._addVhostDomainToDnsdb = value;
  }
  public resetAddVhostDomainToDnsdb() {
    this._addVhostDomainToDnsdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addVhostDomainToDnsdbInput() {
    return this._addVhostDomainToDnsdb;
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

  // auth_portal - computed: true, optional: true, required: false
  private _authPortal?: string; 
  public get authPortal() {
    return this.getStringAttribute('auth_portal');
  }
  public set authPortal(value: string) {
    this._authPortal = value;
  }
  public resetAuthPortal() {
    this._authPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPortalInput() {
    return this._authPortal;
  }

  // auth_virtual_host - computed: false, optional: true, required: false
  private _authVirtualHost?: string; 
  public get authVirtualHost() {
    return this.getStringAttribute('auth_virtual_host');
  }
  public set authVirtualHost(value: string) {
    this._authVirtualHost = value;
  }
  public resetAuthVirtualHost() {
    this._authVirtualHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authVirtualHostInput() {
    return this._authVirtualHost;
  }

  // client_cert - computed: true, optional: true, required: false
  private _clientCert?: string; 
  public get clientCert() {
    return this.getStringAttribute('client_cert');
  }
  public set clientCert(value: string) {
    this._clientCert = value;
  }
  public resetClientCert() {
    this._clientCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertInput() {
    return this._clientCert;
  }

  // decrypted_traffic_mirror - computed: false, optional: true, required: false
  private _decryptedTrafficMirror?: string; 
  public get decryptedTrafficMirror() {
    return this.getStringAttribute('decrypted_traffic_mirror');
  }
  public set decryptedTrafficMirror(value: string) {
    this._decryptedTrafficMirror = value;
  }
  public resetDecryptedTrafficMirror() {
    this._decryptedTrafficMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptedTrafficMirrorInput() {
    return this._decryptedTrafficMirror;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // empty_cert_action - computed: true, optional: true, required: false
  private _emptyCertAction?: string; 
  public get emptyCertAction() {
    return this.getStringAttribute('empty_cert_action');
  }
  public set emptyCertAction(value: string) {
    this._emptyCertAction = value;
  }
  public resetEmptyCertAction() {
    this._emptyCertAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyCertActionInput() {
    return this._emptyCertAction;
  }

  // http_supported_max_version - computed: true, optional: true, required: false
  private _httpSupportedMaxVersion?: string; 
  public get httpSupportedMaxVersion() {
    return this.getStringAttribute('http_supported_max_version');
  }
  public set httpSupportedMaxVersion(value: string) {
    this._httpSupportedMaxVersion = value;
  }
  public resetHttpSupportedMaxVersion() {
    this._httpSupportedMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSupportedMaxVersionInput() {
    return this._httpSupportedMaxVersion;
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

  // log_blocked_traffic - computed: true, optional: true, required: false
  private _logBlockedTraffic?: string; 
  public get logBlockedTraffic() {
    return this.getStringAttribute('log_blocked_traffic');
  }
  public set logBlockedTraffic(value: string) {
    this._logBlockedTraffic = value;
  }
  public resetLogBlockedTraffic() {
    this._logBlockedTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBlockedTrafficInput() {
    return this._logBlockedTraffic;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // svr_pool_multiplex - computed: true, optional: true, required: false
  private _svrPoolMultiplex?: string; 
  public get svrPoolMultiplex() {
    return this.getStringAttribute('svr_pool_multiplex');
  }
  public set svrPoolMultiplex(value: string) {
    this._svrPoolMultiplex = value;
  }
  public resetSvrPoolMultiplex() {
    this._svrPoolMultiplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrPoolMultiplexInput() {
    return this._svrPoolMultiplex;
  }

  // svr_pool_server_max_concurrent_request - computed: false, optional: true, required: false
  private _svrPoolServerMaxConcurrentRequest?: number; 
  public get svrPoolServerMaxConcurrentRequest() {
    return this.getNumberAttribute('svr_pool_server_max_concurrent_request');
  }
  public set svrPoolServerMaxConcurrentRequest(value: number) {
    this._svrPoolServerMaxConcurrentRequest = value;
  }
  public resetSvrPoolServerMaxConcurrentRequest() {
    this._svrPoolServerMaxConcurrentRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrPoolServerMaxConcurrentRequestInput() {
    return this._svrPoolServerMaxConcurrentRequest;
  }

  // svr_pool_server_max_request - computed: false, optional: true, required: false
  private _svrPoolServerMaxRequest?: number; 
  public get svrPoolServerMaxRequest() {
    return this.getNumberAttribute('svr_pool_server_max_request');
  }
  public set svrPoolServerMaxRequest(value: number) {
    this._svrPoolServerMaxRequest = value;
  }
  public resetSvrPoolServerMaxRequest() {
    this._svrPoolServerMaxRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrPoolServerMaxRequestInput() {
    return this._svrPoolServerMaxRequest;
  }

  // svr_pool_ttl - computed: true, optional: true, required: false
  private _svrPoolTtl?: number; 
  public get svrPoolTtl() {
    return this.getNumberAttribute('svr_pool_ttl');
  }
  public set svrPoolTtl(value: number) {
    this._svrPoolTtl = value;
  }
  public resetSvrPoolTtl() {
    this._svrPoolTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrPoolTtlInput() {
    return this._svrPoolTtl;
  }

  // user_agent_detect - computed: true, optional: true, required: false
  private _userAgentDetect?: string; 
  public get userAgentDetect() {
    return this.getStringAttribute('user_agent_detect');
  }
  public set userAgentDetect(value: string) {
    this._userAgentDetect = value;
  }
  public resetUserAgentDetect() {
    this._userAgentDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentDetectInput() {
    return this._userAgentDetect;
  }

  // vip - computed: false, optional: true, required: false
  private _vip?: string; 
  public get vip() {
    return this.getStringAttribute('vip');
  }
  public set vip(value: string) {
    this._vip = value;
  }
  public resetVip() {
    this._vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipInput() {
    return this._vip;
  }

  // api_gateway - computed: false, optional: true, required: false
  private _apiGateway = new ObjectFirewallAccessproxy6ApiGatewayList(this, "api_gateway", false);
  public get apiGateway() {
    return this._apiGateway;
  }
  public putApiGateway(value: ObjectFirewallAccessproxy6ApiGateway[] | cdktf.IResolvable) {
    this._apiGateway.internalValue = value;
  }
  public resetApiGateway() {
    this._apiGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayInput() {
    return this._apiGateway.internalValue;
  }

  // api_gateway6 - computed: false, optional: true, required: false
  private _apiGateway6 = new ObjectFirewallAccessproxy6ApiGateway6List(this, "api_gateway6", false);
  public get apiGateway6() {
    return this._apiGateway6;
  }
  public putApiGateway6(value: ObjectFirewallAccessproxy6ApiGateway6[] | cdktf.IResolvable) {
    this._apiGateway6.internalValue = value;
  }
  public resetApiGateway6() {
    this._apiGateway6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGateway6Input() {
    return this._apiGateway6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_vhost_domain_to_dnsdb: cdktf.stringToTerraform(this._addVhostDomainToDnsdb),
      adom: cdktf.stringToTerraform(this._adom),
      auth_portal: cdktf.stringToTerraform(this._authPortal),
      auth_virtual_host: cdktf.stringToTerraform(this._authVirtualHost),
      client_cert: cdktf.stringToTerraform(this._clientCert),
      decrypted_traffic_mirror: cdktf.stringToTerraform(this._decryptedTrafficMirror),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      empty_cert_action: cdktf.stringToTerraform(this._emptyCertAction),
      http_supported_max_version: cdktf.stringToTerraform(this._httpSupportedMaxVersion),
      id: cdktf.stringToTerraform(this._id),
      log_blocked_traffic: cdktf.stringToTerraform(this._logBlockedTraffic),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      svr_pool_multiplex: cdktf.stringToTerraform(this._svrPoolMultiplex),
      svr_pool_server_max_concurrent_request: cdktf.numberToTerraform(this._svrPoolServerMaxConcurrentRequest),
      svr_pool_server_max_request: cdktf.numberToTerraform(this._svrPoolServerMaxRequest),
      svr_pool_ttl: cdktf.numberToTerraform(this._svrPoolTtl),
      user_agent_detect: cdktf.stringToTerraform(this._userAgentDetect),
      vip: cdktf.stringToTerraform(this._vip),
      api_gateway: cdktf.listMapper(objectFirewallAccessproxy6ApiGatewayToTerraform, true)(this._apiGateway.internalValue),
      api_gateway6: cdktf.listMapper(objectFirewallAccessproxy6ApiGateway6ToTerraform, true)(this._apiGateway6.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_vhost_domain_to_dnsdb: {
        value: cdktf.stringToHclTerraform(this._addVhostDomainToDnsdb),
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
      auth_portal: {
        value: cdktf.stringToHclTerraform(this._authPortal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_virtual_host: {
        value: cdktf.stringToHclTerraform(this._authVirtualHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_cert: {
        value: cdktf.stringToHclTerraform(this._clientCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decrypted_traffic_mirror: {
        value: cdktf.stringToHclTerraform(this._decryptedTrafficMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      empty_cert_action: {
        value: cdktf.stringToHclTerraform(this._emptyCertAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_supported_max_version: {
        value: cdktf.stringToHclTerraform(this._httpSupportedMaxVersion),
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
      log_blocked_traffic: {
        value: cdktf.stringToHclTerraform(this._logBlockedTraffic),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svr_pool_multiplex: {
        value: cdktf.stringToHclTerraform(this._svrPoolMultiplex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svr_pool_server_max_concurrent_request: {
        value: cdktf.numberToHclTerraform(this._svrPoolServerMaxConcurrentRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      svr_pool_server_max_request: {
        value: cdktf.numberToHclTerraform(this._svrPoolServerMaxRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      svr_pool_ttl: {
        value: cdktf.numberToHclTerraform(this._svrPoolTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_agent_detect: {
        value: cdktf.stringToHclTerraform(this._userAgentDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip: {
        value: cdktf.stringToHclTerraform(this._vip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_gateway: {
        value: cdktf.listMapperHcl(objectFirewallAccessproxy6ApiGatewayToHclTerraform, true)(this._apiGateway.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallAccessproxy6ApiGatewayList",
      },
      api_gateway6: {
        value: cdktf.listMapperHcl(objectFirewallAccessproxy6ApiGateway6ToHclTerraform, true)(this._apiGateway6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallAccessproxy6ApiGateway6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
