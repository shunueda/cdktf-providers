// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_standalonecluster_clusterpeer_sessionsyncfilter_customservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemStandaloneclusterClusterpeerSessionsyncfilterCustomserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_standalonecluster_clusterpeer_sessionsyncfilter_customservice#cluster_peer SystemStandaloneclusterClusterpeerSessionsyncfilterCustomservice#cluster_peer}
  */
  readonly clusterPeer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_standalonecluster_clusterpeer_sessionsyncfilter_customservice#device_name SystemStandaloneclusterClusterpeerSessionsyncfilterCustomservice#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_standalonecluster_clusterpeer_sessionsyncfilter_customservice#dst_port_range SystemStandaloneclusterClusterpeerSessionsyncfilterCustomservice#dst_port_range}
  */
  readonly dstPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_standalonecluster_clusterpeer_sessionsyncfilter_customservice#fosid SystemStandaloneclusterClusterpeerSessionsyncfilterCustomservice#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_standalonecluster_clusterpeer_sessionsyncfilter_customservice#id SystemStandaloneclusterClusterpeerSessionsyncfilterCustomservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_standalonecluster_clusterpeer_sessionsyncfilter_customservice#src_port_range SystemStandaloneclusterClusterpeerSessionsyncfilterCustomservice#src_port_range}
  */
  readonly srcPortRange?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_standalonecluster_clusterpeer_sessionsyncfilter_customservice fmgdevice_system_standalonecluster_clusterpeer_sessionsyncfilter_customservice}
*/
export class SystemStandaloneclusterClusterpeerSessionsyncfilterCustomservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_standalonecluster_clusterpeer_sessionsyncfilter_customservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemStandaloneclusterClusterpeerSessionsyncfilterCustomservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemStandaloneclusterClusterpeerSessionsyncfilterCustomservice to import
  * @param importFromId The id of the existing SystemStandaloneclusterClusterpeerSessionsyncfilterCustomservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_standalonecluster_clusterpeer_sessionsyncfilter_customservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemStandaloneclusterClusterpeerSessionsyncfilterCustomservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_standalonecluster_clusterpeer_sessionsyncfilter_customservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_standalonecluster_clusterpeer_sessionsyncfilter_customservice fmgdevice_system_standalonecluster_clusterpeer_sessionsyncfilter_customservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemStandaloneclusterClusterpeerSessionsyncfilterCustomserviceConfig
  */
  public constructor(scope: Construct, id: string, config: SystemStandaloneclusterClusterpeerSessionsyncfilterCustomserviceConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_standalonecluster_clusterpeer_sessionsyncfilter_customservice',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterPeer = config.clusterPeer;
    this._deviceName = config.deviceName;
    this._dstPortRange = config.dstPortRange;
    this._fosid = config.fosid;
    this._id = config.id;
    this._srcPortRange = config.srcPortRange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_peer - computed: false, optional: false, required: true
  private _clusterPeer?: string; 
  public get clusterPeer() {
    return this.getStringAttribute('cluster_peer');
  }
  public set clusterPeer(value: string) {
    this._clusterPeer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPeerInput() {
    return this._clusterPeer;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // dst_port_range - computed: true, optional: true, required: false
  private _dstPortRange?: string; 
  public get dstPortRange() {
    return this.getStringAttribute('dst_port_range');
  }
  public set dstPortRange(value: string) {
    this._dstPortRange = value;
  }
  public resetDstPortRange() {
    this._dstPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortRangeInput() {
    return this._dstPortRange;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // src_port_range - computed: true, optional: true, required: false
  private _srcPortRange?: string; 
  public get srcPortRange() {
    return this.getStringAttribute('src_port_range');
  }
  public set srcPortRange(value: string) {
    this._srcPortRange = value;
  }
  public resetSrcPortRange() {
    this._srcPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeInput() {
    return this._srcPortRange;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_peer: cdktf.stringToTerraform(this._clusterPeer),
      device_name: cdktf.stringToTerraform(this._deviceName),
      dst_port_range: cdktf.stringToTerraform(this._dstPortRange),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      src_port_range: cdktf.stringToTerraform(this._srcPortRange),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_peer: {
        value: cdktf.stringToHclTerraform(this._clusterPeer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_port_range: {
        value: cdktf.stringToHclTerraform(this._dstPortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
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
      src_port_range: {
        value: cdktf.stringToHclTerraform(this._srcPortRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
