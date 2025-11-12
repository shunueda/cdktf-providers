// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiCameraQualityRetentionProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profiles#network_id DataMerakiCameraQualityRetentionProfiles#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiCameraQualityRetentionProfilesItems {
}

export function dataMerakiCameraQualityRetentionProfilesItemsToTerraform(struct?: DataMerakiCameraQualityRetentionProfilesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiCameraQualityRetentionProfilesItemsToHclTerraform(struct?: DataMerakiCameraQualityRetentionProfilesItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiCameraQualityRetentionProfilesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiCameraQualityRetentionProfilesItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiCameraQualityRetentionProfilesItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio_recording_enabled - computed: true, optional: false, required: false
  public get audioRecordingEnabled() {
    return this.getBooleanAttribute('audio_recording_enabled');
  }

  // cloud_archive_enabled - computed: true, optional: false, required: false
  public get cloudArchiveEnabled() {
    return this.getBooleanAttribute('cloud_archive_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_retention_days - computed: true, optional: false, required: false
  public get maxRetentionDays() {
    return this.getNumberAttribute('max_retention_days');
  }

  // motion_based_retention_enabled - computed: true, optional: false, required: false
  public get motionBasedRetentionEnabled() {
    return this.getBooleanAttribute('motion_based_retention_enabled');
  }

  // motion_detector_version - computed: true, optional: false, required: false
  public get motionDetectorVersion() {
    return this.getNumberAttribute('motion_detector_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // restricted_bandwidth_mode_enabled - computed: true, optional: false, required: false
  public get restrictedBandwidthModeEnabled() {
    return this.getBooleanAttribute('restricted_bandwidth_mode_enabled');
  }

  // schedule_id - computed: true, optional: false, required: false
  public get scheduleId() {
    return this.getStringAttribute('schedule_id');
  }

  // smart_retention_enabled - computed: true, optional: false, required: false
  public get smartRetentionEnabled() {
    return this.getBooleanAttribute('smart_retention_enabled');
  }

  // video_settings_mv12_mv22_mv72_quality - computed: true, optional: false, required: false
  public get videoSettingsMv12Mv22Mv72Quality() {
    return this.getStringAttribute('video_settings_mv12_mv22_mv72_quality');
  }

  // video_settings_mv12_mv22_mv72_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv12Mv22Mv72Resolution() {
    return this.getStringAttribute('video_settings_mv12_mv22_mv72_resolution');
  }

  // video_settings_mv12_we_quality - computed: true, optional: false, required: false
  public get videoSettingsMv12WeQuality() {
    return this.getStringAttribute('video_settings_mv12_we_quality');
  }

  // video_settings_mv12_we_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv12WeResolution() {
    return this.getStringAttribute('video_settings_mv12_we_resolution');
  }

  // video_settings_mv13_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv13MQuality() {
    return this.getStringAttribute('video_settings_mv13_m_quality');
  }

  // video_settings_mv13_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv13MResolution() {
    return this.getStringAttribute('video_settings_mv13_m_resolution');
  }

  // video_settings_mv13_quality - computed: true, optional: false, required: false
  public get videoSettingsMv13Quality() {
    return this.getStringAttribute('video_settings_mv13_quality');
  }

  // video_settings_mv13_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv13Resolution() {
    return this.getStringAttribute('video_settings_mv13_resolution');
  }

  // video_settings_mv21_mv71_quality - computed: true, optional: false, required: false
  public get videoSettingsMv21Mv71Quality() {
    return this.getStringAttribute('video_settings_mv21_mv71_quality');
  }

  // video_settings_mv21_mv71_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv21Mv71Resolution() {
    return this.getStringAttribute('video_settings_mv21_mv71_resolution');
  }

  // video_settings_mv22_x_mv72_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv22XMv72XQuality() {
    return this.getStringAttribute('video_settings_mv22_x_mv72_x_quality');
  }

  // video_settings_mv22_x_mv72_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv22XMv72XResolution() {
    return this.getStringAttribute('video_settings_mv22_x_mv72_x_resolution');
  }

  // video_settings_mv23_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv23MQuality() {
    return this.getStringAttribute('video_settings_mv23_m_quality');
  }

  // video_settings_mv23_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv23MResolution() {
    return this.getStringAttribute('video_settings_mv23_m_resolution');
  }

  // video_settings_mv23_quality - computed: true, optional: false, required: false
  public get videoSettingsMv23Quality() {
    return this.getStringAttribute('video_settings_mv23_quality');
  }

  // video_settings_mv23_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv23Resolution() {
    return this.getStringAttribute('video_settings_mv23_resolution');
  }

  // video_settings_mv23_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv23XQuality() {
    return this.getStringAttribute('video_settings_mv23_x_quality');
  }

  // video_settings_mv23_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv23XResolution() {
    return this.getStringAttribute('video_settings_mv23_x_resolution');
  }

  // video_settings_mv32_quality - computed: true, optional: false, required: false
  public get videoSettingsMv32Quality() {
    return this.getStringAttribute('video_settings_mv32_quality');
  }

  // video_settings_mv32_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv32Resolution() {
    return this.getStringAttribute('video_settings_mv32_resolution');
  }

  // video_settings_mv33_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv33MQuality() {
    return this.getStringAttribute('video_settings_mv33_m_quality');
  }

  // video_settings_mv33_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv33MResolution() {
    return this.getStringAttribute('video_settings_mv33_m_resolution');
  }

  // video_settings_mv33_quality - computed: true, optional: false, required: false
  public get videoSettingsMv33Quality() {
    return this.getStringAttribute('video_settings_mv33_quality');
  }

  // video_settings_mv33_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv33Resolution() {
    return this.getStringAttribute('video_settings_mv33_resolution');
  }

  // video_settings_mv52_quality - computed: true, optional: false, required: false
  public get videoSettingsMv52Quality() {
    return this.getStringAttribute('video_settings_mv52_quality');
  }

  // video_settings_mv52_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv52Resolution() {
    return this.getStringAttribute('video_settings_mv52_resolution');
  }

  // video_settings_mv53_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv53XQuality() {
    return this.getStringAttribute('video_settings_mv53_x_quality');
  }

  // video_settings_mv53_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv53XResolution() {
    return this.getStringAttribute('video_settings_mv53_x_resolution');
  }

  // video_settings_mv63_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv63MQuality() {
    return this.getStringAttribute('video_settings_mv63_m_quality');
  }

  // video_settings_mv63_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv63MResolution() {
    return this.getStringAttribute('video_settings_mv63_m_resolution');
  }

  // video_settings_mv63_quality - computed: true, optional: false, required: false
  public get videoSettingsMv63Quality() {
    return this.getStringAttribute('video_settings_mv63_quality');
  }

  // video_settings_mv63_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv63Resolution() {
    return this.getStringAttribute('video_settings_mv63_resolution');
  }

  // video_settings_mv63_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv63XQuality() {
    return this.getStringAttribute('video_settings_mv63_x_quality');
  }

  // video_settings_mv63_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv63XResolution() {
    return this.getStringAttribute('video_settings_mv63_x_resolution');
  }

  // video_settings_mv73_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv73MQuality() {
    return this.getStringAttribute('video_settings_mv73_m_quality');
  }

  // video_settings_mv73_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv73MResolution() {
    return this.getStringAttribute('video_settings_mv73_m_resolution');
  }

  // video_settings_mv73_quality - computed: true, optional: false, required: false
  public get videoSettingsMv73Quality() {
    return this.getStringAttribute('video_settings_mv73_quality');
  }

  // video_settings_mv73_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv73Resolution() {
    return this.getStringAttribute('video_settings_mv73_resolution');
  }

  // video_settings_mv73_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv73XQuality() {
    return this.getStringAttribute('video_settings_mv73_x_quality');
  }

  // video_settings_mv73_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv73XResolution() {
    return this.getStringAttribute('video_settings_mv73_x_resolution');
  }

  // video_settings_mv84_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv84XQuality() {
    return this.getStringAttribute('video_settings_mv84_x_quality');
  }

  // video_settings_mv84_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv84XResolution() {
    return this.getStringAttribute('video_settings_mv84_x_resolution');
  }

  // video_settings_mv93_m_quality - computed: true, optional: false, required: false
  public get videoSettingsMv93MQuality() {
    return this.getStringAttribute('video_settings_mv93_m_quality');
  }

  // video_settings_mv93_m_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv93MResolution() {
    return this.getStringAttribute('video_settings_mv93_m_resolution');
  }

  // video_settings_mv93_quality - computed: true, optional: false, required: false
  public get videoSettingsMv93Quality() {
    return this.getStringAttribute('video_settings_mv93_quality');
  }

  // video_settings_mv93_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv93Resolution() {
    return this.getStringAttribute('video_settings_mv93_resolution');
  }

  // video_settings_mv93_x_quality - computed: true, optional: false, required: false
  public get videoSettingsMv93XQuality() {
    return this.getStringAttribute('video_settings_mv93_x_quality');
  }

  // video_settings_mv93_x_resolution - computed: true, optional: false, required: false
  public get videoSettingsMv93XResolution() {
    return this.getStringAttribute('video_settings_mv93_x_resolution');
  }
}

export class DataMerakiCameraQualityRetentionProfilesItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiCameraQualityRetentionProfilesItemsOutputReference {
    return new DataMerakiCameraQualityRetentionProfilesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profiles meraki_camera_quality_retention_profiles}
*/
export class DataMerakiCameraQualityRetentionProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_camera_quality_retention_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiCameraQualityRetentionProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiCameraQualityRetentionProfiles to import
  * @param importFromId The id of the existing DataMerakiCameraQualityRetentionProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiCameraQualityRetentionProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_camera_quality_retention_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/camera_quality_retention_profiles meraki_camera_quality_retention_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiCameraQualityRetentionProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiCameraQualityRetentionProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_camera_quality_retention_profiles',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiCameraQualityRetentionProfilesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
