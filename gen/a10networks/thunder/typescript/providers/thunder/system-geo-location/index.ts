// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemGeoLocationAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Load built-in Maxmind GeoLite2-ASN database. Database available from http://www.maxmind.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geo_location_geolite2_asn SystemGeoLocationA#geo_location_geolite2_asn}
  */
  readonly geoLocationGeolite2Asn?: number;
  /**
  * Load built-in Maxmind GeoLite2-City database. Database available from http://www.maxmind.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geo_location_geolite2_city SystemGeoLocationA#geo_location_geolite2_city}
  */
  readonly geoLocationGeolite2City?: number;
  /**
  * Load built-in Maxmind GeoLite2-Country database. Database available from http://www.maxmind.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geo_location_geolite2_country SystemGeoLocationA#geo_location_geolite2_country}
  */
  readonly geoLocationGeolite2Country?: number;
  /**
  * Load built-in IANA Database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geo_location_iana SystemGeoLocationA#geo_location_iana}
  */
  readonly geoLocationIana?: number;
  /**
  * Load built-in IANA Database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geo_location_iana_system SystemGeoLocationA#geo_location_iana_system}
  */
  readonly geoLocationIanaSystem?: number;
  /**
  * Include IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geolite2_asn_include_ipv6 SystemGeoLocationA#geolite2_asn_include_ipv6}
  */
  readonly geolite2AsnIncludeIpv6?: number;
  /**
  * Include IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geolite2_city_include_ipv6 SystemGeoLocationA#geolite2_city_include_ipv6}
  */
  readonly geolite2CityIncludeIpv6?: number;
  /**
  * Include IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geolite2_country_include_ipv6 SystemGeoLocationA#geolite2_country_include_ipv6}
  */
  readonly geolite2CountryIncludeIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#id SystemGeoLocationA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#uuid SystemGeoLocationA#uuid}
  */
  readonly uuid?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#entry_list SystemGeoLocationA#entry_list}
  */
  readonly entryList?: SystemGeoLocationEntryListStructA[] | cdktf.IResolvable;
  /**
  * geoloc_load_file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geoloc_load_file_list SystemGeoLocationA#geoloc_load_file_list}
  */
  readonly geolocLoadFileList?: SystemGeoLocationGeolocLoadFileListStructA[] | cdktf.IResolvable;
}
export interface SystemGeoLocationEntryListGeoLocnMultipleAddressesA {
  /**
  * Specify IP information (Specify IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#first_ip_address SystemGeoLocationA#first_ip_address}
  */
  readonly firstIpAddress?: string;
  /**
  * Specify IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#first_ipv6_address SystemGeoLocationA#first_ipv6_address}
  */
  readonly firstIpv6Address?: string;
  /**
  * Specify IPv4 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geol_ipv4_mask SystemGeoLocationA#geol_ipv4_mask}
  */
  readonly geolIpv4Mask?: string;
  /**
  * Specify IPv6 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geol_ipv6_mask SystemGeoLocationA#geol_ipv6_mask}
  */
  readonly geolIpv6Mask?: number;
  /**
  * Specify IP address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#ip_addr2 SystemGeoLocationA#ip_addr2}
  */
  readonly ipAddr2?: string;
  /**
  * Specify IPv6 address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#ipv6_addr2 SystemGeoLocationA#ipv6_addr2}
  */
  readonly ipv6Addr2?: string;
}

export function systemGeoLocationEntryListGeoLocnMultipleAddressesAToTerraform(struct?: SystemGeoLocationEntryListGeoLocnMultipleAddressesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first_ip_address: cdktf.stringToTerraform(struct!.firstIpAddress),
    first_ipv6_address: cdktf.stringToTerraform(struct!.firstIpv6Address),
    geol_ipv4_mask: cdktf.stringToTerraform(struct!.geolIpv4Mask),
    geol_ipv6_mask: cdktf.numberToTerraform(struct!.geolIpv6Mask),
    ip_addr2: cdktf.stringToTerraform(struct!.ipAddr2),
    ipv6_addr2: cdktf.stringToTerraform(struct!.ipv6Addr2),
  }
}


