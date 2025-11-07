// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateDohConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable Connection Reuse; 'disable': Disable Connection-Reuse (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#conn_reuse SlbTemplateDoh#conn_reuse}
  */
  readonly connReuse?: string;
  /**
  * DNS Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#dns SlbTemplateDoh#dns}
  */
  readonly dns?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#id SlbTemplateDoh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DNS over HTTP(s) Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#name SlbTemplateDoh#name}
  */
  readonly name: string;
  /**
  * 'allow': Forward Non-DoH request to http server bound to vport; 'reject': Reject Non-DoH requests with HTTP 400 Bad Request (Default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#non_dns_request SlbTemplateDoh#non_dns_request}
  */
  readonly nonDnsRequest?: string;
  /**
  * '400': Status Code 400 BAD Request (Default); '500': Status Code 500 Internal Server Error; '501': Status Code 501 Not Implemented;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#reject_status_code SlbTemplateDoh#reject_status_code}
  */
  readonly rejectStatusCode?: string;
  /**
  * Reference a DNS template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#shared_partition_dns_template SlbTemplateDoh#shared_partition_dns_template}
  */
  readonly sharedPartitionDnsTemplate?: number;
  /**
  * Reference a TCP Proxy template from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#shared_partition_tcp_proxy_template SlbTemplateDoh#shared_partition_tcp_proxy_template}
  */
  readonly sharedPartitionTcpProxyTemplate?: number;
  /**
  * Source NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#snat_pool SlbTemplateDoh#snat_pool}
  */
  readonly snatPool?: string;
  /**
  * 'auto': Perform Source NAT Auto for service-group(Default) (Not supported with forwarding-ip); 'disable': Don't perform source-nat for server side DNS queries; 'pool': Perform Source NAT with specific pool;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#source_nat SlbTemplateDoh#source_nat}
  */
  readonly sourceNat?: string;
  /**
  * TCP Proxy Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#tcp_proxy SlbTemplateDoh#tcp_proxy}
  */
  readonly tcpProxy?: string;
  /**
  * DNS Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#template_dns_shared SlbTemplateDoh#template_dns_shared}
  */
  readonly templateDnsShared?: string;
  /**
  * TCP Proxy Template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#template_tcp_proxy_shared SlbTemplateDoh#template_tcp_proxy_shared}
  */
  readonly templateTcpProxyShared?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#user_tag SlbTemplateDoh#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#uuid SlbTemplateDoh#uuid}
  */
  readonly uuid?: string;
  /**
  * dns_retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#dns_retry SlbTemplateDoh#dns_retry}
  */
  readonly dnsRetry?: SlbTemplateDohDnsRetry;
  /**
  * forwarder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#forwarder SlbTemplateDoh#forwarder}
  */
  readonly forwarder?: SlbTemplateDohForwarder;
}
export interface SlbTemplateDohDnsRetry {
  /**
  * 'close': Close client side connection; 'retry-with-tcp': Retry DNS query to server using TCP (If UDP was tried initially. Close after.);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#after_timeout SlbTemplateDoh#after_timeout}
  */
  readonly afterTimeout?: string;
  /**
  * Total number of times to try DNS query to server before closing client connection, default 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#max_trials SlbTemplateDoh#max_trials}
  */
  readonly maxTrials?: number;
  /**
  * DNS Retry Interval value 1 - 400 in units of 100ms, default is 10 (default is 1000ms) (1 - 400 in units of 100ms, default is 10 (1000ms/1sec))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#retry_interval SlbTemplateDoh#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#uuid SlbTemplateDoh#uuid}
  */
  readonly uuid?: string;
}

