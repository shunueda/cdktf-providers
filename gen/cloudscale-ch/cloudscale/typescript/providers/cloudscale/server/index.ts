// https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#allow_stopping_for_update Server#allow_stopping_for_update}
  */
  readonly allowStoppingForUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#bulk_volume_size_gb Server#bulk_volume_size_gb}
  */
  readonly bulkVolumeSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#flavor_slug Server#flavor_slug}
  */
  readonly flavorSlug: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#image_slug Server#image_slug}
  */
  readonly imageSlug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#image_uuid Server#image_uuid}
  */
  readonly imageUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#name Server#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#password Server#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#server_group_ids Server#server_group_ids}
  */
  readonly serverGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#skip_waiting_for_ssh_host_keys Server#skip_waiting_for_ssh_host_keys}
  */
  readonly skipWaitingForSshHostKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#ssh_keys Server#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#status Server#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#tags Server#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#use_ipv6 Server#use_ipv6}
  */
  readonly useIpv6?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#use_private_network Server#use_private_network}
  */
  readonly usePrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#use_public_network Server#use_public_network}
  */
  readonly usePublicNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#user_data Server#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#volume_size_gb Server#volume_size_gb}
  */
  readonly volumeSizeGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#zone_slug Server#zone_slug}
  */
  readonly zoneSlug?: string;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#interfaces Server#interfaces}
  */
  readonly interfaces?: ServerInterfaces[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#timeouts Server#timeouts}
  */
  readonly timeouts?: ServerTimeouts;
}
export interface ServerServerGroups {
}

