// https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#custom_properties NetworkProfile#custom_properties}
  */
  readonly customProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#description NetworkProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#fabric_network_ids NetworkProfile#fabric_network_ids}
  */
  readonly fabricNetworkIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#id NetworkProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#isolated_external_fabric_network_id NetworkProfile#isolated_external_fabric_network_id}
  */
  readonly isolatedExternalFabricNetworkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#isolated_network_cidr_prefix NetworkProfile#isolated_network_cidr_prefix}
  */
  readonly isolatedNetworkCidrPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#isolated_network_domain_cidr NetworkProfile#isolated_network_domain_cidr}
  */
  readonly isolatedNetworkDomainCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#isolated_network_domain_id NetworkProfile#isolated_network_domain_id}
  */
  readonly isolatedNetworkDomainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#isolation_type NetworkProfile#isolation_type}
  */
  readonly isolationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#name NetworkProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#region_id NetworkProfile#region_id}
  */
  readonly regionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#security_group_ids NetworkProfile#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#tags NetworkProfile#tags}
  */
  readonly tags?: NetworkProfileTags[] | cdktf.IResolvable;
}
export interface NetworkProfileLinks {
}

export function networkProfileLinksToTerraform(struct?: NetworkProfileLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function networkProfileLinksToHclTerraform(struct?: NetworkProfileLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class NetworkProfileLinksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkProfileLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkProfileLinks | undefined) {
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

export class NetworkProfileLinksList extends cdktf.ComplexList {

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
  public get(index: number): NetworkProfileLinksOutputReference {
    return new NetworkProfileLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkProfileTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#key NetworkProfile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#value NetworkProfile#value}
  */
  readonly value: string;
}

export function networkProfileTagsToTerraform(struct?: NetworkProfileTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkProfileTagsToHclTerraform(struct?: NetworkProfileTags | cdktf.IResolvable): any {
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

export class NetworkProfileTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkProfileTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkProfileTags | cdktf.IResolvable | undefined) {
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

export class NetworkProfileTagsList extends cdktf.ComplexList {
  public internalValue? : NetworkProfileTags[] | cdktf.IResolvable

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
  public get(index: number): NetworkProfileTagsOutputReference {
    return new NetworkProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile vra_network_profile}
*/
export class NetworkProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vra_network_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkProfile to import
  * @param importFromId The id of the existing NetworkProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vra_network_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vra/0.15.0/docs/resources/network_profile vra_network_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'vra_network_profile',
      terraformGeneratorMetadata: {
        providerName: 'vra',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customProperties = config.customProperties;
    this._description = config.description;
    this._fabricNetworkIds = config.fabricNetworkIds;
    this._id = config.id;
    this._isolatedExternalFabricNetworkId = config.isolatedExternalFabricNetworkId;
    this._isolatedNetworkCidrPrefix = config.isolatedNetworkCidrPrefix;
    this._isolatedNetworkDomainCidr = config.isolatedNetworkDomainCidr;
    this._isolatedNetworkDomainId = config.isolatedNetworkDomainId;
    this._isolationType = config.isolationType;
    this._name = config.name;
    this._regionId = config.regionId;
    this._securityGroupIds = config.securityGroupIds;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_account_id - computed: true, optional: false, required: false
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_properties - computed: true, optional: true, required: false
  private _customProperties?: { [key: string]: string }; 
  public get customProperties() {
    return this.getStringMapAttribute('custom_properties');
  }
  public set customProperties(value: { [key: string]: string }) {
    this._customProperties = value;
  }
  public resetCustomProperties() {
    this._customProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties;
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

  // external_region_id - computed: true, optional: false, required: false
  public get externalRegionId() {
    return this.getStringAttribute('external_region_id');
  }

  // fabric_network_ids - computed: false, optional: true, required: false
  private _fabricNetworkIds?: string[]; 
  public get fabricNetworkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('fabric_network_ids'));
  }
  public set fabricNetworkIds(value: string[]) {
    this._fabricNetworkIds = value;
  }
  public resetFabricNetworkIds() {
    this._fabricNetworkIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNetworkIdsInput() {
    return this._fabricNetworkIds;
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

  // isolated_external_fabric_network_id - computed: false, optional: true, required: false
  private _isolatedExternalFabricNetworkId?: string; 
  public get isolatedExternalFabricNetworkId() {
    return this.getStringAttribute('isolated_external_fabric_network_id');
  }
  public set isolatedExternalFabricNetworkId(value: string) {
    this._isolatedExternalFabricNetworkId = value;
  }
  public resetIsolatedExternalFabricNetworkId() {
    this._isolatedExternalFabricNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedExternalFabricNetworkIdInput() {
    return this._isolatedExternalFabricNetworkId;
  }

  // isolated_network_cidr_prefix - computed: false, optional: true, required: false
  private _isolatedNetworkCidrPrefix?: number; 
  public get isolatedNetworkCidrPrefix() {
    return this.getNumberAttribute('isolated_network_cidr_prefix');
  }
  public set isolatedNetworkCidrPrefix(value: number) {
    this._isolatedNetworkCidrPrefix = value;
  }
  public resetIsolatedNetworkCidrPrefix() {
    this._isolatedNetworkCidrPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedNetworkCidrPrefixInput() {
    return this._isolatedNetworkCidrPrefix;
  }

  // isolated_network_domain_cidr - computed: false, optional: true, required: false
  private _isolatedNetworkDomainCidr?: string; 
  public get isolatedNetworkDomainCidr() {
    return this.getStringAttribute('isolated_network_domain_cidr');
  }
  public set isolatedNetworkDomainCidr(value: string) {
    this._isolatedNetworkDomainCidr = value;
  }
  public resetIsolatedNetworkDomainCidr() {
    this._isolatedNetworkDomainCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedNetworkDomainCidrInput() {
    return this._isolatedNetworkDomainCidr;
  }

  // isolated_network_domain_id - computed: false, optional: true, required: false
  private _isolatedNetworkDomainId?: string; 
  public get isolatedNetworkDomainId() {
    return this.getStringAttribute('isolated_network_domain_id');
  }
  public set isolatedNetworkDomainId(value: string) {
    this._isolatedNetworkDomainId = value;
  }
  public resetIsolatedNetworkDomainId() {
    this._isolatedNetworkDomainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedNetworkDomainIdInput() {
    return this._isolatedNetworkDomainId;
  }

  // isolation_type - computed: false, optional: true, required: false
  private _isolationType?: string; 
  public get isolationType() {
    return this.getStringAttribute('isolation_type');
  }
  public set isolationType(value: string) {
    this._isolationType = value;
  }
  public resetIsolationType() {
    this._isolationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationTypeInput() {
    return this._isolationType;
  }

  // links - computed: true, optional: false, required: false
  private _links = new NetworkProfileLinksList(this, "links", true);
  public get links() {
    return this._links;
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

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new NetworkProfileTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: NetworkProfileTags[] | cdktf.IResolvable) {
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
      custom_properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._customProperties),
      description: cdktf.stringToTerraform(this._description),
      fabric_network_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fabricNetworkIds),
      id: cdktf.stringToTerraform(this._id),
      isolated_external_fabric_network_id: cdktf.stringToTerraform(this._isolatedExternalFabricNetworkId),
      isolated_network_cidr_prefix: cdktf.numberToTerraform(this._isolatedNetworkCidrPrefix),
      isolated_network_domain_cidr: cdktf.stringToTerraform(this._isolatedNetworkDomainCidr),
      isolated_network_domain_id: cdktf.stringToTerraform(this._isolatedNetworkDomainId),
      isolation_type: cdktf.stringToTerraform(this._isolationType),
      name: cdktf.stringToTerraform(this._name),
      region_id: cdktf.stringToTerraform(this._regionId),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      tags: cdktf.listMapper(networkProfileTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customProperties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_network_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fabricNetworkIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isolated_external_fabric_network_id: {
        value: cdktf.stringToHclTerraform(this._isolatedExternalFabricNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isolated_network_cidr_prefix: {
        value: cdktf.numberToHclTerraform(this._isolatedNetworkCidrPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isolated_network_domain_cidr: {
        value: cdktf.stringToHclTerraform(this._isolatedNetworkDomainCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isolated_network_domain_id: {
        value: cdktf.stringToHclTerraform(this._isolatedNetworkDomainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      isolation_type: {
        value: cdktf.stringToHclTerraform(this._isolationType),
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
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(networkProfileTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkProfileTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
