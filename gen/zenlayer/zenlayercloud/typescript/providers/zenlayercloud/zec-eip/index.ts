// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZecEipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bandwidth. Measured in Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#bandwidth ZecEip#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Bandwidth cluster ID. Required when `internet_charge_type` is `BandwidthCluster`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#bandwidth_cluster_id ZecEip#bandwidth_cluster_id}
  */
  readonly bandwidthClusterId?: string;
  /**
  * CIDR ID, the elastic ip will allocated from given CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#cidr_id ZecEip#cidr_id}
  */
  readonly cidrId?: string;
  /**
  * The Data transfer package. Measured in TB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#flow_package_size ZecEip#flow_package_size}
  */
  readonly flowPackageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#id ZecEip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Network billing methods. Valid values: `ByBandwidth`, `ByTrafficPackage`, `BandwidthCluster`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#internet_charge_type ZecEip#internet_charge_type}
  */
  readonly internetChargeType: string;
  /**
  * Network types of public IPv4. Valid values: `CN2Line`, `LocalLine`, `ChinaTelecom`, `ChinaUnicom`, `ChinaMobile`, `Cogent`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#ip_network_type ZecEip#ip_network_type}
  */
  readonly ipNetworkType?: string;
  /**
  * Name of the elastic IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#name ZecEip#name}
  */
  readonly name: string;
  /**
  * Remote region ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#peer_region_id ZecEip#peer_region_id}
  */
  readonly peerRegionId?: string;
  /**
  * The region ID that the elastic IP locates at.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#region_id ZecEip#region_id}
  */
  readonly regionId: string;
  /**
  * Resource group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#resource_group_id ZecEip#resource_group_id}
  */
  readonly resourceGroupId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip zenlayercloud_zec_eip}
*/
export class ZecEip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_eip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZecEip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZecEip to import
  * @param importFromId The id of the existing ZecEip that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZecEip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_eip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_eip zenlayercloud_zec_eip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZecEipConfig
  */
  public constructor(scope: Construct, id: string, config: ZecEipConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_eip',
      terraformGeneratorMetadata: {
        providerName: 'zenlayercloud',
        providerVersion: '0.2.11',
        providerVersionConstraint: '0.2.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._bandwidthClusterId = config.bandwidthClusterId;
    this._cidrId = config.cidrId;
    this._flowPackageSize = config.flowPackageSize;
    this._id = config.id;
    this._internetChargeType = config.internetChargeType;
    this._ipNetworkType = config.ipNetworkType;
    this._name = config.name;
    this._peerRegionId = config.peerRegionId;
    this._regionId = config.regionId;
    this._resourceGroupId = config.resourceGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // bandwidth_cluster_id - computed: false, optional: true, required: false
  private _bandwidthClusterId?: string; 
  public get bandwidthClusterId() {
    return this.getStringAttribute('bandwidth_cluster_id');
  }
  public set bandwidthClusterId(value: string) {
    this._bandwidthClusterId = value;
  }
  public resetBandwidthClusterId() {
    this._bandwidthClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthClusterIdInput() {
    return this._bandwidthClusterId;
  }

  // cidr_id - computed: false, optional: true, required: false
  private _cidrId?: string; 
  public get cidrId() {
    return this.getStringAttribute('cidr_id');
  }
  public set cidrId(value: string) {
    this._cidrId = value;
  }
  public resetCidrId() {
    this._cidrId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrIdInput() {
    return this._cidrId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // flow_package_size - computed: false, optional: true, required: false
  private _flowPackageSize?: number; 
  public get flowPackageSize() {
    return this.getNumberAttribute('flow_package_size');
  }
  public set flowPackageSize(value: number) {
    this._flowPackageSize = value;
  }
  public resetFlowPackageSize() {
    this._flowPackageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowPackageSizeInput() {
    return this._flowPackageSize;
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

  // ip_network_type - computed: false, optional: true, required: false
  private _ipNetworkType?: string; 
  public get ipNetworkType() {
    return this.getStringAttribute('ip_network_type');
  }
  public set ipNetworkType(value: string) {
    this._ipNetworkType = value;
  }
  public resetIpNetworkType() {
    this._ipNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetworkTypeInput() {
    return this._ipNetworkType;
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

  // peer_region_id - computed: false, optional: true, required: false
  private _peerRegionId?: string; 
  public get peerRegionId() {
    return this.getStringAttribute('peer_region_id');
  }
  public set peerRegionId(value: string) {
    this._peerRegionId = value;
  }
  public resetPeerRegionId() {
    this._peerRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRegionIdInput() {
    return this._peerRegionId;
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // resource_group_id - computed: true, optional: true, required: false
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  public resetResourceGroupId() {
    this._resourceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // resource_group_name - computed: true, optional: false, required: false
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      bandwidth_cluster_id: cdktf.stringToTerraform(this._bandwidthClusterId),
      cidr_id: cdktf.stringToTerraform(this._cidrId),
      flow_package_size: cdktf.numberToTerraform(this._flowPackageSize),
      id: cdktf.stringToTerraform(this._id),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      ip_network_type: cdktf.stringToTerraform(this._ipNetworkType),
      name: cdktf.stringToTerraform(this._name),
      peer_region_id: cdktf.stringToTerraform(this._peerRegionId),
      region_id: cdktf.stringToTerraform(this._regionId),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bandwidth_cluster_id: {
        value: cdktf.stringToHclTerraform(this._bandwidthClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_id: {
        value: cdktf.stringToHclTerraform(this._cidrId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_package_size: {
        value: cdktf.numberToHclTerraform(this._flowPackageSize),
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
      ip_network_type: {
        value: cdktf.stringToHclTerraform(this._ipNetworkType),
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
      peer_region_id: {
        value: cdktf.stringToHclTerraform(this._peerRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_id: {
        value: cdktf.stringToHclTerraform(this._resourceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
