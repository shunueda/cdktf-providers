// https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAreaConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of DNS Servers/Nameservers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area#default_nameservers NetworkArea#default_nameservers}
  */
  readonly defaultNameservers?: string[];
  /**
  * The default prefix length for networks in the network area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area#default_prefix_length NetworkArea#default_prefix_length}
  */
  readonly defaultPrefixLength?: number;
  /**
  * Labels are key-value string pairs which can be attached to a resource container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area#labels NetworkArea#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The maximal prefix length for networks in the network area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area#max_prefix_length NetworkArea#max_prefix_length}
  */
  readonly maxPrefixLength?: number;
  /**
  * The minimal prefix length for networks in the network area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area#min_prefix_length NetworkArea#min_prefix_length}
  */
  readonly minPrefixLength?: number;
  /**
  * The name of the network area.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area#name NetworkArea#name}
  */
  readonly name: string;
  /**
  * List of Network ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area#network_ranges NetworkArea#network_ranges}
  */
  readonly networkRanges: NetworkAreaNetworkRanges[] | cdktf.IResolvable;
  /**
  * STACKIT organization ID to which the network area is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area#organization_id NetworkArea#organization_id}
  */
  readonly organizationId: string;
  /**
  * Classless Inter-Domain Routing (CIDR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area#transfer_network NetworkArea#transfer_network}
  */
  readonly transferNetwork: string;
}
export interface NetworkAreaNetworkRanges {
  /**
  * Classless Inter-Domain Routing (CIDR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area#prefix NetworkArea#prefix}
  */
  readonly prefix: string;
}

export function networkAreaNetworkRangesToTerraform(struct?: NetworkAreaNetworkRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function networkAreaNetworkRangesToHclTerraform(struct?: NetworkAreaNetworkRanges | cdktf.IResolvable): any {
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

export class NetworkAreaNetworkRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkAreaNetworkRanges | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkAreaNetworkRanges | cdktf.IResolvable | undefined) {
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

export class NetworkAreaNetworkRangesList extends cdktf.ComplexList {
  public internalValue? : NetworkAreaNetworkRanges[] | cdktf.IResolvable

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
  public get(index: number): NetworkAreaNetworkRangesOutputReference {
    return new NetworkAreaNetworkRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area stackit_network_area}
*/
export class NetworkArea extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_network_area";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkArea resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkArea to import
  * @param importFromId The id of the existing NetworkArea that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkArea to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_network_area", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.69.0/docs/resources/network_area stackit_network_area} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAreaConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAreaConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_network_area',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.69.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultNameservers = config.defaultNameservers;
    this._defaultPrefixLength = config.defaultPrefixLength;
    this._labels = config.labels;
    this._maxPrefixLength = config.maxPrefixLength;
    this._minPrefixLength = config.minPrefixLength;
    this._name = config.name;
    this._networkRanges.internalValue = config.networkRanges;
    this._organizationId = config.organizationId;
    this._transferNetwork = config.transferNetwork;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // network_area_id - computed: true, optional: false, required: false
  public get networkAreaId() {
    return this.getStringAttribute('network_area_id');
  }

  // network_ranges - computed: false, optional: false, required: true
  private _networkRanges = new NetworkAreaNetworkRangesList(this, "network_ranges", false);
  public get networkRanges() {
    return this._networkRanges;
  }
  public putNetworkRanges(value: NetworkAreaNetworkRanges[] | cdktf.IResolvable) {
    this._networkRanges.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkRangesInput() {
    return this._networkRanges.internalValue;
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

  // project_count - computed: true, optional: false, required: false
  public get projectCount() {
    return this.getNumberAttribute('project_count');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultNameservers),
      default_prefix_length: cdktf.numberToTerraform(this._defaultPrefixLength),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_prefix_length: cdktf.numberToTerraform(this._maxPrefixLength),
      min_prefix_length: cdktf.numberToTerraform(this._minPrefixLength),
      name: cdktf.stringToTerraform(this._name),
      network_ranges: cdktf.listMapper(networkAreaNetworkRangesToTerraform, false)(this._networkRanges.internalValue),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      transfer_network: cdktf.stringToTerraform(this._transferNetwork),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultNameservers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_prefix_length: {
        value: cdktf.numberToHclTerraform(this._defaultPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_prefix_length: {
        value: cdktf.numberToHclTerraform(this._maxPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_prefix_length: {
        value: cdktf.numberToHclTerraform(this._minPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_ranges: {
        value: cdktf.listMapperHcl(networkAreaNetworkRangesToHclTerraform, false)(this._networkRanges.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkAreaNetworkRangesList",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transfer_network: {
        value: cdktf.stringToHclTerraform(this._transferNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
