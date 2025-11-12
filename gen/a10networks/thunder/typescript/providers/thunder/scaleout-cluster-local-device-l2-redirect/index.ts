// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_l2_redirect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutClusterLocalDeviceL2RedirectAConfig extends cdktf.TerraformMetaArguments {
  /**
  * ClusterId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_l2_redirect#cluster_id ScaleoutClusterLocalDeviceL2RedirectA#cluster_id}
  */
  readonly clusterId: string;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_l2_redirect#ethernet_vlan ScaleoutClusterLocalDeviceL2RedirectA#ethernet_vlan}
  */
  readonly ethernetVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_l2_redirect#id ScaleoutClusterLocalDeviceL2RedirectA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ethernet port (Port Value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_l2_redirect#redirect_eth ScaleoutClusterLocalDeviceL2RedirectA#redirect_eth}
  */
  readonly redirectEth?: number;
  /**
  * L2 Trunk group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_l2_redirect#redirect_trunk ScaleoutClusterLocalDeviceL2RedirectA#redirect_trunk}
  */
  readonly redirectTrunk?: number;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_l2_redirect#trunk_vlan ScaleoutClusterLocalDeviceL2RedirectA#trunk_vlan}
  */
  readonly trunkVlan?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_l2_redirect#uuid ScaleoutClusterLocalDeviceL2RedirectA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_l2_redirect thunder_scaleout_cluster_local_device_l2_redirect}
*/
export class ScaleoutClusterLocalDeviceL2RedirectA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_cluster_local_device_l2_redirect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutClusterLocalDeviceL2RedirectA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutClusterLocalDeviceL2RedirectA to import
  * @param importFromId The id of the existing ScaleoutClusterLocalDeviceL2RedirectA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_l2_redirect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutClusterLocalDeviceL2RedirectA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_cluster_local_device_l2_redirect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/scaleout_cluster_local_device_l2_redirect thunder_scaleout_cluster_local_device_l2_redirect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutClusterLocalDeviceL2RedirectAConfig
  */
  public constructor(scope: Construct, id: string, config: ScaleoutClusterLocalDeviceL2RedirectAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_cluster_local_device_l2_redirect',
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
    this._clusterId = config.clusterId;
    this._ethernetVlan = config.ethernetVlan;
    this._id = config.id;
    this._redirectEth = config.redirectEth;
    this._redirectTrunk = config.redirectTrunk;
    this._trunkVlan = config.trunkVlan;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // ethernet_vlan - computed: false, optional: true, required: false
  private _ethernetVlan?: number; 
  public get ethernetVlan() {
    return this.getNumberAttribute('ethernet_vlan');
  }
  public set ethernetVlan(value: number) {
    this._ethernetVlan = value;
  }
  public resetEthernetVlan() {
    this._ethernetVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetVlanInput() {
    return this._ethernetVlan;
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

  // redirect_eth - computed: false, optional: true, required: false
  private _redirectEth?: number; 
  public get redirectEth() {
    return this.getNumberAttribute('redirect_eth');
  }
  public set redirectEth(value: number) {
    this._redirectEth = value;
  }
  public resetRedirectEth() {
    this._redirectEth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectEthInput() {
    return this._redirectEth;
  }

  // redirect_trunk - computed: false, optional: true, required: false
  private _redirectTrunk?: number; 
  public get redirectTrunk() {
    return this.getNumberAttribute('redirect_trunk');
  }
  public set redirectTrunk(value: number) {
    this._redirectTrunk = value;
  }
  public resetRedirectTrunk() {
    this._redirectTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTrunkInput() {
    return this._redirectTrunk;
  }

  // trunk_vlan - computed: false, optional: true, required: false
  private _trunkVlan?: number; 
  public get trunkVlan() {
    return this.getNumberAttribute('trunk_vlan');
  }
  public set trunkVlan(value: number) {
    this._trunkVlan = value;
  }
  public resetTrunkVlan() {
    this._trunkVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkVlanInput() {
    return this._trunkVlan;
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      ethernet_vlan: cdktf.numberToTerraform(this._ethernetVlan),
      id: cdktf.stringToTerraform(this._id),
      redirect_eth: cdktf.numberToTerraform(this._redirectEth),
      redirect_trunk: cdktf.numberToTerraform(this._redirectTrunk),
      trunk_vlan: cdktf.numberToTerraform(this._trunkVlan),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_vlan: {
        value: cdktf.numberToHclTerraform(this._ethernetVlan),
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
      redirect_eth: {
        value: cdktf.numberToHclTerraform(this._redirectEth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirect_trunk: {
        value: cdktf.numberToHclTerraform(this._redirectTrunk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trunk_vlan: {
        value: cdktf.numberToHclTerraform(this._trunkVlan),
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
