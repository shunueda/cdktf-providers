// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmNextHaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The HA control plane IP address on active node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#active_node_control_plane_ip CmNextHa#active_node_control_plane_ip}
  */
  readonly activeNodeControlPlaneIp: string;
  /**
  * The HA data plane IP address on active node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#active_node_data_plane_ip CmNextHa#active_node_data_plane_ip}
  */
  readonly activeNodeDataPlaneIp: string;
  /**
  * The designated active Next instance management IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#active_node_ip CmNextHa#active_node_ip}
  */
  readonly activeNodeIp: string;
  /**
  * The VLAN for the HA control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#control_plane_vlan CmNextHa#control_plane_vlan}
  */
  readonly controlPlaneVlan: string;
  /**
  * The tag for the HA control plane VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#control_plane_vlan_tag CmNextHa#control_plane_vlan_tag}
  */
  readonly controlPlaneVlanTag: number;
  /**
  * The VLAN for the HA data plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#data_plane_vlan CmNextHa#data_plane_vlan}
  */
  readonly dataPlaneVlan: string;
  /**
  * The tag for the HA control plane VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#data_plane_vlan_tag CmNextHa#data_plane_vlan_tag}
  */
  readonly dataPlaneVlanTag: number;
  /**
  * The desired management IP of the HA cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#ha_ip CmNextHa#ha_ip}
  */
  readonly haIp: string;
  /**
  * The name of the High Availability (HA) cluster.The name must be unique and cannot be changed after the cluster is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#ha_name CmNextHa#ha_name}
  */
  readonly haName: string;
  /**
  * The HA control plane IP address on standby node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#standby_node_control_plane_ip CmNextHa#standby_node_control_plane_ip}
  */
  readonly standbyNodeControlPlaneIp: string;
  /**
  * The HA data plane IP address on standby node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#standby_node_data_plane_ip CmNextHa#standby_node_data_plane_ip}
  */
  readonly standbyNodeDataPlaneIp: string;
  /**
  * The designated standby Next instance management IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#standby_node_ip CmNextHa#standby_node_ip}
  */
  readonly standbyNodeIp: string;
  /**
  * The amount of time to wait for the HA creation task to finish, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#timeout CmNextHa#timeout}
  */
  readonly timeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha bigipnext_cm_next_ha}
