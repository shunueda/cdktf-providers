// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectKubeNodepoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable anti affinity groups for nodes in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#anti_affinity CloudProjectKubeNodepool#anti_affinity}
  */
  readonly antiAffinity?: boolean | cdktf.IResolvable;
  /**
  * Enable auto-scaling for the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#autoscale CloudProjectKubeNodepool#autoscale}
  */
  readonly autoscale?: boolean | cdktf.IResolvable;
  /**
  * scaleDownUnneededTimeSeconds for autoscaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#autoscaling_scale_down_unneeded_time_seconds CloudProjectKubeNodepool#autoscaling_scale_down_unneeded_time_seconds}
  */
  readonly autoscalingScaleDownUnneededTimeSeconds?: number;
  /**
  * scaleDownUnreadyTimeSeconds for autoscaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#autoscaling_scale_down_unready_time_seconds CloudProjectKubeNodepool#autoscaling_scale_down_unready_time_seconds}
  */
  readonly autoscalingScaleDownUnreadyTimeSeconds?: number;
  /**
  * scaleDownUtilizationThreshold for autoscaling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#autoscaling_scale_down_utilization_threshold CloudProjectKubeNodepool#autoscaling_scale_down_utilization_threshold}
  */
  readonly autoscalingScaleDownUtilizationThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#availability_zones CloudProjectKubeNodepool#availability_zones}
  */
  readonly availabilityZones?: string[];
  /**
  * Number of nodes you desire in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#desired_nodes CloudProjectKubeNodepool#desired_nodes}
  */
  readonly desiredNodes?: number;
  /**
  * Flavor name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#flavor_name CloudProjectKubeNodepool#flavor_name}
  */
  readonly flavorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#id CloudProjectKubeNodepool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Kube ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#kube_id CloudProjectKubeNodepool#kube_id}
  */
  readonly kubeId: string;
  /**
  * Number of nodes you desire in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#max_nodes CloudProjectKubeNodepool#max_nodes}
  */
  readonly maxNodes?: number;
  /**
  * Number of nodes you desire in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#min_nodes CloudProjectKubeNodepool#min_nodes}
  */
  readonly minNodes?: number;
  /**
  * Enable monthly billing on all nodes in the pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#monthly_billed CloudProjectKubeNodepool#monthly_billed}
  */
  readonly monthlyBilled?: boolean | cdktf.IResolvable;
  /**
  * NodePool resource name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#name CloudProjectKubeNodepool#name}
  */
  readonly name?: string;
  /**
  * Service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#service_name CloudProjectKubeNodepool#service_name}
  */
  readonly serviceName: string;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#template CloudProjectKubeNodepool#template}
  */
  readonly template?: CloudProjectKubeNodepoolTemplate;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#timeouts CloudProjectKubeNodepool#timeouts}
  */
  readonly timeouts?: CloudProjectKubeNodepoolTimeouts;
}
export interface CloudProjectKubeNodepoolTemplateMetadata {
  /**
  * annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#annotations CloudProjectKubeNodepool#annotations}
  */
  readonly annotations: { [key: string]: string };
  /**
  * finalizers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#finalizers CloudProjectKubeNodepool#finalizers}
  */
  readonly finalizers: string[];
  /**
  * labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#labels CloudProjectKubeNodepool#labels}
  */
  readonly labels: { [key: string]: string };
}

export function cloudProjectKubeNodepoolTemplateMetadataToTerraform(struct?: CloudProjectKubeNodepoolTemplateMetadataOutputReference | CloudProjectKubeNodepoolTemplateMetadata): any {
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


export function cloudProjectKubeNodepoolTemplateMetadataToHclTerraform(struct?: CloudProjectKubeNodepoolTemplateMetadataOutputReference | CloudProjectKubeNodepoolTemplateMetadata): any {
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

export class CloudProjectKubeNodepoolTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectKubeNodepoolTemplateMetadata | undefined {
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

  public set internalValue(value: CloudProjectKubeNodepoolTemplateMetadata | undefined) {
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

  // annotations - computed: false, optional: false, required: true
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // finalizers - computed: false, optional: false, required: true
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
  }

  // labels - computed: false, optional: false, required: true
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}
export interface CloudProjectKubeNodepoolTemplateSpec {
  /**
  * taints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#taints CloudProjectKubeNodepool#taints}
  */
  readonly taints: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * unschedulable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#unschedulable CloudProjectKubeNodepool#unschedulable}
  */
  readonly unschedulable: boolean | cdktf.IResolvable;
}

export function cloudProjectKubeNodepoolTemplateSpecToTerraform(struct?: CloudProjectKubeNodepoolTemplateSpecOutputReference | CloudProjectKubeNodepoolTemplateSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    taints: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.taints),
    unschedulable: cdktf.booleanToTerraform(struct!.unschedulable),
  }
}


