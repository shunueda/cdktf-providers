// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cp_codes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCpCodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for the contract.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cp_codes#contract_id DataAkamaiCpCodes#contract_id}
  */
  readonly contractId: string;
  /**
  * Allows you to filter CP codes by a specific CP code's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cp_codes#filter_by_name DataAkamaiCpCodes#filter_by_name}
  */
  readonly filterByName?: string;
  /**
  * Allows you to filter CP codes by a specific product ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cp_codes#filter_by_product_id DataAkamaiCpCodes#filter_by_product_id}
  */
  readonly filterByProductId?: string;
  /**
  * Unique identifier for the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cp_codes#group_id DataAkamaiCpCodes#group_id}
  */
  readonly groupId: string;
}
export interface DataAkamaiCpCodesCpCodes {
}

export function dataAkamaiCpCodesCpCodesToTerraform(struct?: DataAkamaiCpCodesCpCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAkamaiCpCodesCpCodesToHclTerraform(struct?: DataAkamaiCpCodesCpCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAkamaiCpCodesCpCodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiCpCodesCpCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiCpCodesCpCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cp_code_id - computed: true, optional: false, required: false
  public get cpCodeId() {
    return this.getStringAttribute('cp_code_id');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // product_ids - computed: true, optional: false, required: false
  public get productIds() {
    return this.getListAttribute('product_ids');
  }
}

export class DataAkamaiCpCodesCpCodesList extends cdktf.ComplexList {

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
  public get(index: number): DataAkamaiCpCodesCpCodesOutputReference {
    return new DataAkamaiCpCodesCpCodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cp_codes akamai_cp_codes}
*/
export class DataAkamaiCpCodes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cp_codes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCpCodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCpCodes to import
  * @param importFromId The id of the existing DataAkamaiCpCodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cp_codes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCpCodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cp_codes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cp_codes akamai_cp_codes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCpCodesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCpCodesConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cp_codes',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractId = config.contractId;
    this._filterByName = config.filterByName;
    this._filterByProductId = config.filterByProductId;
    this._groupId = config.groupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // contract_id - computed: false, optional: false, required: true
  private _contractId?: string; 
  public get contractId() {
    return this.getStringAttribute('contract_id');
  }
  public set contractId(value: string) {
    this._contractId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractIdInput() {
    return this._contractId;
  }

  // cp_codes - computed: true, optional: false, required: false
  private _cpCodes = new DataAkamaiCpCodesCpCodesList(this, "cp_codes", false);
  public get cpCodes() {
    return this._cpCodes;
  }

  // filter_by_name - computed: false, optional: true, required: false
  private _filterByName?: string; 
  public get filterByName() {
    return this.getStringAttribute('filter_by_name');
  }
  public set filterByName(value: string) {
    this._filterByName = value;
  }
  public resetFilterByName() {
    this._filterByName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByNameInput() {
    return this._filterByName;
  }

  // filter_by_product_id - computed: false, optional: true, required: false
  private _filterByProductId?: string; 
  public get filterByProductId() {
    return this.getStringAttribute('filter_by_product_id');
  }
  public set filterByProductId(value: string) {
    this._filterByProductId = value;
  }
  public resetFilterByProductId() {
    this._filterByProductId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterByProductIdInput() {
    return this._filterByProductId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_id: cdktf.stringToTerraform(this._contractId),
      filter_by_name: cdktf.stringToTerraform(this._filterByName),
      filter_by_product_id: cdktf.stringToTerraform(this._filterByProductId),
      group_id: cdktf.stringToTerraform(this._groupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_id: {
        value: cdktf.stringToHclTerraform(this._contractId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_by_name: {
        value: cdktf.stringToHclTerraform(this._filterByName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_by_product_id: {
        value: cdktf.stringToHclTerraform(this._filterByProductId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