*/
export class CmNextHa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_next_ha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmNextHa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmNextHa to import
  * @param importFromId The id of the existing CmNextHa that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmNextHa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_next_ha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_next_ha bigipnext_cm_next_ha} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmNextHaConfig
  */
  public constructor(scope: Construct, id: string, config: CmNextHaConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_next_ha',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeNodeControlPlaneIp = config.activeNodeControlPlaneIp;
    this._activeNodeDataPlaneIp = config.activeNodeDataPlaneIp;
    this._activeNodeIp = config.activeNodeIp;
    this._controlPlaneVlan = config.controlPlaneVlan;
    this._controlPlaneVlanTag = config.controlPlaneVlanTag;
    this._dataPlaneVlan = config.dataPlaneVlan;
    this._dataPlaneVlanTag = config.dataPlaneVlanTag;
    this._haIp = config.haIp;
    this._haName = config.haName;
    this._standbyNodeControlPlaneIp = config.standbyNodeControlPlaneIp;
    this._standbyNodeDataPlaneIp = config.standbyNodeDataPlaneIp;
    this._standbyNodeIp = config.standbyNodeIp;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_node_control_plane_ip - computed: false, optional: false, required: true
  private _activeNodeControlPlaneIp?: string; 
  public get activeNodeControlPlaneIp() {
    return this.getStringAttribute('active_node_control_plane_ip');
  }
  public set activeNodeControlPlaneIp(value: string) {
    this._activeNodeControlPlaneIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNodeControlPlaneIpInput() {
    return this._activeNodeControlPlaneIp;
  }

  // active_node_data_plane_ip - computed: false, optional: false, required: true
  private _activeNodeDataPlaneIp?: string; 
  public get activeNodeDataPlaneIp() {
    return this.getStringAttribute('active_node_data_plane_ip');
  }
  public set activeNodeDataPlaneIp(value: string) {
    this._activeNodeDataPlaneIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNodeDataPlaneIpInput() {
    return this._activeNodeDataPlaneIp;
  }

  // active_node_ip - computed: false, optional: false, required: true
  private _activeNodeIp?: string; 
  public get activeNodeIp() {
    return this.getStringAttribute('active_node_ip');
  }
  public set activeNodeIp(value: string) {
    this._activeNodeIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeNodeIpInput() {
    return this._activeNodeIp;
  }

  // control_plane_vlan - computed: false, optional: false, required: true
  private _controlPlaneVlan?: string; 
  public get controlPlaneVlan() {
    return this.getStringAttribute('control_plane_vlan');
  }
  public set controlPlaneVlan(value: string) {
    this._controlPlaneVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneVlanInput() {
    return this._controlPlaneVlan;
  }

  // control_plane_vlan_tag - computed: false, optional: false, required: true
  private _controlPlaneVlanTag?: number; 
  public get controlPlaneVlanTag() {
    return this.getNumberAttribute('control_plane_vlan_tag');
  }
  public set controlPlaneVlanTag(value: number) {
    this._controlPlaneVlanTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneVlanTagInput() {
    return this._controlPlaneVlanTag;
  }

  // data_plane_vlan - computed: false, optional: false, required: true
  private _dataPlaneVlan?: string; 
  public get dataPlaneVlan() {
    return this.getStringAttribute('data_plane_vlan');
  }
  public set dataPlaneVlan(value: string) {
    this._dataPlaneVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlaneVlanInput() {
    return this._dataPlaneVlan;
  }

  // data_plane_vlan_tag - computed: false, optional: false, required: true
  private _dataPlaneVlanTag?: number; 
  public get dataPlaneVlanTag() {
    return this.getNumberAttribute('data_plane_vlan_tag');
  }
  public set dataPlaneVlanTag(value: number) {
    this._dataPlaneVlanTag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPlaneVlanTagInput() {
    return this._dataPlaneVlanTag;
  }

  // device_id - computed: true, optional: false, required: false
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }

  // ha_ip - computed: false, optional: false, required: true
  private _haIp?: string; 
  public get haIp() {
    return this.getStringAttribute('ha_ip');
  }
  public set haIp(value: string) {
    this._haIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get haIpInput() {
    return this._haIp;
  }

  // ha_name - computed: false, optional: false, required: true
  private _haName?: string; 
  public get haName() {
    return this.getStringAttribute('ha_name');
  }
  public set haName(value: string) {
    this._haName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get haNameInput() {
    return this._haName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // standby_node_control_plane_ip - computed: false, optional: false, required: true
  private _standbyNodeControlPlaneIp?: string; 
  public get standbyNodeControlPlaneIp() {
    return this.getStringAttribute('standby_node_control_plane_ip');
  }
  public set standbyNodeControlPlaneIp(value: string) {
    this._standbyNodeControlPlaneIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyNodeControlPlaneIpInput() {
    return this._standbyNodeControlPlaneIp;
  }

  // standby_node_data_plane_ip - computed: false, optional: false, required: true
  private _standbyNodeDataPlaneIp?: string; 
  public get standbyNodeDataPlaneIp() {
    return this.getStringAttribute('standby_node_data_plane_ip');
  }
  public set standbyNodeDataPlaneIp(value: string) {
    this._standbyNodeDataPlaneIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyNodeDataPlaneIpInput() {
    return this._standbyNodeDataPlaneIp;
  }

  // standby_node_ip - computed: false, optional: false, required: true
  private _standbyNodeIp?: string; 
  public get standbyNodeIp() {
    return this.getStringAttribute('standby_node_ip');
  }
  public set standbyNodeIp(value: string) {
    this._standbyNodeIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyNodeIpInput() {
    return this._standbyNodeIp;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_node_control_plane_ip: cdktf.stringToTerraform(this._activeNodeControlPlaneIp),
      active_node_data_plane_ip: cdktf.stringToTerraform(this._activeNodeDataPlaneIp),
      active_node_ip: cdktf.stringToTerraform(this._activeNodeIp),
      control_plane_vlan: cdktf.stringToTerraform(this._controlPlaneVlan),
      control_plane_vlan_tag: cdktf.numberToTerraform(this._controlPlaneVlanTag),
      data_plane_vlan: cdktf.stringToTerraform(this._dataPlaneVlan),
      data_plane_vlan_tag: cdktf.numberToTerraform(this._dataPlaneVlanTag),
      ha_ip: cdktf.stringToTerraform(this._haIp),
      ha_name: cdktf.stringToTerraform(this._haName),
      standby_node_control_plane_ip: cdktf.stringToTerraform(this._standbyNodeControlPlaneIp),
      standby_node_data_plane_ip: cdktf.stringToTerraform(this._standbyNodeDataPlaneIp),
      standby_node_ip: cdktf.stringToTerraform(this._standbyNodeIp),
      timeout: cdktf.numberToTerraform(this._timeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_node_control_plane_ip: {
        value: cdktf.stringToHclTerraform(this._activeNodeControlPlaneIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_node_data_plane_ip: {
        value: cdktf.stringToHclTerraform(this._activeNodeDataPlaneIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_node_ip: {
        value: cdktf.stringToHclTerraform(this._activeNodeIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_vlan: {
        value: cdktf.stringToHclTerraform(this._controlPlaneVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      control_plane_vlan_tag: {
        value: cdktf.numberToHclTerraform(this._controlPlaneVlanTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_plane_vlan: {
        value: cdktf.stringToHclTerraform(this._dataPlaneVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_plane_vlan_tag: {
        value: cdktf.numberToHclTerraform(this._dataPlaneVlanTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ha_ip: {
        value: cdktf.stringToHclTerraform(this._haIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_name: {
        value: cdktf.stringToHclTerraform(this._haName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_node_control_plane_ip: {
        value: cdktf.stringToHclTerraform(this._standbyNodeControlPlaneIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_node_data_plane_ip: {
        value: cdktf.stringToHclTerraform(this._standbyNodeDataPlaneIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_node_ip: {
        value: cdktf.stringToHclTerraform(this._standbyNodeIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
