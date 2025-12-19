// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_source_ve
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpRouteSourceVeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_source_ve#id IpRouteSourceVe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Nexthop IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_source_ve#nexthop_ip IpRouteSourceVe#nexthop_ip}
  */
  readonly nexthopIp: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_source_ve#uuid IpRouteSourceVe#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_source_ve#ve_num IpRouteSourceVe#ve_num}
  */
  readonly veNum: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_source_ve thunder_ip_route_source_ve}
*/
export class IpRouteSourceVe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_route_source_ve";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpRouteSourceVe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpRouteSourceVe to import
  * @param importFromId The id of the existing IpRouteSourceVe that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_source_ve#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpRouteSourceVe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_route_source_ve", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_route_source_ve thunder_ip_route_source_ve} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpRouteSourceVeConfig
  */
  public constructor(scope: Construct, id: string, config: IpRouteSourceVeConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_route_source_ve',
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
    this._id = config.id;
    this._nexthopIp = config.nexthopIp;
    this._uuid = config.uuid;
    this._veNum = config.veNum;
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

  // nexthop_ip - computed: false, optional: false, required: true
  private _nexthopIp?: string; 
  public get nexthopIp() {
    return this.getStringAttribute('nexthop_ip');
  }
  public set nexthopIp(value: string) {
    this._nexthopIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopIpInput() {
    return this._nexthopIp;
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

  // ve_num - computed: false, optional: false, required: true
  private _veNum?: number; 
  public get veNum() {
    return this.getNumberAttribute('ve_num');
  }
  public set veNum(value: number) {
    this._veNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get veNumInput() {
    return this._veNum;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      nexthop_ip: cdktf.stringToTerraform(this._nexthopIp),
      uuid: cdktf.stringToTerraform(this._uuid),
      ve_num: cdktf.numberToTerraform(this._veNum),
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
      nexthop_ip: {
        value: cdktf.stringToHclTerraform(this._nexthopIp),
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
      ve_num: {
        value: cdktf.numberToHclTerraform(this._veNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
