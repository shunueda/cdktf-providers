// https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#id DnsConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether or not to enable MagicDNS. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#magic_dns DnsConfiguration#magic_dns}
  */
  readonly magicDns?: boolean | cdktf.IResolvable;
  /**
  * When enabled, use the configured DNS servers in `nameservers` to resolve names outside the tailnet. When disabled, devices will prefer their local DNS configuration. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#override_local_dns DnsConfiguration#override_local_dns}
  */
  readonly overrideLocalDns?: boolean | cdktf.IResolvable;
  /**
  * Additional search domains. When MagicDNS is on, the tailnet domain is automatically included as the first search domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#search_paths DnsConfiguration#search_paths}
  */
  readonly searchPaths?: string[];
  /**
  * nameservers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#nameservers DnsConfiguration#nameservers}
  */
  readonly nameservers?: DnsConfigurationNameservers[] | cdktf.IResolvable;
  /**
  * split_dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#split_dns DnsConfiguration#split_dns}
  */
  readonly splitDns?: DnsConfigurationSplitDns[] | cdktf.IResolvable;
}
export interface DnsConfigurationNameservers {
  /**
  * The nameserver's IPv4 or IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#address DnsConfiguration#address}
  */
  readonly address: string;
  /**
  * This nameserver will continue to be used when an exit node is selected (requires Tailscale v1.88.1 or later). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#use_with_exit_node DnsConfiguration#use_with_exit_node}
  */
  readonly useWithExitNode?: boolean | cdktf.IResolvable;
}

export function dnsConfigurationNameserversToTerraform(struct?: DnsConfigurationNameservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    use_with_exit_node: cdktf.booleanToTerraform(struct!.useWithExitNode),
  }
}


