// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcPublicIpAddressPoolCidrBlockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block#cidr_block VpcPublicIpAddressPoolCidrBlock#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block#cidr_mask VpcPublicIpAddressPoolCidrBlock#cidr_mask}
  */
  readonly cidrMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block#id VpcPublicIpAddressPoolCidrBlock#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block#public_ip_address_pool_id VpcPublicIpAddressPoolCidrBlock#public_ip_address_pool_id}
  */
  readonly publicIpAddressPoolId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block#timeouts VpcPublicIpAddressPoolCidrBlock#timeouts}
  */
  readonly timeouts?: VpcPublicIpAddressPoolCidrBlockTimeouts;
}
export interface VpcPublicIpAddressPoolCidrBlockTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block#create VpcPublicIpAddressPoolCidrBlock#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block#delete VpcPublicIpAddressPoolCidrBlock#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block#update VpcPublicIpAddressPoolCidrBlock#update}
  */
  readonly update?: string;
}

export function vpcPublicIpAddressPoolCidrBlockTimeoutsToTerraform(struct?: VpcPublicIpAddressPoolCidrBlockTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function vpcPublicIpAddressPoolCidrBlockTimeoutsToHclTerraform(struct?: VpcPublicIpAddressPoolCidrBlockTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcPublicIpAddressPoolCidrBlockTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcPublicIpAddressPoolCidrBlockTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcPublicIpAddressPoolCidrBlockTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block alicloud_vpc_public_ip_address_pool_cidr_block}
*/
export class VpcPublicIpAddressPoolCidrBlock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_public_ip_address_pool_cidr_block";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcPublicIpAddressPoolCidrBlock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcPublicIpAddressPoolCidrBlock to import
  * @param importFromId The id of the existing VpcPublicIpAddressPoolCidrBlock that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcPublicIpAddressPoolCidrBlock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_public_ip_address_pool_cidr_block", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/vpc_public_ip_address_pool_cidr_block alicloud_vpc_public_ip_address_pool_cidr_block} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcPublicIpAddressPoolCidrBlockConfig
  */
  public constructor(scope: Construct, id: string, config: VpcPublicIpAddressPoolCidrBlockConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_public_ip_address_pool_cidr_block',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidrBlock = config.cidrBlock;
    this._cidrMask = config.cidrMask;
    this._id = config.id;
    this._publicIpAddressPoolId = config.publicIpAddressPoolId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // cidr_mask - computed: false, optional: true, required: false
  private _cidrMask?: number; 
  public get cidrMask() {
    return this.getNumberAttribute('cidr_mask');
  }
  public set cidrMask(value: number) {
    this._cidrMask = value;
  }
  public resetCidrMask() {
    this._cidrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrMaskInput() {
    return this._cidrMask;
  }

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

  // public_ip_address_pool_id - computed: false, optional: false, required: true
  private _publicIpAddressPoolId?: string; 
  public get publicIpAddressPoolId() {
    return this.getStringAttribute('public_ip_address_pool_id');
  }
  public set publicIpAddressPoolId(value: string) {
    this._publicIpAddressPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressPoolIdInput() {
    return this._publicIpAddressPoolId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcPublicIpAddressPoolCidrBlockTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcPublicIpAddressPoolCidrBlockTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      cidr_mask: cdktf.numberToTerraform(this._cidrMask),
      id: cdktf.stringToTerraform(this._id),
      public_ip_address_pool_id: cdktf.stringToTerraform(this._publicIpAddressPoolId),
      timeouts: vpcPublicIpAddressPoolCidrBlockTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_mask: {
        value: cdktf.numberToHclTerraform(this._cidrMask),
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
      public_ip_address_pool_id: {
        value: cdktf.stringToHclTerraform(this._publicIpAddressPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: vpcPublicIpAddressPoolCidrBlockTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcPublicIpAddressPoolCidrBlockTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
