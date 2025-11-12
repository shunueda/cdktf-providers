// https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Switch for pausing Test alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#alerts_paused DnsTest#alerts_paused}
  */
  readonly alertsPaused?: boolean | cdktf.IResolvable;
  /**
  * The Division where the Test will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#division_id DnsTest#division_id}
  */
  readonly divisionId: number;
  /**
  * IP address or host name. If empty uses node's resolver. For DNS Direct monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#dns_server DnsTest#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * Optional. Switch for enabling test data webhook feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#enable_test_data_webhook DnsTest#enable_test_data_webhook}
  */
  readonly enableTestDataWebhook?: boolean | cdktf.IResolvable;
  /**
  * End time for the Test in ISO format like 2024-12-30T04:59:00Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#end_time DnsTest#end_time}
  */
  readonly endTime: string;
  /**
  * Optional. The Folder under which the Test will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#folder_id DnsTest#folder_id}
  */
  readonly folderId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#id DnsTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The monitor to use for the Dns Test. Supported: 'dns experience','dns direct'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#monitor DnsTest#monitor}
  */
  readonly monitor?: string;
  /**
  * The parent Product under which the Test will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#product_id DnsTest#product_id}
  */
  readonly productId: number;
  /**
  * The type of DNS query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#query_type DnsTest#query_type}
  */
  readonly queryType: string;
  /**
  * Start time for the Test in ISO format like 2024-12-30T04:59:00Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#start_time DnsTest#start_time}
  */
  readonly startTime?: string;
  /**
  * Optional. Test status: active or inactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#status DnsTest#status}
  */
  readonly status?: string;
  /**
  * Optional. The Test description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#test_description DnsTest#test_description}
  */
  readonly testDescription?: string;
  /**
  * The domain to be tested. Example: www.catchpoint.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#test_domain DnsTest#test_domain}
  */
  readonly testDomain: string;
  /**
  * The name of the Test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#test_name DnsTest#test_name}
  */
  readonly testName: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#advanced_settings DnsTest#advanced_settings}
  */
  readonly advancedSettings?: DnsTestAdvancedSettings;
  /**
  * alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#alert_settings DnsTest#alert_settings}
  */
  readonly alertSettings?: DnsTestAlertSettings;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#label DnsTest#label}
  */
  readonly label?: DnsTestLabel[] | cdktf.IResolvable;
  /**
  * schedule_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#schedule_settings DnsTest#schedule_settings}
  */
  readonly scheduleSettings?: DnsTestScheduleSettings;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#thresholds DnsTest#thresholds}
  */
  readonly thresholds?: DnsTestThresholds[] | cdktf.IResolvable;
}
export interface DnsTestAdvancedSettings {
  /**
  * Optional. Set the additional monitor to run along with the test monitor: 'ping icmp', 'ping tcp', 'ping udp','traceroute icmp','traceroute udp','traceroute tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#additional_monitor DnsTest#additional_monitor}
  */
  readonly additionalMonitor?: string;
  /**
  * Optional. True enables test download limit override setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#allow_test_download_limit_override DnsTest#allow_test_download_limit_override}
  */
  readonly allowTestDownloadLimitOverride?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set the bandwidth throttling for chrome: 'gprs','regular 2g','good 2g','regular 3g','good 3g','regular 4g','dsl','wifi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#bandwidth_throttling DnsTest#bandwidth_throttling}
  */
  readonly bandwidthThrottling?: string;
  /**
  * Optional. True enables debug primary host on failure setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#debug_primary_host_on_failure DnsTest#debug_primary_host_on_failure}
  */
  readonly debugPrimaryHostOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. True disables recursive resolution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#disable_recursive_resolution DnsTest#disable_recursive_resolution}
  */
  readonly disableRecursiveResolution?: boolean | cdktf.IResolvable;
  /**
  * Optional. The EDNS subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#edns_subnet DnsTest#edns_subnet}
  */
  readonly ednsSubnet?: string;
  /**
  * Optional. True enables BIND.HOSTNAME setting. It can be either BIND or NSID not both
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#enable_bind_hostname DnsTest#enable_bind_hostname}
  */
  readonly enableBindHostname?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables debug DNSSec setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#enable_dnssec DnsTest#enable_dnssec}
  */
  readonly enableDnssec?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables NSID lookup. It can be either BIND or NSID not both
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#enable_nsid DnsTest#enable_nsid}
  */
  readonly enableNsid?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables Path MTU Discovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#enable_path_mtu_discovery DnsTest#enable_path_mtu_discovery}
  */
  readonly enablePathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables TCP setting instead of deafult UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#enable_tcp_protocol DnsTest#enable_tcp_protocol}
  */
  readonly enableTcpProtocol?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables favor fastest Round-Trip Nameserver setting. Only for Experience monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#favor_fastest_round_trip_nameserver DnsTest#favor_fastest_round_trip_nameserver}
  */
  readonly favorFastestRoundTripNameserver?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables on NS server failure retry next NS server on the same level. Only for Experience monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#try_next_nameserver_on_failure DnsTest#try_next_nameserver_on_failure}
  */
  readonly tryNextNameserverOnFailure?: boolean | cdktf.IResolvable;
}

export function dnsTestAdvancedSettingsToTerraform(struct?: DnsTestAdvancedSettingsOutputReference | DnsTestAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_monitor: cdktf.stringToTerraform(struct!.additionalMonitor),
    allow_test_download_limit_override: cdktf.booleanToTerraform(struct!.allowTestDownloadLimitOverride),
    bandwidth_throttling: cdktf.stringToTerraform(struct!.bandwidthThrottling),
    debug_primary_host_on_failure: cdktf.booleanToTerraform(struct!.debugPrimaryHostOnFailure),
    disable_recursive_resolution: cdktf.booleanToTerraform(struct!.disableRecursiveResolution),
    edns_subnet: cdktf.stringToTerraform(struct!.ednsSubnet),
    enable_bind_hostname: cdktf.booleanToTerraform(struct!.enableBindHostname),
    enable_dnssec: cdktf.booleanToTerraform(struct!.enableDnssec),
    enable_nsid: cdktf.booleanToTerraform(struct!.enableNsid),
    enable_path_mtu_discovery: cdktf.booleanToTerraform(struct!.enablePathMtuDiscovery),
    enable_tcp_protocol: cdktf.booleanToTerraform(struct!.enableTcpProtocol),
    favor_fastest_round_trip_nameserver: cdktf.booleanToTerraform(struct!.favorFastestRoundTripNameserver),
    try_next_nameserver_on_failure: cdktf.booleanToTerraform(struct!.tryNextNameserverOnFailure),
  }
}


