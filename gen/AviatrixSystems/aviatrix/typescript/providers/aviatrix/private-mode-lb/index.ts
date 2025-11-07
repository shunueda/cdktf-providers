// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateModeLbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the access account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb#account_name PrivateModeLb#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb#id PrivateModeLb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Type of load balancer to create. Must be one of controller or multicloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb#lb_type PrivateModeLb#lb_type}
  */
  readonly lbType: string;
  /**
  * VPC ID of multicloud access VPC to connect to. Required when lb_type is multicloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb#multicloud_access_vpc_id PrivateModeLb#multicloud_access_vpc_id}
  */
  readonly multicloudAccessVpcId?: string;
  /**
  * Name of the VPC region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb#region PrivateModeLb#region}
  */
  readonly region: string;
  /**
  * ID of the VPC for the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb#vpc_id PrivateModeLb#vpc_id}
  */
  readonly vpcId: string;
  /**
  * proxies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb#proxies PrivateModeLb#proxies}
  */
  readonly proxies?: PrivateModeLbProxies[] | cdktf.IResolvable;
}
export interface PrivateModeLbProxies {
  /**
  * Instance ID of proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb#instance_id PrivateModeLb#instance_id}
  */
  readonly instanceId: string;
  /**
  * VPC ID of proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb#vpc_id PrivateModeLb#vpc_id}
  */
  readonly vpcId: string;
}

export function privateModeLbProxiesToTerraform(struct?: PrivateModeLbProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function privateModeLbProxiesToHclTerraform(struct?: PrivateModeLbProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
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

export class PrivateModeLbProxiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivateModeLbProxies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateModeLbProxies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._vpcId = value.vpcId;
    }
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

export class PrivateModeLbProxiesList extends cdktf.ComplexList {
  public internalValue? : PrivateModeLbProxies[] | cdktf.IResolvable

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
  public get(index: number): PrivateModeLbProxiesOutputReference {
    return new PrivateModeLbProxiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb aviatrix_private_mode_lb}
*/
export class PrivateModeLb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_private_mode_lb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateModeLb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateModeLb to import
  * @param importFromId The id of the existing PrivateModeLb that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateModeLb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_private_mode_lb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/private_mode_lb aviatrix_private_mode_lb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateModeLbConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateModeLbConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_private_mode_lb',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._id = config.id;
    this._lbType = config.lbType;
    this._multicloudAccessVpcId = config.multicloudAccessVpcId;
    this._region = config.region;
    this._vpcId = config.vpcId;
    this._proxies.internalValue = config.proxies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
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

  // lb_type - computed: false, optional: false, required: true
  private _lbType?: string; 
  public get lbType() {
    return this.getStringAttribute('lb_type');
  }
  public set lbType(value: string) {
    this._lbType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbTypeInput() {
    return this._lbType;
  }

  // multicloud_access_vpc_id - computed: false, optional: true, required: false
  private _multicloudAccessVpcId?: string; 
  public get multicloudAccessVpcId() {
    return this.getStringAttribute('multicloud_access_vpc_id');
  }
  public set multicloudAccessVpcId(value: string) {
    this._multicloudAccessVpcId = value;
  }
  public resetMulticloudAccessVpcId() {
    this._multicloudAccessVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicloudAccessVpcIdInput() {
    return this._multicloudAccessVpcId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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

  // proxies - computed: false, optional: true, required: false
  private _proxies = new PrivateModeLbProxiesList(this, "proxies", false);
  public get proxies() {
    return this._proxies;
  }
  public putProxies(value: PrivateModeLbProxies[] | cdktf.IResolvable) {
    this._proxies.internalValue = value;
  }
  public resetProxies() {
    this._proxies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiesInput() {
    return this._proxies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name: cdktf.stringToTerraform(this._accountName),
      id: cdktf.stringToTerraform(this._id),
      lb_type: cdktf.stringToTerraform(this._lbType),
      multicloud_access_vpc_id: cdktf.stringToTerraform(this._multicloudAccessVpcId),
      region: cdktf.stringToTerraform(this._region),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      proxies: cdktf.listMapper(privateModeLbProxiesToTerraform, true)(this._proxies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
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
      lb_type: {
        value: cdktf.stringToHclTerraform(this._lbType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicloud_access_vpc_id: {
        value: cdktf.stringToHclTerraform(this._multicloudAccessVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
      proxies: {
        value: cdktf.listMapperHcl(privateModeLbProxiesToHclTerraform, true)(this._proxies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivateModeLbProxiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
