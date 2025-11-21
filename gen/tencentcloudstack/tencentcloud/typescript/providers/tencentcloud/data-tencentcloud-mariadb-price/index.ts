// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudMariadbPriceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Price unit. Valid values: `* pent` (cent), `* microPent` (microcent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price#amount_unit DataTencentcloudMariadbPrice#amount_unit}
  */
  readonly amountUnit?: string;
  /**
  * The quantity you want to purchase is queried by default for the price of purchasing 1 instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price#buy_count DataTencentcloudMariadbPrice#buy_count}
  */
  readonly buyCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price#id DataTencentcloudMariadbPrice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Memory size in GB, which can be obtained by querying the instance specification through the `DescribeDBInstanceSpecs` API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price#memory DataTencentcloudMariadbPrice#memory}
  */
  readonly memory: number;
  /**
  * Number of instance nodes, which can be obtained by querying the instance specification through the `DescribeDBInstanceSpecs` API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price#node_count DataTencentcloudMariadbPrice#node_count}
  */
  readonly nodeCount: number;
  /**
  * Billing type. Valid values: `postpaid` (pay-as-you-go), `prepaid` (monthly subscription).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price#paymode DataTencentcloudMariadbPrice#paymode}
  */
  readonly paymode?: string;
  /**
  * Purchase period in months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price#period DataTencentcloudMariadbPrice#period}
  */
  readonly period?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price#result_output_file DataTencentcloudMariadbPrice#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * Storage capacity in GB. The maximum and minimum storage space can be obtained by querying instance specification through the `DescribeDBInstanceSpecs` API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price#storage DataTencentcloudMariadbPrice#storage}
  */
  readonly storage: number;
  /**
  * AZ ID of the purchased instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price#zone DataTencentcloudMariadbPrice#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price tencentcloud_mariadb_price}
*/
export class DataTencentcloudMariadbPrice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mariadb_price";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudMariadbPrice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudMariadbPrice to import
  * @param importFromId The id of the existing DataTencentcloudMariadbPrice that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudMariadbPrice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mariadb_price", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/data-sources/mariadb_price tencentcloud_mariadb_price} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudMariadbPriceConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudMariadbPriceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mariadb_price',
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
    this._amountUnit = config.amountUnit;
    this._buyCount = config.buyCount;
    this._id = config.id;
    this._memory = config.memory;
    this._nodeCount = config.nodeCount;
    this._paymode = config.paymode;
    this._period = config.period;
    this._resultOutputFile = config.resultOutputFile;
    this._storage = config.storage;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount_unit - computed: false, optional: true, required: false
  private _amountUnit?: string; 
  public get amountUnit() {
    return this.getStringAttribute('amount_unit');
  }
  public set amountUnit(value: string) {
    this._amountUnit = value;
  }
  public resetAmountUnit() {
    this._amountUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountUnitInput() {
    return this._amountUnit;
  }

  // buy_count - computed: false, optional: false, required: true
  private _buyCount?: number; 
  public get buyCount() {
    return this.getNumberAttribute('buy_count');
  }
  public set buyCount(value: number) {
    this._buyCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buyCountInput() {
    return this._buyCount;
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

  // memory - computed: false, optional: false, required: true
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // original_price - computed: true, optional: false, required: false
  public get originalPrice() {
    return this.getNumberAttribute('original_price');
  }

  // paymode - computed: false, optional: true, required: false
  private _paymode?: string; 
  public get paymode() {
    return this.getStringAttribute('paymode');
  }
  public set paymode(value: string) {
    this._paymode = value;
  }
  public resetPaymode() {
    this._paymode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paymodeInput() {
    return this._paymode;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // price - computed: true, optional: false, required: false
  public get price() {
    return this.getNumberAttribute('price');
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

  // storage - computed: false, optional: false, required: true
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amount_unit: cdktf.stringToTerraform(this._amountUnit),
      buy_count: cdktf.numberToTerraform(this._buyCount),
      id: cdktf.stringToTerraform(this._id),
      memory: cdktf.numberToTerraform(this._memory),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      paymode: cdktf.stringToTerraform(this._paymode),
      period: cdktf.numberToTerraform(this._period),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      storage: cdktf.numberToTerraform(this._storage),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount_unit: {
        value: cdktf.stringToHclTerraform(this._amountUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buy_count: {
        value: cdktf.numberToHclTerraform(this._buyCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_count: {
        value: cdktf.numberToHclTerraform(this._nodeCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paymode: {
        value: cdktf.stringToHclTerraform(this._paymode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
