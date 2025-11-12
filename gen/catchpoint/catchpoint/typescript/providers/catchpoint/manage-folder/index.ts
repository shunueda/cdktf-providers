// https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManageFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Division where the Folder will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#division_id ManageFolder#division_id}
  */
  readonly divisionId: number;
  /**
  * The name of the folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#folder_name ManageFolder#folder_name}
  */
  readonly folderName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#id ManageFolder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * the Parent Id  of folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#parent_id ManageFolder#parent_id}
  */
  readonly parentId?: number;
  /**
  * The Product  where the Folder will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#product_id ManageFolder#product_id}
  */
  readonly productId: number;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#advanced_settings ManageFolder#advanced_settings}
  */
  readonly advancedSettings?: ManageFolderAdvancedSettings;
  /**
  * alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#alert_settings ManageFolder#alert_settings}
  */
  readonly alertSettings?: ManageFolderAlertSettings;
  /**
  * insights block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#insights ManageFolder#insights}
  */
  readonly insights?: ManageFolderInsights;
  /**
  * request_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#request_settings ManageFolder#request_settings}
  */
  readonly requestSettings?: ManageFolderRequestSettings;
  /**
  * schedule_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#schedule_settings ManageFolder#schedule_settings}
  */
  readonly scheduleSettings?: ManageFolderScheduleSettings;
}
export interface ManageFolderAdvancedSettings {
  /**
  * Optional. Set the additional monitor to run along with the test monitor: 'ping icmp', 'ping tcp', 'ping udp','traceroute icmp','traceroute udp','traceroute tcp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#additional_monitor ManageFolder#additional_monitor}
  */
  readonly additionalMonitor?: string;
  /**
  * Optional. True enables test download limit override setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#allow_test_download_limit_override ManageFolder#allow_test_download_limit_override}
  */
  readonly allowTestDownloadLimitOverride?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set the bandwidth throttling for chrome: 'gprs','regular 2g','good 2g','regular 3g','good 3g','regular 4g','dsl','wifi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#bandwidth_throttling ManageFolder#bandwidth_throttling}
  */
  readonly bandwidthThrottling?: string;
  /**
  * Optional. True enables capture filmstrip setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#capture_filmstrip ManageFolder#capture_filmstrip}
  */
  readonly captureFilmstrip?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables capture http headers setting for all runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#capture_http_headers ManageFolder#capture_http_headers}
  */
  readonly captureHttpHeaders?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables capture response content setting for all runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#capture_response_content ManageFolder#capture_response_content}
  */
  readonly captureResponseContent?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables capture screenshot setting for all runs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#capture_screenshot ManageFolder#capture_screenshot}
  */
  readonly captureScreenshot?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables debug primary host on failure setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#debug_primary_host_on_failure ManageFolder#debug_primary_host_on_failure}
  */
  readonly debugPrimaryHostOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables debug referenced hosts on failure setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#debug_referenced_hosts_on_failure ManageFolder#debug_referenced_hosts_on_failure}
  */
  readonly debugReferencedHostsOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables disable cross origin iframe access setting for chrome monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#disable_cross_origin_iframe_access ManageFolder#disable_cross_origin_iframe_access}
  */
  readonly disableCrossOriginIframeAccess?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables enable http/2 setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#enable_http2 ManageFolder#enable_http2}
  */
  readonly enableHttp2?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables Path MTU Discovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#enable_path_mtu_discovery ManageFolder#enable_path_mtu_discovery}
  */
  readonly enablePathMtuDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables self versus third party zones setting and matches self zone by test URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#enable_self_versus_third_party_zones ManageFolder#enable_self_versus_third_party_zones}
  */
  readonly enableSelfVersusThirdPartyZones?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set the time value in seconds post which the test will be marked as failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#enforce_test_failure_if_runs_longer_than ManageFolder#enforce_test_failure_if_runs_longer_than}
  */
  readonly enforceTestFailureIfRunsLongerThan?: number;
  /**
  * Optional. True enables 40x or 50x error mark successful setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#f40x_or_50x_http_mark_successful ManageFolder#f40x_or_50x_http_mark_successful}
  */
  readonly f40XOr50XHttpMarkSuccessful?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables host data collection setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#host_data_collection_enabled ManageFolder#host_data_collection_enabled}
  */
  readonly hostDataCollectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables ignore SSL failures setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#ignore_ssl_failures ManageFolder#ignore_ssl_failures}
  */
  readonly ignoreSslFailures?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables stop test on document complete setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#stop_test_on_document_complete ManageFolder#stop_test_on_document_complete}
  */
  readonly stopTestOnDocumentComplete?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables stop test on DOM content load setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#stop_test_on_dom_content_load ManageFolder#stop_test_on_dom_content_load}
  */
  readonly stopTestOnDomContentLoad?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables 30x redirects do not follow setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#t30x_redirects_do_not_follow ManageFolder#t30x_redirects_do_not_follow}
  */
  readonly t30XRedirectsDoNotFollow?: boolean | cdktf.IResolvable;
  /**
  * Optional. True enables verify on test failure setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#verify_test_on_failure ManageFolder#verify_test_on_failure}
  */
  readonly verifyTestOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set the viewport height. Use with viewport_width attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#viewport_height ManageFolder#viewport_height}
  */
  readonly viewportHeight?: number;
  /**
  * Optional. Set the viewport width. Use with viewport_height attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#viewport_width ManageFolder#viewport_width}
  */
  readonly viewportWidth?: number;
  /**
  * Optional. Set the time value in ms to stop the test after no network activity on document complete. Use with stop_test_on_document_complete flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#wait_for_no_activity ManageFolder#wait_for_no_activity}
  */
  readonly waitForNoActivity?: number;
  /**
  * Optional. True enables zone data collection setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#zone_data_collection_enabled ManageFolder#zone_data_collection_enabled}
  */
  readonly zoneDataCollectionEnabled?: boolean | cdktf.IResolvable;
}

