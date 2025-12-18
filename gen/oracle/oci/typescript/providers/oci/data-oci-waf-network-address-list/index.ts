// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/waf_network_address_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWafNetworkAddressListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/waf_network_address_list#network_address_list_id DataOciWafNetworkAddressList#network_address_list_id}
  */
  readonly networkAddressListId: string;
}
export interface DataOciWafNetworkAddressListVcnAddresses {
}

export function dataOciWafNetworkAddressListVcnAddressesToTerraform(struct?: DataOciWafNetworkAddressListVcnAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafNetworkAddressListVcnAddressesToHclTerraform(struct?: DataOciWafNetworkAddressListVcnAddresses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafNetworkAddressListVcnAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafNetworkAddressListVcnAddresses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafNetworkAddressListVcnAddresses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addresses - computed: true, optional: false, required: false
  public get addresses() {
    return this.getStringAttribute('addresses');
  }

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}

export class DataOciWafNetworkAddressListVcnAddressesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafNetworkAddressListVcnAddressesOutputReference {
    return new DataOciWafNetworkAddressListVcnAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/waf_network_address_list oci_waf_network_address_list}
*/
export class DataOciWafNetworkAddressList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_waf_network_address_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciWafNetworkAddressList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciWafNetworkAddressList to import
  * @param importFromId The id of the existing DataOciWafNetworkAddressList that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/waf_network_address_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciWafNetworkAddressList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_waf_network_address_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/waf_network_address_list oci_waf_network_address_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWafNetworkAddressListConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciWafNetworkAddressListConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waf_network_address_list',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkAddressListId = config.networkAddressListId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: true, optional: false, required: false
  public get addresses() {
    return this.getListAttribute('addresses');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // network_address_list_id - computed: false, optional: false, required: true
  private _networkAddressListId?: string; 
  public get networkAddressListId() {
    return this.getStringAttribute('network_address_list_id');
  }
  public set networkAddressListId(value: string) {
    this._networkAddressListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAddressListIdInput() {
    return this._networkAddressListId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vcn_addresses - computed: true, optional: false, required: false
  private _vcnAddresses = new DataOciWafNetworkAddressListVcnAddressesList(this, "vcn_addresses", false);
  public get vcnAddresses() {
    return this._vcnAddresses;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_address_list_id: cdktf.stringToTerraform(this._networkAddressListId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_address_list_id: {
        value: cdktf.stringToHclTerraform(this._networkAddressListId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
