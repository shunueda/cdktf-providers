// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvmChcConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Out-of-band network security group list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#bmc_security_group_ids CvmChcConfig#bmc_security_group_ids}
  */
  readonly bmcSecurityGroupIds?: string[];
  /**
  * Valid characters: Letters, numbers, hyphens and underscores. Only set when update password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#bmc_user CvmChcConfig#bmc_user}
  */
  readonly bmcUser?: string;
  /**
  * CHC host ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#chc_id CvmChcConfig#chc_id}
  */
  readonly chcId: string;
  /**
  * Deployment network security group list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#deploy_security_group_ids CvmChcConfig#deploy_security_group_ids}
  */
  readonly deploySecurityGroupIds?: string[];
  /**
  * Server type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#device_type CvmChcConfig#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#id CvmChcConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * CHC host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#instance_name CvmChcConfig#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The password can contain 8 to 16 characters, including letters, numbers and special symbols (()`~!@#$%^&amp;amp;*-+=_|{}).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#password CvmChcConfig#password}
  */
  readonly password?: string;
  /**
  * bmc_virtual_private_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#bmc_virtual_private_cloud CvmChcConfig#bmc_virtual_private_cloud}
  */
  readonly bmcVirtualPrivateCloud?: CvmChcConfigBmcVirtualPrivateCloud;
  /**
  * deploy_virtual_private_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#deploy_virtual_private_cloud CvmChcConfig#deploy_virtual_private_cloud}
  */
  readonly deployVirtualPrivateCloud?: CvmChcConfigDeployVirtualPrivateCloud;
}
export interface CvmChcConfigBmcVirtualPrivateCloud {
  /**
  * Whether to use a CVM instance as a public gateway. The public gateway is only available when the instance has a public IP and resides in a VPC. Valid values:&lt;br&gt;&lt;li&gt;TRUE: yes;&lt;br&gt;&lt;li&gt;FALSE: no&lt;br&gt;&lt;br&gt;Default: FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#as_vpc_gateway CvmChcConfig#as_vpc_gateway}
  */
  readonly asVpcGateway?: boolean | cdktf.IResolvable;
  /**
  * Number of IPv6 addresses randomly generated for the ENI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#ipv6_address_count CvmChcConfig#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Array of VPC subnet IPs. You can use this parameter when creating instances or modifying VPC attributes of instances. Currently you can specify multiple IPs in one subnet only when creating multiple instances at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#private_ip_addresses CvmChcConfig#private_ip_addresses}
  */
  readonly privateIpAddresses?: string[];
  /**
  * VPC subnet ID in the format subnet-xxx. To obtain valid subnet IDs, you can log in to the [console](https://console.tencentcloud.com/vpc/vpc?rid=1) or call DescribeSubnets and look for the unSubnetId fields in the response. If you specify DEFAULT for both SubnetId and VpcId when creating an instance, the default VPC will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#subnet_id CvmChcConfig#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC ID in the format of vpc-xxx. To obtain valid VPC IDs, you can log in to the [console](https://console.tencentcloud.com/vpc/vpc?rid=1) or call the DescribeVpcEx API and look for the unVpcId fields in the response. If you specify DEFAULT for both VpcId and SubnetId when creating an instance, the default VPC will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#vpc_id CvmChcConfig#vpc_id}
  */
  readonly vpcId: string;
}

