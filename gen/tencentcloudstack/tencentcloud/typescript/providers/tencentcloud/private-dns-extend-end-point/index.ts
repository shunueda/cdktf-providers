// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateDnsExtendEndPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Outbound endpoint name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point#end_point_name PrivateDnsExtendEndPoint#end_point_name}
  */
  readonly endPointName: string;
  /**
  * The region of the outbound endpoint must be consistent with the region of the forwarding target VIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point#end_point_region PrivateDnsExtendEndPoint#end_point_region}
  */
  readonly endPointRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point#id PrivateDnsExtendEndPoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * forward_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point#forward_ip PrivateDnsExtendEndPoint#forward_ip}
  */
  readonly forwardIp?: PrivateDnsExtendEndPointForwardIp;
}
export interface PrivateDnsExtendEndPointForwardIp {
  /**
  * CCN id. Required when the access type is CCN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point#access_gateway_id PrivateDnsExtendEndPoint#access_gateway_id}
  */
  readonly accessGatewayId?: string;
  /**
  * Forwarding target IP network access type. CLB: The forwarding IP is the internal CLB VIP. CCN: Forwarding IP through CCN routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point#access_type PrivateDnsExtendEndPoint#access_type}
  */
  readonly accessType: string;
  /**
  * Forwarding target IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point#host PrivateDnsExtendEndPoint#host}
  */
  readonly host: string;
  /**
  * Specifies the forwarding IP port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point#port PrivateDnsExtendEndPoint#port}
  */
  readonly port: number;
  /**
  * Unique VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point#vpc_id PrivateDnsExtendEndPoint#vpc_id}
  */
  readonly vpcId: string;
}

export function privateDnsExtendEndPointForwardIpToTerraform(struct?: PrivateDnsExtendEndPointForwardIpOutputReference | PrivateDnsExtendEndPointForwardIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_gateway_id: cdktf.stringToTerraform(struct!.accessGatewayId),
    access_type: cdktf.stringToTerraform(struct!.accessType),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function privateDnsExtendEndPointForwardIpToHclTerraform(struct?: PrivateDnsExtendEndPointForwardIpOutputReference | PrivateDnsExtendEndPointForwardIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_gateway_id: {
      value: cdktf.stringToHclTerraform(struct!.accessGatewayId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_type: {
      value: cdktf.stringToHclTerraform(struct!.accessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateDnsExtendEndPointForwardIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivateDnsExtendEndPointForwardIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessGatewayId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessGatewayId = this._accessGatewayId;
    }
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateDnsExtendEndPointForwardIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessGatewayId = undefined;
      this._accessType = undefined;
      this._host = undefined;
      this._port = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessGatewayId = value.accessGatewayId;
      this._accessType = value.accessType;
      this._host = value.host;
      this._port = value.port;
      this._vpcId = value.vpcId;
    }
  }

  // access_gateway_id - computed: false, optional: true, required: false
  private _accessGatewayId?: string; 
  public get accessGatewayId() {
    return this.getStringAttribute('access_gateway_id');
  }
  public set accessGatewayId(value: string) {
    this._accessGatewayId = value;
  }
  public resetAccessGatewayId() {
    this._accessGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGatewayIdInput() {
    return this._accessGatewayId;
  }

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: true, optional: false, required: false
  public get proto() {
    return this.getStringAttribute('proto');
  }

  // snat_vip_cidr - computed: true, optional: false, required: false
  public get snatVipCidr() {
    return this.getStringAttribute('snat_vip_cidr');
  }

  // snat_vip_set - computed: true, optional: false, required: false
  public get snatVipSet() {
    return this.getStringAttribute('snat_vip_set');
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
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

  // vport - computed: true, optional: false, required: false
  public get vport() {
    return this.getNumberAttribute('vport');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point tencentcloud_private_dns_extend_end_point}
*/
export class PrivateDnsExtendEndPoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_private_dns_extend_end_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateDnsExtendEndPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateDnsExtendEndPoint to import
  * @param importFromId The id of the existing PrivateDnsExtendEndPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateDnsExtendEndPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_private_dns_extend_end_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/private_dns_extend_end_point tencentcloud_private_dns_extend_end_point} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateDnsExtendEndPointConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateDnsExtendEndPointConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_private_dns_extend_end_point',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endPointName = config.endPointName;
    this._endPointRegion = config.endPointRegion;
    this._id = config.id;
    this._forwardIp.internalValue = config.forwardIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_point_name - computed: false, optional: false, required: true
  private _endPointName?: string; 
  public get endPointName() {
    return this.getStringAttribute('end_point_name');
  }
  public set endPointName(value: string) {
    this._endPointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointNameInput() {
    return this._endPointName;
  }

  // end_point_region - computed: false, optional: false, required: true
  private _endPointRegion?: string; 
  public get endPointRegion() {
    return this.getStringAttribute('end_point_region');
  }
  public set endPointRegion(value: string) {
    this._endPointRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endPointRegionInput() {
    return this._endPointRegion;
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

  // forward_ip - computed: false, optional: true, required: false
  private _forwardIp = new PrivateDnsExtendEndPointForwardIpOutputReference(this, "forward_ip");
  public get forwardIp() {
    return this._forwardIp;
  }
  public putForwardIp(value: PrivateDnsExtendEndPointForwardIp) {
    this._forwardIp.internalValue = value;
  }
  public resetForwardIp() {
    this._forwardIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardIpInput() {
    return this._forwardIp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_point_name: cdktf.stringToTerraform(this._endPointName),
      end_point_region: cdktf.stringToTerraform(this._endPointRegion),
      id: cdktf.stringToTerraform(this._id),
      forward_ip: privateDnsExtendEndPointForwardIpToTerraform(this._forwardIp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_point_name: {
        value: cdktf.stringToHclTerraform(this._endPointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      end_point_region: {
        value: cdktf.stringToHclTerraform(this._endPointRegion),
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
      forward_ip: {
        value: privateDnsExtendEndPointForwardIpToHclTerraform(this._forwardIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateDnsExtendEndPointForwardIpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
