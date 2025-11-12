// https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlaybackConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#ad_decision_server_url PlaybackConfiguration#ad_decision_server_url}
  */
  readonly adDecisionServerUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#avail_suppression PlaybackConfiguration#avail_suppression}
  */
  readonly availSuppression?: PlaybackConfigurationAvailSuppression;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#bumper PlaybackConfiguration#bumper}
  */
  readonly bumper?: PlaybackConfigurationBumper;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#cdn_configuration PlaybackConfiguration#cdn_configuration}
  */
  readonly cdnConfiguration?: PlaybackConfigurationCdnConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#configuration_aliases PlaybackConfiguration#configuration_aliases}
  */
  readonly configurationAliases?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#dash_configuration PlaybackConfiguration#dash_configuration}
  */
  readonly dashConfiguration?: PlaybackConfigurationDashConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#live_pre_roll_configuration PlaybackConfiguration#live_pre_roll_configuration}
  */
  readonly livePreRollConfiguration?: PlaybackConfigurationLivePreRollConfiguration;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#log_configuration_enabled_logging_strategies PlaybackConfiguration#log_configuration_enabled_logging_strategies}
  */
  readonly logConfigurationEnabledLoggingStrategies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#log_configuration_percent_enabled PlaybackConfiguration#log_configuration_percent_enabled}
  */
  readonly logConfigurationPercentEnabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#manifest_processing_rules PlaybackConfiguration#manifest_processing_rules}
  */
  readonly manifestProcessingRules?: PlaybackConfigurationManifestProcessingRules;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#name PlaybackConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#personalization_threshold_seconds PlaybackConfiguration#personalization_threshold_seconds}
  */
  readonly personalizationThresholdSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#slate_ad_url PlaybackConfiguration#slate_ad_url}
  */
  readonly slateAdUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#tags PlaybackConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#transcode_profile_name PlaybackConfiguration#transcode_profile_name}
  */
  readonly transcodeProfileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#video_content_source_url PlaybackConfiguration#video_content_source_url}
  */
  readonly videoContentSourceUrl: string;
}
export interface PlaybackConfigurationAvailSuppression {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#fill_policy PlaybackConfiguration#fill_policy}
  */
  readonly fillPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#mode PlaybackConfiguration#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#value PlaybackConfiguration#value}
  */
  readonly value?: string;
}

