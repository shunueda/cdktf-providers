// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/private_dns_inbound_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateDnsInboundEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/private_dns_inbound_endpoint#endpoint_name PrivateDnsInboundEndpoint#endpoint_name}
  */
  readonly endpointName: string;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/private_dns_inbound_endpoint#endpoint_region PrivateDnsInboundEndpoint#endpoint_region}
  */
  readonly endpointRegion: string;
  /**
  * VPC ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/private_dns_inbound_endpoint#endpoint_vpc PrivateDnsInboundEndpoint#endpoint_vpc}
  */
  readonly endpointVpc: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/private_dns_inbound_endpoint#id PrivateDnsInboundEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * subnet_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/private_dns_inbound_endpoint#subnet_ip PrivateDnsInboundEndpoint#subnet_ip}
  */
  readonly subnetIp: PrivateDnsInboundEndpointSubnetIp[] | cdktf.IResolvable;
}
export interface PrivateDnsInboundEndpointSubnetIp {
  /**
  * Subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/private_dns_inbound_endpoint#subnet_id PrivateDnsInboundEndpoint#subnet_id}
  */
  readonly subnetId: string;
  /**
  * IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/private_dns_inbound_endpoint#subnet_vip PrivateDnsInboundEndpoint#subnet_vip}
  */
  readonly subnetVip?: string;
}

export function privateDnsInboundEndpointSubnetIpToTerraform(struct?: PrivateDnsInboundEndpointSubnetIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    subnet_vip: cdktf.stringToTerraform(struct!.subnetVip),
  }
}


export function privateDnsInboundEndpointSubnetIpToHclTerraform(struct?: PrivateDnsInboundEndpointSubnetIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_vip: {
      value: cdktf.stringToHclTerraform(struct!.subnetVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateDnsInboundEndpointSubnetIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PrivateDnsInboundEndpointSubnetIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._subnetVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetVip = this._subnetVip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateDnsInboundEndpointSubnetIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetId = undefined;
      this._subnetVip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetId = value.subnetId;
      this._subnetVip = value.subnetVip;
    }
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

  // subnet_vip - computed: true, optional: true, required: false
  private _subnetVip?: string; 
  public get subnetVip() {
    return this.getStringAttribute('subnet_vip');
  }
  public set subnetVip(value: string) {
    this._subnetVip = value;
  }
  public resetSubnetVip() {
    this._subnetVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetVipInput() {
    return this._subnetVip;
  }
}

export class PrivateDnsInboundEndpointSubnetIpList extends cdktf.ComplexList {
  public internalValue? : PrivateDnsInboundEndpointSubnetIp[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PrivateDnsInboundEndpointSubnetIpOutputReference {
    return new PrivateDnsInboundEndpointSubnetIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/private_dns_inbound_endpoint tencentcloud_private_dns_inbound_endpoint}
*/
export class PrivateDnsInboundEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_private_dns_inbound_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateDnsInboundEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateDnsInboundEndpoint to import
  * @param importFromId The id of the existing PrivateDnsInboundEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/private_dns_inbound_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateDnsInboundEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_private_dns_inbound_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/private_dns_inbound_endpoint tencentcloud_private_dns_inbound_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateDnsInboundEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateDnsInboundEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_private_dns_inbound_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpointName = config.endpointName;
    this._endpointRegion = config.endpointRegion;
    this._endpointVpc = config.endpointVpc;
    this._id = config.id;
    this._subnetIp.internalValue = config.subnetIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_name - computed: false, optional: false, required: true
  private _endpointName?: string; 
  public get endpointName() {
    return this.getStringAttribute('endpoint_name');
  }
  public set endpointName(value: string) {
    this._endpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameInput() {
    return this._endpointName;
  }

  // endpoint_region - computed: false, optional: false, required: true
  private _endpointRegion?: string; 
  public get endpointRegion() {
    return this.getStringAttribute('endpoint_region');
  }
  public set endpointRegion(value: string) {
    this._endpointRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRegionInput() {
    return this._endpointRegion;
  }

  // endpoint_vpc - computed: false, optional: false, required: true
  private _endpointVpc?: string; 
  public get endpointVpc() {
    return this.getStringAttribute('endpoint_vpc');
  }
  public set endpointVpc(value: string) {
    this._endpointVpc = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointVpcInput() {
    return this._endpointVpc;
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

  // subnet_ip - computed: false, optional: false, required: true
  private _subnetIp = new PrivateDnsInboundEndpointSubnetIpList(this, "subnet_ip", false);
  public get subnetIp() {
    return this._subnetIp;
  }
  public putSubnetIp(value: PrivateDnsInboundEndpointSubnetIp[] | cdktf.IResolvable) {
    this._subnetIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpInput() {
    return this._subnetIp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_name: cdktf.stringToTerraform(this._endpointName),
      endpoint_region: cdktf.stringToTerraform(this._endpointRegion),
      endpoint_vpc: cdktf.stringToTerraform(this._endpointVpc),
      id: cdktf.stringToTerraform(this._id),
      subnet_ip: cdktf.listMapper(privateDnsInboundEndpointSubnetIpToTerraform, true)(this._subnetIp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_name: {
        value: cdktf.stringToHclTerraform(this._endpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_region: {
        value: cdktf.stringToHclTerraform(this._endpointRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_vpc: {
        value: cdktf.stringToHclTerraform(this._endpointVpc),
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
      subnet_ip: {
        value: cdktf.listMapperHcl(privateDnsInboundEndpointSubnetIpToHclTerraform, true)(this._subnetIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateDnsInboundEndpointSubnetIpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