export function manageFolderAdvancedSettingsToTerraform(struct?: ManageFolderAdvancedSettingsOutputReference | ManageFolderAdvancedSettings): any {
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


export function manageFolderAdvancedSettingsToHclTerraform(struct?: ManageFolderAdvancedSettingsOutputReference | ManageFolderAdvancedSettings): any {
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

export class ManageFolderAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderAdvancedSettings | undefined {
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

  public set internalValue(value: ManageFolderAdvancedSettings | undefined) {
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
export interface ManageFolderAlertSettingsAlertRuleNotificationGroup {
  /**
  * Optional. List of contact groups to receive alert notifications. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#contact_groups ManageFolder#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Optional. Set to true to include critical alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#notify_on_critical ManageFolder#notify_on_critical}
  */
  readonly notifyOnCritical?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set to true to include improved alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#notify_on_improved ManageFolder#notify_on_improved}
  */
  readonly notifyOnImproved?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set to true to include warning alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#notify_on_warning ManageFolder#notify_on_warning}
  */
  readonly notifyOnWarning?: boolean | cdktf.IResolvable;
  /**
  * Optional. List of email addresses to receive alert notifications. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#recipient_email_ids ManageFolder#recipient_email_ids}
  */
  readonly recipientEmailIds?: string[];
  /**
  * Email subject for the alert notifications. Required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#subject ManageFolder#subject}
  */
  readonly subject: string;
}

export function manageFolderAlertSettingsAlertRuleNotificationGroupToTerraform(struct?: ManageFolderAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable): any {
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


export function manageFolderAlertSettingsAlertRuleNotificationGroupToHclTerraform(struct?: ManageFolderAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable): any {
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

export class ManageFolderAlertSettingsAlertRuleNotificationGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManageFolderAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManageFolderAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable | undefined) {
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

export class ManageFolderAlertSettingsAlertRuleNotificationGroupList extends cdktf.ComplexList {
  public internalValue? : ManageFolderAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable

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
  public get(index: number): ManageFolderAlertSettingsAlertRuleNotificationGroupOutputReference {
    return new ManageFolderAlertSettingsAlertRuleNotificationGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManageFolderAlertSettingsAlertRule {
  /**
  * Optional. Sets the sub alert type: 'dns', 'connect', 'send', 'wait', 'load', 'ttfb', 'content load', 'response', 'test time', 'dom load', 'test time with suspect', 'server response', 'document complete', 'redirect', 'test', 'content', '% downtime'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#alert_sub_type ManageFolder#alert_sub_type}
  */
  readonly alertSubType?: string;
  /**
  * Sets the alert type: 'test failure', 'timing', 'availability'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#alert_type ManageFolder#alert_type}
  */
  readonly alertType: string;
  /**
  * Optional. Sets the number of consecutive runs only if enable_consecutive field is true and node_threshold_type is node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#consecutive_number_of_runs ManageFolder#consecutive_number_of_runs}
  */
  readonly consecutiveNumberOfRuns?: number;
  /**
  * Optional. Sets alert critical reminder interval: 'none', '1 minute', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', 'daily'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#critical_reminder ManageFolder#critical_reminder}
  */
  readonly criticalReminder?: string;
  /**
  * Optional. Critical trigger value for 'specific value' and 'trailing value' trigger types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#critical_trigger ManageFolder#critical_trigger}
  */
  readonly criticalTrigger?: number;
  /**
  * Optional. Checks consecutive number of runs or nodes for triggering alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#enable_consecutive ManageFolder#enable_consecutive}
  */
  readonly enableConsecutive?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets enforce test failure property for an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#enforce_test_failure ManageFolder#enforce_test_failure}
  */
  readonly enforceTestFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets trigger expression for content match alert type 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#expression ManageFolder#expression}
  */
  readonly expression?: string;
  /**
  * Optional. Sets the historical interval for 'trailing value' trigger type: '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', '2 hours', '6 hours', '12 hours', '1 day', '1 week'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#historical_interval ManageFolder#historical_interval}
  */
  readonly historicalInterval?: string;
  /**
  * Sets the node threshold type for alert: 'runs', 'average across node' or 'node'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#node_threshold_type ManageFolder#node_threshold_type}
  */
  readonly nodeThresholdType: string;
  /**
  * Optional. Notification group type to alert. Supports only default contacts for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#notification_type ManageFolder#notification_type}
  */
  readonly notificationType?: string;
  /**
  * Optional. Sets the number of failed nodes the alert should trigger if node_threshold_type is 'average across nodes'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#number_of_failing_nodes ManageFolder#number_of_failing_nodes}
  */
  readonly numberOfFailingNodes?: number;
  /**
  * Optional. Omits scatterplot image from alert emails if set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#omit_scatterplot ManageFolder#omit_scatterplot}
  */
  readonly omitScatterplot?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets the operation type: 'not equals', 'greater than', 'greater than or equals', 'less than', 'less than or equals'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#operation_type ManageFolder#operation_type}
  */
  readonly operationType?: string;
  /**
  * Optional. Sets the statistical type for 'trailing value' trigger type. Supports only 'average' for now
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#statistical_type ManageFolder#statistical_type}
  */
  readonly statisticalType?: string;
  /**
  * Optional. Sets the alert time threshold: 'default', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', '2 hours', '6 hours', '12 hours'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#threshold_interval ManageFolder#threshold_interval}
  */
  readonly thresholdInterval?: string;
  /**
  * Optional. Sets the threshold for the number of runs or nodes the alert should trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#threshold_number_of_runs ManageFolder#threshold_number_of_runs}
  */
  readonly thresholdNumberOfRuns?: number;
  /**
  * Optional. Sets the threshold for the percentage of runs the alert should trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#threshold_percentage_of_runs ManageFolder#threshold_percentage_of_runs}
  */
  readonly thresholdPercentageOfRuns?: number;
  /**
  * Optional. Sets the trigger type: 'specific value', 'trailing value', 'trendshift'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#trigger_type ManageFolder#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * Optional. Set to true for using rolling window instead of schedule time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#use_rolling_window ManageFolder#use_rolling_window}
  */
  readonly useRollingWindow?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets alert warning reminder interval: 'none', '1 minute', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', 'daily'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#warning_reminder ManageFolder#warning_reminder}
  */
  readonly warningReminder?: string;
  /**
  * Optional. Warning trigger value for 'specific value' and 'trailing value' trigger types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#warning_trigger ManageFolder#warning_trigger}
  */
  readonly warningTrigger?: number;
  /**
  * notification_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#notification_group ManageFolder#notification_group}
  */
  readonly notificationGroup: ManageFolderAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable;
}

export function manageFolderAlertSettingsAlertRuleToTerraform(struct?: ManageFolderAlertSettingsAlertRule | cdktf.IResolvable): any {
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
    notification_group: cdktf.listMapper(manageFolderAlertSettingsAlertRuleNotificationGroupToTerraform, true)(struct!.notificationGroup),
  }
}


export function manageFolderAlertSettingsAlertRuleToHclTerraform(struct?: ManageFolderAlertSettingsAlertRule | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(manageFolderAlertSettingsAlertRuleNotificationGroupToHclTerraform, true)(struct!.notificationGroup),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderAlertSettingsAlertRuleNotificationGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManageFolderAlertSettingsAlertRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManageFolderAlertSettingsAlertRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManageFolderAlertSettingsAlertRule | cdktf.IResolvable | undefined) {
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
  private _notificationGroup = new ManageFolderAlertSettingsAlertRuleNotificationGroupList(this, "notification_group", true);
  public get notificationGroup() {
    return this._notificationGroup;
  }
  public putNotificationGroup(value: ManageFolderAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable) {
    this._notificationGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationGroupInput() {
    return this._notificationGroup.internalValue;
  }
}

export class ManageFolderAlertSettingsAlertRuleList extends cdktf.ComplexList {
  public internalValue? : ManageFolderAlertSettingsAlertRule[] | cdktf.IResolvable

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
  public get(index: number): ManageFolderAlertSettingsAlertRuleOutputReference {
    return new ManageFolderAlertSettingsAlertRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManageFolderAlertSettingsNotificationGroupContactGroups {
  /**
  * The unique ID of the contact group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#contact_group_id ManageFolder#contact_group_id}
  */
  readonly contactGroupId: number;
  /**
  * The name of the contact group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#contact_group_name ManageFolder#contact_group_name}
  */
  readonly contactGroupName: string;
}

export function manageFolderAlertSettingsNotificationGroupContactGroupsToTerraform(struct?: ManageFolderAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_group_id: cdktf.numberToTerraform(struct!.contactGroupId),
    contact_group_name: cdktf.stringToTerraform(struct!.contactGroupName),
  }
}


export function manageFolderAlertSettingsNotificationGroupContactGroupsToHclTerraform(struct?: ManageFolderAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable): any {
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

export class ManageFolderAlertSettingsNotificationGroupContactGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManageFolderAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ManageFolderAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable | undefined) {
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

export class ManageFolderAlertSettingsNotificationGroupContactGroupsList extends cdktf.ComplexList {
  public internalValue? : ManageFolderAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable

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
  public get(index: number): ManageFolderAlertSettingsNotificationGroupContactGroupsOutputReference {
    return new ManageFolderAlertSettingsNotificationGroupContactGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManageFolderAlertSettingsNotificationGroup {
  /**
  * Optional. Alert webhook ids for the webhook endpoints to associate with this alert setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#alert_webhook_ids ManageFolder#alert_webhook_ids}
  */
  readonly alertWebhookIds?: number[];
  /**
  * Optional. List of emails to alert. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#recipient_email_ids ManageFolder#recipient_email_ids}
  */
  readonly recipientEmailIds?: string[];
  /**
  * Email subject for the alert notifications. Required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#subject ManageFolder#subject}
  */
  readonly subject: string;
  /**
  * contact_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#contact_groups ManageFolder#contact_groups}
  */
  readonly contactGroups?: ManageFolderAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable;
}

export function manageFolderAlertSettingsNotificationGroupToTerraform(struct?: ManageFolderAlertSettingsNotificationGroupOutputReference | ManageFolderAlertSettingsNotificationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_webhook_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.alertWebhookIds),
    recipient_email_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipientEmailIds),
    subject: cdktf.stringToTerraform(struct!.subject),
    contact_groups: cdktf.listMapper(manageFolderAlertSettingsNotificationGroupContactGroupsToTerraform, true)(struct!.contactGroups),
  }
}


export function manageFolderAlertSettingsNotificationGroupToHclTerraform(struct?: ManageFolderAlertSettingsNotificationGroupOutputReference | ManageFolderAlertSettingsNotificationGroup): any {
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
      value: cdktf.listMapperHcl(manageFolderAlertSettingsNotificationGroupContactGroupsToHclTerraform, true)(struct!.contactGroups),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderAlertSettingsNotificationGroupContactGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManageFolderAlertSettingsNotificationGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderAlertSettingsNotificationGroup | undefined {
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

  public set internalValue(value: ManageFolderAlertSettingsNotificationGroup | undefined) {
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
  private _contactGroups = new ManageFolderAlertSettingsNotificationGroupContactGroupsList(this, "contact_groups", true);
  public get contactGroups() {
    return this._contactGroups;
  }
  public putContactGroups(value: ManageFolderAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable) {
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
export interface ManageFolderAlertSettings {
  /**
  * Specifies the type of alert setting: 'override','inherit & add'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#alert_setting_type ManageFolder#alert_setting_type}
  */
  readonly alertSettingType?: string;
  /**
  * alert_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#alert_rule ManageFolder#alert_rule}
  */
  readonly alertRule?: ManageFolderAlertSettingsAlertRule[] | cdktf.IResolvable;
  /**
  * notification_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#notification_group ManageFolder#notification_group}
  */
  readonly notificationGroup: ManageFolderAlertSettingsNotificationGroup;
}

export function manageFolderAlertSettingsToTerraform(struct?: ManageFolderAlertSettingsOutputReference | ManageFolderAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_setting_type: cdktf.stringToTerraform(struct!.alertSettingType),
    alert_rule: cdktf.listMapper(manageFolderAlertSettingsAlertRuleToTerraform, true)(struct!.alertRule),
    notification_group: manageFolderAlertSettingsNotificationGroupToTerraform(struct!.notificationGroup),
  }
}


export function manageFolderAlertSettingsToHclTerraform(struct?: ManageFolderAlertSettingsOutputReference | ManageFolderAlertSettings): any {
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
      value: cdktf.listMapperHcl(manageFolderAlertSettingsAlertRuleToHclTerraform, true)(struct!.alertRule),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderAlertSettingsAlertRuleList",
    },
    notification_group: {
      value: manageFolderAlertSettingsNotificationGroupToHclTerraform(struct!.notificationGroup),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderAlertSettingsNotificationGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManageFolderAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderAlertSettings | undefined {
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

  public set internalValue(value: ManageFolderAlertSettings | undefined) {
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
  private _alertRule = new ManageFolderAlertSettingsAlertRuleList(this, "alert_rule", true);
  public get alertRule() {
    return this._alertRule;
  }
  public putAlertRule(value: ManageFolderAlertSettingsAlertRule[] | cdktf.IResolvable) {
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
  private _notificationGroup = new ManageFolderAlertSettingsNotificationGroupOutputReference(this, "notification_group");
  public get notificationGroup() {
    return this._notificationGroup;
  }
  public putNotificationGroup(value: ManageFolderAlertSettingsNotificationGroup) {
    this._notificationGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationGroupInput() {
    return this._notificationGroup.internalValue;
  }
}
export interface ManageFolderInsights {
  /**
  * Optional. Indicator ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#indicator_ids ManageFolder#indicator_ids}
  */
  readonly indicatorIds?: number[];
  /**
  * Optional. Tracepoint ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#tracepoint_ids ManageFolder#tracepoint_ids}
  */
  readonly tracepointIds?: number[];
}

export function manageFolderInsightsToTerraform(struct?: ManageFolderInsightsOutputReference | ManageFolderInsights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indicator_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.indicatorIds),
    tracepoint_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.tracepointIds),
  }
}


export function manageFolderInsightsToHclTerraform(struct?: ManageFolderInsightsOutputReference | ManageFolderInsights): any {
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

export class ManageFolderInsightsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderInsights | undefined {
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

  public set internalValue(value: ManageFolderInsights | undefined) {
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
export interface ManageFolderRequestSettingsAuthentication {
  /**
  * Type of authentication to use 'basic', 'ntlm', 'digest', 'login'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#authentication_type ManageFolder#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * Optional. Password ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#password_ids ManageFolder#password_ids}
  */
  readonly passwordIds?: number[];
}

export function manageFolderRequestSettingsAuthenticationToTerraform(struct?: ManageFolderRequestSettingsAuthenticationOutputReference | ManageFolderRequestSettingsAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    password_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.passwordIds),
  }
}


export function manageFolderRequestSettingsAuthenticationToHclTerraform(struct?: ManageFolderRequestSettingsAuthenticationOutputReference | ManageFolderRequestSettingsAuthentication): any {
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

export class ManageFolderRequestSettingsAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsAuthentication | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsAuthentication | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersAccept {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersAcceptToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersAcceptOutputReference | ManageFolderRequestSettingsHttpRequestHeadersAccept): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersAcceptToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersAcceptOutputReference | ManageFolderRequestSettingsHttpRequestHeadersAccept): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersAcceptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersAccept | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersAccept | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersAcceptCharset {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersAcceptCharsetToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersAcceptCharsetOutputReference | ManageFolderRequestSettingsHttpRequestHeadersAcceptCharset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersAcceptCharsetToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersAcceptCharsetOutputReference | ManageFolderRequestSettingsHttpRequestHeadersAcceptCharset): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersAcceptCharsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersAcceptCharset | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersAcceptCharset | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersAcceptEncoding {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersAcceptEncodingToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersAcceptEncodingOutputReference | ManageFolderRequestSettingsHttpRequestHeadersAcceptEncoding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersAcceptEncodingToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersAcceptEncodingOutputReference | ManageFolderRequestSettingsHttpRequestHeadersAcceptEncoding): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersAcceptEncodingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersAcceptEncoding | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersAcceptEncoding | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersAcceptLanguageToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguageOutputReference | ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersAcceptLanguageToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguageOutputReference | ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguage): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguage | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguage | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersCacheControl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersCacheControlToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersCacheControlOutputReference | ManageFolderRequestSettingsHttpRequestHeadersCacheControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersCacheControlToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersCacheControlOutputReference | ManageFolderRequestSettingsHttpRequestHeadersCacheControl): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersCacheControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersCacheControl | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersCacheControl | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersConnectionToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersConnectionOutputReference | ManageFolderRequestSettingsHttpRequestHeadersConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersConnectionToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersConnectionOutputReference | ManageFolderRequestSettingsHttpRequestHeadersConnection): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersConnection | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersConnection | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersCookie {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersCookieToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersCookieOutputReference | ManageFolderRequestSettingsHttpRequestHeadersCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersCookieToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersCookieOutputReference | ManageFolderRequestSettingsHttpRequestHeadersCookie): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersCookie | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersCookie | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersCustom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#header_name ManageFolder#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersCustomToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersCustomOutputReference | ManageFolderRequestSettingsHttpRequestHeadersCustom): any {
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


export function manageFolderRequestSettingsHttpRequestHeadersCustomToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersCustomOutputReference | ManageFolderRequestSettingsHttpRequestHeadersCustom): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersCustom | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersCustom | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersDnsOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersDnsOverrideToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersDnsOverrideOutputReference | ManageFolderRequestSettingsHttpRequestHeadersDnsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersDnsOverrideToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersDnsOverrideOutputReference | ManageFolderRequestSettingsHttpRequestHeadersDnsOverride): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersDnsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersDnsOverride | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersDnsOverride | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersDnsResolverOverrideToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverrideOutputReference | ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersDnsResolverOverrideToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverrideOutputReference | ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverride): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverride | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverride | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersHost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersHostToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersHostOutputReference | ManageFolderRequestSettingsHttpRequestHeadersHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersHostToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersHostOutputReference | ManageFolderRequestSettingsHttpRequestHeadersHost): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersHost | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersHost | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersPragma {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersPragmaToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersPragmaOutputReference | ManageFolderRequestSettingsHttpRequestHeadersPragma): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersPragmaToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersPragmaOutputReference | ManageFolderRequestSettingsHttpRequestHeadersPragma): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersPragmaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersPragma | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersPragma | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersReferer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersRefererToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersRefererOutputReference | ManageFolderRequestSettingsHttpRequestHeadersReferer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersRefererToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersRefererOutputReference | ManageFolderRequestSettingsHttpRequestHeadersReferer): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersRefererOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersReferer | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersReferer | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersRequestBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value?: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersRequestBlockToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersRequestBlockOutputReference | ManageFolderRequestSettingsHttpRequestHeadersRequestBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersRequestBlockToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersRequestBlockOutputReference | ManageFolderRequestSettingsHttpRequestHeadersRequestBlock): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersRequestBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersRequestBlock | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersRequestBlock | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersRequestDelay {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersRequestDelayToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersRequestDelayOutputReference | ManageFolderRequestSettingsHttpRequestHeadersRequestDelay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersRequestDelayToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersRequestDelayOutputReference | ManageFolderRequestSettingsHttpRequestHeadersRequestDelay): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersRequestDelayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersRequestDelay | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersRequestDelay | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersRequestOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersRequestOverrideToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersRequestOverrideOutputReference | ManageFolderRequestSettingsHttpRequestHeadersRequestOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersRequestOverrideToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersRequestOverrideOutputReference | ManageFolderRequestSettingsHttpRequestHeadersRequestOverride): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersRequestOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersRequestOverride | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersRequestOverride | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersSniOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#header_name ManageFolder#header_name}
  */
  readonly headerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersSniOverrideToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersSniOverrideOutputReference | ManageFolderRequestSettingsHttpRequestHeadersSniOverride): any {
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


export function manageFolderRequestSettingsHttpRequestHeadersSniOverrideToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersSniOverrideOutputReference | ManageFolderRequestSettingsHttpRequestHeadersSniOverride): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersSniOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersSniOverride | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersSniOverride | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeadersUserAgent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#child_host_pattern ManageFolder#child_host_pattern}
  */
  readonly childHostPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#value ManageFolder#value}
  */
  readonly value: string;
}

export function manageFolderRequestSettingsHttpRequestHeadersUserAgentToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersUserAgentOutputReference | ManageFolderRequestSettingsHttpRequestHeadersUserAgent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    child_host_pattern: cdktf.stringToTerraform(struct!.childHostPattern),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersUserAgentToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersUserAgentOutputReference | ManageFolderRequestSettingsHttpRequestHeadersUserAgent): any {
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

export class ManageFolderRequestSettingsHttpRequestHeadersUserAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeadersUserAgent | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeadersUserAgent | undefined) {
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
export interface ManageFolderRequestSettingsHttpRequestHeaders {
  /**
  * accept block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#accept ManageFolder#accept}
  */
  readonly accept?: ManageFolderRequestSettingsHttpRequestHeadersAccept;
  /**
  * accept_charset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#accept_charset ManageFolder#accept_charset}
  */
  readonly acceptCharset?: ManageFolderRequestSettingsHttpRequestHeadersAcceptCharset;
  /**
  * accept_encoding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#accept_encoding ManageFolder#accept_encoding}
  */
  readonly acceptEncoding?: ManageFolderRequestSettingsHttpRequestHeadersAcceptEncoding;
  /**
  * accept_language block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#accept_language ManageFolder#accept_language}
  */
  readonly acceptLanguage?: ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguage;
  /**
  * cache_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#cache_control ManageFolder#cache_control}
  */
  readonly cacheControl?: ManageFolderRequestSettingsHttpRequestHeadersCacheControl;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#connection ManageFolder#connection}
  */
  readonly connection?: ManageFolderRequestSettingsHttpRequestHeadersConnection;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#cookie ManageFolder#cookie}
  */
  readonly cookie?: ManageFolderRequestSettingsHttpRequestHeadersCookie;
  /**
  * custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#custom ManageFolder#custom}
  */
  readonly custom?: ManageFolderRequestSettingsHttpRequestHeadersCustom;
  /**
  * dns_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#dns_override ManageFolder#dns_override}
  */
  readonly dnsOverride?: ManageFolderRequestSettingsHttpRequestHeadersDnsOverride;
  /**
  * dns_resolver_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#dns_resolver_override ManageFolder#dns_resolver_override}
  */
  readonly dnsResolverOverride?: ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverride;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#host ManageFolder#host}
  */
  readonly host?: ManageFolderRequestSettingsHttpRequestHeadersHost;
  /**
  * pragma block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#pragma ManageFolder#pragma}
  */
  readonly pragma?: ManageFolderRequestSettingsHttpRequestHeadersPragma;
  /**
  * referer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#referer ManageFolder#referer}
  */
  readonly referer?: ManageFolderRequestSettingsHttpRequestHeadersReferer;
  /**
  * request_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#request_block ManageFolder#request_block}
  */
  readonly requestBlock?: ManageFolderRequestSettingsHttpRequestHeadersRequestBlock;
  /**
  * request_delay block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#request_delay ManageFolder#request_delay}
  */
  readonly requestDelay?: ManageFolderRequestSettingsHttpRequestHeadersRequestDelay;
  /**
  * request_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#request_override ManageFolder#request_override}
  */
  readonly requestOverride?: ManageFolderRequestSettingsHttpRequestHeadersRequestOverride;
  /**
  * sni_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#sni_override ManageFolder#sni_override}
  */
  readonly sniOverride?: ManageFolderRequestSettingsHttpRequestHeadersSniOverride;
  /**
  * user_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#user_agent ManageFolder#user_agent}
  */
  readonly userAgent?: ManageFolderRequestSettingsHttpRequestHeadersUserAgent;
}

export function manageFolderRequestSettingsHttpRequestHeadersToTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersOutputReference | ManageFolderRequestSettingsHttpRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept: manageFolderRequestSettingsHttpRequestHeadersAcceptToTerraform(struct!.accept),
    accept_charset: manageFolderRequestSettingsHttpRequestHeadersAcceptCharsetToTerraform(struct!.acceptCharset),
    accept_encoding: manageFolderRequestSettingsHttpRequestHeadersAcceptEncodingToTerraform(struct!.acceptEncoding),
    accept_language: manageFolderRequestSettingsHttpRequestHeadersAcceptLanguageToTerraform(struct!.acceptLanguage),
    cache_control: manageFolderRequestSettingsHttpRequestHeadersCacheControlToTerraform(struct!.cacheControl),
    connection: manageFolderRequestSettingsHttpRequestHeadersConnectionToTerraform(struct!.connection),
    cookie: manageFolderRequestSettingsHttpRequestHeadersCookieToTerraform(struct!.cookie),
    custom: manageFolderRequestSettingsHttpRequestHeadersCustomToTerraform(struct!.custom),
    dns_override: manageFolderRequestSettingsHttpRequestHeadersDnsOverrideToTerraform(struct!.dnsOverride),
    dns_resolver_override: manageFolderRequestSettingsHttpRequestHeadersDnsResolverOverrideToTerraform(struct!.dnsResolverOverride),
    host: manageFolderRequestSettingsHttpRequestHeadersHostToTerraform(struct!.host),
    pragma: manageFolderRequestSettingsHttpRequestHeadersPragmaToTerraform(struct!.pragma),
    referer: manageFolderRequestSettingsHttpRequestHeadersRefererToTerraform(struct!.referer),
    request_block: manageFolderRequestSettingsHttpRequestHeadersRequestBlockToTerraform(struct!.requestBlock),
    request_delay: manageFolderRequestSettingsHttpRequestHeadersRequestDelayToTerraform(struct!.requestDelay),
    request_override: manageFolderRequestSettingsHttpRequestHeadersRequestOverrideToTerraform(struct!.requestOverride),
    sni_override: manageFolderRequestSettingsHttpRequestHeadersSniOverrideToTerraform(struct!.sniOverride),
    user_agent: manageFolderRequestSettingsHttpRequestHeadersUserAgentToTerraform(struct!.userAgent),
  }
}


