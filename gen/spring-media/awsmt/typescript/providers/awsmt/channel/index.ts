// https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#channel_state Channel#channel_state}
  */
  readonly channelState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#enable_as_run_logs Channel#enable_as_run_logs}
  */
  readonly enableAsRunLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#filler_slate Channel#filler_slate}
  */
  readonly fillerSlate?: ChannelFillerSlate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#name Channel#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#outputs Channel#outputs}
  */
  readonly outputs: ChannelOutputs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#playback_mode Channel#playback_mode}
  */
  readonly playbackMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#policy Channel#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#tags Channel#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#tier Channel#tier}
  */
  readonly tier?: string;
}
export interface ChannelFillerSlate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#source_location_name Channel#source_location_name}
  */
  readonly sourceLocationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#vod_source_name Channel#vod_source_name}
  */
  readonly vodSourceName?: string;
}

export function channelFillerSlateToTerraform(struct?: ChannelFillerSlate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_location_name: cdktf.stringToTerraform(struct!.sourceLocationName),
    vod_source_name: cdktf.stringToTerraform(struct!.vodSourceName),
  }
}


export function channelFillerSlateToHclTerraform(struct?: ChannelFillerSlate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_location_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceLocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vod_source_name: {
      value: cdktf.stringToHclTerraform(struct!.vodSourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChannelFillerSlateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChannelFillerSlate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceLocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLocationName = this._sourceLocationName;
    }
    if (this._vodSourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vodSourceName = this._vodSourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChannelFillerSlate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sourceLocationName = undefined;
      this._vodSourceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sourceLocationName = value.sourceLocationName;
      this._vodSourceName = value.vodSourceName;
    }
  }

  // source_location_name - computed: false, optional: true, required: false
  private _sourceLocationName?: string; 
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }
  public set sourceLocationName(value: string) {
    this._sourceLocationName = value;
  }
  public resetSourceLocationName() {
    this._sourceLocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationNameInput() {
    return this._sourceLocationName;
  }

  // vod_source_name - computed: false, optional: true, required: false
  private _vodSourceName?: string; 
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
  }
  public set vodSourceName(value: string) {
    this._vodSourceName = value;
  }
  public resetVodSourceName() {
    this._vodSourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vodSourceNameInput() {
    return this._vodSourceName;
  }
}
export interface ChannelOutputsDashPlaylistSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#manifest_window_seconds Channel#manifest_window_seconds}
  */
  readonly manifestWindowSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#min_buffer_time_seconds Channel#min_buffer_time_seconds}
  */
  readonly minBufferTimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#min_update_period_seconds Channel#min_update_period_seconds}
  */
  readonly minUpdatePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#suggested_presentation_delay_seconds Channel#suggested_presentation_delay_seconds}
  */
  readonly suggestedPresentationDelaySeconds?: number;
}

export function channelOutputsDashPlaylistSettingsToTerraform(struct?: ChannelOutputsDashPlaylistSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manifest_window_seconds: cdktf.numberToTerraform(struct!.manifestWindowSeconds),
    min_buffer_time_seconds: cdktf.numberToTerraform(struct!.minBufferTimeSeconds),
    min_update_period_seconds: cdktf.numberToTerraform(struct!.minUpdatePeriodSeconds),
    suggested_presentation_delay_seconds: cdktf.numberToTerraform(struct!.suggestedPresentationDelaySeconds),
  }
}


