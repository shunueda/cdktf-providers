import * as cdktf from 'cdktf';
import { FloatingIpV2VpcLinksList,
FloatingIpV2VpcSnatIpsList,
FloatingIpV2VpcCommonDhcpOptions,
floatingIpV2VpcCommonDhcpOptionsToTerraform,
floatingIpV2VpcCommonDhcpOptionsToHclTerraform,
FloatingIpV2VpcCommonDhcpOptionsList,
FloatingIpV2VpcExternalSubnets,
floatingIpV2VpcExternalSubnetsToTerraform,
floatingIpV2VpcExternalSubnetsToHclTerraform,
FloatingIpV2VpcExternalSubnetsList,
FloatingIpV2VpcExternallyRoutablePrefixes,
floatingIpV2VpcExternallyRoutablePrefixesToTerraform,
floatingIpV2VpcExternallyRoutablePrefixesToHclTerraform,
FloatingIpV2VpcExternallyRoutablePrefixesList,
FloatingIpV2VpcMetadata,
floatingIpV2VpcMetadataToTerraform,
floatingIpV2VpcMetadataToHclTerraform,
FloatingIpV2VpcMetadataList } from './structs0'
export interface FloatingIpV2Vpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#description FloatingIpV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#ext_id FloatingIpV2#ext_id}
  */
  readonly extId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#external_routing_domain_reference FloatingIpV2#external_routing_domain_reference}
  */
  readonly externalRoutingDomainReference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#name FloatingIpV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#vpc_type FloatingIpV2#vpc_type}
  */
  readonly vpcType?: string;
  /**
  * common_dhcp_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#common_dhcp_options FloatingIpV2#common_dhcp_options}
  */
  readonly commonDhcpOptions?: FloatingIpV2VpcCommonDhcpOptions[] | cdktf.IResolvable;
  /**
  * external_subnets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#external_subnets FloatingIpV2#external_subnets}
  */
  readonly externalSubnets?: FloatingIpV2VpcExternalSubnets[] | cdktf.IResolvable;
  /**
  * externally_routable_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#externally_routable_prefixes FloatingIpV2#externally_routable_prefixes}
  */
  readonly externallyRoutablePrefixes?: FloatingIpV2VpcExternallyRoutablePrefixes[] | cdktf.IResolvable;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.4/docs/resources/floating_ip_v2#metadata FloatingIpV2#metadata}
  */
  readonly metadata?: FloatingIpV2VpcMetadata[] | cdktf.IResolvable;
}

export function floatingIpV2VpcToTerraform(struct?: FloatingIpV2Vpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    ext_id: cdktf.stringToTerraform(struct!.extId),
    external_routing_domain_reference: cdktf.stringToTerraform(struct!.externalRoutingDomainReference),
    name: cdktf.stringToTerraform(struct!.name),
    vpc_type: cdktf.stringToTerraform(struct!.vpcType),
    common_dhcp_options: cdktf.listMapper(floatingIpV2VpcCommonDhcpOptionsToTerraform, true)(struct!.commonDhcpOptions),
    external_subnets: cdktf.listMapper(floatingIpV2VpcExternalSubnetsToTerraform, true)(struct!.externalSubnets),
    externally_routable_prefixes: cdktf.listMapper(floatingIpV2VpcExternallyRoutablePrefixesToTerraform, true)(struct!.externallyRoutablePrefixes),
    metadata: cdktf.listMapper(floatingIpV2VpcMetadataToTerraform, true)(struct!.metadata),
  }
}


