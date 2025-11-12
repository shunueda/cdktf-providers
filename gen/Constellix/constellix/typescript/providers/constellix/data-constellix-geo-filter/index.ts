// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConstellixGeoFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter#asn DataConstellixGeoFilter#asn}
  */
  readonly asn?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter#filterruleslimit DataConstellixGeoFilter#filterruleslimit}
  */
  readonly filterruleslimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter#geoipcontinents DataConstellixGeoFilter#geoipcontinents}
  */
  readonly geoipcontinents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter#geoipcountries DataConstellixGeoFilter#geoipcountries}
  */
  readonly geoipcountries?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter#geoipregions DataConstellixGeoFilter#geoipregions}
  */
  readonly geoipregions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter#id DataConstellixGeoFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter#ipv4 DataConstellixGeoFilter#ipv4}
  */
  readonly ipv4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter#ipv6 DataConstellixGeoFilter#ipv6}
  */
  readonly ipv6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter#name DataConstellixGeoFilter#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter#regions DataConstellixGeoFilter#regions}
  */
  readonly regions?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter constellix_geo_filter}
*/
export class DataConstellixGeoFilter extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_geo_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConstellixGeoFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConstellixGeoFilter to import
  * @param importFromId The id of the existing DataConstellixGeoFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConstellixGeoFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_geo_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_filter constellix_geo_filter} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConstellixGeoFilterConfig
  */
  public constructor(scope: Construct, id: string, config: DataConstellixGeoFilterConfig) {
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
    this._filterruleslimit = config.filterruleslimit;
    this._geoipcontinents = config.geoipcontinents;
    this._geoipcountries = config.geoipcountries;
    this._geoipregions = config.geoipregions;
    this._id = config.id;
    this._ipv4 = config.ipv4;
    this._ipv6 = config.ipv6;
    this._name = config.name;
    this._regions = config.regions;
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

  // filterruleslimit - computed: true, optional: true, required: false
  private _filterruleslimit?: number; 
  public get filterruleslimit() {
    return this.getNumberAttribute('filterruleslimit');
  }
  public set filterruleslimit(value: number) {
    this._filterruleslimit = value;
  }
  public resetFilterruleslimit() {
    this._filterruleslimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterruleslimitInput() {
    return this._filterruleslimit;
  }

  // geoipcontinents - computed: true, optional: true, required: false
  private _geoipcontinents?: string[]; 
  public get geoipcontinents() {
    return this.getListAttribute('geoipcontinents');
  }
  public set geoipcontinents(value: string[]) {
    this._geoipcontinents = value;
  }
  public resetGeoipcontinents() {
    this._geoipcontinents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipcontinentsInput() {
    return this._geoipcontinents;
  }

  // geoipcountries - computed: true, optional: true, required: false
  private _geoipcountries?: string[]; 
  public get geoipcountries() {
    return this.getListAttribute('geoipcountries');
  }
  public set geoipcountries(value: string[]) {
    this._geoipcountries = value;
  }
  public resetGeoipcountries() {
    this._geoipcountries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipcountriesInput() {
    return this._geoipcountries;
  }

  // geoipregions - computed: true, optional: true, required: false
  private _geoipregions?: string[]; 
  public get geoipregions() {
    return this.getListAttribute('geoipregions');
  }
  public set geoipregions(value: string[]) {
    this._geoipregions = value;
  }
  public resetGeoipregions() {
    this._geoipregions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoipregionsInput() {
    return this._geoipregions;
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

  // regions - computed: true, optional: true, required: false
  private _regions?: { [key: string]: string }; 
  public get regions() {
    return this.getStringMapAttribute('regions');
  }
  public set regions(value: { [key: string]: string }) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asn: cdktf.listMapper(cdktf.numberToTerraform, false)(this._asn),
      filterruleslimit: cdktf.numberToTerraform(this._filterruleslimit),
      geoipcontinents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._geoipcontinents),
      geoipcountries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._geoipcountries),
      geoipregions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._geoipregions),
      id: cdktf.stringToTerraform(this._id),
      ipv4: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv4),
      ipv6: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipv6),
      name: cdktf.stringToTerraform(this._name),
      regions: cdktf.hashMapper(cdktf.stringToTerraform)(this._regions),
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
      filterruleslimit: {
        value: cdktf.numberToHclTerraform(this._filterruleslimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geoipcontinents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._geoipcontinents),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      geoipcountries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._geoipcountries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      geoipregions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._geoipregions),
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
      regions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._regions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
