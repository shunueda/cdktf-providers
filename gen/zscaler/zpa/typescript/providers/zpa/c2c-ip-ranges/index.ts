// https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface C2CIpRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Country code for the C2C IP Ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#country_code C2CIpRanges#country_code}
  */
  readonly countryCode?: string;
  /**
  * Description of the C2C IP Ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#description C2CIpRanges#description}
  */
  readonly description?: string;
  /**
  * Whether the C2C IP Ranges is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#enabled C2CIpRanges#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Beginning IP address of the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#ip_range_begin C2CIpRanges#ip_range_begin}
  */
  readonly ipRangeBegin?: string;
  /**
  * Ending IP address of the range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#ip_range_end C2CIpRanges#ip_range_end}
  */
  readonly ipRangeEnd?: string;
  /**
  * Latitude in database for the C2C IP Ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#latitude_in_db C2CIpRanges#latitude_in_db}
  */
  readonly latitudeInDb?: string;
  /**
  * Location of the C2C IP Ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#location C2CIpRanges#location}
  */
  readonly location?: string;
  /**
  * Location hint for the C2C IP Ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#location_hint C2CIpRanges#location_hint}
  */
  readonly locationHint?: string;
  /**
  * Longitude in database for the C2C IP Ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#longitude_in_db C2CIpRanges#longitude_in_db}
  */
  readonly longitudeInDb?: string;
  /**
  * Name of the C2C IP Ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#name C2CIpRanges#name}
  */
  readonly name: string;
  /**
  * SCCM flag for the C2C IP Ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#sccm_flag C2CIpRanges#sccm_flag}
  */
  readonly sccmFlag?: boolean | cdktf.IResolvable;
  /**
  * Subnet CIDR for the C2C IP Ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#subnet_cidr C2CIpRanges#subnet_cidr}
  */
  readonly subnetCidr?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges zpa_c2c_ip_ranges}
*/
export class C2CIpRanges extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_c2c_ip_ranges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a C2CIpRanges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the C2CIpRanges to import
  * @param importFromId The id of the existing C2CIpRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the C2CIpRanges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_c2c_ip_ranges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.4/docs/resources/c2c_ip_ranges zpa_c2c_ip_ranges} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options C2CIpRangesConfig
  */
  public constructor(scope: Construct, id: string, config: C2CIpRangesConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_c2c_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.4',
        providerVersionConstraint: '4.3.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._countryCode = config.countryCode;
    this._description = config.description;
    this._enabled = config.enabled;
    this._ipRangeBegin = config.ipRangeBegin;
    this._ipRangeEnd = config.ipRangeEnd;
    this._latitudeInDb = config.latitudeInDb;
    this._location = config.location;
    this._locationHint = config.locationHint;
    this._longitudeInDb = config.longitudeInDb;
    this._name = config.name;
    this._sccmFlag = config.sccmFlag;
    this._subnetCidr = config.subnetCidr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // country_code - computed: false, optional: true, required: false
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

  // ip_range_begin - computed: true, optional: true, required: false
  private _ipRangeBegin?: string; 
  public get ipRangeBegin() {
    return this.getStringAttribute('ip_range_begin');
  }
  public set ipRangeBegin(value: string) {
    this._ipRangeBegin = value;
  }
  public resetIpRangeBegin() {
    this._ipRangeBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeBeginInput() {
    return this._ipRangeBegin;
  }

  // ip_range_end - computed: true, optional: true, required: false
  private _ipRangeEnd?: string; 
  public get ipRangeEnd() {
    return this.getStringAttribute('ip_range_end');
  }
  public set ipRangeEnd(value: string) {
    this._ipRangeEnd = value;
  }
  public resetIpRangeEnd() {
    this._ipRangeEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeEndInput() {
    return this._ipRangeEnd;
  }

  // latitude_in_db - computed: false, optional: true, required: false
  private _latitudeInDb?: string; 
  public get latitudeInDb() {
    return this.getStringAttribute('latitude_in_db');
  }
  public set latitudeInDb(value: string) {
    this._latitudeInDb = value;
  }
  public resetLatitudeInDb() {
    this._latitudeInDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInDbInput() {
    return this._latitudeInDb;
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

  // location_hint - computed: false, optional: true, required: false
  private _locationHint?: string; 
  public get locationHint() {
    return this.getStringAttribute('location_hint');
  }
  public set locationHint(value: string) {
    this._locationHint = value;
  }
  public resetLocationHint() {
    this._locationHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationHintInput() {
    return this._locationHint;
  }

  // longitude_in_db - computed: false, optional: true, required: false
  private _longitudeInDb?: string; 
  public get longitudeInDb() {
    return this.getStringAttribute('longitude_in_db');
  }
  public set longitudeInDb(value: string) {
    this._longitudeInDb = value;
  }
  public resetLongitudeInDb() {
    this._longitudeInDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInDbInput() {
    return this._longitudeInDb;
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

  // sccm_flag - computed: false, optional: true, required: false
  private _sccmFlag?: boolean | cdktf.IResolvable; 
  public get sccmFlag() {
    return this.getBooleanAttribute('sccm_flag');
  }
  public set sccmFlag(value: boolean | cdktf.IResolvable) {
    this._sccmFlag = value;
  }
  public resetSccmFlag() {
    this._sccmFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sccmFlagInput() {
    return this._sccmFlag;
  }

  // subnet_cidr - computed: false, optional: true, required: false
  private _subnetCidr?: string; 
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }
  public set subnetCidr(value: string) {
    this._subnetCidr = value;
  }
  public resetSubnetCidr() {
    this._subnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetCidrInput() {
    return this._subnetCidr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      country_code: cdktf.stringToTerraform(this._countryCode),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      ip_range_begin: cdktf.stringToTerraform(this._ipRangeBegin),
      ip_range_end: cdktf.stringToTerraform(this._ipRangeEnd),
      latitude_in_db: cdktf.stringToTerraform(this._latitudeInDb),
      location: cdktf.stringToTerraform(this._location),
      location_hint: cdktf.stringToTerraform(this._locationHint),
      longitude_in_db: cdktf.stringToTerraform(this._longitudeInDb),
      name: cdktf.stringToTerraform(this._name),
      sccm_flag: cdktf.booleanToTerraform(this._sccmFlag),
      subnet_cidr: cdktf.stringToTerraform(this._subnetCidr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ip_range_begin: {
        value: cdktf.stringToHclTerraform(this._ipRangeBegin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_range_end: {
        value: cdktf.stringToHclTerraform(this._ipRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latitude_in_db: {
        value: cdktf.stringToHclTerraform(this._latitudeInDb),
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
      location_hint: {
        value: cdktf.stringToHclTerraform(this._locationHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      longitude_in_db: {
        value: cdktf.stringToHclTerraform(this._longitudeInDb),
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
      sccm_flag: {
        value: cdktf.booleanToHclTerraform(this._sccmFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._subnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
