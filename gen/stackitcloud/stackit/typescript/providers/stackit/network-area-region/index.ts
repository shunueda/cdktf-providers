// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAreaRegionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The regional IPv4 config of a network area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#ipv4 NetworkAreaRegion#ipv4}
  */
  readonly ipv4: NetworkAreaRegionIpv4;
  /**
  * The network area ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#network_area_id NetworkAreaRegion#network_area_id}
  */
  readonly networkAreaId: string;
  /**
  * STACKIT organization ID to which the network area is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#organization_id NetworkAreaRegion#organization_id}
  */
  readonly organizationId: string;
  /**
  * The resource region. If not defined, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#region NetworkAreaRegion#region}
  */
  readonly region?: string;
}
export interface NetworkAreaRegionIpv4NetworkRanges {
  /**
  * Classless Inter-Domain Routing (CIDR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#prefix NetworkAreaRegion#prefix}
  */
  readonly prefix: string;
}

export function networkAreaRegionIpv4NetworkRangesToTerraform(struct?: NetworkAreaRegionIpv4NetworkRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function networkAreaRegionIpv4NetworkRangesToHclTerraform(struct?: NetworkAreaRegionIpv4NetworkRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAreaRegionIpv4NetworkRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkAreaRegionIpv4NetworkRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAreaRegionIpv4NetworkRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
    }
  }

  // network_range_id - computed: true, optional: false, required: false
  public get networkRangeId() {
    return this.getStringAttribute('network_range_id');
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class NetworkAreaRegionIpv4NetworkRangesList extends cdktf.ComplexList {
  public internalValue? : NetworkAreaRegionIpv4NetworkRanges[] | cdktf.IResolvable

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
  public get(index: number): NetworkAreaRegionIpv4NetworkRangesOutputReference {
    return new NetworkAreaRegionIpv4NetworkRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkAreaRegionIpv4 {
  /**
  * List of DNS Servers/Nameservers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#default_nameservers NetworkAreaRegion#default_nameservers}
  */
  readonly defaultNameservers?: string[];
  /**
  * The default prefix length for networks in the network area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#default_prefix_length NetworkAreaRegion#default_prefix_length}
  */
  readonly defaultPrefixLength?: number;
  /**
  * The maximal prefix length for networks in the network area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#max_prefix_length NetworkAreaRegion#max_prefix_length}
  */
  readonly maxPrefixLength?: number;
  /**
  * The minimal prefix length for networks in the network area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#min_prefix_length NetworkAreaRegion#min_prefix_length}
  */
  readonly minPrefixLength?: number;
  /**
  * List of Network ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#network_ranges NetworkAreaRegion#network_ranges}
  */
  readonly networkRanges: NetworkAreaRegionIpv4NetworkRanges[] | cdktf.IResolvable;
  /**
  * IPv4 Classless Inter-Domain Routing (CIDR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#transfer_network NetworkAreaRegion#transfer_network}
  */
  readonly transferNetwork: string;
}

export function networkAreaRegionIpv4ToTerraform(struct?: NetworkAreaRegionIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultNameservers),
    default_prefix_length: cdktf.numberToTerraform(struct!.defaultPrefixLength),
    max_prefix_length: cdktf.numberToTerraform(struct!.maxPrefixLength),
    min_prefix_length: cdktf.numberToTerraform(struct!.minPrefixLength),
    network_ranges: cdktf.listMapper(networkAreaRegionIpv4NetworkRangesToTerraform, false)(struct!.networkRanges),
    transfer_network: cdktf.stringToTerraform(struct!.transferNetwork),
  }
}


export function networkAreaRegionIpv4ToHclTerraform(struct?: NetworkAreaRegionIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultNameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.defaultPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.maxPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.minPrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_ranges: {
      value: cdktf.listMapperHcl(networkAreaRegionIpv4NetworkRangesToHclTerraform, false)(struct!.networkRanges),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkAreaRegionIpv4NetworkRangesList",
    },
    transfer_network: {
      value: cdktf.stringToHclTerraform(struct!.transferNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAreaRegionIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkAreaRegionIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultNameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultNameservers = this._defaultNameservers;
    }
    if (this._defaultPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPrefixLength = this._defaultPrefixLength;
    }
    if (this._maxPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrefixLength = this._maxPrefixLength;
    }
    if (this._minPrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPrefixLength = this._minPrefixLength;
    }
    if (this._networkRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkRanges = this._networkRanges?.internalValue;
    }
    if (this._transferNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferNetwork = this._transferNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAreaRegionIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultNameservers = undefined;
      this._defaultPrefixLength = undefined;
      this._maxPrefixLength = undefined;
      this._minPrefixLength = undefined;
      this._networkRanges.internalValue = undefined;
      this._transferNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultNameservers = value.defaultNameservers;
      this._defaultPrefixLength = value.defaultPrefixLength;
      this._maxPrefixLength = value.maxPrefixLength;
      this._minPrefixLength = value.minPrefixLength;
      this._networkRanges.internalValue = value.networkRanges;
      this._transferNetwork = value.transferNetwork;
    }
  }

  // default_nameservers - computed: false, optional: true, required: false
  private _defaultNameservers?: string[]; 
  public get defaultNameservers() {
    return this.getListAttribute('default_nameservers');
  }
  public set defaultNameservers(value: string[]) {
    this._defaultNameservers = value;
  }
  public resetDefaultNameservers() {
    this._defaultNameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNameserversInput() {
    return this._defaultNameservers;
  }

  // default_prefix_length - computed: true, optional: true, required: false
  private _defaultPrefixLength?: number; 
  public get defaultPrefixLength() {
    return this.getNumberAttribute('default_prefix_length');
  }
  public set defaultPrefixLength(value: number) {
    this._defaultPrefixLength = value;
  }
  public resetDefaultPrefixLength() {
    this._defaultPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPrefixLengthInput() {
    return this._defaultPrefixLength;
  }

  // max_prefix_length - computed: true, optional: true, required: false
  private _maxPrefixLength?: number; 
  public get maxPrefixLength() {
    return this.getNumberAttribute('max_prefix_length');
  }
  public set maxPrefixLength(value: number) {
    this._maxPrefixLength = value;
  }
  public resetMaxPrefixLength() {
    this._maxPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPrefixLengthInput() {
    return this._maxPrefixLength;
  }

  // min_prefix_length - computed: true, optional: true, required: false
  private _minPrefixLength?: number; 
  public get minPrefixLength() {
    return this.getNumberAttribute('min_prefix_length');
  }
  public set minPrefixLength(value: number) {
    this._minPrefixLength = value;
  }
  public resetMinPrefixLength() {
    this._minPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPrefixLengthInput() {
    return this._minPrefixLength;
  }

  // network_ranges - computed: false, optional: false, required: true
  private _networkRanges = new NetworkAreaRegionIpv4NetworkRangesList(this, "network_ranges", false);
  public get networkRanges() {
    return this._networkRanges;
  }
  public putNetworkRanges(value: NetworkAreaRegionIpv4NetworkRanges[] | cdktf.IResolvable) {
    this._networkRanges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRangesInput() {
    return this._networkRanges.internalValue;
  }

  // transfer_network - computed: false, optional: false, required: true
  private _transferNetwork?: string; 
  public get transferNetwork() {
    return this.getStringAttribute('transfer_network');
  }
  public set transferNetwork(value: string) {
    this._transferNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transferNetworkInput() {
    return this._transferNetwork;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region stackit_network_area_region}
*/
export class NetworkAreaRegion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_network_area_region";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkAreaRegion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkAreaRegion to import
  * @param importFromId The id of the existing NetworkAreaRegion that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkAreaRegion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_network_area_region", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/network_area_region stackit_network_area_region} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAreaRegionConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAreaRegionConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_network_area_region',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ipv4.internalValue = config.ipv4;
    this._networkAreaId = config.networkAreaId;
    this._organizationId = config.organizationId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4 = new NetworkAreaRegionIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: NetworkAreaRegionIpv4) {
    this._ipv4.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // network_area_id - computed: false, optional: false, required: true
  private _networkAreaId?: string; 
  public get networkAreaId() {
    return this.getStringAttribute('network_area_id');
  }
  public set networkAreaId(value: string) {
    this._networkAreaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAreaIdInput() {
    return this._networkAreaId;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ipv4: networkAreaRegionIpv4ToTerraform(this._ipv4.internalValue),
      network_area_id: cdktf.stringToTerraform(this._networkAreaId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ipv4: {
        value: networkAreaRegionIpv4ToHclTerraform(this._ipv4.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkAreaRegionIpv4",
      },
      network_area_id: {
        value: cdktf.stringToHclTerraform(this._networkAreaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
