// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScaleoutClusterDbConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * database connection broken detection timeout (mseconds) (12000 mseconds for default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#broken_detect_timeout ScaleoutClusterDbConfigA#broken_detect_timeout}
  */
  readonly brokenDetectTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#client_recv_timeout ScaleoutClusterDbConfigA#client_recv_timeout}
  */
  readonly clientRecvTimeout?: number;
  /**
  * client session port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#clientport ScaleoutClusterDbConfigA#clientport}
  */
  readonly clientport?: number;
  /**
  * ClusterId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#cluster_id ScaleoutClusterDbConfigA#cluster_id}
  */
  readonly clusterId: string;
  /**
  * election connection timeout (mseconds) (1200 for default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#elect_conn_timeout ScaleoutClusterDbConfigA#elect_conn_timeout}
  */
  readonly electConnTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#id ScaleoutClusterDbConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#initlimit ScaleoutClusterDbConfigA#initlimit}
  */
  readonly initlimit?: number;
  /**
  * support loopback interface for scaleout database (enabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#loopback_intf_support ScaleoutClusterDbConfigA#loopback_intf_support}
  */
  readonly loopbackIntfSupport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#maxsessiontimeout ScaleoutClusterDbConfigA#maxsessiontimeout}
  */
  readonly maxsessiontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#minsessiontimeout ScaleoutClusterDbConfigA#minsessiontimeout}
  */
  readonly minsessiontimeout?: number;
  /**
  * send more election packet in election period (enabled by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#more_election_packet ScaleoutClusterDbConfigA#more_election_packet}
  */
  readonly moreElectionPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#synclimit ScaleoutClusterDbConfigA#synclimit}
  */
  readonly synclimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#ticktime ScaleoutClusterDbConfigA#ticktime}
  */
  readonly ticktime?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#uuid ScaleoutClusterDbConfigA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config thunder_scaleout_cluster_db_config}
