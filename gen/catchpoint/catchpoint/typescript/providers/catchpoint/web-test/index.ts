// https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Switch for pausing Test alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#alerts_paused WebTest#alerts_paused}
  */
  readonly alertsPaused?: boolean | cdktf.IResolvable;
  /**
  * Optional. Chrome version to use. Supported: 'preview', 'stable', '120',108', '89', '87', '85','79', '75', '71', '66', '63', '59', '53'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#chrome_version WebTest#chrome_version}
  */
  readonly chromeVersion?: string;
  /**
  * The Division where the Test will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#division_id WebTest#division_id}
  */
  readonly divisionId: number;
  /**
  * Optional. Switch for enabling test data webhook feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#enable_test_data_webhook WebTest#enable_test_data_webhook}
  */
  readonly enableTestDataWebhook?: boolean | cdktf.IResolvable;
  /**
  * End time for the Test in ISO format like 2024-12-30T04:59:00Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#end_time WebTest#end_time}
  */
  readonly endTime: string;
  /**
  * Optional. The Folder under which the Test will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#folder_id WebTest#folder_id}
  */
  readonly folderId?: number;
  /**
  * Optional. Host/IP to use for network troubleshooting and monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#gateway_address_or_host WebTest#gateway_address_or_host}
  */
  readonly gatewayAddressOrHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#id WebTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The monitor to use for the Web Test. Supported: 'object', 'chrome', 'emulated', 'playback', 'mobile playback', 'mobile'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#monitor WebTest#monitor}
  */
  readonly monitor: string;
  /**
  * The parent Product under which the Test will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#product_id WebTest#product_id}
  */
  readonly productId: number;
  /**
  * Optional. The device to simulate for mobile, mobile playback(playback source) monitors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#simulate WebTest#simulate}
  */
  readonly simulate?: string;
  /**
  * Optional. Start time for the Test in ISO format like 2024-12-30T04:59:00Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#start_time WebTest#start_time}
  */
  readonly startTime?: string;
  /**
  * Optional. Test status: active or inactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#status WebTest#status}
  */
  readonly status?: string;
  /**
  * Optional. The Test description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#test_description WebTest#test_description}
  */
  readonly testDescription?: string;
  /**
  * The name of the Test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#test_name WebTest#test_name}
  */
  readonly testName: string;
  /**
  * The URL to be tested. Example: https://www.catchpoint.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#test_url WebTest#test_url}
  */
  readonly testUrl: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#advanced_settings WebTest#advanced_settings}
  */
  readonly advancedSettings?: WebTestAdvancedSettings;
  /**
  * alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#alert_settings WebTest#alert_settings}
  */
  readonly alertSettings?: WebTestAlertSettings;
  /**
  * insights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#insights WebTest#insights}
  */
  readonly insights?: WebTestInsights;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#label WebTest#label}
  */
  readonly label?: WebTestLabel[] | cdktf.IResolvable;
  /**
  * request_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#request_settings WebTest#request_settings}
  */
  readonly requestSettings?: WebTestRequestSettings;
  /**
  * schedule_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#schedule_settings WebTest#schedule_settings}
  */
  readonly scheduleSettings?: WebTestScheduleSettings;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#thresholds WebTest#thresholds}
  */
  readonly thresholds?: WebTestThresholds[] | cdktf.IResolvable;
}
export interface WebTestAdvancedSettings {
  /**
  * Optional. Set the additional monitor to run along with the test monitor: 'ping icmp', 'ping tcp', 'ping udp','traceroute icmp','traceroute udp','traceroute tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#additional_monitor WebTest#additional_monitor}
  */
  readonly additionalMonitor?: string;
  /**
  * Optional. True enables test download limit override setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#allow_test_download_limit_override WebTest#allow_test_download_limit_override}
  */
  readonly allowTestDownloadLimitOverride?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set the bandwidth throttling for chrome: 'gprs','regular 2g','good 2g','regular 3g','good 3g','regular 4g','dsl','wifi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#bandwidth_throttling WebTest#bandwidth_throttling}
  */
  readonly bandwidthThrottling?: string;
  /**
  * Optional. True enables capture filmstrip setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#capture_filmstrip WebTest#capture_filmstrip}
  */
  readonly captureFilmstrip?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables capture http headers setting for all runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#capture_http_headers WebTest#capture_http_headers}
  */
  readonly captureHttpHeaders?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables capture response content setting for all runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#capture_response_content WebTest#capture_response_content}
  */
  readonly captureResponseContent?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables capture screenshot setting for all runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#capture_screenshot WebTest#capture_screenshot}
  */
  readonly captureScreenshot?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables debug primary host on failure setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#debug_primary_host_on_failure WebTest#debug_primary_host_on_failure}
  */
  readonly debugPrimaryHostOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables debug referenced hosts on failure setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#debug_referenced_hosts_on_failure WebTest#debug_referenced_hosts_on_failure}
  */
  readonly debugReferencedHostsOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables disable cross origin iframe access setting for chrome monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#disable_cross_origin_iframe_access WebTest#disable_cross_origin_iframe_access}
  */
  readonly disableCrossOriginIframeAccess?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables enable http/2 setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#enable_http2 WebTest#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables Path MTU Discovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#enable_path_mtu_discovery WebTest#enable_path_mtu_discovery}
  */
  readonly enablePathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables self versus third party zones setting and matches self zone by test URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#enable_self_versus_third_party_zones WebTest#enable_self_versus_third_party_zones}
  */
  readonly enableSelfVersusThirdPartyZones?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set the time value in seconds post which the test will be marked as failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#enforce_test_failure_if_runs_longer_than WebTest#enforce_test_failure_if_runs_longer_than}
  */
  readonly enforceTestFailureIfRunsLongerThan?: number;
  /**
  * Optional. True enables 40x or 50x error mark successful setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#f40x_or_50x_http_mark_successful WebTest#f40x_or_50x_http_mark_successful}
  */
  readonly f40XOr50XHttpMarkSuccessful?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables host data collection setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#host_data_collection_enabled WebTest#host_data_collection_enabled}
  */
  readonly hostDataCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables ignore SSL failures setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#ignore_ssl_failures WebTest#ignore_ssl_failures}
  */
  readonly ignoreSslFailures?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables stop test on document complete setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#stop_test_on_document_complete WebTest#stop_test_on_document_complete}
  */
  readonly stopTestOnDocumentComplete?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables stop test on DOM content load setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#stop_test_on_dom_content_load WebTest#stop_test_on_dom_content_load}
  */
  readonly stopTestOnDomContentLoad?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables 30x redirects do not follow setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#t30x_redirects_do_not_follow WebTest#t30x_redirects_do_not_follow}
  */
  readonly t30XRedirectsDoNotFollow?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables verify on test failure setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#verify_test_on_failure WebTest#verify_test_on_failure}
  */
  readonly verifyTestOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set the viewport height. Use with viewport_width attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#viewport_height WebTest#viewport_height}
  */
  readonly viewportHeight?: number;
  /**
  * Optional. Set the viewport width. Use with viewport_height attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#viewport_width WebTest#viewport_width}
  */
  readonly viewportWidth?: number;
  /**
  * Optional. Set the time value in ms to stop the test after no network activity on document complete. Use with stop_test_on_document_complete flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#wait_for_no_activity WebTest#wait_for_no_activity}
  */
  readonly waitForNoActivity?: number;
  /**
  * Optional. True enables zone data collection setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#zone_data_collection_enabled WebTest#zone_data_collection_enabled}
  */
  readonly zoneDataCollectionEnabled?: boolean | cdktf.IResolvable;
}

export function webTestAdvancedSettingsToTerraform(struct?: WebTestAdvancedSettingsOutputReference | WebTestAdvancedSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_monitor: cdktf.stringToTerraform(struct!.additionalMonitor),
    allow_test_download_limit_override: cdktf.booleanToTerraform(struct!.allowTestDownloadLimitOverride),
    bandwidth_throttling: cdktf.stringToTerraform(struct!.bandwidthThrottling),
    capture_filmstrip: cdktf.booleanToTerraform(struct!.captureFilmstrip),
    capture_http_headers: cdktf.booleanToTerraform(struct!.captureHttpHeaders),
    capture_response_content: cdktf.booleanToTerraform(struct!.captureResponseContent),
    capture_screenshot: cdktf.booleanToTerraform(struct!.captureScreenshot),
    debug_primary_host_on_failure: cdktf.booleanToTerraform(struct!.debugPrimaryHostOnFailure),
    debug_referenced_hosts_on_failure: cdktf.booleanToTerraform(struct!.debugReferencedHostsOnFailure),
    disable_cross_origin_iframe_access: cdktf.booleanToTerraform(struct!.disableCrossOriginIframeAccess),
    enable_http2: cdktf.booleanToTerraform(struct!.enableHttp2),
    enable_path_mtu_discovery: cdktf.booleanToTerraform(struct!.enablePathMtuDiscovery),
    enable_self_versus_third_party_zones: cdktf.booleanToTerraform(struct!.enableSelfVersusThirdPartyZones),
    enforce_test_failure_if_runs_longer_than: cdktf.numberToTerraform(struct!.enforceTestFailureIfRunsLongerThan),
    f40x_or_50x_http_mark_successful: cdktf.booleanToTerraform(struct!.f40XOr50XHttpMarkSuccessful),
    host_data_collection_enabled: cdktf.booleanToTerraform(struct!.hostDataCollectionEnabled),
    ignore_ssl_failures: cdktf.booleanToTerraform(struct!.ignoreSslFailures),
    stop_test_on_document_complete: cdktf.booleanToTerraform(struct!.stopTestOnDocumentComplete),
    stop_test_on_dom_content_load: cdktf.booleanToTerraform(struct!.stopTestOnDomContentLoad),
    t30x_redirects_do_not_follow: cdktf.booleanToTerraform(struct!.t30XRedirectsDoNotFollow),
    verify_test_on_failure: cdktf.booleanToTerraform(struct!.verifyTestOnFailure),
    viewport_height: cdktf.numberToTerraform(struct!.viewportHeight),
    viewport_width: cdktf.numberToTerraform(struct!.viewportWidth),
    wait_for_no_activity: cdktf.numberToTerraform(struct!.waitForNoActivity),
    zone_data_collection_enabled: cdktf.booleanToTerraform(struct!.zoneDataCollectionEnabled),
  }
}


