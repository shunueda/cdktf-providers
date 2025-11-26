// https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZecVnicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic#id ZecVnic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Bandwidth of public IPv6. Measured in Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic#ipv6_bandwidth ZecVnic#ipv6_bandwidth}
  */
  readonly ipv6Bandwidth?: number;
  /**
  * Bandwidth cluster ID for public IPv6. Required when `ipv6_internet_charge_type` is `BandwidthCluster`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic#ipv6_bandwidth_cluster_id ZecVnic#ipv6_bandwidth_cluster_id}
  */
  readonly ipv6BandwidthClusterId?: string;
  /**
  * Network billing methods for public IPv6. Valid values: `ByBandwidth`, `ByTrafficPackage`, `BandwidthCluster`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic#ipv6_internet_charge_type ZecVnic#ipv6_internet_charge_type}
  */
  readonly ipv6InternetChargeType?: string;
  /**
  * Traffic Package size for public IPv6. Measured in TB. Only valid when `ipv6_internet_charge_type` is `ByTrafficPackage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic#ipv6_traffic_package_size ZecVnic#ipv6_traffic_package_size}
  */
  readonly ipv6TrafficPackageSize?: number;
  /**
  * The name of the vNIC. maximum length is 63.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic#name ZecVnic#name}
  */
  readonly name?: string;
  /**
  * The resource group id the vNIC belongs to, default to ID of Default Resource Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic#resource_group_id ZecVnic#resource_group_id}
  */
  readonly resourceGroupId?: string;
  /**
  * The ID of a security group. If absent, the security group under VPC will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic#security_group_id ZecVnic#security_group_id}
  */
  readonly securityGroupId?: string;
  /**
  * The stack type of the subnet. Valid values: `IPv4`, `IPv6`, `IPv4_IPv6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic#stack_type ZecVnic#stack_type}
  */
  readonly stackType?: string;
  /**
  * The ID of a VPC subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic#subnet_id ZecVnic#subnet_id}
  */
  readonly subnetId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic zenlayercloud_zec_vnic}
*/
export class ZecVnic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zenlayercloud_zec_vnic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZecVnic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZecVnic to import
  * @param importFromId The id of the existing ZecVnic that should be imported. Refer to the {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZecVnic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zenlayercloud_zec_vnic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zenlayer/zenlayercloud/0.2.11/docs/resources/zec_vnic zenlayercloud_zec_vnic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZecVnicConfig
  */
  public constructor(scope: Construct, id: string, config: ZecVnicConfig) {
    super(scope, id, {
      terraformResourceType: 'zenlayercloud_zec_vnic',
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
    this._id = config.id;
    this._ipv6Bandwidth = config.ipv6Bandwidth;
    this._ipv6BandwidthClusterId = config.ipv6BandwidthClusterId;
    this._ipv6InternetChargeType = config.ipv6InternetChargeType;
    this._ipv6TrafficPackageSize = config.ipv6TrafficPackageSize;
    this._name = config.name;
    this._resourceGroupId = config.resourceGroupId;
    this._securityGroupId = config.securityGroupId;
    this._stackType = config.stackType;
    this._subnetId = config.subnetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipv6_bandwidth - computed: false, optional: true, required: false
  private _ipv6Bandwidth?: number; 
  public get ipv6Bandwidth() {
    return this.getNumberAttribute('ipv6_bandwidth');
  }
  public set ipv6Bandwidth(value: number) {
    this._ipv6Bandwidth = value;
  }
  public resetIpv6Bandwidth() {
    this._ipv6Bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6BandwidthInput() {
    return this._ipv6Bandwidth;
  }

  // ipv6_bandwidth_cluster_id - computed: false, optional: true, required: false
  private _ipv6BandwidthClusterId?: string; 
  public get ipv6BandwidthClusterId() {
    return this.getStringAttribute('ipv6_bandwidth_cluster_id');
  }
  public set ipv6BandwidthClusterId(value: string) {
    this._ipv6BandwidthClusterId = value;
  }
  public resetIpv6BandwidthClusterId() {
    this._ipv6BandwidthClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6BandwidthClusterIdInput() {
    return this._ipv6BandwidthClusterId;
  }

  // ipv6_internet_charge_type - computed: false, optional: true, required: false
  private _ipv6InternetChargeType?: string; 
  public get ipv6InternetChargeType() {
    return this.getStringAttribute('ipv6_internet_charge_type');
  }
  public set ipv6InternetChargeType(value: string) {
    this._ipv6InternetChargeType = value;
  }
  public resetIpv6InternetChargeType() {
    this._ipv6InternetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6InternetChargeTypeInput() {
    return this._ipv6InternetChargeType;
  }

  // ipv6_traffic_package_size - computed: false, optional: true, required: false
  private _ipv6TrafficPackageSize?: number; 
  public get ipv6TrafficPackageSize() {
    return this.getNumberAttribute('ipv6_traffic_package_size');
  }
  public set ipv6TrafficPackageSize(value: number) {
    this._ipv6TrafficPackageSize = value;
  }
  public resetIpv6TrafficPackageSize() {
    this._ipv6TrafficPackageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TrafficPackageSizeInput() {
    return this._ipv6TrafficPackageSize;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // primary_ipv4 - computed: true, optional: false, required: false
  public get primaryIpv4() {
    return this.getStringAttribute('primary_ipv4');
  }

  // primary_ipv6 - computed: true, optional: false, required: false
  public get primaryIpv6() {
    return this.getStringAttribute('primary_ipv6');
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

  // security_group_id - computed: true, optional: true, required: false
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  public resetSecurityGroupId() {
    this._securityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // stack_type - computed: true, optional: true, required: false
  private _stackType?: string; 
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
  public set stackType(value: string) {
    this._stackType = value;
  }
  public resetStackType() {
    this._stackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTypeInput() {
    return this._stackType;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv6_bandwidth: cdktf.numberToTerraform(this._ipv6Bandwidth),
      ipv6_bandwidth_cluster_id: cdktf.stringToTerraform(this._ipv6BandwidthClusterId),
      ipv6_internet_charge_type: cdktf.stringToTerraform(this._ipv6InternetChargeType),
      ipv6_traffic_package_size: cdktf.numberToTerraform(this._ipv6TrafficPackageSize),
      name: cdktf.stringToTerraform(this._name),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      stack_type: cdktf.stringToTerraform(this._stackType),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
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
      ipv6_bandwidth: {
        value: cdktf.numberToHclTerraform(this._ipv6Bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_bandwidth_cluster_id: {
        value: cdktf.stringToHclTerraform(this._ipv6BandwidthClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_internet_charge_type: {
        value: cdktf.stringToHclTerraform(this._ipv6InternetChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_traffic_package_size: {
        value: cdktf.numberToHclTerraform(this._ipv6TrafficPackageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_type: {
        value: cdktf.stringToHclTerraform(this._stackType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
