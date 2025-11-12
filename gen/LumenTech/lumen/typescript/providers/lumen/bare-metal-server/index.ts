// https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BareMetalServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A boolean (true/false) value indicating whether or not to assign an IPv6 address 
  * for this server if using a dual stack network. Defaults to false if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#assign_ipv6_address BareMetalServer#assign_ipv6_address}
  */
  readonly assignIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#configuration_name BareMetalServer#configuration_name}
  */
  readonly configurationName: string;
  /**
  * User parameter to enable hyperthreading on the server. Defaults to true if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#enable_hyperthreading BareMetalServer#enable_hyperthreading}
  */
  readonly enableHyperthreading?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#location_id BareMetalServer#location_id}
  */
  readonly locationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#name BareMetalServer#name}
  */
  readonly name: string;
  /**
  * The name of the new network to create, this is only used on initial creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#network_name BareMetalServer#network_name}
  */
  readonly networkName?: string;
  /**
  * The id of the network size being used for the new network, this is only used on initial creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#network_size_id BareMetalServer#network_size_id}
  */
  readonly networkSizeId?: string;
  /**
  * The type of network being provisioned for this server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#network_type BareMetalServer#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#os_image_name BareMetalServer#os_image_name}
  */
  readonly osImageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#password BareMetalServer#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#ssh_public_key BareMetalServer#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#username BareMetalServer#username}
  */
  readonly username: string;
  /**
  * For private networks, this is an existing VRF to be used in creating the new network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#vrf BareMetalServer#vrf}
  */
  readonly vrf?: string;
  /**
  * For private networks, create a new VRF with this description and use it in creating the new network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#vrf_description BareMetalServer#vrf_description}
  */
  readonly vrfDescription?: string;
  /**
  * attach_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#attach_networks BareMetalServer#attach_networks}
  */
  readonly attachNetworks?: BareMetalServerAttachNetworks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#timeouts BareMetalServer#timeouts}
  */
  readonly timeouts?: BareMetalServerTimeouts;
}
export interface BareMetalServerNetworks {
}

