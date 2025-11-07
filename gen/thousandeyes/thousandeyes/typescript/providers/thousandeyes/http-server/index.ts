// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HttpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of ThousandEyes agent IDs to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#agents HttpServer#agents}
  */
  readonly agents: string[];
  /**
  * List of alert rules IDs to apply to the test (get `ruleId` from `/alerts/rules` endpoint. If `alertsEnabled` is set to `true` and `alertRules` is not included on test creation or update, applicable user default alert rules will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#alert_rules HttpServer#alert_rules}
  */
  readonly alertRules?: string[];
  /**
  * Set to 'true' to enable alerts, or 'false' to disable alerts. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#alerts_enabled HttpServer#alerts_enabled}
  */
  readonly alertsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allows TLS renegotiation with servers not supporting RFC 5746. Default Set to true to allow unsafe legacy renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#allow_unsafe_legacy_renegotiation HttpServer#allow_unsafe_legacy_renegotiation}
  */
  readonly allowUnsafeLegacyRenegotiation?: boolean | cdktf.IResolvable;
  /**
  * [none, basic, ntlm, kerberos, oauth] The HTTP authentication type. Defaults to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#auth_type HttpServer#auth_type}
  */
  readonly authType?: string;
  /**
  * Set to `true` to measure bandwidth. This only applies to Enterprise Agents assigned to the test, and requires that networkMeasurements is set. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#bandwidth_measurements HttpServer#bandwidth_measurements}
  */
  readonly bandwidthMeasurements?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP measurements. Set to true for enabled, false for disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#bgp_measurements HttpServer#bgp_measurements}
  */
  readonly bgpMeasurements?: boolean | cdktf.IResolvable;
  /**
  * String representation (containing newline characters) of client certificate, the private key must be placed first, then the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#client_certificate HttpServer#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Indicates whether network data to the proxy should be collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#collect_proxy_network_data HttpServer#collect_proxy_network_data}
  */
  readonly collectProxyNetworkData?: boolean | cdktf.IResolvable;
  /**
  * Verify content using a regular expression. This field does not require escaping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#content_regex HttpServer#content_regex}
  */
  readonly contentRegex?: string;
  /**
  * A description of the alert rule. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#description HttpServer#description}
  */
  readonly description?: string;
  /**
  * The valid HTTP response code you’re interested in retrieving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#desired_status_code HttpServer#desired_status_code}
  */
  readonly desiredStatusCode?: string;
  /**
  * Adds distributed tracing headers to API requests using B3 and W3C standards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#distributed_tracing HttpServer#distributed_tracing}
  */
  readonly distributedTracing?: boolean | cdktf.IResolvable;
  /**
  * The IP address to use for DNS override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#dns_override HttpServer#dns_override}
  */
  readonly dnsOverride?: string;
  /**
  * Specify the maximum number of bytes to download from the target object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#download_limit HttpServer#download_limit}
  */
  readonly downloadLimit?: number;
  /**
  * Enables or disables the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#enabled HttpServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Sets packets rate sent to measure the network in packets per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#fixed_packet_rate HttpServer#fixed_packet_rate}
  */
  readonly fixedPacketRate?: number;
  /**
  * Follow HTTP/301 or HTTP/302 redirect directives. Defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#follow_redirects HttpServer#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * ["header: value", "header2: value"] The array of header strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#headers HttpServer#headers}
  */
  readonly headers?: string[];
  /**
  * The target time for HTTP server completion, specified in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#http_target_time HttpServer#http_target_time}
  */
  readonly httpTargetTime?: number;
  /**
  * The target time for HTTP server limits, specified in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#http_time_limit HttpServer#http_time_limit}
  */
  readonly httpTimeLimit?: number;
  /**
  * Set to 2 for the default HTTP version (prefer HTTP/2), or 1 for HTTP/1.1 only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#http_version HttpServer#http_version}
  */
  readonly httpVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#id HttpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set to 'true' to capture response headers for objects loaded by the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#include_headers HttpServer#include_headers}
  */
  readonly includeHeaders?: boolean | cdktf.IResolvable;
  /**
  * The interval to run the test on, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#interval HttpServer#interval}
  */
  readonly interval: number;
  /**
  * [force-ipv4, prefer-ipv6, force-ipv6, or use-agent-policy] IP version policy. Overrides the IPv6 policy configured at the agent level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#ipv6_policy HttpServer#ipv6_policy}
  */
  readonly ipv6Policy?: string;
  /**
  * Contains list of BGP monitor IDs (get `monitorId` from `/monitors` endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#monitors HttpServer#monitors}
  */
  readonly monitors?: string[];
  /**
  * Measure MTU sizes on the network from agents to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#mtu_measurements HttpServer#mtu_measurements}
  */
  readonly mtuMeasurements?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to enable network measurements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#network_measurements HttpServer#network_measurements}
  */
  readonly networkMeasurements?: boolean | cdktf.IResolvable;
  /**
  * The number of path traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#num_path_traces HttpServer#num_path_traces}
  */
  readonly numPathTraces?: number;
  /**
  * Flag indicating if a proxy other than the default should be used. To override the default proxy for agents, set to `true` and specify a value for `overrideProxyId`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#override_agent_proxy HttpServer#override_agent_proxy}
  */
  readonly overrideAgentProxy?: boolean | cdktf.IResolvable;
  /**
  * ID of the proxy to be used if the default proxy is overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#override_proxy_id HttpServer#override_proxy_id}
  */
  readonly overrideProxyId?: string;
  /**
  * The password to be used to authenticate with the destination server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#password HttpServer#password}
  */
  readonly password?: string;
  /**
  * [classic or in-session] Choose 'inSession' to perform the path trace within a TCP session. Default value is 'classic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#path_trace_mode HttpServer#path_trace_mode}
  */
  readonly pathTraceMode?: string;
  /**
  * The POST body content. No escaping is required. If the post body is set to something other than empty, the requestMethod will be set to POST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#post_body HttpServer#post_body}
  */
  readonly postBody?: string;
  /**
  * [auto, sack, or syn] The probe mode used by end-to-end network tests. This is only valid if the protocol is set to TCP. The default value is AUTO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#probe_mode HttpServer#probe_mode}
  */
  readonly probeMode?: string;
  /**
  * The protocol used by dependent network tests (end-to-end, path trace, PMTUD). Default value is tcp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#protocol HttpServer#protocol}
  */
  readonly protocol?: string;
  /**
  * Indicates whether agents should randomize the start time in each test round.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#randomized_start_time HttpServer#randomized_start_time}
  */
  readonly randomizedStartTime?: boolean | cdktf.IResolvable;
  /**
  * List of accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#shared_with_accounts HttpServer#shared_with_accounts}
  */
  readonly sharedWithAccounts?: string[];
  /**
  * Defines the SSL version. 0 for auto, 3 for SSLv3, 4 for TLS v1.0, 5 for TLS v1.1, 6 for TLS v1.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#ssl_version_id HttpServer#ssl_version_id}
  */
  readonly sslVersionId?: string;
  /**
  * The name of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#test_name HttpServer#test_name}
  */
  readonly testName?: string;
  /**
  * The target URL for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#url HttpServer#url}
  */
  readonly url: string;
  /**
  * Enable to use basic authentication. Only include this field if you are using authentication. Requires the username and password to be set if enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#use_ntlm HttpServer#use_ntlm}
  */
  readonly useNtlm?: boolean | cdktf.IResolvable;
  /**
  * Enable to automatically add all available Public BGP Monitors to the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#use_public_bgp HttpServer#use_public_bgp}
  */
  readonly usePublicBgp?: boolean | cdktf.IResolvable;
  /**
  * The user-agent string to be provided during the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#user_agent HttpServer#user_agent}
  */
  readonly userAgent?: string;
  /**
  * The username to be used to authenticate with the destination server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#username HttpServer#username}
  */
  readonly username?: string;
  /**
  * Set whether to ignore certificate errors. Set to 'false' to ignore certificate errors. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#verify_certificate HttpServer#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * agent_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#agent_interfaces HttpServer#agent_interfaces}
  */
  readonly agentInterfaces?: HttpServerAgentInterfaces[] | cdktf.IResolvable;
  /**
  * custom_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#custom_headers HttpServer#custom_headers}
  */
  readonly customHeaders?: HttpServerCustomHeaders[] | cdktf.IResolvable;
  /**
  * oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#oauth HttpServer#oauth}
  */
  readonly oauth?: HttpServerOauth[] | cdktf.IResolvable;
}
export interface HttpServerAgentInterfaces {
  /**
  * The agent ID of the enterprise agent for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#agent_id HttpServer#agent_id}
  */
  readonly agentId?: string;
  /**
  * IP address of the agent interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#ip_address HttpServer#ip_address}
  */
  readonly ipAddress?: string;
}

