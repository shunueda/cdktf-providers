// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_ipv6_internet_bandwidth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackVpcIpv6InternetBandwidthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_ipv6_internet_bandwidth#bandwidth ApsarastackVpcIpv6InternetBandwidth#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_ipv6_internet_bandwidth#id ApsarastackVpcIpv6InternetBandwidth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_ipv6_internet_bandwidth#internet_charge_type ApsarastackVpcIpv6InternetBandwidth#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_ipv6_internet_bandwidth#ipv6_address_id ApsarastackVpcIpv6InternetBandwidth#ipv6_address_id}
  */
  readonly ipv6AddressId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_ipv6_internet_bandwidth#ipv6_gateway_id ApsarastackVpcIpv6InternetBandwidth#ipv6_gateway_id}
  */
  readonly ipv6GatewayId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_ipv6_internet_bandwidth apsarastack_vpc_ipv6_internet_bandwidth}
*/
export class ApsarastackVpcIpv6InternetBandwidth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_vpc_ipv6_internet_bandwidth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackVpcIpv6InternetBandwidth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackVpcIpv6InternetBandwidth to import
  * @param importFromId The id of the existing ApsarastackVpcIpv6InternetBandwidth that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_ipv6_internet_bandwidth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackVpcIpv6InternetBandwidth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_vpc_ipv6_internet_bandwidth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_vpc_ipv6_internet_bandwidth apsarastack_vpc_ipv6_internet_bandwidth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackVpcIpv6InternetBandwidthConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackVpcIpv6InternetBandwidthConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_vpc_ipv6_internet_bandwidth',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
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
    this._id = config.id;
    this._internetChargeType = config.internetChargeType;
    this._ipv6AddressId = config.ipv6AddressId;
    this._ipv6GatewayId = config.ipv6GatewayId;
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

  // internet_charge_type - computed: true, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // ipv6_address_id - computed: false, optional: false, required: true
  private _ipv6AddressId?: string; 
  public get ipv6AddressId() {
    return this.getStringAttribute('ipv6_address_id');
  }
  public set ipv6AddressId(value: string) {
    this._ipv6AddressId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressIdInput() {
    return this._ipv6AddressId;
  }

  // ipv6_gateway_id - computed: false, optional: false, required: true
  private _ipv6GatewayId?: string; 
  public get ipv6GatewayId() {
    return this.getStringAttribute('ipv6_gateway_id');
  }
  public set ipv6GatewayId(value: string) {
    this._ipv6GatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayIdInput() {
    return this._ipv6GatewayId;
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
      id: cdktf.stringToTerraform(this._id),
      internet_charge_type: cdktf.stringToTerraform(this._internetChargeType),
      ipv6_address_id: cdktf.stringToTerraform(this._ipv6AddressId),
      ipv6_gateway_id: cdktf.stringToTerraform(this._ipv6GatewayId),
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
      ipv6_address_id: {
        value: cdktf.stringToHclTerraform(this._ipv6AddressId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_gateway_id: {
        value: cdktf.stringToHclTerraform(this._ipv6GatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
