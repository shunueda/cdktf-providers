// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#metadata DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadata;
  /**
  * AmazonCloudIntegrationSpec defines the desired state of AmazonCloudIntegration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#spec DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpec;
}
export interface DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#annotations DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#labels DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#name DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadataToTerraform(struct?: DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadata | cdktf.IResolvable): any {
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
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
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
}
export interface DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpec {
  /**
  * AWSRegion is the region in which your cluster is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#aws_region DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * DefaultPodMetadataAccess defines what the default behavior will be for accessing the AWS metadata service from a pod. Default: Denied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#default_pod_metadata_access DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#default_pod_metadata_access}
  */
  readonly defaultPodMetadataAccess?: string;
  /**
  * EnforcedSecurityGroupID is the ID of the Security Group which will be applied to all ENIs that are on a host that is also part of the Kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#enforced_security_group_id DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#enforced_security_group_id}
  */
  readonly enforcedSecurityGroupId?: string;
  /**
  * NodeSecurityGroupIDs is a list of Security Group IDs that all nodes and masters will be in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#node_security_group_i_ds DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#node_security_group_i_ds}
  */
  readonly nodeSecurityGroupIDs?: string[];
  /**
  * PodSecurityGroupID is the ID of the Security Group which all pods should be placed in by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#pod_security_group_id DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#pod_security_group_id}
  */
  readonly podSecurityGroupId?: string;
  /**
  * SQSURL is the SQS URL needed to access the Simple Queue Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#sqs_url DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#sqs_url}
  */
  readonly sqsUrl?: string;
  /**
  * TrustEnforcedSecurityGroupID is the ID of the Security Group which will be applied to all ENIs in the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#trust_enforced_security_group_id DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#trust_enforced_security_group_id}
  */
  readonly trustEnforcedSecurityGroupId?: string;
  /**
  * VPCS is a list of VPC IDs to monitor for ENIs and Security Groups, only one is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#vpcs DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest#vpcs}
  */
  readonly vpcs?: string[];
}

export function dataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpecToTerraform(struct?: DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    default_pod_metadata_access: cdktf.stringToTerraform(struct!.defaultPodMetadataAccess),
    enforced_security_group_id: cdktf.stringToTerraform(struct!.enforcedSecurityGroupId),
    node_security_group_i_ds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeSecurityGroupIDs),
    pod_security_group_id: cdktf.stringToTerraform(struct!.podSecurityGroupId),
    sqs_url: cdktf.stringToTerraform(struct!.sqsUrl),
    trust_enforced_security_group_id: cdktf.stringToTerraform(struct!.trustEnforcedSecurityGroupId),
    vpcs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcs),
  }
}


