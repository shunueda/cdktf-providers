// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address_vni
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OverlayTunnelVtepLocalIpv6AddressVniConfig extends cdktf.TerraformMetaArguments {
  /**
  * This is a Gateway segment id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address_vni#gateway OverlayTunnelVtepLocalIpv6AddressVni#gateway}
  */
  readonly gateway?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address_vni#id OverlayTunnelVtepLocalIpv6AddressVni#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address_vni#id1 OverlayTunnelVtepLocalIpv6AddressVni#id1}
  */
  readonly id1: string;
  /**
  * Logical interface (logical interface name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address_vni#lif OverlayTunnelVtepLocalIpv6AddressVni#lif}
  */
  readonly lif?: string;
  /**
  * Name of the Partition with the L2 segment being extended (Name of the User Partition with the L2 segment being extended)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address_vni#partition OverlayTunnelVtepLocalIpv6AddressVni#partition}
  */
  readonly partition?: string;
  /**
  * Id of the segment that is being extended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address_vni#segment OverlayTunnelVtepLocalIpv6AddressVni#segment}
  */
  readonly segment: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address_vni#uuid OverlayTunnelVtepLocalIpv6AddressVni#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address_vni thunder_overlay_tunnel_vtep_local_ipv6_address_vni}
*/
export class OverlayTunnelVtepLocalIpv6AddressVni extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_overlay_tunnel_vtep_local_ipv6_address_vni";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OverlayTunnelVtepLocalIpv6AddressVni resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OverlayTunnelVtepLocalIpv6AddressVni to import
  * @param importFromId The id of the existing OverlayTunnelVtepLocalIpv6AddressVni that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address_vni#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OverlayTunnelVtepLocalIpv6AddressVni to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_overlay_tunnel_vtep_local_ipv6_address_vni", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_local_ipv6_address_vni thunder_overlay_tunnel_vtep_local_ipv6_address_vni} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OverlayTunnelVtepLocalIpv6AddressVniConfig
  */
  public constructor(scope: Construct, id: string, config: OverlayTunnelVtepLocalIpv6AddressVniConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_overlay_tunnel_vtep_local_ipv6_address_vni',
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
    this._gateway = config.gateway;
    this._id = config.id;
    this._id1 = config.id1;
    this._lif = config.lif;
    this._partition = config.partition;
    this._segment = config.segment;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway - computed: false, optional: true, required: false
  private _gateway?: number; 
  public get gateway() {
    return this.getNumberAttribute('gateway');
  }
  public set gateway(value: number) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // id1 - computed: false, optional: false, required: true
  private _id1?: string; 
  public get id1() {
    return this.getStringAttribute('id1');
  }
  public set id1(value: string) {
    this._id1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // lif - computed: false, optional: true, required: false
  private _lif?: string; 
  public get lif() {
    return this.getStringAttribute('lif');
  }
  public set lif(value: string) {
    this._lif = value;
  }
  public resetLif() {
    this._lif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifInput() {
    return this._lif;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // segment - computed: false, optional: false, required: true
  private _segment?: number; 
  public get segment() {
    return this.getNumberAttribute('segment');
  }
  public set segment(value: number) {
    this._segment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
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
      gateway: cdktf.numberToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.stringToTerraform(this._id1),
      lif: cdktf.stringToTerraform(this._lif),
      partition: cdktf.stringToTerraform(this._partition),
      segment: cdktf.numberToTerraform(this._segment),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway: {
        value: cdktf.numberToHclTerraform(this._gateway),
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
      id1: {
        value: cdktf.stringToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lif: {
        value: cdktf.stringToHclTerraform(this._lif),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment: {
        value: cdktf.numberToHclTerraform(this._segment),
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
