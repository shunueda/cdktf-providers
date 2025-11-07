// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExternalNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#description ExternalNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#id ExternalNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#name ExternalNetwork#name}
  */
  readonly name: string;
  /**
  * Specifies whether the network resources such as IP/MAC of router will be retained across deployments. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#retain_net_info_across_deployments ExternalNetwork#retain_net_info_across_deployments}
  */
  readonly retainNetInfoAcrossDeployments?: boolean | cdktf.IResolvable;
  /**
  * ip_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#ip_scope ExternalNetwork#ip_scope}
  */
  readonly ipScope: ExternalNetworkIpScope[] | cdktf.IResolvable;
  /**
  * vsphere_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#vsphere_network ExternalNetwork#vsphere_network}
  */
  readonly vsphereNetwork: ExternalNetworkVsphereNetwork[] | cdktf.IResolvable;
}
export interface ExternalNetworkIpScopeStaticIpPool {
  /**
  * End address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#end_address ExternalNetwork#end_address}
  */
  readonly endAddress: string;
  /**
  * Start address of the IP range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#start_address ExternalNetwork#start_address}
  */
  readonly startAddress: string;
}

export function externalNetworkIpScopeStaticIpPoolToTerraform(struct?: ExternalNetworkIpScopeStaticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function externalNetworkIpScopeStaticIpPoolToHclTerraform(struct?: ExternalNetworkIpScopeStaticIpPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalNetworkIpScopeStaticIpPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalNetworkIpScopeStaticIpPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalNetworkIpScopeStaticIpPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endAddress = undefined;
      this._startAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endAddress = value.endAddress;
      this._startAddress = value.startAddress;
    }
  }

  // end_address - computed: false, optional: false, required: true
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // start_address - computed: false, optional: false, required: true
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }
}