export function cvmChcConfigBmcVirtualPrivateCloudToTerraform(struct?: CvmChcConfigBmcVirtualPrivateCloudOutputReference | CvmChcConfigBmcVirtualPrivateCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_vpc_gateway: cdktf.booleanToTerraform(struct!.asVpcGateway),
    ipv6_address_count: cdktf.numberToTerraform(struct!.ipv6AddressCount),
    private_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateIpAddresses),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function cvmChcConfigBmcVirtualPrivateCloudToHclTerraform(struct?: CvmChcConfigBmcVirtualPrivateCloudOutputReference | CvmChcConfigBmcVirtualPrivateCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_vpc_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.asVpcGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_address_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CvmChcConfigBmcVirtualPrivateCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmChcConfigBmcVirtualPrivateCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asVpcGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.asVpcGateway = this._asVpcGateway;
    }
    if (this._ipv6AddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
    }
    if (this._privateIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddresses = this._privateIpAddresses;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmChcConfigBmcVirtualPrivateCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asVpcGateway = undefined;
      this._ipv6AddressCount = undefined;
      this._privateIpAddresses = undefined;
      this._subnetId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asVpcGateway = value.asVpcGateway;
      this._ipv6AddressCount = value.ipv6AddressCount;
      this._privateIpAddresses = value.privateIpAddresses;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
    }
  }

  // as_vpc_gateway - computed: false, optional: true, required: false
  private _asVpcGateway?: boolean | cdktf.IResolvable; 
  public get asVpcGateway() {
    return this.getBooleanAttribute('as_vpc_gateway');
  }
  public set asVpcGateway(value: boolean | cdktf.IResolvable) {
    this._asVpcGateway = value;
  }
  public resetAsVpcGateway() {
    this._asVpcGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asVpcGatewayInput() {
    return this._asVpcGateway;
  }

  // ipv6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number; 
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // private_ip_addresses - computed: true, optional: true, required: false
  private _privateIpAddresses?: string[]; 
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }
  public set privateIpAddresses(value: string[]) {
    this._privateIpAddresses = value;
  }
  public resetPrivateIpAddresses() {
    this._privateIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressesInput() {
    return this._privateIpAddresses;
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
}
export interface CvmChcConfigDeployVirtualPrivateCloud {
  /**
  * Whether to use a CVM instance as a public gateway. The public gateway is only available when the instance has a public IP and resides in a VPC. Valid values:&lt;br&gt;&lt;li&gt;TRUE: yes;&lt;br&gt;&lt;li&gt;FALSE: no&lt;br&gt;&lt;br&gt;Default: FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#as_vpc_gateway CvmChcConfig#as_vpc_gateway}
  */
  readonly asVpcGateway?: boolean | cdktf.IResolvable;
  /**
  * Number of IPv6 addresses randomly generated for the ENI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#ipv6_address_count CvmChcConfig#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Array of VPC subnet IPs. You can use this parameter when creating instances or modifying VPC attributes of instances. Currently you can specify multiple IPs in one subnet only when creating multiple instances at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#private_ip_addresses CvmChcConfig#private_ip_addresses}
  */
  readonly privateIpAddresses?: string[];
  /**
  * VPC subnet ID in the format subnet-xxx. To obtain valid subnet IDs, you can log in to the [console](https://console.tencentcloud.com/vpc/vpc?rid=1) or call DescribeSubnets and look for the unSubnetId fields in the response. If you specify DEFAULT for both SubnetId and VpcId when creating an instance, the default VPC will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#subnet_id CvmChcConfig#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC ID in the format of vpc-xxx. To obtain valid VPC IDs, you can log in to the [console](https://console.tencentcloud.com/vpc/vpc?rid=1) or call the DescribeVpcEx API and look for the unVpcId fields in the response. If you specify DEFAULT for both VpcId and SubnetId when creating an instance, the default VPC will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#vpc_id CvmChcConfig#vpc_id}
  */
  readonly vpcId: string;
}

export function cvmChcConfigDeployVirtualPrivateCloudToTerraform(struct?: CvmChcConfigDeployVirtualPrivateCloudOutputReference | CvmChcConfigDeployVirtualPrivateCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_vpc_gateway: cdktf.booleanToTerraform(struct!.asVpcGateway),
    ipv6_address_count: cdktf.numberToTerraform(struct!.ipv6AddressCount),
    private_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateIpAddresses),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function cvmChcConfigDeployVirtualPrivateCloudToHclTerraform(struct?: CvmChcConfigDeployVirtualPrivateCloudOutputReference | CvmChcConfigDeployVirtualPrivateCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_vpc_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.asVpcGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_address_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateIpAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class CvmChcConfigDeployVirtualPrivateCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmChcConfigDeployVirtualPrivateCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asVpcGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.asVpcGateway = this._asVpcGateway;
    }
    if (this._ipv6AddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
    }
    if (this._privateIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddresses = this._privateIpAddresses;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmChcConfigDeployVirtualPrivateCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asVpcGateway = undefined;
      this._ipv6AddressCount = undefined;
      this._privateIpAddresses = undefined;
      this._subnetId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asVpcGateway = value.asVpcGateway;
      this._ipv6AddressCount = value.ipv6AddressCount;
      this._privateIpAddresses = value.privateIpAddresses;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
    }
  }

  // as_vpc_gateway - computed: false, optional: true, required: false
  private _asVpcGateway?: boolean | cdktf.IResolvable; 
  public get asVpcGateway() {
    return this.getBooleanAttribute('as_vpc_gateway');
  }
  public set asVpcGateway(value: boolean | cdktf.IResolvable) {
    this._asVpcGateway = value;
  }
  public resetAsVpcGateway() {
    this._asVpcGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asVpcGatewayInput() {
    return this._asVpcGateway;
  }

  // ipv6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number; 
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // private_ip_addresses - computed: true, optional: true, required: false
  private _privateIpAddresses?: string[]; 
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }
  public set privateIpAddresses(value: string[]) {
    this._privateIpAddresses = value;
  }
  public resetPrivateIpAddresses() {
    this._privateIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressesInput() {
    return this._privateIpAddresses;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config tencentcloud_cvm_chc_config}
*/
export class CvmChcConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_chc_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvmChcConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvmChcConfig to import
  * @param importFromId The id of the existing CvmChcConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvmChcConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_chc_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/cvm_chc_config tencentcloud_cvm_chc_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvmChcConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CvmChcConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_chc_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bmcSecurityGroupIds = config.bmcSecurityGroupIds;
    this._bmcUser = config.bmcUser;
    this._chcId = config.chcId;
    this._deploySecurityGroupIds = config.deploySecurityGroupIds;
    this._deviceType = config.deviceType;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._password = config.password;
    this._bmcVirtualPrivateCloud.internalValue = config.bmcVirtualPrivateCloud;
    this._deployVirtualPrivateCloud.internalValue = config.deployVirtualPrivateCloud;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bmc_security_group_ids - computed: true, optional: true, required: false
  private _bmcSecurityGroupIds?: string[]; 
  public get bmcSecurityGroupIds() {
    return this.getListAttribute('bmc_security_group_ids');
  }
  public set bmcSecurityGroupIds(value: string[]) {
    this._bmcSecurityGroupIds = value;
  }
  public resetBmcSecurityGroupIds() {
    this._bmcSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmcSecurityGroupIdsInput() {
    return this._bmcSecurityGroupIds;
  }

  // bmc_user - computed: false, optional: true, required: false
  private _bmcUser?: string; 
  public get bmcUser() {
    return this.getStringAttribute('bmc_user');
  }
  public set bmcUser(value: string) {
    this._bmcUser = value;
  }
  public resetBmcUser() {
    this._bmcUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmcUserInput() {
    return this._bmcUser;
  }

  // chc_id - computed: false, optional: false, required: true
  private _chcId?: string; 
  public get chcId() {
    return this.getStringAttribute('chc_id');
  }
  public set chcId(value: string) {
    this._chcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chcIdInput() {
    return this._chcId;
  }

  // deploy_security_group_ids - computed: true, optional: true, required: false
  private _deploySecurityGroupIds?: string[]; 
  public get deploySecurityGroupIds() {
    return this.getListAttribute('deploy_security_group_ids');
  }
  public set deploySecurityGroupIds(value: string[]) {
    this._deploySecurityGroupIds = value;
  }
  public resetDeploySecurityGroupIds() {
    this._deploySecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploySecurityGroupIdsInput() {
    return this._deploySecurityGroupIds;
  }

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
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

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // bmc_virtual_private_cloud - computed: false, optional: true, required: false
  private _bmcVirtualPrivateCloud = new CvmChcConfigBmcVirtualPrivateCloudOutputReference(this, "bmc_virtual_private_cloud");
  public get bmcVirtualPrivateCloud() {
    return this._bmcVirtualPrivateCloud;
  }
  public putBmcVirtualPrivateCloud(value: CvmChcConfigBmcVirtualPrivateCloud) {
    this._bmcVirtualPrivateCloud.internalValue = value;
  }
  public resetBmcVirtualPrivateCloud() {
    this._bmcVirtualPrivateCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bmcVirtualPrivateCloudInput() {
    return this._bmcVirtualPrivateCloud.internalValue;
  }

  // deploy_virtual_private_cloud - computed: false, optional: true, required: false
  private _deployVirtualPrivateCloud = new CvmChcConfigDeployVirtualPrivateCloudOutputReference(this, "deploy_virtual_private_cloud");
  public get deployVirtualPrivateCloud() {
    return this._deployVirtualPrivateCloud;
  }
  public putDeployVirtualPrivateCloud(value: CvmChcConfigDeployVirtualPrivateCloud) {
    this._deployVirtualPrivateCloud.internalValue = value;
  }
  public resetDeployVirtualPrivateCloud() {
    this._deployVirtualPrivateCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployVirtualPrivateCloudInput() {
    return this._deployVirtualPrivateCloud.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bmc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bmcSecurityGroupIds),
      bmc_user: cdktf.stringToTerraform(this._bmcUser),
      chc_id: cdktf.stringToTerraform(this._chcId),
      deploy_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deploySecurityGroupIds),
      device_type: cdktf.stringToTerraform(this._deviceType),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      password: cdktf.stringToTerraform(this._password),
      bmc_virtual_private_cloud: cvmChcConfigBmcVirtualPrivateCloudToTerraform(this._bmcVirtualPrivateCloud.internalValue),
      deploy_virtual_private_cloud: cvmChcConfigDeployVirtualPrivateCloudToTerraform(this._deployVirtualPrivateCloud.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bmc_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bmcSecurityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bmc_user: {
        value: cdktf.stringToHclTerraform(this._bmcUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chc_id: {
        value: cdktf.stringToHclTerraform(this._chcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deploySecurityGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bmc_virtual_private_cloud: {
        value: cvmChcConfigBmcVirtualPrivateCloudToHclTerraform(this._bmcVirtualPrivateCloud.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmChcConfigBmcVirtualPrivateCloudList",
      },
      deploy_virtual_private_cloud: {
        value: cvmChcConfigDeployVirtualPrivateCloudToHclTerraform(this._deployVirtualPrivateCloud.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmChcConfigDeployVirtualPrivateCloudList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
