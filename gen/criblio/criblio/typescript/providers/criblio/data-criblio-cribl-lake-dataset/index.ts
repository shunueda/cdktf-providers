// https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/data-sources/cribl_lake_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCriblioCriblLakeDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * dataset id to get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/data-sources/cribl_lake_dataset#id DataCriblioCriblLakeDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * lake id that contains the Datasets. must be "default"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/data-sources/cribl_lake_dataset#lake_id DataCriblioCriblLakeDataset#lake_id}
  */
  readonly lakeId: string;
}
export interface DataCriblioCriblLakeDatasetSearchConfigMetadata {
}

export function dataCriblioCriblLakeDatasetSearchConfigMetadataToTerraform(struct?: DataCriblioCriblLakeDatasetSearchConfigMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioCriblLakeDatasetSearchConfigMetadataToHclTerraform(struct?: DataCriblioCriblLakeDatasetSearchConfigMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioCriblLakeDatasetSearchConfigMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioCriblLakeDatasetSearchConfigMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioCriblLakeDatasetSearchConfigMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enable_acceleration - computed: true, optional: false, required: false
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }

  // modified - computed: true, optional: false, required: false
  public get modified() {
    return this.getStringAttribute('modified');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }
}
export interface DataCriblioCriblLakeDatasetSearchConfig {
}

export function dataCriblioCriblLakeDatasetSearchConfigToTerraform(struct?: DataCriblioCriblLakeDatasetSearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioCriblLakeDatasetSearchConfigToHclTerraform(struct?: DataCriblioCriblLakeDatasetSearchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioCriblLakeDatasetSearchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioCriblLakeDatasetSearchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioCriblLakeDatasetSearchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datatypes - computed: true, optional: false, required: false
  public get datatypes() {
    return this.getListAttribute('datatypes');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataCriblioCriblLakeDatasetSearchConfigMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/data-sources/cribl_lake_dataset criblio_cribl_lake_dataset}
*/
export class DataCriblioCriblLakeDataset extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_cribl_lake_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCriblioCriblLakeDataset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCriblioCriblLakeDataset to import
  * @param importFromId The id of the existing DataCriblioCriblLakeDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/data-sources/cribl_lake_dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCriblioCriblLakeDataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_cribl_lake_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.59/docs/data-sources/cribl_lake_dataset criblio_cribl_lake_dataset} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCriblioCriblLakeDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: DataCriblioCriblLakeDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_cribl_lake_dataset',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.59',
        providerVersionConstraint: '1.20.59'
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
    this._lakeId = config.lakeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerated_fields - computed: true, optional: false, required: false
  public get acceleratedFields() {
    return this.getListAttribute('accelerated_fields');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lake_id - computed: false, optional: false, required: true
  private _lakeId?: string; 
  public get lakeId() {
    return this.getStringAttribute('lake_id');
  }
  public set lakeId(value: string) {
    this._lakeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeIdInput() {
    return this._lakeId;
  }

  // retention_period_in_days - computed: true, optional: false, required: false
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }

  // search_config - computed: true, optional: false, required: false
  private _searchConfig = new DataCriblioCriblLakeDatasetSearchConfigOutputReference(this, "search_config");
  public get searchConfig() {
    return this._searchConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lake_id: cdktf.stringToTerraform(this._lakeId),
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
      lake_id: {
        value: cdktf.stringToHclTerraform(this._lakeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
