// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EniIpv4AddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#id EniIpv4Address#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the ENI instance, such as `eni-m6dyj72l`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#network_interface_id EniIpv4Address#network_interface_id}
  */
  readonly networkInterfaceId: string;
  /**
  * IP service level. It is used together with `SecondaryPrivateIpAddressCount`. Values: PT`(Gold), `AU`(Silver), `AG `(Bronze) and DEFAULT (Default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#qos_level EniIpv4Address#qos_level}
  */
  readonly qosLevel?: string;
  /**
  * The number of newly-applied private IP addresses. You should provide either this parameter or PrivateIpAddresses, or both. The total number of private IP addresses cannot exceed the quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#secondary_private_ip_address_count EniIpv4Address#secondary_private_ip_address_count}
  */
  readonly secondaryPrivateIpAddressCount?: number;
  /**
  * private_ip_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#private_ip_addresses EniIpv4Address#private_ip_addresses}
  */
  readonly privateIpAddresses?: EniIpv4AddressPrivateIpAddresses[] | cdktf.IResolvable;
}
export interface EniIpv4AddressPrivateIpAddresses {
  /**
  * EIP instance ID, such as `eip-11112222`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#address_id EniIpv4Address#address_id}
  */
  readonly addressId?: string;
  /**
  * Private IP description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#description EniIpv4Address#description}
  */
  readonly description?: string;
  /**
  * Whether the public IP is blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#is_wan_ip_blocked EniIpv4Address#is_wan_ip_blocked}
  */
  readonly isWanIpBlocked?: boolean | cdktf.IResolvable;
  /**
  * Whether it is a primary IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#primary EniIpv4Address#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * Private IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#private_ip_address EniIpv4Address#private_ip_address}
  */
  readonly privateIpAddress: string;
  /**
  * Public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#public_ip_address EniIpv4Address#public_ip_address}
  */
  readonly publicIpAddress?: string;
  /**
  * IP service level. Values: PT` (Gold), `AU` (Silver), `AG `(Bronze) and DEFAULT` (Default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#qos_level EniIpv4Address#qos_level}
  */
  readonly qosLevel?: string;
  /**
  * IP status: `PENDING`: Creating, `MIGRATING`: Migrating, `DELETING`: Deleting, `AVAILABLE`: Available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#state EniIpv4Address#state}
  */
  readonly state?: string;
}

