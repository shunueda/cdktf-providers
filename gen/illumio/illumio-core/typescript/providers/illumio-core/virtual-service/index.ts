// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the virtual service. Allowed values are "host_only" and "internal_bridge_network"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#apply_to VirtualService#apply_to}
  */
  readonly applyTo: string;
  /**
  * The long description of the virtual service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#description VirtualService#description}
  */
  readonly description?: string;
  /**
  * A unique identifier within the external data source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#external_data_reference VirtualService#external_data_reference}
  */
  readonly externalDataReference?: string;
  /**
  * The data source from which a resource originates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#external_data_set VirtualService#external_data_set}
  */
  readonly externalDataSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#id VirtualService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Array of IPs or CIDRs as IP overrides
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#ip_overrides VirtualService#ip_overrides}
  */
  readonly ipOverrides?: string[];
  /**
  * Name of the virtual service. The name should be between 1 to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#name VirtualService#name}
  */
  readonly name: string;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#labels VirtualService#labels}
  */
  readonly labels?: VirtualServiceLabels[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#service VirtualService#service}
  */
  readonly service?: VirtualServiceService;
  /**
  * service_addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#service_addresses VirtualService#service_addresses}
  */
  readonly serviceAddresses?: VirtualServiceServiceAddresses[] | cdktf.IResolvable;
  /**
  * service_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#service_ports VirtualService#service_ports}
  */
  readonly servicePorts?: VirtualServiceServicePorts[] | cdktf.IResolvable;
}
export interface VirtualServiceLabels {
  /**
  * URI of label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#href VirtualService#href}
  */
  readonly href: string;
}