export function dnsConfigurationNameserversToHclTerraform(struct?: DnsConfigurationNameservers | cdktf.IResolvable): any {
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
    use_with_exit_node: {
      value: cdktf.booleanToHclTerraform(struct!.useWithExitNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsConfigurationNameserversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsConfigurationNameservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._useWithExitNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.useWithExitNode = this._useWithExitNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsConfigurationNameservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._useWithExitNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._useWithExitNode = value.useWithExitNode;
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

  // use_with_exit_node - computed: false, optional: true, required: false
  private _useWithExitNode?: boolean | cdktf.IResolvable; 
  public get useWithExitNode() {
    return this.getBooleanAttribute('use_with_exit_node');
  }
  public set useWithExitNode(value: boolean | cdktf.IResolvable) {
    this._useWithExitNode = value;
  }
  public resetUseWithExitNode() {
    this._useWithExitNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWithExitNodeInput() {
    return this._useWithExitNode;
  }
}

export class DnsConfigurationNameserversList extends cdktf.ComplexList {
  public internalValue? : DnsConfigurationNameservers[] | cdktf.IResolvable

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
  public get(index: number): DnsConfigurationNameserversOutputReference {
    return new DnsConfigurationNameserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsConfigurationSplitDnsNameservers {
  /**
  * The nameserver's IPv4 or IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#address DnsConfiguration#address}
  */
  readonly address: string;
  /**
  * This nameserver will continue to be used when an exit node is selected (requires Tailscale v1.88.1 or later). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#use_with_exit_node DnsConfiguration#use_with_exit_node}
  */
  readonly useWithExitNode?: boolean | cdktf.IResolvable;
}

export function dnsConfigurationSplitDnsNameserversToTerraform(struct?: DnsConfigurationSplitDnsNameservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    use_with_exit_node: cdktf.booleanToTerraform(struct!.useWithExitNode),
  }
}


export function dnsConfigurationSplitDnsNameserversToHclTerraform(struct?: DnsConfigurationSplitDnsNameservers | cdktf.IResolvable): any {
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
    use_with_exit_node: {
      value: cdktf.booleanToHclTerraform(struct!.useWithExitNode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsConfigurationSplitDnsNameserversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsConfigurationSplitDnsNameservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._useWithExitNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.useWithExitNode = this._useWithExitNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsConfigurationSplitDnsNameservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._useWithExitNode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._useWithExitNode = value.useWithExitNode;
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

  // use_with_exit_node - computed: false, optional: true, required: false
  private _useWithExitNode?: boolean | cdktf.IResolvable; 
  public get useWithExitNode() {
    return this.getBooleanAttribute('use_with_exit_node');
  }
  public set useWithExitNode(value: boolean | cdktf.IResolvable) {
    this._useWithExitNode = value;
  }
  public resetUseWithExitNode() {
    this._useWithExitNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWithExitNodeInput() {
    return this._useWithExitNode;
  }
}

export class DnsConfigurationSplitDnsNameserversList extends cdktf.ComplexList {
  public internalValue? : DnsConfigurationSplitDnsNameservers[] | cdktf.IResolvable

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
  public get(index: number): DnsConfigurationSplitDnsNameserversOutputReference {
    return new DnsConfigurationSplitDnsNameserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DnsConfigurationSplitDns {
  /**
  * The nameservers will be used only for this domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#domain DnsConfiguration#domain}
  */
  readonly domain: string;
  /**
  * nameservers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#nameservers DnsConfiguration#nameservers}
  */
  readonly nameservers: DnsConfigurationSplitDnsNameservers[] | cdktf.IResolvable;
}

export function dnsConfigurationSplitDnsToTerraform(struct?: DnsConfigurationSplitDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    nameservers: cdktf.listMapper(dnsConfigurationSplitDnsNameserversToTerraform, true)(struct!.nameservers),
  }
}


export function dnsConfigurationSplitDnsToHclTerraform(struct?: DnsConfigurationSplitDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameservers: {
      value: cdktf.listMapperHcl(dnsConfigurationSplitDnsNameserversToHclTerraform, true)(struct!.nameservers),
      isBlock: true,
      type: "list",
      storageClassType: "DnsConfigurationSplitDnsNameserversList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsConfigurationSplitDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsConfigurationSplitDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._nameservers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsConfigurationSplitDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._nameservers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._nameservers.internalValue = value.nameservers;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // nameservers - computed: false, optional: false, required: true
  private _nameservers = new DnsConfigurationSplitDnsNameserversList(this, "nameservers", false);
  public get nameservers() {
    return this._nameservers;
  }
  public putNameservers(value: DnsConfigurationSplitDnsNameservers[] | cdktf.IResolvable) {
    this._nameservers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers.internalValue;
  }
}

export class DnsConfigurationSplitDnsList extends cdktf.ComplexList {
  public internalValue? : DnsConfigurationSplitDns[] | cdktf.IResolvable

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
  public get(index: number): DnsConfigurationSplitDnsOutputReference {
    return new DnsConfigurationSplitDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration tailscale_dns_configuration}
*/
export class DnsConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailscale_dns_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsConfiguration to import
  * @param importFromId The id of the existing DnsConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailscale_dns_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/resources/dns_configuration tailscale_dns_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsConfigurationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DnsConfigurationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tailscale_dns_configuration',
      terraformGeneratorMetadata: {
        providerName: 'tailscale',
        providerVersion: '0.24.0'
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
    this._magicDns = config.magicDns;
    this._overrideLocalDns = config.overrideLocalDns;
    this._searchPaths = config.searchPaths;
    this._nameservers.internalValue = config.nameservers;
    this._splitDns.internalValue = config.splitDns;
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

  // magic_dns - computed: false, optional: true, required: false
  private _magicDns?: boolean | cdktf.IResolvable; 
  public get magicDns() {
    return this.getBooleanAttribute('magic_dns');
  }
  public set magicDns(value: boolean | cdktf.IResolvable) {
    this._magicDns = value;
  }
  public resetMagicDns() {
    this._magicDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get magicDnsInput() {
    return this._magicDns;
  }

  // override_local_dns - computed: false, optional: true, required: false
  private _overrideLocalDns?: boolean | cdktf.IResolvable; 
  public get overrideLocalDns() {
    return this.getBooleanAttribute('override_local_dns');
  }
  public set overrideLocalDns(value: boolean | cdktf.IResolvable) {
    this._overrideLocalDns = value;
  }
  public resetOverrideLocalDns() {
    this._overrideLocalDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideLocalDnsInput() {
    return this._overrideLocalDns;
  }

  // search_paths - computed: false, optional: true, required: false
  private _searchPaths?: string[]; 
  public get searchPaths() {
    return this.getListAttribute('search_paths');
  }
  public set searchPaths(value: string[]) {
    this._searchPaths = value;
  }
  public resetSearchPaths() {
    this._searchPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPathsInput() {
    return this._searchPaths;
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers = new DnsConfigurationNameserversList(this, "nameservers", false);
  public get nameservers() {
    return this._nameservers;
  }
  public putNameservers(value: DnsConfigurationNameservers[] | cdktf.IResolvable) {
    this._nameservers.internalValue = value;
  }
  public resetNameservers() {
    this._nameservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers.internalValue;
  }

  // split_dns - computed: false, optional: true, required: false
  private _splitDns = new DnsConfigurationSplitDnsList(this, "split_dns", false);
  public get splitDns() {
    return this._splitDns;
  }
  public putSplitDns(value: DnsConfigurationSplitDns[] | cdktf.IResolvable) {
    this._splitDns.internalValue = value;
  }
  public resetSplitDns() {
    this._splitDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDnsInput() {
    return this._splitDns.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      magic_dns: cdktf.booleanToTerraform(this._magicDns),
      override_local_dns: cdktf.booleanToTerraform(this._overrideLocalDns),
      search_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._searchPaths),
      nameservers: cdktf.listMapper(dnsConfigurationNameserversToTerraform, true)(this._nameservers.internalValue),
      split_dns: cdktf.listMapper(dnsConfigurationSplitDnsToTerraform, true)(this._splitDns.internalValue),
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
      magic_dns: {
        value: cdktf.booleanToHclTerraform(this._magicDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      override_local_dns: {
        value: cdktf.booleanToHclTerraform(this._overrideLocalDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      search_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._searchPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      nameservers: {
        value: cdktf.listMapperHcl(dnsConfigurationNameserversToHclTerraform, true)(this._nameservers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsConfigurationNameserversList",
      },
      split_dns: {
        value: cdktf.listMapperHcl(dnsConfigurationSplitDnsToHclTerraform, true)(this._splitDns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsConfigurationSplitDnsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