export function serverServerGroupsToTerraform(struct?: ServerServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverServerGroupsToHclTerraform(struct?: ServerServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerServerGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerServerGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class ServerServerGroupsList extends cdktf.ComplexList {

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
  public get(index: number): ServerServerGroupsOutputReference {
    return new ServerServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerVolumes {
}

export function serverVolumesToTerraform(struct?: ServerVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverVolumesToHclTerraform(struct?: ServerVolumes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerVolumes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerVolumes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_path - computed: true, optional: false, required: false
  public get devicePath() {
    return this.getStringAttribute('device_path');
  }

  // size_gb - computed: true, optional: false, required: false
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class ServerVolumesList extends cdktf.ComplexList {

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
  public get(index: number): ServerVolumesOutputReference {
    return new ServerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerInterfacesAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#address Server#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#subnet_uuid Server#subnet_uuid}
  */
  readonly subnetUuid?: string;
}

export function serverInterfacesAddressesToTerraform(struct?: ServerInterfacesAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    subnet_uuid: cdktf.stringToTerraform(struct!.subnetUuid),
  }
}


export function serverInterfacesAddressesToHclTerraform(struct?: ServerInterfacesAddresses | cdktf.IResolvable): any {
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
    subnet_uuid: {
      value: cdktf.stringToHclTerraform(struct!.subnetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerInterfacesAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerInterfacesAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._subnetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetUuid = this._subnetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerInterfacesAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._subnetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._subnetUuid = value.subnetUuid;
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

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // prefix_length - computed: true, optional: false, required: false
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }

  // reverse_ptr - computed: true, optional: false, required: false
  public get reversePtr() {
    return this.getStringAttribute('reverse_ptr');
  }

  // subnet_cidr - computed: true, optional: false, required: false
  public get subnetCidr() {
    return this.getStringAttribute('subnet_cidr');
  }

  // subnet_href - computed: true, optional: false, required: false
  public get subnetHref() {
    return this.getStringAttribute('subnet_href');
  }

  // subnet_uuid - computed: true, optional: true, required: false
  private _subnetUuid?: string; 
  public get subnetUuid() {
    return this.getStringAttribute('subnet_uuid');
  }
  public set subnetUuid(value: string) {
    this._subnetUuid = value;
  }
  public resetSubnetUuid() {
    this._subnetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetUuidInput() {
    return this._subnetUuid;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class ServerInterfacesAddressesList extends cdktf.ComplexList {
  public internalValue? : ServerInterfacesAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServerInterfacesAddressesOutputReference {
    return new ServerInterfacesAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerInterfaces {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#network_uuid Server#network_uuid}
  */
  readonly networkUuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#no_address Server#no_address}
  */
  readonly noAddress?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#type Server#type}
  */
  readonly type: string;
  /**
  * addresses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#addresses Server#addresses}
  */
  readonly addresses?: ServerInterfacesAddresses[] | cdktf.IResolvable;
}

export function serverInterfacesToTerraform(struct?: ServerInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_uuid: cdktf.stringToTerraform(struct!.networkUuid),
    no_address: cdktf.booleanToTerraform(struct!.noAddress),
    type: cdktf.stringToTerraform(struct!.type),
    addresses: cdktf.listMapper(serverInterfacesAddressesToTerraform, true)(struct!.addresses),
  }
}


export function serverInterfacesToHclTerraform(struct?: ServerInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_uuid: {
      value: cdktf.stringToHclTerraform(struct!.networkUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_address: {
      value: cdktf.booleanToHclTerraform(struct!.noAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addresses: {
      value: cdktf.listMapperHcl(serverInterfacesAddressesToHclTerraform, true)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "ServerInterfacesAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkUuid = this._networkUuid;
    }
    if (this._noAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAddress = this._noAddress;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networkUuid = undefined;
      this._noAddress = undefined;
      this._type = undefined;
      this._addresses.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networkUuid = value.networkUuid;
      this._noAddress = value.noAddress;
      this._type = value.type;
      this._addresses.internalValue = value.addresses;
    }
  }

  // network_href - computed: true, optional: false, required: false
  public get networkHref() {
    return this.getStringAttribute('network_href');
  }

  // network_name - computed: true, optional: false, required: false
  public get networkName() {
    return this.getStringAttribute('network_name');
  }

  // network_uuid - computed: true, optional: true, required: false
  private _networkUuid?: string; 
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }
  public set networkUuid(value: string) {
    this._networkUuid = value;
  }
  public resetNetworkUuid() {
    this._networkUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUuidInput() {
    return this._networkUuid;
  }

  // no_address - computed: false, optional: true, required: false
  private _noAddress?: boolean | cdktf.IResolvable; 
  public get noAddress() {
    return this.getBooleanAttribute('no_address');
  }
  public set noAddress(value: boolean | cdktf.IResolvable) {
    this._noAddress = value;
  }
  public resetNoAddress() {
    this._noAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAddressInput() {
    return this._noAddress;
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

  // addresses - computed: false, optional: true, required: false
  private _addresses = new ServerInterfacesAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: ServerInterfacesAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }
}

export class ServerInterfacesList extends cdktf.ComplexList {
  public internalValue? : ServerInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ServerInterfacesOutputReference {
    return new ServerInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#create Server#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#update Server#update}
  */
  readonly update?: string;
}

export function serverTimeoutsToTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serverTimeoutsToHclTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
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

export class ServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server cloudscale_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudscale_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudscale_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/server cloudscale_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudscale_server',
      terraformGeneratorMetadata: {
        providerName: 'cloudscale',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowStoppingForUpdate = config.allowStoppingForUpdate;
    this._bulkVolumeSizeGb = config.bulkVolumeSizeGb;
    this._flavorSlug = config.flavorSlug;
    this._id = config.id;
    this._imageSlug = config.imageSlug;
    this._imageUuid = config.imageUuid;
    this._name = config.name;
    this._password = config.password;
    this._serverGroupIds = config.serverGroupIds;
    this._skipWaitingForSshHostKeys = config.skipWaitingForSshHostKeys;
    this._sshKeys = config.sshKeys;
    this._status = config.status;
    this._tags = config.tags;
    this._useIpv6 = config.useIpv6;
    this._usePrivateNetwork = config.usePrivateNetwork;
    this._usePublicNetwork = config.usePublicNetwork;
    this._userData = config.userData;
    this._volumeSizeGb = config.volumeSizeGb;
    this._zoneSlug = config.zoneSlug;
    this._interfaces.internalValue = config.interfaces;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_stopping_for_update - computed: false, optional: true, required: false
  private _allowStoppingForUpdate?: boolean | cdktf.IResolvable; 
  public get allowStoppingForUpdate() {
    return this.getBooleanAttribute('allow_stopping_for_update');
  }
  public set allowStoppingForUpdate(value: boolean | cdktf.IResolvable) {
    this._allowStoppingForUpdate = value;
  }
  public resetAllowStoppingForUpdate() {
    this._allowStoppingForUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStoppingForUpdateInput() {
    return this._allowStoppingForUpdate;
  }

  // bulk_volume_size_gb - computed: false, optional: true, required: false
  private _bulkVolumeSizeGb?: number; 
  public get bulkVolumeSizeGb() {
    return this.getNumberAttribute('bulk_volume_size_gb');
  }
  public set bulkVolumeSizeGb(value: number) {
    this._bulkVolumeSizeGb = value;
  }
  public resetBulkVolumeSizeGb() {
    this._bulkVolumeSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bulkVolumeSizeGbInput() {
    return this._bulkVolumeSizeGb;
  }

  // flavor_slug - computed: false, optional: false, required: true
  private _flavorSlug?: string; 
  public get flavorSlug() {
    return this.getStringAttribute('flavor_slug');
  }
  public set flavorSlug(value: string) {
    this._flavorSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorSlugInput() {
    return this._flavorSlug;
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

  // image_slug - computed: true, optional: true, required: false
  private _imageSlug?: string; 
  public get imageSlug() {
    return this.getStringAttribute('image_slug');
  }
  public set imageSlug(value: string) {
    this._imageSlug = value;
  }
  public resetImageSlug() {
    this._imageSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageSlugInput() {
    return this._imageSlug;
  }

  // image_uuid - computed: false, optional: true, required: false
  private _imageUuid?: string; 
  public get imageUuid() {
    return this.getStringAttribute('image_uuid');
  }
  public set imageUuid(value: string) {
    this._imageUuid = value;
  }
  public resetImageUuid() {
    this._imageUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUuidInput() {
    return this._imageUuid;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_ipv4_address - computed: true, optional: false, required: false
  public get privateIpv4Address() {
    return this.getStringAttribute('private_ipv4_address');
  }

  // public_ipv4_address - computed: true, optional: false, required: false
  public get publicIpv4Address() {
    return this.getStringAttribute('public_ipv4_address');
  }

  // public_ipv6_address - computed: true, optional: false, required: false
  public get publicIpv6Address() {
    return this.getStringAttribute('public_ipv6_address');
  }

  // server_group_ids - computed: false, optional: true, required: false
  private _serverGroupIds?: string[]; 
  public get serverGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('server_group_ids'));
  }
  public set serverGroupIds(value: string[]) {
    this._serverGroupIds = value;
  }
  public resetServerGroupIds() {
    this._serverGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupIdsInput() {
    return this._serverGroupIds;
  }

  // server_groups - computed: true, optional: false, required: false
  private _serverGroups = new ServerServerGroupsList(this, "server_groups", false);
  public get serverGroups() {
    return this._serverGroups;
  }

  // skip_waiting_for_ssh_host_keys - computed: false, optional: true, required: false
  private _skipWaitingForSshHostKeys?: boolean | cdktf.IResolvable; 
  public get skipWaitingForSshHostKeys() {
    return this.getBooleanAttribute('skip_waiting_for_ssh_host_keys');
  }
  public set skipWaitingForSshHostKeys(value: boolean | cdktf.IResolvable) {
    this._skipWaitingForSshHostKeys = value;
  }
  public resetSkipWaitingForSshHostKeys() {
    this._skipWaitingForSshHostKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipWaitingForSshHostKeysInput() {
    return this._skipWaitingForSshHostKeys;
  }

  // ssh_fingerprints - computed: true, optional: false, required: false
  public get sshFingerprints() {
    return this.getListAttribute('ssh_fingerprints');
  }

  // ssh_host_keys - computed: true, optional: false, required: false
  public get sshHostKeys() {
    return this.getListAttribute('ssh_host_keys');
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // use_ipv6 - computed: false, optional: true, required: false
  private _useIpv6?: boolean | cdktf.IResolvable; 
  public get useIpv6() {
    return this.getBooleanAttribute('use_ipv6');
  }
  public set useIpv6(value: boolean | cdktf.IResolvable) {
    this._useIpv6 = value;
  }
  public resetUseIpv6() {
    this._useIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpv6Input() {
    return this._useIpv6;
  }

  // use_private_network - computed: false, optional: true, required: false
  private _usePrivateNetwork?: boolean | cdktf.IResolvable; 
  public get usePrivateNetwork() {
    return this.getBooleanAttribute('use_private_network');
  }
  public set usePrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._usePrivateNetwork = value;
  }
  public resetUsePrivateNetwork() {
    this._usePrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivateNetworkInput() {
    return this._usePrivateNetwork;
  }

  // use_public_network - computed: false, optional: true, required: false
  private _usePublicNetwork?: boolean | cdktf.IResolvable; 
  public get usePublicNetwork() {
    return this.getBooleanAttribute('use_public_network');
  }
  public set usePublicNetwork(value: boolean | cdktf.IResolvable) {
    this._usePublicNetwork = value;
  }
  public resetUsePublicNetwork() {
    this._usePublicNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicNetworkInput() {
    return this._usePublicNetwork;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // volume_size_gb - computed: false, optional: true, required: false
  private _volumeSizeGb?: number; 
  public get volumeSizeGb() {
    return this.getNumberAttribute('volume_size_gb');
  }
  public set volumeSizeGb(value: number) {
    this._volumeSizeGb = value;
  }
  public resetVolumeSizeGb() {
    this._volumeSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeGbInput() {
    return this._volumeSizeGb;
  }

  // volumes - computed: true, optional: false, required: false
  private _volumes = new ServerVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }

  // zone_slug - computed: true, optional: true, required: false
  private _zoneSlug?: string; 
  public get zoneSlug() {
    return this.getStringAttribute('zone_slug');
  }
  public set zoneSlug(value: string) {
    this._zoneSlug = value;
  }
  public resetZoneSlug() {
    this._zoneSlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSlugInput() {
    return this._zoneSlug;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ServerInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ServerInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServerTimeouts) {
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
      allow_stopping_for_update: cdktf.booleanToTerraform(this._allowStoppingForUpdate),
      bulk_volume_size_gb: cdktf.numberToTerraform(this._bulkVolumeSizeGb),
      flavor_slug: cdktf.stringToTerraform(this._flavorSlug),
      id: cdktf.stringToTerraform(this._id),
      image_slug: cdktf.stringToTerraform(this._imageSlug),
      image_uuid: cdktf.stringToTerraform(this._imageUuid),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      server_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverGroupIds),
      skip_waiting_for_ssh_host_keys: cdktf.booleanToTerraform(this._skipWaitingForSshHostKeys),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      use_ipv6: cdktf.booleanToTerraform(this._useIpv6),
      use_private_network: cdktf.booleanToTerraform(this._usePrivateNetwork),
      use_public_network: cdktf.booleanToTerraform(this._usePublicNetwork),
      user_data: cdktf.stringToTerraform(this._userData),
      volume_size_gb: cdktf.numberToTerraform(this._volumeSizeGb),
      zone_slug: cdktf.stringToTerraform(this._zoneSlug),
      interfaces: cdktf.listMapper(serverInterfacesToTerraform, true)(this._interfaces.internalValue),
      timeouts: serverTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_stopping_for_update: {
        value: cdktf.booleanToHclTerraform(this._allowStoppingForUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bulk_volume_size_gb: {
        value: cdktf.numberToHclTerraform(this._bulkVolumeSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flavor_slug: {
        value: cdktf.stringToHclTerraform(this._flavorSlug),
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
      image_slug: {
        value: cdktf.stringToHclTerraform(this._imageSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_uuid: {
        value: cdktf.stringToHclTerraform(this._imageUuid),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      skip_waiting_for_ssh_host_keys: {
        value: cdktf.booleanToHclTerraform(this._skipWaitingForSshHostKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      use_ipv6: {
        value: cdktf.booleanToHclTerraform(this._useIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_private_network: {
        value: cdktf.booleanToHclTerraform(this._usePrivateNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_public_network: {
        value: cdktf.booleanToHclTerraform(this._usePublicNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_size_gb: {
        value: cdktf.numberToHclTerraform(this._volumeSizeGb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_slug: {
        value: cdktf.stringToHclTerraform(this._zoneSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(serverInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerInterfacesList",
      },
      timeouts: {
        value: serverTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
