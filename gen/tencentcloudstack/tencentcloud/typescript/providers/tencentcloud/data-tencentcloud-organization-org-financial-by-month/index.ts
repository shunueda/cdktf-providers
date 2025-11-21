// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/organization_org_financial_by_month
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudOrganizationOrgFinancialByMonthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Query for the end month. Format:yyyy-mm, for example:2021-01.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/organization_org_financial_by_month#end_month DataTencentcloudOrganizationOrgFinancialByMonth#end_month}
  */
  readonly endMonth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/organization_org_financial_by_month#id DataTencentcloudOrganizationOrgFinancialByMonth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Member uin list. Up to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/organization_org_financial_by_month#member_uins DataTencentcloudOrganizationOrgFinancialByMonth#member_uins}
  */
  readonly memberUins?: number[];
  /**
  * Product code list. Up to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/organization_org_financial_by_month#product_codes DataTencentcloudOrganizationOrgFinancialByMonth#product_codes}
  */
  readonly productCodes?: string[];
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/organization_org_financial_by_month#result_output_file DataTencentcloudOrganizationOrgFinancialByMonth#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudOrganizationOrgFinancialByMonthItems {
}

export function dataTencentcloudOrganizationOrgFinancialByMonthItemsToTerraform(struct?: DataTencentcloudOrganizationOrgFinancialByMonthItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudOrganizationOrgFinancialByMonthItemsToHclTerraform(struct?: DataTencentcloudOrganizationOrgFinancialByMonthItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudOrganizationOrgFinancialByMonthItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudOrganizationOrgFinancialByMonthItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudOrganizationOrgFinancialByMonthItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // growth_rate - computed: true, optional: false, required: false
  public get growthRate() {
    return this.getStringAttribute('growth_rate');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // month - computed: true, optional: false, required: false
  public get month() {
    return this.getStringAttribute('month');
  }

  // total_cost - computed: true, optional: false, required: false
  public get totalCost() {
    return this.getNumberAttribute('total_cost');
  }
}

export class DataTencentcloudOrganizationOrgFinancialByMonthItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudOrganizationOrgFinancialByMonthItemsOutputReference {
    return new DataTencentcloudOrganizationOrgFinancialByMonthItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/organization_org_financial_by_month tencentcloud_organization_org_financial_by_month}
*/
export class DataTencentcloudOrganizationOrgFinancialByMonth extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_organization_org_financial_by_month";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudOrganizationOrgFinancialByMonth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudOrganizationOrgFinancialByMonth to import
  * @param importFromId The id of the existing DataTencentcloudOrganizationOrgFinancialByMonth that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/organization_org_financial_by_month#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudOrganizationOrgFinancialByMonth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_organization_org_financial_by_month", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/organization_org_financial_by_month tencentcloud_organization_org_financial_by_month} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudOrganizationOrgFinancialByMonthConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudOrganizationOrgFinancialByMonthConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_organization_org_financial_by_month',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endMonth = config.endMonth;
    this._id = config.id;
    this._memberUins = config.memberUins;
    this._productCodes = config.productCodes;
    this._resultOutputFile = config.resultOutputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // end_month - computed: false, optional: true, required: false
  private _endMonth?: string; 
  public get endMonth() {
    return this.getStringAttribute('end_month');
  }
  public set endMonth(value: string) {
    this._endMonth = value;
  }
  public resetEndMonth() {
    this._endMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endMonthInput() {
    return this._endMonth;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataTencentcloudOrganizationOrgFinancialByMonthItemsList(this, "items", false);
  public get items() {
    return this._items;
  }

  // member_uins - computed: false, optional: true, required: false
  private _memberUins?: number[]; 
  public get memberUins() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('member_uins')));
  }
  public set memberUins(value: number[]) {
    this._memberUins = value;
  }
  public resetMemberUins() {
    this._memberUins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUinsInput() {
    return this._memberUins;
  }

  // product_codes - computed: false, optional: true, required: false
  private _productCodes?: string[]; 
  public get productCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('product_codes'));
  }
  public set productCodes(value: string[]) {
    this._productCodes = value;
  }
  public resetProductCodes() {
    this._productCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodesInput() {
    return this._productCodes;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      end_month: cdktf.stringToTerraform(this._endMonth),
      id: cdktf.stringToTerraform(this._id),
      member_uins: cdktf.listMapper(cdktf.numberToTerraform, false)(this._memberUins),
      product_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._productCodes),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      end_month: {
        value: cdktf.stringToHclTerraform(this._endMonth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_uins: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._memberUins),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      product_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._productCodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
