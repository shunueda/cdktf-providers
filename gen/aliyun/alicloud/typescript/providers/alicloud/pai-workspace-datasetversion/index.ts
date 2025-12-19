// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PaiWorkspaceDatasetversionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#data_count PaiWorkspaceDatasetversion#data_count}
  */
  readonly dataCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#data_size PaiWorkspaceDatasetversion#data_size}
  */
  readonly dataSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#data_source_type PaiWorkspaceDatasetversion#data_source_type}
  */
  readonly dataSourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#dataset_id PaiWorkspaceDatasetversion#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#description PaiWorkspaceDatasetversion#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#id PaiWorkspaceDatasetversion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#options PaiWorkspaceDatasetversion#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#property PaiWorkspaceDatasetversion#property}
  */
  readonly property: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#source_id PaiWorkspaceDatasetversion#source_id}
  */
  readonly sourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#source_type PaiWorkspaceDatasetversion#source_type}
  */
  readonly sourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#uri PaiWorkspaceDatasetversion#uri}
  */
  readonly uri: string;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#labels PaiWorkspaceDatasetversion#labels}
  */
  readonly labels?: PaiWorkspaceDatasetversionLabels[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#timeouts PaiWorkspaceDatasetversion#timeouts}
  */
  readonly timeouts?: PaiWorkspaceDatasetversionTimeouts;
}
export interface PaiWorkspaceDatasetversionLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#key PaiWorkspaceDatasetversion#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#value PaiWorkspaceDatasetversion#value}
  */
  readonly value?: string;
}

export function paiWorkspaceDatasetversionLabelsToTerraform(struct?: PaiWorkspaceDatasetversionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function paiWorkspaceDatasetversionLabelsToHclTerraform(struct?: PaiWorkspaceDatasetversionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaiWorkspaceDatasetversionLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PaiWorkspaceDatasetversionLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaiWorkspaceDatasetversionLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PaiWorkspaceDatasetversionLabelsList extends cdktf.ComplexList {
  public internalValue? : PaiWorkspaceDatasetversionLabels[] | cdktf.IResolvable

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
  public get(index: number): PaiWorkspaceDatasetversionLabelsOutputReference {
    return new PaiWorkspaceDatasetversionLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PaiWorkspaceDatasetversionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#create PaiWorkspaceDatasetversion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#delete PaiWorkspaceDatasetversion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#update PaiWorkspaceDatasetversion#update}
  */
  readonly update?: string;
}

export function paiWorkspaceDatasetversionTimeoutsToTerraform(struct?: PaiWorkspaceDatasetversionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function paiWorkspaceDatasetversionTimeoutsToHclTerraform(struct?: PaiWorkspaceDatasetversionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PaiWorkspaceDatasetversionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PaiWorkspaceDatasetversionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PaiWorkspaceDatasetversionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion alicloud_pai_workspace_datasetversion}
*/
export class PaiWorkspaceDatasetversion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_pai_workspace_datasetversion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PaiWorkspaceDatasetversion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PaiWorkspaceDatasetversion to import
  * @param importFromId The id of the existing PaiWorkspaceDatasetversion that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PaiWorkspaceDatasetversion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_pai_workspace_datasetversion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/pai_workspace_datasetversion alicloud_pai_workspace_datasetversion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PaiWorkspaceDatasetversionConfig
  */
  public constructor(scope: Construct, id: string, config: PaiWorkspaceDatasetversionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_pai_workspace_datasetversion',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataCount = config.dataCount;
    this._dataSize = config.dataSize;
    this._dataSourceType = config.dataSourceType;
    this._datasetId = config.datasetId;
    this._description = config.description;
    this._id = config.id;
    this._options = config.options;
    this._property = config.property;
    this._sourceId = config.sourceId;
    this._sourceType = config.sourceType;
    this._uri = config.uri;
    this._labels.internalValue = config.labels;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_count - computed: false, optional: true, required: false
  private _dataCount?: number; 
  public get dataCount() {
    return this.getNumberAttribute('data_count');
  }
  public set dataCount(value: number) {
    this._dataCount = value;
  }
  public resetDataCount() {
    this._dataCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCountInput() {
    return this._dataCount;
  }

  // data_size - computed: false, optional: true, required: false
  private _dataSize?: number; 
  public get dataSize() {
    return this.getNumberAttribute('data_size');
  }
  public set dataSize(value: number) {
    this._dataSize = value;
  }
  public resetDataSize() {
    this._dataSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSizeInput() {
    return this._dataSize;
  }

  // data_source_type - computed: false, optional: false, required: true
  private _dataSourceType?: string; 
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }
  public set dataSourceType(value: string) {
    this._dataSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType;
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // description - computed: false, optional: true, required: false
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // property - computed: false, optional: false, required: true
  private _property?: string; 
  public get property() {
    return this.getStringAttribute('property');
  }
  public set property(value: string) {
    this._property = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyInput() {
    return this._property;
  }

  // source_id - computed: false, optional: true, required: false
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // version_name - computed: true, optional: false, required: false
  public get versionName() {
    return this.getStringAttribute('version_name');
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new PaiWorkspaceDatasetversionLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: PaiWorkspaceDatasetversionLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PaiWorkspaceDatasetversionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PaiWorkspaceDatasetversionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_count: cdktf.numberToTerraform(this._dataCount),
      data_size: cdktf.numberToTerraform(this._dataSize),
      data_source_type: cdktf.stringToTerraform(this._dataSourceType),
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      options: cdktf.stringToTerraform(this._options),
      property: cdktf.stringToTerraform(this._property),
      source_id: cdktf.stringToTerraform(this._sourceId),
      source_type: cdktf.stringToTerraform(this._sourceType),
      uri: cdktf.stringToTerraform(this._uri),
      labels: cdktf.listMapper(paiWorkspaceDatasetversionLabelsToTerraform, true)(this._labels.internalValue),
      timeouts: paiWorkspaceDatasetversionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_count: {
        value: cdktf.numberToHclTerraform(this._dataCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_size: {
        value: cdktf.numberToHclTerraform(this._dataSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_source_type: {
        value: cdktf.stringToHclTerraform(this._dataSourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dataset_id: {
        value: cdktf.stringToHclTerraform(this._datasetId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.stringToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property: {
        value: cdktf.stringToHclTerraform(this._property),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_id: {
        value: cdktf.stringToHclTerraform(this._sourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(paiWorkspaceDatasetversionLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaiWorkspaceDatasetversionLabelsList",
      },
      timeouts: {
        value: paiWorkspaceDatasetversionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PaiWorkspaceDatasetversionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
