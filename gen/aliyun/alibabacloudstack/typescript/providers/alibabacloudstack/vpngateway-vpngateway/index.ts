// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpngatewayVpngatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#bandwidth VpngatewayVpngateway#bandwidth}
  */
  readonly bandwidth: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#description VpngatewayVpngateway#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#enable_ipsec VpngatewayVpngateway#enable_ipsec}
  */
  readonly enableIpsec?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#enable_ssl VpngatewayVpngateway#enable_ssl}
  */
  readonly enableSsl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#id VpngatewayVpngateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#instance_charge_type VpngatewayVpngateway#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#ipsec_vpn VpngatewayVpngateway#ipsec_vpn}
  */
  readonly ipsecVpn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#name VpngatewayVpngateway#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#period VpngatewayVpngateway#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#ssl_connections VpngatewayVpngateway#ssl_connections}
  */
  readonly sslConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#ssl_max_connections VpngatewayVpngateway#ssl_max_connections}
  */
  readonly sslMaxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#ssl_vpn VpngatewayVpngateway#ssl_vpn}
  */
  readonly sslVpn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#tags VpngatewayVpngateway#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#vpc_id VpngatewayVpngateway#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#vpn_gateway_name VpngatewayVpngateway#vpn_gateway_name}
  */
  readonly vpnGatewayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#vswitch_id VpngatewayVpngateway#vswitch_id}
  */
  readonly vswitchId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway alibabacloudstack_vpngateway_vpngateway}
*/
export class VpngatewayVpngateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_vpngateway_vpngateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpngatewayVpngateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpngatewayVpngateway to import
  * @param importFromId The id of the existing VpngatewayVpngateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpngatewayVpngateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_vpngateway_vpngateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/vpngateway_vpngateway alibabacloudstack_vpngateway_vpngateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpngatewayVpngatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VpngatewayVpngatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_vpngateway_vpngateway',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
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
    this._description = config.description;
    this._enableIpsec = config.enableIpsec;
    this._enableSsl = config.enableSsl;
    this._id = config.id;
    this._instanceChargeType = config.instanceChargeType;
    this._ipsecVpn = config.ipsecVpn;
    this._name = config.name;
    this._period = config.period;
    this._sslConnections = config.sslConnections;
    this._sslMaxConnections = config.sslMaxConnections;
    this._sslVpn = config.sslVpn;
    this._tags = config.tags;
    this._vpcId = config.vpcId;
    this._vpnGatewayName = config.vpnGatewayName;
    this._vswitchId = config.vswitchId;
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

  // business_status - computed: true, optional: false, required: false
  public get businessStatus() {
    return this.getStringAttribute('business_status');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_ipsec - computed: true, optional: true, required: false
  private _enableIpsec?: boolean | cdktf.IResolvable; 
  public get enableIpsec() {
    return this.getBooleanAttribute('enable_ipsec');
  }
  public set enableIpsec(value: boolean | cdktf.IResolvable) {
    this._enableIpsec = value;
  }
  public resetEnableIpsec() {
    this._enableIpsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpsecInput() {
    return this._enableIpsec;
  }

  // enable_ssl - computed: true, optional: true, required: false
  private _enableSsl?: boolean | cdktf.IResolvable; 
  public get enableSsl() {
    return this.getBooleanAttribute('enable_ssl');
  }
  public set enableSsl(value: boolean | cdktf.IResolvable) {
    this._enableSsl = value;
  }
  public resetEnableSsl() {
    this._enableSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSslInput() {
    return this._enableSsl;
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

  // instance_charge_type - computed: false, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // internet_ip - computed: true, optional: false, required: false
  public get internetIp() {
    return this.getStringAttribute('internet_ip');
  }

  // ipsec_vpn - computed: true, optional: true, required: false
  private _ipsecVpn?: boolean | cdktf.IResolvable; 
  public get ipsecVpn() {
    return this.getBooleanAttribute('ipsec_vpn');
  }
  public set ipsecVpn(value: boolean | cdktf.IResolvable) {
    this._ipsecVpn = value;
  }
  public resetIpsecVpn() {
    this._ipsecVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecVpnInput() {
    return this._ipsecVpn;
  }

  // name - computed: true, optional: true, required: false
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

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // ssl_connections - computed: true, optional: true, required: false
  private _sslConnections?: number; 
  public get sslConnections() {
    return this.getNumberAttribute('ssl_connections');
  }
  public set sslConnections(value: number) {
    this._sslConnections = value;
  }
  public resetSslConnections() {
    this._sslConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConnectionsInput() {
    return this._sslConnections;
  }

  // ssl_max_connections - computed: true, optional: true, required: false
  private _sslMaxConnections?: number; 
  public get sslMaxConnections() {
    return this.getNumberAttribute('ssl_max_connections');
  }
  public set sslMaxConnections(value: number) {
    this._sslMaxConnections = value;
  }
  public resetSslMaxConnections() {
    this._sslMaxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslMaxConnectionsInput() {
    return this._sslMaxConnections;
  }

  // ssl_vpn - computed: true, optional: true, required: false
  private _sslVpn?: boolean | cdktf.IResolvable; 
  public get sslVpn() {
    return this.getBooleanAttribute('ssl_vpn');
  }
  public set sslVpn(value: boolean | cdktf.IResolvable) {
    this._sslVpn = value;
  }
  public resetSslVpn() {
    this._sslVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVpnInput() {
    return this._sslVpn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // vpn_gateway_name - computed: true, optional: true, required: false
  private _vpnGatewayName?: string; 
  public get vpnGatewayName() {
    return this.getStringAttribute('vpn_gateway_name');
  }
  public set vpnGatewayName(value: string) {
    this._vpnGatewayName = value;
  }
  public resetVpnGatewayName() {
    this._vpnGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayNameInput() {
    return this._vpnGatewayName;
  }

  // vswitch_id - computed: true, optional: true, required: false
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  public resetVswitchId() {
    this._vswitchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.numberToTerraform(this._bandwidth),
      description: cdktf.stringToTerraform(this._description),
      enable_ipsec: cdktf.booleanToTerraform(this._enableIpsec),
      enable_ssl: cdktf.booleanToTerraform(this._enableSsl),
      id: cdktf.stringToTerraform(this._id),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      ipsec_vpn: cdktf.booleanToTerraform(this._ipsecVpn),
      name: cdktf.stringToTerraform(this._name),
      period: cdktf.numberToTerraform(this._period),
      ssl_connections: cdktf.numberToTerraform(this._sslConnections),
      ssl_max_connections: cdktf.numberToTerraform(this._sslMaxConnections),
      ssl_vpn: cdktf.booleanToTerraform(this._sslVpn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vpn_gateway_name: cdktf.stringToTerraform(this._vpnGatewayName),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ipsec: {
        value: cdktf.booleanToHclTerraform(this._enableIpsec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ssl: {
        value: cdktf.booleanToHclTerraform(this._enableSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_vpn: {
        value: cdktf.booleanToHclTerraform(this._ipsecVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_connections: {
        value: cdktf.numberToHclTerraform(this._sslConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_max_connections: {
        value: cdktf.numberToHclTerraform(this._sslMaxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_vpn: {
        value: cdktf.booleanToHclTerraform(this._sslVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      vpn_gateway_name: {
        value: cdktf.stringToHclTerraform(this._vpnGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
