// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpamIpamPoolAllocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation#cidr VpcIpamIpamPoolAllocation#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation#cidr_mask VpcIpamIpamPoolAllocation#cidr_mask}
  */
  readonly cidrMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation#id VpcIpamIpamPoolAllocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation#ipam_pool_allocation_description VpcIpamIpamPoolAllocation#ipam_pool_allocation_description}
  */
  readonly ipamPoolAllocationDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation#ipam_pool_allocation_name VpcIpamIpamPoolAllocation#ipam_pool_allocation_name}
  */
  readonly ipamPoolAllocationName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation#ipam_pool_id VpcIpamIpamPoolAllocation#ipam_pool_id}
  */
  readonly ipamPoolId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation#timeouts VpcIpamIpamPoolAllocation#timeouts}
  */
  readonly timeouts?: VpcIpamIpamPoolAllocationTimeouts;
}
export interface VpcIpamIpamPoolAllocationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation#create VpcIpamIpamPoolAllocation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation#delete VpcIpamIpamPoolAllocation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation#update VpcIpamIpamPoolAllocation#update}
  */
  readonly update?: string;
}

export function vpcIpamIpamPoolAllocationTimeoutsToTerraform(struct?: VpcIpamIpamPoolAllocationTimeouts | cdktf.IResolvable): any {
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


export function vpcIpamIpamPoolAllocationTimeoutsToHclTerraform(struct?: VpcIpamIpamPoolAllocationTimeouts | cdktf.IResolvable): any {
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

export class VpcIpamIpamPoolAllocationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VpcIpamIpamPoolAllocationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VpcIpamIpamPoolAllocationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation alicloud_vpc_ipam_ipam_pool_allocation}
*/
export class VpcIpamIpamPoolAllocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpc_ipam_ipam_pool_allocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcIpamIpamPoolAllocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcIpamIpamPoolAllocation to import
  * @param importFromId The id of the existing VpcIpamIpamPoolAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcIpamIpamPoolAllocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpc_ipam_ipam_pool_allocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/vpc_ipam_ipam_pool_allocation alicloud_vpc_ipam_ipam_pool_allocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpamIpamPoolAllocationConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpamIpamPoolAllocationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpc_ipam_ipam_pool_allocation',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidr = config.cidr;
    this._cidrMask = config.cidrMask;
    this._id = config.id;
    this._ipamPoolAllocationDescription = config.ipamPoolAllocationDescription;
    this._ipamPoolAllocationName = config.ipamPoolAllocationName;
    this._ipamPoolId = config.ipamPoolId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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

  // ipam_pool_allocation_description - computed: false, optional: true, required: false
  private _ipamPoolAllocationDescription?: string; 
  public get ipamPoolAllocationDescription() {
    return this.getStringAttribute('ipam_pool_allocation_description');
  }
  public set ipamPoolAllocationDescription(value: string) {
    this._ipamPoolAllocationDescription = value;
  }
  public resetIpamPoolAllocationDescription() {
    this._ipamPoolAllocationDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolAllocationDescriptionInput() {
    return this._ipamPoolAllocationDescription;
  }

  // ipam_pool_allocation_name - computed: false, optional: true, required: false
  private _ipamPoolAllocationName?: string; 
  public get ipamPoolAllocationName() {
    return this.getStringAttribute('ipam_pool_allocation_name');
  }
  public set ipamPoolAllocationName(value: string) {
    this._ipamPoolAllocationName = value;
  }
  public resetIpamPoolAllocationName() {
    this._ipamPoolAllocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolAllocationNameInput() {
    return this._ipamPoolAllocationName;
  }

  // ipam_pool_id - computed: false, optional: false, required: true
  private _ipamPoolId?: string; 
  public get ipamPoolId() {
    return this.getStringAttribute('ipam_pool_id');
  }
  public set ipamPoolId(value: string) {
    this._ipamPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamPoolIdInput() {
    return this._ipamPoolId;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcIpamIpamPoolAllocationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcIpamIpamPoolAllocationTimeouts) {
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
      cidr: cdktf.stringToTerraform(this._cidr),
      cidr_mask: cdktf.numberToTerraform(this._cidrMask),
      id: cdktf.stringToTerraform(this._id),
      ipam_pool_allocation_description: cdktf.stringToTerraform(this._ipamPoolAllocationDescription),
      ipam_pool_allocation_name: cdktf.stringToTerraform(this._ipamPoolAllocationName),
      ipam_pool_id: cdktf.stringToTerraform(this._ipamPoolId),
      timeouts: vpcIpamIpamPoolAllocationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
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
      ipam_pool_allocation_description: {
        value: cdktf.stringToHclTerraform(this._ipamPoolAllocationDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_pool_allocation_name: {
        value: cdktf.stringToHclTerraform(this._ipamPoolAllocationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipam_pool_id: {
        value: cdktf.stringToHclTerraform(this._ipamPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: vpcIpamIpamPoolAllocationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VpcIpamIpamPoolAllocationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
