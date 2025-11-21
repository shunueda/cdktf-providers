// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PaiWorkspaceModelVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#approval_status PaiWorkspaceModelVersion#approval_status}
  */
  readonly approvalStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#extra_info PaiWorkspaceModelVersion#extra_info}
  */
  readonly extraInfo?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#format_type PaiWorkspaceModelVersion#format_type}
  */
  readonly formatType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#framework_type PaiWorkspaceModelVersion#framework_type}
  */
  readonly frameworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#id PaiWorkspaceModelVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#inference_spec PaiWorkspaceModelVersion#inference_spec}
  */
  readonly inferenceSpec?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#metrics PaiWorkspaceModelVersion#metrics}
  */
  readonly metrics?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#model_id PaiWorkspaceModelVersion#model_id}
  */
  readonly modelId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#options PaiWorkspaceModelVersion#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#source_id PaiWorkspaceModelVersion#source_id}
  */
  readonly sourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#source_type PaiWorkspaceModelVersion#source_type}
  */
  readonly sourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#training_spec PaiWorkspaceModelVersion#training_spec}
  */
  readonly trainingSpec?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#uri PaiWorkspaceModelVersion#uri}
  */
  readonly uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#version_description PaiWorkspaceModelVersion#version_description}
  */
  readonly versionDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#version_name PaiWorkspaceModelVersion#version_name}
  */
  readonly versionName?: string;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#labels PaiWorkspaceModelVersion#labels}
  */
  readonly labels?: PaiWorkspaceModelVersionLabels[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#timeouts PaiWorkspaceModelVersion#timeouts}
  */
  readonly timeouts?: PaiWorkspaceModelVersionTimeouts;
}
export interface PaiWorkspaceModelVersionLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#key PaiWorkspaceModelVersion#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#value PaiWorkspaceModelVersion#value}
  */
  readonly value?: string;
}

