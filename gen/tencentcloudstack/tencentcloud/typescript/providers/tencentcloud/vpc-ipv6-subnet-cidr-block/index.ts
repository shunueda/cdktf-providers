// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/vpc_ipv6_subnet_cidr_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpv6SubnetCidrBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/vpc_ipv6_subnet_cidr_block#id VpcIpv6SubnetCidrBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The private network `ID` where the subnet is located. Such as:`vpc-f49l6u0z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/vpc_ipv6_subnet_cidr_block#vpc_id VpcIpv6SubnetCidrBlock#vpc_id}
  */
  readonly vpcId: string;
  /**
  * ipv6_subnet_cidr_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/vpc_ipv6_subnet_cidr_block#ipv6_subnet_cidr_blocks VpcIpv6SubnetCidrBlock#ipv6_subnet_cidr_blocks}
  */
  readonly ipv6SubnetCidrBlocks: VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocks;
}
export interface VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocks {
  /**
  * `IPv6` subnet segment. Such as: `3402:4e00:20:1001::/64`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/vpc_ipv6_subnet_cidr_block#ipv6_cidr_block VpcIpv6SubnetCidrBlock#ipv6_cidr_block}
  */
  readonly ipv6CidrBlock: string;
  /**
  * Subnet instance `ID`. Such as:`subnet-pxir56ns`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/vpc_ipv6_subnet_cidr_block#subnet_id VpcIpv6SubnetCidrBlock#subnet_id}
  */
  readonly subnetId: string;
}

export function vpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocksToTerraform(struct?: VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocksOutputReference | VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_cidr_block: cdktf.stringToTerraform(struct!.ipv6CidrBlock),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function vpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocksToHclTerraform(struct?: VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocksOutputReference | VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.ipv6CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6CidrBlock = this._ipv6CidrBlock;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6CidrBlock = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6CidrBlock = value.ipv6CidrBlock;
      this._subnetId = value.subnetId;
    }
  }

  // ipv6_cidr_block - computed: false, optional: false, required: true
  private _ipv6CidrBlock?: string; 
  public get ipv6CidrBlock() {
    return this.getStringAttribute('ipv6_cidr_block');
  }
  public set ipv6CidrBlock(value: string) {
    this._ipv6CidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrBlockInput() {
    return this._ipv6CidrBlock;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/vpc_ipv6_subnet_cidr_block tencentcloud_vpc_ipv6_subnet_cidr_block}
*/
export class VpcIpv6SubnetCidrBlock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_ipv6_subnet_cidr_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcIpv6SubnetCidrBlock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcIpv6SubnetCidrBlock to import
  * @param importFromId The id of the existing VpcIpv6SubnetCidrBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/vpc_ipv6_subnet_cidr_block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcIpv6SubnetCidrBlock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_ipv6_subnet_cidr_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/vpc_ipv6_subnet_cidr_block tencentcloud_vpc_ipv6_subnet_cidr_block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpv6SubnetCidrBlockConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpv6SubnetCidrBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_ipv6_subnet_cidr_block',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._vpcId = config.vpcId;
    this._ipv6SubnetCidrBlocks.internalValue = config.ipv6SubnetCidrBlocks;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipv6_subnet_cidr_blocks - computed: false, optional: false, required: true
  private _ipv6SubnetCidrBlocks = new VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocksOutputReference(this, "ipv6_subnet_cidr_blocks");
  public get ipv6SubnetCidrBlocks() {
    return this._ipv6SubnetCidrBlocks;
  }
  public putIpv6SubnetCidrBlocks(value: VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocks) {
    this._ipv6SubnetCidrBlocks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetCidrBlocksInput() {
    return this._ipv6SubnetCidrBlocks.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      ipv6_subnet_cidr_blocks: vpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocksToTerraform(this._ipv6SubnetCidrBlocks.internalValue),
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_subnet_cidr_blocks: {
        value: vpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocksToHclTerraform(this._ipv6SubnetCidrBlocks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcIpv6SubnetCidrBlockIpv6SubnetCidrBlocksList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