export function dnsTestAdvancedSettingsToHclTerraform(struct?: DnsTestAdvancedSettingsOutputReference | DnsTestAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_monitor: {
      value: cdktf.stringToHclTerraform(struct!.additionalMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_test_download_limit_override: {
      value: cdktf.booleanToHclTerraform(struct!.allowTestDownloadLimitOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bandwidth_throttling: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthThrottling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_primary_host_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.debugPrimaryHostOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_recursive_resolution: {
      value: cdktf.booleanToHclTerraform(struct!.disableRecursiveResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    edns_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ednsSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_bind_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.enableBindHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_dnssec: {
      value: cdktf.booleanToHclTerraform(struct!.enableDnssec),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_nsid: {
      value: cdktf.booleanToHclTerraform(struct!.enableNsid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_path_mtu_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.enablePathMtuDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tcp_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.enableTcpProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    favor_fastest_round_trip_nameserver: {
      value: cdktf.booleanToHclTerraform(struct!.favorFastestRoundTripNameserver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    try_next_nameserver_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.tryNextNameserverOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsTestAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsTestAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalMonitor = this._additionalMonitor;
    }
    if (this._allowTestDownloadLimitOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTestDownloadLimitOverride = this._allowTestDownloadLimitOverride;
    }
    if (this._bandwidthThrottling !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthThrottling = this._bandwidthThrottling;
    }
    if (this._debugPrimaryHostOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPrimaryHostOnFailure = this._debugPrimaryHostOnFailure;
    }
    if (this._disableRecursiveResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRecursiveResolution = this._disableRecursiveResolution;
    }
    if (this._ednsSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ednsSubnet = this._ednsSubnet;
    }
    if (this._enableBindHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBindHostname = this._enableBindHostname;
    }
    if (this._enableDnssec !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDnssec = this._enableDnssec;
    }
    if (this._enableNsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNsid = this._enableNsid;
    }
    if (this._enablePathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePathMtuDiscovery = this._enablePathMtuDiscovery;
    }
    if (this._enableTcpProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTcpProtocol = this._enableTcpProtocol;
    }
    if (this._favorFastestRoundTripNameserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.favorFastestRoundTripNameserver = this._favorFastestRoundTripNameserver;
    }
    if (this._tryNextNameserverOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.tryNextNameserverOnFailure = this._tryNextNameserverOnFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsTestAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalMonitor = undefined;
      this._allowTestDownloadLimitOverride = undefined;
      this._bandwidthThrottling = undefined;
      this._debugPrimaryHostOnFailure = undefined;
      this._disableRecursiveResolution = undefined;
      this._ednsSubnet = undefined;
      this._enableBindHostname = undefined;
      this._enableDnssec = undefined;
      this._enableNsid = undefined;
      this._enablePathMtuDiscovery = undefined;
      this._enableTcpProtocol = undefined;
      this._favorFastestRoundTripNameserver = undefined;
      this._tryNextNameserverOnFailure = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalMonitor = value.additionalMonitor;
      this._allowTestDownloadLimitOverride = value.allowTestDownloadLimitOverride;
      this._bandwidthThrottling = value.bandwidthThrottling;
      this._debugPrimaryHostOnFailure = value.debugPrimaryHostOnFailure;
      this._disableRecursiveResolution = value.disableRecursiveResolution;
      this._ednsSubnet = value.ednsSubnet;
      this._enableBindHostname = value.enableBindHostname;
      this._enableDnssec = value.enableDnssec;
      this._enableNsid = value.enableNsid;
      this._enablePathMtuDiscovery = value.enablePathMtuDiscovery;
      this._enableTcpProtocol = value.enableTcpProtocol;
      this._favorFastestRoundTripNameserver = value.favorFastestRoundTripNameserver;
      this._tryNextNameserverOnFailure = value.tryNextNameserverOnFailure;
    }
  }

  // additional_monitor - computed: false, optional: true, required: false
  private _additionalMonitor?: string; 
  public get additionalMonitor() {
    return this.getStringAttribute('additional_monitor');
  }
  public set additionalMonitor(value: string) {
    this._additionalMonitor = value;
  }
  public resetAdditionalMonitor() {
    this._additionalMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalMonitorInput() {
    return this._additionalMonitor;
  }

  // allow_test_download_limit_override - computed: false, optional: true, required: false
  private _allowTestDownloadLimitOverride?: boolean | cdktf.IResolvable; 
  public get allowTestDownloadLimitOverride() {
    return this.getBooleanAttribute('allow_test_download_limit_override');
  }
  public set allowTestDownloadLimitOverride(value: boolean | cdktf.IResolvable) {
    this._allowTestDownloadLimitOverride = value;
  }
  public resetAllowTestDownloadLimitOverride() {
    this._allowTestDownloadLimitOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTestDownloadLimitOverrideInput() {
    return this._allowTestDownloadLimitOverride;
  }

  // bandwidth_throttling - computed: false, optional: true, required: false
  private _bandwidthThrottling?: string; 
  public get bandwidthThrottling() {
    return this.getStringAttribute('bandwidth_throttling');
  }
  public set bandwidthThrottling(value: string) {
    this._bandwidthThrottling = value;
  }
  public resetBandwidthThrottling() {
    this._bandwidthThrottling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthThrottlingInput() {
    return this._bandwidthThrottling;
  }

  // debug_primary_host_on_failure - computed: false, optional: true, required: false
  private _debugPrimaryHostOnFailure?: boolean | cdktf.IResolvable; 
  public get debugPrimaryHostOnFailure() {
    return this.getBooleanAttribute('debug_primary_host_on_failure');
  }
  public set debugPrimaryHostOnFailure(value: boolean | cdktf.IResolvable) {
    this._debugPrimaryHostOnFailure = value;
  }
  public resetDebugPrimaryHostOnFailure() {
    this._debugPrimaryHostOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPrimaryHostOnFailureInput() {
    return this._debugPrimaryHostOnFailure;
  }

  // disable_recursive_resolution - computed: false, optional: true, required: false
  private _disableRecursiveResolution?: boolean | cdktf.IResolvable; 
  public get disableRecursiveResolution() {
    return this.getBooleanAttribute('disable_recursive_resolution');
  }
  public set disableRecursiveResolution(value: boolean | cdktf.IResolvable) {
    this._disableRecursiveResolution = value;
  }
  public resetDisableRecursiveResolution() {
    this._disableRecursiveResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRecursiveResolutionInput() {
    return this._disableRecursiveResolution;
  }

  // edns_subnet - computed: false, optional: true, required: false
  private _ednsSubnet?: string; 
  public get ednsSubnet() {
    return this.getStringAttribute('edns_subnet');
  }
  public set ednsSubnet(value: string) {
    this._ednsSubnet = value;
  }
  public resetEdnsSubnet() {
    this._ednsSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsSubnetInput() {
    return this._ednsSubnet;
  }

  // enable_bind_hostname - computed: false, optional: true, required: false
  private _enableBindHostname?: boolean | cdktf.IResolvable; 
  public get enableBindHostname() {
    return this.getBooleanAttribute('enable_bind_hostname');
  }
  public set enableBindHostname(value: boolean | cdktf.IResolvable) {
    this._enableBindHostname = value;
  }
  public resetEnableBindHostname() {
    this._enableBindHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBindHostnameInput() {
    return this._enableBindHostname;
  }

  // enable_dnssec - computed: false, optional: true, required: false
  private _enableDnssec?: boolean | cdktf.IResolvable; 
  public get enableDnssec() {
    return this.getBooleanAttribute('enable_dnssec');
  }
  public set enableDnssec(value: boolean | cdktf.IResolvable) {
    this._enableDnssec = value;
  }
  public resetEnableDnssec() {
    this._enableDnssec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDnssecInput() {
    return this._enableDnssec;
  }

  // enable_nsid - computed: false, optional: true, required: false
  private _enableNsid?: boolean | cdktf.IResolvable; 
  public get enableNsid() {
    return this.getBooleanAttribute('enable_nsid');
  }
  public set enableNsid(value: boolean | cdktf.IResolvable) {
    this._enableNsid = value;
  }
  public resetEnableNsid() {
    this._enableNsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNsidInput() {
    return this._enableNsid;
  }

  // enable_path_mtu_discovery - computed: false, optional: true, required: false
  private _enablePathMtuDiscovery?: boolean | cdktf.IResolvable; 
  public get enablePathMtuDiscovery() {
    return this.getBooleanAttribute('enable_path_mtu_discovery');
  }
  public set enablePathMtuDiscovery(value: boolean | cdktf.IResolvable) {
    this._enablePathMtuDiscovery = value;
  }
  public resetEnablePathMtuDiscovery() {
    this._enablePathMtuDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePathMtuDiscoveryInput() {
    return this._enablePathMtuDiscovery;
  }

  // enable_tcp_protocol - computed: false, optional: true, required: false
  private _enableTcpProtocol?: boolean | cdktf.IResolvable; 
  public get enableTcpProtocol() {
    return this.getBooleanAttribute('enable_tcp_protocol');
  }
  public set enableTcpProtocol(value: boolean | cdktf.IResolvable) {
    this._enableTcpProtocol = value;
  }
  public resetEnableTcpProtocol() {
    this._enableTcpProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTcpProtocolInput() {
    return this._enableTcpProtocol;
  }

  // favor_fastest_round_trip_nameserver - computed: false, optional: true, required: false
  private _favorFastestRoundTripNameserver?: boolean | cdktf.IResolvable; 
  public get favorFastestRoundTripNameserver() {
    return this.getBooleanAttribute('favor_fastest_round_trip_nameserver');
  }
  public set favorFastestRoundTripNameserver(value: boolean | cdktf.IResolvable) {
    this._favorFastestRoundTripNameserver = value;
  }
  public resetFavorFastestRoundTripNameserver() {
    this._favorFastestRoundTripNameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get favorFastestRoundTripNameserverInput() {
    return this._favorFastestRoundTripNameserver;
  }

  // try_next_nameserver_on_failure - computed: false, optional: true, required: false
  private _tryNextNameserverOnFailure?: boolean | cdktf.IResolvable; 
  public get tryNextNameserverOnFailure() {
    return this.getBooleanAttribute('try_next_nameserver_on_failure');
  }
  public set tryNextNameserverOnFailure(value: boolean | cdktf.IResolvable) {
    this._tryNextNameserverOnFailure = value;
  }
  public resetTryNextNameserverOnFailure() {
    this._tryNextNameserverOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tryNextNameserverOnFailureInput() {
    return this._tryNextNameserverOnFailure;
  }
}
export interface DnsTestAlertSettingsAlertRuleLevel {
  /**
  * The level to be selected from the dropdown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#filter_type DnsTest#filter_type}
  */
  readonly filterType: string;
  /**
  * A value must be provided when a level is selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#filter_value DnsTest#filter_value}
  */
  readonly filterValue: string;
}

export function dnsTestAlertSettingsAlertRuleLevelToTerraform(struct?: DnsTestAlertSettingsAlertRuleLevelOutputReference | DnsTestAlertSettingsAlertRuleLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    filter_value: cdktf.stringToTerraform(struct!.filterValue),
  }
}


export function dnsTestAlertSettingsAlertRuleLevelToHclTerraform(struct?: DnsTestAlertSettingsAlertRuleLevelOutputReference | DnsTestAlertSettingsAlertRuleLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_value: {
      value: cdktf.stringToHclTerraform(struct!.filterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsTestAlertSettingsAlertRuleLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsTestAlertSettingsAlertRuleLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._filterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterValue = this._filterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsTestAlertSettingsAlertRuleLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterType = undefined;
      this._filterValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterType = value.filterType;
      this._filterValue = value.filterValue;
    }
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // filter_value - computed: false, optional: false, required: true
  private _filterValue?: string; 
  public get filterValue() {
    return this.getStringAttribute('filter_value');
  }
  public set filterValue(value: string) {
    this._filterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterValueInput() {
    return this._filterValue;
  }
}
export interface DnsTestAlertSettingsAlertRuleNotificationGroup {
  /**
  * Optional. List of contact groups to receive alert notifications. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#contact_groups DnsTest#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Optional. Set to true to include critical alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#notify_on_critical DnsTest#notify_on_critical}
  */
  readonly notifyOnCritical?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set to true to include improved alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#notify_on_improved DnsTest#notify_on_improved}
  */
  readonly notifyOnImproved?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set to true to include warning alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#notify_on_warning DnsTest#notify_on_warning}
  */
  readonly notifyOnWarning?: boolean | cdktf.IResolvable;
  /**
  * Optional. List of email addresses to receive alert notifications. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#recipient_email_ids DnsTest#recipient_email_ids}
  */
  readonly recipientEmailIds?: string[];
  /**
  * Email subject for the alert notifications. Required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#subject DnsTest#subject}
  */
  readonly subject: string;
}

export function dnsTestAlertSettingsAlertRuleNotificationGroupToTerraform(struct?: DnsTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contactGroups),
    notify_on_critical: cdktf.booleanToTerraform(struct!.notifyOnCritical),
    notify_on_improved: cdktf.booleanToTerraform(struct!.notifyOnImproved),
    notify_on_warning: cdktf.booleanToTerraform(struct!.notifyOnWarning),
    recipient_email_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipientEmailIds),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function dnsTestAlertSettingsAlertRuleNotificationGroupToHclTerraform(struct?: DnsTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contactGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notify_on_critical: {
      value: cdktf.booleanToHclTerraform(struct!.notifyOnCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_on_improved: {
      value: cdktf.booleanToHclTerraform(struct!.notifyOnImproved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_on_warning: {
      value: cdktf.booleanToHclTerraform(struct!.notifyOnWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recipient_email_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipientEmailIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsTestAlertSettingsAlertRuleNotificationGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroups = this._contactGroups;
    }
    if (this._notifyOnCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOnCritical = this._notifyOnCritical;
    }
    if (this._notifyOnImproved !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOnImproved = this._notifyOnImproved;
    }
    if (this._notifyOnWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOnWarning = this._notifyOnWarning;
    }
    if (this._recipientEmailIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientEmailIds = this._recipientEmailIds;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactGroups = undefined;
      this._notifyOnCritical = undefined;
      this._notifyOnImproved = undefined;
      this._notifyOnWarning = undefined;
      this._recipientEmailIds = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactGroups = value.contactGroups;
      this._notifyOnCritical = value.notifyOnCritical;
      this._notifyOnImproved = value.notifyOnImproved;
      this._notifyOnWarning = value.notifyOnWarning;
      this._recipientEmailIds = value.recipientEmailIds;
      this._subject = value.subject;
    }
  }

  // contact_groups - computed: false, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return this.getListAttribute('contact_groups');
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // notify_on_critical - computed: false, optional: true, required: false
  private _notifyOnCritical?: boolean | cdktf.IResolvable; 
  public get notifyOnCritical() {
    return this.getBooleanAttribute('notify_on_critical');
  }
  public set notifyOnCritical(value: boolean | cdktf.IResolvable) {
    this._notifyOnCritical = value;
  }
  public resetNotifyOnCritical() {
    this._notifyOnCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnCriticalInput() {
    return this._notifyOnCritical;
  }

  // notify_on_improved - computed: false, optional: true, required: false
  private _notifyOnImproved?: boolean | cdktf.IResolvable; 
  public get notifyOnImproved() {
    return this.getBooleanAttribute('notify_on_improved');
  }
  public set notifyOnImproved(value: boolean | cdktf.IResolvable) {
    this._notifyOnImproved = value;
  }
  public resetNotifyOnImproved() {
    this._notifyOnImproved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnImprovedInput() {
    return this._notifyOnImproved;
  }

  // notify_on_warning - computed: false, optional: true, required: false
  private _notifyOnWarning?: boolean | cdktf.IResolvable; 
  public get notifyOnWarning() {
    return this.getBooleanAttribute('notify_on_warning');
  }
  public set notifyOnWarning(value: boolean | cdktf.IResolvable) {
    this._notifyOnWarning = value;
  }
  public resetNotifyOnWarning() {
    this._notifyOnWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnWarningInput() {
    return this._notifyOnWarning;
  }

  // recipient_email_ids - computed: false, optional: true, required: false
  private _recipientEmailIds?: string[]; 
  public get recipientEmailIds() {
    return this.getListAttribute('recipient_email_ids');
  }
  public set recipientEmailIds(value: string[]) {
    this._recipientEmailIds = value;
  }
  public resetRecipientEmailIds() {
    this._recipientEmailIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientEmailIdsInput() {
    return this._recipientEmailIds;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class DnsTestAlertSettingsAlertRuleNotificationGroupList extends cdktf.ComplexList {
  public internalValue? : DnsTestAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable

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
  public get(index: number): DnsTestAlertSettingsAlertRuleNotificationGroupOutputReference {
    return new DnsTestAlertSettingsAlertRuleNotificationGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsTestAlertSettingsAlertRule {
  /**
  * Optional. Sets the sub alert type: 'ping rtt','ping packet loss','test time', '% downtime', 'test'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#alert_sub_type DnsTest#alert_sub_type}
  */
  readonly alertSubType?: string;
  /**
  * Sets the alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#alert_type DnsTest#alert_type}
  */
  readonly alertType: string;
  /**
  * Optional. Switch for enabling all match records feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#all_match_records DnsTest#all_match_records}
  */
  readonly allMatchRecords?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets the number of consecutive runs only if enable_consecutive field is true and node_threshold_type is node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#consecutive_number_of_runs DnsTest#consecutive_number_of_runs}
  */
  readonly consecutiveNumberOfRuns?: number;
  /**
  * Optional. Sets alert critical reminder interval: 'none', '1 minute', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', 'daily'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#critical_reminder DnsTest#critical_reminder}
  */
  readonly criticalReminder?: string;
  /**
  * Optional. Critical trigger value for 'specific value' and 'trailing value' trigger types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#critical_trigger DnsTest#critical_trigger}
  */
  readonly criticalTrigger?: number;
  /**
  * Optional. Sets the dns record type: 'a','aaaa','aoraaaa','ns','cname','other'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#dns_record_type DnsTest#dns_record_type}
  */
  readonly dnsRecordType?: string;
  /**
  * Optional. The dns resolved name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#dns_resolved_name DnsTest#dns_resolved_name}
  */
  readonly dnsResolvedName?: string;
  /**
  * Optional. The dns ttl value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#dns_ttl DnsTest#dns_ttl}
  */
  readonly dnsTtl?: number;
  /**
  * Optional. Checks consecutive number of runs or nodes for triggering alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#enable_consecutive DnsTest#enable_consecutive}
  */
  readonly enableConsecutive?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets enforce test failure property for an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#enforce_test_failure DnsTest#enforce_test_failure}
  */
  readonly enforceTestFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets trigger expression for content match alert type 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#expression DnsTest#expression}
  */
  readonly expression?: string;
  /**
  * Optional. Sets the historical interval for 'trailing value' trigger type: '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', '2 hours', '6 hours', '12 hours', '1 day', '1 week'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#historical_interval DnsTest#historical_interval}
  */
  readonly historicalInterval?: string;
  /**
  * Sets the node threshold type for alert: 'runs', 'average across node' or 'node'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#node_threshold_type DnsTest#node_threshold_type}
  */
  readonly nodeThresholdType: string;
  /**
  * Optional. Notification group type to alert. Supports only default contacts for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#notification_type DnsTest#notification_type}
  */
  readonly notificationType?: string;
  /**
  * Optional. Sets the number of failed nodes the alert should trigger if node_threshold_type is 'average across nodes'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#number_of_failing_nodes DnsTest#number_of_failing_nodes}
  */
  readonly numberOfFailingNodes?: number;
  /**
  * Optional. Omits scatterplot image from alert emails if set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#omit_scatterplot DnsTest#omit_scatterplot}
  */
  readonly omitScatterplot?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets the operation type:'equals', 'not equals', 'greater than', 'greater than or equals', 'less than', 'less than or equals'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#operation_type DnsTest#operation_type}
  */
  readonly operationType?: string;
  /**
  * Optional. Sets the statistical type for 'trailing value' trigger type. Supports only 'average' for now
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#statistical_type DnsTest#statistical_type}
  */
  readonly statisticalType?: string;
  /**
  * Optional. Sets the alert time threshold: 'default', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', '2 hours', '6 hours', '12 hours'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#threshold_interval DnsTest#threshold_interval}
  */
  readonly thresholdInterval?: string;
  /**
  * Optional. Sets the threshold for the number of runs or nodes the alert should trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#threshold_number_of_runs DnsTest#threshold_number_of_runs}
  */
  readonly thresholdNumberOfRuns?: number;
  /**
  * Optional. Sets the threshold for the percentage of runs the alert should trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#threshold_percentage_of_runs DnsTest#threshold_percentage_of_runs}
  */
  readonly thresholdPercentageOfRuns?: number;
  /**
  * Optional. Sets the trigger type: 'specific value', 'trailing value', 'trendshift'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#trigger_type DnsTest#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * Optional. Set to true for using rolling window instead of schedule time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#use_rolling_window DnsTest#use_rolling_window}
  */
  readonly useRollingWindow?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets alert warning reminder interval: 'none', '1 minute', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', 'daily'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#warning_reminder DnsTest#warning_reminder}
  */
  readonly warningReminder?: string;
  /**
  * Optional. Warning trigger value for 'specific value' and 'trailing value' trigger types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#warning_trigger DnsTest#warning_trigger}
  */
  readonly warningTrigger?: number;
  /**
  * level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#level DnsTest#level}
  */
  readonly level?: DnsTestAlertSettingsAlertRuleLevel;
  /**
  * notification_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#notification_group DnsTest#notification_group}
  */
  readonly notificationGroup: DnsTestAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable;
}

export function dnsTestAlertSettingsAlertRuleToTerraform(struct?: DnsTestAlertSettingsAlertRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_sub_type: cdktf.stringToTerraform(struct!.alertSubType),
    alert_type: cdktf.stringToTerraform(struct!.alertType),
    all_match_records: cdktf.booleanToTerraform(struct!.allMatchRecords),
    consecutive_number_of_runs: cdktf.numberToTerraform(struct!.consecutiveNumberOfRuns),
    critical_reminder: cdktf.stringToTerraform(struct!.criticalReminder),
    critical_trigger: cdktf.numberToTerraform(struct!.criticalTrigger),
    dns_record_type: cdktf.stringToTerraform(struct!.dnsRecordType),
    dns_resolved_name: cdktf.stringToTerraform(struct!.dnsResolvedName),
    dns_ttl: cdktf.numberToTerraform(struct!.dnsTtl),
    enable_consecutive: cdktf.booleanToTerraform(struct!.enableConsecutive),
    enforce_test_failure: cdktf.booleanToTerraform(struct!.enforceTestFailure),
    expression: cdktf.stringToTerraform(struct!.expression),
    historical_interval: cdktf.stringToTerraform(struct!.historicalInterval),
    node_threshold_type: cdktf.stringToTerraform(struct!.nodeThresholdType),
    notification_type: cdktf.stringToTerraform(struct!.notificationType),
    number_of_failing_nodes: cdktf.numberToTerraform(struct!.numberOfFailingNodes),
    omit_scatterplot: cdktf.booleanToTerraform(struct!.omitScatterplot),
    operation_type: cdktf.stringToTerraform(struct!.operationType),
    statistical_type: cdktf.stringToTerraform(struct!.statisticalType),
    threshold_interval: cdktf.stringToTerraform(struct!.thresholdInterval),
    threshold_number_of_runs: cdktf.numberToTerraform(struct!.thresholdNumberOfRuns),
    threshold_percentage_of_runs: cdktf.numberToTerraform(struct!.thresholdPercentageOfRuns),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
    use_rolling_window: cdktf.booleanToTerraform(struct!.useRollingWindow),
    warning_reminder: cdktf.stringToTerraform(struct!.warningReminder),
    warning_trigger: cdktf.numberToTerraform(struct!.warningTrigger),
    level: dnsTestAlertSettingsAlertRuleLevelToTerraform(struct!.level),
    notification_group: cdktf.listMapper(dnsTestAlertSettingsAlertRuleNotificationGroupToTerraform, true)(struct!.notificationGroup),
  }
}


export function dnsTestAlertSettingsAlertRuleToHclTerraform(struct?: DnsTestAlertSettingsAlertRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_sub_type: {
      value: cdktf.stringToHclTerraform(struct!.alertSubType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_type: {
      value: cdktf.stringToHclTerraform(struct!.alertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    all_match_records: {
      value: cdktf.booleanToHclTerraform(struct!.allMatchRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consecutive_number_of_runs: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveNumberOfRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    critical_reminder: {
      value: cdktf.stringToHclTerraform(struct!.criticalReminder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical_trigger: {
      value: cdktf.numberToHclTerraform(struct!.criticalTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_record_type: {
      value: cdktf.stringToHclTerraform(struct!.dnsRecordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_resolved_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsResolvedName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ttl: {
      value: cdktf.numberToHclTerraform(struct!.dnsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_consecutive: {
      value: cdktf.booleanToHclTerraform(struct!.enableConsecutive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_test_failure: {
      value: cdktf.booleanToHclTerraform(struct!.enforceTestFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    historical_interval: {
      value: cdktf.stringToHclTerraform(struct!.historicalInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_threshold_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeThresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_type: {
      value: cdktf.stringToHclTerraform(struct!.notificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_failing_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfFailingNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    omit_scatterplot: {
      value: cdktf.booleanToHclTerraform(struct!.omitScatterplot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operation_type: {
      value: cdktf.stringToHclTerraform(struct!.operationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistical_type: {
      value: cdktf.stringToHclTerraform(struct!.statisticalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_interval: {
      value: cdktf.stringToHclTerraform(struct!.thresholdInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_number_of_runs: {
      value: cdktf.numberToHclTerraform(struct!.thresholdNumberOfRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_percentage_of_runs: {
      value: cdktf.numberToHclTerraform(struct!.thresholdPercentageOfRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_type: {
      value: cdktf.stringToHclTerraform(struct!.triggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rolling_window: {
      value: cdktf.booleanToHclTerraform(struct!.useRollingWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warning_reminder: {
      value: cdktf.stringToHclTerraform(struct!.warningReminder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_trigger: {
      value: cdktf.numberToHclTerraform(struct!.warningTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level: {
      value: dnsTestAlertSettingsAlertRuleLevelToHclTerraform(struct!.level),
      isBlock: true,
      type: "set",
      storageClassType: "DnsTestAlertSettingsAlertRuleLevelList",
    },
    notification_group: {
      value: cdktf.listMapperHcl(dnsTestAlertSettingsAlertRuleNotificationGroupToHclTerraform, true)(struct!.notificationGroup),
      isBlock: true,
      type: "set",
      storageClassType: "DnsTestAlertSettingsAlertRuleNotificationGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsTestAlertSettingsAlertRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsTestAlertSettingsAlertRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertSubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSubType = this._alertSubType;
    }
    if (this._alertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertType = this._alertType;
    }
    if (this._allMatchRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.allMatchRecords = this._allMatchRecords;
    }
    if (this._consecutiveNumberOfRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveNumberOfRuns = this._consecutiveNumberOfRuns;
    }
    if (this._criticalReminder !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalReminder = this._criticalReminder;
    }
    if (this._criticalTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalTrigger = this._criticalTrigger;
    }
    if (this._dnsRecordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRecordType = this._dnsRecordType;
    }
    if (this._dnsResolvedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResolvedName = this._dnsResolvedName;
    }
    if (this._dnsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTtl = this._dnsTtl;
    }
    if (this._enableConsecutive !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConsecutive = this._enableConsecutive;
    }
    if (this._enforceTestFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTestFailure = this._enforceTestFailure;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._historicalInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.historicalInterval = this._historicalInterval;
    }
    if (this._nodeThresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeThresholdType = this._nodeThresholdType;
    }
    if (this._notificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationType = this._notificationType;
    }
    if (this._numberOfFailingNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfFailingNodes = this._numberOfFailingNodes;
    }
    if (this._omitScatterplot !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitScatterplot = this._omitScatterplot;
    }
    if (this._operationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationType = this._operationType;
    }
    if (this._statisticalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticalType = this._statisticalType;
    }
    if (this._thresholdInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdInterval = this._thresholdInterval;
    }
    if (this._thresholdNumberOfRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdNumberOfRuns = this._thresholdNumberOfRuns;
    }
    if (this._thresholdPercentageOfRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPercentageOfRuns = this._thresholdPercentageOfRuns;
    }
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    if (this._useRollingWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRollingWindow = this._useRollingWindow;
    }
    if (this._warningReminder !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningReminder = this._warningReminder;
    }
    if (this._warningTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningTrigger = this._warningTrigger;
    }
    if (this._level?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level?.internalValue;
    }
    if (this._notificationGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationGroup = this._notificationGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsTestAlertSettingsAlertRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertSubType = undefined;
      this._alertType = undefined;
      this._allMatchRecords = undefined;
      this._consecutiveNumberOfRuns = undefined;
      this._criticalReminder = undefined;
      this._criticalTrigger = undefined;
      this._dnsRecordType = undefined;
      this._dnsResolvedName = undefined;
      this._dnsTtl = undefined;
      this._enableConsecutive = undefined;
      this._enforceTestFailure = undefined;
      this._expression = undefined;
      this._historicalInterval = undefined;
      this._nodeThresholdType = undefined;
      this._notificationType = undefined;
      this._numberOfFailingNodes = undefined;
      this._omitScatterplot = undefined;
      this._operationType = undefined;
      this._statisticalType = undefined;
      this._thresholdInterval = undefined;
      this._thresholdNumberOfRuns = undefined;
      this._thresholdPercentageOfRuns = undefined;
      this._triggerType = undefined;
      this._useRollingWindow = undefined;
      this._warningReminder = undefined;
      this._warningTrigger = undefined;
      this._level.internalValue = undefined;
      this._notificationGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertSubType = value.alertSubType;
      this._alertType = value.alertType;
      this._allMatchRecords = value.allMatchRecords;
      this._consecutiveNumberOfRuns = value.consecutiveNumberOfRuns;
      this._criticalReminder = value.criticalReminder;
      this._criticalTrigger = value.criticalTrigger;
      this._dnsRecordType = value.dnsRecordType;
      this._dnsResolvedName = value.dnsResolvedName;
      this._dnsTtl = value.dnsTtl;
      this._enableConsecutive = value.enableConsecutive;
      this._enforceTestFailure = value.enforceTestFailure;
      this._expression = value.expression;
      this._historicalInterval = value.historicalInterval;
      this._nodeThresholdType = value.nodeThresholdType;
      this._notificationType = value.notificationType;
      this._numberOfFailingNodes = value.numberOfFailingNodes;
      this._omitScatterplot = value.omitScatterplot;
      this._operationType = value.operationType;
      this._statisticalType = value.statisticalType;
      this._thresholdInterval = value.thresholdInterval;
      this._thresholdNumberOfRuns = value.thresholdNumberOfRuns;
      this._thresholdPercentageOfRuns = value.thresholdPercentageOfRuns;
      this._triggerType = value.triggerType;
      this._useRollingWindow = value.useRollingWindow;
      this._warningReminder = value.warningReminder;
      this._warningTrigger = value.warningTrigger;
      this._level.internalValue = value.level;
      this._notificationGroup.internalValue = value.notificationGroup;
    }
  }

  // alert_sub_type - computed: false, optional: true, required: false
  private _alertSubType?: string; 
  public get alertSubType() {
    return this.getStringAttribute('alert_sub_type');
  }
  public set alertSubType(value: string) {
    this._alertSubType = value;
  }
  public resetAlertSubType() {
    this._alertSubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSubTypeInput() {
    return this._alertSubType;
  }

  // alert_type - computed: false, optional: false, required: true
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // all_match_records - computed: false, optional: true, required: false
  private _allMatchRecords?: boolean | cdktf.IResolvable; 
  public get allMatchRecords() {
    return this.getBooleanAttribute('all_match_records');
  }
  public set allMatchRecords(value: boolean | cdktf.IResolvable) {
    this._allMatchRecords = value;
  }
  public resetAllMatchRecords() {
    this._allMatchRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allMatchRecordsInput() {
    return this._allMatchRecords;
  }

  // consecutive_number_of_runs - computed: false, optional: true, required: false
  private _consecutiveNumberOfRuns?: number; 
  public get consecutiveNumberOfRuns() {
    return this.getNumberAttribute('consecutive_number_of_runs');
  }
  public set consecutiveNumberOfRuns(value: number) {
    this._consecutiveNumberOfRuns = value;
  }
  public resetConsecutiveNumberOfRuns() {
    this._consecutiveNumberOfRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveNumberOfRunsInput() {
    return this._consecutiveNumberOfRuns;
  }

  // critical_reminder - computed: false, optional: true, required: false
  private _criticalReminder?: string; 
  public get criticalReminder() {
    return this.getStringAttribute('critical_reminder');
  }
  public set criticalReminder(value: string) {
    this._criticalReminder = value;
  }
  public resetCriticalReminder() {
    this._criticalReminder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalReminderInput() {
    return this._criticalReminder;
  }

  // critical_trigger - computed: false, optional: true, required: false
  private _criticalTrigger?: number; 
  public get criticalTrigger() {
    return this.getNumberAttribute('critical_trigger');
  }
  public set criticalTrigger(value: number) {
    this._criticalTrigger = value;
  }
  public resetCriticalTrigger() {
    this._criticalTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalTriggerInput() {
    return this._criticalTrigger;
  }

  // dns_record_type - computed: false, optional: true, required: false
  private _dnsRecordType?: string; 
  public get dnsRecordType() {
    return this.getStringAttribute('dns_record_type');
  }
  public set dnsRecordType(value: string) {
    this._dnsRecordType = value;
  }
  public resetDnsRecordType() {
    this._dnsRecordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRecordTypeInput() {
    return this._dnsRecordType;
  }

  // dns_resolved_name - computed: false, optional: true, required: false
  private _dnsResolvedName?: string; 
  public get dnsResolvedName() {
    return this.getStringAttribute('dns_resolved_name');
  }
  public set dnsResolvedName(value: string) {
    this._dnsResolvedName = value;
  }
  public resetDnsResolvedName() {
    this._dnsResolvedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolvedNameInput() {
    return this._dnsResolvedName;
  }

  // dns_ttl - computed: false, optional: true, required: false
  private _dnsTtl?: number; 
  public get dnsTtl() {
    return this.getNumberAttribute('dns_ttl');
  }
  public set dnsTtl(value: number) {
    this._dnsTtl = value;
  }
  public resetDnsTtl() {
    this._dnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTtlInput() {
    return this._dnsTtl;
  }

  // enable_consecutive - computed: false, optional: true, required: false
  private _enableConsecutive?: boolean | cdktf.IResolvable; 
  public get enableConsecutive() {
    return this.getBooleanAttribute('enable_consecutive');
  }
  public set enableConsecutive(value: boolean | cdktf.IResolvable) {
    this._enableConsecutive = value;
  }
  public resetEnableConsecutive() {
    this._enableConsecutive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsecutiveInput() {
    return this._enableConsecutive;
  }

  // enforce_test_failure - computed: false, optional: true, required: false
  private _enforceTestFailure?: boolean | cdktf.IResolvable; 
  public get enforceTestFailure() {
    return this.getBooleanAttribute('enforce_test_failure');
  }
  public set enforceTestFailure(value: boolean | cdktf.IResolvable) {
    this._enforceTestFailure = value;
  }
  public resetEnforceTestFailure() {
    this._enforceTestFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTestFailureInput() {
    return this._enforceTestFailure;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // historical_interval - computed: false, optional: true, required: false
  private _historicalInterval?: string; 
  public get historicalInterval() {
    return this.getStringAttribute('historical_interval');
  }
  public set historicalInterval(value: string) {
    this._historicalInterval = value;
  }
  public resetHistoricalInterval() {
    this._historicalInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicalIntervalInput() {
    return this._historicalInterval;
  }

  // node_threshold_type - computed: false, optional: false, required: true
  private _nodeThresholdType?: string; 
  public get nodeThresholdType() {
    return this.getStringAttribute('node_threshold_type');
  }
  public set nodeThresholdType(value: string) {
    this._nodeThresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeThresholdTypeInput() {
    return this._nodeThresholdType;
  }

  // notification_type - computed: false, optional: true, required: false
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  public resetNotificationType() {
    this._notificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // number_of_failing_nodes - computed: false, optional: true, required: false
  private _numberOfFailingNodes?: number; 
  public get numberOfFailingNodes() {
    return this.getNumberAttribute('number_of_failing_nodes');
  }
  public set numberOfFailingNodes(value: number) {
    this._numberOfFailingNodes = value;
  }
  public resetNumberOfFailingNodes() {
    this._numberOfFailingNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfFailingNodesInput() {
    return this._numberOfFailingNodes;
  }

  // omit_scatterplot - computed: false, optional: true, required: false
  private _omitScatterplot?: boolean | cdktf.IResolvable; 
  public get omitScatterplot() {
    return this.getBooleanAttribute('omit_scatterplot');
  }
  public set omitScatterplot(value: boolean | cdktf.IResolvable) {
    this._omitScatterplot = value;
  }
  public resetOmitScatterplot() {
    this._omitScatterplot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitScatterplotInput() {
    return this._omitScatterplot;
  }

  // operation_type - computed: false, optional: true, required: false
  private _operationType?: string; 
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }
  public set operationType(value: string) {
    this._operationType = value;
  }
  public resetOperationType() {
    this._operationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypeInput() {
    return this._operationType;
  }

  // statistical_type - computed: false, optional: true, required: false
  private _statisticalType?: string; 
  public get statisticalType() {
    return this.getStringAttribute('statistical_type');
  }
  public set statisticalType(value: string) {
    this._statisticalType = value;
  }
  public resetStatisticalType() {
    this._statisticalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticalTypeInput() {
    return this._statisticalType;
  }

  // threshold_interval - computed: false, optional: true, required: false
  private _thresholdInterval?: string; 
  public get thresholdInterval() {
    return this.getStringAttribute('threshold_interval');
  }
  public set thresholdInterval(value: string) {
    this._thresholdInterval = value;
  }
  public resetThresholdInterval() {
    this._thresholdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdIntervalInput() {
    return this._thresholdInterval;
  }

  // threshold_number_of_runs - computed: false, optional: true, required: false
  private _thresholdNumberOfRuns?: number; 
  public get thresholdNumberOfRuns() {
    return this.getNumberAttribute('threshold_number_of_runs');
  }
  public set thresholdNumberOfRuns(value: number) {
    this._thresholdNumberOfRuns = value;
  }
  public resetThresholdNumberOfRuns() {
    this._thresholdNumberOfRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdNumberOfRunsInput() {
    return this._thresholdNumberOfRuns;
  }

  // threshold_percentage_of_runs - computed: false, optional: true, required: false
  private _thresholdPercentageOfRuns?: number; 
  public get thresholdPercentageOfRuns() {
    return this.getNumberAttribute('threshold_percentage_of_runs');
  }
  public set thresholdPercentageOfRuns(value: number) {
    this._thresholdPercentageOfRuns = value;
  }
  public resetThresholdPercentageOfRuns() {
    this._thresholdPercentageOfRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentageOfRunsInput() {
    return this._thresholdPercentageOfRuns;
  }

  // trigger_type - computed: false, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // use_rolling_window - computed: false, optional: true, required: false
  private _useRollingWindow?: boolean | cdktf.IResolvable; 
  public get useRollingWindow() {
    return this.getBooleanAttribute('use_rolling_window');
  }
  public set useRollingWindow(value: boolean | cdktf.IResolvable) {
    this._useRollingWindow = value;
  }
  public resetUseRollingWindow() {
    this._useRollingWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRollingWindowInput() {
    return this._useRollingWindow;
  }

  // warning_reminder - computed: false, optional: true, required: false
  private _warningReminder?: string; 
  public get warningReminder() {
    return this.getStringAttribute('warning_reminder');
  }
  public set warningReminder(value: string) {
    this._warningReminder = value;
  }
  public resetWarningReminder() {
    this._warningReminder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningReminderInput() {
    return this._warningReminder;
  }

  // warning_trigger - computed: false, optional: true, required: false
  private _warningTrigger?: number; 
  public get warningTrigger() {
    return this.getNumberAttribute('warning_trigger');
  }
  public set warningTrigger(value: number) {
    this._warningTrigger = value;
  }
  public resetWarningTrigger() {
    this._warningTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningTriggerInput() {
    return this._warningTrigger;
  }

  // level - computed: false, optional: true, required: false
  private _level = new DnsTestAlertSettingsAlertRuleLevelOutputReference(this, "level");
  public get level() {
    return this._level;
  }
  public putLevel(value: DnsTestAlertSettingsAlertRuleLevel) {
    this._level.internalValue = value;
  }
  public resetLevel() {
    this._level.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level.internalValue;
  }

  // notification_group - computed: false, optional: false, required: true
  private _notificationGroup = new DnsTestAlertSettingsAlertRuleNotificationGroupList(this, "notification_group", true);
  public get notificationGroup() {
    return this._notificationGroup;
  }
  public putNotificationGroup(value: DnsTestAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable) {
    this._notificationGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationGroupInput() {
    return this._notificationGroup.internalValue;
  }
}

export class DnsTestAlertSettingsAlertRuleList extends cdktf.ComplexList {
  public internalValue? : DnsTestAlertSettingsAlertRule[] | cdktf.IResolvable

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
  public get(index: number): DnsTestAlertSettingsAlertRuleOutputReference {
    return new DnsTestAlertSettingsAlertRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsTestAlertSettingsNotificationGroupContactGroups {
  /**
  * The unique ID of the contact group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#contact_group_id DnsTest#contact_group_id}
  */
  readonly contactGroupId: number;
  /**
  * The name of the contact group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#contact_group_name DnsTest#contact_group_name}
  */
  readonly contactGroupName: string;
}

export function dnsTestAlertSettingsNotificationGroupContactGroupsToTerraform(struct?: DnsTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_group_id: cdktf.numberToTerraform(struct!.contactGroupId),
    contact_group_name: cdktf.stringToTerraform(struct!.contactGroupName),
  }
}


export function dnsTestAlertSettingsNotificationGroupContactGroupsToHclTerraform(struct?: DnsTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_group_id: {
      value: cdktf.numberToHclTerraform(struct!.contactGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    contact_group_name: {
      value: cdktf.stringToHclTerraform(struct!.contactGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsTestAlertSettingsNotificationGroupContactGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroupId = this._contactGroupId;
    }
    if (this._contactGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroupName = this._contactGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactGroupId = undefined;
      this._contactGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactGroupId = value.contactGroupId;
      this._contactGroupName = value.contactGroupName;
    }
  }

  // contact_group_id - computed: false, optional: false, required: true
  private _contactGroupId?: number; 
  public get contactGroupId() {
    return this.getNumberAttribute('contact_group_id');
  }
  public set contactGroupId(value: number) {
    this._contactGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupIdInput() {
    return this._contactGroupId;
  }

  // contact_group_name - computed: false, optional: false, required: true
  private _contactGroupName?: string; 
  public get contactGroupName() {
    return this.getStringAttribute('contact_group_name');
  }
  public set contactGroupName(value: string) {
    this._contactGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupNameInput() {
    return this._contactGroupName;
  }
}

export class DnsTestAlertSettingsNotificationGroupContactGroupsList extends cdktf.ComplexList {
  public internalValue? : DnsTestAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable

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
  public get(index: number): DnsTestAlertSettingsNotificationGroupContactGroupsOutputReference {
    return new DnsTestAlertSettingsNotificationGroupContactGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsTestAlertSettingsNotificationGroup {
  /**
  * Optional. Alert webhook ids for the webhook endpoints to associate with this alert setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#alert_webhook_ids DnsTest#alert_webhook_ids}
  */
  readonly alertWebhookIds?: number[];
  /**
  * Optional. List of emails to alert. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#recipient_email_ids DnsTest#recipient_email_ids}
  */
  readonly recipientEmailIds?: string[];
  /**
  * Email subject for the alert notifications. Required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#subject DnsTest#subject}
  */
  readonly subject: string;
  /**
  * contact_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#contact_groups DnsTest#contact_groups}
  */
  readonly contactGroups?: DnsTestAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable;
}

export function dnsTestAlertSettingsNotificationGroupToTerraform(struct?: DnsTestAlertSettingsNotificationGroupOutputReference | DnsTestAlertSettingsNotificationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_webhook_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.alertWebhookIds),
    recipient_email_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipientEmailIds),
    subject: cdktf.stringToTerraform(struct!.subject),
    contact_groups: cdktf.listMapper(dnsTestAlertSettingsNotificationGroupContactGroupsToTerraform, true)(struct!.contactGroups),
  }
}


export function dnsTestAlertSettingsNotificationGroupToHclTerraform(struct?: DnsTestAlertSettingsNotificationGroupOutputReference | DnsTestAlertSettingsNotificationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_webhook_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.alertWebhookIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    recipient_email_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipientEmailIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_groups: {
      value: cdktf.listMapperHcl(dnsTestAlertSettingsNotificationGroupContactGroupsToHclTerraform, true)(struct!.contactGroups),
      isBlock: true,
      type: "set",
      storageClassType: "DnsTestAlertSettingsNotificationGroupContactGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsTestAlertSettingsNotificationGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsTestAlertSettingsNotificationGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertWebhookIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertWebhookIds = this._alertWebhookIds;
    }
    if (this._recipientEmailIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientEmailIds = this._recipientEmailIds;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._contactGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroups = this._contactGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsTestAlertSettingsNotificationGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertWebhookIds = undefined;
      this._recipientEmailIds = undefined;
      this._subject = undefined;
      this._contactGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertWebhookIds = value.alertWebhookIds;
      this._recipientEmailIds = value.recipientEmailIds;
      this._subject = value.subject;
      this._contactGroups.internalValue = value.contactGroups;
    }
  }

  // alert_webhook_ids - computed: false, optional: true, required: false
  private _alertWebhookIds?: number[]; 
  public get alertWebhookIds() {
    return this.getNumberListAttribute('alert_webhook_ids');
  }
  public set alertWebhookIds(value: number[]) {
    this._alertWebhookIds = value;
  }
  public resetAlertWebhookIds() {
    this._alertWebhookIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertWebhookIdsInput() {
    return this._alertWebhookIds;
  }

  // recipient_email_ids - computed: false, optional: true, required: false
  private _recipientEmailIds?: string[]; 
  public get recipientEmailIds() {
    return this.getListAttribute('recipient_email_ids');
  }
  public set recipientEmailIds(value: string[]) {
    this._recipientEmailIds = value;
  }
  public resetRecipientEmailIds() {
    this._recipientEmailIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientEmailIdsInput() {
    return this._recipientEmailIds;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // contact_groups - computed: false, optional: true, required: false
  private _contactGroups = new DnsTestAlertSettingsNotificationGroupContactGroupsList(this, "contact_groups", true);
  public get contactGroups() {
    return this._contactGroups;
  }
  public putContactGroups(value: DnsTestAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable) {
    this._contactGroups.internalValue = value;
  }
  public resetContactGroups() {
    this._contactGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups.internalValue;
  }
}
export interface DnsTestAlertSettings {
  /**
  * Specifies the type of alert setting: 'override','inherit & add'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#alert_setting_type DnsTest#alert_setting_type}
  */
  readonly alertSettingType?: string;
  /**
  * alert_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#alert_rule DnsTest#alert_rule}
  */
  readonly alertRule?: DnsTestAlertSettingsAlertRule[] | cdktf.IResolvable;
  /**
  * notification_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#notification_group DnsTest#notification_group}
  */
  readonly notificationGroup: DnsTestAlertSettingsNotificationGroup;
}

export function dnsTestAlertSettingsToTerraform(struct?: DnsTestAlertSettingsOutputReference | DnsTestAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_setting_type: cdktf.stringToTerraform(struct!.alertSettingType),
    alert_rule: cdktf.listMapper(dnsTestAlertSettingsAlertRuleToTerraform, true)(struct!.alertRule),
    notification_group: dnsTestAlertSettingsNotificationGroupToTerraform(struct!.notificationGroup),
  }
}


export function dnsTestAlertSettingsToHclTerraform(struct?: DnsTestAlertSettingsOutputReference | DnsTestAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_setting_type: {
      value: cdktf.stringToHclTerraform(struct!.alertSettingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_rule: {
      value: cdktf.listMapperHcl(dnsTestAlertSettingsAlertRuleToHclTerraform, true)(struct!.alertRule),
      isBlock: true,
      type: "set",
      storageClassType: "DnsTestAlertSettingsAlertRuleList",
    },
    notification_group: {
      value: dnsTestAlertSettingsNotificationGroupToHclTerraform(struct!.notificationGroup),
      isBlock: true,
      type: "set",
      storageClassType: "DnsTestAlertSettingsNotificationGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsTestAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsTestAlertSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertSettingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSettingType = this._alertSettingType;
    }
    if (this._alertRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRule = this._alertRule?.internalValue;
    }
    if (this._notificationGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationGroup = this._notificationGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsTestAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertSettingType = undefined;
      this._alertRule.internalValue = undefined;
      this._notificationGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertSettingType = value.alertSettingType;
      this._alertRule.internalValue = value.alertRule;
      this._notificationGroup.internalValue = value.notificationGroup;
    }
  }

  // alert_setting_type - computed: false, optional: true, required: false
  private _alertSettingType?: string; 
  public get alertSettingType() {
    return this.getStringAttribute('alert_setting_type');
  }
  public set alertSettingType(value: string) {
    this._alertSettingType = value;
  }
  public resetAlertSettingType() {
    this._alertSettingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSettingTypeInput() {
    return this._alertSettingType;
  }

  // alert_rule - computed: false, optional: true, required: false
  private _alertRule = new DnsTestAlertSettingsAlertRuleList(this, "alert_rule", true);
  public get alertRule() {
    return this._alertRule;
  }
  public putAlertRule(value: DnsTestAlertSettingsAlertRule[] | cdktf.IResolvable) {
    this._alertRule.internalValue = value;
  }
  public resetAlertRule() {
    this._alertRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleInput() {
    return this._alertRule.internalValue;
  }

  // notification_group - computed: false, optional: false, required: true
  private _notificationGroup = new DnsTestAlertSettingsNotificationGroupOutputReference(this, "notification_group");
  public get notificationGroup() {
    return this._notificationGroup;
  }
  public putNotificationGroup(value: DnsTestAlertSettingsNotificationGroup) {
    this._notificationGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationGroupInput() {
    return this._notificationGroup.internalValue;
  }
}
export interface DnsTestLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#key DnsTest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#values DnsTest#values}
  */
  readonly values: string[];
}

export function dnsTestLabelToTerraform(struct?: DnsTestLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dnsTestLabelToHclTerraform(struct?: DnsTestLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsTestLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsTestLabel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsTestLabel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DnsTestLabelList extends cdktf.ComplexList {
  public internalValue? : DnsTestLabel[] | cdktf.IResolvable

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
  public get(index: number): DnsTestLabelOutputReference {
    return new DnsTestLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsTestScheduleSettings {
  /**
  * Sets the scheduling frequency: '1 minute', '5 minutes', '10 minutes', '15 minutes', '20 minutes', '30 minutes', '60 minutes', '2 hours', '3 hours', '4 hours', '6 hours', '8 hours', '12 hours', '24 hours', '4 minutes', '2 minutes'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#frequency DnsTest#frequency}
  */
  readonly frequency: string;
  /**
  * Optional. The maintenance schedule id to utilize for the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#maintenance_schedule_id DnsTest#maintenance_schedule_id}
  */
  readonly maintenanceScheduleId?: number;
  /**
  * Optional. Number of subset nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#no_of_subset_nodes DnsTest#no_of_subset_nodes}
  */
  readonly noOfSubsetNodes?: number;
  /**
  * Node distribution type: 'random' or 'concurrent'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#node_distribution DnsTest#node_distribution}
  */
  readonly nodeDistribution: string;
  /**
  * Optional if node_ids is used. Node group ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#node_group_ids DnsTest#node_group_ids}
  */
  readonly nodeGroupIds?: number[];
  /**
  * Optional. if node_group_ids is used. Node ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#node_ids DnsTest#node_ids}
  */
  readonly nodeIds?: number[];
  /**
  * Optional. The run schedule id to utilize for the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#run_schedule_id DnsTest#run_schedule_id}
  */
  readonly runScheduleId?: number;
}

export function dnsTestScheduleSettingsToTerraform(struct?: DnsTestScheduleSettingsOutputReference | DnsTestScheduleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    frequency: cdktf.stringToTerraform(struct!.frequency),
    maintenance_schedule_id: cdktf.numberToTerraform(struct!.maintenanceScheduleId),
    no_of_subset_nodes: cdktf.numberToTerraform(struct!.noOfSubsetNodes),
    node_distribution: cdktf.stringToTerraform(struct!.nodeDistribution),
    node_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.nodeGroupIds),
    node_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.nodeIds),
    run_schedule_id: cdktf.numberToTerraform(struct!.runScheduleId),
  }
}


export function dnsTestScheduleSettingsToHclTerraform(struct?: DnsTestScheduleSettingsOutputReference | DnsTestScheduleSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_schedule_id: {
      value: cdktf.numberToHclTerraform(struct!.maintenanceScheduleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_of_subset_nodes: {
      value: cdktf.numberToHclTerraform(struct!.noOfSubsetNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_distribution: {
      value: cdktf.stringToHclTerraform(struct!.nodeDistribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.nodeGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    node_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.nodeIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    run_schedule_id: {
      value: cdktf.numberToHclTerraform(struct!.runScheduleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsTestScheduleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DnsTestScheduleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._maintenanceScheduleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceScheduleId = this._maintenanceScheduleId;
    }
    if (this._noOfSubsetNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.noOfSubsetNodes = this._noOfSubsetNodes;
    }
    if (this._nodeDistribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDistribution = this._nodeDistribution;
    }
    if (this._nodeGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupIds = this._nodeGroupIds;
    }
    if (this._nodeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeIds = this._nodeIds;
    }
    if (this._runScheduleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.runScheduleId = this._runScheduleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsTestScheduleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._frequency = undefined;
      this._maintenanceScheduleId = undefined;
      this._noOfSubsetNodes = undefined;
      this._nodeDistribution = undefined;
      this._nodeGroupIds = undefined;
      this._nodeIds = undefined;
      this._runScheduleId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._frequency = value.frequency;
      this._maintenanceScheduleId = value.maintenanceScheduleId;
      this._noOfSubsetNodes = value.noOfSubsetNodes;
      this._nodeDistribution = value.nodeDistribution;
      this._nodeGroupIds = value.nodeGroupIds;
      this._nodeIds = value.nodeIds;
      this._runScheduleId = value.runScheduleId;
    }
  }

  // frequency - computed: false, optional: false, required: true
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // maintenance_schedule_id - computed: false, optional: true, required: false
  private _maintenanceScheduleId?: number; 
  public get maintenanceScheduleId() {
    return this.getNumberAttribute('maintenance_schedule_id');
  }
  public set maintenanceScheduleId(value: number) {
    this._maintenanceScheduleId = value;
  }
  public resetMaintenanceScheduleId() {
    this._maintenanceScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceScheduleIdInput() {
    return this._maintenanceScheduleId;
  }

  // no_of_subset_nodes - computed: false, optional: true, required: false
  private _noOfSubsetNodes?: number; 
  public get noOfSubsetNodes() {
    return this.getNumberAttribute('no_of_subset_nodes');
  }
  public set noOfSubsetNodes(value: number) {
    this._noOfSubsetNodes = value;
  }
  public resetNoOfSubsetNodes() {
    this._noOfSubsetNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noOfSubsetNodesInput() {
    return this._noOfSubsetNodes;
  }

  // node_distribution - computed: false, optional: false, required: true
  private _nodeDistribution?: string; 
  public get nodeDistribution() {
    return this.getStringAttribute('node_distribution');
  }
  public set nodeDistribution(value: string) {
    this._nodeDistribution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDistributionInput() {
    return this._nodeDistribution;
  }

  // node_group_ids - computed: false, optional: true, required: false
  private _nodeGroupIds?: number[]; 
  public get nodeGroupIds() {
    return this.getNumberListAttribute('node_group_ids');
  }
  public set nodeGroupIds(value: number[]) {
    this._nodeGroupIds = value;
  }
  public resetNodeGroupIds() {
    this._nodeGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupIdsInput() {
    return this._nodeGroupIds;
  }

  // node_ids - computed: false, optional: true, required: false
  private _nodeIds?: number[]; 
  public get nodeIds() {
    return this.getNumberListAttribute('node_ids');
  }
  public set nodeIds(value: number[]) {
    this._nodeIds = value;
  }
  public resetNodeIds() {
    this._nodeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdsInput() {
    return this._nodeIds;
  }

  // run_schedule_id - computed: false, optional: true, required: false
  private _runScheduleId?: number; 
  public get runScheduleId() {
    return this.getNumberAttribute('run_schedule_id');
  }
  public set runScheduleId(value: number) {
    this._runScheduleId = value;
  }
  public resetRunScheduleId() {
    this._runScheduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runScheduleIdInput() {
    return this._runScheduleId;
  }
}
export interface DnsTestThresholds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#availability_critical DnsTest#availability_critical}
  */
  readonly availabilityCritical: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#availability_warning DnsTest#availability_warning}
  */
  readonly availabilityWarning: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#test_time_critical DnsTest#test_time_critical}
  */
  readonly testTimeCritical: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#test_time_warning DnsTest#test_time_warning}
  */
  readonly testTimeWarning: number;
}

export function dnsTestThresholdsToTerraform(struct?: DnsTestThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    availability_critical: cdktf.numberToTerraform(struct!.availabilityCritical),
    availability_warning: cdktf.numberToTerraform(struct!.availabilityWarning),
    test_time_critical: cdktf.numberToTerraform(struct!.testTimeCritical),
    test_time_warning: cdktf.numberToTerraform(struct!.testTimeWarning),
  }
}


export function dnsTestThresholdsToHclTerraform(struct?: DnsTestThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    availability_critical: {
      value: cdktf.numberToHclTerraform(struct!.availabilityCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    availability_warning: {
      value: cdktf.numberToHclTerraform(struct!.availabilityWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_time_critical: {
      value: cdktf.numberToHclTerraform(struct!.testTimeCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    test_time_warning: {
      value: cdktf.numberToHclTerraform(struct!.testTimeWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsTestThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsTestThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._availabilityCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityCritical = this._availabilityCritical;
    }
    if (this._availabilityWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityWarning = this._availabilityWarning;
    }
    if (this._testTimeCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.testTimeCritical = this._testTimeCritical;
    }
    if (this._testTimeWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.testTimeWarning = this._testTimeWarning;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsTestThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._availabilityCritical = undefined;
      this._availabilityWarning = undefined;
      this._testTimeCritical = undefined;
      this._testTimeWarning = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._availabilityCritical = value.availabilityCritical;
      this._availabilityWarning = value.availabilityWarning;
      this._testTimeCritical = value.testTimeCritical;
      this._testTimeWarning = value.testTimeWarning;
    }
  }

  // availability_critical - computed: false, optional: false, required: true
  private _availabilityCritical?: number; 
  public get availabilityCritical() {
    return this.getNumberAttribute('availability_critical');
  }
  public set availabilityCritical(value: number) {
    this._availabilityCritical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityCriticalInput() {
    return this._availabilityCritical;
  }

  // availability_warning - computed: false, optional: false, required: true
  private _availabilityWarning?: number; 
  public get availabilityWarning() {
    return this.getNumberAttribute('availability_warning');
  }
  public set availabilityWarning(value: number) {
    this._availabilityWarning = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityWarningInput() {
    return this._availabilityWarning;
  }

  // test_time_critical - computed: false, optional: false, required: true
  private _testTimeCritical?: number; 
  public get testTimeCritical() {
    return this.getNumberAttribute('test_time_critical');
  }
  public set testTimeCritical(value: number) {
    this._testTimeCritical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testTimeCriticalInput() {
    return this._testTimeCritical;
  }

  // test_time_warning - computed: false, optional: false, required: true
  private _testTimeWarning?: number; 
  public get testTimeWarning() {
    return this.getNumberAttribute('test_time_warning');
  }
  public set testTimeWarning(value: number) {
    this._testTimeWarning = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testTimeWarningInput() {
    return this._testTimeWarning;
  }
}

export class DnsTestThresholdsList extends cdktf.ComplexList {
  public internalValue? : DnsTestThresholds[] | cdktf.IResolvable

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
  public get(index: number): DnsTestThresholdsOutputReference {
    return new DnsTestThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test dns_test}
*/
export class DnsTest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dns_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsTest to import
  * @param importFromId The id of the existing DnsTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dns_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/dns_test dns_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsTestConfig
  */
  public constructor(scope: Construct, id: string, config: DnsTestConfig) {
    super(scope, id, {
      terraformResourceType: 'dns_test',
      terraformGeneratorMetadata: {
        providerName: 'catchpoint',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertsPaused = config.alertsPaused;
    this._divisionId = config.divisionId;
    this._dnsServer = config.dnsServer;
    this._enableTestDataWebhook = config.enableTestDataWebhook;
    this._endTime = config.endTime;
    this._folderId = config.folderId;
    this._id = config.id;
    this._monitor = config.monitor;
    this._productId = config.productId;
    this._queryType = config.queryType;
    this._startTime = config.startTime;
    this._status = config.status;
    this._testDescription = config.testDescription;
    this._testDomain = config.testDomain;
    this._testName = config.testName;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._alertSettings.internalValue = config.alertSettings;
    this._label.internalValue = config.label;
    this._scheduleSettings.internalValue = config.scheduleSettings;
    this._thresholds.internalValue = config.thresholds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_paused - computed: false, optional: true, required: false
  private _alertsPaused?: boolean | cdktf.IResolvable; 
  public get alertsPaused() {
    return this.getBooleanAttribute('alerts_paused');
  }
  public set alertsPaused(value: boolean | cdktf.IResolvable) {
    this._alertsPaused = value;
  }
  public resetAlertsPaused() {
    this._alertsPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsPausedInput() {
    return this._alertsPaused;
  }

  // division_id - computed: false, optional: false, required: true
  private _divisionId?: number; 
  public get divisionId() {
    return this.getNumberAttribute('division_id');
  }
  public set divisionId(value: number) {
    this._divisionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
  }

  // dns_server - computed: true, optional: true, required: false
  private _dnsServer?: string; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer;
  }

  // enable_test_data_webhook - computed: false, optional: true, required: false
  private _enableTestDataWebhook?: boolean | cdktf.IResolvable; 
  public get enableTestDataWebhook() {
    return this.getBooleanAttribute('enable_test_data_webhook');
  }
  public set enableTestDataWebhook(value: boolean | cdktf.IResolvable) {
    this._enableTestDataWebhook = value;
  }
  public resetEnableTestDataWebhook() {
    this._enableTestDataWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTestDataWebhookInput() {
    return this._enableTestDataWebhook;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: number; 
  public get folderId() {
    return this.getNumberAttribute('folder_id');
  }
  public set folderId(value: number) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: number; 
  public get productId() {
    return this.getNumberAttribute('product_id');
  }
  public set productId(value: number) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // test_description - computed: false, optional: true, required: false
  private _testDescription?: string; 
  public get testDescription() {
    return this.getStringAttribute('test_description');
  }
  public set testDescription(value: string) {
    this._testDescription = value;
  }
  public resetTestDescription() {
    this._testDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testDescriptionInput() {
    return this._testDescription;
  }

  // test_domain - computed: false, optional: false, required: true
  private _testDomain?: string; 
  public get testDomain() {
    return this.getStringAttribute('test_domain');
  }
  public set testDomain(value: string) {
    this._testDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testDomainInput() {
    return this._testDomain;
  }

  // test_name - computed: false, optional: false, required: true
  private _testName?: string; 
  public get testName() {
    return this.getStringAttribute('test_name');
  }
  public set testName(value: string) {
    this._testName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testNameInput() {
    return this._testName;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new DnsTestAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: DnsTestAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // alert_settings - computed: false, optional: true, required: false
  private _alertSettings = new DnsTestAlertSettingsOutputReference(this, "alert_settings");
  public get alertSettings() {
    return this._alertSettings;
  }
  public putAlertSettings(value: DnsTestAlertSettings) {
    this._alertSettings.internalValue = value;
  }
  public resetAlertSettings() {
    this._alertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSettingsInput() {
    return this._alertSettings.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new DnsTestLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: DnsTestLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // schedule_settings - computed: false, optional: true, required: false
  private _scheduleSettings = new DnsTestScheduleSettingsOutputReference(this, "schedule_settings");
  public get scheduleSettings() {
    return this._scheduleSettings;
  }
  public putScheduleSettings(value: DnsTestScheduleSettings) {
    this._scheduleSettings.internalValue = value;
  }
  public resetScheduleSettings() {
    this._scheduleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleSettingsInput() {
    return this._scheduleSettings.internalValue;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new DnsTestThresholdsList(this, "thresholds", true);
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: DnsTestThresholds[] | cdktf.IResolvable) {
    this._thresholds.internalValue = value;
  }
  public resetThresholds() {
    this._thresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts_paused: cdktf.booleanToTerraform(this._alertsPaused),
      division_id: cdktf.numberToTerraform(this._divisionId),
      dns_server: cdktf.stringToTerraform(this._dnsServer),
      enable_test_data_webhook: cdktf.booleanToTerraform(this._enableTestDataWebhook),
      end_time: cdktf.stringToTerraform(this._endTime),
      folder_id: cdktf.numberToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      monitor: cdktf.stringToTerraform(this._monitor),
      product_id: cdktf.numberToTerraform(this._productId),
      query_type: cdktf.stringToTerraform(this._queryType),
      start_time: cdktf.stringToTerraform(this._startTime),
      status: cdktf.stringToTerraform(this._status),
      test_description: cdktf.stringToTerraform(this._testDescription),
      test_domain: cdktf.stringToTerraform(this._testDomain),
      test_name: cdktf.stringToTerraform(this._testName),
      advanced_settings: dnsTestAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      alert_settings: dnsTestAlertSettingsToTerraform(this._alertSettings.internalValue),
      label: cdktf.listMapper(dnsTestLabelToTerraform, true)(this._label.internalValue),
      schedule_settings: dnsTestScheduleSettingsToTerraform(this._scheduleSettings.internalValue),
      thresholds: cdktf.listMapper(dnsTestThresholdsToTerraform, true)(this._thresholds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts_paused: {
        value: cdktf.booleanToHclTerraform(this._alertsPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      division_id: {
        value: cdktf.numberToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_server: {
        value: cdktf.stringToHclTerraform(this._dnsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_test_data_webhook: {
        value: cdktf.booleanToHclTerraform(this._enableTestDataWebhook),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.numberToHclTerraform(this._folderId),
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
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.numberToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_type: {
        value: cdktf.stringToHclTerraform(this._queryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_description: {
        value: cdktf.stringToHclTerraform(this._testDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_domain: {
        value: cdktf.stringToHclTerraform(this._testDomain),
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
      advanced_settings: {
        value: dnsTestAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnsTestAdvancedSettingsList",
      },
      alert_settings: {
        value: dnsTestAlertSettingsToHclTerraform(this._alertSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnsTestAlertSettingsList",
      },
      label: {
        value: cdktf.listMapperHcl(dnsTestLabelToHclTerraform, true)(this._label.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnsTestLabelList",
      },
      schedule_settings: {
        value: dnsTestScheduleSettingsToHclTerraform(this._scheduleSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnsTestScheduleSettingsList",
      },
      thresholds: {
        value: cdktf.listMapperHcl(dnsTestThresholdsToHclTerraform, true)(this._thresholds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DnsTestThresholdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
