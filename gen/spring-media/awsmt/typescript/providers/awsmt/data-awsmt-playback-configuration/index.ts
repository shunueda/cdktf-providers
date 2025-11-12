// https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/data-sources/playback_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsmtPlaybackConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/data-sources/playback_configuration#name DataAwsmtPlaybackConfiguration#name}
  */
  readonly name: string;
}
export interface DataAwsmtPlaybackConfigurationAvailSuppression {
}

export function dataAwsmtPlaybackConfigurationAvailSuppressionToTerraform(struct?: DataAwsmtPlaybackConfigurationAvailSuppression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsmtPlaybackConfigurationAvailSuppressionToHclTerraform(struct?: DataAwsmtPlaybackConfigurationAvailSuppression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsmtPlaybackConfigurationAvailSuppressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsmtPlaybackConfigurationAvailSuppression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsmtPlaybackConfigurationAvailSuppression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fill_policy - computed: true, optional: false, required: false
  public get fillPolicy() {
    return this.getStringAttribute('fill_policy');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataAwsmtPlaybackConfigurationBumper {
}

export function dataAwsmtPlaybackConfigurationBumperToTerraform(struct?: DataAwsmtPlaybackConfigurationBumper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsmtPlaybackConfigurationBumperToHclTerraform(struct?: DataAwsmtPlaybackConfigurationBumper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsmtPlaybackConfigurationBumperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsmtPlaybackConfigurationBumper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsmtPlaybackConfigurationBumper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_url - computed: true, optional: false, required: false
  public get endUrl() {
    return this.getStringAttribute('end_url');
  }

  // start_url - computed: true, optional: false, required: false
  public get startUrl() {
    return this.getStringAttribute('start_url');
  }
}
export interface DataAwsmtPlaybackConfigurationCdnConfiguration {
}

export function dataAwsmtPlaybackConfigurationCdnConfigurationToTerraform(struct?: DataAwsmtPlaybackConfigurationCdnConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsmtPlaybackConfigurationCdnConfigurationToHclTerraform(struct?: DataAwsmtPlaybackConfigurationCdnConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsmtPlaybackConfigurationCdnConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsmtPlaybackConfigurationCdnConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsmtPlaybackConfigurationCdnConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_segment_url_prefix - computed: true, optional: false, required: false
  public get adSegmentUrlPrefix() {
    return this.getStringAttribute('ad_segment_url_prefix');
  }

  // content_segment_url_prefix - computed: true, optional: false, required: false
  public get contentSegmentUrlPrefix() {
    return this.getStringAttribute('content_segment_url_prefix');
  }
}
export interface DataAwsmtPlaybackConfigurationDashConfiguration {
}

export function dataAwsmtPlaybackConfigurationDashConfigurationToTerraform(struct?: DataAwsmtPlaybackConfigurationDashConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsmtPlaybackConfigurationDashConfigurationToHclTerraform(struct?: DataAwsmtPlaybackConfigurationDashConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsmtPlaybackConfigurationDashConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsmtPlaybackConfigurationDashConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsmtPlaybackConfigurationDashConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manifest_endpoint_prefix - computed: true, optional: false, required: false
  public get manifestEndpointPrefix() {
    return this.getStringAttribute('manifest_endpoint_prefix');
  }

  // mpd_location - computed: true, optional: false, required: false
  public get mpdLocation() {
    return this.getStringAttribute('mpd_location');
  }

  // origin_manifest_type - computed: true, optional: false, required: false
  public get originManifestType() {
    return this.getStringAttribute('origin_manifest_type');
  }
}
export interface DataAwsmtPlaybackConfigurationLivePreRollConfiguration {
}

export function dataAwsmtPlaybackConfigurationLivePreRollConfigurationToTerraform(struct?: DataAwsmtPlaybackConfigurationLivePreRollConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsmtPlaybackConfigurationLivePreRollConfigurationToHclTerraform(struct?: DataAwsmtPlaybackConfigurationLivePreRollConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsmtPlaybackConfigurationLivePreRollConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsmtPlaybackConfigurationLivePreRollConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsmtPlaybackConfigurationLivePreRollConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_decision_server_url - computed: true, optional: false, required: false
  public get adDecisionServerUrl() {
    return this.getStringAttribute('ad_decision_server_url');
  }

  // max_duration_seconds - computed: true, optional: false, required: false
  public get maxDurationSeconds() {
    return this.getNumberAttribute('max_duration_seconds');
  }
}
export interface DataAwsmtPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough {
}

export function dataAwsmtPlaybackConfigurationManifestProcessingRulesAdMarkerPassthroughToTerraform(struct?: DataAwsmtPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsmtPlaybackConfigurationManifestProcessingRulesAdMarkerPassthroughToHclTerraform(struct?: DataAwsmtPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsmtPlaybackConfigurationManifestProcessingRulesAdMarkerPassthroughOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsmtPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsmtPlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataAwsmtPlaybackConfigurationManifestProcessingRules {
}

export function dataAwsmtPlaybackConfigurationManifestProcessingRulesToTerraform(struct?: DataAwsmtPlaybackConfigurationManifestProcessingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsmtPlaybackConfigurationManifestProcessingRulesToHclTerraform(struct?: DataAwsmtPlaybackConfigurationManifestProcessingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsmtPlaybackConfigurationManifestProcessingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsmtPlaybackConfigurationManifestProcessingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsmtPlaybackConfigurationManifestProcessingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_marker_passthrough - computed: true, optional: false, required: false
  private _adMarkerPassthrough = new DataAwsmtPlaybackConfigurationManifestProcessingRulesAdMarkerPassthroughOutputReference(this, "ad_marker_passthrough");
  public get adMarkerPassthrough() {
    return this._adMarkerPassthrough;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/data-sources/playback_configuration awsmt_playback_configuration}
*/
export class DataAwsmtPlaybackConfiguration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsmt_playback_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsmtPlaybackConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsmtPlaybackConfiguration to import
  * @param importFromId The id of the existing DataAwsmtPlaybackConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/data-sources/playback_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsmtPlaybackConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsmt_playback_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/data-sources/playback_configuration awsmt_playback_configuration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsmtPlaybackConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsmtPlaybackConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'awsmt_playback_configuration',
      terraformGeneratorMetadata: {
        providerName: 'awsmt',
        providerVersion: '2.5.1',
        providerVersionConstraint: '2.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_decision_server_url - computed: true, optional: false, required: false
  public get adDecisionServerUrl() {
    return this.getStringAttribute('ad_decision_server_url');
  }

  // avail_suppression - computed: true, optional: false, required: false
  private _availSuppression = new DataAwsmtPlaybackConfigurationAvailSuppressionOutputReference(this, "avail_suppression");
  public get availSuppression() {
    return this._availSuppression;
  }

  // bumper - computed: true, optional: false, required: false
  private _bumper = new DataAwsmtPlaybackConfigurationBumperOutputReference(this, "bumper");
  public get bumper() {
    return this._bumper;
  }

  // cdn_configuration - computed: true, optional: false, required: false
  private _cdnConfiguration = new DataAwsmtPlaybackConfigurationCdnConfigurationOutputReference(this, "cdn_configuration");
  public get cdnConfiguration() {
    return this._cdnConfiguration;
  }

  // configuration_aliases - computed: true, optional: false, required: false
  private _configurationAliases = new cdktf.StringMapMap(this, "configuration_aliases");
  public get configurationAliases() {
    return this._configurationAliases;
  }

  // dash_configuration - computed: true, optional: false, required: false
  private _dashConfiguration = new DataAwsmtPlaybackConfigurationDashConfigurationOutputReference(this, "dash_configuration");
  public get dashConfiguration() {
    return this._dashConfiguration;
  }

  // hls_configuration_manifest_endpoint_prefix - computed: true, optional: false, required: false
  public get hlsConfigurationManifestEndpointPrefix() {
    return this.getStringAttribute('hls_configuration_manifest_endpoint_prefix');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // live_pre_roll_configuration - computed: true, optional: false, required: false
  private _livePreRollConfiguration = new DataAwsmtPlaybackConfigurationLivePreRollConfigurationOutputReference(this, "live_pre_roll_configuration");
  public get livePreRollConfiguration() {
    return this._livePreRollConfiguration;
  }

  // log_configuration_enabled_logging_strategies - computed: true, optional: false, required: false
  public get logConfigurationEnabledLoggingStrategies() {
    return this.getListAttribute('log_configuration_enabled_logging_strategies');
  }

  // log_configuration_percent_enabled - computed: true, optional: false, required: false
  public get logConfigurationPercentEnabled() {
    return this.getNumberAttribute('log_configuration_percent_enabled');
  }

  // manifest_processing_rules - computed: true, optional: false, required: false
  private _manifestProcessingRules = new DataAwsmtPlaybackConfigurationManifestProcessingRulesOutputReference(this, "manifest_processing_rules");
  public get manifestProcessingRules() {
    return this._manifestProcessingRules;
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

  // personalization_threshold_seconds - computed: true, optional: false, required: false
  public get personalizationThresholdSeconds() {
    return this.getNumberAttribute('personalization_threshold_seconds');
  }

  // playback_configuration_arn - computed: true, optional: false, required: false
  public get playbackConfigurationArn() {
    return this.getStringAttribute('playback_configuration_arn');
  }

  // playback_endpoint_prefix - computed: true, optional: false, required: false
  public get playbackEndpointPrefix() {
    return this.getStringAttribute('playback_endpoint_prefix');
  }

  // session_initialization_endpoint_prefix - computed: true, optional: false, required: false
  public get sessionInitializationEndpointPrefix() {
    return this.getStringAttribute('session_initialization_endpoint_prefix');
  }

  // slate_ad_url - computed: true, optional: false, required: false
  public get slateAdUrl() {
    return this.getStringAttribute('slate_ad_url');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // transcode_profile_name - computed: true, optional: false, required: false
  public get transcodeProfileName() {
    return this.getStringAttribute('transcode_profile_name');
  }

  // video_content_source_url - computed: true, optional: false, required: false
  public get videoContentSourceUrl() {
    return this.getStringAttribute('video_content_source_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