*/
export class ScaleoutClusterDbConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_scaleout_cluster_db_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScaleoutClusterDbConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScaleoutClusterDbConfigA to import
  * @param importFromId The id of the existing ScaleoutClusterDbConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScaleoutClusterDbConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_scaleout_cluster_db_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/scaleout_cluster_db_config thunder_scaleout_cluster_db_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScaleoutClusterDbConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: ScaleoutClusterDbConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_scaleout_cluster_db_config',
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
    this._brokenDetectTimeout = config.brokenDetectTimeout;
    this._clientRecvTimeout = config.clientRecvTimeout;
    this._clientport = config.clientport;
    this._clusterId = config.clusterId;
    this._electConnTimeout = config.electConnTimeout;
    this._id = config.id;
    this._initlimit = config.initlimit;
    this._loopbackIntfSupport = config.loopbackIntfSupport;
    this._maxsessiontimeout = config.maxsessiontimeout;
    this._minsessiontimeout = config.minsessiontimeout;
    this._moreElectionPacket = config.moreElectionPacket;
    this._synclimit = config.synclimit;
    this._ticktime = config.ticktime;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // broken_detect_timeout - computed: false, optional: true, required: false
  private _brokenDetectTimeout?: number; 
  public get brokenDetectTimeout() {
    return this.getNumberAttribute('broken_detect_timeout');
  }
  public set brokenDetectTimeout(value: number) {
    this._brokenDetectTimeout = value;
  }
  public resetBrokenDetectTimeout() {
    this._brokenDetectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokenDetectTimeoutInput() {
    return this._brokenDetectTimeout;
  }

  // client_recv_timeout - computed: false, optional: true, required: false
  private _clientRecvTimeout?: number; 
  public get clientRecvTimeout() {
    return this.getNumberAttribute('client_recv_timeout');
  }
  public set clientRecvTimeout(value: number) {
    this._clientRecvTimeout = value;
  }
  public resetClientRecvTimeout() {
    this._clientRecvTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRecvTimeoutInput() {
    return this._clientRecvTimeout;
  }

  // clientport - computed: false, optional: true, required: false
  private _clientport?: number; 
  public get clientport() {
    return this.getNumberAttribute('clientport');
  }
  public set clientport(value: number) {
    this._clientport = value;
  }
  public resetClientport() {
    this._clientport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientportInput() {
    return this._clientport;
  }

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

  // elect_conn_timeout - computed: false, optional: true, required: false
  private _electConnTimeout?: number; 
  public get electConnTimeout() {
    return this.getNumberAttribute('elect_conn_timeout');
  }
  public set electConnTimeout(value: number) {
    this._electConnTimeout = value;
  }
  public resetElectConnTimeout() {
    this._electConnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get electConnTimeoutInput() {
    return this._electConnTimeout;
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

  // initlimit - computed: false, optional: true, required: false
  private _initlimit?: number; 
  public get initlimit() {
    return this.getNumberAttribute('initlimit');
  }
  public set initlimit(value: number) {
    this._initlimit = value;
  }
  public resetInitlimit() {
    this._initlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initlimitInput() {
    return this._initlimit;
  }

  // loopback_intf_support - computed: false, optional: true, required: false
  private _loopbackIntfSupport?: number; 
  public get loopbackIntfSupport() {
    return this.getNumberAttribute('loopback_intf_support');
  }
  public set loopbackIntfSupport(value: number) {
    this._loopbackIntfSupport = value;
  }
  public resetLoopbackIntfSupport() {
    this._loopbackIntfSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackIntfSupportInput() {
    return this._loopbackIntfSupport;
  }

  // maxsessiontimeout - computed: false, optional: true, required: false
  private _maxsessiontimeout?: number; 
  public get maxsessiontimeout() {
    return this.getNumberAttribute('maxsessiontimeout');
  }
  public set maxsessiontimeout(value: number) {
    this._maxsessiontimeout = value;
  }
  public resetMaxsessiontimeout() {
    this._maxsessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsessiontimeoutInput() {
    return this._maxsessiontimeout;
  }

  // minsessiontimeout - computed: false, optional: true, required: false
  private _minsessiontimeout?: number; 
  public get minsessiontimeout() {
    return this.getNumberAttribute('minsessiontimeout');
  }
  public set minsessiontimeout(value: number) {
    this._minsessiontimeout = value;
  }
  public resetMinsessiontimeout() {
    this._minsessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minsessiontimeoutInput() {
    return this._minsessiontimeout;
  }

  // more_election_packet - computed: false, optional: true, required: false
  private _moreElectionPacket?: number; 
  public get moreElectionPacket() {
    return this.getNumberAttribute('more_election_packet');
  }
  public set moreElectionPacket(value: number) {
    this._moreElectionPacket = value;
  }
  public resetMoreElectionPacket() {
    this._moreElectionPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moreElectionPacketInput() {
    return this._moreElectionPacket;
  }

  // synclimit - computed: false, optional: true, required: false
  private _synclimit?: number; 
  public get synclimit() {
    return this.getNumberAttribute('synclimit');
  }
  public set synclimit(value: number) {
    this._synclimit = value;
  }
  public resetSynclimit() {
    this._synclimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synclimitInput() {
    return this._synclimit;
  }

  // ticktime - computed: false, optional: true, required: false
  private _ticktime?: number; 
  public get ticktime() {
    return this.getNumberAttribute('ticktime');
  }
  public set ticktime(value: number) {
    this._ticktime = value;
  }
  public resetTicktime() {
    this._ticktime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticktimeInput() {
    return this._ticktime;
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
      broken_detect_timeout: cdktf.numberToTerraform(this._brokenDetectTimeout),
      client_recv_timeout: cdktf.numberToTerraform(this._clientRecvTimeout),
      clientport: cdktf.numberToTerraform(this._clientport),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      elect_conn_timeout: cdktf.numberToTerraform(this._electConnTimeout),
      id: cdktf.stringToTerraform(this._id),
      initlimit: cdktf.numberToTerraform(this._initlimit),
      loopback_intf_support: cdktf.numberToTerraform(this._loopbackIntfSupport),
      maxsessiontimeout: cdktf.numberToTerraform(this._maxsessiontimeout),
      minsessiontimeout: cdktf.numberToTerraform(this._minsessiontimeout),
      more_election_packet: cdktf.numberToTerraform(this._moreElectionPacket),
      synclimit: cdktf.numberToTerraform(this._synclimit),
      ticktime: cdktf.numberToTerraform(this._ticktime),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      broken_detect_timeout: {
        value: cdktf.numberToHclTerraform(this._brokenDetectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_recv_timeout: {
        value: cdktf.numberToHclTerraform(this._clientRecvTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clientport: {
        value: cdktf.numberToHclTerraform(this._clientport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elect_conn_timeout: {
        value: cdktf.numberToHclTerraform(this._electConnTimeout),
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
      initlimit: {
        value: cdktf.numberToHclTerraform(this._initlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loopback_intf_support: {
        value: cdktf.numberToHclTerraform(this._loopbackIntfSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxsessiontimeout: {
        value: cdktf.numberToHclTerraform(this._maxsessiontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minsessiontimeout: {
        value: cdktf.numberToHclTerraform(this._minsessiontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      more_election_packet: {
        value: cdktf.numberToHclTerraform(this._moreElectionPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      synclimit: {
        value: cdktf.numberToHclTerraform(this._synclimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ticktime: {
        value: cdktf.numberToHclTerraform(this._ticktime),
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