export function slbTemplateDohDnsRetryToTerraform(struct?: SlbTemplateDohDnsRetryOutputReference | SlbTemplateDohDnsRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after_timeout: cdktf.stringToTerraform(struct!.afterTimeout),
    max_trials: cdktf.numberToTerraform(struct!.maxTrials),
    retry_interval: cdktf.numberToTerraform(struct!.retryInterval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function slbTemplateDohDnsRetryToHclTerraform(struct?: SlbTemplateDohDnsRetryOutputReference | SlbTemplateDohDnsRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after_timeout: {
      value: cdktf.stringToHclTerraform(struct!.afterTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_trials: {
      value: cdktf.numberToHclTerraform(struct!.maxTrials),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_interval: {
      value: cdktf.numberToHclTerraform(struct!.retryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDohDnsRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDohDnsRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._afterTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.afterTimeout = this._afterTimeout;
    }
    if (this._maxTrials !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTrials = this._maxTrials;
    }
    if (this._retryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryInterval = this._retryInterval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDohDnsRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._afterTimeout = undefined;
      this._maxTrials = undefined;
      this._retryInterval = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._afterTimeout = value.afterTimeout;
      this._maxTrials = value.maxTrials;
      this._retryInterval = value.retryInterval;
      this._uuid = value.uuid;
    }
  }

  // after_timeout - computed: false, optional: true, required: false
  private _afterTimeout?: string; 
  public get afterTimeout() {
    return this.getStringAttribute('after_timeout');
  }
  public set afterTimeout(value: string) {
    this._afterTimeout = value;
  }
  public resetAfterTimeout() {
    this._afterTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterTimeoutInput() {
    return this._afterTimeout;
  }

  // max_trials - computed: false, optional: true, required: false
  private _maxTrials?: number; 
  public get maxTrials() {
    return this.getNumberAttribute('max_trials');
  }
  public set maxTrials(value: number) {
    this._maxTrials = value;
  }
  public resetMaxTrials() {
    this._maxTrials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTrialsInput() {
    return this._maxTrials;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface SlbTemplateDohForwarder {
  /**
  * Forward valid DoH HTTP request as is, no DNS packet extraction (Bypass DoH)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#bypass_doh SlbTemplateDoh#bypass_doh}
  */
  readonly bypassDoh?: number;
  /**
  * SLB VIP IPv4 address to forward DOH query (IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#forwarding_ipv4 SlbTemplateDoh#forwarding_ipv4}
  */
  readonly forwardingIpv4?: string;
  /**
  * SLB VIP IPv6 address to forward DOH query (IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#forwarding_ipv6 SlbTemplateDoh#forwarding_ipv6}
  */
  readonly forwardingIpv6?: string;
  /**
  * Bind a TCP Service Group to the template (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#tcp_service_group SlbTemplateDoh#tcp_service_group}
  */
  readonly tcpServiceGroup?: string;
  /**
  * Bind a UDP Service Group to the template (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#udp_service_group SlbTemplateDoh#udp_service_group}
  */
  readonly udpServiceGroup?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#uuid SlbTemplateDoh#uuid}
  */
  readonly uuid?: string;
  /**
  * Try to find this IP as a VIP in this L3v Partition and forward it internally to the VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#v4_internal SlbTemplateDoh#v4_internal}
  */
  readonly v4Internal?: number;
  /**
  * 'tcp': Use TCP only when forwarding DNS traffic; 'udp': Use UDP only when forwarding DNS traffic; 'both': Use UDP 1st and if unreachable, retry with TCP when forwarding DNS traffic;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#v4_l4_proto SlbTemplateDoh#v4_l4_proto}
  */
  readonly v4L4Proto?: string;
  /**
  * Forwarding port number, Default is 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#v4_port SlbTemplateDoh#v4_port}
  */
  readonly v4Port?: number;
  /**
  * Try to find this IP as a VIP in this L3v Partition and forward it internally to the VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#v6_internal SlbTemplateDoh#v6_internal}
  */
  readonly v6Internal?: number;
  /**
  * 'tcp': Use TCP only when forwarding DNS traffic; 'udp': Use UDP only when forwarding DNS traffic; 'both': Use UDP 1st and if unreachable, retry with TCP when forwarding DNS traffic;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#v6_l4_proto SlbTemplateDoh#v6_l4_proto}
  */
  readonly v6L4Proto?: string;
  /**
  * Forwarding port number, Default is 53
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#v6_port SlbTemplateDoh#v6_port}
  */
  readonly v6Port?: number;
}

export function slbTemplateDohForwarderToTerraform(struct?: SlbTemplateDohForwarderOutputReference | SlbTemplateDohForwarder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass_doh: cdktf.numberToTerraform(struct!.bypassDoh),
    forwarding_ipv4: cdktf.stringToTerraform(struct!.forwardingIpv4),
    forwarding_ipv6: cdktf.stringToTerraform(struct!.forwardingIpv6),
    tcp_service_group: cdktf.stringToTerraform(struct!.tcpServiceGroup),
    udp_service_group: cdktf.stringToTerraform(struct!.udpServiceGroup),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    v4_internal: cdktf.numberToTerraform(struct!.v4Internal),
    v4_l4_proto: cdktf.stringToTerraform(struct!.v4L4Proto),
    v4_port: cdktf.numberToTerraform(struct!.v4Port),
    v6_internal: cdktf.numberToTerraform(struct!.v6Internal),
    v6_l4_proto: cdktf.stringToTerraform(struct!.v6L4Proto),
    v6_port: cdktf.numberToTerraform(struct!.v6Port),
  }
}


export function slbTemplateDohForwarderToHclTerraform(struct?: SlbTemplateDohForwarderOutputReference | SlbTemplateDohForwarder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass_doh: {
      value: cdktf.numberToHclTerraform(struct!.bypassDoh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forwarding_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.forwardingIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forwarding_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.forwardingIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_service_group: {
      value: cdktf.stringToHclTerraform(struct!.tcpServiceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_service_group: {
      value: cdktf.stringToHclTerraform(struct!.udpServiceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v4_internal: {
      value: cdktf.numberToHclTerraform(struct!.v4Internal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v4_l4_proto: {
      value: cdktf.stringToHclTerraform(struct!.v4L4Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v4_port: {
      value: cdktf.numberToHclTerraform(struct!.v4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_internal: {
      value: cdktf.numberToHclTerraform(struct!.v6Internal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_l4_proto: {
      value: cdktf.stringToHclTerraform(struct!.v6L4Proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_port: {
      value: cdktf.numberToHclTerraform(struct!.v6Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateDohForwarderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SlbTemplateDohForwarder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassDoh !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassDoh = this._bypassDoh;
    }
    if (this._forwardingIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingIpv4 = this._forwardingIpv4;
    }
    if (this._forwardingIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardingIpv6 = this._forwardingIpv6;
    }
    if (this._tcpServiceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpServiceGroup = this._tcpServiceGroup;
    }
    if (this._udpServiceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpServiceGroup = this._udpServiceGroup;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._v4Internal !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Internal = this._v4Internal;
    }
    if (this._v4L4Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4L4Proto = this._v4L4Proto;
    }
    if (this._v4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Port = this._v4Port;
    }
    if (this._v6Internal !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Internal = this._v6Internal;
    }
    if (this._v6L4Proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6L4Proto = this._v6L4Proto;
    }
    if (this._v6Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Port = this._v6Port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateDohForwarder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassDoh = undefined;
      this._forwardingIpv4 = undefined;
      this._forwardingIpv6 = undefined;
      this._tcpServiceGroup = undefined;
      this._udpServiceGroup = undefined;
      this._uuid = undefined;
      this._v4Internal = undefined;
      this._v4L4Proto = undefined;
      this._v4Port = undefined;
      this._v6Internal = undefined;
      this._v6L4Proto = undefined;
      this._v6Port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassDoh = value.bypassDoh;
      this._forwardingIpv4 = value.forwardingIpv4;
      this._forwardingIpv6 = value.forwardingIpv6;
      this._tcpServiceGroup = value.tcpServiceGroup;
      this._udpServiceGroup = value.udpServiceGroup;
      this._uuid = value.uuid;
      this._v4Internal = value.v4Internal;
      this._v4L4Proto = value.v4L4Proto;
      this._v4Port = value.v4Port;
      this._v6Internal = value.v6Internal;
      this._v6L4Proto = value.v6L4Proto;
      this._v6Port = value.v6Port;
    }
  }

  // bypass_doh - computed: false, optional: true, required: false
  private _bypassDoh?: number; 
  public get bypassDoh() {
    return this.getNumberAttribute('bypass_doh');
  }
  public set bypassDoh(value: number) {
    this._bypassDoh = value;
  }
  public resetBypassDoh() {
    this._bypassDoh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassDohInput() {
    return this._bypassDoh;
  }

  // forwarding_ipv4 - computed: false, optional: true, required: false
  private _forwardingIpv4?: string; 
  public get forwardingIpv4() {
    return this.getStringAttribute('forwarding_ipv4');
  }
  public set forwardingIpv4(value: string) {
    this._forwardingIpv4 = value;
  }
  public resetForwardingIpv4() {
    this._forwardingIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingIpv4Input() {
    return this._forwardingIpv4;
  }

  // forwarding_ipv6 - computed: false, optional: true, required: false
  private _forwardingIpv6?: string; 
  public get forwardingIpv6() {
    return this.getStringAttribute('forwarding_ipv6');
  }
  public set forwardingIpv6(value: string) {
    this._forwardingIpv6 = value;
  }
  public resetForwardingIpv6() {
    this._forwardingIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingIpv6Input() {
    return this._forwardingIpv6;
  }

  // tcp_service_group - computed: false, optional: true, required: false
  private _tcpServiceGroup?: string; 
  public get tcpServiceGroup() {
    return this.getStringAttribute('tcp_service_group');
  }
  public set tcpServiceGroup(value: string) {
    this._tcpServiceGroup = value;
  }
  public resetTcpServiceGroup() {
    this._tcpServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpServiceGroupInput() {
    return this._tcpServiceGroup;
  }

  // udp_service_group - computed: false, optional: true, required: false
  private _udpServiceGroup?: string; 
  public get udpServiceGroup() {
    return this.getStringAttribute('udp_service_group');
  }
  public set udpServiceGroup(value: string) {
    this._udpServiceGroup = value;
  }
  public resetUdpServiceGroup() {
    this._udpServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpServiceGroupInput() {
    return this._udpServiceGroup;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // v4_internal - computed: false, optional: true, required: false
  private _v4Internal?: number; 
  public get v4Internal() {
    return this.getNumberAttribute('v4_internal');
  }
  public set v4Internal(value: number) {
    this._v4Internal = value;
  }
  public resetV4Internal() {
    this._v4Internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4InternalInput() {
    return this._v4Internal;
  }

  // v4_l4_proto - computed: false, optional: true, required: false
  private _v4L4Proto?: string; 
  public get v4L4Proto() {
    return this.getStringAttribute('v4_l4_proto');
  }
  public set v4L4Proto(value: string) {
    this._v4L4Proto = value;
  }
  public resetV4L4Proto() {
    this._v4L4Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4L4ProtoInput() {
    return this._v4L4Proto;
  }

  // v4_port - computed: false, optional: true, required: false
  private _v4Port?: number; 
  public get v4Port() {
    return this.getNumberAttribute('v4_port');
  }
  public set v4Port(value: number) {
    this._v4Port = value;
  }
  public resetV4Port() {
    this._v4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4PortInput() {
    return this._v4Port;
  }

  // v6_internal - computed: false, optional: true, required: false
  private _v6Internal?: number; 
  public get v6Internal() {
    return this.getNumberAttribute('v6_internal');
  }
  public set v6Internal(value: number) {
    this._v6Internal = value;
  }
  public resetV6Internal() {
    this._v6Internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6InternalInput() {
    return this._v6Internal;
  }

  // v6_l4_proto - computed: false, optional: true, required: false
  private _v6L4Proto?: string; 
  public get v6L4Proto() {
    return this.getStringAttribute('v6_l4_proto');
  }
  public set v6L4Proto(value: string) {
    this._v6L4Proto = value;
  }
  public resetV6L4Proto() {
    this._v6L4Proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6L4ProtoInput() {
    return this._v6L4Proto;
  }

  // v6_port - computed: false, optional: true, required: false
  private _v6Port?: number; 
  public get v6Port() {
    return this.getNumberAttribute('v6_port');
  }
  public set v6Port(value: number) {
    this._v6Port = value;
  }
  public resetV6Port() {
    this._v6Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6PortInput() {
    return this._v6Port;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh thunder_slb_template_doh}
*/
export class SlbTemplateDoh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_doh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateDoh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateDoh to import
  * @param importFromId The id of the existing SlbTemplateDoh that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateDoh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_doh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_doh thunder_slb_template_doh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateDohConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateDohConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_doh',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connReuse = config.connReuse;
    this._dns = config.dns;
    this._id = config.id;
    this._name = config.name;
    this._nonDnsRequest = config.nonDnsRequest;
    this._rejectStatusCode = config.rejectStatusCode;
    this._sharedPartitionDnsTemplate = config.sharedPartitionDnsTemplate;
    this._sharedPartitionTcpProxyTemplate = config.sharedPartitionTcpProxyTemplate;
    this._snatPool = config.snatPool;
    this._sourceNat = config.sourceNat;
    this._tcpProxy = config.tcpProxy;
    this._templateDnsShared = config.templateDnsShared;
    this._templateTcpProxyShared = config.templateTcpProxyShared;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._dnsRetry.internalValue = config.dnsRetry;
    this._forwarder.internalValue = config.forwarder;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conn_reuse - computed: false, optional: true, required: false
  private _connReuse?: string; 
  public get connReuse() {
    return this.getStringAttribute('conn_reuse');
  }
  public set connReuse(value: string) {
    this._connReuse = value;
  }
  public resetConnReuse() {
    this._connReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connReuseInput() {
    return this._connReuse;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
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

  // non_dns_request - computed: false, optional: true, required: false
  private _nonDnsRequest?: string; 
  public get nonDnsRequest() {
    return this.getStringAttribute('non_dns_request');
  }
  public set nonDnsRequest(value: string) {
    this._nonDnsRequest = value;
  }
  public resetNonDnsRequest() {
    this._nonDnsRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonDnsRequestInput() {
    return this._nonDnsRequest;
  }

  // reject_status_code - computed: false, optional: true, required: false
  private _rejectStatusCode?: string; 
  public get rejectStatusCode() {
    return this.getStringAttribute('reject_status_code');
  }
  public set rejectStatusCode(value: string) {
    this._rejectStatusCode = value;
  }
  public resetRejectStatusCode() {
    this._rejectStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rejectStatusCodeInput() {
    return this._rejectStatusCode;
  }

  // shared_partition_dns_template - computed: false, optional: true, required: false
  private _sharedPartitionDnsTemplate?: number; 
  public get sharedPartitionDnsTemplate() {
    return this.getNumberAttribute('shared_partition_dns_template');
  }
  public set sharedPartitionDnsTemplate(value: number) {
    this._sharedPartitionDnsTemplate = value;
  }
  public resetSharedPartitionDnsTemplate() {
    this._sharedPartitionDnsTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionDnsTemplateInput() {
    return this._sharedPartitionDnsTemplate;
  }

  // shared_partition_tcp_proxy_template - computed: false, optional: true, required: false
  private _sharedPartitionTcpProxyTemplate?: number; 
  public get sharedPartitionTcpProxyTemplate() {
    return this.getNumberAttribute('shared_partition_tcp_proxy_template');
  }
  public set sharedPartitionTcpProxyTemplate(value: number) {
    this._sharedPartitionTcpProxyTemplate = value;
  }
  public resetSharedPartitionTcpProxyTemplate() {
    this._sharedPartitionTcpProxyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionTcpProxyTemplateInput() {
    return this._sharedPartitionTcpProxyTemplate;
  }

  // snat_pool - computed: false, optional: true, required: false
  private _snatPool?: string; 
  public get snatPool() {
    return this.getStringAttribute('snat_pool');
  }
  public set snatPool(value: string) {
    this._snatPool = value;
  }
  public resetSnatPool() {
    this._snatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool;
  }

  // source_nat - computed: false, optional: true, required: false
  private _sourceNat?: string; 
  public get sourceNat() {
    return this.getStringAttribute('source_nat');
  }
  public set sourceNat(value: string) {
    this._sourceNat = value;
  }
  public resetSourceNat() {
    this._sourceNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatInput() {
    return this._sourceNat;
  }

  // tcp_proxy - computed: false, optional: true, required: false
  private _tcpProxy?: string; 
  public get tcpProxy() {
    return this.getStringAttribute('tcp_proxy');
  }
  public set tcpProxy(value: string) {
    this._tcpProxy = value;
  }
  public resetTcpProxy() {
    this._tcpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProxyInput() {
    return this._tcpProxy;
  }

  // template_dns_shared - computed: false, optional: true, required: false
  private _templateDnsShared?: string; 
  public get templateDnsShared() {
    return this.getStringAttribute('template_dns_shared');
  }
  public set templateDnsShared(value: string) {
    this._templateDnsShared = value;
  }
  public resetTemplateDnsShared() {
    this._templateDnsShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDnsSharedInput() {
    return this._templateDnsShared;
  }

  // template_tcp_proxy_shared - computed: false, optional: true, required: false
  private _templateTcpProxyShared?: string; 
  public get templateTcpProxyShared() {
    return this.getStringAttribute('template_tcp_proxy_shared');
  }
  public set templateTcpProxyShared(value: string) {
    this._templateTcpProxyShared = value;
  }
  public resetTemplateTcpProxyShared() {
    this._templateTcpProxyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTcpProxySharedInput() {
    return this._templateTcpProxyShared;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dns_retry - computed: false, optional: true, required: false
  private _dnsRetry = new SlbTemplateDohDnsRetryOutputReference(this, "dns_retry");
  public get dnsRetry() {
    return this._dnsRetry;
  }
  public putDnsRetry(value: SlbTemplateDohDnsRetry) {
    this._dnsRetry.internalValue = value;
  }
  public resetDnsRetry() {
    this._dnsRetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRetryInput() {
    return this._dnsRetry.internalValue;
  }

  // forwarder - computed: false, optional: true, required: false
  private _forwarder = new SlbTemplateDohForwarderOutputReference(this, "forwarder");
  public get forwarder() {
    return this._forwarder;
  }
  public putForwarder(value: SlbTemplateDohForwarder) {
    this._forwarder.internalValue = value;
  }
  public resetForwarder() {
    this._forwarder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwarderInput() {
    return this._forwarder.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conn_reuse: cdktf.stringToTerraform(this._connReuse),
      dns: cdktf.stringToTerraform(this._dns),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      non_dns_request: cdktf.stringToTerraform(this._nonDnsRequest),
      reject_status_code: cdktf.stringToTerraform(this._rejectStatusCode),
      shared_partition_dns_template: cdktf.numberToTerraform(this._sharedPartitionDnsTemplate),
      shared_partition_tcp_proxy_template: cdktf.numberToTerraform(this._sharedPartitionTcpProxyTemplate),
      snat_pool: cdktf.stringToTerraform(this._snatPool),
      source_nat: cdktf.stringToTerraform(this._sourceNat),
      tcp_proxy: cdktf.stringToTerraform(this._tcpProxy),
      template_dns_shared: cdktf.stringToTerraform(this._templateDnsShared),
      template_tcp_proxy_shared: cdktf.stringToTerraform(this._templateTcpProxyShared),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      dns_retry: slbTemplateDohDnsRetryToTerraform(this._dnsRetry.internalValue),
      forwarder: slbTemplateDohForwarderToTerraform(this._forwarder.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conn_reuse: {
        value: cdktf.stringToHclTerraform(this._connReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns: {
        value: cdktf.stringToHclTerraform(this._dns),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      non_dns_request: {
        value: cdktf.stringToHclTerraform(this._nonDnsRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reject_status_code: {
        value: cdktf.stringToHclTerraform(this._rejectStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_partition_dns_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionDnsTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shared_partition_tcp_proxy_template: {
        value: cdktf.numberToHclTerraform(this._sharedPartitionTcpProxyTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_pool: {
        value: cdktf.stringToHclTerraform(this._snatPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_nat: {
        value: cdktf.stringToHclTerraform(this._sourceNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_proxy: {
        value: cdktf.stringToHclTerraform(this._tcpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_dns_shared: {
        value: cdktf.stringToHclTerraform(this._templateDnsShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_tcp_proxy_shared: {
        value: cdktf.stringToHclTerraform(this._templateTcpProxyShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_retry: {
        value: slbTemplateDohDnsRetryToHclTerraform(this._dnsRetry.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDohDnsRetryList",
      },
      forwarder: {
        value: slbTemplateDohForwarderToHclTerraform(this._forwarder.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateDohForwarderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