export function dataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpecToHclTerraform(struct?: DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_pod_metadata_access: {
      value: cdktf.stringToHclTerraform(struct!.defaultPodMetadataAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforced_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.enforcedSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_security_group_i_ds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeSecurityGroupIDs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pod_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.podSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sqs_url: {
      value: cdktf.stringToHclTerraform(struct!.sqsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_enforced_security_group_id: {
      value: cdktf.stringToHclTerraform(struct!.trustEnforcedSecurityGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpcs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._defaultPodMetadataAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPodMetadataAccess = this._defaultPodMetadataAccess;
    }
    if (this._enforcedSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcedSecurityGroupId = this._enforcedSecurityGroupId;
    }
    if (this._nodeSecurityGroupIDs !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSecurityGroupIDs = this._nodeSecurityGroupIDs;
    }
    if (this._podSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityGroupId = this._podSecurityGroupId;
    }
    if (this._sqsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsUrl = this._sqsUrl;
    }
    if (this._trustEnforcedSecurityGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustEnforcedSecurityGroupId = this._trustEnforcedSecurityGroupId;
    }
    if (this._vpcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcs = this._vpcs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsRegion = undefined;
      this._defaultPodMetadataAccess = undefined;
      this._enforcedSecurityGroupId = undefined;
      this._nodeSecurityGroupIDs = undefined;
      this._podSecurityGroupId = undefined;
      this._sqsUrl = undefined;
      this._trustEnforcedSecurityGroupId = undefined;
      this._vpcs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsRegion = value.awsRegion;
      this._defaultPodMetadataAccess = value.defaultPodMetadataAccess;
      this._enforcedSecurityGroupId = value.enforcedSecurityGroupId;
      this._nodeSecurityGroupIDs = value.nodeSecurityGroupIDs;
      this._podSecurityGroupId = value.podSecurityGroupId;
      this._sqsUrl = value.sqsUrl;
      this._trustEnforcedSecurityGroupId = value.trustEnforcedSecurityGroupId;
      this._vpcs = value.vpcs;
    }
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // default_pod_metadata_access - computed: false, optional: true, required: false
  private _defaultPodMetadataAccess?: string; 
  public get defaultPodMetadataAccess() {
    return this.getStringAttribute('default_pod_metadata_access');
  }
  public set defaultPodMetadataAccess(value: string) {
    this._defaultPodMetadataAccess = value;
  }
  public resetDefaultPodMetadataAccess() {
    this._defaultPodMetadataAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPodMetadataAccessInput() {
    return this._defaultPodMetadataAccess;
  }

  // enforced_security_group_id - computed: false, optional: true, required: false
  private _enforcedSecurityGroupId?: string; 
  public get enforcedSecurityGroupId() {
    return this.getStringAttribute('enforced_security_group_id');
  }
  public set enforcedSecurityGroupId(value: string) {
    this._enforcedSecurityGroupId = value;
  }
  public resetEnforcedSecurityGroupId() {
    this._enforcedSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedSecurityGroupIdInput() {
    return this._enforcedSecurityGroupId;
  }

  // node_security_group_i_ds - computed: false, optional: true, required: false
  private _nodeSecurityGroupIDs?: string[]; 
  public get nodeSecurityGroupIDs() {
    return this.getListAttribute('node_security_group_i_ds');
  }
  public set nodeSecurityGroupIDs(value: string[]) {
    this._nodeSecurityGroupIDs = value;
  }
  public resetNodeSecurityGroupIDs() {
    this._nodeSecurityGroupIDs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSecurityGroupIDsInput() {
    return this._nodeSecurityGroupIDs;
  }

  // pod_security_group_id - computed: false, optional: true, required: false
  private _podSecurityGroupId?: string; 
  public get podSecurityGroupId() {
    return this.getStringAttribute('pod_security_group_id');
  }
  public set podSecurityGroupId(value: string) {
    this._podSecurityGroupId = value;
  }
  public resetPodSecurityGroupId() {
    this._podSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityGroupIdInput() {
    return this._podSecurityGroupId;
  }

  // sqs_url - computed: false, optional: true, required: false
  private _sqsUrl?: string; 
  public get sqsUrl() {
    return this.getStringAttribute('sqs_url');
  }
  public set sqsUrl(value: string) {
    this._sqsUrl = value;
  }
  public resetSqsUrl() {
    this._sqsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsUrlInput() {
    return this._sqsUrl;
  }

  // trust_enforced_security_group_id - computed: false, optional: true, required: false
  private _trustEnforcedSecurityGroupId?: string; 
  public get trustEnforcedSecurityGroupId() {
    return this.getStringAttribute('trust_enforced_security_group_id');
  }
  public set trustEnforcedSecurityGroupId(value: string) {
    this._trustEnforcedSecurityGroupId = value;
  }
  public resetTrustEnforcedSecurityGroupId() {
    this._trustEnforcedSecurityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustEnforcedSecurityGroupIdInput() {
    return this._trustEnforcedSecurityGroupId;
  }

  // vpcs - computed: false, optional: true, required: false
  private _vpcs?: string[]; 
  public get vpcs() {
    return this.getListAttribute('vpcs');
  }
  public set vpcs(value: string[]) {
    this._vpcs = value;
  }
  public resetVpcs() {
    this._vpcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcsInput() {
    return this._vpcs;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest k8s_operator_tigera_io_amazon_cloud_integration_v1_manifest}
*/
export class DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_tigera_io_amazon_cloud_integration_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorTigeraIoAmazonCloudIntegrationV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_tigera_io_amazon_cloud_integration_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/operator_tigera_io_amazon_cloud_integration_v1_manifest k8s_operator_tigera_io_amazon_cloud_integration_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_tigera_io_amazon_cloud_integration_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorTigeraIoAmazonCloudIntegrationV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
