// https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/data-sources/channel
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsmtChannelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/data-sources/channel#name DataAwsmtChannel#name}
  */
  readonly name: string;
}
export interface DataAwsmtChannelFillerSlate {
}

export function dataAwsmtChannelFillerSlateToTerraform(struct?: DataAwsmtChannelFillerSlate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsmtChannelFillerSlateToHclTerraform(struct?: DataAwsmtChannelFillerSlate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsmtChannelFillerSlateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsmtChannelFillerSlate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsmtChannelFillerSlate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_location_name - computed: true, optional: false, required: false
  public get sourceLocationName() {
    return this.getStringAttribute('source_location_name');
  }

  // vod_source_name - computed: true, optional: false, required: false
  public get vodSourceName() {
    return this.getStringAttribute('vod_source_name');
  }
}
export interface DataAwsmtChannelOutputsDashPlaylistSettings {
}

export function dataAwsmtChannelOutputsDashPlaylistSettingsToTerraform(struct?: DataAwsmtChannelOutputsDashPlaylistSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsmtChannelOutputsDashPlaylistSettingsToHclTerraform(struct?: DataAwsmtChannelOutputsDashPlaylistSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsmtChannelOutputsDashPlaylistSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsmtChannelOutputsDashPlaylistSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsmtChannelOutputsDashPlaylistSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manifest_window_seconds - computed: true, optional: false, required: false
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }

  // min_buffer_time_seconds - computed: true, optional: false, required: false
  public get minBufferTimeSeconds() {
    return this.getNumberAttribute('min_buffer_time_seconds');
  }

  // min_update_period_seconds - computed: true, optional: false, required: false
  public get minUpdatePeriodSeconds() {
    return this.getNumberAttribute('min_update_period_seconds');
  }

  // suggested_presentation_delay_seconds - computed: true, optional: false, required: false
  public get suggestedPresentationDelaySeconds() {
    return this.getNumberAttribute('suggested_presentation_delay_seconds');
  }
}
export interface DataAwsmtChannelOutputsHlsPlaylistSettings {
}

export function dataAwsmtChannelOutputsHlsPlaylistSettingsToTerraform(struct?: DataAwsmtChannelOutputsHlsPlaylistSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsmtChannelOutputsHlsPlaylistSettingsToHclTerraform(struct?: DataAwsmtChannelOutputsHlsPlaylistSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsmtChannelOutputsHlsPlaylistSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsmtChannelOutputsHlsPlaylistSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsmtChannelOutputsHlsPlaylistSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ad_markup_type - computed: true, optional: false, required: false
  public get adMarkupType() {
    return this.getListAttribute('ad_markup_type');
  }

  // manifest_window_seconds - computed: true, optional: false, required: false
  public get manifestWindowSeconds() {
    return this.getNumberAttribute('manifest_window_seconds');
  }
}
export interface DataAwsmtChannelOutputs {
}

export function dataAwsmtChannelOutputsToTerraform(struct?: DataAwsmtChannelOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsmtChannelOutputsToHclTerraform(struct?: DataAwsmtChannelOutputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsmtChannelOutputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsmtChannelOutputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsmtChannelOutputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dash_playlist_settings - computed: true, optional: false, required: false
  private _dashPlaylistSettings = new DataAwsmtChannelOutputsDashPlaylistSettingsOutputReference(this, "dash_playlist_settings");
  public get dashPlaylistSettings() {
    return this._dashPlaylistSettings;
  }

  // hls_playlist_settings - computed: true, optional: false, required: false
  private _hlsPlaylistSettings = new DataAwsmtChannelOutputsHlsPlaylistSettingsOutputReference(this, "hls_playlist_settings");
  public get hlsPlaylistSettings() {
    return this._hlsPlaylistSettings;
  }

  // manifest_name - computed: true, optional: false, required: false
  public get manifestName() {
    return this.getStringAttribute('manifest_name');
  }

  // playback_url - computed: true, optional: false, required: false
  public get playbackUrl() {
    return this.getStringAttribute('playback_url');
  }

  // source_group - computed: true, optional: false, required: false
  public get sourceGroup() {
    return this.getStringAttribute('source_group');
  }
}

export class DataAwsmtChannelOutputsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsmtChannelOutputsOutputReference {
    return new DataAwsmtChannelOutputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/data-sources/channel awsmt_channel}
*/
export class DataAwsmtChannel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "awsmt_channel";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsmtChannel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsmtChannel to import
  * @param importFromId The id of the existing DataAwsmtChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/data-sources/channel#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsmtChannel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "awsmt_channel", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spring-media/awsmt/2.5.1/docs/data-sources/channel awsmt_channel} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsmtChannelConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsmtChannelConfig) {
    super(scope, id, {
      terraformResourceType: 'awsmt_channel',
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // channel_state - computed: true, optional: false, required: false
  public get channelState() {
    return this.getStringAttribute('channel_state');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // enable_as_run_logs - computed: true, optional: false, required: false
  public get enableAsRunLogs() {
    return this.getBooleanAttribute('enable_as_run_logs');
  }

  // filler_slate - computed: true, optional: false, required: false
  private _fillerSlate = new DataAwsmtChannelFillerSlateOutputReference(this, "filler_slate");
  public get fillerSlate() {
    return this._fillerSlate;
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

  // outputs - computed: true, optional: false, required: false
  private _outputs = new DataAwsmtChannelOutputsList(this, "outputs", false);
  public get outputs() {
    return this._outputs;
  }

  // playback_mode - computed: true, optional: false, required: false
  public get playbackMode() {
    return this.getStringAttribute('playback_mode');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
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
