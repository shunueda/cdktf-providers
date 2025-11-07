// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/vlannetworks_info
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOmeVlannetworksInfoConfig extends cdktf.TerraformMetaArguments {
}
export interface DataOmeVlannetworksInfoVlanNetworks {
}

export function dataOmeVlannetworksInfoVlanNetworksToTerraform(struct?: DataOmeVlannetworksInfoVlanNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOmeVlannetworksInfoVlanNetworksToHclTerraform(struct?: DataOmeVlannetworksInfoVlanNetworks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOmeVlannetworksInfoVlanNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOmeVlannetworksInfoVlanNetworks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOmeVlannetworksInfoVlanNetworks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // internal_ref_nwuu_id - computed: true, optional: false, required: false
  public get internalRefNwuuId() {
    return this.getStringAttribute('internal_ref_nwuu_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getNumberAttribute('type');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vlan_maximum - computed: true, optional: false, required: false
  public get vlanMaximum() {
    return this.getNumberAttribute('vlan_maximum');
  }

  // vlan_minimum - computed: true, optional: false, required: false
  public get vlanMinimum() {
    return this.getNumberAttribute('vlan_minimum');
  }
}

export class DataOmeVlannetworksInfoVlanNetworksList extends cdktf.ComplexList {

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
  public get(index: number): DataOmeVlannetworksInfoVlanNetworksOutputReference {
    return new DataOmeVlannetworksInfoVlanNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/vlannetworks_info ome_vlannetworks_info}
*/
export class DataOmeVlannetworksInfo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_vlannetworks_info";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOmeVlannetworksInfo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOmeVlannetworksInfo to import
  * @param importFromId The id of the existing DataOmeVlannetworksInfo that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/vlannetworks_info#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOmeVlannetworksInfo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_vlannetworks_info", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/data-sources/vlannetworks_info ome_vlannetworks_info} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOmeVlannetworksInfoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOmeVlannetworksInfoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ome_vlannetworks_info',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // vlan_networks - computed: true, optional: false, required: false
  private _vlanNetworks = new DataOmeVlannetworksInfoVlanNetworksList(this, "vlan_networks", false);
  public get vlanNetworks() {
    return this._vlanNetworks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
