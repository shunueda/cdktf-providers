// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#metadata DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#metadata}
  */
  readonly metadata: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadata;
  /**
  * FelixConfigurationSpec contains the values of the Felix configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#spec DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#spec}
  */
  readonly spec?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpec;
}
export interface DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#annotations DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#labels DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#name DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadataToTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadataToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#net DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#net}
  */
  readonly net?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#port DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#protocol DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPortsToTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    net: cdktf.stringToTerraform(struct!.net),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPortsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    net: {
      value: cdktf.stringToHclTerraform(struct!.net),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._net !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._net = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._net = value.net;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // net - computed: false, optional: true, required: false
  private _net?: string; 
  public get net() {
    return this.getStringAttribute('net');
  }
  public set net(value: string) {
    this._net = value;
  }
  public resetNet() {
    this._net = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPortsOutputReference {
    return new DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#net DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#net}
  */
  readonly net?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#port DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#protocol DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPortsToTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    net: cdktf.stringToTerraform(struct!.net),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPortsToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    net: {
      value: cdktf.stringToHclTerraform(struct!.net),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._net !== undefined) {
      hasAnyValues = true;
      internalValueResult.net = this._net;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._net = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._net = value.net;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // net - computed: false, optional: true, required: false
  private _net?: string; 
  public get net() {
    return this.getStringAttribute('net');
  }
  public set net(value: string) {
    this._net = value;
  }
  public resetNet() {
    this._net = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netInput() {
    return this._net;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPortsOutputReference {
    return new DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#name DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#timeout DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#timeout}
  */
  readonly timeout: string;
}

export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverridesToTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverridesToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._timeout = value.timeout;
    }
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

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverridesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverrides[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverridesOutputReference {
    return new DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#max DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#min DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#min}
  */
  readonly min: number;
}

export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangeToTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangeToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRanges {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#max DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#max}
  */
  readonly max: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#min DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#min}
  */
  readonly min: number;
}

export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangesToTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangesToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRanges | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRanges | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRanges | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._max = undefined;
      this._min = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: false, required: true
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: false, required: true
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}

export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRanges[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangesOutputReference {
    return new DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpec {
  /**
  * AllowIPIPPacketsFromWorkloads controls whether Felix will add a rule to drop IPIP encapsulated traffic from workloads [Default: false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#allow_ipip_packets_from_workloads DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#allow_ipip_packets_from_workloads}
  */
  readonly allowIpipPacketsFromWorkloads?: boolean | cdktf.IResolvable;
  /**
  * AllowVXLANPacketsFromWorkloads controls whether Felix will add a rule to drop VXLAN encapsulated traffic from workloads [Default: false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#allow_vxlan_packets_from_workloads DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#allow_vxlan_packets_from_workloads}
  */
  readonly allowVxlanPacketsFromWorkloads?: boolean | cdktf.IResolvable;
  /**
  * Set source-destination-check on AWS EC2 instances. Accepted value must be one of 'DoNothing', 'Enable' or 'Disable'. [Default: DoNothing]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#aws_src_dst_check DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#aws_src_dst_check}
  */
  readonly awsSrcDstCheck?: string;
  /**
  * BPFConnectTimeLoadBalancing when in BPF mode, controls whether Felix installs the connect-time load balancer. The connect-time load balancer is required for the host to be able to reach Kubernetes services and it improves the performance of pod-to-service connections.When set to TCP, connect time load balancing is available only for services with TCP ports. [Default: TCP]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_connect_time_load_balancing DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_connect_time_load_balancing}
  */
  readonly bpfConnectTimeLoadBalancing?: string;
  /**
  * BPFConnectTimeLoadBalancingEnabled when in BPF mode, controls whether Felix installs the connection-time load balancer. The connect-time load balancer is required for the host to be able to reach Kubernetes services and it improves the performance of pod-to-service connections. The only reason to disable it is for debugging purposes. This will be deprecated. Use BPFConnectTimeLoadBalancing [Default: true]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_connect_time_load_balancing_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_connect_time_load_balancing_enabled}
  */
  readonly bpfConnectTimeLoadBalancingEnabled?: boolean | cdktf.IResolvable;
  /**
  * BPFCTLBLogFilter specifies, what is logged by connect time load balancer when BPFLogLevel is debug. Currently has to be specified as 'all' when BPFLogFilters is set to see CTLB logs. [Default: unset - means logs are emitted when BPFLogLevel id debug and BPFLogFilters not set.]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_ctlb_log_filter DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_ctlb_log_filter}
  */
  readonly bpfCtlbLogFilter?: string;
  /**
  * BPFDataIfacePattern is a regular expression that controls which interfaces Felix should attach BPF programs to in order to catch traffic to/from the network. This needs to match the interfaces that Calico workload traffic flows over as well as any interfaces that handle incoming traffic to nodeports and services from outside the cluster. It should not match the workload interfaces (usually named cali...).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_data_iface_pattern DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_data_iface_pattern}
  */
  readonly bpfDataIfacePattern?: string;
  /**
  * BPFDisableGROForIfaces is a regular expression that controls which interfaces Felix should disable the Generic Receive Offload [GRO] option. It should not match the workload interfaces (usually named cali...).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_disable_gro_for_ifaces DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_disable_gro_for_ifaces}
  */
  readonly bpfDisableGroForIfaces?: string;
  /**
  * BPFDisableUnprivileged, if enabled, Felix sets the kernel.unprivileged_bpf_disabled sysctl to disable unprivileged use of BPF. This ensures that unprivileged users cannot access Calico's BPF maps and cannot insert their own BPF programs to interfere with Calico's. [Default: true]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_disable_unprivileged DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_disable_unprivileged}
  */
  readonly bpfDisableUnprivileged?: boolean | cdktf.IResolvable;
  /**
  * BPFDSROptoutCIDRs is a list of CIDRs which are excluded from DSR. That is, clients in those CIDRs will accesses nodeports as if BPFExternalServiceMode was set to Tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_dsr_optout_cidrs DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_dsr_optout_cidrs}
  */
  readonly bpfDsrOptoutCidrs?: string[];
  /**
  * BPFEnabled, if enabled Felix will use the BPF dataplane. [Default: false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_enabled}
  */
  readonly bpfEnabled?: boolean | cdktf.IResolvable;
  /**
  * BPFEnforceRPF enforce strict RPF on all host interfaces with BPF programs regardless of what is the per-interfaces or global setting. Possible values are Disabled, Strict or Loose. [Default: Loose]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_enforce_rpf DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_enforce_rpf}
  */
  readonly bpfEnforceRpf?: string;
  /**
  * BPFExcludeCIDRsFromNAT is a list of CIDRs that are to be excluded from NAT resolution so that host can handle them. A typical usecase is node local DNS cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_exclude_cidrs_from_nat DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_exclude_cidrs_from_nat}
  */
  readonly bpfExcludeCidrsFromNat?: string[];
  /**
  * BPFExtToServiceConnmark in BPF mode, control a 32bit mark that is set on connections from an external client to a local service. This mark allows us to control how packets of that connection are routed within the host and how is routing interpreted by RPF check. [Default: 0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_ext_to_service_connmark DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_ext_to_service_connmark}
  */
  readonly bpfExtToServiceConnmark?: number;
  /**
  * BPFExternalServiceMode in BPF mode, controls how connections from outside the cluster to services (node ports and cluster IPs) are forwarded to remote workloads. If set to 'Tunnel' then both request and response traffic is tunneled to the remote node. If set to 'DSR', the request traffic is tunneled but the response traffic is sent directly from the remote node. In 'DSR' mode, the remote node appears to use the IP of the ingress node; this requires a permissive L2 network. [Default: Tunnel]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_external_service_mode DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_external_service_mode}
  */
  readonly bpfExternalServiceMode?: string;
  /**
  * BPFForceTrackPacketsFromIfaces in BPF mode, forces traffic from these interfaces to skip Calico's iptables NOTRACK rule, allowing traffic from those interfaces to be tracked by Linux conntrack. Should only be used for interfaces that are not used for the Calico fabric. For example, a docker bridge device for non-Calico-networked containers. [Default: docker+]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_force_track_packets_from_ifaces DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_force_track_packets_from_ifaces}
  */
  readonly bpfForceTrackPacketsFromIfaces?: string[];
  /**
  * BPFHostConntrackBypass Controls whether to bypass Linux conntrack in BPF mode for workloads and services. [Default: true - bypass Linux conntrack]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_host_conntrack_bypass DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_host_conntrack_bypass}
  */
  readonly bpfHostConntrackBypass?: boolean | cdktf.IResolvable;
  /**
  * BPFHostNetworkedNATWithoutCTLB when in BPF mode, controls whether Felix does a NAT without CTLB. This along with BPFConnectTimeLoadBalancing determines the CTLB behavior. [Default: Enabled]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_host_networked_nat_without_ctlb DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_host_networked_nat_without_ctlb}
  */
  readonly bpfHostNetworkedNatWithoutCtlb?: string;
  /**
  * BPFKubeProxyEndpointSlicesEnabled is deprecated and has no effect. BPF kube-proxy always accepts endpoint slices. This option will be removed in the next release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_kube_proxy_endpoint_slices_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_kube_proxy_endpoint_slices_enabled}
  */
  readonly bpfKubeProxyEndpointSlicesEnabled?: boolean | cdktf.IResolvable;
  /**
  * BPFKubeProxyIptablesCleanupEnabled, if enabled in BPF mode, Felix will proactively clean up the upstream Kubernetes kube-proxy's iptables chains. Should only be enabled if kube-proxy is not running. [Default: true]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_kube_proxy_iptables_cleanup_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_kube_proxy_iptables_cleanup_enabled}
  */
  readonly bpfKubeProxyIptablesCleanupEnabled?: boolean | cdktf.IResolvable;
  /**
  * BPFKubeProxyMinSyncPeriod, in BPF mode, controls the minimum time between updates to the dataplane for Felix's embedded kube-proxy. Lower values give reduced set-up latency. Higher values reduce Felix CPU usage by batching up more work. [Default: 1s]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_kube_proxy_min_sync_period DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_kube_proxy_min_sync_period}
  */
  readonly bpfKubeProxyMinSyncPeriod?: string;
  /**
  * BPFL3IfacePattern is a regular expression that allows to list tunnel devices like wireguard or vxlan (i.e., L3 devices) in addition to BPFDataIfacePattern. That is, tunnel interfaces not created by Calico, that Calico workload traffic flows over as well as any interfaces that handle incoming traffic to nodeports and services from outside the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_l3_iface_pattern DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_l3_iface_pattern}
  */
  readonly bpfL3IfacePattern?: string;
  /**
  * BPFLogFilters is a map of key=values where the value is a pcap filter expression and the key is an interface name with 'all' denoting all interfaces, 'weps' all workload endpoints and 'heps' all host endpoints. When specified as an env var, it accepts a comma-separated list of key=values. [Default: unset - means all debug logs are emitted]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_log_filters DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_log_filters}
  */
  readonly bpfLogFilters?: { [key: string]: string };
  /**
  * BPFLogLevel controls the log level of the BPF programs when in BPF dataplane mode. One of 'Off', 'Info', or 'Debug'. The logs are emitted to the BPF trace pipe, accessible with the command 'tc exec bpf debug'. [Default: Off].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_log_level DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_log_level}
  */
  readonly bpfLogLevel?: string;
  /**
  * BPFMapSizeConntrack sets the size for the conntrack map. This map must be large enough to hold an entry for each active connection. Warning: changing the size of the conntrack map can cause disruption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_map_size_conntrack DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_map_size_conntrack}
  */
  readonly bpfMapSizeConntrack?: number;
  /**
  * BPFMapSizeIfState sets the size for ifstate map. The ifstate map must be large enough to hold an entry for each device (host + workloads) on a host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_map_size_if_state DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_map_size_if_state}
  */
  readonly bpfMapSizeIfState?: number;
  /**
  * BPFMapSizeIPSets sets the size for ipsets map. The IP sets map must be large enough to hold an entry for each endpoint matched by every selector in the source/destination matches in network policy. Selectors such as 'all()' can result in large numbers of entries (one entry per endpoint in that case).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_map_size_ip_sets DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_map_size_ip_sets}
  */
  readonly bpfMapSizeIpSets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_map_size_nat_affinity DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_map_size_nat_affinity}
  */
  readonly bpfMapSizeNatAffinity?: number;
  /**
  * BPFMapSizeNATBackend sets the size for nat back end map. This is the total number of endpoints. This is mostly more than the size of the number of services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_map_size_nat_backend DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_map_size_nat_backend}
  */
  readonly bpfMapSizeNatBackend?: number;
  /**
  * BPFMapSizeNATFrontend sets the size for nat front end map. FrontendMap should be large enough to hold an entry for each nodeport, external IP and each port in each service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_map_size_nat_frontend DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_map_size_nat_frontend}
  */
  readonly bpfMapSizeNatFrontend?: number;
  /**
  * BPFMapSizeRoute sets the size for the routes map. The routes map should be large enough to hold one entry per workload and a handful of entries per host (enough to cover its own IPs and tunnel IPs).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_map_size_route DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_map_size_route}
  */
  readonly bpfMapSizeRoute?: number;
  /**
  * BPFPolicyDebugEnabled when true, Felix records detailed information about the BPF policy programs, which can be examined with the calico-bpf command-line tool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_policy_debug_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_policy_debug_enabled}
  */
  readonly bpfPolicyDebugEnabled?: boolean | cdktf.IResolvable;
  /**
  * BPFPSNATPorts sets the range from which we randomly pick a port if there is a source port collision. This should be within the ephemeral range as defined by RFC 6056 (1024–65535) and preferably outside the ephemeral ranges used by common operating systems. Linux uses 32768–60999, while others mostly use the IANA defined range 49152–65535. It is not necessarily a problem if this range overlaps with the operating systems. Both ends of the range are inclusive. [Default: 20000:29999]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_psnat_ports DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_psnat_ports}
  */
  readonly bpfPsnatPorts?: string;
  /**
  * BPFRedirectToPeer controls which whether it is allowed to forward straight to the peer side of the workload devices. It is allowed for any host L2 devices by default (L2Only), but it breaks TCP dump on the host side of workload device as it bypasses it on ingress. Value of Enabled also allows redirection from L3 host devices like IPIP tunnel or Wireguard directly to the peer side of the workload's device. This makes redirection faster, however, it breaks tools like tcpdump on the peer side. Use Enabled with caution. [Default: L2Only]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#bpf_redirect_to_peer DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#bpf_redirect_to_peer}
  */
  readonly bpfRedirectToPeer?: string;
  /**
  * ChainInsertMode controls whether Felix hooks the kernel's top-level iptables chains by inserting a rule at the top of the chain or by appending a rule at the bottom. insert is the safe default since it prevents Calico's rules from being bypassed. If you switch to append mode, be sure that the other rules in the chains signal acceptance by falling through to the Calico rules, otherwise the Calico policy will be bypassed. [Default: insert]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#chain_insert_mode DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#chain_insert_mode}
  */
  readonly chainInsertMode?: string;
  /**
  * DataplaneDriver filename of the external dataplane driver to use. Only used if UseInternalDataplaneDriver is set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#dataplane_driver DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#dataplane_driver}
  */
  readonly dataplaneDriver?: string;
  /**
  * DataplaneWatchdogTimeout is the readiness/liveness timeout used for Felix's (internal) dataplane driver. Increase this value if you experience spurious non-ready or non-live events when Felix is under heavy load. Decrease the value to get felix to report non-live or non-ready more quickly. [Default: 90s] Deprecated: replaced by the generic HealthTimeoutOverrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#dataplane_watchdog_timeout DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#dataplane_watchdog_timeout}
  */
  readonly dataplaneWatchdogTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#debug_disable_log_dropping DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#debug_disable_log_dropping}
  */
  readonly debugDisableLogDropping?: boolean | cdktf.IResolvable;
  /**
  * DebugHost is the host IP or hostname to bind the debug port to. Only used if DebugPort is set. [Default:localhost]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#debug_host DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#debug_host}
  */
  readonly debugHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#debug_memory_profile_path DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#debug_memory_profile_path}
  */
  readonly debugMemoryProfilePath?: string;
  /**
  * DebugPort if set, enables Felix's debug HTTP port, which allows memory and CPU profiles to be retrieved. The debug port is not secure, it should not be exposed to the internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#debug_port DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#debug_port}
  */
  readonly debugPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#debug_simulate_calc_graph_hang_after DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#debug_simulate_calc_graph_hang_after}
  */
  readonly debugSimulateCalcGraphHangAfter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#debug_simulate_dataplane_apply_delay DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#debug_simulate_dataplane_apply_delay}
  */
  readonly debugSimulateDataplaneApplyDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#debug_simulate_dataplane_hang_after DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#debug_simulate_dataplane_hang_after}
  */
  readonly debugSimulateDataplaneHangAfter?: string;
  /**
  * DefaultEndpointToHostAction controls what happens to traffic that goes from a workload endpoint to the host itself (after the traffic hits the endpoint egress policy). By default Calico blocks traffic from workload endpoints to the host itself with an iptables 'DROP' action. If you want to allow some or all traffic from endpoint to host, set this parameter to RETURN or ACCEPT. Use RETURN if you have your own rules in the iptables 'INPUT' chain; Calico will insert its rules at the top of that chain, then 'RETURN' packets to the 'INPUT' chain once it has completed processing workload endpoint egress policy. Use ACCEPT to unconditionally accept packets from workloads after processing workload endpoint egress policy. [Default: Drop]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#default_endpoint_to_host_action DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#default_endpoint_to_host_action}
  */
  readonly defaultEndpointToHostAction?: string;
  /**
  * This defines the route protocol added to programmed device routes, by default this will be RTPROT_BOOT when left blank.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#device_route_protocol DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#device_route_protocol}
  */
  readonly deviceRouteProtocol?: number;
  /**
  * This is the IPv4 source address to use on programmed device routes. By default the source address is left blank, leaving the kernel to choose the source address used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#device_route_source_address DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#device_route_source_address}
  */
  readonly deviceRouteSourceAddress?: string;
  /**
  * This is the IPv6 source address to use on programmed device routes. By default the source address is left blank, leaving the kernel to choose the source address used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#device_route_source_address_i_pv6 DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#device_route_source_address_i_pv6}
  */
  readonly deviceRouteSourceAddressIPv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#disable_conntrack_invalid_check DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#disable_conntrack_invalid_check}
  */
  readonly disableConntrackInvalidCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#endpoint_reporting_delay DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#endpoint_reporting_delay}
  */
  readonly endpointReportingDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#endpoint_reporting_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#endpoint_reporting_enabled}
  */
  readonly endpointReportingEnabled?: boolean | cdktf.IResolvable;
  /**
  * EndpointStatusPathPrefix is the path to the directory where endpoint status will be written. Endpoint status file reporting is disabled if field is left empty. Chosen directory should match the directory used by the CNI for PodStartupDelay. [Default: '']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#endpoint_status_path_prefix DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#endpoint_status_path_prefix}
  */
  readonly endpointStatusPathPrefix?: string;
  /**
  * ExternalNodesCIDRList is a list of CIDR's of external-non-calico-nodes which may source tunnel traffic and have the tunneled traffic be accepted at calico nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#external_nodes_list DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#external_nodes_list}
  */
  readonly externalNodesList?: string[];
  /**
  * FailsafeInboundHostPorts is a list of PortProto struct objects including UDP/TCP/SCTP ports and CIDRs that Felix will allow incoming traffic to host endpoints on irrespective of the security policy. This is useful to avoid accidentally cutting off a host with incorrect configuration. For backwards compatibility, if the protocol is not specified, it defaults to 'tcp'. If a CIDR is not specified, it will allow traffic from all addresses. To disable all inbound host ports, use the value '[]'. The default value allows ssh access, DHCP, BGP, etcd and the Kubernetes API. [Default: tcp:22, udp:68, tcp:179, tcp:2379, tcp:2380, tcp:5473, tcp:6443, tcp:6666, tcp:6667 ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#failsafe_inbound_host_ports DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#failsafe_inbound_host_ports}
  */
  readonly failsafeInboundHostPorts?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPorts[] | cdktf.IResolvable;
  /**
  * FailsafeOutboundHostPorts is a list of List of PortProto struct objects including UDP/TCP/SCTP ports and CIDRs that Felix will allow outgoing traffic from host endpoints to irrespective of the security policy. This is useful to avoid accidentally cutting off a host with incorrect configuration. For backwards compatibility, if the protocol is not specified, it defaults to 'tcp'. If a CIDR is not specified, it will allow traffic from all addresses. To disable all outbound host ports, use the value '[]'. The default value opens etcd's standard ports to ensure that Felix does not get cut off from etcd as well as allowing DHCP, DNS, BGP and the Kubernetes API. [Default: udp:53, udp:67, tcp:179, tcp:2379, tcp:2380, tcp:5473, tcp:6443, tcp:6666, tcp:6667 ]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#failsafe_outbound_host_ports DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#failsafe_outbound_host_ports}
  */
  readonly failsafeOutboundHostPorts?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPorts[] | cdktf.IResolvable;
  /**
  * FeatureDetectOverride is used to override feature detection based on auto-detected platform capabilities. Values are specified in a comma separated list with no spaces, example; 'SNATFullyRandom=true,MASQFullyRandom=false,RestoreSupportsLock='. 'true' or 'false' will force the feature, empty or omitted values are auto-detected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#feature_detect_override DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#feature_detect_override}
  */
  readonly featureDetectOverride?: string;
  /**
  * FeatureGates is used to enable or disable tech-preview Calico features. Values are specified in a comma separated list with no spaces, example; 'BPFConnectTimeLoadBalancingWorkaround=enabled,XyZ=false'. This is used to enable features that are not fully production ready.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#feature_gates DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#feature_gates}
  */
  readonly featureGates?: string;
  /**
  * FloatingIPs configures whether or not Felix will program non-OpenStack floating IP addresses. (OpenStack-derived floating IPs are always programmed, regardless of this setting.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#floating_i_ps DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#floating_i_ps}
  */
  readonly floatingIPs?: string;
  /**
  * GenericXDPEnabled enables Generic XDP so network cards that don't support XDP offload or driver modes can use XDP. This is not recommended since it doesn't provide better performance than iptables. [Default: false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#generic_xdp_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#generic_xdp_enabled}
  */
  readonly genericXdpEnabled?: boolean | cdktf.IResolvable;
  /**
  * GoGCThreshold Sets the Go runtime's garbage collection threshold. I.e. the percentage that the heap is allowed to grow before garbage collection is triggered. In general, doubling the value halves the CPU time spent doing GC, but it also doubles peak GC memory overhead. A special value of -1 can be used to disable GC entirely; this should only be used in conjunction with the GoMemoryLimitMB setting. This setting is overridden by the GOGC environment variable. [Default: 40]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#go_gc_threshold DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#go_gc_threshold}
  */
  readonly goGcThreshold?: number;
  /**
  * GoMaxProcs sets the maximum number of CPUs that the Go runtime will use concurrently. A value of -1 means 'use the system default'; typically the number of real CPUs on the system. this setting is overridden by the GOMAXPROCS environment variable. [Default: -1]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#go_max_procs DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#go_max_procs}
  */
  readonly goMaxProcs?: number;
  /**
  * GoMemoryLimitMB sets a (soft) memory limit for the Go runtime in MB. The Go runtime will try to keep its memory usage under the limit by triggering GC as needed. To avoid thrashing, it will exceed the limit if GC starts to take more than 50% of the process's CPU time. A value of -1 disables the memory limit. Note that the memory limit, if used, must be considerably less than any hard resource limit set at the container or pod level. This is because felix is not the only process that must run in the container or pod. This setting is overridden by the GOMEMLIMIT environment variable. [Default: -1]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#go_memory_limit_mb DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#go_memory_limit_mb}
  */
  readonly goMemoryLimitMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#health_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#health_enabled}
  */
  readonly healthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#health_host DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#health_host}
  */
  readonly healthHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#health_port DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#health_port}
  */
  readonly healthPort?: number;
  /**
  * HealthTimeoutOverrides allows the internal watchdog timeouts of individual subcomponents to be overridden. This is useful for working around 'false positive' liveness timeouts that can occur in particularly stressful workloads or if CPU is constrained. For a list of active subcomponents, see Felix's logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#health_timeout_overrides DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#health_timeout_overrides}
  */
  readonly healthTimeoutOverrides?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverrides[] | cdktf.IResolvable;
  /**
  * InterfaceExclude is a comma-separated list of interfaces that Felix should exclude when monitoring for host endpoints. The default value ensures that Felix ignores Kubernetes' IPVS dummy interface, which is used internally by kube-proxy. If you want to exclude multiple interface names using a single value, the list supports regular expressions. For regular expressions you must wrap the value with '/'. For example having values '/^kube/,veth1' will exclude all interfaces that begin with 'kube' and also the interface 'veth1'. [Default: kube-ipvs0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#interface_exclude DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#interface_exclude}
  */
  readonly interfaceExclude?: string;
  /**
  * InterfacePrefix is the interface name prefix that identifies workload endpoints and so distinguishes them from host endpoint interfaces. Note: in environments other than bare metal, the orchestrators configure this appropriately. For example our Kubernetes and Docker integrations set the 'cali' value, and our OpenStack integration sets the 'tap' value. [Default: cali]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#interface_prefix DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#interface_prefix}
  */
  readonly interfacePrefix?: string;
  /**
  * InterfaceRefreshInterval is the period at which Felix rescans local interfaces to verify their state. The rescan can be disabled by setting the interval to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#interface_refresh_interval DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#interface_refresh_interval}
  */
  readonly interfaceRefreshInterval?: string;
  /**
  * IPForwarding controls whether Felix sets the host sysctls to enable IP forwarding. IP forwarding is required when using Calico for workload networking. This should only be disabled on hosts where Calico is used for host protection. In BPF mode, due to a kernel interaction, either IPForwarding must be enabled or BPFEnforceRPF must be disabled. [Default: Enabled]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#ip_forwarding DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#ip_forwarding}
  */
  readonly ipForwarding?: string;
  /**
  * IPIPEnabled overrides whether Felix should configure an IPIP interface on the host. Optional as Felix determines this based on the existing IP pools. [Default: nil (unset)]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#ipip_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#ipip_enabled}
  */
  readonly ipipEnabled?: boolean | cdktf.IResolvable;
  /**
  * IPIPMTU is the MTU to set on the tunnel device. See Configuring MTU [Default: 1440]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#ipip_mtu DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#ipip_mtu}
  */
  readonly ipipMtu?: number;
  /**
  * IpsetsRefreshInterval is the period at which Felix re-checks all iptables state to ensure that no other process has accidentally broken Calico's rules. Set to 0 to disable iptables refresh. [Default: 90s]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#ipsets_refresh_interval DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#ipsets_refresh_interval}
  */
  readonly ipsetsRefreshInterval?: string;
  /**
  * IptablesBackend specifies which backend of iptables will be used. The default is Auto.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#iptables_backend DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#iptables_backend}
  */
  readonly iptablesBackend?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#iptables_filter_allow_action DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#iptables_filter_allow_action}
  */
  readonly iptablesFilterAllowAction?: string;
  /**
  * IptablesFilterDenyAction controls what happens to traffic that is denied by network policy. By default Calico blocks traffic with an iptables 'DROP' action. If you want to use 'REJECT' action instead you can configure it in here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#iptables_filter_deny_action DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#iptables_filter_deny_action}
  */
  readonly iptablesFilterDenyAction?: string;
  /**
  * IptablesLockFilePath is the location of the iptables lock file. You may need to change this if the lock file is not in its standard location (for example if you have mapped it into Felix's container at a different path). [Default: /run/xtables.lock]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#iptables_lock_file_path DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#iptables_lock_file_path}
  */
  readonly iptablesLockFilePath?: string;
  /**
  * IptablesLockProbeInterval is the time that Felix will wait between attempts to acquire the iptables lock if it is not available. Lower values make Felix more responsive when the lock is contended, but use more CPU. [Default: 50ms]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#iptables_lock_probe_interval DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#iptables_lock_probe_interval}
  */
  readonly iptablesLockProbeInterval?: string;
  /**
  * IptablesLockTimeout is the time that Felix will wait for the iptables lock, or 0, to disable. To use this feature, Felix must share the iptables lock file with all other processes that also take the lock. When running Felix inside a container, this requires the /run directory of the host to be mounted into the calico/node or calico/felix container. [Default: 0s disabled]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#iptables_lock_timeout DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#iptables_lock_timeout}
  */
  readonly iptablesLockTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#iptables_mangle_allow_action DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#iptables_mangle_allow_action}
  */
  readonly iptablesMangleAllowAction?: string;
  /**
  * IptablesMarkMask is the mask that Felix selects its IPTables Mark bits from. Should be a 32 bit hexadecimal number with at least 8 bits set, none of which clash with any other mark bits in use on the system. [Default: 0xff000000]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#iptables_mark_mask DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#iptables_mark_mask}
  */
  readonly iptablesMarkMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#iptables_nat_outgoing_interface_filter DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#iptables_nat_outgoing_interface_filter}
  */
  readonly iptablesNatOutgoingInterfaceFilter?: string;
  /**
  * IptablesPostWriteCheckInterval is the period after Felix has done a write to the dataplane that it schedules an extra read back in order to check the write was not clobbered by another process. This should only occur if another application on the system doesn't respect the iptables lock. [Default: 1s]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#iptables_post_write_check_interval DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#iptables_post_write_check_interval}
  */
  readonly iptablesPostWriteCheckInterval?: string;
  /**
  * IptablesRefreshInterval is the period at which Felix re-checks the IP sets in the dataplane to ensure that no other process has accidentally broken Calico's rules. Set to 0 to disable IP sets refresh. Note: the default for this value is lower than the other refresh intervals as a workaround for a Linux kernel bug that was fixed in kernel version 4.11. If you are using v4.11 or greater you may want to set this to, a higher value to reduce Felix CPU usage. [Default: 10s]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#iptables_refresh_interval DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#iptables_refresh_interval}
  */
  readonly iptablesRefreshInterval?: string;
  /**
  * IPv6Support controls whether Felix enables support for IPv6 (if supported by the in-use dataplane).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#ipv6_support DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#ipv6_support}
  */
  readonly ipv6Support?: boolean | cdktf.IResolvable;
  /**
  * KubeNodePortRanges holds list of port ranges used for service node ports. Only used if felix detects kube-proxy running in ipvs mode. Felix uses these ranges to separate host and workload traffic. [Default: 30000:32767].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#kube_node_port_ranges DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#kube_node_port_ranges}
  */
  readonly kubeNodePortRanges?: string[];
  /**
  * LogDebugFilenameRegex controls which source code files have their Debug log output included in the logs. Only logs from files with names that match the given regular expression are included. The filter only applies to Debug level logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#log_debug_filename_regex DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#log_debug_filename_regex}
  */
  readonly logDebugFilenameRegex?: string;
  /**
  * LogFilePath is the full path to the Felix log. Set to none to disable file logging. [Default: /var/log/calico/felix.log]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#log_file_path DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#log_file_path}
  */
  readonly logFilePath?: string;
  /**
  * LogPrefix is the log prefix that Felix uses when rendering LOG rules. [Default: calico-packet]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#log_prefix DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#log_prefix}
  */
  readonly logPrefix?: string;
  /**
  * LogSeverityFile is the log severity above which logs are sent to the log file. [Default: Info]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#log_severity_file DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#log_severity_file}
  */
  readonly logSeverityFile?: string;
  /**
  * LogSeverityScreen is the log severity above which logs are sent to the stdout. [Default: Info]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#log_severity_screen DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#log_severity_screen}
  */
  readonly logSeverityScreen?: string;
  /**
  * LogSeveritySys is the log severity above which logs are sent to the syslog. Set to None for no logging to syslog. [Default: Info]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#log_severity_sys DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#log_severity_sys}
  */
  readonly logSeveritySys?: string;
  /**
  * MaxIpsetSize is the maximum number of IP addresses that can be stored in an IP set. Not applicable if using the nftables backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#max_ipset_size DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#max_ipset_size}
  */
  readonly maxIpsetSize?: number;
  /**
  * MetadataAddr is the IP address or domain name of the server that can answer VM queries for cloud-init metadata. In OpenStack, this corresponds to the machine running nova-api (or in Ubuntu, nova-api-metadata). A value of none (case-insensitive) means that Felix should not set up any NAT rule for the metadata path. [Default: 127.0.0.1]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#metadata_addr DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#metadata_addr}
  */
  readonly metadataAddr?: string;
  /**
  * MetadataPort is the port of the metadata server. This, combined with global.MetadataAddr (if not 'None'), is used to set up a NAT rule, from 169.254.169.254:80 to MetadataAddr:MetadataPort. In most cases this should not need to be changed [Default: 8775].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#metadata_port DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#metadata_port}
  */
  readonly metadataPort?: number;
  /**
  * MTUIfacePattern is a regular expression that controls which interfaces Felix should scan in order to calculate the host's MTU. This should not match workload interfaces (usually named cali...).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#mtu_iface_pattern DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#mtu_iface_pattern}
  */
  readonly mtuIfacePattern?: string;
  /**
  * NATOutgoingAddress specifies an address to use when performing source NAT for traffic in a natOutgoing pool that is leaving the network. By default the address used is an address on the interface the traffic is leaving on (ie it uses the iptables MASQUERADE target)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#nat_outgoing_address DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#nat_outgoing_address}
  */
  readonly natOutgoingAddress?: string;
  /**
  * NATPortRange specifies the range of ports that is used for port mapping when doing outgoing NAT. When unset the default behavior of the network stack is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#nat_port_range DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#nat_port_range}
  */
  readonly natPortRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#netlink_timeout DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#netlink_timeout}
  */
  readonly netlinkTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#nftables_filter_allow_action DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#nftables_filter_allow_action}
  */
  readonly nftablesFilterAllowAction?: string;
  /**
  * FilterDenyAction controls what happens to traffic that is denied by network policy. By default Calico blocks traffic with a 'drop' action. If you want to use a 'reject' action instead you can configure it here.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#nftables_filter_deny_action DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#nftables_filter_deny_action}
  */
  readonly nftablesFilterDenyAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#nftables_mangle_allow_action DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#nftables_mangle_allow_action}
  */
  readonly nftablesMangleAllowAction?: string;
  /**
  * MarkMask is the mask that Felix selects its nftables Mark bits from. Should be a 32 bit hexadecimal number with at least 8 bits set, none of which clash with any other mark bits in use on the system. [Default: 0xffff0000]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#nftables_mark_mask DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#nftables_mark_mask}
  */
  readonly nftablesMarkMask?: number;
  /**
  * NFTablesMode configures nftables support in Felix. [Default: Disabled]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#nftables_mode DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#nftables_mode}
  */
  readonly nftablesMode?: string;
  /**
  * NftablesRefreshInterval controls the interval at which Felix periodically refreshes the nftables rules. [Default: 90s]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#nftables_refresh_interval DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#nftables_refresh_interval}
  */
  readonly nftablesRefreshInterval?: string;
  /**
  * OpenstackRegion is the name of the region that a particular Felix belongs to. In a multi-region Calico/OpenStack deployment, this must be configured somehow for each Felix (here in the datamodel, or in felix.cfg or the environment on each compute node), and must match the [calico] openstack_region value configured in neutron.conf on each node. [Default: Empty]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#openstack_region DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#openstack_region}
  */
  readonly openstackRegion?: string;
  /**
  * PolicySyncPathPrefix is used to by Felix to communicate policy changes to external services, like Application layer policy. [Default: Empty]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#policy_sync_path_prefix DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#policy_sync_path_prefix}
  */
  readonly policySyncPathPrefix?: string;
  /**
  * PrometheusGoMetricsEnabled disables Go runtime metrics collection, which the Prometheus client does by default, when set to false. This reduces the number of metrics reported, reducing Prometheus load. [Default: true]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#prometheus_go_metrics_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#prometheus_go_metrics_enabled}
  */
  readonly prometheusGoMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * PrometheusMetricsEnabled enables the Prometheus metrics server in Felix if set to true. [Default: false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#prometheus_metrics_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#prometheus_metrics_enabled}
  */
  readonly prometheusMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * PrometheusMetricsHost is the host that the Prometheus metrics server should bind to. [Default: empty]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#prometheus_metrics_host DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#prometheus_metrics_host}
  */
  readonly prometheusMetricsHost?: string;
  /**
  * PrometheusMetricsPort is the TCP port that the Prometheus metrics server should bind to. [Default: 9091]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#prometheus_metrics_port DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#prometheus_metrics_port}
  */
  readonly prometheusMetricsPort?: number;
  /**
  * PrometheusProcessMetricsEnabled disables process metrics collection, which the Prometheus client does by default, when set to false. This reduces the number of metrics reported, reducing Prometheus load. [Default: true]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#prometheus_process_metrics_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#prometheus_process_metrics_enabled}
  */
  readonly prometheusProcessMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * PrometheusWireGuardMetricsEnabled disables wireguard metrics collection, which the Prometheus client does by default, when set to false. This reduces the number of metrics reported, reducing Prometheus load. [Default: true]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#prometheus_wire_guard_metrics_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#prometheus_wire_guard_metrics_enabled}
  */
  readonly prometheusWireGuardMetricsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to remove device routes that have not been programmed by Felix. Disabling this will allow external applications to also add device routes. This is enabled by default which means we will remove externally added routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#remove_external_routes DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#remove_external_routes}
  */
  readonly removeExternalRoutes?: boolean | cdktf.IResolvable;
  /**
  * ReportingInterval is the interval at which Felix reports its status into the datastore or 0 to disable. Must be non-zero in OpenStack deployments. [Default: 30s]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#reporting_interval DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#reporting_interval}
  */
  readonly reportingInterval?: string;
  /**
  * ReportingTTL is the time-to-live setting for process-wide status reports. [Default: 90s]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#reporting_ttl DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#reporting_ttl}
  */
  readonly reportingTtl?: string;
  /**
  * RouteRefreshInterval is the period at which Felix re-checks the routes in the dataplane to ensure that no other process has accidentally broken Calico's rules. Set to 0 to disable route refresh. [Default: 90s]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#route_refresh_interval DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#route_refresh_interval}
  */
  readonly routeRefreshInterval?: string;
  /**
  * RouteSource configures where Felix gets its routing information. - WorkloadIPs: use workload endpoints to construct routes. - CalicoIPAM: the default - use IPAM data to construct routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#route_source DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#route_source}
  */
  readonly routeSource?: string;
  /**
  * RouteSyncDisabled will disable all operations performed on the route table. Set to true to run in network-policy mode only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#route_sync_disabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#route_sync_disabled}
  */
  readonly routeSyncDisabled?: boolean | cdktf.IResolvable;
  /**
  * Deprecated in favor of RouteTableRanges. Calico programs additional Linux route tables for various purposes. RouteTableRange specifies the indices of the route tables that Calico should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#route_table_range DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#route_table_range}
  */
  readonly routeTableRange?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRange;
  /**
  * Calico programs additional Linux route tables for various purposes. RouteTableRanges specifies a set of table index ranges that Calico should use. Deprecates'RouteTableRange', overrides 'RouteTableRange'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#route_table_ranges DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#route_table_ranges}
  */
  readonly routeTableRanges?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRanges[] | cdktf.IResolvable;
  /**
  * When service IP advertisement is enabled, prevent routing loops to service IPs that are not in use, by dropping or rejecting packets that do not get DNAT'd by kube-proxy. Unless set to 'Disabled', in which case such routing loops continue to be allowed. [Default: Drop]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#service_loop_prevention DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#service_loop_prevention}
  */
  readonly serviceLoopPrevention?: string;
  /**
  * SidecarAccelerationEnabled enables experimental sidecar acceleration [Default: false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#sidecar_acceleration_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#sidecar_acceleration_enabled}
  */
  readonly sidecarAccelerationEnabled?: boolean | cdktf.IResolvable;
  /**
  * UsageReportingEnabled reports anonymous Calico version number and cluster size to projectcalico.org. Logs warnings returned by the usage server. For example, if a significant security vulnerability has been discovered in the version of Calico being used. [Default: true]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#usage_reporting_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#usage_reporting_enabled}
  */
  readonly usageReportingEnabled?: boolean | cdktf.IResolvable;
  /**
  * UsageReportingInitialDelay controls the minimum delay before Felix makes a report. [Default: 300s]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#usage_reporting_initial_delay DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#usage_reporting_initial_delay}
  */
  readonly usageReportingInitialDelay?: string;
  /**
  * UsageReportingInterval controls the interval at which Felix makes reports. [Default: 86400s]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#usage_reporting_interval DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#usage_reporting_interval}
  */
  readonly usageReportingInterval?: string;
  /**
  * UseInternalDataplaneDriver, if true, Felix will use its internal dataplane programming logic. If false, it will launch an external dataplane driver and communicate with it over protobuf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#use_internal_dataplane_driver DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#use_internal_dataplane_driver}
  */
  readonly useInternalDataplaneDriver?: boolean | cdktf.IResolvable;
  /**
  * VXLANEnabled overrides whether Felix should create the VXLAN tunnel device for IPv4 VXLAN networking. Optional as Felix determines this based on the existing IP pools. [Default: nil (unset)]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#vxlan_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#vxlan_enabled}
  */
  readonly vxlanEnabled?: boolean | cdktf.IResolvable;
  /**
  * VXLANMTU is the MTU to set on the IPv4 VXLAN tunnel device. See Configuring MTU [Default: 1410]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#vxlan_mtu DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#vxlan_mtu}
  */
  readonly vxlanMtu?: number;
  /**
  * VXLANMTUV6 is the MTU to set on the IPv6 VXLAN tunnel device. See Configuring MTU [Default: 1390]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#vxlan_mtuv6 DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#vxlan_mtuv6}
  */
  readonly vxlanMtuv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#vxlan_port DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#vxlan_port}
  */
  readonly vxlanPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#vxlan_vni DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#vxlan_vni}
  */
  readonly vxlanVni?: number;
  /**
  * WindowsManageFirewallRules configures whether or not Felix will program Windows Firewall rules. (to allow inbound access to its own metrics ports) [Default: Disabled]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#windows_manage_firewall_rules DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#windows_manage_firewall_rules}
  */
  readonly windowsManageFirewallRules?: string;
  /**
  * WireguardEnabled controls whether Wireguard is enabled for IPv4 (encapsulating IPv4 traffic over an IPv4 underlay network). [Default: false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#wireguard_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#wireguard_enabled}
  */
  readonly wireguardEnabled?: boolean | cdktf.IResolvable;
  /**
  * WireguardEnabledV6 controls whether Wireguard is enabled for IPv6 (encapsulating IPv6 traffic over an IPv6 underlay network). [Default: false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#wireguard_enabled_v6 DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#wireguard_enabled_v6}
  */
  readonly wireguardEnabledV6?: boolean | cdktf.IResolvable;
  /**
  * WireguardHostEncryptionEnabled controls whether Wireguard host-to-host encryption is enabled. [Default: false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#wireguard_host_encryption_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#wireguard_host_encryption_enabled}
  */
  readonly wireguardHostEncryptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * WireguardInterfaceName specifies the name to use for the IPv4 Wireguard interface. [Default: wireguard.cali]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#wireguard_interface_name DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#wireguard_interface_name}
  */
  readonly wireguardInterfaceName?: string;
  /**
  * WireguardInterfaceNameV6 specifies the name to use for the IPv6 Wireguard interface. [Default: wg-v6.cali]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#wireguard_interface_name_v6 DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#wireguard_interface_name_v6}
  */
  readonly wireguardInterfaceNameV6?: string;
  /**
  * WireguardKeepAlive controls Wireguard PersistentKeepalive option. Set 0 to disable. [Default: 0]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#wireguard_keep_alive DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#wireguard_keep_alive}
  */
  readonly wireguardKeepAlive?: string;
  /**
  * WireguardListeningPort controls the listening port used by IPv4 Wireguard. [Default: 51820]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#wireguard_listening_port DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#wireguard_listening_port}
  */
  readonly wireguardListeningPort?: number;
  /**
  * WireguardListeningPortV6 controls the listening port used by IPv6 Wireguard. [Default: 51821]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#wireguard_listening_port_v6 DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#wireguard_listening_port_v6}
  */
  readonly wireguardListeningPortV6?: number;
  /**
  * WireguardMTU controls the MTU on the IPv4 Wireguard interface. See Configuring MTU [Default: 1440]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#wireguard_mtu DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#wireguard_mtu}
  */
  readonly wireguardMtu?: number;
  /**
  * WireguardMTUV6 controls the MTU on the IPv6 Wireguard interface. See Configuring MTU [Default: 1420]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#wireguard_mtuv6 DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#wireguard_mtuv6}
  */
  readonly wireguardMtuv6?: number;
  /**
  * WireguardRoutingRulePriority controls the priority value to use for the Wireguard routing rule. [Default: 99]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#wireguard_routing_rule_priority DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#wireguard_routing_rule_priority}
  */
  readonly wireguardRoutingRulePriority?: number;
  /**
  * WorkloadSourceSpoofing controls whether pods can use the allowedSourcePrefixes annotation to send traffic with a source IP address that is not theirs. This is disabled by default. When set to 'Any', pods can request any prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#workload_source_spoofing DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#workload_source_spoofing}
  */
  readonly workloadSourceSpoofing?: string;
  /**
  * XDPEnabled enables XDP acceleration for suitable untracked incoming deny rules. [Default: true]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#xdp_enabled DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#xdp_enabled}
  */
  readonly xdpEnabled?: boolean | cdktf.IResolvable;
  /**
  * XDPRefreshInterval is the period at which Felix re-checks all XDP state to ensure that no other process has accidentally broken Calico's BPF maps or attached programs. Set to 0 to disable XDP refresh. [Default: 90s]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#xdp_refresh_interval DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest#xdp_refresh_interval}
  */
  readonly xdpRefreshInterval?: string;
}

export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecToTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ipip_packets_from_workloads: cdktf.booleanToTerraform(struct!.allowIpipPacketsFromWorkloads),
    allow_vxlan_packets_from_workloads: cdktf.booleanToTerraform(struct!.allowVxlanPacketsFromWorkloads),
    aws_src_dst_check: cdktf.stringToTerraform(struct!.awsSrcDstCheck),
    bpf_connect_time_load_balancing: cdktf.stringToTerraform(struct!.bpfConnectTimeLoadBalancing),
    bpf_connect_time_load_balancing_enabled: cdktf.booleanToTerraform(struct!.bpfConnectTimeLoadBalancingEnabled),
    bpf_ctlb_log_filter: cdktf.stringToTerraform(struct!.bpfCtlbLogFilter),
    bpf_data_iface_pattern: cdktf.stringToTerraform(struct!.bpfDataIfacePattern),
    bpf_disable_gro_for_ifaces: cdktf.stringToTerraform(struct!.bpfDisableGroForIfaces),
    bpf_disable_unprivileged: cdktf.booleanToTerraform(struct!.bpfDisableUnprivileged),
    bpf_dsr_optout_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bpfDsrOptoutCidrs),
    bpf_enabled: cdktf.booleanToTerraform(struct!.bpfEnabled),
    bpf_enforce_rpf: cdktf.stringToTerraform(struct!.bpfEnforceRpf),
    bpf_exclude_cidrs_from_nat: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bpfExcludeCidrsFromNat),
    bpf_ext_to_service_connmark: cdktf.numberToTerraform(struct!.bpfExtToServiceConnmark),
    bpf_external_service_mode: cdktf.stringToTerraform(struct!.bpfExternalServiceMode),
    bpf_force_track_packets_from_ifaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.bpfForceTrackPacketsFromIfaces),
    bpf_host_conntrack_bypass: cdktf.booleanToTerraform(struct!.bpfHostConntrackBypass),
    bpf_host_networked_nat_without_ctlb: cdktf.stringToTerraform(struct!.bpfHostNetworkedNatWithoutCtlb),
    bpf_kube_proxy_endpoint_slices_enabled: cdktf.booleanToTerraform(struct!.bpfKubeProxyEndpointSlicesEnabled),
    bpf_kube_proxy_iptables_cleanup_enabled: cdktf.booleanToTerraform(struct!.bpfKubeProxyIptablesCleanupEnabled),
    bpf_kube_proxy_min_sync_period: cdktf.stringToTerraform(struct!.bpfKubeProxyMinSyncPeriod),
    bpf_l3_iface_pattern: cdktf.stringToTerraform(struct!.bpfL3IfacePattern),
    bpf_log_filters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.bpfLogFilters),
    bpf_log_level: cdktf.stringToTerraform(struct!.bpfLogLevel),
    bpf_map_size_conntrack: cdktf.numberToTerraform(struct!.bpfMapSizeConntrack),
    bpf_map_size_if_state: cdktf.numberToTerraform(struct!.bpfMapSizeIfState),
    bpf_map_size_ip_sets: cdktf.numberToTerraform(struct!.bpfMapSizeIpSets),
    bpf_map_size_nat_affinity: cdktf.numberToTerraform(struct!.bpfMapSizeNatAffinity),
    bpf_map_size_nat_backend: cdktf.numberToTerraform(struct!.bpfMapSizeNatBackend),
    bpf_map_size_nat_frontend: cdktf.numberToTerraform(struct!.bpfMapSizeNatFrontend),
    bpf_map_size_route: cdktf.numberToTerraform(struct!.bpfMapSizeRoute),
    bpf_policy_debug_enabled: cdktf.booleanToTerraform(struct!.bpfPolicyDebugEnabled),
    bpf_psnat_ports: cdktf.stringToTerraform(struct!.bpfPsnatPorts),
    bpf_redirect_to_peer: cdktf.stringToTerraform(struct!.bpfRedirectToPeer),
    chain_insert_mode: cdktf.stringToTerraform(struct!.chainInsertMode),
    dataplane_driver: cdktf.stringToTerraform(struct!.dataplaneDriver),
    dataplane_watchdog_timeout: cdktf.stringToTerraform(struct!.dataplaneWatchdogTimeout),
    debug_disable_log_dropping: cdktf.booleanToTerraform(struct!.debugDisableLogDropping),
    debug_host: cdktf.stringToTerraform(struct!.debugHost),
    debug_memory_profile_path: cdktf.stringToTerraform(struct!.debugMemoryProfilePath),
    debug_port: cdktf.numberToTerraform(struct!.debugPort),
    debug_simulate_calc_graph_hang_after: cdktf.stringToTerraform(struct!.debugSimulateCalcGraphHangAfter),
    debug_simulate_dataplane_apply_delay: cdktf.stringToTerraform(struct!.debugSimulateDataplaneApplyDelay),
    debug_simulate_dataplane_hang_after: cdktf.stringToTerraform(struct!.debugSimulateDataplaneHangAfter),
    default_endpoint_to_host_action: cdktf.stringToTerraform(struct!.defaultEndpointToHostAction),
    device_route_protocol: cdktf.numberToTerraform(struct!.deviceRouteProtocol),
    device_route_source_address: cdktf.stringToTerraform(struct!.deviceRouteSourceAddress),
    device_route_source_address_i_pv6: cdktf.stringToTerraform(struct!.deviceRouteSourceAddressIPv6),
    disable_conntrack_invalid_check: cdktf.booleanToTerraform(struct!.disableConntrackInvalidCheck),
    endpoint_reporting_delay: cdktf.stringToTerraform(struct!.endpointReportingDelay),
    endpoint_reporting_enabled: cdktf.booleanToTerraform(struct!.endpointReportingEnabled),
    endpoint_status_path_prefix: cdktf.stringToTerraform(struct!.endpointStatusPathPrefix),
    external_nodes_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.externalNodesList),
    failsafe_inbound_host_ports: cdktf.listMapper(dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPortsToTerraform, false)(struct!.failsafeInboundHostPorts),
    failsafe_outbound_host_ports: cdktf.listMapper(dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPortsToTerraform, false)(struct!.failsafeOutboundHostPorts),
    feature_detect_override: cdktf.stringToTerraform(struct!.featureDetectOverride),
    feature_gates: cdktf.stringToTerraform(struct!.featureGates),
    floating_i_ps: cdktf.stringToTerraform(struct!.floatingIPs),
    generic_xdp_enabled: cdktf.booleanToTerraform(struct!.genericXdpEnabled),
    go_gc_threshold: cdktf.numberToTerraform(struct!.goGcThreshold),
    go_max_procs: cdktf.numberToTerraform(struct!.goMaxProcs),
    go_memory_limit_mb: cdktf.numberToTerraform(struct!.goMemoryLimitMb),
    health_enabled: cdktf.booleanToTerraform(struct!.healthEnabled),
    health_host: cdktf.stringToTerraform(struct!.healthHost),
    health_port: cdktf.numberToTerraform(struct!.healthPort),
    health_timeout_overrides: cdktf.listMapper(dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverridesToTerraform, false)(struct!.healthTimeoutOverrides),
    interface_exclude: cdktf.stringToTerraform(struct!.interfaceExclude),
    interface_prefix: cdktf.stringToTerraform(struct!.interfacePrefix),
    interface_refresh_interval: cdktf.stringToTerraform(struct!.interfaceRefreshInterval),
    ip_forwarding: cdktf.stringToTerraform(struct!.ipForwarding),
    ipip_enabled: cdktf.booleanToTerraform(struct!.ipipEnabled),
    ipip_mtu: cdktf.numberToTerraform(struct!.ipipMtu),
    ipsets_refresh_interval: cdktf.stringToTerraform(struct!.ipsetsRefreshInterval),
    iptables_backend: cdktf.stringToTerraform(struct!.iptablesBackend),
    iptables_filter_allow_action: cdktf.stringToTerraform(struct!.iptablesFilterAllowAction),
    iptables_filter_deny_action: cdktf.stringToTerraform(struct!.iptablesFilterDenyAction),
    iptables_lock_file_path: cdktf.stringToTerraform(struct!.iptablesLockFilePath),
    iptables_lock_probe_interval: cdktf.stringToTerraform(struct!.iptablesLockProbeInterval),
    iptables_lock_timeout: cdktf.stringToTerraform(struct!.iptablesLockTimeout),
    iptables_mangle_allow_action: cdktf.stringToTerraform(struct!.iptablesMangleAllowAction),
    iptables_mark_mask: cdktf.numberToTerraform(struct!.iptablesMarkMask),
    iptables_nat_outgoing_interface_filter: cdktf.stringToTerraform(struct!.iptablesNatOutgoingInterfaceFilter),
    iptables_post_write_check_interval: cdktf.stringToTerraform(struct!.iptablesPostWriteCheckInterval),
    iptables_refresh_interval: cdktf.stringToTerraform(struct!.iptablesRefreshInterval),
    ipv6_support: cdktf.booleanToTerraform(struct!.ipv6Support),
    kube_node_port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kubeNodePortRanges),
    log_debug_filename_regex: cdktf.stringToTerraform(struct!.logDebugFilenameRegex),
    log_file_path: cdktf.stringToTerraform(struct!.logFilePath),
    log_prefix: cdktf.stringToTerraform(struct!.logPrefix),
    log_severity_file: cdktf.stringToTerraform(struct!.logSeverityFile),
    log_severity_screen: cdktf.stringToTerraform(struct!.logSeverityScreen),
    log_severity_sys: cdktf.stringToTerraform(struct!.logSeveritySys),
    max_ipset_size: cdktf.numberToTerraform(struct!.maxIpsetSize),
    metadata_addr: cdktf.stringToTerraform(struct!.metadataAddr),
    metadata_port: cdktf.numberToTerraform(struct!.metadataPort),
    mtu_iface_pattern: cdktf.stringToTerraform(struct!.mtuIfacePattern),
    nat_outgoing_address: cdktf.stringToTerraform(struct!.natOutgoingAddress),
    nat_port_range: cdktf.stringToTerraform(struct!.natPortRange),
    netlink_timeout: cdktf.stringToTerraform(struct!.netlinkTimeout),
    nftables_filter_allow_action: cdktf.stringToTerraform(struct!.nftablesFilterAllowAction),
    nftables_filter_deny_action: cdktf.stringToTerraform(struct!.nftablesFilterDenyAction),
    nftables_mangle_allow_action: cdktf.stringToTerraform(struct!.nftablesMangleAllowAction),
    nftables_mark_mask: cdktf.numberToTerraform(struct!.nftablesMarkMask),
    nftables_mode: cdktf.stringToTerraform(struct!.nftablesMode),
    nftables_refresh_interval: cdktf.stringToTerraform(struct!.nftablesRefreshInterval),
    openstack_region: cdktf.stringToTerraform(struct!.openstackRegion),
    policy_sync_path_prefix: cdktf.stringToTerraform(struct!.policySyncPathPrefix),
    prometheus_go_metrics_enabled: cdktf.booleanToTerraform(struct!.prometheusGoMetricsEnabled),
    prometheus_metrics_enabled: cdktf.booleanToTerraform(struct!.prometheusMetricsEnabled),
    prometheus_metrics_host: cdktf.stringToTerraform(struct!.prometheusMetricsHost),
    prometheus_metrics_port: cdktf.numberToTerraform(struct!.prometheusMetricsPort),
    prometheus_process_metrics_enabled: cdktf.booleanToTerraform(struct!.prometheusProcessMetricsEnabled),
    prometheus_wire_guard_metrics_enabled: cdktf.booleanToTerraform(struct!.prometheusWireGuardMetricsEnabled),
    remove_external_routes: cdktf.booleanToTerraform(struct!.removeExternalRoutes),
    reporting_interval: cdktf.stringToTerraform(struct!.reportingInterval),
    reporting_ttl: cdktf.stringToTerraform(struct!.reportingTtl),
    route_refresh_interval: cdktf.stringToTerraform(struct!.routeRefreshInterval),
    route_source: cdktf.stringToTerraform(struct!.routeSource),
    route_sync_disabled: cdktf.booleanToTerraform(struct!.routeSyncDisabled),
    route_table_range: dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangeToTerraform(struct!.routeTableRange),
    route_table_ranges: cdktf.listMapper(dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangesToTerraform, false)(struct!.routeTableRanges),
    service_loop_prevention: cdktf.stringToTerraform(struct!.serviceLoopPrevention),
    sidecar_acceleration_enabled: cdktf.booleanToTerraform(struct!.sidecarAccelerationEnabled),
    usage_reporting_enabled: cdktf.booleanToTerraform(struct!.usageReportingEnabled),
    usage_reporting_initial_delay: cdktf.stringToTerraform(struct!.usageReportingInitialDelay),
    usage_reporting_interval: cdktf.stringToTerraform(struct!.usageReportingInterval),
    use_internal_dataplane_driver: cdktf.booleanToTerraform(struct!.useInternalDataplaneDriver),
    vxlan_enabled: cdktf.booleanToTerraform(struct!.vxlanEnabled),
    vxlan_mtu: cdktf.numberToTerraform(struct!.vxlanMtu),
    vxlan_mtuv6: cdktf.numberToTerraform(struct!.vxlanMtuv6),
    vxlan_port: cdktf.numberToTerraform(struct!.vxlanPort),
    vxlan_vni: cdktf.numberToTerraform(struct!.vxlanVni),
    windows_manage_firewall_rules: cdktf.stringToTerraform(struct!.windowsManageFirewallRules),
    wireguard_enabled: cdktf.booleanToTerraform(struct!.wireguardEnabled),
    wireguard_enabled_v6: cdktf.booleanToTerraform(struct!.wireguardEnabledV6),
    wireguard_host_encryption_enabled: cdktf.booleanToTerraform(struct!.wireguardHostEncryptionEnabled),
    wireguard_interface_name: cdktf.stringToTerraform(struct!.wireguardInterfaceName),
    wireguard_interface_name_v6: cdktf.stringToTerraform(struct!.wireguardInterfaceNameV6),
    wireguard_keep_alive: cdktf.stringToTerraform(struct!.wireguardKeepAlive),
    wireguard_listening_port: cdktf.numberToTerraform(struct!.wireguardListeningPort),
    wireguard_listening_port_v6: cdktf.numberToTerraform(struct!.wireguardListeningPortV6),
    wireguard_mtu: cdktf.numberToTerraform(struct!.wireguardMtu),
    wireguard_mtuv6: cdktf.numberToTerraform(struct!.wireguardMtuv6),
    wireguard_routing_rule_priority: cdktf.numberToTerraform(struct!.wireguardRoutingRulePriority),
    workload_source_spoofing: cdktf.stringToTerraform(struct!.workloadSourceSpoofing),
    xdp_enabled: cdktf.booleanToTerraform(struct!.xdpEnabled),
    xdp_refresh_interval: cdktf.stringToTerraform(struct!.xdpRefreshInterval),
  }
}


