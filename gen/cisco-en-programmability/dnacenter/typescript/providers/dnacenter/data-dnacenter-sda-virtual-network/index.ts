// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_virtual_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterSdaVirtualNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_virtual_network#id DataDnacenterSdaVirtualNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * siteNameHierarchy query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_virtual_network#site_name_hierarchy DataDnacenterSdaVirtualNetwork#site_name_hierarchy}
  */
  readonly siteNameHierarchy: string;
  /**
  * virtualNetworkName query parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_virtual_network#virtual_network_name DataDnacenterSdaVirtualNetwork#virtual_network_name}
  */
  readonly virtualNetworkName: string;
}
export interface DataDnacenterSdaVirtualNetworkItem {
}

export function dataDnacenterSdaVirtualNetworkItemToTerraform(struct?: DataDnacenterSdaVirtualNetworkItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterSdaVirtualNetworkItemToHclTerraform(struct?: DataDnacenterSdaVirtualNetworkItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterSdaVirtualNetworkItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterSdaVirtualNetworkItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterSdaVirtualNetworkItem | undefined) {
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

  // fabric_name - computed: true, optional: false, required: false
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }

  // is_default_vn - computed: true, optional: false, required: false
  public get isDefaultVn() {
    return this.getStringAttribute('is_default_vn');
  }

  // is_infra_vn - computed: true, optional: false, required: false
  public get isInfraVn() {
    return this.getStringAttribute('is_infra_vn');
  }

  // site_name_hierarchy - computed: true, optional: false, required: false
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // virtual_network_name - computed: true, optional: false, required: false
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
}

export class DataDnacenterSdaVirtualNetworkItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterSdaVirtualNetworkItemOutputReference {
    return new DataDnacenterSdaVirtualNetworkItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_virtual_network dnacenter_sda_virtual_network}
*/
export class DataDnacenterSdaVirtualNetwork extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_sda_virtual_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterSdaVirtualNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterSdaVirtualNetwork to import
  * @param importFromId The id of the existing DataDnacenterSdaVirtualNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_virtual_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterSdaVirtualNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_sda_virtual_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/sda_virtual_network dnacenter_sda_virtual_network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterSdaVirtualNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterSdaVirtualNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_sda_virtual_network',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._siteNameHierarchy = config.siteNameHierarchy;
    this._virtualNetworkName = config.virtualNetworkName;
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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterSdaVirtualNetworkItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // site_name_hierarchy - computed: false, optional: false, required: true
  private _siteNameHierarchy?: string; 
  public get siteNameHierarchy() {
    return this.getStringAttribute('site_name_hierarchy');
  }
  public set siteNameHierarchy(value: string) {
    this._siteNameHierarchy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameHierarchyInput() {
    return this._siteNameHierarchy;
  }

  // virtual_network_name - computed: false, optional: false, required: true
  private _virtualNetworkName?: string; 
  public get virtualNetworkName() {
    return this.getStringAttribute('virtual_network_name');
  }
  public set virtualNetworkName(value: string) {
    this._virtualNetworkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkNameInput() {
    return this._virtualNetworkName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      site_name_hierarchy: cdktf.stringToTerraform(this._siteNameHierarchy),
      virtual_network_name: cdktf.stringToTerraform(this._virtualNetworkName),
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
      site_name_hierarchy: {
        value: cdktf.stringToHclTerraform(this._siteNameHierarchy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_network_name: {
        value: cdktf.stringToHclTerraform(this._virtualNetworkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
