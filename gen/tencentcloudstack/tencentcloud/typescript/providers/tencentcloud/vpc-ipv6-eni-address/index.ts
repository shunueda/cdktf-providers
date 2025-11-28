// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcIpv6EniAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address#id VpcIpv6EniAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ENI instance `ID`, in the form of `eni-m6dyj72l`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address#network_interface_id VpcIpv6EniAddress#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * VPC `ID`, in the form of `vpc-m6dyj72l`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address#vpc_id VpcIpv6EniAddress#vpc_id}
  */
  readonly vpcId: string;
  /**
  * ipv6_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address#ipv6_addresses VpcIpv6EniAddress#ipv6_addresses}
  */
  readonly ipv6Addresses?: VpcIpv6EniAddressIpv6Addresses[] | cdktf.IResolvable;
}
export interface VpcIpv6EniAddressIpv6Addresses {
  /**
  * `IPv6` address, in the form of: `3402:4e00:20:100:0:8cd9:2a67:71f3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address#address VpcIpv6EniAddress#address}
  */
  readonly address: string;
  /**
  * `EIP` instance `ID`, such as:`eip-hxlqja90`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address#address_id VpcIpv6EniAddress#address_id}
  */
  readonly addressId?: string;
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address#description VpcIpv6EniAddress#description}
  */
  readonly description?: string;
  /**
  * Whether the public network IP is blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address#is_wan_ip_blocked VpcIpv6EniAddress#is_wan_ip_blocked}
  */
  readonly isWanIpBlocked?: boolean | cdktf.IResolvable;
  /**
  * Whether to master `IP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address#primary VpcIpv6EniAddress#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * `IPv6` address status: `PENDING`: pending, `MIGRATING`: migrating, `DELETING`: deleting, `AVAILABLE`: available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address#state VpcIpv6EniAddress#state}
  */
  readonly state?: string;
}

export function vpcIpv6EniAddressIpv6AddressesToTerraform(struct?: VpcIpv6EniAddressIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_id: cdktf.stringToTerraform(struct!.addressId),
    description: cdktf.stringToTerraform(struct!.description),
    is_wan_ip_blocked: cdktf.booleanToTerraform(struct!.isWanIpBlocked),
    primary: cdktf.booleanToTerraform(struct!.primary),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function vpcIpv6EniAddressIpv6AddressesToHclTerraform(struct?: VpcIpv6EniAddressIpv6Addresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_id: {
      value: cdktf.stringToHclTerraform(struct!.addressId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_wan_ip_blocked: {
      value: cdktf.booleanToHclTerraform(struct!.isWanIpBlocked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VpcIpv6EniAddressIpv6AddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpcIpv6EniAddressIpv6Addresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressId !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressId = this._addressId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isWanIpBlocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.isWanIpBlocked = this._isWanIpBlocked;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcIpv6EniAddressIpv6Addresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressId = undefined;
      this._description = undefined;
      this._isWanIpBlocked = undefined;
      this._primary = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressId = value.addressId;
      this._description = value.description;
      this._isWanIpBlocked = value.isWanIpBlocked;
      this._primary = value.primary;
      this._state = value.state;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_id - computed: false, optional: true, required: false
  private _addressId?: string; 
  public get addressId() {
    return this.getStringAttribute('address_id');
  }
  public set addressId(value: string) {
    this._addressId = value;
  }
  public resetAddressId() {
    this._addressId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIdInput() {
    return this._addressId;
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

  // is_wan_ip_blocked - computed: false, optional: true, required: false
  private _isWanIpBlocked?: boolean | cdktf.IResolvable; 
  public get isWanIpBlocked() {
    return this.getBooleanAttribute('is_wan_ip_blocked');
  }
  public set isWanIpBlocked(value: boolean | cdktf.IResolvable) {
    this._isWanIpBlocked = value;
  }
  public resetIsWanIpBlocked() {
    this._isWanIpBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWanIpBlockedInput() {
    return this._isWanIpBlocked;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}

export class VpcIpv6EniAddressIpv6AddressesList extends cdktf.ComplexList {
  public internalValue? : VpcIpv6EniAddressIpv6Addresses[] | cdktf.IResolvable

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
  public get(index: number): VpcIpv6EniAddressIpv6AddressesOutputReference {
    return new VpcIpv6EniAddressIpv6AddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address tencentcloud_vpc_ipv6_eni_address}
*/
export class VpcIpv6EniAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_ipv6_eni_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VpcIpv6EniAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VpcIpv6EniAddress to import
  * @param importFromId The id of the existing VpcIpv6EniAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VpcIpv6EniAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_ipv6_eni_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/vpc_ipv6_eni_address tencentcloud_vpc_ipv6_eni_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcIpv6EniAddressConfig
  */
  public constructor(scope: Construct, id: string, config: VpcIpv6EniAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_ipv6_eni_address',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._networkInterfaceId = config.networkInterfaceId;
    this._vpcId = config.vpcId;
    this._ipv6Addresses.internalValue = config.ipv6Addresses;
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

  // network_interface_id - computed: false, optional: false, required: true
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
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

  // ipv6_addresses - computed: false, optional: true, required: false
  private _ipv6Addresses = new VpcIpv6EniAddressIpv6AddressesList(this, "ipv6_addresses", false);
  public get ipv6Addresses() {
    return this._ipv6Addresses;
  }
  public putIpv6Addresses(value: VpcIpv6EniAddressIpv6Addresses[] | cdktf.IResolvable) {
    this._ipv6Addresses.internalValue = value;
  }
  public resetIpv6Addresses() {
    this._ipv6Addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressesInput() {
    return this._ipv6Addresses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      ipv6_addresses: cdktf.listMapper(vpcIpv6EniAddressIpv6AddressesToTerraform, true)(this._ipv6Addresses.internalValue),
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
      network_interface_id: {
        value: cdktf.stringToHclTerraform(this._networkInterfaceId),
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
      ipv6_addresses: {
        value: cdktf.listMapperHcl(vpcIpv6EniAddressIpv6AddressesToHclTerraform, true)(this._ipv6Addresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VpcIpv6EniAddressIpv6AddressesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