export function virtualServiceLabelsToTerraform(struct?: VirtualServiceLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function virtualServiceLabelsToHclTerraform(struct?: VirtualServiceLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualServiceLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualServiceLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServiceLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._href = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class VirtualServiceLabelsList extends cdktf.ComplexList {
  public internalValue? : VirtualServiceLabels[] | cdktf.IResolvable

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
  public get(index: number): VirtualServiceLabelsOutputReference {
    return new VirtualServiceLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualServiceService {
  /**
  * URI of associated service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#href VirtualService#href}
  */
  readonly href: string;
}

export function virtualServiceServiceToTerraform(struct?: VirtualServiceServiceOutputReference | VirtualServiceService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function virtualServiceServiceToHclTerraform(struct?: VirtualServiceServiceOutputReference | VirtualServiceService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualServiceServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualServiceService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServiceService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface VirtualServiceServiceAddressesNetwork {
  /**
  * URI of associated service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#href VirtualService#href}
  */
  readonly href: string;
}

export function virtualServiceServiceAddressesNetworkToTerraform(struct?: VirtualServiceServiceAddressesNetworkOutputReference | VirtualServiceServiceAddressesNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    href: cdktf.stringToTerraform(struct!.href),
  }
}


export function virtualServiceServiceAddressesNetworkToHclTerraform(struct?: VirtualServiceServiceAddressesNetworkOutputReference | VirtualServiceServiceAddressesNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    href: {
      value: cdktf.stringToHclTerraform(struct!.href),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualServiceServiceAddressesNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualServiceServiceAddressesNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._href !== undefined) {
      hasAnyValues = true;
      internalValueResult.href = this._href;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServiceServiceAddressesNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._href = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._href = value.href;
    }
  }

  // href - computed: false, optional: false, required: true
  private _href?: string; 
  public get href() {
    return this.getStringAttribute('href');
  }
  public set href(value: string) {
    this._href = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hrefInput() {
    return this._href;
  }
}
export interface VirtualServiceServiceAddresses {
  /**
  * Description for given fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#description VirtualService#description}
  */
  readonly description?: string;
  /**
  * FQDN to assign to the virtual service.  Allowed formats: hostname, IP, or URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#fqdn VirtualService#fqdn}
  */
  readonly fqdn?: string;
  /**
  * IP address to assign to the virtual service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#ip VirtualService#ip}
  */
  readonly ip?: string;
  /**
  * Port number of the service. Allowed range is -1 - 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#port VirtualService#port}
  */
  readonly port?: string;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#network VirtualService#network}
  */
  readonly network?: VirtualServiceServiceAddressesNetwork;
}

export function virtualServiceServiceAddressesToTerraform(struct?: VirtualServiceServiceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.stringToTerraform(struct!.port),
    network: virtualServiceServiceAddressesNetworkToTerraform(struct!.network),
  }
}


export function virtualServiceServiceAddressesToHclTerraform(struct?: VirtualServiceServiceAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: virtualServiceServiceAddressesNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "set",
      storageClassType: "VirtualServiceServiceAddressesNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualServiceServiceAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualServiceServiceAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServiceServiceAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._fqdn = undefined;
      this._ip = undefined;
      this._port = undefined;
      this._network.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._fqdn = value.fqdn;
      this._ip = value.ip;
      this._port = value.port;
      this._network.internalValue = value.network;
    }
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

  // fqdn - computed: false, optional: true, required: false
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  public resetFqdn() {
    this._fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // ip - computed: false, optional: true, required: false
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

  // port - computed: false, optional: true, required: false
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

  // network - computed: false, optional: true, required: false
  private _network = new VirtualServiceServiceAddressesNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: VirtualServiceServiceAddressesNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}

export class VirtualServiceServiceAddressesList extends cdktf.ComplexList {
  public internalValue? : VirtualServiceServiceAddresses[] | cdktf.IResolvable

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
  public get(index: number): VirtualServiceServiceAddressesOutputReference {
    return new VirtualServiceServiceAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualServiceServicePorts {
  /**
  * Port Number. Also, the starting port when specifying a range. Allowed range is -1 - 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#port VirtualService#port}
  */
  readonly port?: string;
  /**
  * Transport protocol. Allowed values are 6 (TCP) and 17 (UDP)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#proto VirtualService#proto}
  */
  readonly proto: string;
  /**
  * High end of port range inclusive if specifying a range. Allowed range is 0 - 65535
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#to_port VirtualService#to_port}
  */
  readonly toPort?: string;
}

export function virtualServiceServicePortsToTerraform(struct?: VirtualServiceServicePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.stringToTerraform(struct!.port),
    proto: cdktf.stringToTerraform(struct!.proto),
    to_port: cdktf.stringToTerraform(struct!.toPort),
  }
}


export function virtualServiceServicePortsToHclTerraform(struct?: VirtualServiceServicePorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_port: {
      value: cdktf.stringToHclTerraform(struct!.toPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualServiceServicePortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualServiceServicePorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._toPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.toPort = this._toPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualServiceServicePorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._proto = undefined;
      this._toPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._proto = value.proto;
      this._toPort = value.toPort;
    }
  }

  // port - computed: false, optional: true, required: false
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

  // proto - computed: false, optional: false, required: true
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // to_port - computed: false, optional: true, required: false
  private _toPort?: string; 
  public get toPort() {
    return this.getStringAttribute('to_port');
  }
  public set toPort(value: string) {
    this._toPort = value;
  }
  public resetToPort() {
    this._toPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toPortInput() {
    return this._toPort;
  }
}

export class VirtualServiceServicePortsList extends cdktf.ComplexList {
  public internalValue? : VirtualServiceServicePorts[] | cdktf.IResolvable

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
  public get(index: number): VirtualServiceServicePortsOutputReference {
    return new VirtualServiceServicePortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service illumio-core_virtual_service}
*/
export class VirtualService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core_virtual_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualService to import
  * @param importFromId The id of the existing VirtualService that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core_virtual_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs/resources/virtual_service illumio-core_virtual_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualServiceConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core_virtual_service',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applyTo = config.applyTo;
    this._description = config.description;
    this._externalDataReference = config.externalDataReference;
    this._externalDataSet = config.externalDataSet;
    this._id = config.id;
    this._ipOverrides = config.ipOverrides;
    this._name = config.name;
    this._labels.internalValue = config.labels;
    this._service.internalValue = config.service;
    this._serviceAddresses.internalValue = config.serviceAddresses;
    this._servicePorts.internalValue = config.servicePorts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_to - computed: false, optional: false, required: true
  private _applyTo?: string; 
  public get applyTo() {
    return this.getStringAttribute('apply_to');
  }
  public set applyTo(value: string) {
    this._applyTo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applyToInput() {
    return this._applyTo;
  }

  // caps - computed: true, optional: false, required: false
  public get caps() {
    return this.getListAttribute('caps');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  private _createdBy = new cdktf.StringMap(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }

  // deleted_at - computed: true, optional: false, required: false
  public get deletedAt() {
    return this.getStringAttribute('deleted_at');
  }

  // deleted_by - computed: true, optional: false, required: false
  private _deletedBy = new cdktf.StringMap(this, "deleted_by");
  public get deletedBy() {
    return this._deletedBy;
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

  // external_data_reference - computed: false, optional: true, required: false
  private _externalDataReference?: string; 
  public get externalDataReference() {
    return this.getStringAttribute('external_data_reference');
  }
  public set externalDataReference(value: string) {
    this._externalDataReference = value;
  }
  public resetExternalDataReference() {
    this._externalDataReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataReferenceInput() {
    return this._externalDataReference;
  }

  // external_data_set - computed: false, optional: true, required: false
  private _externalDataSet?: string; 
  public get externalDataSet() {
    return this.getStringAttribute('external_data_set');
  }
  public set externalDataSet(value: string) {
    this._externalDataSet = value;
  }
  public resetExternalDataSet() {
    this._externalDataSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataSetInput() {
    return this._externalDataSet;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // ip_overrides - computed: false, optional: true, required: false
  private _ipOverrides?: string[]; 
  public get ipOverrides() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_overrides'));
  }
  public set ipOverrides(value: string[]) {
    this._ipOverrides = value;
  }
  public resetIpOverrides() {
    this._ipOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOverridesInput() {
    return this._ipOverrides;
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

  // pce_fqdn - computed: true, optional: false, required: false
  public get pceFqdn() {
    return this.getStringAttribute('pce_fqdn');
  }

  // update_type - computed: true, optional: false, required: false
  public get updateType() {
    return this.getStringAttribute('update_type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  private _updatedBy = new cdktf.StringMap(this, "updated_by");
  public get updatedBy() {
    return this._updatedBy;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new VirtualServiceLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: VirtualServiceLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new VirtualServiceServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: VirtualServiceService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // service_addresses - computed: false, optional: true, required: false
  private _serviceAddresses = new VirtualServiceServiceAddressesList(this, "service_addresses", true);
  public get serviceAddresses() {
    return this._serviceAddresses;
  }
  public putServiceAddresses(value: VirtualServiceServiceAddresses[] | cdktf.IResolvable) {
    this._serviceAddresses.internalValue = value;
  }
  public resetServiceAddresses() {
    this._serviceAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAddressesInput() {
    return this._serviceAddresses.internalValue;
  }

  // service_ports - computed: false, optional: true, required: false
  private _servicePorts = new VirtualServiceServicePortsList(this, "service_ports", true);
  public get servicePorts() {
    return this._servicePorts;
  }
  public putServicePorts(value: VirtualServiceServicePorts[] | cdktf.IResolvable) {
    this._servicePorts.internalValue = value;
  }
  public resetServicePorts() {
    this._servicePorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortsInput() {
    return this._servicePorts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apply_to: cdktf.stringToTerraform(this._applyTo),
      description: cdktf.stringToTerraform(this._description),
      external_data_reference: cdktf.stringToTerraform(this._externalDataReference),
      external_data_set: cdktf.stringToTerraform(this._externalDataSet),
      id: cdktf.stringToTerraform(this._id),
      ip_overrides: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipOverrides),
      name: cdktf.stringToTerraform(this._name),
      labels: cdktf.listMapper(virtualServiceLabelsToTerraform, true)(this._labels.internalValue),
      service: virtualServiceServiceToTerraform(this._service.internalValue),
      service_addresses: cdktf.listMapper(virtualServiceServiceAddressesToTerraform, true)(this._serviceAddresses.internalValue),
      service_ports: cdktf.listMapper(virtualServiceServicePortsToTerraform, true)(this._servicePorts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apply_to: {
        value: cdktf.stringToHclTerraform(this._applyTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_reference: {
        value: cdktf.stringToHclTerraform(this._externalDataReference),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_data_set: {
        value: cdktf.stringToHclTerraform(this._externalDataSet),
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
      ip_overrides: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipOverrides),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(virtualServiceLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualServiceLabelsList",
      },
      service: {
        value: virtualServiceServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualServiceServiceList",
      },
      service_addresses: {
        value: cdktf.listMapperHcl(virtualServiceServiceAddressesToHclTerraform, true)(this._serviceAddresses.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualServiceServiceAddressesList",
      },
      service_ports: {
        value: cdktf.listMapperHcl(virtualServiceServicePortsToHclTerraform, true)(this._servicePorts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VirtualServiceServicePortsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