export function dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecToHclTerraform(struct?: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_ipip_packets_from_workloads: {
      value: cdktf.booleanToHclTerraform(struct!.allowIpipPacketsFromWorkloads),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_vxlan_packets_from_workloads: {
      value: cdktf.booleanToHclTerraform(struct!.allowVxlanPacketsFromWorkloads),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_src_dst_check: {
      value: cdktf.stringToHclTerraform(struct!.awsSrcDstCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_connect_time_load_balancing: {
      value: cdktf.stringToHclTerraform(struct!.bpfConnectTimeLoadBalancing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_connect_time_load_balancing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bpfConnectTimeLoadBalancingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bpf_ctlb_log_filter: {
      value: cdktf.stringToHclTerraform(struct!.bpfCtlbLogFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_data_iface_pattern: {
      value: cdktf.stringToHclTerraform(struct!.bpfDataIfacePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_disable_gro_for_ifaces: {
      value: cdktf.stringToHclTerraform(struct!.bpfDisableGroForIfaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_disable_unprivileged: {
      value: cdktf.booleanToHclTerraform(struct!.bpfDisableUnprivileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bpf_dsr_optout_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bpfDsrOptoutCidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bpf_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bpfEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bpf_enforce_rpf: {
      value: cdktf.stringToHclTerraform(struct!.bpfEnforceRpf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_exclude_cidrs_from_nat: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bpfExcludeCidrsFromNat),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bpf_ext_to_service_connmark: {
      value: cdktf.numberToHclTerraform(struct!.bpfExtToServiceConnmark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bpf_external_service_mode: {
      value: cdktf.stringToHclTerraform(struct!.bpfExternalServiceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_force_track_packets_from_ifaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.bpfForceTrackPacketsFromIfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bpf_host_conntrack_bypass: {
      value: cdktf.booleanToHclTerraform(struct!.bpfHostConntrackBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bpf_host_networked_nat_without_ctlb: {
      value: cdktf.stringToHclTerraform(struct!.bpfHostNetworkedNatWithoutCtlb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_kube_proxy_endpoint_slices_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bpfKubeProxyEndpointSlicesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bpf_kube_proxy_iptables_cleanup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bpfKubeProxyIptablesCleanupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bpf_kube_proxy_min_sync_period: {
      value: cdktf.stringToHclTerraform(struct!.bpfKubeProxyMinSyncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_l3_iface_pattern: {
      value: cdktf.stringToHclTerraform(struct!.bpfL3IfacePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_log_filters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.bpfLogFilters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    bpf_log_level: {
      value: cdktf.stringToHclTerraform(struct!.bpfLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_map_size_conntrack: {
      value: cdktf.numberToHclTerraform(struct!.bpfMapSizeConntrack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bpf_map_size_if_state: {
      value: cdktf.numberToHclTerraform(struct!.bpfMapSizeIfState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bpf_map_size_ip_sets: {
      value: cdktf.numberToHclTerraform(struct!.bpfMapSizeIpSets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bpf_map_size_nat_affinity: {
      value: cdktf.numberToHclTerraform(struct!.bpfMapSizeNatAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bpf_map_size_nat_backend: {
      value: cdktf.numberToHclTerraform(struct!.bpfMapSizeNatBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bpf_map_size_nat_frontend: {
      value: cdktf.numberToHclTerraform(struct!.bpfMapSizeNatFrontend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bpf_map_size_route: {
      value: cdktf.numberToHclTerraform(struct!.bpfMapSizeRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bpf_policy_debug_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.bpfPolicyDebugEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bpf_psnat_ports: {
      value: cdktf.stringToHclTerraform(struct!.bpfPsnatPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bpf_redirect_to_peer: {
      value: cdktf.stringToHclTerraform(struct!.bpfRedirectToPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chain_insert_mode: {
      value: cdktf.stringToHclTerraform(struct!.chainInsertMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataplane_driver: {
      value: cdktf.stringToHclTerraform(struct!.dataplaneDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataplane_watchdog_timeout: {
      value: cdktf.stringToHclTerraform(struct!.dataplaneWatchdogTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_disable_log_dropping: {
      value: cdktf.booleanToHclTerraform(struct!.debugDisableLogDropping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    debug_host: {
      value: cdktf.stringToHclTerraform(struct!.debugHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_memory_profile_path: {
      value: cdktf.stringToHclTerraform(struct!.debugMemoryProfilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_port: {
      value: cdktf.numberToHclTerraform(struct!.debugPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_simulate_calc_graph_hang_after: {
      value: cdktf.stringToHclTerraform(struct!.debugSimulateCalcGraphHangAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_simulate_dataplane_apply_delay: {
      value: cdktf.stringToHclTerraform(struct!.debugSimulateDataplaneApplyDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_simulate_dataplane_hang_after: {
      value: cdktf.stringToHclTerraform(struct!.debugSimulateDataplaneHangAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_endpoint_to_host_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultEndpointToHostAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_route_protocol: {
      value: cdktf.numberToHclTerraform(struct!.deviceRouteProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_route_source_address: {
      value: cdktf.stringToHclTerraform(struct!.deviceRouteSourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_route_source_address_i_pv6: {
      value: cdktf.stringToHclTerraform(struct!.deviceRouteSourceAddressIPv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_conntrack_invalid_check: {
      value: cdktf.booleanToHclTerraform(struct!.disableConntrackInvalidCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_reporting_delay: {
      value: cdktf.stringToHclTerraform(struct!.endpointReportingDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_reporting_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.endpointReportingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_status_path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.endpointStatusPathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_nodes_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.externalNodesList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    failsafe_inbound_host_ports: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPortsToHclTerraform, false)(struct!.failsafeInboundHostPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPortsList",
    },
    failsafe_outbound_host_ports: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPortsToHclTerraform, false)(struct!.failsafeOutboundHostPorts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPortsList",
    },
    feature_detect_override: {
      value: cdktf.stringToHclTerraform(struct!.featureDetectOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    feature_gates: {
      value: cdktf.stringToHclTerraform(struct!.featureGates),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_i_ps: {
      value: cdktf.stringToHclTerraform(struct!.floatingIPs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generic_xdp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.genericXdpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    go_gc_threshold: {
      value: cdktf.numberToHclTerraform(struct!.goGcThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    go_max_procs: {
      value: cdktf.numberToHclTerraform(struct!.goMaxProcs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    go_memory_limit_mb: {
      value: cdktf.numberToHclTerraform(struct!.goMemoryLimitMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.healthEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_host: {
      value: cdktf.stringToHclTerraform(struct!.healthHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_port: {
      value: cdktf.numberToHclTerraform(struct!.healthPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    health_timeout_overrides: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverridesToHclTerraform, false)(struct!.healthTimeoutOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverridesList",
    },
    interface_exclude: {
      value: cdktf.stringToHclTerraform(struct!.interfaceExclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_prefix: {
      value: cdktf.stringToHclTerraform(struct!.interfacePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.interfaceRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_forwarding: {
      value: cdktf.stringToHclTerraform(struct!.ipForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipip_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipipEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipip_mtu: {
      value: cdktf.numberToHclTerraform(struct!.ipipMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsets_refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.ipsetsRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptables_backend: {
      value: cdktf.stringToHclTerraform(struct!.iptablesBackend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptables_filter_allow_action: {
      value: cdktf.stringToHclTerraform(struct!.iptablesFilterAllowAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptables_filter_deny_action: {
      value: cdktf.stringToHclTerraform(struct!.iptablesFilterDenyAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptables_lock_file_path: {
      value: cdktf.stringToHclTerraform(struct!.iptablesLockFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptables_lock_probe_interval: {
      value: cdktf.stringToHclTerraform(struct!.iptablesLockProbeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptables_lock_timeout: {
      value: cdktf.stringToHclTerraform(struct!.iptablesLockTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptables_mangle_allow_action: {
      value: cdktf.stringToHclTerraform(struct!.iptablesMangleAllowAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptables_mark_mask: {
      value: cdktf.numberToHclTerraform(struct!.iptablesMarkMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iptables_nat_outgoing_interface_filter: {
      value: cdktf.stringToHclTerraform(struct!.iptablesNatOutgoingInterfaceFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptables_post_write_check_interval: {
      value: cdktf.stringToHclTerraform(struct!.iptablesPostWriteCheckInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iptables_refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.iptablesRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_support: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Support),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kube_node_port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kubeNodePortRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_debug_filename_regex: {
      value: cdktf.stringToHclTerraform(struct!.logDebugFilenameRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_file_path: {
      value: cdktf.stringToHclTerraform(struct!.logFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_severity_file: {
      value: cdktf.stringToHclTerraform(struct!.logSeverityFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_severity_screen: {
      value: cdktf.stringToHclTerraform(struct!.logSeverityScreen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_severity_sys: {
      value: cdktf.stringToHclTerraform(struct!.logSeveritySys),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ipset_size: {
      value: cdktf.numberToHclTerraform(struct!.maxIpsetSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata_addr: {
      value: cdktf.stringToHclTerraform(struct!.metadataAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_port: {
      value: cdktf.numberToHclTerraform(struct!.metadataPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_iface_pattern: {
      value: cdktf.stringToHclTerraform(struct!.mtuIfacePattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_outgoing_address: {
      value: cdktf.stringToHclTerraform(struct!.natOutgoingAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_port_range: {
      value: cdktf.stringToHclTerraform(struct!.natPortRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netlink_timeout: {
      value: cdktf.stringToHclTerraform(struct!.netlinkTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nftables_filter_allow_action: {
      value: cdktf.stringToHclTerraform(struct!.nftablesFilterAllowAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nftables_filter_deny_action: {
      value: cdktf.stringToHclTerraform(struct!.nftablesFilterDenyAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nftables_mangle_allow_action: {
      value: cdktf.stringToHclTerraform(struct!.nftablesMangleAllowAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nftables_mark_mask: {
      value: cdktf.numberToHclTerraform(struct!.nftablesMarkMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nftables_mode: {
      value: cdktf.stringToHclTerraform(struct!.nftablesMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nftables_refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.nftablesRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    openstack_region: {
      value: cdktf.stringToHclTerraform(struct!.openstackRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_sync_path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.policySyncPathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus_go_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.prometheusGoMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.prometheusMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus_metrics_host: {
      value: cdktf.stringToHclTerraform(struct!.prometheusMetricsHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus_metrics_port: {
      value: cdktf.numberToHclTerraform(struct!.prometheusMetricsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prometheus_process_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.prometheusProcessMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prometheus_wire_guard_metrics_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.prometheusWireGuardMetricsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_external_routes: {
      value: cdktf.booleanToHclTerraform(struct!.removeExternalRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reporting_interval: {
      value: cdktf.stringToHclTerraform(struct!.reportingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reporting_ttl: {
      value: cdktf.stringToHclTerraform(struct!.reportingTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.routeRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_source: {
      value: cdktf.stringToHclTerraform(struct!.routeSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_sync_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.routeSyncDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    route_table_range: {
      value: dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangeToHclTerraform(struct!.routeTableRange),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRange",
    },
    route_table_ranges: {
      value: cdktf.listMapperHcl(dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangesToHclTerraform, false)(struct!.routeTableRanges),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangesList",
    },
    service_loop_prevention: {
      value: cdktf.stringToHclTerraform(struct!.serviceLoopPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sidecar_acceleration_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sidecarAccelerationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    usage_reporting_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.usageReportingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    usage_reporting_initial_delay: {
      value: cdktf.stringToHclTerraform(struct!.usageReportingInitialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usage_reporting_interval: {
      value: cdktf.stringToHclTerraform(struct!.usageReportingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_internal_dataplane_driver: {
      value: cdktf.booleanToHclTerraform(struct!.useInternalDataplaneDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vxlan_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.vxlanEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vxlan_mtu: {
      value: cdktf.numberToHclTerraform(struct!.vxlanMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vxlan_mtuv6: {
      value: cdktf.numberToHclTerraform(struct!.vxlanMtuv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vxlan_port: {
      value: cdktf.numberToHclTerraform(struct!.vxlanPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vxlan_vni: {
      value: cdktf.numberToHclTerraform(struct!.vxlanVni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    windows_manage_firewall_rules: {
      value: cdktf.stringToHclTerraform(struct!.windowsManageFirewallRules),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wireguard_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.wireguardEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wireguard_enabled_v6: {
      value: cdktf.booleanToHclTerraform(struct!.wireguardEnabledV6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wireguard_host_encryption_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.wireguardHostEncryptionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wireguard_interface_name: {
      value: cdktf.stringToHclTerraform(struct!.wireguardInterfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wireguard_interface_name_v6: {
      value: cdktf.stringToHclTerraform(struct!.wireguardInterfaceNameV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wireguard_keep_alive: {
      value: cdktf.stringToHclTerraform(struct!.wireguardKeepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wireguard_listening_port: {
      value: cdktf.numberToHclTerraform(struct!.wireguardListeningPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wireguard_listening_port_v6: {
      value: cdktf.numberToHclTerraform(struct!.wireguardListeningPortV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wireguard_mtu: {
      value: cdktf.numberToHclTerraform(struct!.wireguardMtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wireguard_mtuv6: {
      value: cdktf.numberToHclTerraform(struct!.wireguardMtuv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wireguard_routing_rule_priority: {
      value: cdktf.numberToHclTerraform(struct!.wireguardRoutingRulePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    workload_source_spoofing: {
      value: cdktf.stringToHclTerraform(struct!.workloadSourceSpoofing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xdp_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.xdpEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xdp_refresh_interval: {
      value: cdktf.stringToHclTerraform(struct!.xdpRefreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowIpipPacketsFromWorkloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIpipPacketsFromWorkloads = this._allowIpipPacketsFromWorkloads;
    }
    if (this._allowVxlanPacketsFromWorkloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowVxlanPacketsFromWorkloads = this._allowVxlanPacketsFromWorkloads;
    }
    if (this._awsSrcDstCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSrcDstCheck = this._awsSrcDstCheck;
    }
    if (this._bpfConnectTimeLoadBalancing !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfConnectTimeLoadBalancing = this._bpfConnectTimeLoadBalancing;
    }
    if (this._bpfConnectTimeLoadBalancingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfConnectTimeLoadBalancingEnabled = this._bpfConnectTimeLoadBalancingEnabled;
    }
    if (this._bpfCtlbLogFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfCtlbLogFilter = this._bpfCtlbLogFilter;
    }
    if (this._bpfDataIfacePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfDataIfacePattern = this._bpfDataIfacePattern;
    }
    if (this._bpfDisableGroForIfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfDisableGroForIfaces = this._bpfDisableGroForIfaces;
    }
    if (this._bpfDisableUnprivileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfDisableUnprivileged = this._bpfDisableUnprivileged;
    }
    if (this._bpfDsrOptoutCidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfDsrOptoutCidrs = this._bpfDsrOptoutCidrs;
    }
    if (this._bpfEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfEnabled = this._bpfEnabled;
    }
    if (this._bpfEnforceRpf !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfEnforceRpf = this._bpfEnforceRpf;
    }
    if (this._bpfExcludeCidrsFromNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfExcludeCidrsFromNat = this._bpfExcludeCidrsFromNat;
    }
    if (this._bpfExtToServiceConnmark !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfExtToServiceConnmark = this._bpfExtToServiceConnmark;
    }
    if (this._bpfExternalServiceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfExternalServiceMode = this._bpfExternalServiceMode;
    }
    if (this._bpfForceTrackPacketsFromIfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfForceTrackPacketsFromIfaces = this._bpfForceTrackPacketsFromIfaces;
    }
    if (this._bpfHostConntrackBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfHostConntrackBypass = this._bpfHostConntrackBypass;
    }
    if (this._bpfHostNetworkedNatWithoutCtlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfHostNetworkedNatWithoutCtlb = this._bpfHostNetworkedNatWithoutCtlb;
    }
    if (this._bpfKubeProxyEndpointSlicesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfKubeProxyEndpointSlicesEnabled = this._bpfKubeProxyEndpointSlicesEnabled;
    }
    if (this._bpfKubeProxyIptablesCleanupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfKubeProxyIptablesCleanupEnabled = this._bpfKubeProxyIptablesCleanupEnabled;
    }
    if (this._bpfKubeProxyMinSyncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfKubeProxyMinSyncPeriod = this._bpfKubeProxyMinSyncPeriod;
    }
    if (this._bpfL3IfacePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfL3IfacePattern = this._bpfL3IfacePattern;
    }
    if (this._bpfLogFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfLogFilters = this._bpfLogFilters;
    }
    if (this._bpfLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfLogLevel = this._bpfLogLevel;
    }
    if (this._bpfMapSizeConntrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfMapSizeConntrack = this._bpfMapSizeConntrack;
    }
    if (this._bpfMapSizeIfState !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfMapSizeIfState = this._bpfMapSizeIfState;
    }
    if (this._bpfMapSizeIpSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfMapSizeIpSets = this._bpfMapSizeIpSets;
    }
    if (this._bpfMapSizeNatAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfMapSizeNatAffinity = this._bpfMapSizeNatAffinity;
    }
    if (this._bpfMapSizeNatBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfMapSizeNatBackend = this._bpfMapSizeNatBackend;
    }
    if (this._bpfMapSizeNatFrontend !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfMapSizeNatFrontend = this._bpfMapSizeNatFrontend;
    }
    if (this._bpfMapSizeRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfMapSizeRoute = this._bpfMapSizeRoute;
    }
    if (this._bpfPolicyDebugEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfPolicyDebugEnabled = this._bpfPolicyDebugEnabled;
    }
    if (this._bpfPsnatPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfPsnatPorts = this._bpfPsnatPorts;
    }
    if (this._bpfRedirectToPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpfRedirectToPeer = this._bpfRedirectToPeer;
    }
    if (this._chainInsertMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.chainInsertMode = this._chainInsertMode;
    }
    if (this._dataplaneDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataplaneDriver = this._dataplaneDriver;
    }
    if (this._dataplaneWatchdogTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataplaneWatchdogTimeout = this._dataplaneWatchdogTimeout;
    }
    if (this._debugDisableLogDropping !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugDisableLogDropping = this._debugDisableLogDropping;
    }
    if (this._debugHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugHost = this._debugHost;
    }
    if (this._debugMemoryProfilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugMemoryProfilePath = this._debugMemoryProfilePath;
    }
    if (this._debugPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPort = this._debugPort;
    }
    if (this._debugSimulateCalcGraphHangAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugSimulateCalcGraphHangAfter = this._debugSimulateCalcGraphHangAfter;
    }
    if (this._debugSimulateDataplaneApplyDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugSimulateDataplaneApplyDelay = this._debugSimulateDataplaneApplyDelay;
    }
    if (this._debugSimulateDataplaneHangAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugSimulateDataplaneHangAfter = this._debugSimulateDataplaneHangAfter;
    }
    if (this._defaultEndpointToHostAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEndpointToHostAction = this._defaultEndpointToHostAction;
    }
    if (this._deviceRouteProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceRouteProtocol = this._deviceRouteProtocol;
    }
    if (this._deviceRouteSourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceRouteSourceAddress = this._deviceRouteSourceAddress;
    }
    if (this._deviceRouteSourceAddressIPv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceRouteSourceAddressIPv6 = this._deviceRouteSourceAddressIPv6;
    }
    if (this._disableConntrackInvalidCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableConntrackInvalidCheck = this._disableConntrackInvalidCheck;
    }
    if (this._endpointReportingDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointReportingDelay = this._endpointReportingDelay;
    }
    if (this._endpointReportingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointReportingEnabled = this._endpointReportingEnabled;
    }
    if (this._endpointStatusPathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointStatusPathPrefix = this._endpointStatusPathPrefix;
    }
    if (this._externalNodesList !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalNodesList = this._externalNodesList;
    }
    if (this._failsafeInboundHostPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failsafeInboundHostPorts = this._failsafeInboundHostPorts?.internalValue;
    }
    if (this._failsafeOutboundHostPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failsafeOutboundHostPorts = this._failsafeOutboundHostPorts?.internalValue;
    }
    if (this._featureDetectOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureDetectOverride = this._featureDetectOverride;
    }
    if (this._featureGates !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates;
    }
    if (this._floatingIPs !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIPs = this._floatingIPs;
    }
    if (this._genericXdpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericXdpEnabled = this._genericXdpEnabled;
    }
    if (this._goGcThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.goGcThreshold = this._goGcThreshold;
    }
    if (this._goMaxProcs !== undefined) {
      hasAnyValues = true;
      internalValueResult.goMaxProcs = this._goMaxProcs;
    }
    if (this._goMemoryLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.goMemoryLimitMb = this._goMemoryLimitMb;
    }
    if (this._healthEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthEnabled = this._healthEnabled;
    }
    if (this._healthHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthHost = this._healthHost;
    }
    if (this._healthPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthPort = this._healthPort;
    }
    if (this._healthTimeoutOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthTimeoutOverrides = this._healthTimeoutOverrides?.internalValue;
    }
    if (this._interfaceExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceExclude = this._interfaceExclude;
    }
    if (this._interfacePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfacePrefix = this._interfacePrefix;
    }
    if (this._interfaceRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceRefreshInterval = this._interfaceRefreshInterval;
    }
    if (this._ipForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipForwarding = this._ipForwarding;
    }
    if (this._ipipEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipEnabled = this._ipipEnabled;
    }
    if (this._ipipMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipMtu = this._ipipMtu;
    }
    if (this._ipsetsRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsetsRefreshInterval = this._ipsetsRefreshInterval;
    }
    if (this._iptablesBackend !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptablesBackend = this._iptablesBackend;
    }
    if (this._iptablesFilterAllowAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptablesFilterAllowAction = this._iptablesFilterAllowAction;
    }
    if (this._iptablesFilterDenyAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptablesFilterDenyAction = this._iptablesFilterDenyAction;
    }
    if (this._iptablesLockFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptablesLockFilePath = this._iptablesLockFilePath;
    }
    if (this._iptablesLockProbeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptablesLockProbeInterval = this._iptablesLockProbeInterval;
    }
    if (this._iptablesLockTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptablesLockTimeout = this._iptablesLockTimeout;
    }
    if (this._iptablesMangleAllowAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptablesMangleAllowAction = this._iptablesMangleAllowAction;
    }
    if (this._iptablesMarkMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptablesMarkMask = this._iptablesMarkMask;
    }
    if (this._iptablesNatOutgoingInterfaceFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptablesNatOutgoingInterfaceFilter = this._iptablesNatOutgoingInterfaceFilter;
    }
    if (this._iptablesPostWriteCheckInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptablesPostWriteCheckInterval = this._iptablesPostWriteCheckInterval;
    }
    if (this._iptablesRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.iptablesRefreshInterval = this._iptablesRefreshInterval;
    }
    if (this._ipv6Support !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Support = this._ipv6Support;
    }
    if (this._kubeNodePortRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeNodePortRanges = this._kubeNodePortRanges;
    }
    if (this._logDebugFilenameRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDebugFilenameRegex = this._logDebugFilenameRegex;
    }
    if (this._logFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFilePath = this._logFilePath;
    }
    if (this._logPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logPrefix = this._logPrefix;
    }
    if (this._logSeverityFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSeverityFile = this._logSeverityFile;
    }
    if (this._logSeverityScreen !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSeverityScreen = this._logSeverityScreen;
    }
    if (this._logSeveritySys !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSeveritySys = this._logSeveritySys;
    }
    if (this._maxIpsetSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIpsetSize = this._maxIpsetSize;
    }
    if (this._metadataAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataAddr = this._metadataAddr;
    }
    if (this._metadataPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataPort = this._metadataPort;
    }
    if (this._mtuIfacePattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIfacePattern = this._mtuIfacePattern;
    }
    if (this._natOutgoingAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.natOutgoingAddress = this._natOutgoingAddress;
    }
    if (this._natPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPortRange = this._natPortRange;
    }
    if (this._netlinkTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.netlinkTimeout = this._netlinkTimeout;
    }
    if (this._nftablesFilterAllowAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.nftablesFilterAllowAction = this._nftablesFilterAllowAction;
    }
    if (this._nftablesFilterDenyAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.nftablesFilterDenyAction = this._nftablesFilterDenyAction;
    }
    if (this._nftablesMangleAllowAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.nftablesMangleAllowAction = this._nftablesMangleAllowAction;
    }
    if (this._nftablesMarkMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.nftablesMarkMask = this._nftablesMarkMask;
    }
    if (this._nftablesMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.nftablesMode = this._nftablesMode;
    }
    if (this._nftablesRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nftablesRefreshInterval = this._nftablesRefreshInterval;
    }
    if (this._openstackRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.openstackRegion = this._openstackRegion;
    }
    if (this._policySyncPathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.policySyncPathPrefix = this._policySyncPathPrefix;
    }
    if (this._prometheusGoMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusGoMetricsEnabled = this._prometheusGoMetricsEnabled;
    }
    if (this._prometheusMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusMetricsEnabled = this._prometheusMetricsEnabled;
    }
    if (this._prometheusMetricsHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusMetricsHost = this._prometheusMetricsHost;
    }
    if (this._prometheusMetricsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusMetricsPort = this._prometheusMetricsPort;
    }
    if (this._prometheusProcessMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusProcessMetricsEnabled = this._prometheusProcessMetricsEnabled;
    }
    if (this._prometheusWireGuardMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheusWireGuardMetricsEnabled = this._prometheusWireGuardMetricsEnabled;
    }
    if (this._removeExternalRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeExternalRoutes = this._removeExternalRoutes;
    }
    if (this._reportingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingInterval = this._reportingInterval;
    }
    if (this._reportingTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportingTtl = this._reportingTtl;
    }
    if (this._routeRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeRefreshInterval = this._routeRefreshInterval;
    }
    if (this._routeSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSource = this._routeSource;
    }
    if (this._routeSyncDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSyncDisabled = this._routeSyncDisabled;
    }
    if (this._routeTableRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableRange = this._routeTableRange?.internalValue;
    }
    if (this._routeTableRanges?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTableRanges = this._routeTableRanges?.internalValue;
    }
    if (this._serviceLoopPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLoopPrevention = this._serviceLoopPrevention;
    }
    if (this._sidecarAccelerationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecarAccelerationEnabled = this._sidecarAccelerationEnabled;
    }
    if (this._usageReportingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageReportingEnabled = this._usageReportingEnabled;
    }
    if (this._usageReportingInitialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageReportingInitialDelay = this._usageReportingInitialDelay;
    }
    if (this._usageReportingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.usageReportingInterval = this._usageReportingInterval;
    }
    if (this._useInternalDataplaneDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.useInternalDataplaneDriver = this._useInternalDataplaneDriver;
    }
    if (this._vxlanEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxlanEnabled = this._vxlanEnabled;
    }
    if (this._vxlanMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxlanMtu = this._vxlanMtu;
    }
    if (this._vxlanMtuv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxlanMtuv6 = this._vxlanMtuv6;
    }
    if (this._vxlanPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxlanPort = this._vxlanPort;
    }
    if (this._vxlanVni !== undefined) {
      hasAnyValues = true;
      internalValueResult.vxlanVni = this._vxlanVni;
    }
    if (this._windowsManageFirewallRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsManageFirewallRules = this._windowsManageFirewallRules;
    }
    if (this._wireguardEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireguardEnabled = this._wireguardEnabled;
    }
    if (this._wireguardEnabledV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireguardEnabledV6 = this._wireguardEnabledV6;
    }
    if (this._wireguardHostEncryptionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireguardHostEncryptionEnabled = this._wireguardHostEncryptionEnabled;
    }
    if (this._wireguardInterfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireguardInterfaceName = this._wireguardInterfaceName;
    }
    if (this._wireguardInterfaceNameV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireguardInterfaceNameV6 = this._wireguardInterfaceNameV6;
    }
    if (this._wireguardKeepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireguardKeepAlive = this._wireguardKeepAlive;
    }
    if (this._wireguardListeningPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireguardListeningPort = this._wireguardListeningPort;
    }
    if (this._wireguardListeningPortV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireguardListeningPortV6 = this._wireguardListeningPortV6;
    }
    if (this._wireguardMtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireguardMtu = this._wireguardMtu;
    }
    if (this._wireguardMtuv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireguardMtuv6 = this._wireguardMtuv6;
    }
    if (this._wireguardRoutingRulePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireguardRoutingRulePriority = this._wireguardRoutingRulePriority;
    }
    if (this._workloadSourceSpoofing !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadSourceSpoofing = this._workloadSourceSpoofing;
    }
    if (this._xdpEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xdpEnabled = this._xdpEnabled;
    }
    if (this._xdpRefreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.xdpRefreshInterval = this._xdpRefreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowIpipPacketsFromWorkloads = undefined;
      this._allowVxlanPacketsFromWorkloads = undefined;
      this._awsSrcDstCheck = undefined;
      this._bpfConnectTimeLoadBalancing = undefined;
      this._bpfConnectTimeLoadBalancingEnabled = undefined;
      this._bpfCtlbLogFilter = undefined;
      this._bpfDataIfacePattern = undefined;
      this._bpfDisableGroForIfaces = undefined;
      this._bpfDisableUnprivileged = undefined;
      this._bpfDsrOptoutCidrs = undefined;
      this._bpfEnabled = undefined;
      this._bpfEnforceRpf = undefined;
      this._bpfExcludeCidrsFromNat = undefined;
      this._bpfExtToServiceConnmark = undefined;
      this._bpfExternalServiceMode = undefined;
      this._bpfForceTrackPacketsFromIfaces = undefined;
      this._bpfHostConntrackBypass = undefined;
      this._bpfHostNetworkedNatWithoutCtlb = undefined;
      this._bpfKubeProxyEndpointSlicesEnabled = undefined;
      this._bpfKubeProxyIptablesCleanupEnabled = undefined;
      this._bpfKubeProxyMinSyncPeriod = undefined;
      this._bpfL3IfacePattern = undefined;
      this._bpfLogFilters = undefined;
      this._bpfLogLevel = undefined;
      this._bpfMapSizeConntrack = undefined;
      this._bpfMapSizeIfState = undefined;
      this._bpfMapSizeIpSets = undefined;
      this._bpfMapSizeNatAffinity = undefined;
      this._bpfMapSizeNatBackend = undefined;
      this._bpfMapSizeNatFrontend = undefined;
      this._bpfMapSizeRoute = undefined;
      this._bpfPolicyDebugEnabled = undefined;
      this._bpfPsnatPorts = undefined;
      this._bpfRedirectToPeer = undefined;
      this._chainInsertMode = undefined;
      this._dataplaneDriver = undefined;
      this._dataplaneWatchdogTimeout = undefined;
      this._debugDisableLogDropping = undefined;
      this._debugHost = undefined;
      this._debugMemoryProfilePath = undefined;
      this._debugPort = undefined;
      this._debugSimulateCalcGraphHangAfter = undefined;
      this._debugSimulateDataplaneApplyDelay = undefined;
      this._debugSimulateDataplaneHangAfter = undefined;
      this._defaultEndpointToHostAction = undefined;
      this._deviceRouteProtocol = undefined;
      this._deviceRouteSourceAddress = undefined;
      this._deviceRouteSourceAddressIPv6 = undefined;
      this._disableConntrackInvalidCheck = undefined;
      this._endpointReportingDelay = undefined;
      this._endpointReportingEnabled = undefined;
      this._endpointStatusPathPrefix = undefined;
      this._externalNodesList = undefined;
      this._failsafeInboundHostPorts.internalValue = undefined;
      this._failsafeOutboundHostPorts.internalValue = undefined;
      this._featureDetectOverride = undefined;
      this._featureGates = undefined;
      this._floatingIPs = undefined;
      this._genericXdpEnabled = undefined;
      this._goGcThreshold = undefined;
      this._goMaxProcs = undefined;
      this._goMemoryLimitMb = undefined;
      this._healthEnabled = undefined;
      this._healthHost = undefined;
      this._healthPort = undefined;
      this._healthTimeoutOverrides.internalValue = undefined;
      this._interfaceExclude = undefined;
      this._interfacePrefix = undefined;
      this._interfaceRefreshInterval = undefined;
      this._ipForwarding = undefined;
      this._ipipEnabled = undefined;
      this._ipipMtu = undefined;
      this._ipsetsRefreshInterval = undefined;
      this._iptablesBackend = undefined;
      this._iptablesFilterAllowAction = undefined;
      this._iptablesFilterDenyAction = undefined;
      this._iptablesLockFilePath = undefined;
      this._iptablesLockProbeInterval = undefined;
      this._iptablesLockTimeout = undefined;
      this._iptablesMangleAllowAction = undefined;
      this._iptablesMarkMask = undefined;
      this._iptablesNatOutgoingInterfaceFilter = undefined;
      this._iptablesPostWriteCheckInterval = undefined;
      this._iptablesRefreshInterval = undefined;
      this._ipv6Support = undefined;
      this._kubeNodePortRanges = undefined;
      this._logDebugFilenameRegex = undefined;
      this._logFilePath = undefined;
      this._logPrefix = undefined;
      this._logSeverityFile = undefined;
      this._logSeverityScreen = undefined;
      this._logSeveritySys = undefined;
      this._maxIpsetSize = undefined;
      this._metadataAddr = undefined;
      this._metadataPort = undefined;
      this._mtuIfacePattern = undefined;
      this._natOutgoingAddress = undefined;
      this._natPortRange = undefined;
      this._netlinkTimeout = undefined;
      this._nftablesFilterAllowAction = undefined;
      this._nftablesFilterDenyAction = undefined;
      this._nftablesMangleAllowAction = undefined;
      this._nftablesMarkMask = undefined;
      this._nftablesMode = undefined;
      this._nftablesRefreshInterval = undefined;
      this._openstackRegion = undefined;
      this._policySyncPathPrefix = undefined;
      this._prometheusGoMetricsEnabled = undefined;
      this._prometheusMetricsEnabled = undefined;
      this._prometheusMetricsHost = undefined;
      this._prometheusMetricsPort = undefined;
      this._prometheusProcessMetricsEnabled = undefined;
      this._prometheusWireGuardMetricsEnabled = undefined;
      this._removeExternalRoutes = undefined;
      this._reportingInterval = undefined;
      this._reportingTtl = undefined;
      this._routeRefreshInterval = undefined;
      this._routeSource = undefined;
      this._routeSyncDisabled = undefined;
      this._routeTableRange.internalValue = undefined;
      this._routeTableRanges.internalValue = undefined;
      this._serviceLoopPrevention = undefined;
      this._sidecarAccelerationEnabled = undefined;
      this._usageReportingEnabled = undefined;
      this._usageReportingInitialDelay = undefined;
      this._usageReportingInterval = undefined;
      this._useInternalDataplaneDriver = undefined;
      this._vxlanEnabled = undefined;
      this._vxlanMtu = undefined;
      this._vxlanMtuv6 = undefined;
      this._vxlanPort = undefined;
      this._vxlanVni = undefined;
      this._windowsManageFirewallRules = undefined;
      this._wireguardEnabled = undefined;
      this._wireguardEnabledV6 = undefined;
      this._wireguardHostEncryptionEnabled = undefined;
      this._wireguardInterfaceName = undefined;
      this._wireguardInterfaceNameV6 = undefined;
      this._wireguardKeepAlive = undefined;
      this._wireguardListeningPort = undefined;
      this._wireguardListeningPortV6 = undefined;
      this._wireguardMtu = undefined;
      this._wireguardMtuv6 = undefined;
      this._wireguardRoutingRulePriority = undefined;
      this._workloadSourceSpoofing = undefined;
      this._xdpEnabled = undefined;
      this._xdpRefreshInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowIpipPacketsFromWorkloads = value.allowIpipPacketsFromWorkloads;
      this._allowVxlanPacketsFromWorkloads = value.allowVxlanPacketsFromWorkloads;
      this._awsSrcDstCheck = value.awsSrcDstCheck;
      this._bpfConnectTimeLoadBalancing = value.bpfConnectTimeLoadBalancing;
      this._bpfConnectTimeLoadBalancingEnabled = value.bpfConnectTimeLoadBalancingEnabled;
      this._bpfCtlbLogFilter = value.bpfCtlbLogFilter;
      this._bpfDataIfacePattern = value.bpfDataIfacePattern;
      this._bpfDisableGroForIfaces = value.bpfDisableGroForIfaces;
      this._bpfDisableUnprivileged = value.bpfDisableUnprivileged;
      this._bpfDsrOptoutCidrs = value.bpfDsrOptoutCidrs;
      this._bpfEnabled = value.bpfEnabled;
      this._bpfEnforceRpf = value.bpfEnforceRpf;
      this._bpfExcludeCidrsFromNat = value.bpfExcludeCidrsFromNat;
      this._bpfExtToServiceConnmark = value.bpfExtToServiceConnmark;
      this._bpfExternalServiceMode = value.bpfExternalServiceMode;
      this._bpfForceTrackPacketsFromIfaces = value.bpfForceTrackPacketsFromIfaces;
      this._bpfHostConntrackBypass = value.bpfHostConntrackBypass;
      this._bpfHostNetworkedNatWithoutCtlb = value.bpfHostNetworkedNatWithoutCtlb;
      this._bpfKubeProxyEndpointSlicesEnabled = value.bpfKubeProxyEndpointSlicesEnabled;
      this._bpfKubeProxyIptablesCleanupEnabled = value.bpfKubeProxyIptablesCleanupEnabled;
      this._bpfKubeProxyMinSyncPeriod = value.bpfKubeProxyMinSyncPeriod;
      this._bpfL3IfacePattern = value.bpfL3IfacePattern;
      this._bpfLogFilters = value.bpfLogFilters;
      this._bpfLogLevel = value.bpfLogLevel;
      this._bpfMapSizeConntrack = value.bpfMapSizeConntrack;
      this._bpfMapSizeIfState = value.bpfMapSizeIfState;
      this._bpfMapSizeIpSets = value.bpfMapSizeIpSets;
      this._bpfMapSizeNatAffinity = value.bpfMapSizeNatAffinity;
      this._bpfMapSizeNatBackend = value.bpfMapSizeNatBackend;
      this._bpfMapSizeNatFrontend = value.bpfMapSizeNatFrontend;
      this._bpfMapSizeRoute = value.bpfMapSizeRoute;
      this._bpfPolicyDebugEnabled = value.bpfPolicyDebugEnabled;
      this._bpfPsnatPorts = value.bpfPsnatPorts;
      this._bpfRedirectToPeer = value.bpfRedirectToPeer;
      this._chainInsertMode = value.chainInsertMode;
      this._dataplaneDriver = value.dataplaneDriver;
      this._dataplaneWatchdogTimeout = value.dataplaneWatchdogTimeout;
      this._debugDisableLogDropping = value.debugDisableLogDropping;
      this._debugHost = value.debugHost;
      this._debugMemoryProfilePath = value.debugMemoryProfilePath;
      this._debugPort = value.debugPort;
      this._debugSimulateCalcGraphHangAfter = value.debugSimulateCalcGraphHangAfter;
      this._debugSimulateDataplaneApplyDelay = value.debugSimulateDataplaneApplyDelay;
      this._debugSimulateDataplaneHangAfter = value.debugSimulateDataplaneHangAfter;
      this._defaultEndpointToHostAction = value.defaultEndpointToHostAction;
      this._deviceRouteProtocol = value.deviceRouteProtocol;
      this._deviceRouteSourceAddress = value.deviceRouteSourceAddress;
      this._deviceRouteSourceAddressIPv6 = value.deviceRouteSourceAddressIPv6;
      this._disableConntrackInvalidCheck = value.disableConntrackInvalidCheck;
      this._endpointReportingDelay = value.endpointReportingDelay;
      this._endpointReportingEnabled = value.endpointReportingEnabled;
      this._endpointStatusPathPrefix = value.endpointStatusPathPrefix;
      this._externalNodesList = value.externalNodesList;
      this._failsafeInboundHostPorts.internalValue = value.failsafeInboundHostPorts;
      this._failsafeOutboundHostPorts.internalValue = value.failsafeOutboundHostPorts;
      this._featureDetectOverride = value.featureDetectOverride;
      this._featureGates = value.featureGates;
      this._floatingIPs = value.floatingIPs;
      this._genericXdpEnabled = value.genericXdpEnabled;
      this._goGcThreshold = value.goGcThreshold;
      this._goMaxProcs = value.goMaxProcs;
      this._goMemoryLimitMb = value.goMemoryLimitMb;
      this._healthEnabled = value.healthEnabled;
      this._healthHost = value.healthHost;
      this._healthPort = value.healthPort;
      this._healthTimeoutOverrides.internalValue = value.healthTimeoutOverrides;
      this._interfaceExclude = value.interfaceExclude;
      this._interfacePrefix = value.interfacePrefix;
      this._interfaceRefreshInterval = value.interfaceRefreshInterval;
      this._ipForwarding = value.ipForwarding;
      this._ipipEnabled = value.ipipEnabled;
      this._ipipMtu = value.ipipMtu;
      this._ipsetsRefreshInterval = value.ipsetsRefreshInterval;
      this._iptablesBackend = value.iptablesBackend;
      this._iptablesFilterAllowAction = value.iptablesFilterAllowAction;
      this._iptablesFilterDenyAction = value.iptablesFilterDenyAction;
      this._iptablesLockFilePath = value.iptablesLockFilePath;
      this._iptablesLockProbeInterval = value.iptablesLockProbeInterval;
      this._iptablesLockTimeout = value.iptablesLockTimeout;
      this._iptablesMangleAllowAction = value.iptablesMangleAllowAction;
      this._iptablesMarkMask = value.iptablesMarkMask;
      this._iptablesNatOutgoingInterfaceFilter = value.iptablesNatOutgoingInterfaceFilter;
      this._iptablesPostWriteCheckInterval = value.iptablesPostWriteCheckInterval;
      this._iptablesRefreshInterval = value.iptablesRefreshInterval;
      this._ipv6Support = value.ipv6Support;
      this._kubeNodePortRanges = value.kubeNodePortRanges;
      this._logDebugFilenameRegex = value.logDebugFilenameRegex;
      this._logFilePath = value.logFilePath;
      this._logPrefix = value.logPrefix;
      this._logSeverityFile = value.logSeverityFile;
      this._logSeverityScreen = value.logSeverityScreen;
      this._logSeveritySys = value.logSeveritySys;
      this._maxIpsetSize = value.maxIpsetSize;
      this._metadataAddr = value.metadataAddr;
      this._metadataPort = value.metadataPort;
      this._mtuIfacePattern = value.mtuIfacePattern;
      this._natOutgoingAddress = value.natOutgoingAddress;
      this._natPortRange = value.natPortRange;
      this._netlinkTimeout = value.netlinkTimeout;
      this._nftablesFilterAllowAction = value.nftablesFilterAllowAction;
      this._nftablesFilterDenyAction = value.nftablesFilterDenyAction;
      this._nftablesMangleAllowAction = value.nftablesMangleAllowAction;
      this._nftablesMarkMask = value.nftablesMarkMask;
      this._nftablesMode = value.nftablesMode;
      this._nftablesRefreshInterval = value.nftablesRefreshInterval;
      this._openstackRegion = value.openstackRegion;
      this._policySyncPathPrefix = value.policySyncPathPrefix;
      this._prometheusGoMetricsEnabled = value.prometheusGoMetricsEnabled;
      this._prometheusMetricsEnabled = value.prometheusMetricsEnabled;
      this._prometheusMetricsHost = value.prometheusMetricsHost;
      this._prometheusMetricsPort = value.prometheusMetricsPort;
      this._prometheusProcessMetricsEnabled = value.prometheusProcessMetricsEnabled;
      this._prometheusWireGuardMetricsEnabled = value.prometheusWireGuardMetricsEnabled;
      this._removeExternalRoutes = value.removeExternalRoutes;
      this._reportingInterval = value.reportingInterval;
      this._reportingTtl = value.reportingTtl;
      this._routeRefreshInterval = value.routeRefreshInterval;
      this._routeSource = value.routeSource;
      this._routeSyncDisabled = value.routeSyncDisabled;
      this._routeTableRange.internalValue = value.routeTableRange;
      this._routeTableRanges.internalValue = value.routeTableRanges;
      this._serviceLoopPrevention = value.serviceLoopPrevention;
      this._sidecarAccelerationEnabled = value.sidecarAccelerationEnabled;
      this._usageReportingEnabled = value.usageReportingEnabled;
      this._usageReportingInitialDelay = value.usageReportingInitialDelay;
      this._usageReportingInterval = value.usageReportingInterval;
      this._useInternalDataplaneDriver = value.useInternalDataplaneDriver;
      this._vxlanEnabled = value.vxlanEnabled;
      this._vxlanMtu = value.vxlanMtu;
      this._vxlanMtuv6 = value.vxlanMtuv6;
      this._vxlanPort = value.vxlanPort;
      this._vxlanVni = value.vxlanVni;
      this._windowsManageFirewallRules = value.windowsManageFirewallRules;
      this._wireguardEnabled = value.wireguardEnabled;
      this._wireguardEnabledV6 = value.wireguardEnabledV6;
      this._wireguardHostEncryptionEnabled = value.wireguardHostEncryptionEnabled;
      this._wireguardInterfaceName = value.wireguardInterfaceName;
      this._wireguardInterfaceNameV6 = value.wireguardInterfaceNameV6;
      this._wireguardKeepAlive = value.wireguardKeepAlive;
      this._wireguardListeningPort = value.wireguardListeningPort;
      this._wireguardListeningPortV6 = value.wireguardListeningPortV6;
      this._wireguardMtu = value.wireguardMtu;
      this._wireguardMtuv6 = value.wireguardMtuv6;
      this._wireguardRoutingRulePriority = value.wireguardRoutingRulePriority;
      this._workloadSourceSpoofing = value.workloadSourceSpoofing;
      this._xdpEnabled = value.xdpEnabled;
      this._xdpRefreshInterval = value.xdpRefreshInterval;
    }
  }

  // allow_ipip_packets_from_workloads - computed: false, optional: true, required: false
  private _allowIpipPacketsFromWorkloads?: boolean | cdktf.IResolvable; 
  public get allowIpipPacketsFromWorkloads() {
    return this.getBooleanAttribute('allow_ipip_packets_from_workloads');
  }
  public set allowIpipPacketsFromWorkloads(value: boolean | cdktf.IResolvable) {
    this._allowIpipPacketsFromWorkloads = value;
  }
  public resetAllowIpipPacketsFromWorkloads() {
    this._allowIpipPacketsFromWorkloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpipPacketsFromWorkloadsInput() {
    return this._allowIpipPacketsFromWorkloads;
  }

  // allow_vxlan_packets_from_workloads - computed: false, optional: true, required: false
  private _allowVxlanPacketsFromWorkloads?: boolean | cdktf.IResolvable; 
  public get allowVxlanPacketsFromWorkloads() {
    return this.getBooleanAttribute('allow_vxlan_packets_from_workloads');
  }
  public set allowVxlanPacketsFromWorkloads(value: boolean | cdktf.IResolvable) {
    this._allowVxlanPacketsFromWorkloads = value;
  }
  public resetAllowVxlanPacketsFromWorkloads() {
    this._allowVxlanPacketsFromWorkloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowVxlanPacketsFromWorkloadsInput() {
    return this._allowVxlanPacketsFromWorkloads;
  }

  // aws_src_dst_check - computed: false, optional: true, required: false
  private _awsSrcDstCheck?: string; 
  public get awsSrcDstCheck() {
    return this.getStringAttribute('aws_src_dst_check');
  }
  public set awsSrcDstCheck(value: string) {
    this._awsSrcDstCheck = value;
  }
  public resetAwsSrcDstCheck() {
    this._awsSrcDstCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSrcDstCheckInput() {
    return this._awsSrcDstCheck;
  }

  // bpf_connect_time_load_balancing - computed: false, optional: true, required: false
  private _bpfConnectTimeLoadBalancing?: string; 
  public get bpfConnectTimeLoadBalancing() {
    return this.getStringAttribute('bpf_connect_time_load_balancing');
  }
  public set bpfConnectTimeLoadBalancing(value: string) {
    this._bpfConnectTimeLoadBalancing = value;
  }
  public resetBpfConnectTimeLoadBalancing() {
    this._bpfConnectTimeLoadBalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfConnectTimeLoadBalancingInput() {
    return this._bpfConnectTimeLoadBalancing;
  }

  // bpf_connect_time_load_balancing_enabled - computed: false, optional: true, required: false
  private _bpfConnectTimeLoadBalancingEnabled?: boolean | cdktf.IResolvable; 
  public get bpfConnectTimeLoadBalancingEnabled() {
    return this.getBooleanAttribute('bpf_connect_time_load_balancing_enabled');
  }
  public set bpfConnectTimeLoadBalancingEnabled(value: boolean | cdktf.IResolvable) {
    this._bpfConnectTimeLoadBalancingEnabled = value;
  }
  public resetBpfConnectTimeLoadBalancingEnabled() {
    this._bpfConnectTimeLoadBalancingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfConnectTimeLoadBalancingEnabledInput() {
    return this._bpfConnectTimeLoadBalancingEnabled;
  }

  // bpf_ctlb_log_filter - computed: false, optional: true, required: false
  private _bpfCtlbLogFilter?: string; 
  public get bpfCtlbLogFilter() {
    return this.getStringAttribute('bpf_ctlb_log_filter');
  }
  public set bpfCtlbLogFilter(value: string) {
    this._bpfCtlbLogFilter = value;
  }
  public resetBpfCtlbLogFilter() {
    this._bpfCtlbLogFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfCtlbLogFilterInput() {
    return this._bpfCtlbLogFilter;
  }

  // bpf_data_iface_pattern - computed: false, optional: true, required: false
  private _bpfDataIfacePattern?: string; 
  public get bpfDataIfacePattern() {
    return this.getStringAttribute('bpf_data_iface_pattern');
  }
  public set bpfDataIfacePattern(value: string) {
    this._bpfDataIfacePattern = value;
  }
  public resetBpfDataIfacePattern() {
    this._bpfDataIfacePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfDataIfacePatternInput() {
    return this._bpfDataIfacePattern;
  }

  // bpf_disable_gro_for_ifaces - computed: false, optional: true, required: false
  private _bpfDisableGroForIfaces?: string; 
  public get bpfDisableGroForIfaces() {
    return this.getStringAttribute('bpf_disable_gro_for_ifaces');
  }
  public set bpfDisableGroForIfaces(value: string) {
    this._bpfDisableGroForIfaces = value;
  }
  public resetBpfDisableGroForIfaces() {
    this._bpfDisableGroForIfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfDisableGroForIfacesInput() {
    return this._bpfDisableGroForIfaces;
  }

  // bpf_disable_unprivileged - computed: false, optional: true, required: false
  private _bpfDisableUnprivileged?: boolean | cdktf.IResolvable; 
  public get bpfDisableUnprivileged() {
    return this.getBooleanAttribute('bpf_disable_unprivileged');
  }
  public set bpfDisableUnprivileged(value: boolean | cdktf.IResolvable) {
    this._bpfDisableUnprivileged = value;
  }
  public resetBpfDisableUnprivileged() {
    this._bpfDisableUnprivileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfDisableUnprivilegedInput() {
    return this._bpfDisableUnprivileged;
  }

  // bpf_dsr_optout_cidrs - computed: false, optional: true, required: false
  private _bpfDsrOptoutCidrs?: string[]; 
  public get bpfDsrOptoutCidrs() {
    return this.getListAttribute('bpf_dsr_optout_cidrs');
  }
  public set bpfDsrOptoutCidrs(value: string[]) {
    this._bpfDsrOptoutCidrs = value;
  }
  public resetBpfDsrOptoutCidrs() {
    this._bpfDsrOptoutCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfDsrOptoutCidrsInput() {
    return this._bpfDsrOptoutCidrs;
  }

  // bpf_enabled - computed: false, optional: true, required: false
  private _bpfEnabled?: boolean | cdktf.IResolvable; 
  public get bpfEnabled() {
    return this.getBooleanAttribute('bpf_enabled');
  }
  public set bpfEnabled(value: boolean | cdktf.IResolvable) {
    this._bpfEnabled = value;
  }
  public resetBpfEnabled() {
    this._bpfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfEnabledInput() {
    return this._bpfEnabled;
  }

  // bpf_enforce_rpf - computed: false, optional: true, required: false
  private _bpfEnforceRpf?: string; 
  public get bpfEnforceRpf() {
    return this.getStringAttribute('bpf_enforce_rpf');
  }
  public set bpfEnforceRpf(value: string) {
    this._bpfEnforceRpf = value;
  }
  public resetBpfEnforceRpf() {
    this._bpfEnforceRpf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfEnforceRpfInput() {
    return this._bpfEnforceRpf;
  }

  // bpf_exclude_cidrs_from_nat - computed: false, optional: true, required: false
  private _bpfExcludeCidrsFromNat?: string[]; 
  public get bpfExcludeCidrsFromNat() {
    return this.getListAttribute('bpf_exclude_cidrs_from_nat');
  }
  public set bpfExcludeCidrsFromNat(value: string[]) {
    this._bpfExcludeCidrsFromNat = value;
  }
  public resetBpfExcludeCidrsFromNat() {
    this._bpfExcludeCidrsFromNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfExcludeCidrsFromNatInput() {
    return this._bpfExcludeCidrsFromNat;
  }

  // bpf_ext_to_service_connmark - computed: false, optional: true, required: false
  private _bpfExtToServiceConnmark?: number; 
  public get bpfExtToServiceConnmark() {
    return this.getNumberAttribute('bpf_ext_to_service_connmark');
  }
  public set bpfExtToServiceConnmark(value: number) {
    this._bpfExtToServiceConnmark = value;
  }
  public resetBpfExtToServiceConnmark() {
    this._bpfExtToServiceConnmark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfExtToServiceConnmarkInput() {
    return this._bpfExtToServiceConnmark;
  }

  // bpf_external_service_mode - computed: false, optional: true, required: false
  private _bpfExternalServiceMode?: string; 
  public get bpfExternalServiceMode() {
    return this.getStringAttribute('bpf_external_service_mode');
  }
  public set bpfExternalServiceMode(value: string) {
    this._bpfExternalServiceMode = value;
  }
  public resetBpfExternalServiceMode() {
    this._bpfExternalServiceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfExternalServiceModeInput() {
    return this._bpfExternalServiceMode;
  }

  // bpf_force_track_packets_from_ifaces - computed: false, optional: true, required: false
  private _bpfForceTrackPacketsFromIfaces?: string[]; 
  public get bpfForceTrackPacketsFromIfaces() {
    return this.getListAttribute('bpf_force_track_packets_from_ifaces');
  }
  public set bpfForceTrackPacketsFromIfaces(value: string[]) {
    this._bpfForceTrackPacketsFromIfaces = value;
  }
  public resetBpfForceTrackPacketsFromIfaces() {
    this._bpfForceTrackPacketsFromIfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfForceTrackPacketsFromIfacesInput() {
    return this._bpfForceTrackPacketsFromIfaces;
  }

  // bpf_host_conntrack_bypass - computed: false, optional: true, required: false
  private _bpfHostConntrackBypass?: boolean | cdktf.IResolvable; 
  public get bpfHostConntrackBypass() {
    return this.getBooleanAttribute('bpf_host_conntrack_bypass');
  }
  public set bpfHostConntrackBypass(value: boolean | cdktf.IResolvable) {
    this._bpfHostConntrackBypass = value;
  }
  public resetBpfHostConntrackBypass() {
    this._bpfHostConntrackBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfHostConntrackBypassInput() {
    return this._bpfHostConntrackBypass;
  }

  // bpf_host_networked_nat_without_ctlb - computed: false, optional: true, required: false
  private _bpfHostNetworkedNatWithoutCtlb?: string; 
  public get bpfHostNetworkedNatWithoutCtlb() {
    return this.getStringAttribute('bpf_host_networked_nat_without_ctlb');
  }
  public set bpfHostNetworkedNatWithoutCtlb(value: string) {
    this._bpfHostNetworkedNatWithoutCtlb = value;
  }
  public resetBpfHostNetworkedNatWithoutCtlb() {
    this._bpfHostNetworkedNatWithoutCtlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfHostNetworkedNatWithoutCtlbInput() {
    return this._bpfHostNetworkedNatWithoutCtlb;
  }

  // bpf_kube_proxy_endpoint_slices_enabled - computed: false, optional: true, required: false
  private _bpfKubeProxyEndpointSlicesEnabled?: boolean | cdktf.IResolvable; 
  public get bpfKubeProxyEndpointSlicesEnabled() {
    return this.getBooleanAttribute('bpf_kube_proxy_endpoint_slices_enabled');
  }
  public set bpfKubeProxyEndpointSlicesEnabled(value: boolean | cdktf.IResolvable) {
    this._bpfKubeProxyEndpointSlicesEnabled = value;
  }
  public resetBpfKubeProxyEndpointSlicesEnabled() {
    this._bpfKubeProxyEndpointSlicesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfKubeProxyEndpointSlicesEnabledInput() {
    return this._bpfKubeProxyEndpointSlicesEnabled;
  }

  // bpf_kube_proxy_iptables_cleanup_enabled - computed: false, optional: true, required: false
  private _bpfKubeProxyIptablesCleanupEnabled?: boolean | cdktf.IResolvable; 
  public get bpfKubeProxyIptablesCleanupEnabled() {
    return this.getBooleanAttribute('bpf_kube_proxy_iptables_cleanup_enabled');
  }
  public set bpfKubeProxyIptablesCleanupEnabled(value: boolean | cdktf.IResolvable) {
    this._bpfKubeProxyIptablesCleanupEnabled = value;
  }
  public resetBpfKubeProxyIptablesCleanupEnabled() {
    this._bpfKubeProxyIptablesCleanupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfKubeProxyIptablesCleanupEnabledInput() {
    return this._bpfKubeProxyIptablesCleanupEnabled;
  }

  // bpf_kube_proxy_min_sync_period - computed: false, optional: true, required: false
  private _bpfKubeProxyMinSyncPeriod?: string; 
  public get bpfKubeProxyMinSyncPeriod() {
    return this.getStringAttribute('bpf_kube_proxy_min_sync_period');
  }
  public set bpfKubeProxyMinSyncPeriod(value: string) {
    this._bpfKubeProxyMinSyncPeriod = value;
  }
  public resetBpfKubeProxyMinSyncPeriod() {
    this._bpfKubeProxyMinSyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfKubeProxyMinSyncPeriodInput() {
    return this._bpfKubeProxyMinSyncPeriod;
  }

  // bpf_l3_iface_pattern - computed: false, optional: true, required: false
  private _bpfL3IfacePattern?: string; 
  public get bpfL3IfacePattern() {
    return this.getStringAttribute('bpf_l3_iface_pattern');
  }
  public set bpfL3IfacePattern(value: string) {
    this._bpfL3IfacePattern = value;
  }
  public resetBpfL3IfacePattern() {
    this._bpfL3IfacePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfL3IfacePatternInput() {
    return this._bpfL3IfacePattern;
  }

  // bpf_log_filters - computed: false, optional: true, required: false
  private _bpfLogFilters?: { [key: string]: string }; 
  public get bpfLogFilters() {
    return this.getStringMapAttribute('bpf_log_filters');
  }
  public set bpfLogFilters(value: { [key: string]: string }) {
    this._bpfLogFilters = value;
  }
  public resetBpfLogFilters() {
    this._bpfLogFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfLogFiltersInput() {
    return this._bpfLogFilters;
  }

  // bpf_log_level - computed: false, optional: true, required: false
  private _bpfLogLevel?: string; 
  public get bpfLogLevel() {
    return this.getStringAttribute('bpf_log_level');
  }
  public set bpfLogLevel(value: string) {
    this._bpfLogLevel = value;
  }
  public resetBpfLogLevel() {
    this._bpfLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfLogLevelInput() {
    return this._bpfLogLevel;
  }

  // bpf_map_size_conntrack - computed: false, optional: true, required: false
  private _bpfMapSizeConntrack?: number; 
  public get bpfMapSizeConntrack() {
    return this.getNumberAttribute('bpf_map_size_conntrack');
  }
  public set bpfMapSizeConntrack(value: number) {
    this._bpfMapSizeConntrack = value;
  }
  public resetBpfMapSizeConntrack() {
    this._bpfMapSizeConntrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfMapSizeConntrackInput() {
    return this._bpfMapSizeConntrack;
  }

  // bpf_map_size_if_state - computed: false, optional: true, required: false
  private _bpfMapSizeIfState?: number; 
  public get bpfMapSizeIfState() {
    return this.getNumberAttribute('bpf_map_size_if_state');
  }
  public set bpfMapSizeIfState(value: number) {
    this._bpfMapSizeIfState = value;
  }
  public resetBpfMapSizeIfState() {
    this._bpfMapSizeIfState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfMapSizeIfStateInput() {
    return this._bpfMapSizeIfState;
  }

  // bpf_map_size_ip_sets - computed: false, optional: true, required: false
  private _bpfMapSizeIpSets?: number; 
  public get bpfMapSizeIpSets() {
    return this.getNumberAttribute('bpf_map_size_ip_sets');
  }
  public set bpfMapSizeIpSets(value: number) {
    this._bpfMapSizeIpSets = value;
  }
  public resetBpfMapSizeIpSets() {
    this._bpfMapSizeIpSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfMapSizeIpSetsInput() {
    return this._bpfMapSizeIpSets;
  }

  // bpf_map_size_nat_affinity - computed: false, optional: true, required: false
  private _bpfMapSizeNatAffinity?: number; 
  public get bpfMapSizeNatAffinity() {
    return this.getNumberAttribute('bpf_map_size_nat_affinity');
  }
  public set bpfMapSizeNatAffinity(value: number) {
    this._bpfMapSizeNatAffinity = value;
  }
  public resetBpfMapSizeNatAffinity() {
    this._bpfMapSizeNatAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfMapSizeNatAffinityInput() {
    return this._bpfMapSizeNatAffinity;
  }

  // bpf_map_size_nat_backend - computed: false, optional: true, required: false
  private _bpfMapSizeNatBackend?: number; 
  public get bpfMapSizeNatBackend() {
    return this.getNumberAttribute('bpf_map_size_nat_backend');
  }
  public set bpfMapSizeNatBackend(value: number) {
    this._bpfMapSizeNatBackend = value;
  }
  public resetBpfMapSizeNatBackend() {
    this._bpfMapSizeNatBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfMapSizeNatBackendInput() {
    return this._bpfMapSizeNatBackend;
  }

  // bpf_map_size_nat_frontend - computed: false, optional: true, required: false
  private _bpfMapSizeNatFrontend?: number; 
  public get bpfMapSizeNatFrontend() {
    return this.getNumberAttribute('bpf_map_size_nat_frontend');
  }
  public set bpfMapSizeNatFrontend(value: number) {
    this._bpfMapSizeNatFrontend = value;
  }
  public resetBpfMapSizeNatFrontend() {
    this._bpfMapSizeNatFrontend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfMapSizeNatFrontendInput() {
    return this._bpfMapSizeNatFrontend;
  }

  // bpf_map_size_route - computed: false, optional: true, required: false
  private _bpfMapSizeRoute?: number; 
  public get bpfMapSizeRoute() {
    return this.getNumberAttribute('bpf_map_size_route');
  }
  public set bpfMapSizeRoute(value: number) {
    this._bpfMapSizeRoute = value;
  }
  public resetBpfMapSizeRoute() {
    this._bpfMapSizeRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfMapSizeRouteInput() {
    return this._bpfMapSizeRoute;
  }

  // bpf_policy_debug_enabled - computed: false, optional: true, required: false
  private _bpfPolicyDebugEnabled?: boolean | cdktf.IResolvable; 
  public get bpfPolicyDebugEnabled() {
    return this.getBooleanAttribute('bpf_policy_debug_enabled');
  }
  public set bpfPolicyDebugEnabled(value: boolean | cdktf.IResolvable) {
    this._bpfPolicyDebugEnabled = value;
  }
  public resetBpfPolicyDebugEnabled() {
    this._bpfPolicyDebugEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfPolicyDebugEnabledInput() {
    return this._bpfPolicyDebugEnabled;
  }

  // bpf_psnat_ports - computed: false, optional: true, required: false
  private _bpfPsnatPorts?: string; 
  public get bpfPsnatPorts() {
    return this.getStringAttribute('bpf_psnat_ports');
  }
  public set bpfPsnatPorts(value: string) {
    this._bpfPsnatPorts = value;
  }
  public resetBpfPsnatPorts() {
    this._bpfPsnatPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfPsnatPortsInput() {
    return this._bpfPsnatPorts;
  }

  // bpf_redirect_to_peer - computed: false, optional: true, required: false
  private _bpfRedirectToPeer?: string; 
  public get bpfRedirectToPeer() {
    return this.getStringAttribute('bpf_redirect_to_peer');
  }
  public set bpfRedirectToPeer(value: string) {
    this._bpfRedirectToPeer = value;
  }
  public resetBpfRedirectToPeer() {
    this._bpfRedirectToPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpfRedirectToPeerInput() {
    return this._bpfRedirectToPeer;
  }

  // chain_insert_mode - computed: false, optional: true, required: false
  private _chainInsertMode?: string; 
  public get chainInsertMode() {
    return this.getStringAttribute('chain_insert_mode');
  }
  public set chainInsertMode(value: string) {
    this._chainInsertMode = value;
  }
  public resetChainInsertMode() {
    this._chainInsertMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainInsertModeInput() {
    return this._chainInsertMode;
  }

  // dataplane_driver - computed: false, optional: true, required: false
  private _dataplaneDriver?: string; 
  public get dataplaneDriver() {
    return this.getStringAttribute('dataplane_driver');
  }
  public set dataplaneDriver(value: string) {
    this._dataplaneDriver = value;
  }
  public resetDataplaneDriver() {
    this._dataplaneDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneDriverInput() {
    return this._dataplaneDriver;
  }

  // dataplane_watchdog_timeout - computed: false, optional: true, required: false
  private _dataplaneWatchdogTimeout?: string; 
  public get dataplaneWatchdogTimeout() {
    return this.getStringAttribute('dataplane_watchdog_timeout');
  }
  public set dataplaneWatchdogTimeout(value: string) {
    this._dataplaneWatchdogTimeout = value;
  }
  public resetDataplaneWatchdogTimeout() {
    this._dataplaneWatchdogTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneWatchdogTimeoutInput() {
    return this._dataplaneWatchdogTimeout;
  }

  // debug_disable_log_dropping - computed: false, optional: true, required: false
  private _debugDisableLogDropping?: boolean | cdktf.IResolvable; 
  public get debugDisableLogDropping() {
    return this.getBooleanAttribute('debug_disable_log_dropping');
  }
  public set debugDisableLogDropping(value: boolean | cdktf.IResolvable) {
    this._debugDisableLogDropping = value;
  }
  public resetDebugDisableLogDropping() {
    this._debugDisableLogDropping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDisableLogDroppingInput() {
    return this._debugDisableLogDropping;
  }

  // debug_host - computed: false, optional: true, required: false
  private _debugHost?: string; 
  public get debugHost() {
    return this.getStringAttribute('debug_host');
  }
  public set debugHost(value: string) {
    this._debugHost = value;
  }
  public resetDebugHost() {
    this._debugHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugHostInput() {
    return this._debugHost;
  }

  // debug_memory_profile_path - computed: false, optional: true, required: false
  private _debugMemoryProfilePath?: string; 
  public get debugMemoryProfilePath() {
    return this.getStringAttribute('debug_memory_profile_path');
  }
  public set debugMemoryProfilePath(value: string) {
    this._debugMemoryProfilePath = value;
  }
  public resetDebugMemoryProfilePath() {
    this._debugMemoryProfilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugMemoryProfilePathInput() {
    return this._debugMemoryProfilePath;
  }

  // debug_port - computed: false, optional: true, required: false
  private _debugPort?: number; 
  public get debugPort() {
    return this.getNumberAttribute('debug_port');
  }
  public set debugPort(value: number) {
    this._debugPort = value;
  }
  public resetDebugPort() {
    this._debugPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPortInput() {
    return this._debugPort;
  }

  // debug_simulate_calc_graph_hang_after - computed: false, optional: true, required: false
  private _debugSimulateCalcGraphHangAfter?: string; 
  public get debugSimulateCalcGraphHangAfter() {
    return this.getStringAttribute('debug_simulate_calc_graph_hang_after');
  }
  public set debugSimulateCalcGraphHangAfter(value: string) {
    this._debugSimulateCalcGraphHangAfter = value;
  }
  public resetDebugSimulateCalcGraphHangAfter() {
    this._debugSimulateCalcGraphHangAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugSimulateCalcGraphHangAfterInput() {
    return this._debugSimulateCalcGraphHangAfter;
  }

  // debug_simulate_dataplane_apply_delay - computed: false, optional: true, required: false
  private _debugSimulateDataplaneApplyDelay?: string; 
  public get debugSimulateDataplaneApplyDelay() {
    return this.getStringAttribute('debug_simulate_dataplane_apply_delay');
  }
  public set debugSimulateDataplaneApplyDelay(value: string) {
    this._debugSimulateDataplaneApplyDelay = value;
  }
  public resetDebugSimulateDataplaneApplyDelay() {
    this._debugSimulateDataplaneApplyDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugSimulateDataplaneApplyDelayInput() {
    return this._debugSimulateDataplaneApplyDelay;
  }

  // debug_simulate_dataplane_hang_after - computed: false, optional: true, required: false
  private _debugSimulateDataplaneHangAfter?: string; 
  public get debugSimulateDataplaneHangAfter() {
    return this.getStringAttribute('debug_simulate_dataplane_hang_after');
  }
  public set debugSimulateDataplaneHangAfter(value: string) {
    this._debugSimulateDataplaneHangAfter = value;
  }
  public resetDebugSimulateDataplaneHangAfter() {
    this._debugSimulateDataplaneHangAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugSimulateDataplaneHangAfterInput() {
    return this._debugSimulateDataplaneHangAfter;
  }

  // default_endpoint_to_host_action - computed: false, optional: true, required: false
  private _defaultEndpointToHostAction?: string; 
  public get defaultEndpointToHostAction() {
    return this.getStringAttribute('default_endpoint_to_host_action');
  }
  public set defaultEndpointToHostAction(value: string) {
    this._defaultEndpointToHostAction = value;
  }
  public resetDefaultEndpointToHostAction() {
    this._defaultEndpointToHostAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEndpointToHostActionInput() {
    return this._defaultEndpointToHostAction;
  }

  // device_route_protocol - computed: false, optional: true, required: false
  private _deviceRouteProtocol?: number; 
  public get deviceRouteProtocol() {
    return this.getNumberAttribute('device_route_protocol');
  }
  public set deviceRouteProtocol(value: number) {
    this._deviceRouteProtocol = value;
  }
  public resetDeviceRouteProtocol() {
    this._deviceRouteProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRouteProtocolInput() {
    return this._deviceRouteProtocol;
  }

  // device_route_source_address - computed: false, optional: true, required: false
  private _deviceRouteSourceAddress?: string; 
  public get deviceRouteSourceAddress() {
    return this.getStringAttribute('device_route_source_address');
  }
  public set deviceRouteSourceAddress(value: string) {
    this._deviceRouteSourceAddress = value;
  }
  public resetDeviceRouteSourceAddress() {
    this._deviceRouteSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRouteSourceAddressInput() {
    return this._deviceRouteSourceAddress;
  }

  // device_route_source_address_i_pv6 - computed: false, optional: true, required: false
  private _deviceRouteSourceAddressIPv6?: string; 
  public get deviceRouteSourceAddressIPv6() {
    return this.getStringAttribute('device_route_source_address_i_pv6');
  }
  public set deviceRouteSourceAddressIPv6(value: string) {
    this._deviceRouteSourceAddressIPv6 = value;
  }
  public resetDeviceRouteSourceAddressIPv6() {
    this._deviceRouteSourceAddressIPv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRouteSourceAddressIPv6Input() {
    return this._deviceRouteSourceAddressIPv6;
  }

  // disable_conntrack_invalid_check - computed: false, optional: true, required: false
  private _disableConntrackInvalidCheck?: boolean | cdktf.IResolvable; 
  public get disableConntrackInvalidCheck() {
    return this.getBooleanAttribute('disable_conntrack_invalid_check');
  }
  public set disableConntrackInvalidCheck(value: boolean | cdktf.IResolvable) {
    this._disableConntrackInvalidCheck = value;
  }
  public resetDisableConntrackInvalidCheck() {
    this._disableConntrackInvalidCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConntrackInvalidCheckInput() {
    return this._disableConntrackInvalidCheck;
  }

  // endpoint_reporting_delay - computed: false, optional: true, required: false
  private _endpointReportingDelay?: string; 
  public get endpointReportingDelay() {
    return this.getStringAttribute('endpoint_reporting_delay');
  }
  public set endpointReportingDelay(value: string) {
    this._endpointReportingDelay = value;
  }
  public resetEndpointReportingDelay() {
    this._endpointReportingDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointReportingDelayInput() {
    return this._endpointReportingDelay;
  }

  // endpoint_reporting_enabled - computed: false, optional: true, required: false
  private _endpointReportingEnabled?: boolean | cdktf.IResolvable; 
  public get endpointReportingEnabled() {
    return this.getBooleanAttribute('endpoint_reporting_enabled');
  }
  public set endpointReportingEnabled(value: boolean | cdktf.IResolvable) {
    this._endpointReportingEnabled = value;
  }
  public resetEndpointReportingEnabled() {
    this._endpointReportingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointReportingEnabledInput() {
    return this._endpointReportingEnabled;
  }

  // endpoint_status_path_prefix - computed: false, optional: true, required: false
  private _endpointStatusPathPrefix?: string; 
  public get endpointStatusPathPrefix() {
    return this.getStringAttribute('endpoint_status_path_prefix');
  }
  public set endpointStatusPathPrefix(value: string) {
    this._endpointStatusPathPrefix = value;
  }
  public resetEndpointStatusPathPrefix() {
    this._endpointStatusPathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointStatusPathPrefixInput() {
    return this._endpointStatusPathPrefix;
  }

  // external_nodes_list - computed: false, optional: true, required: false
  private _externalNodesList?: string[]; 
  public get externalNodesList() {
    return this.getListAttribute('external_nodes_list');
  }
  public set externalNodesList(value: string[]) {
    this._externalNodesList = value;
  }
  public resetExternalNodesList() {
    this._externalNodesList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalNodesListInput() {
    return this._externalNodesList;
  }

  // failsafe_inbound_host_ports - computed: false, optional: true, required: false
  private _failsafeInboundHostPorts = new DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPortsList(this, "failsafe_inbound_host_ports", false);
  public get failsafeInboundHostPorts() {
    return this._failsafeInboundHostPorts;
  }
  public putFailsafeInboundHostPorts(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeInboundHostPorts[] | cdktf.IResolvable) {
    this._failsafeInboundHostPorts.internalValue = value;
  }
  public resetFailsafeInboundHostPorts() {
    this._failsafeInboundHostPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failsafeInboundHostPortsInput() {
    return this._failsafeInboundHostPorts.internalValue;
  }

  // failsafe_outbound_host_ports - computed: false, optional: true, required: false
  private _failsafeOutboundHostPorts = new DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPortsList(this, "failsafe_outbound_host_ports", false);
  public get failsafeOutboundHostPorts() {
    return this._failsafeOutboundHostPorts;
  }
  public putFailsafeOutboundHostPorts(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecFailsafeOutboundHostPorts[] | cdktf.IResolvable) {
    this._failsafeOutboundHostPorts.internalValue = value;
  }
  public resetFailsafeOutboundHostPorts() {
    this._failsafeOutboundHostPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failsafeOutboundHostPortsInput() {
    return this._failsafeOutboundHostPorts.internalValue;
  }

  // feature_detect_override - computed: false, optional: true, required: false
  private _featureDetectOverride?: string; 
  public get featureDetectOverride() {
    return this.getStringAttribute('feature_detect_override');
  }
  public set featureDetectOverride(value: string) {
    this._featureDetectOverride = value;
  }
  public resetFeatureDetectOverride() {
    this._featureDetectOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureDetectOverrideInput() {
    return this._featureDetectOverride;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates?: string; 
  public get featureGates() {
    return this.getStringAttribute('feature_gates');
  }
  public set featureGates(value: string) {
    this._featureGates = value;
  }
  public resetFeatureGates() {
    this._featureGates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates;
  }

  // floating_i_ps - computed: false, optional: true, required: false
  private _floatingIPs?: string; 
  public get floatingIPs() {
    return this.getStringAttribute('floating_i_ps');
  }
  public set floatingIPs(value: string) {
    this._floatingIPs = value;
  }
  public resetFloatingIPs() {
    this._floatingIPs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIPsInput() {
    return this._floatingIPs;
  }

  // generic_xdp_enabled - computed: false, optional: true, required: false
  private _genericXdpEnabled?: boolean | cdktf.IResolvable; 
  public get genericXdpEnabled() {
    return this.getBooleanAttribute('generic_xdp_enabled');
  }
  public set genericXdpEnabled(value: boolean | cdktf.IResolvable) {
    this._genericXdpEnabled = value;
  }
  public resetGenericXdpEnabled() {
    this._genericXdpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericXdpEnabledInput() {
    return this._genericXdpEnabled;
  }

  // go_gc_threshold - computed: false, optional: true, required: false
  private _goGcThreshold?: number; 
  public get goGcThreshold() {
    return this.getNumberAttribute('go_gc_threshold');
  }
  public set goGcThreshold(value: number) {
    this._goGcThreshold = value;
  }
  public resetGoGcThreshold() {
    this._goGcThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goGcThresholdInput() {
    return this._goGcThreshold;
  }

  // go_max_procs - computed: false, optional: true, required: false
  private _goMaxProcs?: number; 
  public get goMaxProcs() {
    return this.getNumberAttribute('go_max_procs');
  }
  public set goMaxProcs(value: number) {
    this._goMaxProcs = value;
  }
  public resetGoMaxProcs() {
    this._goMaxProcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goMaxProcsInput() {
    return this._goMaxProcs;
  }

  // go_memory_limit_mb - computed: false, optional: true, required: false
  private _goMemoryLimitMb?: number; 
  public get goMemoryLimitMb() {
    return this.getNumberAttribute('go_memory_limit_mb');
  }
  public set goMemoryLimitMb(value: number) {
    this._goMemoryLimitMb = value;
  }
  public resetGoMemoryLimitMb() {
    this._goMemoryLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goMemoryLimitMbInput() {
    return this._goMemoryLimitMb;
  }

  // health_enabled - computed: false, optional: true, required: false
  private _healthEnabled?: boolean | cdktf.IResolvable; 
  public get healthEnabled() {
    return this.getBooleanAttribute('health_enabled');
  }
  public set healthEnabled(value: boolean | cdktf.IResolvable) {
    this._healthEnabled = value;
  }
  public resetHealthEnabled() {
    this._healthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthEnabledInput() {
    return this._healthEnabled;
  }

  // health_host - computed: false, optional: true, required: false
  private _healthHost?: string; 
  public get healthHost() {
    return this.getStringAttribute('health_host');
  }
  public set healthHost(value: string) {
    this._healthHost = value;
  }
  public resetHealthHost() {
    this._healthHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthHostInput() {
    return this._healthHost;
  }

  // health_port - computed: false, optional: true, required: false
  private _healthPort?: number; 
  public get healthPort() {
    return this.getNumberAttribute('health_port');
  }
  public set healthPort(value: number) {
    this._healthPort = value;
  }
  public resetHealthPort() {
    this._healthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPortInput() {
    return this._healthPort;
  }

  // health_timeout_overrides - computed: false, optional: true, required: false
  private _healthTimeoutOverrides = new DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverridesList(this, "health_timeout_overrides", false);
  public get healthTimeoutOverrides() {
    return this._healthTimeoutOverrides;
  }
  public putHealthTimeoutOverrides(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecHealthTimeoutOverrides[] | cdktf.IResolvable) {
    this._healthTimeoutOverrides.internalValue = value;
  }
  public resetHealthTimeoutOverrides() {
    this._healthTimeoutOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthTimeoutOverridesInput() {
    return this._healthTimeoutOverrides.internalValue;
  }

  // interface_exclude - computed: false, optional: true, required: false
  private _interfaceExclude?: string; 
  public get interfaceExclude() {
    return this.getStringAttribute('interface_exclude');
  }
  public set interfaceExclude(value: string) {
    this._interfaceExclude = value;
  }
  public resetInterfaceExclude() {
    this._interfaceExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceExcludeInput() {
    return this._interfaceExclude;
  }

  // interface_prefix - computed: false, optional: true, required: false
  private _interfacePrefix?: string; 
  public get interfacePrefix() {
    return this.getStringAttribute('interface_prefix');
  }
  public set interfacePrefix(value: string) {
    this._interfacePrefix = value;
  }
  public resetInterfacePrefix() {
    this._interfacePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacePrefixInput() {
    return this._interfacePrefix;
  }

  // interface_refresh_interval - computed: false, optional: true, required: false
  private _interfaceRefreshInterval?: string; 
  public get interfaceRefreshInterval() {
    return this.getStringAttribute('interface_refresh_interval');
  }
  public set interfaceRefreshInterval(value: string) {
    this._interfaceRefreshInterval = value;
  }
  public resetInterfaceRefreshInterval() {
    this._interfaceRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceRefreshIntervalInput() {
    return this._interfaceRefreshInterval;
  }

  // ip_forwarding - computed: false, optional: true, required: false
  private _ipForwarding?: string; 
  public get ipForwarding() {
    return this.getStringAttribute('ip_forwarding');
  }
  public set ipForwarding(value: string) {
    this._ipForwarding = value;
  }
  public resetIpForwarding() {
    this._ipForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipForwardingInput() {
    return this._ipForwarding;
  }

  // ipip_enabled - computed: false, optional: true, required: false
  private _ipipEnabled?: boolean | cdktf.IResolvable; 
  public get ipipEnabled() {
    return this.getBooleanAttribute('ipip_enabled');
  }
  public set ipipEnabled(value: boolean | cdktf.IResolvable) {
    this._ipipEnabled = value;
  }
  public resetIpipEnabled() {
    this._ipipEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipEnabledInput() {
    return this._ipipEnabled;
  }

  // ipip_mtu - computed: false, optional: true, required: false
  private _ipipMtu?: number; 
  public get ipipMtu() {
    return this.getNumberAttribute('ipip_mtu');
  }
  public set ipipMtu(value: number) {
    this._ipipMtu = value;
  }
  public resetIpipMtu() {
    this._ipipMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipMtuInput() {
    return this._ipipMtu;
  }

  // ipsets_refresh_interval - computed: false, optional: true, required: false
  private _ipsetsRefreshInterval?: string; 
  public get ipsetsRefreshInterval() {
    return this.getStringAttribute('ipsets_refresh_interval');
  }
  public set ipsetsRefreshInterval(value: string) {
    this._ipsetsRefreshInterval = value;
  }
  public resetIpsetsRefreshInterval() {
    this._ipsetsRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsetsRefreshIntervalInput() {
    return this._ipsetsRefreshInterval;
  }

  // iptables_backend - computed: false, optional: true, required: false
  private _iptablesBackend?: string; 
  public get iptablesBackend() {
    return this.getStringAttribute('iptables_backend');
  }
  public set iptablesBackend(value: string) {
    this._iptablesBackend = value;
  }
  public resetIptablesBackend() {
    this._iptablesBackend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesBackendInput() {
    return this._iptablesBackend;
  }

  // iptables_filter_allow_action - computed: false, optional: true, required: false
  private _iptablesFilterAllowAction?: string; 
  public get iptablesFilterAllowAction() {
    return this.getStringAttribute('iptables_filter_allow_action');
  }
  public set iptablesFilterAllowAction(value: string) {
    this._iptablesFilterAllowAction = value;
  }
  public resetIptablesFilterAllowAction() {
    this._iptablesFilterAllowAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesFilterAllowActionInput() {
    return this._iptablesFilterAllowAction;
  }

  // iptables_filter_deny_action - computed: false, optional: true, required: false
  private _iptablesFilterDenyAction?: string; 
  public get iptablesFilterDenyAction() {
    return this.getStringAttribute('iptables_filter_deny_action');
  }
  public set iptablesFilterDenyAction(value: string) {
    this._iptablesFilterDenyAction = value;
  }
  public resetIptablesFilterDenyAction() {
    this._iptablesFilterDenyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesFilterDenyActionInput() {
    return this._iptablesFilterDenyAction;
  }

  // iptables_lock_file_path - computed: false, optional: true, required: false
  private _iptablesLockFilePath?: string; 
  public get iptablesLockFilePath() {
    return this.getStringAttribute('iptables_lock_file_path');
  }
  public set iptablesLockFilePath(value: string) {
    this._iptablesLockFilePath = value;
  }
  public resetIptablesLockFilePath() {
    this._iptablesLockFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesLockFilePathInput() {
    return this._iptablesLockFilePath;
  }

  // iptables_lock_probe_interval - computed: false, optional: true, required: false
  private _iptablesLockProbeInterval?: string; 
  public get iptablesLockProbeInterval() {
    return this.getStringAttribute('iptables_lock_probe_interval');
  }
  public set iptablesLockProbeInterval(value: string) {
    this._iptablesLockProbeInterval = value;
  }
  public resetIptablesLockProbeInterval() {
    this._iptablesLockProbeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesLockProbeIntervalInput() {
    return this._iptablesLockProbeInterval;
  }

  // iptables_lock_timeout - computed: false, optional: true, required: false
  private _iptablesLockTimeout?: string; 
  public get iptablesLockTimeout() {
    return this.getStringAttribute('iptables_lock_timeout');
  }
  public set iptablesLockTimeout(value: string) {
    this._iptablesLockTimeout = value;
  }
  public resetIptablesLockTimeout() {
    this._iptablesLockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesLockTimeoutInput() {
    return this._iptablesLockTimeout;
  }

  // iptables_mangle_allow_action - computed: false, optional: true, required: false
  private _iptablesMangleAllowAction?: string; 
  public get iptablesMangleAllowAction() {
    return this.getStringAttribute('iptables_mangle_allow_action');
  }
  public set iptablesMangleAllowAction(value: string) {
    this._iptablesMangleAllowAction = value;
  }
  public resetIptablesMangleAllowAction() {
    this._iptablesMangleAllowAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesMangleAllowActionInput() {
    return this._iptablesMangleAllowAction;
  }

  // iptables_mark_mask - computed: false, optional: true, required: false
  private _iptablesMarkMask?: number; 
  public get iptablesMarkMask() {
    return this.getNumberAttribute('iptables_mark_mask');
  }
  public set iptablesMarkMask(value: number) {
    this._iptablesMarkMask = value;
  }
  public resetIptablesMarkMask() {
    this._iptablesMarkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesMarkMaskInput() {
    return this._iptablesMarkMask;
  }

  // iptables_nat_outgoing_interface_filter - computed: false, optional: true, required: false
  private _iptablesNatOutgoingInterfaceFilter?: string; 
  public get iptablesNatOutgoingInterfaceFilter() {
    return this.getStringAttribute('iptables_nat_outgoing_interface_filter');
  }
  public set iptablesNatOutgoingInterfaceFilter(value: string) {
    this._iptablesNatOutgoingInterfaceFilter = value;
  }
  public resetIptablesNatOutgoingInterfaceFilter() {
    this._iptablesNatOutgoingInterfaceFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesNatOutgoingInterfaceFilterInput() {
    return this._iptablesNatOutgoingInterfaceFilter;
  }

  // iptables_post_write_check_interval - computed: false, optional: true, required: false
  private _iptablesPostWriteCheckInterval?: string; 
  public get iptablesPostWriteCheckInterval() {
    return this.getStringAttribute('iptables_post_write_check_interval');
  }
  public set iptablesPostWriteCheckInterval(value: string) {
    this._iptablesPostWriteCheckInterval = value;
  }
  public resetIptablesPostWriteCheckInterval() {
    this._iptablesPostWriteCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesPostWriteCheckIntervalInput() {
    return this._iptablesPostWriteCheckInterval;
  }

  // iptables_refresh_interval - computed: false, optional: true, required: false
  private _iptablesRefreshInterval?: string; 
  public get iptablesRefreshInterval() {
    return this.getStringAttribute('iptables_refresh_interval');
  }
  public set iptablesRefreshInterval(value: string) {
    this._iptablesRefreshInterval = value;
  }
  public resetIptablesRefreshInterval() {
    this._iptablesRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iptablesRefreshIntervalInput() {
    return this._iptablesRefreshInterval;
  }

  // ipv6_support - computed: false, optional: true, required: false
  private _ipv6Support?: boolean | cdktf.IResolvable; 
  public get ipv6Support() {
    return this.getBooleanAttribute('ipv6_support');
  }
  public set ipv6Support(value: boolean | cdktf.IResolvable) {
    this._ipv6Support = value;
  }
  public resetIpv6Support() {
    this._ipv6Support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SupportInput() {
    return this._ipv6Support;
  }

  // kube_node_port_ranges - computed: false, optional: true, required: false
  private _kubeNodePortRanges?: string[]; 
  public get kubeNodePortRanges() {
    return this.getListAttribute('kube_node_port_ranges');
  }
  public set kubeNodePortRanges(value: string[]) {
    this._kubeNodePortRanges = value;
  }
  public resetKubeNodePortRanges() {
    this._kubeNodePortRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeNodePortRangesInput() {
    return this._kubeNodePortRanges;
  }

  // log_debug_filename_regex - computed: false, optional: true, required: false
  private _logDebugFilenameRegex?: string; 
  public get logDebugFilenameRegex() {
    return this.getStringAttribute('log_debug_filename_regex');
  }
  public set logDebugFilenameRegex(value: string) {
    this._logDebugFilenameRegex = value;
  }
  public resetLogDebugFilenameRegex() {
    this._logDebugFilenameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDebugFilenameRegexInput() {
    return this._logDebugFilenameRegex;
  }

  // log_file_path - computed: false, optional: true, required: false
  private _logFilePath?: string; 
  public get logFilePath() {
    return this.getStringAttribute('log_file_path');
  }
  public set logFilePath(value: string) {
    this._logFilePath = value;
  }
  public resetLogFilePath() {
    this._logFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilePathInput() {
    return this._logFilePath;
  }

  // log_prefix - computed: false, optional: true, required: false
  private _logPrefix?: string; 
  public get logPrefix() {
    return this.getStringAttribute('log_prefix');
  }
  public set logPrefix(value: string) {
    this._logPrefix = value;
  }
  public resetLogPrefix() {
    this._logPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logPrefixInput() {
    return this._logPrefix;
  }

  // log_severity_file - computed: false, optional: true, required: false
  private _logSeverityFile?: string; 
  public get logSeverityFile() {
    return this.getStringAttribute('log_severity_file');
  }
  public set logSeverityFile(value: string) {
    this._logSeverityFile = value;
  }
  public resetLogSeverityFile() {
    this._logSeverityFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSeverityFileInput() {
    return this._logSeverityFile;
  }

  // log_severity_screen - computed: false, optional: true, required: false
  private _logSeverityScreen?: string; 
  public get logSeverityScreen() {
    return this.getStringAttribute('log_severity_screen');
  }
  public set logSeverityScreen(value: string) {
    this._logSeverityScreen = value;
  }
  public resetLogSeverityScreen() {
    this._logSeverityScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSeverityScreenInput() {
    return this._logSeverityScreen;
  }

  // log_severity_sys - computed: false, optional: true, required: false
  private _logSeveritySys?: string; 
  public get logSeveritySys() {
    return this.getStringAttribute('log_severity_sys');
  }
  public set logSeveritySys(value: string) {
    this._logSeveritySys = value;
  }
  public resetLogSeveritySys() {
    this._logSeveritySys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSeveritySysInput() {
    return this._logSeveritySys;
  }

  // max_ipset_size - computed: false, optional: true, required: false
  private _maxIpsetSize?: number; 
  public get maxIpsetSize() {
    return this.getNumberAttribute('max_ipset_size');
  }
  public set maxIpsetSize(value: number) {
    this._maxIpsetSize = value;
  }
  public resetMaxIpsetSize() {
    this._maxIpsetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIpsetSizeInput() {
    return this._maxIpsetSize;
  }

  // metadata_addr - computed: false, optional: true, required: false
  private _metadataAddr?: string; 
  public get metadataAddr() {
    return this.getStringAttribute('metadata_addr');
  }
  public set metadataAddr(value: string) {
    this._metadataAddr = value;
  }
  public resetMetadataAddr() {
    this._metadataAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataAddrInput() {
    return this._metadataAddr;
  }

  // metadata_port - computed: false, optional: true, required: false
  private _metadataPort?: number; 
  public get metadataPort() {
    return this.getNumberAttribute('metadata_port');
  }
  public set metadataPort(value: number) {
    this._metadataPort = value;
  }
  public resetMetadataPort() {
    this._metadataPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataPortInput() {
    return this._metadataPort;
  }

  // mtu_iface_pattern - computed: false, optional: true, required: false
  private _mtuIfacePattern?: string; 
  public get mtuIfacePattern() {
    return this.getStringAttribute('mtu_iface_pattern');
  }
  public set mtuIfacePattern(value: string) {
    this._mtuIfacePattern = value;
  }
  public resetMtuIfacePattern() {
    this._mtuIfacePattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIfacePatternInput() {
    return this._mtuIfacePattern;
  }

  // nat_outgoing_address - computed: false, optional: true, required: false
  private _natOutgoingAddress?: string; 
  public get natOutgoingAddress() {
    return this.getStringAttribute('nat_outgoing_address');
  }
  public set natOutgoingAddress(value: string) {
    this._natOutgoingAddress = value;
  }
  public resetNatOutgoingAddress() {
    this._natOutgoingAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natOutgoingAddressInput() {
    return this._natOutgoingAddress;
  }

  // nat_port_range - computed: false, optional: true, required: false
  private _natPortRange?: string; 
  public get natPortRange() {
    return this.getStringAttribute('nat_port_range');
  }
  public set natPortRange(value: string) {
    this._natPortRange = value;
  }
  public resetNatPortRange() {
    this._natPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortRangeInput() {
    return this._natPortRange;
  }

  // netlink_timeout - computed: false, optional: true, required: false
  private _netlinkTimeout?: string; 
  public get netlinkTimeout() {
    return this.getStringAttribute('netlink_timeout');
  }
  public set netlinkTimeout(value: string) {
    this._netlinkTimeout = value;
  }
  public resetNetlinkTimeout() {
    this._netlinkTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netlinkTimeoutInput() {
    return this._netlinkTimeout;
  }

  // nftables_filter_allow_action - computed: false, optional: true, required: false
  private _nftablesFilterAllowAction?: string; 
  public get nftablesFilterAllowAction() {
    return this.getStringAttribute('nftables_filter_allow_action');
  }
  public set nftablesFilterAllowAction(value: string) {
    this._nftablesFilterAllowAction = value;
  }
  public resetNftablesFilterAllowAction() {
    this._nftablesFilterAllowAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nftablesFilterAllowActionInput() {
    return this._nftablesFilterAllowAction;
  }

  // nftables_filter_deny_action - computed: false, optional: true, required: false
  private _nftablesFilterDenyAction?: string; 
  public get nftablesFilterDenyAction() {
    return this.getStringAttribute('nftables_filter_deny_action');
  }
  public set nftablesFilterDenyAction(value: string) {
    this._nftablesFilterDenyAction = value;
  }
  public resetNftablesFilterDenyAction() {
    this._nftablesFilterDenyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nftablesFilterDenyActionInput() {
    return this._nftablesFilterDenyAction;
  }

  // nftables_mangle_allow_action - computed: false, optional: true, required: false
  private _nftablesMangleAllowAction?: string; 
  public get nftablesMangleAllowAction() {
    return this.getStringAttribute('nftables_mangle_allow_action');
  }
  public set nftablesMangleAllowAction(value: string) {
    this._nftablesMangleAllowAction = value;
  }
  public resetNftablesMangleAllowAction() {
    this._nftablesMangleAllowAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nftablesMangleAllowActionInput() {
    return this._nftablesMangleAllowAction;
  }

  // nftables_mark_mask - computed: false, optional: true, required: false
  private _nftablesMarkMask?: number; 
  public get nftablesMarkMask() {
    return this.getNumberAttribute('nftables_mark_mask');
  }
  public set nftablesMarkMask(value: number) {
    this._nftablesMarkMask = value;
  }
  public resetNftablesMarkMask() {
    this._nftablesMarkMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nftablesMarkMaskInput() {
    return this._nftablesMarkMask;
  }

  // nftables_mode - computed: false, optional: true, required: false
  private _nftablesMode?: string; 
  public get nftablesMode() {
    return this.getStringAttribute('nftables_mode');
  }
  public set nftablesMode(value: string) {
    this._nftablesMode = value;
  }
  public resetNftablesMode() {
    this._nftablesMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nftablesModeInput() {
    return this._nftablesMode;
  }

  // nftables_refresh_interval - computed: false, optional: true, required: false
  private _nftablesRefreshInterval?: string; 
  public get nftablesRefreshInterval() {
    return this.getStringAttribute('nftables_refresh_interval');
  }
  public set nftablesRefreshInterval(value: string) {
    this._nftablesRefreshInterval = value;
  }
  public resetNftablesRefreshInterval() {
    this._nftablesRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nftablesRefreshIntervalInput() {
    return this._nftablesRefreshInterval;
  }

  // openstack_region - computed: false, optional: true, required: false
  private _openstackRegion?: string; 
  public get openstackRegion() {
    return this.getStringAttribute('openstack_region');
  }
  public set openstackRegion(value: string) {
    this._openstackRegion = value;
  }
  public resetOpenstackRegion() {
    this._openstackRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackRegionInput() {
    return this._openstackRegion;
  }

  // policy_sync_path_prefix - computed: false, optional: true, required: false
  private _policySyncPathPrefix?: string; 
  public get policySyncPathPrefix() {
    return this.getStringAttribute('policy_sync_path_prefix');
  }
  public set policySyncPathPrefix(value: string) {
    this._policySyncPathPrefix = value;
  }
  public resetPolicySyncPathPrefix() {
    this._policySyncPathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySyncPathPrefixInput() {
    return this._policySyncPathPrefix;
  }

  // prometheus_go_metrics_enabled - computed: false, optional: true, required: false
  private _prometheusGoMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get prometheusGoMetricsEnabled() {
    return this.getBooleanAttribute('prometheus_go_metrics_enabled');
  }
  public set prometheusGoMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._prometheusGoMetricsEnabled = value;
  }
  public resetPrometheusGoMetricsEnabled() {
    this._prometheusGoMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusGoMetricsEnabledInput() {
    return this._prometheusGoMetricsEnabled;
  }

  // prometheus_metrics_enabled - computed: false, optional: true, required: false
  private _prometheusMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get prometheusMetricsEnabled() {
    return this.getBooleanAttribute('prometheus_metrics_enabled');
  }
  public set prometheusMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._prometheusMetricsEnabled = value;
  }
  public resetPrometheusMetricsEnabled() {
    this._prometheusMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusMetricsEnabledInput() {
    return this._prometheusMetricsEnabled;
  }

  // prometheus_metrics_host - computed: false, optional: true, required: false
  private _prometheusMetricsHost?: string; 
  public get prometheusMetricsHost() {
    return this.getStringAttribute('prometheus_metrics_host');
  }
  public set prometheusMetricsHost(value: string) {
    this._prometheusMetricsHost = value;
  }
  public resetPrometheusMetricsHost() {
    this._prometheusMetricsHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusMetricsHostInput() {
    return this._prometheusMetricsHost;
  }

  // prometheus_metrics_port - computed: false, optional: true, required: false
  private _prometheusMetricsPort?: number; 
  public get prometheusMetricsPort() {
    return this.getNumberAttribute('prometheus_metrics_port');
  }
  public set prometheusMetricsPort(value: number) {
    this._prometheusMetricsPort = value;
  }
  public resetPrometheusMetricsPort() {
    this._prometheusMetricsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusMetricsPortInput() {
    return this._prometheusMetricsPort;
  }

  // prometheus_process_metrics_enabled - computed: false, optional: true, required: false
  private _prometheusProcessMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get prometheusProcessMetricsEnabled() {
    return this.getBooleanAttribute('prometheus_process_metrics_enabled');
  }
  public set prometheusProcessMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._prometheusProcessMetricsEnabled = value;
  }
  public resetPrometheusProcessMetricsEnabled() {
    this._prometheusProcessMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusProcessMetricsEnabledInput() {
    return this._prometheusProcessMetricsEnabled;
  }

  // prometheus_wire_guard_metrics_enabled - computed: false, optional: true, required: false
  private _prometheusWireGuardMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get prometheusWireGuardMetricsEnabled() {
    return this.getBooleanAttribute('prometheus_wire_guard_metrics_enabled');
  }
  public set prometheusWireGuardMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._prometheusWireGuardMetricsEnabled = value;
  }
  public resetPrometheusWireGuardMetricsEnabled() {
    this._prometheusWireGuardMetricsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusWireGuardMetricsEnabledInput() {
    return this._prometheusWireGuardMetricsEnabled;
  }

  // remove_external_routes - computed: false, optional: true, required: false
  private _removeExternalRoutes?: boolean | cdktf.IResolvable; 
  public get removeExternalRoutes() {
    return this.getBooleanAttribute('remove_external_routes');
  }
  public set removeExternalRoutes(value: boolean | cdktf.IResolvable) {
    this._removeExternalRoutes = value;
  }
  public resetRemoveExternalRoutes() {
    this._removeExternalRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeExternalRoutesInput() {
    return this._removeExternalRoutes;
  }

  // reporting_interval - computed: false, optional: true, required: false
  private _reportingInterval?: string; 
  public get reportingInterval() {
    return this.getStringAttribute('reporting_interval');
  }
  public set reportingInterval(value: string) {
    this._reportingInterval = value;
  }
  public resetReportingInterval() {
    this._reportingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingIntervalInput() {
    return this._reportingInterval;
  }

  // reporting_ttl - computed: false, optional: true, required: false
  private _reportingTtl?: string; 
  public get reportingTtl() {
    return this.getStringAttribute('reporting_ttl');
  }
  public set reportingTtl(value: string) {
    this._reportingTtl = value;
  }
  public resetReportingTtl() {
    this._reportingTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportingTtlInput() {
    return this._reportingTtl;
  }

  // route_refresh_interval - computed: false, optional: true, required: false
  private _routeRefreshInterval?: string; 
  public get routeRefreshInterval() {
    return this.getStringAttribute('route_refresh_interval');
  }
  public set routeRefreshInterval(value: string) {
    this._routeRefreshInterval = value;
  }
  public resetRouteRefreshInterval() {
    this._routeRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeRefreshIntervalInput() {
    return this._routeRefreshInterval;
  }

  // route_source - computed: false, optional: true, required: false
  private _routeSource?: string; 
  public get routeSource() {
    return this.getStringAttribute('route_source');
  }
  public set routeSource(value: string) {
    this._routeSource = value;
  }
  public resetRouteSource() {
    this._routeSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSourceInput() {
    return this._routeSource;
  }

  // route_sync_disabled - computed: false, optional: true, required: false
  private _routeSyncDisabled?: boolean | cdktf.IResolvable; 
  public get routeSyncDisabled() {
    return this.getBooleanAttribute('route_sync_disabled');
  }
  public set routeSyncDisabled(value: boolean | cdktf.IResolvable) {
    this._routeSyncDisabled = value;
  }
  public resetRouteSyncDisabled() {
    this._routeSyncDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSyncDisabledInput() {
    return this._routeSyncDisabled;
  }

  // route_table_range - computed: false, optional: true, required: false
  private _routeTableRange = new DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangeOutputReference(this, "route_table_range");
  public get routeTableRange() {
    return this._routeTableRange;
  }
  public putRouteTableRange(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRange) {
    this._routeTableRange.internalValue = value;
  }
  public resetRouteTableRange() {
    this._routeTableRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableRangeInput() {
    return this._routeTableRange.internalValue;
  }

  // route_table_ranges - computed: false, optional: true, required: false
  private _routeTableRanges = new DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRangesList(this, "route_table_ranges", false);
  public get routeTableRanges() {
    return this._routeTableRanges;
  }
  public putRouteTableRanges(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecRouteTableRanges[] | cdktf.IResolvable) {
    this._routeTableRanges.internalValue = value;
  }
  public resetRouteTableRanges() {
    this._routeTableRanges.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableRangesInput() {
    return this._routeTableRanges.internalValue;
  }

  // service_loop_prevention - computed: false, optional: true, required: false
  private _serviceLoopPrevention?: string; 
  public get serviceLoopPrevention() {
    return this.getStringAttribute('service_loop_prevention');
  }
  public set serviceLoopPrevention(value: string) {
    this._serviceLoopPrevention = value;
  }
  public resetServiceLoopPrevention() {
    this._serviceLoopPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLoopPreventionInput() {
    return this._serviceLoopPrevention;
  }

  // sidecar_acceleration_enabled - computed: false, optional: true, required: false
  private _sidecarAccelerationEnabled?: boolean | cdktf.IResolvable; 
  public get sidecarAccelerationEnabled() {
    return this.getBooleanAttribute('sidecar_acceleration_enabled');
  }
  public set sidecarAccelerationEnabled(value: boolean | cdktf.IResolvable) {
    this._sidecarAccelerationEnabled = value;
  }
  public resetSidecarAccelerationEnabled() {
    this._sidecarAccelerationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarAccelerationEnabledInput() {
    return this._sidecarAccelerationEnabled;
  }

  // usage_reporting_enabled - computed: false, optional: true, required: false
  private _usageReportingEnabled?: boolean | cdktf.IResolvable; 
  public get usageReportingEnabled() {
    return this.getBooleanAttribute('usage_reporting_enabled');
  }
  public set usageReportingEnabled(value: boolean | cdktf.IResolvable) {
    this._usageReportingEnabled = value;
  }
  public resetUsageReportingEnabled() {
    this._usageReportingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageReportingEnabledInput() {
    return this._usageReportingEnabled;
  }

  // usage_reporting_initial_delay - computed: false, optional: true, required: false
  private _usageReportingInitialDelay?: string; 
  public get usageReportingInitialDelay() {
    return this.getStringAttribute('usage_reporting_initial_delay');
  }
  public set usageReportingInitialDelay(value: string) {
    this._usageReportingInitialDelay = value;
  }
  public resetUsageReportingInitialDelay() {
    this._usageReportingInitialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageReportingInitialDelayInput() {
    return this._usageReportingInitialDelay;
  }

  // usage_reporting_interval - computed: false, optional: true, required: false
  private _usageReportingInterval?: string; 
  public get usageReportingInterval() {
    return this.getStringAttribute('usage_reporting_interval');
  }
  public set usageReportingInterval(value: string) {
    this._usageReportingInterval = value;
  }
  public resetUsageReportingInterval() {
    this._usageReportingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageReportingIntervalInput() {
    return this._usageReportingInterval;
  }

  // use_internal_dataplane_driver - computed: false, optional: true, required: false
  private _useInternalDataplaneDriver?: boolean | cdktf.IResolvable; 
  public get useInternalDataplaneDriver() {
    return this.getBooleanAttribute('use_internal_dataplane_driver');
  }
  public set useInternalDataplaneDriver(value: boolean | cdktf.IResolvable) {
    this._useInternalDataplaneDriver = value;
  }
  public resetUseInternalDataplaneDriver() {
    this._useInternalDataplaneDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInternalDataplaneDriverInput() {
    return this._useInternalDataplaneDriver;
  }

  // vxlan_enabled - computed: false, optional: true, required: false
  private _vxlanEnabled?: boolean | cdktf.IResolvable; 
  public get vxlanEnabled() {
    return this.getBooleanAttribute('vxlan_enabled');
  }
  public set vxlanEnabled(value: boolean | cdktf.IResolvable) {
    this._vxlanEnabled = value;
  }
  public resetVxlanEnabled() {
    this._vxlanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanEnabledInput() {
    return this._vxlanEnabled;
  }

  // vxlan_mtu - computed: false, optional: true, required: false
  private _vxlanMtu?: number; 
  public get vxlanMtu() {
    return this.getNumberAttribute('vxlan_mtu');
  }
  public set vxlanMtu(value: number) {
    this._vxlanMtu = value;
  }
  public resetVxlanMtu() {
    this._vxlanMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanMtuInput() {
    return this._vxlanMtu;
  }

  // vxlan_mtuv6 - computed: false, optional: true, required: false
  private _vxlanMtuv6?: number; 
  public get vxlanMtuv6() {
    return this.getNumberAttribute('vxlan_mtuv6');
  }
  public set vxlanMtuv6(value: number) {
    this._vxlanMtuv6 = value;
  }
  public resetVxlanMtuv6() {
    this._vxlanMtuv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanMtuv6Input() {
    return this._vxlanMtuv6;
  }

  // vxlan_port - computed: false, optional: true, required: false
  private _vxlanPort?: number; 
  public get vxlanPort() {
    return this.getNumberAttribute('vxlan_port');
  }
  public set vxlanPort(value: number) {
    this._vxlanPort = value;
  }
  public resetVxlanPort() {
    this._vxlanPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanPortInput() {
    return this._vxlanPort;
  }

  // vxlan_vni - computed: false, optional: true, required: false
  private _vxlanVni?: number; 
  public get vxlanVni() {
    return this.getNumberAttribute('vxlan_vni');
  }
  public set vxlanVni(value: number) {
    this._vxlanVni = value;
  }
  public resetVxlanVni() {
    this._vxlanVni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanVniInput() {
    return this._vxlanVni;
  }

  // windows_manage_firewall_rules - computed: false, optional: true, required: false
  private _windowsManageFirewallRules?: string; 
  public get windowsManageFirewallRules() {
    return this.getStringAttribute('windows_manage_firewall_rules');
  }
  public set windowsManageFirewallRules(value: string) {
    this._windowsManageFirewallRules = value;
  }
  public resetWindowsManageFirewallRules() {
    this._windowsManageFirewallRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsManageFirewallRulesInput() {
    return this._windowsManageFirewallRules;
  }

  // wireguard_enabled - computed: false, optional: true, required: false
  private _wireguardEnabled?: boolean | cdktf.IResolvable; 
  public get wireguardEnabled() {
    return this.getBooleanAttribute('wireguard_enabled');
  }
  public set wireguardEnabled(value: boolean | cdktf.IResolvable) {
    this._wireguardEnabled = value;
  }
  public resetWireguardEnabled() {
    this._wireguardEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireguardEnabledInput() {
    return this._wireguardEnabled;
  }

  // wireguard_enabled_v6 - computed: false, optional: true, required: false
  private _wireguardEnabledV6?: boolean | cdktf.IResolvable; 
  public get wireguardEnabledV6() {
    return this.getBooleanAttribute('wireguard_enabled_v6');
  }
  public set wireguardEnabledV6(value: boolean | cdktf.IResolvable) {
    this._wireguardEnabledV6 = value;
  }
  public resetWireguardEnabledV6() {
    this._wireguardEnabledV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireguardEnabledV6Input() {
    return this._wireguardEnabledV6;
  }

  // wireguard_host_encryption_enabled - computed: false, optional: true, required: false
  private _wireguardHostEncryptionEnabled?: boolean | cdktf.IResolvable; 
  public get wireguardHostEncryptionEnabled() {
    return this.getBooleanAttribute('wireguard_host_encryption_enabled');
  }
  public set wireguardHostEncryptionEnabled(value: boolean | cdktf.IResolvable) {
    this._wireguardHostEncryptionEnabled = value;
  }
  public resetWireguardHostEncryptionEnabled() {
    this._wireguardHostEncryptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireguardHostEncryptionEnabledInput() {
    return this._wireguardHostEncryptionEnabled;
  }

  // wireguard_interface_name - computed: false, optional: true, required: false
  private _wireguardInterfaceName?: string; 
  public get wireguardInterfaceName() {
    return this.getStringAttribute('wireguard_interface_name');
  }
  public set wireguardInterfaceName(value: string) {
    this._wireguardInterfaceName = value;
  }
  public resetWireguardInterfaceName() {
    this._wireguardInterfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireguardInterfaceNameInput() {
    return this._wireguardInterfaceName;
  }

  // wireguard_interface_name_v6 - computed: false, optional: true, required: false
  private _wireguardInterfaceNameV6?: string; 
  public get wireguardInterfaceNameV6() {
    return this.getStringAttribute('wireguard_interface_name_v6');
  }
  public set wireguardInterfaceNameV6(value: string) {
    this._wireguardInterfaceNameV6 = value;
  }
  public resetWireguardInterfaceNameV6() {
    this._wireguardInterfaceNameV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireguardInterfaceNameV6Input() {
    return this._wireguardInterfaceNameV6;
  }

  // wireguard_keep_alive - computed: false, optional: true, required: false
  private _wireguardKeepAlive?: string; 
  public get wireguardKeepAlive() {
    return this.getStringAttribute('wireguard_keep_alive');
  }
  public set wireguardKeepAlive(value: string) {
    this._wireguardKeepAlive = value;
  }
  public resetWireguardKeepAlive() {
    this._wireguardKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireguardKeepAliveInput() {
    return this._wireguardKeepAlive;
  }

  // wireguard_listening_port - computed: false, optional: true, required: false
  private _wireguardListeningPort?: number; 
  public get wireguardListeningPort() {
    return this.getNumberAttribute('wireguard_listening_port');
  }
  public set wireguardListeningPort(value: number) {
    this._wireguardListeningPort = value;
  }
  public resetWireguardListeningPort() {
    this._wireguardListeningPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireguardListeningPortInput() {
    return this._wireguardListeningPort;
  }

  // wireguard_listening_port_v6 - computed: false, optional: true, required: false
  private _wireguardListeningPortV6?: number; 
  public get wireguardListeningPortV6() {
    return this.getNumberAttribute('wireguard_listening_port_v6');
  }
  public set wireguardListeningPortV6(value: number) {
    this._wireguardListeningPortV6 = value;
  }
  public resetWireguardListeningPortV6() {
    this._wireguardListeningPortV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireguardListeningPortV6Input() {
    return this._wireguardListeningPortV6;
  }

  // wireguard_mtu - computed: false, optional: true, required: false
  private _wireguardMtu?: number; 
  public get wireguardMtu() {
    return this.getNumberAttribute('wireguard_mtu');
  }
  public set wireguardMtu(value: number) {
    this._wireguardMtu = value;
  }
  public resetWireguardMtu() {
    this._wireguardMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireguardMtuInput() {
    return this._wireguardMtu;
  }

  // wireguard_mtuv6 - computed: false, optional: true, required: false
  private _wireguardMtuv6?: number; 
  public get wireguardMtuv6() {
    return this.getNumberAttribute('wireguard_mtuv6');
  }
  public set wireguardMtuv6(value: number) {
    this._wireguardMtuv6 = value;
  }
  public resetWireguardMtuv6() {
    this._wireguardMtuv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireguardMtuv6Input() {
    return this._wireguardMtuv6;
  }

  // wireguard_routing_rule_priority - computed: false, optional: true, required: false
  private _wireguardRoutingRulePriority?: number; 
  public get wireguardRoutingRulePriority() {
    return this.getNumberAttribute('wireguard_routing_rule_priority');
  }
  public set wireguardRoutingRulePriority(value: number) {
    this._wireguardRoutingRulePriority = value;
  }
  public resetWireguardRoutingRulePriority() {
    this._wireguardRoutingRulePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wireguardRoutingRulePriorityInput() {
    return this._wireguardRoutingRulePriority;
  }

  // workload_source_spoofing - computed: false, optional: true, required: false
  private _workloadSourceSpoofing?: string; 
  public get workloadSourceSpoofing() {
    return this.getStringAttribute('workload_source_spoofing');
  }
  public set workloadSourceSpoofing(value: string) {
    this._workloadSourceSpoofing = value;
  }
  public resetWorkloadSourceSpoofing() {
    this._workloadSourceSpoofing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadSourceSpoofingInput() {
    return this._workloadSourceSpoofing;
  }

  // xdp_enabled - computed: false, optional: true, required: false
  private _xdpEnabled?: boolean | cdktf.IResolvable; 
  public get xdpEnabled() {
    return this.getBooleanAttribute('xdp_enabled');
  }
  public set xdpEnabled(value: boolean | cdktf.IResolvable) {
    this._xdpEnabled = value;
  }
  public resetXdpEnabled() {
    this._xdpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xdpEnabledInput() {
    return this._xdpEnabled;
  }

  // xdp_refresh_interval - computed: false, optional: true, required: false
  private _xdpRefreshInterval?: string; 
  public get xdpRefreshInterval() {
    return this.getStringAttribute('xdp_refresh_interval');
  }
  public set xdpRefreshInterval(value: string) {
    this._xdpRefreshInterval = value;
  }
  public resetXdpRefreshInterval() {
    this._xdpRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xdpRefreshIntervalInput() {
    return this._xdpRefreshInterval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest k8s_crd_projectcalico_org_felix_configuration_v1_manifest}
*/
export class DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_crd_projectcalico_org_felix_configuration_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest to import
  * @param importFromId The id of the existing DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCrdProjectcalicoOrgFelixConfigurationV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_crd_projectcalico_org_felix_configuration_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/crd_projectcalico_org_felix_configuration_v1_manifest k8s_crd_projectcalico_org_felix_configuration_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_crd_projectcalico_org_felix_configuration_v1_manifest',
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
  private _metadata = new DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpec) {
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
      metadata: dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCrdProjectcalicoOrgFelixConfigurationV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
