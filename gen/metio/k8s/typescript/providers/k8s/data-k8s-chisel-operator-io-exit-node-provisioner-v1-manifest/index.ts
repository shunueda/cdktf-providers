// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#metadata DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#metadata}
  */
  readonly metadata: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadata;
  /**
  * ExitNodeProvisioner is a custom resource that represents a Chisel exit node provisioner on a cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#spec DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#spec}
  */
  readonly spec: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpec;
}
export interface DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#annotations DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#labels DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#name DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#namespace DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadataToTerraform(struct?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadataToHclTerraform(struct?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAws {
  /**
  * Reference to a secret containing the AWS access key ID and secret access key, under the 'access_key_id' and 'secret_access_key' secret keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#auth DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#auth}
  */
  readonly auth: string;
  /**
  * Region ID for the AWS region to provision the exit node in See https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#region DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#region}
  */
  readonly region: string;
  /**
  * Security group name to use for the exit node, uses the default security group if not specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#security_group DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#security_group}
  */
  readonly securityGroup?: string;
  /**
  * Size for the EC2 instance See https://aws.amazon.com/ec2/instance-types/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#size DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#size}
  */
  readonly size?: string;
}

export function dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAwsToTerraform(struct?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    region: cdktf.stringToTerraform(struct!.region),
    security_group: cdktf.stringToTerraform(struct!.securityGroup),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAwsToHclTerraform(struct?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAws | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group: {
      value: cdktf.stringToHclTerraform(struct!.securityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAws | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAws | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth = undefined;
      this._region = undefined;
      this._securityGroup = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth = value.auth;
      this._region = value.region;
      this._securityGroup = value.securityGroup;
      this._size = value.size;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group - computed: false, optional: true, required: false
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  public resetSecurityGroup() {
    this._securityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOcean {
  /**
  * Reference to a secret containing the DigitalOcean API token, under the 'DIGITALOCEAN_TOKEN' secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#auth DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#auth}
  */
  readonly auth: string;
  /**
  * Region ID of the DigitalOcean datacenter to provision the exit node in If empty, DigitalOcean will randomly select a region for you, which might not be what you want See https://slugs.do-api.dev/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#region DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#region}
  */
  readonly region?: string;
  /**
  * Size for the DigitalOcean droplet See https://slugs.do-api.dev/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#size DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#size}
  */
  readonly size?: string;
  /**
  * SSH key fingerprints to add to the exit node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#ssh_fingerprints DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#ssh_fingerprints}
  */
  readonly sshFingerprints?: string[];
}

export function dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOceanToTerraform(struct?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOcean | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    region: cdktf.stringToTerraform(struct!.region),
    size: cdktf.stringToTerraform(struct!.size),
    ssh_fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshFingerprints),
  }
}


export function dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOceanToHclTerraform(struct?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOcean | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_fingerprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshFingerprints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOceanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOcean | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sshFingerprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshFingerprints = this._sshFingerprints;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOcean | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth = undefined;
      this._region = undefined;
      this._size = undefined;
      this._sshFingerprints = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth = value.auth;
      this._region = value.region;
      this._size = value.size;
      this._sshFingerprints = value.sshFingerprints;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // ssh_fingerprints - computed: false, optional: true, required: false
  private _sshFingerprints?: string[]; 
  public get sshFingerprints() {
    return this.getListAttribute('ssh_fingerprints');
  }
  public set sshFingerprints(value: string[]) {
    this._sshFingerprints = value;
  }
  public resetSshFingerprints() {
    this._sshFingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshFingerprintsInput() {
    return this._sshFingerprints;
  }
}
export interface DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinode {
  /**
  * Name of the secret containing the Linode API token, under the 'LINODE_TOKEN' secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#auth DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#auth}
  */
  readonly auth: string;
  /**
  * Region ID of the Linode datacenter to provision the exit node in See https://api.linode.com/v4/regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#region DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#region}
  */
  readonly region: string;
  /**
  * Size for the Linode instance See https://api.linode.com/v4/linode/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#size DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#size}
  */
  readonly size?: string;
}

export function dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinodeToTerraform(struct?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.stringToTerraform(struct!.auth),
    region: cdktf.stringToTerraform(struct!.region),
    size: cdktf.stringToTerraform(struct!.size),
  }
}


export function dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinodeToHclTerraform(struct?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.stringToHclTerraform(struct!.auth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth = undefined;
      this._region = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth = value.auth;
      this._region = value.region;
      this._size = value.size;
    }
  }

  // auth - computed: false, optional: false, required: true
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#aws DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#aws}
  */
  readonly aws?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAws;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#digital_ocean DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#digital_ocean}
  */
  readonly digitalOcean?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOcean;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#linode DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest#linode}
  */
  readonly linode?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinode;
}

export function dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecToTerraform(struct?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws: dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAwsToTerraform(struct!.aws),
    digital_ocean: dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOceanToTerraform(struct!.digitalOcean),
    linode: dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinodeToTerraform(struct!.linode),
  }
}


export function dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecToHclTerraform(struct?: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws: {
      value: dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAwsToHclTerraform(struct!.aws),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAws",
    },
    digital_ocean: {
      value: dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOceanToHclTerraform(struct!.digitalOcean),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOcean",
    },
    linode: {
      value: dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinodeToHclTerraform(struct!.linode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinode",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aws?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aws = this._aws?.internalValue;
    }
    if (this._digitalOcean?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalOcean = this._digitalOcean?.internalValue;
    }
    if (this._linode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linode = this._linode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aws.internalValue = undefined;
      this._digitalOcean.internalValue = undefined;
      this._linode.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aws.internalValue = value.aws;
      this._digitalOcean.internalValue = value.digitalOcean;
      this._linode.internalValue = value.linode;
    }
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // digital_ocean - computed: false, optional: true, required: false
  private _digitalOcean = new DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOceanOutputReference(this, "digital_ocean");
  public get digitalOcean() {
    return this._digitalOcean;
  }
  public putDigitalOcean(value: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecDigitalOcean) {
    this._digitalOcean.internalValue = value;
  }
  public resetDigitalOcean() {
    this._digitalOcean.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalOceanInput() {
    return this._digitalOcean.internalValue;
  }

  // linode - computed: false, optional: true, required: false
  private _linode = new DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinodeOutputReference(this, "linode");
  public get linode() {
    return this._linode;
  }
  public putLinode(value: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecLinode) {
    this._linode.internalValue = value;
  }
  public resetLinode() {
    this._linode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeInput() {
    return this._linode.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest k8s_chisel_operator_io_exit_node_provisioner_v1_manifest}
*/
export class DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chisel_operator_io_exit_node_provisioner_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest to import
  * @param importFromId The id of the existing DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChiselOperatorIoExitNodeProvisionerV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chisel_operator_io_exit_node_provisioner_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/chisel_operator_io_exit_node_provisioner_v1_manifest k8s_chisel_operator_io_exit_node_provisioner_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chisel_operator_io_exit_node_provisioner_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestMetadata",
      },
      spec: {
        value: dataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChiselOperatorIoExitNodeProvisionerV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