export function playbackConfigurationAvailSuppressionToTerraform(struct?: PlaybackConfigurationAvailSuppression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fill_policy: cdktf.stringToTerraform(struct!.fillPolicy),
    mode: cdktf.stringToTerraform(struct!.mode),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function playbackConfigurationAvailSuppressionToHclTerraform(struct?: PlaybackConfigurationAvailSuppression | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fill_policy: {
      value: cdktf.stringToHclTerraform(struct!.fillPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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

export class PlaybackConfigurationAvailSuppressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlaybackConfigurationAvailSuppression | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fillPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fillPolicy = this._fillPolicy;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaybackConfigurationAvailSuppression | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fillPolicy = undefined;
      this._mode = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fillPolicy = value.fillPolicy;
      this._mode = value.mode;
      this._value = value.value;
    }
  }

  // fill_policy - computed: false, optional: true, required: false
  private _fillPolicy?: string; 
  public get fillPolicy() {
    return this.getStringAttribute('fill_policy');
  }
  public set fillPolicy(value: string) {
    this._fillPolicy = value;
  }
  public resetFillPolicy() {
    this._fillPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillPolicyInput() {
    return this._fillPolicy;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
export interface PlaybackConfigurationBumper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#end_url PlaybackConfiguration#end_url}
  */
  readonly endUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#start_url PlaybackConfiguration#start_url}
  */
  readonly startUrl?: string;
}

export function playbackConfigurationBumperToTerraform(struct?: PlaybackConfigurationBumper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_url: cdktf.stringToTerraform(struct!.endUrl),
    start_url: cdktf.stringToTerraform(struct!.startUrl),
  }
}


export function playbackConfigurationBumperToHclTerraform(struct?: PlaybackConfigurationBumper | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_url: {
      value: cdktf.stringToHclTerraform(struct!.endUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_url: {
      value: cdktf.stringToHclTerraform(struct!.startUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaybackConfigurationBumperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlaybackConfigurationBumper | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endUrl = this._endUrl;
    }
    if (this._startUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.startUrl = this._startUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaybackConfigurationBumper | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endUrl = undefined;
      this._startUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endUrl = value.endUrl;
      this._startUrl = value.startUrl;
    }
  }

  // end_url - computed: false, optional: true, required: false
  private _endUrl?: string; 
  public get endUrl() {
    return this.getStringAttribute('end_url');
  }
  public set endUrl(value: string) {
    this._endUrl = value;
  }
  public resetEndUrl() {
    this._endUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUrlInput() {
    return this._endUrl;
  }

  // start_url - computed: false, optional: true, required: false
  private _startUrl?: string; 
  public get startUrl() {
    return this.getStringAttribute('start_url');
  }
  public set startUrl(value: string) {
    this._startUrl = value;
  }
  public resetStartUrl() {
    this._startUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startUrlInput() {
    return this._startUrl;
  }
}
export interface PlaybackConfigurationCdnConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#ad_segment_url_prefix PlaybackConfiguration#ad_segment_url_prefix}
  */
  readonly adSegmentUrlPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#content_segment_url_prefix PlaybackConfiguration#content_segment_url_prefix}
  */
  readonly contentSegmentUrlPrefix?: string;
}

export function playbackConfigurationCdnConfigurationToTerraform(struct?: PlaybackConfigurationCdnConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_segment_url_prefix: cdktf.stringToTerraform(struct!.adSegmentUrlPrefix),
    content_segment_url_prefix: cdktf.stringToTerraform(struct!.contentSegmentUrlPrefix),
  }
}


export function playbackConfigurationCdnConfigurationToHclTerraform(struct?: PlaybackConfigurationCdnConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_segment_url_prefix: {
      value: cdktf.stringToHclTerraform(struct!.adSegmentUrlPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_segment_url_prefix: {
      value: cdktf.stringToHclTerraform(struct!.contentSegmentUrlPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaybackConfigurationCdnConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlaybackConfigurationCdnConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adSegmentUrlPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.adSegmentUrlPrefix = this._adSegmentUrlPrefix;
    }
    if (this._contentSegmentUrlPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSegmentUrlPrefix = this._contentSegmentUrlPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaybackConfigurationCdnConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adSegmentUrlPrefix = undefined;
      this._contentSegmentUrlPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adSegmentUrlPrefix = value.adSegmentUrlPrefix;
      this._contentSegmentUrlPrefix = value.contentSegmentUrlPrefix;
    }
  }

  // ad_segment_url_prefix - computed: false, optional: true, required: false
  private _adSegmentUrlPrefix?: string; 
  public get adSegmentUrlPrefix() {
    return this.getStringAttribute('ad_segment_url_prefix');
  }
  public set adSegmentUrlPrefix(value: string) {
    this._adSegmentUrlPrefix = value;
  }
  public resetAdSegmentUrlPrefix() {
    this._adSegmentUrlPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adSegmentUrlPrefixInput() {
    return this._adSegmentUrlPrefix;
  }

  // content_segment_url_prefix - computed: false, optional: true, required: false
  private _contentSegmentUrlPrefix?: string; 
  public get contentSegmentUrlPrefix() {
    return this.getStringAttribute('content_segment_url_prefix');
  }
  public set contentSegmentUrlPrefix(value: string) {
    this._contentSegmentUrlPrefix = value;
  }
  public resetContentSegmentUrlPrefix() {
    this._contentSegmentUrlPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSegmentUrlPrefixInput() {
    return this._contentSegmentUrlPrefix;
  }
}
export interface PlaybackConfigurationDashConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#mpd_location PlaybackConfiguration#mpd_location}
  */
  readonly mpdLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#origin_manifest_type PlaybackConfiguration#origin_manifest_type}
  */
  readonly originManifestType?: string;
}

export function playbackConfigurationDashConfigurationToTerraform(struct?: PlaybackConfigurationDashConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mpd_location: cdktf.stringToTerraform(struct!.mpdLocation),
    origin_manifest_type: cdktf.stringToTerraform(struct!.originManifestType),
  }
}


export function playbackConfigurationDashConfigurationToHclTerraform(struct?: PlaybackConfigurationDashConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mpd_location: {
      value: cdktf.stringToHclTerraform(struct!.mpdLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_manifest_type: {
      value: cdktf.stringToHclTerraform(struct!.originManifestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaybackConfigurationDashConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlaybackConfigurationDashConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mpdLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mpdLocation = this._mpdLocation;
    }
    if (this._originManifestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originManifestType = this._originManifestType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaybackConfigurationDashConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mpdLocation = undefined;
      this._originManifestType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mpdLocation = value.mpdLocation;
      this._originManifestType = value.originManifestType;
    }
  }

  // manifest_endpoint_prefix - computed: true, optional: false, required: false
  public get manifestEndpointPrefix() {
    return this.getStringAttribute('manifest_endpoint_prefix');
  }

  // mpd_location - computed: false, optional: true, required: false
  private _mpdLocation?: string; 
  public get mpdLocation() {
    return this.getStringAttribute('mpd_location');
  }
  public set mpdLocation(value: string) {
    this._mpdLocation = value;
  }
  public resetMpdLocation() {
    this._mpdLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mpdLocationInput() {
    return this._mpdLocation;
  }

  // origin_manifest_type - computed: false, optional: true, required: false
  private _originManifestType?: string; 
  public get originManifestType() {
    return this.getStringAttribute('origin_manifest_type');
  }
  public set originManifestType(value: string) {
    this._originManifestType = value;
  }
  public resetOriginManifestType() {
    this._originManifestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originManifestTypeInput() {
    return this._originManifestType;
  }
}
export interface PlaybackConfigurationLivePreRollConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#ad_decision_server_url PlaybackConfiguration#ad_decision_server_url}
  */
  readonly adDecisionServerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#max_duration_seconds PlaybackConfiguration#max_duration_seconds}
  */
  readonly maxDurationSeconds?: number;
}

export function playbackConfigurationLivePreRollConfigurationToTerraform(struct?: PlaybackConfigurationLivePreRollConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_decision_server_url: cdktf.stringToTerraform(struct!.adDecisionServerUrl),
    max_duration_seconds: cdktf.numberToTerraform(struct!.maxDurationSeconds),
  }
}


export function playbackConfigurationLivePreRollConfigurationToHclTerraform(struct?: PlaybackConfigurationLivePreRollConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_decision_server_url: {
      value: cdktf.stringToHclTerraform(struct!.adDecisionServerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_duration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxDurationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaybackConfigurationLivePreRollConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlaybackConfigurationLivePreRollConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adDecisionServerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.adDecisionServerUrl = this._adDecisionServerUrl;
    }
    if (this._maxDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDurationSeconds = this._maxDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaybackConfigurationLivePreRollConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adDecisionServerUrl = undefined;
      this._maxDurationSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adDecisionServerUrl = value.adDecisionServerUrl;
      this._maxDurationSeconds = value.maxDurationSeconds;
    }
  }

  // ad_decision_server_url - computed: false, optional: true, required: false
  private _adDecisionServerUrl?: string; 
  public get adDecisionServerUrl() {
    return this.getStringAttribute('ad_decision_server_url');
  }
  public set adDecisionServerUrl(value: string) {
    this._adDecisionServerUrl = value;
  }
  public resetAdDecisionServerUrl() {
    this._adDecisionServerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adDecisionServerUrlInput() {
    return this._adDecisionServerUrl;
  }

  // max_duration_seconds - computed: false, optional: true, required: false
  private _maxDurationSeconds?: number; 
  public get maxDurationSeconds() {
    return this.getNumberAttribute('max_duration_seconds');
  }
  public set maxDurationSeconds(value: number) {
    this._maxDurationSeconds = value;
  }
  public resetMaxDurationSeconds() {
    this._maxDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationSecondsInput() {
    return this._maxDurationSeconds;
  }
}
export interface PlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#enabled PlaybackConfiguration#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function playbackConfigurationManifestProcessingRulesAdMarkerPassthroughToTerraform(struct?: PlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function playbackConfigurationManifestProcessingRulesAdMarkerPassthroughToHclTerraform(struct?: PlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaybackConfigurationManifestProcessingRulesAdMarkerPassthroughOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface PlaybackConfigurationManifestProcessingRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#ad_marker_passthrough PlaybackConfiguration#ad_marker_passthrough}
  */
  readonly adMarkerPassthrough?: PlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough;
}

export function playbackConfigurationManifestProcessingRulesToTerraform(struct?: PlaybackConfigurationManifestProcessingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_marker_passthrough: playbackConfigurationManifestProcessingRulesAdMarkerPassthroughToTerraform(struct!.adMarkerPassthrough),
  }
}


export function playbackConfigurationManifestProcessingRulesToHclTerraform(struct?: PlaybackConfigurationManifestProcessingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_marker_passthrough: {
      value: playbackConfigurationManifestProcessingRulesAdMarkerPassthroughToHclTerraform(struct!.adMarkerPassthrough),
      isBlock: true,
      type: "struct",
      storageClassType: "PlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlaybackConfigurationManifestProcessingRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlaybackConfigurationManifestProcessingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adMarkerPassthrough?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adMarkerPassthrough = this._adMarkerPassthrough?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlaybackConfigurationManifestProcessingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adMarkerPassthrough.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adMarkerPassthrough.internalValue = value.adMarkerPassthrough;
    }
  }

  // ad_marker_passthrough - computed: false, optional: true, required: false
  private _adMarkerPassthrough = new PlaybackConfigurationManifestProcessingRulesAdMarkerPassthroughOutputReference(this, "ad_marker_passthrough");
  public get adMarkerPassthrough() {
    return this._adMarkerPassthrough;
  }
  public putAdMarkerPassthrough(value: PlaybackConfigurationManifestProcessingRulesAdMarkerPassthrough) {
    this._adMarkerPassthrough.internalValue = value;
  }
  public resetAdMarkerPassthrough() {
    this._adMarkerPassthrough.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adMarkerPassthroughInput() {
    return this._adMarkerPassthrough.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration awsmt_playback_configuration}
*/
export class PlaybackConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsmt_playback_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlaybackConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlaybackConfiguration to import
  * @param importFromId The id of the existing PlaybackConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlaybackConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsmt_playback_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/playback_configuration awsmt_playback_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlaybackConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: PlaybackConfigurationConfig) {
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
    this._adDecisionServerUrl = config.adDecisionServerUrl;
    this._availSuppression.internalValue = config.availSuppression;
    this._bumper.internalValue = config.bumper;
    this._cdnConfiguration.internalValue = config.cdnConfiguration;
    this._configurationAliases = config.configurationAliases;
    this._dashConfiguration.internalValue = config.dashConfiguration;
    this._livePreRollConfiguration.internalValue = config.livePreRollConfiguration;
    this._logConfigurationEnabledLoggingStrategies = config.logConfigurationEnabledLoggingStrategies;
    this._logConfigurationPercentEnabled = config.logConfigurationPercentEnabled;
    this._manifestProcessingRules.internalValue = config.manifestProcessingRules;
    this._name = config.name;
    this._personalizationThresholdSeconds = config.personalizationThresholdSeconds;
    this._slateAdUrl = config.slateAdUrl;
    this._tags = config.tags;
    this._transcodeProfileName = config.transcodeProfileName;
    this._videoContentSourceUrl = config.videoContentSourceUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ad_decision_server_url - computed: false, optional: false, required: true
  private _adDecisionServerUrl?: string; 
  public get adDecisionServerUrl() {
    return this.getStringAttribute('ad_decision_server_url');
  }
  public set adDecisionServerUrl(value: string) {
    this._adDecisionServerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adDecisionServerUrlInput() {
    return this._adDecisionServerUrl;
  }

  // avail_suppression - computed: false, optional: true, required: false
  private _availSuppression = new PlaybackConfigurationAvailSuppressionOutputReference(this, "avail_suppression");
  public get availSuppression() {
    return this._availSuppression;
  }
  public putAvailSuppression(value: PlaybackConfigurationAvailSuppression) {
    this._availSuppression.internalValue = value;
  }
  public resetAvailSuppression() {
    this._availSuppression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availSuppressionInput() {
    return this._availSuppression.internalValue;
  }

  // bumper - computed: false, optional: true, required: false
  private _bumper = new PlaybackConfigurationBumperOutputReference(this, "bumper");
  public get bumper() {
    return this._bumper;
  }
  public putBumper(value: PlaybackConfigurationBumper) {
    this._bumper.internalValue = value;
  }
  public resetBumper() {
    this._bumper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bumperInput() {
    return this._bumper.internalValue;
  }

  // cdn_configuration - computed: false, optional: true, required: false
  private _cdnConfiguration = new PlaybackConfigurationCdnConfigurationOutputReference(this, "cdn_configuration");
  public get cdnConfiguration() {
    return this._cdnConfiguration;
  }
  public putCdnConfiguration(value: PlaybackConfigurationCdnConfiguration) {
    this._cdnConfiguration.internalValue = value;
  }
  public resetCdnConfiguration() {
    this._cdnConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnConfigurationInput() {
    return this._cdnConfiguration.internalValue;
  }

  // configuration_aliases - computed: false, optional: true, required: false
  private _configurationAliases?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get configurationAliases() {
    return this.interpolationForAttribute('configuration_aliases');
  }
  public set configurationAliases(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._configurationAliases = value;
  }
  public resetConfigurationAliases() {
    this._configurationAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationAliasesInput() {
    return this._configurationAliases;
  }

  // dash_configuration - computed: false, optional: true, required: false
  private _dashConfiguration = new PlaybackConfigurationDashConfigurationOutputReference(this, "dash_configuration");
  public get dashConfiguration() {
    return this._dashConfiguration;
  }
  public putDashConfiguration(value: PlaybackConfigurationDashConfiguration) {
    this._dashConfiguration.internalValue = value;
  }
  public resetDashConfiguration() {
    this._dashConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashConfigurationInput() {
    return this._dashConfiguration.internalValue;
  }

  // hls_configuration_manifest_endpoint_prefix - computed: true, optional: false, required: false
  public get hlsConfigurationManifestEndpointPrefix() {
    return this.getStringAttribute('hls_configuration_manifest_endpoint_prefix');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // live_pre_roll_configuration - computed: false, optional: true, required: false
  private _livePreRollConfiguration = new PlaybackConfigurationLivePreRollConfigurationOutputReference(this, "live_pre_roll_configuration");
  public get livePreRollConfiguration() {
    return this._livePreRollConfiguration;
  }
  public putLivePreRollConfiguration(value: PlaybackConfigurationLivePreRollConfiguration) {
    this._livePreRollConfiguration.internalValue = value;
  }
  public resetLivePreRollConfiguration() {
    this._livePreRollConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livePreRollConfigurationInput() {
    return this._livePreRollConfiguration.internalValue;
  }

  // log_configuration_enabled_logging_strategies - computed: true, optional: true, required: false
  private _logConfigurationEnabledLoggingStrategies?: string[]; 
  public get logConfigurationEnabledLoggingStrategies() {
    return this.getListAttribute('log_configuration_enabled_logging_strategies');
  }
  public set logConfigurationEnabledLoggingStrategies(value: string[]) {
    this._logConfigurationEnabledLoggingStrategies = value;
  }
  public resetLogConfigurationEnabledLoggingStrategies() {
    this._logConfigurationEnabledLoggingStrategies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationEnabledLoggingStrategiesInput() {
    return this._logConfigurationEnabledLoggingStrategies;
  }

  // log_configuration_percent_enabled - computed: false, optional: true, required: false
  private _logConfigurationPercentEnabled?: number; 
  public get logConfigurationPercentEnabled() {
    return this.getNumberAttribute('log_configuration_percent_enabled');
  }
  public set logConfigurationPercentEnabled(value: number) {
    this._logConfigurationPercentEnabled = value;
  }
  public resetLogConfigurationPercentEnabled() {
    this._logConfigurationPercentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationPercentEnabledInput() {
    return this._logConfigurationPercentEnabled;
  }

  // manifest_processing_rules - computed: false, optional: true, required: false
  private _manifestProcessingRules = new PlaybackConfigurationManifestProcessingRulesOutputReference(this, "manifest_processing_rules");
  public get manifestProcessingRules() {
    return this._manifestProcessingRules;
  }
  public putManifestProcessingRules(value: PlaybackConfigurationManifestProcessingRules) {
    this._manifestProcessingRules.internalValue = value;
  }
  public resetManifestProcessingRules() {
    this._manifestProcessingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestProcessingRulesInput() {
    return this._manifestProcessingRules.internalValue;
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

  // personalization_threshold_seconds - computed: false, optional: true, required: false
  private _personalizationThresholdSeconds?: number; 
  public get personalizationThresholdSeconds() {
    return this.getNumberAttribute('personalization_threshold_seconds');
  }
  public set personalizationThresholdSeconds(value: number) {
    this._personalizationThresholdSeconds = value;
  }
  public resetPersonalizationThresholdSeconds() {
    this._personalizationThresholdSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalizationThresholdSecondsInput() {
    return this._personalizationThresholdSeconds;
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

  // slate_ad_url - computed: false, optional: true, required: false
  private _slateAdUrl?: string; 
  public get slateAdUrl() {
    return this.getStringAttribute('slate_ad_url');
  }
  public set slateAdUrl(value: string) {
    this._slateAdUrl = value;
  }
  public resetSlateAdUrl() {
    this._slateAdUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slateAdUrlInput() {
    return this._slateAdUrl;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // transcode_profile_name - computed: false, optional: true, required: false
  private _transcodeProfileName?: string; 
  public get transcodeProfileName() {
    return this.getStringAttribute('transcode_profile_name');
  }
  public set transcodeProfileName(value: string) {
    this._transcodeProfileName = value;
  }
  public resetTranscodeProfileName() {
    this._transcodeProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transcodeProfileNameInput() {
    return this._transcodeProfileName;
  }

  // video_content_source_url - computed: false, optional: false, required: true
  private _videoContentSourceUrl?: string; 
  public get videoContentSourceUrl() {
    return this.getStringAttribute('video_content_source_url');
  }
  public set videoContentSourceUrl(value: string) {
    this._videoContentSourceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get videoContentSourceUrlInput() {
    return this._videoContentSourceUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ad_decision_server_url: cdktf.stringToTerraform(this._adDecisionServerUrl),
      avail_suppression: playbackConfigurationAvailSuppressionToTerraform(this._availSuppression.internalValue),
      bumper: playbackConfigurationBumperToTerraform(this._bumper.internalValue),
      cdn_configuration: playbackConfigurationCdnConfigurationToTerraform(this._cdnConfiguration.internalValue),
      configuration_aliases: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(this._configurationAliases),
      dash_configuration: playbackConfigurationDashConfigurationToTerraform(this._dashConfiguration.internalValue),
      live_pre_roll_configuration: playbackConfigurationLivePreRollConfigurationToTerraform(this._livePreRollConfiguration.internalValue),
      log_configuration_enabled_logging_strategies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._logConfigurationEnabledLoggingStrategies),
      log_configuration_percent_enabled: cdktf.numberToTerraform(this._logConfigurationPercentEnabled),
      manifest_processing_rules: playbackConfigurationManifestProcessingRulesToTerraform(this._manifestProcessingRules.internalValue),
      name: cdktf.stringToTerraform(this._name),
      personalization_threshold_seconds: cdktf.numberToTerraform(this._personalizationThresholdSeconds),
      slate_ad_url: cdktf.stringToTerraform(this._slateAdUrl),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      transcode_profile_name: cdktf.stringToTerraform(this._transcodeProfileName),
      video_content_source_url: cdktf.stringToTerraform(this._videoContentSourceUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ad_decision_server_url: {
        value: cdktf.stringToHclTerraform(this._adDecisionServerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      avail_suppression: {
        value: playbackConfigurationAvailSuppressionToHclTerraform(this._availSuppression.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlaybackConfigurationAvailSuppression",
      },
      bumper: {
        value: playbackConfigurationBumperToHclTerraform(this._bumper.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlaybackConfigurationBumper",
      },
      cdn_configuration: {
        value: playbackConfigurationCdnConfigurationToHclTerraform(this._cdnConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlaybackConfigurationCdnConfiguration",
      },
      configuration_aliases: {
        value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(this._configurationAliases),
        isBlock: false,
        type: "map",
        storageClassType: "stringMapMap",
      },
      dash_configuration: {
        value: playbackConfigurationDashConfigurationToHclTerraform(this._dashConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlaybackConfigurationDashConfiguration",
      },
      live_pre_roll_configuration: {
        value: playbackConfigurationLivePreRollConfigurationToHclTerraform(this._livePreRollConfiguration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlaybackConfigurationLivePreRollConfiguration",
      },
      log_configuration_enabled_logging_strategies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._logConfigurationEnabledLoggingStrategies),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      log_configuration_percent_enabled: {
        value: cdktf.numberToHclTerraform(this._logConfigurationPercentEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      manifest_processing_rules: {
        value: playbackConfigurationManifestProcessingRulesToHclTerraform(this._manifestProcessingRules.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlaybackConfigurationManifestProcessingRules",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      personalization_threshold_seconds: {
        value: cdktf.numberToHclTerraform(this._personalizationThresholdSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slate_ad_url: {
        value: cdktf.stringToHclTerraform(this._slateAdUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      transcode_profile_name: {
        value: cdktf.stringToHclTerraform(this._transcodeProfileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      video_content_source_url: {
        value: cdktf.stringToHclTerraform(this._videoContentSourceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
