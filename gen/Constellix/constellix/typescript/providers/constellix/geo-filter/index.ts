// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GeoFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter#asn GeoFilter#asn}
  */
  readonly asn?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter#filter_rules_limit GeoFilter#filter_rules_limit}
  */
  readonly filterRulesLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter#geoip_continents GeoFilter#geoip_continents}
  */
  readonly geoipContinents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter#geoip_countries GeoFilter#geoip_countries}
  */
  readonly geoipCountries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter#geoip_regions GeoFilter#geoip_regions}
  */
  readonly geoipRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter#id GeoFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter#ipv4 GeoFilter#ipv4}
  */
  readonly ipv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter#ipv6 GeoFilter#ipv6}
  */
  readonly ipv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter#name GeoFilter#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter constellix_geo_filter}
*/
export class GeoFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_geo_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GeoFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GeoFilter to import
  * @param importFromId The id of the existing GeoFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeoFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_geo_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/resources/geo_filter constellix_geo_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GeoFilterConfig
  */
  public constructor(scope: Construct, id: string, config: GeoFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix_geo_filter',
      terraformGeneratorMetadata: {
        providerName: 'constellix',
        providerVersion: '0.4.6',
        providerVersionConstraint: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asn = config.asn;
    this._filterRulesLimit = config.filterRulesLimit;
    this._geoipContinents = config.geoipContinents;
    this._geoipCountries = config.geoipCountries;
    this._geoipRegions = config.geoipRegions;
    this._id = config.id;
    this._ipv4 = config.ipv4;
    this._ipv6 = config.ipv6;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asn - computed: true, optional: true, required: false
  private _asn?: number[]; 
  public get asn() {
    return this.getNumberListAttribute('asn');
  }
  public set asn(value: number[]) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // filter_rules_limit - computed: true, optional: true, required: false
  private _filterRulesLimit?: number; 
  public get filterRulesLimit() {
    return this.getNumberAttribute('filter_rules_limit');
  }
  public set filterRulesLimit(value: number) {
    this._filterRulesLimit = value;
  }
  public resetFilterRulesLimit() {
    this._filterRulesLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRulesLimitInput() {
    return this._filterRulesLimit;
  }

  // geoip_continents - computed: false, optional: true, required: false
  private _geoipContinents?: string[]; 
  public get geoipContinents() {
    return this.getListAttribute('geoip_continents');
  }
  public set geoipContinents(value: string[]) {
    this._geoipContinents = value;
  }
  public resetGeoipContinents() {
    this._geoipContinents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipContinentsInput() {
    return this._geoipContinents;
  }

  // geoip_countries - computed: true, optional: true, required: false
  private _geoipCountries?: string[]; 
  public get geoipCountries() {
    return this.getListAttribute('geoip_countries');
  }
  public set geoipCountries(value: string[]) {
    this._geoipCountries = value;
  }
  public resetGeoipCountries() {
    this._geoipCountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipCountriesInput() {
    return this._geoipCountries;
  }

  // geoip_regions - computed: true, optional: true, required: false
  private _geoipRegions?: string[]; 
  public get geoipRegions() {
    return this.getListAttribute('geoip_regions');
  }
  public set geoipRegions(value: string[]) {
    this._geoipRegions = value;
  }
  public resetGeoipRegions() {
    this._geoipRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipRegionsInput() {
    return this._geoipRegions;
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

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string[]; 
  public get ipv4() {
    return this.getListAttribute('ipv4');
  }
  public set ipv4(value: string[]) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string[]; 
  public get ipv6() {
    return this.getListAttribute('ipv6');
  }
  public set ipv6(value: string[]) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.listMapper(cdktf.numberToTerraform, false)(this._asn),
      filter_rules_limit: cdktf.numberToTerraform(this._filterRulesLimit),
      geoip_continents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._geoipContinents),
      geoip_countries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._geoipCountries),
      geoip_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._geoipRegions),
      id: cdktf.stringToTerraform(this._id),
      ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4),
      ipv6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asn: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._asn),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      filter_rules_limit: {
        value: cdktf.numberToHclTerraform(this._filterRulesLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geoip_continents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._geoipContinents),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      geoip_countries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._geoipCountries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      geoip_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._geoipRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv4),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ipv6: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipv6),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
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
