// https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_network_address_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpennebulaVirtualNetworkAddressRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_network_address_ranges#id DataOpennebulaVirtualNetworkAddressRanges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_network_address_ranges#virtual_network_id DataOpennebulaVirtualNetworkAddressRanges#virtual_network_id}
  */
  readonly virtualNetworkId: number;
}
export interface DataOpennebulaVirtualNetworkAddressRangesAddressRanges {
}

export function dataOpennebulaVirtualNetworkAddressRangesAddressRangesToTerraform(struct?: DataOpennebulaVirtualNetworkAddressRangesAddressRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpennebulaVirtualNetworkAddressRangesAddressRangesToHclTerraform(struct?: DataOpennebulaVirtualNetworkAddressRangesAddressRanges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpennebulaVirtualNetworkAddressRangesAddressRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpennebulaVirtualNetworkAddressRangesAddressRanges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpennebulaVirtualNetworkAddressRangesAddressRanges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ar_type - computed: true, optional: false, required: false
  public get arType() {
    return this.getStringAttribute('ar_type');
  }

  // custom - computed: true, optional: false, required: false
  private _custom = new cdktf.StringMap(this, "custom");
  public get custom() {
    return this._custom;
  }

  // global_prefix - computed: true, optional: false, required: false
  public get globalPrefix() {
    return this.getStringAttribute('global_prefix');
  }

  // held_ips - computed: true, optional: false, required: false
  public get heldIps() {
    return cdktf.Fn.tolist(this.getListAttribute('held_ips'));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip4 - computed: true, optional: false, required: false
  public get ip4() {
    return this.getStringAttribute('ip4');
  }

  // ip4_end - computed: true, optional: false, required: false
  public get ip4End() {
    return this.getStringAttribute('ip4_end');
  }

  // ip6 - computed: true, optional: false, required: false
  public get ip6() {
    return this.getStringAttribute('ip6');
  }

  // ip6_end - computed: true, optional: false, required: false
  public get ip6End() {
    return this.getStringAttribute('ip6_end');
  }

  // ip6_global - computed: true, optional: false, required: false
  public get ip6Global() {
    return this.getStringAttribute('ip6_global');
  }

  // ip6_global_end - computed: true, optional: false, required: false
  public get ip6GlobalEnd() {
    return this.getStringAttribute('ip6_global_end');
  }

  // ip6_ula - computed: true, optional: false, required: false
  public get ip6Ula() {
    return this.getStringAttribute('ip6_ula');
  }

  // ip6_ula_end - computed: true, optional: false, required: false
  public get ip6UlaEnd() {
    return this.getStringAttribute('ip6_ula_end');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // mac_end - computed: true, optional: false, required: false
  public get macEnd() {
    return this.getStringAttribute('mac_end');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // ula_prefix - computed: true, optional: false, required: false
  public get ulaPrefix() {
    return this.getStringAttribute('ula_prefix');
  }
}

export class DataOpennebulaVirtualNetworkAddressRangesAddressRangesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpennebulaVirtualNetworkAddressRangesAddressRangesOutputReference {
    return new DataOpennebulaVirtualNetworkAddressRangesAddressRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_network_address_ranges opennebula_virtual_network_address_ranges}
*/
export class DataOpennebulaVirtualNetworkAddressRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opennebula_virtual_network_address_ranges";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpennebulaVirtualNetworkAddressRanges resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpennebulaVirtualNetworkAddressRanges to import
  * @param importFromId The id of the existing DataOpennebulaVirtualNetworkAddressRanges that should be imported. Refer to the {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_network_address_ranges#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpennebulaVirtualNetworkAddressRanges to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opennebula_virtual_network_address_ranges", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opennebula/opennebula/1.5.0/docs/data-sources/virtual_network_address_ranges opennebula_virtual_network_address_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpennebulaVirtualNetworkAddressRangesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpennebulaVirtualNetworkAddressRangesConfig) {
    super(scope, id, {
      terraformResourceType: 'opennebula_virtual_network_address_ranges',
      terraformGeneratorMetadata: {
        providerName: 'opennebula',
        providerVersion: '1.5.0'
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
    this._virtualNetworkId = config.virtualNetworkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_ranges - computed: true, optional: false, required: false
  private _addressRanges = new DataOpennebulaVirtualNetworkAddressRangesAddressRangesList(this, "address_ranges", false);
  public get addressRanges() {
    return this._addressRanges;
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

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId?: number; 
  public get virtualNetworkId() {
    return this.getNumberAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: number) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      virtual_network_id: cdktf.numberToTerraform(this._virtualNetworkId),
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
      virtual_network_id: {
        value: cdktf.numberToHclTerraform(this._virtualNetworkId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
