// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbSiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable DNS Auto Mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#auto_map GslbSite#auto_map}
  */
  readonly autoMap?: number;
  /**
  * Specify cost of band-width
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#bw_cost GslbSite#bw_cost}
  */
  readonly bwCost?: number;
  /**
  * Specify the local controller for the GSLB site (Specify the hostname of the local controller)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#controller GslbSite#controller}
  */
  readonly controller?: string;
  /**
  * Disable all servers in the GSLB site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#disable GslbSite#disable}
  */
  readonly disable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#id GslbSite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the limit for bandwidth, default is unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#limit GslbSite#limit}
  */
  readonly limit?: number;
  /**
  * Fast GSLB Protocol aging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#proto_aging_fast GslbSite#proto_aging_fast}
  */
  readonly protoAgingFast?: number;
  /**
  * Specify GSLB Protocol aging time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#proto_aging_time GslbSite#proto_aging_time}
  */
  readonly protoAgingTime?: number;
  /**
  * Specify GSLB site name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#site_name GslbSite#site_name}
  */
  readonly siteName: string;
  /**
  * Specify template to collect site information (Specify GSLB SNMP template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#template GslbSite#template}
  */
  readonly template?: string;
  /**
  * Specify the threshold for limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#threshold GslbSite#threshold}
  */
  readonly threshold?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#user_tag GslbSite#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#uuid GslbSite#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify a weight for the GSLB site (Weight, default is 1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#weight GslbSite#weight}
  */
  readonly weight?: number;
  /**
  * active_rdt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#active_rdt GslbSite#active_rdt}
  */
  readonly activeRdt?: GslbSiteActiveRdt;
  /**
  * easy_rdt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#easy_rdt GslbSite#easy_rdt}
  */
  readonly easyRdt?: GslbSiteEasyRdt;
  /**
  * ip_server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#ip_server_list GslbSite#ip_server_list}
  */
  readonly ipServerList?: GslbSiteIpServerListStruct[] | cdktf.IResolvable;
  /**
  * multiple_geo_locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#multiple_geo_locations GslbSite#multiple_geo_locations}
  */
  readonly multipleGeoLocations?: GslbSiteMultipleGeoLocations[] | cdktf.IResolvable;
  /**
  * slb_dev_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#slb_dev_list GslbSite#slb_dev_list}
  */
  readonly slbDevList?: GslbSiteSlbDevListStruct[] | cdktf.IResolvable;
}
export interface GslbSiteActiveRdt {
  /**
  * Aging Time, Unit: min, default is 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#aging_time GslbSite#aging_time}
  */
  readonly agingTime?: number;
  /**
  * Bind RDT to geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#bind_geoloc GslbSite#bind_geoloc}
  */
  readonly bindGeoloc?: number;
  /**
  * Ignore count if RDT is out of range, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#ignore_count GslbSite#ignore_count}
  */
  readonly ignoreCount?: number;
  /**
  * Client IPv6 subnet mask, default is 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#ipv6_mask GslbSite#ipv6_mask}
  */
  readonly ipv6Mask?: number;
  /**
  * Limit of valid RDT, default is 16383 (Limit, unit: millisecond)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#limit GslbSite#limit}
  */
  readonly limit?: number;
  /**
  * Client IP subnet mask, default is 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#mask GslbSite#mask}
  */
  readonly mask?: string;
  /**
  * Enable overlap for geo-location to do longest match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#overlap GslbSite#overlap}
  */
  readonly overlap?: number;
  /**
  * Factor of RDT Range, default is 25 (Range Factor of Smooth RDT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#range_factor GslbSite#range_factor}
  */
  readonly rangeFactor?: number;
  /**
  * Factor of Smooth RDT, default is 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#smooth_factor GslbSite#smooth_factor}
  */
  readonly smoothFactor?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#uuid GslbSite#uuid}
  */
  readonly uuid?: string;
}

