// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Product item state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/product#item_state DataSamsungcloudplatformProduct#item_state}
  */
  readonly itemState?: string;
  /**
  * Product id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/product#product_id DataSamsungcloudplatformProduct#product_id}
  */
  readonly productId: string;
}
export interface DataSamsungcloudplatformProductItems {
}

export function dataSamsungcloudplatformProductItemsToTerraform(struct?: DataSamsungcloudplatformProductItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformProductItemsToHclTerraform(struct?: DataSamsungcloudplatformProductItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformProductItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformProductItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformProductItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // cost - computed: true, optional: false, required: false
  public get cost() {
    return this.getStringAttribute('cost');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product_id - computed: true, optional: false, required: false
  public get productId() {
    return this.getStringAttribute('product_id');
  }

  // product_id_list - computed: true, optional: false, required: false
  public get productIdList() {
    return this.getStringAttribute('product_id_list');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // serviced_for - computed: true, optional: false, required: false
  public get servicedFor() {
    return this.getStringAttribute('serviced_for');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataSamsungcloudplatformProductItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformProductItemsOutputReference {
    return new DataSamsungcloudplatformProductItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/product samsungcloudplatform_product}
*/
export class DataSamsungcloudplatformProduct extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformProduct resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformProduct to import
  * @param importFromId The id of the existing DataSamsungcloudplatformProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformProduct to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.16.0/docs/data-sources/product samsungcloudplatform_product} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformProductConfig
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformProductConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_product',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.16.0',
        providerVersionConstraint: '3.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._itemState = config.itemState;
    this._productId = config.productId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // item_state - computed: false, optional: true, required: false
  private _itemState?: string; 
  public get itemState() {
    return this.getStringAttribute('item_state');
  }
  public set itemState(value: string) {
    this._itemState = value;
  }
  public resetItemState() {
    this._itemState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemStateInput() {
    return this._itemState;
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataSamsungcloudplatformProductItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // items_map - computed: true, optional: false, required: false
  private _itemsMap = new cdktf.StringMapList(this, "items_map", false);
  public get itemsMap() {
    return this._itemsMap;
  }

  // items_string - computed: true, optional: false, required: false
  public get itemsString() {
    return this.getStringAttribute('items_string');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new cdktf.StringMap(this, "properties");
  public get properties() {
    return this._properties;
  }

  // rate_id - computed: true, optional: false, required: false
  public get rateId() {
    return this.getStringAttribute('rate_id');
  }

  // seq - computed: true, optional: false, required: false
  public get seq() {
    return this.getStringAttribute('seq');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      item_state: cdktf.stringToTerraform(this._itemState),
      product_id: cdktf.stringToTerraform(this._productId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      item_state: {
        value: cdktf.stringToHclTerraform(this._itemState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.stringToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
