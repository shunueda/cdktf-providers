// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/gre_internal_ip_range_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaGreInternalIpRangeListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/gre_internal_ip_range_list#id DataZiaGreInternalIpRangeList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/gre_internal_ip_range_list#required_count DataZiaGreInternalIpRangeList#required_count}
  */
  readonly requiredCount?: number;
}
export interface DataZiaGreInternalIpRangeListListStruct {
}

export function dataZiaGreInternalIpRangeListListStructToTerraform(struct?: DataZiaGreInternalIpRangeListListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaGreInternalIpRangeListListStructToHclTerraform(struct?: DataZiaGreInternalIpRangeListListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaGreInternalIpRangeListListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaGreInternalIpRangeListListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaGreInternalIpRangeListListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_ip_address - computed: true, optional: false, required: false
  public get endIpAddress() {
    return this.getStringAttribute('end_ip_address');
  }

  // start_ip_address - computed: true, optional: false, required: false
  public get startIpAddress() {
    return this.getStringAttribute('start_ip_address');
  }
}

export class DataZiaGreInternalIpRangeListListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaGreInternalIpRangeListListStructOutputReference {
    return new DataZiaGreInternalIpRangeListListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/gre_internal_ip_range_list zia_gre_internal_ip_range_list}
*/
export class DataZiaGreInternalIpRangeList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_gre_internal_ip_range_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaGreInternalIpRangeList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaGreInternalIpRangeList to import
  * @param importFromId The id of the existing DataZiaGreInternalIpRangeList that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/gre_internal_ip_range_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaGreInternalIpRangeList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_gre_internal_ip_range_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/gre_internal_ip_range_list zia_gre_internal_ip_range_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaGreInternalIpRangeListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaGreInternalIpRangeListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_gre_internal_ip_range_list',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
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
    this._requiredCount = config.requiredCount;
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

  // list - computed: true, optional: false, required: false
  private _list = new DataZiaGreInternalIpRangeListListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // required_count - computed: false, optional: true, required: false
  private _requiredCount?: number; 
  public get requiredCount() {
    return this.getNumberAttribute('required_count');
  }
  public set requiredCount(value: number) {
    this._requiredCount = value;
  }
  public resetRequiredCount() {
    this._requiredCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredCountInput() {
    return this._requiredCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      required_count: cdktf.numberToTerraform(this._requiredCount),
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
      required_count: {
        value: cdktf.numberToHclTerraform(this._requiredCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
