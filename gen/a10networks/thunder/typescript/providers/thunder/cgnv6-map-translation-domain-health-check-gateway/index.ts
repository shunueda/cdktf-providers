// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6MapTranslationDomainHealthCheckGatewayAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway#id Cgnv6MapTranslationDomainHealthCheckGatewayA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway#name Cgnv6MapTranslationDomainHealthCheckGatewayA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway#uuid Cgnv6MapTranslationDomainHealthCheckGatewayA#uuid}
  */
  readonly uuid?: string;
  /**
  * 'all-link-failure': Withdraw routes on health-check failure of all IPv4 gateways or all IPv6 gateways; 'any-link-failure': Withdraw routes on health-check failure of any gateway (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway#withdraw_route Cgnv6MapTranslationDomainHealthCheckGatewayA#withdraw_route}
  */
  readonly withdrawRoute?: string;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway#address_list Cgnv6MapTranslationDomainHealthCheckGatewayA#address_list}
  */
  readonly addressList?: Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructA[] | cdktf.IResolvable;
  /**
  * ipv6_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway#ipv6_address_list Cgnv6MapTranslationDomainHealthCheckGatewayA#ipv6_address_list}
  */
  readonly ipv6AddressList?: Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructA[] | cdktf.IResolvable;
}
export interface Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructA {
  /**
  * IPv4 Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway#ipv4_gateway Cgnv6MapTranslationDomainHealthCheckGatewayA#ipv4_gateway}
  */
  readonly ipv4Gateway?: string;
}

export function cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructAToTerraform(struct?: Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_gateway: cdktf.stringToTerraform(struct!.ipv4Gateway),
  }
}


export function cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructAToHclTerraform(struct?: Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Gateway = this._ipv4Gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Gateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Gateway = value.ipv4Gateway;
    }
  }

  // ipv4_gateway - computed: false, optional: true, required: false
  private _ipv4Gateway?: string; 
  public get ipv4Gateway() {
    return this.getStringAttribute('ipv4_gateway');
  }
  public set ipv4Gateway(value: string) {
    this._ipv4Gateway = value;
  }
  public resetIpv4Gateway() {
    this._ipv4Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GatewayInput() {
    return this._ipv4Gateway;
  }
}

export class Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructA[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructAOutputReference {
    return new Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructA {
  /**
  * IPv6 Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway#ipv6_gateway Cgnv6MapTranslationDomainHealthCheckGatewayA#ipv6_gateway}
  */
  readonly ipv6Gateway?: string;
}

export function cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructAToTerraform(struct?: Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_gateway: cdktf.stringToTerraform(struct!.ipv6Gateway),
  }
}


export function cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructAToHclTerraform(struct?: Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_gateway: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Gateway = this._ipv6Gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Gateway = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Gateway = value.ipv6Gateway;
    }
  }

  // ipv6_gateway - computed: false, optional: true, required: false
  private _ipv6Gateway?: string; 
  public get ipv6Gateway() {
    return this.getStringAttribute('ipv6_gateway');
  }
  public set ipv6Gateway(value: string) {
    this._ipv6Gateway = value;
  }
  public resetIpv6Gateway() {
    this._ipv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GatewayInput() {
    return this._ipv6Gateway;
  }
}

export class Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructAList extends cdktf.ComplexList {
  public internalValue? : Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructA[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructAOutputReference {
    return new Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway thunder_cgnv6_map_translation_domain_health_check_gateway}
*/
export class Cgnv6MapTranslationDomainHealthCheckGatewayA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_map_translation_domain_health_check_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6MapTranslationDomainHealthCheckGatewayA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6MapTranslationDomainHealthCheckGatewayA to import
  * @param importFromId The id of the existing Cgnv6MapTranslationDomainHealthCheckGatewayA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6MapTranslationDomainHealthCheckGatewayA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_map_translation_domain_health_check_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_map_translation_domain_health_check_gateway thunder_cgnv6_map_translation_domain_health_check_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6MapTranslationDomainHealthCheckGatewayAConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6MapTranslationDomainHealthCheckGatewayAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_map_translation_domain_health_check_gateway',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._name = config.name;
    this._uuid = config.uuid;
    this._withdrawRoute = config.withdrawRoute;
    this._addressList.internalValue = config.addressList;
    this._ipv6AddressList.internalValue = config.ipv6AddressList;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // withdraw_route - computed: false, optional: true, required: false
  private _withdrawRoute?: string; 
  public get withdrawRoute() {
    return this.getStringAttribute('withdraw_route');
  }
  public set withdrawRoute(value: string) {
    this._withdrawRoute = value;
  }
  public resetWithdrawRoute() {
    this._withdrawRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withdrawRouteInput() {
    return this._withdrawRoute;
  }

  // address_list - computed: false, optional: true, required: false
  private _addressList = new Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructAList(this, "address_list", false);
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructA[] | cdktf.IResolvable) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // ipv6_address_list - computed: false, optional: true, required: false
  private _ipv6AddressList = new Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructAList(this, "ipv6_address_list", false);
  public get ipv6AddressList() {
    return this._ipv6AddressList;
  }
  public putIpv6AddressList(value: Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructA[] | cdktf.IResolvable) {
    this._ipv6AddressList.internalValue = value;
  }
  public resetIpv6AddressList() {
    this._ipv6AddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressListInput() {
    return this._ipv6AddressList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      withdraw_route: cdktf.stringToTerraform(this._withdrawRoute),
      address_list: cdktf.listMapper(cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructAToTerraform, true)(this._addressList.internalValue),
      ipv6_address_list: cdktf.listMapper(cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructAToTerraform, true)(this._ipv6AddressList.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      withdraw_route: {
        value: cdktf.stringToHclTerraform(this._withdrawRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_list: {
        value: cdktf.listMapperHcl(cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructAToHclTerraform, true)(this._addressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6MapTranslationDomainHealthCheckGatewayAddressListStructAList",
      },
      ipv6_address_list: {
        value: cdktf.listMapperHcl(cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructAToHclTerraform, true)(this._ipv6AddressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6MapTranslationDomainHealthCheckGatewayIpv6AddressListStructAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
