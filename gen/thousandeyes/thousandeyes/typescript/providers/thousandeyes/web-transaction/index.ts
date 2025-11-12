// https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebTransactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of ThousandEyes agent IDs to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#agents WebTransaction#agents}
  */
  readonly agents: string[];
  /**
  * List of alert rules IDs to apply to the test (get `ruleId` from `/alerts/rules` endpoint. If `alertsEnabled` is set to `true` and `alertRules` is not included on test creation or update, applicable user default alert rules will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#alert_rules WebTransaction#alert_rules}
  */
  readonly alertRules?: string[];
  /**
  * Set to 'true' to enable alerts, or 'false' to disable alerts. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#alerts_enabled WebTransaction#alerts_enabled}
  */
  readonly alertsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Set true to use the agent's geolocation by the web page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#allow_geolocation WebTransaction#allow_geolocation}
  */
  readonly allowGeolocation?: boolean | cdktf.IResolvable;
  /**
  * Set true allow the use of a fake mic and camera in the browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#allow_mic_and_camera WebTransaction#allow_mic_and_camera}
  */
  readonly allowMicAndCamera?: boolean | cdktf.IResolvable;
  /**
  * Allows TLS renegotiation with servers not supporting RFC 5746. Default Set to true to allow unsafe legacy renegotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#allow_unsafe_legacy_renegotiation WebTransaction#allow_unsafe_legacy_renegotiation}
  */
  readonly allowUnsafeLegacyRenegotiation?: boolean | cdktf.IResolvable;
  /**
  * [none, basic, ntlm, kerberos, oauth] The HTTP authentication type. Defaults to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#auth_type WebTransaction#auth_type}
  */
  readonly authType?: string;
  /**
  * Set to `true` to measure bandwidth. This only applies to Enterprise Agents assigned to the test, and requires that networkMeasurements is set. Defaults to 'false'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#bandwidth_measurements WebTransaction#bandwidth_measurements}
  */
  readonly bandwidthMeasurements?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP measurements. Set to true for enabled, false for disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#bgp_measurements WebTransaction#bgp_measurements}
  */
  readonly bgpMeasurements?: boolean | cdktf.IResolvable;
  /**
  * Domains or full object URLs to be excluded from metrics and waterfall data for transaction tests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#block_domains WebTransaction#block_domains}
  */
  readonly blockDomains?: string;
  /**
  * Set one of the available browser language that you want to use to configure the browser.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#browser_language WebTransaction#browser_language}
  */
  readonly browserLanguage?: string;
  /**
  * String representation (containing newline characters) of client certificate, the private key must be placed first, then the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#client_certificate WebTransaction#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Indicates whether network data to the proxy should be collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#collect_proxy_network_data WebTransaction#collect_proxy_network_data}
  */
  readonly collectProxyNetworkData?: boolean | cdktf.IResolvable;
  /**
  * Verify content using a regular expression. This field does not require escaping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#content_regex WebTransaction#content_regex}
  */
  readonly contentRegex?: string;
  /**
  * The array of credentialID integers. You can get the credentialId from the /credentials endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#credentials WebTransaction#credentials}
  */
  readonly credentials?: string[];
  /**
  * A description of the alert rule. Defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#description WebTransaction#description}
  */
  readonly description?: string;
  /**
  * The valid HTTP response code you’re interested in retrieving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#desired_status_code WebTransaction#desired_status_code}
  */
  readonly desiredStatusCode?: string;
  /**
  * Enables or disables screenshots on error. Set true to not capture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#disable_screenshot WebTransaction#disable_screenshot}
  */
  readonly disableScreenshot?: boolean | cdktf.IResolvable;
  /**
  * Adds distributed tracing headers to API requests using B3 and W3C standards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#distributed_tracing WebTransaction#distributed_tracing}
  */
  readonly distributedTracing?: boolean | cdktf.IResolvable;
  /**
  * The IP address to use for DNS override.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#dns_override WebTransaction#dns_override}
  */
  readonly dnsOverride?: string;
  /**
  * Specify the maximum number of bytes to download from the target object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#download_limit WebTransaction#download_limit}
  */
  readonly downloadLimit?: number;
  /**
  * ID of the emulated device, if one was given when the test was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#emulated_device_id WebTransaction#emulated_device_id}
  */
  readonly emulatedDeviceId?: string;
  /**
  * Enables or disables the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#enabled WebTransaction#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Sets packets rate sent to measure the network in packets per second.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#fixed_packet_rate WebTransaction#fixed_packet_rate}
  */
  readonly fixedPacketRate?: number;
  /**
  * Follow HTTP/301 or HTTP/302 redirect directives. Defaults to 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#follow_redirects WebTransaction#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * The target time for HTTP server completion, specified in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#http_target_time WebTransaction#http_target_time}
  */
  readonly httpTargetTime?: number;
  /**
  * The target time for HTTP server limits, specified in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#http_time_limit WebTransaction#http_time_limit}
  */
  readonly httpTimeLimit?: number;
  /**
  * Set to 2 for the default HTTP version (prefer HTTP/2), or 1 for HTTP/1.1 only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#http_version WebTransaction#http_version}
  */
  readonly httpVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#id WebTransaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enables identification of agent traffic using user agent string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#identify_agent_traffic_with_user_agent WebTransaction#identify_agent_traffic_with_user_agent}
  */
  readonly identifyAgentTrafficWithUserAgent?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to capture response headers for objects loaded by the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#include_headers WebTransaction#include_headers}
  */
  readonly includeHeaders?: boolean | cdktf.IResolvable;
  /**
  * The interval to run the test on, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#interval WebTransaction#interval}
  */
  readonly interval: number;
  /**
  * Contains list of BGP monitor IDs (get `monitorId` from `/monitors` endpoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#monitors WebTransaction#monitors}
  */
  readonly monitors?: string[];
  /**
  * Measure MTU sizes on the network from agents to the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#mtu_measurements WebTransaction#mtu_measurements}
  */
  readonly mtuMeasurements?: boolean | cdktf.IResolvable;
  /**
  * Set to 'true' to enable network measurements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#network_measurements WebTransaction#network_measurements}
  */
  readonly networkMeasurements?: boolean | cdktf.IResolvable;
  /**
  * The number of path traces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#num_path_traces WebTransaction#num_path_traces}
  */
  readonly numPathTraces?: number;
  /**
  * Flag indicating if a proxy other than the default should be used. To override the default proxy for agents, set to `true` and specify a value for `overrideProxyId`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#override_agent_proxy WebTransaction#override_agent_proxy}
  */
  readonly overrideAgentProxy?: boolean | cdktf.IResolvable;
  /**
  * ID of the proxy to be used if the default proxy is overridden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#override_proxy_id WebTransaction#override_proxy_id}
  */
  readonly overrideProxyId?: string;
  /**
  * [normal, eager or none] Defines page loading strategy. Defaults to 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#page_loading_strategy WebTransaction#page_loading_strategy}
  */
  readonly pageLoadingStrategy?: string;
  /**
  * The password to be used to authenticate with the destination server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#password WebTransaction#password}
  */
  readonly password?: string;
  /**
  * [classic or in-session] Choose 'inSession' to perform the path trace within a TCP session. Default value is 'classic'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#path_trace_mode WebTransaction#path_trace_mode}
  */
  readonly pathTraceMode?: string;
  /**
  * [auto, sack, or syn] The probe mode used by end-to-end network tests. This is only valid if the protocol is set to TCP. The default value is AUTO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#probe_mode WebTransaction#probe_mode}
  */
  readonly probeMode?: string;
  /**
  * The protocol used by dependent network tests (end-to-end, path trace, PMTUD). Default value is tcp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#protocol WebTransaction#protocol}
  */
  readonly protocol?: string;
  /**
  * Indicates whether agents should randomize the start time in each test round.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#randomized_start_time WebTransaction#randomized_start_time}
  */
  readonly randomizedStartTime?: boolean | cdktf.IResolvable;
  /**
  * List of accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#shared_with_accounts WebTransaction#shared_with_accounts}
  */
  readonly sharedWithAccounts?: string[];
  /**
  * Defines the SSL version. 0 for auto, 3 for SSLv3, 4 for TLS v1.0, 5 for TLS v1.1, 6 for TLS v1.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#ssl_version_id WebTransaction#ssl_version_id}
  */
  readonly sslVersionId?: string;
  /**
  * The subinterval for round-robin testing (in seconds). The value must be less than or equal to 'interval'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#subinterval WebTransaction#subinterval}
  */
  readonly subinterval?: number;
  /**
  * The target time for completion. The default value is 10, specified in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#target_time WebTransaction#target_time}
  */
  readonly targetTime?: number;
  /**
  * The name of the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#test_name WebTransaction#test_name}
  */
  readonly testName?: string;
  /**
  * The time limit for the transaction. The default value is 30s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#time_limit WebTransaction#time_limit}
  */
  readonly timeLimit?: number;
  /**
  * The full selenium transaction script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#transaction_script WebTransaction#transaction_script}
  */
  readonly transactionScript: string;
  /**
  * The target URL for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#url WebTransaction#url}
  */
  readonly url: string;
  /**
  * Enable to use basic authentication. Only include this field if you are using authentication. Requires the username and password to be set if enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#use_ntlm WebTransaction#use_ntlm}
  */
  readonly useNtlm?: boolean | cdktf.IResolvable;
  /**
  * Enable to automatically add all available Public BGP Monitors to the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#use_public_bgp WebTransaction#use_public_bgp}
  */
  readonly usePublicBgp?: boolean | cdktf.IResolvable;
  /**
  * The user-agent string to be provided during the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#user_agent WebTransaction#user_agent}
  */
  readonly userAgent?: string;
  /**
  * The username to be used to authenticate with the destination server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#username WebTransaction#username}
  */
  readonly username?: string;
  /**
  * Set whether to ignore certificate errors. Set to 'false' to ignore certificate errors. The default value is 'true'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#verify_certificate WebTransaction#verify_certificate}
  */
  readonly verifyCertificate?: boolean | cdktf.IResolvable;
  /**
  * agent_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#agent_interfaces WebTransaction#agent_interfaces}
  */
  readonly agentInterfaces?: WebTransactionAgentInterfaces[] | cdktf.IResolvable;
  /**
  * custom_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#custom_headers WebTransaction#custom_headers}
  */
  readonly customHeaders?: WebTransactionCustomHeaders[] | cdktf.IResolvable;
}
export interface WebTransactionAgentInterfaces {
  /**
  * The agent ID of the enterprise agent for the test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#agent_id WebTransaction#agent_id}
  */
  readonly agentId?: string;
  /**
  * IP address of the agent interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#ip_address WebTransaction#ip_address}
  */
  readonly ipAddress?: string;
}