export function floatingIpV2VpcToHclTerraform(struct?: FloatingIpV2Vpc | cdktf.IResolvable): any {
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
    ext_id: {
      value: cdktf.stringToHclTerraform(struct!.extId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_routing_domain_reference: {
      value: cdktf.stringToHclTerraform(struct!.externalRoutingDomainReference),
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
    vpc_type: {
      value: cdktf.stringToHclTerraform(struct!.vpcType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_dhcp_options: {
      value: cdktf.listMapperHcl(floatingIpV2VpcCommonDhcpOptionsToHclTerraform, true)(struct!.commonDhcpOptions),
      isBlock: true,
      type: "list",
      storageClassType: "FloatingIpV2VpcCommonDhcpOptionsList",
    },
    external_subnets: {
      value: cdktf.listMapperHcl(floatingIpV2VpcExternalSubnetsToHclTerraform, true)(struct!.externalSubnets),
      isBlock: true,
      type: "list",
      storageClassType: "FloatingIpV2VpcExternalSubnetsList",
    },
    externally_routable_prefixes: {
      value: cdktf.listMapperHcl(floatingIpV2VpcExternallyRoutablePrefixesToHclTerraform, true)(struct!.externallyRoutablePrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "FloatingIpV2VpcExternallyRoutablePrefixesList",
    },
    metadata: {
      value: cdktf.listMapperHcl(floatingIpV2VpcMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "FloatingIpV2VpcMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FloatingIpV2VpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FloatingIpV2Vpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._extId !== undefined) {
      hasAnyValues = true;
      internalValueResult.extId = this._extId;
    }
    if (this._externalRoutingDomainReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalRoutingDomainReference = this._externalRoutingDomainReference;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vpcType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcType = this._vpcType;
    }
    if (this._commonDhcpOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonDhcpOptions = this._commonDhcpOptions?.internalValue;
    }
    if (this._externalSubnets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSubnets = this._externalSubnets?.internalValue;
    }
    if (this._externallyRoutablePrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externallyRoutablePrefixes = this._externallyRoutablePrefixes?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FloatingIpV2Vpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._extId = undefined;
      this._externalRoutingDomainReference = undefined;
      this._name = undefined;
      this._vpcType = undefined;
      this._commonDhcpOptions.internalValue = undefined;
      this._externalSubnets.internalValue = undefined;
      this._externallyRoutablePrefixes.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._extId = value.extId;
      this._externalRoutingDomainReference = value.externalRoutingDomainReference;
      this._name = value.name;
      this._vpcType = value.vpcType;
      this._commonDhcpOptions.internalValue = value.commonDhcpOptions;
      this._externalSubnets.internalValue = value.externalSubnets;
      this._externallyRoutablePrefixes.internalValue = value.externallyRoutablePrefixes;
      this._metadata.internalValue = value.metadata;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // ext_id - computed: true, optional: true, required: false
  private _extId?: string; 
  public get extId() {
    return this.getStringAttribute('ext_id');
  }
  public set extId(value: string) {
    this._extId = value;
  }
  public resetExtId() {
    this._extId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extIdInput() {
    return this._extId;
  }

  // external_routing_domain_reference - computed: true, optional: true, required: false
  private _externalRoutingDomainReference?: string; 
  public get externalRoutingDomainReference() {
    return this.getStringAttribute('external_routing_domain_reference');
  }
  public set externalRoutingDomainReference(value: string) {
    this._externalRoutingDomainReference = value;
  }
  public resetExternalRoutingDomainReference() {
    this._externalRoutingDomainReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRoutingDomainReferenceInput() {
    return this._externalRoutingDomainReference;
  }

  // links - computed: true, optional: false, required: false
  private _links = new FloatingIpV2VpcLinksList(this, "links", false);
  public get links() {
    return this._links;
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

  // snat_ips - computed: true, optional: false, required: false
  private _snatIps = new FloatingIpV2VpcSnatIpsList(this, "snat_ips", false);
  public get snatIps() {
    return this._snatIps;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // vpc_type - computed: true, optional: true, required: false
  private _vpcType?: string; 
  public get vpcType() {
    return this.getStringAttribute('vpc_type');
  }
  public set vpcType(value: string) {
    this._vpcType = value;
  }
  public resetVpcType() {
    this._vpcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcTypeInput() {
    return this._vpcType;
  }

  // common_dhcp_options - computed: false, optional: true, required: false
  private _commonDhcpOptions = new FloatingIpV2VpcCommonDhcpOptionsList(this, "common_dhcp_options", false);
  public get commonDhcpOptions() {
    return this._commonDhcpOptions;
  }
  public putCommonDhcpOptions(value: FloatingIpV2VpcCommonDhcpOptions[] | cdktf.IResolvable) {
    this._commonDhcpOptions.internalValue = value;
  }
  public resetCommonDhcpOptions() {
    this._commonDhcpOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonDhcpOptionsInput() {
    return this._commonDhcpOptions.internalValue;
  }

  // external_subnets - computed: false, optional: true, required: false
  private _externalSubnets = new FloatingIpV2VpcExternalSubnetsList(this, "external_subnets", false);
  public get externalSubnets() {
    return this._externalSubnets;
  }
  public putExternalSubnets(value: FloatingIpV2VpcExternalSubnets[] | cdktf.IResolvable) {
    this._externalSubnets.internalValue = value;
  }
  public resetExternalSubnets() {
    this._externalSubnets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSubnetsInput() {
    return this._externalSubnets.internalValue;
  }

  // externally_routable_prefixes - computed: false, optional: true, required: false
  private _externallyRoutablePrefixes = new FloatingIpV2VpcExternallyRoutablePrefixesList(this, "externally_routable_prefixes", false);
  public get externallyRoutablePrefixes() {
    return this._externallyRoutablePrefixes;
  }
  public putExternallyRoutablePrefixes(value: FloatingIpV2VpcExternallyRoutablePrefixes[] | cdktf.IResolvable) {
    this._externallyRoutablePrefixes.internalValue = value;
  }
  public resetExternallyRoutablePrefixes() {
    this._externallyRoutablePrefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externallyRoutablePrefixesInput() {
    return this._externallyRoutablePrefixes.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new FloatingIpV2VpcMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: FloatingIpV2VpcMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class FloatingIpV2VpcList extends cdktf.ComplexList {
  public internalValue? : FloatingIpV2Vpc[] | cdktf.IResolvable

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
  public get(index: number): FloatingIpV2VpcOutputReference {
    return new FloatingIpV2VpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