export function channelOutputsDashPlaylistSettingsToHclTerraform(struct?: ChannelOutputsDashPlaylistSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manifest_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.manifestWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_buffer_time_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minBufferTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_update_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minUpdatePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    suggested_presentation_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.suggestedPresentationDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChannelOutputsDashPlaylistSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChannelOutputsDashPlaylistSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifestWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestWindowSeconds = this._manifestWindowSeconds;
    }
    if (this._minBufferTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBufferTimeSeconds = this._minBufferTimeSeconds;
    }
    if (this._minUpdatePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minUpdatePeriodSeconds = this._minUpdatePeriodSeconds;
    }
    if (this._suggestedPresentationDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.suggestedPresentationDelaySeconds = this._suggestedPresentationDelaySeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChannelOutputsDashPlaylistSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manifestWindowSeconds = undefined;
      this._minBufferTimeSeconds = undefined;
      this._minUpdatePeriodSeconds = undefined;
      this._suggestedPresentationDelaySeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manifestWindowSeconds = value.manifestWindowSeconds;
      this._minBufferTimeSeconds = value.minBufferTimeSeconds;
      this._minUpdatePeriodSeconds = value.minUpdatePeriodSeconds;
      this._suggestedPresentationDelaySeconds = value.suggestedPresentationDelaySeconds;
    }
  }

  // manifest_window_seconds - computed: false, optional: true, required: false
  private _manifestWindowSeconds?: number; 
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }
  public set manifestWindowSeconds(value: number) {
    this._manifestWindowSeconds = value;
  }
  public resetManifestWindowSeconds() {
    this._manifestWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestWindowSecondsInput() {
    return this._manifestWindowSeconds;
  }

  // min_buffer_time_seconds - computed: false, optional: true, required: false
  private _minBufferTimeSeconds?: number; 
  public get minBufferTimeSeconds() {
    return this.getNumberAttribute('min_buffer_time_seconds');
  }
  public set minBufferTimeSeconds(value: number) {
    this._minBufferTimeSeconds = value;
  }
  public resetMinBufferTimeSeconds() {
    this._minBufferTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBufferTimeSecondsInput() {
    return this._minBufferTimeSeconds;
  }

  // min_update_period_seconds - computed: false, optional: true, required: false
  private _minUpdatePeriodSeconds?: number; 
  public get minUpdatePeriodSeconds() {
    return this.getNumberAttribute('min_update_period_seconds');
  }
  public set minUpdatePeriodSeconds(value: number) {
    this._minUpdatePeriodSeconds = value;
  }
  public resetMinUpdatePeriodSeconds() {
    this._minUpdatePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minUpdatePeriodSecondsInput() {
    return this._minUpdatePeriodSeconds;
  }

  // suggested_presentation_delay_seconds - computed: false, optional: true, required: false
  private _suggestedPresentationDelaySeconds?: number; 
  public get suggestedPresentationDelaySeconds() {
    return this.getNumberAttribute('suggested_presentation_delay_seconds');
  }
  public set suggestedPresentationDelaySeconds(value: number) {
    this._suggestedPresentationDelaySeconds = value;
  }
  public resetSuggestedPresentationDelaySeconds() {
    this._suggestedPresentationDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestedPresentationDelaySecondsInput() {
    return this._suggestedPresentationDelaySeconds;
  }
}
export interface ChannelOutputsHlsPlaylistSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#ad_markup_type Channel#ad_markup_type}
  */
  readonly adMarkupType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#manifest_window_seconds Channel#manifest_window_seconds}
  */
  readonly manifestWindowSeconds?: number;
}

export function channelOutputsHlsPlaylistSettingsToTerraform(struct?: ChannelOutputsHlsPlaylistSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ad_markup_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adMarkupType),
    manifest_window_seconds: cdktf.numberToTerraform(struct!.manifestWindowSeconds),
  }
}


export function channelOutputsHlsPlaylistSettingsToHclTerraform(struct?: ChannelOutputsHlsPlaylistSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ad_markup_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adMarkupType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    manifest_window_seconds: {
      value: cdktf.numberToHclTerraform(struct!.manifestWindowSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChannelOutputsHlsPlaylistSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChannelOutputsHlsPlaylistSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adMarkupType !== undefined) {
      hasAnyValues = true;
      internalValueResult.adMarkupType = this._adMarkupType;
    }
    if (this._manifestWindowSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestWindowSeconds = this._manifestWindowSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChannelOutputsHlsPlaylistSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adMarkupType = undefined;
      this._manifestWindowSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adMarkupType = value.adMarkupType;
      this._manifestWindowSeconds = value.manifestWindowSeconds;
    }
  }

  // ad_markup_type - computed: false, optional: true, required: false
  private _adMarkupType?: string[]; 
  public get adMarkupType() {
    return this.getListAttribute('ad_markup_type');
  }
  public set adMarkupType(value: string[]) {
    this._adMarkupType = value;
  }
  public resetAdMarkupType() {
    this._adMarkupType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adMarkupTypeInput() {
    return this._adMarkupType;
  }

  // manifest_window_seconds - computed: false, optional: true, required: false
  private _manifestWindowSeconds?: number; 
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }
  public set manifestWindowSeconds(value: number) {
    this._manifestWindowSeconds = value;
  }
  public resetManifestWindowSeconds() {
    this._manifestWindowSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestWindowSecondsInput() {
    return this._manifestWindowSeconds;
  }
}
export interface ChannelOutputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#dash_playlist_settings Channel#dash_playlist_settings}
  */
  readonly dashPlaylistSettings?: ChannelOutputsDashPlaylistSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#hls_playlist_settings Channel#hls_playlist_settings}
  */
  readonly hlsPlaylistSettings?: ChannelOutputsHlsPlaylistSettings;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#manifest_name Channel#manifest_name}
  */
  readonly manifestName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#source_group Channel#source_group}
  */
  readonly sourceGroup: string;
}