export function paiWorkspaceModelVersionLabelsToTerraform(struct?: PaiWorkspaceModelVersionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function paiWorkspaceModelVersionLabelsToHclTerraform(struct?: PaiWorkspaceModelVersionLabels | cdktf.IResolvable): any {
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

export class PaiWorkspaceModelVersionLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PaiWorkspaceModelVersionLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PaiWorkspaceModelVersionLabels | cdktf.IResolvable | undefined) {
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

export class PaiWorkspaceModelVersionLabelsList extends cdktf.ComplexList {
  public internalValue? : PaiWorkspaceModelVersionLabels[] | cdktf.IResolvable

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
  public get(index: number): PaiWorkspaceModelVersionLabelsOutputReference {
    return new PaiWorkspaceModelVersionLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PaiWorkspaceModelVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#create PaiWorkspaceModelVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#delete PaiWorkspaceModelVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#update PaiWorkspaceModelVersion#update}
  */
  readonly update?: string;
}

export function paiWorkspaceModelVersionTimeoutsToTerraform(struct?: PaiWorkspaceModelVersionTimeouts | cdktf.IResolvable): any {
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


export function paiWorkspaceModelVersionTimeoutsToHclTerraform(struct?: PaiWorkspaceModelVersionTimeouts | cdktf.IResolvable): any {
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

export class PaiWorkspaceModelVersionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PaiWorkspaceModelVersionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PaiWorkspaceModelVersionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version alicloud_pai_workspace_model_version}
*/
export class PaiWorkspaceModelVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_pai_workspace_model_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PaiWorkspaceModelVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PaiWorkspaceModelVersion to import
  * @param importFromId The id of the existing PaiWorkspaceModelVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PaiWorkspaceModelVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_pai_workspace_model_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/pai_workspace_model_version alicloud_pai_workspace_model_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PaiWorkspaceModelVersionConfig
  */
  public constructor(scope: Construct, id: string, config: PaiWorkspaceModelVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_pai_workspace_model_version',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvalStatus = config.approvalStatus;
    this._extraInfo = config.extraInfo;
    this._formatType = config.formatType;
    this._frameworkType = config.frameworkType;
    this._id = config.id;
    this._inferenceSpec = config.inferenceSpec;
    this._metrics = config.metrics;
    this._modelId = config.modelId;
    this._options = config.options;
    this._sourceId = config.sourceId;
    this._sourceType = config.sourceType;
    this._trainingSpec = config.trainingSpec;
    this._uri = config.uri;
    this._versionDescription = config.versionDescription;
    this._versionName = config.versionName;
    this._labels.internalValue = config.labels;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approval_status - computed: true, optional: true, required: false
  private _approvalStatus?: string; 
  public get approvalStatus() {
    return this.getStringAttribute('approval_status');
  }
  public set approvalStatus(value: string) {
    this._approvalStatus = value;
  }
  public resetApprovalStatus() {
    this._approvalStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalStatusInput() {
    return this._approvalStatus;
  }

  // extra_info - computed: false, optional: true, required: false
  private _extraInfo?: { [key: string]: string }; 
  public get extraInfo() {
    return this.getStringMapAttribute('extra_info');
  }
  public set extraInfo(value: { [key: string]: string }) {
    this._extraInfo = value;
  }
  public resetExtraInfo() {
    this._extraInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInfoInput() {
    return this._extraInfo;
  }

  // format_type - computed: false, optional: true, required: false
  private _formatType?: string; 
  public get formatType() {
    return this.getStringAttribute('format_type');
  }
  public set formatType(value: string) {
    this._formatType = value;
  }
  public resetFormatType() {
    this._formatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatTypeInput() {
    return this._formatType;
  }

  // framework_type - computed: false, optional: true, required: false
  private _frameworkType?: string; 
  public get frameworkType() {
    return this.getStringAttribute('framework_type');
  }
  public set frameworkType(value: string) {
    this._frameworkType = value;
  }
  public resetFrameworkType() {
    this._frameworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkTypeInput() {
    return this._frameworkType;
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

  // inference_spec - computed: false, optional: true, required: false
  private _inferenceSpec?: { [key: string]: string }; 
  public get inferenceSpec() {
    return this.getStringMapAttribute('inference_spec');
  }
  public set inferenceSpec(value: { [key: string]: string }) {
    this._inferenceSpec = value;
  }
  public resetInferenceSpec() {
    this._inferenceSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inferenceSpecInput() {
    return this._inferenceSpec;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics?: { [key: string]: string }; 
  public get metrics() {
    return this.getStringMapAttribute('metrics');
  }
  public set metrics(value: { [key: string]: string }) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
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

  // source_type - computed: true, optional: true, required: false
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

  // training_spec - computed: false, optional: true, required: false
  private _trainingSpec?: { [key: string]: string }; 
  public get trainingSpec() {
    return this.getStringMapAttribute('training_spec');
  }
  public set trainingSpec(value: { [key: string]: string }) {
    this._trainingSpec = value;
  }
  public resetTrainingSpec() {
    this._trainingSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trainingSpecInput() {
    return this._trainingSpec;
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

  // version_description - computed: false, optional: true, required: false
  private _versionDescription?: string; 
  public get versionDescription() {
    return this.getStringAttribute('version_description');
  }
  public set versionDescription(value: string) {
    this._versionDescription = value;
  }
  public resetVersionDescription() {
    this._versionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionDescriptionInput() {
    return this._versionDescription;
  }

  // version_name - computed: true, optional: true, required: false
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  public resetVersionName() {
    this._versionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new PaiWorkspaceModelVersionLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: PaiWorkspaceModelVersionLabels[] | cdktf.IResolvable) {
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
  private _timeouts = new PaiWorkspaceModelVersionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PaiWorkspaceModelVersionTimeouts) {
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
      approval_status: cdktf.stringToTerraform(this._approvalStatus),
      extra_info: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraInfo),
      format_type: cdktf.stringToTerraform(this._formatType),
      framework_type: cdktf.stringToTerraform(this._frameworkType),
      id: cdktf.stringToTerraform(this._id),
      inference_spec: cdktf.hashMapper(cdktf.stringToTerraform)(this._inferenceSpec),
      metrics: cdktf.hashMapper(cdktf.stringToTerraform)(this._metrics),
      model_id: cdktf.stringToTerraform(this._modelId),
      options: cdktf.stringToTerraform(this._options),
      source_id: cdktf.stringToTerraform(this._sourceId),
      source_type: cdktf.stringToTerraform(this._sourceType),
      training_spec: cdktf.hashMapper(cdktf.stringToTerraform)(this._trainingSpec),
      uri: cdktf.stringToTerraform(this._uri),
      version_description: cdktf.stringToTerraform(this._versionDescription),
      version_name: cdktf.stringToTerraform(this._versionName),
      labels: cdktf.listMapper(paiWorkspaceModelVersionLabelsToTerraform, true)(this._labels.internalValue),
      timeouts: paiWorkspaceModelVersionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approval_status: {
        value: cdktf.stringToHclTerraform(this._approvalStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_info: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraInfo),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      format_type: {
        value: cdktf.stringToHclTerraform(this._formatType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      framework_type: {
        value: cdktf.stringToHclTerraform(this._frameworkType),
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
      inference_spec: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._inferenceSpec),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metrics: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metrics),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      model_id: {
        value: cdktf.stringToHclTerraform(this._modelId),
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
      training_spec: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._trainingSpec),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_description: {
        value: cdktf.stringToHclTerraform(this._versionDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version_name: {
        value: cdktf.stringToHclTerraform(this._versionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(paiWorkspaceModelVersionLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PaiWorkspaceModelVersionLabelsList",
      },
      timeouts: {
        value: paiWorkspaceModelVersionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PaiWorkspaceModelVersionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