export function webTestAdvancedSettingsToHclTerraform(struct?: WebTestAdvancedSettingsOutputReference | WebTestAdvancedSettings): any {
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
    capture_filmstrip: {
      value: cdktf.booleanToHclTerraform(struct!.captureFilmstrip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capture_http_headers: {
      value: cdktf.booleanToHclTerraform(struct!.captureHttpHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capture_response_content: {
      value: cdktf.booleanToHclTerraform(struct!.captureResponseContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    capture_screenshot: {
      value: cdktf.booleanToHclTerraform(struct!.captureScreenshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    debug_primary_host_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.debugPrimaryHostOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    debug_referenced_hosts_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.debugReferencedHostsOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_cross_origin_iframe_access: {
      value: cdktf.booleanToHclTerraform(struct!.disableCrossOriginIframeAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_http2: {
      value: cdktf.booleanToHclTerraform(struct!.enableHttp2),
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
    enable_self_versus_third_party_zones: {
      value: cdktf.booleanToHclTerraform(struct!.enableSelfVersusThirdPartyZones),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_test_failure_if_runs_longer_than: {
      value: cdktf.numberToHclTerraform(struct!.enforceTestFailureIfRunsLongerThan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    f40x_or_50x_http_mark_successful: {
      value: cdktf.booleanToHclTerraform(struct!.f40XOr50XHttpMarkSuccessful),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host_data_collection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.hostDataCollectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_ssl_failures: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSslFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stop_test_on_document_complete: {
      value: cdktf.booleanToHclTerraform(struct!.stopTestOnDocumentComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stop_test_on_dom_content_load: {
      value: cdktf.booleanToHclTerraform(struct!.stopTestOnDomContentLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    t30x_redirects_do_not_follow: {
      value: cdktf.booleanToHclTerraform(struct!.t30XRedirectsDoNotFollow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_test_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.verifyTestOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    viewport_height: {
      value: cdktf.numberToHclTerraform(struct!.viewportHeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    viewport_width: {
      value: cdktf.numberToHclTerraform(struct!.viewportWidth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for_no_activity: {
      value: cdktf.numberToHclTerraform(struct!.waitForNoActivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_data_collection_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.zoneDataCollectionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestAdvancedSettings | undefined {
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
    if (this._captureFilmstrip !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureFilmstrip = this._captureFilmstrip;
    }
    if (this._captureHttpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureHttpHeaders = this._captureHttpHeaders;
    }
    if (this._captureResponseContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureResponseContent = this._captureResponseContent;
    }
    if (this._captureScreenshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureScreenshot = this._captureScreenshot;
    }
    if (this._debugPrimaryHostOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPrimaryHostOnFailure = this._debugPrimaryHostOnFailure;
    }
    if (this._debugReferencedHostsOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugReferencedHostsOnFailure = this._debugReferencedHostsOnFailure;
    }
    if (this._disableCrossOriginIframeAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCrossOriginIframeAccess = this._disableCrossOriginIframeAccess;
    }
    if (this._enableHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHttp2 = this._enableHttp2;
    }
    if (this._enablePathMtuDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePathMtuDiscovery = this._enablePathMtuDiscovery;
    }
    if (this._enableSelfVersusThirdPartyZones !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSelfVersusThirdPartyZones = this._enableSelfVersusThirdPartyZones;
    }
    if (this._enforceTestFailureIfRunsLongerThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTestFailureIfRunsLongerThan = this._enforceTestFailureIfRunsLongerThan;
    }
    if (this._f40XOr50XHttpMarkSuccessful !== undefined) {
      hasAnyValues = true;
      internalValueResult.f40XOr50XHttpMarkSuccessful = this._f40XOr50XHttpMarkSuccessful;
    }
    if (this._hostDataCollectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostDataCollectionEnabled = this._hostDataCollectionEnabled;
    }
    if (this._ignoreSslFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSslFailures = this._ignoreSslFailures;
    }
    if (this._stopTestOnDocumentComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTestOnDocumentComplete = this._stopTestOnDocumentComplete;
    }
    if (this._stopTestOnDomContentLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTestOnDomContentLoad = this._stopTestOnDomContentLoad;
    }
    if (this._t30XRedirectsDoNotFollow !== undefined) {
      hasAnyValues = true;
      internalValueResult.t30XRedirectsDoNotFollow = this._t30XRedirectsDoNotFollow;
    }
    if (this._verifyTestOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyTestOnFailure = this._verifyTestOnFailure;
    }
    if (this._viewportHeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewportHeight = this._viewportHeight;
    }
    if (this._viewportWidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.viewportWidth = this._viewportWidth;
    }
    if (this._waitForNoActivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForNoActivity = this._waitForNoActivity;
    }
    if (this._zoneDataCollectionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneDataCollectionEnabled = this._zoneDataCollectionEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalMonitor = undefined;
      this._allowTestDownloadLimitOverride = undefined;
      this._bandwidthThrottling = undefined;
      this._captureFilmstrip = undefined;
      this._captureHttpHeaders = undefined;
      this._captureResponseContent = undefined;
      this._captureScreenshot = undefined;
      this._debugPrimaryHostOnFailure = undefined;
      this._debugReferencedHostsOnFailure = undefined;
      this._disableCrossOriginIframeAccess = undefined;
      this._enableHttp2 = undefined;
      this._enablePathMtuDiscovery = undefined;
      this._enableSelfVersusThirdPartyZones = undefined;
      this._enforceTestFailureIfRunsLongerThan = undefined;
      this._f40XOr50XHttpMarkSuccessful = undefined;
      this._hostDataCollectionEnabled = undefined;
      this._ignoreSslFailures = undefined;
      this._stopTestOnDocumentComplete = undefined;
      this._stopTestOnDomContentLoad = undefined;
      this._t30XRedirectsDoNotFollow = undefined;
      this._verifyTestOnFailure = undefined;
      this._viewportHeight = undefined;
      this._viewportWidth = undefined;
      this._waitForNoActivity = undefined;
      this._zoneDataCollectionEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalMonitor = value.additionalMonitor;
      this._allowTestDownloadLimitOverride = value.allowTestDownloadLimitOverride;
      this._bandwidthThrottling = value.bandwidthThrottling;
      this._captureFilmstrip = value.captureFilmstrip;
      this._captureHttpHeaders = value.captureHttpHeaders;
      this._captureResponseContent = value.captureResponseContent;
      this._captureScreenshot = value.captureScreenshot;
      this._debugPrimaryHostOnFailure = value.debugPrimaryHostOnFailure;
      this._debugReferencedHostsOnFailure = value.debugReferencedHostsOnFailure;
      this._disableCrossOriginIframeAccess = value.disableCrossOriginIframeAccess;
      this._enableHttp2 = value.enableHttp2;
      this._enablePathMtuDiscovery = value.enablePathMtuDiscovery;
      this._enableSelfVersusThirdPartyZones = value.enableSelfVersusThirdPartyZones;
      this._enforceTestFailureIfRunsLongerThan = value.enforceTestFailureIfRunsLongerThan;
      this._f40XOr50XHttpMarkSuccessful = value.f40XOr50XHttpMarkSuccessful;
      this._hostDataCollectionEnabled = value.hostDataCollectionEnabled;
      this._ignoreSslFailures = value.ignoreSslFailures;
      this._stopTestOnDocumentComplete = value.stopTestOnDocumentComplete;
      this._stopTestOnDomContentLoad = value.stopTestOnDomContentLoad;
      this._t30XRedirectsDoNotFollow = value.t30XRedirectsDoNotFollow;
      this._verifyTestOnFailure = value.verifyTestOnFailure;
      this._viewportHeight = value.viewportHeight;
      this._viewportWidth = value.viewportWidth;
      this._waitForNoActivity = value.waitForNoActivity;
      this._zoneDataCollectionEnabled = value.zoneDataCollectionEnabled;
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

  // capture_filmstrip - computed: false, optional: true, required: false
  private _captureFilmstrip?: boolean | cdktf.IResolvable; 
  public get captureFilmstrip() {
    return this.getBooleanAttribute('capture_filmstrip');
  }
  public set captureFilmstrip(value: boolean | cdktf.IResolvable) {
    this._captureFilmstrip = value;
  }
  public resetCaptureFilmstrip() {
    this._captureFilmstrip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureFilmstripInput() {
    return this._captureFilmstrip;
  }

  // capture_http_headers - computed: false, optional: true, required: false
  private _captureHttpHeaders?: boolean | cdktf.IResolvable; 
  public get captureHttpHeaders() {
    return this.getBooleanAttribute('capture_http_headers');
  }
  public set captureHttpHeaders(value: boolean | cdktf.IResolvable) {
    this._captureHttpHeaders = value;
  }
  public resetCaptureHttpHeaders() {
    this._captureHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureHttpHeadersInput() {
    return this._captureHttpHeaders;
  }

  // capture_response_content - computed: false, optional: true, required: false
  private _captureResponseContent?: boolean | cdktf.IResolvable; 
  public get captureResponseContent() {
    return this.getBooleanAttribute('capture_response_content');
  }
  public set captureResponseContent(value: boolean | cdktf.IResolvable) {
    this._captureResponseContent = value;
  }
  public resetCaptureResponseContent() {
    this._captureResponseContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureResponseContentInput() {
    return this._captureResponseContent;
  }

  // capture_screenshot - computed: false, optional: true, required: false
  private _captureScreenshot?: boolean | cdktf.IResolvable; 
  public get captureScreenshot() {
    return this.getBooleanAttribute('capture_screenshot');
  }
  public set captureScreenshot(value: boolean | cdktf.IResolvable) {
    this._captureScreenshot = value;
  }
  public resetCaptureScreenshot() {
    this._captureScreenshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureScreenshotInput() {
    return this._captureScreenshot;
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

  // debug_referenced_hosts_on_failure - computed: false, optional: true, required: false
  private _debugReferencedHostsOnFailure?: boolean | cdktf.IResolvable; 
  public get debugReferencedHostsOnFailure() {
    return this.getBooleanAttribute('debug_referenced_hosts_on_failure');
  }
  public set debugReferencedHostsOnFailure(value: boolean | cdktf.IResolvable) {
    this._debugReferencedHostsOnFailure = value;
  }
  public resetDebugReferencedHostsOnFailure() {
    this._debugReferencedHostsOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugReferencedHostsOnFailureInput() {
    return this._debugReferencedHostsOnFailure;
  }

  // disable_cross_origin_iframe_access - computed: false, optional: true, required: false
  private _disableCrossOriginIframeAccess?: boolean | cdktf.IResolvable; 
  public get disableCrossOriginIframeAccess() {
    return this.getBooleanAttribute('disable_cross_origin_iframe_access');
  }
  public set disableCrossOriginIframeAccess(value: boolean | cdktf.IResolvable) {
    this._disableCrossOriginIframeAccess = value;
  }
  public resetDisableCrossOriginIframeAccess() {
    this._disableCrossOriginIframeAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCrossOriginIframeAccessInput() {
    return this._disableCrossOriginIframeAccess;
  }

  // enable_http2 - computed: false, optional: true, required: false
  private _enableHttp2?: boolean | cdktf.IResolvable; 
  public get enableHttp2() {
    return this.getBooleanAttribute('enable_http2');
  }
  public set enableHttp2(value: boolean | cdktf.IResolvable) {
    this._enableHttp2 = value;
  }
  public resetEnableHttp2() {
    this._enableHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHttp2Input() {
    return this._enableHttp2;
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

  // enable_self_versus_third_party_zones - computed: false, optional: true, required: false
  private _enableSelfVersusThirdPartyZones?: boolean | cdktf.IResolvable; 
  public get enableSelfVersusThirdPartyZones() {
    return this.getBooleanAttribute('enable_self_versus_third_party_zones');
  }
  public set enableSelfVersusThirdPartyZones(value: boolean | cdktf.IResolvable) {
    this._enableSelfVersusThirdPartyZones = value;
  }
  public resetEnableSelfVersusThirdPartyZones() {
    this._enableSelfVersusThirdPartyZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSelfVersusThirdPartyZonesInput() {
    return this._enableSelfVersusThirdPartyZones;
  }

  // enforce_test_failure_if_runs_longer_than - computed: false, optional: true, required: false
  private _enforceTestFailureIfRunsLongerThan?: number; 
  public get enforceTestFailureIfRunsLongerThan() {
    return this.getNumberAttribute('enforce_test_failure_if_runs_longer_than');
  }
  public set enforceTestFailureIfRunsLongerThan(value: number) {
    this._enforceTestFailureIfRunsLongerThan = value;
  }
  public resetEnforceTestFailureIfRunsLongerThan() {
    this._enforceTestFailureIfRunsLongerThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTestFailureIfRunsLongerThanInput() {
    return this._enforceTestFailureIfRunsLongerThan;
  }

  // f40x_or_50x_http_mark_successful - computed: false, optional: true, required: false
  private _f40XOr50XHttpMarkSuccessful?: boolean | cdktf.IResolvable; 
  public get f40XOr50XHttpMarkSuccessful() {
    return this.getBooleanAttribute('f40x_or_50x_http_mark_successful');
  }
  public set f40XOr50XHttpMarkSuccessful(value: boolean | cdktf.IResolvable) {
    this._f40XOr50XHttpMarkSuccessful = value;
  }
  public resetF40XOr50XHttpMarkSuccessful() {
    this._f40XOr50XHttpMarkSuccessful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f40XOr50XHttpMarkSuccessfulInput() {
    return this._f40XOr50XHttpMarkSuccessful;
  }

  // host_data_collection_enabled - computed: false, optional: true, required: false
  private _hostDataCollectionEnabled?: boolean | cdktf.IResolvable; 
  public get hostDataCollectionEnabled() {
    return this.getBooleanAttribute('host_data_collection_enabled');
  }
  public set hostDataCollectionEnabled(value: boolean | cdktf.IResolvable) {
    this._hostDataCollectionEnabled = value;
  }
  public resetHostDataCollectionEnabled() {
    this._hostDataCollectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostDataCollectionEnabledInput() {
    return this._hostDataCollectionEnabled;
  }

  // ignore_ssl_failures - computed: false, optional: true, required: false
  private _ignoreSslFailures?: boolean | cdktf.IResolvable; 
  public get ignoreSslFailures() {
    return this.getBooleanAttribute('ignore_ssl_failures');
  }
  public set ignoreSslFailures(value: boolean | cdktf.IResolvable) {
    this._ignoreSslFailures = value;
  }
  public resetIgnoreSslFailures() {
    this._ignoreSslFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSslFailuresInput() {
    return this._ignoreSslFailures;
  }

  // stop_test_on_document_complete - computed: false, optional: true, required: false
  private _stopTestOnDocumentComplete?: boolean | cdktf.IResolvable; 
  public get stopTestOnDocumentComplete() {
    return this.getBooleanAttribute('stop_test_on_document_complete');
  }
  public set stopTestOnDocumentComplete(value: boolean | cdktf.IResolvable) {
    this._stopTestOnDocumentComplete = value;
  }
  public resetStopTestOnDocumentComplete() {
    this._stopTestOnDocumentComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTestOnDocumentCompleteInput() {
    return this._stopTestOnDocumentComplete;
  }

  // stop_test_on_dom_content_load - computed: false, optional: true, required: false
  private _stopTestOnDomContentLoad?: boolean | cdktf.IResolvable; 
  public get stopTestOnDomContentLoad() {
    return this.getBooleanAttribute('stop_test_on_dom_content_load');
  }
  public set stopTestOnDomContentLoad(value: boolean | cdktf.IResolvable) {
    this._stopTestOnDomContentLoad = value;
  }
  public resetStopTestOnDomContentLoad() {
    this._stopTestOnDomContentLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTestOnDomContentLoadInput() {
    return this._stopTestOnDomContentLoad;
  }

  // t30x_redirects_do_not_follow - computed: false, optional: true, required: false
  private _t30XRedirectsDoNotFollow?: boolean | cdktf.IResolvable; 
  public get t30XRedirectsDoNotFollow() {
    return this.getBooleanAttribute('t30x_redirects_do_not_follow');
  }
  public set t30XRedirectsDoNotFollow(value: boolean | cdktf.IResolvable) {
    this._t30XRedirectsDoNotFollow = value;
  }
  public resetT30XRedirectsDoNotFollow() {
    this._t30XRedirectsDoNotFollow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get t30XRedirectsDoNotFollowInput() {
    return this._t30XRedirectsDoNotFollow;
  }

  // verify_test_on_failure - computed: false, optional: true, required: false
  private _verifyTestOnFailure?: boolean | cdktf.IResolvable; 
  public get verifyTestOnFailure() {
    return this.getBooleanAttribute('verify_test_on_failure');
  }
  public set verifyTestOnFailure(value: boolean | cdktf.IResolvable) {
    this._verifyTestOnFailure = value;
  }
  public resetVerifyTestOnFailure() {
    this._verifyTestOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTestOnFailureInput() {
    return this._verifyTestOnFailure;
  }

  // viewport_height - computed: false, optional: true, required: false
  private _viewportHeight?: number; 
  public get viewportHeight() {
    return this.getNumberAttribute('viewport_height');
  }
  public set viewportHeight(value: number) {
    this._viewportHeight = value;
  }
  public resetViewportHeight() {
    this._viewportHeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewportHeightInput() {
    return this._viewportHeight;
  }

  // viewport_width - computed: false, optional: true, required: false
  private _viewportWidth?: number; 
  public get viewportWidth() {
    return this.getNumberAttribute('viewport_width');
  }
  public set viewportWidth(value: number) {
    this._viewportWidth = value;
  }
  public resetViewportWidth() {
    this._viewportWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewportWidthInput() {
    return this._viewportWidth;
  }

  // wait_for_no_activity - computed: false, optional: true, required: false
  private _waitForNoActivity?: number; 
  public get waitForNoActivity() {
    return this.getNumberAttribute('wait_for_no_activity');
  }
  public set waitForNoActivity(value: number) {
    this._waitForNoActivity = value;
  }
  public resetWaitForNoActivity() {
    this._waitForNoActivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForNoActivityInput() {
    return this._waitForNoActivity;
  }

  // zone_data_collection_enabled - computed: false, optional: true, required: false
  private _zoneDataCollectionEnabled?: boolean | cdktf.IResolvable; 
  public get zoneDataCollectionEnabled() {
    return this.getBooleanAttribute('zone_data_collection_enabled');
  }
  public set zoneDataCollectionEnabled(value: boolean | cdktf.IResolvable) {
    this._zoneDataCollectionEnabled = value;
  }
  public resetZoneDataCollectionEnabled() {
    this._zoneDataCollectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneDataCollectionEnabledInput() {
    return this._zoneDataCollectionEnabled;
  }
}
export interface WebTestAlertSettingsAlertRuleNotificationGroup {
  /**
  * Optional. List of contact groups to receive alert notifications. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#contact_groups WebTest#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Optional. Set to true to include critical alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#notify_on_critical WebTest#notify_on_critical}
  */
  readonly notifyOnCritical?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set to true to include improved alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#notify_on_improved WebTest#notify_on_improved}
  */
  readonly notifyOnImproved?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set to true to include warning alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#notify_on_warning WebTest#notify_on_warning}
  */
  readonly notifyOnWarning?: boolean | cdktf.IResolvable;
  /**
  * Optional. List of email addresses to receive alert notifications. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#recipient_email_ids WebTest#recipient_email_ids}
  */
  readonly recipientEmailIds?: string[];
  /**
  * Email subject for the alert notifications. Required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#subject WebTest#subject}
  */
  readonly subject: string;
}

export function webTestAlertSettingsAlertRuleNotificationGroupToTerraform(struct?: WebTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable): any {
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


export function webTestAlertSettingsAlertRuleNotificationGroupToHclTerraform(struct?: WebTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable): any {
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

export class WebTestAlertSettingsAlertRuleNotificationGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable | undefined) {
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

export class WebTestAlertSettingsAlertRuleNotificationGroupList extends cdktf.ComplexList {
  public internalValue? : WebTestAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable

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
  public get(index: number): WebTestAlertSettingsAlertRuleNotificationGroupOutputReference {
    return new WebTestAlertSettingsAlertRuleNotificationGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebTestAlertSettingsAlertRule {
  /**
  * Optional. Sets the sub alert type: 'dns', 'connect', 'send', 'wait', 'load', 'ttfb', 'content load', 'response', 'test time', 'dom load', 'test time with suspect', 'server response', 'document complete', 'redirect', 'test', 'content', '% downtime'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#alert_sub_type WebTest#alert_sub_type}
  */
  readonly alertSubType?: string;
  /**
  * Sets the alert type: 'test failure', 'timing', 'availability'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#alert_type WebTest#alert_type}
  */
  readonly alertType: string;
  /**
  * Optional. Sets the number of consecutive runs only if enable_consecutive field is true and node_threshold_type is node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#consecutive_number_of_runs WebTest#consecutive_number_of_runs}
  */
  readonly consecutiveNumberOfRuns?: number;
  /**
  * Optional. Sets alert critical reminder interval: 'none', '1 minute', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', 'daily'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#critical_reminder WebTest#critical_reminder}
  */
  readonly criticalReminder?: string;
  /**
  * Optional. Critical trigger value for 'specific value' and 'trailing value' trigger types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#critical_trigger WebTest#critical_trigger}
  */
  readonly criticalTrigger?: number;
  /**
  * Optional. Checks consecutive number of runs or nodes for triggering alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#enable_consecutive WebTest#enable_consecutive}
  */
  readonly enableConsecutive?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets enforce test failure property for an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#enforce_test_failure WebTest#enforce_test_failure}
  */
  readonly enforceTestFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets trigger expression for content match alert type 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#expression WebTest#expression}
  */
  readonly expression?: string;
  /**
  * Optional. Sets the historical interval for 'trailing value' trigger type: '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', '2 hours', '6 hours', '12 hours', '1 day', '1 week'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#historical_interval WebTest#historical_interval}
  */
  readonly historicalInterval?: string;
  /**
  * Sets the node threshold type for alert: 'runs', 'average across node' or 'node'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#node_threshold_type WebTest#node_threshold_type}
  */
  readonly nodeThresholdType: string;
  /**
  * Optional. Notification group type to alert. Supports only default contacts for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#notification_type WebTest#notification_type}
  */
  readonly notificationType?: string;
  /**
  * Optional. Sets the number of failed nodes the alert should trigger if node_threshold_type is 'average across nodes'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#number_of_failing_nodes WebTest#number_of_failing_nodes}
  */
  readonly numberOfFailingNodes?: number;
  /**
  * Optional. Omits scatterplot image from alert emails if set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#omit_scatterplot WebTest#omit_scatterplot}
  */
  readonly omitScatterplot?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets the operation type: 'not equals', 'greater than', 'greater than or equals', 'less than', 'less than or equals'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#operation_type WebTest#operation_type}
  */
  readonly operationType?: string;
  /**
  * Optional. Sets the statistical type for 'trailing value' trigger type. Supports only 'average' for now
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#statistical_type WebTest#statistical_type}
  */
  readonly statisticalType?: string;
  /**
  * Optional. Sets the alert time threshold: 'default', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', '2 hours', '6 hours', '12 hours'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#threshold_interval WebTest#threshold_interval}
  */
  readonly thresholdInterval?: string;
  /**
  * Optional. Sets the threshold for the number of runs or nodes the alert should trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#threshold_number_of_runs WebTest#threshold_number_of_runs}
  */
  readonly thresholdNumberOfRuns?: number;
  /**
  * Optional. Sets the threshold for the percentage of runs the alert should trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#threshold_percentage_of_runs WebTest#threshold_percentage_of_runs}
  */
  readonly thresholdPercentageOfRuns?: number;
  /**
  * Optional. Sets the trigger type: 'specific value', 'trailing value', 'trendshift'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#trigger_type WebTest#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * Optional. Set to true for using rolling window instead of schedule time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#use_rolling_window WebTest#use_rolling_window}
  */
  readonly useRollingWindow?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets alert warning reminder interval: 'none', '1 minute', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', 'daily'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#warning_reminder WebTest#warning_reminder}
  */
  readonly warningReminder?: string;
  /**
  * Optional. Warning trigger value for 'specific value' and 'trailing value' trigger types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#warning_trigger WebTest#warning_trigger}
  */
  readonly warningTrigger?: number;
  /**
  * notification_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#notification_group WebTest#notification_group}
  */
  readonly notificationGroup: WebTestAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable;
}

export function webTestAlertSettingsAlertRuleToTerraform(struct?: WebTestAlertSettingsAlertRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_sub_type: cdktf.stringToTerraform(struct!.alertSubType),
    alert_type: cdktf.stringToTerraform(struct!.alertType),
    consecutive_number_of_runs: cdktf.numberToTerraform(struct!.consecutiveNumberOfRuns),
    critical_reminder: cdktf.stringToTerraform(struct!.criticalReminder),
    critical_trigger: cdktf.numberToTerraform(struct!.criticalTrigger),
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
    notification_group: cdktf.listMapper(webTestAlertSettingsAlertRuleNotificationGroupToTerraform, true)(struct!.notificationGroup),
  }
}


export function webTestAlertSettingsAlertRuleToHclTerraform(struct?: WebTestAlertSettingsAlertRule | cdktf.IResolvable): any {
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
    notification_group: {
      value: cdktf.listMapperHcl(webTestAlertSettingsAlertRuleNotificationGroupToHclTerraform, true)(struct!.notificationGroup),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestAlertSettingsAlertRuleNotificationGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestAlertSettingsAlertRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebTestAlertSettingsAlertRule | cdktf.IResolvable | undefined {
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
    if (this._notificationGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationGroup = this._notificationGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestAlertSettingsAlertRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertSubType = undefined;
      this._alertType = undefined;
      this._consecutiveNumberOfRuns = undefined;
      this._criticalReminder = undefined;
      this._criticalTrigger = undefined;
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
      this._consecutiveNumberOfRuns = value.consecutiveNumberOfRuns;
      this._criticalReminder = value.criticalReminder;
      this._criticalTrigger = value.criticalTrigger;
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

  // notification_group - computed: false, optional: false, required: true
  private _notificationGroup = new WebTestAlertSettingsAlertRuleNotificationGroupList(this, "notification_group", true);
  public get notificationGroup() {
    return this._notificationGroup;
  }
  public putNotificationGroup(value: WebTestAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable) {
    this._notificationGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationGroupInput() {
    return this._notificationGroup.internalValue;
  }
}

export class WebTestAlertSettingsAlertRuleList extends cdktf.ComplexList {
  public internalValue? : WebTestAlertSettingsAlertRule[] | cdktf.IResolvable

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
  public get(index: number): WebTestAlertSettingsAlertRuleOutputReference {
    return new WebTestAlertSettingsAlertRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebTestAlertSettingsNotificationGroupContactGroups {
  /**
  * The unique ID of the contact group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#contact_group_id WebTest#contact_group_id}
  */
  readonly contactGroupId: number;
  /**
  * The name of the contact group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#contact_group_name WebTest#contact_group_name}
  */
  readonly contactGroupName: string;
}

export function webTestAlertSettingsNotificationGroupContactGroupsToTerraform(struct?: WebTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_group_id: cdktf.numberToTerraform(struct!.contactGroupId),
    contact_group_name: cdktf.stringToTerraform(struct!.contactGroupName),
  }
}


export function webTestAlertSettingsNotificationGroupContactGroupsToHclTerraform(struct?: WebTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable): any {
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

export class WebTestAlertSettingsNotificationGroupContactGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable | undefined) {
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

export class WebTestAlertSettingsNotificationGroupContactGroupsList extends cdktf.ComplexList {
  public internalValue? : WebTestAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable

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
  public get(index: number): WebTestAlertSettingsNotificationGroupContactGroupsOutputReference {
    return new WebTestAlertSettingsNotificationGroupContactGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebTestAlertSettingsNotificationGroup {
  /**
  * Optional. Alert webhook ids for the webhook endpoints to associate with this alert setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#alert_webhook_ids WebTest#alert_webhook_ids}
  */
  readonly alertWebhookIds?: number[];
  /**
  * Optional. List of emails to alert. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#recipient_email_ids WebTest#recipient_email_ids}
  */
  readonly recipientEmailIds?: string[];
  /**
  * Email subject for the alert notifications. Required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#subject WebTest#subject}
  */
  readonly subject: string;
  /**
  * contact_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#contact_groups WebTest#contact_groups}
  */
  readonly contactGroups?: WebTestAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable;
}

export function webTestAlertSettingsNotificationGroupToTerraform(struct?: WebTestAlertSettingsNotificationGroupOutputReference | WebTestAlertSettingsNotificationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_webhook_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.alertWebhookIds),
    recipient_email_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipientEmailIds),
    subject: cdktf.stringToTerraform(struct!.subject),
    contact_groups: cdktf.listMapper(webTestAlertSettingsNotificationGroupContactGroupsToTerraform, true)(struct!.contactGroups),
  }
}


export function webTestAlertSettingsNotificationGroupToHclTerraform(struct?: WebTestAlertSettingsNotificationGroupOutputReference | WebTestAlertSettingsNotificationGroup): any {
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
      value: cdktf.listMapperHcl(webTestAlertSettingsNotificationGroupContactGroupsToHclTerraform, true)(struct!.contactGroups),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestAlertSettingsNotificationGroupContactGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestAlertSettingsNotificationGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestAlertSettingsNotificationGroup | undefined {
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

  public set internalValue(value: WebTestAlertSettingsNotificationGroup | undefined) {
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
  private _contactGroups = new WebTestAlertSettingsNotificationGroupContactGroupsList(this, "contact_groups", true);
  public get contactGroups() {
    return this._contactGroups;
  }
  public putContactGroups(value: WebTestAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable) {
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
export interface WebTestAlertSettings {
  /**
  * Specifies the type of alert setting: 'override','inherit & add'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#alert_setting_type WebTest#alert_setting_type}
  */
  readonly alertSettingType?: string;
  /**
  * alert_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#alert_rule WebTest#alert_rule}
  */
  readonly alertRule?: WebTestAlertSettingsAlertRule[] | cdktf.IResolvable;
  /**
  * notification_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#notification_group WebTest#notification_group}
  */
  readonly notificationGroup: WebTestAlertSettingsNotificationGroup;
}

export function webTestAlertSettingsToTerraform(struct?: WebTestAlertSettingsOutputReference | WebTestAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_setting_type: cdktf.stringToTerraform(struct!.alertSettingType),
    alert_rule: cdktf.listMapper(webTestAlertSettingsAlertRuleToTerraform, true)(struct!.alertRule),
    notification_group: webTestAlertSettingsNotificationGroupToTerraform(struct!.notificationGroup),
  }
}


export function webTestAlertSettingsToHclTerraform(struct?: WebTestAlertSettingsOutputReference | WebTestAlertSettings): any {
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
      value: cdktf.listMapperHcl(webTestAlertSettingsAlertRuleToHclTerraform, true)(struct!.alertRule),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestAlertSettingsAlertRuleList",
    },
    notification_group: {
      value: webTestAlertSettingsNotificationGroupToHclTerraform(struct!.notificationGroup),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestAlertSettingsNotificationGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestAlertSettings | undefined {
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

  public set internalValue(value: WebTestAlertSettings | undefined) {
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
  private _alertRule = new WebTestAlertSettingsAlertRuleList(this, "alert_rule", true);
  public get alertRule() {
    return this._alertRule;
  }
  public putAlertRule(value: WebTestAlertSettingsAlertRule[] | cdktf.IResolvable) {
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
  private _notificationGroup = new WebTestAlertSettingsNotificationGroupOutputReference(this, "notification_group");
  public get notificationGroup() {
    return this._notificationGroup;
  }
  public putNotificationGroup(value: WebTestAlertSettingsNotificationGroup) {
    this._notificationGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationGroupInput() {
    return this._notificationGroup.internalValue;
  }
}
export interface WebTestInsights {
  /**
  * Optional. Indicator ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#indicator_ids WebTest#indicator_ids}
  */
  readonly indicatorIds?: number[];
  /**
  * Optional. Tracepoint ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#tracepoint_ids WebTest#tracepoint_ids}
  */
  readonly tracepointIds?: number[];
}

export function webTestInsightsToTerraform(struct?: WebTestInsightsOutputReference | WebTestInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.indicatorIds),
    tracepoint_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.tracepointIds),
  }
}


export function webTestInsightsToHclTerraform(struct?: WebTestInsightsOutputReference | WebTestInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indicator_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.indicatorIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    tracepoint_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.tracepointIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestInsightsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestInsights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indicatorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicatorIds = this._indicatorIds;
    }
    if (this._tracepointIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracepointIds = this._tracepointIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestInsights | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._indicatorIds = undefined;
      this._tracepointIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._indicatorIds = value.indicatorIds;
      this._tracepointIds = value.tracepointIds;
    }
  }

  // indicator_ids - computed: false, optional: true, required: false
  private _indicatorIds?: number[]; 
  public get indicatorIds() {
    return this.getNumberListAttribute('indicator_ids');
  }
  public set indicatorIds(value: number[]) {
    this._indicatorIds = value;
  }
  public resetIndicatorIds() {
    this._indicatorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorIdsInput() {
    return this._indicatorIds;
  }

  // tracepoint_ids - computed: false, optional: true, required: false
  private _tracepointIds?: number[]; 
  public get tracepointIds() {
    return this.getNumberListAttribute('tracepoint_ids');
  }
  public set tracepointIds(value: number[]) {
    this._tracepointIds = value;
  }
  public resetTracepointIds() {
    this._tracepointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracepointIdsInput() {
    return this._tracepointIds;
  }
}
export interface WebTestLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#key WebTest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#values WebTest#values}
  */
  readonly values: string[];
}

export function webTestLabelToTerraform(struct?: WebTestLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function webTestLabelToHclTerraform(struct?: WebTestLabel | cdktf.IResolvable): any {
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

export class WebTestLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebTestLabel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebTestLabel | cdktf.IResolvable | undefined) {
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

export class WebTestLabelList extends cdktf.ComplexList {
  public internalValue? : WebTestLabel[] | cdktf.IResolvable

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
  public get(index: number): WebTestLabelOutputReference {
    return new WebTestLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebTestRequestSettingsAuthentication {
  /**
  * Type of authentication to use 'basic', 'ntlm', 'digest', 'login'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#authentication_type WebTest#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Optional. Password ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#password_ids WebTest#password_ids}
  */
  readonly passwordIds?: number[];
}

export function webTestRequestSettingsAuthenticationToTerraform(struct?: WebTestRequestSettingsAuthenticationOutputReference | WebTestRequestSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    password_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.passwordIds),
  }
}


export function webTestRequestSettingsAuthenticationToHclTerraform(struct?: WebTestRequestSettingsAuthenticationOutputReference | WebTestRequestSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.passwordIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._passwordIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordIds = this._passwordIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationType = undefined;
      this._passwordIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationType = value.authenticationType;
      this._passwordIds = value.passwordIds;
    }
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // password_ids - computed: false, optional: true, required: false
  private _passwordIds?: number[]; 
  public get passwordIds() {
    return this.getNumberListAttribute('password_ids');
  }
  public set passwordIds(value: number[]) {
    this._passwordIds = value;
  }
  public resetPasswordIds() {
    this._passwordIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordIdsInput() {
    return this._passwordIds;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersAccept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersAcceptToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersAcceptOutputReference | WebTestRequestSettingsHttpRequestHeadersAccept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersAcceptToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersAcceptOutputReference | WebTestRequestSettingsHttpRequestHeadersAccept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersAcceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersAccept | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersAccept | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersAcceptCharset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersAcceptCharsetToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersAcceptCharsetOutputReference | WebTestRequestSettingsHttpRequestHeadersAcceptCharset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersAcceptCharsetToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersAcceptCharsetOutputReference | WebTestRequestSettingsHttpRequestHeadersAcceptCharset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersAcceptCharsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersAcceptCharset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersAcceptCharset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersAcceptEncoding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersAcceptEncodingToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersAcceptEncodingOutputReference | WebTestRequestSettingsHttpRequestHeadersAcceptEncoding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersAcceptEncodingToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersAcceptEncodingOutputReference | WebTestRequestSettingsHttpRequestHeadersAcceptEncoding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersAcceptEncodingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersAcceptEncoding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersAcceptEncoding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersAcceptLanguage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersAcceptLanguageToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersAcceptLanguageOutputReference | WebTestRequestSettingsHttpRequestHeadersAcceptLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersAcceptLanguageToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersAcceptLanguageOutputReference | WebTestRequestSettingsHttpRequestHeadersAcceptLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersAcceptLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersAcceptLanguage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersAcceptLanguage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersCacheControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersCacheControlToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersCacheControlOutputReference | WebTestRequestSettingsHttpRequestHeadersCacheControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersCacheControlToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersCacheControlOutputReference | WebTestRequestSettingsHttpRequestHeadersCacheControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersCacheControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersCacheControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersCacheControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersConnectionToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersConnectionOutputReference | WebTestRequestSettingsHttpRequestHeadersConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersConnectionToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersConnectionOutputReference | WebTestRequestSettingsHttpRequestHeadersConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersCookieToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersCookieOutputReference | WebTestRequestSettingsHttpRequestHeadersCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersCookieToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersCookieOutputReference | WebTestRequestSettingsHttpRequestHeadersCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#header_name WebTest#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersCustomToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersCustomOutputReference | WebTestRequestSettingsHttpRequestHeadersCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersCustomToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersCustomOutputReference | WebTestRequestSettingsHttpRequestHeadersCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._headerName = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._headerName = value.headerName;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersDnsOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersDnsOverrideToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersDnsOverrideOutputReference | WebTestRequestSettingsHttpRequestHeadersDnsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersDnsOverrideToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersDnsOverrideOutputReference | WebTestRequestSettingsHttpRequestHeadersDnsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersDnsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersDnsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersDnsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: false, required: true
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersDnsResolverOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersDnsResolverOverrideToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersDnsResolverOverrideOutputReference | WebTestRequestSettingsHttpRequestHeadersDnsResolverOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersDnsResolverOverrideToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersDnsResolverOverrideOutputReference | WebTestRequestSettingsHttpRequestHeadersDnsResolverOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersDnsResolverOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersDnsResolverOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersDnsResolverOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersHostToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersHostOutputReference | WebTestRequestSettingsHttpRequestHeadersHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersHostToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersHostOutputReference | WebTestRequestSettingsHttpRequestHeadersHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersPragma {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersPragmaToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersPragmaOutputReference | WebTestRequestSettingsHttpRequestHeadersPragma): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersPragmaToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersPragmaOutputReference | WebTestRequestSettingsHttpRequestHeadersPragma): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersPragmaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersPragma | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersPragma | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersReferer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersRefererToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersRefererOutputReference | WebTestRequestSettingsHttpRequestHeadersReferer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersRefererToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersRefererOutputReference | WebTestRequestSettingsHttpRequestHeadersReferer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersRefererOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersReferer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersReferer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersRequestBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value?: string;
}

export function webTestRequestSettingsHttpRequestHeadersRequestBlockToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersRequestBlockOutputReference | WebTestRequestSettingsHttpRequestHeadersRequestBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersRequestBlockToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersRequestBlockOutputReference | WebTestRequestSettingsHttpRequestHeadersRequestBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersRequestBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersRequestBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersRequestBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersRequestDelay {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersRequestDelayToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersRequestDelayOutputReference | WebTestRequestSettingsHttpRequestHeadersRequestDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersRequestDelayToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersRequestDelayOutputReference | WebTestRequestSettingsHttpRequestHeadersRequestDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersRequestDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersRequestDelay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersRequestDelay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersRequestOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersRequestOverrideToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersRequestOverrideOutputReference | WebTestRequestSettingsHttpRequestHeadersRequestOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersRequestOverrideToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersRequestOverrideOutputReference | WebTestRequestSettingsHttpRequestHeadersRequestOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersRequestOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersRequestOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersRequestOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersSniOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#header_name WebTest#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersSniOverrideToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersSniOverrideOutputReference | WebTestRequestSettingsHttpRequestHeadersSniOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersSniOverrideToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersSniOverrideOutputReference | WebTestRequestSettingsHttpRequestHeadersSniOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersSniOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersSniOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersSniOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._headerName = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._headerName = value.headerName;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeadersUserAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#child_host_pattern WebTest#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#value WebTest#value}
  */
  readonly value: string;
}

export function webTestRequestSettingsHttpRequestHeadersUserAgentToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersUserAgentOutputReference | WebTestRequestSettingsHttpRequestHeadersUserAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function webTestRequestSettingsHttpRequestHeadersUserAgentToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersUserAgentOutputReference | WebTestRequestSettingsHttpRequestHeadersUserAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    child_host_pattern: {
      value: cdktf.stringToHclTerraform(struct!.childHostPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersUserAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeadersUserAgent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._childHostPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.childHostPattern = this._childHostPattern;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeadersUserAgent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._childHostPattern = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._childHostPattern = value.childHostPattern;
      this._value = value.value;
    }
  }

  // child_host_pattern - computed: false, optional: true, required: false
  private _childHostPattern?: string; 
  public get childHostPattern() {
    return this.getStringAttribute('child_host_pattern');
  }
  public set childHostPattern(value: string) {
    this._childHostPattern = value;
  }
  public resetChildHostPattern() {
    this._childHostPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get childHostPatternInput() {
    return this._childHostPattern;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface WebTestRequestSettingsHttpRequestHeaders {
  /**
  * accept block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#accept WebTest#accept}
  */
  readonly accept?: WebTestRequestSettingsHttpRequestHeadersAccept;
  /**
  * accept_charset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#accept_charset WebTest#accept_charset}
  */
  readonly acceptCharset?: WebTestRequestSettingsHttpRequestHeadersAcceptCharset;
  /**
  * accept_encoding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#accept_encoding WebTest#accept_encoding}
  */
  readonly acceptEncoding?: WebTestRequestSettingsHttpRequestHeadersAcceptEncoding;
  /**
  * accept_language block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#accept_language WebTest#accept_language}
  */
  readonly acceptLanguage?: WebTestRequestSettingsHttpRequestHeadersAcceptLanguage;
  /**
  * cache_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#cache_control WebTest#cache_control}
  */
  readonly cacheControl?: WebTestRequestSettingsHttpRequestHeadersCacheControl;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#connection WebTest#connection}
  */
  readonly connection?: WebTestRequestSettingsHttpRequestHeadersConnection;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#cookie WebTest#cookie}
  */
  readonly cookie?: WebTestRequestSettingsHttpRequestHeadersCookie;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#custom WebTest#custom}
  */
  readonly custom?: WebTestRequestSettingsHttpRequestHeadersCustom;
  /**
  * dns_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#dns_override WebTest#dns_override}
  */
  readonly dnsOverride?: WebTestRequestSettingsHttpRequestHeadersDnsOverride;
  /**
  * dns_resolver_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#dns_resolver_override WebTest#dns_resolver_override}
  */
  readonly dnsResolverOverride?: WebTestRequestSettingsHttpRequestHeadersDnsResolverOverride;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#host WebTest#host}
  */
  readonly host?: WebTestRequestSettingsHttpRequestHeadersHost;
  /**
  * pragma block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#pragma WebTest#pragma}
  */
  readonly pragma?: WebTestRequestSettingsHttpRequestHeadersPragma;
  /**
  * referer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#referer WebTest#referer}
  */
  readonly referer?: WebTestRequestSettingsHttpRequestHeadersReferer;
  /**
  * request_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#request_block WebTest#request_block}
  */
  readonly requestBlock?: WebTestRequestSettingsHttpRequestHeadersRequestBlock;
  /**
  * request_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#request_delay WebTest#request_delay}
  */
  readonly requestDelay?: WebTestRequestSettingsHttpRequestHeadersRequestDelay;
  /**
  * request_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#request_override WebTest#request_override}
  */
  readonly requestOverride?: WebTestRequestSettingsHttpRequestHeadersRequestOverride;
  /**
  * sni_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#sni_override WebTest#sni_override}
  */
  readonly sniOverride?: WebTestRequestSettingsHttpRequestHeadersSniOverride;
  /**
  * user_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#user_agent WebTest#user_agent}
  */
  readonly userAgent?: WebTestRequestSettingsHttpRequestHeadersUserAgent;
}

export function webTestRequestSettingsHttpRequestHeadersToTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersOutputReference | WebTestRequestSettingsHttpRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept: webTestRequestSettingsHttpRequestHeadersAcceptToTerraform(struct!.accept),
    accept_charset: webTestRequestSettingsHttpRequestHeadersAcceptCharsetToTerraform(struct!.acceptCharset),
    accept_encoding: webTestRequestSettingsHttpRequestHeadersAcceptEncodingToTerraform(struct!.acceptEncoding),
    accept_language: webTestRequestSettingsHttpRequestHeadersAcceptLanguageToTerraform(struct!.acceptLanguage),
    cache_control: webTestRequestSettingsHttpRequestHeadersCacheControlToTerraform(struct!.cacheControl),
    connection: webTestRequestSettingsHttpRequestHeadersConnectionToTerraform(struct!.connection),
    cookie: webTestRequestSettingsHttpRequestHeadersCookieToTerraform(struct!.cookie),
    custom: webTestRequestSettingsHttpRequestHeadersCustomToTerraform(struct!.custom),
    dns_override: webTestRequestSettingsHttpRequestHeadersDnsOverrideToTerraform(struct!.dnsOverride),
    dns_resolver_override: webTestRequestSettingsHttpRequestHeadersDnsResolverOverrideToTerraform(struct!.dnsResolverOverride),
    host: webTestRequestSettingsHttpRequestHeadersHostToTerraform(struct!.host),
    pragma: webTestRequestSettingsHttpRequestHeadersPragmaToTerraform(struct!.pragma),
    referer: webTestRequestSettingsHttpRequestHeadersRefererToTerraform(struct!.referer),
    request_block: webTestRequestSettingsHttpRequestHeadersRequestBlockToTerraform(struct!.requestBlock),
    request_delay: webTestRequestSettingsHttpRequestHeadersRequestDelayToTerraform(struct!.requestDelay),
    request_override: webTestRequestSettingsHttpRequestHeadersRequestOverrideToTerraform(struct!.requestOverride),
    sni_override: webTestRequestSettingsHttpRequestHeadersSniOverrideToTerraform(struct!.sniOverride),
    user_agent: webTestRequestSettingsHttpRequestHeadersUserAgentToTerraform(struct!.userAgent),
  }
}


export function webTestRequestSettingsHttpRequestHeadersToHclTerraform(struct?: WebTestRequestSettingsHttpRequestHeadersOutputReference | WebTestRequestSettingsHttpRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept: {
      value: webTestRequestSettingsHttpRequestHeadersAcceptToHclTerraform(struct!.accept),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersAcceptList",
    },
    accept_charset: {
      value: webTestRequestSettingsHttpRequestHeadersAcceptCharsetToHclTerraform(struct!.acceptCharset),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersAcceptCharsetList",
    },
    accept_encoding: {
      value: webTestRequestSettingsHttpRequestHeadersAcceptEncodingToHclTerraform(struct!.acceptEncoding),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersAcceptEncodingList",
    },
    accept_language: {
      value: webTestRequestSettingsHttpRequestHeadersAcceptLanguageToHclTerraform(struct!.acceptLanguage),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersAcceptLanguageList",
    },
    cache_control: {
      value: webTestRequestSettingsHttpRequestHeadersCacheControlToHclTerraform(struct!.cacheControl),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersCacheControlList",
    },
    connection: {
      value: webTestRequestSettingsHttpRequestHeadersConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersConnectionList",
    },
    cookie: {
      value: webTestRequestSettingsHttpRequestHeadersCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersCookieList",
    },
    custom: {
      value: webTestRequestSettingsHttpRequestHeadersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersCustomList",
    },
    dns_override: {
      value: webTestRequestSettingsHttpRequestHeadersDnsOverrideToHclTerraform(struct!.dnsOverride),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersDnsOverrideList",
    },
    dns_resolver_override: {
      value: webTestRequestSettingsHttpRequestHeadersDnsResolverOverrideToHclTerraform(struct!.dnsResolverOverride),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersDnsResolverOverrideList",
    },
    host: {
      value: webTestRequestSettingsHttpRequestHeadersHostToHclTerraform(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersHostList",
    },
    pragma: {
      value: webTestRequestSettingsHttpRequestHeadersPragmaToHclTerraform(struct!.pragma),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersPragmaList",
    },
    referer: {
      value: webTestRequestSettingsHttpRequestHeadersRefererToHclTerraform(struct!.referer),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersRefererList",
    },
    request_block: {
      value: webTestRequestSettingsHttpRequestHeadersRequestBlockToHclTerraform(struct!.requestBlock),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersRequestBlockList",
    },
    request_delay: {
      value: webTestRequestSettingsHttpRequestHeadersRequestDelayToHclTerraform(struct!.requestDelay),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersRequestDelayList",
    },
    request_override: {
      value: webTestRequestSettingsHttpRequestHeadersRequestOverrideToHclTerraform(struct!.requestOverride),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersRequestOverrideList",
    },
    sni_override: {
      value: webTestRequestSettingsHttpRequestHeadersSniOverrideToHclTerraform(struct!.sniOverride),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersSniOverrideList",
    },
    user_agent: {
      value: webTestRequestSettingsHttpRequestHeadersUserAgentToHclTerraform(struct!.userAgent),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersUserAgentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsHttpRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettingsHttpRequestHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accept?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accept = this._accept?.internalValue;
    }
    if (this._acceptCharset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptCharset = this._acceptCharset?.internalValue;
    }
    if (this._acceptEncoding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEncoding = this._acceptEncoding?.internalValue;
    }
    if (this._acceptLanguage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptLanguage = this._acceptLanguage?.internalValue;
    }
    if (this._cacheControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheControl = this._cacheControl?.internalValue;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    if (this._dnsOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOverride = this._dnsOverride?.internalValue;
    }
    if (this._dnsResolverOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResolverOverride = this._dnsResolverOverride?.internalValue;
    }
    if (this._host?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host?.internalValue;
    }
    if (this._pragma?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pragma = this._pragma?.internalValue;
    }
    if (this._referer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referer = this._referer?.internalValue;
    }
    if (this._requestBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBlock = this._requestBlock?.internalValue;
    }
    if (this._requestDelay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestDelay = this._requestDelay?.internalValue;
    }
    if (this._requestOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestOverride = this._requestOverride?.internalValue;
    }
    if (this._sniOverride?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sniOverride = this._sniOverride?.internalValue;
    }
    if (this._userAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettingsHttpRequestHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accept.internalValue = undefined;
      this._acceptCharset.internalValue = undefined;
      this._acceptEncoding.internalValue = undefined;
      this._acceptLanguage.internalValue = undefined;
      this._cacheControl.internalValue = undefined;
      this._connection.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._custom.internalValue = undefined;
      this._dnsOverride.internalValue = undefined;
      this._dnsResolverOverride.internalValue = undefined;
      this._host.internalValue = undefined;
      this._pragma.internalValue = undefined;
      this._referer.internalValue = undefined;
      this._requestBlock.internalValue = undefined;
      this._requestDelay.internalValue = undefined;
      this._requestOverride.internalValue = undefined;
      this._sniOverride.internalValue = undefined;
      this._userAgent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accept.internalValue = value.accept;
      this._acceptCharset.internalValue = value.acceptCharset;
      this._acceptEncoding.internalValue = value.acceptEncoding;
      this._acceptLanguage.internalValue = value.acceptLanguage;
      this._cacheControl.internalValue = value.cacheControl;
      this._connection.internalValue = value.connection;
      this._cookie.internalValue = value.cookie;
      this._custom.internalValue = value.custom;
      this._dnsOverride.internalValue = value.dnsOverride;
      this._dnsResolverOverride.internalValue = value.dnsResolverOverride;
      this._host.internalValue = value.host;
      this._pragma.internalValue = value.pragma;
      this._referer.internalValue = value.referer;
      this._requestBlock.internalValue = value.requestBlock;
      this._requestDelay.internalValue = value.requestDelay;
      this._requestOverride.internalValue = value.requestOverride;
      this._sniOverride.internalValue = value.sniOverride;
      this._userAgent.internalValue = value.userAgent;
    }
  }

  // accept - computed: false, optional: true, required: false
  private _accept = new WebTestRequestSettingsHttpRequestHeadersAcceptOutputReference(this, "accept");
  public get accept() {
    return this._accept;
  }
  public putAccept(value: WebTestRequestSettingsHttpRequestHeadersAccept) {
    this._accept.internalValue = value;
  }
  public resetAccept() {
    this._accept.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptInput() {
    return this._accept.internalValue;
  }

  // accept_charset - computed: false, optional: true, required: false
  private _acceptCharset = new WebTestRequestSettingsHttpRequestHeadersAcceptCharsetOutputReference(this, "accept_charset");
  public get acceptCharset() {
    return this._acceptCharset;
  }
  public putAcceptCharset(value: WebTestRequestSettingsHttpRequestHeadersAcceptCharset) {
    this._acceptCharset.internalValue = value;
  }
  public resetAcceptCharset() {
    this._acceptCharset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptCharsetInput() {
    return this._acceptCharset.internalValue;
  }

  // accept_encoding - computed: false, optional: true, required: false
  private _acceptEncoding = new WebTestRequestSettingsHttpRequestHeadersAcceptEncodingOutputReference(this, "accept_encoding");
  public get acceptEncoding() {
    return this._acceptEncoding;
  }
  public putAcceptEncoding(value: WebTestRequestSettingsHttpRequestHeadersAcceptEncoding) {
    this._acceptEncoding.internalValue = value;
  }
  public resetAcceptEncoding() {
    this._acceptEncoding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEncodingInput() {
    return this._acceptEncoding.internalValue;
  }

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage = new WebTestRequestSettingsHttpRequestHeadersAcceptLanguageOutputReference(this, "accept_language");
  public get acceptLanguage() {
    return this._acceptLanguage;
  }
  public putAcceptLanguage(value: WebTestRequestSettingsHttpRequestHeadersAcceptLanguage) {
    this._acceptLanguage.internalValue = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage.internalValue;
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl = new WebTestRequestSettingsHttpRequestHeadersCacheControlOutputReference(this, "cache_control");
  public get cacheControl() {
    return this._cacheControl;
  }
  public putCacheControl(value: WebTestRequestSettingsHttpRequestHeadersCacheControl) {
    this._cacheControl.internalValue = value;
  }
  public resetCacheControl() {
    this._cacheControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new WebTestRequestSettingsHttpRequestHeadersConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: WebTestRequestSettingsHttpRequestHeadersConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new WebTestRequestSettingsHttpRequestHeadersCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: WebTestRequestSettingsHttpRequestHeadersCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new WebTestRequestSettingsHttpRequestHeadersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: WebTestRequestSettingsHttpRequestHeadersCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }

  // dns_override - computed: false, optional: true, required: false
  private _dnsOverride = new WebTestRequestSettingsHttpRequestHeadersDnsOverrideOutputReference(this, "dns_override");
  public get dnsOverride() {
    return this._dnsOverride;
  }
  public putDnsOverride(value: WebTestRequestSettingsHttpRequestHeadersDnsOverride) {
    this._dnsOverride.internalValue = value;
  }
  public resetDnsOverride() {
    this._dnsOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOverrideInput() {
    return this._dnsOverride.internalValue;
  }

  // dns_resolver_override - computed: false, optional: true, required: false
  private _dnsResolverOverride = new WebTestRequestSettingsHttpRequestHeadersDnsResolverOverrideOutputReference(this, "dns_resolver_override");
  public get dnsResolverOverride() {
    return this._dnsResolverOverride;
  }
  public putDnsResolverOverride(value: WebTestRequestSettingsHttpRequestHeadersDnsResolverOverride) {
    this._dnsResolverOverride.internalValue = value;
  }
  public resetDnsResolverOverride() {
    this._dnsResolverOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolverOverrideInput() {
    return this._dnsResolverOverride.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new WebTestRequestSettingsHttpRequestHeadersHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: WebTestRequestSettingsHttpRequestHeadersHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // pragma - computed: false, optional: true, required: false
  private _pragma = new WebTestRequestSettingsHttpRequestHeadersPragmaOutputReference(this, "pragma");
  public get pragma() {
    return this._pragma;
  }
  public putPragma(value: WebTestRequestSettingsHttpRequestHeadersPragma) {
    this._pragma.internalValue = value;
  }
  public resetPragma() {
    this._pragma.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pragmaInput() {
    return this._pragma.internalValue;
  }

  // referer - computed: false, optional: true, required: false
  private _referer = new WebTestRequestSettingsHttpRequestHeadersRefererOutputReference(this, "referer");
  public get referer() {
    return this._referer;
  }
  public putReferer(value: WebTestRequestSettingsHttpRequestHeadersReferer) {
    this._referer.internalValue = value;
  }
  public resetReferer() {
    this._referer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererInput() {
    return this._referer.internalValue;
  }

  // request_block - computed: false, optional: true, required: false
  private _requestBlock = new WebTestRequestSettingsHttpRequestHeadersRequestBlockOutputReference(this, "request_block");
  public get requestBlock() {
    return this._requestBlock;
  }
  public putRequestBlock(value: WebTestRequestSettingsHttpRequestHeadersRequestBlock) {
    this._requestBlock.internalValue = value;
  }
  public resetRequestBlock() {
    this._requestBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBlockInput() {
    return this._requestBlock.internalValue;
  }

  // request_delay - computed: false, optional: true, required: false
  private _requestDelay = new WebTestRequestSettingsHttpRequestHeadersRequestDelayOutputReference(this, "request_delay");
  public get requestDelay() {
    return this._requestDelay;
  }
  public putRequestDelay(value: WebTestRequestSettingsHttpRequestHeadersRequestDelay) {
    this._requestDelay.internalValue = value;
  }
  public resetRequestDelay() {
    this._requestDelay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDelayInput() {
    return this._requestDelay.internalValue;
  }

  // request_override - computed: false, optional: true, required: false
  private _requestOverride = new WebTestRequestSettingsHttpRequestHeadersRequestOverrideOutputReference(this, "request_override");
  public get requestOverride() {
    return this._requestOverride;
  }
  public putRequestOverride(value: WebTestRequestSettingsHttpRequestHeadersRequestOverride) {
    this._requestOverride.internalValue = value;
  }
  public resetRequestOverride() {
    this._requestOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestOverrideInput() {
    return this._requestOverride.internalValue;
  }

  // sni_override - computed: false, optional: true, required: false
  private _sniOverride = new WebTestRequestSettingsHttpRequestHeadersSniOverrideOutputReference(this, "sni_override");
  public get sniOverride() {
    return this._sniOverride;
  }
  public putSniOverride(value: WebTestRequestSettingsHttpRequestHeadersSniOverride) {
    this._sniOverride.internalValue = value;
  }
  public resetSniOverride() {
    this._sniOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniOverrideInput() {
    return this._sniOverride.internalValue;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent = new WebTestRequestSettingsHttpRequestHeadersUserAgentOutputReference(this, "user_agent");
  public get userAgent() {
    return this._userAgent;
  }
  public putUserAgent(value: WebTestRequestSettingsHttpRequestHeadersUserAgent) {
    this._userAgent.internalValue = value;
  }
  public resetUserAgent() {
    this._userAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent.internalValue;
  }
}
export interface WebTestRequestSettings {
  /**
  * Optional. Library certificate ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#library_certificate_ids WebTest#library_certificate_ids}
  */
  readonly libraryCertificateIds?: number[];
  /**
  * Optional. Token ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#token_ids WebTest#token_ids}
  */
  readonly tokenIds?: number[];
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#authentication WebTest#authentication}
  */
  readonly authentication?: WebTestRequestSettingsAuthentication;
  /**
  * http_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#http_request_headers WebTest#http_request_headers}
  */
  readonly httpRequestHeaders?: WebTestRequestSettingsHttpRequestHeaders;
}

export function webTestRequestSettingsToTerraform(struct?: WebTestRequestSettingsOutputReference | WebTestRequestSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    library_certificate_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.libraryCertificateIds),
    token_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.tokenIds),
    authentication: webTestRequestSettingsAuthenticationToTerraform(struct!.authentication),
    http_request_headers: webTestRequestSettingsHttpRequestHeadersToTerraform(struct!.httpRequestHeaders),
  }
}


export function webTestRequestSettingsToHclTerraform(struct?: WebTestRequestSettingsOutputReference | WebTestRequestSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    library_certificate_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.libraryCertificateIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    token_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.tokenIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    authentication: {
      value: webTestRequestSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsAuthenticationList",
    },
    http_request_headers: {
      value: webTestRequestSettingsHttpRequestHeadersToHclTerraform(struct!.httpRequestHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "WebTestRequestSettingsHttpRequestHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebTestRequestSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestRequestSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libraryCertificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.libraryCertificateIds = this._libraryCertificateIds;
    }
    if (this._tokenIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenIds = this._tokenIds;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._httpRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestHeaders = this._httpRequestHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebTestRequestSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._libraryCertificateIds = undefined;
      this._tokenIds = undefined;
      this._authentication.internalValue = undefined;
      this._httpRequestHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._libraryCertificateIds = value.libraryCertificateIds;
      this._tokenIds = value.tokenIds;
      this._authentication.internalValue = value.authentication;
      this._httpRequestHeaders.internalValue = value.httpRequestHeaders;
    }
  }

  // library_certificate_ids - computed: false, optional: true, required: false
  private _libraryCertificateIds?: number[]; 
  public get libraryCertificateIds() {
    return this.getNumberListAttribute('library_certificate_ids');
  }
  public set libraryCertificateIds(value: number[]) {
    this._libraryCertificateIds = value;
  }
  public resetLibraryCertificateIds() {
    this._libraryCertificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libraryCertificateIdsInput() {
    return this._libraryCertificateIds;
  }

  // token_ids - computed: false, optional: true, required: false
  private _tokenIds?: number[]; 
  public get tokenIds() {
    return this.getNumberListAttribute('token_ids');
  }
  public set tokenIds(value: number[]) {
    this._tokenIds = value;
  }
  public resetTokenIds() {
    this._tokenIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdsInput() {
    return this._tokenIds;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new WebTestRequestSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: WebTestRequestSettingsAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // http_request_headers - computed: false, optional: true, required: false
  private _httpRequestHeaders = new WebTestRequestSettingsHttpRequestHeadersOutputReference(this, "http_request_headers");
  public get httpRequestHeaders() {
    return this._httpRequestHeaders;
  }
  public putHttpRequestHeaders(value: WebTestRequestSettingsHttpRequestHeaders) {
    this._httpRequestHeaders.internalValue = value;
  }
  public resetHttpRequestHeaders() {
    this._httpRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestHeadersInput() {
    return this._httpRequestHeaders.internalValue;
  }
}
export interface WebTestScheduleSettings {
  /**
  * Sets the scheduling frequency: '1 minute', '5 minutes', '10 minutes', '15 minutes', '20 minutes', '30 minutes', '60 minutes', '2 hours', '3 hours', '4 hours', '6 hours', '8 hours', '12 hours', '24 hours', '4 minutes', '2 minutes'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#frequency WebTest#frequency}
  */
  readonly frequency: string;
  /**
  * Optional. The maintenance schedule id to utilize for the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#maintenance_schedule_id WebTest#maintenance_schedule_id}
  */
  readonly maintenanceScheduleId?: number;
  /**
  * Optional. Number of subset nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#no_of_subset_nodes WebTest#no_of_subset_nodes}
  */
  readonly noOfSubsetNodes?: number;
  /**
  * Node distribution type: 'random' or 'concurrent'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#node_distribution WebTest#node_distribution}
  */
  readonly nodeDistribution: string;
  /**
  * Optional if node_ids is used. Node group ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#node_group_ids WebTest#node_group_ids}
  */
  readonly nodeGroupIds?: number[];
  /**
  * Optional. if node_group_ids is used. Node ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#node_ids WebTest#node_ids}
  */
  readonly nodeIds?: number[];
  /**
  * Optional. The run schedule id to utilize for the test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#run_schedule_id WebTest#run_schedule_id}
  */
  readonly runScheduleId?: number;
}

export function webTestScheduleSettingsToTerraform(struct?: WebTestScheduleSettingsOutputReference | WebTestScheduleSettings): any {
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


export function webTestScheduleSettingsToHclTerraform(struct?: WebTestScheduleSettingsOutputReference | WebTestScheduleSettings): any {
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

export class WebTestScheduleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebTestScheduleSettings | undefined {
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

  public set internalValue(value: WebTestScheduleSettings | undefined) {
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
export interface WebTestThresholds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#availability_critical WebTest#availability_critical}
  */
  readonly availabilityCritical: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#availability_warning WebTest#availability_warning}
  */
  readonly availabilityWarning: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#test_time_critical WebTest#test_time_critical}
  */
  readonly testTimeCritical: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#test_time_warning WebTest#test_time_warning}
  */
  readonly testTimeWarning: number;
}

export function webTestThresholdsToTerraform(struct?: WebTestThresholds | cdktf.IResolvable): any {
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


export function webTestThresholdsToHclTerraform(struct?: WebTestThresholds | cdktf.IResolvable): any {
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

export class WebTestThresholdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebTestThresholds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WebTestThresholds | cdktf.IResolvable | undefined) {
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

export class WebTestThresholdsList extends cdktf.ComplexList {
  public internalValue? : WebTestThresholds[] | cdktf.IResolvable

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
  public get(index: number): WebTestThresholdsOutputReference {
    return new WebTestThresholdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test web_test}
*/
export class WebTest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "web_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebTest to import
  * @param importFromId The id of the existing WebTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "web_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/web_test web_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebTestConfig
  */
  public constructor(scope: Construct, id: string, config: WebTestConfig) {
    super(scope, id, {
      terraformResourceType: 'web_test',
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
    this._chromeVersion = config.chromeVersion;
    this._divisionId = config.divisionId;
    this._enableTestDataWebhook = config.enableTestDataWebhook;
    this._endTime = config.endTime;
    this._folderId = config.folderId;
    this._gatewayAddressOrHost = config.gatewayAddressOrHost;
    this._id = config.id;
    this._monitor = config.monitor;
    this._productId = config.productId;
    this._simulate = config.simulate;
    this._startTime = config.startTime;
    this._status = config.status;
    this._testDescription = config.testDescription;
    this._testName = config.testName;
    this._testUrl = config.testUrl;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._alertSettings.internalValue = config.alertSettings;
    this._insights.internalValue = config.insights;
    this._label.internalValue = config.label;
    this._requestSettings.internalValue = config.requestSettings;
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

  // chrome_version - computed: true, optional: true, required: false
  private _chromeVersion?: string; 
  public get chromeVersion() {
    return this.getStringAttribute('chrome_version');
  }
  public set chromeVersion(value: string) {
    this._chromeVersion = value;
  }
  public resetChromeVersion() {
    this._chromeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chromeVersionInput() {
    return this._chromeVersion;
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

  // gateway_address_or_host - computed: true, optional: true, required: false
  private _gatewayAddressOrHost?: string; 
  public get gatewayAddressOrHost() {
    return this.getStringAttribute('gateway_address_or_host');
  }
  public set gatewayAddressOrHost(value: string) {
    this._gatewayAddressOrHost = value;
  }
  public resetGatewayAddressOrHost() {
    this._gatewayAddressOrHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressOrHostInput() {
    return this._gatewayAddressOrHost;
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

  // monitor - computed: false, optional: false, required: true
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
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

  // simulate - computed: true, optional: true, required: false
  private _simulate?: string; 
  public get simulate() {
    return this.getStringAttribute('simulate');
  }
  public set simulate(value: string) {
    this._simulate = value;
  }
  public resetSimulate() {
    this._simulate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simulateInput() {
    return this._simulate;
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

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new WebTestAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: WebTestAdvancedSettings) {
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
  private _alertSettings = new WebTestAlertSettingsOutputReference(this, "alert_settings");
  public get alertSettings() {
    return this._alertSettings;
  }
  public putAlertSettings(value: WebTestAlertSettings) {
    this._alertSettings.internalValue = value;
  }
  public resetAlertSettings() {
    this._alertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSettingsInput() {
    return this._alertSettings.internalValue;
  }

  // insights - computed: false, optional: true, required: false
  private _insights = new WebTestInsightsOutputReference(this, "insights");
  public get insights() {
    return this._insights;
  }
  public putInsights(value: WebTestInsights) {
    this._insights.internalValue = value;
  }
  public resetInsights() {
    this._insights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsInput() {
    return this._insights.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new WebTestLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: WebTestLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // request_settings - computed: false, optional: true, required: false
  private _requestSettings = new WebTestRequestSettingsOutputReference(this, "request_settings");
  public get requestSettings() {
    return this._requestSettings;
  }
  public putRequestSettings(value: WebTestRequestSettings) {
    this._requestSettings.internalValue = value;
  }
  public resetRequestSettings() {
    this._requestSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSettingsInput() {
    return this._requestSettings.internalValue;
  }

  // schedule_settings - computed: false, optional: true, required: false
  private _scheduleSettings = new WebTestScheduleSettingsOutputReference(this, "schedule_settings");
  public get scheduleSettings() {
    return this._scheduleSettings;
  }
  public putScheduleSettings(value: WebTestScheduleSettings) {
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
  private _thresholds = new WebTestThresholdsList(this, "thresholds", true);
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: WebTestThresholds[] | cdktf.IResolvable) {
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
      chrome_version: cdktf.stringToTerraform(this._chromeVersion),
      division_id: cdktf.numberToTerraform(this._divisionId),
      enable_test_data_webhook: cdktf.booleanToTerraform(this._enableTestDataWebhook),
      end_time: cdktf.stringToTerraform(this._endTime),
      folder_id: cdktf.numberToTerraform(this._folderId),
      gateway_address_or_host: cdktf.stringToTerraform(this._gatewayAddressOrHost),
      id: cdktf.stringToTerraform(this._id),
      monitor: cdktf.stringToTerraform(this._monitor),
      product_id: cdktf.numberToTerraform(this._productId),
      simulate: cdktf.stringToTerraform(this._simulate),
      start_time: cdktf.stringToTerraform(this._startTime),
      status: cdktf.stringToTerraform(this._status),
      test_description: cdktf.stringToTerraform(this._testDescription),
      test_name: cdktf.stringToTerraform(this._testName),
      test_url: cdktf.stringToTerraform(this._testUrl),
      advanced_settings: webTestAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      alert_settings: webTestAlertSettingsToTerraform(this._alertSettings.internalValue),
      insights: webTestInsightsToTerraform(this._insights.internalValue),
      label: cdktf.listMapper(webTestLabelToTerraform, true)(this._label.internalValue),
      request_settings: webTestRequestSettingsToTerraform(this._requestSettings.internalValue),
      schedule_settings: webTestScheduleSettingsToTerraform(this._scheduleSettings.internalValue),
      thresholds: cdktf.listMapper(webTestThresholdsToTerraform, true)(this._thresholds.internalValue),
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
      chrome_version: {
        value: cdktf.stringToHclTerraform(this._chromeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      division_id: {
        value: cdktf.numberToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      gateway_address_or_host: {
        value: cdktf.stringToHclTerraform(this._gatewayAddressOrHost),
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
      simulate: {
        value: cdktf.stringToHclTerraform(this._simulate),
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
      test_name: {
        value: cdktf.stringToHclTerraform(this._testName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_url: {
        value: cdktf.stringToHclTerraform(this._testUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_settings: {
        value: webTestAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebTestAdvancedSettingsList",
      },
      alert_settings: {
        value: webTestAlertSettingsToHclTerraform(this._alertSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebTestAlertSettingsList",
      },
      insights: {
        value: webTestInsightsToHclTerraform(this._insights.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebTestInsightsList",
      },
      label: {
        value: cdktf.listMapperHcl(webTestLabelToHclTerraform, true)(this._label.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebTestLabelList",
      },
      request_settings: {
        value: webTestRequestSettingsToHclTerraform(this._requestSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebTestRequestSettingsList",
      },
      schedule_settings: {
        value: webTestScheduleSettingsToHclTerraform(this._scheduleSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebTestScheduleSettingsList",
      },
      thresholds: {
        value: cdktf.listMapperHcl(webTestThresholdsToHclTerraform, true)(this._thresholds.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebTestThresholdsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