export function channelOutputsToTerraform(struct?: ChannelOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dash_playlist_settings: channelOutputsDashPlaylistSettingsToTerraform(struct!.dashPlaylistSettings),
    hls_playlist_settings: channelOutputsHlsPlaylistSettingsToTerraform(struct!.hlsPlaylistSettings),
    manifest_name: cdktf.stringToTerraform(struct!.manifestName),
    source_group: cdktf.stringToTerraform(struct!.sourceGroup),
  }
}


export function channelOutputsToHclTerraform(struct?: ChannelOutputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dash_playlist_settings: {
      value: channelOutputsDashPlaylistSettingsToHclTerraform(struct!.dashPlaylistSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "ChannelOutputsDashPlaylistSettings",
    },
    hls_playlist_settings: {
      value: channelOutputsHlsPlaylistSettingsToHclTerraform(struct!.hlsPlaylistSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "ChannelOutputsHlsPlaylistSettings",
    },
    manifest_name: {
      value: cdktf.stringToHclTerraform(struct!.manifestName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_group: {
      value: cdktf.stringToHclTerraform(struct!.sourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ChannelOutputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChannelOutputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dashPlaylistSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashPlaylistSettings = this._dashPlaylistSettings?.internalValue;
    }
    if (this._hlsPlaylistSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hlsPlaylistSettings = this._hlsPlaylistSettings?.internalValue;
    }
    if (this._manifestName !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifestName = this._manifestName;
    }
    if (this._sourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceGroup = this._sourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChannelOutputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dashPlaylistSettings.internalValue = undefined;
      this._hlsPlaylistSettings.internalValue = undefined;
      this._manifestName = undefined;
      this._sourceGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dashPlaylistSettings.internalValue = value.dashPlaylistSettings;
      this._hlsPlaylistSettings.internalValue = value.hlsPlaylistSettings;
      this._manifestName = value.manifestName;
      this._sourceGroup = value.sourceGroup;
    }
  }

  // dash_playlist_settings - computed: false, optional: true, required: false
  private _dashPlaylistSettings = new ChannelOutputsDashPlaylistSettingsOutputReference(this, "dash_playlist_settings");
  public get dashPlaylistSettings() {
    return this._dashPlaylistSettings;
  }
  public putDashPlaylistSettings(value: ChannelOutputsDashPlaylistSettings) {
    this._dashPlaylistSettings.internalValue = value;
  }
  public resetDashPlaylistSettings() {
    this._dashPlaylistSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashPlaylistSettingsInput() {
    return this._dashPlaylistSettings.internalValue;
  }

  // hls_playlist_settings - computed: false, optional: true, required: false
  private _hlsPlaylistSettings = new ChannelOutputsHlsPlaylistSettingsOutputReference(this, "hls_playlist_settings");
  public get hlsPlaylistSettings() {
    return this._hlsPlaylistSettings;
  }
  public putHlsPlaylistSettings(value: ChannelOutputsHlsPlaylistSettings) {
    this._hlsPlaylistSettings.internalValue = value;
  }
  public resetHlsPlaylistSettings() {
    this._hlsPlaylistSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hlsPlaylistSettingsInput() {
    return this._hlsPlaylistSettings.internalValue;
  }

  // manifest_name - computed: false, optional: false, required: true
  private _manifestName?: string; 
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }
  public set manifestName(value: string) {
    this._manifestName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestNameInput() {
    return this._manifestName;
  }

  // playback_url - computed: true, optional: false, required: false
  public get playbackUrl() {
    return this.getStringAttribute('playback_url');
  }

  // source_group - computed: false, optional: false, required: true
  private _sourceGroup?: string; 
  public get sourceGroup() {
    return this.getStringAttribute('source_group');
  }
  public set sourceGroup(value: string) {
    this._sourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceGroupInput() {
    return this._sourceGroup;
  }
}

export class ChannelOutputsList extends cdktf.ComplexList {
  public internalValue? : ChannelOutputs[] | cdktf.IResolvable

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
  public get(index: number): ChannelOutputsOutputReference {
    return new ChannelOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel awsmt_channel}
*/
export class Channel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsmt_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Channel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Channel to import
  * @param importFromId The id of the existing Channel that should be imported. Refer to the {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Channel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsmt_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/resources/channel awsmt_channel} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChannelConfig
  */
  public constructor(scope: Construct, id: string, config: ChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'awsmt_channel',
      terraformGeneratorMetadata: {
        providerName: 'awsmt',
        providerVersion: '2.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._channelState = config.channelState;
    this._enableAsRunLogs = config.enableAsRunLogs;
    this._fillerSlate.internalValue = config.fillerSlate;
    this._name = config.name;
    this._outputs.internalValue = config.outputs;
    this._playbackMode = config.playbackMode;
    this._policy = config.policy;
    this._tags = config.tags;
    this._tier = config.tier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // channel_state - computed: false, optional: true, required: false
  private _channelState?: string; 
  public get channelState() {
    return this.getStringAttribute('channel_state');
  }
  public set channelState(value: string) {
    this._channelState = value;
  }
  public resetChannelState() {
    this._channelState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelStateInput() {
    return this._channelState;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // enable_as_run_logs - computed: true, optional: true, required: false
  private _enableAsRunLogs?: boolean | cdktf.IResolvable; 
  public get enableAsRunLogs() {
    return this.getBooleanAttribute('enable_as_run_logs');
  }
  public set enableAsRunLogs(value: boolean | cdktf.IResolvable) {
    this._enableAsRunLogs = value;
  }
  public resetEnableAsRunLogs() {
    this._enableAsRunLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAsRunLogsInput() {
    return this._enableAsRunLogs;
  }

  // filler_slate - computed: false, optional: true, required: false
  private _fillerSlate = new ChannelFillerSlateOutputReference(this, "filler_slate");
  public get fillerSlate() {
    return this._fillerSlate;
  }
  public putFillerSlate(value: ChannelFillerSlate) {
    this._fillerSlate.internalValue = value;
  }
  public resetFillerSlate() {
    this._fillerSlate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fillerSlateInput() {
    return this._fillerSlate.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getStringAttribute('last_modified_time');
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

  // outputs - computed: false, optional: false, required: true
  private _outputs = new ChannelOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }
  public putOutputs(value: ChannelOutputs[] | cdktf.IResolvable) {
    this._outputs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs.internalValue;
  }

  // playback_mode - computed: false, optional: false, required: true
  private _playbackMode?: string; 
  public get playbackMode() {
    return this.getStringAttribute('playback_mode');
  }
  public set playbackMode(value: string) {
    this._playbackMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get playbackModeInput() {
    return this._playbackMode;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
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

  // tier - computed: true, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      channel_state: cdktf.stringToTerraform(this._channelState),
      enable_as_run_logs: cdktf.booleanToTerraform(this._enableAsRunLogs),
      filler_slate: channelFillerSlateToTerraform(this._fillerSlate.internalValue),
      name: cdktf.stringToTerraform(this._name),
      outputs: cdktf.listMapper(channelOutputsToTerraform, false)(this._outputs.internalValue),
      playback_mode: cdktf.stringToTerraform(this._playbackMode),
      policy: cdktf.stringToTerraform(this._policy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tier: cdktf.stringToTerraform(this._tier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      channel_state: {
        value: cdktf.stringToHclTerraform(this._channelState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_as_run_logs: {
        value: cdktf.booleanToHclTerraform(this._enableAsRunLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filler_slate: {
        value: channelFillerSlateToHclTerraform(this._fillerSlate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ChannelFillerSlate",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outputs: {
        value: cdktf.listMapperHcl(channelOutputsToHclTerraform, false)(this._outputs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ChannelOutputsList",
      },
      playback_mode: {
        value: cdktf.stringToHclTerraform(this._playbackMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
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
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
