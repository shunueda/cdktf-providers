// https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CriblLakeDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#accelerated_fields CriblLakeDataset#accelerated_fields}
  */
  readonly acceleratedFields?: string[];
  /**
  * Default: "lake-${workspaceName}-${organizationId}"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#bucket_name CriblLakeDataset#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#description CriblLakeDataset#description}
  */
  readonly description?: string;
  /**
  * must be one of ["json", "ddss", "parquet"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#format CriblLakeDataset#format}
  */
  readonly format?: string;
  /**
  * dataset id to update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#id CriblLakeDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * lake id that contains the Datasets. must be "default"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#lake_id CriblLakeDataset#lake_id}
  */
  readonly lakeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#retention_period_in_days CriblLakeDataset#retention_period_in_days}
  */
  readonly retentionPeriodInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#search_config CriblLakeDataset#search_config}
  */
  readonly searchConfig?: CriblLakeDatasetSearchConfig;
}
export interface CriblLakeDatasetSearchConfigMetadata {
  /**
  * Creation timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#created CriblLakeDataset#created}
  */
  readonly created?: string;
  /**
  * Whether acceleration is enabled for this dataset. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#enable_acceleration CriblLakeDataset#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Last modification timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#modified CriblLakeDataset#modified}
  */
  readonly modified?: string;
  /**
  * Tags associated with the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#tags CriblLakeDataset#tags}
  */
  readonly tags?: string[];
}

export function criblLakeDatasetSearchConfigMetadataToTerraform(struct?: CriblLakeDatasetSearchConfigMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created: cdktf.stringToTerraform(struct!.created),
    enable_acceleration: cdktf.booleanToTerraform(struct!.enableAcceleration),
    modified: cdktf.stringToTerraform(struct!.modified),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function criblLakeDatasetSearchConfigMetadataToHclTerraform(struct?: CriblLakeDatasetSearchConfigMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created: {
      value: cdktf.stringToHclTerraform(struct!.created),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_acceleration: {
      value: cdktf.booleanToHclTerraform(struct!.enableAcceleration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modified: {
      value: cdktf.stringToHclTerraform(struct!.modified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CriblLakeDatasetSearchConfigMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CriblLakeDatasetSearchConfigMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._created !== undefined) {
      hasAnyValues = true;
      internalValueResult.created = this._created;
    }
    if (this._enableAcceleration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAcceleration = this._enableAcceleration;
    }
    if (this._modified !== undefined) {
      hasAnyValues = true;
      internalValueResult.modified = this._modified;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CriblLakeDatasetSearchConfigMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._created = undefined;
      this._enableAcceleration = undefined;
      this._modified = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._created = value.created;
      this._enableAcceleration = value.enableAcceleration;
      this._modified = value.modified;
      this._tags = value.tags;
    }
  }

  // created - computed: true, optional: true, required: false
  private _created?: string; 
  public get created() {
    return this.getStringAttribute('created');
  }
  public set created(value: string) {
    this._created = value;
  }
  public resetCreated() {
    this._created = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdInput() {
    return this._created;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
  }

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface CriblLakeDatasetSearchConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#datatypes CriblLakeDataset#datatypes}
  */
  readonly datatypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#metadata CriblLakeDataset#metadata}
  */
  readonly metadata?: CriblLakeDatasetSearchConfigMetadata;
}

export function criblLakeDatasetSearchConfigToTerraform(struct?: CriblLakeDatasetSearchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datatypes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datatypes),
    metadata: criblLakeDatasetSearchConfigMetadataToTerraform(struct!.metadata),
  }
}


export function criblLakeDatasetSearchConfigToHclTerraform(struct?: CriblLakeDatasetSearchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datatypes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.datatypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metadata: {
      value: criblLakeDatasetSearchConfigMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "CriblLakeDatasetSearchConfigMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CriblLakeDatasetSearchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CriblLakeDatasetSearchConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datatypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.datatypes = this._datatypes;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CriblLakeDatasetSearchConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datatypes = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datatypes = value.datatypes;
      this._metadata.internalValue = value.metadata;
    }
  }

  // datatypes - computed: true, optional: true, required: false
  private _datatypes?: string[]; 
  public get datatypes() {
    return this.getListAttribute('datatypes');
  }
  public set datatypes(value: string[]) {
    this._datatypes = value;
  }
  public resetDatatypes() {
    this._datatypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datatypesInput() {
    return this._datatypes;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata = new CriblLakeDatasetSearchConfigMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CriblLakeDatasetSearchConfigMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset criblio_cribl_lake_dataset}
*/
export class CriblLakeDataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_cribl_lake_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CriblLakeDataset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CriblLakeDataset to import
  * @param importFromId The id of the existing CriblLakeDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CriblLakeDataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_cribl_lake_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.72/docs/resources/cribl_lake_dataset criblio_cribl_lake_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CriblLakeDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: CriblLakeDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_cribl_lake_dataset',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.72',
        providerVersionConstraint: '1.20.72'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceleratedFields = config.acceleratedFields;
    this._bucketName = config.bucketName;
    this._description = config.description;
    this._format = config.format;
    this._id = config.id;
    this._lakeId = config.lakeId;
    this._retentionPeriodInDays = config.retentionPeriodInDays;
    this._searchConfig.internalValue = config.searchConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerated_fields - computed: true, optional: true, required: false
  private _acceleratedFields?: string[]; 
  public get acceleratedFields() {
    return this.getListAttribute('accelerated_fields');
  }
  public set acceleratedFields(value: string[]) {
    this._acceleratedFields = value;
  }
  public resetAcceleratedFields() {
    this._acceleratedFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedFieldsInput() {
    return this._acceleratedFields;
  }

  // bucket_name - computed: true, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // retention_period_in_days - computed: true, optional: true, required: false
  private _retentionPeriodInDays?: number; 
  public get retentionPeriodInDays() {
    return this.getNumberAttribute('retention_period_in_days');
  }
  public set retentionPeriodInDays(value: number) {
    this._retentionPeriodInDays = value;
  }
  public resetRetentionPeriodInDays() {
    this._retentionPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInDaysInput() {
    return this._retentionPeriodInDays;
  }

  // search_config - computed: true, optional: true, required: false
  private _searchConfig = new CriblLakeDatasetSearchConfigOutputReference(this, "search_config");
  public get searchConfig() {
    return this._searchConfig;
  }
  public putSearchConfig(value: CriblLakeDatasetSearchConfig) {
    this._searchConfig.internalValue = value;
  }
  public resetSearchConfig() {
    this._searchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchConfigInput() {
    return this._searchConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accelerated_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acceleratedFields),
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      lake_id: cdktf.stringToTerraform(this._lakeId),
      retention_period_in_days: cdktf.numberToTerraform(this._retentionPeriodInDays),
      search_config: criblLakeDatasetSearchConfigToTerraform(this._searchConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerated_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acceleratedFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bucket_name: {
        value: cdktf.stringToHclTerraform(this._bucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      lake_id: {
        value: cdktf.stringToHclTerraform(this._lakeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_period_in_days: {
        value: cdktf.numberToHclTerraform(this._retentionPeriodInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      search_config: {
        value: criblLakeDatasetSearchConfigToHclTerraform(this._searchConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CriblLakeDatasetSearchConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
