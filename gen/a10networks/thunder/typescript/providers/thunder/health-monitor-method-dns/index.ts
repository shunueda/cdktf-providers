// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorMethodDnsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * DNS type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns HealthMonitorMethodDnsA#dns}
  */
  readonly dns?: number;
  /**
  * Specify fully qualified domain name of the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_domain HealthMonitorMethodDnsA#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * Specify DNS port, default is 53 (DNS Port(default 53))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_domain_port HealthMonitorMethodDnsA#dns_domain_port}
  */
  readonly dnsDomainPort?: number;
  /**
  * 'enabled': Set the recursion bit; 'disabled': Clear the recursion bit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_domain_recurse HealthMonitorMethodDnsA#dns_domain_recurse}
  */
  readonly dnsDomainRecurse?: string;
  /**
  * Configure DNS transport over TCP, default is UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_domain_tcp HealthMonitorMethodDnsA#dns_domain_tcp}
  */
  readonly dnsDomainTcp?: number;
  /**
  * 'A': Used for storing Ipv4 address (default); 'CNAME': Canonical name for a DNS alias; 'SOA': Start of authority; 'PTR': Domain name pointer; 'MX': Mail exchanger; 'TXT': Text string; 'AAAA': Used for storing Ipv6 128-bits address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_domain_type HealthMonitorMethodDnsA#dns_domain_type}
  */
  readonly dnsDomainType?: string;
  /**
  * Reverse DNS lookup (Specify IPv4 or IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ip_key HealthMonitorMethodDnsA#dns_ip_key}
  */
  readonly dnsIpKey?: number;
  /**
  * Specify IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv4_addr HealthMonitorMethodDnsA#dns_ipv4_addr}
  */
  readonly dnsIpv4Addr?: string;
  /**
  * Specify DNS port, default is 53 (DNS Port(default 53))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv4_port HealthMonitorMethodDnsA#dns_ipv4_port}
  */
  readonly dnsIpv4Port?: number;
  /**
  * 'enabled': Set the recursion bit; 'disabled': Clear the recursion bit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv4_recurse HealthMonitorMethodDnsA#dns_ipv4_recurse}
  */
  readonly dnsIpv4Recurse?: string;
  /**
  * Configure DNS transport over TCP, default is UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv4_tcp HealthMonitorMethodDnsA#dns_ipv4_tcp}
  */
  readonly dnsIpv4Tcp?: number;
  /**
  * Specify IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv6_addr HealthMonitorMethodDnsA#dns_ipv6_addr}
  */
  readonly dnsIpv6Addr?: string;
  /**
  * Specify DNS port, default is 53 (DNS Port(default 53))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv6_port HealthMonitorMethodDnsA#dns_ipv6_port}
  */
  readonly dnsIpv6Port?: number;
  /**
  * 'enabled': Set the recursion bit; 'disabled': Clear the recursion bit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv6_recurse HealthMonitorMethodDnsA#dns_ipv6_recurse}
  */
  readonly dnsIpv6Recurse?: string;
  /**
  * Configure DNS transport over TCP, default is UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv6_tcp HealthMonitorMethodDnsA#dns_ipv6_tcp}
  */
  readonly dnsIpv6Tcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#id HealthMonitorMethodDnsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#name HealthMonitorMethodDnsA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#uuid HealthMonitorMethodDnsA#uuid}
  */
  readonly uuid?: string;
  /**
  * dns_domain_expect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_domain_expect HealthMonitorMethodDnsA#dns_domain_expect}
  */
  readonly dnsDomainExpect?: HealthMonitorMethodDnsDnsDomainExpectA;
  /**
  * dns_ipv4_expect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv4_expect HealthMonitorMethodDnsA#dns_ipv4_expect}
  */
  readonly dnsIpv4Expect?: HealthMonitorMethodDnsDnsIpv4ExpectA;
  /**
  * dns_ipv6_expect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv6_expect HealthMonitorMethodDnsA#dns_ipv6_expect}
  */
  readonly dnsIpv6Expect?: HealthMonitorMethodDnsDnsIpv6ExpectA;
}
export interface HealthMonitorMethodDnsDnsDomainExpectA {
  /**
  * Specify fully qualified domain name expected in DNS response answer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_domain_fqdn HealthMonitorMethodDnsA#dns_domain_fqdn}
  */
  readonly dnsDomainFqdn?: string;
  /**
  * Specify expected resolved IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_domain_ipv4 HealthMonitorMethodDnsA#dns_domain_ipv4}
  */
  readonly dnsDomainIpv4?: string;
  /**
  * Specify expected resolved IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_domain_ipv6 HealthMonitorMethodDnsA#dns_domain_ipv6}
  */
  readonly dnsDomainIpv6?: string;
  /**
  * Specify response code range (e.g. 0,1-5) (Format is xx,xx-xx (xx between [0,15]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_domain_response HealthMonitorMethodDnsA#dns_domain_response}
  */
  readonly dnsDomainResponse?: string;
}

