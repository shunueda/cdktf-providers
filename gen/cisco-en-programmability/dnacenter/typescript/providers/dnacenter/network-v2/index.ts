// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#id NetworkV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#parameters NetworkV2#parameters}
  */
  readonly parameters?: NetworkV2Parameters[] | cdktf.IResolvable;
}
export interface NetworkV2Item {
}

export function networkV2ItemToTerraform(struct?: NetworkV2Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkV2ItemToHclTerraform(struct?: NetworkV2Item): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkV2ItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkV2Item | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkV2Item | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_uuid - computed: true, optional: false, required: false
  public get groupUuid() {
    return this.getStringAttribute('group_uuid');
  }

  // inherited_group_name - computed: true, optional: false, required: false
  public get inheritedGroupName() {
    return this.getStringAttribute('inherited_group_name');
  }

  // inherited_group_uuid - computed: true, optional: false, required: false
  public get inheritedGroupUuid() {
    return this.getStringAttribute('inherited_group_uuid');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class NetworkV2ItemList extends cdktf.ComplexList {

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
  public get(index: number): NetworkV2ItemOutputReference {
    return new NetworkV2ItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkV2ParametersSettingsClientAndEndpointAaa {
  /**
  * IP address for ISE serve (eg: 1.1.1.4)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#ip_address NetworkV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * IP address for AAA or ISE server (eg: 2.2.2.1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#network NetworkV2#network}
  */
  readonly network?: string;
  /**
  * Protocol for AAA or ISE serve (eg: RADIUS)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#protocol NetworkV2#protocol}
  */
  readonly protocol?: string;
  /**
  * Server type AAA or ISE server (eg: AAA)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#servers NetworkV2#servers}
  */
  readonly servers?: string;
  /**
  * Shared secret for ISE server
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#shared_secret NetworkV2#shared_secret}
  */
  readonly sharedSecret?: string;
}

export function networkV2ParametersSettingsClientAndEndpointAaaToTerraform(struct?: NetworkV2ParametersSettingsClientAndEndpointAaa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    network: cdktf.stringToTerraform(struct!.network),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    servers: cdktf.stringToTerraform(struct!.servers),
    shared_secret: cdktf.stringToTerraform(struct!.sharedSecret),
  }
}


export function networkV2ParametersSettingsClientAndEndpointAaaToHclTerraform(struct?: NetworkV2ParametersSettingsClientAndEndpointAaa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.stringToHclTerraform(struct!.servers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.sharedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkV2ParametersSettingsClientAndEndpointAaaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkV2ParametersSettingsClientAndEndpointAaa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    if (this._sharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSecret = this._sharedSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkV2ParametersSettingsClientAndEndpointAaa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._network = undefined;
      this._protocol = undefined;
      this._servers = undefined;
      this._sharedSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._network = value.network;
      this._protocol = value.protocol;
      this._servers = value.servers;
      this._sharedSecret = value.sharedSecret;
    }
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // servers - computed: true, optional: true, required: false
  private _servers?: string; 
  public get servers() {
    return this.getStringAttribute('servers');
  }
  public set servers(value: string) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // shared_secret - computed: true, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }
}

export class NetworkV2ParametersSettingsClientAndEndpointAaaList extends cdktf.ComplexList {
  public internalValue? : NetworkV2ParametersSettingsClientAndEndpointAaa[] | cdktf.IResolvable

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
  public get(index: number): NetworkV2ParametersSettingsClientAndEndpointAaaOutputReference {
    return new NetworkV2ParametersSettingsClientAndEndpointAaaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkV2ParametersSettingsDnsServer {
  /**
  * Domain Name of DHCP (eg; cisco)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#domain_name NetworkV2#domain_name}
  */
  readonly domainName?: string;
  /**
  * Primary IP Address for DHCP (eg: 2.2.2.2)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#primary_ip_address NetworkV2#primary_ip_address}
  */
  readonly primaryIpAddress?: string;
  /**
  * Secondary IP Address for DHCP (eg: 3.3.3.3)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#secondary_ip_address NetworkV2#secondary_ip_address}
  */
  readonly secondaryIpAddress?: string;
}

export function networkV2ParametersSettingsDnsServerToTerraform(struct?: NetworkV2ParametersSettingsDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    primary_ip_address: cdktf.stringToTerraform(struct!.primaryIpAddress),
    secondary_ip_address: cdktf.stringToTerraform(struct!.secondaryIpAddress),
  }
}


export function networkV2ParametersSettingsDnsServerToHclTerraform(struct?: NetworkV2ParametersSettingsDnsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.primaryIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.secondaryIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkV2ParametersSettingsDnsServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkV2ParametersSettingsDnsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._primaryIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryIpAddress = this._primaryIpAddress;
    }
    if (this._secondaryIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIpAddress = this._secondaryIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkV2ParametersSettingsDnsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domainName = undefined;
      this._primaryIpAddress = undefined;
      this._secondaryIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domainName = value.domainName;
      this._primaryIpAddress = value.primaryIpAddress;
      this._secondaryIpAddress = value.secondaryIpAddress;
    }
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // primary_ip_address - computed: true, optional: true, required: false
  private _primaryIpAddress?: string; 
  public get primaryIpAddress() {
    return this.getStringAttribute('primary_ip_address');
  }
  public set primaryIpAddress(value: string) {
    this._primaryIpAddress = value;
  }
  public resetPrimaryIpAddress() {
    this._primaryIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryIpAddressInput() {
    return this._primaryIpAddress;
  }

  // secondary_ip_address - computed: true, optional: true, required: false
  private _secondaryIpAddress?: string; 
  public get secondaryIpAddress() {
    return this.getStringAttribute('secondary_ip_address');
  }
  public set secondaryIpAddress(value: string) {
    this._secondaryIpAddress = value;
  }
  public resetSecondaryIpAddress() {
    this._secondaryIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpAddressInput() {
    return this._secondaryIpAddress;
  }
}

export class NetworkV2ParametersSettingsDnsServerList extends cdktf.ComplexList {
  public internalValue? : NetworkV2ParametersSettingsDnsServer[] | cdktf.IResolvable

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
  public get(index: number): NetworkV2ParametersSettingsDnsServerOutputReference {
    return new NetworkV2ParametersSettingsDnsServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkV2ParametersSettingsMessageOfTheday {
  /**
  * Massage for Banner message (eg; Good day)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#banner_message NetworkV2#banner_message}
  */
  readonly bannerMessage?: string;
  /**
  * Retain existing Banner Message (eg: "true" or "false")
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#retain_existing_banner NetworkV2#retain_existing_banner}
  */
  readonly retainExistingBanner?: string;
}

export function networkV2ParametersSettingsMessageOfThedayToTerraform(struct?: NetworkV2ParametersSettingsMessageOfTheday | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    banner_message: cdktf.stringToTerraform(struct!.bannerMessage),
    retain_existing_banner: cdktf.stringToTerraform(struct!.retainExistingBanner),
  }
}


export function networkV2ParametersSettingsMessageOfThedayToHclTerraform(struct?: NetworkV2ParametersSettingsMessageOfTheday | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    banner_message: {
      value: cdktf.stringToHclTerraform(struct!.bannerMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retain_existing_banner: {
      value: cdktf.stringToHclTerraform(struct!.retainExistingBanner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkV2ParametersSettingsMessageOfThedayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkV2ParametersSettingsMessageOfTheday | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bannerMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerMessage = this._bannerMessage;
    }
    if (this._retainExistingBanner !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainExistingBanner = this._retainExistingBanner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkV2ParametersSettingsMessageOfTheday | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bannerMessage = undefined;
      this._retainExistingBanner = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bannerMessage = value.bannerMessage;
      this._retainExistingBanner = value.retainExistingBanner;
    }
  }

  // banner_message - computed: true, optional: true, required: false
  private _bannerMessage?: string; 
  public get bannerMessage() {
    return this.getStringAttribute('banner_message');
  }
  public set bannerMessage(value: string) {
    this._bannerMessage = value;
  }
  public resetBannerMessage() {
    this._bannerMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerMessageInput() {
    return this._bannerMessage;
  }

  // retain_existing_banner - computed: true, optional: true, required: false
  private _retainExistingBanner?: string; 
  public get retainExistingBanner() {
    return this.getStringAttribute('retain_existing_banner');
  }
  public set retainExistingBanner(value: string) {
    this._retainExistingBanner = value;
  }
  public resetRetainExistingBanner() {
    this._retainExistingBanner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainExistingBannerInput() {
    return this._retainExistingBanner;
  }
}

export class NetworkV2ParametersSettingsMessageOfThedayList extends cdktf.ComplexList {
  public internalValue? : NetworkV2ParametersSettingsMessageOfTheday[] | cdktf.IResolvable

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
  public get(index: number): NetworkV2ParametersSettingsMessageOfThedayOutputReference {
    return new NetworkV2ParametersSettingsMessageOfThedayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkV2ParametersSettingsNetflowcollector {
  /**
  * IP Address for NetFlow collector (eg: 3.3.3.1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#ip_address NetworkV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Port for NetFlow Collector (eg; 443)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#port NetworkV2#port}
  */
  readonly port?: number;
}

export function networkV2ParametersSettingsNetflowcollectorToTerraform(struct?: NetworkV2ParametersSettingsNetflowcollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function networkV2ParametersSettingsNetflowcollectorToHclTerraform(struct?: NetworkV2ParametersSettingsNetflowcollector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkV2ParametersSettingsNetflowcollectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkV2ParametersSettingsNetflowcollector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkV2ParametersSettingsNetflowcollector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._port = value.port;
    }
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

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
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

export class NetworkV2ParametersSettingsNetflowcollectorList extends cdktf.ComplexList {
  public internalValue? : NetworkV2ParametersSettingsNetflowcollector[] | cdktf.IResolvable

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
  public get(index: number): NetworkV2ParametersSettingsNetflowcollectorOutputReference {
    return new NetworkV2ParametersSettingsNetflowcollectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkV2ParametersSettingsNetworkAaa {
  /**
  * IP address for AAA and ISE server (eg: 1.1.1.1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#ip_address NetworkV2#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * IP Address for AAA or ISE server (eg: 2.2.2.2)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#network NetworkV2#network}
  */
  readonly network?: string;
  /**
  * Protocol for AAA or ISE serve (eg: RADIUS)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#protocol NetworkV2#protocol}
  */
  readonly protocol?: string;
  /**
  * Server type for AAA Network (eg: AAA)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#servers NetworkV2#servers}
  */
  readonly servers?: string;
  /**
  * Shared secret for ISE Server
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#shared_secret NetworkV2#shared_secret}
  */
  readonly sharedSecret?: string;
}

export function networkV2ParametersSettingsNetworkAaaToTerraform(struct?: NetworkV2ParametersSettingsNetworkAaa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    network: cdktf.stringToTerraform(struct!.network),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    servers: cdktf.stringToTerraform(struct!.servers),
    shared_secret: cdktf.stringToTerraform(struct!.sharedSecret),
  }
}


export function networkV2ParametersSettingsNetworkAaaToHclTerraform(struct?: NetworkV2ParametersSettingsNetworkAaa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.stringToHclTerraform(struct!.servers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.sharedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkV2ParametersSettingsNetworkAaaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkV2ParametersSettingsNetworkAaa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    if (this._sharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSecret = this._sharedSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkV2ParametersSettingsNetworkAaa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._network = undefined;
      this._protocol = undefined;
      this._servers = undefined;
      this._sharedSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._network = value.network;
      this._protocol = value.protocol;
      this._servers = value.servers;
      this._sharedSecret = value.sharedSecret;
    }
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

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // servers - computed: true, optional: true, required: false
  private _servers?: string; 
  public get servers() {
    return this.getStringAttribute('servers');
  }
  public set servers(value: string) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // shared_secret - computed: true, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }
}

export class NetworkV2ParametersSettingsNetworkAaaList extends cdktf.ComplexList {
  public internalValue? : NetworkV2ParametersSettingsNetworkAaa[] | cdktf.IResolvable

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
  public get(index: number): NetworkV2ParametersSettingsNetworkAaaOutputReference {
    return new NetworkV2ParametersSettingsNetworkAaaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkV2ParametersSettingsSnmpServer {
  /**
  * Configuration DNAC IP for SNMP Server (eg: true)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#configure_dnac_ip NetworkV2#configure_dnac_ip}
  */
  readonly configureDnacIp?: string;
  /**
  * IP Address for SNMP Server (eg: 4.4.4.1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#ip_addresses NetworkV2#ip_addresses}
  */
  readonly ipAddresses?: string[];
}

export function networkV2ParametersSettingsSnmpServerToTerraform(struct?: NetworkV2ParametersSettingsSnmpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configure_dnac_ip: cdktf.stringToTerraform(struct!.configureDnacIp),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
  }
}


export function networkV2ParametersSettingsSnmpServerToHclTerraform(struct?: NetworkV2ParametersSettingsSnmpServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configure_dnac_ip: {
      value: cdktf.stringToHclTerraform(struct!.configureDnacIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkV2ParametersSettingsSnmpServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkV2ParametersSettingsSnmpServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configureDnacIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureDnacIp = this._configureDnacIp;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkV2ParametersSettingsSnmpServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configureDnacIp = undefined;
      this._ipAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configureDnacIp = value.configureDnacIp;
      this._ipAddresses = value.ipAddresses;
    }
  }

  // configure_dnac_ip - computed: true, optional: true, required: false
  private _configureDnacIp?: string; 
  public get configureDnacIp() {
    return this.getStringAttribute('configure_dnac_ip');
  }
  public set configureDnacIp(value: string) {
    this._configureDnacIp = value;
  }
  public resetConfigureDnacIp() {
    this._configureDnacIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureDnacIpInput() {
    return this._configureDnacIp;
  }

  // ip_addresses - computed: true, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }
}

export class NetworkV2ParametersSettingsSnmpServerList extends cdktf.ComplexList {
  public internalValue? : NetworkV2ParametersSettingsSnmpServer[] | cdktf.IResolvable

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
  public get(index: number): NetworkV2ParametersSettingsSnmpServerOutputReference {
    return new NetworkV2ParametersSettingsSnmpServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkV2ParametersSettingsSyslogServer {
  /**
  * Configuration DNAC IP for syslog server (eg: true)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#configure_dnac_ip NetworkV2#configure_dnac_ip}
  */
  readonly configureDnacIp?: string;
  /**
  * IP Address for syslog server (eg: 4.4.4.4)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#ip_addresses NetworkV2#ip_addresses}
  */
  readonly ipAddresses?: string[];
}

export function networkV2ParametersSettingsSyslogServerToTerraform(struct?: NetworkV2ParametersSettingsSyslogServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configure_dnac_ip: cdktf.stringToTerraform(struct!.configureDnacIp),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddresses),
  }
}


export function networkV2ParametersSettingsSyslogServerToHclTerraform(struct?: NetworkV2ParametersSettingsSyslogServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configure_dnac_ip: {
      value: cdktf.stringToHclTerraform(struct!.configureDnacIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkV2ParametersSettingsSyslogServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkV2ParametersSettingsSyslogServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configureDnacIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.configureDnacIp = this._configureDnacIp;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkV2ParametersSettingsSyslogServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configureDnacIp = undefined;
      this._ipAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configureDnacIp = value.configureDnacIp;
      this._ipAddresses = value.ipAddresses;
    }
  }

  // configure_dnac_ip - computed: true, optional: true, required: false
  private _configureDnacIp?: string; 
  public get configureDnacIp() {
    return this.getStringAttribute('configure_dnac_ip');
  }
  public set configureDnacIp(value: string) {
    this._configureDnacIp = value;
  }
  public resetConfigureDnacIp() {
    this._configureDnacIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureDnacIpInput() {
    return this._configureDnacIp;
  }

  // ip_addresses - computed: true, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }
}

export class NetworkV2ParametersSettingsSyslogServerList extends cdktf.ComplexList {
  public internalValue? : NetworkV2ParametersSettingsSyslogServer[] | cdktf.IResolvable

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
  public get(index: number): NetworkV2ParametersSettingsSyslogServerOutputReference {
    return new NetworkV2ParametersSettingsSyslogServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkV2ParametersSettings {
  /**
  * DHCP Server IP (eg: 1.1.1.1)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#dhcp_server NetworkV2#dhcp_server}
  */
  readonly dhcpServer?: string[];
  /**
  * IP address for NTP server (eg: 1.1.1.2)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#ntp_server NetworkV2#ntp_server}
  */
  readonly ntpServer?: string[];
  /**
  * Input for time zone (eg: Africa/Abidjan)
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#timezone NetworkV2#timezone}
  */
  readonly timezone?: string;
  /**
  * client_and_endpoint_aaa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#client_and_endpoint_aaa NetworkV2#client_and_endpoint_aaa}
  */
  readonly clientAndEndpointAaa?: NetworkV2ParametersSettingsClientAndEndpointAaa[] | cdktf.IResolvable;
  /**
  * dns_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#dns_server NetworkV2#dns_server}
  */
  readonly dnsServer?: NetworkV2ParametersSettingsDnsServer[] | cdktf.IResolvable;
  /**
  * message_of_theday block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#message_of_theday NetworkV2#message_of_theday}
  */
  readonly messageOfTheday?: NetworkV2ParametersSettingsMessageOfTheday[] | cdktf.IResolvable;
  /**
  * netflowcollector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#netflowcollector NetworkV2#netflowcollector}
  */
  readonly netflowcollector?: NetworkV2ParametersSettingsNetflowcollector[] | cdktf.IResolvable;
  /**
  * network_aaa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#network_aaa NetworkV2#network_aaa}
  */
  readonly networkAaa?: NetworkV2ParametersSettingsNetworkAaa[] | cdktf.IResolvable;
  /**
  * snmp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#snmp_server NetworkV2#snmp_server}
  */
  readonly snmpServer?: NetworkV2ParametersSettingsSnmpServer[] | cdktf.IResolvable;
  /**
  * syslog_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#syslog_server NetworkV2#syslog_server}
  */
  readonly syslogServer?: NetworkV2ParametersSettingsSyslogServer[] | cdktf.IResolvable;
}

export function networkV2ParametersSettingsToTerraform(struct?: NetworkV2ParametersSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dhcpServer),
    ntp_server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ntpServer),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    client_and_endpoint_aaa: cdktf.listMapper(networkV2ParametersSettingsClientAndEndpointAaaToTerraform, true)(struct!.clientAndEndpointAaa),
    dns_server: cdktf.listMapper(networkV2ParametersSettingsDnsServerToTerraform, true)(struct!.dnsServer),
    message_of_theday: cdktf.listMapper(networkV2ParametersSettingsMessageOfThedayToTerraform, true)(struct!.messageOfTheday),
    netflowcollector: cdktf.listMapper(networkV2ParametersSettingsNetflowcollectorToTerraform, true)(struct!.netflowcollector),
    network_aaa: cdktf.listMapper(networkV2ParametersSettingsNetworkAaaToTerraform, true)(struct!.networkAaa),
    snmp_server: cdktf.listMapper(networkV2ParametersSettingsSnmpServerToTerraform, true)(struct!.snmpServer),
    syslog_server: cdktf.listMapper(networkV2ParametersSettingsSyslogServerToTerraform, true)(struct!.syslogServer),
  }
}


export function networkV2ParametersSettingsToHclTerraform(struct?: NetworkV2ParametersSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dhcpServer),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ntp_server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ntpServer),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_and_endpoint_aaa: {
      value: cdktf.listMapperHcl(networkV2ParametersSettingsClientAndEndpointAaaToHclTerraform, true)(struct!.clientAndEndpointAaa),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkV2ParametersSettingsClientAndEndpointAaaList",
    },
    dns_server: {
      value: cdktf.listMapperHcl(networkV2ParametersSettingsDnsServerToHclTerraform, true)(struct!.dnsServer),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkV2ParametersSettingsDnsServerList",
    },
    message_of_theday: {
      value: cdktf.listMapperHcl(networkV2ParametersSettingsMessageOfThedayToHclTerraform, true)(struct!.messageOfTheday),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkV2ParametersSettingsMessageOfThedayList",
    },
    netflowcollector: {
      value: cdktf.listMapperHcl(networkV2ParametersSettingsNetflowcollectorToHclTerraform, true)(struct!.netflowcollector),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkV2ParametersSettingsNetflowcollectorList",
    },
    network_aaa: {
      value: cdktf.listMapperHcl(networkV2ParametersSettingsNetworkAaaToHclTerraform, true)(struct!.networkAaa),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkV2ParametersSettingsNetworkAaaList",
    },
    snmp_server: {
      value: cdktf.listMapperHcl(networkV2ParametersSettingsSnmpServerToHclTerraform, true)(struct!.snmpServer),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkV2ParametersSettingsSnmpServerList",
    },
    syslog_server: {
      value: cdktf.listMapperHcl(networkV2ParametersSettingsSyslogServerToHclTerraform, true)(struct!.syslogServer),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkV2ParametersSettingsSyslogServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkV2ParametersSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkV2ParametersSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpServer = this._dhcpServer;
    }
    if (this._ntpServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServer = this._ntpServer;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._clientAndEndpointAaa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAndEndpointAaa = this._clientAndEndpointAaa?.internalValue;
    }
    if (this._dnsServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServer = this._dnsServer?.internalValue;
    }
    if (this._messageOfTheday?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageOfTheday = this._messageOfTheday?.internalValue;
    }
    if (this._netflowcollector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowcollector = this._netflowcollector?.internalValue;
    }
    if (this._networkAaa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAaa = this._networkAaa?.internalValue;
    }
    if (this._snmpServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpServer = this._snmpServer?.internalValue;
    }
    if (this._syslogServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslogServer = this._syslogServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkV2ParametersSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpServer = undefined;
      this._ntpServer = undefined;
      this._timezone = undefined;
      this._clientAndEndpointAaa.internalValue = undefined;
      this._dnsServer.internalValue = undefined;
      this._messageOfTheday.internalValue = undefined;
      this._netflowcollector.internalValue = undefined;
      this._networkAaa.internalValue = undefined;
      this._snmpServer.internalValue = undefined;
      this._syslogServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpServer = value.dhcpServer;
      this._ntpServer = value.ntpServer;
      this._timezone = value.timezone;
      this._clientAndEndpointAaa.internalValue = value.clientAndEndpointAaa;
      this._dnsServer.internalValue = value.dnsServer;
      this._messageOfTheday.internalValue = value.messageOfTheday;
      this._netflowcollector.internalValue = value.netflowcollector;
      this._networkAaa.internalValue = value.networkAaa;
      this._snmpServer.internalValue = value.snmpServer;
      this._syslogServer.internalValue = value.syslogServer;
    }
  }

  // dhcp_server - computed: true, optional: true, required: false
  private _dhcpServer?: string[]; 
  public get dhcpServer() {
    return this.getListAttribute('dhcp_server');
  }
  public set dhcpServer(value: string[]) {
    this._dhcpServer = value;
  }
  public resetDhcpServer() {
    this._dhcpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerInput() {
    return this._dhcpServer;
  }

  // ntp_server - computed: true, optional: true, required: false
  private _ntpServer?: string[]; 
  public get ntpServer() {
    return this.getListAttribute('ntp_server');
  }
  public set ntpServer(value: string[]) {
    this._ntpServer = value;
  }
  public resetNtpServer() {
    this._ntpServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServerInput() {
    return this._ntpServer;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // client_and_endpoint_aaa - computed: false, optional: true, required: false
  private _clientAndEndpointAaa = new NetworkV2ParametersSettingsClientAndEndpointAaaList(this, "client_and_endpoint_aaa", false);
  public get clientAndEndpointAaa() {
    return this._clientAndEndpointAaa;
  }
  public putClientAndEndpointAaa(value: NetworkV2ParametersSettingsClientAndEndpointAaa[] | cdktf.IResolvable) {
    this._clientAndEndpointAaa.internalValue = value;
  }
  public resetClientAndEndpointAaa() {
    this._clientAndEndpointAaa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAndEndpointAaaInput() {
    return this._clientAndEndpointAaa.internalValue;
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer = new NetworkV2ParametersSettingsDnsServerList(this, "dns_server", false);
  public get dnsServer() {
    return this._dnsServer;
  }
  public putDnsServer(value: NetworkV2ParametersSettingsDnsServer[] | cdktf.IResolvable) {
    this._dnsServer.internalValue = value;
  }
  public resetDnsServer() {
    this._dnsServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer.internalValue;
  }

  // message_of_theday - computed: false, optional: true, required: false
  private _messageOfTheday = new NetworkV2ParametersSettingsMessageOfThedayList(this, "message_of_theday", false);
  public get messageOfTheday() {
    return this._messageOfTheday;
  }
  public putMessageOfTheday(value: NetworkV2ParametersSettingsMessageOfTheday[] | cdktf.IResolvable) {
    this._messageOfTheday.internalValue = value;
  }
  public resetMessageOfTheday() {
    this._messageOfTheday.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageOfThedayInput() {
    return this._messageOfTheday.internalValue;
  }

  // netflowcollector - computed: false, optional: true, required: false
  private _netflowcollector = new NetworkV2ParametersSettingsNetflowcollectorList(this, "netflowcollector", false);
  public get netflowcollector() {
    return this._netflowcollector;
  }
  public putNetflowcollector(value: NetworkV2ParametersSettingsNetflowcollector[] | cdktf.IResolvable) {
    this._netflowcollector.internalValue = value;
  }
  public resetNetflowcollector() {
    this._netflowcollector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowcollectorInput() {
    return this._netflowcollector.internalValue;
  }

  // network_aaa - computed: false, optional: true, required: false
  private _networkAaa = new NetworkV2ParametersSettingsNetworkAaaList(this, "network_aaa", false);
  public get networkAaa() {
    return this._networkAaa;
  }
  public putNetworkAaa(value: NetworkV2ParametersSettingsNetworkAaa[] | cdktf.IResolvable) {
    this._networkAaa.internalValue = value;
  }
  public resetNetworkAaa() {
    this._networkAaa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAaaInput() {
    return this._networkAaa.internalValue;
  }

  // snmp_server - computed: false, optional: true, required: false
  private _snmpServer = new NetworkV2ParametersSettingsSnmpServerList(this, "snmp_server", false);
  public get snmpServer() {
    return this._snmpServer;
  }
  public putSnmpServer(value: NetworkV2ParametersSettingsSnmpServer[] | cdktf.IResolvable) {
    this._snmpServer.internalValue = value;
  }
  public resetSnmpServer() {
    this._snmpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpServerInput() {
    return this._snmpServer.internalValue;
  }

  // syslog_server - computed: false, optional: true, required: false
  private _syslogServer = new NetworkV2ParametersSettingsSyslogServerList(this, "syslog_server", false);
  public get syslogServer() {
    return this._syslogServer;
  }
  public putSyslogServer(value: NetworkV2ParametersSettingsSyslogServer[] | cdktf.IResolvable) {
    this._syslogServer.internalValue = value;
  }
  public resetSyslogServer() {
    this._syslogServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogServerInput() {
    return this._syslogServer.internalValue;
  }
}

export class NetworkV2ParametersSettingsList extends cdktf.ComplexList {
  public internalValue? : NetworkV2ParametersSettings[] | cdktf.IResolvable

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
  public get(index: number): NetworkV2ParametersSettingsOutputReference {
    return new NetworkV2ParametersSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkV2Parameters {
  /**
  * siteId path parameter. Site Id to update the network settings which is associated with the site
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#site_id NetworkV2#site_id}
  */
  readonly siteId: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#settings NetworkV2#settings}
  */
  readonly settings?: NetworkV2ParametersSettings[] | cdktf.IResolvable;
}

export function networkV2ParametersToTerraform(struct?: NetworkV2Parameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site_id: cdktf.stringToTerraform(struct!.siteId),
    settings: cdktf.listMapper(networkV2ParametersSettingsToTerraform, true)(struct!.settings),
  }
}


export function networkV2ParametersToHclTerraform(struct?: NetworkV2Parameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.listMapperHcl(networkV2ParametersSettingsToHclTerraform, true)(struct!.settings),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkV2ParametersSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkV2ParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkV2Parameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkV2Parameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._siteId = undefined;
      this._settings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._siteId = value.siteId;
      this._settings.internalValue = value.settings;
    }
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new NetworkV2ParametersSettingsList(this, "settings", false);
  public get settings() {
    return this._settings;
  }
  public putSettings(value: NetworkV2ParametersSettings[] | cdktf.IResolvable) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}

export class NetworkV2ParametersList extends cdktf.ComplexList {
  public internalValue? : NetworkV2Parameters[] | cdktf.IResolvable

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
  public get(index: number): NetworkV2ParametersOutputReference {
    return new NetworkV2ParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2 dnacenter_network_v2}
*/
export class NetworkV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_network_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkV2 to import
  * @param importFromId The id of the existing NetworkV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_network_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/network_v2 dnacenter_network_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: NetworkV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_network_v2',
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
  private _item = new NetworkV2ItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new NetworkV2ParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: NetworkV2Parameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
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
      parameters: cdktf.listMapper(networkV2ParametersToTerraform, true)(this._parameters.internalValue),
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
        value: cdktf.listMapperHcl(networkV2ParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkV2ParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
