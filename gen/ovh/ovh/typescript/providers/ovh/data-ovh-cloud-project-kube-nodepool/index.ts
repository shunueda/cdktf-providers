// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhCloudProjectKubeNodepoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#availability_zones DataOvhCloudProjectKubeNodepool#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#id DataOvhCloudProjectKubeNodepool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kube ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#kube_id DataOvhCloudProjectKubeNodepool#kube_id}
  */
  readonly kubeId: string;
  /**
  * NodePool resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#name DataOvhCloudProjectKubeNodepool#name}
  */
  readonly name: string;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#service_name DataOvhCloudProjectKubeNodepool#service_name}
  */
  readonly serviceName: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#template DataOvhCloudProjectKubeNodepool#template}
  */
  readonly template?: DataOvhCloudProjectKubeNodepoolTemplate;
}
export interface DataOvhCloudProjectKubeNodepoolTemplateMetadata {
  /**
  * annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#annotations DataOvhCloudProjectKubeNodepool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * finalizers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#finalizers DataOvhCloudProjectKubeNodepool#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#labels DataOvhCloudProjectKubeNodepool#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataOvhCloudProjectKubeNodepoolTemplateMetadataToTerraform(struct?: DataOvhCloudProjectKubeNodepoolTemplateMetadataOutputReference | DataOvhCloudProjectKubeNodepoolTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataOvhCloudProjectKubeNodepoolTemplateMetadataToHclTerraform(struct?: DataOvhCloudProjectKubeNodepoolTemplateMetadataOutputReference | DataOvhCloudProjectKubeNodepoolTemplateMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOvhCloudProjectKubeNodepoolTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataOvhCloudProjectKubeNodepoolTemplateMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhCloudProjectKubeNodepoolTemplateMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._finalizers = value.finalizers;
      this._labels = value.labels;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}
export interface DataOvhCloudProjectKubeNodepoolTemplateSpec {
  /**
  * taints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#taints DataOvhCloudProjectKubeNodepool#taints}
  */
  readonly taints?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * unschedulable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#unschedulable DataOvhCloudProjectKubeNodepool#unschedulable}
  */
  readonly unschedulable?: boolean | cdktf.IResolvable;
}

export function dataOvhCloudProjectKubeNodepoolTemplateSpecToTerraform(struct?: DataOvhCloudProjectKubeNodepoolTemplateSpecOutputReference | DataOvhCloudProjectKubeNodepoolTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    taints: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.taints),
    unschedulable: cdktf.booleanToTerraform(struct!.unschedulable),
  }
}


export function dataOvhCloudProjectKubeNodepoolTemplateSpecToHclTerraform(struct?: DataOvhCloudProjectKubeNodepoolTemplateSpecOutputReference | DataOvhCloudProjectKubeNodepoolTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    taints: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.taints),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    unschedulable: {
      value: cdktf.booleanToHclTerraform(struct!.unschedulable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOvhCloudProjectKubeNodepoolTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataOvhCloudProjectKubeNodepoolTemplateSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taints !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints;
    }
    if (this._unschedulable !== undefined) {
      hasAnyValues = true;
      internalValueResult.unschedulable = this._unschedulable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhCloudProjectKubeNodepoolTemplateSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._taints = undefined;
      this._unschedulable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._taints = value.taints;
      this._unschedulable = value.unschedulable;
    }
  }

  // taints - computed: false, optional: true, required: false
  private _taints?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get taints() {
    return this.interpolationForAttribute('taints');
  }
  public set taints(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._taints = value;
  }
  public resetTaints() {
    this._taints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }

  // unschedulable - computed: false, optional: true, required: false
  private _unschedulable?: boolean | cdktf.IResolvable; 
  public get unschedulable() {
    return this.getBooleanAttribute('unschedulable');
  }
  public set unschedulable(value: boolean | cdktf.IResolvable) {
    this._unschedulable = value;
  }
  public resetUnschedulable() {
    this._unschedulable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }
}
export interface DataOvhCloudProjectKubeNodepoolTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#metadata DataOvhCloudProjectKubeNodepool#metadata}
  */
  readonly metadata?: DataOvhCloudProjectKubeNodepoolTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#spec DataOvhCloudProjectKubeNodepool#spec}
  */
  readonly spec?: DataOvhCloudProjectKubeNodepoolTemplateSpec;
}

