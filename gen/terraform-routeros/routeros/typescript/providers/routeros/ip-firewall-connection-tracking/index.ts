// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpFirewallConnectionTrackingConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#___path___ IpFirewallConnectionTracking#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#___skip___ IpFirewallConnectionTracking#___skip___}
  */
  readonly skip?: string;
  /**
  * Allows to disable or enable connection tracking. Disabling connection tracking will cause several firewall features to stop working. 
  * 				          See the list of affected features. Starting from v6.0rc2 default value is auto. This means that connection tracing is disabled until at least one firewall rule is added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#enabled IpFirewallConnectionTracking#enabled}
  */
  readonly enabled?: string;
  /**
  * Timeout for all other connection entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#generic_timeout IpFirewallConnectionTracking#generic_timeout}
  */
  readonly genericTimeout?: string;
  /**
  * ICMP connection timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#icmp_timeout IpFirewallConnectionTracking#icmp_timeout}
  */
  readonly icmpTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#id IpFirewallConnectionTracking#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enables or disables liberal TCP connection tracking by toggling the kernel parameter nf_conntrack_tcp_be_liberal. When set to `yes`, the system mark only out of window RST segments as INVALID.
  * 
  * `Enabling this setting may allow malformed packets that would otherwise be considered invalid by the firewall's connection-state matcher. This can increase exposure to certain evasion techniques. This property should be enabled only when troubleshooting or working around known issues.`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#liberal_tcp_tracking IpFirewallConnectionTracking#liberal_tcp_tracking}
  */
  readonly liberalTcpTracking?: boolean | cdktf.IResolvable;
  /**
  * Disable picking up already established connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#loose_tcp_tracking IpFirewallConnectionTracking#loose_tcp_tracking}
  */
  readonly looseTcpTracking?: string;
  /**
  * No documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#tcp_close_timeout IpFirewallConnectionTracking#tcp_close_timeout}
  */
  readonly tcpCloseTimeout?: string;
  /**
  * No documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#tcp_close_wait_timeout IpFirewallConnectionTracking#tcp_close_wait_timeout}
  */
  readonly tcpCloseWaitTimeout?: string;
  /**
  * Time when established TCP connection times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#tcp_established_timeout IpFirewallConnectionTracking#tcp_established_timeout}
  */
  readonly tcpEstablishedTimeout?: string;
  /**
  * No documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#tcp_fin_wait_timeout IpFirewallConnectionTracking#tcp_fin_wait_timeout}
  */
  readonly tcpFinWaitTimeout?: string;
  /**
  * No documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#tcp_last_ack_timeout IpFirewallConnectionTracking#tcp_last_ack_timeout}
  */
  readonly tcpLastAckTimeout?: string;
  /**
  * No documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#tcp_max_retrans_timeout IpFirewallConnectionTracking#tcp_max_retrans_timeout}
  */
  readonly tcpMaxRetransTimeout?: string;
  /**
  * TCP SYN timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#tcp_syn_received_timeout IpFirewallConnectionTracking#tcp_syn_received_timeout}
  */
  readonly tcpSynReceivedTimeout?: string;
  /**
  * TCP SYN timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#tcp_syn_sent_timeout IpFirewallConnectionTracking#tcp_syn_sent_timeout}
  */
  readonly tcpSynSentTimeout?: string;
  /**
  * No documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#tcp_time_wait_timeout IpFirewallConnectionTracking#tcp_time_wait_timeout}
  */
  readonly tcpTimeWaitTimeout?: string;
  /**
  * No documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#tcp_unacked_timeout IpFirewallConnectionTracking#tcp_unacked_timeout}
  */
  readonly tcpUnackedTimeout?: string;
  /**
  * Specifies the timeout of UDP connections that has seen packets in both directions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#udp_stream_timeout IpFirewallConnectionTracking#udp_stream_timeout}
  */
  readonly udpStreamTimeout?: string;
  /**
  * Specifies the timeout for UDP connections that have seen packets in one direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#udp_timeout IpFirewallConnectionTracking#udp_timeout}
  */
  readonly udpTimeout?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking routeros_ip_firewall_connection_tracking}
