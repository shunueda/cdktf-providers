// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NfvProvisionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#id NfvProvision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#parameters NfvProvision#parameters}
  */
  readonly parameters: NfvProvisionParameters;
}
export interface NfvProvisionItem {
}

export function nfvProvisionItemToTerraform(struct?: NfvProvisionItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function nfvProvisionItemToHclTerraform(struct?: NfvProvisionItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NfvProvisionItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NfvProvisionItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_id - computed: true, optional: false, required: false
  public get executionId() {
    return this.getStringAttribute('execution_id');
  }

  // execution_status_url - computed: true, optional: false, required: false
  public get executionStatusUrl() {
    return this.getStringAttribute('execution_status_url');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class NfvProvisionItemList extends cdktf.ComplexList {

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
  public get(index: number): NfvProvisionItemOutputReference {
    return new NfvProvisionItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningDeviceCustomNetworks {
  /**
  * IP address pool of sub pool (eg: 175.175.140.1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#ip_address_pool NfvProvision#ip_address_pool}
  */
  readonly ipAddressPool?: string;
  /**
  * Name of custom network (eg: cust-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#name NfvProvision#name}
  */
  readonly name?: string;
  /**
  * Port for custom network (eg: 443)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#port NfvProvision#port}
  */
  readonly port?: string;
}

export function nfvProvisionParametersProvisioningDeviceCustomNetworksToTerraform(struct?: NfvProvisionParametersProvisioningDeviceCustomNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address_pool: cdktf.stringToTerraform(struct!.ipAddressPool),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function nfvProvisionParametersProvisioningDeviceCustomNetworksToHclTerraform(struct?: NfvProvisionParametersProvisioningDeviceCustomNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address_pool: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningDeviceCustomNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningDeviceCustomNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddressPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressPool = this._ipAddressPool;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningDeviceCustomNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddressPool = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddressPool = value.ipAddressPool;
      this._name = value.name;
      this._port = value.port;
    }
  }

  // ip_address_pool - computed: true, optional: true, required: false
  private _ipAddressPool?: string; 
  public get ipAddressPool() {
    return this.getStringAttribute('ip_address_pool');
  }
  public set ipAddressPool(value: string) {
    this._ipAddressPool = value;
  }
  public resetIpAddressPool() {
    this._ipAddressPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPoolInput() {
    return this._ipAddressPool;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class NfvProvisionParametersProvisioningDeviceCustomNetworksList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningDeviceCustomNetworks[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningDeviceCustomNetworksOutputReference {
    return new NfvProvisionParametersProvisioningDeviceCustomNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterface {
  /**
  * Bandwidth limit (eg: 100)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#bandwidth NfvProvision#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Gateway (eg: 175.175.190.1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#gateway NfvProvision#gateway}
  */
  readonly gateway?: string;
  /**
  * Name of the interface (eg: GE0-0)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#interface_name NfvProvision#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * IP address (eg: 175.175.190.205)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#ip_address NfvProvision#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Subnet mask (eg: 255.255.255.0)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#subnetmask NfvProvision#subnetmask}
  */
  readonly subnetmask?: string;
}

export function nfvProvisionParametersProvisioningDeviceServiceProvidersWanInterfaceToTerraform(struct?: NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth: cdktf.stringToTerraform(struct!.bandwidth),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    subnetmask: cdktf.stringToTerraform(struct!.subnetmask),
  }
}


export function nfvProvisionParametersProvisioningDeviceServiceProvidersWanInterfaceToHclTerraform(struct?: NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth: {
      value: cdktf.stringToHclTerraform(struct!.bandwidth),
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
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetmask: {
      value: cdktf.stringToHclTerraform(struct!.subnetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidth !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidth = this._bandwidth;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._subnetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetmask = this._subnetmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidth = undefined;
      this._gateway = undefined;
      this._interfaceName = undefined;
      this._ipAddress = undefined;
      this._subnetmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidth = value.bandwidth;
      this._gateway = value.gateway;
      this._interfaceName = value.interfaceName;
      this._ipAddress = value.ipAddress;
      this._subnetmask = value.subnetmask;
    }
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // interface_name - computed: true, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // ip_address - computed: true, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // subnetmask - computed: true, optional: true, required: false
  private _subnetmask?: string; 
  public get subnetmask() {
    return this.getStringAttribute('subnetmask');
  }
  public set subnetmask(value: string) {
    this._subnetmask = value;
  }
  public resetSubnetmask() {
    this._subnetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetmaskInput() {
    return this._subnetmask;
  }
}

export class NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterfaceList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterface[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterfaceOutputReference {
    return new NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningDeviceServiceProviders {
  /**
  * Name of the service provider (eg: Airtel)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#service_provider NfvProvision#service_provider}
  */
  readonly serviceProvider?: string;
  /**
  * wan_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#wan_interface NfvProvision#wan_interface}
  */
  readonly wanInterface?: NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterface[] | cdktf.IResolvable;
}

export function nfvProvisionParametersProvisioningDeviceServiceProvidersToTerraform(struct?: NfvProvisionParametersProvisioningDeviceServiceProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_provider: cdktf.stringToTerraform(struct!.serviceProvider),
    wan_interface: cdktf.listMapper(nfvProvisionParametersProvisioningDeviceServiceProvidersWanInterfaceToTerraform, true)(struct!.wanInterface),
  }
}


export function nfvProvisionParametersProvisioningDeviceServiceProvidersToHclTerraform(struct?: NfvProvisionParametersProvisioningDeviceServiceProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_provider: {
      value: cdktf.stringToHclTerraform(struct!.serviceProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wan_interface: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningDeviceServiceProvidersWanInterfaceToHclTerraform, true)(struct!.wanInterface),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningDeviceServiceProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningDeviceServiceProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProvider = this._serviceProvider;
    }
    if (this._wanInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanInterface = this._wanInterface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningDeviceServiceProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceProvider = undefined;
      this._wanInterface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceProvider = value.serviceProvider;
      this._wanInterface.internalValue = value.wanInterface;
    }
  }

  // service_provider - computed: true, optional: true, required: false
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  public resetServiceProvider() {
    this._serviceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // wan_interface - computed: false, optional: true, required: false
  private _wanInterface = new NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterfaceList(this, "wan_interface", false);
  public get wanInterface() {
    return this._wanInterface;
  }
  public putWanInterface(value: NfvProvisionParametersProvisioningDeviceServiceProvidersWanInterface[] | cdktf.IResolvable) {
    this._wanInterface.internalValue = value;
  }
  public resetWanInterface() {
    this._wanInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanInterfaceInput() {
    return this._wanInterface.internalValue;
  }
}

export class NfvProvisionParametersProvisioningDeviceServiceProvidersList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningDeviceServiceProviders[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningDeviceServiceProvidersOutputReference {
    return new NfvProvisionParametersProvisioningDeviceServiceProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningDeviceServices {
  /**
  * Admin password hash
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#admin_password_hash NfvProvision#admin_password_hash}
  */
  readonly adminPasswordHash?: string;
  /**
  * WAAS Package needs to be installed to populate Central Manager IP automatically.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#central_manager_ip NfvProvision#central_manager_ip}
  */
  readonly centralManagerIp?: string;
  /**
  * Central registration key 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#central_registration_key NfvProvision#central_registration_key}
  */
  readonly centralRegistrationKey?: string;
  /**
  * Common key 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#common_key NfvProvision#common_key}
  */
  readonly commonKey?: string;
  /**
  * Name of disk type (eg: internal)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#disk NfvProvision#disk}
  */
  readonly disk?: string;
  /**
  * Mode of firewall (eg: transparent)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#mode NfvProvision#mode}
  */
  readonly mode?: string;
  /**
  * System IP 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#system_ip NfvProvision#system_ip}
  */
  readonly systemIp?: string;
  /**
  * Type of service (eg: ISR)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#type NfvProvision#type}
  */
  readonly type?: string;
}

export function nfvProvisionParametersProvisioningDeviceServicesToTerraform(struct?: NfvProvisionParametersProvisioningDeviceServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password_hash: cdktf.stringToTerraform(struct!.adminPasswordHash),
    central_manager_ip: cdktf.stringToTerraform(struct!.centralManagerIp),
    central_registration_key: cdktf.stringToTerraform(struct!.centralRegistrationKey),
    common_key: cdktf.stringToTerraform(struct!.commonKey),
    disk: cdktf.stringToTerraform(struct!.disk),
    mode: cdktf.stringToTerraform(struct!.mode),
    system_ip: cdktf.stringToTerraform(struct!.systemIp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfvProvisionParametersProvisioningDeviceServicesToHclTerraform(struct?: NfvProvisionParametersProvisioningDeviceServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password_hash: {
      value: cdktf.stringToHclTerraform(struct!.adminPasswordHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    central_manager_ip: {
      value: cdktf.stringToHclTerraform(struct!.centralManagerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    central_registration_key: {
      value: cdktf.stringToHclTerraform(struct!.centralRegistrationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_key: {
      value: cdktf.stringToHclTerraform(struct!.commonKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk: {
      value: cdktf.stringToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_ip: {
      value: cdktf.stringToHclTerraform(struct!.systemIp),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningDeviceServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningDeviceServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPasswordHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPasswordHash = this._adminPasswordHash;
    }
    if (this._centralManagerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.centralManagerIp = this._centralManagerIp;
    }
    if (this._centralRegistrationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.centralRegistrationKey = this._centralRegistrationKey;
    }
    if (this._commonKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonKey = this._commonKey;
    }
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._systemIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemIp = this._systemIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningDeviceServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPasswordHash = undefined;
      this._centralManagerIp = undefined;
      this._centralRegistrationKey = undefined;
      this._commonKey = undefined;
      this._disk = undefined;
      this._mode = undefined;
      this._systemIp = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPasswordHash = value.adminPasswordHash;
      this._centralManagerIp = value.centralManagerIp;
      this._centralRegistrationKey = value.centralRegistrationKey;
      this._commonKey = value.commonKey;
      this._disk = value.disk;
      this._mode = value.mode;
      this._systemIp = value.systemIp;
      this._type = value.type;
    }
  }

  // admin_password_hash - computed: true, optional: true, required: false
  private _adminPasswordHash?: string; 
  public get adminPasswordHash() {
    return this.getStringAttribute('admin_password_hash');
  }
  public set adminPasswordHash(value: string) {
    this._adminPasswordHash = value;
  }
  public resetAdminPasswordHash() {
    this._adminPasswordHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordHashInput() {
    return this._adminPasswordHash;
  }

  // central_manager_ip - computed: true, optional: true, required: false
  private _centralManagerIp?: string; 
  public get centralManagerIp() {
    return this.getStringAttribute('central_manager_ip');
  }
  public set centralManagerIp(value: string) {
    this._centralManagerIp = value;
  }
  public resetCentralManagerIp() {
    this._centralManagerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralManagerIpInput() {
    return this._centralManagerIp;
  }

  // central_registration_key - computed: true, optional: true, required: false
  private _centralRegistrationKey?: string; 
  public get centralRegistrationKey() {
    return this.getStringAttribute('central_registration_key');
  }
  public set centralRegistrationKey(value: string) {
    this._centralRegistrationKey = value;
  }
  public resetCentralRegistrationKey() {
    this._centralRegistrationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralRegistrationKeyInput() {
    return this._centralRegistrationKey;
  }

  // common_key - computed: true, optional: true, required: false
  private _commonKey?: string; 
  public get commonKey() {
    return this.getStringAttribute('common_key');
  }
  public set commonKey(value: string) {
    this._commonKey = value;
  }
  public resetCommonKey() {
    this._commonKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonKeyInput() {
    return this._commonKey;
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: string; 
  public get disk() {
    return this.getStringAttribute('disk');
  }
  public set disk(value: string) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // system_ip - computed: true, optional: true, required: false
  private _systemIp?: string; 
  public get systemIp() {
    return this.getStringAttribute('system_ip');
  }
  public set systemIp(value: string) {
    this._systemIp = value;
  }
  public resetSystemIp() {
    this._systemIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIpInput() {
    return this._systemIp;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class NfvProvisionParametersProvisioningDeviceServicesList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningDeviceServices[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningDeviceServicesOutputReference {
    return new NfvProvisionParametersProvisioningDeviceServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningDeviceSubPools {
  /**
  * IP address for gate way (eg: 175.175.140.1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#gateway NfvProvision#gateway}
  */
  readonly gateway?: string;
  /**
  * IP pool cidir (eg: 175.175.140.0)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#ip_subnet NfvProvision#ip_subnet}
  */
  readonly ipSubnet?: string;
  /**
  * Name of the ip sub pool (eg; Lan-65)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#name NfvProvision#name}
  */
  readonly name?: string;
  /**
  * Name of parent pool (global pool name)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#parent_pool_name NfvProvision#parent_pool_name}
  */
  readonly parentPoolName?: string;
  /**
  * Tyep of ip sub pool (eg: Lan)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#type NfvProvision#type}
  */
  readonly type?: string;
}

export function nfvProvisionParametersProvisioningDeviceSubPoolsToTerraform(struct?: NfvProvisionParametersProvisioningDeviceSubPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    ip_subnet: cdktf.stringToTerraform(struct!.ipSubnet),
    name: cdktf.stringToTerraform(struct!.name),
    parent_pool_name: cdktf.stringToTerraform(struct!.parentPoolName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfvProvisionParametersProvisioningDeviceSubPoolsToHclTerraform(struct?: NfvProvisionParametersProvisioningDeviceSubPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.parentPoolName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningDeviceSubPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningDeviceSubPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._ipSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSubnet = this._ipSubnet;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentPoolName = this._parentPoolName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningDeviceSubPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._ipSubnet = undefined;
      this._name = undefined;
      this._parentPoolName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._ipSubnet = value.ipSubnet;
      this._name = value.name;
      this._parentPoolName = value.parentPoolName;
      this._type = value.type;
    }
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // ip_subnet - computed: true, optional: true, required: false
  private _ipSubnet?: string; 
  public get ipSubnet() {
    return this.getStringAttribute('ip_subnet');
  }
  public set ipSubnet(value: string) {
    this._ipSubnet = value;
  }
  public resetIpSubnet() {
    this._ipSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetInput() {
    return this._ipSubnet;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_pool_name - computed: true, optional: true, required: false
  private _parentPoolName?: string; 
  public get parentPoolName() {
    return this.getStringAttribute('parent_pool_name');
  }
  public set parentPoolName(value: string) {
    this._parentPoolName = value;
  }
  public resetParentPoolName() {
    this._parentPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPoolNameInput() {
    return this._parentPoolName;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class NfvProvisionParametersProvisioningDeviceSubPoolsList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningDeviceSubPools[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningDeviceSubPoolsOutputReference {
    return new NfvProvisionParametersProvisioningDeviceSubPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningDeviceTemplateParamAsav {
  /**
  * Variable for asav template (eg: "test":"Hello asav")
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#var1 NfvProvision#var1}
  */
  readonly var1?: string;
}

export function nfvProvisionParametersProvisioningDeviceTemplateParamAsavToTerraform(struct?: NfvProvisionParametersProvisioningDeviceTemplateParamAsav | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    var1: cdktf.stringToTerraform(struct!.var1),
  }
}


export function nfvProvisionParametersProvisioningDeviceTemplateParamAsavToHclTerraform(struct?: NfvProvisionParametersProvisioningDeviceTemplateParamAsav | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    var1: {
      value: cdktf.stringToHclTerraform(struct!.var1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningDeviceTemplateParamAsavOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningDeviceTemplateParamAsav | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._var1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.var1 = this._var1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningDeviceTemplateParamAsav | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._var1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._var1 = value.var1;
    }
  }

  // var1 - computed: true, optional: true, required: false
  private _var1?: string; 
  public get var1() {
    return this.getStringAttribute('var1');
  }
  public set var1(value: string) {
    this._var1 = value;
  }
  public resetVar1() {
    this._var1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get var1Input() {
    return this._var1;
  }
}

export class NfvProvisionParametersProvisioningDeviceTemplateParamAsavList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningDeviceTemplateParamAsav[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningDeviceTemplateParamAsavOutputReference {
    return new NfvProvisionParametersProvisioningDeviceTemplateParamAsavOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningDeviceTemplateParamNfvis {
  /**
  * Variable for nfvis template (eg: "test":"Hello nfvis")
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#var1 NfvProvision#var1}
  */
  readonly var1?: string;
}

export function nfvProvisionParametersProvisioningDeviceTemplateParamNfvisToTerraform(struct?: NfvProvisionParametersProvisioningDeviceTemplateParamNfvis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    var1: cdktf.stringToTerraform(struct!.var1),
  }
}


export function nfvProvisionParametersProvisioningDeviceTemplateParamNfvisToHclTerraform(struct?: NfvProvisionParametersProvisioningDeviceTemplateParamNfvis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    var1: {
      value: cdktf.stringToHclTerraform(struct!.var1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningDeviceTemplateParamNfvisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningDeviceTemplateParamNfvis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._var1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.var1 = this._var1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningDeviceTemplateParamNfvis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._var1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._var1 = value.var1;
    }
  }

  // var1 - computed: true, optional: true, required: false
  private _var1?: string; 
  public get var1() {
    return this.getStringAttribute('var1');
  }
  public set var1(value: string) {
    this._var1 = value;
  }
  public resetVar1() {
    this._var1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get var1Input() {
    return this._var1;
  }
}

export class NfvProvisionParametersProvisioningDeviceTemplateParamNfvisList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningDeviceTemplateParamNfvis[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningDeviceTemplateParamNfvisOutputReference {
    return new NfvProvisionParametersProvisioningDeviceTemplateParamNfvisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningDeviceTemplateParam {
  /**
  * asav block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#asav NfvProvision#asav}
  */
  readonly asav?: NfvProvisionParametersProvisioningDeviceTemplateParamAsav[] | cdktf.IResolvable;
  /**
  * nfvis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#nfvis NfvProvision#nfvis}
  */
  readonly nfvis?: NfvProvisionParametersProvisioningDeviceTemplateParamNfvis[] | cdktf.IResolvable;
}

export function nfvProvisionParametersProvisioningDeviceTemplateParamToTerraform(struct?: NfvProvisionParametersProvisioningDeviceTemplateParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asav: cdktf.listMapper(nfvProvisionParametersProvisioningDeviceTemplateParamAsavToTerraform, true)(struct!.asav),
    nfvis: cdktf.listMapper(nfvProvisionParametersProvisioningDeviceTemplateParamNfvisToTerraform, true)(struct!.nfvis),
  }
}


export function nfvProvisionParametersProvisioningDeviceTemplateParamToHclTerraform(struct?: NfvProvisionParametersProvisioningDeviceTemplateParam | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asav: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningDeviceTemplateParamAsavToHclTerraform, true)(struct!.asav),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningDeviceTemplateParamAsavList",
    },
    nfvis: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningDeviceTemplateParamNfvisToHclTerraform, true)(struct!.nfvis),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningDeviceTemplateParamNfvisList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningDeviceTemplateParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningDeviceTemplateParam | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asav?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asav = this._asav?.internalValue;
    }
    if (this._nfvis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfvis = this._nfvis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningDeviceTemplateParam | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asav.internalValue = undefined;
      this._nfvis.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asav.internalValue = value.asav;
      this._nfvis.internalValue = value.nfvis;
    }
  }

  // asav - computed: false, optional: true, required: false
  private _asav = new NfvProvisionParametersProvisioningDeviceTemplateParamAsavList(this, "asav", false);
  public get asav() {
    return this._asav;
  }
  public putAsav(value: NfvProvisionParametersProvisioningDeviceTemplateParamAsav[] | cdktf.IResolvable) {
    this._asav.internalValue = value;
  }
  public resetAsav() {
    this._asav.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asavInput() {
    return this._asav.internalValue;
  }

  // nfvis - computed: false, optional: true, required: false
  private _nfvis = new NfvProvisionParametersProvisioningDeviceTemplateParamNfvisList(this, "nfvis", false);
  public get nfvis() {
    return this._nfvis;
  }
  public putNfvis(value: NfvProvisionParametersProvisioningDeviceTemplateParamNfvis[] | cdktf.IResolvable) {
    this._nfvis.internalValue = value;
  }
  public resetNfvis() {
    this._nfvis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfvisInput() {
    return this._nfvis.internalValue;
  }
}

export class NfvProvisionParametersProvisioningDeviceTemplateParamList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningDeviceTemplateParam[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningDeviceTemplateParamOutputReference {
    return new NfvProvisionParametersProvisioningDeviceTemplateParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningDeviceVlan {
  /**
  * Vlan id(e: .4018)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#id NfvProvision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interface (eg: GigabitEathernet1/0)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#interfaces NfvProvision#interfaces}
  */
  readonly interfaces?: string;
  /**
  * Network name to connect (eg: lan-net)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#network NfvProvision#network}
  */
  readonly network?: string;
  /**
  * Vlan type(eg. Access or Trunk)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#type NfvProvision#type}
  */
  readonly type?: string;
}

export function nfvProvisionParametersProvisioningDeviceVlanToTerraform(struct?: NfvProvisionParametersProvisioningDeviceVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    interfaces: cdktf.stringToTerraform(struct!.interfaces),
    network: cdktf.stringToTerraform(struct!.network),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfvProvisionParametersProvisioningDeviceVlanToHclTerraform(struct?: NfvProvisionParametersProvisioningDeviceVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interfaces: {
      value: cdktf.stringToHclTerraform(struct!.interfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningDeviceVlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningDeviceVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._interfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningDeviceVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._interfaces = undefined;
      this._network = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._interfaces = value.interfaces;
      this._network = value.network;
      this._type = value.type;
    }
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

  // interfaces - computed: true, optional: true, required: false
  private _interfaces?: string; 
  public get interfaces() {
    return this.getStringAttribute('interfaces');
  }
  public set interfaces(value: string) {
    this._interfaces = value;
  }
  public resetInterfaces() {
    this._interfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class NfvProvisionParametersProvisioningDeviceVlanList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningDeviceVlan[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningDeviceVlanOutputReference {
    return new NfvProvisionParametersProvisioningDeviceVlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningDevice {
  /**
  * Serial number of device (eg: FGL210710QY)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#device_serial_number NfvProvision#device_serial_number}
  */
  readonly deviceSerialNumber?: string;
  /**
  * IP address of the device (eg: 172.20.126.90)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#ip NfvProvision#ip}
  */
  readonly ip?: string;
  /**
  * Name of device tag (eg: dev1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#tag_name NfvProvision#tag_name}
  */
  readonly tagName?: string;
  /**
  * custom_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#custom_networks NfvProvision#custom_networks}
  */
  readonly customNetworks?: NfvProvisionParametersProvisioningDeviceCustomNetworks[] | cdktf.IResolvable;
  /**
  * service_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#service_providers NfvProvision#service_providers}
  */
  readonly serviceProviders?: NfvProvisionParametersProvisioningDeviceServiceProviders[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#services NfvProvision#services}
  */
  readonly services?: NfvProvisionParametersProvisioningDeviceServices[] | cdktf.IResolvable;
  /**
  * sub_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#sub_pools NfvProvision#sub_pools}
  */
  readonly subPools?: NfvProvisionParametersProvisioningDeviceSubPools[] | cdktf.IResolvable;
  /**
  * template_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#template_param NfvProvision#template_param}
  */
  readonly templateParam?: NfvProvisionParametersProvisioningDeviceTemplateParam[] | cdktf.IResolvable;
  /**
  * vlan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#vlan NfvProvision#vlan}
  */
  readonly vlan?: NfvProvisionParametersProvisioningDeviceVlan[] | cdktf.IResolvable;
}

export function nfvProvisionParametersProvisioningDeviceToTerraform(struct?: NfvProvisionParametersProvisioningDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_serial_number: cdktf.stringToTerraform(struct!.deviceSerialNumber),
    ip: cdktf.stringToTerraform(struct!.ip),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
    custom_networks: cdktf.listMapper(nfvProvisionParametersProvisioningDeviceCustomNetworksToTerraform, true)(struct!.customNetworks),
    service_providers: cdktf.listMapper(nfvProvisionParametersProvisioningDeviceServiceProvidersToTerraform, true)(struct!.serviceProviders),
    services: cdktf.listMapper(nfvProvisionParametersProvisioningDeviceServicesToTerraform, true)(struct!.services),
    sub_pools: cdktf.listMapper(nfvProvisionParametersProvisioningDeviceSubPoolsToTerraform, true)(struct!.subPools),
    template_param: cdktf.listMapper(nfvProvisionParametersProvisioningDeviceTemplateParamToTerraform, true)(struct!.templateParam),
    vlan: cdktf.listMapper(nfvProvisionParametersProvisioningDeviceVlanToTerraform, true)(struct!.vlan),
  }
}


export function nfvProvisionParametersProvisioningDeviceToHclTerraform(struct?: NfvProvisionParametersProvisioningDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_serial_number: {
      value: cdktf.stringToHclTerraform(struct!.deviceSerialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_networks: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningDeviceCustomNetworksToHclTerraform, true)(struct!.customNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningDeviceCustomNetworksList",
    },
    service_providers: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningDeviceServiceProvidersToHclTerraform, true)(struct!.serviceProviders),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningDeviceServiceProvidersList",
    },
    services: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningDeviceServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningDeviceServicesList",
    },
    sub_pools: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningDeviceSubPoolsToHclTerraform, true)(struct!.subPools),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningDeviceSubPoolsList",
    },
    template_param: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningDeviceTemplateParamToHclTerraform, true)(struct!.templateParam),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningDeviceTemplateParamList",
    },
    vlan: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningDeviceVlanToHclTerraform, true)(struct!.vlan),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningDeviceVlanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceSerialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceSerialNumber = this._deviceSerialNumber;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    if (this._customNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNetworks = this._customNetworks?.internalValue;
    }
    if (this._serviceProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviders = this._serviceProviders?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._subPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPools = this._subPools?.internalValue;
    }
    if (this._templateParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateParam = this._templateParam?.internalValue;
    }
    if (this._vlan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceSerialNumber = undefined;
      this._ip = undefined;
      this._tagName = undefined;
      this._customNetworks.internalValue = undefined;
      this._serviceProviders.internalValue = undefined;
      this._services.internalValue = undefined;
      this._subPools.internalValue = undefined;
      this._templateParam.internalValue = undefined;
      this._vlan.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceSerialNumber = value.deviceSerialNumber;
      this._ip = value.ip;
      this._tagName = value.tagName;
      this._customNetworks.internalValue = value.customNetworks;
      this._serviceProviders.internalValue = value.serviceProviders;
      this._services.internalValue = value.services;
      this._subPools.internalValue = value.subPools;
      this._templateParam.internalValue = value.templateParam;
      this._vlan.internalValue = value.vlan;
    }
  }

  // device_serial_number - computed: true, optional: true, required: false
  private _deviceSerialNumber?: string; 
  public get deviceSerialNumber() {
    return this.getStringAttribute('device_serial_number');
  }
  public set deviceSerialNumber(value: string) {
    this._deviceSerialNumber = value;
  }
  public resetDeviceSerialNumber() {
    this._deviceSerialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceSerialNumberInput() {
    return this._deviceSerialNumber;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // tag_name - computed: true, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // custom_networks - computed: false, optional: true, required: false
  private _customNetworks = new NfvProvisionParametersProvisioningDeviceCustomNetworksList(this, "custom_networks", false);
  public get customNetworks() {
    return this._customNetworks;
  }
  public putCustomNetworks(value: NfvProvisionParametersProvisioningDeviceCustomNetworks[] | cdktf.IResolvable) {
    this._customNetworks.internalValue = value;
  }
  public resetCustomNetworks() {
    this._customNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNetworksInput() {
    return this._customNetworks.internalValue;
  }

  // service_providers - computed: false, optional: true, required: false
  private _serviceProviders = new NfvProvisionParametersProvisioningDeviceServiceProvidersList(this, "service_providers", false);
  public get serviceProviders() {
    return this._serviceProviders;
  }
  public putServiceProviders(value: NfvProvisionParametersProvisioningDeviceServiceProviders[] | cdktf.IResolvable) {
    this._serviceProviders.internalValue = value;
  }
  public resetServiceProviders() {
    this._serviceProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProvidersInput() {
    return this._serviceProviders.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new NfvProvisionParametersProvisioningDeviceServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: NfvProvisionParametersProvisioningDeviceServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // sub_pools - computed: false, optional: true, required: false
  private _subPools = new NfvProvisionParametersProvisioningDeviceSubPoolsList(this, "sub_pools", false);
  public get subPools() {
    return this._subPools;
  }
  public putSubPools(value: NfvProvisionParametersProvisioningDeviceSubPools[] | cdktf.IResolvable) {
    this._subPools.internalValue = value;
  }
  public resetSubPools() {
    this._subPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPoolsInput() {
    return this._subPools.internalValue;
  }

  // template_param - computed: false, optional: true, required: false
  private _templateParam = new NfvProvisionParametersProvisioningDeviceTemplateParamList(this, "template_param", false);
  public get templateParam() {
    return this._templateParam;
  }
  public putTemplateParam(value: NfvProvisionParametersProvisioningDeviceTemplateParam[] | cdktf.IResolvable) {
    this._templateParam.internalValue = value;
  }
  public resetTemplateParam() {
    this._templateParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateParamInput() {
    return this._templateParam.internalValue;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan = new NfvProvisionParametersProvisioningDeviceVlanList(this, "vlan", false);
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: NfvProvisionParametersProvisioningDeviceVlan[] | cdktf.IResolvable) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }
}

export class NfvProvisionParametersProvisioningDeviceList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningDevice[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningDeviceOutputReference {
    return new NfvProvisionParametersProvisioningDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningSiteArea {
  /**
  * Name of the area (eg: Area1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#name NfvProvision#name}
  */
  readonly name?: string;
  /**
  * Parent name of the area to be created
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#parent_name NfvProvision#parent_name}
  */
  readonly parentName?: string;
}

export function nfvProvisionParametersProvisioningSiteAreaToTerraform(struct?: NfvProvisionParametersProvisioningSiteArea | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parent_name: cdktf.stringToTerraform(struct!.parentName),
  }
}


export function nfvProvisionParametersProvisioningSiteAreaToHclTerraform(struct?: NfvProvisionParametersProvisioningSiteArea | cdktf.IResolvable): any {
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
    parent_name: {
      value: cdktf.stringToHclTerraform(struct!.parentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningSiteAreaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningSiteArea | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentName = this._parentName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningSiteArea | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parentName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parentName = value.parentName;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_name - computed: true, optional: true, required: false
  private _parentName?: string; 
  public get parentName() {
    return this.getStringAttribute('parent_name');
  }
  public set parentName(value: string) {
    this._parentName = value;
  }
  public resetParentName() {
    this._parentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentNameInput() {
    return this._parentName;
  }
}

export class NfvProvisionParametersProvisioningSiteAreaList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningSiteArea[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningSiteAreaOutputReference {
    return new NfvProvisionParametersProvisioningSiteAreaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningSiteBuilding {
  /**
  * Address of the building to be created
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#address NfvProvision#address}
  */
  readonly address?: string;
  /**
  * Latitude coordinate of the building (eg:37.338)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#latitude NfvProvision#latitude}
  */
  readonly latitude?: number;
  /**
  * Longitude coordinate of the building (eg:-121.832)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#longitude NfvProvision#longitude}
  */
  readonly longitude?: number;
  /**
  * Name of the building (eg: building1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#name NfvProvision#name}
  */
  readonly name?: string;
  /**
  * Address of the building to be created
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#parent_name NfvProvision#parent_name}
  */
  readonly parentName?: string;
}

export function nfvProvisionParametersProvisioningSiteBuildingToTerraform(struct?: NfvProvisionParametersProvisioningSiteBuilding | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
    name: cdktf.stringToTerraform(struct!.name),
    parent_name: cdktf.stringToTerraform(struct!.parentName),
  }
}


export function nfvProvisionParametersProvisioningSiteBuildingToHclTerraform(struct?: NfvProvisionParametersProvisioningSiteBuilding | cdktf.IResolvable): any {
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
    latitude: {
      value: cdktf.numberToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude: {
      value: cdktf.numberToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_name: {
      value: cdktf.stringToHclTerraform(struct!.parentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningSiteBuildingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningSiteBuilding | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentName = this._parentName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningSiteBuilding | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._name = undefined;
      this._parentName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._name = value.name;
      this._parentName = value.parentName;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_name - computed: true, optional: true, required: false
  private _parentName?: string; 
  public get parentName() {
    return this.getStringAttribute('parent_name');
  }
  public set parentName(value: string) {
    this._parentName = value;
  }
  public resetParentName() {
    this._parentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentNameInput() {
    return this._parentName;
  }
}

export class NfvProvisionParametersProvisioningSiteBuildingList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningSiteBuilding[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningSiteBuildingOutputReference {
    return new NfvProvisionParametersProvisioningSiteBuildingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningSiteFloor {
  /**
  * Height of the floor (eg: 15)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#height NfvProvision#height}
  */
  readonly height?: number;
  /**
  * Length of the floor (eg: 100)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#length NfvProvision#length}
  */
  readonly length?: number;
  /**
  * Name of the floor (eg:floor-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#name NfvProvision#name}
  */
  readonly name?: string;
  /**
  * Parent name of the floor to be created
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#parent_name NfvProvision#parent_name}
  */
  readonly parentName?: string;
  /**
  * Type of floor (eg: Cubes And Walled Offices)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#rf_model NfvProvision#rf_model}
  */
  readonly rfModel?: string;
  /**
  * Width of the floor (eg:100)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#width NfvProvision#width}
  */
  readonly width?: number;
}

export function nfvProvisionParametersProvisioningSiteFloorToTerraform(struct?: NfvProvisionParametersProvisioningSiteFloor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    length: cdktf.numberToTerraform(struct!.length),
    name: cdktf.stringToTerraform(struct!.name),
    parent_name: cdktf.stringToTerraform(struct!.parentName),
    rf_model: cdktf.stringToTerraform(struct!.rfModel),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function nfvProvisionParametersProvisioningSiteFloorToHclTerraform(struct?: NfvProvisionParametersProvisioningSiteFloor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_name: {
      value: cdktf.stringToHclTerraform(struct!.parentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rf_model: {
      value: cdktf.stringToHclTerraform(struct!.rfModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningSiteFloorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningSiteFloor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentName = this._parentName;
    }
    if (this._rfModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfModel = this._rfModel;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningSiteFloor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._height = undefined;
      this._length = undefined;
      this._name = undefined;
      this._parentName = undefined;
      this._rfModel = undefined;
      this._width = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._height = value.height;
      this._length = value.length;
      this._name = value.name;
      this._parentName = value.parentName;
      this._rfModel = value.rfModel;
      this._width = value.width;
    }
  }

  // height - computed: true, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // length - computed: true, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent_name - computed: true, optional: true, required: false
  private _parentName?: string; 
  public get parentName() {
    return this.getStringAttribute('parent_name');
  }
  public set parentName(value: string) {
    this._parentName = value;
  }
  public resetParentName() {
    this._parentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentNameInput() {
    return this._parentName;
  }

  // rf_model - computed: true, optional: true, required: false
  private _rfModel?: string; 
  public get rfModel() {
    return this.getStringAttribute('rf_model');
  }
  public set rfModel(value: string) {
    this._rfModel = value;
  }
  public resetRfModel() {
    this._rfModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfModelInput() {
    return this._rfModel;
  }

  // width - computed: true, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}

export class NfvProvisionParametersProvisioningSiteFloorList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningSiteFloor[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningSiteFloorOutputReference {
    return new NfvProvisionParametersProvisioningSiteFloorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioningSite {
  /**
  * Name of site profile to be provision with device 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#site_profile_name NfvProvision#site_profile_name}
  */
  readonly siteProfileName?: string;
  /**
  * area block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#area NfvProvision#area}
  */
  readonly area?: NfvProvisionParametersProvisioningSiteArea[] | cdktf.IResolvable;
  /**
  * building block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#building NfvProvision#building}
  */
  readonly building?: NfvProvisionParametersProvisioningSiteBuilding[] | cdktf.IResolvable;
  /**
  * floor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#floor NfvProvision#floor}
  */
  readonly floor?: NfvProvisionParametersProvisioningSiteFloor[] | cdktf.IResolvable;
}

export function nfvProvisionParametersProvisioningSiteToTerraform(struct?: NfvProvisionParametersProvisioningSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_profile_name: cdktf.stringToTerraform(struct!.siteProfileName),
    area: cdktf.listMapper(nfvProvisionParametersProvisioningSiteAreaToTerraform, true)(struct!.area),
    building: cdktf.listMapper(nfvProvisionParametersProvisioningSiteBuildingToTerraform, true)(struct!.building),
    floor: cdktf.listMapper(nfvProvisionParametersProvisioningSiteFloorToTerraform, true)(struct!.floor),
  }
}


export function nfvProvisionParametersProvisioningSiteToHclTerraform(struct?: NfvProvisionParametersProvisioningSite | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.siteProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    area: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningSiteAreaToHclTerraform, true)(struct!.area),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningSiteAreaList",
    },
    building: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningSiteBuildingToHclTerraform, true)(struct!.building),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningSiteBuildingList",
    },
    floor: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningSiteFloorToHclTerraform, true)(struct!.floor),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningSiteFloorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningSiteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioningSite | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteProfileName = this._siteProfileName;
    }
    if (this._area?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.area = this._area?.internalValue;
    }
    if (this._building?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.building = this._building?.internalValue;
    }
    if (this._floor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floor = this._floor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioningSite | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._siteProfileName = undefined;
      this._area.internalValue = undefined;
      this._building.internalValue = undefined;
      this._floor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._siteProfileName = value.siteProfileName;
      this._area.internalValue = value.area;
      this._building.internalValue = value.building;
      this._floor.internalValue = value.floor;
    }
  }

  // site_profile_name - computed: true, optional: true, required: false
  private _siteProfileName?: string; 
  public get siteProfileName() {
    return this.getStringAttribute('site_profile_name');
  }
  public set siteProfileName(value: string) {
    this._siteProfileName = value;
  }
  public resetSiteProfileName() {
    this._siteProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteProfileNameInput() {
    return this._siteProfileName;
  }

  // area - computed: false, optional: true, required: false
  private _area = new NfvProvisionParametersProvisioningSiteAreaList(this, "area", false);
  public get area() {
    return this._area;
  }
  public putArea(value: NfvProvisionParametersProvisioningSiteArea[] | cdktf.IResolvable) {
    this._area.internalValue = value;
  }
  public resetArea() {
    this._area.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area.internalValue;
  }

  // building - computed: false, optional: true, required: false
  private _building = new NfvProvisionParametersProvisioningSiteBuildingList(this, "building", false);
  public get building() {
    return this._building;
  }
  public putBuilding(value: NfvProvisionParametersProvisioningSiteBuilding[] | cdktf.IResolvable) {
    this._building.internalValue = value;
  }
  public resetBuilding() {
    this._building.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildingInput() {
    return this._building.internalValue;
  }

  // floor - computed: false, optional: true, required: false
  private _floor = new NfvProvisionParametersProvisioningSiteFloorList(this, "floor", false);
  public get floor() {
    return this._floor;
  }
  public putFloor(value: NfvProvisionParametersProvisioningSiteFloor[] | cdktf.IResolvable) {
    this._floor.internalValue = value;
  }
  public resetFloor() {
    this._floor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floorInput() {
    return this._floor.internalValue;
  }
}

export class NfvProvisionParametersProvisioningSiteList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioningSite[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningSiteOutputReference {
    return new NfvProvisionParametersProvisioningSiteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersProvisioning {
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#device NfvProvision#device}
  */
  readonly device?: NfvProvisionParametersProvisioningDevice[] | cdktf.IResolvable;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#site NfvProvision#site}
  */
  readonly site?: NfvProvisionParametersProvisioningSite[] | cdktf.IResolvable;
}

export function nfvProvisionParametersProvisioningToTerraform(struct?: NfvProvisionParametersProvisioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.listMapper(nfvProvisionParametersProvisioningDeviceToTerraform, true)(struct!.device),
    site: cdktf.listMapper(nfvProvisionParametersProvisioningSiteToTerraform, true)(struct!.site),
  }
}


export function nfvProvisionParametersProvisioningToHclTerraform(struct?: NfvProvisionParametersProvisioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningDeviceToHclTerraform, true)(struct!.device),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningDeviceList",
    },
    site: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningSiteToHclTerraform, true)(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersProvisioningOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersProvisioning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersProvisioning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device.internalValue = undefined;
      this._site.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device.internalValue = value.device;
      this._site.internalValue = value.site;
    }
  }

  // device - computed: false, optional: true, required: false
  private _device = new NfvProvisionParametersProvisioningDeviceList(this, "device", false);
  public get device() {
    return this._device;
  }
  public putDevice(value: NfvProvisionParametersProvisioningDevice[] | cdktf.IResolvable) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // site - computed: false, optional: true, required: false
  private _site = new NfvProvisionParametersProvisioningSiteList(this, "site", false);
  public get site() {
    return this._site;
  }
  public putSite(value: NfvProvisionParametersProvisioningSite[] | cdktf.IResolvable) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }
}

export class NfvProvisionParametersProvisioningList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersProvisioning[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersProvisioningOutputReference {
    return new NfvProvisionParametersProvisioningOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnect {
  /**
  * Name of service to be connected to the custom network (eg: router-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#service NfvProvision#service}
  */
  readonly service?: string;
}

export function nfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnectToTerraform(struct?: NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function nfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnectToHclTerraform(struct?: NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._service = value.service;
    }
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}

export class NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnectList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnect[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnectOutputReference {
    return new NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersSiteProfileDeviceCustomNetworks {
  /**
  * Type of network connection from custom network (eg: lan)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#connection_type NfvProvision#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Name of custom network (eg: cust-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#name NfvProvision#name}
  */
  readonly name?: string;
  /**
  * Network mode (eg Access or Trunk)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#network_mode NfvProvision#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Vlan id for the custom network(eg: 4000)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#vlan NfvProvision#vlan}
  */
  readonly vlan?: string;
  /**
  * services_to_connect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#services_to_connect NfvProvision#services_to_connect}
  */
  readonly servicesToConnect?: NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnect[] | cdktf.IResolvable;
}

export function nfvProvisionParametersSiteProfileDeviceCustomNetworksToTerraform(struct?: NfvProvisionParametersSiteProfileDeviceCustomNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    name: cdktf.stringToTerraform(struct!.name),
    network_mode: cdktf.stringToTerraform(struct!.networkMode),
    vlan: cdktf.stringToTerraform(struct!.vlan),
    services_to_connect: cdktf.listMapper(nfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnectToTerraform, true)(struct!.servicesToConnect),
  }
}


export function nfvProvisionParametersSiteProfileDeviceCustomNetworksToHclTerraform(struct?: NfvProvisionParametersSiteProfileDeviceCustomNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_mode: {
      value: cdktf.stringToHclTerraform(struct!.networkMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.stringToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_to_connect: {
      value: cdktf.listMapperHcl(nfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnectToHclTerraform, true)(struct!.servicesToConnect),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersSiteProfileDeviceCustomNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersSiteProfileDeviceCustomNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMode = this._networkMode;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._servicesToConnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesToConnect = this._servicesToConnect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersSiteProfileDeviceCustomNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionType = undefined;
      this._name = undefined;
      this._networkMode = undefined;
      this._vlan = undefined;
      this._servicesToConnect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionType = value.connectionType;
      this._name = value.name;
      this._networkMode = value.networkMode;
      this._vlan = value.vlan;
      this._servicesToConnect.internalValue = value.servicesToConnect;
    }
  }

  // connection_type - computed: true, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_mode - computed: true, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // services_to_connect - computed: false, optional: true, required: false
  private _servicesToConnect = new NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnectList(this, "services_to_connect", false);
  public get servicesToConnect() {
    return this._servicesToConnect;
  }
  public putServicesToConnect(value: NfvProvisionParametersSiteProfileDeviceCustomNetworksServicesToConnect[] | cdktf.IResolvable) {
    this._servicesToConnect.internalValue = value;
  }
  public resetServicesToConnect() {
    this._servicesToConnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesToConnectInput() {
    return this._servicesToConnect.internalValue;
  }
}

export class NfvProvisionParametersSiteProfileDeviceCustomNetworksList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersSiteProfileDeviceCustomNetworks[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersSiteProfileDeviceCustomNetworksOutputReference {
    return new NfvProvisionParametersSiteProfileDeviceCustomNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersSiteProfileDeviceCustomServicesTopology {
  /**
  * Assign ip to network (eg: true)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#assign_ip NfvProvision#assign_ip}
  */
  readonly assignIp?: string;
  /**
  * Name of connection from custom service(eg: wan-net)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#name NfvProvision#name}
  */
  readonly name?: string;
  /**
  * Type of connection from custom service (eg:  wan, lan or internal)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#type NfvProvision#type}
  */
  readonly type?: string;
}

export function nfvProvisionParametersSiteProfileDeviceCustomServicesTopologyToTerraform(struct?: NfvProvisionParametersSiteProfileDeviceCustomServicesTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_ip: cdktf.stringToTerraform(struct!.assignIp),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfvProvisionParametersSiteProfileDeviceCustomServicesTopologyToHclTerraform(struct?: NfvProvisionParametersSiteProfileDeviceCustomServicesTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_ip: {
      value: cdktf.stringToHclTerraform(struct!.assignIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersSiteProfileDeviceCustomServicesTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersSiteProfileDeviceCustomServicesTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIp = this._assignIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersSiteProfileDeviceCustomServicesTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignIp = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignIp = value.assignIp;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // assign_ip - computed: true, optional: true, required: false
  private _assignIp?: string; 
  public get assignIp() {
    return this.getStringAttribute('assign_ip');
  }
  public set assignIp(value: string) {
    this._assignIp = value;
  }
  public resetAssignIp() {
    this._assignIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpInput() {
    return this._assignIp;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class NfvProvisionParametersSiteProfileDeviceCustomServicesTopologyList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersSiteProfileDeviceCustomServicesTopology[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersSiteProfileDeviceCustomServicesTopologyOutputReference {
    return new NfvProvisionParametersSiteProfileDeviceCustomServicesTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersSiteProfileDeviceCustomServices {
  /**
  * Application type of custom service (eg: LINUX)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#application_type NfvProvision#application_type}
  */
  readonly applicationType?: string;
  /**
  * Image name of custom service (eg: redhat7.tar.gz.tar.gz)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#image_name NfvProvision#image_name}
  */
  readonly imageName?: string;
  /**
  * Name of custom service (eg: LINUX-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#name NfvProvision#name}
  */
  readonly name?: string;
  /**
  * Profile type of service (eg: rhel7-medium)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#profile NfvProvision#profile}
  */
  readonly profile?: string;
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#topology NfvProvision#topology}
  */
  readonly topology?: NfvProvisionParametersSiteProfileDeviceCustomServicesTopology[] | cdktf.IResolvable;
}

export function nfvProvisionParametersSiteProfileDeviceCustomServicesToTerraform(struct?: NfvProvisionParametersSiteProfileDeviceCustomServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_type: cdktf.stringToTerraform(struct!.applicationType),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    name: cdktf.stringToTerraform(struct!.name),
    profile: cdktf.stringToTerraform(struct!.profile),
    topology: cdktf.listMapper(nfvProvisionParametersSiteProfileDeviceCustomServicesTopologyToTerraform, true)(struct!.topology),
  }
}


export function nfvProvisionParametersSiteProfileDeviceCustomServicesToHclTerraform(struct?: NfvProvisionParametersSiteProfileDeviceCustomServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_type: {
      value: cdktf.stringToHclTerraform(struct!.applicationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology: {
      value: cdktf.listMapperHcl(nfvProvisionParametersSiteProfileDeviceCustomServicesTopologyToHclTerraform, true)(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersSiteProfileDeviceCustomServicesTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersSiteProfileDeviceCustomServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersSiteProfileDeviceCustomServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationType = this._applicationType;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersSiteProfileDeviceCustomServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationType = undefined;
      this._imageName = undefined;
      this._name = undefined;
      this._profile = undefined;
      this._topology.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationType = value.applicationType;
      this._imageName = value.imageName;
      this._name = value.name;
      this._profile = value.profile;
      this._topology.internalValue = value.topology;
    }
  }

  // application_type - computed: true, optional: true, required: false
  private _applicationType?: string; 
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }
  public set applicationType(value: string) {
    this._applicationType = value;
  }
  public resetApplicationType() {
    this._applicationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType;
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // topology - computed: false, optional: true, required: false
  private _topology = new NfvProvisionParametersSiteProfileDeviceCustomServicesTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }
  public putTopology(value: NfvProvisionParametersSiteProfileDeviceCustomServicesTopology[] | cdktf.IResolvable) {
    this._topology.internalValue = value;
  }
  public resetTopology() {
    this._topology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}

export class NfvProvisionParametersSiteProfileDeviceCustomServicesList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersSiteProfileDeviceCustomServices[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersSiteProfileDeviceCustomServicesOutputReference {
    return new NfvProvisionParametersSiteProfileDeviceCustomServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersSiteProfileDeviceCustomTemplate {
  /**
  * Type of the device(eg: NFVIS)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#device_type NfvProvision#device_type}
  */
  readonly deviceType?: string;
  /**
  * Name of the template(eg NFVIS template)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#template NfvProvision#template}
  */
  readonly template?: string;
}

export function nfvProvisionParametersSiteProfileDeviceCustomTemplateToTerraform(struct?: NfvProvisionParametersSiteProfileDeviceCustomTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function nfvProvisionParametersSiteProfileDeviceCustomTemplateToHclTerraform(struct?: NfvProvisionParametersSiteProfileDeviceCustomTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersSiteProfileDeviceCustomTemplateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersSiteProfileDeviceCustomTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersSiteProfileDeviceCustomTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceType = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceType = value.deviceType;
      this._template = value.template;
    }
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

  // template - computed: true, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class NfvProvisionParametersSiteProfileDeviceCustomTemplateList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersSiteProfileDeviceCustomTemplate[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersSiteProfileDeviceCustomTemplateOutputReference {
    return new NfvProvisionParametersSiteProfileDeviceCustomTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersSiteProfileDeviceServiceProviders {
  /**
  * Connection of service provider and device value should be boolean (eg: true)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#connect NfvProvision#connect}
  */
  readonly connect?: string;
  /**
  * Default gateway connect value as boolean (eg: true)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#default_gateway NfvProvision#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Name of connection type(eg: GigabitEthernet) 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#link_type NfvProvision#link_type}
  */
  readonly linkType?: string;
  /**
  * Name of the service provider(eg: Airtel)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#service_provider NfvProvision#service_provider}
  */
  readonly serviceProvider?: string;
}

export function nfvProvisionParametersSiteProfileDeviceServiceProvidersToTerraform(struct?: NfvProvisionParametersSiteProfileDeviceServiceProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect: cdktf.stringToTerraform(struct!.connect),
    default_gateway: cdktf.stringToTerraform(struct!.defaultGateway),
    link_type: cdktf.stringToTerraform(struct!.linkType),
    service_provider: cdktf.stringToTerraform(struct!.serviceProvider),
  }
}


export function nfvProvisionParametersSiteProfileDeviceServiceProvidersToHclTerraform(struct?: NfvProvisionParametersSiteProfileDeviceServiceProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect: {
      value: cdktf.stringToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_gateway: {
      value: cdktf.stringToHclTerraform(struct!.defaultGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_type: {
      value: cdktf.stringToHclTerraform(struct!.linkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_provider: {
      value: cdktf.stringToHclTerraform(struct!.serviceProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersSiteProfileDeviceServiceProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersSiteProfileDeviceServiceProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect;
    }
    if (this._defaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultGateway = this._defaultGateway;
    }
    if (this._linkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkType = this._linkType;
    }
    if (this._serviceProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProvider = this._serviceProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersSiteProfileDeviceServiceProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connect = undefined;
      this._defaultGateway = undefined;
      this._linkType = undefined;
      this._serviceProvider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connect = value.connect;
      this._defaultGateway = value.defaultGateway;
      this._linkType = value.linkType;
      this._serviceProvider = value.serviceProvider;
    }
  }

  // connect - computed: true, optional: true, required: false
  private _connect?: string; 
  public get connect() {
    return this.getStringAttribute('connect');
  }
  public set connect(value: string) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
  }

  // default_gateway - computed: true, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // link_type - computed: true, optional: true, required: false
  private _linkType?: string; 
  public get linkType() {
    return this.getStringAttribute('link_type');
  }
  public set linkType(value: string) {
    this._linkType = value;
  }
  public resetLinkType() {
    this._linkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkTypeInput() {
    return this._linkType;
  }

  // service_provider - computed: true, optional: true, required: false
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  public resetServiceProvider() {
    this._serviceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }
}

export class NfvProvisionParametersSiteProfileDeviceServiceProvidersList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersSiteProfileDeviceServiceProviders[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersSiteProfileDeviceServiceProvidersOutputReference {
    return new NfvProvisionParametersSiteProfileDeviceServiceProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersSiteProfileDeviceServicesTopology {
  /**
  * Assign ip address to network (eg: true)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#assign_ip NfvProvision#assign_ip}
  */
  readonly assignIp?: string;
  /**
  * Name of connection (eg: wan-net)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#name NfvProvision#name}
  */
  readonly name?: string;
  /**
  * Type of connection (eg:  wan, lan or internal)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#type NfvProvision#type}
  */
  readonly type?: string;
}

export function nfvProvisionParametersSiteProfileDeviceServicesTopologyToTerraform(struct?: NfvProvisionParametersSiteProfileDeviceServicesTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_ip: cdktf.stringToTerraform(struct!.assignIp),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfvProvisionParametersSiteProfileDeviceServicesTopologyToHclTerraform(struct?: NfvProvisionParametersSiteProfileDeviceServicesTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_ip: {
      value: cdktf.stringToHclTerraform(struct!.assignIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersSiteProfileDeviceServicesTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersSiteProfileDeviceServicesTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIp = this._assignIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersSiteProfileDeviceServicesTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignIp = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignIp = value.assignIp;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // assign_ip - computed: true, optional: true, required: false
  private _assignIp?: string; 
  public get assignIp() {
    return this.getStringAttribute('assign_ip');
  }
  public set assignIp(value: string) {
    this._assignIp = value;
  }
  public resetAssignIp() {
    this._assignIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpInput() {
    return this._assignIp;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class NfvProvisionParametersSiteProfileDeviceServicesTopologyList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersSiteProfileDeviceServicesTopology[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersSiteProfileDeviceServicesTopologyOutputReference {
    return new NfvProvisionParametersSiteProfileDeviceServicesTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersSiteProfileDeviceServices {
  /**
  * Name of image (eg: isrv-universalk9.16.06.02.tar.gz)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#image_name NfvProvision#image_name}
  */
  readonly imageName?: string;
  /**
  * Mode of firewall (eg: routed, transparent)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#mode NfvProvision#mode}
  */
  readonly mode?: string;
  /**
  * Name of the service (eg: isrv) 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#name NfvProvision#name}
  */
  readonly name?: string;
  /**
  * Profile type of service (eg: ISRv-mini)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#profile NfvProvision#profile}
  */
  readonly profile?: string;
  /**
  * Service type (eg: ISRV)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#type NfvProvision#type}
  */
  readonly type?: string;
  /**
  * topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#topology NfvProvision#topology}
  */
  readonly topology?: NfvProvisionParametersSiteProfileDeviceServicesTopology[] | cdktf.IResolvable;
}

export function nfvProvisionParametersSiteProfileDeviceServicesToTerraform(struct?: NfvProvisionParametersSiteProfileDeviceServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_name: cdktf.stringToTerraform(struct!.imageName),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    profile: cdktf.stringToTerraform(struct!.profile),
    type: cdktf.stringToTerraform(struct!.type),
    topology: cdktf.listMapper(nfvProvisionParametersSiteProfileDeviceServicesTopologyToTerraform, true)(struct!.topology),
  }
}


export function nfvProvisionParametersSiteProfileDeviceServicesToHclTerraform(struct?: NfvProvisionParametersSiteProfileDeviceServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
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
    topology: {
      value: cdktf.listMapperHcl(nfvProvisionParametersSiteProfileDeviceServicesTopologyToHclTerraform, true)(struct!.topology),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersSiteProfileDeviceServicesTopologyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersSiteProfileDeviceServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersSiteProfileDeviceServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._topology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersSiteProfileDeviceServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageName = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._profile = undefined;
      this._type = undefined;
      this._topology.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageName = value.imageName;
      this._mode = value.mode;
      this._name = value.name;
      this._profile = value.profile;
      this._type = value.type;
      this._topology.internalValue = value.topology;
    }
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // profile - computed: true, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // topology - computed: false, optional: true, required: false
  private _topology = new NfvProvisionParametersSiteProfileDeviceServicesTopologyList(this, "topology", false);
  public get topology() {
    return this._topology;
  }
  public putTopology(value: NfvProvisionParametersSiteProfileDeviceServicesTopology[] | cdktf.IResolvable) {
    this._topology.internalValue = value;
  }
  public resetTopology() {
    this._topology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology.internalValue;
  }
}

export class NfvProvisionParametersSiteProfileDeviceServicesList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersSiteProfileDeviceServices[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersSiteProfileDeviceServicesOutputReference {
    return new NfvProvisionParametersSiteProfileDeviceServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersSiteProfileDeviceVlan {
  /**
  * Vlan id(eg.4018)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#id NfvProvision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Vlan type(eg. Access or Trunk)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#type NfvProvision#type}
  */
  readonly type?: string;
}

export function nfvProvisionParametersSiteProfileDeviceVlanToTerraform(struct?: NfvProvisionParametersSiteProfileDeviceVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function nfvProvisionParametersSiteProfileDeviceVlanToHclTerraform(struct?: NfvProvisionParametersSiteProfileDeviceVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersSiteProfileDeviceVlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersSiteProfileDeviceVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersSiteProfileDeviceVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class NfvProvisionParametersSiteProfileDeviceVlanList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersSiteProfileDeviceVlan[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersSiteProfileDeviceVlanOutputReference {
    return new NfvProvisionParametersSiteProfileDeviceVlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersSiteProfileDevice {
  /**
  * Name of the device used in creating nfv profile(eg: ENCS5400)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#device_type NfvProvision#device_type}
  */
  readonly deviceType?: string;
  /**
  * Direct internet access value should be boolean (eg: false)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#dia NfvProvision#dia}
  */
  readonly dia?: string;
  /**
  * Device Tag name(eg: dev1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#tag_name NfvProvision#tag_name}
  */
  readonly tagName?: string;
  /**
  * custom_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#custom_networks NfvProvision#custom_networks}
  */
  readonly customNetworks?: NfvProvisionParametersSiteProfileDeviceCustomNetworks[] | cdktf.IResolvable;
  /**
  * custom_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#custom_services NfvProvision#custom_services}
  */
  readonly customServices?: NfvProvisionParametersSiteProfileDeviceCustomServices[] | cdktf.IResolvable;
  /**
  * custom_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#custom_template NfvProvision#custom_template}
  */
  readonly customTemplate?: NfvProvisionParametersSiteProfileDeviceCustomTemplate[] | cdktf.IResolvable;
  /**
  * service_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#service_providers NfvProvision#service_providers}
  */
  readonly serviceProviders?: NfvProvisionParametersSiteProfileDeviceServiceProviders[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#services NfvProvision#services}
  */
  readonly services?: NfvProvisionParametersSiteProfileDeviceServices[] | cdktf.IResolvable;
  /**
  * vlan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#vlan NfvProvision#vlan}
  */
  readonly vlan?: NfvProvisionParametersSiteProfileDeviceVlan[] | cdktf.IResolvable;
}

export function nfvProvisionParametersSiteProfileDeviceToTerraform(struct?: NfvProvisionParametersSiteProfileDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    dia: cdktf.stringToTerraform(struct!.dia),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
    custom_networks: cdktf.listMapper(nfvProvisionParametersSiteProfileDeviceCustomNetworksToTerraform, true)(struct!.customNetworks),
    custom_services: cdktf.listMapper(nfvProvisionParametersSiteProfileDeviceCustomServicesToTerraform, true)(struct!.customServices),
    custom_template: cdktf.listMapper(nfvProvisionParametersSiteProfileDeviceCustomTemplateToTerraform, true)(struct!.customTemplate),
    service_providers: cdktf.listMapper(nfvProvisionParametersSiteProfileDeviceServiceProvidersToTerraform, true)(struct!.serviceProviders),
    services: cdktf.listMapper(nfvProvisionParametersSiteProfileDeviceServicesToTerraform, true)(struct!.services),
    vlan: cdktf.listMapper(nfvProvisionParametersSiteProfileDeviceVlanToTerraform, true)(struct!.vlan),
  }
}


export function nfvProvisionParametersSiteProfileDeviceToHclTerraform(struct?: NfvProvisionParametersSiteProfileDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dia: {
      value: cdktf.stringToHclTerraform(struct!.dia),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_networks: {
      value: cdktf.listMapperHcl(nfvProvisionParametersSiteProfileDeviceCustomNetworksToHclTerraform, true)(struct!.customNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersSiteProfileDeviceCustomNetworksList",
    },
    custom_services: {
      value: cdktf.listMapperHcl(nfvProvisionParametersSiteProfileDeviceCustomServicesToHclTerraform, true)(struct!.customServices),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersSiteProfileDeviceCustomServicesList",
    },
    custom_template: {
      value: cdktf.listMapperHcl(nfvProvisionParametersSiteProfileDeviceCustomTemplateToHclTerraform, true)(struct!.customTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersSiteProfileDeviceCustomTemplateList",
    },
    service_providers: {
      value: cdktf.listMapperHcl(nfvProvisionParametersSiteProfileDeviceServiceProvidersToHclTerraform, true)(struct!.serviceProviders),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersSiteProfileDeviceServiceProvidersList",
    },
    services: {
      value: cdktf.listMapperHcl(nfvProvisionParametersSiteProfileDeviceServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersSiteProfileDeviceServicesList",
    },
    vlan: {
      value: cdktf.listMapperHcl(nfvProvisionParametersSiteProfileDeviceVlanToHclTerraform, true)(struct!.vlan),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersSiteProfileDeviceVlanList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersSiteProfileDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersSiteProfileDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._dia !== undefined) {
      hasAnyValues = true;
      internalValueResult.dia = this._dia;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    if (this._customNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNetworks = this._customNetworks?.internalValue;
    }
    if (this._customServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customServices = this._customServices?.internalValue;
    }
    if (this._customTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTemplate = this._customTemplate?.internalValue;
    }
    if (this._serviceProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviders = this._serviceProviders?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    if (this._vlan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersSiteProfileDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceType = undefined;
      this._dia = undefined;
      this._tagName = undefined;
      this._customNetworks.internalValue = undefined;
      this._customServices.internalValue = undefined;
      this._customTemplate.internalValue = undefined;
      this._serviceProviders.internalValue = undefined;
      this._services.internalValue = undefined;
      this._vlan.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceType = value.deviceType;
      this._dia = value.dia;
      this._tagName = value.tagName;
      this._customNetworks.internalValue = value.customNetworks;
      this._customServices.internalValue = value.customServices;
      this._customTemplate.internalValue = value.customTemplate;
      this._serviceProviders.internalValue = value.serviceProviders;
      this._services.internalValue = value.services;
      this._vlan.internalValue = value.vlan;
    }
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

  // dia - computed: true, optional: true, required: false
  private _dia?: string; 
  public get dia() {
    return this.getStringAttribute('dia');
  }
  public set dia(value: string) {
    this._dia = value;
  }
  public resetDia() {
    this._dia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diaInput() {
    return this._dia;
  }

  // tag_name - computed: true, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // custom_networks - computed: false, optional: true, required: false
  private _customNetworks = new NfvProvisionParametersSiteProfileDeviceCustomNetworksList(this, "custom_networks", false);
  public get customNetworks() {
    return this._customNetworks;
  }
  public putCustomNetworks(value: NfvProvisionParametersSiteProfileDeviceCustomNetworks[] | cdktf.IResolvable) {
    this._customNetworks.internalValue = value;
  }
  public resetCustomNetworks() {
    this._customNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNetworksInput() {
    return this._customNetworks.internalValue;
  }

  // custom_services - computed: false, optional: true, required: false
  private _customServices = new NfvProvisionParametersSiteProfileDeviceCustomServicesList(this, "custom_services", false);
  public get customServices() {
    return this._customServices;
  }
  public putCustomServices(value: NfvProvisionParametersSiteProfileDeviceCustomServices[] | cdktf.IResolvable) {
    this._customServices.internalValue = value;
  }
  public resetCustomServices() {
    this._customServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customServicesInput() {
    return this._customServices.internalValue;
  }

  // custom_template - computed: false, optional: true, required: false
  private _customTemplate = new NfvProvisionParametersSiteProfileDeviceCustomTemplateList(this, "custom_template", false);
  public get customTemplate() {
    return this._customTemplate;
  }
  public putCustomTemplate(value: NfvProvisionParametersSiteProfileDeviceCustomTemplate[] | cdktf.IResolvable) {
    this._customTemplate.internalValue = value;
  }
  public resetCustomTemplate() {
    this._customTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTemplateInput() {
    return this._customTemplate.internalValue;
  }

  // service_providers - computed: false, optional: true, required: false
  private _serviceProviders = new NfvProvisionParametersSiteProfileDeviceServiceProvidersList(this, "service_providers", false);
  public get serviceProviders() {
    return this._serviceProviders;
  }
  public putServiceProviders(value: NfvProvisionParametersSiteProfileDeviceServiceProviders[] | cdktf.IResolvable) {
    this._serviceProviders.internalValue = value;
  }
  public resetServiceProviders() {
    this._serviceProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProvidersInput() {
    return this._serviceProviders.internalValue;
  }

  // services - computed: false, optional: true, required: false
  private _services = new NfvProvisionParametersSiteProfileDeviceServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: NfvProvisionParametersSiteProfileDeviceServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan = new NfvProvisionParametersSiteProfileDeviceVlanList(this, "vlan", false);
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: NfvProvisionParametersSiteProfileDeviceVlan[] | cdktf.IResolvable) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }
}

export class NfvProvisionParametersSiteProfileDeviceList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersSiteProfileDevice[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersSiteProfileDeviceOutputReference {
    return new NfvProvisionParametersSiteProfileDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParametersSiteProfile {
  /**
  * Name of the profile to create site profile profile( eg: profile-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#site_profile_name NfvProvision#site_profile_name}
  */
  readonly siteProfileName?: string;
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#device NfvProvision#device}
  */
  readonly device?: NfvProvisionParametersSiteProfileDevice[] | cdktf.IResolvable;
}

export function nfvProvisionParametersSiteProfileToTerraform(struct?: NfvProvisionParametersSiteProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_profile_name: cdktf.stringToTerraform(struct!.siteProfileName),
    device: cdktf.listMapper(nfvProvisionParametersSiteProfileDeviceToTerraform, true)(struct!.device),
  }
}


export function nfvProvisionParametersSiteProfileToHclTerraform(struct?: NfvProvisionParametersSiteProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_profile_name: {
      value: cdktf.stringToHclTerraform(struct!.siteProfileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device: {
      value: cdktf.listMapperHcl(nfvProvisionParametersSiteProfileDeviceToHclTerraform, true)(struct!.device),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersSiteProfileDeviceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersSiteProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NfvProvisionParametersSiteProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteProfileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteProfileName = this._siteProfileName;
    }
    if (this._device?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParametersSiteProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._siteProfileName = undefined;
      this._device.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._siteProfileName = value.siteProfileName;
      this._device.internalValue = value.device;
    }
  }

  // site_profile_name - computed: true, optional: true, required: false
  private _siteProfileName?: string; 
  public get siteProfileName() {
    return this.getStringAttribute('site_profile_name');
  }
  public set siteProfileName(value: string) {
    this._siteProfileName = value;
  }
  public resetSiteProfileName() {
    this._siteProfileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteProfileNameInput() {
    return this._siteProfileName;
  }

  // device - computed: false, optional: true, required: false
  private _device = new NfvProvisionParametersSiteProfileDeviceList(this, "device", false);
  public get device() {
    return this._device;
  }
  public putDevice(value: NfvProvisionParametersSiteProfileDevice[] | cdktf.IResolvable) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }
}

export class NfvProvisionParametersSiteProfileList extends cdktf.ComplexList {
  public internalValue? : NfvProvisionParametersSiteProfile[] | cdktf.IResolvable

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
  public get(index: number): NfvProvisionParametersSiteProfileOutputReference {
    return new NfvProvisionParametersSiteProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NfvProvisionParameters {
  /**
  * Name of the profile to create site profile profile( eg: profile-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#persistbapioutput NfvProvision#persistbapioutput}
  */
  readonly persistbapioutput?: string;
  /**
  * Name of the profile to create site profile profile( eg: profile-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#runsync NfvProvision#runsync}
  */
  readonly runsync?: string;
  /**
  * Name of the profile to create site profile profile( eg: profile-1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#timeout NfvProvision#timeout}
  */
  readonly timeout?: string;
  /**
  * provisioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#provisioning NfvProvision#provisioning}
  */
  readonly provisioning?: NfvProvisionParametersProvisioning[] | cdktf.IResolvable;
  /**
  * site_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#site_profile NfvProvision#site_profile}
  */
  readonly siteProfile?: NfvProvisionParametersSiteProfile[] | cdktf.IResolvable;
}

export function nfvProvisionParametersToTerraform(struct?: NfvProvisionParametersOutputReference | NfvProvisionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistbapioutput: cdktf.stringToTerraform(struct!.persistbapioutput),
    runsync: cdktf.stringToTerraform(struct!.runsync),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    provisioning: cdktf.listMapper(nfvProvisionParametersProvisioningToTerraform, true)(struct!.provisioning),
    site_profile: cdktf.listMapper(nfvProvisionParametersSiteProfileToTerraform, true)(struct!.siteProfile),
  }
}


export function nfvProvisionParametersToHclTerraform(struct?: NfvProvisionParametersOutputReference | NfvProvisionParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persistbapioutput: {
      value: cdktf.stringToHclTerraform(struct!.persistbapioutput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runsync: {
      value: cdktf.stringToHclTerraform(struct!.runsync),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provisioning: {
      value: cdktf.listMapperHcl(nfvProvisionParametersProvisioningToHclTerraform, true)(struct!.provisioning),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersProvisioningList",
    },
    site_profile: {
      value: cdktf.listMapperHcl(nfvProvisionParametersSiteProfileToHclTerraform, true)(struct!.siteProfile),
      isBlock: true,
      type: "list",
      storageClassType: "NfvProvisionParametersSiteProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NfvProvisionParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NfvProvisionParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistbapioutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistbapioutput = this._persistbapioutput;
    }
    if (this._runsync !== undefined) {
      hasAnyValues = true;
      internalValueResult.runsync = this._runsync;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._provisioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioning = this._provisioning?.internalValue;
    }
    if (this._siteProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteProfile = this._siteProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NfvProvisionParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persistbapioutput = undefined;
      this._runsync = undefined;
      this._timeout = undefined;
      this._provisioning.internalValue = undefined;
      this._siteProfile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persistbapioutput = value.persistbapioutput;
      this._runsync = value.runsync;
      this._timeout = value.timeout;
      this._provisioning.internalValue = value.provisioning;
      this._siteProfile.internalValue = value.siteProfile;
    }
  }

  // persistbapioutput - computed: false, optional: true, required: false
  private _persistbapioutput?: string; 
  public get persistbapioutput() {
    return this.getStringAttribute('persistbapioutput');
  }
  public set persistbapioutput(value: string) {
    this._persistbapioutput = value;
  }
  public resetPersistbapioutput() {
    this._persistbapioutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistbapioutputInput() {
    return this._persistbapioutput;
  }

  // runsync - computed: false, optional: true, required: false
  private _runsync?: string; 
  public get runsync() {
    return this.getStringAttribute('runsync');
  }
  public set runsync(value: string) {
    this._runsync = value;
  }
  public resetRunsync() {
    this._runsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runsyncInput() {
    return this._runsync;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // provisioning - computed: false, optional: true, required: false
  private _provisioning = new NfvProvisionParametersProvisioningList(this, "provisioning", false);
  public get provisioning() {
    return this._provisioning;
  }
  public putProvisioning(value: NfvProvisionParametersProvisioning[] | cdktf.IResolvable) {
    this._provisioning.internalValue = value;
  }
  public resetProvisioning() {
    this._provisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningInput() {
    return this._provisioning.internalValue;
  }

  // site_profile - computed: false, optional: true, required: false
  private _siteProfile = new NfvProvisionParametersSiteProfileList(this, "site_profile", false);
  public get siteProfile() {
    return this._siteProfile;
  }
  public putSiteProfile(value: NfvProvisionParametersSiteProfile[] | cdktf.IResolvable) {
    this._siteProfile.internalValue = value;
  }
  public resetSiteProfile() {
    this._siteProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteProfileInput() {
    return this._siteProfile.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision dnacenter_nfv_provision}
*/
export class NfvProvision extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_nfv_provision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NfvProvision resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NfvProvision to import
  * @param importFromId The id of the existing NfvProvision that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NfvProvision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_nfv_provision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/nfv_provision dnacenter_nfv_provision} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NfvProvisionConfig
  */
  public constructor(scope: Construct, id: string, config: NfvProvisionConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_nfv_provision',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
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

  // item - computed: true, optional: false, required: false
  private _item = new NfvProvisionItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new NfvProvisionParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: NfvProvisionParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: nfvProvisionParametersToTerraform(this._parameters.internalValue),
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
      parameters: {
        value: nfvProvisionParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NfvProvisionParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