export function dataOvhCloudProjectKubeNodepoolTemplateToTerraform(struct?: DataOvhCloudProjectKubeNodepoolTemplateOutputReference | DataOvhCloudProjectKubeNodepoolTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataOvhCloudProjectKubeNodepoolTemplateMetadataToTerraform(struct!.metadata),
    spec: dataOvhCloudProjectKubeNodepoolTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataOvhCloudProjectKubeNodepoolTemplateToHclTerraform(struct?: DataOvhCloudProjectKubeNodepoolTemplateOutputReference | DataOvhCloudProjectKubeNodepoolTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataOvhCloudProjectKubeNodepoolTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "set",
      storageClassType: "DataOvhCloudProjectKubeNodepoolTemplateMetadataList",
    },
    spec: {
      value: dataOvhCloudProjectKubeNodepoolTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "set",
      storageClassType: "DataOvhCloudProjectKubeNodepoolTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOvhCloudProjectKubeNodepoolTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataOvhCloudProjectKubeNodepoolTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhCloudProjectKubeNodepoolTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataOvhCloudProjectKubeNodepoolTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataOvhCloudProjectKubeNodepoolTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataOvhCloudProjectKubeNodepoolTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataOvhCloudProjectKubeNodepoolTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool ovh_cloud_project_kube_nodepool}
*/
export class DataOvhCloudProjectKubeNodepool extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_kube_nodepool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhCloudProjectKubeNodepool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhCloudProjectKubeNodepool to import
  * @param importFromId The id of the existing DataOvhCloudProjectKubeNodepool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhCloudProjectKubeNodepool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_kube_nodepool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/cloud_project_kube_nodepool ovh_cloud_project_kube_nodepool} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhCloudProjectKubeNodepoolConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhCloudProjectKubeNodepoolConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_kube_nodepool',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityZones = config.availabilityZones;
    this._id = config.id;
    this._kubeId = config.kubeId;
    this._name = config.name;
    this._serviceName = config.serviceName;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_affinity - computed: true, optional: false, required: false
  public get antiAffinity() {
    return this.getBooleanAttribute('anti_affinity');
  }

  // autoscale - computed: true, optional: false, required: false
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }

  // autoscaling_scale_down_unneeded_time_seconds - computed: true, optional: false, required: false
  public get autoscalingScaleDownUnneededTimeSeconds() {
    return this.getNumberAttribute('autoscaling_scale_down_unneeded_time_seconds');
  }

  // autoscaling_scale_down_unready_time_seconds - computed: true, optional: false, required: false
  public get autoscalingScaleDownUnreadyTimeSeconds() {
    return this.getNumberAttribute('autoscaling_scale_down_unready_time_seconds');
  }

  // autoscaling_scale_down_utilization_threshold - computed: true, optional: false, required: false
  public get autoscalingScaleDownUtilizationThreshold() {
    return this.getNumberAttribute('autoscaling_scale_down_utilization_threshold');
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones?: string[]; 
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[]) {
    this._availabilityZones = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones;
  }

  // available_nodes - computed: true, optional: false, required: false
  public get availableNodes() {
    return this.getNumberAttribute('available_nodes');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // current_nodes - computed: true, optional: false, required: false
  public get currentNodes() {
    return this.getNumberAttribute('current_nodes');
  }

  // desired_nodes - computed: true, optional: false, required: false
  public get desiredNodes() {
    return this.getNumberAttribute('desired_nodes');
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
  }

  // flavor_name - computed: true, optional: false, required: false
  public get flavorName() {
    return this.getStringAttribute('flavor_name');
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

  // kube_id - computed: false, optional: false, required: true
  private _kubeId?: string; 
  public get kubeId() {
    return this.getStringAttribute('kube_id');
  }
  public set kubeId(value: string) {
    this._kubeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeIdInput() {
    return this._kubeId;
  }

  // max_nodes - computed: true, optional: false, required: false
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }

  // min_nodes - computed: true, optional: false, required: false
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }

  // monthly_billed - computed: true, optional: false, required: false
  public get monthlyBilled() {
    return this.getBooleanAttribute('monthly_billed');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // size_status - computed: true, optional: false, required: false
  public get sizeStatus() {
    return this.getStringAttribute('size_status');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // up_to_date_nodes - computed: true, optional: false, required: false
  public get upToDateNodes() {
    return this.getNumberAttribute('up_to_date_nodes');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // template - computed: false, optional: true, required: false
  private _template = new DataOvhCloudProjectKubeNodepoolTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataOvhCloudProjectKubeNodepoolTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      id: cdktf.stringToTerraform(this._id),
      kube_id: cdktf.stringToTerraform(this._kubeId),
      name: cdktf.stringToTerraform(this._name),
      service_name: cdktf.stringToTerraform(this._serviceName),
      template: dataOvhCloudProjectKubeNodepoolTemplateToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kube_id: {
        value: cdktf.stringToHclTerraform(this._kubeId),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: dataOvhCloudProjectKubeNodepoolTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOvhCloudProjectKubeNodepoolTemplateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