export function bareMetalServerNetworksToTerraform(struct?: BareMetalServerNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bareMetalServerNetworksToHclTerraform(struct?: BareMetalServerNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BareMetalServerNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BareMetalServerNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BareMetalServerNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assign_ipv6_address - computed: true, optional: false, required: false
  public get assignIpv6Address() {
    return this.getBooleanAttribute('assign_ipv6_address');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // vlan - computed: true, optional: false, required: false
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
}

export class BareMetalServerNetworksList extends cdktf.ComplexList {

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
  public get(index: number): BareMetalServerNetworksOutputReference {
    return new BareMetalServerNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BareMetalServerPrices {
}

export function bareMetalServerPricesToTerraform(struct?: BareMetalServerPrices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bareMetalServerPricesToHclTerraform(struct?: BareMetalServerPrices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BareMetalServerPricesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BareMetalServerPrices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BareMetalServerPrices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getStringAttribute('price');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class BareMetalServerPricesList extends cdktf.ComplexList {

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
  public get(index: number): BareMetalServerPricesOutputReference {
    return new BareMetalServerPricesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BareMetalServerAttachNetworks {
  /**
  * A boolean (true/false) value indicating whether or not to assign an IPv6 address 
  * for this server if using a dual stack network. Defaults to false if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#assign_ipv6_address BareMetalServer#assign_ipv6_address}
  */
  readonly assignIpv6Address?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#network_id BareMetalServer#network_id}
  */
  readonly networkId: string;
}

export function bareMetalServerAttachNetworksToTerraform(struct?: BareMetalServerAttachNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_ipv6_address: cdktf.booleanToTerraform(struct!.assignIpv6Address),
    network_id: cdktf.stringToTerraform(struct!.networkId),
  }
}


export function bareMetalServerAttachNetworksToHclTerraform(struct?: BareMetalServerAttachNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_ipv6_address: {
      value: cdktf.booleanToHclTerraform(struct!.assignIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BareMetalServerAttachNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BareMetalServerAttachNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIpv6Address = this._assignIpv6Address;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BareMetalServerAttachNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignIpv6Address = undefined;
      this._networkId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignIpv6Address = value.assignIpv6Address;
      this._networkId = value.networkId;
    }
  }

  // assign_ipv6_address - computed: false, optional: true, required: false
  private _assignIpv6Address?: boolean | cdktf.IResolvable; 
  public get assignIpv6Address() {
    return this.getBooleanAttribute('assign_ipv6_address');
  }
  public set assignIpv6Address(value: boolean | cdktf.IResolvable) {
    this._assignIpv6Address = value;
  }
  public resetAssignIpv6Address() {
    this._assignIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpv6AddressInput() {
    return this._assignIpv6Address;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }
}

export class BareMetalServerAttachNetworksList extends cdktf.ComplexList {
  public internalValue? : BareMetalServerAttachNetworks[] | cdktf.IResolvable

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
  public get(index: number): BareMetalServerAttachNetworksOutputReference {
    return new BareMetalServerAttachNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BareMetalServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#create BareMetalServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#delete BareMetalServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#read BareMetalServer#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#update BareMetalServer#update}
  */
  readonly update?: string;
}

export function bareMetalServerTimeoutsToTerraform(struct?: BareMetalServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function bareMetalServerTimeoutsToHclTerraform(struct?: BareMetalServerTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class BareMetalServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BareMetalServerTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BareMetalServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server lumen_bare_metal_server}
*/
export class BareMetalServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lumen_bare_metal_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BareMetalServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BareMetalServer to import
  * @param importFromId The id of the existing BareMetalServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BareMetalServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lumen_bare_metal_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lumentech/lumen/3.0.0/docs/resources/bare_metal_server lumen_bare_metal_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BareMetalServerConfig
  */
  public constructor(scope: Construct, id: string, config: BareMetalServerConfig) {
    super(scope, id, {
      terraformResourceType: 'lumen_bare_metal_server',
      terraformGeneratorMetadata: {
        providerName: 'lumen',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignIpv6Address = config.assignIpv6Address;
    this._configurationName = config.configurationName;
    this._enableHyperthreading = config.enableHyperthreading;
    this._locationId = config.locationId;
    this._name = config.name;
    this._networkName = config.networkName;
    this._networkSizeId = config.networkSizeId;
    this._networkType = config.networkType;
    this._osImageName = config.osImageName;
    this._password = config.password;
    this._sshPublicKey = config.sshPublicKey;
    this._username = config.username;
    this._vrf = config.vrf;
    this._vrfDescription = config.vrfDescription;
    this._attachNetworks.internalValue = config.attachNetworks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // assign_ipv6_address - computed: false, optional: true, required: false
  private _assignIpv6Address?: boolean | cdktf.IResolvable; 
  public get assignIpv6Address() {
    return this.getBooleanAttribute('assign_ipv6_address');
  }
  public set assignIpv6Address(value: boolean | cdktf.IResolvable) {
    this._assignIpv6Address = value;
  }
  public resetAssignIpv6Address() {
    this._assignIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIpv6AddressInput() {
    return this._assignIpv6Address;
  }

  // boot_disk - computed: true, optional: false, required: false
  public get bootDisk() {
    return this.getStringAttribute('boot_disk');
  }

  // configuration_cores - computed: true, optional: false, required: false
  public get configurationCores() {
    return this.getNumberAttribute('configuration_cores');
  }

  // configuration_disks - computed: true, optional: false, required: false
  public get configurationDisks() {
    return this.getNumberAttribute('configuration_disks');
  }

  // configuration_memory - computed: true, optional: false, required: false
  public get configurationMemory() {
    return this.getStringAttribute('configuration_memory');
  }

  // configuration_name - computed: false, optional: false, required: true
  private _configurationName?: string; 
  public get configurationName() {
    return this.getStringAttribute('configuration_name');
  }
  public set configurationName(value: string) {
    this._configurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationNameInput() {
    return this._configurationName;
  }

  // configuration_nics - computed: true, optional: false, required: false
  public get configurationNics() {
    return this.getNumberAttribute('configuration_nics');
  }

  // configuration_processors - computed: true, optional: false, required: false
  public get configurationProcessors() {
    return this.getNumberAttribute('configuration_processors');
  }

  // configuration_storage - computed: true, optional: false, required: false
  public get configurationStorage() {
    return this.getStringAttribute('configuration_storage');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enable_hyperthreading - computed: false, optional: true, required: false
  private _enableHyperthreading?: boolean | cdktf.IResolvable; 
  public get enableHyperthreading() {
    return this.getBooleanAttribute('enable_hyperthreading');
  }
  public set enableHyperthreading(value: boolean | cdktf.IResolvable) {
    this._enableHyperthreading = value;
  }
  public resetEnableHyperthreading() {
    this._enableHyperthreading = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHyperthreadingInput() {
    return this._enableHyperthreading;
  }

  // hyperthreading - computed: true, optional: false, required: false
  public get hyperthreading() {
    return this.getBooleanAttribute('hyperthreading');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // machine_id - computed: true, optional: false, required: false
  public get machineId() {
    return this.getStringAttribute('machine_id');
  }

  // machine_name - computed: true, optional: false, required: false
  public get machineName() {
    return this.getStringAttribute('machine_name');
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

  // network_name - computed: false, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // network_size_id - computed: false, optional: true, required: false
  private _networkSizeId?: string; 
  public get networkSizeId() {
    return this.getStringAttribute('network_size_id');
  }
  public set networkSizeId(value: string) {
    this._networkSizeId = value;
  }
  public resetNetworkSizeId() {
    this._networkSizeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSizeIdInput() {
    return this._networkSizeId;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // networks - computed: true, optional: false, required: false
  private _networks = new BareMetalServerNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }

  // os_image_name - computed: false, optional: false, required: true
  private _osImageName?: string; 
  public get osImageName() {
    return this.getStringAttribute('os_image_name');
  }
  public set osImageName(value: string) {
    this._osImageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osImageNameInput() {
    return this._osImageName;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // prices - computed: true, optional: false, required: false
  private _prices = new BareMetalServerPricesList(this, "prices", false);
  public get prices() {
    return this._prices;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string; 
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // vrf_description - computed: false, optional: true, required: false
  private _vrfDescription?: string; 
  public get vrfDescription() {
    return this.getStringAttribute('vrf_description');
  }
  public set vrfDescription(value: string) {
    this._vrfDescription = value;
  }
  public resetVrfDescription() {
    this._vrfDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfDescriptionInput() {
    return this._vrfDescription;
  }

  // attach_networks - computed: false, optional: true, required: false
  private _attachNetworks = new BareMetalServerAttachNetworksList(this, "attach_networks", false);
  public get attachNetworks() {
    return this._attachNetworks;
  }
  public putAttachNetworks(value: BareMetalServerAttachNetworks[] | cdktf.IResolvable) {
    this._attachNetworks.internalValue = value;
  }
  public resetAttachNetworks() {
    this._attachNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachNetworksInput() {
    return this._attachNetworks.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BareMetalServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BareMetalServerTimeouts) {
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
      assign_ipv6_address: cdktf.booleanToTerraform(this._assignIpv6Address),
      configuration_name: cdktf.stringToTerraform(this._configurationName),
      enable_hyperthreading: cdktf.booleanToTerraform(this._enableHyperthreading),
      location_id: cdktf.stringToTerraform(this._locationId),
      name: cdktf.stringToTerraform(this._name),
      network_name: cdktf.stringToTerraform(this._networkName),
      network_size_id: cdktf.stringToTerraform(this._networkSizeId),
      network_type: cdktf.stringToTerraform(this._networkType),
      os_image_name: cdktf.stringToTerraform(this._osImageName),
      password: cdktf.stringToTerraform(this._password),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      username: cdktf.stringToTerraform(this._username),
      vrf: cdktf.stringToTerraform(this._vrf),
      vrf_description: cdktf.stringToTerraform(this._vrfDescription),
      attach_networks: cdktf.listMapper(bareMetalServerAttachNetworksToTerraform, true)(this._attachNetworks.internalValue),
      timeouts: bareMetalServerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assign_ipv6_address: {
        value: cdktf.booleanToHclTerraform(this._assignIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configuration_name: {
        value: cdktf.stringToHclTerraform(this._configurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_hyperthreading: {
        value: cdktf.booleanToHclTerraform(this._enableHyperthreading),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
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
      network_name: {
        value: cdktf.stringToHclTerraform(this._networkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_size_id: {
        value: cdktf.stringToHclTerraform(this._networkSizeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_image_name: {
        value: cdktf.stringToHclTerraform(this._osImageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_description: {
        value: cdktf.stringToHclTerraform(this._vrfDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attach_networks: {
        value: cdktf.listMapperHcl(bareMetalServerAttachNetworksToHclTerraform, true)(this._attachNetworks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BareMetalServerAttachNetworksList",
      },
      timeouts: {
        value: bareMetalServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BareMetalServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
