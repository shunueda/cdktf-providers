// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_stocks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudStorageGatewayStocksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_stocks#gateway_class DataAlicloudCloudStorageGatewayStocks#gateway_class}
  */
  readonly gatewayClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_stocks#id DataAlicloudCloudStorageGatewayStocks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_stocks#output_file DataAlicloudCloudStorageGatewayStocks#output_file}
  */
  readonly outputFile?: string;
}
export interface DataAlicloudCloudStorageGatewayStocksStocks {
}

export function dataAlicloudCloudStorageGatewayStocksStocksToTerraform(struct?: DataAlicloudCloudStorageGatewayStocksStocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudStorageGatewayStocksStocksToHclTerraform(struct?: DataAlicloudCloudStorageGatewayStocksStocks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudStorageGatewayStocksStocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudStorageGatewayStocksStocks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudStorageGatewayStocksStocks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_gateway_classes - computed: true, optional: false, required: false
  public get availableGatewayClasses() {
    return this.getListAttribute('available_gateway_classes');
  }

  // zone_id - computed: true, optional: false, required: false
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
}

export class DataAlicloudCloudStorageGatewayStocksStocksList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudStorageGatewayStocksStocksOutputReference {
    return new DataAlicloudCloudStorageGatewayStocksStocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_stocks alicloud_cloud_storage_gateway_stocks}
*/
export class DataAlicloudCloudStorageGatewayStocks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_storage_gateway_stocks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudStorageGatewayStocks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudStorageGatewayStocks to import
  * @param importFromId The id of the existing DataAlicloudCloudStorageGatewayStocks that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_stocks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudStorageGatewayStocks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_storage_gateway_stocks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/data-sources/cloud_storage_gateway_stocks alicloud_cloud_storage_gateway_stocks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudStorageGatewayStocksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudStorageGatewayStocksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_storage_gateway_stocks',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gatewayClass = config.gatewayClass;
    this._id = config.id;
    this._outputFile = config.outputFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_class - computed: false, optional: true, required: false
  private _gatewayClass?: string; 
  public get gatewayClass() {
    return this.getStringAttribute('gateway_class');
  }
  public set gatewayClass(value: string) {
    this._gatewayClass = value;
  }
  public resetGatewayClass() {
    this._gatewayClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayClassInput() {
    return this._gatewayClass;
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

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // stocks - computed: true, optional: false, required: false
  private _stocks = new DataAlicloudCloudStorageGatewayStocksStocksList(this, "stocks", false);
  public get stocks() {
    return this._stocks;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_class: cdktf.stringToTerraform(this._gatewayClass),
      id: cdktf.stringToTerraform(this._id),
      output_file: cdktf.stringToTerraform(this._outputFile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_class: {
        value: cdktf.stringToHclTerraform(this._gatewayClass),
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
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
