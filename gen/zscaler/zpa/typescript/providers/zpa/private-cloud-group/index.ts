// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateCloudGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * City and country of the Private Cloud Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#city_country PrivateCloudGroup#city_country}
  */
  readonly cityCountry?: string;
  /**
  * Country code of the Private Cloud Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#country_code PrivateCloudGroup#country_code}
  */
  readonly countryCode?: string;
  /**
  * Description of the Private Cloud Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#description PrivateCloudGroup#description}
  */
  readonly description?: string;
  /**
  * Whether this Private Cloud Group is enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#enabled PrivateCloudGroup#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the Private Cloud Group is public
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#is_public PrivateCloudGroup#is_public}
  */
  readonly isPublic?: string;
  /**
  * Latitude of the Private Cloud Group. Integer or decimal. With values in the range of -90 to 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#latitude PrivateCloudGroup#latitude}
  */
  readonly latitude?: string;
  /**
  * Location of the Private Cloud Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#location PrivateCloudGroup#location}
  */
  readonly location?: string;
  /**
  * Longitude of the Private Cloud Group. Integer or decimal. With values in the range of -180 to 180
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#longitude PrivateCloudGroup#longitude}
  */
  readonly longitude?: string;
  /**
  * Microtenant ID for the Private Cloud Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#microtenant_id PrivateCloudGroup#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Name of the Private Cloud Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#name PrivateCloudGroup#name}
  */
  readonly name: string;
  /**
  * Whether the default version profile of the Private Cloud Group is applied or overridden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#override_version_profile PrivateCloudGroup#override_version_profile}
  */
  readonly overrideVersionProfile?: boolean | cdktf.IResolvable;
  /**
  * Site ID for the Private Cloud Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#site_id PrivateCloudGroup#site_id}
  */
  readonly siteId?: string;
  /**
  * Private Cloud Controllers in this group will attempt to update to a newer version of the software during this specified day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#upgrade_day PrivateCloudGroup#upgrade_day}
  */
  readonly upgradeDay?: string;
  /**
  * Private Cloud Controllers in this group will attempt to update to a newer version of the software during this specified time. Integer in seconds (i.e., -66600). The integer should be greater than or equal to 0 and less than 86400, in 15 minute intervals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#upgrade_time_in_secs PrivateCloudGroup#upgrade_time_in_secs}
  */
  readonly upgradeTimeInSecs?: string;
  /**
  * ID of the version profile for the Private Cloud Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#version_profile_id PrivateCloudGroup#version_profile_id}
  */
  readonly versionProfileId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group zpa_private_cloud_group}
*/
export class PrivateCloudGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_private_cloud_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateCloudGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateCloudGroup to import
  * @param importFromId The id of the existing PrivateCloudGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateCloudGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_private_cloud_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/private_cloud_group zpa_private_cloud_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateCloudGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateCloudGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_private_cloud_group',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.5',
        providerVersionConstraint: '4.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cityCountry = config.cityCountry;
    this._countryCode = config.countryCode;
    this._description = config.description;
    this._enabled = config.enabled;
    this._isPublic = config.isPublic;
    this._latitude = config.latitude;
    this._location = config.location;
    this._longitude = config.longitude;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._overrideVersionProfile = config.overrideVersionProfile;
    this._siteId = config.siteId;
    this._upgradeDay = config.upgradeDay;
    this._upgradeTimeInSecs = config.upgradeTimeInSecs;
    this._versionProfileId = config.versionProfileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // city_country - computed: false, optional: true, required: false
  private _cityCountry?: string; 
  public get cityCountry() {
    return this.getStringAttribute('city_country');
  }
  public set cityCountry(value: string) {
    this._cityCountry = value;
  }
  public resetCityCountry() {
    this._cityCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityCountryInput() {
    return this._cityCountry;
  }

  // country_code - computed: true, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_public - computed: true, optional: true, required: false
  private _isPublic?: string; 
  public get isPublic() {
    return this.getStringAttribute('is_public');
  }
  public set isPublic(value: string) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // override_version_profile - computed: false, optional: true, required: false
  private _overrideVersionProfile?: boolean | cdktf.IResolvable; 
  public get overrideVersionProfile() {
    return this.getBooleanAttribute('override_version_profile');
  }
  public set overrideVersionProfile(value: boolean | cdktf.IResolvable) {
    this._overrideVersionProfile = value;
  }
  public resetOverrideVersionProfile() {
    this._overrideVersionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVersionProfileInput() {
    return this._overrideVersionProfile;
  }

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // upgrade_day - computed: false, optional: true, required: false
  private _upgradeDay?: string; 
  public get upgradeDay() {
    return this.getStringAttribute('upgrade_day');
  }
  public set upgradeDay(value: string) {
    this._upgradeDay = value;
  }
  public resetUpgradeDay() {
    this._upgradeDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeDayInput() {
    return this._upgradeDay;
  }

  // upgrade_time_in_secs - computed: false, optional: true, required: false
  private _upgradeTimeInSecs?: string; 
  public get upgradeTimeInSecs() {
    return this.getStringAttribute('upgrade_time_in_secs');
  }
  public set upgradeTimeInSecs(value: string) {
    this._upgradeTimeInSecs = value;
  }
  public resetUpgradeTimeInSecs() {
    this._upgradeTimeInSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeTimeInSecsInput() {
    return this._upgradeTimeInSecs;
  }

  // version_profile_id - computed: false, optional: true, required: false
  private _versionProfileId?: string; 
  public get versionProfileId() {
    return this.getStringAttribute('version_profile_id');
  }
  public set versionProfileId(value: string) {
    this._versionProfileId = value;
  }
  public resetVersionProfileId() {
    this._versionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionProfileIdInput() {
    return this._versionProfileId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      city_country: cdktf.stringToTerraform(this._cityCountry),
      country_code: cdktf.stringToTerraform(this._countryCode),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      is_public: cdktf.stringToTerraform(this._isPublic),
      latitude: cdktf.stringToTerraform(this._latitude),
      location: cdktf.stringToTerraform(this._location),
      longitude: cdktf.stringToTerraform(this._longitude),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      override_version_profile: cdktf.booleanToTerraform(this._overrideVersionProfile),
      site_id: cdktf.stringToTerraform(this._siteId),
      upgrade_day: cdktf.stringToTerraform(this._upgradeDay),
      upgrade_time_in_secs: cdktf.stringToTerraform(this._upgradeTimeInSecs),
      version_profile_id: cdktf.stringToTerraform(this._versionProfileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      city_country: {
        value: cdktf.stringToHclTerraform(this._cityCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      is_public: {
        value: cdktf.stringToHclTerraform(this._isPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latitude: {
        value: cdktf.stringToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      longitude: {
        value: cdktf.stringToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
      override_version_profile: {
        value: cdktf.booleanToHclTerraform(this._overrideVersionProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_day: {
        value: cdktf.stringToHclTerraform(this._upgradeDay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_time_in_secs: {
        value: cdktf.stringToHclTerraform(this._upgradeTimeInSecs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_profile_id: {
        value: cdktf.stringToHclTerraform(this._versionProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