export function manageFolderRequestSettingsHttpRequestHeadersToHclTerraform(struct?: ManageFolderRequestSettingsHttpRequestHeadersOutputReference | ManageFolderRequestSettingsHttpRequestHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept: {
      value: manageFolderRequestSettingsHttpRequestHeadersAcceptToHclTerraform(struct!.accept),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersAcceptList",
    },
    accept_charset: {
      value: manageFolderRequestSettingsHttpRequestHeadersAcceptCharsetToHclTerraform(struct!.acceptCharset),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersAcceptCharsetList",
    },
    accept_encoding: {
      value: manageFolderRequestSettingsHttpRequestHeadersAcceptEncodingToHclTerraform(struct!.acceptEncoding),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersAcceptEncodingList",
    },
    accept_language: {
      value: manageFolderRequestSettingsHttpRequestHeadersAcceptLanguageToHclTerraform(struct!.acceptLanguage),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguageList",
    },
    cache_control: {
      value: manageFolderRequestSettingsHttpRequestHeadersCacheControlToHclTerraform(struct!.cacheControl),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersCacheControlList",
    },
    connection: {
      value: manageFolderRequestSettingsHttpRequestHeadersConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersConnectionList",
    },
    cookie: {
      value: manageFolderRequestSettingsHttpRequestHeadersCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersCookieList",
    },
    custom: {
      value: manageFolderRequestSettingsHttpRequestHeadersCustomToHclTerraform(struct!.custom),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersCustomList",
    },
    dns_override: {
      value: manageFolderRequestSettingsHttpRequestHeadersDnsOverrideToHclTerraform(struct!.dnsOverride),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersDnsOverrideList",
    },
    dns_resolver_override: {
      value: manageFolderRequestSettingsHttpRequestHeadersDnsResolverOverrideToHclTerraform(struct!.dnsResolverOverride),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverrideList",
    },
    host: {
      value: manageFolderRequestSettingsHttpRequestHeadersHostToHclTerraform(struct!.host),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersHostList",
    },
    pragma: {
      value: manageFolderRequestSettingsHttpRequestHeadersPragmaToHclTerraform(struct!.pragma),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersPragmaList",
    },
    referer: {
      value: manageFolderRequestSettingsHttpRequestHeadersRefererToHclTerraform(struct!.referer),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersRefererList",
    },
    request_block: {
      value: manageFolderRequestSettingsHttpRequestHeadersRequestBlockToHclTerraform(struct!.requestBlock),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersRequestBlockList",
    },
    request_delay: {
      value: manageFolderRequestSettingsHttpRequestHeadersRequestDelayToHclTerraform(struct!.requestDelay),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersRequestDelayList",
    },
    request_override: {
      value: manageFolderRequestSettingsHttpRequestHeadersRequestOverrideToHclTerraform(struct!.requestOverride),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersRequestOverrideList",
    },
    sni_override: {
      value: manageFolderRequestSettingsHttpRequestHeadersSniOverrideToHclTerraform(struct!.sniOverride),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersSniOverrideList",
    },
    user_agent: {
      value: manageFolderRequestSettingsHttpRequestHeadersUserAgentToHclTerraform(struct!.userAgent),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersUserAgentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManageFolderRequestSettingsHttpRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettingsHttpRequestHeaders | undefined {
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

  public set internalValue(value: ManageFolderRequestSettingsHttpRequestHeaders | undefined) {
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
  private _accept = new ManageFolderRequestSettingsHttpRequestHeadersAcceptOutputReference(this, "accept");
  public get accept() {
    return this._accept;
  }
  public putAccept(value: ManageFolderRequestSettingsHttpRequestHeadersAccept) {
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
  private _acceptCharset = new ManageFolderRequestSettingsHttpRequestHeadersAcceptCharsetOutputReference(this, "accept_charset");
  public get acceptCharset() {
    return this._acceptCharset;
  }
  public putAcceptCharset(value: ManageFolderRequestSettingsHttpRequestHeadersAcceptCharset) {
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
  private _acceptEncoding = new ManageFolderRequestSettingsHttpRequestHeadersAcceptEncodingOutputReference(this, "accept_encoding");
  public get acceptEncoding() {
    return this._acceptEncoding;
  }
  public putAcceptEncoding(value: ManageFolderRequestSettingsHttpRequestHeadersAcceptEncoding) {
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
  private _acceptLanguage = new ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguageOutputReference(this, "accept_language");
  public get acceptLanguage() {
    return this._acceptLanguage;
  }
  public putAcceptLanguage(value: ManageFolderRequestSettingsHttpRequestHeadersAcceptLanguage) {
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
  private _cacheControl = new ManageFolderRequestSettingsHttpRequestHeadersCacheControlOutputReference(this, "cache_control");
  public get cacheControl() {
    return this._cacheControl;
  }
  public putCacheControl(value: ManageFolderRequestSettingsHttpRequestHeadersCacheControl) {
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
  private _connection = new ManageFolderRequestSettingsHttpRequestHeadersConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: ManageFolderRequestSettingsHttpRequestHeadersConnection) {
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
  private _cookie = new ManageFolderRequestSettingsHttpRequestHeadersCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: ManageFolderRequestSettingsHttpRequestHeadersCookie) {
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
  private _custom = new ManageFolderRequestSettingsHttpRequestHeadersCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: ManageFolderRequestSettingsHttpRequestHeadersCustom) {
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
  private _dnsOverride = new ManageFolderRequestSettingsHttpRequestHeadersDnsOverrideOutputReference(this, "dns_override");
  public get dnsOverride() {
    return this._dnsOverride;
  }
  public putDnsOverride(value: ManageFolderRequestSettingsHttpRequestHeadersDnsOverride) {
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
  private _dnsResolverOverride = new ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverrideOutputReference(this, "dns_resolver_override");
  public get dnsResolverOverride() {
    return this._dnsResolverOverride;
  }
  public putDnsResolverOverride(value: ManageFolderRequestSettingsHttpRequestHeadersDnsResolverOverride) {
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
  private _host = new ManageFolderRequestSettingsHttpRequestHeadersHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: ManageFolderRequestSettingsHttpRequestHeadersHost) {
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
  private _pragma = new ManageFolderRequestSettingsHttpRequestHeadersPragmaOutputReference(this, "pragma");
  public get pragma() {
    return this._pragma;
  }
  public putPragma(value: ManageFolderRequestSettingsHttpRequestHeadersPragma) {
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
  private _referer = new ManageFolderRequestSettingsHttpRequestHeadersRefererOutputReference(this, "referer");
  public get referer() {
    return this._referer;
  }
  public putReferer(value: ManageFolderRequestSettingsHttpRequestHeadersReferer) {
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
  private _requestBlock = new ManageFolderRequestSettingsHttpRequestHeadersRequestBlockOutputReference(this, "request_block");
  public get requestBlock() {
    return this._requestBlock;
  }
  public putRequestBlock(value: ManageFolderRequestSettingsHttpRequestHeadersRequestBlock) {
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
  private _requestDelay = new ManageFolderRequestSettingsHttpRequestHeadersRequestDelayOutputReference(this, "request_delay");
  public get requestDelay() {
    return this._requestDelay;
  }
  public putRequestDelay(value: ManageFolderRequestSettingsHttpRequestHeadersRequestDelay) {
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
  private _requestOverride = new ManageFolderRequestSettingsHttpRequestHeadersRequestOverrideOutputReference(this, "request_override");
  public get requestOverride() {
    return this._requestOverride;
  }
  public putRequestOverride(value: ManageFolderRequestSettingsHttpRequestHeadersRequestOverride) {
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
  private _sniOverride = new ManageFolderRequestSettingsHttpRequestHeadersSniOverrideOutputReference(this, "sni_override");
  public get sniOverride() {
    return this._sniOverride;
  }
  public putSniOverride(value: ManageFolderRequestSettingsHttpRequestHeadersSniOverride) {
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
  private _userAgent = new ManageFolderRequestSettingsHttpRequestHeadersUserAgentOutputReference(this, "user_agent");
  public get userAgent() {
    return this._userAgent;
  }
  public putUserAgent(value: ManageFolderRequestSettingsHttpRequestHeadersUserAgent) {
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
export interface ManageFolderRequestSettings {
  /**
  * Optional. Library certificate ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#library_certificate_ids ManageFolder#library_certificate_ids}
  */
  readonly libraryCertificateIds?: number[];
  /**
  * Optional. Token ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#token_ids ManageFolder#token_ids}
  */
  readonly tokenIds?: number[];
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#authentication ManageFolder#authentication}
  */
  readonly authentication?: ManageFolderRequestSettingsAuthentication;
  /**
  * http_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#http_request_headers ManageFolder#http_request_headers}
  */
  readonly httpRequestHeaders?: ManageFolderRequestSettingsHttpRequestHeaders;
}

export function manageFolderRequestSettingsToTerraform(struct?: ManageFolderRequestSettingsOutputReference | ManageFolderRequestSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    library_certificate_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.libraryCertificateIds),
    token_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.tokenIds),
    authentication: manageFolderRequestSettingsAuthenticationToTerraform(struct!.authentication),
    http_request_headers: manageFolderRequestSettingsHttpRequestHeadersToTerraform(struct!.httpRequestHeaders),
  }
}


export function manageFolderRequestSettingsToHclTerraform(struct?: ManageFolderRequestSettingsOutputReference | ManageFolderRequestSettings): any {
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
      value: manageFolderRequestSettingsAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsAuthenticationList",
    },
    http_request_headers: {
      value: manageFolderRequestSettingsHttpRequestHeadersToHclTerraform(struct!.httpRequestHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "ManageFolderRequestSettingsHttpRequestHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManageFolderRequestSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderRequestSettings | undefined {
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

  public set internalValue(value: ManageFolderRequestSettings | undefined) {
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
  private _authentication = new ManageFolderRequestSettingsAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: ManageFolderRequestSettingsAuthentication) {
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
  private _httpRequestHeaders = new ManageFolderRequestSettingsHttpRequestHeadersOutputReference(this, "http_request_headers");
  public get httpRequestHeaders() {
    return this._httpRequestHeaders;
  }
  public putHttpRequestHeaders(value: ManageFolderRequestSettingsHttpRequestHeaders) {
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
export interface ManageFolderScheduleSettings {
  /**
  * Sets the scheduling frequency: '1 minute', '5 minutes', '10 minutes', '15 minutes', '20 minutes', '30 minutes', '60 minutes', '2 hours', '3 hours', '4 hours', '6 hours', '8 hours', '12 hours', '24 hours', '4 minutes', '2 minutes'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#frequency ManageFolder#frequency}
  */
  readonly frequency?: string;
  /**
  * Optional. The maintenance schedule id to utilize for the folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#maintenance_schedule_id ManageFolder#maintenance_schedule_id}
  */
  readonly maintenanceScheduleId?: number;
  /**
  * Optional. Number of subset nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#no_of_subset_nodes ManageFolder#no_of_subset_nodes}
  */
  readonly noOfSubsetNodes?: number;
  /**
  * Node distribution type: 'random' or 'concurrent'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#node_distribution ManageFolder#node_distribution}
  */
  readonly nodeDistribution?: string;
  /**
  * Node group ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#node_group_ids ManageFolder#node_group_ids}
  */
  readonly nodeGroupIds: number[];
  /**
  * Node ids in a list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#node_ids ManageFolder#node_ids}
  */
  readonly nodeIds?: number[];
  /**
  * Optional. The run schedule id to utilize for the folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#run_schedule_id ManageFolder#run_schedule_id}
  */
  readonly runScheduleId?: number;
}

export function manageFolderScheduleSettingsToTerraform(struct?: ManageFolderScheduleSettingsOutputReference | ManageFolderScheduleSettings): any {
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


export function manageFolderScheduleSettingsToHclTerraform(struct?: ManageFolderScheduleSettingsOutputReference | ManageFolderScheduleSettings): any {
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

export class ManageFolderScheduleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManageFolderScheduleSettings | undefined {
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

  public set internalValue(value: ManageFolderScheduleSettings | undefined) {
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

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
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

  // node_distribution - computed: false, optional: true, required: false
  private _nodeDistribution?: string; 
  public get nodeDistribution() {
    return this.getStringAttribute('node_distribution');
  }
  public set nodeDistribution(value: string) {
    this._nodeDistribution = value;
  }
  public resetNodeDistribution() {
    this._nodeDistribution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDistributionInput() {
    return this._nodeDistribution;
  }

  // node_group_ids - computed: false, optional: false, required: true
  private _nodeGroupIds?: number[]; 
  public get nodeGroupIds() {
    return this.getNumberListAttribute('node_group_ids');
  }
  public set nodeGroupIds(value: number[]) {
    this._nodeGroupIds = value;
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

/**
* Represents a {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder manage_folder}
*/
export class ManageFolder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "manage_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManageFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManageFolder to import
  * @param importFromId The id of the existing ManageFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManageFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "manage_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/manage_folder manage_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManageFolderConfig
  */
  public constructor(scope: Construct, id: string, config: ManageFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'manage_folder',
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
    this._divisionId = config.divisionId;
    this._folderName = config.folderName;
    this._id = config.id;
    this._parentId = config.parentId;
    this._productId = config.productId;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._alertSettings.internalValue = config.alertSettings;
    this._insights.internalValue = config.insights;
    this._requestSettings.internalValue = config.requestSettings;
    this._scheduleSettings.internalValue = config.scheduleSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // folder_name - computed: false, optional: false, required: true
  private _folderName?: string; 
  public get folderName() {
    return this.getStringAttribute('folder_name');
  }
  public set folderName(value: string) {
    this._folderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderNameInput() {
    return this._folderName;
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

  // parent_id - computed: false, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
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

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new ManageFolderAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: ManageFolderAdvancedSettings) {
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
  private _alertSettings = new ManageFolderAlertSettingsOutputReference(this, "alert_settings");
  public get alertSettings() {
    return this._alertSettings;
  }
  public putAlertSettings(value: ManageFolderAlertSettings) {
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
  private _insights = new ManageFolderInsightsOutputReference(this, "insights");
  public get insights() {
    return this._insights;
  }
  public putInsights(value: ManageFolderInsights) {
    this._insights.internalValue = value;
  }
  public resetInsights() {
    this._insights.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsInput() {
    return this._insights.internalValue;
  }

  // request_settings - computed: false, optional: true, required: false
  private _requestSettings = new ManageFolderRequestSettingsOutputReference(this, "request_settings");
  public get requestSettings() {
    return this._requestSettings;
  }
  public putRequestSettings(value: ManageFolderRequestSettings) {
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
  private _scheduleSettings = new ManageFolderScheduleSettingsOutputReference(this, "schedule_settings");
  public get scheduleSettings() {
    return this._scheduleSettings;
  }
  public putScheduleSettings(value: ManageFolderScheduleSettings) {
    this._scheduleSettings.internalValue = value;
  }
  public resetScheduleSettings() {
    this._scheduleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleSettingsInput() {
    return this._scheduleSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      division_id: cdktf.numberToTerraform(this._divisionId),
      folder_name: cdktf.stringToTerraform(this._folderName),
      id: cdktf.stringToTerraform(this._id),
      parent_id: cdktf.numberToTerraform(this._parentId),
      product_id: cdktf.numberToTerraform(this._productId),
      advanced_settings: manageFolderAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      alert_settings: manageFolderAlertSettingsToTerraform(this._alertSettings.internalValue),
      insights: manageFolderInsightsToTerraform(this._insights.internalValue),
      request_settings: manageFolderRequestSettingsToTerraform(this._requestSettings.internalValue),
      schedule_settings: manageFolderScheduleSettingsToTerraform(this._scheduleSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      division_id: {
        value: cdktf.numberToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      folder_name: {
        value: cdktf.stringToHclTerraform(this._folderName),
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
      parent_id: {
        value: cdktf.numberToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      product_id: {
        value: cdktf.numberToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      advanced_settings: {
        value: manageFolderAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManageFolderAdvancedSettingsList",
      },
      alert_settings: {
        value: manageFolderAlertSettingsToHclTerraform(this._alertSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManageFolderAlertSettingsList",
      },
      insights: {
        value: manageFolderInsightsToHclTerraform(this._insights.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManageFolderInsightsList",
      },
      request_settings: {
        value: manageFolderRequestSettingsToHclTerraform(this._requestSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManageFolderRequestSettingsList",
      },
      schedule_settings: {
        value: manageFolderScheduleSettingsToHclTerraform(this._scheduleSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ManageFolderScheduleSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