export function webTransactionAgentInterfacesToTerraform(struct?: WebTransactionAgentInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function webTransactionAgentInterfacesToHclTerraform(struct?: WebTransactionAgentInterfaces | cdktf.IResolvable): any {
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

export class WebTransactionAgentInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebTransactionAgentInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebTransactionAgentInterfaces | cdktf.IResolvable | undefined) {
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

export class WebTransactionAgentInterfacesList extends cdktf.ComplexList {
  public internalValue? : WebTransactionAgentInterfaces[] | cdktf.IResolvable

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
  public get(index: number): WebTransactionAgentInterfacesOutputReference {
    return new WebTransactionAgentInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebTransactionCustomHeaders {
  /**
  * Use these HTTP headers for all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#all WebTransaction#all}
  */
  readonly all?: { [key: string]: string };
  /**
  * Use these HTTP headers for the specified domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#domains WebTransaction#domains}
  */
  readonly domains?: { [key: string]: string };
  /**
  * Use these HTTP headers for root server request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#root WebTransaction#root}
  */
  readonly root?: { [key: string]: string };
}

export function webTransactionCustomHeadersToTerraform(struct?: WebTransactionCustomHeaders | cdktf.IResolvable): any {
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


export function webTransactionCustomHeadersToHclTerraform(struct?: WebTransactionCustomHeaders | cdktf.IResolvable): any {
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

export class WebTransactionCustomHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebTransactionCustomHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebTransactionCustomHeaders | cdktf.IResolvable | undefined) {
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

export class WebTransactionCustomHeadersList extends cdktf.ComplexList {
  public internalValue? : WebTransactionCustomHeaders[] | cdktf.IResolvable

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
  public get(index: number): WebTransactionCustomHeadersOutputReference {
    return new WebTransactionCustomHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction thousandeyes_web_transaction}
*/
export class WebTransaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thousandeyes_web_transaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebTransaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebTransaction to import
  * @param importFromId The id of the existing WebTransaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebTransaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thousandeyes_web_transaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thousandeyes/thousandeyes/3.1.3/docs/resources/web_transaction thousandeyes_web_transaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebTransactionConfig
  */
  public constructor(scope: Construct, id: string, config: WebTransactionConfig) {
    super(scope, id, {
      terraformResourceType: 'thousandeyes_web_transaction',
      terraformGeneratorMetadata: {
        providerName: 'thousandeyes',
        providerVersion: '3.1.3',
        providerVersionConstraint: '3.1.3'
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
    this._allowGeolocation = config.allowGeolocation;
    this._allowMicAndCamera = config.allowMicAndCamera;
    this._allowUnsafeLegacyRenegotiation = config.allowUnsafeLegacyRenegotiation;
    this._authType = config.authType;
    this._bandwidthMeasurements = config.bandwidthMeasurements;
    this._bgpMeasurements = config.bgpMeasurements;
    this._blockDomains = config.blockDomains;
    this._browserLanguage = config.browserLanguage;
    this._clientCertificate = config.clientCertificate;
    this._collectProxyNetworkData = config.collectProxyNetworkData;
    this._contentRegex = config.contentRegex;
    this._credentials = config.credentials;
    this._description = config.description;
    this._desiredStatusCode = config.desiredStatusCode;
    this._disableScreenshot = config.disableScreenshot;
    this._distributedTracing = config.distributedTracing;
    this._dnsOverride = config.dnsOverride;
    this._downloadLimit = config.downloadLimit;
    this._emulatedDeviceId = config.emulatedDeviceId;
    this._enabled = config.enabled;
    this._fixedPacketRate = config.fixedPacketRate;
    this._followRedirects = config.followRedirects;
    this._httpTargetTime = config.httpTargetTime;
    this._httpTimeLimit = config.httpTimeLimit;
    this._httpVersion = config.httpVersion;
    this._id = config.id;
    this._identifyAgentTrafficWithUserAgent = config.identifyAgentTrafficWithUserAgent;
    this._includeHeaders = config.includeHeaders;
    this._interval = config.interval;
    this._monitors = config.monitors;
    this._mtuMeasurements = config.mtuMeasurements;
    this._networkMeasurements = config.networkMeasurements;
    this._numPathTraces = config.numPathTraces;
    this._overrideAgentProxy = config.overrideAgentProxy;
    this._overrideProxyId = config.overrideProxyId;
    this._pageLoadingStrategy = config.pageLoadingStrategy;
    this._password = config.password;
    this._pathTraceMode = config.pathTraceMode;
    this._probeMode = config.probeMode;
    this._protocol = config.protocol;
    this._randomizedStartTime = config.randomizedStartTime;
    this._sharedWithAccounts = config.sharedWithAccounts;
    this._sslVersionId = config.sslVersionId;
    this._subinterval = config.subinterval;
    this._targetTime = config.targetTime;
    this._testName = config.testName;
    this._timeLimit = config.timeLimit;
    this._transactionScript = config.transactionScript;
    this._url = config.url;
    this._useNtlm = config.useNtlm;
    this._usePublicBgp = config.usePublicBgp;
    this._userAgent = config.userAgent;
    this._username = config.username;
    this._verifyCertificate = config.verifyCertificate;
    this._agentInterfaces.internalValue = config.agentInterfaces;
    this._customHeaders.internalValue = config.customHeaders;
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

  // allow_geolocation - computed: false, optional: true, required: false
  private _allowGeolocation?: boolean | cdktf.IResolvable; 
  public get allowGeolocation() {
    return this.getBooleanAttribute('allow_geolocation');
  }
  public set allowGeolocation(value: boolean | cdktf.IResolvable) {
    this._allowGeolocation = value;
  }
  public resetAllowGeolocation() {
    this._allowGeolocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGeolocationInput() {
    return this._allowGeolocation;
  }

  // allow_mic_and_camera - computed: false, optional: true, required: false
  private _allowMicAndCamera?: boolean | cdktf.IResolvable; 
  public get allowMicAndCamera() {
    return this.getBooleanAttribute('allow_mic_and_camera');
  }
  public set allowMicAndCamera(value: boolean | cdktf.IResolvable) {
    this._allowMicAndCamera = value;
  }
  public resetAllowMicAndCamera() {
    this._allowMicAndCamera = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMicAndCameraInput() {
    return this._allowMicAndCamera;
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

  // block_domains - computed: false, optional: true, required: false
  private _blockDomains?: string; 
  public get blockDomains() {
    return this.getStringAttribute('block_domains');
  }
  public set blockDomains(value: string) {
    this._blockDomains = value;
  }
  public resetBlockDomains() {
    this._blockDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDomainsInput() {
    return this._blockDomains;
  }

  // browser_language - computed: false, optional: true, required: false
  private _browserLanguage?: string; 
  public get browserLanguage() {
    return this.getStringAttribute('browser_language');
  }
  public set browserLanguage(value: string) {
    this._browserLanguage = value;
  }
  public resetBrowserLanguage() {
    this._browserLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserLanguageInput() {
    return this._browserLanguage;
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

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string[]; 
  public get credentials() {
    return cdktf.Fn.tolist(this.getListAttribute('credentials'));
  }
  public set credentials(value: string[]) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
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

  // disable_screenshot - computed: false, optional: true, required: false
  private _disableScreenshot?: boolean | cdktf.IResolvable; 
  public get disableScreenshot() {
    return this.getBooleanAttribute('disable_screenshot');
  }
  public set disableScreenshot(value: boolean | cdktf.IResolvable) {
    this._disableScreenshot = value;
  }
  public resetDisableScreenshot() {
    this._disableScreenshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableScreenshotInput() {
    return this._disableScreenshot;
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

  // emulated_device_id - computed: false, optional: true, required: false
  private _emulatedDeviceId?: string; 
  public get emulatedDeviceId() {
    return this.getStringAttribute('emulated_device_id');
  }
  public set emulatedDeviceId(value: string) {
    this._emulatedDeviceId = value;
  }
  public resetEmulatedDeviceId() {
    this._emulatedDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emulatedDeviceIdInput() {
    return this._emulatedDeviceId;
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

  // identify_agent_traffic_with_user_agent - computed: false, optional: true, required: false
  private _identifyAgentTrafficWithUserAgent?: boolean | cdktf.IResolvable; 
  public get identifyAgentTrafficWithUserAgent() {
    return this.getBooleanAttribute('identify_agent_traffic_with_user_agent');
  }
  public set identifyAgentTrafficWithUserAgent(value: boolean | cdktf.IResolvable) {
    this._identifyAgentTrafficWithUserAgent = value;
  }
  public resetIdentifyAgentTrafficWithUserAgent() {
    this._identifyAgentTrafficWithUserAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifyAgentTrafficWithUserAgentInput() {
    return this._identifyAgentTrafficWithUserAgent;
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

  // page_loading_strategy - computed: false, optional: true, required: false
  private _pageLoadingStrategy?: string; 
  public get pageLoadingStrategy() {
    return this.getStringAttribute('page_loading_strategy');
  }
  public set pageLoadingStrategy(value: string) {
    this._pageLoadingStrategy = value;
  }
  public resetPageLoadingStrategy() {
    this._pageLoadingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageLoadingStrategyInput() {
    return this._pageLoadingStrategy;
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

  // subinterval - computed: false, optional: true, required: false
  private _subinterval?: number; 
  public get subinterval() {
    return this.getNumberAttribute('subinterval');
  }
  public set subinterval(value: number) {
    this._subinterval = value;
  }
  public resetSubinterval() {
    this._subinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subintervalInput() {
    return this._subinterval;
  }

  // target_time - computed: false, optional: true, required: false
  private _targetTime?: number; 
  public get targetTime() {
    return this.getNumberAttribute('target_time');
  }
  public set targetTime(value: number) {
    this._targetTime = value;
  }
  public resetTargetTime() {
    this._targetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTimeInput() {
    return this._targetTime;
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

  // time_limit - computed: false, optional: true, required: false
  private _timeLimit?: number; 
  public get timeLimit() {
    return this.getNumberAttribute('time_limit');
  }
  public set timeLimit(value: number) {
    this._timeLimit = value;
  }
  public resetTimeLimit() {
    this._timeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeLimitInput() {
    return this._timeLimit;
  }

  // transaction_script - computed: false, optional: false, required: true
  private _transactionScript?: string; 
  public get transactionScript() {
    return this.getStringAttribute('transaction_script');
  }
  public set transactionScript(value: string) {
    this._transactionScript = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionScriptInput() {
    return this._transactionScript;
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
  private _agentInterfaces = new WebTransactionAgentInterfacesList(this, "agent_interfaces", true);
  public get agentInterfaces() {
    return this._agentInterfaces;
  }
  public putAgentInterfaces(value: WebTransactionAgentInterfaces[] | cdktf.IResolvable) {
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
  private _customHeaders = new WebTransactionCustomHeadersList(this, "custom_headers", true);
  public get customHeaders() {
    return this._customHeaders;
  }
  public putCustomHeaders(value: WebTransactionCustomHeaders[] | cdktf.IResolvable) {
    this._customHeaders.internalValue = value;
  }
  public resetCustomHeaders() {
    this._customHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._agents),
      alert_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alertRules),
      alerts_enabled: cdktf.booleanToTerraform(this._alertsEnabled),
      allow_geolocation: cdktf.booleanToTerraform(this._allowGeolocation),
      allow_mic_and_camera: cdktf.booleanToTerraform(this._allowMicAndCamera),
      allow_unsafe_legacy_renegotiation: cdktf.booleanToTerraform(this._allowUnsafeLegacyRenegotiation),
      auth_type: cdktf.stringToTerraform(this._authType),
      bandwidth_measurements: cdktf.booleanToTerraform(this._bandwidthMeasurements),
      bgp_measurements: cdktf.booleanToTerraform(this._bgpMeasurements),
      block_domains: cdktf.stringToTerraform(this._blockDomains),
      browser_language: cdktf.stringToTerraform(this._browserLanguage),
      client_certificate: cdktf.stringToTerraform(this._clientCertificate),
      collect_proxy_network_data: cdktf.booleanToTerraform(this._collectProxyNetworkData),
      content_regex: cdktf.stringToTerraform(this._contentRegex),
      credentials: cdktf.listMapper(cdktf.stringToTerraform, false)(this._credentials),
      description: cdktf.stringToTerraform(this._description),
      desired_status_code: cdktf.stringToTerraform(this._desiredStatusCode),
      disable_screenshot: cdktf.booleanToTerraform(this._disableScreenshot),
      distributed_tracing: cdktf.booleanToTerraform(this._distributedTracing),
      dns_override: cdktf.stringToTerraform(this._dnsOverride),
      download_limit: cdktf.numberToTerraform(this._downloadLimit),
      emulated_device_id: cdktf.stringToTerraform(this._emulatedDeviceId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fixed_packet_rate: cdktf.numberToTerraform(this._fixedPacketRate),
      follow_redirects: cdktf.booleanToTerraform(this._followRedirects),
      http_target_time: cdktf.numberToTerraform(this._httpTargetTime),
      http_time_limit: cdktf.numberToTerraform(this._httpTimeLimit),
      http_version: cdktf.numberToTerraform(this._httpVersion),
      id: cdktf.stringToTerraform(this._id),
      identify_agent_traffic_with_user_agent: cdktf.booleanToTerraform(this._identifyAgentTrafficWithUserAgent),
      include_headers: cdktf.booleanToTerraform(this._includeHeaders),
      interval: cdktf.numberToTerraform(this._interval),
      monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitors),
      mtu_measurements: cdktf.booleanToTerraform(this._mtuMeasurements),
      network_measurements: cdktf.booleanToTerraform(this._networkMeasurements),
      num_path_traces: cdktf.numberToTerraform(this._numPathTraces),
      override_agent_proxy: cdktf.booleanToTerraform(this._overrideAgentProxy),
      override_proxy_id: cdktf.stringToTerraform(this._overrideProxyId),
      page_loading_strategy: cdktf.stringToTerraform(this._pageLoadingStrategy),
      password: cdktf.stringToTerraform(this._password),
      path_trace_mode: cdktf.stringToTerraform(this._pathTraceMode),
      probe_mode: cdktf.stringToTerraform(this._probeMode),
      protocol: cdktf.stringToTerraform(this._protocol),
      randomized_start_time: cdktf.booleanToTerraform(this._randomizedStartTime),
      shared_with_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sharedWithAccounts),
      ssl_version_id: cdktf.stringToTerraform(this._sslVersionId),
      subinterval: cdktf.numberToTerraform(this._subinterval),
      target_time: cdktf.numberToTerraform(this._targetTime),
      test_name: cdktf.stringToTerraform(this._testName),
      time_limit: cdktf.numberToTerraform(this._timeLimit),
      transaction_script: cdktf.stringToTerraform(this._transactionScript),
      url: cdktf.stringToTerraform(this._url),
      use_ntlm: cdktf.booleanToTerraform(this._useNtlm),
      use_public_bgp: cdktf.booleanToTerraform(this._usePublicBgp),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      username: cdktf.stringToTerraform(this._username),
      verify_certificate: cdktf.booleanToTerraform(this._verifyCertificate),
      agent_interfaces: cdktf.listMapper(webTransactionAgentInterfacesToTerraform, true)(this._agentInterfaces.internalValue),
      custom_headers: cdktf.listMapper(webTransactionCustomHeadersToTerraform, true)(this._customHeaders.internalValue),
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
      allow_geolocation: {
        value: cdktf.booleanToHclTerraform(this._allowGeolocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_mic_and_camera: {
        value: cdktf.booleanToHclTerraform(this._allowMicAndCamera),
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
      block_domains: {
        value: cdktf.stringToHclTerraform(this._blockDomains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      browser_language: {
        value: cdktf.stringToHclTerraform(this._browserLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      credentials: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._credentials),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      disable_screenshot: {
        value: cdktf.booleanToHclTerraform(this._disableScreenshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      emulated_device_id: {
        value: cdktf.stringToHclTerraform(this._emulatedDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      identify_agent_traffic_with_user_agent: {
        value: cdktf.booleanToHclTerraform(this._identifyAgentTrafficWithUserAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      page_loading_strategy: {
        value: cdktf.stringToHclTerraform(this._pageLoadingStrategy),
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
      subinterval: {
        value: cdktf.numberToHclTerraform(this._subinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      target_time: {
        value: cdktf.numberToHclTerraform(this._targetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      test_name: {
        value: cdktf.stringToHclTerraform(this._testName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_limit: {
        value: cdktf.numberToHclTerraform(this._timeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transaction_script: {
        value: cdktf.stringToHclTerraform(this._transactionScript),
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
        value: cdktf.listMapperHcl(webTransactionAgentInterfacesToHclTerraform, true)(this._agentInterfaces.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebTransactionAgentInterfacesList",
      },
      custom_headers: {
        value: cdktf.listMapperHcl(webTransactionCustomHeadersToHclTerraform, true)(this._customHeaders.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebTransactionCustomHeadersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