*/
export class IpFirewallConnectionTracking extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_firewall_connection_tracking";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpFirewallConnectionTracking resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpFirewallConnectionTracking to import
  * @param importFromId The id of the existing IpFirewallConnectionTracking that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpFirewallConnectionTracking to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_firewall_connection_tracking", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/ip_firewall_connection_tracking routeros_ip_firewall_connection_tracking} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpFirewallConnectionTrackingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpFirewallConnectionTrackingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_firewall_connection_tracking',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._enabled = config.enabled;
    this._genericTimeout = config.genericTimeout;
    this._icmpTimeout = config.icmpTimeout;
    this._id = config.id;
    this._liberalTcpTracking = config.liberalTcpTracking;
    this._looseTcpTracking = config.looseTcpTracking;
    this._tcpCloseTimeout = config.tcpCloseTimeout;
    this._tcpCloseWaitTimeout = config.tcpCloseWaitTimeout;
    this._tcpEstablishedTimeout = config.tcpEstablishedTimeout;
    this._tcpFinWaitTimeout = config.tcpFinWaitTimeout;
    this._tcpLastAckTimeout = config.tcpLastAckTimeout;
    this._tcpMaxRetransTimeout = config.tcpMaxRetransTimeout;
    this._tcpSynReceivedTimeout = config.tcpSynReceivedTimeout;
    this._tcpSynSentTimeout = config.tcpSynSentTimeout;
    this._tcpTimeWaitTimeout = config.tcpTimeWaitTimeout;
    this._tcpUnackedTimeout = config.tcpUnackedTimeout;
    this._udpStreamTimeout = config.udpStreamTimeout;
    this._udpTimeout = config.udpTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // active_ipv4 - computed: true, optional: false, required: false
  public get activeIpv4() {
    return this.getBooleanAttribute('active_ipv4');
  }

  // active_ipv6 - computed: true, optional: false, required: false
  public get activeIpv6() {
    return this.getBooleanAttribute('active_ipv6');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: string; 
  public get enabled() {
    return this.getStringAttribute('enabled');
  }
  public set enabled(value: string) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // generic_timeout - computed: false, optional: true, required: false
  private _genericTimeout?: string; 
  public get genericTimeout() {
    return this.getStringAttribute('generic_timeout');
  }
  public set genericTimeout(value: string) {
    this._genericTimeout = value;
  }
  public resetGenericTimeout() {
    this._genericTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericTimeoutInput() {
    return this._genericTimeout;
  }

  // icmp_timeout - computed: false, optional: true, required: false
  private _icmpTimeout?: string; 
  public get icmpTimeout() {
    return this.getStringAttribute('icmp_timeout');
  }
  public set icmpTimeout(value: string) {
    this._icmpTimeout = value;
  }
  public resetIcmpTimeout() {
    this._icmpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTimeoutInput() {
    return this._icmpTimeout;
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

  // liberal_tcp_tracking - computed: false, optional: true, required: false
  private _liberalTcpTracking?: boolean | cdktf.IResolvable; 
  public get liberalTcpTracking() {
    return this.getBooleanAttribute('liberal_tcp_tracking');
  }
  public set liberalTcpTracking(value: boolean | cdktf.IResolvable) {
    this._liberalTcpTracking = value;
  }
  public resetLiberalTcpTracking() {
    this._liberalTcpTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get liberalTcpTrackingInput() {
    return this._liberalTcpTracking;
  }

  // loose_tcp_tracking - computed: false, optional: true, required: false
  private _looseTcpTracking?: string; 
  public get looseTcpTracking() {
    return this.getStringAttribute('loose_tcp_tracking');
  }
  public set looseTcpTracking(value: string) {
    this._looseTcpTracking = value;
  }
  public resetLooseTcpTracking() {
    this._looseTcpTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get looseTcpTrackingInput() {
    return this._looseTcpTracking;
  }

  // max_entries - computed: true, optional: false, required: false
  public get maxEntries() {
    return this.getStringAttribute('max_entries');
  }

  // tcp_close_timeout - computed: false, optional: true, required: false
  private _tcpCloseTimeout?: string; 
  public get tcpCloseTimeout() {
    return this.getStringAttribute('tcp_close_timeout');
  }
  public set tcpCloseTimeout(value: string) {
    this._tcpCloseTimeout = value;
  }
  public resetTcpCloseTimeout() {
    this._tcpCloseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCloseTimeoutInput() {
    return this._tcpCloseTimeout;
  }

  // tcp_close_wait_timeout - computed: false, optional: true, required: false
  private _tcpCloseWaitTimeout?: string; 
  public get tcpCloseWaitTimeout() {
    return this.getStringAttribute('tcp_close_wait_timeout');
  }
  public set tcpCloseWaitTimeout(value: string) {
    this._tcpCloseWaitTimeout = value;
  }
  public resetTcpCloseWaitTimeout() {
    this._tcpCloseWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCloseWaitTimeoutInput() {
    return this._tcpCloseWaitTimeout;
  }

  // tcp_established_timeout - computed: false, optional: true, required: false
  private _tcpEstablishedTimeout?: string; 
  public get tcpEstablishedTimeout() {
    return this.getStringAttribute('tcp_established_timeout');
  }
  public set tcpEstablishedTimeout(value: string) {
    this._tcpEstablishedTimeout = value;
  }
  public resetTcpEstablishedTimeout() {
    this._tcpEstablishedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEstablishedTimeoutInput() {
    return this._tcpEstablishedTimeout;
  }

  // tcp_fin_wait_timeout - computed: false, optional: true, required: false
  private _tcpFinWaitTimeout?: string; 
  public get tcpFinWaitTimeout() {
    return this.getStringAttribute('tcp_fin_wait_timeout');
  }
  public set tcpFinWaitTimeout(value: string) {
    this._tcpFinWaitTimeout = value;
  }
  public resetTcpFinWaitTimeout() {
    this._tcpFinWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinWaitTimeoutInput() {
    return this._tcpFinWaitTimeout;
  }

  // tcp_last_ack_timeout - computed: false, optional: true, required: false
  private _tcpLastAckTimeout?: string; 
  public get tcpLastAckTimeout() {
    return this.getStringAttribute('tcp_last_ack_timeout');
  }
  public set tcpLastAckTimeout(value: string) {
    this._tcpLastAckTimeout = value;
  }
  public resetTcpLastAckTimeout() {
    this._tcpLastAckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpLastAckTimeoutInput() {
    return this._tcpLastAckTimeout;
  }

  // tcp_max_retrans_timeout - computed: false, optional: true, required: false
  private _tcpMaxRetransTimeout?: string; 
  public get tcpMaxRetransTimeout() {
    return this.getStringAttribute('tcp_max_retrans_timeout');
  }
  public set tcpMaxRetransTimeout(value: string) {
    this._tcpMaxRetransTimeout = value;
  }
  public resetTcpMaxRetransTimeout() {
    this._tcpMaxRetransTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMaxRetransTimeoutInput() {
    return this._tcpMaxRetransTimeout;
  }

  // tcp_syn_received_timeout - computed: false, optional: true, required: false
  private _tcpSynReceivedTimeout?: string; 
  public get tcpSynReceivedTimeout() {
    return this.getStringAttribute('tcp_syn_received_timeout');
  }
  public set tcpSynReceivedTimeout(value: string) {
    this._tcpSynReceivedTimeout = value;
  }
  public resetTcpSynReceivedTimeout() {
    this._tcpSynReceivedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynReceivedTimeoutInput() {
    return this._tcpSynReceivedTimeout;
  }

  // tcp_syn_sent_timeout - computed: false, optional: true, required: false
  private _tcpSynSentTimeout?: string; 
  public get tcpSynSentTimeout() {
    return this.getStringAttribute('tcp_syn_sent_timeout');
  }
  public set tcpSynSentTimeout(value: string) {
    this._tcpSynSentTimeout = value;
  }
  public resetTcpSynSentTimeout() {
    this._tcpSynSentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynSentTimeoutInput() {
    return this._tcpSynSentTimeout;
  }

  // tcp_time_wait_timeout - computed: false, optional: true, required: false
  private _tcpTimeWaitTimeout?: string; 
  public get tcpTimeWaitTimeout() {
    return this.getStringAttribute('tcp_time_wait_timeout');
  }
  public set tcpTimeWaitTimeout(value: string) {
    this._tcpTimeWaitTimeout = value;
  }
  public resetTcpTimeWaitTimeout() {
    this._tcpTimeWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeWaitTimeoutInput() {
    return this._tcpTimeWaitTimeout;
  }

  // tcp_unacked_timeout - computed: false, optional: true, required: false
  private _tcpUnackedTimeout?: string; 
  public get tcpUnackedTimeout() {
    return this.getStringAttribute('tcp_unacked_timeout');
  }
  public set tcpUnackedTimeout(value: string) {
    this._tcpUnackedTimeout = value;
  }
  public resetTcpUnackedTimeout() {
    this._tcpUnackedTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUnackedTimeoutInput() {
    return this._tcpUnackedTimeout;
  }

  // udp_stream_timeout - computed: false, optional: true, required: false
  private _udpStreamTimeout?: string; 
  public get udpStreamTimeout() {
    return this.getStringAttribute('udp_stream_timeout');
  }
  public set udpStreamTimeout(value: string) {
    this._udpStreamTimeout = value;
  }
  public resetUdpStreamTimeout() {
    this._udpStreamTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpStreamTimeoutInput() {
    return this._udpStreamTimeout;
  }

  // udp_timeout - computed: false, optional: true, required: false
  private _udpTimeout?: string; 
  public get udpTimeout() {
    return this.getStringAttribute('udp_timeout');
  }
  public set udpTimeout(value: string) {
    this._udpTimeout = value;
  }
  public resetUdpTimeout() {
    this._udpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutInput() {
    return this._udpTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      enabled: cdktf.stringToTerraform(this._enabled),
      generic_timeout: cdktf.stringToTerraform(this._genericTimeout),
      icmp_timeout: cdktf.stringToTerraform(this._icmpTimeout),
      id: cdktf.stringToTerraform(this._id),
      liberal_tcp_tracking: cdktf.booleanToTerraform(this._liberalTcpTracking),
      loose_tcp_tracking: cdktf.stringToTerraform(this._looseTcpTracking),
      tcp_close_timeout: cdktf.stringToTerraform(this._tcpCloseTimeout),
      tcp_close_wait_timeout: cdktf.stringToTerraform(this._tcpCloseWaitTimeout),
      tcp_established_timeout: cdktf.stringToTerraform(this._tcpEstablishedTimeout),
      tcp_fin_wait_timeout: cdktf.stringToTerraform(this._tcpFinWaitTimeout),
      tcp_last_ack_timeout: cdktf.stringToTerraform(this._tcpLastAckTimeout),
      tcp_max_retrans_timeout: cdktf.stringToTerraform(this._tcpMaxRetransTimeout),
      tcp_syn_received_timeout: cdktf.stringToTerraform(this._tcpSynReceivedTimeout),
      tcp_syn_sent_timeout: cdktf.stringToTerraform(this._tcpSynSentTimeout),
      tcp_time_wait_timeout: cdktf.stringToTerraform(this._tcpTimeWaitTimeout),
      tcp_unacked_timeout: cdktf.stringToTerraform(this._tcpUnackedTimeout),
      udp_stream_timeout: cdktf.stringToTerraform(this._udpStreamTimeout),
      udp_timeout: cdktf.stringToTerraform(this._udpTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.stringToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generic_timeout: {
        value: cdktf.stringToHclTerraform(this._genericTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp_timeout: {
        value: cdktf.stringToHclTerraform(this._icmpTimeout),
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
      liberal_tcp_tracking: {
        value: cdktf.booleanToHclTerraform(this._liberalTcpTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      loose_tcp_tracking: {
        value: cdktf.stringToHclTerraform(this._looseTcpTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_close_timeout: {
        value: cdktf.stringToHclTerraform(this._tcpCloseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_close_wait_timeout: {
        value: cdktf.stringToHclTerraform(this._tcpCloseWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_established_timeout: {
        value: cdktf.stringToHclTerraform(this._tcpEstablishedTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_fin_wait_timeout: {
        value: cdktf.stringToHclTerraform(this._tcpFinWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_last_ack_timeout: {
        value: cdktf.stringToHclTerraform(this._tcpLastAckTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_max_retrans_timeout: {
        value: cdktf.stringToHclTerraform(this._tcpMaxRetransTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_syn_received_timeout: {
        value: cdktf.stringToHclTerraform(this._tcpSynReceivedTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_syn_sent_timeout: {
        value: cdktf.stringToHclTerraform(this._tcpSynSentTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_time_wait_timeout: {
        value: cdktf.stringToHclTerraform(this._tcpTimeWaitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_unacked_timeout: {
        value: cdktf.stringToHclTerraform(this._tcpUnackedTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_stream_timeout: {
        value: cdktf.stringToHclTerraform(this._udpStreamTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_timeout: {
        value: cdktf.stringToHclTerraform(this._udpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
