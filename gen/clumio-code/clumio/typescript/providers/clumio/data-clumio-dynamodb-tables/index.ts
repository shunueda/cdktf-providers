// https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/dynamodb_tables
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataClumioDynamodbTablesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier of the AWS account under which the DynamoDB bucket was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/dynamodb_tables#account_native_id DataClumioDynamodbTables#account_native_id}
  */
  readonly accountNativeId: string;
  /**
  * The AWS region associated with the DynamoDB tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/dynamodb_tables#aws_region DataClumioDynamodbTables#aws_region}
  */
  readonly awsRegion: string;
  /**
  * The DynamoDB table name to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/dynamodb_tables#name DataClumioDynamodbTables#name}
  */
  readonly name?: string;
  /**
  * Native identifier of the DynamoDB table to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/dynamodb_tables#table_native_id DataClumioDynamodbTables#table_native_id}
  */
  readonly tableNativeId?: string;
}
export interface DataClumioDynamodbTablesDynamodbTables {
}

export function dataClumioDynamodbTablesDynamodbTablesToTerraform(struct?: DataClumioDynamodbTablesDynamodbTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataClumioDynamodbTablesDynamodbTablesToHclTerraform(struct?: DataClumioDynamodbTablesDynamodbTables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataClumioDynamodbTablesDynamodbTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataClumioDynamodbTablesDynamodbTables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataClumioDynamodbTablesDynamodbTables | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // table_native_id - computed: true, optional: false, required: false
  public get tableNativeId() {
    return this.getStringAttribute('table_native_id');
  }
}

export class DataClumioDynamodbTablesDynamodbTablesList extends cdktf.ComplexList {

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
  public get(index: number): DataClumioDynamodbTablesDynamodbTablesOutputReference {
    return new DataClumioDynamodbTablesDynamodbTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/dynamodb_tables clumio_dynamodb_tables}
*/
export class DataClumioDynamodbTables extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_dynamodb_tables";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataClumioDynamodbTables resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataClumioDynamodbTables to import
  * @param importFromId The id of the existing DataClumioDynamodbTables that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/dynamodb_tables#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataClumioDynamodbTables to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_dynamodb_tables", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/data-sources/dynamodb_tables clumio_dynamodb_tables} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataClumioDynamodbTablesConfig
  */
  public constructor(scope: Construct, id: string, config: DataClumioDynamodbTablesConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_dynamodb_tables',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountNativeId = config.accountNativeId;
    this._awsRegion = config.awsRegion;
    this._name = config.name;
    this._tableNativeId = config.tableNativeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_native_id - computed: false, optional: false, required: true
  private _accountNativeId?: string; 
  public get accountNativeId() {
    return this.getStringAttribute('account_native_id');
  }
  public set accountNativeId(value: string) {
    this._accountNativeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNativeIdInput() {
    return this._accountNativeId;
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // dynamodb_tables - computed: true, optional: false, required: false
  private _dynamodbTables = new DataClumioDynamodbTablesDynamodbTablesList(this, "dynamodb_tables", false);
  public get dynamodbTables() {
    return this._dynamodbTables;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // table_native_id - computed: false, optional: true, required: false
  private _tableNativeId?: string; 
  public get tableNativeId() {
    return this.getStringAttribute('table_native_id');
  }
  public set tableNativeId(value: string) {
    this._tableNativeId = value;
  }
  public resetTableNativeId() {
    this._tableNativeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableNativeIdInput() {
    return this._tableNativeId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_native_id: cdktf.stringToTerraform(this._accountNativeId),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      name: cdktf.stringToTerraform(this._name),
      table_native_id: cdktf.stringToTerraform(this._tableNativeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_native_id: {
        value: cdktf.stringToHclTerraform(this._accountNativeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_native_id: {
        value: cdktf.stringToHclTerraform(this._tableNativeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
