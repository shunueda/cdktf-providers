// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/location_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/location_profile#id LocationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Consent is mandatory for monitoring from countries outside the European Economic Area (EEA) and the Adequate countries. To provide your consent, set outer_regions_location_consent as true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/location_profile#outer_regions_location_consent LocationProfile#outer_regions_location_consent}
  */
  readonly outerRegionsLocationConsent?: boolean | cdktf.IResolvable;
  /**
  * Primary location for monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/location_profile#primary_location LocationProfile#primary_location}
  */
  readonly primaryLocation: string;
  /**
  * Display name for the location profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/location_profile#profile_name LocationProfile#profile_name}
  */
  readonly profileName: string;
  /**
  * Restricts polling of the resource from the selected locations alone in the Location Profile, overrides the alternate location poll logic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/location_profile#restrict_alternate_location_polling LocationProfile#restrict_alternate_location_polling}
  */
  readonly restrictAlternateLocationPolling?: boolean | cdktf.IResolvable;
  /**
  * List of secondary locations for monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/location_profile#secondary_locations LocationProfile#secondary_locations}
  */
  readonly secondaryLocations: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/location_profile site24x7_location_profile}
*/
export class LocationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_location_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocationProfile to import
  * @param importFromId The id of the existing LocationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/location_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_location_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/location_profile site24x7_location_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: LocationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_location_profile',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3',
        providerVersionConstraint: '2.0.3'
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
    this._outerRegionsLocationConsent = config.outerRegionsLocationConsent;
    this._primaryLocation = config.primaryLocation;
    this._profileName = config.profileName;
    this._restrictAlternateLocationPolling = config.restrictAlternateLocationPolling;
    this._secondaryLocations = config.secondaryLocations;
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

  // outer_regions_location_consent - computed: false, optional: true, required: false
  private _outerRegionsLocationConsent?: boolean | cdktf.IResolvable; 
  public get outerRegionsLocationConsent() {
    return this.getBooleanAttribute('outer_regions_location_consent');
  }
  public set outerRegionsLocationConsent(value: boolean | cdktf.IResolvable) {
    this._outerRegionsLocationConsent = value;
  }
  public resetOuterRegionsLocationConsent() {
    this._outerRegionsLocationConsent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outerRegionsLocationConsentInput() {
    return this._outerRegionsLocationConsent;
  }

  // primary_location - computed: false, optional: false, required: true
  private _primaryLocation?: string; 
  public get primaryLocation() {
    return this.getStringAttribute('primary_location');
  }
  public set primaryLocation(value: string) {
    this._primaryLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryLocationInput() {
    return this._primaryLocation;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // restrict_alternate_location_polling - computed: false, optional: true, required: false
  private _restrictAlternateLocationPolling?: boolean | cdktf.IResolvable; 
  public get restrictAlternateLocationPolling() {
    return this.getBooleanAttribute('restrict_alternate_location_polling');
  }
  public set restrictAlternateLocationPolling(value: boolean | cdktf.IResolvable) {
    this._restrictAlternateLocationPolling = value;
  }
  public resetRestrictAlternateLocationPolling() {
    this._restrictAlternateLocationPolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictAlternateLocationPollingInput() {
    return this._restrictAlternateLocationPolling;
  }

  // secondary_locations - computed: false, optional: false, required: true
  private _secondaryLocations?: string[]; 
  public get secondaryLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_locations'));
  }
  public set secondaryLocations(value: string[]) {
    this._secondaryLocations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryLocationsInput() {
    return this._secondaryLocations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      outer_regions_location_consent: cdktf.booleanToTerraform(this._outerRegionsLocationConsent),
      primary_location: cdktf.stringToTerraform(this._primaryLocation),
      profile_name: cdktf.stringToTerraform(this._profileName),
      restrict_alternate_location_polling: cdktf.booleanToTerraform(this._restrictAlternateLocationPolling),
      secondary_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryLocations),
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
      outer_regions_location_consent: {
        value: cdktf.booleanToHclTerraform(this._outerRegionsLocationConsent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_location: {
        value: cdktf.stringToHclTerraform(this._primaryLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrict_alternate_location_polling: {
        value: cdktf.booleanToHclTerraform(this._restrictAlternateLocationPolling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secondary_locations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryLocations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
