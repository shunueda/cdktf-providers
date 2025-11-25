// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/traffic_bandwidth_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrafficBandwidthClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The code of area where the bandwidth located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/traffic_bandwidth_cluster#area_code TrafficBandwidthCluster#area_code}
  */
  readonly areaCode: string;
  /**
  * Bandwidth commitment. Measured in Mbps. Default value: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/traffic_bandwidth_cluster#commit_bandwidth_mbps TrafficBandwidthCluster#commit_bandwidth_mbps}
  */
  readonly commitBandwidthMbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/traffic_bandwidth_cluster#id TrafficBandwidthCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network billing method. valid values: `MonthlyPercent95Bandwidth`(for Monthly Burstable 95th billing method), `DayPeakBandwidth`(for Daily Peak billing method).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/traffic_bandwidth_cluster#internet_charge_type TrafficBandwidthCluster#internet_charge_type}
  */
  readonly internetChargeType: string;
  /**
  * The name of the bandwidth cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/traffic_bandwidth_cluster#name TrafficBandwidthCluster#name}
  */
  readonly name: string;
  /**
  * IP network type. The value is required when the billing area for bandwidth cluster is by city. valid values: `BGP`(for BGP network), `Cogent`(for Cogent network),`CN2`(for China Telecom Next Carrier Network), `CMI`(for China Mobile network), `CUG`(for China Unicom network), `CTG`(for China Telecom network).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/traffic_bandwidth_cluster#network_type TrafficBandwidthCluster#network_type}
  */
  readonly networkType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/traffic_bandwidth_cluster zenlayercloud_traffic_bandwidth_cluster}
*/
export class TrafficBandwidthCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_traffic_bandwidth_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrafficBandwidthCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrafficBandwidthCluster to import
  * @param importFromId The id of the existing TrafficBandwidthCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/traffic_bandwidth_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrafficBandwidthCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_traffic_bandwidth_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.10/docs/resources/traffic_bandwidth_cluster zenlayercloud_traffic_bandwidth_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrafficBandwidthClusterConfig
  */
  public constructor(scope: Construct, id: string, config: TrafficBandwidthClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_traffic_bandwidth_cluster',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.10',
        providerVersionConstraint: '0.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._areaCode = config.areaCode;
    this._commitBandwidthMbps = config.commitBandwidthMbps;
    this._id = config.id;
    this._internetChargeType = config.internetChargeType;
    this._name = config.name;
    this._networkType = config.networkType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area_code - computed: false, optional: false, required: true
  private _areaCode?: string; 
  public get areaCode() {
    return this.getStringAttribute('area_code');
  }
  public set areaCode(value: string) {
    this._areaCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get areaCodeInput() {
    return this._areaCode;
  }

  // commit_bandwidth_mbps - computed: false, optional: true, required: false
  private _commitBandwidthMbps?: number; 
  public get commitBandwidthMbps() {
    return this.getNumberAttribute('commit_bandwidth_mbps');
  }
  public set commitBandwidthMbps(value: number) {
    this._commitBandwidthMbps = value;
  }
  public resetCommitBandwidthMbps() {
    this._commitBandwidthMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitBandwidthMbpsInput() {
    return this._commitBandwidthMbps;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // internet_charge_type - computed: false, optional: false, required: true
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_type - computed: false, optional: false, required: true
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area_code: cdktf.stringToTerraform(this._areaCode),
      commit_bandwidth_mbps: cdktf.numberToTerraform(this._commitBandwidthMbps),
      id: cdktf.stringToTerraform(this._id),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      name: cdktf.stringToTerraform(this._name),
      network_type: cdktf.stringToTerraform(this._networkType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area_code: {
        value: cdktf.stringToHclTerraform(this._areaCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      commit_bandwidth_mbps: {
        value: cdktf.numberToHclTerraform(this._commitBandwidthMbps),
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
      internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._internetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
