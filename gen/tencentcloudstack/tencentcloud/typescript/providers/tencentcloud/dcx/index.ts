// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcxConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bandwidth of the DC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#bandwidth Dcx#bandwidth}
  */
  readonly bandwidth?: number;
  /**
  * BGP ASN of the user. A required field within BGP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#bgp_asn Dcx#bgp_asn}
  */
  readonly bgpAsn?: number;
  /**
  * BGP key of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#bgp_auth_key Dcx#bgp_auth_key}
  */
  readonly bgpAuthKey?: string;
  /**
  * Interconnect IP of the DC within client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#customer_address Dcx#customer_address}
  */
  readonly customerAddress?: string;
  /**
  * ID of the DC to be queried, application deployment offline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#dc_id Dcx#dc_id}
  */
  readonly dcId: string;
  /**
  * Connection owner, who is the current customer by default. The developer account ID should be entered for shared connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#dc_owner_account Dcx#dc_owner_account}
  */
  readonly dcOwnerAccount?: string;
  /**
  * ID of the DC Gateway. Currently only new in the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#dcg_id Dcx#dcg_id}
  */
  readonly dcgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#id Dcx#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the dedicated tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#name Dcx#name}
  */
  readonly name: string;
  /**
  * Network region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#network_region Dcx#network_region}
  */
  readonly networkRegion?: string;
  /**
  * Type of the network. Valid value: `VPC`, `BMVPC` and `CCN`. The default value is `VPC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#network_type Dcx#network_type}
  */
  readonly networkType?: string;
  /**
  * Static route, the network address of the user IDC. It can be modified after setting but cannot be deleted. AN unable field within BGP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#route_filter_prefixes Dcx#route_filter_prefixes}
  */
  readonly routeFilterPrefixes?: string[];
  /**
  * Type of the route, and available values include BGP and STATIC. The default value is `BGP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#route_type Dcx#route_type}
  */
  readonly routeType?: string;
  /**
  * Interconnect IP of the DC within Tencent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#tencent_address Dcx#tencent_address}
  */
  readonly tencentAddress?: string;
  /**
  * Vlan of the dedicated tunnels. Valid value ranges: (0~3000). `0` means that only one tunnel can be created for the physical connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#vlan Dcx#vlan}
  */
  readonly vlan?: number;
  /**
  * ID of the VPC or BMVPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#vpc_id Dcx#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx tencentcloud_dcx}
*/
export class Dcx extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dcx";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dcx resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dcx to import
  * @param importFromId The id of the existing Dcx that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dcx to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dcx", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/resources/dcx tencentcloud_dcx} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcxConfig
  */
  public constructor(scope: Construct, id: string, config: DcxConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dcx',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
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
    this._bgpAsn = config.bgpAsn;
    this._bgpAuthKey = config.bgpAuthKey;
    this._customerAddress = config.customerAddress;
    this._dcId = config.dcId;
    this._dcOwnerAccount = config.dcOwnerAccount;
    this._dcgId = config.dcgId;
    this._id = config.id;
    this._name = config.name;
    this._networkRegion = config.networkRegion;
    this._networkType = config.networkType;
    this._routeFilterPrefixes = config.routeFilterPrefixes;
    this._routeType = config.routeType;
    this._tencentAddress = config.tencentAddress;
    this._vlan = config.vlan;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // bgp_asn - computed: true, optional: true, required: false
  private _bgpAsn?: number; 
  public get bgpAsn() {
    return this.getNumberAttribute('bgp_asn');
  }
  public set bgpAsn(value: number) {
    this._bgpAsn = value;
  }
  public resetBgpAsn() {
    this._bgpAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAsnInput() {
    return this._bgpAsn;
  }

  // bgp_auth_key - computed: false, optional: true, required: false
  private _bgpAuthKey?: string; 
  public get bgpAuthKey() {
    return this.getStringAttribute('bgp_auth_key');
  }
  public set bgpAuthKey(value: string) {
    this._bgpAuthKey = value;
  }
  public resetBgpAuthKey() {
    this._bgpAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpAuthKeyInput() {
    return this._bgpAuthKey;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_address - computed: true, optional: true, required: false
  private _customerAddress?: string; 
  public get customerAddress() {
    return this.getStringAttribute('customer_address');
  }
  public set customerAddress(value: string) {
    this._customerAddress = value;
  }
  public resetCustomerAddress() {
    this._customerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerAddressInput() {
    return this._customerAddress;
  }

  // dc_id - computed: false, optional: false, required: true
  private _dcId?: string; 
  public get dcId() {
    return this.getStringAttribute('dc_id');
  }
  public set dcId(value: string) {
    this._dcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcIdInput() {
    return this._dcId;
  }

  // dc_owner_account - computed: true, optional: true, required: false
  private _dcOwnerAccount?: string; 
  public get dcOwnerAccount() {
    return this.getStringAttribute('dc_owner_account');
  }
  public set dcOwnerAccount(value: string) {
    this._dcOwnerAccount = value;
  }
  public resetDcOwnerAccount() {
    this._dcOwnerAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcOwnerAccountInput() {
    return this._dcOwnerAccount;
  }

  // dcg_id - computed: false, optional: false, required: true
  private _dcgId?: string; 
  public get dcgId() {
    return this.getStringAttribute('dcg_id');
  }
  public set dcgId(value: string) {
    this._dcgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dcgIdInput() {
    return this._dcgId;
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

  // network_region - computed: false, optional: true, required: false
  private _networkRegion?: string; 
  public get networkRegion() {
    return this.getStringAttribute('network_region');
  }
  public set networkRegion(value: string) {
    this._networkRegion = value;
  }
  public resetNetworkRegion() {
    this._networkRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRegionInput() {
    return this._networkRegion;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // route_filter_prefixes - computed: false, optional: true, required: false
  private _routeFilterPrefixes?: string[]; 
  public get routeFilterPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('route_filter_prefixes'));
  }
  public set routeFilterPrefixes(value: string[]) {
    this._routeFilterPrefixes = value;
  }
  public resetRouteFilterPrefixes() {
    this._routeFilterPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeFilterPrefixesInput() {
    return this._routeFilterPrefixes;
  }

  // route_type - computed: false, optional: true, required: false
  private _routeType?: string; 
  public get routeType() {
    return this.getStringAttribute('route_type');
  }
  public set routeType(value: string) {
    this._routeType = value;
  }
  public resetRouteType() {
    this._routeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTypeInput() {
    return this._routeType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tencent_address - computed: true, optional: true, required: false
  private _tencentAddress?: string; 
  public get tencentAddress() {
    return this.getStringAttribute('tencent_address');
  }
  public set tencentAddress(value: string) {
    this._tencentAddress = value;
  }
  public resetTencentAddress() {
    this._tencentAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tencentAddressInput() {
    return this._tencentAddress;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      bgp_asn: cdktf.numberToTerraform(this._bgpAsn),
      bgp_auth_key: cdktf.stringToTerraform(this._bgpAuthKey),
      customer_address: cdktf.stringToTerraform(this._customerAddress),
      dc_id: cdktf.stringToTerraform(this._dcId),
      dc_owner_account: cdktf.stringToTerraform(this._dcOwnerAccount),
      dcg_id: cdktf.stringToTerraform(this._dcgId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      network_region: cdktf.stringToTerraform(this._networkRegion),
      network_type: cdktf.stringToTerraform(this._networkType),
      route_filter_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeFilterPrefixes),
      route_type: cdktf.stringToTerraform(this._routeType),
      tencent_address: cdktf.stringToTerraform(this._tencentAddress),
      vlan: cdktf.numberToTerraform(this._vlan),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
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
      bgp_asn: {
        value: cdktf.numberToHclTerraform(this._bgpAsn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bgp_auth_key: {
        value: cdktf.stringToHclTerraform(this._bgpAuthKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_address: {
        value: cdktf.stringToHclTerraform(this._customerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dc_id: {
        value: cdktf.stringToHclTerraform(this._dcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dc_owner_account: {
        value: cdktf.stringToHclTerraform(this._dcOwnerAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dcg_id: {
        value: cdktf.stringToHclTerraform(this._dcgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      network_region: {
        value: cdktf.stringToHclTerraform(this._networkRegion),
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
      route_filter_prefixes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeFilterPrefixes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route_type: {
        value: cdktf.stringToHclTerraform(this._routeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tencent_address: {
        value: cdktf.stringToHclTerraform(this._tencentAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