export function eniIpv4AddressPrivateIpAddressesToTerraform(struct?: EniIpv4AddressPrivateIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_id: cdktf.stringToTerraform(struct!.addressId),
    description: cdktf.stringToTerraform(struct!.description),
    is_wan_ip_blocked: cdktf.booleanToTerraform(struct!.isWanIpBlocked),
    primary: cdktf.booleanToTerraform(struct!.primary),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    public_ip_address: cdktf.stringToTerraform(struct!.publicIpAddress),
    qos_level: cdktf.stringToTerraform(struct!.qosLevel),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function eniIpv4AddressPrivateIpAddressesToHclTerraform(struct?: EniIpv4AddressPrivateIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.publicIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_level: {
      value: cdktf.stringToHclTerraform(struct!.qosLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class EniIpv4AddressPrivateIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EniIpv4AddressPrivateIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._publicIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAddress = this._publicIpAddress;
    }
    if (this._qosLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosLevel = this._qosLevel;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EniIpv4AddressPrivateIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressId = undefined;
      this._description = undefined;
      this._isWanIpBlocked = undefined;
      this._primary = undefined;
      this._privateIpAddress = undefined;
      this._publicIpAddress = undefined;
      this._qosLevel = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressId = value.addressId;
      this._description = value.description;
      this._isWanIpBlocked = value.isWanIpBlocked;
      this._primary = value.primary;
      this._privateIpAddress = value.privateIpAddress;
      this._publicIpAddress = value.publicIpAddress;
      this._qosLevel = value.qosLevel;
      this._state = value.state;
    }
  }

  // address_id - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
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

  // is_wan_ip_blocked - computed: true, optional: true, required: false
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

  // primary - computed: true, optional: true, required: false
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

  // private_ip_address - computed: false, optional: false, required: true
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // public_ip_address - computed: true, optional: true, required: false
  private _publicIpAddress?: string; 
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }
  public set publicIpAddress(value: string) {
    this._publicIpAddress = value;
  }
  public resetPublicIpAddress() {
    this._publicIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAddressInput() {
    return this._publicIpAddress;
  }

  // qos_level - computed: true, optional: true, required: false
  private _qosLevel?: string; 
  public get qosLevel() {
    return this.getStringAttribute('qos_level');
  }
  public set qosLevel(value: string) {
    this._qosLevel = value;
  }
  public resetQosLevel() {
    this._qosLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosLevelInput() {
    return this._qosLevel;
  }

  // state - computed: true, optional: true, required: false
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

export class EniIpv4AddressPrivateIpAddressesList extends cdktf.ComplexList {
  public internalValue? : EniIpv4AddressPrivateIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): EniIpv4AddressPrivateIpAddressesOutputReference {
    return new EniIpv4AddressPrivateIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address tencentcloud_eni_ipv4_address}
*/
export class EniIpv4Address extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_eni_ipv4_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EniIpv4Address resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EniIpv4Address to import
  * @param importFromId The id of the existing EniIpv4Address that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EniIpv4Address to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_eni_ipv4_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/eni_ipv4_address tencentcloud_eni_ipv4_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EniIpv4AddressConfig
  */
  public constructor(scope: Construct, id: string, config: EniIpv4AddressConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_eni_ipv4_address',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
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
    this._qosLevel = config.qosLevel;
    this._secondaryPrivateIpAddressCount = config.secondaryPrivateIpAddressCount;
    this._privateIpAddresses.internalValue = config.privateIpAddresses;
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

  // qos_level - computed: true, optional: true, required: false
  private _qosLevel?: string; 
  public get qosLevel() {
    return this.getStringAttribute('qos_level');
  }
  public set qosLevel(value: string) {
    this._qosLevel = value;
  }
  public resetQosLevel() {
    this._qosLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosLevelInput() {
    return this._qosLevel;
  }

  // secondary_private_ip_address_count - computed: true, optional: true, required: false
  private _secondaryPrivateIpAddressCount?: number; 
  public get secondaryPrivateIpAddressCount() {
    return this.getNumberAttribute('secondary_private_ip_address_count');
  }
  public set secondaryPrivateIpAddressCount(value: number) {
    this._secondaryPrivateIpAddressCount = value;
  }
  public resetSecondaryPrivateIpAddressCount() {
    this._secondaryPrivateIpAddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPrivateIpAddressCountInput() {
    return this._secondaryPrivateIpAddressCount;
  }

  // private_ip_addresses - computed: false, optional: true, required: false
  private _privateIpAddresses = new EniIpv4AddressPrivateIpAddressesList(this, "private_ip_addresses", true);
  public get privateIpAddresses() {
    return this._privateIpAddresses;
  }
  public putPrivateIpAddresses(value: EniIpv4AddressPrivateIpAddresses[] | cdktf.IResolvable) {
    this._privateIpAddresses.internalValue = value;
  }
  public resetPrivateIpAddresses() {
    this._privateIpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressesInput() {
    return this._privateIpAddresses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network_interface_id: cdktf.stringToTerraform(this._networkInterfaceId),
      qos_level: cdktf.stringToTerraform(this._qosLevel),
      secondary_private_ip_address_count: cdktf.numberToTerraform(this._secondaryPrivateIpAddressCount),
      private_ip_addresses: cdktf.listMapper(eniIpv4AddressPrivateIpAddressesToTerraform, true)(this._privateIpAddresses.internalValue),
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
      qos_level: {
        value: cdktf.stringToHclTerraform(this._qosLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_private_ip_address_count: {
        value: cdktf.numberToHclTerraform(this._secondaryPrivateIpAddressCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_ip_addresses: {
        value: cdktf.listMapperHcl(eniIpv4AddressPrivateIpAddressesToHclTerraform, true)(this._privateIpAddresses.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EniIpv4AddressPrivateIpAddressesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
