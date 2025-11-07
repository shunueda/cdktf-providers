// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbGeoLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify geo-location name, section range is (1-15)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#geo_locn_obj_name GslbGeoLocation#geo_locn_obj_name}
  */
  readonly geoLocnObjName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#id GslbGeoLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#user_tag GslbGeoLocation#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#uuid GslbGeoLocation#uuid}
  */
  readonly uuid?: string;
  /**
  * geo_locn_multiple_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#geo_locn_multiple_addresses GslbGeoLocation#geo_locn_multiple_addresses}
  */
  readonly geoLocnMultipleAddresses?: GslbGeoLocationGeoLocnMultipleAddresses[] | cdktf.IResolvable;
}
export interface GslbGeoLocationGeoLocnMultipleAddresses {
  /**
  * Specify IP information (Specify IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#first_ip_address GslbGeoLocation#first_ip_address}
  */
  readonly firstIpAddress?: string;
  /**
  * Specify IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#first_ipv6_address GslbGeoLocation#first_ipv6_address}
  */
  readonly firstIpv6Address?: string;
  /**
  * Specify IPv4 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#geol_ipv4_mask GslbGeoLocation#geol_ipv4_mask}
  */
  readonly geolIpv4Mask?: string;
  /**
  * Specify IPv6 mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#geol_ipv6_mask GslbGeoLocation#geol_ipv6_mask}
  */
  readonly geolIpv6Mask?: number;
  /**
  * Specify IP address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#ip_addr2 GslbGeoLocation#ip_addr2}
  */
  readonly ipAddr2?: string;
  /**
  * Specify IPv6 address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#ipv6_addr2 GslbGeoLocation#ipv6_addr2}
  */
  readonly ipv6Addr2?: string;
}

export function gslbGeoLocationGeoLocnMultipleAddressesToTerraform(struct?: GslbGeoLocationGeoLocnMultipleAddresses | cdktf.IResolvable): any {
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


export function gslbGeoLocationGeoLocnMultipleAddressesToHclTerraform(struct?: GslbGeoLocationGeoLocnMultipleAddresses | cdktf.IResolvable): any {
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

export class GslbGeoLocationGeoLocnMultipleAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbGeoLocationGeoLocnMultipleAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GslbGeoLocationGeoLocnMultipleAddresses | cdktf.IResolvable | undefined) {
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

export class GslbGeoLocationGeoLocnMultipleAddressesList extends cdktf.ComplexList {
  public internalValue? : GslbGeoLocationGeoLocnMultipleAddresses[] | cdktf.IResolvable

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
  public get(index: number): GslbGeoLocationGeoLocnMultipleAddressesOutputReference {
    return new GslbGeoLocationGeoLocnMultipleAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location thunder_gslb_geo_location}
*/
export class GslbGeoLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_geo_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbGeoLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbGeoLocation to import
  * @param importFromId The id of the existing GslbGeoLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbGeoLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_geo_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_geo_location thunder_gslb_geo_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbGeoLocationConfig
  */
  public constructor(scope: Construct, id: string, config: GslbGeoLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_geo_location',
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
    this._geoLocnObjName = config.geoLocnObjName;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._geoLocnMultipleAddresses.internalValue = config.geoLocnMultipleAddresses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _geoLocnMultipleAddresses = new GslbGeoLocationGeoLocnMultipleAddressesList(this, "geo_locn_multiple_addresses", false);
  public get geoLocnMultipleAddresses() {
    return this._geoLocnMultipleAddresses;
  }
  public putGeoLocnMultipleAddresses(value: GslbGeoLocationGeoLocnMultipleAddresses[] | cdktf.IResolvable) {
    this._geoLocnMultipleAddresses.internalValue = value;
  }
  public resetGeoLocnMultipleAddresses() {
    this._geoLocnMultipleAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocnMultipleAddressesInput() {
    return this._geoLocnMultipleAddresses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      geo_locn_obj_name: cdktf.stringToTerraform(this._geoLocnObjName),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      geo_locn_multiple_addresses: cdktf.listMapper(gslbGeoLocationGeoLocnMultipleAddressesToTerraform, true)(this._geoLocnMultipleAddresses.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      geo_locn_obj_name: {
        value: cdktf.stringToHclTerraform(this._geoLocnObjName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      geo_locn_multiple_addresses: {
        value: cdktf.listMapperHcl(gslbGeoLocationGeoLocnMultipleAddressesToHclTerraform, true)(this._geoLocnMultipleAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbGeoLocationGeoLocnMultipleAddressesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
