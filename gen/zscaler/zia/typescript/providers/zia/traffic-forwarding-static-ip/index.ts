// https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_static_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficForwardingStaticIpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional information about this static IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_static_ip#comment TrafficForwardingStaticIp#comment}
  */
  readonly comment?: string;
  /**
  * If not set, geographic coordinates and city are automatically determined from the IP address. Otherwise, the latitude and longitude coordinates must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_static_ip#geo_override TrafficForwardingStaticIp#geo_override}
  */
  readonly geoOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_static_ip#id TrafficForwardingStaticIp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The static IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_static_ip#ip_address TrafficForwardingStaticIp#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Required only if the geoOverride attribute is set. Latitude with 7 digit precision after decimal point, ranges between -90 and 90 degrees.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_static_ip#latitude TrafficForwardingStaticIp#latitude}
  */
  readonly latitude?: number;
  /**
  * Required only if the geoOverride attribute is set. Longitude with 7 digit precision after decimal point, ranges between -180 and 180 degrees.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_static_ip#longitude TrafficForwardingStaticIp#longitude}
  */
  readonly longitude?: number;
  /**
  * Indicates whether a non-RFC 1918 IP address is publicly routable. This attribute is ignored if there is no ZIA Private Service Edge associated to the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_static_ip#routable_ip TrafficForwardingStaticIp#routable_ip}
  */
  readonly routableIp?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_static_ip zia_traffic_forwarding_static_ip}
*/
export class TrafficForwardingStaticIp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_traffic_forwarding_static_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficForwardingStaticIp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficForwardingStaticIp to import
  * @param importFromId The id of the existing TrafficForwardingStaticIp that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_static_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficForwardingStaticIp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_traffic_forwarding_static_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.5.3/docs/resources/traffic_forwarding_static_ip zia_traffic_forwarding_static_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficForwardingStaticIpConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficForwardingStaticIpConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_traffic_forwarding_static_ip',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._geoOverride = config.geoOverride;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._latitude = config.latitude;
    this._longitude = config.longitude;
    this._routableIp = config.routableIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // geo_override - computed: true, optional: true, required: false
  private _geoOverride?: boolean | cdktf.IResolvable; 
  public get geoOverride() {
    return this.getBooleanAttribute('geo_override');
  }
  public set geoOverride(value: boolean | cdktf.IResolvable) {
    this._geoOverride = value;
  }
  public resetGeoOverride() {
    this._geoOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoOverrideInput() {
    return this._geoOverride;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // routable_ip - computed: true, optional: true, required: false
  private _routableIp?: boolean | cdktf.IResolvable; 
  public get routableIp() {
    return this.getBooleanAttribute('routable_ip');
  }
  public set routableIp(value: boolean | cdktf.IResolvable) {
    this._routableIp = value;
  }
  public resetRoutableIp() {
    this._routableIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routableIpInput() {
    return this._routableIp;
  }

  // static_ip_id - computed: true, optional: false, required: false
  public get staticIpId() {
    return this.getNumberAttribute('static_ip_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      geo_override: cdktf.booleanToTerraform(this._geoOverride),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      latitude: cdktf.numberToTerraform(this._latitude),
      longitude: cdktf.numberToTerraform(this._longitude),
      routable_ip: cdktf.booleanToTerraform(this._routableIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geo_override: {
        value: cdktf.booleanToHclTerraform(this._geoOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latitude: {
        value: cdktf.numberToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      longitude: {
        value: cdktf.numberToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routable_ip: {
        value: cdktf.booleanToHclTerraform(this._routableIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
