// https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/network_area
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitNetworkAreaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The network area ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/network_area#network_area_id DataStackitNetworkArea#network_area_id}
  */
  readonly networkAreaId: string;
  /**
  * STACKIT organization ID to which the network area is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/network_area#organization_id DataStackitNetworkArea#organization_id}
  */
  readonly organizationId: string;
}
export interface DataStackitNetworkAreaNetworkRanges {
}

export function dataStackitNetworkAreaNetworkRangesToTerraform(struct?: DataStackitNetworkAreaNetworkRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitNetworkAreaNetworkRangesToHclTerraform(struct?: DataStackitNetworkAreaNetworkRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitNetworkAreaNetworkRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStackitNetworkAreaNetworkRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitNetworkAreaNetworkRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // network_range_id - computed: true, optional: false, required: false
  public get networkRangeId() {
    return this.getStringAttribute('network_range_id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
}

export class DataStackitNetworkAreaNetworkRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataStackitNetworkAreaNetworkRangesOutputReference {
    return new DataStackitNetworkAreaNetworkRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/network_area stackit_network_area}
*/
export class DataStackitNetworkArea extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_network_area";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitNetworkArea resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitNetworkArea to import
  * @param importFromId The id of the existing DataStackitNetworkArea that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/network_area#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitNetworkArea to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_network_area", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.75.0/docs/data-sources/network_area stackit_network_area} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitNetworkAreaConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitNetworkAreaConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_network_area',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.75.0',
        providerVersionConstraint: '0.75.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkAreaId = config.networkAreaId;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_nameservers - computed: true, optional: false, required: false
  public get defaultNameservers() {
    return this.getListAttribute('default_nameservers');
  }

  // default_prefix_length - computed: true, optional: false, required: false
  public get defaultPrefixLength() {
    return this.getNumberAttribute('default_prefix_length');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // max_prefix_length - computed: true, optional: false, required: false
  public get maxPrefixLength() {
    return this.getNumberAttribute('max_prefix_length');
  }

  // min_prefix_length - computed: true, optional: false, required: false
  public get minPrefixLength() {
    return this.getNumberAttribute('min_prefix_length');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // network_ranges - computed: true, optional: false, required: false
  private _networkRanges = new DataStackitNetworkAreaNetworkRangesList(this, "network_ranges", false);
  public get networkRanges() {
    return this._networkRanges;
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

  // transfer_network - computed: true, optional: false, required: false
  public get transferNetwork() {
    return this.getStringAttribute('transfer_network');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_area_id: cdktf.stringToTerraform(this._networkAreaId),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
