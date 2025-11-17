// https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WaapDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#id WaapDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#name WaapDomain#name}
  */
  readonly name: string;
  /**
  * Status of the domain. It must be one of these values {active, monitor}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#status WaapDomain#status}
  */
  readonly status?: string;
  /**
  * api_discovery_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#api_discovery_settings WaapDomain#api_discovery_settings}
  */
  readonly apiDiscoverySettings?: WaapDomainApiDiscoverySettings;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#settings WaapDomain#settings}
  */
  readonly settings?: WaapDomainSettings;
}
export interface WaapDomainApiDiscoverySettings {
  /**
  * The URL of the API description file. This will be periodically scanned if `description_file_scan_enabled` is enabled. Supported formats are YAML and JSON, and it must adhere to OpenAPI versions 2, 3, or 3.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#description_file_location WaapDomain#description_file_location}
  */
  readonly descriptionFileLocation: string;
  /**
  * Indicates if periodic scan of the description file is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#description_file_scan_enabled WaapDomain#description_file_scan_enabled}
  */
  readonly descriptionFileScanEnabled?: boolean | cdktf.IResolvable;
  /**
  * The interval in hours for scanning the description file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#description_file_scan_interval_hours WaapDomain#description_file_scan_interval_hours}
  */
  readonly descriptionFileScanIntervalHours?: number;
  /**
  * Indicates if traffic scan is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#traffic_scan_enabled WaapDomain#traffic_scan_enabled}
  */
  readonly trafficScanEnabled?: boolean | cdktf.IResolvable;
  /**
  * The interval in hours for scanning the traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#traffic_scan_interval_hours WaapDomain#traffic_scan_interval_hours}
  */
  readonly trafficScanIntervalHours?: number;
}

export function waapDomainApiDiscoverySettingsToTerraform(struct?: WaapDomainApiDiscoverySettingsOutputReference | WaapDomainApiDiscoverySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description_file_location: cdktf.stringToTerraform(struct!.descriptionFileLocation),
    description_file_scan_enabled: cdktf.booleanToTerraform(struct!.descriptionFileScanEnabled),
    description_file_scan_interval_hours: cdktf.numberToTerraform(struct!.descriptionFileScanIntervalHours),
    traffic_scan_enabled: cdktf.booleanToTerraform(struct!.trafficScanEnabled),
    traffic_scan_interval_hours: cdktf.numberToTerraform(struct!.trafficScanIntervalHours),
  }
}