export function gslbSiteActiveRdtToTerraform(struct?: GslbSiteActiveRdtOutputReference | GslbSiteActiveRdt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aging_time: cdktf.numberToTerraform(struct!.agingTime),
    bind_geoloc: cdktf.numberToTerraform(struct!.bindGeoloc),
    ignore_count: cdktf.numberToTerraform(struct!.ignoreCount),
    ipv6_mask: cdktf.numberToTerraform(struct!.ipv6Mask),
    limit: cdktf.numberToTerraform(struct!.limit),
    mask: cdktf.stringToTerraform(struct!.mask),
    overlap: cdktf.numberToTerraform(struct!.overlap),
    range_factor: cdktf.numberToTerraform(struct!.rangeFactor),
    smooth_factor: cdktf.numberToTerraform(struct!.smoothFactor),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbSiteActiveRdtToHclTerraform(struct?: GslbSiteActiveRdtOutputReference | GslbSiteActiveRdt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aging_time: {
      value: cdktf.numberToHclTerraform(struct!.agingTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bind_geoloc: {
      value: cdktf.numberToHclTerraform(struct!.bindGeoloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_count: {
      value: cdktf.numberToHclTerraform(struct!.ignoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_mask: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlap: {
      value: cdktf.numberToHclTerraform(struct!.overlap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_factor: {
      value: cdktf.numberToHclTerraform(struct!.rangeFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smooth_factor: {
      value: cdktf.numberToHclTerraform(struct!.smoothFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteActiveRdtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbSiteActiveRdt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agingTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.agingTime = this._agingTime;
    }
    if (this._bindGeoloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindGeoloc = this._bindGeoloc;
    }
    if (this._ignoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCount = this._ignoreCount;
    }
    if (this._ipv6Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Mask = this._ipv6Mask;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._overlap !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlap = this._overlap;
    }
    if (this._rangeFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeFactor = this._rangeFactor;
    }
    if (this._smoothFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.smoothFactor = this._smoothFactor;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteActiveRdt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agingTime = undefined;
      this._bindGeoloc = undefined;
      this._ignoreCount = undefined;
      this._ipv6Mask = undefined;
      this._limit = undefined;
      this._mask = undefined;
      this._overlap = undefined;
      this._rangeFactor = undefined;
      this._smoothFactor = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agingTime = value.agingTime;
      this._bindGeoloc = value.bindGeoloc;
      this._ignoreCount = value.ignoreCount;
      this._ipv6Mask = value.ipv6Mask;
      this._limit = value.limit;
      this._mask = value.mask;
      this._overlap = value.overlap;
      this._rangeFactor = value.rangeFactor;
      this._smoothFactor = value.smoothFactor;
      this._uuid = value.uuid;
    }
  }

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
}
export interface GslbSiteEasyRdt {
  /**
  * Aging Time, Unit: min, default is 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#aging_time GslbSite#aging_time}
  */
  readonly agingTime?: number;
  /**
  * Bind RDT to geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#bind_geoloc GslbSite#bind_geoloc}
  */
  readonly bindGeoloc?: number;
  /**
  * Ignore count if RDT is out of range, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#ignore_count GslbSite#ignore_count}
  */
  readonly ignoreCount?: number;
  /**
  * Client IPv6 subnet mask, default is 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#ipv6_mask GslbSite#ipv6_mask}
  */
  readonly ipv6Mask?: number;
  /**
  * Limit of valid RDT, default is 16383 (Limit, unit: millisecond)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#limit GslbSite#limit}
  */
  readonly limit?: number;
  /**
  * Client IP subnet mask, default is 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#mask GslbSite#mask}
  */
  readonly mask?: string;
  /**
  * Enable overlap for geo-location to do longest match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#overlap GslbSite#overlap}
  */
  readonly overlap?: number;
  /**
  * Factor of RDT Range, default is 25 (Range Factor of Smooth RDT)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#range_factor GslbSite#range_factor}
  */
  readonly rangeFactor?: number;
  /**
  * Factor of Smooth RDT, default is 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#smooth_factor GslbSite#smooth_factor}
  */
  readonly smoothFactor?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#uuid GslbSite#uuid}
  */
  readonly uuid?: string;
}

export function gslbSiteEasyRdtToTerraform(struct?: GslbSiteEasyRdtOutputReference | GslbSiteEasyRdt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aging_time: cdktf.numberToTerraform(struct!.agingTime),
    bind_geoloc: cdktf.numberToTerraform(struct!.bindGeoloc),
    ignore_count: cdktf.numberToTerraform(struct!.ignoreCount),
    ipv6_mask: cdktf.numberToTerraform(struct!.ipv6Mask),
    limit: cdktf.numberToTerraform(struct!.limit),
    mask: cdktf.stringToTerraform(struct!.mask),
    overlap: cdktf.numberToTerraform(struct!.overlap),
    range_factor: cdktf.numberToTerraform(struct!.rangeFactor),
    smooth_factor: cdktf.numberToTerraform(struct!.smoothFactor),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbSiteEasyRdtToHclTerraform(struct?: GslbSiteEasyRdtOutputReference | GslbSiteEasyRdt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aging_time: {
      value: cdktf.numberToHclTerraform(struct!.agingTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bind_geoloc: {
      value: cdktf.numberToHclTerraform(struct!.bindGeoloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_count: {
      value: cdktf.numberToHclTerraform(struct!.ignoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_mask: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlap: {
      value: cdktf.numberToHclTerraform(struct!.overlap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    range_factor: {
      value: cdktf.numberToHclTerraform(struct!.rangeFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smooth_factor: {
      value: cdktf.numberToHclTerraform(struct!.smoothFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteEasyRdtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbSiteEasyRdt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agingTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.agingTime = this._agingTime;
    }
    if (this._bindGeoloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindGeoloc = this._bindGeoloc;
    }
    if (this._ignoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCount = this._ignoreCount;
    }
    if (this._ipv6Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Mask = this._ipv6Mask;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._overlap !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlap = this._overlap;
    }
    if (this._rangeFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeFactor = this._rangeFactor;
    }
    if (this._smoothFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.smoothFactor = this._smoothFactor;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteEasyRdt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agingTime = undefined;
      this._bindGeoloc = undefined;
      this._ignoreCount = undefined;
      this._ipv6Mask = undefined;
      this._limit = undefined;
      this._mask = undefined;
      this._overlap = undefined;
      this._rangeFactor = undefined;
      this._smoothFactor = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agingTime = value.agingTime;
      this._bindGeoloc = value.bindGeoloc;
      this._ignoreCount = value.ignoreCount;
      this._ipv6Mask = value.ipv6Mask;
      this._limit = value.limit;
      this._mask = value.mask;
      this._overlap = value.overlap;
      this._rangeFactor = value.rangeFactor;
      this._smoothFactor = value.smoothFactor;
      this._uuid = value.uuid;
    }
  }

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
}
export interface GslbSiteIpServerListStruct {
  /**
  * Specify the real server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#ip_server_name GslbSite#ip_server_name}
  */
  readonly ipServerName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#uuid GslbSite#uuid}
  */
  readonly uuid?: string;
}

export function gslbSiteIpServerListStructToTerraform(struct?: GslbSiteIpServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_server_name: cdktf.stringToTerraform(struct!.ipServerName),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbSiteIpServerListStructToHclTerraform(struct?: GslbSiteIpServerListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_server_name: {
      value: cdktf.stringToHclTerraform(struct!.ipServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteIpServerListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteIpServerListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipServerName = this._ipServerName;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteIpServerListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipServerName = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipServerName = value.ipServerName;
      this._uuid = value.uuid;
    }
  }

  // ip_server_name - computed: false, optional: false, required: true
  private _ipServerName?: string; 
  public get ipServerName() {
    return this.getStringAttribute('ip_server_name');
  }
  public set ipServerName(value: string) {
    this._ipServerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipServerNameInput() {
    return this._ipServerName;
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
}

export class GslbSiteIpServerListStructList extends cdktf.ComplexList {
  public internalValue? : GslbSiteIpServerListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteIpServerListStructOutputReference {
    return new GslbSiteIpServerListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteMultipleGeoLocations {
  /**
  * Specify the geographic location of the GSLB site (Specify geo-location for this site)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#geo_location GslbSite#geo_location}
  */
  readonly geoLocation?: string;
}

export function gslbSiteMultipleGeoLocationsToTerraform(struct?: GslbSiteMultipleGeoLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_location: cdktf.stringToTerraform(struct!.geoLocation),
  }
}


export function gslbSiteMultipleGeoLocationsToHclTerraform(struct?: GslbSiteMultipleGeoLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_location: {
      value: cdktf.stringToHclTerraform(struct!.geoLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteMultipleGeoLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteMultipleGeoLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocation = this._geoLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteMultipleGeoLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoLocation = value.geoLocation;
    }
  }

  // geo_location - computed: false, optional: true, required: false
  private _geoLocation?: string; 
  public get geoLocation() {
    return this.getStringAttribute('geo_location');
  }
  public set geoLocation(value: string) {
    this._geoLocation = value;
  }
  public resetGeoLocation() {
    this._geoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationInput() {
    return this._geoLocation;
  }
}

export class GslbSiteMultipleGeoLocationsList extends cdktf.ComplexList {
  public internalValue? : GslbSiteMultipleGeoLocations[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteMultipleGeoLocationsOutputReference {
    return new GslbSiteMultipleGeoLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevListVipServerVipServerNameListSamplingEnable {
  /**
  * 'all': all; 'dev_vip_hits': Number of times the service-ip was selected; 'dev_vip_recent': Recent hits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#counters1 GslbSite#counters1}
  */
  readonly counters1?: string;
}

export function gslbSiteSlbDevListVipServerVipServerNameListSamplingEnableToTerraform(struct?: GslbSiteSlbDevListVipServerVipServerNameListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbSiteSlbDevListVipServerVipServerNameListSamplingEnableToHclTerraform(struct?: GslbSiteSlbDevListVipServerVipServerNameListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevListVipServerVipServerNameListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevListVipServerVipServerNameListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevListVipServerVipServerNameListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbSiteSlbDevListVipServerVipServerNameListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevListVipServerVipServerNameListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevListVipServerVipServerNameListSamplingEnableOutputReference {
    return new GslbSiteSlbDevListVipServerVipServerNameListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevListVipServerVipServerNameListStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#uuid GslbSite#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify a VIP name for the SLB device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#vip_name GslbSite#vip_name}
  */
  readonly vipName: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#sampling_enable GslbSite#sampling_enable}
  */
  readonly samplingEnable?: GslbSiteSlbDevListVipServerVipServerNameListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbSiteSlbDevListVipServerVipServerNameListStructToTerraform(struct?: GslbSiteSlbDevListVipServerVipServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vip_name: cdktf.stringToTerraform(struct!.vipName),
    sampling_enable: cdktf.listMapper(gslbSiteSlbDevListVipServerVipServerNameListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbSiteSlbDevListVipServerVipServerNameListStructToHclTerraform(struct?: GslbSiteSlbDevListVipServerVipServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_name: {
      value: cdktf.stringToHclTerraform(struct!.vipName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevListVipServerVipServerNameListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevListVipServerVipServerNameListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevListVipServerVipServerNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevListVipServerVipServerNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vipName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipName = this._vipName;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevListVipServerVipServerNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uuid = undefined;
      this._vipName = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uuid = value.uuid;
      this._vipName = value.vipName;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
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

  // vip_name - computed: false, optional: false, required: true
  private _vipName?: string; 
  public get vipName() {
    return this.getStringAttribute('vip_name');
  }
  public set vipName(value: string) {
    this._vipName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipNameInput() {
    return this._vipName;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbSiteSlbDevListVipServerVipServerNameListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbSiteSlbDevListVipServerVipServerNameListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbSiteSlbDevListVipServerVipServerNameListStructList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevListVipServerVipServerNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevListVipServerVipServerNameListStructOutputReference {
    return new GslbSiteSlbDevListVipServerVipServerNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnable {
  /**
  * 'all': all; 'dev_vip_hits': Number of times the service-ip was selected; 'dev_vip_recent': Recent hits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#counters1 GslbSite#counters1}
  */
  readonly counters1?: string;
}

export function gslbSiteSlbDevListVipServerVipServerV4ListSamplingEnableToTerraform(struct?: GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbSiteSlbDevListVipServerVipServerV4ListSamplingEnableToHclTerraform(struct?: GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnableOutputReference {
    return new GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevListVipServerVipServerV4ListStruct {
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#ipv4 GslbSite#ipv4}
  */
  readonly ipv4: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#uuid GslbSite#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#sampling_enable GslbSite#sampling_enable}
  */
  readonly samplingEnable?: GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbSiteSlbDevListVipServerVipServerV4ListStructToTerraform(struct?: GslbSiteSlbDevListVipServerVipServerV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbSiteSlbDevListVipServerVipServerV4ListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbSiteSlbDevListVipServerVipServerV4ListStructToHclTerraform(struct?: GslbSiteSlbDevListVipServerVipServerV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevListVipServerVipServerV4ListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevListVipServerVipServerV4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevListVipServerVipServerV4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevListVipServerVipServerV4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbSiteSlbDevListVipServerVipServerV4ListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbSiteSlbDevListVipServerVipServerV4ListStructList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevListVipServerVipServerV4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevListVipServerVipServerV4ListStructOutputReference {
    return new GslbSiteSlbDevListVipServerVipServerV4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnable {
  /**
  * 'all': all; 'dev_vip_hits': Number of times the service-ip was selected; 'dev_vip_recent': Recent hits;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#counters1 GslbSite#counters1}
  */
  readonly counters1?: string;
}

export function gslbSiteSlbDevListVipServerVipServerV6ListSamplingEnableToTerraform(struct?: GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function gslbSiteSlbDevListVipServerVipServerV6ListSamplingEnableToHclTerraform(struct?: GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnableOutputReference {
    return new GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevListVipServerVipServerV6ListStruct {
  /**
  * Specify IP address (IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#ipv6 GslbSite#ipv6}
  */
  readonly ipv6: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#uuid GslbSite#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#sampling_enable GslbSite#sampling_enable}
  */
  readonly samplingEnable?: GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnable[] | cdktf.IResolvable;
}

export function gslbSiteSlbDevListVipServerVipServerV6ListStructToTerraform(struct?: GslbSiteSlbDevListVipServerVipServerV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(gslbSiteSlbDevListVipServerVipServerV6ListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function gslbSiteSlbDevListVipServerVipServerV6ListStructToHclTerraform(struct?: GslbSiteSlbDevListVipServerVipServerV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevListVipServerVipServerV6ListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevListVipServerVipServerV6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevListVipServerVipServerV6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevListVipServerVipServerV6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6 = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6 = value.ipv6;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // ipv6 - computed: false, optional: false, required: true
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: GslbSiteSlbDevListVipServerVipServerV6ListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class GslbSiteSlbDevListVipServerVipServerV6ListStructList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevListVipServerVipServerV6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevListVipServerVipServerV6ListStructOutputReference {
    return new GslbSiteSlbDevListVipServerVipServerV6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbSiteSlbDevListVipServer {
  /**
  * vip_server_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#vip_server_name_list GslbSite#vip_server_name_list}
  */
  readonly vipServerNameList?: GslbSiteSlbDevListVipServerVipServerNameListStruct[] | cdktf.IResolvable;
  /**
  * vip_server_v4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#vip_server_v4_list GslbSite#vip_server_v4_list}
  */
  readonly vipServerV4List?: GslbSiteSlbDevListVipServerVipServerV4ListStruct[] | cdktf.IResolvable;
  /**
  * vip_server_v6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#vip_server_v6_list GslbSite#vip_server_v6_list}
  */
  readonly vipServerV6List?: GslbSiteSlbDevListVipServerVipServerV6ListStruct[] | cdktf.IResolvable;
}

export function gslbSiteSlbDevListVipServerToTerraform(struct?: GslbSiteSlbDevListVipServerOutputReference | GslbSiteSlbDevListVipServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_server_name_list: cdktf.listMapper(gslbSiteSlbDevListVipServerVipServerNameListStructToTerraform, true)(struct!.vipServerNameList),
    vip_server_v4_list: cdktf.listMapper(gslbSiteSlbDevListVipServerVipServerV4ListStructToTerraform, true)(struct!.vipServerV4List),
    vip_server_v6_list: cdktf.listMapper(gslbSiteSlbDevListVipServerVipServerV6ListStructToTerraform, true)(struct!.vipServerV6List),
  }
}


export function gslbSiteSlbDevListVipServerToHclTerraform(struct?: GslbSiteSlbDevListVipServerOutputReference | GslbSiteSlbDevListVipServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_server_name_list: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevListVipServerVipServerNameListStructToHclTerraform, true)(struct!.vipServerNameList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevListVipServerVipServerNameListStructList",
    },
    vip_server_v4_list: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevListVipServerVipServerV4ListStructToHclTerraform, true)(struct!.vipServerV4List),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevListVipServerVipServerV4ListStructList",
    },
    vip_server_v6_list: {
      value: cdktf.listMapperHcl(gslbSiteSlbDevListVipServerVipServerV6ListStructToHclTerraform, true)(struct!.vipServerV6List),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevListVipServerVipServerV6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevListVipServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbSiteSlbDevListVipServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipServerNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerNameList = this._vipServerNameList?.internalValue;
    }
    if (this._vipServerV4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerV4List = this._vipServerV4List?.internalValue;
    }
    if (this._vipServerV6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerV6List = this._vipServerV6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevListVipServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vipServerNameList.internalValue = undefined;
      this._vipServerV4List.internalValue = undefined;
      this._vipServerV6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vipServerNameList.internalValue = value.vipServerNameList;
      this._vipServerV4List.internalValue = value.vipServerV4List;
      this._vipServerV6List.internalValue = value.vipServerV6List;
    }
  }

  // vip_server_name_list - computed: false, optional: true, required: false
  private _vipServerNameList = new GslbSiteSlbDevListVipServerVipServerNameListStructList(this, "vip_server_name_list", false);
  public get vipServerNameList() {
    return this._vipServerNameList;
  }
  public putVipServerNameList(value: GslbSiteSlbDevListVipServerVipServerNameListStruct[] | cdktf.IResolvable) {
    this._vipServerNameList.internalValue = value;
  }
  public resetVipServerNameList() {
    this._vipServerNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerNameListInput() {
    return this._vipServerNameList.internalValue;
  }

  // vip_server_v4_list - computed: false, optional: true, required: false
  private _vipServerV4List = new GslbSiteSlbDevListVipServerVipServerV4ListStructList(this, "vip_server_v4_list", false);
  public get vipServerV4List() {
    return this._vipServerV4List;
  }
  public putVipServerV4List(value: GslbSiteSlbDevListVipServerVipServerV4ListStruct[] | cdktf.IResolvable) {
    this._vipServerV4List.internalValue = value;
  }
  public resetVipServerV4List() {
    this._vipServerV4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerV4ListInput() {
    return this._vipServerV4List.internalValue;
  }

  // vip_server_v6_list - computed: false, optional: true, required: false
  private _vipServerV6List = new GslbSiteSlbDevListVipServerVipServerV6ListStructList(this, "vip_server_v6_list", false);
  public get vipServerV6List() {
    return this._vipServerV6List;
  }
  public putVipServerV6List(value: GslbSiteSlbDevListVipServerVipServerV6ListStruct[] | cdktf.IResolvable) {
    this._vipServerV6List.internalValue = value;
  }
  public resetVipServerV6List() {
    this._vipServerV6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerV6ListInput() {
    return this._vipServerV6List.internalValue;
  }
}
export interface GslbSiteSlbDevListStruct {
  /**
  * Specify administrative preference (Specify admin-preference value,default is 100)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#admin_preference GslbSite#admin_preference}
  */
  readonly adminPreference?: number;
  /**
  * 'ip': Service IP only; 'port': Service Port only; 'ip-and-port': Both service IP and service port; 'disabled': disable auto-detect;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#auto_detect GslbSite#auto_detect}
  */
  readonly autoDetect?: string;
  /**
  * Enable DNS Auto Mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#auto_map GslbSite#auto_map}
  */
  readonly autoMap?: number;
  /**
  * Specify client IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#client_ip GslbSite#client_ip}
  */
  readonly clientIp?: string;
  /**
  * 'resolve-to-ipv4': Use A Query only to resolve FQDN (Default Query type); 'resolve-to-ipv6': Use AAAA Query only to resolve FQDN; 'resolve-to-ipv4-and-ipv6': Use A as well as AAAA Query to resolve FQDN;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#dev_resolve_as GslbSite#dev_resolve_as}
  */
  readonly devResolveAs?: string;
  /**
  * Specify SLB device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#device_name GslbSite#device_name}
  */
  readonly deviceName: string;
  /**
  * Device hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#domain GslbSite#domain}
  */
  readonly domain?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#gateway_ip_addr GslbSite#gateway_ip_addr}
  */
  readonly gatewayIpAddr?: string;
  /**
  * 'health-check': Enable health Check; 'health-check-disable': Disable health check;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#health_check_action GslbSite#health_check_action}
  */
  readonly healthCheckAction?: string;
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#ip_address GslbSite#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#ipv6_address GslbSite#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Specify maximum number of clients, default is 32768
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#max_client GslbSite#max_client}
  */
  readonly maxClient?: number;
  /**
  * Run GSLB Protocol in compatible mode with a ACOS 2.x GSLB peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#msg_format_acos_2x GslbSite#msg_format_acos_2x}
  */
  readonly msgFormatAcos2X?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#probe_timer GslbSite#probe_timer}
  */
  readonly probeTimer?: number;
  /**
  * Fast GSLB Protocol aging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#proto_aging_fast GslbSite#proto_aging_fast}
  */
  readonly protoAgingFast?: number;
  /**
  * Specify GSLB Protocol aging time, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#proto_aging_time GslbSite#proto_aging_time}
  */
  readonly protoAgingTime?: number;
  /**
  * Run GSLB Protocol in compatible mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#proto_compatible GslbSite#proto_compatible}
  */
  readonly protoCompatible?: number;
  /**
  * 'rdt': rdt; 'site-rdt': site-rdt;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#rdt_type GslbSite#rdt_type}
  */
  readonly rdtType?: string;
  /**
  * Specify Round-delay-time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#rdt_value GslbSite#rdt_value}
  */
  readonly rdtValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#session_number GslbSite#session_number}
  */
  readonly sessionNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#session_utilization GslbSite#session_utilization}
  */
  readonly sessionUtilization?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#user_tag GslbSite#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#uuid GslbSite#uuid}
  */
  readonly uuid?: string;
  /**
  * vip_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#vip_server GslbSite#vip_server}
  */
  readonly vipServer?: GslbSiteSlbDevListVipServer;
}

export function gslbSiteSlbDevListStructToTerraform(struct?: GslbSiteSlbDevListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_preference: cdktf.numberToTerraform(struct!.adminPreference),
    auto_detect: cdktf.stringToTerraform(struct!.autoDetect),
    auto_map: cdktf.numberToTerraform(struct!.autoMap),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    dev_resolve_as: cdktf.stringToTerraform(struct!.devResolveAs),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    domain: cdktf.stringToTerraform(struct!.domain),
    gateway_ip_addr: cdktf.stringToTerraform(struct!.gatewayIpAddr),
    health_check_action: cdktf.stringToTerraform(struct!.healthCheckAction),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ipv6_address: cdktf.stringToTerraform(struct!.ipv6Address),
    max_client: cdktf.numberToTerraform(struct!.maxClient),
    msg_format_acos_2x: cdktf.numberToTerraform(struct!.msgFormatAcos2X),
    probe_timer: cdktf.numberToTerraform(struct!.probeTimer),
    proto_aging_fast: cdktf.numberToTerraform(struct!.protoAgingFast),
    proto_aging_time: cdktf.numberToTerraform(struct!.protoAgingTime),
    proto_compatible: cdktf.numberToTerraform(struct!.protoCompatible),
    rdt_type: cdktf.stringToTerraform(struct!.rdtType),
    rdt_value: cdktf.numberToTerraform(struct!.rdtValue),
    session_number: cdktf.numberToTerraform(struct!.sessionNumber),
    session_utilization: cdktf.numberToTerraform(struct!.sessionUtilization),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    vip_server: gslbSiteSlbDevListVipServerToTerraform(struct!.vipServer),
  }
}


export function gslbSiteSlbDevListStructToHclTerraform(struct?: GslbSiteSlbDevListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_preference: {
      value: cdktf.numberToHclTerraform(struct!.adminPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_detect: {
      value: cdktf.stringToHclTerraform(struct!.autoDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_map: {
      value: cdktf.numberToHclTerraform(struct!.autoMap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_resolve_as: {
      value: cdktf.stringToHclTerraform(struct!.devResolveAs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check_action: {
      value: cdktf.stringToHclTerraform(struct!.healthCheckAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_client: {
      value: cdktf.numberToHclTerraform(struct!.maxClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_format_acos_2x: {
      value: cdktf.numberToHclTerraform(struct!.msgFormatAcos2X),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_timer: {
      value: cdktf.numberToHclTerraform(struct!.probeTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto_aging_fast: {
      value: cdktf.numberToHclTerraform(struct!.protoAgingFast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto_aging_time: {
      value: cdktf.numberToHclTerraform(struct!.protoAgingTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto_compatible: {
      value: cdktf.numberToHclTerraform(struct!.protoCompatible),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_type: {
      value: cdktf.stringToHclTerraform(struct!.rdtType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdt_value: {
      value: cdktf.numberToHclTerraform(struct!.rdtValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_number: {
      value: cdktf.numberToHclTerraform(struct!.sessionNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_utilization: {
      value: cdktf.numberToHclTerraform(struct!.sessionUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vip_server: {
      value: gslbSiteSlbDevListVipServerToHclTerraform(struct!.vipServer),
      isBlock: true,
      type: "list",
      storageClassType: "GslbSiteSlbDevListVipServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbSiteSlbDevListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbSiteSlbDevListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPreference = this._adminPreference;
    }
    if (this._autoDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDetect = this._autoDetect;
    }
    if (this._autoMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMap = this._autoMap;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._devResolveAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.devResolveAs = this._devResolveAs;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._gatewayIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIpAddr = this._gatewayIpAddr;
    }
    if (this._healthCheckAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheckAction = this._healthCheckAction;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Address = this._ipv6Address;
    }
    if (this._maxClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClient = this._maxClient;
    }
    if (this._msgFormatAcos2X !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgFormatAcos2X = this._msgFormatAcos2X;
    }
    if (this._probeTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeTimer = this._probeTimer;
    }
    if (this._protoAgingFast !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoAgingFast = this._protoAgingFast;
    }
    if (this._protoAgingTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoAgingTime = this._protoAgingTime;
    }
    if (this._protoCompatible !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoCompatible = this._protoCompatible;
    }
    if (this._rdtType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtType = this._rdtType;
    }
    if (this._rdtValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtValue = this._rdtValue;
    }
    if (this._sessionNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionNumber = this._sessionNumber;
    }
    if (this._sessionUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionUtilization = this._sessionUtilization;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._vipServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServer = this._vipServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbSiteSlbDevListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPreference = undefined;
      this._autoDetect = undefined;
      this._autoMap = undefined;
      this._clientIp = undefined;
      this._devResolveAs = undefined;
      this._deviceName = undefined;
      this._domain = undefined;
      this._gatewayIpAddr = undefined;
      this._healthCheckAction = undefined;
      this._ipAddress = undefined;
      this._ipv6Address = undefined;
      this._maxClient = undefined;
      this._msgFormatAcos2X = undefined;
      this._probeTimer = undefined;
      this._protoAgingFast = undefined;
      this._protoAgingTime = undefined;
      this._protoCompatible = undefined;
      this._rdtType = undefined;
      this._rdtValue = undefined;
      this._sessionNumber = undefined;
      this._sessionUtilization = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._vipServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPreference = value.adminPreference;
      this._autoDetect = value.autoDetect;
      this._autoMap = value.autoMap;
      this._clientIp = value.clientIp;
      this._devResolveAs = value.devResolveAs;
      this._deviceName = value.deviceName;
      this._domain = value.domain;
      this._gatewayIpAddr = value.gatewayIpAddr;
      this._healthCheckAction = value.healthCheckAction;
      this._ipAddress = value.ipAddress;
      this._ipv6Address = value.ipv6Address;
      this._maxClient = value.maxClient;
      this._msgFormatAcos2X = value.msgFormatAcos2X;
      this._probeTimer = value.probeTimer;
      this._protoAgingFast = value.protoAgingFast;
      this._protoAgingTime = value.protoAgingTime;
      this._protoCompatible = value.protoCompatible;
      this._rdtType = value.rdtType;
      this._rdtValue = value.rdtValue;
      this._sessionNumber = value.sessionNumber;
      this._sessionUtilization = value.sessionUtilization;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._vipServer.internalValue = value.vipServer;
    }
  }

  // admin_preference - computed: false, optional: true, required: false
  private _adminPreference?: number; 
  public get adminPreference() {
    return this.getNumberAttribute('admin_preference');
  }
  public set adminPreference(value: number) {
    this._adminPreference = value;
  }
  public resetAdminPreference() {
    this._adminPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPreferenceInput() {
    return this._adminPreference;
  }

  // auto_detect - computed: false, optional: true, required: false
  private _autoDetect?: string; 
  public get autoDetect() {
    return this.getStringAttribute('auto_detect');
  }
  public set autoDetect(value: string) {
    this._autoDetect = value;
  }
  public resetAutoDetect() {
    this._autoDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectInput() {
    return this._autoDetect;
  }

  // auto_map - computed: false, optional: true, required: false
  private _autoMap?: number; 
  public get autoMap() {
    return this.getNumberAttribute('auto_map');
  }
  public set autoMap(value: number) {
    this._autoMap = value;
  }
  public resetAutoMap() {
    this._autoMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMapInput() {
    return this._autoMap;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // dev_resolve_as - computed: false, optional: true, required: false
  private _devResolveAs?: string; 
  public get devResolveAs() {
    return this.getStringAttribute('dev_resolve_as');
  }
  public set devResolveAs(value: string) {
    this._devResolveAs = value;
  }
  public resetDevResolveAs() {
    this._devResolveAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devResolveAsInput() {
    return this._devResolveAs;
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // gateway_ip_addr - computed: false, optional: true, required: false
  private _gatewayIpAddr?: string; 
  public get gatewayIpAddr() {
    return this.getStringAttribute('gateway_ip_addr');
  }
  public set gatewayIpAddr(value: string) {
    this._gatewayIpAddr = value;
  }
  public resetGatewayIpAddr() {
    this._gatewayIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpAddrInput() {
    return this._gatewayIpAddr;
  }

  // health_check_action - computed: false, optional: true, required: false
  private _healthCheckAction?: string; 
  public get healthCheckAction() {
    return this.getStringAttribute('health_check_action');
  }
  public set healthCheckAction(value: string) {
    this._healthCheckAction = value;
  }
  public resetHealthCheckAction() {
    this._healthCheckAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckActionInput() {
    return this._healthCheckAction;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // max_client - computed: false, optional: true, required: false
  private _maxClient?: number; 
  public get maxClient() {
    return this.getNumberAttribute('max_client');
  }
  public set maxClient(value: number) {
    this._maxClient = value;
  }
  public resetMaxClient() {
    this._maxClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClientInput() {
    return this._maxClient;
  }

  // msg_format_acos_2x - computed: false, optional: true, required: false
  private _msgFormatAcos2X?: number; 
  public get msgFormatAcos2X() {
    return this.getNumberAttribute('msg_format_acos_2x');
  }
  public set msgFormatAcos2X(value: number) {
    this._msgFormatAcos2X = value;
  }
  public resetMsgFormatAcos2X() {
    this._msgFormatAcos2X = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgFormatAcos2XInput() {
    return this._msgFormatAcos2X;
  }

  // probe_timer - computed: false, optional: true, required: false
  private _probeTimer?: number; 
  public get probeTimer() {
    return this.getNumberAttribute('probe_timer');
  }
  public set probeTimer(value: number) {
    this._probeTimer = value;
  }
  public resetProbeTimer() {
    this._probeTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTimerInput() {
    return this._probeTimer;
  }

  // proto_aging_fast - computed: false, optional: true, required: false
  private _protoAgingFast?: number; 
  public get protoAgingFast() {
    return this.getNumberAttribute('proto_aging_fast');
  }
  public set protoAgingFast(value: number) {
    this._protoAgingFast = value;
  }
  public resetProtoAgingFast() {
    this._protoAgingFast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoAgingFastInput() {
    return this._protoAgingFast;
  }

  // proto_aging_time - computed: false, optional: true, required: false
  private _protoAgingTime?: number; 
  public get protoAgingTime() {
    return this.getNumberAttribute('proto_aging_time');
  }
  public set protoAgingTime(value: number) {
    this._protoAgingTime = value;
  }
  public resetProtoAgingTime() {
    this._protoAgingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoAgingTimeInput() {
    return this._protoAgingTime;
  }

  // proto_compatible - computed: false, optional: true, required: false
  private _protoCompatible?: number; 
  public get protoCompatible() {
    return this.getNumberAttribute('proto_compatible');
  }
  public set protoCompatible(value: number) {
    this._protoCompatible = value;
  }
  public resetProtoCompatible() {
    this._protoCompatible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoCompatibleInput() {
    return this._protoCompatible;
  }

  // rdt_type - computed: false, optional: true, required: false
  private _rdtType?: string; 
  public get rdtType() {
    return this.getStringAttribute('rdt_type');
  }
  public set rdtType(value: string) {
    this._rdtType = value;
  }
  public resetRdtType() {
    this._rdtType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtTypeInput() {
    return this._rdtType;
  }

  // rdt_value - computed: false, optional: true, required: false
  private _rdtValue?: number; 
  public get rdtValue() {
    return this.getNumberAttribute('rdt_value');
  }
  public set rdtValue(value: number) {
    this._rdtValue = value;
  }
  public resetRdtValue() {
    this._rdtValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtValueInput() {
    return this._rdtValue;
  }

  // session_number - computed: false, optional: true, required: false
  private _sessionNumber?: number; 
  public get sessionNumber() {
    return this.getNumberAttribute('session_number');
  }
  public set sessionNumber(value: number) {
    this._sessionNumber = value;
  }
  public resetSessionNumber() {
    this._sessionNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNumberInput() {
    return this._sessionNumber;
  }

  // session_utilization - computed: false, optional: true, required: false
  private _sessionUtilization?: number; 
  public get sessionUtilization() {
    return this.getNumberAttribute('session_utilization');
  }
  public set sessionUtilization(value: number) {
    this._sessionUtilization = value;
  }
  public resetSessionUtilization() {
    this._sessionUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionUtilizationInput() {
    return this._sessionUtilization;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // vip_server - computed: false, optional: true, required: false
  private _vipServer = new GslbSiteSlbDevListVipServerOutputReference(this, "vip_server");
  public get vipServer() {
    return this._vipServer;
  }
  public putVipServer(value: GslbSiteSlbDevListVipServer) {
    this._vipServer.internalValue = value;
  }
  public resetVipServer() {
    this._vipServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerInput() {
    return this._vipServer.internalValue;
  }
}

export class GslbSiteSlbDevListStructList extends cdktf.ComplexList {
  public internalValue? : GslbSiteSlbDevListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbSiteSlbDevListStructOutputReference {
    return new GslbSiteSlbDevListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site thunder_gslb_site}
*/
export class GslbSite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbSite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbSite to import
  * @param importFromId The id of the existing GslbSite that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbSite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_site thunder_gslb_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbSiteConfig
  */
  public constructor(scope: Construct, id: string, config: GslbSiteConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_site',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoMap = config.autoMap;
    this._bwCost = config.bwCost;
    this._controller = config.controller;
    this._disable = config.disable;
    this._id = config.id;
    this._limit = config.limit;
    this._protoAgingFast = config.protoAgingFast;
    this._protoAgingTime = config.protoAgingTime;
    this._siteName = config.siteName;
    this._template = config.template;
    this._threshold = config.threshold;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._weight = config.weight;
    this._activeRdt.internalValue = config.activeRdt;
    this._easyRdt.internalValue = config.easyRdt;
    this._ipServerList.internalValue = config.ipServerList;
    this._multipleGeoLocations.internalValue = config.multipleGeoLocations;
    this._slbDevList.internalValue = config.slbDevList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_map - computed: false, optional: true, required: false
  private _autoMap?: number; 
  public get autoMap() {
    return this.getNumberAttribute('auto_map');
  }
  public set autoMap(value: number) {
    this._autoMap = value;
  }
  public resetAutoMap() {
    this._autoMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMapInput() {
    return this._autoMap;
  }

  // bw_cost - computed: false, optional: true, required: false
  private _bwCost?: number; 
  public get bwCost() {
    return this.getNumberAttribute('bw_cost');
  }
  public set bwCost(value: number) {
    this._bwCost = value;
  }
  public resetBwCost() {
    this._bwCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwCostInput() {
    return this._bwCost;
  }

  // controller - computed: false, optional: true, required: false
  private _controller?: string; 
  public get controller() {
    return this.getStringAttribute('controller');
  }
  public set controller(value: string) {
    this._controller = value;
  }
  public resetController() {
    this._controller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // proto_aging_fast - computed: false, optional: true, required: false
  private _protoAgingFast?: number; 
  public get protoAgingFast() {
    return this.getNumberAttribute('proto_aging_fast');
  }
  public set protoAgingFast(value: number) {
    this._protoAgingFast = value;
  }
  public resetProtoAgingFast() {
    this._protoAgingFast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoAgingFastInput() {
    return this._protoAgingFast;
  }

  // proto_aging_time - computed: false, optional: true, required: false
  private _protoAgingTime?: number; 
  public get protoAgingTime() {
    return this.getNumberAttribute('proto_aging_time');
  }
  public set protoAgingTime(value: number) {
    this._protoAgingTime = value;
  }
  public resetProtoAgingTime() {
    this._protoAgingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoAgingTimeInput() {
    return this._protoAgingTime;
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

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // active_rdt - computed: false, optional: true, required: false
  private _activeRdt = new GslbSiteActiveRdtOutputReference(this, "active_rdt");
  public get activeRdt() {
    return this._activeRdt;
  }
  public putActiveRdt(value: GslbSiteActiveRdt) {
    this._activeRdt.internalValue = value;
  }
  public resetActiveRdt() {
    this._activeRdt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeRdtInput() {
    return this._activeRdt.internalValue;
  }

  // easy_rdt - computed: false, optional: true, required: false
  private _easyRdt = new GslbSiteEasyRdtOutputReference(this, "easy_rdt");
  public get easyRdt() {
    return this._easyRdt;
  }
  public putEasyRdt(value: GslbSiteEasyRdt) {
    this._easyRdt.internalValue = value;
  }
  public resetEasyRdt() {
    this._easyRdt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get easyRdtInput() {
    return this._easyRdt.internalValue;
  }

  // ip_server_list - computed: false, optional: true, required: false
  private _ipServerList = new GslbSiteIpServerListStructList(this, "ip_server_list", false);
  public get ipServerList() {
    return this._ipServerList;
  }
  public putIpServerList(value: GslbSiteIpServerListStruct[] | cdktf.IResolvable) {
    this._ipServerList.internalValue = value;
  }
  public resetIpServerList() {
    this._ipServerList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipServerListInput() {
    return this._ipServerList.internalValue;
  }

  // multiple_geo_locations - computed: false, optional: true, required: false
  private _multipleGeoLocations = new GslbSiteMultipleGeoLocationsList(this, "multiple_geo_locations", false);
  public get multipleGeoLocations() {
    return this._multipleGeoLocations;
  }
  public putMultipleGeoLocations(value: GslbSiteMultipleGeoLocations[] | cdktf.IResolvable) {
    this._multipleGeoLocations.internalValue = value;
  }
  public resetMultipleGeoLocations() {
    this._multipleGeoLocations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleGeoLocationsInput() {
    return this._multipleGeoLocations.internalValue;
  }

  // slb_dev_list - computed: false, optional: true, required: false
  private _slbDevList = new GslbSiteSlbDevListStructList(this, "slb_dev_list", false);
  public get slbDevList() {
    return this._slbDevList;
  }
  public putSlbDevList(value: GslbSiteSlbDevListStruct[] | cdktf.IResolvable) {
    this._slbDevList.internalValue = value;
  }
  public resetSlbDevList() {
    this._slbDevList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbDevListInput() {
    return this._slbDevList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_map: cdktf.numberToTerraform(this._autoMap),
      bw_cost: cdktf.numberToTerraform(this._bwCost),
      controller: cdktf.stringToTerraform(this._controller),
      disable: cdktf.numberToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      proto_aging_fast: cdktf.numberToTerraform(this._protoAgingFast),
      proto_aging_time: cdktf.numberToTerraform(this._protoAgingTime),
      site_name: cdktf.stringToTerraform(this._siteName),
      template: cdktf.stringToTerraform(this._template),
      threshold: cdktf.numberToTerraform(this._threshold),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      weight: cdktf.numberToTerraform(this._weight),
      active_rdt: gslbSiteActiveRdtToTerraform(this._activeRdt.internalValue),
      easy_rdt: gslbSiteEasyRdtToTerraform(this._easyRdt.internalValue),
      ip_server_list: cdktf.listMapper(gslbSiteIpServerListStructToTerraform, true)(this._ipServerList.internalValue),
      multiple_geo_locations: cdktf.listMapper(gslbSiteMultipleGeoLocationsToTerraform, true)(this._multipleGeoLocations.internalValue),
      slb_dev_list: cdktf.listMapper(gslbSiteSlbDevListStructToTerraform, true)(this._slbDevList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_map: {
        value: cdktf.numberToHclTerraform(this._autoMap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bw_cost: {
        value: cdktf.numberToHclTerraform(this._bwCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      controller: {
        value: cdktf.stringToHclTerraform(this._controller),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proto_aging_fast: {
        value: cdktf.numberToHclTerraform(this._protoAgingFast),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proto_aging_time: {
        value: cdktf.numberToHclTerraform(this._protoAgingTime),
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
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      active_rdt: {
        value: gslbSiteActiveRdtToHclTerraform(this._activeRdt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbSiteActiveRdtList",
      },
      easy_rdt: {
        value: gslbSiteEasyRdtToHclTerraform(this._easyRdt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbSiteEasyRdtList",
      },
      ip_server_list: {
        value: cdktf.listMapperHcl(gslbSiteIpServerListStructToHclTerraform, true)(this._ipServerList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbSiteIpServerListStructList",
      },
      multiple_geo_locations: {
        value: cdktf.listMapperHcl(gslbSiteMultipleGeoLocationsToHclTerraform, true)(this._multipleGeoLocations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbSiteMultipleGeoLocationsList",
      },
      slb_dev_list: {
        value: cdktf.listMapperHcl(gslbSiteSlbDevListStructToHclTerraform, true)(this._slbDevList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbSiteSlbDevListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
