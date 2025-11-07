// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FabricNetworkVsphereConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#cidr FabricNetworkVsphere#cidr}
  */
  readonly cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#default_gateway FabricNetworkVsphere#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#default_ipv6_gateway FabricNetworkVsphere#default_ipv6_gateway}
  */
  readonly defaultIpv6Gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#dns_search_domains FabricNetworkVsphere#dns_search_domains}
  */
  readonly dnsSearchDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#dns_server_addresses FabricNetworkVsphere#dns_server_addresses}
  */
  readonly dnsServerAddresses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#domain FabricNetworkVsphere#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#id FabricNetworkVsphere#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#ipv6_cidr FabricNetworkVsphere#ipv6_cidr}
  */
  readonly ipv6Cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#is_default FabricNetworkVsphere#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#is_public FabricNetworkVsphere#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#tags FabricNetworkVsphere#tags}
  */
  readonly tags?: FabricNetworkVsphereTags[] | cdktf.IResolvable;
}
export interface FabricNetworkVsphereLinks {
}

export function fabricNetworkVsphereLinksToTerraform(struct?: FabricNetworkVsphereLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function fabricNetworkVsphereLinksToHclTerraform(struct?: FabricNetworkVsphereLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class FabricNetworkVsphereLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricNetworkVsphereLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricNetworkVsphereLinks | undefined) {
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

  // hrefs - computed: true, optional: false, required: false
  public get hrefs() {
    return cdktf.Fn.tolist(this.getListAttribute('hrefs'));
  }

  // rel - computed: true, optional: false, required: false
  public get rel() {
    return this.getStringAttribute('rel');
  }
}

export class FabricNetworkVsphereLinksList extends cdktf.ComplexList {

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
  public get(index: number): FabricNetworkVsphereLinksOutputReference {
    return new FabricNetworkVsphereLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FabricNetworkVsphereTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#key FabricNetworkVsphere#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#value FabricNetworkVsphere#value}
  */
  readonly value: string;
}

export function fabricNetworkVsphereTagsToTerraform(struct?: FabricNetworkVsphereTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function fabricNetworkVsphereTagsToHclTerraform(struct?: FabricNetworkVsphereTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FabricNetworkVsphereTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FabricNetworkVsphereTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FabricNetworkVsphereTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class FabricNetworkVsphereTagsList extends cdktf.ComplexList {
  public internalValue? : FabricNetworkVsphereTags[] | cdktf.IResolvable

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
  public get(index: number): FabricNetworkVsphereTagsOutputReference {
    return new FabricNetworkVsphereTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere vra_fabric_network_vsphere}
*/
export class FabricNetworkVsphere extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_fabric_network_vsphere";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FabricNetworkVsphere resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FabricNetworkVsphere to import
  * @param importFromId The id of the existing FabricNetworkVsphere that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FabricNetworkVsphere to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_fabric_network_vsphere", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/fabric_network_vsphere vra_fabric_network_vsphere} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FabricNetworkVsphereConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FabricNetworkVsphereConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vra_fabric_network_vsphere',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cidr = config.cidr;
    this._defaultGateway = config.defaultGateway;
    this._defaultIpv6Gateway = config.defaultIpv6Gateway;
    this._dnsSearchDomains = config.dnsSearchDomains;
    this._dnsServerAddresses = config.dnsServerAddresses;
    this._domain = config.domain;
    this._id = config.id;
    this._ipv6Cidr = config.ipv6Cidr;
    this._isDefault = config.isDefault;
    this._isPublic = config.isPublic;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: true, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // cloud_account_ids - computed: true, optional: false, required: false
  public get cloudAccountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('cloud_account_ids'));
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_properties - computed: true, optional: false, required: false
  private _customProperties = new cdktf.StringMap(this, "custom_properties");
  public get customProperties() {
    return this._customProperties;
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

  // default_ipv6_gateway - computed: true, optional: true, required: false
  private _defaultIpv6Gateway?: string; 
  public get defaultIpv6Gateway() {
    return this.getStringAttribute('default_ipv6_gateway');
  }
  public set defaultIpv6Gateway(value: string) {
    this._defaultIpv6Gateway = value;
  }
  public resetDefaultIpv6Gateway() {
    this._defaultIpv6Gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultIpv6GatewayInput() {
    return this._defaultIpv6Gateway;
  }

  // dns_search_domains - computed: true, optional: true, required: false
  private _dnsSearchDomains?: string[]; 
  public get dnsSearchDomains() {
    return this.getListAttribute('dns_search_domains');
  }
  public set dnsSearchDomains(value: string[]) {
    this._dnsSearchDomains = value;
  }
  public resetDnsSearchDomains() {
    this._dnsSearchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchDomainsInput() {
    return this._dnsSearchDomains;
  }

  // dns_server_addresses - computed: true, optional: true, required: false
  private _dnsServerAddresses?: string[]; 
  public get dnsServerAddresses() {
    return this.getListAttribute('dns_server_addresses');
  }
  public set dnsServerAddresses(value: string[]) {
    this._dnsServerAddresses = value;
  }
  public resetDnsServerAddresses() {
    this._dnsServerAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerAddressesInput() {
    return this._dnsServerAddresses;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // external_region_id - computed: true, optional: false, required: false
  public get externalRegionId() {
    return this.getStringAttribute('external_region_id');
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

  // ipv6_cidr - computed: false, optional: true, required: false
  private _ipv6Cidr?: string; 
  public get ipv6Cidr() {
    return this.getStringAttribute('ipv6_cidr');
  }
  public set ipv6Cidr(value: string) {
    this._ipv6Cidr = value;
  }
  public resetIpv6Cidr() {
    this._ipv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrInput() {
    return this._ipv6Cidr;
  }

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // links - computed: true, optional: false, required: false
  private _links = new FabricNetworkVsphereLinksList(this, "links", true);
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new FabricNetworkVsphereTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: FabricNetworkVsphereTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cidr: cdktf.stringToTerraform(this._cidr),
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      default_ipv6_gateway: cdktf.stringToTerraform(this._defaultIpv6Gateway),
      dns_search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsSearchDomains),
      dns_server_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsServerAddresses),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      ipv6_cidr: cdktf.stringToTerraform(this._ipv6Cidr),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      tags: cdktf.listMapper(fabricNetworkVsphereTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ipv6_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultIpv6Gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_search_domains: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsSearchDomains),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dns_server_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsServerAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      ipv6_cidr: {
        value: cdktf.stringToHclTerraform(this._ipv6Cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_public: {
        value: cdktf.booleanToHclTerraform(this._isPublic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(fabricNetworkVsphereTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FabricNetworkVsphereTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