export function systemGeoLocationEntryListGeoLocnMultipleAddressesAToHclTerraform(struct?: SystemGeoLocationEntryListGeoLocnMultipleAddressesA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.firstIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.firstIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geol_ipv4_mask: {
      value: cdktf.stringToHclTerraform(struct!.geolIpv4Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geol_ipv6_mask: {
      value: cdktf.numberToHclTerraform(struct!.geolIpv6Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_addr2: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr2: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeoLocationEntryListGeoLocnMultipleAddressesAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeoLocationEntryListGeoLocnMultipleAddressesA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firstIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstIpAddress = this._firstIpAddress;
    }
    if (this._firstIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstIpv6Address = this._firstIpv6Address;
    }
    if (this._geolIpv4Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolIpv4Mask = this._geolIpv4Mask;
    }
    if (this._geolIpv6Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolIpv6Mask = this._geolIpv6Mask;
    }
    if (this._ipAddr2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr2 = this._ipAddr2;
    }
    if (this._ipv6Addr2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr2 = this._ipv6Addr2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeoLocationEntryListGeoLocnMultipleAddressesA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firstIpAddress = undefined;
      this._firstIpv6Address = undefined;
      this._geolIpv4Mask = undefined;
      this._geolIpv6Mask = undefined;
      this._ipAddr2 = undefined;
      this._ipv6Addr2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firstIpAddress = value.firstIpAddress;
      this._firstIpv6Address = value.firstIpv6Address;
      this._geolIpv4Mask = value.geolIpv4Mask;
      this._geolIpv6Mask = value.geolIpv6Mask;
      this._ipAddr2 = value.ipAddr2;
      this._ipv6Addr2 = value.ipv6Addr2;
    }
  }

  // first_ip_address - computed: false, optional: true, required: false
  private _firstIpAddress?: string; 
  public get firstIpAddress() {
    return this.getStringAttribute('first_ip_address');
  }
  public set firstIpAddress(value: string) {
    this._firstIpAddress = value;
  }
  public resetFirstIpAddress() {
    this._firstIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstIpAddressInput() {
    return this._firstIpAddress;
  }

  // first_ipv6_address - computed: false, optional: true, required: false
  private _firstIpv6Address?: string; 
  public get firstIpv6Address() {
    return this.getStringAttribute('first_ipv6_address');
  }
  public set firstIpv6Address(value: string) {
    this._firstIpv6Address = value;
  }
  public resetFirstIpv6Address() {
    this._firstIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstIpv6AddressInput() {
    return this._firstIpv6Address;
  }

  // geol_ipv4_mask - computed: false, optional: true, required: false
  private _geolIpv4Mask?: string; 
  public get geolIpv4Mask() {
    return this.getStringAttribute('geol_ipv4_mask');
  }
  public set geolIpv4Mask(value: string) {
    this._geolIpv4Mask = value;
  }
  public resetGeolIpv4Mask() {
    this._geolIpv4Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolIpv4MaskInput() {
    return this._geolIpv4Mask;
  }

  // geol_ipv6_mask - computed: false, optional: true, required: false
  private _geolIpv6Mask?: number; 
  public get geolIpv6Mask() {
    return this.getNumberAttribute('geol_ipv6_mask');
  }
  public set geolIpv6Mask(value: number) {
    this._geolIpv6Mask = value;
  }
  public resetGeolIpv6Mask() {
    this._geolIpv6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolIpv6MaskInput() {
    return this._geolIpv6Mask;
  }

  // ip_addr2 - computed: false, optional: true, required: false
  private _ipAddr2?: string; 
  public get ipAddr2() {
    return this.getStringAttribute('ip_addr2');
  }
  public set ipAddr2(value: string) {
    this._ipAddr2 = value;
  }
  public resetIpAddr2() {
    this._ipAddr2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddr2Input() {
    return this._ipAddr2;
  }

  // ipv6_addr2 - computed: false, optional: true, required: false
  private _ipv6Addr2?: string; 
  public get ipv6Addr2() {
    return this.getStringAttribute('ipv6_addr2');
  }
  public set ipv6Addr2(value: string) {
    this._ipv6Addr2 = value;
  }
  public resetIpv6Addr2() {
    this._ipv6Addr2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Addr2Input() {
    return this._ipv6Addr2;
  }
}

export class SystemGeoLocationEntryListGeoLocnMultipleAddressesAList extends cdktf.ComplexList {
  public internalValue? : SystemGeoLocationEntryListGeoLocnMultipleAddressesA[] | cdktf.IResolvable

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
  public get(index: number): SystemGeoLocationEntryListGeoLocnMultipleAddressesAOutputReference {
    return new SystemGeoLocationEntryListGeoLocnMultipleAddressesAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeoLocationEntryListStructA {
  /**
  * Specify geo-location name, section range is (1-15)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geo_locn_obj_name SystemGeoLocationA#geo_locn_obj_name}
  */
  readonly geoLocnObjName: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#user_tag SystemGeoLocationA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#uuid SystemGeoLocationA#uuid}
  */
  readonly uuid?: string;
  /**
  * geo_locn_multiple_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geo_locn_multiple_addresses SystemGeoLocationA#geo_locn_multiple_addresses}
  */
  readonly geoLocnMultipleAddresses?: SystemGeoLocationEntryListGeoLocnMultipleAddressesA[] | cdktf.IResolvable;
}

export function systemGeoLocationEntryListStructAToTerraform(struct?: SystemGeoLocationEntryListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_locn_obj_name: cdktf.stringToTerraform(struct!.geoLocnObjName),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    geo_locn_multiple_addresses: cdktf.listMapper(systemGeoLocationEntryListGeoLocnMultipleAddressesAToTerraform, true)(struct!.geoLocnMultipleAddresses),
  }
}


export function systemGeoLocationEntryListStructAToHclTerraform(struct?: SystemGeoLocationEntryListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_locn_obj_name: {
      value: cdktf.stringToHclTerraform(struct!.geoLocnObjName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    geo_locn_multiple_addresses: {
      value: cdktf.listMapperHcl(systemGeoLocationEntryListGeoLocnMultipleAddressesAToHclTerraform, true)(struct!.geoLocnMultipleAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "SystemGeoLocationEntryListGeoLocnMultipleAddressesAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeoLocationEntryListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeoLocationEntryListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocnObjName !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocnObjName = this._geoLocnObjName;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._geoLocnMultipleAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocnMultipleAddresses = this._geoLocnMultipleAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeoLocationEntryListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoLocnObjName = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._geoLocnMultipleAddresses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoLocnObjName = value.geoLocnObjName;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._geoLocnMultipleAddresses.internalValue = value.geoLocnMultipleAddresses;
    }
  }

  // geo_locn_obj_name - computed: false, optional: false, required: true
  private _geoLocnObjName?: string; 
  public get geoLocnObjName() {
    return this.getStringAttribute('geo_locn_obj_name');
  }
  public set geoLocnObjName(value: string) {
    this._geoLocnObjName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocnObjNameInput() {
    return this._geoLocnObjName;
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

  // geo_locn_multiple_addresses - computed: false, optional: true, required: false
  private _geoLocnMultipleAddresses = new SystemGeoLocationEntryListGeoLocnMultipleAddressesAList(this, "geo_locn_multiple_addresses", false);
  public get geoLocnMultipleAddresses() {
    return this._geoLocnMultipleAddresses;
  }
  public putGeoLocnMultipleAddresses(value: SystemGeoLocationEntryListGeoLocnMultipleAddressesA[] | cdktf.IResolvable) {
    this._geoLocnMultipleAddresses.internalValue = value;
  }
  public resetGeoLocnMultipleAddresses() {
    this._geoLocnMultipleAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocnMultipleAddressesInput() {
    return this._geoLocnMultipleAddresses.internalValue;
  }
}

export class SystemGeoLocationEntryListStructAList extends cdktf.ComplexList {
  public internalValue? : SystemGeoLocationEntryListStructA[] | cdktf.IResolvable

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
  public get(index: number): SystemGeoLocationEntryListStructAOutputReference {
    return new SystemGeoLocationEntryListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemGeoLocationGeolocLoadFileListStructA {
  /**
  * Include IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geo_location_load_file_include_ipv6 SystemGeoLocationA#geo_location_load_file_include_ipv6}
  */
  readonly geoLocationLoadFileIncludeIpv6?: number;
  /**
  * Specify file to be loaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geo_location_load_filename SystemGeoLocationA#geo_location_load_filename}
  */
  readonly geoLocationLoadFilename?: string;
  /**
  * Include IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#geo_location_load_temp_include_ipv6 SystemGeoLocationA#geo_location_load_temp_include_ipv6}
  */
  readonly geoLocationLoadTempIncludeIpv6?: number;
  /**
  * Use CSV template to load this file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#template_name SystemGeoLocationA#template_name}
  */
  readonly templateName?: string;
}

export function systemGeoLocationGeolocLoadFileListStructAToTerraform(struct?: SystemGeoLocationGeolocLoadFileListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_location_load_file_include_ipv6: cdktf.numberToTerraform(struct!.geoLocationLoadFileIncludeIpv6),
    geo_location_load_filename: cdktf.stringToTerraform(struct!.geoLocationLoadFilename),
    geo_location_load_temp_include_ipv6: cdktf.numberToTerraform(struct!.geoLocationLoadTempIncludeIpv6),
    template_name: cdktf.stringToTerraform(struct!.templateName),
  }
}


export function systemGeoLocationGeolocLoadFileListStructAToHclTerraform(struct?: SystemGeoLocationGeolocLoadFileListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_location_load_file_include_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.geoLocationLoadFileIncludeIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_location_load_filename: {
      value: cdktf.stringToHclTerraform(struct!.geoLocationLoadFilename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_location_load_temp_include_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.geoLocationLoadTempIncludeIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemGeoLocationGeolocLoadFileListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemGeoLocationGeolocLoadFileListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoLocationLoadFileIncludeIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationLoadFileIncludeIpv6 = this._geoLocationLoadFileIncludeIpv6;
    }
    if (this._geoLocationLoadFilename !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationLoadFilename = this._geoLocationLoadFilename;
    }
    if (this._geoLocationLoadTempIncludeIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocationLoadTempIncludeIpv6 = this._geoLocationLoadTempIncludeIpv6;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemGeoLocationGeolocLoadFileListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._geoLocationLoadFileIncludeIpv6 = undefined;
      this._geoLocationLoadFilename = undefined;
      this._geoLocationLoadTempIncludeIpv6 = undefined;
      this._templateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._geoLocationLoadFileIncludeIpv6 = value.geoLocationLoadFileIncludeIpv6;
      this._geoLocationLoadFilename = value.geoLocationLoadFilename;
      this._geoLocationLoadTempIncludeIpv6 = value.geoLocationLoadTempIncludeIpv6;
      this._templateName = value.templateName;
    }
  }

  // geo_location_load_file_include_ipv6 - computed: false, optional: true, required: false
  private _geoLocationLoadFileIncludeIpv6?: number; 
  public get geoLocationLoadFileIncludeIpv6() {
    return this.getNumberAttribute('geo_location_load_file_include_ipv6');
  }
  public set geoLocationLoadFileIncludeIpv6(value: number) {
    this._geoLocationLoadFileIncludeIpv6 = value;
  }
  public resetGeoLocationLoadFileIncludeIpv6() {
    this._geoLocationLoadFileIncludeIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationLoadFileIncludeIpv6Input() {
    return this._geoLocationLoadFileIncludeIpv6;
  }

  // geo_location_load_filename - computed: false, optional: true, required: false
  private _geoLocationLoadFilename?: string; 
  public get geoLocationLoadFilename() {
    return this.getStringAttribute('geo_location_load_filename');
  }
  public set geoLocationLoadFilename(value: string) {
    this._geoLocationLoadFilename = value;
  }
  public resetGeoLocationLoadFilename() {
    this._geoLocationLoadFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationLoadFilenameInput() {
    return this._geoLocationLoadFilename;
  }

  // geo_location_load_temp_include_ipv6 - computed: false, optional: true, required: false
  private _geoLocationLoadTempIncludeIpv6?: number; 
  public get geoLocationLoadTempIncludeIpv6() {
    return this.getNumberAttribute('geo_location_load_temp_include_ipv6');
  }
  public set geoLocationLoadTempIncludeIpv6(value: number) {
    this._geoLocationLoadTempIncludeIpv6 = value;
  }
  public resetGeoLocationLoadTempIncludeIpv6() {
    this._geoLocationLoadTempIncludeIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationLoadTempIncludeIpv6Input() {
    return this._geoLocationLoadTempIncludeIpv6;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }
}

export class SystemGeoLocationGeolocLoadFileListStructAList extends cdktf.ComplexList {
  public internalValue? : SystemGeoLocationGeolocLoadFileListStructA[] | cdktf.IResolvable

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
  public get(index: number): SystemGeoLocationGeolocLoadFileListStructAOutputReference {
    return new SystemGeoLocationGeolocLoadFileListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location thunder_system_geo_location}
*/
export class SystemGeoLocationA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_geo_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemGeoLocationA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemGeoLocationA to import
  * @param importFromId The id of the existing SystemGeoLocationA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemGeoLocationA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_geo_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_geo_location thunder_system_geo_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemGeoLocationAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemGeoLocationAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_geo_location',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._geoLocationGeolite2Asn = config.geoLocationGeolite2Asn;
    this._geoLocationGeolite2City = config.geoLocationGeolite2City;
    this._geoLocationGeolite2Country = config.geoLocationGeolite2Country;
    this._geoLocationIana = config.geoLocationIana;
    this._geoLocationIanaSystem = config.geoLocationIanaSystem;
    this._geolite2AsnIncludeIpv6 = config.geolite2AsnIncludeIpv6;
    this._geolite2CityIncludeIpv6 = config.geolite2CityIncludeIpv6;
    this._geolite2CountryIncludeIpv6 = config.geolite2CountryIncludeIpv6;
    this._id = config.id;
    this._uuid = config.uuid;
    this._entryList.internalValue = config.entryList;
    this._geolocLoadFileList.internalValue = config.geolocLoadFileList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // geo_location_geolite2_asn - computed: false, optional: true, required: false
  private _geoLocationGeolite2Asn?: number; 
  public get geoLocationGeolite2Asn() {
    return this.getNumberAttribute('geo_location_geolite2_asn');
  }
  public set geoLocationGeolite2Asn(value: number) {
    this._geoLocationGeolite2Asn = value;
  }
  public resetGeoLocationGeolite2Asn() {
    this._geoLocationGeolite2Asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationGeolite2AsnInput() {
    return this._geoLocationGeolite2Asn;
  }

  // geo_location_geolite2_city - computed: false, optional: true, required: false
  private _geoLocationGeolite2City?: number; 
  public get geoLocationGeolite2City() {
    return this.getNumberAttribute('geo_location_geolite2_city');
  }
  public set geoLocationGeolite2City(value: number) {
    this._geoLocationGeolite2City = value;
  }
  public resetGeoLocationGeolite2City() {
    this._geoLocationGeolite2City = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationGeolite2CityInput() {
    return this._geoLocationGeolite2City;
  }

  // geo_location_geolite2_country - computed: false, optional: true, required: false
  private _geoLocationGeolite2Country?: number; 
  public get geoLocationGeolite2Country() {
    return this.getNumberAttribute('geo_location_geolite2_country');
  }
  public set geoLocationGeolite2Country(value: number) {
    this._geoLocationGeolite2Country = value;
  }
  public resetGeoLocationGeolite2Country() {
    this._geoLocationGeolite2Country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationGeolite2CountryInput() {
    return this._geoLocationGeolite2Country;
  }

  // geo_location_iana - computed: false, optional: true, required: false
  private _geoLocationIana?: number; 
  public get geoLocationIana() {
    return this.getNumberAttribute('geo_location_iana');
  }
  public set geoLocationIana(value: number) {
    this._geoLocationIana = value;
  }
  public resetGeoLocationIana() {
    this._geoLocationIana = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationIanaInput() {
    return this._geoLocationIana;
  }

  // geo_location_iana_system - computed: false, optional: true, required: false
  private _geoLocationIanaSystem?: number; 
  public get geoLocationIanaSystem() {
    return this.getNumberAttribute('geo_location_iana_system');
  }
  public set geoLocationIanaSystem(value: number) {
    this._geoLocationIanaSystem = value;
  }
  public resetGeoLocationIanaSystem() {
    this._geoLocationIanaSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationIanaSystemInput() {
    return this._geoLocationIanaSystem;
  }

  // geolite2_asn_include_ipv6 - computed: false, optional: true, required: false
  private _geolite2AsnIncludeIpv6?: number; 
  public get geolite2AsnIncludeIpv6() {
    return this.getNumberAttribute('geolite2_asn_include_ipv6');
  }
  public set geolite2AsnIncludeIpv6(value: number) {
    this._geolite2AsnIncludeIpv6 = value;
  }
  public resetGeolite2AsnIncludeIpv6() {
    this._geolite2AsnIncludeIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolite2AsnIncludeIpv6Input() {
    return this._geolite2AsnIncludeIpv6;
  }

  // geolite2_city_include_ipv6 - computed: false, optional: true, required: false
  private _geolite2CityIncludeIpv6?: number; 
  public get geolite2CityIncludeIpv6() {
    return this.getNumberAttribute('geolite2_city_include_ipv6');
  }
  public set geolite2CityIncludeIpv6(value: number) {
    this._geolite2CityIncludeIpv6 = value;
  }
  public resetGeolite2CityIncludeIpv6() {
    this._geolite2CityIncludeIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolite2CityIncludeIpv6Input() {
    return this._geolite2CityIncludeIpv6;
  }

  // geolite2_country_include_ipv6 - computed: false, optional: true, required: false
  private _geolite2CountryIncludeIpv6?: number; 
  public get geolite2CountryIncludeIpv6() {
    return this.getNumberAttribute('geolite2_country_include_ipv6');
  }
  public set geolite2CountryIncludeIpv6(value: number) {
    this._geolite2CountryIncludeIpv6 = value;
  }
  public resetGeolite2CountryIncludeIpv6() {
    this._geolite2CountryIncludeIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolite2CountryIncludeIpv6Input() {
    return this._geolite2CountryIncludeIpv6;
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

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new SystemGeoLocationEntryListStructAList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: SystemGeoLocationEntryListStructA[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }

  // geoloc_load_file_list - computed: false, optional: true, required: false
  private _geolocLoadFileList = new SystemGeoLocationGeolocLoadFileListStructAList(this, "geoloc_load_file_list", false);
  public get geolocLoadFileList() {
    return this._geolocLoadFileList;
  }
  public putGeolocLoadFileList(value: SystemGeoLocationGeolocLoadFileListStructA[] | cdktf.IResolvable) {
    this._geolocLoadFileList.internalValue = value;
  }
  public resetGeolocLoadFileList() {
    this._geolocLoadFileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocLoadFileListInput() {
    return this._geolocLoadFileList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      geo_location_geolite2_asn: cdktf.numberToTerraform(this._geoLocationGeolite2Asn),
      geo_location_geolite2_city: cdktf.numberToTerraform(this._geoLocationGeolite2City),
      geo_location_geolite2_country: cdktf.numberToTerraform(this._geoLocationGeolite2Country),
      geo_location_iana: cdktf.numberToTerraform(this._geoLocationIana),
      geo_location_iana_system: cdktf.numberToTerraform(this._geoLocationIanaSystem),
      geolite2_asn_include_ipv6: cdktf.numberToTerraform(this._geolite2AsnIncludeIpv6),
      geolite2_city_include_ipv6: cdktf.numberToTerraform(this._geolite2CityIncludeIpv6),
      geolite2_country_include_ipv6: cdktf.numberToTerraform(this._geolite2CountryIncludeIpv6),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      entry_list: cdktf.listMapper(systemGeoLocationEntryListStructAToTerraform, true)(this._entryList.internalValue),
      geoloc_load_file_list: cdktf.listMapper(systemGeoLocationGeolocLoadFileListStructAToTerraform, true)(this._geolocLoadFileList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      geo_location_geolite2_asn: {
        value: cdktf.numberToHclTerraform(this._geoLocationGeolite2Asn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geo_location_geolite2_city: {
        value: cdktf.numberToHclTerraform(this._geoLocationGeolite2City),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geo_location_geolite2_country: {
        value: cdktf.numberToHclTerraform(this._geoLocationGeolite2Country),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geo_location_iana: {
        value: cdktf.numberToHclTerraform(this._geoLocationIana),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geo_location_iana_system: {
        value: cdktf.numberToHclTerraform(this._geoLocationIanaSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geolite2_asn_include_ipv6: {
        value: cdktf.numberToHclTerraform(this._geolite2AsnIncludeIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geolite2_city_include_ipv6: {
        value: cdktf.numberToHclTerraform(this._geolite2CityIncludeIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geolite2_country_include_ipv6: {
        value: cdktf.numberToHclTerraform(this._geolite2CountryIncludeIpv6),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_list: {
        value: cdktf.listMapperHcl(systemGeoLocationEntryListStructAToHclTerraform, true)(this._entryList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemGeoLocationEntryListStructAList",
      },
      geoloc_load_file_list: {
        value: cdktf.listMapperHcl(systemGeoLocationGeolocLoadFileListStructAToHclTerraform, true)(this._geolocLoadFileList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemGeoLocationGeolocLoadFileListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
