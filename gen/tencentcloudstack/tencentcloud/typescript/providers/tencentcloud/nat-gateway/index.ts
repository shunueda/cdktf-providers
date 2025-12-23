// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NatGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * EIP IP address set bound to the gateway. The value of at least 1 and at most 10 if do not apply for a whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#assigned_eip_set NatGateway#assigned_eip_set}
  */
  readonly assignedEipSet: string[];
  /**
  * The maximum public network output bandwidth of NAT gateway (unit: Mbps). Valid values: `20`, `50`, `100`, `200`, `500`, `1000`, `2000`, `5000`. Default is `100`. When the value of parameter `nat_product_version` is 2, which is the standard NAT type, this parameter does not need to be filled in and defaults to `5000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#bandwidth NatGateway#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#id NatGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The upper limit of concurrent connection of NAT gateway. Valid values: `1000000`, `3000000`, `10000000`. Default is `1000000`. When the value of parameter `nat_product_version` is 2, which is the standard NAT type, this parameter does not need to be filled in and defaults to `2000000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#max_concurrent NatGateway#max_concurrent}
  */
  readonly maxConcurrent?: number;
  /**
  * Name of the NAT gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#name NatGateway#name}
  */
  readonly name: string;
  /**
  * 1: traditional NAT, 2: standard NAT, default value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#nat_product_version NatGateway#nat_product_version}
  */
  readonly natProductVersion?: number;
  /**
  * The elastic public IP bandwidth value (unit: Mbps) for binding NAT gateway. When this parameter is not filled in, it defaults to the bandwidth value of the elastic public IP, and for some users, it defaults to the bandwidth limit of the elastic public IP of that user type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#stock_public_ip_addresses_bandwidth_out NatGateway#stock_public_ip_addresses_bandwidth_out}
  */
  readonly stockPublicIpAddressesBandwidthOut?: number;
  /**
  * Subnet of NAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#subnet_id NatGateway#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * The available tags within this NAT gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#tags NatGateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * ID of the vpc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#vpc_id NatGateway#vpc_id}
  */
  readonly vpcId: string;
  /**
  * The availability zone, such as `ap-guangzhou-3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#zone NatGateway#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway tencentcloud_nat_gateway}
*/
export class NatGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_nat_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NatGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NatGateway to import
  * @param importFromId The id of the existing NatGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NatGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_nat_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/nat_gateway tencentcloud_nat_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NatGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: NatGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_nat_gateway',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedEipSet = config.assignedEipSet;
    this._bandwidth = config.bandwidth;
    this._id = config.id;
    this._maxConcurrent = config.maxConcurrent;
    this._name = config.name;
    this._natProductVersion = config.natProductVersion;
    this._stockPublicIpAddressesBandwidthOut = config.stockPublicIpAddressesBandwidthOut;
    this._subnetId = config.subnetId;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_eip_set - computed: false, optional: false, required: true
  private _assignedEipSet?: string[]; 
  public get assignedEipSet() {
    return cdktf.Fn.tolist(this.getListAttribute('assigned_eip_set'));
  }
  public set assignedEipSet(value: string[]) {
    this._assignedEipSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedEipSetInput() {
    return this._assignedEipSet;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: number; 
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }
  public set bandwidth(value: number) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
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

  // max_concurrent - computed: true, optional: true, required: false
  private _maxConcurrent?: number; 
  public get maxConcurrent() {
    return this.getNumberAttribute('max_concurrent');
  }
  public set maxConcurrent(value: number) {
    this._maxConcurrent = value;
  }
  public resetMaxConcurrent() {
    this._maxConcurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentInput() {
    return this._maxConcurrent;
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

  // nat_product_version - computed: true, optional: true, required: false
  private _natProductVersion?: number; 
  public get natProductVersion() {
    return this.getNumberAttribute('nat_product_version');
  }
  public set natProductVersion(value: number) {
    this._natProductVersion = value;
  }
  public resetNatProductVersion() {
    this._natProductVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natProductVersionInput() {
    return this._natProductVersion;
  }

  // stock_public_ip_addresses_bandwidth_out - computed: true, optional: true, required: false
  private _stockPublicIpAddressesBandwidthOut?: number; 
  public get stockPublicIpAddressesBandwidthOut() {
    return this.getNumberAttribute('stock_public_ip_addresses_bandwidth_out');
  }
  public set stockPublicIpAddressesBandwidthOut(value: number) {
    this._stockPublicIpAddressesBandwidthOut = value;
  }
  public resetStockPublicIpAddressesBandwidthOut() {
    this._stockPublicIpAddressesBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stockPublicIpAddressesBandwidthOutInput() {
    return this._stockPublicIpAddressesBandwidthOut;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_eip_set: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignedEipSet),
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      id: cdktf.stringToTerraform(this._id),
      max_concurrent: cdktf.numberToTerraform(this._maxConcurrent),
      name: cdktf.stringToTerraform(this._name),
      nat_product_version: cdktf.numberToTerraform(this._natProductVersion),
      stock_public_ip_addresses_bandwidth_out: cdktf.numberToTerraform(this._stockPublicIpAddressesBandwidthOut),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_eip_set: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignedEipSet),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bandwidth: {
        value: cdktf.numberToHclTerraform(this._bandwidth),
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
      max_concurrent: {
        value: cdktf.numberToHclTerraform(this._maxConcurrent),
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
      nat_product_version: {
        value: cdktf.numberToHclTerraform(this._natProductVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stock_public_ip_addresses_bandwidth_out: {
        value: cdktf.numberToHclTerraform(this._stockPublicIpAddressesBandwidthOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
