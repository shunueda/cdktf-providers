// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbSiteActiveRdtAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aging Time, Unit: min, default is 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#aging_time GslbSiteActiveRdtA#aging_time}
  */
  readonly agingTime?: number;
  /**
  * Bind RDT to geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#bind_geoloc GslbSiteActiveRdtA#bind_geoloc}
  */
  readonly bindGeoloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#id GslbSiteActiveRdtA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ignore count if RDT is out of range, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#ignore_count GslbSiteActiveRdtA#ignore_count}
  */
  readonly ignoreCount?: number;
  /**
  * Client IPv6 subnet mask, default is 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#ipv6_mask GslbSiteActiveRdtA#ipv6_mask}
  */
  readonly ipv6Mask?: number;
  /**
  * Limit of valid RDT, default is 16383 (Limit, unit: millisecond)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#limit GslbSiteActiveRdtA#limit}
  */
  readonly limit?: number;
  /**
  * Client IP subnet mask, default is 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#mask GslbSiteActiveRdtA#mask}
  */
  readonly mask?: string;
  /**
  * Enable overlap for geo-location to do longest match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#overlap GslbSiteActiveRdtA#overlap}
  */
  readonly overlap?: number;
  /**
  * Factor of RDT Range, default is 25 (Range Factor of Smooth RDT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#range_factor GslbSiteActiveRdtA#range_factor}
  */
  readonly rangeFactor?: number;
  /**
  * SiteName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#site_name GslbSiteActiveRdtA#site_name}
  */
  readonly siteName: string;
  /**
  * Factor of Smooth RDT, default is 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#smooth_factor GslbSiteActiveRdtA#smooth_factor}
  */
  readonly smoothFactor?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#uuid GslbSiteActiveRdtA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt thunder_gslb_site_active_rdt}
*/
export class GslbSiteActiveRdtA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_site_active_rdt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbSiteActiveRdtA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbSiteActiveRdtA to import
  * @param importFromId The id of the existing GslbSiteActiveRdtA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbSiteActiveRdtA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_site_active_rdt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site_active_rdt thunder_gslb_site_active_rdt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbSiteActiveRdtAConfig
  */
  public constructor(scope: Construct, id: string, config: GslbSiteActiveRdtAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_site_active_rdt',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agingTime = config.agingTime;
    this._bindGeoloc = config.bindGeoloc;
    this._id = config.id;
    this._ignoreCount = config.ignoreCount;
    this._ipv6Mask = config.ipv6Mask;
    this._limit = config.limit;
    this._mask = config.mask;
    this._overlap = config.overlap;
    this._rangeFactor = config.rangeFactor;
    this._siteName = config.siteName;
    this._smoothFactor = config.smoothFactor;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aging_time - computed: false, optional: true, required: false
  private _agingTime?: number; 
  public get agingTime() {
    return this.getNumberAttribute('aging_time');
  }
  public set agingTime(value: number) {
    this._agingTime = value;
  }
  public resetAgingTime() {
    this._agingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingTimeInput() {
    return this._agingTime;
  }

  // bind_geoloc - computed: false, optional: true, required: false
  private _bindGeoloc?: number; 
  public get bindGeoloc() {
    return this.getNumberAttribute('bind_geoloc');
  }
  public set bindGeoloc(value: number) {
    this._bindGeoloc = value;
  }
  public resetBindGeoloc() {
    this._bindGeoloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindGeolocInput() {
    return this._bindGeoloc;
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

  // ignore_count - computed: false, optional: true, required: false
  private _ignoreCount?: number; 
  public get ignoreCount() {
    return this.getNumberAttribute('ignore_count');
  }
  public set ignoreCount(value: number) {
    this._ignoreCount = value;
  }
  public resetIgnoreCount() {
    this._ignoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCountInput() {
    return this._ignoreCount;
  }

  // ipv6_mask - computed: false, optional: true, required: false
  private _ipv6Mask?: number; 
  public get ipv6Mask() {
    return this.getNumberAttribute('ipv6_mask');
  }
  public set ipv6Mask(value: number) {
    this._ipv6Mask = value;
  }
  public resetIpv6Mask() {
    this._ipv6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskInput() {
    return this._ipv6Mask;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // overlap - computed: false, optional: true, required: false
  private _overlap?: number; 
  public get overlap() {
    return this.getNumberAttribute('overlap');
  }
  public set overlap(value: number) {
    this._overlap = value;
  }
  public resetOverlap() {
    this._overlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapInput() {
    return this._overlap;
  }

  // range_factor - computed: false, optional: true, required: false
  private _rangeFactor?: number; 
  public get rangeFactor() {
    return this.getNumberAttribute('range_factor');
  }
  public set rangeFactor(value: number) {
    this._rangeFactor = value;
  }
  public resetRangeFactor() {
    this._rangeFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeFactorInput() {
    return this._rangeFactor;
  }

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // smooth_factor - computed: false, optional: true, required: false
  private _smoothFactor?: number; 
  public get smoothFactor() {
    return this.getNumberAttribute('smooth_factor');
  }
  public set smoothFactor(value: number) {
    this._smoothFactor = value;
  }
  public resetSmoothFactor() {
    this._smoothFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smoothFactorInput() {
    return this._smoothFactor;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aging_time: cdktf.numberToTerraform(this._agingTime),
      bind_geoloc: cdktf.numberToTerraform(this._bindGeoloc),
      id: cdktf.stringToTerraform(this._id),
      ignore_count: cdktf.numberToTerraform(this._ignoreCount),
      ipv6_mask: cdktf.numberToTerraform(this._ipv6Mask),
      limit: cdktf.numberToTerraform(this._limit),
      mask: cdktf.stringToTerraform(this._mask),
      overlap: cdktf.numberToTerraform(this._overlap),
      range_factor: cdktf.numberToTerraform(this._rangeFactor),
      site_name: cdktf.stringToTerraform(this._siteName),
      smooth_factor: cdktf.numberToTerraform(this._smoothFactor),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aging_time: {
        value: cdktf.numberToHclTerraform(this._agingTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bind_geoloc: {
        value: cdktf.numberToHclTerraform(this._bindGeoloc),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_count: {
        value: cdktf.numberToHclTerraform(this._ignoreCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_mask: {
        value: cdktf.numberToHclTerraform(this._ipv6Mask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mask: {
        value: cdktf.stringToHclTerraform(this._mask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overlap: {
        value: cdktf.numberToHclTerraform(this._overlap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      range_factor: {
        value: cdktf.numberToHclTerraform(this._rangeFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smooth_factor: {
        value: cdktf.numberToHclTerraform(this._smoothFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
