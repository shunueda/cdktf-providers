// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#metadata DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadata;
  /**
  * CloudStackDatacenterConfigSpec defines the desired state of CloudStackDatacenterConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#spec DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpec;
}
export interface DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#annotations DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#labels DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#namespace DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetwork {
  /**
  * Id of a resource in the CloudStack environment. Mutually exclusive with Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#id DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of a resource in the CloudStack environment. Mutually exclusive with Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetworkToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetworkToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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
}
export interface DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZone {
  /**
  * Zone is the name or UUID of the CloudStack zone in which clusters should be created. Zones should be managed by a single CloudStack Management endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#id DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Network is the name or UUID of the CloudStack network in which clusters should be created. It can either be an isolated or shared network. If it doesn’t already exist in CloudStack, it’ll automatically be created by CAPC as an isolated network. It can either be specified as a UUID or name In multiple-zones situation, only 'Shared' network is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#network DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#network}
  */
  readonly network: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetwork;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    network: dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetworkToTerraform(struct!.network),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetwork",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._network.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._network.internalValue = value.network;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // network - computed: false, optional: false, required: true
  private _network = new DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZones {
  /**
  * Account typically represents a customer of the service provider or a department in a large organization. Multiple users can exist in an account, and all CloudStack resources belong to an account. Accounts have users and users have credentials to operate on resources within that account. If an account name is provided, a domain must also be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#account DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#account}
  */
  readonly account?: string;
  /**
  * CredentialRef is used to reference a secret in the eksa-system namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#credentials_ref DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#credentials_ref}
  */
  readonly credentialsRef: string;
  /**
  * Domain contains a grouping of accounts. Domains usually contain multiple accounts that have some logical relationship to each other and a set of delegated administrators with some authority over the domain and its subdomains This field is considered as a fully qualified domain name which is the same as the domain path without 'ROOT/' prefix. For example, if 'foo' is specified then a domain with 'ROOT/foo' domain path is picked. The value 'ROOT' is a special case that points to 'the' ROOT domain of the CloudStack. That is, a domain with a path 'ROOT/ROOT' is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#domain DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#domain}
  */
  readonly domain: string;
  /**
  * CloudStack Management API endpoint's IP. It is added to VM's noproxy list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#management_api_endpoint DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#management_api_endpoint}
  */
  readonly managementApiEndpoint: string;
  /**
  * Name is used as a unique identifier for each availability zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Zone represents the properties of the CloudStack zone in which clusters should be created, like the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#zone DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#zone}
  */
  readonly zone: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZone;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    credentials_ref: cdktf.stringToTerraform(struct!.credentialsRef),
    domain: cdktf.stringToTerraform(struct!.domain),
    management_api_endpoint: cdktf.stringToTerraform(struct!.managementApiEndpoint),
    name: cdktf.stringToTerraform(struct!.name),
    zone: dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneToTerraform(struct!.zone),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_ref: {
      value: cdktf.stringToHclTerraform(struct!.credentialsRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_api_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.managementApiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneToHclTerraform(struct!.zone),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZone",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._credentialsRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsRef = this._credentialsRef;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._managementApiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementApiEndpoint = this._managementApiEndpoint;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._zone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._credentialsRef = undefined;
      this._domain = undefined;
      this._managementApiEndpoint = undefined;
      this._name = undefined;
      this._zone.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._credentialsRef = value.credentialsRef;
      this._domain = value.domain;
      this._managementApiEndpoint = value.managementApiEndpoint;
      this._name = value.name;
      this._zone.internalValue = value.zone;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // credentials_ref - computed: false, optional: false, required: true
  private _credentialsRef?: string; 
  public get credentialsRef() {
    return this.getStringAttribute('credentials_ref');
  }
  public set credentialsRef(value: string) {
    this._credentialsRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsRefInput() {
    return this._credentialsRef;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // management_api_endpoint - computed: false, optional: false, required: true
  private _managementApiEndpoint?: string; 
  public get managementApiEndpoint() {
    return this.getStringAttribute('management_api_endpoint');
  }
  public set managementApiEndpoint(value: string) {
    this._managementApiEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementApiEndpointInput() {
    return this._managementApiEndpoint;
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

  // zone - computed: false, optional: false, required: true
  private _zone = new DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZoneOutputReference(this, "zone");
  public get zone() {
    return this._zone;
  }
  public putZone(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesZone) {
    this._zone.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone.internalValue;
  }
}

export class DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZones[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesOutputReference {
    return new DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetwork {
  /**
  * Id of a resource in the CloudStack environment. Mutually exclusive with Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#id DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of a resource in the CloudStack environment. Mutually exclusive with Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetworkToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetworkToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
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
}
export interface DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZones {
  /**
  * Zone is the name or UUID of the CloudStack zone in which clusters should be created. Zones should be managed by a single CloudStack Management endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#id DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#name DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Network is the name or UUID of the CloudStack network in which clusters should be created. It can either be an isolated or shared network. If it doesn’t already exist in CloudStack, it’ll automatically be created by CAPC as an isolated network. It can either be specified as a UUID or name In multiple-zones situation, only 'Shared' network is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#network DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#network}
  */
  readonly network: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetwork;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    network: dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetworkToTerraform(struct!.network),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetwork",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._network.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._network.internalValue = value.network;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // network - computed: false, optional: false, required: true
  private _network = new DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}

export class DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZones[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesOutputReference {
    return new DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpec {
  /**
  * Account typically represents a customer of the service provider or a department in a large organization. Multiple users can exist in an account, and all CloudStack resources belong to an account. Accounts have users and users have credentials to operate on resources within that account. If an account name is provided, a domain must also be provided. Deprecated: Please use AvailabilityZones instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#account DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#account}
  */
  readonly account?: string;
  /**
  * AvailabilityZones list of different partitions to distribute VMs across - corresponds to a list of CAPI failure domains
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#availability_zones DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#availability_zones}
  */
  readonly availabilityZones?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZones[] | cdktf.IResolvable;
  /**
  * Domain contains a grouping of accounts. Domains usually contain multiple accounts that have some logical relationship to each other and a set of delegated administrators with some authority over the domain and its subdomains This field is considered as a fully qualified domain name which is the same as the domain path without 'ROOT/' prefix. For example, if 'foo' is specified then a domain with 'ROOT/foo' domain path is picked. The value 'ROOT' is a special case that points to 'the' ROOT domain of the CloudStack. That is, a domain with a path 'ROOT/ROOT' is not allowed. Deprecated: Please use AvailabilityZones instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#domain DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#domain}
  */
  readonly domain?: string;
  /**
  * CloudStack Management API endpoint's IP. It is added to VM's noproxy list Deprecated: Please use AvailabilityZones instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#management_api_endpoint DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#management_api_endpoint}
  */
  readonly managementApiEndpoint?: string;
  /**
  * Zones is a list of one or more zones that are managed by a single CloudStack management endpoint. Deprecated: Please use AvailabilityZones instead
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#zones DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest#zones}
  */
  readonly zones?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZones[] | cdktf.IResolvable;
}

export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    availability_zones: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesToTerraform, false)(struct!.availabilityZones),
    domain: cdktf.stringToTerraform(struct!.domain),
    management_api_endpoint: cdktf.stringToTerraform(struct!.managementApiEndpoint),
    zones: cdktf.listMapper(dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesToTerraform, false)(struct!.zones),
  }
}


export function dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zones: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesToHclTerraform, false)(struct!.availabilityZones),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management_api_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.managementApiEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zones: {
      value: cdktf.listMapperHcl(dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesToHclTerraform, false)(struct!.zones),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._availabilityZones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZones = this._availabilityZones?.internalValue;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._managementApiEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementApiEndpoint = this._managementApiEndpoint;
    }
    if (this._zones?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._availabilityZones.internalValue = undefined;
      this._domain = undefined;
      this._managementApiEndpoint = undefined;
      this._zones.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._availabilityZones.internalValue = value.availabilityZones;
      this._domain = value.domain;
      this._managementApiEndpoint = value.managementApiEndpoint;
      this._zones.internalValue = value.zones;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // availability_zones - computed: false, optional: true, required: false
  private _availabilityZones = new DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZonesList(this, "availability_zones", false);
  public get availabilityZones() {
    return this._availabilityZones;
  }
  public putAvailabilityZones(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecAvailabilityZones[] | cdktf.IResolvable) {
    this._availabilityZones.internalValue = value;
  }
  public resetAvailabilityZones() {
    this._availabilityZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZonesInput() {
    return this._availabilityZones.internalValue;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // management_api_endpoint - computed: false, optional: true, required: false
  private _managementApiEndpoint?: string; 
  public get managementApiEndpoint() {
    return this.getStringAttribute('management_api_endpoint');
  }
  public set managementApiEndpoint(value: string) {
    this._managementApiEndpoint = value;
  }
  public resetManagementApiEndpoint() {
    this._managementApiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementApiEndpointInput() {
    return this._managementApiEndpoint;
  }

  // zones - computed: false, optional: true, required: false
  private _zones = new DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZonesList(this, "zones", false);
  public get zones() {
    return this._zones;
  }
  public putZones(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecZones[] | cdktf.IResolvable) {
    this._zones.internalValue = value;
  }
  public resetZones() {
    this._zones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest}
*/
export class DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest k8s_anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_anywhere_eks_amazonaws_com_cloud_stack_datacenter_config_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAnywhereEksAmazonawsComCloudStackDatacenterConfigV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