export function httpServerAgentInterfacesToTerraform(struct?: HttpServerAgentInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function httpServerAgentInterfacesToHclTerraform(struct?: HttpServerAgentInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_id: {
      value: cdktf.stringToHclTerraform(struct!.agentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpServerAgentInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpServerAgentInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentId = this._agentId;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpServerAgentInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentId = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentId = value.agentId;
      this._ipAddress = value.ipAddress;
    }
  }

  // agent_id - computed: false, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class HttpServerAgentInterfacesList extends cdktf.ComplexList {
  public internalValue? : HttpServerAgentInterfaces[] | cdktf.IResolvable

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
  public get(index: number): HttpServerAgentInterfacesOutputReference {
    return new HttpServerAgentInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpServerCustomHeaders {
  /**
  * Use these HTTP headers for all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#all HttpServer#all}
  */
  readonly all?: { [key: string]: string };
  /**
  * Use these HTTP headers for the specified domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#domains HttpServer#domains}
  */
  readonly domains?: { [key: string]: string };
  /**
  * Use these HTTP headers for root server request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#root HttpServer#root}
  */
  readonly root?: { [key: string]: string };
}

export function httpServerCustomHeadersToTerraform(struct?: HttpServerCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.all),
    domains: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.domains),
    root: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.root),
  }
}