export function cloudProjectKubeNodepoolTemplateSpecToHclTerraform(struct?: CloudProjectKubeNodepoolTemplateSpecOutputReference | CloudProjectKubeNodepoolTemplateSpec): any {
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

export class CloudProjectKubeNodepoolTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectKubeNodepoolTemplateSpec | undefined {
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

  public set internalValue(value: CloudProjectKubeNodepoolTemplateSpec | undefined) {
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

  // taints - computed: false, optional: false, required: true
  private _taints?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get taints() {
    return this.interpolationForAttribute('taints');
  }
  public set taints(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._taints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints;
  }

  // unschedulable - computed: false, optional: false, required: true
  private _unschedulable?: boolean | cdktf.IResolvable; 
  public get unschedulable() {
    return this.getBooleanAttribute('unschedulable');
  }
  public set unschedulable(value: boolean | cdktf.IResolvable) {
    this._unschedulable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unschedulableInput() {
    return this._unschedulable;
  }
}
export interface CloudProjectKubeNodepoolTemplate {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#metadata CloudProjectKubeNodepool#metadata}
  */
  readonly metadata: CloudProjectKubeNodepoolTemplateMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#spec CloudProjectKubeNodepool#spec}
  */
  readonly spec: CloudProjectKubeNodepoolTemplateSpec;
}

export function cloudProjectKubeNodepoolTemplateToTerraform(struct?: CloudProjectKubeNodepoolTemplateOutputReference | CloudProjectKubeNodepoolTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cloudProjectKubeNodepoolTemplateMetadataToTerraform(struct!.metadata),
    spec: cloudProjectKubeNodepoolTemplateSpecToTerraform(struct!.spec),
  }
}


export function cloudProjectKubeNodepoolTemplateToHclTerraform(struct?: CloudProjectKubeNodepoolTemplateOutputReference | CloudProjectKubeNodepoolTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cloudProjectKubeNodepoolTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectKubeNodepoolTemplateMetadataList",
    },
    spec: {
      value: cloudProjectKubeNodepoolTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "set",
      storageClassType: "CloudProjectKubeNodepoolTemplateSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudProjectKubeNodepoolTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudProjectKubeNodepoolTemplate | undefined {
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

  public set internalValue(value: CloudProjectKubeNodepoolTemplate | undefined) {
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

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CloudProjectKubeNodepoolTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CloudProjectKubeNodepoolTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new CloudProjectKubeNodepoolTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: CloudProjectKubeNodepoolTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface CloudProjectKubeNodepoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#create CloudProjectKubeNodepool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#default CloudProjectKubeNodepool#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#delete CloudProjectKubeNodepool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#read CloudProjectKubeNodepool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#update CloudProjectKubeNodepool#update}
  */
  readonly update?: string;
}

export function cloudProjectKubeNodepoolTimeoutsToTerraform(struct?: CloudProjectKubeNodepoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudProjectKubeNodepoolTimeoutsToHclTerraform(struct?: CloudProjectKubeNodepoolTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class CloudProjectKubeNodepoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectKubeNodepoolTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectKubeNodepoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool ovh_cloud_project_kube_nodepool}
*/
export class CloudProjectKubeNodepool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_kube_nodepool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectKubeNodepool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectKubeNodepool to import
  * @param importFromId The id of the existing CloudProjectKubeNodepool that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectKubeNodepool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_kube_nodepool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_kube_nodepool ovh_cloud_project_kube_nodepool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectKubeNodepoolConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectKubeNodepoolConfig) {
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
    this._antiAffinity = config.antiAffinity;
    this._autoscale = config.autoscale;
    this._autoscalingScaleDownUnneededTimeSeconds = config.autoscalingScaleDownUnneededTimeSeconds;
    this._autoscalingScaleDownUnreadyTimeSeconds = config.autoscalingScaleDownUnreadyTimeSeconds;
    this._autoscalingScaleDownUtilizationThreshold = config.autoscalingScaleDownUtilizationThreshold;
    this._availabilityZones = config.availabilityZones;
    this._desiredNodes = config.desiredNodes;
    this._flavorName = config.flavorName;
    this._id = config.id;
    this._kubeId = config.kubeId;
    this._maxNodes = config.maxNodes;
    this._minNodes = config.minNodes;
    this._monthlyBilled = config.monthlyBilled;
    this._name = config.name;
    this._serviceName = config.serviceName;
    this._template.internalValue = config.template;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anti_affinity - computed: true, optional: true, required: false
  private _antiAffinity?: boolean | cdktf.IResolvable; 
  public get antiAffinity() {
    return this.getBooleanAttribute('anti_affinity');
  }
  public set antiAffinity(value: boolean | cdktf.IResolvable) {
    this._antiAffinity = value;
  }
  public resetAntiAffinity() {
    this._antiAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityInput() {
    return this._antiAffinity;
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale?: boolean | cdktf.IResolvable; 
  public get autoscale() {
    return this.getBooleanAttribute('autoscale');
  }
  public set autoscale(value: boolean | cdktf.IResolvable) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
  }

  // autoscaling_scale_down_unneeded_time_seconds - computed: true, optional: true, required: false
  private _autoscalingScaleDownUnneededTimeSeconds?: number; 
  public get autoscalingScaleDownUnneededTimeSeconds() {
    return this.getNumberAttribute('autoscaling_scale_down_unneeded_time_seconds');
  }
  public set autoscalingScaleDownUnneededTimeSeconds(value: number) {
    this._autoscalingScaleDownUnneededTimeSeconds = value;
  }
  public resetAutoscalingScaleDownUnneededTimeSeconds() {
    this._autoscalingScaleDownUnneededTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingScaleDownUnneededTimeSecondsInput() {
    return this._autoscalingScaleDownUnneededTimeSeconds;
  }

  // autoscaling_scale_down_unready_time_seconds - computed: true, optional: true, required: false
  private _autoscalingScaleDownUnreadyTimeSeconds?: number; 
  public get autoscalingScaleDownUnreadyTimeSeconds() {
    return this.getNumberAttribute('autoscaling_scale_down_unready_time_seconds');
  }
  public set autoscalingScaleDownUnreadyTimeSeconds(value: number) {
    this._autoscalingScaleDownUnreadyTimeSeconds = value;
  }
  public resetAutoscalingScaleDownUnreadyTimeSeconds() {
    this._autoscalingScaleDownUnreadyTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingScaleDownUnreadyTimeSecondsInput() {
    return this._autoscalingScaleDownUnreadyTimeSeconds;
  }

  // autoscaling_scale_down_utilization_threshold - computed: true, optional: true, required: false
  private _autoscalingScaleDownUtilizationThreshold?: number; 
  public get autoscalingScaleDownUtilizationThreshold() {
    return this.getNumberAttribute('autoscaling_scale_down_utilization_threshold');
  }
  public set autoscalingScaleDownUtilizationThreshold(value: number) {
    this._autoscalingScaleDownUtilizationThreshold = value;
  }
  public resetAutoscalingScaleDownUtilizationThreshold() {
    this._autoscalingScaleDownUtilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingScaleDownUtilizationThresholdInput() {
    return this._autoscalingScaleDownUtilizationThreshold;
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

  // desired_nodes - computed: true, optional: true, required: false
  private _desiredNodes?: number; 
  public get desiredNodes() {
    return this.getNumberAttribute('desired_nodes');
  }
  public set desiredNodes(value: number) {
    this._desiredNodes = value;
  }
  public resetDesiredNodes() {
    this._desiredNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredNodesInput() {
    return this._desiredNodes;
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
  }

  // flavor_name - computed: false, optional: false, required: true
  private _flavorName?: string; 
  public get flavorName() {
    return this.getStringAttribute('flavor_name');
  }
  public set flavorName(value: string) {
    this._flavorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorNameInput() {
    return this._flavorName;
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

  // max_nodes - computed: true, optional: true, required: false
  private _maxNodes?: number; 
  public get maxNodes() {
    return this.getNumberAttribute('max_nodes');
  }
  public set maxNodes(value: number) {
    this._maxNodes = value;
  }
  public resetMaxNodes() {
    this._maxNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodesInput() {
    return this._maxNodes;
  }

  // min_nodes - computed: true, optional: true, required: false
  private _minNodes?: number; 
  public get minNodes() {
    return this.getNumberAttribute('min_nodes');
  }
  public set minNodes(value: number) {
    this._minNodes = value;
  }
  public resetMinNodes() {
    this._minNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodesInput() {
    return this._minNodes;
  }

  // monthly_billed - computed: true, optional: true, required: false
  private _monthlyBilled?: boolean | cdktf.IResolvable; 
  public get monthlyBilled() {
    return this.getBooleanAttribute('monthly_billed');
  }
  public set monthlyBilled(value: boolean | cdktf.IResolvable) {
    this._monthlyBilled = value;
  }
  public resetMonthlyBilled() {
    this._monthlyBilled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyBilledInput() {
    return this._monthlyBilled;
  }

  // name - computed: true, optional: true, required: false
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
  private _template = new CloudProjectKubeNodepoolTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: CloudProjectKubeNodepoolTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudProjectKubeNodepoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudProjectKubeNodepoolTimeouts) {
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
      anti_affinity: cdktf.booleanToTerraform(this._antiAffinity),
      autoscale: cdktf.booleanToTerraform(this._autoscale),
      autoscaling_scale_down_unneeded_time_seconds: cdktf.numberToTerraform(this._autoscalingScaleDownUnneededTimeSeconds),
      autoscaling_scale_down_unready_time_seconds: cdktf.numberToTerraform(this._autoscalingScaleDownUnreadyTimeSeconds),
      autoscaling_scale_down_utilization_threshold: cdktf.numberToTerraform(this._autoscalingScaleDownUtilizationThreshold),
      availability_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._availabilityZones),
      desired_nodes: cdktf.numberToTerraform(this._desiredNodes),
      flavor_name: cdktf.stringToTerraform(this._flavorName),
      id: cdktf.stringToTerraform(this._id),
      kube_id: cdktf.stringToTerraform(this._kubeId),
      max_nodes: cdktf.numberToTerraform(this._maxNodes),
      min_nodes: cdktf.numberToTerraform(this._minNodes),
      monthly_billed: cdktf.booleanToTerraform(this._monthlyBilled),
      name: cdktf.stringToTerraform(this._name),
      service_name: cdktf.stringToTerraform(this._serviceName),
      template: cloudProjectKubeNodepoolTemplateToTerraform(this._template.internalValue),
      timeouts: cloudProjectKubeNodepoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anti_affinity: {
        value: cdktf.booleanToHclTerraform(this._antiAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autoscale: {
        value: cdktf.booleanToHclTerraform(this._autoscale),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autoscaling_scale_down_unneeded_time_seconds: {
        value: cdktf.numberToHclTerraform(this._autoscalingScaleDownUnneededTimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autoscaling_scale_down_unready_time_seconds: {
        value: cdktf.numberToHclTerraform(this._autoscalingScaleDownUnreadyTimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autoscaling_scale_down_utilization_threshold: {
        value: cdktf.numberToHclTerraform(this._autoscalingScaleDownUtilizationThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      availability_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._availabilityZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      desired_nodes: {
        value: cdktf.numberToHclTerraform(this._desiredNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flavor_name: {
        value: cdktf.stringToHclTerraform(this._flavorName),
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
      kube_id: {
        value: cdktf.stringToHclTerraform(this._kubeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_nodes: {
        value: cdktf.numberToHclTerraform(this._maxNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_nodes: {
        value: cdktf.numberToHclTerraform(this._minNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monthly_billed: {
        value: cdktf.booleanToHclTerraform(this._monthlyBilled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
        value: cloudProjectKubeNodepoolTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudProjectKubeNodepoolTemplateList",
      },
      timeouts: {
        value: cloudProjectKubeNodepoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudProjectKubeNodepoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