export function healthMonitorMethodDnsDnsDomainExpectAToTerraform(struct?: HealthMonitorMethodDnsDnsDomainExpectAOutputReference | HealthMonitorMethodDnsDnsDomainExpectA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_domain_fqdn: cdktf.stringToTerraform(struct!.dnsDomainFqdn),
    dns_domain_ipv4: cdktf.stringToTerraform(struct!.dnsDomainIpv4),
    dns_domain_ipv6: cdktf.stringToTerraform(struct!.dnsDomainIpv6),
    dns_domain_response: cdktf.stringToTerraform(struct!.dnsDomainResponse),
  }
}


export function healthMonitorMethodDnsDnsDomainExpectAToHclTerraform(struct?: HealthMonitorMethodDnsDnsDomainExpectAOutputReference | HealthMonitorMethodDnsDnsDomainExpectA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_domain_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_domain_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_domain_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_domain_response: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodDnsDnsDomainExpectAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodDnsDnsDomainExpectA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsDomainFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainFqdn = this._dnsDomainFqdn;
    }
    if (this._dnsDomainIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainIpv4 = this._dnsDomainIpv4;
    }
    if (this._dnsDomainIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainIpv6 = this._dnsDomainIpv6;
    }
    if (this._dnsDomainResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainResponse = this._dnsDomainResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodDnsDnsDomainExpectA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsDomainFqdn = undefined;
      this._dnsDomainIpv4 = undefined;
      this._dnsDomainIpv6 = undefined;
      this._dnsDomainResponse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsDomainFqdn = value.dnsDomainFqdn;
      this._dnsDomainIpv4 = value.dnsDomainIpv4;
      this._dnsDomainIpv6 = value.dnsDomainIpv6;
      this._dnsDomainResponse = value.dnsDomainResponse;
    }
  }

  // dns_domain_fqdn - computed: false, optional: true, required: false
  private _dnsDomainFqdn?: string; 
  public get dnsDomainFqdn() {
    return this.getStringAttribute('dns_domain_fqdn');
  }
  public set dnsDomainFqdn(value: string) {
    this._dnsDomainFqdn = value;
  }
  public resetDnsDomainFqdn() {
    this._dnsDomainFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainFqdnInput() {
    return this._dnsDomainFqdn;
  }

  // dns_domain_ipv4 - computed: false, optional: true, required: false
  private _dnsDomainIpv4?: string; 
  public get dnsDomainIpv4() {
    return this.getStringAttribute('dns_domain_ipv4');
  }
  public set dnsDomainIpv4(value: string) {
    this._dnsDomainIpv4 = value;
  }
  public resetDnsDomainIpv4() {
    this._dnsDomainIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainIpv4Input() {
    return this._dnsDomainIpv4;
  }

  // dns_domain_ipv6 - computed: false, optional: true, required: false
  private _dnsDomainIpv6?: string; 
  public get dnsDomainIpv6() {
    return this.getStringAttribute('dns_domain_ipv6');
  }
  public set dnsDomainIpv6(value: string) {
    this._dnsDomainIpv6 = value;
  }
  public resetDnsDomainIpv6() {
    this._dnsDomainIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainIpv6Input() {
    return this._dnsDomainIpv6;
  }

  // dns_domain_response - computed: false, optional: true, required: false
  private _dnsDomainResponse?: string; 
  public get dnsDomainResponse() {
    return this.getStringAttribute('dns_domain_response');
  }
  public set dnsDomainResponse(value: string) {
    this._dnsDomainResponse = value;
  }
  public resetDnsDomainResponse() {
    this._dnsDomainResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainResponseInput() {
    return this._dnsDomainResponse;
  }
}
export interface HealthMonitorMethodDnsDnsIpv4ExpectA {
  /**
  * Specify fully qualified domain name expected in DNS response answer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv4_fqdn HealthMonitorMethodDnsA#dns_ipv4_fqdn}
  */
  readonly dnsIpv4Fqdn?: string;
  /**
  * Specify response code range (e.g. 0,1-5) (Format is xx,xx-xx (xx between [0,15]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv4_response HealthMonitorMethodDnsA#dns_ipv4_response}
  */
  readonly dnsIpv4Response?: string;
}

export function healthMonitorMethodDnsDnsIpv4ExpectAToTerraform(struct?: HealthMonitorMethodDnsDnsIpv4ExpectAOutputReference | HealthMonitorMethodDnsDnsIpv4ExpectA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ipv4_fqdn: cdktf.stringToTerraform(struct!.dnsIpv4Fqdn),
    dns_ipv4_response: cdktf.stringToTerraform(struct!.dnsIpv4Response),
  }
}


export function healthMonitorMethodDnsDnsIpv4ExpectAToHclTerraform(struct?: HealthMonitorMethodDnsDnsIpv4ExpectAOutputReference | HealthMonitorMethodDnsDnsIpv4ExpectA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_ipv4_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv4Fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ipv4_response: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv4Response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodDnsDnsIpv4ExpectAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodDnsDnsIpv4ExpectA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsIpv4Fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv4Fqdn = this._dnsIpv4Fqdn;
    }
    if (this._dnsIpv4Response !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv4Response = this._dnsIpv4Response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodDnsDnsIpv4ExpectA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsIpv4Fqdn = undefined;
      this._dnsIpv4Response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsIpv4Fqdn = value.dnsIpv4Fqdn;
      this._dnsIpv4Response = value.dnsIpv4Response;
    }
  }

  // dns_ipv4_fqdn - computed: false, optional: true, required: false
  private _dnsIpv4Fqdn?: string; 
  public get dnsIpv4Fqdn() {
    return this.getStringAttribute('dns_ipv4_fqdn');
  }
  public set dnsIpv4Fqdn(value: string) {
    this._dnsIpv4Fqdn = value;
  }
  public resetDnsIpv4Fqdn() {
    this._dnsIpv4Fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4FqdnInput() {
    return this._dnsIpv4Fqdn;
  }

  // dns_ipv4_response - computed: false, optional: true, required: false
  private _dnsIpv4Response?: string; 
  public get dnsIpv4Response() {
    return this.getStringAttribute('dns_ipv4_response');
  }
  public set dnsIpv4Response(value: string) {
    this._dnsIpv4Response = value;
  }
  public resetDnsIpv4Response() {
    this._dnsIpv4Response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4ResponseInput() {
    return this._dnsIpv4Response;
  }
}
export interface HealthMonitorMethodDnsDnsIpv6ExpectA {
  /**
  * Specify fully qualified domain name expected in DNS response answer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv6_fqdn HealthMonitorMethodDnsA#dns_ipv6_fqdn}
  */
  readonly dnsIpv6Fqdn?: string;
  /**
  * Specify response code range (e.g. 0,1-5) (Format is xx,xx-xx (xx between [0,15]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#dns_ipv6_response HealthMonitorMethodDnsA#dns_ipv6_response}
  */
  readonly dnsIpv6Response?: string;
}

export function healthMonitorMethodDnsDnsIpv6ExpectAToTerraform(struct?: HealthMonitorMethodDnsDnsIpv6ExpectAOutputReference | HealthMonitorMethodDnsDnsIpv6ExpectA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ipv6_fqdn: cdktf.stringToTerraform(struct!.dnsIpv6Fqdn),
    dns_ipv6_response: cdktf.stringToTerraform(struct!.dnsIpv6Response),
  }
}


export function healthMonitorMethodDnsDnsIpv6ExpectAToHclTerraform(struct?: HealthMonitorMethodDnsDnsIpv6ExpectAOutputReference | HealthMonitorMethodDnsDnsIpv6ExpectA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_ipv6_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv6Fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ipv6_response: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv6Response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodDnsDnsIpv6ExpectAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodDnsDnsIpv6ExpectA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsIpv6Fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6Fqdn = this._dnsIpv6Fqdn;
    }
    if (this._dnsIpv6Response !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6Response = this._dnsIpv6Response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodDnsDnsIpv6ExpectA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsIpv6Fqdn = undefined;
      this._dnsIpv6Response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsIpv6Fqdn = value.dnsIpv6Fqdn;
      this._dnsIpv6Response = value.dnsIpv6Response;
    }
  }

  // dns_ipv6_fqdn - computed: false, optional: true, required: false
  private _dnsIpv6Fqdn?: string; 
  public get dnsIpv6Fqdn() {
    return this.getStringAttribute('dns_ipv6_fqdn');
  }
  public set dnsIpv6Fqdn(value: string) {
    this._dnsIpv6Fqdn = value;
  }
  public resetDnsIpv6Fqdn() {
    this._dnsIpv6Fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6FqdnInput() {
    return this._dnsIpv6Fqdn;
  }

  // dns_ipv6_response - computed: false, optional: true, required: false
  private _dnsIpv6Response?: string; 
  public get dnsIpv6Response() {
    return this.getStringAttribute('dns_ipv6_response');
  }
  public set dnsIpv6Response(value: string) {
    this._dnsIpv6Response = value;
  }
  public resetDnsIpv6Response() {
    this._dnsIpv6Response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6ResponseInput() {
    return this._dnsIpv6Response;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns thunder_health_monitor_method_dns}
*/
export class HealthMonitorMethodDnsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor_method_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitorMethodDnsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitorMethodDnsA to import
  * @param importFromId The id of the existing HealthMonitorMethodDnsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitorMethodDnsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor_method_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_monitor_method_dns thunder_health_monitor_method_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorMethodDnsAConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorMethodDnsAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor_method_dns',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dns = config.dns;
    this._dnsDomain = config.dnsDomain;
    this._dnsDomainPort = config.dnsDomainPort;
    this._dnsDomainRecurse = config.dnsDomainRecurse;
    this._dnsDomainTcp = config.dnsDomainTcp;
    this._dnsDomainType = config.dnsDomainType;
    this._dnsIpKey = config.dnsIpKey;
    this._dnsIpv4Addr = config.dnsIpv4Addr;
    this._dnsIpv4Port = config.dnsIpv4Port;
    this._dnsIpv4Recurse = config.dnsIpv4Recurse;
    this._dnsIpv4Tcp = config.dnsIpv4Tcp;
    this._dnsIpv6Addr = config.dnsIpv6Addr;
    this._dnsIpv6Port = config.dnsIpv6Port;
    this._dnsIpv6Recurse = config.dnsIpv6Recurse;
    this._dnsIpv6Tcp = config.dnsIpv6Tcp;
    this._id = config.id;
    this._name = config.name;
    this._uuid = config.uuid;
    this._dnsDomainExpect.internalValue = config.dnsDomainExpect;
    this._dnsIpv4Expect.internalValue = config.dnsIpv4Expect;
    this._dnsIpv6Expect.internalValue = config.dnsIpv6Expect;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns - computed: false, optional: true, required: false
  private _dns?: number; 
  public get dns() {
    return this.getNumberAttribute('dns');
  }
  public set dns(value: number) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // dns_domain - computed: false, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
  }

  // dns_domain_port - computed: false, optional: true, required: false
  private _dnsDomainPort?: number; 
  public get dnsDomainPort() {
    return this.getNumberAttribute('dns_domain_port');
  }
  public set dnsDomainPort(value: number) {
    this._dnsDomainPort = value;
  }
  public resetDnsDomainPort() {
    this._dnsDomainPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainPortInput() {
    return this._dnsDomainPort;
  }

  // dns_domain_recurse - computed: false, optional: true, required: false
  private _dnsDomainRecurse?: string; 
  public get dnsDomainRecurse() {
    return this.getStringAttribute('dns_domain_recurse');
  }
  public set dnsDomainRecurse(value: string) {
    this._dnsDomainRecurse = value;
  }
  public resetDnsDomainRecurse() {
    this._dnsDomainRecurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainRecurseInput() {
    return this._dnsDomainRecurse;
  }

  // dns_domain_tcp - computed: false, optional: true, required: false
  private _dnsDomainTcp?: number; 
  public get dnsDomainTcp() {
    return this.getNumberAttribute('dns_domain_tcp');
  }
  public set dnsDomainTcp(value: number) {
    this._dnsDomainTcp = value;
  }
  public resetDnsDomainTcp() {
    this._dnsDomainTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainTcpInput() {
    return this._dnsDomainTcp;
  }

  // dns_domain_type - computed: false, optional: true, required: false
  private _dnsDomainType?: string; 
  public get dnsDomainType() {
    return this.getStringAttribute('dns_domain_type');
  }
  public set dnsDomainType(value: string) {
    this._dnsDomainType = value;
  }
  public resetDnsDomainType() {
    this._dnsDomainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainTypeInput() {
    return this._dnsDomainType;
  }

  // dns_ip_key - computed: false, optional: true, required: false
  private _dnsIpKey?: number; 
  public get dnsIpKey() {
    return this.getNumberAttribute('dns_ip_key');
  }
  public set dnsIpKey(value: number) {
    this._dnsIpKey = value;
  }
  public resetDnsIpKey() {
    this._dnsIpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpKeyInput() {
    return this._dnsIpKey;
  }

  // dns_ipv4_addr - computed: false, optional: true, required: false
  private _dnsIpv4Addr?: string; 
  public get dnsIpv4Addr() {
    return this.getStringAttribute('dns_ipv4_addr');
  }
  public set dnsIpv4Addr(value: string) {
    this._dnsIpv4Addr = value;
  }
  public resetDnsIpv4Addr() {
    this._dnsIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4AddrInput() {
    return this._dnsIpv4Addr;
  }

  // dns_ipv4_port - computed: false, optional: true, required: false
  private _dnsIpv4Port?: number; 
  public get dnsIpv4Port() {
    return this.getNumberAttribute('dns_ipv4_port');
  }
  public set dnsIpv4Port(value: number) {
    this._dnsIpv4Port = value;
  }
  public resetDnsIpv4Port() {
    this._dnsIpv4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4PortInput() {
    return this._dnsIpv4Port;
  }

  // dns_ipv4_recurse - computed: false, optional: true, required: false
  private _dnsIpv4Recurse?: string; 
  public get dnsIpv4Recurse() {
    return this.getStringAttribute('dns_ipv4_recurse');
  }
  public set dnsIpv4Recurse(value: string) {
    this._dnsIpv4Recurse = value;
  }
  public resetDnsIpv4Recurse() {
    this._dnsIpv4Recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4RecurseInput() {
    return this._dnsIpv4Recurse;
  }

  // dns_ipv4_tcp - computed: false, optional: true, required: false
  private _dnsIpv4Tcp?: number; 
  public get dnsIpv4Tcp() {
    return this.getNumberAttribute('dns_ipv4_tcp');
  }
  public set dnsIpv4Tcp(value: number) {
    this._dnsIpv4Tcp = value;
  }
  public resetDnsIpv4Tcp() {
    this._dnsIpv4Tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4TcpInput() {
    return this._dnsIpv4Tcp;
  }

  // dns_ipv6_addr - computed: false, optional: true, required: false
  private _dnsIpv6Addr?: string; 
  public get dnsIpv6Addr() {
    return this.getStringAttribute('dns_ipv6_addr');
  }
  public set dnsIpv6Addr(value: string) {
    this._dnsIpv6Addr = value;
  }
  public resetDnsIpv6Addr() {
    this._dnsIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6AddrInput() {
    return this._dnsIpv6Addr;
  }

  // dns_ipv6_port - computed: false, optional: true, required: false
  private _dnsIpv6Port?: number; 
  public get dnsIpv6Port() {
    return this.getNumberAttribute('dns_ipv6_port');
  }
  public set dnsIpv6Port(value: number) {
    this._dnsIpv6Port = value;
  }
  public resetDnsIpv6Port() {
    this._dnsIpv6Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6PortInput() {
    return this._dnsIpv6Port;
  }

  // dns_ipv6_recurse - computed: false, optional: true, required: false
  private _dnsIpv6Recurse?: string; 
  public get dnsIpv6Recurse() {
    return this.getStringAttribute('dns_ipv6_recurse');
  }
  public set dnsIpv6Recurse(value: string) {
    this._dnsIpv6Recurse = value;
  }
  public resetDnsIpv6Recurse() {
    this._dnsIpv6Recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6RecurseInput() {
    return this._dnsIpv6Recurse;
  }

  // dns_ipv6_tcp - computed: false, optional: true, required: false
  private _dnsIpv6Tcp?: number; 
  public get dnsIpv6Tcp() {
    return this.getNumberAttribute('dns_ipv6_tcp');
  }
  public set dnsIpv6Tcp(value: number) {
    this._dnsIpv6Tcp = value;
  }
  public resetDnsIpv6Tcp() {
    this._dnsIpv6Tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6TcpInput() {
    return this._dnsIpv6Tcp;
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

  // dns_domain_expect - computed: false, optional: true, required: false
  private _dnsDomainExpect = new HealthMonitorMethodDnsDnsDomainExpectAOutputReference(this, "dns_domain_expect");
  public get dnsDomainExpect() {
    return this._dnsDomainExpect;
  }
  public putDnsDomainExpect(value: HealthMonitorMethodDnsDnsDomainExpectA) {
    this._dnsDomainExpect.internalValue = value;
  }
  public resetDnsDomainExpect() {
    this._dnsDomainExpect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainExpectInput() {
    return this._dnsDomainExpect.internalValue;
  }

  // dns_ipv4_expect - computed: false, optional: true, required: false
  private _dnsIpv4Expect = new HealthMonitorMethodDnsDnsIpv4ExpectAOutputReference(this, "dns_ipv4_expect");
  public get dnsIpv4Expect() {
    return this._dnsIpv4Expect;
  }
  public putDnsIpv4Expect(value: HealthMonitorMethodDnsDnsIpv4ExpectA) {
    this._dnsIpv4Expect.internalValue = value;
  }
  public resetDnsIpv4Expect() {
    this._dnsIpv4Expect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4ExpectInput() {
    return this._dnsIpv4Expect.internalValue;
  }

  // dns_ipv6_expect - computed: false, optional: true, required: false
  private _dnsIpv6Expect = new HealthMonitorMethodDnsDnsIpv6ExpectAOutputReference(this, "dns_ipv6_expect");
  public get dnsIpv6Expect() {
    return this._dnsIpv6Expect;
  }
  public putDnsIpv6Expect(value: HealthMonitorMethodDnsDnsIpv6ExpectA) {
    this._dnsIpv6Expect.internalValue = value;
  }
  public resetDnsIpv6Expect() {
    this._dnsIpv6Expect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6ExpectInput() {
    return this._dnsIpv6Expect.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns: cdktf.numberToTerraform(this._dns),
      dns_domain: cdktf.stringToTerraform(this._dnsDomain),
      dns_domain_port: cdktf.numberToTerraform(this._dnsDomainPort),
      dns_domain_recurse: cdktf.stringToTerraform(this._dnsDomainRecurse),
      dns_domain_tcp: cdktf.numberToTerraform(this._dnsDomainTcp),
      dns_domain_type: cdktf.stringToTerraform(this._dnsDomainType),
      dns_ip_key: cdktf.numberToTerraform(this._dnsIpKey),
      dns_ipv4_addr: cdktf.stringToTerraform(this._dnsIpv4Addr),
      dns_ipv4_port: cdktf.numberToTerraform(this._dnsIpv4Port),
      dns_ipv4_recurse: cdktf.stringToTerraform(this._dnsIpv4Recurse),
      dns_ipv4_tcp: cdktf.numberToTerraform(this._dnsIpv4Tcp),
      dns_ipv6_addr: cdktf.stringToTerraform(this._dnsIpv6Addr),
      dns_ipv6_port: cdktf.numberToTerraform(this._dnsIpv6Port),
      dns_ipv6_recurse: cdktf.stringToTerraform(this._dnsIpv6Recurse),
      dns_ipv6_tcp: cdktf.numberToTerraform(this._dnsIpv6Tcp),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      dns_domain_expect: healthMonitorMethodDnsDnsDomainExpectAToTerraform(this._dnsDomainExpect.internalValue),
      dns_ipv4_expect: healthMonitorMethodDnsDnsIpv4ExpectAToTerraform(this._dnsIpv4Expect.internalValue),
      dns_ipv6_expect: healthMonitorMethodDnsDnsIpv6ExpectAToTerraform(this._dnsIpv6Expect.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns: {
        value: cdktf.numberToHclTerraform(this._dns),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_domain: {
        value: cdktf.stringToHclTerraform(this._dnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_domain_port: {
        value: cdktf.numberToHclTerraform(this._dnsDomainPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_domain_recurse: {
        value: cdktf.stringToHclTerraform(this._dnsDomainRecurse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_domain_tcp: {
        value: cdktf.numberToHclTerraform(this._dnsDomainTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_domain_type: {
        value: cdktf.stringToHclTerraform(this._dnsDomainType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_ip_key: {
        value: cdktf.numberToHclTerraform(this._dnsIpKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_ipv4_addr: {
        value: cdktf.stringToHclTerraform(this._dnsIpv4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_ipv4_port: {
        value: cdktf.numberToHclTerraform(this._dnsIpv4Port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_ipv4_recurse: {
        value: cdktf.stringToHclTerraform(this._dnsIpv4Recurse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_ipv4_tcp: {
        value: cdktf.numberToHclTerraform(this._dnsIpv4Tcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._dnsIpv6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_ipv6_port: {
        value: cdktf.numberToHclTerraform(this._dnsIpv6Port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_ipv6_recurse: {
        value: cdktf.stringToHclTerraform(this._dnsIpv6Recurse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_ipv6_tcp: {
        value: cdktf.numberToHclTerraform(this._dnsIpv6Tcp),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      dns_domain_expect: {
        value: healthMonitorMethodDnsDnsDomainExpectAToHclTerraform(this._dnsDomainExpect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorMethodDnsDnsDomainExpectAList",
      },
      dns_ipv4_expect: {
        value: healthMonitorMethodDnsDnsIpv4ExpectAToHclTerraform(this._dnsIpv4Expect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorMethodDnsDnsIpv4ExpectAList",
      },
      dns_ipv6_expect: {
        value: healthMonitorMethodDnsDnsIpv6ExpectAToHclTerraform(this._dnsIpv6Expect.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorMethodDnsDnsIpv6ExpectAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