export function waapDomainApiDiscoverySettingsToHclTerraform(struct?: WaapDomainApiDiscoverySettingsOutputReference | WaapDomainApiDiscoverySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description_file_location: {
      value: cdktf.stringToHclTerraform(struct!.descriptionFileLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_file_scan_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.descriptionFileScanEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description_file_scan_interval_hours: {
      value: cdktf.numberToHclTerraform(struct!.descriptionFileScanIntervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_scan_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.trafficScanEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    traffic_scan_interval_hours: {
      value: cdktf.numberToHclTerraform(struct!.trafficScanIntervalHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapDomainApiDiscoverySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapDomainApiDiscoverySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._descriptionFileLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionFileLocation = this._descriptionFileLocation;
    }
    if (this._descriptionFileScanEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionFileScanEnabled = this._descriptionFileScanEnabled;
    }
    if (this._descriptionFileScanIntervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionFileScanIntervalHours = this._descriptionFileScanIntervalHours;
    }
    if (this._trafficScanEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficScanEnabled = this._trafficScanEnabled;
    }
    if (this._trafficScanIntervalHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficScanIntervalHours = this._trafficScanIntervalHours;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapDomainApiDiscoverySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._descriptionFileLocation = undefined;
      this._descriptionFileScanEnabled = undefined;
      this._descriptionFileScanIntervalHours = undefined;
      this._trafficScanEnabled = undefined;
      this._trafficScanIntervalHours = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._descriptionFileLocation = value.descriptionFileLocation;
      this._descriptionFileScanEnabled = value.descriptionFileScanEnabled;
      this._descriptionFileScanIntervalHours = value.descriptionFileScanIntervalHours;
      this._trafficScanEnabled = value.trafficScanEnabled;
      this._trafficScanIntervalHours = value.trafficScanIntervalHours;
    }
  }

  // description_file_location - computed: false, optional: false, required: true
  private _descriptionFileLocation?: string; 
  public get descriptionFileLocation() {
    return this.getStringAttribute('description_file_location');
  }
  public set descriptionFileLocation(value: string) {
    this._descriptionFileLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionFileLocationInput() {
    return this._descriptionFileLocation;
  }

  // description_file_scan_enabled - computed: true, optional: true, required: false
  private _descriptionFileScanEnabled?: boolean | cdktf.IResolvable; 
  public get descriptionFileScanEnabled() {
    return this.getBooleanAttribute('description_file_scan_enabled');
  }
  public set descriptionFileScanEnabled(value: boolean | cdktf.IResolvable) {
    this._descriptionFileScanEnabled = value;
  }
  public resetDescriptionFileScanEnabled() {
    this._descriptionFileScanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionFileScanEnabledInput() {
    return this._descriptionFileScanEnabled;
  }

  // description_file_scan_interval_hours - computed: true, optional: true, required: false
  private _descriptionFileScanIntervalHours?: number; 
  public get descriptionFileScanIntervalHours() {
    return this.getNumberAttribute('description_file_scan_interval_hours');
  }
  public set descriptionFileScanIntervalHours(value: number) {
    this._descriptionFileScanIntervalHours = value;
  }
  public resetDescriptionFileScanIntervalHours() {
    this._descriptionFileScanIntervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionFileScanIntervalHoursInput() {
    return this._descriptionFileScanIntervalHours;
  }

  // traffic_scan_enabled - computed: true, optional: true, required: false
  private _trafficScanEnabled?: boolean | cdktf.IResolvable; 
  public get trafficScanEnabled() {
    return this.getBooleanAttribute('traffic_scan_enabled');
  }
  public set trafficScanEnabled(value: boolean | cdktf.IResolvable) {
    this._trafficScanEnabled = value;
  }
  public resetTrafficScanEnabled() {
    this._trafficScanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficScanEnabledInput() {
    return this._trafficScanEnabled;
  }

  // traffic_scan_interval_hours - computed: true, optional: true, required: false
  private _trafficScanIntervalHours?: number; 
  public get trafficScanIntervalHours() {
    return this.getNumberAttribute('traffic_scan_interval_hours');
  }
  public set trafficScanIntervalHours(value: number) {
    this._trafficScanIntervalHours = value;
  }
  public resetTrafficScanIntervalHours() {
    this._trafficScanIntervalHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficScanIntervalHoursInput() {
    return this._trafficScanIntervalHours;
  }
}
export interface WaapDomainSettingsApi {
  /**
  * List of API URL patterns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#api_urls WaapDomain#api_urls}
  */
  readonly apiUrls?: string[];
  /**
  * Indicates if the domain is an API domain. All requests to an API domain are treated as API requests. If this is set to true then the api_urls field is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#is_api WaapDomain#is_api}
  */
  readonly isApi?: boolean | cdktf.IResolvable;
}

export function waapDomainSettingsApiToTerraform(struct?: WaapDomainSettingsApiOutputReference | WaapDomainSettingsApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiUrls),
    is_api: cdktf.booleanToTerraform(struct!.isApi),
  }
}


export function waapDomainSettingsApiToHclTerraform(struct?: WaapDomainSettingsApiOutputReference | WaapDomainSettingsApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    is_api: {
      value: cdktf.booleanToHclTerraform(struct!.isApi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapDomainSettingsApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapDomainSettingsApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUrls = this._apiUrls;
    }
    if (this._isApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.isApi = this._isApi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapDomainSettingsApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiUrls = undefined;
      this._isApi = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiUrls = value.apiUrls;
      this._isApi = value.isApi;
    }
  }

  // api_urls - computed: false, optional: true, required: false
  private _apiUrls?: string[]; 
  public get apiUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('api_urls'));
  }
  public set apiUrls(value: string[]) {
    this._apiUrls = value;
  }
  public resetApiUrls() {
    this._apiUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlsInput() {
    return this._apiUrls;
  }

  // is_api - computed: false, optional: true, required: false
  private _isApi?: boolean | cdktf.IResolvable; 
  public get isApi() {
    return this.getBooleanAttribute('is_api');
  }
  public set isApi(value: boolean | cdktf.IResolvable) {
    this._isApi = value;
  }
  public resetIsApi() {
    this._isApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isApiInput() {
    return this._isApi;
  }
}
export interface WaapDomainSettingsDdos {
  /**
  * Burst threshold for DDoS protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#burst_threshold WaapDomain#burst_threshold}
  */
  readonly burstThreshold?: number;
  /**
  * Global threshold for DDoS protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#global_threshold WaapDomain#global_threshold}
  */
  readonly globalThreshold?: number;
}

export function waapDomainSettingsDdosToTerraform(struct?: WaapDomainSettingsDdosOutputReference | WaapDomainSettingsDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_threshold: cdktf.numberToTerraform(struct!.burstThreshold),
    global_threshold: cdktf.numberToTerraform(struct!.globalThreshold),
  }
}


export function waapDomainSettingsDdosToHclTerraform(struct?: WaapDomainSettingsDdosOutputReference | WaapDomainSettingsDdos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_threshold: {
      value: cdktf.numberToHclTerraform(struct!.burstThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    global_threshold: {
      value: cdktf.numberToHclTerraform(struct!.globalThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapDomainSettingsDdosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapDomainSettingsDdos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstThreshold = this._burstThreshold;
    }
    if (this._globalThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalThreshold = this._globalThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapDomainSettingsDdos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burstThreshold = undefined;
      this._globalThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burstThreshold = value.burstThreshold;
      this._globalThreshold = value.globalThreshold;
    }
  }

  // burst_threshold - computed: true, optional: true, required: false
  private _burstThreshold?: number; 
  public get burstThreshold() {
    return this.getNumberAttribute('burst_threshold');
  }
  public set burstThreshold(value: number) {
    this._burstThreshold = value;
  }
  public resetBurstThreshold() {
    this._burstThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstThresholdInput() {
    return this._burstThreshold;
  }

  // global_threshold - computed: true, optional: true, required: false
  private _globalThreshold?: number; 
  public get globalThreshold() {
    return this.getNumberAttribute('global_threshold');
  }
  public set globalThreshold(value: number) {
    this._globalThreshold = value;
  }
  public resetGlobalThreshold() {
    this._globalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalThresholdInput() {
    return this._globalThreshold;
  }
}
export interface WaapDomainSettings {
  /**
  * api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#api WaapDomain#api}
  */
  readonly api?: WaapDomainSettingsApi;
  /**
  * ddos block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#ddos WaapDomain#ddos}
  */
  readonly ddos?: WaapDomainSettingsDdos;
}

export function waapDomainSettingsToTerraform(struct?: WaapDomainSettingsOutputReference | WaapDomainSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api: waapDomainSettingsApiToTerraform(struct!.api),
    ddos: waapDomainSettingsDdosToTerraform(struct!.ddos),
  }
}


export function waapDomainSettingsToHclTerraform(struct?: WaapDomainSettingsOutputReference | WaapDomainSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api: {
      value: waapDomainSettingsApiToHclTerraform(struct!.api),
      isBlock: true,
      type: "list",
      storageClassType: "WaapDomainSettingsApiList",
    },
    ddos: {
      value: waapDomainSettingsDdosToHclTerraform(struct!.ddos),
      isBlock: true,
      type: "list",
      storageClassType: "WaapDomainSettingsDdosList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WaapDomainSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WaapDomainSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._api?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api?.internalValue;
    }
    if (this._ddos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddos = this._ddos?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WaapDomainSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._api.internalValue = undefined;
      this._ddos.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._api.internalValue = value.api;
      this._ddos.internalValue = value.ddos;
    }
  }

  // api - computed: false, optional: true, required: false
  private _api = new WaapDomainSettingsApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }
  public putApi(value: WaapDomainSettingsApi) {
    this._api.internalValue = value;
  }
  public resetApi() {
    this._api.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api.internalValue;
  }

  // ddos - computed: false, optional: true, required: false
  private _ddos = new WaapDomainSettingsDdosOutputReference(this, "ddos");
  public get ddos() {
    return this._ddos;
  }
  public putDdos(value: WaapDomainSettingsDdos) {
    this._ddos.internalValue = value;
  }
  public resetDdos() {
    this._ddos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosInput() {
    return this._ddos.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain gcore_waap_domain}
*/
export class WaapDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_waap_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WaapDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WaapDomain to import
  * @param importFromId The id of the existing WaapDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WaapDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_waap_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/resources/waap_domain gcore_waap_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WaapDomainConfig
  */
  public constructor(scope: Construct, id: string, config: WaapDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_waap_domain',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.4',
        providerVersionConstraint: '0.31.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._status = config.status;
    this._apiDiscoverySettings.internalValue = config.apiDiscoverySettings;
    this._settings.internalValue = config.settings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // api_discovery_settings - computed: false, optional: true, required: false
  private _apiDiscoverySettings = new WaapDomainApiDiscoverySettingsOutputReference(this, "api_discovery_settings");
  public get apiDiscoverySettings() {
    return this._apiDiscoverySettings;
  }
  public putApiDiscoverySettings(value: WaapDomainApiDiscoverySettings) {
    this._apiDiscoverySettings.internalValue = value;
  }
  public resetApiDiscoverySettings() {
    this._apiDiscoverySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDiscoverySettingsInput() {
    return this._apiDiscoverySettings.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new WaapDomainSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: WaapDomainSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
      api_discovery_settings: waapDomainApiDiscoverySettingsToTerraform(this._apiDiscoverySettings.internalValue),
      settings: waapDomainSettingsToTerraform(this._settings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_discovery_settings: {
        value: waapDomainApiDiscoverySettingsToHclTerraform(this._apiDiscoverySettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapDomainApiDiscoverySettingsList",
      },
      settings: {
        value: waapDomainSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WaapDomainSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
