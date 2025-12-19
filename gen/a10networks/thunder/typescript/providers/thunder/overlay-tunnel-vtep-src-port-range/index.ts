// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_src_port_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OverlayTunnelVtepSrcPortRangeAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_src_port_range#id OverlayTunnelVtepSrcPortRangeA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Id1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_src_port_range#id1 OverlayTunnelVtepSrcPortRangeA#id1}
  */
  readonly id1: string;
  /**
  * Maximum Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_src_port_range#max_port OverlayTunnelVtepSrcPortRangeA#max_port}
  */
  readonly maxPort?: number;
  /**
  * Minimum Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_src_port_range#min_port OverlayTunnelVtepSrcPortRangeA#min_port}
  */
  readonly minPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_src_port_range#uuid OverlayTunnelVtepSrcPortRangeA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_src_port_range thunder_overlay_tunnel_vtep_src_port_range}
*/
export class OverlayTunnelVtepSrcPortRangeA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_overlay_tunnel_vtep_src_port_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OverlayTunnelVtepSrcPortRangeA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OverlayTunnelVtepSrcPortRangeA to import
  * @param importFromId The id of the existing OverlayTunnelVtepSrcPortRangeA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_src_port_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OverlayTunnelVtepSrcPortRangeA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_overlay_tunnel_vtep_src_port_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/overlay_tunnel_vtep_src_port_range thunder_overlay_tunnel_vtep_src_port_range} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OverlayTunnelVtepSrcPortRangeAConfig
  */
  public constructor(scope: Construct, id: string, config: OverlayTunnelVtepSrcPortRangeAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_overlay_tunnel_vtep_src_port_range',
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
    this._id1 = config.id1;
    this._maxPort = config.maxPort;
    this._minPort = config.minPort;
    this._uuid = config.uuid;
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

  // max_port - computed: false, optional: true, required: false
  private _maxPort?: number; 
  public get maxPort() {
    return this.getNumberAttribute('max_port');
  }
  public set maxPort(value: number) {
    this._maxPort = value;
  }
  public resetMaxPort() {
    this._maxPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPortInput() {
    return this._maxPort;
  }

  // min_port - computed: false, optional: true, required: false
  private _minPort?: number; 
  public get minPort() {
    return this.getNumberAttribute('min_port');
  }
  public set minPort(value: number) {
    this._minPort = value;
  }
  public resetMinPort() {
    this._minPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPortInput() {
    return this._minPort;
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
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.stringToTerraform(this._id1),
      max_port: cdktf.numberToTerraform(this._maxPort),
      min_port: cdktf.numberToTerraform(this._minPort),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      id1: {
        value: cdktf.stringToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_port: {
        value: cdktf.numberToHclTerraform(this._maxPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_port: {
        value: cdktf.numberToHclTerraform(this._minPort),
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