export function httpServerCustomHeadersToHclTerraform(struct?: HttpServerCustomHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.all),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    domains: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.domains),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    root: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.root),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpServerCustomHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpServerCustomHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._root !== undefined) {
      hasAnyValues = true;
      internalValueResult.root = this._root;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpServerCustomHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._domains = undefined;
      this._root = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._domains = value.domains;
      this._root = value.root;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: { [key: string]: string }; 
  public get all() {
    return this.getStringMapAttribute('all');
  }
  public set all(value: { [key: string]: string }) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: { [key: string]: string }; 
  public get domains() {
    return this.getStringMapAttribute('domains');
  }
  public set domains(value: { [key: string]: string }) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // root - computed: false, optional: true, required: false
  private _root?: { [key: string]: string }; 
  public get root() {
    return this.getStringMapAttribute('root');
  }
  public set root(value: { [key: string]: string }) {
    this._root = value;
  }
  public resetRoot() {
    this._root = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootInput() {
    return this._root;
  }
}

export class HttpServerCustomHeadersList extends cdktf.ComplexList {
  public internalValue? : HttpServerCustomHeaders[] | cdktf.IResolvable

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
  public get(index: number): HttpServerCustomHeadersOutputReference {
    return new HttpServerCustomHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HttpServerOauth {
  /**
  * [none, basic, ntlm, kerberos, oauth] The HTTP authentication type. Defaults to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#auth_type HttpServer#auth_type}
  */
  readonly authType?: string;
  /**
  * The ID of the OAuth configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#config_id HttpServer#config_id}
  */
  readonly configId: string;
  /**
  * Request headers used for OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#headers HttpServer#headers}
  */
  readonly headers?: string;
  /**
  * OAuth password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#password HttpServer#password}
  */
  readonly password?: string;
  /**
  * Enter the OAuth body for the HTTP POST request in this field when using OAuth as the authentication mechanism. No special escaping is required. If content is provided in the post body, the `requestMethod` is automatically set to POST.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#post_body HttpServer#post_body}
  */
  readonly postBody?: string;
  /**
  * [get, post, put, delete, patch, options, trace] Request method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#request_method HttpServer#request_method}
  */
  readonly requestMethod?: string;
  /**
  * Target for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#test_url HttpServer#test_url}
  */
  readonly testUrl: string;
  /**
  * OAuth username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#username HttpServer#username}
  */
  readonly username?: string;
}

export function httpServerOauthToTerraform(struct?: HttpServerOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    config_id: cdktf.stringToTerraform(struct!.configId),
    headers: cdktf.stringToTerraform(struct!.headers),
    password: cdktf.stringToTerraform(struct!.password),
    post_body: cdktf.stringToTerraform(struct!.postBody),
    request_method: cdktf.stringToTerraform(struct!.requestMethod),
    test_url: cdktf.stringToTerraform(struct!.testUrl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function httpServerOauthToHclTerraform(struct?: HttpServerOauth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_id: {
      value: cdktf.stringToHclTerraform(struct!.configId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.stringToHclTerraform(struct!.headers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_body: {
      value: cdktf.stringToHclTerraform(struct!.postBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_method: {
      value: cdktf.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_url: {
      value: cdktf.stringToHclTerraform(struct!.testUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HttpServerOauthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HttpServerOauth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._configId !== undefined) {
      hasAnyValues = true;
      internalValueResult.configId = this._configId;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._postBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.postBody = this._postBody;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._testUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.testUrl = this._testUrl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HttpServerOauth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._configId = undefined;
      this._headers = undefined;
      this._password = undefined;
      this._postBody = undefined;
      this._requestMethod = undefined;
      this._testUrl = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._configId = value.configId;
      this._headers = value.headers;
      this._password = value.password;
      this._postBody = value.postBody;
      this._requestMethod = value.requestMethod;
      this._testUrl = value.testUrl;
      this._username = value.username;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // config_id - computed: false, optional: false, required: true
  private _configId?: string; 
  public get configId() {
    return this.getStringAttribute('config_id');
  }
  public set configId(value: string) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string; 
  public get headers() {
    return this.getStringAttribute('headers');
  }
  public set headers(value: string) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // post_body - computed: false, optional: true, required: false
  private _postBody?: string; 
  public get postBody() {
    return this.getStringAttribute('post_body');
  }
  public set postBody(value: string) {
    this._postBody = value;
  }
  public resetPostBody() {
    this._postBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBodyInput() {
    return this._postBody;
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // test_url - computed: false, optional: false, required: true
  private _testUrl?: string; 
  public get testUrl() {
    return this.getStringAttribute('test_url');
  }
  public set testUrl(value: string) {
    this._testUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testUrlInput() {
    return this._testUrl;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class HttpServerOauthList extends cdktf.ComplexList {
  public internalValue? : HttpServerOauth[] | cdktf.IResolvable

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
  public get(index: number): HttpServerOauthOutputReference {
    return new HttpServerOauthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server thousandeyes_http_server}
*/
export class HttpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes_http_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HttpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HttpServer to import
  * @param importFromId The id of the existing HttpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HttpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes_http_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.2/docs/resources/http_server thousandeyes_http_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HttpServerConfig
  */
  public constructor(scope: Construct, id: string, config: HttpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes_http_server',
      terraformGeneratorMetadata: {
        providerName: 'thousandeyes',
        providerVersion: '3.1.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agents = config.agents;
    this._alertRules = config.alertRules;
    this._alertsEnabled = config.alertsEnabled;
    this._allowUnsafeLegacyRenegotiation = config.allowUnsafeLegacyRenegotiation;
    this._authType = config.authType;
    this._bandwidthMeasurements = config.bandwidthMeasurements;
    this._bgpMeasurements = config.bgpMeasurements;
    this._clientCertificate = config.clientCertificate;
    this._collectProxyNetworkData = config.collectProxyNetworkData;
    this._contentRegex = config.contentRegex;
    this._description = config.description;
    this._desiredStatusCode = config.desiredStatusCode;
    this._distributedTracing = config.distributedTracing;
    this._dnsOverride = config.dnsOverride;
    this._downloadLimit = config.downloadLimit;
    this._enabled = config.enabled;
    this._fixedPacketRate = config.fixedPacketRate;
    this._followRedirects = config.followRedirects;
    this._headers = config.headers;
    this._httpTargetTime = config.httpTargetTime;
    this._httpTimeLimit = config.httpTimeLimit;
    this._httpVersion = config.httpVersion;
    this._id = config.id;
    this._includeHeaders = config.includeHeaders;
    this._interval = config.interval;
    this._ipv6Policy = config.ipv6Policy;
    this._monitors = config.monitors;
    this._mtuMeasurements = config.mtuMeasurements;
    this._networkMeasurements = config.networkMeasurements;
    this._numPathTraces = config.numPathTraces;
    this._overrideAgentProxy = config.overrideAgentProxy;
    this._overrideProxyId = config.overrideProxyId;
    this._password = config.password;
    this._pathTraceMode = config.pathTraceMode;
    this._postBody = config.postBody;
    this._probeMode = config.probeMode;
    this._protocol = config.protocol;
    this._randomizedStartTime = config.randomizedStartTime;
    this._sharedWithAccounts = config.sharedWithAccounts;
    this._sslVersionId = config.sslVersionId;
    this._testName = config.testName;
    this._url = config.url;
    this._useNtlm = config.useNtlm;
    this._usePublicBgp = config.usePublicBgp;
    this._userAgent = config.userAgent;
    this._username = config.username;
    this._verifyCertificate = config.verifyCertificate;
    this._agentInterfaces.internalValue = config.agentInterfaces;
    this._customHeaders.internalValue = config.customHeaders;
    this._oauth.internalValue = config.oauth;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agents - computed: false, optional: false, required: true
  private _agents?: string[]; 
  public get agents() {
    return cdktf.Fn.tolist(this.getListAttribute('agents'));
  }
  public set agents(value: string[]) {
    this._agents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents;
  }

  // alert_rules - computed: false, optional: true, required: false
  private _alertRules?: string[]; 
  public get alertRules() {
    return cdktf.Fn.tolist(this.getListAttribute('alert_rules'));
  }
  public set alertRules(value: string[]) {
    this._alertRules = value;
  }
  public resetAlertRules() {
    this._alertRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRulesInput() {
    return this._alertRules;
  }

  // alerts_enabled - computed: false, optional: true, required: false
  private _alertsEnabled?: boolean | cdktf.IResolvable; 
  public get alertsEnabled() {
    return this.getBooleanAttribute('alerts_enabled');
  }
  public set alertsEnabled(value: boolean | cdktf.IResolvable) {
    this._alertsEnabled = value;
  }
  public resetAlertsEnabled() {
    this._alertsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsEnabledInput() {
    return this._alertsEnabled;
  }

  // allow_unsafe_legacy_renegotiation - computed: false, optional: true, required: false
  private _allowUnsafeLegacyRenegotiation?: boolean | cdktf.IResolvable; 
  public get allowUnsafeLegacyRenegotiation() {
    return this.getBooleanAttribute('allow_unsafe_legacy_renegotiation');
  }
  public set allowUnsafeLegacyRenegotiation(value: boolean | cdktf.IResolvable) {
    this._allowUnsafeLegacyRenegotiation = value;
  }
  public resetAllowUnsafeLegacyRenegotiation() {
    this._allowUnsafeLegacyRenegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnsafeLegacyRenegotiationInput() {
    return this._allowUnsafeLegacyRenegotiation;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // bandwidth_measurements - computed: false, optional: true, required: false
  private _bandwidthMeasurements?: boolean | cdktf.IResolvable; 
  public get bandwidthMeasurements() {
    return this.getBooleanAttribute('bandwidth_measurements');
  }
  public set bandwidthMeasurements(value: boolean | cdktf.IResolvable) {
    this._bandwidthMeasurements = value;
  }
  public resetBandwidthMeasurements() {
    this._bandwidthMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthMeasurementsInput() {
    return this._bandwidthMeasurements;
  }

  // bgp_measurements - computed: false, optional: true, required: false
  private _bgpMeasurements?: boolean | cdktf.IResolvable; 
  public get bgpMeasurements() {
    return this.getBooleanAttribute('bgp_measurements');
  }
  public set bgpMeasurements(value: boolean | cdktf.IResolvable) {
    this._bgpMeasurements = value;
  }
  public resetBgpMeasurements() {
    this._bgpMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpMeasurementsInput() {
    return this._bgpMeasurements;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // collect_proxy_network_data - computed: false, optional: true, required: false
  private _collectProxyNetworkData?: boolean | cdktf.IResolvable; 
  public get collectProxyNetworkData() {
    return this.getBooleanAttribute('collect_proxy_network_data');
  }
  public set collectProxyNetworkData(value: boolean | cdktf.IResolvable) {
    this._collectProxyNetworkData = value;
  }
  public resetCollectProxyNetworkData() {
    this._collectProxyNetworkData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectProxyNetworkDataInput() {
    return this._collectProxyNetworkData;
  }

  // content_regex - computed: false, optional: true, required: false
  private _contentRegex?: string; 
  public get contentRegex() {
    return this.getStringAttribute('content_regex');
  }
  public set contentRegex(value: string) {
    this._contentRegex = value;
  }
  public resetContentRegex() {
    this._contentRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRegexInput() {
    return this._contentRegex;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // desired_status_code - computed: false, optional: true, required: false
  private _desiredStatusCode?: string; 
  public get desiredStatusCode() {
    return this.getStringAttribute('desired_status_code');
  }
  public set desiredStatusCode(value: string) {
    this._desiredStatusCode = value;
  }
  public resetDesiredStatusCode() {
    this._desiredStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStatusCodeInput() {
    return this._desiredStatusCode;
  }

  // distributed_tracing - computed: false, optional: true, required: false
  private _distributedTracing?: boolean | cdktf.IResolvable; 
  public get distributedTracing() {
    return this.getBooleanAttribute('distributed_tracing');
  }
  public set distributedTracing(value: boolean | cdktf.IResolvable) {
    this._distributedTracing = value;
  }
  public resetDistributedTracing() {
    this._distributedTracing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedTracingInput() {
    return this._distributedTracing;
  }

  // dns_override - computed: false, optional: true, required: false
  private _dnsOverride?: string; 
  public get dnsOverride() {
    return this.getStringAttribute('dns_override');
  }
  public set dnsOverride(value: string) {
    this._dnsOverride = value;
  }
  public resetDnsOverride() {
    this._dnsOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOverrideInput() {
    return this._dnsOverride;
  }

  // download_limit - computed: false, optional: true, required: false
  private _downloadLimit?: number; 
  public get downloadLimit() {
    return this.getNumberAttribute('download_limit');
  }
  public set downloadLimit(value: number) {
    this._downloadLimit = value;
  }
  public resetDownloadLimit() {
    this._downloadLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadLimitInput() {
    return this._downloadLimit;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fixed_packet_rate - computed: false, optional: true, required: false
  private _fixedPacketRate?: number; 
  public get fixedPacketRate() {
    return this.getNumberAttribute('fixed_packet_rate');
  }
  public set fixedPacketRate(value: number) {
    this._fixedPacketRate = value;
  }
  public resetFixedPacketRate() {
    this._fixedPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedPacketRateInput() {
    return this._fixedPacketRate;
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects');
  }
  public set followRedirects(value: boolean | cdktf.IResolvable) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // http_target_time - computed: false, optional: true, required: false
  private _httpTargetTime?: number; 
  public get httpTargetTime() {
    return this.getNumberAttribute('http_target_time');
  }
  public set httpTargetTime(value: number) {
    this._httpTargetTime = value;
  }
  public resetHttpTargetTime() {
    this._httpTargetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTargetTimeInput() {
    return this._httpTargetTime;
  }

  // http_time_limit - computed: false, optional: true, required: false
  private _httpTimeLimit?: number; 
  public get httpTimeLimit() {
    return this.getNumberAttribute('http_time_limit');
  }
  public set httpTimeLimit(value: number) {
    this._httpTimeLimit = value;
  }
  public resetHttpTimeLimit() {
    this._httpTimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTimeLimitInput() {
    return this._httpTimeLimit;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: number; 
  public get httpVersion() {
    return this.getNumberAttribute('http_version');
  }
  public set httpVersion(value: number) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
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

  // include_headers - computed: false, optional: true, required: false
  private _includeHeaders?: boolean | cdktf.IResolvable; 
  public get includeHeaders() {
    return this.getBooleanAttribute('include_headers');
  }
  public set includeHeaders(value: boolean | cdktf.IResolvable) {
    this._includeHeaders = value;
  }
  public resetIncludeHeaders() {
    this._includeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeHeadersInput() {
    return this._includeHeaders;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // ipv6_policy - computed: false, optional: true, required: false
  private _ipv6Policy?: string; 
  public get ipv6Policy() {
    return this.getStringAttribute('ipv6_policy');
  }
  public set ipv6Policy(value: string) {
    this._ipv6Policy = value;
  }
  public resetIpv6Policy() {
    this._ipv6Policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PolicyInput() {
    return this._ipv6Policy;
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // live_share - computed: true, optional: false, required: false
  public get liveShare() {
    return this.getBooleanAttribute('live_share');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_date - computed: true, optional: false, required: false
  public get modifiedDate() {
    return this.getStringAttribute('modified_date');
  }

  // monitors - computed: false, optional: true, required: false
  private _monitors?: string[]; 
  public get monitors() {
    return cdktf.Fn.tolist(this.getListAttribute('monitors'));
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  public resetMonitors() {
    this._monitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // mtu_measurements - computed: false, optional: true, required: false
  private _mtuMeasurements?: boolean | cdktf.IResolvable; 
  public get mtuMeasurements() {
    return this.getBooleanAttribute('mtu_measurements');
  }
  public set mtuMeasurements(value: boolean | cdktf.IResolvable) {
    this._mtuMeasurements = value;
  }
  public resetMtuMeasurements() {
    this._mtuMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuMeasurementsInput() {
    return this._mtuMeasurements;
  }

  // network_measurements - computed: false, optional: true, required: false
  private _networkMeasurements?: boolean | cdktf.IResolvable; 
  public get networkMeasurements() {
    return this.getBooleanAttribute('network_measurements');
  }
  public set networkMeasurements(value: boolean | cdktf.IResolvable) {
    this._networkMeasurements = value;
  }
  public resetNetworkMeasurements() {
    this._networkMeasurements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMeasurementsInput() {
    return this._networkMeasurements;
  }

  // num_path_traces - computed: false, optional: true, required: false
  private _numPathTraces?: number; 
  public get numPathTraces() {
    return this.getNumberAttribute('num_path_traces');
  }
  public set numPathTraces(value: number) {
    this._numPathTraces = value;
  }
  public resetNumPathTraces() {
    this._numPathTraces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numPathTracesInput() {
    return this._numPathTraces;
  }

  // override_agent_proxy - computed: false, optional: true, required: false
  private _overrideAgentProxy?: boolean | cdktf.IResolvable; 
  public get overrideAgentProxy() {
    return this.getBooleanAttribute('override_agent_proxy');
  }
  public set overrideAgentProxy(value: boolean | cdktf.IResolvable) {
    this._overrideAgentProxy = value;
  }
  public resetOverrideAgentProxy() {
    this._overrideAgentProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideAgentProxyInput() {
    return this._overrideAgentProxy;
  }

  // override_proxy_id - computed: false, optional: true, required: false
  private _overrideProxyId?: string; 
  public get overrideProxyId() {
    return this.getStringAttribute('override_proxy_id');
  }
  public set overrideProxyId(value: string) {
    this._overrideProxyId = value;
  }
  public resetOverrideProxyId() {
    this._overrideProxyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideProxyIdInput() {
    return this._overrideProxyId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // path_trace_mode - computed: false, optional: true, required: false
  private _pathTraceMode?: string; 
  public get pathTraceMode() {
    return this.getStringAttribute('path_trace_mode');
  }
  public set pathTraceMode(value: string) {
    this._pathTraceMode = value;
  }
  public resetPathTraceMode() {
    this._pathTraceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathTraceModeInput() {
    return this._pathTraceMode;
  }

  // post_body - computed: false, optional: true, required: false
  private _postBody?: string; 
  public get postBody() {
    return this.getStringAttribute('post_body');
  }
  public set postBody(value: string) {
    this._postBody = value;
  }
  public resetPostBody() {
    this._postBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBodyInput() {
    return this._postBody;
  }

  // probe_mode - computed: false, optional: true, required: false
  private _probeMode?: string; 
  public get probeMode() {
    return this.getStringAttribute('probe_mode');
  }
  public set probeMode(value: string) {
    this._probeMode = value;
  }
  public resetProbeMode() {
    this._probeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeModeInput() {
    return this._probeMode;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // randomized_start_time - computed: false, optional: true, required: false
  private _randomizedStartTime?: boolean | cdktf.IResolvable; 
  public get randomizedStartTime() {
    return this.getBooleanAttribute('randomized_start_time');
  }
  public set randomizedStartTime(value: boolean | cdktf.IResolvable) {
    this._randomizedStartTime = value;
  }
  public resetRandomizedStartTime() {
    this._randomizedStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomizedStartTimeInput() {
    return this._randomizedStartTime;
  }

  // saved_event - computed: true, optional: false, required: false
  public get savedEvent() {
    return this.getBooleanAttribute('saved_event');
  }

  // shared_with_accounts - computed: false, optional: true, required: false
  private _sharedWithAccounts?: string[]; 
  public get sharedWithAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('shared_with_accounts'));
  }
  public set sharedWithAccounts(value: string[]) {
    this._sharedWithAccounts = value;
  }
  public resetSharedWithAccounts() {
    this._sharedWithAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedWithAccountsInput() {
    return this._sharedWithAccounts;
  }

  // ssl_version - computed: true, optional: false, required: false
  public get sslVersion() {
    return this.getStringAttribute('ssl_version');
  }

  // ssl_version_id - computed: false, optional: true, required: false
  private _sslVersionId?: string; 
  public get sslVersionId() {
    return this.getStringAttribute('ssl_version_id');
  }
  public set sslVersionId(value: string) {
    this._sslVersionId = value;
  }
  public resetSslVersionId() {
    this._sslVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVersionIdInput() {
    return this._sslVersionId;
  }

  // test_id - computed: true, optional: false, required: false
  public get testId() {
    return this.getStringAttribute('test_id');
  }

  // test_name - computed: false, optional: true, required: false
  private _testName?: string; 
  public get testName() {
    return this.getStringAttribute('test_name');
  }
  public set testName(value: string) {
    this._testName = value;
  }
  public resetTestName() {
    this._testName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testNameInput() {
    return this._testName;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_ntlm - computed: false, optional: true, required: false
  private _useNtlm?: boolean | cdktf.IResolvable; 
  public get useNtlm() {
    return this.getBooleanAttribute('use_ntlm');
  }
  public set useNtlm(value: boolean | cdktf.IResolvable) {
    this._useNtlm = value;
  }
  public resetUseNtlm() {
    this._useNtlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNtlmInput() {
    return this._useNtlm;
  }

  // use_public_bgp - computed: false, optional: true, required: false
  private _usePublicBgp?: boolean | cdktf.IResolvable; 
  public get usePublicBgp() {
    return this.getBooleanAttribute('use_public_bgp');
  }
  public set usePublicBgp(value: boolean | cdktf.IResolvable) {
    this._usePublicBgp = value;
  }
  public resetUsePublicBgp() {
    this._usePublicBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicBgpInput() {
    return this._usePublicBgp;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verify_certificate - computed: false, optional: true, required: false
  private _verifyCertificate?: boolean | cdktf.IResolvable; 
  public get verifyCertificate() {
    return this.getBooleanAttribute('verify_certificate');
  }
  public set verifyCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }

  // agent_interfaces - computed: false, optional: true, required: false
  private _agentInterfaces = new HttpServerAgentInterfacesList(this, "agent_interfaces", true);
  public get agentInterfaces() {
    return this._agentInterfaces;
  }
  public putAgentInterfaces(value: HttpServerAgentInterfaces[] | cdktf.IResolvable) {
    this._agentInterfaces.internalValue = value;
  }
  public resetAgentInterfaces() {
    this._agentInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInterfacesInput() {
    return this._agentInterfaces.internalValue;
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders = new HttpServerCustomHeadersList(this, "custom_headers", true);
  public get customHeaders() {
    return this._customHeaders;
  }
  public putCustomHeaders(value: HttpServerCustomHeaders[] | cdktf.IResolvable) {
    this._customHeaders.internalValue = value;
  }
  public resetCustomHeaders() {
    this._customHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders.internalValue;
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth = new HttpServerOauthList(this, "oauth", true);
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: HttpServerOauth[] | cdktf.IResolvable) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agents),
      alert_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertRules),
      alerts_enabled: cdktf.booleanToTerraform(this._alertsEnabled),
      allow_unsafe_legacy_renegotiation: cdktf.booleanToTerraform(this._allowUnsafeLegacyRenegotiation),
      auth_type: cdktf.stringToTerraform(this._authType),
      bandwidth_measurements: cdktf.booleanToTerraform(this._bandwidthMeasurements),
      bgp_measurements: cdktf.booleanToTerraform(this._bgpMeasurements),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      collect_proxy_network_data: cdktf.booleanToTerraform(this._collectProxyNetworkData),
      content_regex: cdktf.stringToTerraform(this._contentRegex),
      description: cdktf.stringToTerraform(this._description),
      desired_status_code: cdktf.stringToTerraform(this._desiredStatusCode),
      distributed_tracing: cdktf.booleanToTerraform(this._distributedTracing),
      dns_override: cdktf.stringToTerraform(this._dnsOverride),
      download_limit: cdktf.numberToTerraform(this._downloadLimit),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fixed_packet_rate: cdktf.numberToTerraform(this._fixedPacketRate),
      follow_redirects: cdktf.booleanToTerraform(this._followRedirects),
      headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._headers),
      http_target_time: cdktf.numberToTerraform(this._httpTargetTime),
      http_time_limit: cdktf.numberToTerraform(this._httpTimeLimit),
      http_version: cdktf.numberToTerraform(this._httpVersion),
      id: cdktf.stringToTerraform(this._id),
      include_headers: cdktf.booleanToTerraform(this._includeHeaders),
      interval: cdktf.numberToTerraform(this._interval),
      ipv6_policy: cdktf.stringToTerraform(this._ipv6Policy),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      mtu_measurements: cdktf.booleanToTerraform(this._mtuMeasurements),
      network_measurements: cdktf.booleanToTerraform(this._networkMeasurements),
      num_path_traces: cdktf.numberToTerraform(this._numPathTraces),
      override_agent_proxy: cdktf.booleanToTerraform(this._overrideAgentProxy),
      override_proxy_id: cdktf.stringToTerraform(this._overrideProxyId),
      password: cdktf.stringToTerraform(this._password),
      path_trace_mode: cdktf.stringToTerraform(this._pathTraceMode),
      post_body: cdktf.stringToTerraform(this._postBody),
      probe_mode: cdktf.stringToTerraform(this._probeMode),
      protocol: cdktf.stringToTerraform(this._protocol),
      randomized_start_time: cdktf.booleanToTerraform(this._randomizedStartTime),
      shared_with_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedWithAccounts),
      ssl_version_id: cdktf.stringToTerraform(this._sslVersionId),
      test_name: cdktf.stringToTerraform(this._testName),
      url: cdktf.stringToTerraform(this._url),
      use_ntlm: cdktf.booleanToTerraform(this._useNtlm),
      use_public_bgp: cdktf.booleanToTerraform(this._usePublicBgp),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      username: cdktf.stringToTerraform(this._username),
      verify_certificate: cdktf.booleanToTerraform(this._verifyCertificate),
      agent_interfaces: cdktf.listMapper(httpServerAgentInterfacesToTerraform, true)(this._agentInterfaces.internalValue),
      custom_headers: cdktf.listMapper(httpServerCustomHeadersToTerraform, true)(this._customHeaders.internalValue),
      oauth: cdktf.listMapper(httpServerOauthToTerraform, true)(this._oauth.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._agents),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alert_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alertRules),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alerts_enabled: {
        value: cdktf.booleanToHclTerraform(this._alertsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_unsafe_legacy_renegotiation: {
        value: cdktf.booleanToHclTerraform(this._allowUnsafeLegacyRenegotiation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_measurements: {
        value: cdktf.booleanToHclTerraform(this._bandwidthMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bgp_measurements: {
        value: cdktf.booleanToHclTerraform(this._bgpMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_certificate: {
        value: cdktf.stringToHclTerraform(this._clientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collect_proxy_network_data: {
        value: cdktf.booleanToHclTerraform(this._collectProxyNetworkData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      content_regex: {
        value: cdktf.stringToHclTerraform(this._contentRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_status_code: {
        value: cdktf.stringToHclTerraform(this._desiredStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distributed_tracing: {
        value: cdktf.booleanToHclTerraform(this._distributedTracing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_override: {
        value: cdktf.stringToHclTerraform(this._dnsOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_limit: {
        value: cdktf.numberToHclTerraform(this._downloadLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fixed_packet_rate: {
        value: cdktf.numberToHclTerraform(this._fixedPacketRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      follow_redirects: {
        value: cdktf.booleanToHclTerraform(this._followRedirects),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._headers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_target_time: {
        value: cdktf.numberToHclTerraform(this._httpTargetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_time_limit: {
        value: cdktf.numberToHclTerraform(this._httpTimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_version: {
        value: cdktf.numberToHclTerraform(this._httpVersion),
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
      include_headers: {
        value: cdktf.booleanToHclTerraform(this._includeHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_policy: {
        value: cdktf.stringToHclTerraform(this._ipv6Policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mtu_measurements: {
        value: cdktf.booleanToHclTerraform(this._mtuMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_measurements: {
        value: cdktf.booleanToHclTerraform(this._networkMeasurements),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      num_path_traces: {
        value: cdktf.numberToHclTerraform(this._numPathTraces),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      override_agent_proxy: {
        value: cdktf.booleanToHclTerraform(this._overrideAgentProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      override_proxy_id: {
        value: cdktf.stringToHclTerraform(this._overrideProxyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_trace_mode: {
        value: cdktf.stringToHclTerraform(this._pathTraceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_body: {
        value: cdktf.stringToHclTerraform(this._postBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probe_mode: {
        value: cdktf.stringToHclTerraform(this._probeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      randomized_start_time: {
        value: cdktf.booleanToHclTerraform(this._randomizedStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shared_with_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sharedWithAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssl_version_id: {
        value: cdktf.stringToHclTerraform(this._sslVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_name: {
        value: cdktf.stringToHclTerraform(this._testName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ntlm: {
        value: cdktf.booleanToHclTerraform(this._useNtlm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_public_bgp: {
        value: cdktf.booleanToHclTerraform(this._usePublicBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_agent: {
        value: cdktf.stringToHclTerraform(this._userAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_certificate: {
        value: cdktf.booleanToHclTerraform(this._verifyCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      agent_interfaces: {
        value: cdktf.listMapperHcl(httpServerAgentInterfacesToHclTerraform, true)(this._agentInterfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HttpServerAgentInterfacesList",
      },
      custom_headers: {
        value: cdktf.listMapperHcl(httpServerCustomHeadersToHclTerraform, true)(this._customHeaders.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HttpServerCustomHeadersList",
      },
      oauth: {
        value: cdktf.listMapperHcl(httpServerOauthToHclTerraform, true)(this._oauth.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "HttpServerOauthList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