export class ExternalNetworkIpScopeStaticIpPoolList extends cdktf.ComplexList {
  public internalValue? : ExternalNetworkIpScopeStaticIpPool[] | cdktf.IResolvable

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
  public get(index: number): ExternalNetworkIpScopeStaticIpPoolOutputReference {
    return new ExternalNetworkIpScopeStaticIpPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalNetworkIpScope {
  /**
  * Primary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#dns1 ExternalNetwork#dns1}
  */
  readonly dns1?: string;
  /**
  * Secondary DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#dns2 ExternalNetwork#dns2}
  */
  readonly dns2?: string;
  /**
  * DNS suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#dns_suffix ExternalNetwork#dns_suffix}
  */
  readonly dnsSuffix?: string;
  /**
  * Gateway of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#gateway ExternalNetwork#gateway}
  */
  readonly gateway: string;
  /**
  * Network mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#netmask ExternalNetwork#netmask}
  */
  readonly netmask: string;
  /**
  * static_ip_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#static_ip_pool ExternalNetwork#static_ip_pool}
  */
  readonly staticIpPool?: ExternalNetworkIpScopeStaticIpPool[] | cdktf.IResolvable;
}

export function externalNetworkIpScopeToTerraform(struct?: ExternalNetworkIpScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns1: cdktf.stringToTerraform(struct!.dns1),
    dns2: cdktf.stringToTerraform(struct!.dns2),
    dns_suffix: cdktf.stringToTerraform(struct!.dnsSuffix),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    static_ip_pool: cdktf.listMapper(externalNetworkIpScopeStaticIpPoolToTerraform, true)(struct!.staticIpPool),
  }
}


export function externalNetworkIpScopeToHclTerraform(struct?: ExternalNetworkIpScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns1: {
      value: cdktf.stringToHclTerraform(struct!.dns1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns2: {
      value: cdktf.stringToHclTerraform(struct!.dns2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_suffix: {
      value: cdktf.stringToHclTerraform(struct!.dnsSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ip_pool: {
      value: cdktf.listMapperHcl(externalNetworkIpScopeStaticIpPoolToHclTerraform, true)(struct!.staticIpPool),
      isBlock: true,
      type: "list",
      storageClassType: "ExternalNetworkIpScopeStaticIpPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalNetworkIpScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalNetworkIpScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns1 = this._dns1;
    }
    if (this._dns2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns2 = this._dns2;
    }
    if (this._dnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSuffix = this._dnsSuffix;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._staticIpPool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpPool = this._staticIpPool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalNetworkIpScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns1 = undefined;
      this._dns2 = undefined;
      this._dnsSuffix = undefined;
      this._gateway = undefined;
      this._netmask = undefined;
      this._staticIpPool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns1 = value.dns1;
      this._dns2 = value.dns2;
      this._dnsSuffix = value.dnsSuffix;
      this._gateway = value.gateway;
      this._netmask = value.netmask;
      this._staticIpPool.internalValue = value.staticIpPool;
    }
  }

  // dns1 - computed: false, optional: true, required: false
  private _dns1?: string; 
  public get dns1() {
    return this.getStringAttribute('dns1');
  }
  public set dns1(value: string) {
    this._dns1 = value;
  }
  public resetDns1() {
    this._dns1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns1Input() {
    return this._dns1;
  }

  // dns2 - computed: false, optional: true, required: false
  private _dns2?: string; 
  public get dns2() {
    return this.getStringAttribute('dns2');
  }
  public set dns2(value: string) {
    this._dns2 = value;
  }
  public resetDns2() {
    this._dns2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns2Input() {
    return this._dns2;
  }

  // dns_suffix - computed: false, optional: true, required: false
  private _dnsSuffix?: string; 
  public get dnsSuffix() {
    return this.getStringAttribute('dns_suffix');
  }
  public set dnsSuffix(value: string) {
    this._dnsSuffix = value;
  }
  public resetDnsSuffix() {
    this._dnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSuffixInput() {
    return this._dnsSuffix;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // static_ip_pool - computed: false, optional: true, required: false
  private _staticIpPool = new ExternalNetworkIpScopeStaticIpPoolList(this, "static_ip_pool", false);
  public get staticIpPool() {
    return this._staticIpPool;
  }
  public putStaticIpPool(value: ExternalNetworkIpScopeStaticIpPool[] | cdktf.IResolvable) {
    this._staticIpPool.internalValue = value;
  }
  public resetStaticIpPool() {
    this._staticIpPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpPoolInput() {
    return this._staticIpPool.internalValue;
  }
}

export class ExternalNetworkIpScopeList extends cdktf.ComplexList {
  public internalValue? : ExternalNetworkIpScope[] | cdktf.IResolvable

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
  public get(index: number): ExternalNetworkIpScopeOutputReference {
    return new ExternalNetworkIpScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ExternalNetworkVsphereNetwork {
  /**
  * The name of the port group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#name ExternalNetwork#name}
  */
  readonly name: string;
  /**
  * The vSphere port group type. One of: DV_PORTGROUP (distributed virtual port group), NETWORK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#type ExternalNetwork#type}
  */
  readonly type: string;
  /**
  * The vCenter server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#vcenter ExternalNetwork#vcenter}
  */
  readonly vcenter: string;
}

export function externalNetworkVsphereNetworkToTerraform(struct?: ExternalNetworkVsphereNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    vcenter: cdktf.stringToTerraform(struct!.vcenter),
  }
}


export function externalNetworkVsphereNetworkToHclTerraform(struct?: ExternalNetworkVsphereNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter: {
      value: cdktf.stringToHclTerraform(struct!.vcenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ExternalNetworkVsphereNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ExternalNetworkVsphereNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._vcenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenter = this._vcenter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ExternalNetworkVsphereNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._vcenter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._vcenter = value.vcenter;
    }
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vcenter - computed: false, optional: false, required: true
  private _vcenter?: string; 
  public get vcenter() {
    return this.getStringAttribute('vcenter');
  }
  public set vcenter(value: string) {
    this._vcenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterInput() {
    return this._vcenter;
  }
}

export class ExternalNetworkVsphereNetworkList extends cdktf.ComplexList {
  public internalValue? : ExternalNetworkVsphereNetwork[] | cdktf.IResolvable

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
  public get(index: number): ExternalNetworkVsphereNetworkOutputReference {
    return new ExternalNetworkVsphereNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network vcd_external_network}
*/
export class ExternalNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_external_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExternalNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExternalNetwork to import
  * @param importFromId The id of the existing ExternalNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExternalNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_external_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/external_network vcd_external_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExternalNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: ExternalNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_external_network',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._retainNetInfoAcrossDeployments = config.retainNetInfoAcrossDeployments;
    this._ipScope.internalValue = config.ipScope;
    this._vsphereNetwork.internalValue = config.vsphereNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // retain_net_info_across_deployments - computed: false, optional: true, required: false
  private _retainNetInfoAcrossDeployments?: boolean | cdktf.IResolvable; 
  public get retainNetInfoAcrossDeployments() {
    return this.getBooleanAttribute('retain_net_info_across_deployments');
  }
  public set retainNetInfoAcrossDeployments(value: boolean | cdktf.IResolvable) {
    this._retainNetInfoAcrossDeployments = value;
  }
  public resetRetainNetInfoAcrossDeployments() {
    this._retainNetInfoAcrossDeployments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainNetInfoAcrossDeploymentsInput() {
    return this._retainNetInfoAcrossDeployments;
  }

  // ip_scope - computed: false, optional: false, required: true
  private _ipScope = new ExternalNetworkIpScopeList(this, "ip_scope", false);
  public get ipScope() {
    return this._ipScope;
  }
  public putIpScope(value: ExternalNetworkIpScope[] | cdktf.IResolvable) {
    this._ipScope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipScopeInput() {
    return this._ipScope.internalValue;
  }

  // vsphere_network - computed: false, optional: false, required: true
  private _vsphereNetwork = new ExternalNetworkVsphereNetworkList(this, "vsphere_network", false);
  public get vsphereNetwork() {
    return this._vsphereNetwork;
  }
  public putVsphereNetwork(value: ExternalNetworkVsphereNetwork[] | cdktf.IResolvable) {
    this._vsphereNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereNetworkInput() {
    return this._vsphereNetwork.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      retain_net_info_across_deployments: cdktf.booleanToTerraform(this._retainNetInfoAcrossDeployments),
      ip_scope: cdktf.listMapper(externalNetworkIpScopeToTerraform, true)(this._ipScope.internalValue),
      vsphere_network: cdktf.listMapper(externalNetworkVsphereNetworkToTerraform, true)(this._vsphereNetwork.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_net_info_across_deployments: {
        value: cdktf.booleanToHclTerraform(this._retainNetInfoAcrossDeployments),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip_scope: {
        value: cdktf.listMapperHcl(externalNetworkIpScopeToHclTerraform, true)(this._ipScope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalNetworkIpScopeList",
      },
      vsphere_network: {
        value: cdktf.listMapperHcl(externalNetworkVsphereNetworkToHclTerraform, true)(this._vsphereNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ExternalNetworkVsphereNetworkList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
